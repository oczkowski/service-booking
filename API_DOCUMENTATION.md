# Service Booking API Documentation

## Overview

This document describes the REST API endpoints for the Service Booking application. The API handles organization management, subscription billing through Stripe, and webhook integrations.

## Base URL

```
https://your-domain.com/api
```

## Authentication

Most endpoints require Auth0 authentication. Include the session token in your requests.

---

## Management Endpoints

### Organizations

#### Create Organization

**POST** `/api/management/organization`

Creates a new organization with a 14-day trial subscription.

**Authentication:** Required (Auth0 session)

**Request Body:**
```json
{
  "legalName": "string (1-100 characters)",
  "subscriptionLevel": "SMALL" | "MEDIUM" | "LARGE" | "ENTERPRISE"
}
```

**Response:**
- **201 Created:** Organization created successfully
- **400 Bad Request:** Invalid input data
- **401 Unauthorized:** User not authenticated
- **404 Not Found:** Business customer not found
- **409 Conflict:** User already belongs to an organization

**Success Response Body:**
```json
{
  "organization": {
    "id": 1,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z",
    "legalName": "Example Company Ltd",
    "subscriptionId": 1
  },
  "subscription": {
    "id": 1,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "level": "TRIAL",
    "price": 0.00,
    "status": "TRIAL",
    "trialEndsAt": "2024-01-15T00:00:00.000Z",
    "stripeCustomerId": null,
    "stripeSubscriptionId": null
  }
}
```

#### Subscribe to Plan

**POST** `/api/management/organization/{organizationId}/subscribe`

Creates a Stripe Checkout session for upgrading from trial to a paid subscription plan.

**Authentication:** Required (Auth0 session - Organization owner only)

**URL Parameters:**
- `organizationId` (integer): The ID of the organization to subscribe

**Request Body:**
```json
{
  "subscriptionLevel": "SMALL" | "MEDIUM" | "LARGE" | "ENTERPRISE",
  "successUrl": "https://your-domain.com/success",
  "cancelUrl": "https://your-domain.com/cancel"
}
```

**Response:**
- **200 OK:** Checkout session created
- **400 Bad Request:** Invalid input data
- **401 Unauthorized:** User not authenticated
- **403 Forbidden:** User is not organization owner
- **404 Not Found:** Organization or business customer not found
- **409 Conflict:** Organization already has active subscription

**Success Response Body:**
```json
{
  "checkoutUrl": "https://checkout.stripe.com/pay/cs_...",
  "sessionId": "cs_..."
}
```

**Subscription Levels & Pricing:**

| Level | Price (GBP) | Businesses | Services | Appointments/Month |
|-------|-------------|------------|----------|-------------------|
| SMALL | £13.99 | 1 | 20 | 2,000 |
| MEDIUM | £79.99 | 3 | 60 | 10,000 |
| LARGE | £199.99 | 10 | 200 | 80,000 |
| ENTERPRISE | Custom | Unlimited | Unlimited | Unlimited |

---

## Webhook Endpoints

### Auth0 User Creation

**POST** `/api/internal/webhooks/auth0`

Webhook endpoint for Auth0 user registration. Creates a business customer record when a new user signs up.

**Authentication:** Secret-based (AUTH0_HOOK_SECRET)

**Request Body:**
```json
{
  "secret": "your-auth0-hook-secret",
  "email": "user@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "mobile": "+44123456789" // optional
}
```

**Response:**
- **201 Created:** Business customer created
- **400 Bad Request:** Invalid input data
- **401 Unauthorized:** Invalid secret

**Success Response Body:**
```json
{
  "id": 1,
  "email": "user@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "mobile": "+44123456789"
}
```

### Stripe Webhooks

**POST** `/api/internal/webhooks/stripe`

Webhook endpoint for Stripe subscription and payment events. Handles subscription lifecycle management.

**Authentication:** Stripe webhook signature verification

**Supported Events:**
- `checkout.session.completed`: Activates subscription after successful payment
- `customer.subscription.created`: Marks subscription as active
- `customer.subscription.updated`: Updates subscription status
- `customer.subscription.deleted`: Marks subscription as canceled
- `invoice.payment_succeeded`: Reactivates subscription after successful payment
- `invoice.payment_failed`: Marks subscription as past due

**Response:**
- **200 OK:** Webhook processed successfully
- **400 Bad Request:** Invalid signature or missing header
- **500 Internal Server Error:** Processing error

---

## Data Models

### Subscription Status

```typescript
enum SubscriptionStatus {
  TRIAL = "TRIAL"           // Free trial period
  ACTIVE = "ACTIVE"         // Paid and active
  PAST_DUE = "PAST_DUE"     // Payment failed
  CANCELED = "CANCELED"     // Subscription canceled
  UNPAID = "UNPAID"         // Payment required
}
```

### Subscription Level

```typescript
enum SubscriptionLevel {
  SMALL = "SMALL"           // 1 Business, 20 Services, 2,000 Appointments/Monthly
  MEDIUM = "MEDIUM"         // 3 Businesses, 60 Services, 10,000 Appointments/Monthly
  LARGE = "LARGE"           // 10 Businesses, 200 Services, 80,000 Appointments/Monthly
  ENTERPRISE = "ENTERPRISE" // Custom enterprise solution
}
```

### Organization Role

```typescript
enum OrganizationRole {
  OWNER = "OWNER"       // Manages billing, subscriptions, can remove business
  ADMIN = "ADMIN"       // Manages business settings, pricing, services
  MANAGER = "MANAGER"   // Manages staff appointments, cancellations, refunds
  STAFF = "STAFF"       // Manages own appointments only
}
```

---

## Error Handling

All endpoints return errors in the following format:

```json
{
  "error": "Error message or validation details"
}
```

**Common HTTP Status Codes:**
- `200 OK`: Request successful
- `201 Created`: Resource created successfully
- `400 Bad Request`: Invalid request data
- `401 Unauthorized`: Authentication required
- `403 Forbidden`: Insufficient permissions
- `404 Not Found`: Resource not found
- `409 Conflict`: Resource conflict (e.g., already exists)
- `500 Internal Server Error`: Server error

---

## Environment Variables

Required environment variables for API functionality:

```env
# Auth0
AUTH0_HOOK_SECRET=your-auth0-webhook-secret

# Stripe
STRIPE_SECRET_KEY=sk_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Database
DATABASE_URL=your-database-connection-string
```

---

## Integration Flow

### Typical User Journey

1. **User Registration**: User signs up via Auth0
2. **Webhook Processing**: Auth0 webhook creates business customer record
3. **Organization Creation**: User creates organization (gets 14-day trial)
4. **Subscription Upgrade**: User chooses paid plan and completes Stripe checkout
5. **Subscription Activation**: Stripe webhook activates subscription
6. **Ongoing Management**: Stripe webhooks handle subscription lifecycle events

### Webhook Security

- **Auth0 Webhooks**: Verified using shared secret
- **Stripe Webhooks**: Verified using Stripe signature headers
- Both webhook endpoints validate signatures before processing events

---

## Rate Limiting

Currently no rate limiting is implemented. Consider implementing rate limiting for production use.

## API Versioning

This API is currently unversioned. Future versions should include version numbers in the URL path (e.g., `/api/v1/`).