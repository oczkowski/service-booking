import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { SubscriptionLevel, PaymentFrequency } from '@/generated/prisma'
import { MonthlyPlanPriceIds, YearlyPlanPriceIds } from '@/lib/plans';

export interface SubscriptionData {
  subscriptionLevel: SubscriptionLevel | null
  paymentFrequency: PaymentFrequency
  price: number
  priceId?: MonthlyPlanPriceIds | YearlyPlanPriceIds
  features: string[]
}

export interface OrganizationData {
  legalName: string
  firstLineOfAddress: string
  secondLineOfAddress?: string
  city: string
  postCode: string
}

interface OrganizationSetupStore {
  // Data
  organizationData: OrganizationData
  subscriptionData: SubscriptionData

  // Actions
  updateField: <K extends keyof OrganizationData>(field: K, value: OrganizationData[K]) => void
  setSubscription: (subscription: Partial<SubscriptionData>) => void
  reset: () => void

  // Validation
  errors: Record<string, string>
  setErrors: (errors: Record<string, string>) => void
  clearError: (field: string) => void

  // Computed
  isComplete: () => boolean
}

const initialOrganizationData: OrganizationData = {
  legalName: '',
  firstLineOfAddress: '',
  secondLineOfAddress: '',
  city: '',
  postCode: ''
}

const initialSubscriptionData: SubscriptionData = {
  subscriptionLevel: null,
  paymentFrequency: PaymentFrequency.MONTHLY,
  priceId: MonthlyPlanPriceIds.SMALL,
  price: 0,
  features: []
}

export const useOrganizationSetup = create<OrganizationSetupStore>()(
  persist(
    (set, get) => ({
      organizationData: initialOrganizationData,
      subscriptionData: initialSubscriptionData,
      errors: {},

      updateField: (field, value) => {
        set((state) => ({
          organizationData: {
            ...state.organizationData,
            [field]: value
          }
        }))

        // Clear error when user updates field
        const { errors } = get()
        if (errors[field as string]) {
          get().clearError(field as string)
        }

        get().clearError('submit')
      },

      setSubscription: (subscription) => {
        set((state) => ({
          subscriptionData: {
            ...state.subscriptionData,
            ...subscription
          }
        }))
      },

      setErrors: (errors) => set({ errors }),

      clearError: (field) => {
        set((state) => {
          const newErrors = { ...state.errors }
          delete newErrors[field]
          return { errors: newErrors }
        })
      },

      isComplete: () => {
        const { organizationData, subscriptionData } = get()
        return !!(
          subscriptionData.subscriptionLevel &&
          organizationData.legalName.trim() &&
          organizationData.firstLineOfAddress.trim() &&
          organizationData.city.trim() &&
          organizationData.postCode.trim()
        )
      },

      reset: () => set({
        organizationData: initialOrganizationData,
        subscriptionData: initialSubscriptionData,
        errors: {}
      })
    }),
    {
      name: 'organization-setup',
      storage: {
        getItem: (name) => {
          const str = sessionStorage.getItem(name)
          return str ? JSON.parse(str) : null
        },
        setItem: (name, value) => {
          sessionStorage.setItem(name, JSON.stringify(value))
        },
        removeItem: (name) => sessionStorage.removeItem(name),
      },
    }
  )
)