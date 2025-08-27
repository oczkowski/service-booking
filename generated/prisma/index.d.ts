
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model Business
 * 
 */
export type Business = $Result.DefaultSelection<Prisma.$BusinessPayload>
/**
 * Model BusinessCustomer
 * 
 */
export type BusinessCustomer = $Result.DefaultSelection<Prisma.$BusinessCustomerPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model OrganizationOnBusinessCustomer
 * 
 */
export type OrganizationOnBusinessCustomer = $Result.DefaultSelection<Prisma.$OrganizationOnBusinessCustomerPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model AvailabilityGroup
 * 
 */
export type AvailabilityGroup = $Result.DefaultSelection<Prisma.$AvailabilityGroupPayload>
/**
 * Model DailyAvailability
 * 
 */
export type DailyAvailability = $Result.DefaultSelection<Prisma.$DailyAvailabilityPayload>
/**
 * Model TimeBlock
 * 
 */
export type TimeBlock = $Result.DefaultSelection<Prisma.$TimeBlockPayload>
/**
 * Model BookableSlot
 * 
 */
export type BookableSlot = $Result.DefaultSelection<Prisma.$BookableSlotPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  UPCOMING: 'UPCOMING',
  ATTENDED: 'ATTENDED',
  MISSED: 'MISSED',
  CANCELLED: 'CANCELLED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const PaymentFrequency: {
  MONTHLY: 'MONTHLY',
  ANNUALY: 'ANNUALY'
};

export type PaymentFrequency = (typeof PaymentFrequency)[keyof typeof PaymentFrequency]


export const SubscriptionLevel: {
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE',
  ENTERPRISE: 'ENTERPRISE'
};

export type SubscriptionLevel = (typeof SubscriptionLevel)[keyof typeof SubscriptionLevel]


export const SubscriptionStatus: {
  TRIAL: 'TRIAL',
  ACTIVE: 'ACTIVE',
  PAST_DUE: 'PAST_DUE',
  CANCELED: 'CANCELED',
  UNPAID: 'UNPAID'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]


export const OrganizationRole: {
  OWNER: 'OWNER',
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  STAFF: 'STAFF'
};

export type OrganizationRole = (typeof OrganizationRole)[keyof typeof OrganizationRole]


export const WeekDay: {
  SUNDAY: 'SUNDAY',
  MONDAY: 'MONDAY',
  TUESDAY: 'TUESDAY',
  WEDNESDAY: 'WEDNESDAY',
  THURSDAY: 'THURSDAY',
  FRIDAY: 'FRIDAY',
  SATURDAY: 'SATURDAY'
};

export type WeekDay = (typeof WeekDay)[keyof typeof WeekDay]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type PaymentFrequency = $Enums.PaymentFrequency

export const PaymentFrequency: typeof $Enums.PaymentFrequency

export type SubscriptionLevel = $Enums.SubscriptionLevel

export const SubscriptionLevel: typeof $Enums.SubscriptionLevel

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

export type OrganizationRole = $Enums.OrganizationRole

export const OrganizationRole: typeof $Enums.OrganizationRole

export type WeekDay = $Enums.WeekDay

export const WeekDay: typeof $Enums.WeekDay

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Appointments
 * const appointments = await prisma.appointment.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Appointments
   * const appointments = await prisma.appointment.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.business`: Exposes CRUD operations for the **Business** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Businesses
    * const businesses = await prisma.business.findMany()
    * ```
    */
  get business(): Prisma.BusinessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.businessCustomer`: Exposes CRUD operations for the **BusinessCustomer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessCustomers
    * const businessCustomers = await prisma.businessCustomer.findMany()
    * ```
    */
  get businessCustomer(): Prisma.BusinessCustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organizationOnBusinessCustomer`: Exposes CRUD operations for the **OrganizationOnBusinessCustomer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrganizationOnBusinessCustomers
    * const organizationOnBusinessCustomers = await prisma.organizationOnBusinessCustomer.findMany()
    * ```
    */
  get organizationOnBusinessCustomer(): Prisma.OrganizationOnBusinessCustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availabilityGroup`: Exposes CRUD operations for the **AvailabilityGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailabilityGroups
    * const availabilityGroups = await prisma.availabilityGroup.findMany()
    * ```
    */
  get availabilityGroup(): Prisma.AvailabilityGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyAvailability`: Exposes CRUD operations for the **DailyAvailability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyAvailabilities
    * const dailyAvailabilities = await prisma.dailyAvailability.findMany()
    * ```
    */
  get dailyAvailability(): Prisma.DailyAvailabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.timeBlock`: Exposes CRUD operations for the **TimeBlock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimeBlocks
    * const timeBlocks = await prisma.timeBlock.findMany()
    * ```
    */
  get timeBlock(): Prisma.TimeBlockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookableSlot`: Exposes CRUD operations for the **BookableSlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookableSlots
    * const bookableSlots = await prisma.bookableSlot.findMany()
    * ```
    */
  get bookableSlot(): Prisma.BookableSlotDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Appointment: 'Appointment',
    Business: 'Business',
    BusinessCustomer: 'BusinessCustomer',
    Customer: 'Customer',
    Organization: 'Organization',
    OrganizationOnBusinessCustomer: 'OrganizationOnBusinessCustomer',
    Subscription: 'Subscription',
    Service: 'Service',
    AvailabilityGroup: 'AvailabilityGroup',
    DailyAvailability: 'DailyAvailability',
    TimeBlock: 'TimeBlock',
    BookableSlot: 'BookableSlot'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "appointment" | "business" | "businessCustomer" | "customer" | "organization" | "organizationOnBusinessCustomer" | "subscription" | "service" | "availabilityGroup" | "dailyAvailability" | "timeBlock" | "bookableSlot"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      Business: {
        payload: Prisma.$BusinessPayload<ExtArgs>
        fields: Prisma.BusinessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          findFirst: {
            args: Prisma.BusinessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          findMany: {
            args: Prisma.BusinessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          create: {
            args: Prisma.BusinessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          createMany: {
            args: Prisma.BusinessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          delete: {
            args: Prisma.BusinessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          update: {
            args: Prisma.BusinessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          deleteMany: {
            args: Prisma.BusinessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusinessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          upsert: {
            args: Prisma.BusinessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          aggregate: {
            args: Prisma.BusinessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusiness>
          }
          groupBy: {
            args: Prisma.BusinessGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessCountAggregateOutputType> | number
          }
        }
      }
      BusinessCustomer: {
        payload: Prisma.$BusinessCustomerPayload<ExtArgs>
        fields: Prisma.BusinessCustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessCustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessCustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCustomerPayload>
          }
          findFirst: {
            args: Prisma.BusinessCustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessCustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCustomerPayload>
          }
          findMany: {
            args: Prisma.BusinessCustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCustomerPayload>[]
          }
          create: {
            args: Prisma.BusinessCustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCustomerPayload>
          }
          createMany: {
            args: Prisma.BusinessCustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessCustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCustomerPayload>[]
          }
          delete: {
            args: Prisma.BusinessCustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCustomerPayload>
          }
          update: {
            args: Prisma.BusinessCustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCustomerPayload>
          }
          deleteMany: {
            args: Prisma.BusinessCustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessCustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusinessCustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCustomerPayload>[]
          }
          upsert: {
            args: Prisma.BusinessCustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCustomerPayload>
          }
          aggregate: {
            args: Prisma.BusinessCustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusinessCustomer>
          }
          groupBy: {
            args: Prisma.BusinessCustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessCustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessCustomerCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessCustomerCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      OrganizationOnBusinessCustomer: {
        payload: Prisma.$OrganizationOnBusinessCustomerPayload<ExtArgs>
        fields: Prisma.OrganizationOnBusinessCustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationOnBusinessCustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationOnBusinessCustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationOnBusinessCustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationOnBusinessCustomerPayload>
          }
          findFirst: {
            args: Prisma.OrganizationOnBusinessCustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationOnBusinessCustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationOnBusinessCustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationOnBusinessCustomerPayload>
          }
          findMany: {
            args: Prisma.OrganizationOnBusinessCustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationOnBusinessCustomerPayload>[]
          }
          create: {
            args: Prisma.OrganizationOnBusinessCustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationOnBusinessCustomerPayload>
          }
          createMany: {
            args: Prisma.OrganizationOnBusinessCustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationOnBusinessCustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationOnBusinessCustomerPayload>[]
          }
          delete: {
            args: Prisma.OrganizationOnBusinessCustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationOnBusinessCustomerPayload>
          }
          update: {
            args: Prisma.OrganizationOnBusinessCustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationOnBusinessCustomerPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationOnBusinessCustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationOnBusinessCustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationOnBusinessCustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationOnBusinessCustomerPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationOnBusinessCustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationOnBusinessCustomerPayload>
          }
          aggregate: {
            args: Prisma.OrganizationOnBusinessCustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizationOnBusinessCustomer>
          }
          groupBy: {
            args: Prisma.OrganizationOnBusinessCustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationOnBusinessCustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationOnBusinessCustomerCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationOnBusinessCustomerCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      AvailabilityGroup: {
        payload: Prisma.$AvailabilityGroupPayload<ExtArgs>
        fields: Prisma.AvailabilityGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailabilityGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailabilityGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityGroupPayload>
          }
          findFirst: {
            args: Prisma.AvailabilityGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailabilityGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityGroupPayload>
          }
          findMany: {
            args: Prisma.AvailabilityGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityGroupPayload>[]
          }
          create: {
            args: Prisma.AvailabilityGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityGroupPayload>
          }
          createMany: {
            args: Prisma.AvailabilityGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailabilityGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityGroupPayload>[]
          }
          delete: {
            args: Prisma.AvailabilityGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityGroupPayload>
          }
          update: {
            args: Prisma.AvailabilityGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityGroupPayload>
          }
          deleteMany: {
            args: Prisma.AvailabilityGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailabilityGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailabilityGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityGroupPayload>[]
          }
          upsert: {
            args: Prisma.AvailabilityGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityGroupPayload>
          }
          aggregate: {
            args: Prisma.AvailabilityGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailabilityGroup>
          }
          groupBy: {
            args: Prisma.AvailabilityGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailabilityGroupCountArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityGroupCountAggregateOutputType> | number
          }
        }
      }
      DailyAvailability: {
        payload: Prisma.$DailyAvailabilityPayload<ExtArgs>
        fields: Prisma.DailyAvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyAvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyAvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyAvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyAvailabilityPayload>
          }
          findFirst: {
            args: Prisma.DailyAvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyAvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyAvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyAvailabilityPayload>
          }
          findMany: {
            args: Prisma.DailyAvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyAvailabilityPayload>[]
          }
          create: {
            args: Prisma.DailyAvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyAvailabilityPayload>
          }
          createMany: {
            args: Prisma.DailyAvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyAvailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyAvailabilityPayload>[]
          }
          delete: {
            args: Prisma.DailyAvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyAvailabilityPayload>
          }
          update: {
            args: Prisma.DailyAvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyAvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.DailyAvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyAvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyAvailabilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyAvailabilityPayload>[]
          }
          upsert: {
            args: Prisma.DailyAvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyAvailabilityPayload>
          }
          aggregate: {
            args: Prisma.DailyAvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyAvailability>
          }
          groupBy: {
            args: Prisma.DailyAvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyAvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyAvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<DailyAvailabilityCountAggregateOutputType> | number
          }
        }
      }
      TimeBlock: {
        payload: Prisma.$TimeBlockPayload<ExtArgs>
        fields: Prisma.TimeBlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimeBlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimeBlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload>
          }
          findFirst: {
            args: Prisma.TimeBlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimeBlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload>
          }
          findMany: {
            args: Prisma.TimeBlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload>[]
          }
          create: {
            args: Prisma.TimeBlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload>
          }
          createMany: {
            args: Prisma.TimeBlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimeBlockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload>[]
          }
          delete: {
            args: Prisma.TimeBlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload>
          }
          update: {
            args: Prisma.TimeBlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload>
          }
          deleteMany: {
            args: Prisma.TimeBlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimeBlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TimeBlockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload>[]
          }
          upsert: {
            args: Prisma.TimeBlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeBlockPayload>
          }
          aggregate: {
            args: Prisma.TimeBlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimeBlock>
          }
          groupBy: {
            args: Prisma.TimeBlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimeBlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimeBlockCountArgs<ExtArgs>
            result: $Utils.Optional<TimeBlockCountAggregateOutputType> | number
          }
        }
      }
      BookableSlot: {
        payload: Prisma.$BookableSlotPayload<ExtArgs>
        fields: Prisma.BookableSlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookableSlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookableSlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookableSlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookableSlotPayload>
          }
          findFirst: {
            args: Prisma.BookableSlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookableSlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookableSlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookableSlotPayload>
          }
          findMany: {
            args: Prisma.BookableSlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookableSlotPayload>[]
          }
          create: {
            args: Prisma.BookableSlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookableSlotPayload>
          }
          createMany: {
            args: Prisma.BookableSlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookableSlotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookableSlotPayload>[]
          }
          delete: {
            args: Prisma.BookableSlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookableSlotPayload>
          }
          update: {
            args: Prisma.BookableSlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookableSlotPayload>
          }
          deleteMany: {
            args: Prisma.BookableSlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookableSlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookableSlotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookableSlotPayload>[]
          }
          upsert: {
            args: Prisma.BookableSlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookableSlotPayload>
          }
          aggregate: {
            args: Prisma.BookableSlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookableSlot>
          }
          groupBy: {
            args: Prisma.BookableSlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookableSlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookableSlotCountArgs<ExtArgs>
            result: $Utils.Optional<BookableSlotCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    appointment?: AppointmentOmit
    business?: BusinessOmit
    businessCustomer?: BusinessCustomerOmit
    customer?: CustomerOmit
    organization?: OrganizationOmit
    organizationOnBusinessCustomer?: OrganizationOnBusinessCustomerOmit
    subscription?: SubscriptionOmit
    service?: ServiceOmit
    availabilityGroup?: AvailabilityGroupOmit
    dailyAvailability?: DailyAvailabilityOmit
    timeBlock?: TimeBlockOmit
    bookableSlot?: BookableSlotOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BusinessCountOutputType
   */

  export type BusinessCountOutputType = {
    services: number
  }

  export type BusinessCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | BusinessCountOutputTypeCountServicesArgs
  }

  // Custom InputTypes
  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCountOutputType
     */
    select?: BusinessCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    appointments: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | CustomerCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    business: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | OrganizationCountOutputTypeCountBusinessArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountBusinessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    appointments: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | ServiceCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Count Type AvailabilityGroupCountOutputType
   */

  export type AvailabilityGroupCountOutputType = {
    dailyAvailability: number
    services: number
    BookableSlot: number
  }

  export type AvailabilityGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyAvailability?: boolean | AvailabilityGroupCountOutputTypeCountDailyAvailabilityArgs
    services?: boolean | AvailabilityGroupCountOutputTypeCountServicesArgs
    BookableSlot?: boolean | AvailabilityGroupCountOutputTypeCountBookableSlotArgs
  }

  // Custom InputTypes
  /**
   * AvailabilityGroupCountOutputType without action
   */
  export type AvailabilityGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityGroupCountOutputType
     */
    select?: AvailabilityGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvailabilityGroupCountOutputType without action
   */
  export type AvailabilityGroupCountOutputTypeCountDailyAvailabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyAvailabilityWhereInput
  }

  /**
   * AvailabilityGroupCountOutputType without action
   */
  export type AvailabilityGroupCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }

  /**
   * AvailabilityGroupCountOutputType without action
   */
  export type AvailabilityGroupCountOutputTypeCountBookableSlotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookableSlotWhereInput
  }


  /**
   * Count Type DailyAvailabilityCountOutputType
   */

  export type DailyAvailabilityCountOutputType = {
    availabilityBlocks: number
  }

  export type DailyAvailabilityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availabilityBlocks?: boolean | DailyAvailabilityCountOutputTypeCountAvailabilityBlocksArgs
  }

  // Custom InputTypes
  /**
   * DailyAvailabilityCountOutputType without action
   */
  export type DailyAvailabilityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyAvailabilityCountOutputType
     */
    select?: DailyAvailabilityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DailyAvailabilityCountOutputType without action
   */
  export type DailyAvailabilityCountOutputTypeCountAvailabilityBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeBlockWhereInput
  }


  /**
   * Count Type BookableSlotCountOutputType
   */

  export type BookableSlotCountOutputType = {
    Appointment: number
  }

  export type BookableSlotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Appointment?: boolean | BookableSlotCountOutputTypeCountAppointmentArgs
  }

  // Custom InputTypes
  /**
   * BookableSlotCountOutputType without action
   */
  export type BookableSlotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookableSlotCountOutputType
     */
    select?: BookableSlotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookableSlotCountOutputType without action
   */
  export type BookableSlotCountOutputTypeCountAppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    customerId: number | null
    serviceId: number | null
    slotId: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    customerId: number | null
    serviceId: number | null
    slotId: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    customerId: number | null
    serviceId: number | null
    slotId: number | null
    status: $Enums.Status | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    customerId: number | null
    serviceId: number | null
    slotId: number | null
    status: $Enums.Status | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    customerId: number
    serviceId: number
    slotId: number
    status: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    customerId?: true
    serviceId?: true
    slotId?: true
  }

  export type AppointmentSumAggregateInputType = {
    customerId?: true
    serviceId?: true
    slotId?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    customerId?: true
    serviceId?: true
    slotId?: true
    status?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    customerId?: true
    serviceId?: true
    slotId?: true
    status?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    customerId?: true
    serviceId?: true
    slotId?: true
    status?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    customerId: number
    serviceId: number
    slotId: number
    status: $Enums.Status
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customerId?: boolean
    serviceId?: boolean
    slotId?: boolean
    status?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    slot?: boolean | BookableSlotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customerId?: boolean
    serviceId?: boolean
    slotId?: boolean
    status?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    slot?: boolean | BookableSlotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customerId?: boolean
    serviceId?: boolean
    slotId?: boolean
    status?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    slot?: boolean | BookableSlotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customerId?: boolean
    serviceId?: boolean
    slotId?: boolean
    status?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "customerId" | "serviceId" | "slotId" | "status", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    slot?: boolean | BookableSlotDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    slot?: boolean | BookableSlotDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    slot?: boolean | BookableSlotDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
      slot: Prisma.$BookableSlotPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      customerId: number
      serviceId: number
      slotId: number
      status: $Enums.Status
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    slot<T extends BookableSlotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookableSlotDefaultArgs<ExtArgs>>): Prisma__BookableSlotClient<$Result.GetResult<Prisma.$BookableSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'String'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
    readonly updatedAt: FieldRef<"Appointment", 'DateTime'>
    readonly customerId: FieldRef<"Appointment", 'Int'>
    readonly serviceId: FieldRef<"Appointment", 'Int'>
    readonly slotId: FieldRef<"Appointment", 'Int'>
    readonly status: FieldRef<"Appointment", 'Status'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model Business
   */

  export type AggregateBusiness = {
    _count: BusinessCountAggregateOutputType | null
    _avg: BusinessAvgAggregateOutputType | null
    _sum: BusinessSumAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  export type BusinessAvgAggregateOutputType = {
    id: number | null
    organizationId: number | null
  }

  export type BusinessSumAggregateOutputType = {
    id: number | null
    organizationId: number | null
  }

  export type BusinessMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    businessName: string | null
    contactNumber: string | null
    organizationId: number | null
  }

  export type BusinessMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    businessName: string | null
    contactNumber: string | null
    organizationId: number | null
  }

  export type BusinessCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    businessName: number
    contactNumber: number
    organizationId: number
    _all: number
  }


  export type BusinessAvgAggregateInputType = {
    id?: true
    organizationId?: true
  }

  export type BusinessSumAggregateInputType = {
    id?: true
    organizationId?: true
  }

  export type BusinessMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    businessName?: true
    contactNumber?: true
    organizationId?: true
  }

  export type BusinessMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    businessName?: true
    contactNumber?: true
    organizationId?: true
  }

  export type BusinessCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    businessName?: true
    contactNumber?: true
    organizationId?: true
    _all?: true
  }

  export type BusinessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Business to aggregate.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Businesses
    **/
    _count?: true | BusinessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessMaxAggregateInputType
  }

  export type GetBusinessAggregateType<T extends BusinessAggregateArgs> = {
        [P in keyof T & keyof AggregateBusiness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusiness[P]>
      : GetScalarType<T[P], AggregateBusiness[P]>
  }




  export type BusinessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessWhereInput
    orderBy?: BusinessOrderByWithAggregationInput | BusinessOrderByWithAggregationInput[]
    by: BusinessScalarFieldEnum[] | BusinessScalarFieldEnum
    having?: BusinessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessCountAggregateInputType | true
    _avg?: BusinessAvgAggregateInputType
    _sum?: BusinessSumAggregateInputType
    _min?: BusinessMinAggregateInputType
    _max?: BusinessMaxAggregateInputType
  }

  export type BusinessGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    businessName: string
    contactNumber: string
    organizationId: number
    _count: BusinessCountAggregateOutputType | null
    _avg: BusinessAvgAggregateOutputType | null
    _sum: BusinessSumAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  type GetBusinessGroupByPayload<T extends BusinessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessGroupByOutputType[P]>
        }
      >
    >


  export type BusinessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    businessName?: boolean
    contactNumber?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    services?: boolean | Business$servicesArgs<ExtArgs>
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    businessName?: boolean
    contactNumber?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    businessName?: boolean
    contactNumber?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    businessName?: boolean
    contactNumber?: boolean
    organizationId?: boolean
  }

  export type BusinessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "businessName" | "contactNumber" | "organizationId", ExtArgs["result"]["business"]>
  export type BusinessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    services?: boolean | Business$servicesArgs<ExtArgs>
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BusinessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type BusinessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $BusinessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Business"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      services: Prisma.$ServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      businessName: string
      contactNumber: string
      organizationId: number
    }, ExtArgs["result"]["business"]>
    composites: {}
  }

  type BusinessGetPayload<S extends boolean | null | undefined | BusinessDefaultArgs> = $Result.GetResult<Prisma.$BusinessPayload, S>

  type BusinessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessCountAggregateInputType | true
    }

  export interface BusinessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Business'], meta: { name: 'Business' } }
    /**
     * Find zero or one Business that matches the filter.
     * @param {BusinessFindUniqueArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessFindUniqueArgs>(args: SelectSubset<T, BusinessFindUniqueArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Business that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessFindUniqueOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Business that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessFindFirstArgs>(args?: SelectSubset<T, BusinessFindFirstArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Business that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Businesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Businesses
     * const businesses = await prisma.business.findMany()
     * 
     * // Get first 10 Businesses
     * const businesses = await prisma.business.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessWithIdOnly = await prisma.business.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessFindManyArgs>(args?: SelectSubset<T, BusinessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Business.
     * @param {BusinessCreateArgs} args - Arguments to create a Business.
     * @example
     * // Create one Business
     * const Business = await prisma.business.create({
     *   data: {
     *     // ... data to create a Business
     *   }
     * })
     * 
     */
    create<T extends BusinessCreateArgs>(args: SelectSubset<T, BusinessCreateArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Businesses.
     * @param {BusinessCreateManyArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessCreateManyArgs>(args?: SelectSubset<T, BusinessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Businesses and returns the data saved in the database.
     * @param {BusinessCreateManyAndReturnArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Businesses and only return the `id`
     * const businessWithIdOnly = await prisma.business.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Business.
     * @param {BusinessDeleteArgs} args - Arguments to delete one Business.
     * @example
     * // Delete one Business
     * const Business = await prisma.business.delete({
     *   where: {
     *     // ... filter to delete one Business
     *   }
     * })
     * 
     */
    delete<T extends BusinessDeleteArgs>(args: SelectSubset<T, BusinessDeleteArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Business.
     * @param {BusinessUpdateArgs} args - Arguments to update one Business.
     * @example
     * // Update one Business
     * const business = await prisma.business.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessUpdateArgs>(args: SelectSubset<T, BusinessUpdateArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Businesses.
     * @param {BusinessDeleteManyArgs} args - Arguments to filter Businesses to delete.
     * @example
     * // Delete a few Businesses
     * const { count } = await prisma.business.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessDeleteManyArgs>(args?: SelectSubset<T, BusinessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessUpdateManyArgs>(args: SelectSubset<T, BusinessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Businesses and returns the data updated in the database.
     * @param {BusinessUpdateManyAndReturnArgs} args - Arguments to update many Businesses.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Businesses and only return the `id`
     * const businessWithIdOnly = await prisma.business.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BusinessUpdateManyAndReturnArgs>(args: SelectSubset<T, BusinessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Business.
     * @param {BusinessUpsertArgs} args - Arguments to update or create a Business.
     * @example
     * // Update or create a Business
     * const business = await prisma.business.upsert({
     *   create: {
     *     // ... data to create a Business
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Business we want to update
     *   }
     * })
     */
    upsert<T extends BusinessUpsertArgs>(args: SelectSubset<T, BusinessUpsertArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCountArgs} args - Arguments to filter Businesses to count.
     * @example
     * // Count the number of Businesses
     * const count = await prisma.business.count({
     *   where: {
     *     // ... the filter for the Businesses we want to count
     *   }
     * })
    **/
    count<T extends BusinessCountArgs>(
      args?: Subset<T, BusinessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessAggregateArgs>(args: Subset<T, BusinessAggregateArgs>): Prisma.PrismaPromise<GetBusinessAggregateType<T>>

    /**
     * Group by Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessGroupByArgs['orderBy'] }
        : { orderBy?: BusinessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Business model
   */
  readonly fields: BusinessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Business.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    services<T extends Business$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Business$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Business model
   */
  interface BusinessFieldRefs {
    readonly id: FieldRef<"Business", 'Int'>
    readonly createdAt: FieldRef<"Business", 'DateTime'>
    readonly updatedAt: FieldRef<"Business", 'DateTime'>
    readonly businessName: FieldRef<"Business", 'String'>
    readonly contactNumber: FieldRef<"Business", 'String'>
    readonly organizationId: FieldRef<"Business", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Business findUnique
   */
  export type BusinessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business findUniqueOrThrow
   */
  export type BusinessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business findFirst
   */
  export type BusinessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business findFirstOrThrow
   */
  export type BusinessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business findMany
   */
  export type BusinessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Businesses to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business create
   */
  export type BusinessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The data needed to create a Business.
     */
    data: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
  }

  /**
   * Business createMany
   */
  export type BusinessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Businesses.
     */
    data: BusinessCreateManyInput | BusinessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Business createManyAndReturn
   */
  export type BusinessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * The data used to create many Businesses.
     */
    data: BusinessCreateManyInput | BusinessCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Business update
   */
  export type BusinessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The data needed to update a Business.
     */
    data: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
    /**
     * Choose, which Business to update.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business updateMany
   */
  export type BusinessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Businesses.
     */
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyInput>
    /**
     * Filter which Businesses to update
     */
    where?: BusinessWhereInput
    /**
     * Limit how many Businesses to update.
     */
    limit?: number
  }

  /**
   * Business updateManyAndReturn
   */
  export type BusinessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * The data used to update Businesses.
     */
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyInput>
    /**
     * Filter which Businesses to update
     */
    where?: BusinessWhereInput
    /**
     * Limit how many Businesses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Business upsert
   */
  export type BusinessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The filter to search for the Business to update in case it exists.
     */
    where: BusinessWhereUniqueInput
    /**
     * In case the Business found by the `where` argument doesn't exist, create a new Business with this data.
     */
    create: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
    /**
     * In case the Business was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
  }

  /**
   * Business delete
   */
  export type BusinessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter which Business to delete.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business deleteMany
   */
  export type BusinessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Businesses to delete
     */
    where?: BusinessWhereInput
    /**
     * Limit how many Businesses to delete.
     */
    limit?: number
  }

  /**
   * Business.services
   */
  export type Business$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Business without action
   */
  export type BusinessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
  }


  /**
   * Model BusinessCustomer
   */

  export type AggregateBusinessCustomer = {
    _count: BusinessCustomerCountAggregateOutputType | null
    _avg: BusinessCustomerAvgAggregateOutputType | null
    _sum: BusinessCustomerSumAggregateOutputType | null
    _min: BusinessCustomerMinAggregateOutputType | null
    _max: BusinessCustomerMaxAggregateOutputType | null
  }

  export type BusinessCustomerAvgAggregateOutputType = {
    id: number | null
  }

  export type BusinessCustomerSumAggregateOutputType = {
    id: number | null
  }

  export type BusinessCustomerMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    mobile: string | null
    firstName: string | null
    lastName: string | null
  }

  export type BusinessCustomerMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    mobile: string | null
    firstName: string | null
    lastName: string | null
  }

  export type BusinessCustomerCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    email: number
    mobile: number
    firstName: number
    lastName: number
    _all: number
  }


  export type BusinessCustomerAvgAggregateInputType = {
    id?: true
  }

  export type BusinessCustomerSumAggregateInputType = {
    id?: true
  }

  export type BusinessCustomerMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    mobile?: true
    firstName?: true
    lastName?: true
  }

  export type BusinessCustomerMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    mobile?: true
    firstName?: true
    lastName?: true
  }

  export type BusinessCustomerCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    mobile?: true
    firstName?: true
    lastName?: true
    _all?: true
  }

  export type BusinessCustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessCustomer to aggregate.
     */
    where?: BusinessCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessCustomers to fetch.
     */
    orderBy?: BusinessCustomerOrderByWithRelationInput | BusinessCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessCustomers
    **/
    _count?: true | BusinessCustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessCustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessCustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessCustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessCustomerMaxAggregateInputType
  }

  export type GetBusinessCustomerAggregateType<T extends BusinessCustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessCustomer[P]>
      : GetScalarType<T[P], AggregateBusinessCustomer[P]>
  }




  export type BusinessCustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessCustomerWhereInput
    orderBy?: BusinessCustomerOrderByWithAggregationInput | BusinessCustomerOrderByWithAggregationInput[]
    by: BusinessCustomerScalarFieldEnum[] | BusinessCustomerScalarFieldEnum
    having?: BusinessCustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessCustomerCountAggregateInputType | true
    _avg?: BusinessCustomerAvgAggregateInputType
    _sum?: BusinessCustomerSumAggregateInputType
    _min?: BusinessCustomerMinAggregateInputType
    _max?: BusinessCustomerMaxAggregateInputType
  }

  export type BusinessCustomerGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    email: string
    mobile: string | null
    firstName: string
    lastName: string
    _count: BusinessCustomerCountAggregateOutputType | null
    _avg: BusinessCustomerAvgAggregateOutputType | null
    _sum: BusinessCustomerSumAggregateOutputType | null
    _min: BusinessCustomerMinAggregateOutputType | null
    _max: BusinessCustomerMaxAggregateOutputType | null
  }

  type GetBusinessCustomerGroupByPayload<T extends BusinessCustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessCustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessCustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessCustomerGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessCustomerGroupByOutputType[P]>
        }
      >
    >


  export type BusinessCustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    mobile?: boolean
    firstName?: boolean
    lastName?: boolean
    organization?: boolean | BusinessCustomer$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["businessCustomer"]>

  export type BusinessCustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    mobile?: boolean
    firstName?: boolean
    lastName?: boolean
  }, ExtArgs["result"]["businessCustomer"]>

  export type BusinessCustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    mobile?: boolean
    firstName?: boolean
    lastName?: boolean
  }, ExtArgs["result"]["businessCustomer"]>

  export type BusinessCustomerSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    mobile?: boolean
    firstName?: boolean
    lastName?: boolean
  }

  export type BusinessCustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "email" | "mobile" | "firstName" | "lastName", ExtArgs["result"]["businessCustomer"]>
  export type BusinessCustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | BusinessCustomer$organizationArgs<ExtArgs>
  }
  export type BusinessCustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BusinessCustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BusinessCustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusinessCustomer"
    objects: {
      organization: Prisma.$OrganizationOnBusinessCustomerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      email: string
      mobile: string | null
      firstName: string
      lastName: string
    }, ExtArgs["result"]["businessCustomer"]>
    composites: {}
  }

  type BusinessCustomerGetPayload<S extends boolean | null | undefined | BusinessCustomerDefaultArgs> = $Result.GetResult<Prisma.$BusinessCustomerPayload, S>

  type BusinessCustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessCustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessCustomerCountAggregateInputType | true
    }

  export interface BusinessCustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusinessCustomer'], meta: { name: 'BusinessCustomer' } }
    /**
     * Find zero or one BusinessCustomer that matches the filter.
     * @param {BusinessCustomerFindUniqueArgs} args - Arguments to find a BusinessCustomer
     * @example
     * // Get one BusinessCustomer
     * const businessCustomer = await prisma.businessCustomer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessCustomerFindUniqueArgs>(args: SelectSubset<T, BusinessCustomerFindUniqueArgs<ExtArgs>>): Prisma__BusinessCustomerClient<$Result.GetResult<Prisma.$BusinessCustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BusinessCustomer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessCustomerFindUniqueOrThrowArgs} args - Arguments to find a BusinessCustomer
     * @example
     * // Get one BusinessCustomer
     * const businessCustomer = await prisma.businessCustomer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessCustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessCustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessCustomerClient<$Result.GetResult<Prisma.$BusinessCustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessCustomer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCustomerFindFirstArgs} args - Arguments to find a BusinessCustomer
     * @example
     * // Get one BusinessCustomer
     * const businessCustomer = await prisma.businessCustomer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessCustomerFindFirstArgs>(args?: SelectSubset<T, BusinessCustomerFindFirstArgs<ExtArgs>>): Prisma__BusinessCustomerClient<$Result.GetResult<Prisma.$BusinessCustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessCustomer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCustomerFindFirstOrThrowArgs} args - Arguments to find a BusinessCustomer
     * @example
     * // Get one BusinessCustomer
     * const businessCustomer = await prisma.businessCustomer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessCustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessCustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessCustomerClient<$Result.GetResult<Prisma.$BusinessCustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BusinessCustomers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessCustomers
     * const businessCustomers = await prisma.businessCustomer.findMany()
     * 
     * // Get first 10 BusinessCustomers
     * const businessCustomers = await prisma.businessCustomer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessCustomerWithIdOnly = await prisma.businessCustomer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessCustomerFindManyArgs>(args?: SelectSubset<T, BusinessCustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessCustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BusinessCustomer.
     * @param {BusinessCustomerCreateArgs} args - Arguments to create a BusinessCustomer.
     * @example
     * // Create one BusinessCustomer
     * const BusinessCustomer = await prisma.businessCustomer.create({
     *   data: {
     *     // ... data to create a BusinessCustomer
     *   }
     * })
     * 
     */
    create<T extends BusinessCustomerCreateArgs>(args: SelectSubset<T, BusinessCustomerCreateArgs<ExtArgs>>): Prisma__BusinessCustomerClient<$Result.GetResult<Prisma.$BusinessCustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BusinessCustomers.
     * @param {BusinessCustomerCreateManyArgs} args - Arguments to create many BusinessCustomers.
     * @example
     * // Create many BusinessCustomers
     * const businessCustomer = await prisma.businessCustomer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessCustomerCreateManyArgs>(args?: SelectSubset<T, BusinessCustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BusinessCustomers and returns the data saved in the database.
     * @param {BusinessCustomerCreateManyAndReturnArgs} args - Arguments to create many BusinessCustomers.
     * @example
     * // Create many BusinessCustomers
     * const businessCustomer = await prisma.businessCustomer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BusinessCustomers and only return the `id`
     * const businessCustomerWithIdOnly = await prisma.businessCustomer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessCustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessCustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessCustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BusinessCustomer.
     * @param {BusinessCustomerDeleteArgs} args - Arguments to delete one BusinessCustomer.
     * @example
     * // Delete one BusinessCustomer
     * const BusinessCustomer = await prisma.businessCustomer.delete({
     *   where: {
     *     // ... filter to delete one BusinessCustomer
     *   }
     * })
     * 
     */
    delete<T extends BusinessCustomerDeleteArgs>(args: SelectSubset<T, BusinessCustomerDeleteArgs<ExtArgs>>): Prisma__BusinessCustomerClient<$Result.GetResult<Prisma.$BusinessCustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BusinessCustomer.
     * @param {BusinessCustomerUpdateArgs} args - Arguments to update one BusinessCustomer.
     * @example
     * // Update one BusinessCustomer
     * const businessCustomer = await prisma.businessCustomer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessCustomerUpdateArgs>(args: SelectSubset<T, BusinessCustomerUpdateArgs<ExtArgs>>): Prisma__BusinessCustomerClient<$Result.GetResult<Prisma.$BusinessCustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BusinessCustomers.
     * @param {BusinessCustomerDeleteManyArgs} args - Arguments to filter BusinessCustomers to delete.
     * @example
     * // Delete a few BusinessCustomers
     * const { count } = await prisma.businessCustomer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessCustomerDeleteManyArgs>(args?: SelectSubset<T, BusinessCustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessCustomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessCustomers
     * const businessCustomer = await prisma.businessCustomer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessCustomerUpdateManyArgs>(args: SelectSubset<T, BusinessCustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessCustomers and returns the data updated in the database.
     * @param {BusinessCustomerUpdateManyAndReturnArgs} args - Arguments to update many BusinessCustomers.
     * @example
     * // Update many BusinessCustomers
     * const businessCustomer = await prisma.businessCustomer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BusinessCustomers and only return the `id`
     * const businessCustomerWithIdOnly = await prisma.businessCustomer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BusinessCustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, BusinessCustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessCustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BusinessCustomer.
     * @param {BusinessCustomerUpsertArgs} args - Arguments to update or create a BusinessCustomer.
     * @example
     * // Update or create a BusinessCustomer
     * const businessCustomer = await prisma.businessCustomer.upsert({
     *   create: {
     *     // ... data to create a BusinessCustomer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessCustomer we want to update
     *   }
     * })
     */
    upsert<T extends BusinessCustomerUpsertArgs>(args: SelectSubset<T, BusinessCustomerUpsertArgs<ExtArgs>>): Prisma__BusinessCustomerClient<$Result.GetResult<Prisma.$BusinessCustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BusinessCustomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCustomerCountArgs} args - Arguments to filter BusinessCustomers to count.
     * @example
     * // Count the number of BusinessCustomers
     * const count = await prisma.businessCustomer.count({
     *   where: {
     *     // ... the filter for the BusinessCustomers we want to count
     *   }
     * })
    **/
    count<T extends BusinessCustomerCountArgs>(
      args?: Subset<T, BusinessCustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessCustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessCustomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessCustomerAggregateArgs>(args: Subset<T, BusinessCustomerAggregateArgs>): Prisma.PrismaPromise<GetBusinessCustomerAggregateType<T>>

    /**
     * Group by BusinessCustomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessCustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessCustomerGroupByArgs['orderBy'] }
        : { orderBy?: BusinessCustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessCustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusinessCustomer model
   */
  readonly fields: BusinessCustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessCustomer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessCustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends BusinessCustomer$organizationArgs<ExtArgs> = {}>(args?: Subset<T, BusinessCustomer$organizationArgs<ExtArgs>>): Prisma__OrganizationOnBusinessCustomerClient<$Result.GetResult<Prisma.$OrganizationOnBusinessCustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BusinessCustomer model
   */
  interface BusinessCustomerFieldRefs {
    readonly id: FieldRef<"BusinessCustomer", 'Int'>
    readonly createdAt: FieldRef<"BusinessCustomer", 'DateTime'>
    readonly updatedAt: FieldRef<"BusinessCustomer", 'DateTime'>
    readonly email: FieldRef<"BusinessCustomer", 'String'>
    readonly mobile: FieldRef<"BusinessCustomer", 'String'>
    readonly firstName: FieldRef<"BusinessCustomer", 'String'>
    readonly lastName: FieldRef<"BusinessCustomer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BusinessCustomer findUnique
   */
  export type BusinessCustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCustomer
     */
    select?: BusinessCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCustomer
     */
    omit?: BusinessCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCustomerInclude<ExtArgs> | null
    /**
     * Filter, which BusinessCustomer to fetch.
     */
    where: BusinessCustomerWhereUniqueInput
  }

  /**
   * BusinessCustomer findUniqueOrThrow
   */
  export type BusinessCustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCustomer
     */
    select?: BusinessCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCustomer
     */
    omit?: BusinessCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCustomerInclude<ExtArgs> | null
    /**
     * Filter, which BusinessCustomer to fetch.
     */
    where: BusinessCustomerWhereUniqueInput
  }

  /**
   * BusinessCustomer findFirst
   */
  export type BusinessCustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCustomer
     */
    select?: BusinessCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCustomer
     */
    omit?: BusinessCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCustomerInclude<ExtArgs> | null
    /**
     * Filter, which BusinessCustomer to fetch.
     */
    where?: BusinessCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessCustomers to fetch.
     */
    orderBy?: BusinessCustomerOrderByWithRelationInput | BusinessCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessCustomers.
     */
    cursor?: BusinessCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessCustomers.
     */
    distinct?: BusinessCustomerScalarFieldEnum | BusinessCustomerScalarFieldEnum[]
  }

  /**
   * BusinessCustomer findFirstOrThrow
   */
  export type BusinessCustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCustomer
     */
    select?: BusinessCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCustomer
     */
    omit?: BusinessCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCustomerInclude<ExtArgs> | null
    /**
     * Filter, which BusinessCustomer to fetch.
     */
    where?: BusinessCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessCustomers to fetch.
     */
    orderBy?: BusinessCustomerOrderByWithRelationInput | BusinessCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessCustomers.
     */
    cursor?: BusinessCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessCustomers.
     */
    distinct?: BusinessCustomerScalarFieldEnum | BusinessCustomerScalarFieldEnum[]
  }

  /**
   * BusinessCustomer findMany
   */
  export type BusinessCustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCustomer
     */
    select?: BusinessCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCustomer
     */
    omit?: BusinessCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCustomerInclude<ExtArgs> | null
    /**
     * Filter, which BusinessCustomers to fetch.
     */
    where?: BusinessCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessCustomers to fetch.
     */
    orderBy?: BusinessCustomerOrderByWithRelationInput | BusinessCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessCustomers.
     */
    cursor?: BusinessCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessCustomers.
     */
    skip?: number
    distinct?: BusinessCustomerScalarFieldEnum | BusinessCustomerScalarFieldEnum[]
  }

  /**
   * BusinessCustomer create
   */
  export type BusinessCustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCustomer
     */
    select?: BusinessCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCustomer
     */
    omit?: BusinessCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a BusinessCustomer.
     */
    data: XOR<BusinessCustomerCreateInput, BusinessCustomerUncheckedCreateInput>
  }

  /**
   * BusinessCustomer createMany
   */
  export type BusinessCustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusinessCustomers.
     */
    data: BusinessCustomerCreateManyInput | BusinessCustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusinessCustomer createManyAndReturn
   */
  export type BusinessCustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCustomer
     */
    select?: BusinessCustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCustomer
     */
    omit?: BusinessCustomerOmit<ExtArgs> | null
    /**
     * The data used to create many BusinessCustomers.
     */
    data: BusinessCustomerCreateManyInput | BusinessCustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusinessCustomer update
   */
  export type BusinessCustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCustomer
     */
    select?: BusinessCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCustomer
     */
    omit?: BusinessCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a BusinessCustomer.
     */
    data: XOR<BusinessCustomerUpdateInput, BusinessCustomerUncheckedUpdateInput>
    /**
     * Choose, which BusinessCustomer to update.
     */
    where: BusinessCustomerWhereUniqueInput
  }

  /**
   * BusinessCustomer updateMany
   */
  export type BusinessCustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusinessCustomers.
     */
    data: XOR<BusinessCustomerUpdateManyMutationInput, BusinessCustomerUncheckedUpdateManyInput>
    /**
     * Filter which BusinessCustomers to update
     */
    where?: BusinessCustomerWhereInput
    /**
     * Limit how many BusinessCustomers to update.
     */
    limit?: number
  }

  /**
   * BusinessCustomer updateManyAndReturn
   */
  export type BusinessCustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCustomer
     */
    select?: BusinessCustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCustomer
     */
    omit?: BusinessCustomerOmit<ExtArgs> | null
    /**
     * The data used to update BusinessCustomers.
     */
    data: XOR<BusinessCustomerUpdateManyMutationInput, BusinessCustomerUncheckedUpdateManyInput>
    /**
     * Filter which BusinessCustomers to update
     */
    where?: BusinessCustomerWhereInput
    /**
     * Limit how many BusinessCustomers to update.
     */
    limit?: number
  }

  /**
   * BusinessCustomer upsert
   */
  export type BusinessCustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCustomer
     */
    select?: BusinessCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCustomer
     */
    omit?: BusinessCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the BusinessCustomer to update in case it exists.
     */
    where: BusinessCustomerWhereUniqueInput
    /**
     * In case the BusinessCustomer found by the `where` argument doesn't exist, create a new BusinessCustomer with this data.
     */
    create: XOR<BusinessCustomerCreateInput, BusinessCustomerUncheckedCreateInput>
    /**
     * In case the BusinessCustomer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessCustomerUpdateInput, BusinessCustomerUncheckedUpdateInput>
  }

  /**
   * BusinessCustomer delete
   */
  export type BusinessCustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCustomer
     */
    select?: BusinessCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCustomer
     */
    omit?: BusinessCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCustomerInclude<ExtArgs> | null
    /**
     * Filter which BusinessCustomer to delete.
     */
    where: BusinessCustomerWhereUniqueInput
  }

  /**
   * BusinessCustomer deleteMany
   */
  export type BusinessCustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessCustomers to delete
     */
    where?: BusinessCustomerWhereInput
    /**
     * Limit how many BusinessCustomers to delete.
     */
    limit?: number
  }

  /**
   * BusinessCustomer.organization
   */
  export type BusinessCustomer$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationOnBusinessCustomer
     */
    select?: OrganizationOnBusinessCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationOnBusinessCustomer
     */
    omit?: OrganizationOnBusinessCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationOnBusinessCustomerInclude<ExtArgs> | null
    where?: OrganizationOnBusinessCustomerWhereInput
  }

  /**
   * BusinessCustomer without action
   */
  export type BusinessCustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCustomer
     */
    select?: BusinessCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCustomer
     */
    omit?: BusinessCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCustomerInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    mobile: string | null
    firstName: string | null
    lastName: string | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    mobile: string | null
    firstName: string | null
    lastName: string | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    email: number
    mobile: number
    firstName: number
    lastName: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    mobile?: true
    firstName?: true
    lastName?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    mobile?: true
    firstName?: true
    lastName?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    mobile?: true
    firstName?: true
    lastName?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    email: string
    mobile: string | null
    firstName: string | null
    lastName: string | null
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    mobile?: boolean
    firstName?: boolean
    lastName?: boolean
    appointments?: boolean | Customer$appointmentsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    mobile?: boolean
    firstName?: boolean
    lastName?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    mobile?: boolean
    firstName?: boolean
    lastName?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    mobile?: boolean
    firstName?: boolean
    lastName?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "email" | "mobile" | "firstName" | "lastName", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | Customer$appointmentsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      email: string
      mobile: string | null
      firstName: string | null
      lastName: string | null
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointments<T extends Customer$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'Int'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly mobile: FieldRef<"Customer", 'String'>
    readonly firstName: FieldRef<"Customer", 'String'>
    readonly lastName: FieldRef<"Customer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.appointments
   */
  export type Customer$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationAvgAggregateOutputType = {
    id: number | null
    subscriptionId: number | null
  }

  export type OrganizationSumAggregateOutputType = {
    id: number | null
    subscriptionId: number | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    legalName: string | null
    firstLineOfAddress: string | null
    secondLineOfAddress: string | null
    city: string | null
    postCode: string | null
    stripeCustomerId: string | null
    subscriptionId: number | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    legalName: string | null
    firstLineOfAddress: string | null
    secondLineOfAddress: string | null
    city: string | null
    postCode: string | null
    stripeCustomerId: string | null
    subscriptionId: number | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    legalName: number
    firstLineOfAddress: number
    secondLineOfAddress: number
    city: number
    postCode: number
    stripeCustomerId: number
    subscriptionId: number
    _all: number
  }


  export type OrganizationAvgAggregateInputType = {
    id?: true
    subscriptionId?: true
  }

  export type OrganizationSumAggregateInputType = {
    id?: true
    subscriptionId?: true
  }

  export type OrganizationMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    legalName?: true
    firstLineOfAddress?: true
    secondLineOfAddress?: true
    city?: true
    postCode?: true
    stripeCustomerId?: true
    subscriptionId?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    legalName?: true
    firstLineOfAddress?: true
    secondLineOfAddress?: true
    city?: true
    postCode?: true
    stripeCustomerId?: true
    subscriptionId?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    legalName?: true
    firstLineOfAddress?: true
    secondLineOfAddress?: true
    city?: true
    postCode?: true
    stripeCustomerId?: true
    subscriptionId?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _avg?: OrganizationAvgAggregateInputType
    _sum?: OrganizationSumAggregateInputType
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    legalName: string
    firstLineOfAddress: string
    secondLineOfAddress: string | null
    city: string
    postCode: string
    stripeCustomerId: string | null
    subscriptionId: number
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    legalName?: boolean
    firstLineOfAddress?: boolean
    secondLineOfAddress?: boolean
    city?: boolean
    postCode?: boolean
    stripeCustomerId?: boolean
    subscriptionId?: boolean
    businessCustomers?: boolean | Organization$businessCustomersArgs<ExtArgs>
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
    business?: boolean | Organization$businessArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    legalName?: boolean
    firstLineOfAddress?: boolean
    secondLineOfAddress?: boolean
    city?: boolean
    postCode?: boolean
    stripeCustomerId?: boolean
    subscriptionId?: boolean
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    legalName?: boolean
    firstLineOfAddress?: boolean
    secondLineOfAddress?: boolean
    city?: boolean
    postCode?: boolean
    stripeCustomerId?: boolean
    subscriptionId?: boolean
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    legalName?: boolean
    firstLineOfAddress?: boolean
    secondLineOfAddress?: boolean
    city?: boolean
    postCode?: boolean
    stripeCustomerId?: boolean
    subscriptionId?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "legalName" | "firstLineOfAddress" | "secondLineOfAddress" | "city" | "postCode" | "stripeCustomerId" | "subscriptionId", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    businessCustomers?: boolean | Organization$businessCustomersArgs<ExtArgs>
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
    business?: boolean | Organization$businessArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      businessCustomers: Prisma.$OrganizationOnBusinessCustomerPayload<ExtArgs> | null
      subscription: Prisma.$SubscriptionPayload<ExtArgs>
      business: Prisma.$BusinessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      legalName: string
      firstLineOfAddress: string
      secondLineOfAddress: string | null
      city: string
      postCode: string
      stripeCustomerId: string | null
      subscriptionId: number
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    businessCustomers<T extends Organization$businessCustomersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$businessCustomersArgs<ExtArgs>>): Prisma__OrganizationOnBusinessCustomerClient<$Result.GetResult<Prisma.$OrganizationOnBusinessCustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subscription<T extends SubscriptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionDefaultArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    business<T extends Organization$businessArgs<ExtArgs> = {}>(args?: Subset<T, Organization$businessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'Int'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
    readonly legalName: FieldRef<"Organization", 'String'>
    readonly firstLineOfAddress: FieldRef<"Organization", 'String'>
    readonly secondLineOfAddress: FieldRef<"Organization", 'String'>
    readonly city: FieldRef<"Organization", 'String'>
    readonly postCode: FieldRef<"Organization", 'String'>
    readonly stripeCustomerId: FieldRef<"Organization", 'String'>
    readonly subscriptionId: FieldRef<"Organization", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.businessCustomers
   */
  export type Organization$businessCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationOnBusinessCustomer
     */
    select?: OrganizationOnBusinessCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationOnBusinessCustomer
     */
    omit?: OrganizationOnBusinessCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationOnBusinessCustomerInclude<ExtArgs> | null
    where?: OrganizationOnBusinessCustomerWhereInput
  }

  /**
   * Organization.business
   */
  export type Organization$businessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    where?: BusinessWhereInput
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    cursor?: BusinessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model OrganizationOnBusinessCustomer
   */

  export type AggregateOrganizationOnBusinessCustomer = {
    _count: OrganizationOnBusinessCustomerCountAggregateOutputType | null
    _avg: OrganizationOnBusinessCustomerAvgAggregateOutputType | null
    _sum: OrganizationOnBusinessCustomerSumAggregateOutputType | null
    _min: OrganizationOnBusinessCustomerMinAggregateOutputType | null
    _max: OrganizationOnBusinessCustomerMaxAggregateOutputType | null
  }

  export type OrganizationOnBusinessCustomerAvgAggregateOutputType = {
    organizationId: number | null
    businessCustomerId: number | null
  }

  export type OrganizationOnBusinessCustomerSumAggregateOutputType = {
    organizationId: number | null
    businessCustomerId: number | null
  }

  export type OrganizationOnBusinessCustomerMinAggregateOutputType = {
    organizationId: number | null
    businessCustomerId: number | null
    role: $Enums.OrganizationRole | null
  }

  export type OrganizationOnBusinessCustomerMaxAggregateOutputType = {
    organizationId: number | null
    businessCustomerId: number | null
    role: $Enums.OrganizationRole | null
  }

  export type OrganizationOnBusinessCustomerCountAggregateOutputType = {
    organizationId: number
    businessCustomerId: number
    role: number
    _all: number
  }


  export type OrganizationOnBusinessCustomerAvgAggregateInputType = {
    organizationId?: true
    businessCustomerId?: true
  }

  export type OrganizationOnBusinessCustomerSumAggregateInputType = {
    organizationId?: true
    businessCustomerId?: true
  }

  export type OrganizationOnBusinessCustomerMinAggregateInputType = {
    organizationId?: true
    businessCustomerId?: true
    role?: true
  }

  export type OrganizationOnBusinessCustomerMaxAggregateInputType = {
    organizationId?: true
    businessCustomerId?: true
    role?: true
  }

  export type OrganizationOnBusinessCustomerCountAggregateInputType = {
    organizationId?: true
    businessCustomerId?: true
    role?: true
    _all?: true
  }

  export type OrganizationOnBusinessCustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationOnBusinessCustomer to aggregate.
     */
    where?: OrganizationOnBusinessCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationOnBusinessCustomers to fetch.
     */
    orderBy?: OrganizationOnBusinessCustomerOrderByWithRelationInput | OrganizationOnBusinessCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationOnBusinessCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationOnBusinessCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationOnBusinessCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrganizationOnBusinessCustomers
    **/
    _count?: true | OrganizationOnBusinessCustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationOnBusinessCustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationOnBusinessCustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationOnBusinessCustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationOnBusinessCustomerMaxAggregateInputType
  }

  export type GetOrganizationOnBusinessCustomerAggregateType<T extends OrganizationOnBusinessCustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizationOnBusinessCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizationOnBusinessCustomer[P]>
      : GetScalarType<T[P], AggregateOrganizationOnBusinessCustomer[P]>
  }




  export type OrganizationOnBusinessCustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationOnBusinessCustomerWhereInput
    orderBy?: OrganizationOnBusinessCustomerOrderByWithAggregationInput | OrganizationOnBusinessCustomerOrderByWithAggregationInput[]
    by: OrganizationOnBusinessCustomerScalarFieldEnum[] | OrganizationOnBusinessCustomerScalarFieldEnum
    having?: OrganizationOnBusinessCustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationOnBusinessCustomerCountAggregateInputType | true
    _avg?: OrganizationOnBusinessCustomerAvgAggregateInputType
    _sum?: OrganizationOnBusinessCustomerSumAggregateInputType
    _min?: OrganizationOnBusinessCustomerMinAggregateInputType
    _max?: OrganizationOnBusinessCustomerMaxAggregateInputType
  }

  export type OrganizationOnBusinessCustomerGroupByOutputType = {
    organizationId: number
    businessCustomerId: number
    role: $Enums.OrganizationRole
    _count: OrganizationOnBusinessCustomerCountAggregateOutputType | null
    _avg: OrganizationOnBusinessCustomerAvgAggregateOutputType | null
    _sum: OrganizationOnBusinessCustomerSumAggregateOutputType | null
    _min: OrganizationOnBusinessCustomerMinAggregateOutputType | null
    _max: OrganizationOnBusinessCustomerMaxAggregateOutputType | null
  }

  type GetOrganizationOnBusinessCustomerGroupByPayload<T extends OrganizationOnBusinessCustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationOnBusinessCustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationOnBusinessCustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationOnBusinessCustomerGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationOnBusinessCustomerGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationOnBusinessCustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    organizationId?: boolean
    businessCustomerId?: boolean
    role?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    businessCustomer?: boolean | BusinessCustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationOnBusinessCustomer"]>

  export type OrganizationOnBusinessCustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    organizationId?: boolean
    businessCustomerId?: boolean
    role?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    businessCustomer?: boolean | BusinessCustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationOnBusinessCustomer"]>

  export type OrganizationOnBusinessCustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    organizationId?: boolean
    businessCustomerId?: boolean
    role?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    businessCustomer?: boolean | BusinessCustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationOnBusinessCustomer"]>

  export type OrganizationOnBusinessCustomerSelectScalar = {
    organizationId?: boolean
    businessCustomerId?: boolean
    role?: boolean
  }

  export type OrganizationOnBusinessCustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"organizationId" | "businessCustomerId" | "role", ExtArgs["result"]["organizationOnBusinessCustomer"]>
  export type OrganizationOnBusinessCustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    businessCustomer?: boolean | BusinessCustomerDefaultArgs<ExtArgs>
  }
  export type OrganizationOnBusinessCustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    businessCustomer?: boolean | BusinessCustomerDefaultArgs<ExtArgs>
  }
  export type OrganizationOnBusinessCustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    businessCustomer?: boolean | BusinessCustomerDefaultArgs<ExtArgs>
  }

  export type $OrganizationOnBusinessCustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrganizationOnBusinessCustomer"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      businessCustomer: Prisma.$BusinessCustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      organizationId: number
      businessCustomerId: number
      role: $Enums.OrganizationRole
    }, ExtArgs["result"]["organizationOnBusinessCustomer"]>
    composites: {}
  }

  type OrganizationOnBusinessCustomerGetPayload<S extends boolean | null | undefined | OrganizationOnBusinessCustomerDefaultArgs> = $Result.GetResult<Prisma.$OrganizationOnBusinessCustomerPayload, S>

  type OrganizationOnBusinessCustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationOnBusinessCustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationOnBusinessCustomerCountAggregateInputType | true
    }

  export interface OrganizationOnBusinessCustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrganizationOnBusinessCustomer'], meta: { name: 'OrganizationOnBusinessCustomer' } }
    /**
     * Find zero or one OrganizationOnBusinessCustomer that matches the filter.
     * @param {OrganizationOnBusinessCustomerFindUniqueArgs} args - Arguments to find a OrganizationOnBusinessCustomer
     * @example
     * // Get one OrganizationOnBusinessCustomer
     * const organizationOnBusinessCustomer = await prisma.organizationOnBusinessCustomer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationOnBusinessCustomerFindUniqueArgs>(args: SelectSubset<T, OrganizationOnBusinessCustomerFindUniqueArgs<ExtArgs>>): Prisma__OrganizationOnBusinessCustomerClient<$Result.GetResult<Prisma.$OrganizationOnBusinessCustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrganizationOnBusinessCustomer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationOnBusinessCustomerFindUniqueOrThrowArgs} args - Arguments to find a OrganizationOnBusinessCustomer
     * @example
     * // Get one OrganizationOnBusinessCustomer
     * const organizationOnBusinessCustomer = await prisma.organizationOnBusinessCustomer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationOnBusinessCustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationOnBusinessCustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationOnBusinessCustomerClient<$Result.GetResult<Prisma.$OrganizationOnBusinessCustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationOnBusinessCustomer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationOnBusinessCustomerFindFirstArgs} args - Arguments to find a OrganizationOnBusinessCustomer
     * @example
     * // Get one OrganizationOnBusinessCustomer
     * const organizationOnBusinessCustomer = await prisma.organizationOnBusinessCustomer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationOnBusinessCustomerFindFirstArgs>(args?: SelectSubset<T, OrganizationOnBusinessCustomerFindFirstArgs<ExtArgs>>): Prisma__OrganizationOnBusinessCustomerClient<$Result.GetResult<Prisma.$OrganizationOnBusinessCustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationOnBusinessCustomer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationOnBusinessCustomerFindFirstOrThrowArgs} args - Arguments to find a OrganizationOnBusinessCustomer
     * @example
     * // Get one OrganizationOnBusinessCustomer
     * const organizationOnBusinessCustomer = await prisma.organizationOnBusinessCustomer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationOnBusinessCustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationOnBusinessCustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationOnBusinessCustomerClient<$Result.GetResult<Prisma.$OrganizationOnBusinessCustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrganizationOnBusinessCustomers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationOnBusinessCustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrganizationOnBusinessCustomers
     * const organizationOnBusinessCustomers = await prisma.organizationOnBusinessCustomer.findMany()
     * 
     * // Get first 10 OrganizationOnBusinessCustomers
     * const organizationOnBusinessCustomers = await prisma.organizationOnBusinessCustomer.findMany({ take: 10 })
     * 
     * // Only select the `organizationId`
     * const organizationOnBusinessCustomerWithOrganizationIdOnly = await prisma.organizationOnBusinessCustomer.findMany({ select: { organizationId: true } })
     * 
     */
    findMany<T extends OrganizationOnBusinessCustomerFindManyArgs>(args?: SelectSubset<T, OrganizationOnBusinessCustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationOnBusinessCustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrganizationOnBusinessCustomer.
     * @param {OrganizationOnBusinessCustomerCreateArgs} args - Arguments to create a OrganizationOnBusinessCustomer.
     * @example
     * // Create one OrganizationOnBusinessCustomer
     * const OrganizationOnBusinessCustomer = await prisma.organizationOnBusinessCustomer.create({
     *   data: {
     *     // ... data to create a OrganizationOnBusinessCustomer
     *   }
     * })
     * 
     */
    create<T extends OrganizationOnBusinessCustomerCreateArgs>(args: SelectSubset<T, OrganizationOnBusinessCustomerCreateArgs<ExtArgs>>): Prisma__OrganizationOnBusinessCustomerClient<$Result.GetResult<Prisma.$OrganizationOnBusinessCustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrganizationOnBusinessCustomers.
     * @param {OrganizationOnBusinessCustomerCreateManyArgs} args - Arguments to create many OrganizationOnBusinessCustomers.
     * @example
     * // Create many OrganizationOnBusinessCustomers
     * const organizationOnBusinessCustomer = await prisma.organizationOnBusinessCustomer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationOnBusinessCustomerCreateManyArgs>(args?: SelectSubset<T, OrganizationOnBusinessCustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrganizationOnBusinessCustomers and returns the data saved in the database.
     * @param {OrganizationOnBusinessCustomerCreateManyAndReturnArgs} args - Arguments to create many OrganizationOnBusinessCustomers.
     * @example
     * // Create many OrganizationOnBusinessCustomers
     * const organizationOnBusinessCustomer = await prisma.organizationOnBusinessCustomer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrganizationOnBusinessCustomers and only return the `organizationId`
     * const organizationOnBusinessCustomerWithOrganizationIdOnly = await prisma.organizationOnBusinessCustomer.createManyAndReturn({
     *   select: { organizationId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationOnBusinessCustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationOnBusinessCustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationOnBusinessCustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrganizationOnBusinessCustomer.
     * @param {OrganizationOnBusinessCustomerDeleteArgs} args - Arguments to delete one OrganizationOnBusinessCustomer.
     * @example
     * // Delete one OrganizationOnBusinessCustomer
     * const OrganizationOnBusinessCustomer = await prisma.organizationOnBusinessCustomer.delete({
     *   where: {
     *     // ... filter to delete one OrganizationOnBusinessCustomer
     *   }
     * })
     * 
     */
    delete<T extends OrganizationOnBusinessCustomerDeleteArgs>(args: SelectSubset<T, OrganizationOnBusinessCustomerDeleteArgs<ExtArgs>>): Prisma__OrganizationOnBusinessCustomerClient<$Result.GetResult<Prisma.$OrganizationOnBusinessCustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrganizationOnBusinessCustomer.
     * @param {OrganizationOnBusinessCustomerUpdateArgs} args - Arguments to update one OrganizationOnBusinessCustomer.
     * @example
     * // Update one OrganizationOnBusinessCustomer
     * const organizationOnBusinessCustomer = await prisma.organizationOnBusinessCustomer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationOnBusinessCustomerUpdateArgs>(args: SelectSubset<T, OrganizationOnBusinessCustomerUpdateArgs<ExtArgs>>): Prisma__OrganizationOnBusinessCustomerClient<$Result.GetResult<Prisma.$OrganizationOnBusinessCustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrganizationOnBusinessCustomers.
     * @param {OrganizationOnBusinessCustomerDeleteManyArgs} args - Arguments to filter OrganizationOnBusinessCustomers to delete.
     * @example
     * // Delete a few OrganizationOnBusinessCustomers
     * const { count } = await prisma.organizationOnBusinessCustomer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationOnBusinessCustomerDeleteManyArgs>(args?: SelectSubset<T, OrganizationOnBusinessCustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationOnBusinessCustomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationOnBusinessCustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrganizationOnBusinessCustomers
     * const organizationOnBusinessCustomer = await prisma.organizationOnBusinessCustomer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationOnBusinessCustomerUpdateManyArgs>(args: SelectSubset<T, OrganizationOnBusinessCustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationOnBusinessCustomers and returns the data updated in the database.
     * @param {OrganizationOnBusinessCustomerUpdateManyAndReturnArgs} args - Arguments to update many OrganizationOnBusinessCustomers.
     * @example
     * // Update many OrganizationOnBusinessCustomers
     * const organizationOnBusinessCustomer = await prisma.organizationOnBusinessCustomer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrganizationOnBusinessCustomers and only return the `organizationId`
     * const organizationOnBusinessCustomerWithOrganizationIdOnly = await prisma.organizationOnBusinessCustomer.updateManyAndReturn({
     *   select: { organizationId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationOnBusinessCustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationOnBusinessCustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationOnBusinessCustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrganizationOnBusinessCustomer.
     * @param {OrganizationOnBusinessCustomerUpsertArgs} args - Arguments to update or create a OrganizationOnBusinessCustomer.
     * @example
     * // Update or create a OrganizationOnBusinessCustomer
     * const organizationOnBusinessCustomer = await prisma.organizationOnBusinessCustomer.upsert({
     *   create: {
     *     // ... data to create a OrganizationOnBusinessCustomer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrganizationOnBusinessCustomer we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationOnBusinessCustomerUpsertArgs>(args: SelectSubset<T, OrganizationOnBusinessCustomerUpsertArgs<ExtArgs>>): Prisma__OrganizationOnBusinessCustomerClient<$Result.GetResult<Prisma.$OrganizationOnBusinessCustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrganizationOnBusinessCustomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationOnBusinessCustomerCountArgs} args - Arguments to filter OrganizationOnBusinessCustomers to count.
     * @example
     * // Count the number of OrganizationOnBusinessCustomers
     * const count = await prisma.organizationOnBusinessCustomer.count({
     *   where: {
     *     // ... the filter for the OrganizationOnBusinessCustomers we want to count
     *   }
     * })
    **/
    count<T extends OrganizationOnBusinessCustomerCountArgs>(
      args?: Subset<T, OrganizationOnBusinessCustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationOnBusinessCustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrganizationOnBusinessCustomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationOnBusinessCustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationOnBusinessCustomerAggregateArgs>(args: Subset<T, OrganizationOnBusinessCustomerAggregateArgs>): Prisma.PrismaPromise<GetOrganizationOnBusinessCustomerAggregateType<T>>

    /**
     * Group by OrganizationOnBusinessCustomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationOnBusinessCustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationOnBusinessCustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationOnBusinessCustomerGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationOnBusinessCustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationOnBusinessCustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationOnBusinessCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrganizationOnBusinessCustomer model
   */
  readonly fields: OrganizationOnBusinessCustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrganizationOnBusinessCustomer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationOnBusinessCustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    businessCustomer<T extends BusinessCustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessCustomerDefaultArgs<ExtArgs>>): Prisma__BusinessCustomerClient<$Result.GetResult<Prisma.$BusinessCustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrganizationOnBusinessCustomer model
   */
  interface OrganizationOnBusinessCustomerFieldRefs {
    readonly organizationId: FieldRef<"OrganizationOnBusinessCustomer", 'Int'>
    readonly businessCustomerId: FieldRef<"OrganizationOnBusinessCustomer", 'Int'>
    readonly role: FieldRef<"OrganizationOnBusinessCustomer", 'OrganizationRole'>
  }
    

  // Custom InputTypes
  /**
   * OrganizationOnBusinessCustomer findUnique
   */
  export type OrganizationOnBusinessCustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationOnBusinessCustomer
     */
    select?: OrganizationOnBusinessCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationOnBusinessCustomer
     */
    omit?: OrganizationOnBusinessCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationOnBusinessCustomerInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationOnBusinessCustomer to fetch.
     */
    where: OrganizationOnBusinessCustomerWhereUniqueInput
  }

  /**
   * OrganizationOnBusinessCustomer findUniqueOrThrow
   */
  export type OrganizationOnBusinessCustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationOnBusinessCustomer
     */
    select?: OrganizationOnBusinessCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationOnBusinessCustomer
     */
    omit?: OrganizationOnBusinessCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationOnBusinessCustomerInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationOnBusinessCustomer to fetch.
     */
    where: OrganizationOnBusinessCustomerWhereUniqueInput
  }

  /**
   * OrganizationOnBusinessCustomer findFirst
   */
  export type OrganizationOnBusinessCustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationOnBusinessCustomer
     */
    select?: OrganizationOnBusinessCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationOnBusinessCustomer
     */
    omit?: OrganizationOnBusinessCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationOnBusinessCustomerInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationOnBusinessCustomer to fetch.
     */
    where?: OrganizationOnBusinessCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationOnBusinessCustomers to fetch.
     */
    orderBy?: OrganizationOnBusinessCustomerOrderByWithRelationInput | OrganizationOnBusinessCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationOnBusinessCustomers.
     */
    cursor?: OrganizationOnBusinessCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationOnBusinessCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationOnBusinessCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationOnBusinessCustomers.
     */
    distinct?: OrganizationOnBusinessCustomerScalarFieldEnum | OrganizationOnBusinessCustomerScalarFieldEnum[]
  }

  /**
   * OrganizationOnBusinessCustomer findFirstOrThrow
   */
  export type OrganizationOnBusinessCustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationOnBusinessCustomer
     */
    select?: OrganizationOnBusinessCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationOnBusinessCustomer
     */
    omit?: OrganizationOnBusinessCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationOnBusinessCustomerInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationOnBusinessCustomer to fetch.
     */
    where?: OrganizationOnBusinessCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationOnBusinessCustomers to fetch.
     */
    orderBy?: OrganizationOnBusinessCustomerOrderByWithRelationInput | OrganizationOnBusinessCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationOnBusinessCustomers.
     */
    cursor?: OrganizationOnBusinessCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationOnBusinessCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationOnBusinessCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationOnBusinessCustomers.
     */
    distinct?: OrganizationOnBusinessCustomerScalarFieldEnum | OrganizationOnBusinessCustomerScalarFieldEnum[]
  }

  /**
   * OrganizationOnBusinessCustomer findMany
   */
  export type OrganizationOnBusinessCustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationOnBusinessCustomer
     */
    select?: OrganizationOnBusinessCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationOnBusinessCustomer
     */
    omit?: OrganizationOnBusinessCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationOnBusinessCustomerInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationOnBusinessCustomers to fetch.
     */
    where?: OrganizationOnBusinessCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationOnBusinessCustomers to fetch.
     */
    orderBy?: OrganizationOnBusinessCustomerOrderByWithRelationInput | OrganizationOnBusinessCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrganizationOnBusinessCustomers.
     */
    cursor?: OrganizationOnBusinessCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationOnBusinessCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationOnBusinessCustomers.
     */
    skip?: number
    distinct?: OrganizationOnBusinessCustomerScalarFieldEnum | OrganizationOnBusinessCustomerScalarFieldEnum[]
  }

  /**
   * OrganizationOnBusinessCustomer create
   */
  export type OrganizationOnBusinessCustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationOnBusinessCustomer
     */
    select?: OrganizationOnBusinessCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationOnBusinessCustomer
     */
    omit?: OrganizationOnBusinessCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationOnBusinessCustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a OrganizationOnBusinessCustomer.
     */
    data: XOR<OrganizationOnBusinessCustomerCreateInput, OrganizationOnBusinessCustomerUncheckedCreateInput>
  }

  /**
   * OrganizationOnBusinessCustomer createMany
   */
  export type OrganizationOnBusinessCustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrganizationOnBusinessCustomers.
     */
    data: OrganizationOnBusinessCustomerCreateManyInput | OrganizationOnBusinessCustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrganizationOnBusinessCustomer createManyAndReturn
   */
  export type OrganizationOnBusinessCustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationOnBusinessCustomer
     */
    select?: OrganizationOnBusinessCustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationOnBusinessCustomer
     */
    omit?: OrganizationOnBusinessCustomerOmit<ExtArgs> | null
    /**
     * The data used to create many OrganizationOnBusinessCustomers.
     */
    data: OrganizationOnBusinessCustomerCreateManyInput | OrganizationOnBusinessCustomerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationOnBusinessCustomerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrganizationOnBusinessCustomer update
   */
  export type OrganizationOnBusinessCustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationOnBusinessCustomer
     */
    select?: OrganizationOnBusinessCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationOnBusinessCustomer
     */
    omit?: OrganizationOnBusinessCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationOnBusinessCustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a OrganizationOnBusinessCustomer.
     */
    data: XOR<OrganizationOnBusinessCustomerUpdateInput, OrganizationOnBusinessCustomerUncheckedUpdateInput>
    /**
     * Choose, which OrganizationOnBusinessCustomer to update.
     */
    where: OrganizationOnBusinessCustomerWhereUniqueInput
  }

  /**
   * OrganizationOnBusinessCustomer updateMany
   */
  export type OrganizationOnBusinessCustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrganizationOnBusinessCustomers.
     */
    data: XOR<OrganizationOnBusinessCustomerUpdateManyMutationInput, OrganizationOnBusinessCustomerUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationOnBusinessCustomers to update
     */
    where?: OrganizationOnBusinessCustomerWhereInput
    /**
     * Limit how many OrganizationOnBusinessCustomers to update.
     */
    limit?: number
  }

  /**
   * OrganizationOnBusinessCustomer updateManyAndReturn
   */
  export type OrganizationOnBusinessCustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationOnBusinessCustomer
     */
    select?: OrganizationOnBusinessCustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationOnBusinessCustomer
     */
    omit?: OrganizationOnBusinessCustomerOmit<ExtArgs> | null
    /**
     * The data used to update OrganizationOnBusinessCustomers.
     */
    data: XOR<OrganizationOnBusinessCustomerUpdateManyMutationInput, OrganizationOnBusinessCustomerUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationOnBusinessCustomers to update
     */
    where?: OrganizationOnBusinessCustomerWhereInput
    /**
     * Limit how many OrganizationOnBusinessCustomers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationOnBusinessCustomerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrganizationOnBusinessCustomer upsert
   */
  export type OrganizationOnBusinessCustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationOnBusinessCustomer
     */
    select?: OrganizationOnBusinessCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationOnBusinessCustomer
     */
    omit?: OrganizationOnBusinessCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationOnBusinessCustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the OrganizationOnBusinessCustomer to update in case it exists.
     */
    where: OrganizationOnBusinessCustomerWhereUniqueInput
    /**
     * In case the OrganizationOnBusinessCustomer found by the `where` argument doesn't exist, create a new OrganizationOnBusinessCustomer with this data.
     */
    create: XOR<OrganizationOnBusinessCustomerCreateInput, OrganizationOnBusinessCustomerUncheckedCreateInput>
    /**
     * In case the OrganizationOnBusinessCustomer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationOnBusinessCustomerUpdateInput, OrganizationOnBusinessCustomerUncheckedUpdateInput>
  }

  /**
   * OrganizationOnBusinessCustomer delete
   */
  export type OrganizationOnBusinessCustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationOnBusinessCustomer
     */
    select?: OrganizationOnBusinessCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationOnBusinessCustomer
     */
    omit?: OrganizationOnBusinessCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationOnBusinessCustomerInclude<ExtArgs> | null
    /**
     * Filter which OrganizationOnBusinessCustomer to delete.
     */
    where: OrganizationOnBusinessCustomerWhereUniqueInput
  }

  /**
   * OrganizationOnBusinessCustomer deleteMany
   */
  export type OrganizationOnBusinessCustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationOnBusinessCustomers to delete
     */
    where?: OrganizationOnBusinessCustomerWhereInput
    /**
     * Limit how many OrganizationOnBusinessCustomers to delete.
     */
    limit?: number
  }

  /**
   * OrganizationOnBusinessCustomer without action
   */
  export type OrganizationOnBusinessCustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationOnBusinessCustomer
     */
    select?: OrganizationOnBusinessCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationOnBusinessCustomer
     */
    omit?: OrganizationOnBusinessCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationOnBusinessCustomerInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
  }

  export type SubscriptionSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    level: $Enums.SubscriptionLevel | null
    price: Decimal | null
    status: $Enums.SubscriptionStatus | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    trialEndsAt: Date | null
    paymentFrequency: $Enums.PaymentFrequency | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    level: $Enums.SubscriptionLevel | null
    price: Decimal | null
    status: $Enums.SubscriptionStatus | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    trialEndsAt: Date | null
    paymentFrequency: $Enums.PaymentFrequency | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    createdAt: number
    level: number
    price: number
    status: number
    stripeCustomerId: number
    stripeSubscriptionId: number
    trialEndsAt: number
    paymentFrequency: number
    _all: number
  }


  export type SubscriptionAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type SubscriptionSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type SubscriptionMinAggregateInputType = {
    id?: true
    createdAt?: true
    level?: true
    price?: true
    status?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    trialEndsAt?: true
    paymentFrequency?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    level?: true
    price?: true
    status?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    trialEndsAt?: true
    paymentFrequency?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    createdAt?: true
    level?: true
    price?: true
    status?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    trialEndsAt?: true
    paymentFrequency?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _avg?: SubscriptionAvgAggregateInputType
    _sum?: SubscriptionSumAggregateInputType
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: number
    createdAt: Date
    level: $Enums.SubscriptionLevel
    price: Decimal
    status: $Enums.SubscriptionStatus
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    trialEndsAt: Date | null
    paymentFrequency: $Enums.PaymentFrequency
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    level?: boolean
    price?: boolean
    status?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    trialEndsAt?: boolean
    paymentFrequency?: boolean
    organization?: boolean | Subscription$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    level?: boolean
    price?: boolean
    status?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    trialEndsAt?: boolean
    paymentFrequency?: boolean
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    level?: boolean
    price?: boolean
    status?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    trialEndsAt?: boolean
    paymentFrequency?: boolean
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    level?: boolean
    price?: boolean
    status?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    trialEndsAt?: boolean
    paymentFrequency?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "level" | "price" | "status" | "stripeCustomerId" | "stripeSubscriptionId" | "trialEndsAt" | "paymentFrequency", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | Subscription$organizationArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      level: $Enums.SubscriptionLevel
      price: Prisma.Decimal
      status: $Enums.SubscriptionStatus
      stripeCustomerId: string | null
      stripeSubscriptionId: string | null
      trialEndsAt: Date | null
      paymentFrequency: $Enums.PaymentFrequency
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends Subscription$organizationArgs<ExtArgs> = {}>(args?: Subset<T, Subscription$organizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'Int'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly level: FieldRef<"Subscription", 'SubscriptionLevel'>
    readonly price: FieldRef<"Subscription", 'Decimal'>
    readonly status: FieldRef<"Subscription", 'SubscriptionStatus'>
    readonly stripeCustomerId: FieldRef<"Subscription", 'String'>
    readonly stripeSubscriptionId: FieldRef<"Subscription", 'String'>
    readonly trialEndsAt: FieldRef<"Subscription", 'DateTime'>
    readonly paymentFrequency: FieldRef<"Subscription", 'PaymentFrequency'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription.organization
   */
  export type Subscription$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    id: number | null
    businessId: number | null
    availibilityGroupId: number | null
  }

  export type ServiceSumAggregateOutputType = {
    id: number | null
    businessId: number | null
    availibilityGroupId: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    active: boolean | null
    businessId: number | null
    availibilityGroupId: number | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    active: boolean | null
    businessId: number | null
    availibilityGroupId: number | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    active: number
    businessId: number
    availibilityGroupId: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    id?: true
    businessId?: true
    availibilityGroupId?: true
  }

  export type ServiceSumAggregateInputType = {
    id?: true
    businessId?: true
    availibilityGroupId?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    active?: true
    businessId?: true
    availibilityGroupId?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    active?: true
    businessId?: true
    availibilityGroupId?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    active?: true
    businessId?: true
    availibilityGroupId?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    active: boolean
    businessId: number | null
    availibilityGroupId: number
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    active?: boolean
    businessId?: boolean
    availibilityGroupId?: boolean
    Business?: boolean | Service$BusinessArgs<ExtArgs>
    appointments?: boolean | Service$appointmentsArgs<ExtArgs>
    availibilityGroup?: boolean | AvailabilityGroupDefaultArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    active?: boolean
    businessId?: boolean
    availibilityGroupId?: boolean
    Business?: boolean | Service$BusinessArgs<ExtArgs>
    availibilityGroup?: boolean | AvailabilityGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    active?: boolean
    businessId?: boolean
    availibilityGroupId?: boolean
    Business?: boolean | Service$BusinessArgs<ExtArgs>
    availibilityGroup?: boolean | AvailabilityGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    active?: boolean
    businessId?: boolean
    availibilityGroupId?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "active" | "businessId" | "availibilityGroupId", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Business?: boolean | Service$BusinessArgs<ExtArgs>
    appointments?: boolean | Service$appointmentsArgs<ExtArgs>
    availibilityGroup?: boolean | AvailabilityGroupDefaultArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Business?: boolean | Service$BusinessArgs<ExtArgs>
    availibilityGroup?: boolean | AvailabilityGroupDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Business?: boolean | Service$BusinessArgs<ExtArgs>
    availibilityGroup?: boolean | AvailabilityGroupDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      Business: Prisma.$BusinessPayload<ExtArgs> | null
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      availibilityGroup: Prisma.$AvailabilityGroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      active: boolean
      businessId: number | null
      availibilityGroupId: number
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Business<T extends Service$BusinessArgs<ExtArgs> = {}>(args?: Subset<T, Service$BusinessArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    appointments<T extends Service$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Service$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    availibilityGroup<T extends AvailabilityGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvailabilityGroupDefaultArgs<ExtArgs>>): Prisma__AvailabilityGroupClient<$Result.GetResult<Prisma.$AvailabilityGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'Int'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
    readonly active: FieldRef<"Service", 'Boolean'>
    readonly businessId: FieldRef<"Service", 'Int'>
    readonly availibilityGroupId: FieldRef<"Service", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.Business
   */
  export type Service$BusinessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    where?: BusinessWhereInput
  }

  /**
   * Service.appointments
   */
  export type Service$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model AvailabilityGroup
   */

  export type AggregateAvailabilityGroup = {
    _count: AvailabilityGroupCountAggregateOutputType | null
    _avg: AvailabilityGroupAvgAggregateOutputType | null
    _sum: AvailabilityGroupSumAggregateOutputType | null
    _min: AvailabilityGroupMinAggregateOutputType | null
    _max: AvailabilityGroupMaxAggregateOutputType | null
  }

  export type AvailabilityGroupAvgAggregateOutputType = {
    id: number | null
  }

  export type AvailabilityGroupSumAggregateOutputType = {
    id: number | null
  }

  export type AvailabilityGroupMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvailabilityGroupMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvailabilityGroupCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AvailabilityGroupAvgAggregateInputType = {
    id?: true
  }

  export type AvailabilityGroupSumAggregateInputType = {
    id?: true
  }

  export type AvailabilityGroupMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvailabilityGroupMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvailabilityGroupCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AvailabilityGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailabilityGroup to aggregate.
     */
    where?: AvailabilityGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilityGroups to fetch.
     */
    orderBy?: AvailabilityGroupOrderByWithRelationInput | AvailabilityGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailabilityGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilityGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilityGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailabilityGroups
    **/
    _count?: true | AvailabilityGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvailabilityGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvailabilityGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailabilityGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailabilityGroupMaxAggregateInputType
  }

  export type GetAvailabilityGroupAggregateType<T extends AvailabilityGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailabilityGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailabilityGroup[P]>
      : GetScalarType<T[P], AggregateAvailabilityGroup[P]>
  }




  export type AvailabilityGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityGroupWhereInput
    orderBy?: AvailabilityGroupOrderByWithAggregationInput | AvailabilityGroupOrderByWithAggregationInput[]
    by: AvailabilityGroupScalarFieldEnum[] | AvailabilityGroupScalarFieldEnum
    having?: AvailabilityGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailabilityGroupCountAggregateInputType | true
    _avg?: AvailabilityGroupAvgAggregateInputType
    _sum?: AvailabilityGroupSumAggregateInputType
    _min?: AvailabilityGroupMinAggregateInputType
    _max?: AvailabilityGroupMaxAggregateInputType
  }

  export type AvailabilityGroupGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    _count: AvailabilityGroupCountAggregateOutputType | null
    _avg: AvailabilityGroupAvgAggregateOutputType | null
    _sum: AvailabilityGroupSumAggregateOutputType | null
    _min: AvailabilityGroupMinAggregateOutputType | null
    _max: AvailabilityGroupMaxAggregateOutputType | null
  }

  type GetAvailabilityGroupGroupByPayload<T extends AvailabilityGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailabilityGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailabilityGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailabilityGroupGroupByOutputType[P]>
            : GetScalarType<T[P], AvailabilityGroupGroupByOutputType[P]>
        }
      >
    >


  export type AvailabilityGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dailyAvailability?: boolean | AvailabilityGroup$dailyAvailabilityArgs<ExtArgs>
    services?: boolean | AvailabilityGroup$servicesArgs<ExtArgs>
    BookableSlot?: boolean | AvailabilityGroup$BookableSlotArgs<ExtArgs>
    _count?: boolean | AvailabilityGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilityGroup"]>

  export type AvailabilityGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["availabilityGroup"]>

  export type AvailabilityGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["availabilityGroup"]>

  export type AvailabilityGroupSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AvailabilityGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt", ExtArgs["result"]["availabilityGroup"]>
  export type AvailabilityGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyAvailability?: boolean | AvailabilityGroup$dailyAvailabilityArgs<ExtArgs>
    services?: boolean | AvailabilityGroup$servicesArgs<ExtArgs>
    BookableSlot?: boolean | AvailabilityGroup$BookableSlotArgs<ExtArgs>
    _count?: boolean | AvailabilityGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AvailabilityGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AvailabilityGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AvailabilityGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailabilityGroup"
    objects: {
      dailyAvailability: Prisma.$DailyAvailabilityPayload<ExtArgs>[]
      services: Prisma.$ServicePayload<ExtArgs>[]
      BookableSlot: Prisma.$BookableSlotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["availabilityGroup"]>
    composites: {}
  }

  type AvailabilityGroupGetPayload<S extends boolean | null | undefined | AvailabilityGroupDefaultArgs> = $Result.GetResult<Prisma.$AvailabilityGroupPayload, S>

  type AvailabilityGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailabilityGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailabilityGroupCountAggregateInputType | true
    }

  export interface AvailabilityGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailabilityGroup'], meta: { name: 'AvailabilityGroup' } }
    /**
     * Find zero or one AvailabilityGroup that matches the filter.
     * @param {AvailabilityGroupFindUniqueArgs} args - Arguments to find a AvailabilityGroup
     * @example
     * // Get one AvailabilityGroup
     * const availabilityGroup = await prisma.availabilityGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailabilityGroupFindUniqueArgs>(args: SelectSubset<T, AvailabilityGroupFindUniqueArgs<ExtArgs>>): Prisma__AvailabilityGroupClient<$Result.GetResult<Prisma.$AvailabilityGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AvailabilityGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailabilityGroupFindUniqueOrThrowArgs} args - Arguments to find a AvailabilityGroup
     * @example
     * // Get one AvailabilityGroup
     * const availabilityGroup = await prisma.availabilityGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailabilityGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailabilityGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailabilityGroupClient<$Result.GetResult<Prisma.$AvailabilityGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailabilityGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityGroupFindFirstArgs} args - Arguments to find a AvailabilityGroup
     * @example
     * // Get one AvailabilityGroup
     * const availabilityGroup = await prisma.availabilityGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailabilityGroupFindFirstArgs>(args?: SelectSubset<T, AvailabilityGroupFindFirstArgs<ExtArgs>>): Prisma__AvailabilityGroupClient<$Result.GetResult<Prisma.$AvailabilityGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailabilityGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityGroupFindFirstOrThrowArgs} args - Arguments to find a AvailabilityGroup
     * @example
     * // Get one AvailabilityGroup
     * const availabilityGroup = await prisma.availabilityGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailabilityGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailabilityGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailabilityGroupClient<$Result.GetResult<Prisma.$AvailabilityGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AvailabilityGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailabilityGroups
     * const availabilityGroups = await prisma.availabilityGroup.findMany()
     * 
     * // Get first 10 AvailabilityGroups
     * const availabilityGroups = await prisma.availabilityGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availabilityGroupWithIdOnly = await prisma.availabilityGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailabilityGroupFindManyArgs>(args?: SelectSubset<T, AvailabilityGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AvailabilityGroup.
     * @param {AvailabilityGroupCreateArgs} args - Arguments to create a AvailabilityGroup.
     * @example
     * // Create one AvailabilityGroup
     * const AvailabilityGroup = await prisma.availabilityGroup.create({
     *   data: {
     *     // ... data to create a AvailabilityGroup
     *   }
     * })
     * 
     */
    create<T extends AvailabilityGroupCreateArgs>(args: SelectSubset<T, AvailabilityGroupCreateArgs<ExtArgs>>): Prisma__AvailabilityGroupClient<$Result.GetResult<Prisma.$AvailabilityGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AvailabilityGroups.
     * @param {AvailabilityGroupCreateManyArgs} args - Arguments to create many AvailabilityGroups.
     * @example
     * // Create many AvailabilityGroups
     * const availabilityGroup = await prisma.availabilityGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailabilityGroupCreateManyArgs>(args?: SelectSubset<T, AvailabilityGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvailabilityGroups and returns the data saved in the database.
     * @param {AvailabilityGroupCreateManyAndReturnArgs} args - Arguments to create many AvailabilityGroups.
     * @example
     * // Create many AvailabilityGroups
     * const availabilityGroup = await prisma.availabilityGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvailabilityGroups and only return the `id`
     * const availabilityGroupWithIdOnly = await prisma.availabilityGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailabilityGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailabilityGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AvailabilityGroup.
     * @param {AvailabilityGroupDeleteArgs} args - Arguments to delete one AvailabilityGroup.
     * @example
     * // Delete one AvailabilityGroup
     * const AvailabilityGroup = await prisma.availabilityGroup.delete({
     *   where: {
     *     // ... filter to delete one AvailabilityGroup
     *   }
     * })
     * 
     */
    delete<T extends AvailabilityGroupDeleteArgs>(args: SelectSubset<T, AvailabilityGroupDeleteArgs<ExtArgs>>): Prisma__AvailabilityGroupClient<$Result.GetResult<Prisma.$AvailabilityGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AvailabilityGroup.
     * @param {AvailabilityGroupUpdateArgs} args - Arguments to update one AvailabilityGroup.
     * @example
     * // Update one AvailabilityGroup
     * const availabilityGroup = await prisma.availabilityGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailabilityGroupUpdateArgs>(args: SelectSubset<T, AvailabilityGroupUpdateArgs<ExtArgs>>): Prisma__AvailabilityGroupClient<$Result.GetResult<Prisma.$AvailabilityGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AvailabilityGroups.
     * @param {AvailabilityGroupDeleteManyArgs} args - Arguments to filter AvailabilityGroups to delete.
     * @example
     * // Delete a few AvailabilityGroups
     * const { count } = await prisma.availabilityGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailabilityGroupDeleteManyArgs>(args?: SelectSubset<T, AvailabilityGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailabilityGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailabilityGroups
     * const availabilityGroup = await prisma.availabilityGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailabilityGroupUpdateManyArgs>(args: SelectSubset<T, AvailabilityGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailabilityGroups and returns the data updated in the database.
     * @param {AvailabilityGroupUpdateManyAndReturnArgs} args - Arguments to update many AvailabilityGroups.
     * @example
     * // Update many AvailabilityGroups
     * const availabilityGroup = await prisma.availabilityGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AvailabilityGroups and only return the `id`
     * const availabilityGroupWithIdOnly = await prisma.availabilityGroup.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvailabilityGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailabilityGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AvailabilityGroup.
     * @param {AvailabilityGroupUpsertArgs} args - Arguments to update or create a AvailabilityGroup.
     * @example
     * // Update or create a AvailabilityGroup
     * const availabilityGroup = await prisma.availabilityGroup.upsert({
     *   create: {
     *     // ... data to create a AvailabilityGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailabilityGroup we want to update
     *   }
     * })
     */
    upsert<T extends AvailabilityGroupUpsertArgs>(args: SelectSubset<T, AvailabilityGroupUpsertArgs<ExtArgs>>): Prisma__AvailabilityGroupClient<$Result.GetResult<Prisma.$AvailabilityGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AvailabilityGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityGroupCountArgs} args - Arguments to filter AvailabilityGroups to count.
     * @example
     * // Count the number of AvailabilityGroups
     * const count = await prisma.availabilityGroup.count({
     *   where: {
     *     // ... the filter for the AvailabilityGroups we want to count
     *   }
     * })
    **/
    count<T extends AvailabilityGroupCountArgs>(
      args?: Subset<T, AvailabilityGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailabilityGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailabilityGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvailabilityGroupAggregateArgs>(args: Subset<T, AvailabilityGroupAggregateArgs>): Prisma.PrismaPromise<GetAvailabilityGroupAggregateType<T>>

    /**
     * Group by AvailabilityGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvailabilityGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailabilityGroupGroupByArgs['orderBy'] }
        : { orderBy?: AvailabilityGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvailabilityGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilityGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailabilityGroup model
   */
  readonly fields: AvailabilityGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailabilityGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailabilityGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dailyAvailability<T extends AvailabilityGroup$dailyAvailabilityArgs<ExtArgs> = {}>(args?: Subset<T, AvailabilityGroup$dailyAvailabilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    services<T extends AvailabilityGroup$servicesArgs<ExtArgs> = {}>(args?: Subset<T, AvailabilityGroup$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    BookableSlot<T extends AvailabilityGroup$BookableSlotArgs<ExtArgs> = {}>(args?: Subset<T, AvailabilityGroup$BookableSlotArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookableSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AvailabilityGroup model
   */
  interface AvailabilityGroupFieldRefs {
    readonly id: FieldRef<"AvailabilityGroup", 'Int'>
    readonly createdAt: FieldRef<"AvailabilityGroup", 'DateTime'>
    readonly updatedAt: FieldRef<"AvailabilityGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AvailabilityGroup findUnique
   */
  export type AvailabilityGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityGroup
     */
    select?: AvailabilityGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityGroup
     */
    omit?: AvailabilityGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityGroupInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityGroup to fetch.
     */
    where: AvailabilityGroupWhereUniqueInput
  }

  /**
   * AvailabilityGroup findUniqueOrThrow
   */
  export type AvailabilityGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityGroup
     */
    select?: AvailabilityGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityGroup
     */
    omit?: AvailabilityGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityGroupInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityGroup to fetch.
     */
    where: AvailabilityGroupWhereUniqueInput
  }

  /**
   * AvailabilityGroup findFirst
   */
  export type AvailabilityGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityGroup
     */
    select?: AvailabilityGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityGroup
     */
    omit?: AvailabilityGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityGroupInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityGroup to fetch.
     */
    where?: AvailabilityGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilityGroups to fetch.
     */
    orderBy?: AvailabilityGroupOrderByWithRelationInput | AvailabilityGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailabilityGroups.
     */
    cursor?: AvailabilityGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilityGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilityGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilityGroups.
     */
    distinct?: AvailabilityGroupScalarFieldEnum | AvailabilityGroupScalarFieldEnum[]
  }

  /**
   * AvailabilityGroup findFirstOrThrow
   */
  export type AvailabilityGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityGroup
     */
    select?: AvailabilityGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityGroup
     */
    omit?: AvailabilityGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityGroupInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityGroup to fetch.
     */
    where?: AvailabilityGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilityGroups to fetch.
     */
    orderBy?: AvailabilityGroupOrderByWithRelationInput | AvailabilityGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailabilityGroups.
     */
    cursor?: AvailabilityGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilityGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilityGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilityGroups.
     */
    distinct?: AvailabilityGroupScalarFieldEnum | AvailabilityGroupScalarFieldEnum[]
  }

  /**
   * AvailabilityGroup findMany
   */
  export type AvailabilityGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityGroup
     */
    select?: AvailabilityGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityGroup
     */
    omit?: AvailabilityGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityGroupInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityGroups to fetch.
     */
    where?: AvailabilityGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilityGroups to fetch.
     */
    orderBy?: AvailabilityGroupOrderByWithRelationInput | AvailabilityGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailabilityGroups.
     */
    cursor?: AvailabilityGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilityGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilityGroups.
     */
    skip?: number
    distinct?: AvailabilityGroupScalarFieldEnum | AvailabilityGroupScalarFieldEnum[]
  }

  /**
   * AvailabilityGroup create
   */
  export type AvailabilityGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityGroup
     */
    select?: AvailabilityGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityGroup
     */
    omit?: AvailabilityGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a AvailabilityGroup.
     */
    data: XOR<AvailabilityGroupCreateInput, AvailabilityGroupUncheckedCreateInput>
  }

  /**
   * AvailabilityGroup createMany
   */
  export type AvailabilityGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailabilityGroups.
     */
    data: AvailabilityGroupCreateManyInput | AvailabilityGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailabilityGroup createManyAndReturn
   */
  export type AvailabilityGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityGroup
     */
    select?: AvailabilityGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityGroup
     */
    omit?: AvailabilityGroupOmit<ExtArgs> | null
    /**
     * The data used to create many AvailabilityGroups.
     */
    data: AvailabilityGroupCreateManyInput | AvailabilityGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailabilityGroup update
   */
  export type AvailabilityGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityGroup
     */
    select?: AvailabilityGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityGroup
     */
    omit?: AvailabilityGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a AvailabilityGroup.
     */
    data: XOR<AvailabilityGroupUpdateInput, AvailabilityGroupUncheckedUpdateInput>
    /**
     * Choose, which AvailabilityGroup to update.
     */
    where: AvailabilityGroupWhereUniqueInput
  }

  /**
   * AvailabilityGroup updateMany
   */
  export type AvailabilityGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailabilityGroups.
     */
    data: XOR<AvailabilityGroupUpdateManyMutationInput, AvailabilityGroupUncheckedUpdateManyInput>
    /**
     * Filter which AvailabilityGroups to update
     */
    where?: AvailabilityGroupWhereInput
    /**
     * Limit how many AvailabilityGroups to update.
     */
    limit?: number
  }

  /**
   * AvailabilityGroup updateManyAndReturn
   */
  export type AvailabilityGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityGroup
     */
    select?: AvailabilityGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityGroup
     */
    omit?: AvailabilityGroupOmit<ExtArgs> | null
    /**
     * The data used to update AvailabilityGroups.
     */
    data: XOR<AvailabilityGroupUpdateManyMutationInput, AvailabilityGroupUncheckedUpdateManyInput>
    /**
     * Filter which AvailabilityGroups to update
     */
    where?: AvailabilityGroupWhereInput
    /**
     * Limit how many AvailabilityGroups to update.
     */
    limit?: number
  }

  /**
   * AvailabilityGroup upsert
   */
  export type AvailabilityGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityGroup
     */
    select?: AvailabilityGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityGroup
     */
    omit?: AvailabilityGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the AvailabilityGroup to update in case it exists.
     */
    where: AvailabilityGroupWhereUniqueInput
    /**
     * In case the AvailabilityGroup found by the `where` argument doesn't exist, create a new AvailabilityGroup with this data.
     */
    create: XOR<AvailabilityGroupCreateInput, AvailabilityGroupUncheckedCreateInput>
    /**
     * In case the AvailabilityGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailabilityGroupUpdateInput, AvailabilityGroupUncheckedUpdateInput>
  }

  /**
   * AvailabilityGroup delete
   */
  export type AvailabilityGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityGroup
     */
    select?: AvailabilityGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityGroup
     */
    omit?: AvailabilityGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityGroupInclude<ExtArgs> | null
    /**
     * Filter which AvailabilityGroup to delete.
     */
    where: AvailabilityGroupWhereUniqueInput
  }

  /**
   * AvailabilityGroup deleteMany
   */
  export type AvailabilityGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailabilityGroups to delete
     */
    where?: AvailabilityGroupWhereInput
    /**
     * Limit how many AvailabilityGroups to delete.
     */
    limit?: number
  }

  /**
   * AvailabilityGroup.dailyAvailability
   */
  export type AvailabilityGroup$dailyAvailabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyAvailability
     */
    select?: DailyAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyAvailability
     */
    omit?: DailyAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyAvailabilityInclude<ExtArgs> | null
    where?: DailyAvailabilityWhereInput
    orderBy?: DailyAvailabilityOrderByWithRelationInput | DailyAvailabilityOrderByWithRelationInput[]
    cursor?: DailyAvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyAvailabilityScalarFieldEnum | DailyAvailabilityScalarFieldEnum[]
  }

  /**
   * AvailabilityGroup.services
   */
  export type AvailabilityGroup$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * AvailabilityGroup.BookableSlot
   */
  export type AvailabilityGroup$BookableSlotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookableSlot
     */
    select?: BookableSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookableSlot
     */
    omit?: BookableSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookableSlotInclude<ExtArgs> | null
    where?: BookableSlotWhereInput
    orderBy?: BookableSlotOrderByWithRelationInput | BookableSlotOrderByWithRelationInput[]
    cursor?: BookableSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookableSlotScalarFieldEnum | BookableSlotScalarFieldEnum[]
  }

  /**
   * AvailabilityGroup without action
   */
  export type AvailabilityGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityGroup
     */
    select?: AvailabilityGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityGroup
     */
    omit?: AvailabilityGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityGroupInclude<ExtArgs> | null
  }


  /**
   * Model DailyAvailability
   */

  export type AggregateDailyAvailability = {
    _count: DailyAvailabilityCountAggregateOutputType | null
    _avg: DailyAvailabilityAvgAggregateOutputType | null
    _sum: DailyAvailabilitySumAggregateOutputType | null
    _min: DailyAvailabilityMinAggregateOutputType | null
    _max: DailyAvailabilityMaxAggregateOutputType | null
  }

  export type DailyAvailabilityAvgAggregateOutputType = {
    id: number | null
    availabilityGroupId: number | null
  }

  export type DailyAvailabilitySumAggregateOutputType = {
    id: number | null
    availabilityGroupId: number | null
  }

  export type DailyAvailabilityMinAggregateOutputType = {
    id: number | null
    availabilityGroupId: number | null
    dayOfWeek: $Enums.WeekDay | null
  }

  export type DailyAvailabilityMaxAggregateOutputType = {
    id: number | null
    availabilityGroupId: number | null
    dayOfWeek: $Enums.WeekDay | null
  }

  export type DailyAvailabilityCountAggregateOutputType = {
    id: number
    availabilityGroupId: number
    dayOfWeek: number
    _all: number
  }


  export type DailyAvailabilityAvgAggregateInputType = {
    id?: true
    availabilityGroupId?: true
  }

  export type DailyAvailabilitySumAggregateInputType = {
    id?: true
    availabilityGroupId?: true
  }

  export type DailyAvailabilityMinAggregateInputType = {
    id?: true
    availabilityGroupId?: true
    dayOfWeek?: true
  }

  export type DailyAvailabilityMaxAggregateInputType = {
    id?: true
    availabilityGroupId?: true
    dayOfWeek?: true
  }

  export type DailyAvailabilityCountAggregateInputType = {
    id?: true
    availabilityGroupId?: true
    dayOfWeek?: true
    _all?: true
  }

  export type DailyAvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyAvailability to aggregate.
     */
    where?: DailyAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyAvailabilities to fetch.
     */
    orderBy?: DailyAvailabilityOrderByWithRelationInput | DailyAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyAvailabilities
    **/
    _count?: true | DailyAvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyAvailabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyAvailabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyAvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyAvailabilityMaxAggregateInputType
  }

  export type GetDailyAvailabilityAggregateType<T extends DailyAvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyAvailability[P]>
      : GetScalarType<T[P], AggregateDailyAvailability[P]>
  }




  export type DailyAvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyAvailabilityWhereInput
    orderBy?: DailyAvailabilityOrderByWithAggregationInput | DailyAvailabilityOrderByWithAggregationInput[]
    by: DailyAvailabilityScalarFieldEnum[] | DailyAvailabilityScalarFieldEnum
    having?: DailyAvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyAvailabilityCountAggregateInputType | true
    _avg?: DailyAvailabilityAvgAggregateInputType
    _sum?: DailyAvailabilitySumAggregateInputType
    _min?: DailyAvailabilityMinAggregateInputType
    _max?: DailyAvailabilityMaxAggregateInputType
  }

  export type DailyAvailabilityGroupByOutputType = {
    id: number
    availabilityGroupId: number
    dayOfWeek: $Enums.WeekDay
    _count: DailyAvailabilityCountAggregateOutputType | null
    _avg: DailyAvailabilityAvgAggregateOutputType | null
    _sum: DailyAvailabilitySumAggregateOutputType | null
    _min: DailyAvailabilityMinAggregateOutputType | null
    _max: DailyAvailabilityMaxAggregateOutputType | null
  }

  type GetDailyAvailabilityGroupByPayload<T extends DailyAvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyAvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyAvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyAvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], DailyAvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type DailyAvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    availabilityGroupId?: boolean
    dayOfWeek?: boolean
    availabilityGroup?: boolean | AvailabilityGroupDefaultArgs<ExtArgs>
    availabilityBlocks?: boolean | DailyAvailability$availabilityBlocksArgs<ExtArgs>
    _count?: boolean | DailyAvailabilityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyAvailability"]>

  export type DailyAvailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    availabilityGroupId?: boolean
    dayOfWeek?: boolean
    availabilityGroup?: boolean | AvailabilityGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyAvailability"]>

  export type DailyAvailabilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    availabilityGroupId?: boolean
    dayOfWeek?: boolean
    availabilityGroup?: boolean | AvailabilityGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyAvailability"]>

  export type DailyAvailabilitySelectScalar = {
    id?: boolean
    availabilityGroupId?: boolean
    dayOfWeek?: boolean
  }

  export type DailyAvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "availabilityGroupId" | "dayOfWeek", ExtArgs["result"]["dailyAvailability"]>
  export type DailyAvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availabilityGroup?: boolean | AvailabilityGroupDefaultArgs<ExtArgs>
    availabilityBlocks?: boolean | DailyAvailability$availabilityBlocksArgs<ExtArgs>
    _count?: boolean | DailyAvailabilityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DailyAvailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availabilityGroup?: boolean | AvailabilityGroupDefaultArgs<ExtArgs>
  }
  export type DailyAvailabilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availabilityGroup?: boolean | AvailabilityGroupDefaultArgs<ExtArgs>
  }

  export type $DailyAvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyAvailability"
    objects: {
      availabilityGroup: Prisma.$AvailabilityGroupPayload<ExtArgs>
      availabilityBlocks: Prisma.$TimeBlockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      availabilityGroupId: number
      dayOfWeek: $Enums.WeekDay
    }, ExtArgs["result"]["dailyAvailability"]>
    composites: {}
  }

  type DailyAvailabilityGetPayload<S extends boolean | null | undefined | DailyAvailabilityDefaultArgs> = $Result.GetResult<Prisma.$DailyAvailabilityPayload, S>

  type DailyAvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyAvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyAvailabilityCountAggregateInputType | true
    }

  export interface DailyAvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyAvailability'], meta: { name: 'DailyAvailability' } }
    /**
     * Find zero or one DailyAvailability that matches the filter.
     * @param {DailyAvailabilityFindUniqueArgs} args - Arguments to find a DailyAvailability
     * @example
     * // Get one DailyAvailability
     * const dailyAvailability = await prisma.dailyAvailability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyAvailabilityFindUniqueArgs>(args: SelectSubset<T, DailyAvailabilityFindUniqueArgs<ExtArgs>>): Prisma__DailyAvailabilityClient<$Result.GetResult<Prisma.$DailyAvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyAvailability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyAvailabilityFindUniqueOrThrowArgs} args - Arguments to find a DailyAvailability
     * @example
     * // Get one DailyAvailability
     * const dailyAvailability = await prisma.dailyAvailability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyAvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyAvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyAvailabilityClient<$Result.GetResult<Prisma.$DailyAvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyAvailability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyAvailabilityFindFirstArgs} args - Arguments to find a DailyAvailability
     * @example
     * // Get one DailyAvailability
     * const dailyAvailability = await prisma.dailyAvailability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyAvailabilityFindFirstArgs>(args?: SelectSubset<T, DailyAvailabilityFindFirstArgs<ExtArgs>>): Prisma__DailyAvailabilityClient<$Result.GetResult<Prisma.$DailyAvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyAvailability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyAvailabilityFindFirstOrThrowArgs} args - Arguments to find a DailyAvailability
     * @example
     * // Get one DailyAvailability
     * const dailyAvailability = await prisma.dailyAvailability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyAvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyAvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyAvailabilityClient<$Result.GetResult<Prisma.$DailyAvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyAvailabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyAvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyAvailabilities
     * const dailyAvailabilities = await prisma.dailyAvailability.findMany()
     * 
     * // Get first 10 DailyAvailabilities
     * const dailyAvailabilities = await prisma.dailyAvailability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyAvailabilityWithIdOnly = await prisma.dailyAvailability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyAvailabilityFindManyArgs>(args?: SelectSubset<T, DailyAvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyAvailability.
     * @param {DailyAvailabilityCreateArgs} args - Arguments to create a DailyAvailability.
     * @example
     * // Create one DailyAvailability
     * const DailyAvailability = await prisma.dailyAvailability.create({
     *   data: {
     *     // ... data to create a DailyAvailability
     *   }
     * })
     * 
     */
    create<T extends DailyAvailabilityCreateArgs>(args: SelectSubset<T, DailyAvailabilityCreateArgs<ExtArgs>>): Prisma__DailyAvailabilityClient<$Result.GetResult<Prisma.$DailyAvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyAvailabilities.
     * @param {DailyAvailabilityCreateManyArgs} args - Arguments to create many DailyAvailabilities.
     * @example
     * // Create many DailyAvailabilities
     * const dailyAvailability = await prisma.dailyAvailability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyAvailabilityCreateManyArgs>(args?: SelectSubset<T, DailyAvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyAvailabilities and returns the data saved in the database.
     * @param {DailyAvailabilityCreateManyAndReturnArgs} args - Arguments to create many DailyAvailabilities.
     * @example
     * // Create many DailyAvailabilities
     * const dailyAvailability = await prisma.dailyAvailability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyAvailabilities and only return the `id`
     * const dailyAvailabilityWithIdOnly = await prisma.dailyAvailability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyAvailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyAvailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyAvailabilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyAvailability.
     * @param {DailyAvailabilityDeleteArgs} args - Arguments to delete one DailyAvailability.
     * @example
     * // Delete one DailyAvailability
     * const DailyAvailability = await prisma.dailyAvailability.delete({
     *   where: {
     *     // ... filter to delete one DailyAvailability
     *   }
     * })
     * 
     */
    delete<T extends DailyAvailabilityDeleteArgs>(args: SelectSubset<T, DailyAvailabilityDeleteArgs<ExtArgs>>): Prisma__DailyAvailabilityClient<$Result.GetResult<Prisma.$DailyAvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyAvailability.
     * @param {DailyAvailabilityUpdateArgs} args - Arguments to update one DailyAvailability.
     * @example
     * // Update one DailyAvailability
     * const dailyAvailability = await prisma.dailyAvailability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyAvailabilityUpdateArgs>(args: SelectSubset<T, DailyAvailabilityUpdateArgs<ExtArgs>>): Prisma__DailyAvailabilityClient<$Result.GetResult<Prisma.$DailyAvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyAvailabilities.
     * @param {DailyAvailabilityDeleteManyArgs} args - Arguments to filter DailyAvailabilities to delete.
     * @example
     * // Delete a few DailyAvailabilities
     * const { count } = await prisma.dailyAvailability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyAvailabilityDeleteManyArgs>(args?: SelectSubset<T, DailyAvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyAvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyAvailabilities
     * const dailyAvailability = await prisma.dailyAvailability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyAvailabilityUpdateManyArgs>(args: SelectSubset<T, DailyAvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyAvailabilities and returns the data updated in the database.
     * @param {DailyAvailabilityUpdateManyAndReturnArgs} args - Arguments to update many DailyAvailabilities.
     * @example
     * // Update many DailyAvailabilities
     * const dailyAvailability = await prisma.dailyAvailability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyAvailabilities and only return the `id`
     * const dailyAvailabilityWithIdOnly = await prisma.dailyAvailability.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DailyAvailabilityUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyAvailabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyAvailabilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyAvailability.
     * @param {DailyAvailabilityUpsertArgs} args - Arguments to update or create a DailyAvailability.
     * @example
     * // Update or create a DailyAvailability
     * const dailyAvailability = await prisma.dailyAvailability.upsert({
     *   create: {
     *     // ... data to create a DailyAvailability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyAvailability we want to update
     *   }
     * })
     */
    upsert<T extends DailyAvailabilityUpsertArgs>(args: SelectSubset<T, DailyAvailabilityUpsertArgs<ExtArgs>>): Prisma__DailyAvailabilityClient<$Result.GetResult<Prisma.$DailyAvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyAvailabilityCountArgs} args - Arguments to filter DailyAvailabilities to count.
     * @example
     * // Count the number of DailyAvailabilities
     * const count = await prisma.dailyAvailability.count({
     *   where: {
     *     // ... the filter for the DailyAvailabilities we want to count
     *   }
     * })
    **/
    count<T extends DailyAvailabilityCountArgs>(
      args?: Subset<T, DailyAvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyAvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyAvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyAvailabilityAggregateArgs>(args: Subset<T, DailyAvailabilityAggregateArgs>): Prisma.PrismaPromise<GetDailyAvailabilityAggregateType<T>>

    /**
     * Group by DailyAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyAvailabilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyAvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyAvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: DailyAvailabilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyAvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyAvailability model
   */
  readonly fields: DailyAvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyAvailability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyAvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    availabilityGroup<T extends AvailabilityGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvailabilityGroupDefaultArgs<ExtArgs>>): Prisma__AvailabilityGroupClient<$Result.GetResult<Prisma.$AvailabilityGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    availabilityBlocks<T extends DailyAvailability$availabilityBlocksArgs<ExtArgs> = {}>(args?: Subset<T, DailyAvailability$availabilityBlocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyAvailability model
   */
  interface DailyAvailabilityFieldRefs {
    readonly id: FieldRef<"DailyAvailability", 'Int'>
    readonly availabilityGroupId: FieldRef<"DailyAvailability", 'Int'>
    readonly dayOfWeek: FieldRef<"DailyAvailability", 'WeekDay'>
  }
    

  // Custom InputTypes
  /**
   * DailyAvailability findUnique
   */
  export type DailyAvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyAvailability
     */
    select?: DailyAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyAvailability
     */
    omit?: DailyAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which DailyAvailability to fetch.
     */
    where: DailyAvailabilityWhereUniqueInput
  }

  /**
   * DailyAvailability findUniqueOrThrow
   */
  export type DailyAvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyAvailability
     */
    select?: DailyAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyAvailability
     */
    omit?: DailyAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which DailyAvailability to fetch.
     */
    where: DailyAvailabilityWhereUniqueInput
  }

  /**
   * DailyAvailability findFirst
   */
  export type DailyAvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyAvailability
     */
    select?: DailyAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyAvailability
     */
    omit?: DailyAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which DailyAvailability to fetch.
     */
    where?: DailyAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyAvailabilities to fetch.
     */
    orderBy?: DailyAvailabilityOrderByWithRelationInput | DailyAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyAvailabilities.
     */
    cursor?: DailyAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyAvailabilities.
     */
    distinct?: DailyAvailabilityScalarFieldEnum | DailyAvailabilityScalarFieldEnum[]
  }

  /**
   * DailyAvailability findFirstOrThrow
   */
  export type DailyAvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyAvailability
     */
    select?: DailyAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyAvailability
     */
    omit?: DailyAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which DailyAvailability to fetch.
     */
    where?: DailyAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyAvailabilities to fetch.
     */
    orderBy?: DailyAvailabilityOrderByWithRelationInput | DailyAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyAvailabilities.
     */
    cursor?: DailyAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyAvailabilities.
     */
    distinct?: DailyAvailabilityScalarFieldEnum | DailyAvailabilityScalarFieldEnum[]
  }

  /**
   * DailyAvailability findMany
   */
  export type DailyAvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyAvailability
     */
    select?: DailyAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyAvailability
     */
    omit?: DailyAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which DailyAvailabilities to fetch.
     */
    where?: DailyAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyAvailabilities to fetch.
     */
    orderBy?: DailyAvailabilityOrderByWithRelationInput | DailyAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyAvailabilities.
     */
    cursor?: DailyAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyAvailabilities.
     */
    skip?: number
    distinct?: DailyAvailabilityScalarFieldEnum | DailyAvailabilityScalarFieldEnum[]
  }

  /**
   * DailyAvailability create
   */
  export type DailyAvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyAvailability
     */
    select?: DailyAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyAvailability
     */
    omit?: DailyAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyAvailability.
     */
    data: XOR<DailyAvailabilityCreateInput, DailyAvailabilityUncheckedCreateInput>
  }

  /**
   * DailyAvailability createMany
   */
  export type DailyAvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyAvailabilities.
     */
    data: DailyAvailabilityCreateManyInput | DailyAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyAvailability createManyAndReturn
   */
  export type DailyAvailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyAvailability
     */
    select?: DailyAvailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyAvailability
     */
    omit?: DailyAvailabilityOmit<ExtArgs> | null
    /**
     * The data used to create many DailyAvailabilities.
     */
    data: DailyAvailabilityCreateManyInput | DailyAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyAvailabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyAvailability update
   */
  export type DailyAvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyAvailability
     */
    select?: DailyAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyAvailability
     */
    omit?: DailyAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyAvailability.
     */
    data: XOR<DailyAvailabilityUpdateInput, DailyAvailabilityUncheckedUpdateInput>
    /**
     * Choose, which DailyAvailability to update.
     */
    where: DailyAvailabilityWhereUniqueInput
  }

  /**
   * DailyAvailability updateMany
   */
  export type DailyAvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyAvailabilities.
     */
    data: XOR<DailyAvailabilityUpdateManyMutationInput, DailyAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which DailyAvailabilities to update
     */
    where?: DailyAvailabilityWhereInput
    /**
     * Limit how many DailyAvailabilities to update.
     */
    limit?: number
  }

  /**
   * DailyAvailability updateManyAndReturn
   */
  export type DailyAvailabilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyAvailability
     */
    select?: DailyAvailabilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyAvailability
     */
    omit?: DailyAvailabilityOmit<ExtArgs> | null
    /**
     * The data used to update DailyAvailabilities.
     */
    data: XOR<DailyAvailabilityUpdateManyMutationInput, DailyAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which DailyAvailabilities to update
     */
    where?: DailyAvailabilityWhereInput
    /**
     * Limit how many DailyAvailabilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyAvailabilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyAvailability upsert
   */
  export type DailyAvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyAvailability
     */
    select?: DailyAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyAvailability
     */
    omit?: DailyAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyAvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyAvailability to update in case it exists.
     */
    where: DailyAvailabilityWhereUniqueInput
    /**
     * In case the DailyAvailability found by the `where` argument doesn't exist, create a new DailyAvailability with this data.
     */
    create: XOR<DailyAvailabilityCreateInput, DailyAvailabilityUncheckedCreateInput>
    /**
     * In case the DailyAvailability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyAvailabilityUpdateInput, DailyAvailabilityUncheckedUpdateInput>
  }

  /**
   * DailyAvailability delete
   */
  export type DailyAvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyAvailability
     */
    select?: DailyAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyAvailability
     */
    omit?: DailyAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyAvailabilityInclude<ExtArgs> | null
    /**
     * Filter which DailyAvailability to delete.
     */
    where: DailyAvailabilityWhereUniqueInput
  }

  /**
   * DailyAvailability deleteMany
   */
  export type DailyAvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyAvailabilities to delete
     */
    where?: DailyAvailabilityWhereInput
    /**
     * Limit how many DailyAvailabilities to delete.
     */
    limit?: number
  }

  /**
   * DailyAvailability.availabilityBlocks
   */
  export type DailyAvailability$availabilityBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeBlock
     */
    omit?: TimeBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
    where?: TimeBlockWhereInput
    orderBy?: TimeBlockOrderByWithRelationInput | TimeBlockOrderByWithRelationInput[]
    cursor?: TimeBlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimeBlockScalarFieldEnum | TimeBlockScalarFieldEnum[]
  }

  /**
   * DailyAvailability without action
   */
  export type DailyAvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyAvailability
     */
    select?: DailyAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyAvailability
     */
    omit?: DailyAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyAvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model TimeBlock
   */

  export type AggregateTimeBlock = {
    _count: TimeBlockCountAggregateOutputType | null
    _avg: TimeBlockAvgAggregateOutputType | null
    _sum: TimeBlockSumAggregateOutputType | null
    _min: TimeBlockMinAggregateOutputType | null
    _max: TimeBlockMaxAggregateOutputType | null
  }

  export type TimeBlockAvgAggregateOutputType = {
    id: number | null
    dailyAvailabilityDayId: number | null
  }

  export type TimeBlockSumAggregateOutputType = {
    id: number | null
    dailyAvailabilityDayId: number | null
  }

  export type TimeBlockMinAggregateOutputType = {
    id: number | null
    dailyAvailabilityDayId: number | null
    startTime: string | null
    endTime: string | null
  }

  export type TimeBlockMaxAggregateOutputType = {
    id: number | null
    dailyAvailabilityDayId: number | null
    startTime: string | null
    endTime: string | null
  }

  export type TimeBlockCountAggregateOutputType = {
    id: number
    dailyAvailabilityDayId: number
    startTime: number
    endTime: number
    _all: number
  }


  export type TimeBlockAvgAggregateInputType = {
    id?: true
    dailyAvailabilityDayId?: true
  }

  export type TimeBlockSumAggregateInputType = {
    id?: true
    dailyAvailabilityDayId?: true
  }

  export type TimeBlockMinAggregateInputType = {
    id?: true
    dailyAvailabilityDayId?: true
    startTime?: true
    endTime?: true
  }

  export type TimeBlockMaxAggregateInputType = {
    id?: true
    dailyAvailabilityDayId?: true
    startTime?: true
    endTime?: true
  }

  export type TimeBlockCountAggregateInputType = {
    id?: true
    dailyAvailabilityDayId?: true
    startTime?: true
    endTime?: true
    _all?: true
  }

  export type TimeBlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeBlock to aggregate.
     */
    where?: TimeBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeBlocks to fetch.
     */
    orderBy?: TimeBlockOrderByWithRelationInput | TimeBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimeBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimeBlocks
    **/
    _count?: true | TimeBlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimeBlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimeBlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimeBlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimeBlockMaxAggregateInputType
  }

  export type GetTimeBlockAggregateType<T extends TimeBlockAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeBlock[P]>
      : GetScalarType<T[P], AggregateTimeBlock[P]>
  }




  export type TimeBlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeBlockWhereInput
    orderBy?: TimeBlockOrderByWithAggregationInput | TimeBlockOrderByWithAggregationInput[]
    by: TimeBlockScalarFieldEnum[] | TimeBlockScalarFieldEnum
    having?: TimeBlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimeBlockCountAggregateInputType | true
    _avg?: TimeBlockAvgAggregateInputType
    _sum?: TimeBlockSumAggregateInputType
    _min?: TimeBlockMinAggregateInputType
    _max?: TimeBlockMaxAggregateInputType
  }

  export type TimeBlockGroupByOutputType = {
    id: number
    dailyAvailabilityDayId: number
    startTime: string
    endTime: string
    _count: TimeBlockCountAggregateOutputType | null
    _avg: TimeBlockAvgAggregateOutputType | null
    _sum: TimeBlockSumAggregateOutputType | null
    _min: TimeBlockMinAggregateOutputType | null
    _max: TimeBlockMaxAggregateOutputType | null
  }

  type GetTimeBlockGroupByPayload<T extends TimeBlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimeBlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimeBlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimeBlockGroupByOutputType[P]>
            : GetScalarType<T[P], TimeBlockGroupByOutputType[P]>
        }
      >
    >


  export type TimeBlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dailyAvailabilityDayId?: boolean
    startTime?: boolean
    endTime?: boolean
    dailyAvailabilityDay?: boolean | DailyAvailabilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeBlock"]>

  export type TimeBlockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dailyAvailabilityDayId?: boolean
    startTime?: boolean
    endTime?: boolean
    dailyAvailabilityDay?: boolean | DailyAvailabilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeBlock"]>

  export type TimeBlockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dailyAvailabilityDayId?: boolean
    startTime?: boolean
    endTime?: boolean
    dailyAvailabilityDay?: boolean | DailyAvailabilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeBlock"]>

  export type TimeBlockSelectScalar = {
    id?: boolean
    dailyAvailabilityDayId?: boolean
    startTime?: boolean
    endTime?: boolean
  }

  export type TimeBlockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dailyAvailabilityDayId" | "startTime" | "endTime", ExtArgs["result"]["timeBlock"]>
  export type TimeBlockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyAvailabilityDay?: boolean | DailyAvailabilityDefaultArgs<ExtArgs>
  }
  export type TimeBlockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyAvailabilityDay?: boolean | DailyAvailabilityDefaultArgs<ExtArgs>
  }
  export type TimeBlockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyAvailabilityDay?: boolean | DailyAvailabilityDefaultArgs<ExtArgs>
  }

  export type $TimeBlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimeBlock"
    objects: {
      dailyAvailabilityDay: Prisma.$DailyAvailabilityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dailyAvailabilityDayId: number
      startTime: string
      endTime: string
    }, ExtArgs["result"]["timeBlock"]>
    composites: {}
  }

  type TimeBlockGetPayload<S extends boolean | null | undefined | TimeBlockDefaultArgs> = $Result.GetResult<Prisma.$TimeBlockPayload, S>

  type TimeBlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TimeBlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimeBlockCountAggregateInputType | true
    }

  export interface TimeBlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimeBlock'], meta: { name: 'TimeBlock' } }
    /**
     * Find zero or one TimeBlock that matches the filter.
     * @param {TimeBlockFindUniqueArgs} args - Arguments to find a TimeBlock
     * @example
     * // Get one TimeBlock
     * const timeBlock = await prisma.timeBlock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimeBlockFindUniqueArgs>(args: SelectSubset<T, TimeBlockFindUniqueArgs<ExtArgs>>): Prisma__TimeBlockClient<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TimeBlock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TimeBlockFindUniqueOrThrowArgs} args - Arguments to find a TimeBlock
     * @example
     * // Get one TimeBlock
     * const timeBlock = await prisma.timeBlock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimeBlockFindUniqueOrThrowArgs>(args: SelectSubset<T, TimeBlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimeBlockClient<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimeBlock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeBlockFindFirstArgs} args - Arguments to find a TimeBlock
     * @example
     * // Get one TimeBlock
     * const timeBlock = await prisma.timeBlock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimeBlockFindFirstArgs>(args?: SelectSubset<T, TimeBlockFindFirstArgs<ExtArgs>>): Prisma__TimeBlockClient<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimeBlock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeBlockFindFirstOrThrowArgs} args - Arguments to find a TimeBlock
     * @example
     * // Get one TimeBlock
     * const timeBlock = await prisma.timeBlock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimeBlockFindFirstOrThrowArgs>(args?: SelectSubset<T, TimeBlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimeBlockClient<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TimeBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeBlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimeBlocks
     * const timeBlocks = await prisma.timeBlock.findMany()
     * 
     * // Get first 10 TimeBlocks
     * const timeBlocks = await prisma.timeBlock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timeBlockWithIdOnly = await prisma.timeBlock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimeBlockFindManyArgs>(args?: SelectSubset<T, TimeBlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TimeBlock.
     * @param {TimeBlockCreateArgs} args - Arguments to create a TimeBlock.
     * @example
     * // Create one TimeBlock
     * const TimeBlock = await prisma.timeBlock.create({
     *   data: {
     *     // ... data to create a TimeBlock
     *   }
     * })
     * 
     */
    create<T extends TimeBlockCreateArgs>(args: SelectSubset<T, TimeBlockCreateArgs<ExtArgs>>): Prisma__TimeBlockClient<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TimeBlocks.
     * @param {TimeBlockCreateManyArgs} args - Arguments to create many TimeBlocks.
     * @example
     * // Create many TimeBlocks
     * const timeBlock = await prisma.timeBlock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimeBlockCreateManyArgs>(args?: SelectSubset<T, TimeBlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TimeBlocks and returns the data saved in the database.
     * @param {TimeBlockCreateManyAndReturnArgs} args - Arguments to create many TimeBlocks.
     * @example
     * // Create many TimeBlocks
     * const timeBlock = await prisma.timeBlock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TimeBlocks and only return the `id`
     * const timeBlockWithIdOnly = await prisma.timeBlock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimeBlockCreateManyAndReturnArgs>(args?: SelectSubset<T, TimeBlockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TimeBlock.
     * @param {TimeBlockDeleteArgs} args - Arguments to delete one TimeBlock.
     * @example
     * // Delete one TimeBlock
     * const TimeBlock = await prisma.timeBlock.delete({
     *   where: {
     *     // ... filter to delete one TimeBlock
     *   }
     * })
     * 
     */
    delete<T extends TimeBlockDeleteArgs>(args: SelectSubset<T, TimeBlockDeleteArgs<ExtArgs>>): Prisma__TimeBlockClient<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TimeBlock.
     * @param {TimeBlockUpdateArgs} args - Arguments to update one TimeBlock.
     * @example
     * // Update one TimeBlock
     * const timeBlock = await prisma.timeBlock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimeBlockUpdateArgs>(args: SelectSubset<T, TimeBlockUpdateArgs<ExtArgs>>): Prisma__TimeBlockClient<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TimeBlocks.
     * @param {TimeBlockDeleteManyArgs} args - Arguments to filter TimeBlocks to delete.
     * @example
     * // Delete a few TimeBlocks
     * const { count } = await prisma.timeBlock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimeBlockDeleteManyArgs>(args?: SelectSubset<T, TimeBlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeBlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimeBlocks
     * const timeBlock = await prisma.timeBlock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimeBlockUpdateManyArgs>(args: SelectSubset<T, TimeBlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeBlocks and returns the data updated in the database.
     * @param {TimeBlockUpdateManyAndReturnArgs} args - Arguments to update many TimeBlocks.
     * @example
     * // Update many TimeBlocks
     * const timeBlock = await prisma.timeBlock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TimeBlocks and only return the `id`
     * const timeBlockWithIdOnly = await prisma.timeBlock.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TimeBlockUpdateManyAndReturnArgs>(args: SelectSubset<T, TimeBlockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TimeBlock.
     * @param {TimeBlockUpsertArgs} args - Arguments to update or create a TimeBlock.
     * @example
     * // Update or create a TimeBlock
     * const timeBlock = await prisma.timeBlock.upsert({
     *   create: {
     *     // ... data to create a TimeBlock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimeBlock we want to update
     *   }
     * })
     */
    upsert<T extends TimeBlockUpsertArgs>(args: SelectSubset<T, TimeBlockUpsertArgs<ExtArgs>>): Prisma__TimeBlockClient<$Result.GetResult<Prisma.$TimeBlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TimeBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeBlockCountArgs} args - Arguments to filter TimeBlocks to count.
     * @example
     * // Count the number of TimeBlocks
     * const count = await prisma.timeBlock.count({
     *   where: {
     *     // ... the filter for the TimeBlocks we want to count
     *   }
     * })
    **/
    count<T extends TimeBlockCountArgs>(
      args?: Subset<T, TimeBlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimeBlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimeBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeBlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TimeBlockAggregateArgs>(args: Subset<T, TimeBlockAggregateArgs>): Prisma.PrismaPromise<GetTimeBlockAggregateType<T>>

    /**
     * Group by TimeBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeBlockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TimeBlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimeBlockGroupByArgs['orderBy'] }
        : { orderBy?: TimeBlockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TimeBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimeBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimeBlock model
   */
  readonly fields: TimeBlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimeBlock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimeBlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dailyAvailabilityDay<T extends DailyAvailabilityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DailyAvailabilityDefaultArgs<ExtArgs>>): Prisma__DailyAvailabilityClient<$Result.GetResult<Prisma.$DailyAvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TimeBlock model
   */
  interface TimeBlockFieldRefs {
    readonly id: FieldRef<"TimeBlock", 'Int'>
    readonly dailyAvailabilityDayId: FieldRef<"TimeBlock", 'Int'>
    readonly startTime: FieldRef<"TimeBlock", 'String'>
    readonly endTime: FieldRef<"TimeBlock", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TimeBlock findUnique
   */
  export type TimeBlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeBlock
     */
    omit?: TimeBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * Filter, which TimeBlock to fetch.
     */
    where: TimeBlockWhereUniqueInput
  }

  /**
   * TimeBlock findUniqueOrThrow
   */
  export type TimeBlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeBlock
     */
    omit?: TimeBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * Filter, which TimeBlock to fetch.
     */
    where: TimeBlockWhereUniqueInput
  }

  /**
   * TimeBlock findFirst
   */
  export type TimeBlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeBlock
     */
    omit?: TimeBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * Filter, which TimeBlock to fetch.
     */
    where?: TimeBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeBlocks to fetch.
     */
    orderBy?: TimeBlockOrderByWithRelationInput | TimeBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeBlocks.
     */
    cursor?: TimeBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeBlocks.
     */
    distinct?: TimeBlockScalarFieldEnum | TimeBlockScalarFieldEnum[]
  }

  /**
   * TimeBlock findFirstOrThrow
   */
  export type TimeBlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeBlock
     */
    omit?: TimeBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * Filter, which TimeBlock to fetch.
     */
    where?: TimeBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeBlocks to fetch.
     */
    orderBy?: TimeBlockOrderByWithRelationInput | TimeBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeBlocks.
     */
    cursor?: TimeBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeBlocks.
     */
    distinct?: TimeBlockScalarFieldEnum | TimeBlockScalarFieldEnum[]
  }

  /**
   * TimeBlock findMany
   */
  export type TimeBlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeBlock
     */
    omit?: TimeBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * Filter, which TimeBlocks to fetch.
     */
    where?: TimeBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeBlocks to fetch.
     */
    orderBy?: TimeBlockOrderByWithRelationInput | TimeBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimeBlocks.
     */
    cursor?: TimeBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeBlocks.
     */
    skip?: number
    distinct?: TimeBlockScalarFieldEnum | TimeBlockScalarFieldEnum[]
  }

  /**
   * TimeBlock create
   */
  export type TimeBlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeBlock
     */
    omit?: TimeBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * The data needed to create a TimeBlock.
     */
    data: XOR<TimeBlockCreateInput, TimeBlockUncheckedCreateInput>
  }

  /**
   * TimeBlock createMany
   */
  export type TimeBlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimeBlocks.
     */
    data: TimeBlockCreateManyInput | TimeBlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimeBlock createManyAndReturn
   */
  export type TimeBlockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeBlock
     */
    omit?: TimeBlockOmit<ExtArgs> | null
    /**
     * The data used to create many TimeBlocks.
     */
    data: TimeBlockCreateManyInput | TimeBlockCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimeBlock update
   */
  export type TimeBlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeBlock
     */
    omit?: TimeBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * The data needed to update a TimeBlock.
     */
    data: XOR<TimeBlockUpdateInput, TimeBlockUncheckedUpdateInput>
    /**
     * Choose, which TimeBlock to update.
     */
    where: TimeBlockWhereUniqueInput
  }

  /**
   * TimeBlock updateMany
   */
  export type TimeBlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimeBlocks.
     */
    data: XOR<TimeBlockUpdateManyMutationInput, TimeBlockUncheckedUpdateManyInput>
    /**
     * Filter which TimeBlocks to update
     */
    where?: TimeBlockWhereInput
    /**
     * Limit how many TimeBlocks to update.
     */
    limit?: number
  }

  /**
   * TimeBlock updateManyAndReturn
   */
  export type TimeBlockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeBlock
     */
    omit?: TimeBlockOmit<ExtArgs> | null
    /**
     * The data used to update TimeBlocks.
     */
    data: XOR<TimeBlockUpdateManyMutationInput, TimeBlockUncheckedUpdateManyInput>
    /**
     * Filter which TimeBlocks to update
     */
    where?: TimeBlockWhereInput
    /**
     * Limit how many TimeBlocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimeBlock upsert
   */
  export type TimeBlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeBlock
     */
    omit?: TimeBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * The filter to search for the TimeBlock to update in case it exists.
     */
    where: TimeBlockWhereUniqueInput
    /**
     * In case the TimeBlock found by the `where` argument doesn't exist, create a new TimeBlock with this data.
     */
    create: XOR<TimeBlockCreateInput, TimeBlockUncheckedCreateInput>
    /**
     * In case the TimeBlock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimeBlockUpdateInput, TimeBlockUncheckedUpdateInput>
  }

  /**
   * TimeBlock delete
   */
  export type TimeBlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeBlock
     */
    omit?: TimeBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
    /**
     * Filter which TimeBlock to delete.
     */
    where: TimeBlockWhereUniqueInput
  }

  /**
   * TimeBlock deleteMany
   */
  export type TimeBlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeBlocks to delete
     */
    where?: TimeBlockWhereInput
    /**
     * Limit how many TimeBlocks to delete.
     */
    limit?: number
  }

  /**
   * TimeBlock without action
   */
  export type TimeBlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeBlock
     */
    select?: TimeBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeBlock
     */
    omit?: TimeBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeBlockInclude<ExtArgs> | null
  }


  /**
   * Model BookableSlot
   */

  export type AggregateBookableSlot = {
    _count: BookableSlotCountAggregateOutputType | null
    _avg: BookableSlotAvgAggregateOutputType | null
    _sum: BookableSlotSumAggregateOutputType | null
    _min: BookableSlotMinAggregateOutputType | null
    _max: BookableSlotMaxAggregateOutputType | null
  }

  export type BookableSlotAvgAggregateOutputType = {
    id: number | null
    availabilityGroupId: number | null
  }

  export type BookableSlotSumAggregateOutputType = {
    id: number | null
    availabilityGroupId: number | null
  }

  export type BookableSlotMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    startTime: Date | null
    endTime: Date | null
    availabilityGroupId: number | null
  }

  export type BookableSlotMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    startTime: Date | null
    endTime: Date | null
    availabilityGroupId: number | null
  }

  export type BookableSlotCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    startTime: number
    endTime: number
    availabilityGroupId: number
    _all: number
  }


  export type BookableSlotAvgAggregateInputType = {
    id?: true
    availabilityGroupId?: true
  }

  export type BookableSlotSumAggregateInputType = {
    id?: true
    availabilityGroupId?: true
  }

  export type BookableSlotMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    startTime?: true
    endTime?: true
    availabilityGroupId?: true
  }

  export type BookableSlotMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    startTime?: true
    endTime?: true
    availabilityGroupId?: true
  }

  export type BookableSlotCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    startTime?: true
    endTime?: true
    availabilityGroupId?: true
    _all?: true
  }

  export type BookableSlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookableSlot to aggregate.
     */
    where?: BookableSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookableSlots to fetch.
     */
    orderBy?: BookableSlotOrderByWithRelationInput | BookableSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookableSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookableSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookableSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookableSlots
    **/
    _count?: true | BookableSlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookableSlotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookableSlotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookableSlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookableSlotMaxAggregateInputType
  }

  export type GetBookableSlotAggregateType<T extends BookableSlotAggregateArgs> = {
        [P in keyof T & keyof AggregateBookableSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookableSlot[P]>
      : GetScalarType<T[P], AggregateBookableSlot[P]>
  }




  export type BookableSlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookableSlotWhereInput
    orderBy?: BookableSlotOrderByWithAggregationInput | BookableSlotOrderByWithAggregationInput[]
    by: BookableSlotScalarFieldEnum[] | BookableSlotScalarFieldEnum
    having?: BookableSlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookableSlotCountAggregateInputType | true
    _avg?: BookableSlotAvgAggregateInputType
    _sum?: BookableSlotSumAggregateInputType
    _min?: BookableSlotMinAggregateInputType
    _max?: BookableSlotMaxAggregateInputType
  }

  export type BookableSlotGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    startTime: Date
    endTime: Date
    availabilityGroupId: number | null
    _count: BookableSlotCountAggregateOutputType | null
    _avg: BookableSlotAvgAggregateOutputType | null
    _sum: BookableSlotSumAggregateOutputType | null
    _min: BookableSlotMinAggregateOutputType | null
    _max: BookableSlotMaxAggregateOutputType | null
  }

  type GetBookableSlotGroupByPayload<T extends BookableSlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookableSlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookableSlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookableSlotGroupByOutputType[P]>
            : GetScalarType<T[P], BookableSlotGroupByOutputType[P]>
        }
      >
    >


  export type BookableSlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startTime?: boolean
    endTime?: boolean
    availabilityGroupId?: boolean
    Appointment?: boolean | BookableSlot$AppointmentArgs<ExtArgs>
    AvailabilityGroup?: boolean | BookableSlot$AvailabilityGroupArgs<ExtArgs>
    _count?: boolean | BookableSlotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookableSlot"]>

  export type BookableSlotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startTime?: boolean
    endTime?: boolean
    availabilityGroupId?: boolean
    AvailabilityGroup?: boolean | BookableSlot$AvailabilityGroupArgs<ExtArgs>
  }, ExtArgs["result"]["bookableSlot"]>

  export type BookableSlotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startTime?: boolean
    endTime?: boolean
    availabilityGroupId?: boolean
    AvailabilityGroup?: boolean | BookableSlot$AvailabilityGroupArgs<ExtArgs>
  }, ExtArgs["result"]["bookableSlot"]>

  export type BookableSlotSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startTime?: boolean
    endTime?: boolean
    availabilityGroupId?: boolean
  }

  export type BookableSlotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "startTime" | "endTime" | "availabilityGroupId", ExtArgs["result"]["bookableSlot"]>
  export type BookableSlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Appointment?: boolean | BookableSlot$AppointmentArgs<ExtArgs>
    AvailabilityGroup?: boolean | BookableSlot$AvailabilityGroupArgs<ExtArgs>
    _count?: boolean | BookableSlotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookableSlotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AvailabilityGroup?: boolean | BookableSlot$AvailabilityGroupArgs<ExtArgs>
  }
  export type BookableSlotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AvailabilityGroup?: boolean | BookableSlot$AvailabilityGroupArgs<ExtArgs>
  }

  export type $BookableSlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookableSlot"
    objects: {
      Appointment: Prisma.$AppointmentPayload<ExtArgs>[]
      AvailabilityGroup: Prisma.$AvailabilityGroupPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      startTime: Date
      endTime: Date
      availabilityGroupId: number | null
    }, ExtArgs["result"]["bookableSlot"]>
    composites: {}
  }

  type BookableSlotGetPayload<S extends boolean | null | undefined | BookableSlotDefaultArgs> = $Result.GetResult<Prisma.$BookableSlotPayload, S>

  type BookableSlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookableSlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookableSlotCountAggregateInputType | true
    }

  export interface BookableSlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookableSlot'], meta: { name: 'BookableSlot' } }
    /**
     * Find zero or one BookableSlot that matches the filter.
     * @param {BookableSlotFindUniqueArgs} args - Arguments to find a BookableSlot
     * @example
     * // Get one BookableSlot
     * const bookableSlot = await prisma.bookableSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookableSlotFindUniqueArgs>(args: SelectSubset<T, BookableSlotFindUniqueArgs<ExtArgs>>): Prisma__BookableSlotClient<$Result.GetResult<Prisma.$BookableSlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookableSlot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookableSlotFindUniqueOrThrowArgs} args - Arguments to find a BookableSlot
     * @example
     * // Get one BookableSlot
     * const bookableSlot = await prisma.bookableSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookableSlotFindUniqueOrThrowArgs>(args: SelectSubset<T, BookableSlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookableSlotClient<$Result.GetResult<Prisma.$BookableSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookableSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookableSlotFindFirstArgs} args - Arguments to find a BookableSlot
     * @example
     * // Get one BookableSlot
     * const bookableSlot = await prisma.bookableSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookableSlotFindFirstArgs>(args?: SelectSubset<T, BookableSlotFindFirstArgs<ExtArgs>>): Prisma__BookableSlotClient<$Result.GetResult<Prisma.$BookableSlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookableSlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookableSlotFindFirstOrThrowArgs} args - Arguments to find a BookableSlot
     * @example
     * // Get one BookableSlot
     * const bookableSlot = await prisma.bookableSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookableSlotFindFirstOrThrowArgs>(args?: SelectSubset<T, BookableSlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookableSlotClient<$Result.GetResult<Prisma.$BookableSlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookableSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookableSlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookableSlots
     * const bookableSlots = await prisma.bookableSlot.findMany()
     * 
     * // Get first 10 BookableSlots
     * const bookableSlots = await prisma.bookableSlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookableSlotWithIdOnly = await prisma.bookableSlot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookableSlotFindManyArgs>(args?: SelectSubset<T, BookableSlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookableSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookableSlot.
     * @param {BookableSlotCreateArgs} args - Arguments to create a BookableSlot.
     * @example
     * // Create one BookableSlot
     * const BookableSlot = await prisma.bookableSlot.create({
     *   data: {
     *     // ... data to create a BookableSlot
     *   }
     * })
     * 
     */
    create<T extends BookableSlotCreateArgs>(args: SelectSubset<T, BookableSlotCreateArgs<ExtArgs>>): Prisma__BookableSlotClient<$Result.GetResult<Prisma.$BookableSlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookableSlots.
     * @param {BookableSlotCreateManyArgs} args - Arguments to create many BookableSlots.
     * @example
     * // Create many BookableSlots
     * const bookableSlot = await prisma.bookableSlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookableSlotCreateManyArgs>(args?: SelectSubset<T, BookableSlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookableSlots and returns the data saved in the database.
     * @param {BookableSlotCreateManyAndReturnArgs} args - Arguments to create many BookableSlots.
     * @example
     * // Create many BookableSlots
     * const bookableSlot = await prisma.bookableSlot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookableSlots and only return the `id`
     * const bookableSlotWithIdOnly = await prisma.bookableSlot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookableSlotCreateManyAndReturnArgs>(args?: SelectSubset<T, BookableSlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookableSlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookableSlot.
     * @param {BookableSlotDeleteArgs} args - Arguments to delete one BookableSlot.
     * @example
     * // Delete one BookableSlot
     * const BookableSlot = await prisma.bookableSlot.delete({
     *   where: {
     *     // ... filter to delete one BookableSlot
     *   }
     * })
     * 
     */
    delete<T extends BookableSlotDeleteArgs>(args: SelectSubset<T, BookableSlotDeleteArgs<ExtArgs>>): Prisma__BookableSlotClient<$Result.GetResult<Prisma.$BookableSlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookableSlot.
     * @param {BookableSlotUpdateArgs} args - Arguments to update one BookableSlot.
     * @example
     * // Update one BookableSlot
     * const bookableSlot = await prisma.bookableSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookableSlotUpdateArgs>(args: SelectSubset<T, BookableSlotUpdateArgs<ExtArgs>>): Prisma__BookableSlotClient<$Result.GetResult<Prisma.$BookableSlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookableSlots.
     * @param {BookableSlotDeleteManyArgs} args - Arguments to filter BookableSlots to delete.
     * @example
     * // Delete a few BookableSlots
     * const { count } = await prisma.bookableSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookableSlotDeleteManyArgs>(args?: SelectSubset<T, BookableSlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookableSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookableSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookableSlots
     * const bookableSlot = await prisma.bookableSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookableSlotUpdateManyArgs>(args: SelectSubset<T, BookableSlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookableSlots and returns the data updated in the database.
     * @param {BookableSlotUpdateManyAndReturnArgs} args - Arguments to update many BookableSlots.
     * @example
     * // Update many BookableSlots
     * const bookableSlot = await prisma.bookableSlot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookableSlots and only return the `id`
     * const bookableSlotWithIdOnly = await prisma.bookableSlot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookableSlotUpdateManyAndReturnArgs>(args: SelectSubset<T, BookableSlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookableSlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookableSlot.
     * @param {BookableSlotUpsertArgs} args - Arguments to update or create a BookableSlot.
     * @example
     * // Update or create a BookableSlot
     * const bookableSlot = await prisma.bookableSlot.upsert({
     *   create: {
     *     // ... data to create a BookableSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookableSlot we want to update
     *   }
     * })
     */
    upsert<T extends BookableSlotUpsertArgs>(args: SelectSubset<T, BookableSlotUpsertArgs<ExtArgs>>): Prisma__BookableSlotClient<$Result.GetResult<Prisma.$BookableSlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookableSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookableSlotCountArgs} args - Arguments to filter BookableSlots to count.
     * @example
     * // Count the number of BookableSlots
     * const count = await prisma.bookableSlot.count({
     *   where: {
     *     // ... the filter for the BookableSlots we want to count
     *   }
     * })
    **/
    count<T extends BookableSlotCountArgs>(
      args?: Subset<T, BookableSlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookableSlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookableSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookableSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookableSlotAggregateArgs>(args: Subset<T, BookableSlotAggregateArgs>): Prisma.PrismaPromise<GetBookableSlotAggregateType<T>>

    /**
     * Group by BookableSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookableSlotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookableSlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookableSlotGroupByArgs['orderBy'] }
        : { orderBy?: BookableSlotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookableSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookableSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookableSlot model
   */
  readonly fields: BookableSlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookableSlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookableSlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Appointment<T extends BookableSlot$AppointmentArgs<ExtArgs> = {}>(args?: Subset<T, BookableSlot$AppointmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    AvailabilityGroup<T extends BookableSlot$AvailabilityGroupArgs<ExtArgs> = {}>(args?: Subset<T, BookableSlot$AvailabilityGroupArgs<ExtArgs>>): Prisma__AvailabilityGroupClient<$Result.GetResult<Prisma.$AvailabilityGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookableSlot model
   */
  interface BookableSlotFieldRefs {
    readonly id: FieldRef<"BookableSlot", 'Int'>
    readonly createdAt: FieldRef<"BookableSlot", 'DateTime'>
    readonly updatedAt: FieldRef<"BookableSlot", 'DateTime'>
    readonly startTime: FieldRef<"BookableSlot", 'DateTime'>
    readonly endTime: FieldRef<"BookableSlot", 'DateTime'>
    readonly availabilityGroupId: FieldRef<"BookableSlot", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BookableSlot findUnique
   */
  export type BookableSlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookableSlot
     */
    select?: BookableSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookableSlot
     */
    omit?: BookableSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookableSlotInclude<ExtArgs> | null
    /**
     * Filter, which BookableSlot to fetch.
     */
    where: BookableSlotWhereUniqueInput
  }

  /**
   * BookableSlot findUniqueOrThrow
   */
  export type BookableSlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookableSlot
     */
    select?: BookableSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookableSlot
     */
    omit?: BookableSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookableSlotInclude<ExtArgs> | null
    /**
     * Filter, which BookableSlot to fetch.
     */
    where: BookableSlotWhereUniqueInput
  }

  /**
   * BookableSlot findFirst
   */
  export type BookableSlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookableSlot
     */
    select?: BookableSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookableSlot
     */
    omit?: BookableSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookableSlotInclude<ExtArgs> | null
    /**
     * Filter, which BookableSlot to fetch.
     */
    where?: BookableSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookableSlots to fetch.
     */
    orderBy?: BookableSlotOrderByWithRelationInput | BookableSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookableSlots.
     */
    cursor?: BookableSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookableSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookableSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookableSlots.
     */
    distinct?: BookableSlotScalarFieldEnum | BookableSlotScalarFieldEnum[]
  }

  /**
   * BookableSlot findFirstOrThrow
   */
  export type BookableSlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookableSlot
     */
    select?: BookableSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookableSlot
     */
    omit?: BookableSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookableSlotInclude<ExtArgs> | null
    /**
     * Filter, which BookableSlot to fetch.
     */
    where?: BookableSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookableSlots to fetch.
     */
    orderBy?: BookableSlotOrderByWithRelationInput | BookableSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookableSlots.
     */
    cursor?: BookableSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookableSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookableSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookableSlots.
     */
    distinct?: BookableSlotScalarFieldEnum | BookableSlotScalarFieldEnum[]
  }

  /**
   * BookableSlot findMany
   */
  export type BookableSlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookableSlot
     */
    select?: BookableSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookableSlot
     */
    omit?: BookableSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookableSlotInclude<ExtArgs> | null
    /**
     * Filter, which BookableSlots to fetch.
     */
    where?: BookableSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookableSlots to fetch.
     */
    orderBy?: BookableSlotOrderByWithRelationInput | BookableSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookableSlots.
     */
    cursor?: BookableSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookableSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookableSlots.
     */
    skip?: number
    distinct?: BookableSlotScalarFieldEnum | BookableSlotScalarFieldEnum[]
  }

  /**
   * BookableSlot create
   */
  export type BookableSlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookableSlot
     */
    select?: BookableSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookableSlot
     */
    omit?: BookableSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookableSlotInclude<ExtArgs> | null
    /**
     * The data needed to create a BookableSlot.
     */
    data: XOR<BookableSlotCreateInput, BookableSlotUncheckedCreateInput>
  }

  /**
   * BookableSlot createMany
   */
  export type BookableSlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookableSlots.
     */
    data: BookableSlotCreateManyInput | BookableSlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookableSlot createManyAndReturn
   */
  export type BookableSlotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookableSlot
     */
    select?: BookableSlotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookableSlot
     */
    omit?: BookableSlotOmit<ExtArgs> | null
    /**
     * The data used to create many BookableSlots.
     */
    data: BookableSlotCreateManyInput | BookableSlotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookableSlotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookableSlot update
   */
  export type BookableSlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookableSlot
     */
    select?: BookableSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookableSlot
     */
    omit?: BookableSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookableSlotInclude<ExtArgs> | null
    /**
     * The data needed to update a BookableSlot.
     */
    data: XOR<BookableSlotUpdateInput, BookableSlotUncheckedUpdateInput>
    /**
     * Choose, which BookableSlot to update.
     */
    where: BookableSlotWhereUniqueInput
  }

  /**
   * BookableSlot updateMany
   */
  export type BookableSlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookableSlots.
     */
    data: XOR<BookableSlotUpdateManyMutationInput, BookableSlotUncheckedUpdateManyInput>
    /**
     * Filter which BookableSlots to update
     */
    where?: BookableSlotWhereInput
    /**
     * Limit how many BookableSlots to update.
     */
    limit?: number
  }

  /**
   * BookableSlot updateManyAndReturn
   */
  export type BookableSlotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookableSlot
     */
    select?: BookableSlotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookableSlot
     */
    omit?: BookableSlotOmit<ExtArgs> | null
    /**
     * The data used to update BookableSlots.
     */
    data: XOR<BookableSlotUpdateManyMutationInput, BookableSlotUncheckedUpdateManyInput>
    /**
     * Filter which BookableSlots to update
     */
    where?: BookableSlotWhereInput
    /**
     * Limit how many BookableSlots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookableSlotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookableSlot upsert
   */
  export type BookableSlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookableSlot
     */
    select?: BookableSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookableSlot
     */
    omit?: BookableSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookableSlotInclude<ExtArgs> | null
    /**
     * The filter to search for the BookableSlot to update in case it exists.
     */
    where: BookableSlotWhereUniqueInput
    /**
     * In case the BookableSlot found by the `where` argument doesn't exist, create a new BookableSlot with this data.
     */
    create: XOR<BookableSlotCreateInput, BookableSlotUncheckedCreateInput>
    /**
     * In case the BookableSlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookableSlotUpdateInput, BookableSlotUncheckedUpdateInput>
  }

  /**
   * BookableSlot delete
   */
  export type BookableSlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookableSlot
     */
    select?: BookableSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookableSlot
     */
    omit?: BookableSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookableSlotInclude<ExtArgs> | null
    /**
     * Filter which BookableSlot to delete.
     */
    where: BookableSlotWhereUniqueInput
  }

  /**
   * BookableSlot deleteMany
   */
  export type BookableSlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookableSlots to delete
     */
    where?: BookableSlotWhereInput
    /**
     * Limit how many BookableSlots to delete.
     */
    limit?: number
  }

  /**
   * BookableSlot.Appointment
   */
  export type BookableSlot$AppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * BookableSlot.AvailabilityGroup
   */
  export type BookableSlot$AvailabilityGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityGroup
     */
    select?: AvailabilityGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityGroup
     */
    omit?: AvailabilityGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityGroupInclude<ExtArgs> | null
    where?: AvailabilityGroupWhereInput
  }

  /**
   * BookableSlot without action
   */
  export type BookableSlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookableSlot
     */
    select?: BookableSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookableSlot
     */
    omit?: BookableSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookableSlotInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    customerId: 'customerId',
    serviceId: 'serviceId',
    slotId: 'slotId',
    status: 'status'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const BusinessScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    businessName: 'businessName',
    contactNumber: 'contactNumber',
    organizationId: 'organizationId'
  };

  export type BusinessScalarFieldEnum = (typeof BusinessScalarFieldEnum)[keyof typeof BusinessScalarFieldEnum]


  export const BusinessCustomerScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    mobile: 'mobile',
    firstName: 'firstName',
    lastName: 'lastName'
  };

  export type BusinessCustomerScalarFieldEnum = (typeof BusinessCustomerScalarFieldEnum)[keyof typeof BusinessCustomerScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    mobile: 'mobile',
    firstName: 'firstName',
    lastName: 'lastName'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    legalName: 'legalName',
    firstLineOfAddress: 'firstLineOfAddress',
    secondLineOfAddress: 'secondLineOfAddress',
    city: 'city',
    postCode: 'postCode',
    stripeCustomerId: 'stripeCustomerId',
    subscriptionId: 'subscriptionId'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const OrganizationOnBusinessCustomerScalarFieldEnum: {
    organizationId: 'organizationId',
    businessCustomerId: 'businessCustomerId',
    role: 'role'
  };

  export type OrganizationOnBusinessCustomerScalarFieldEnum = (typeof OrganizationOnBusinessCustomerScalarFieldEnum)[keyof typeof OrganizationOnBusinessCustomerScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    level: 'level',
    price: 'price',
    status: 'status',
    stripeCustomerId: 'stripeCustomerId',
    stripeSubscriptionId: 'stripeSubscriptionId',
    trialEndsAt: 'trialEndsAt',
    paymentFrequency: 'paymentFrequency'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    active: 'active',
    businessId: 'businessId',
    availibilityGroupId: 'availibilityGroupId'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const AvailabilityGroupScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AvailabilityGroupScalarFieldEnum = (typeof AvailabilityGroupScalarFieldEnum)[keyof typeof AvailabilityGroupScalarFieldEnum]


  export const DailyAvailabilityScalarFieldEnum: {
    id: 'id',
    availabilityGroupId: 'availabilityGroupId',
    dayOfWeek: 'dayOfWeek'
  };

  export type DailyAvailabilityScalarFieldEnum = (typeof DailyAvailabilityScalarFieldEnum)[keyof typeof DailyAvailabilityScalarFieldEnum]


  export const TimeBlockScalarFieldEnum: {
    id: 'id',
    dailyAvailabilityDayId: 'dailyAvailabilityDayId',
    startTime: 'startTime',
    endTime: 'endTime'
  };

  export type TimeBlockScalarFieldEnum = (typeof TimeBlockScalarFieldEnum)[keyof typeof TimeBlockScalarFieldEnum]


  export const BookableSlotScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    startTime: 'startTime',
    endTime: 'endTime',
    availabilityGroupId: 'availabilityGroupId'
  };

  export type BookableSlotScalarFieldEnum = (typeof BookableSlotScalarFieldEnum)[keyof typeof BookableSlotScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'OrganizationRole'
   */
  export type EnumOrganizationRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrganizationRole'>
    


  /**
   * Reference to a field of type 'OrganizationRole[]'
   */
  export type ListEnumOrganizationRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrganizationRole[]'>
    


  /**
   * Reference to a field of type 'SubscriptionLevel'
   */
  export type EnumSubscriptionLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionLevel'>
    


  /**
   * Reference to a field of type 'SubscriptionLevel[]'
   */
  export type ListEnumSubscriptionLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionLevel[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus[]'
   */
  export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentFrequency'
   */
  export type EnumPaymentFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentFrequency'>
    


  /**
   * Reference to a field of type 'PaymentFrequency[]'
   */
  export type ListEnumPaymentFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentFrequency[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'WeekDay'
   */
  export type EnumWeekDayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WeekDay'>
    


  /**
   * Reference to a field of type 'WeekDay[]'
   */
  export type ListEnumWeekDayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WeekDay[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: StringFilter<"Appointment"> | string
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    customerId?: IntFilter<"Appointment"> | number
    serviceId?: IntFilter<"Appointment"> | number
    slotId?: IntFilter<"Appointment"> | number
    status?: EnumStatusFilter<"Appointment"> | $Enums.Status
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    slot?: XOR<BookableSlotScalarRelationFilter, BookableSlotWhereInput>
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customerId?: SortOrder
    serviceId?: SortOrder
    slotId?: SortOrder
    status?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
    slot?: BookableSlotOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    customerId?: IntFilter<"Appointment"> | number
    serviceId?: IntFilter<"Appointment"> | number
    slotId?: IntFilter<"Appointment"> | number
    status?: EnumStatusFilter<"Appointment"> | $Enums.Status
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    slot?: XOR<BookableSlotScalarRelationFilter, BookableSlotWhereInput>
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customerId?: SortOrder
    serviceId?: SortOrder
    slotId?: SortOrder
    status?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Appointment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    customerId?: IntWithAggregatesFilter<"Appointment"> | number
    serviceId?: IntWithAggregatesFilter<"Appointment"> | number
    slotId?: IntWithAggregatesFilter<"Appointment"> | number
    status?: EnumStatusWithAggregatesFilter<"Appointment"> | $Enums.Status
  }

  export type BusinessWhereInput = {
    AND?: BusinessWhereInput | BusinessWhereInput[]
    OR?: BusinessWhereInput[]
    NOT?: BusinessWhereInput | BusinessWhereInput[]
    id?: IntFilter<"Business"> | number
    createdAt?: DateTimeFilter<"Business"> | Date | string
    updatedAt?: DateTimeFilter<"Business"> | Date | string
    businessName?: StringFilter<"Business"> | string
    contactNumber?: StringFilter<"Business"> | string
    organizationId?: IntFilter<"Business"> | number
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    services?: ServiceListRelationFilter
  }

  export type BusinessOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    businessName?: SortOrder
    contactNumber?: SortOrder
    organizationId?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    services?: ServiceOrderByRelationAggregateInput
  }

  export type BusinessWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BusinessWhereInput | BusinessWhereInput[]
    OR?: BusinessWhereInput[]
    NOT?: BusinessWhereInput | BusinessWhereInput[]
    createdAt?: DateTimeFilter<"Business"> | Date | string
    updatedAt?: DateTimeFilter<"Business"> | Date | string
    businessName?: StringFilter<"Business"> | string
    contactNumber?: StringFilter<"Business"> | string
    organizationId?: IntFilter<"Business"> | number
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    services?: ServiceListRelationFilter
  }, "id">

  export type BusinessOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    businessName?: SortOrder
    contactNumber?: SortOrder
    organizationId?: SortOrder
    _count?: BusinessCountOrderByAggregateInput
    _avg?: BusinessAvgOrderByAggregateInput
    _max?: BusinessMaxOrderByAggregateInput
    _min?: BusinessMinOrderByAggregateInput
    _sum?: BusinessSumOrderByAggregateInput
  }

  export type BusinessScalarWhereWithAggregatesInput = {
    AND?: BusinessScalarWhereWithAggregatesInput | BusinessScalarWhereWithAggregatesInput[]
    OR?: BusinessScalarWhereWithAggregatesInput[]
    NOT?: BusinessScalarWhereWithAggregatesInput | BusinessScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Business"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Business"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Business"> | Date | string
    businessName?: StringWithAggregatesFilter<"Business"> | string
    contactNumber?: StringWithAggregatesFilter<"Business"> | string
    organizationId?: IntWithAggregatesFilter<"Business"> | number
  }

  export type BusinessCustomerWhereInput = {
    AND?: BusinessCustomerWhereInput | BusinessCustomerWhereInput[]
    OR?: BusinessCustomerWhereInput[]
    NOT?: BusinessCustomerWhereInput | BusinessCustomerWhereInput[]
    id?: IntFilter<"BusinessCustomer"> | number
    createdAt?: DateTimeFilter<"BusinessCustomer"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessCustomer"> | Date | string
    email?: StringFilter<"BusinessCustomer"> | string
    mobile?: StringNullableFilter<"BusinessCustomer"> | string | null
    firstName?: StringFilter<"BusinessCustomer"> | string
    lastName?: StringFilter<"BusinessCustomer"> | string
    organization?: XOR<OrganizationOnBusinessCustomerNullableScalarRelationFilter, OrganizationOnBusinessCustomerWhereInput> | null
  }

  export type BusinessCustomerOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    mobile?: SortOrderInput | SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    organization?: OrganizationOnBusinessCustomerOrderByWithRelationInput
  }

  export type BusinessCustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    mobile?: string
    AND?: BusinessCustomerWhereInput | BusinessCustomerWhereInput[]
    OR?: BusinessCustomerWhereInput[]
    NOT?: BusinessCustomerWhereInput | BusinessCustomerWhereInput[]
    createdAt?: DateTimeFilter<"BusinessCustomer"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessCustomer"> | Date | string
    firstName?: StringFilter<"BusinessCustomer"> | string
    lastName?: StringFilter<"BusinessCustomer"> | string
    organization?: XOR<OrganizationOnBusinessCustomerNullableScalarRelationFilter, OrganizationOnBusinessCustomerWhereInput> | null
  }, "id" | "email" | "mobile">

  export type BusinessCustomerOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    mobile?: SortOrderInput | SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    _count?: BusinessCustomerCountOrderByAggregateInput
    _avg?: BusinessCustomerAvgOrderByAggregateInput
    _max?: BusinessCustomerMaxOrderByAggregateInput
    _min?: BusinessCustomerMinOrderByAggregateInput
    _sum?: BusinessCustomerSumOrderByAggregateInput
  }

  export type BusinessCustomerScalarWhereWithAggregatesInput = {
    AND?: BusinessCustomerScalarWhereWithAggregatesInput | BusinessCustomerScalarWhereWithAggregatesInput[]
    OR?: BusinessCustomerScalarWhereWithAggregatesInput[]
    NOT?: BusinessCustomerScalarWhereWithAggregatesInput | BusinessCustomerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BusinessCustomer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BusinessCustomer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BusinessCustomer"> | Date | string
    email?: StringWithAggregatesFilter<"BusinessCustomer"> | string
    mobile?: StringNullableWithAggregatesFilter<"BusinessCustomer"> | string | null
    firstName?: StringWithAggregatesFilter<"BusinessCustomer"> | string
    lastName?: StringWithAggregatesFilter<"BusinessCustomer"> | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: IntFilter<"Customer"> | number
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    email?: StringFilter<"Customer"> | string
    mobile?: StringNullableFilter<"Customer"> | string | null
    firstName?: StringNullableFilter<"Customer"> | string | null
    lastName?: StringNullableFilter<"Customer"> | string | null
    appointments?: AppointmentListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    mobile?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    appointments?: AppointmentOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    mobile?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    firstName?: StringNullableFilter<"Customer"> | string | null
    lastName?: StringNullableFilter<"Customer"> | string | null
    appointments?: AppointmentListRelationFilter
  }, "id" | "email" | "mobile">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    mobile?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    email?: StringWithAggregatesFilter<"Customer"> | string
    mobile?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    firstName?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"Customer"> | string | null
  }

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: IntFilter<"Organization"> | number
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    legalName?: StringFilter<"Organization"> | string
    firstLineOfAddress?: StringFilter<"Organization"> | string
    secondLineOfAddress?: StringNullableFilter<"Organization"> | string | null
    city?: StringFilter<"Organization"> | string
    postCode?: StringFilter<"Organization"> | string
    stripeCustomerId?: StringNullableFilter<"Organization"> | string | null
    subscriptionId?: IntFilter<"Organization"> | number
    businessCustomers?: XOR<OrganizationOnBusinessCustomerNullableScalarRelationFilter, OrganizationOnBusinessCustomerWhereInput> | null
    subscription?: XOR<SubscriptionScalarRelationFilter, SubscriptionWhereInput>
    business?: BusinessListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    legalName?: SortOrder
    firstLineOfAddress?: SortOrder
    secondLineOfAddress?: SortOrderInput | SortOrder
    city?: SortOrder
    postCode?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    subscriptionId?: SortOrder
    businessCustomers?: OrganizationOnBusinessCustomerOrderByWithRelationInput
    subscription?: SubscriptionOrderByWithRelationInput
    business?: BusinessOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    subscriptionId?: number
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    legalName?: StringFilter<"Organization"> | string
    firstLineOfAddress?: StringFilter<"Organization"> | string
    secondLineOfAddress?: StringNullableFilter<"Organization"> | string | null
    city?: StringFilter<"Organization"> | string
    postCode?: StringFilter<"Organization"> | string
    stripeCustomerId?: StringNullableFilter<"Organization"> | string | null
    businessCustomers?: XOR<OrganizationOnBusinessCustomerNullableScalarRelationFilter, OrganizationOnBusinessCustomerWhereInput> | null
    subscription?: XOR<SubscriptionScalarRelationFilter, SubscriptionWhereInput>
    business?: BusinessListRelationFilter
  }, "id" | "subscriptionId">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    legalName?: SortOrder
    firstLineOfAddress?: SortOrder
    secondLineOfAddress?: SortOrderInput | SortOrder
    city?: SortOrder
    postCode?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    subscriptionId?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _avg?: OrganizationAvgOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
    _sum?: OrganizationSumOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Organization"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    legalName?: StringWithAggregatesFilter<"Organization"> | string
    firstLineOfAddress?: StringWithAggregatesFilter<"Organization"> | string
    secondLineOfAddress?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    city?: StringWithAggregatesFilter<"Organization"> | string
    postCode?: StringWithAggregatesFilter<"Organization"> | string
    stripeCustomerId?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    subscriptionId?: IntWithAggregatesFilter<"Organization"> | number
  }

  export type OrganizationOnBusinessCustomerWhereInput = {
    AND?: OrganizationOnBusinessCustomerWhereInput | OrganizationOnBusinessCustomerWhereInput[]
    OR?: OrganizationOnBusinessCustomerWhereInput[]
    NOT?: OrganizationOnBusinessCustomerWhereInput | OrganizationOnBusinessCustomerWhereInput[]
    organizationId?: IntFilter<"OrganizationOnBusinessCustomer"> | number
    businessCustomerId?: IntFilter<"OrganizationOnBusinessCustomer"> | number
    role?: EnumOrganizationRoleFilter<"OrganizationOnBusinessCustomer"> | $Enums.OrganizationRole
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    businessCustomer?: XOR<BusinessCustomerScalarRelationFilter, BusinessCustomerWhereInput>
  }

  export type OrganizationOnBusinessCustomerOrderByWithRelationInput = {
    organizationId?: SortOrder
    businessCustomerId?: SortOrder
    role?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    businessCustomer?: BusinessCustomerOrderByWithRelationInput
  }

  export type OrganizationOnBusinessCustomerWhereUniqueInput = Prisma.AtLeast<{
    organizationId?: number
    businessCustomerId?: number
    organizationId_businessCustomerId?: OrganizationOnBusinessCustomerOrganizationIdBusinessCustomerIdCompoundUniqueInput
    AND?: OrganizationOnBusinessCustomerWhereInput | OrganizationOnBusinessCustomerWhereInput[]
    OR?: OrganizationOnBusinessCustomerWhereInput[]
    NOT?: OrganizationOnBusinessCustomerWhereInput | OrganizationOnBusinessCustomerWhereInput[]
    role?: EnumOrganizationRoleFilter<"OrganizationOnBusinessCustomer"> | $Enums.OrganizationRole
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    businessCustomer?: XOR<BusinessCustomerScalarRelationFilter, BusinessCustomerWhereInput>
  }, "organizationId_businessCustomerId" | "organizationId" | "businessCustomerId">

  export type OrganizationOnBusinessCustomerOrderByWithAggregationInput = {
    organizationId?: SortOrder
    businessCustomerId?: SortOrder
    role?: SortOrder
    _count?: OrganizationOnBusinessCustomerCountOrderByAggregateInput
    _avg?: OrganizationOnBusinessCustomerAvgOrderByAggregateInput
    _max?: OrganizationOnBusinessCustomerMaxOrderByAggregateInput
    _min?: OrganizationOnBusinessCustomerMinOrderByAggregateInput
    _sum?: OrganizationOnBusinessCustomerSumOrderByAggregateInput
  }

  export type OrganizationOnBusinessCustomerScalarWhereWithAggregatesInput = {
    AND?: OrganizationOnBusinessCustomerScalarWhereWithAggregatesInput | OrganizationOnBusinessCustomerScalarWhereWithAggregatesInput[]
    OR?: OrganizationOnBusinessCustomerScalarWhereWithAggregatesInput[]
    NOT?: OrganizationOnBusinessCustomerScalarWhereWithAggregatesInput | OrganizationOnBusinessCustomerScalarWhereWithAggregatesInput[]
    organizationId?: IntWithAggregatesFilter<"OrganizationOnBusinessCustomer"> | number
    businessCustomerId?: IntWithAggregatesFilter<"OrganizationOnBusinessCustomer"> | number
    role?: EnumOrganizationRoleWithAggregatesFilter<"OrganizationOnBusinessCustomer"> | $Enums.OrganizationRole
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: IntFilter<"Subscription"> | number
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    level?: EnumSubscriptionLevelFilter<"Subscription"> | $Enums.SubscriptionLevel
    price?: DecimalFilter<"Subscription"> | Decimal | DecimalJsLike | number | string
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    stripeCustomerId?: StringNullableFilter<"Subscription"> | string | null
    stripeSubscriptionId?: StringNullableFilter<"Subscription"> | string | null
    trialEndsAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    paymentFrequency?: EnumPaymentFrequencyFilter<"Subscription"> | $Enums.PaymentFrequency
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    level?: SortOrder
    price?: SortOrder
    status?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    stripeSubscriptionId?: SortOrderInput | SortOrder
    trialEndsAt?: SortOrderInput | SortOrder
    paymentFrequency?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    level?: EnumSubscriptionLevelFilter<"Subscription"> | $Enums.SubscriptionLevel
    price?: DecimalFilter<"Subscription"> | Decimal | DecimalJsLike | number | string
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    stripeCustomerId?: StringNullableFilter<"Subscription"> | string | null
    stripeSubscriptionId?: StringNullableFilter<"Subscription"> | string | null
    trialEndsAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    paymentFrequency?: EnumPaymentFrequencyFilter<"Subscription"> | $Enums.PaymentFrequency
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
  }, "id">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    level?: SortOrder
    price?: SortOrder
    status?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    stripeSubscriptionId?: SortOrderInput | SortOrder
    trialEndsAt?: SortOrderInput | SortOrder
    paymentFrequency?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _avg?: SubscriptionAvgOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
    _sum?: SubscriptionSumOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subscription"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    level?: EnumSubscriptionLevelWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionLevel
    price?: DecimalWithAggregatesFilter<"Subscription"> | Decimal | DecimalJsLike | number | string
    status?: EnumSubscriptionStatusWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionStatus
    stripeCustomerId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    stripeSubscriptionId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    trialEndsAt?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    paymentFrequency?: EnumPaymentFrequencyWithAggregatesFilter<"Subscription"> | $Enums.PaymentFrequency
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: IntFilter<"Service"> | number
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    active?: BoolFilter<"Service"> | boolean
    businessId?: IntNullableFilter<"Service"> | number | null
    availibilityGroupId?: IntFilter<"Service"> | number
    Business?: XOR<BusinessNullableScalarRelationFilter, BusinessWhereInput> | null
    appointments?: AppointmentListRelationFilter
    availibilityGroup?: XOR<AvailabilityGroupScalarRelationFilter, AvailabilityGroupWhereInput>
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    active?: SortOrder
    businessId?: SortOrderInput | SortOrder
    availibilityGroupId?: SortOrder
    Business?: BusinessOrderByWithRelationInput
    appointments?: AppointmentOrderByRelationAggregateInput
    availibilityGroup?: AvailabilityGroupOrderByWithRelationInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    active?: BoolFilter<"Service"> | boolean
    businessId?: IntNullableFilter<"Service"> | number | null
    availibilityGroupId?: IntFilter<"Service"> | number
    Business?: XOR<BusinessNullableScalarRelationFilter, BusinessWhereInput> | null
    appointments?: AppointmentListRelationFilter
    availibilityGroup?: XOR<AvailabilityGroupScalarRelationFilter, AvailabilityGroupWhereInput>
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    active?: SortOrder
    businessId?: SortOrderInput | SortOrder
    availibilityGroupId?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Service"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    active?: BoolWithAggregatesFilter<"Service"> | boolean
    businessId?: IntNullableWithAggregatesFilter<"Service"> | number | null
    availibilityGroupId?: IntWithAggregatesFilter<"Service"> | number
  }

  export type AvailabilityGroupWhereInput = {
    AND?: AvailabilityGroupWhereInput | AvailabilityGroupWhereInput[]
    OR?: AvailabilityGroupWhereInput[]
    NOT?: AvailabilityGroupWhereInput | AvailabilityGroupWhereInput[]
    id?: IntFilter<"AvailabilityGroup"> | number
    createdAt?: DateTimeFilter<"AvailabilityGroup"> | Date | string
    updatedAt?: DateTimeFilter<"AvailabilityGroup"> | Date | string
    dailyAvailability?: DailyAvailabilityListRelationFilter
    services?: ServiceListRelationFilter
    BookableSlot?: BookableSlotListRelationFilter
  }

  export type AvailabilityGroupOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dailyAvailability?: DailyAvailabilityOrderByRelationAggregateInput
    services?: ServiceOrderByRelationAggregateInput
    BookableSlot?: BookableSlotOrderByRelationAggregateInput
  }

  export type AvailabilityGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AvailabilityGroupWhereInput | AvailabilityGroupWhereInput[]
    OR?: AvailabilityGroupWhereInput[]
    NOT?: AvailabilityGroupWhereInput | AvailabilityGroupWhereInput[]
    createdAt?: DateTimeFilter<"AvailabilityGroup"> | Date | string
    updatedAt?: DateTimeFilter<"AvailabilityGroup"> | Date | string
    dailyAvailability?: DailyAvailabilityListRelationFilter
    services?: ServiceListRelationFilter
    BookableSlot?: BookableSlotListRelationFilter
  }, "id">

  export type AvailabilityGroupOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AvailabilityGroupCountOrderByAggregateInput
    _avg?: AvailabilityGroupAvgOrderByAggregateInput
    _max?: AvailabilityGroupMaxOrderByAggregateInput
    _min?: AvailabilityGroupMinOrderByAggregateInput
    _sum?: AvailabilityGroupSumOrderByAggregateInput
  }

  export type AvailabilityGroupScalarWhereWithAggregatesInput = {
    AND?: AvailabilityGroupScalarWhereWithAggregatesInput | AvailabilityGroupScalarWhereWithAggregatesInput[]
    OR?: AvailabilityGroupScalarWhereWithAggregatesInput[]
    NOT?: AvailabilityGroupScalarWhereWithAggregatesInput | AvailabilityGroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AvailabilityGroup"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AvailabilityGroup"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AvailabilityGroup"> | Date | string
  }

  export type DailyAvailabilityWhereInput = {
    AND?: DailyAvailabilityWhereInput | DailyAvailabilityWhereInput[]
    OR?: DailyAvailabilityWhereInput[]
    NOT?: DailyAvailabilityWhereInput | DailyAvailabilityWhereInput[]
    id?: IntFilter<"DailyAvailability"> | number
    availabilityGroupId?: IntFilter<"DailyAvailability"> | number
    dayOfWeek?: EnumWeekDayFilter<"DailyAvailability"> | $Enums.WeekDay
    availabilityGroup?: XOR<AvailabilityGroupScalarRelationFilter, AvailabilityGroupWhereInput>
    availabilityBlocks?: TimeBlockListRelationFilter
  }

  export type DailyAvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    availabilityGroupId?: SortOrder
    dayOfWeek?: SortOrder
    availabilityGroup?: AvailabilityGroupOrderByWithRelationInput
    availabilityBlocks?: TimeBlockOrderByRelationAggregateInput
  }

  export type DailyAvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    availabilityGroupId_dayOfWeek?: DailyAvailabilityAvailabilityGroupIdDayOfWeekCompoundUniqueInput
    AND?: DailyAvailabilityWhereInput | DailyAvailabilityWhereInput[]
    OR?: DailyAvailabilityWhereInput[]
    NOT?: DailyAvailabilityWhereInput | DailyAvailabilityWhereInput[]
    availabilityGroupId?: IntFilter<"DailyAvailability"> | number
    dayOfWeek?: EnumWeekDayFilter<"DailyAvailability"> | $Enums.WeekDay
    availabilityGroup?: XOR<AvailabilityGroupScalarRelationFilter, AvailabilityGroupWhereInput>
    availabilityBlocks?: TimeBlockListRelationFilter
  }, "id" | "availabilityGroupId_dayOfWeek">

  export type DailyAvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    availabilityGroupId?: SortOrder
    dayOfWeek?: SortOrder
    _count?: DailyAvailabilityCountOrderByAggregateInput
    _avg?: DailyAvailabilityAvgOrderByAggregateInput
    _max?: DailyAvailabilityMaxOrderByAggregateInput
    _min?: DailyAvailabilityMinOrderByAggregateInput
    _sum?: DailyAvailabilitySumOrderByAggregateInput
  }

  export type DailyAvailabilityScalarWhereWithAggregatesInput = {
    AND?: DailyAvailabilityScalarWhereWithAggregatesInput | DailyAvailabilityScalarWhereWithAggregatesInput[]
    OR?: DailyAvailabilityScalarWhereWithAggregatesInput[]
    NOT?: DailyAvailabilityScalarWhereWithAggregatesInput | DailyAvailabilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DailyAvailability"> | number
    availabilityGroupId?: IntWithAggregatesFilter<"DailyAvailability"> | number
    dayOfWeek?: EnumWeekDayWithAggregatesFilter<"DailyAvailability"> | $Enums.WeekDay
  }

  export type TimeBlockWhereInput = {
    AND?: TimeBlockWhereInput | TimeBlockWhereInput[]
    OR?: TimeBlockWhereInput[]
    NOT?: TimeBlockWhereInput | TimeBlockWhereInput[]
    id?: IntFilter<"TimeBlock"> | number
    dailyAvailabilityDayId?: IntFilter<"TimeBlock"> | number
    startTime?: StringFilter<"TimeBlock"> | string
    endTime?: StringFilter<"TimeBlock"> | string
    dailyAvailabilityDay?: XOR<DailyAvailabilityScalarRelationFilter, DailyAvailabilityWhereInput>
  }

  export type TimeBlockOrderByWithRelationInput = {
    id?: SortOrder
    dailyAvailabilityDayId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    dailyAvailabilityDay?: DailyAvailabilityOrderByWithRelationInput
  }

  export type TimeBlockWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TimeBlockWhereInput | TimeBlockWhereInput[]
    OR?: TimeBlockWhereInput[]
    NOT?: TimeBlockWhereInput | TimeBlockWhereInput[]
    dailyAvailabilityDayId?: IntFilter<"TimeBlock"> | number
    startTime?: StringFilter<"TimeBlock"> | string
    endTime?: StringFilter<"TimeBlock"> | string
    dailyAvailabilityDay?: XOR<DailyAvailabilityScalarRelationFilter, DailyAvailabilityWhereInput>
  }, "id">

  export type TimeBlockOrderByWithAggregationInput = {
    id?: SortOrder
    dailyAvailabilityDayId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    _count?: TimeBlockCountOrderByAggregateInput
    _avg?: TimeBlockAvgOrderByAggregateInput
    _max?: TimeBlockMaxOrderByAggregateInput
    _min?: TimeBlockMinOrderByAggregateInput
    _sum?: TimeBlockSumOrderByAggregateInput
  }

  export type TimeBlockScalarWhereWithAggregatesInput = {
    AND?: TimeBlockScalarWhereWithAggregatesInput | TimeBlockScalarWhereWithAggregatesInput[]
    OR?: TimeBlockScalarWhereWithAggregatesInput[]
    NOT?: TimeBlockScalarWhereWithAggregatesInput | TimeBlockScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TimeBlock"> | number
    dailyAvailabilityDayId?: IntWithAggregatesFilter<"TimeBlock"> | number
    startTime?: StringWithAggregatesFilter<"TimeBlock"> | string
    endTime?: StringWithAggregatesFilter<"TimeBlock"> | string
  }

  export type BookableSlotWhereInput = {
    AND?: BookableSlotWhereInput | BookableSlotWhereInput[]
    OR?: BookableSlotWhereInput[]
    NOT?: BookableSlotWhereInput | BookableSlotWhereInput[]
    id?: IntFilter<"BookableSlot"> | number
    createdAt?: DateTimeFilter<"BookableSlot"> | Date | string
    updatedAt?: DateTimeFilter<"BookableSlot"> | Date | string
    startTime?: DateTimeFilter<"BookableSlot"> | Date | string
    endTime?: DateTimeFilter<"BookableSlot"> | Date | string
    availabilityGroupId?: IntNullableFilter<"BookableSlot"> | number | null
    Appointment?: AppointmentListRelationFilter
    AvailabilityGroup?: XOR<AvailabilityGroupNullableScalarRelationFilter, AvailabilityGroupWhereInput> | null
  }

  export type BookableSlotOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    availabilityGroupId?: SortOrderInput | SortOrder
    Appointment?: AppointmentOrderByRelationAggregateInput
    AvailabilityGroup?: AvailabilityGroupOrderByWithRelationInput
  }

  export type BookableSlotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookableSlotWhereInput | BookableSlotWhereInput[]
    OR?: BookableSlotWhereInput[]
    NOT?: BookableSlotWhereInput | BookableSlotWhereInput[]
    createdAt?: DateTimeFilter<"BookableSlot"> | Date | string
    updatedAt?: DateTimeFilter<"BookableSlot"> | Date | string
    startTime?: DateTimeFilter<"BookableSlot"> | Date | string
    endTime?: DateTimeFilter<"BookableSlot"> | Date | string
    availabilityGroupId?: IntNullableFilter<"BookableSlot"> | number | null
    Appointment?: AppointmentListRelationFilter
    AvailabilityGroup?: XOR<AvailabilityGroupNullableScalarRelationFilter, AvailabilityGroupWhereInput> | null
  }, "id">

  export type BookableSlotOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    availabilityGroupId?: SortOrderInput | SortOrder
    _count?: BookableSlotCountOrderByAggregateInput
    _avg?: BookableSlotAvgOrderByAggregateInput
    _max?: BookableSlotMaxOrderByAggregateInput
    _min?: BookableSlotMinOrderByAggregateInput
    _sum?: BookableSlotSumOrderByAggregateInput
  }

  export type BookableSlotScalarWhereWithAggregatesInput = {
    AND?: BookableSlotScalarWhereWithAggregatesInput | BookableSlotScalarWhereWithAggregatesInput[]
    OR?: BookableSlotScalarWhereWithAggregatesInput[]
    NOT?: BookableSlotScalarWhereWithAggregatesInput | BookableSlotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BookableSlot"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BookableSlot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BookableSlot"> | Date | string
    startTime?: DateTimeWithAggregatesFilter<"BookableSlot"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"BookableSlot"> | Date | string
    availabilityGroupId?: IntNullableWithAggregatesFilter<"BookableSlot"> | number | null
  }

  export type AppointmentCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.Status
    customer: CustomerCreateNestedOneWithoutAppointmentsInput
    service: ServiceCreateNestedOneWithoutAppointmentsInput
    slot: BookableSlotCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customerId: number
    serviceId: number
    slotId: number
    status: $Enums.Status
  }

  export type AppointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    customer?: CustomerUpdateOneRequiredWithoutAppointmentsNestedInput
    service?: ServiceUpdateOneRequiredWithoutAppointmentsNestedInput
    slot?: BookableSlotUpdateOneRequiredWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    slotId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type AppointmentCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customerId: number
    serviceId: number
    slotId: number
    status: $Enums.Status
  }

  export type AppointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    slotId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type BusinessCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    businessName: string
    contactNumber: string
    organization: OrganizationCreateNestedOneWithoutBusinessInput
    services?: ServiceCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    businessName: string
    contactNumber: string
    organizationId: number
    services?: ServiceUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessName?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    organization?: OrganizationUpdateOneRequiredWithoutBusinessNestedInput
    services?: ServiceUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessName?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    organizationId?: IntFieldUpdateOperationsInput | number
    services?: ServiceUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    businessName: string
    contactNumber: string
    organizationId: number
  }

  export type BusinessUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessName?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessName?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    organizationId?: IntFieldUpdateOperationsInput | number
  }

  export type BusinessCustomerCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    mobile?: string | null
    firstName: string
    lastName: string
    organization?: OrganizationOnBusinessCustomerCreateNestedOneWithoutBusinessCustomerInput
  }

  export type BusinessCustomerUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    mobile?: string | null
    firstName: string
    lastName: string
    organization?: OrganizationOnBusinessCustomerUncheckedCreateNestedOneWithoutBusinessCustomerInput
  }

  export type BusinessCustomerUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    organization?: OrganizationOnBusinessCustomerUpdateOneWithoutBusinessCustomerNestedInput
  }

  export type BusinessCustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    organization?: OrganizationOnBusinessCustomerUncheckedUpdateOneWithoutBusinessCustomerNestedInput
  }

  export type BusinessCustomerCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    mobile?: string | null
    firstName: string
    lastName: string
  }

  export type BusinessCustomerUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessCustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    mobile?: string | null
    firstName?: string | null
    lastName?: string | null
    appointments?: AppointmentCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    mobile?: string | null
    firstName?: string | null
    lastName?: string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    mobile?: string | null
    firstName?: string | null
    lastName?: string | null
  }

  export type CustomerUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrganizationCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    legalName: string
    firstLineOfAddress: string
    secondLineOfAddress?: string | null
    city: string
    postCode: string
    stripeCustomerId?: string | null
    businessCustomers?: OrganizationOnBusinessCustomerCreateNestedOneWithoutOrganizationInput
    subscription: SubscriptionCreateNestedOneWithoutOrganizationInput
    business?: BusinessCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    legalName: string
    firstLineOfAddress: string
    secondLineOfAddress?: string | null
    city: string
    postCode: string
    stripeCustomerId?: string | null
    subscriptionId: number
    businessCustomers?: OrganizationOnBusinessCustomerUncheckedCreateNestedOneWithoutOrganizationInput
    business?: BusinessUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legalName?: StringFieldUpdateOperationsInput | string
    firstLineOfAddress?: StringFieldUpdateOperationsInput | string
    secondLineOfAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postCode?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    businessCustomers?: OrganizationOnBusinessCustomerUpdateOneWithoutOrganizationNestedInput
    subscription?: SubscriptionUpdateOneRequiredWithoutOrganizationNestedInput
    business?: BusinessUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legalName?: StringFieldUpdateOperationsInput | string
    firstLineOfAddress?: StringFieldUpdateOperationsInput | string
    secondLineOfAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postCode?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: IntFieldUpdateOperationsInput | number
    businessCustomers?: OrganizationOnBusinessCustomerUncheckedUpdateOneWithoutOrganizationNestedInput
    business?: BusinessUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    legalName: string
    firstLineOfAddress: string
    secondLineOfAddress?: string | null
    city: string
    postCode: string
    stripeCustomerId?: string | null
    subscriptionId: number
  }

  export type OrganizationUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legalName?: StringFieldUpdateOperationsInput | string
    firstLineOfAddress?: StringFieldUpdateOperationsInput | string
    secondLineOfAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postCode?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legalName?: StringFieldUpdateOperationsInput | string
    firstLineOfAddress?: StringFieldUpdateOperationsInput | string
    secondLineOfAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postCode?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: IntFieldUpdateOperationsInput | number
  }

  export type OrganizationOnBusinessCustomerCreateInput = {
    role: $Enums.OrganizationRole
    organization: OrganizationCreateNestedOneWithoutBusinessCustomersInput
    businessCustomer: BusinessCustomerCreateNestedOneWithoutOrganizationInput
  }

  export type OrganizationOnBusinessCustomerUncheckedCreateInput = {
    organizationId: number
    businessCustomerId: number
    role: $Enums.OrganizationRole
  }

  export type OrganizationOnBusinessCustomerUpdateInput = {
    role?: EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole
    organization?: OrganizationUpdateOneRequiredWithoutBusinessCustomersNestedInput
    businessCustomer?: BusinessCustomerUpdateOneRequiredWithoutOrganizationNestedInput
  }

  export type OrganizationOnBusinessCustomerUncheckedUpdateInput = {
    organizationId?: IntFieldUpdateOperationsInput | number
    businessCustomerId?: IntFieldUpdateOperationsInput | number
    role?: EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole
  }

  export type OrganizationOnBusinessCustomerCreateManyInput = {
    organizationId: number
    businessCustomerId: number
    role: $Enums.OrganizationRole
  }

  export type OrganizationOnBusinessCustomerUpdateManyMutationInput = {
    role?: EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole
  }

  export type OrganizationOnBusinessCustomerUncheckedUpdateManyInput = {
    organizationId?: IntFieldUpdateOperationsInput | number
    businessCustomerId?: IntFieldUpdateOperationsInput | number
    role?: EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole
  }

  export type SubscriptionCreateInput = {
    createdAt?: Date | string
    level: $Enums.SubscriptionLevel
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    trialEndsAt?: Date | string | null
    paymentFrequency: $Enums.PaymentFrequency
    organization?: OrganizationCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    level: $Enums.SubscriptionLevel
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    trialEndsAt?: Date | string | null
    paymentFrequency: $Enums.PaymentFrequency
    organization?: OrganizationUncheckedCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: EnumSubscriptionLevelFieldUpdateOperationsInput | $Enums.SubscriptionLevel
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    organization?: OrganizationUpdateOneWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: EnumSubscriptionLevelFieldUpdateOperationsInput | $Enums.SubscriptionLevel
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    organization?: OrganizationUncheckedUpdateOneWithoutSubscriptionNestedInput
  }

  export type SubscriptionCreateManyInput = {
    id?: number
    createdAt?: Date | string
    level: $Enums.SubscriptionLevel
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    trialEndsAt?: Date | string | null
    paymentFrequency: $Enums.PaymentFrequency
  }

  export type SubscriptionUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: EnumSubscriptionLevelFieldUpdateOperationsInput | $Enums.SubscriptionLevel
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: EnumSubscriptionLevelFieldUpdateOperationsInput | $Enums.SubscriptionLevel
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
  }

  export type ServiceCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    Business?: BusinessCreateNestedOneWithoutServicesInput
    appointments?: AppointmentCreateNestedManyWithoutServiceInput
    availibilityGroup: AvailabilityGroupCreateNestedOneWithoutServicesInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    businessId?: number | null
    availibilityGroupId: number
    appointments?: AppointmentUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    Business?: BusinessUpdateOneWithoutServicesNestedInput
    appointments?: AppointmentUpdateManyWithoutServiceNestedInput
    availibilityGroup?: AvailabilityGroupUpdateOneRequiredWithoutServicesNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    businessId?: NullableIntFieldUpdateOperationsInput | number | null
    availibilityGroupId?: IntFieldUpdateOperationsInput | number
    appointments?: AppointmentUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    businessId?: number | null
    availibilityGroupId: number
  }

  export type ServiceUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    businessId?: NullableIntFieldUpdateOperationsInput | number | null
    availibilityGroupId?: IntFieldUpdateOperationsInput | number
  }

  export type AvailabilityGroupCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyAvailability?: DailyAvailabilityCreateNestedManyWithoutAvailabilityGroupInput
    services?: ServiceCreateNestedManyWithoutAvailibilityGroupInput
    BookableSlot?: BookableSlotCreateNestedManyWithoutAvailabilityGroupInput
  }

  export type AvailabilityGroupUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyAvailability?: DailyAvailabilityUncheckedCreateNestedManyWithoutAvailabilityGroupInput
    services?: ServiceUncheckedCreateNestedManyWithoutAvailibilityGroupInput
    BookableSlot?: BookableSlotUncheckedCreateNestedManyWithoutAvailabilityGroupInput
  }

  export type AvailabilityGroupUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyAvailability?: DailyAvailabilityUpdateManyWithoutAvailabilityGroupNestedInput
    services?: ServiceUpdateManyWithoutAvailibilityGroupNestedInput
    BookableSlot?: BookableSlotUpdateManyWithoutAvailabilityGroupNestedInput
  }

  export type AvailabilityGroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyAvailability?: DailyAvailabilityUncheckedUpdateManyWithoutAvailabilityGroupNestedInput
    services?: ServiceUncheckedUpdateManyWithoutAvailibilityGroupNestedInput
    BookableSlot?: BookableSlotUncheckedUpdateManyWithoutAvailabilityGroupNestedInput
  }

  export type AvailabilityGroupCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityGroupUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityGroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyAvailabilityCreateInput = {
    dayOfWeek: $Enums.WeekDay
    availabilityGroup: AvailabilityGroupCreateNestedOneWithoutDailyAvailabilityInput
    availabilityBlocks?: TimeBlockCreateNestedManyWithoutDailyAvailabilityDayInput
  }

  export type DailyAvailabilityUncheckedCreateInput = {
    id?: number
    availabilityGroupId: number
    dayOfWeek: $Enums.WeekDay
    availabilityBlocks?: TimeBlockUncheckedCreateNestedManyWithoutDailyAvailabilityDayInput
  }

  export type DailyAvailabilityUpdateInput = {
    dayOfWeek?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    availabilityGroup?: AvailabilityGroupUpdateOneRequiredWithoutDailyAvailabilityNestedInput
    availabilityBlocks?: TimeBlockUpdateManyWithoutDailyAvailabilityDayNestedInput
  }

  export type DailyAvailabilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    availabilityGroupId?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    availabilityBlocks?: TimeBlockUncheckedUpdateManyWithoutDailyAvailabilityDayNestedInput
  }

  export type DailyAvailabilityCreateManyInput = {
    id?: number
    availabilityGroupId: number
    dayOfWeek: $Enums.WeekDay
  }

  export type DailyAvailabilityUpdateManyMutationInput = {
    dayOfWeek?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
  }

  export type DailyAvailabilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    availabilityGroupId?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
  }

  export type TimeBlockCreateInput = {
    startTime: string
    endTime: string
    dailyAvailabilityDay: DailyAvailabilityCreateNestedOneWithoutAvailabilityBlocksInput
  }

  export type TimeBlockUncheckedCreateInput = {
    id?: number
    dailyAvailabilityDayId: number
    startTime: string
    endTime: string
  }

  export type TimeBlockUpdateInput = {
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    dailyAvailabilityDay?: DailyAvailabilityUpdateOneRequiredWithoutAvailabilityBlocksNestedInput
  }

  export type TimeBlockUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dailyAvailabilityDayId?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type TimeBlockCreateManyInput = {
    id?: number
    dailyAvailabilityDayId: number
    startTime: string
    endTime: string
  }

  export type TimeBlockUpdateManyMutationInput = {
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type TimeBlockUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dailyAvailabilityDayId?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type BookableSlotCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    startTime: Date | string
    endTime: Date | string
    Appointment?: AppointmentCreateNestedManyWithoutSlotInput
    AvailabilityGroup?: AvailabilityGroupCreateNestedOneWithoutBookableSlotInput
  }

  export type BookableSlotUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    startTime: Date | string
    endTime: Date | string
    availabilityGroupId?: number | null
    Appointment?: AppointmentUncheckedCreateNestedManyWithoutSlotInput
  }

  export type BookableSlotUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    Appointment?: AppointmentUpdateManyWithoutSlotNestedInput
    AvailabilityGroup?: AvailabilityGroupUpdateOneWithoutBookableSlotNestedInput
  }

  export type BookableSlotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilityGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    Appointment?: AppointmentUncheckedUpdateManyWithoutSlotNestedInput
  }

  export type BookableSlotCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    startTime: Date | string
    endTime: Date | string
    availabilityGroupId?: number | null
  }

  export type BookableSlotUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookableSlotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilityGroupId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type BookableSlotScalarRelationFilter = {
    is?: BookableSlotWhereInput
    isNot?: BookableSlotWhereInput
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customerId?: SortOrder
    serviceId?: SortOrder
    slotId?: SortOrder
    status?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    customerId?: SortOrder
    serviceId?: SortOrder
    slotId?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customerId?: SortOrder
    serviceId?: SortOrder
    slotId?: SortOrder
    status?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customerId?: SortOrder
    serviceId?: SortOrder
    slotId?: SortOrder
    status?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    customerId?: SortOrder
    serviceId?: SortOrder
    slotId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput
    some?: ServiceWhereInput
    none?: ServiceWhereInput
  }

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    businessName?: SortOrder
    contactNumber?: SortOrder
    organizationId?: SortOrder
  }

  export type BusinessAvgOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
  }

  export type BusinessMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    businessName?: SortOrder
    contactNumber?: SortOrder
    organizationId?: SortOrder
  }

  export type BusinessMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    businessName?: SortOrder
    contactNumber?: SortOrder
    organizationId?: SortOrder
  }

  export type BusinessSumOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type OrganizationOnBusinessCustomerNullableScalarRelationFilter = {
    is?: OrganizationOnBusinessCustomerWhereInput | null
    isNot?: OrganizationOnBusinessCustomerWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BusinessCustomerCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
  }

  export type BusinessCustomerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BusinessCustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
  }

  export type BusinessCustomerMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
  }

  export type BusinessCustomerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubscriptionScalarRelationFilter = {
    is?: SubscriptionWhereInput
    isNot?: SubscriptionWhereInput
  }

  export type BusinessListRelationFilter = {
    every?: BusinessWhereInput
    some?: BusinessWhereInput
    none?: BusinessWhereInput
  }

  export type BusinessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    legalName?: SortOrder
    firstLineOfAddress?: SortOrder
    secondLineOfAddress?: SortOrder
    city?: SortOrder
    postCode?: SortOrder
    stripeCustomerId?: SortOrder
    subscriptionId?: SortOrder
  }

  export type OrganizationAvgOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    legalName?: SortOrder
    firstLineOfAddress?: SortOrder
    secondLineOfAddress?: SortOrder
    city?: SortOrder
    postCode?: SortOrder
    stripeCustomerId?: SortOrder
    subscriptionId?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    legalName?: SortOrder
    firstLineOfAddress?: SortOrder
    secondLineOfAddress?: SortOrder
    city?: SortOrder
    postCode?: SortOrder
    stripeCustomerId?: SortOrder
    subscriptionId?: SortOrder
  }

  export type OrganizationSumOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
  }

  export type EnumOrganizationRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganizationRole | EnumOrganizationRoleFieldRefInput<$PrismaModel>
    in?: $Enums.OrganizationRole[] | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrganizationRole[] | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumOrganizationRoleFilter<$PrismaModel> | $Enums.OrganizationRole
  }

  export type BusinessCustomerScalarRelationFilter = {
    is?: BusinessCustomerWhereInput
    isNot?: BusinessCustomerWhereInput
  }

  export type OrganizationOnBusinessCustomerOrganizationIdBusinessCustomerIdCompoundUniqueInput = {
    organizationId: number
    businessCustomerId: number
  }

  export type OrganizationOnBusinessCustomerCountOrderByAggregateInput = {
    organizationId?: SortOrder
    businessCustomerId?: SortOrder
    role?: SortOrder
  }

  export type OrganizationOnBusinessCustomerAvgOrderByAggregateInput = {
    organizationId?: SortOrder
    businessCustomerId?: SortOrder
  }

  export type OrganizationOnBusinessCustomerMaxOrderByAggregateInput = {
    organizationId?: SortOrder
    businessCustomerId?: SortOrder
    role?: SortOrder
  }

  export type OrganizationOnBusinessCustomerMinOrderByAggregateInput = {
    organizationId?: SortOrder
    businessCustomerId?: SortOrder
    role?: SortOrder
  }

  export type OrganizationOnBusinessCustomerSumOrderByAggregateInput = {
    organizationId?: SortOrder
    businessCustomerId?: SortOrder
  }

  export type EnumOrganizationRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganizationRole | EnumOrganizationRoleFieldRefInput<$PrismaModel>
    in?: $Enums.OrganizationRole[] | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrganizationRole[] | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumOrganizationRoleWithAggregatesFilter<$PrismaModel> | $Enums.OrganizationRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrganizationRoleFilter<$PrismaModel>
    _max?: NestedEnumOrganizationRoleFilter<$PrismaModel>
  }

  export type EnumSubscriptionLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionLevel | EnumSubscriptionLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionLevel[] | ListEnumSubscriptionLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionLevel[] | ListEnumSubscriptionLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionLevelFilter<$PrismaModel> | $Enums.SubscriptionLevel
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumPaymentFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentFrequency | EnumPaymentFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentFrequency[] | ListEnumPaymentFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentFrequency[] | ListEnumPaymentFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentFrequencyFilter<$PrismaModel> | $Enums.PaymentFrequency
  }

  export type OrganizationNullableScalarRelationFilter = {
    is?: OrganizationWhereInput | null
    isNot?: OrganizationWhereInput | null
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    level?: SortOrder
    price?: SortOrder
    status?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    trialEndsAt?: SortOrder
    paymentFrequency?: SortOrder
  }

  export type SubscriptionAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    level?: SortOrder
    price?: SortOrder
    status?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    trialEndsAt?: SortOrder
    paymentFrequency?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    level?: SortOrder
    price?: SortOrder
    status?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    trialEndsAt?: SortOrder
    paymentFrequency?: SortOrder
  }

  export type SubscriptionSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type EnumSubscriptionLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionLevel | EnumSubscriptionLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionLevel[] | ListEnumSubscriptionLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionLevel[] | ListEnumSubscriptionLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionLevelWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionLevelFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionLevelFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumPaymentFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentFrequency | EnumPaymentFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentFrequency[] | ListEnumPaymentFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentFrequency[] | ListEnumPaymentFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.PaymentFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentFrequencyFilter<$PrismaModel>
    _max?: NestedEnumPaymentFrequencyFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BusinessNullableScalarRelationFilter = {
    is?: BusinessWhereInput | null
    isNot?: BusinessWhereInput | null
  }

  export type AvailabilityGroupScalarRelationFilter = {
    is?: AvailabilityGroupWhereInput
    isNot?: AvailabilityGroupWhereInput
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    active?: SortOrder
    businessId?: SortOrder
    availibilityGroupId?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    availibilityGroupId?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    active?: SortOrder
    businessId?: SortOrder
    availibilityGroupId?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    active?: SortOrder
    businessId?: SortOrder
    availibilityGroupId?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    availibilityGroupId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DailyAvailabilityListRelationFilter = {
    every?: DailyAvailabilityWhereInput
    some?: DailyAvailabilityWhereInput
    none?: DailyAvailabilityWhereInput
  }

  export type BookableSlotListRelationFilter = {
    every?: BookableSlotWhereInput
    some?: BookableSlotWhereInput
    none?: BookableSlotWhereInput
  }

  export type DailyAvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookableSlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvailabilityGroupCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvailabilityGroupAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AvailabilityGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvailabilityGroupMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvailabilityGroupSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumWeekDayFilter<$PrismaModel = never> = {
    equals?: $Enums.WeekDay | EnumWeekDayFieldRefInput<$PrismaModel>
    in?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    not?: NestedEnumWeekDayFilter<$PrismaModel> | $Enums.WeekDay
  }

  export type TimeBlockListRelationFilter = {
    every?: TimeBlockWhereInput
    some?: TimeBlockWhereInput
    none?: TimeBlockWhereInput
  }

  export type TimeBlockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyAvailabilityAvailabilityGroupIdDayOfWeekCompoundUniqueInput = {
    availabilityGroupId: number
    dayOfWeek: $Enums.WeekDay
  }

  export type DailyAvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    availabilityGroupId?: SortOrder
    dayOfWeek?: SortOrder
  }

  export type DailyAvailabilityAvgOrderByAggregateInput = {
    id?: SortOrder
    availabilityGroupId?: SortOrder
  }

  export type DailyAvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    availabilityGroupId?: SortOrder
    dayOfWeek?: SortOrder
  }

  export type DailyAvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    availabilityGroupId?: SortOrder
    dayOfWeek?: SortOrder
  }

  export type DailyAvailabilitySumOrderByAggregateInput = {
    id?: SortOrder
    availabilityGroupId?: SortOrder
  }

  export type EnumWeekDayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WeekDay | EnumWeekDayFieldRefInput<$PrismaModel>
    in?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    not?: NestedEnumWeekDayWithAggregatesFilter<$PrismaModel> | $Enums.WeekDay
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWeekDayFilter<$PrismaModel>
    _max?: NestedEnumWeekDayFilter<$PrismaModel>
  }

  export type DailyAvailabilityScalarRelationFilter = {
    is?: DailyAvailabilityWhereInput
    isNot?: DailyAvailabilityWhereInput
  }

  export type TimeBlockCountOrderByAggregateInput = {
    id?: SortOrder
    dailyAvailabilityDayId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type TimeBlockAvgOrderByAggregateInput = {
    id?: SortOrder
    dailyAvailabilityDayId?: SortOrder
  }

  export type TimeBlockMaxOrderByAggregateInput = {
    id?: SortOrder
    dailyAvailabilityDayId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type TimeBlockMinOrderByAggregateInput = {
    id?: SortOrder
    dailyAvailabilityDayId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type TimeBlockSumOrderByAggregateInput = {
    id?: SortOrder
    dailyAvailabilityDayId?: SortOrder
  }

  export type AvailabilityGroupNullableScalarRelationFilter = {
    is?: AvailabilityGroupWhereInput | null
    isNot?: AvailabilityGroupWhereInput | null
  }

  export type BookableSlotCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    availabilityGroupId?: SortOrder
  }

  export type BookableSlotAvgOrderByAggregateInput = {
    id?: SortOrder
    availabilityGroupId?: SortOrder
  }

  export type BookableSlotMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    availabilityGroupId?: SortOrder
  }

  export type BookableSlotMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    availabilityGroupId?: SortOrder
  }

  export type BookableSlotSumOrderByAggregateInput = {
    id?: SortOrder
    availabilityGroupId?: SortOrder
  }

  export type CustomerCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<CustomerCreateWithoutAppointmentsInput, CustomerUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutAppointmentsInput
    connect?: CustomerWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<ServiceCreateWithoutAppointmentsInput, ServiceUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutAppointmentsInput
    connect?: ServiceWhereUniqueInput
  }

  export type BookableSlotCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<BookableSlotCreateWithoutAppointmentInput, BookableSlotUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: BookableSlotCreateOrConnectWithoutAppointmentInput
    connect?: BookableSlotWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type CustomerUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<CustomerCreateWithoutAppointmentsInput, CustomerUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutAppointmentsInput
    upsert?: CustomerUpsertWithoutAppointmentsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutAppointmentsInput, CustomerUpdateWithoutAppointmentsInput>, CustomerUncheckedUpdateWithoutAppointmentsInput>
  }

  export type ServiceUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<ServiceCreateWithoutAppointmentsInput, ServiceUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutAppointmentsInput
    upsert?: ServiceUpsertWithoutAppointmentsInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutAppointmentsInput, ServiceUpdateWithoutAppointmentsInput>, ServiceUncheckedUpdateWithoutAppointmentsInput>
  }

  export type BookableSlotUpdateOneRequiredWithoutAppointmentNestedInput = {
    create?: XOR<BookableSlotCreateWithoutAppointmentInput, BookableSlotUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: BookableSlotCreateOrConnectWithoutAppointmentInput
    upsert?: BookableSlotUpsertWithoutAppointmentInput
    connect?: BookableSlotWhereUniqueInput
    update?: XOR<XOR<BookableSlotUpdateToOneWithWhereWithoutAppointmentInput, BookableSlotUpdateWithoutAppointmentInput>, BookableSlotUncheckedUpdateWithoutAppointmentInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrganizationCreateNestedOneWithoutBusinessInput = {
    create?: XOR<OrganizationCreateWithoutBusinessInput, OrganizationUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutBusinessInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ServiceCreateNestedManyWithoutBusinessInput = {
    create?: XOR<ServiceCreateWithoutBusinessInput, ServiceUncheckedCreateWithoutBusinessInput> | ServiceCreateWithoutBusinessInput[] | ServiceUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutBusinessInput | ServiceCreateOrConnectWithoutBusinessInput[]
    createMany?: ServiceCreateManyBusinessInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<ServiceCreateWithoutBusinessInput, ServiceUncheckedCreateWithoutBusinessInput> | ServiceCreateWithoutBusinessInput[] | ServiceUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutBusinessInput | ServiceCreateOrConnectWithoutBusinessInput[]
    createMany?: ServiceCreateManyBusinessInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type OrganizationUpdateOneRequiredWithoutBusinessNestedInput = {
    create?: XOR<OrganizationCreateWithoutBusinessInput, OrganizationUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutBusinessInput
    upsert?: OrganizationUpsertWithoutBusinessInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutBusinessInput, OrganizationUpdateWithoutBusinessInput>, OrganizationUncheckedUpdateWithoutBusinessInput>
  }

  export type ServiceUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<ServiceCreateWithoutBusinessInput, ServiceUncheckedCreateWithoutBusinessInput> | ServiceCreateWithoutBusinessInput[] | ServiceUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutBusinessInput | ServiceCreateOrConnectWithoutBusinessInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutBusinessInput | ServiceUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: ServiceCreateManyBusinessInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutBusinessInput | ServiceUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutBusinessInput | ServiceUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<ServiceCreateWithoutBusinessInput, ServiceUncheckedCreateWithoutBusinessInput> | ServiceCreateWithoutBusinessInput[] | ServiceUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutBusinessInput | ServiceCreateOrConnectWithoutBusinessInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutBusinessInput | ServiceUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: ServiceCreateManyBusinessInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutBusinessInput | ServiceUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutBusinessInput | ServiceUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type OrganizationOnBusinessCustomerCreateNestedOneWithoutBusinessCustomerInput = {
    create?: XOR<OrganizationOnBusinessCustomerCreateWithoutBusinessCustomerInput, OrganizationOnBusinessCustomerUncheckedCreateWithoutBusinessCustomerInput>
    connectOrCreate?: OrganizationOnBusinessCustomerCreateOrConnectWithoutBusinessCustomerInput
    connect?: OrganizationOnBusinessCustomerWhereUniqueInput
  }

  export type OrganizationOnBusinessCustomerUncheckedCreateNestedOneWithoutBusinessCustomerInput = {
    create?: XOR<OrganizationOnBusinessCustomerCreateWithoutBusinessCustomerInput, OrganizationOnBusinessCustomerUncheckedCreateWithoutBusinessCustomerInput>
    connectOrCreate?: OrganizationOnBusinessCustomerCreateOrConnectWithoutBusinessCustomerInput
    connect?: OrganizationOnBusinessCustomerWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type OrganizationOnBusinessCustomerUpdateOneWithoutBusinessCustomerNestedInput = {
    create?: XOR<OrganizationOnBusinessCustomerCreateWithoutBusinessCustomerInput, OrganizationOnBusinessCustomerUncheckedCreateWithoutBusinessCustomerInput>
    connectOrCreate?: OrganizationOnBusinessCustomerCreateOrConnectWithoutBusinessCustomerInput
    upsert?: OrganizationOnBusinessCustomerUpsertWithoutBusinessCustomerInput
    disconnect?: OrganizationOnBusinessCustomerWhereInput | boolean
    delete?: OrganizationOnBusinessCustomerWhereInput | boolean
    connect?: OrganizationOnBusinessCustomerWhereUniqueInput
    update?: XOR<XOR<OrganizationOnBusinessCustomerUpdateToOneWithWhereWithoutBusinessCustomerInput, OrganizationOnBusinessCustomerUpdateWithoutBusinessCustomerInput>, OrganizationOnBusinessCustomerUncheckedUpdateWithoutBusinessCustomerInput>
  }

  export type OrganizationOnBusinessCustomerUncheckedUpdateOneWithoutBusinessCustomerNestedInput = {
    create?: XOR<OrganizationOnBusinessCustomerCreateWithoutBusinessCustomerInput, OrganizationOnBusinessCustomerUncheckedCreateWithoutBusinessCustomerInput>
    connectOrCreate?: OrganizationOnBusinessCustomerCreateOrConnectWithoutBusinessCustomerInput
    upsert?: OrganizationOnBusinessCustomerUpsertWithoutBusinessCustomerInput
    disconnect?: OrganizationOnBusinessCustomerWhereInput | boolean
    delete?: OrganizationOnBusinessCustomerWhereInput | boolean
    connect?: OrganizationOnBusinessCustomerWhereUniqueInput
    update?: XOR<XOR<OrganizationOnBusinessCustomerUpdateToOneWithWhereWithoutBusinessCustomerInput, OrganizationOnBusinessCustomerUpdateWithoutBusinessCustomerInput>, OrganizationOnBusinessCustomerUncheckedUpdateWithoutBusinessCustomerInput>
  }

  export type AppointmentCreateNestedManyWithoutCustomerInput = {
    create?: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput> | AppointmentCreateWithoutCustomerInput[] | AppointmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCustomerInput | AppointmentCreateOrConnectWithoutCustomerInput[]
    createMany?: AppointmentCreateManyCustomerInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput> | AppointmentCreateWithoutCustomerInput[] | AppointmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCustomerInput | AppointmentCreateOrConnectWithoutCustomerInput[]
    createMany?: AppointmentCreateManyCustomerInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput> | AppointmentCreateWithoutCustomerInput[] | AppointmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCustomerInput | AppointmentCreateOrConnectWithoutCustomerInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutCustomerInput | AppointmentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: AppointmentCreateManyCustomerInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutCustomerInput | AppointmentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutCustomerInput | AppointmentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput> | AppointmentCreateWithoutCustomerInput[] | AppointmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCustomerInput | AppointmentCreateOrConnectWithoutCustomerInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutCustomerInput | AppointmentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: AppointmentCreateManyCustomerInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutCustomerInput | AppointmentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutCustomerInput | AppointmentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type OrganizationOnBusinessCustomerCreateNestedOneWithoutOrganizationInput = {
    create?: XOR<OrganizationOnBusinessCustomerCreateWithoutOrganizationInput, OrganizationOnBusinessCustomerUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: OrganizationOnBusinessCustomerCreateOrConnectWithoutOrganizationInput
    connect?: OrganizationOnBusinessCustomerWhereUniqueInput
  }

  export type SubscriptionCreateNestedOneWithoutOrganizationInput = {
    create?: XOR<SubscriptionCreateWithoutOrganizationInput, SubscriptionUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutOrganizationInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type BusinessCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<BusinessCreateWithoutOrganizationInput, BusinessUncheckedCreateWithoutOrganizationInput> | BusinessCreateWithoutOrganizationInput[] | BusinessUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: BusinessCreateOrConnectWithoutOrganizationInput | BusinessCreateOrConnectWithoutOrganizationInput[]
    createMany?: BusinessCreateManyOrganizationInputEnvelope
    connect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
  }

  export type OrganizationOnBusinessCustomerUncheckedCreateNestedOneWithoutOrganizationInput = {
    create?: XOR<OrganizationOnBusinessCustomerCreateWithoutOrganizationInput, OrganizationOnBusinessCustomerUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: OrganizationOnBusinessCustomerCreateOrConnectWithoutOrganizationInput
    connect?: OrganizationOnBusinessCustomerWhereUniqueInput
  }

  export type BusinessUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<BusinessCreateWithoutOrganizationInput, BusinessUncheckedCreateWithoutOrganizationInput> | BusinessCreateWithoutOrganizationInput[] | BusinessUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: BusinessCreateOrConnectWithoutOrganizationInput | BusinessCreateOrConnectWithoutOrganizationInput[]
    createMany?: BusinessCreateManyOrganizationInputEnvelope
    connect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
  }

  export type OrganizationOnBusinessCustomerUpdateOneWithoutOrganizationNestedInput = {
    create?: XOR<OrganizationOnBusinessCustomerCreateWithoutOrganizationInput, OrganizationOnBusinessCustomerUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: OrganizationOnBusinessCustomerCreateOrConnectWithoutOrganizationInput
    upsert?: OrganizationOnBusinessCustomerUpsertWithoutOrganizationInput
    disconnect?: OrganizationOnBusinessCustomerWhereInput | boolean
    delete?: OrganizationOnBusinessCustomerWhereInput | boolean
    connect?: OrganizationOnBusinessCustomerWhereUniqueInput
    update?: XOR<XOR<OrganizationOnBusinessCustomerUpdateToOneWithWhereWithoutOrganizationInput, OrganizationOnBusinessCustomerUpdateWithoutOrganizationInput>, OrganizationOnBusinessCustomerUncheckedUpdateWithoutOrganizationInput>
  }

  export type SubscriptionUpdateOneRequiredWithoutOrganizationNestedInput = {
    create?: XOR<SubscriptionCreateWithoutOrganizationInput, SubscriptionUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutOrganizationInput
    upsert?: SubscriptionUpsertWithoutOrganizationInput
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutOrganizationInput, SubscriptionUpdateWithoutOrganizationInput>, SubscriptionUncheckedUpdateWithoutOrganizationInput>
  }

  export type BusinessUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<BusinessCreateWithoutOrganizationInput, BusinessUncheckedCreateWithoutOrganizationInput> | BusinessCreateWithoutOrganizationInput[] | BusinessUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: BusinessCreateOrConnectWithoutOrganizationInput | BusinessCreateOrConnectWithoutOrganizationInput[]
    upsert?: BusinessUpsertWithWhereUniqueWithoutOrganizationInput | BusinessUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: BusinessCreateManyOrganizationInputEnvelope
    set?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    disconnect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    delete?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    connect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    update?: BusinessUpdateWithWhereUniqueWithoutOrganizationInput | BusinessUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: BusinessUpdateManyWithWhereWithoutOrganizationInput | BusinessUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: BusinessScalarWhereInput | BusinessScalarWhereInput[]
  }

  export type OrganizationOnBusinessCustomerUncheckedUpdateOneWithoutOrganizationNestedInput = {
    create?: XOR<OrganizationOnBusinessCustomerCreateWithoutOrganizationInput, OrganizationOnBusinessCustomerUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: OrganizationOnBusinessCustomerCreateOrConnectWithoutOrganizationInput
    upsert?: OrganizationOnBusinessCustomerUpsertWithoutOrganizationInput
    disconnect?: OrganizationOnBusinessCustomerWhereInput | boolean
    delete?: OrganizationOnBusinessCustomerWhereInput | boolean
    connect?: OrganizationOnBusinessCustomerWhereUniqueInput
    update?: XOR<XOR<OrganizationOnBusinessCustomerUpdateToOneWithWhereWithoutOrganizationInput, OrganizationOnBusinessCustomerUpdateWithoutOrganizationInput>, OrganizationOnBusinessCustomerUncheckedUpdateWithoutOrganizationInput>
  }

  export type BusinessUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<BusinessCreateWithoutOrganizationInput, BusinessUncheckedCreateWithoutOrganizationInput> | BusinessCreateWithoutOrganizationInput[] | BusinessUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: BusinessCreateOrConnectWithoutOrganizationInput | BusinessCreateOrConnectWithoutOrganizationInput[]
    upsert?: BusinessUpsertWithWhereUniqueWithoutOrganizationInput | BusinessUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: BusinessCreateManyOrganizationInputEnvelope
    set?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    disconnect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    delete?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    connect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    update?: BusinessUpdateWithWhereUniqueWithoutOrganizationInput | BusinessUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: BusinessUpdateManyWithWhereWithoutOrganizationInput | BusinessUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: BusinessScalarWhereInput | BusinessScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutBusinessCustomersInput = {
    create?: XOR<OrganizationCreateWithoutBusinessCustomersInput, OrganizationUncheckedCreateWithoutBusinessCustomersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutBusinessCustomersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type BusinessCustomerCreateNestedOneWithoutOrganizationInput = {
    create?: XOR<BusinessCustomerCreateWithoutOrganizationInput, BusinessCustomerUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: BusinessCustomerCreateOrConnectWithoutOrganizationInput
    connect?: BusinessCustomerWhereUniqueInput
  }

  export type EnumOrganizationRoleFieldUpdateOperationsInput = {
    set?: $Enums.OrganizationRole
  }

  export type OrganizationUpdateOneRequiredWithoutBusinessCustomersNestedInput = {
    create?: XOR<OrganizationCreateWithoutBusinessCustomersInput, OrganizationUncheckedCreateWithoutBusinessCustomersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutBusinessCustomersInput
    upsert?: OrganizationUpsertWithoutBusinessCustomersInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutBusinessCustomersInput, OrganizationUpdateWithoutBusinessCustomersInput>, OrganizationUncheckedUpdateWithoutBusinessCustomersInput>
  }

  export type BusinessCustomerUpdateOneRequiredWithoutOrganizationNestedInput = {
    create?: XOR<BusinessCustomerCreateWithoutOrganizationInput, BusinessCustomerUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: BusinessCustomerCreateOrConnectWithoutOrganizationInput
    upsert?: BusinessCustomerUpsertWithoutOrganizationInput
    connect?: BusinessCustomerWhereUniqueInput
    update?: XOR<XOR<BusinessCustomerUpdateToOneWithWhereWithoutOrganizationInput, BusinessCustomerUpdateWithoutOrganizationInput>, BusinessCustomerUncheckedUpdateWithoutOrganizationInput>
  }

  export type OrganizationCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<OrganizationCreateWithoutSubscriptionInput, OrganizationUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutSubscriptionInput
    connect?: OrganizationWhereUniqueInput
  }

  export type OrganizationUncheckedCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<OrganizationCreateWithoutSubscriptionInput, OrganizationUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutSubscriptionInput
    connect?: OrganizationWhereUniqueInput
  }

  export type EnumSubscriptionLevelFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionLevel
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumPaymentFrequencyFieldUpdateOperationsInput = {
    set?: $Enums.PaymentFrequency
  }

  export type OrganizationUpdateOneWithoutSubscriptionNestedInput = {
    create?: XOR<OrganizationCreateWithoutSubscriptionInput, OrganizationUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutSubscriptionInput
    upsert?: OrganizationUpsertWithoutSubscriptionInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutSubscriptionInput, OrganizationUpdateWithoutSubscriptionInput>, OrganizationUncheckedUpdateWithoutSubscriptionInput>
  }

  export type OrganizationUncheckedUpdateOneWithoutSubscriptionNestedInput = {
    create?: XOR<OrganizationCreateWithoutSubscriptionInput, OrganizationUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutSubscriptionInput
    upsert?: OrganizationUpsertWithoutSubscriptionInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutSubscriptionInput, OrganizationUpdateWithoutSubscriptionInput>, OrganizationUncheckedUpdateWithoutSubscriptionInput>
  }

  export type BusinessCreateNestedOneWithoutServicesInput = {
    create?: XOR<BusinessCreateWithoutServicesInput, BusinessUncheckedCreateWithoutServicesInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutServicesInput
    connect?: BusinessWhereUniqueInput
  }

  export type AppointmentCreateNestedManyWithoutServiceInput = {
    create?: XOR<AppointmentCreateWithoutServiceInput, AppointmentUncheckedCreateWithoutServiceInput> | AppointmentCreateWithoutServiceInput[] | AppointmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutServiceInput | AppointmentCreateOrConnectWithoutServiceInput[]
    createMany?: AppointmentCreateManyServiceInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AvailabilityGroupCreateNestedOneWithoutServicesInput = {
    create?: XOR<AvailabilityGroupCreateWithoutServicesInput, AvailabilityGroupUncheckedCreateWithoutServicesInput>
    connectOrCreate?: AvailabilityGroupCreateOrConnectWithoutServicesInput
    connect?: AvailabilityGroupWhereUniqueInput
  }

  export type AppointmentUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<AppointmentCreateWithoutServiceInput, AppointmentUncheckedCreateWithoutServiceInput> | AppointmentCreateWithoutServiceInput[] | AppointmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutServiceInput | AppointmentCreateOrConnectWithoutServiceInput[]
    createMany?: AppointmentCreateManyServiceInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BusinessUpdateOneWithoutServicesNestedInput = {
    create?: XOR<BusinessCreateWithoutServicesInput, BusinessUncheckedCreateWithoutServicesInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutServicesInput
    upsert?: BusinessUpsertWithoutServicesInput
    disconnect?: BusinessWhereInput | boolean
    delete?: BusinessWhereInput | boolean
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutServicesInput, BusinessUpdateWithoutServicesInput>, BusinessUncheckedUpdateWithoutServicesInput>
  }

  export type AppointmentUpdateManyWithoutServiceNestedInput = {
    create?: XOR<AppointmentCreateWithoutServiceInput, AppointmentUncheckedCreateWithoutServiceInput> | AppointmentCreateWithoutServiceInput[] | AppointmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutServiceInput | AppointmentCreateOrConnectWithoutServiceInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutServiceInput | AppointmentUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: AppointmentCreateManyServiceInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutServiceInput | AppointmentUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutServiceInput | AppointmentUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AvailabilityGroupUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<AvailabilityGroupCreateWithoutServicesInput, AvailabilityGroupUncheckedCreateWithoutServicesInput>
    connectOrCreate?: AvailabilityGroupCreateOrConnectWithoutServicesInput
    upsert?: AvailabilityGroupUpsertWithoutServicesInput
    connect?: AvailabilityGroupWhereUniqueInput
    update?: XOR<XOR<AvailabilityGroupUpdateToOneWithWhereWithoutServicesInput, AvailabilityGroupUpdateWithoutServicesInput>, AvailabilityGroupUncheckedUpdateWithoutServicesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AppointmentUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<AppointmentCreateWithoutServiceInput, AppointmentUncheckedCreateWithoutServiceInput> | AppointmentCreateWithoutServiceInput[] | AppointmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutServiceInput | AppointmentCreateOrConnectWithoutServiceInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutServiceInput | AppointmentUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: AppointmentCreateManyServiceInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutServiceInput | AppointmentUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutServiceInput | AppointmentUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type DailyAvailabilityCreateNestedManyWithoutAvailabilityGroupInput = {
    create?: XOR<DailyAvailabilityCreateWithoutAvailabilityGroupInput, DailyAvailabilityUncheckedCreateWithoutAvailabilityGroupInput> | DailyAvailabilityCreateWithoutAvailabilityGroupInput[] | DailyAvailabilityUncheckedCreateWithoutAvailabilityGroupInput[]
    connectOrCreate?: DailyAvailabilityCreateOrConnectWithoutAvailabilityGroupInput | DailyAvailabilityCreateOrConnectWithoutAvailabilityGroupInput[]
    createMany?: DailyAvailabilityCreateManyAvailabilityGroupInputEnvelope
    connect?: DailyAvailabilityWhereUniqueInput | DailyAvailabilityWhereUniqueInput[]
  }

  export type ServiceCreateNestedManyWithoutAvailibilityGroupInput = {
    create?: XOR<ServiceCreateWithoutAvailibilityGroupInput, ServiceUncheckedCreateWithoutAvailibilityGroupInput> | ServiceCreateWithoutAvailibilityGroupInput[] | ServiceUncheckedCreateWithoutAvailibilityGroupInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutAvailibilityGroupInput | ServiceCreateOrConnectWithoutAvailibilityGroupInput[]
    createMany?: ServiceCreateManyAvailibilityGroupInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type BookableSlotCreateNestedManyWithoutAvailabilityGroupInput = {
    create?: XOR<BookableSlotCreateWithoutAvailabilityGroupInput, BookableSlotUncheckedCreateWithoutAvailabilityGroupInput> | BookableSlotCreateWithoutAvailabilityGroupInput[] | BookableSlotUncheckedCreateWithoutAvailabilityGroupInput[]
    connectOrCreate?: BookableSlotCreateOrConnectWithoutAvailabilityGroupInput | BookableSlotCreateOrConnectWithoutAvailabilityGroupInput[]
    createMany?: BookableSlotCreateManyAvailabilityGroupInputEnvelope
    connect?: BookableSlotWhereUniqueInput | BookableSlotWhereUniqueInput[]
  }

  export type DailyAvailabilityUncheckedCreateNestedManyWithoutAvailabilityGroupInput = {
    create?: XOR<DailyAvailabilityCreateWithoutAvailabilityGroupInput, DailyAvailabilityUncheckedCreateWithoutAvailabilityGroupInput> | DailyAvailabilityCreateWithoutAvailabilityGroupInput[] | DailyAvailabilityUncheckedCreateWithoutAvailabilityGroupInput[]
    connectOrCreate?: DailyAvailabilityCreateOrConnectWithoutAvailabilityGroupInput | DailyAvailabilityCreateOrConnectWithoutAvailabilityGroupInput[]
    createMany?: DailyAvailabilityCreateManyAvailabilityGroupInputEnvelope
    connect?: DailyAvailabilityWhereUniqueInput | DailyAvailabilityWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutAvailibilityGroupInput = {
    create?: XOR<ServiceCreateWithoutAvailibilityGroupInput, ServiceUncheckedCreateWithoutAvailibilityGroupInput> | ServiceCreateWithoutAvailibilityGroupInput[] | ServiceUncheckedCreateWithoutAvailibilityGroupInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutAvailibilityGroupInput | ServiceCreateOrConnectWithoutAvailibilityGroupInput[]
    createMany?: ServiceCreateManyAvailibilityGroupInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type BookableSlotUncheckedCreateNestedManyWithoutAvailabilityGroupInput = {
    create?: XOR<BookableSlotCreateWithoutAvailabilityGroupInput, BookableSlotUncheckedCreateWithoutAvailabilityGroupInput> | BookableSlotCreateWithoutAvailabilityGroupInput[] | BookableSlotUncheckedCreateWithoutAvailabilityGroupInput[]
    connectOrCreate?: BookableSlotCreateOrConnectWithoutAvailabilityGroupInput | BookableSlotCreateOrConnectWithoutAvailabilityGroupInput[]
    createMany?: BookableSlotCreateManyAvailabilityGroupInputEnvelope
    connect?: BookableSlotWhereUniqueInput | BookableSlotWhereUniqueInput[]
  }

  export type DailyAvailabilityUpdateManyWithoutAvailabilityGroupNestedInput = {
    create?: XOR<DailyAvailabilityCreateWithoutAvailabilityGroupInput, DailyAvailabilityUncheckedCreateWithoutAvailabilityGroupInput> | DailyAvailabilityCreateWithoutAvailabilityGroupInput[] | DailyAvailabilityUncheckedCreateWithoutAvailabilityGroupInput[]
    connectOrCreate?: DailyAvailabilityCreateOrConnectWithoutAvailabilityGroupInput | DailyAvailabilityCreateOrConnectWithoutAvailabilityGroupInput[]
    upsert?: DailyAvailabilityUpsertWithWhereUniqueWithoutAvailabilityGroupInput | DailyAvailabilityUpsertWithWhereUniqueWithoutAvailabilityGroupInput[]
    createMany?: DailyAvailabilityCreateManyAvailabilityGroupInputEnvelope
    set?: DailyAvailabilityWhereUniqueInput | DailyAvailabilityWhereUniqueInput[]
    disconnect?: DailyAvailabilityWhereUniqueInput | DailyAvailabilityWhereUniqueInput[]
    delete?: DailyAvailabilityWhereUniqueInput | DailyAvailabilityWhereUniqueInput[]
    connect?: DailyAvailabilityWhereUniqueInput | DailyAvailabilityWhereUniqueInput[]
    update?: DailyAvailabilityUpdateWithWhereUniqueWithoutAvailabilityGroupInput | DailyAvailabilityUpdateWithWhereUniqueWithoutAvailabilityGroupInput[]
    updateMany?: DailyAvailabilityUpdateManyWithWhereWithoutAvailabilityGroupInput | DailyAvailabilityUpdateManyWithWhereWithoutAvailabilityGroupInput[]
    deleteMany?: DailyAvailabilityScalarWhereInput | DailyAvailabilityScalarWhereInput[]
  }

  export type ServiceUpdateManyWithoutAvailibilityGroupNestedInput = {
    create?: XOR<ServiceCreateWithoutAvailibilityGroupInput, ServiceUncheckedCreateWithoutAvailibilityGroupInput> | ServiceCreateWithoutAvailibilityGroupInput[] | ServiceUncheckedCreateWithoutAvailibilityGroupInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutAvailibilityGroupInput | ServiceCreateOrConnectWithoutAvailibilityGroupInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutAvailibilityGroupInput | ServiceUpsertWithWhereUniqueWithoutAvailibilityGroupInput[]
    createMany?: ServiceCreateManyAvailibilityGroupInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutAvailibilityGroupInput | ServiceUpdateWithWhereUniqueWithoutAvailibilityGroupInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutAvailibilityGroupInput | ServiceUpdateManyWithWhereWithoutAvailibilityGroupInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type BookableSlotUpdateManyWithoutAvailabilityGroupNestedInput = {
    create?: XOR<BookableSlotCreateWithoutAvailabilityGroupInput, BookableSlotUncheckedCreateWithoutAvailabilityGroupInput> | BookableSlotCreateWithoutAvailabilityGroupInput[] | BookableSlotUncheckedCreateWithoutAvailabilityGroupInput[]
    connectOrCreate?: BookableSlotCreateOrConnectWithoutAvailabilityGroupInput | BookableSlotCreateOrConnectWithoutAvailabilityGroupInput[]
    upsert?: BookableSlotUpsertWithWhereUniqueWithoutAvailabilityGroupInput | BookableSlotUpsertWithWhereUniqueWithoutAvailabilityGroupInput[]
    createMany?: BookableSlotCreateManyAvailabilityGroupInputEnvelope
    set?: BookableSlotWhereUniqueInput | BookableSlotWhereUniqueInput[]
    disconnect?: BookableSlotWhereUniqueInput | BookableSlotWhereUniqueInput[]
    delete?: BookableSlotWhereUniqueInput | BookableSlotWhereUniqueInput[]
    connect?: BookableSlotWhereUniqueInput | BookableSlotWhereUniqueInput[]
    update?: BookableSlotUpdateWithWhereUniqueWithoutAvailabilityGroupInput | BookableSlotUpdateWithWhereUniqueWithoutAvailabilityGroupInput[]
    updateMany?: BookableSlotUpdateManyWithWhereWithoutAvailabilityGroupInput | BookableSlotUpdateManyWithWhereWithoutAvailabilityGroupInput[]
    deleteMany?: BookableSlotScalarWhereInput | BookableSlotScalarWhereInput[]
  }

  export type DailyAvailabilityUncheckedUpdateManyWithoutAvailabilityGroupNestedInput = {
    create?: XOR<DailyAvailabilityCreateWithoutAvailabilityGroupInput, DailyAvailabilityUncheckedCreateWithoutAvailabilityGroupInput> | DailyAvailabilityCreateWithoutAvailabilityGroupInput[] | DailyAvailabilityUncheckedCreateWithoutAvailabilityGroupInput[]
    connectOrCreate?: DailyAvailabilityCreateOrConnectWithoutAvailabilityGroupInput | DailyAvailabilityCreateOrConnectWithoutAvailabilityGroupInput[]
    upsert?: DailyAvailabilityUpsertWithWhereUniqueWithoutAvailabilityGroupInput | DailyAvailabilityUpsertWithWhereUniqueWithoutAvailabilityGroupInput[]
    createMany?: DailyAvailabilityCreateManyAvailabilityGroupInputEnvelope
    set?: DailyAvailabilityWhereUniqueInput | DailyAvailabilityWhereUniqueInput[]
    disconnect?: DailyAvailabilityWhereUniqueInput | DailyAvailabilityWhereUniqueInput[]
    delete?: DailyAvailabilityWhereUniqueInput | DailyAvailabilityWhereUniqueInput[]
    connect?: DailyAvailabilityWhereUniqueInput | DailyAvailabilityWhereUniqueInput[]
    update?: DailyAvailabilityUpdateWithWhereUniqueWithoutAvailabilityGroupInput | DailyAvailabilityUpdateWithWhereUniqueWithoutAvailabilityGroupInput[]
    updateMany?: DailyAvailabilityUpdateManyWithWhereWithoutAvailabilityGroupInput | DailyAvailabilityUpdateManyWithWhereWithoutAvailabilityGroupInput[]
    deleteMany?: DailyAvailabilityScalarWhereInput | DailyAvailabilityScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutAvailibilityGroupNestedInput = {
    create?: XOR<ServiceCreateWithoutAvailibilityGroupInput, ServiceUncheckedCreateWithoutAvailibilityGroupInput> | ServiceCreateWithoutAvailibilityGroupInput[] | ServiceUncheckedCreateWithoutAvailibilityGroupInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutAvailibilityGroupInput | ServiceCreateOrConnectWithoutAvailibilityGroupInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutAvailibilityGroupInput | ServiceUpsertWithWhereUniqueWithoutAvailibilityGroupInput[]
    createMany?: ServiceCreateManyAvailibilityGroupInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutAvailibilityGroupInput | ServiceUpdateWithWhereUniqueWithoutAvailibilityGroupInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutAvailibilityGroupInput | ServiceUpdateManyWithWhereWithoutAvailibilityGroupInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type BookableSlotUncheckedUpdateManyWithoutAvailabilityGroupNestedInput = {
    create?: XOR<BookableSlotCreateWithoutAvailabilityGroupInput, BookableSlotUncheckedCreateWithoutAvailabilityGroupInput> | BookableSlotCreateWithoutAvailabilityGroupInput[] | BookableSlotUncheckedCreateWithoutAvailabilityGroupInput[]
    connectOrCreate?: BookableSlotCreateOrConnectWithoutAvailabilityGroupInput | BookableSlotCreateOrConnectWithoutAvailabilityGroupInput[]
    upsert?: BookableSlotUpsertWithWhereUniqueWithoutAvailabilityGroupInput | BookableSlotUpsertWithWhereUniqueWithoutAvailabilityGroupInput[]
    createMany?: BookableSlotCreateManyAvailabilityGroupInputEnvelope
    set?: BookableSlotWhereUniqueInput | BookableSlotWhereUniqueInput[]
    disconnect?: BookableSlotWhereUniqueInput | BookableSlotWhereUniqueInput[]
    delete?: BookableSlotWhereUniqueInput | BookableSlotWhereUniqueInput[]
    connect?: BookableSlotWhereUniqueInput | BookableSlotWhereUniqueInput[]
    update?: BookableSlotUpdateWithWhereUniqueWithoutAvailabilityGroupInput | BookableSlotUpdateWithWhereUniqueWithoutAvailabilityGroupInput[]
    updateMany?: BookableSlotUpdateManyWithWhereWithoutAvailabilityGroupInput | BookableSlotUpdateManyWithWhereWithoutAvailabilityGroupInput[]
    deleteMany?: BookableSlotScalarWhereInput | BookableSlotScalarWhereInput[]
  }

  export type AvailabilityGroupCreateNestedOneWithoutDailyAvailabilityInput = {
    create?: XOR<AvailabilityGroupCreateWithoutDailyAvailabilityInput, AvailabilityGroupUncheckedCreateWithoutDailyAvailabilityInput>
    connectOrCreate?: AvailabilityGroupCreateOrConnectWithoutDailyAvailabilityInput
    connect?: AvailabilityGroupWhereUniqueInput
  }

  export type TimeBlockCreateNestedManyWithoutDailyAvailabilityDayInput = {
    create?: XOR<TimeBlockCreateWithoutDailyAvailabilityDayInput, TimeBlockUncheckedCreateWithoutDailyAvailabilityDayInput> | TimeBlockCreateWithoutDailyAvailabilityDayInput[] | TimeBlockUncheckedCreateWithoutDailyAvailabilityDayInput[]
    connectOrCreate?: TimeBlockCreateOrConnectWithoutDailyAvailabilityDayInput | TimeBlockCreateOrConnectWithoutDailyAvailabilityDayInput[]
    createMany?: TimeBlockCreateManyDailyAvailabilityDayInputEnvelope
    connect?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
  }

  export type TimeBlockUncheckedCreateNestedManyWithoutDailyAvailabilityDayInput = {
    create?: XOR<TimeBlockCreateWithoutDailyAvailabilityDayInput, TimeBlockUncheckedCreateWithoutDailyAvailabilityDayInput> | TimeBlockCreateWithoutDailyAvailabilityDayInput[] | TimeBlockUncheckedCreateWithoutDailyAvailabilityDayInput[]
    connectOrCreate?: TimeBlockCreateOrConnectWithoutDailyAvailabilityDayInput | TimeBlockCreateOrConnectWithoutDailyAvailabilityDayInput[]
    createMany?: TimeBlockCreateManyDailyAvailabilityDayInputEnvelope
    connect?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
  }

  export type EnumWeekDayFieldUpdateOperationsInput = {
    set?: $Enums.WeekDay
  }

  export type AvailabilityGroupUpdateOneRequiredWithoutDailyAvailabilityNestedInput = {
    create?: XOR<AvailabilityGroupCreateWithoutDailyAvailabilityInput, AvailabilityGroupUncheckedCreateWithoutDailyAvailabilityInput>
    connectOrCreate?: AvailabilityGroupCreateOrConnectWithoutDailyAvailabilityInput
    upsert?: AvailabilityGroupUpsertWithoutDailyAvailabilityInput
    connect?: AvailabilityGroupWhereUniqueInput
    update?: XOR<XOR<AvailabilityGroupUpdateToOneWithWhereWithoutDailyAvailabilityInput, AvailabilityGroupUpdateWithoutDailyAvailabilityInput>, AvailabilityGroupUncheckedUpdateWithoutDailyAvailabilityInput>
  }

  export type TimeBlockUpdateManyWithoutDailyAvailabilityDayNestedInput = {
    create?: XOR<TimeBlockCreateWithoutDailyAvailabilityDayInput, TimeBlockUncheckedCreateWithoutDailyAvailabilityDayInput> | TimeBlockCreateWithoutDailyAvailabilityDayInput[] | TimeBlockUncheckedCreateWithoutDailyAvailabilityDayInput[]
    connectOrCreate?: TimeBlockCreateOrConnectWithoutDailyAvailabilityDayInput | TimeBlockCreateOrConnectWithoutDailyAvailabilityDayInput[]
    upsert?: TimeBlockUpsertWithWhereUniqueWithoutDailyAvailabilityDayInput | TimeBlockUpsertWithWhereUniqueWithoutDailyAvailabilityDayInput[]
    createMany?: TimeBlockCreateManyDailyAvailabilityDayInputEnvelope
    set?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    disconnect?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    delete?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    connect?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    update?: TimeBlockUpdateWithWhereUniqueWithoutDailyAvailabilityDayInput | TimeBlockUpdateWithWhereUniqueWithoutDailyAvailabilityDayInput[]
    updateMany?: TimeBlockUpdateManyWithWhereWithoutDailyAvailabilityDayInput | TimeBlockUpdateManyWithWhereWithoutDailyAvailabilityDayInput[]
    deleteMany?: TimeBlockScalarWhereInput | TimeBlockScalarWhereInput[]
  }

  export type TimeBlockUncheckedUpdateManyWithoutDailyAvailabilityDayNestedInput = {
    create?: XOR<TimeBlockCreateWithoutDailyAvailabilityDayInput, TimeBlockUncheckedCreateWithoutDailyAvailabilityDayInput> | TimeBlockCreateWithoutDailyAvailabilityDayInput[] | TimeBlockUncheckedCreateWithoutDailyAvailabilityDayInput[]
    connectOrCreate?: TimeBlockCreateOrConnectWithoutDailyAvailabilityDayInput | TimeBlockCreateOrConnectWithoutDailyAvailabilityDayInput[]
    upsert?: TimeBlockUpsertWithWhereUniqueWithoutDailyAvailabilityDayInput | TimeBlockUpsertWithWhereUniqueWithoutDailyAvailabilityDayInput[]
    createMany?: TimeBlockCreateManyDailyAvailabilityDayInputEnvelope
    set?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    disconnect?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    delete?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    connect?: TimeBlockWhereUniqueInput | TimeBlockWhereUniqueInput[]
    update?: TimeBlockUpdateWithWhereUniqueWithoutDailyAvailabilityDayInput | TimeBlockUpdateWithWhereUniqueWithoutDailyAvailabilityDayInput[]
    updateMany?: TimeBlockUpdateManyWithWhereWithoutDailyAvailabilityDayInput | TimeBlockUpdateManyWithWhereWithoutDailyAvailabilityDayInput[]
    deleteMany?: TimeBlockScalarWhereInput | TimeBlockScalarWhereInput[]
  }

  export type DailyAvailabilityCreateNestedOneWithoutAvailabilityBlocksInput = {
    create?: XOR<DailyAvailabilityCreateWithoutAvailabilityBlocksInput, DailyAvailabilityUncheckedCreateWithoutAvailabilityBlocksInput>
    connectOrCreate?: DailyAvailabilityCreateOrConnectWithoutAvailabilityBlocksInput
    connect?: DailyAvailabilityWhereUniqueInput
  }

  export type DailyAvailabilityUpdateOneRequiredWithoutAvailabilityBlocksNestedInput = {
    create?: XOR<DailyAvailabilityCreateWithoutAvailabilityBlocksInput, DailyAvailabilityUncheckedCreateWithoutAvailabilityBlocksInput>
    connectOrCreate?: DailyAvailabilityCreateOrConnectWithoutAvailabilityBlocksInput
    upsert?: DailyAvailabilityUpsertWithoutAvailabilityBlocksInput
    connect?: DailyAvailabilityWhereUniqueInput
    update?: XOR<XOR<DailyAvailabilityUpdateToOneWithWhereWithoutAvailabilityBlocksInput, DailyAvailabilityUpdateWithoutAvailabilityBlocksInput>, DailyAvailabilityUncheckedUpdateWithoutAvailabilityBlocksInput>
  }

  export type AppointmentCreateNestedManyWithoutSlotInput = {
    create?: XOR<AppointmentCreateWithoutSlotInput, AppointmentUncheckedCreateWithoutSlotInput> | AppointmentCreateWithoutSlotInput[] | AppointmentUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutSlotInput | AppointmentCreateOrConnectWithoutSlotInput[]
    createMany?: AppointmentCreateManySlotInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AvailabilityGroupCreateNestedOneWithoutBookableSlotInput = {
    create?: XOR<AvailabilityGroupCreateWithoutBookableSlotInput, AvailabilityGroupUncheckedCreateWithoutBookableSlotInput>
    connectOrCreate?: AvailabilityGroupCreateOrConnectWithoutBookableSlotInput
    connect?: AvailabilityGroupWhereUniqueInput
  }

  export type AppointmentUncheckedCreateNestedManyWithoutSlotInput = {
    create?: XOR<AppointmentCreateWithoutSlotInput, AppointmentUncheckedCreateWithoutSlotInput> | AppointmentCreateWithoutSlotInput[] | AppointmentUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutSlotInput | AppointmentCreateOrConnectWithoutSlotInput[]
    createMany?: AppointmentCreateManySlotInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentUpdateManyWithoutSlotNestedInput = {
    create?: XOR<AppointmentCreateWithoutSlotInput, AppointmentUncheckedCreateWithoutSlotInput> | AppointmentCreateWithoutSlotInput[] | AppointmentUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutSlotInput | AppointmentCreateOrConnectWithoutSlotInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutSlotInput | AppointmentUpsertWithWhereUniqueWithoutSlotInput[]
    createMany?: AppointmentCreateManySlotInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutSlotInput | AppointmentUpdateWithWhereUniqueWithoutSlotInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutSlotInput | AppointmentUpdateManyWithWhereWithoutSlotInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AvailabilityGroupUpdateOneWithoutBookableSlotNestedInput = {
    create?: XOR<AvailabilityGroupCreateWithoutBookableSlotInput, AvailabilityGroupUncheckedCreateWithoutBookableSlotInput>
    connectOrCreate?: AvailabilityGroupCreateOrConnectWithoutBookableSlotInput
    upsert?: AvailabilityGroupUpsertWithoutBookableSlotInput
    disconnect?: AvailabilityGroupWhereInput | boolean
    delete?: AvailabilityGroupWhereInput | boolean
    connect?: AvailabilityGroupWhereUniqueInput
    update?: XOR<XOR<AvailabilityGroupUpdateToOneWithWhereWithoutBookableSlotInput, AvailabilityGroupUpdateWithoutBookableSlotInput>, AvailabilityGroupUncheckedUpdateWithoutBookableSlotInput>
  }

  export type AppointmentUncheckedUpdateManyWithoutSlotNestedInput = {
    create?: XOR<AppointmentCreateWithoutSlotInput, AppointmentUncheckedCreateWithoutSlotInput> | AppointmentCreateWithoutSlotInput[] | AppointmentUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutSlotInput | AppointmentCreateOrConnectWithoutSlotInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutSlotInput | AppointmentUpsertWithWhereUniqueWithoutSlotInput[]
    createMany?: AppointmentCreateManySlotInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutSlotInput | AppointmentUpdateWithWhereUniqueWithoutSlotInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutSlotInput | AppointmentUpdateManyWithWhereWithoutSlotInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumOrganizationRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganizationRole | EnumOrganizationRoleFieldRefInput<$PrismaModel>
    in?: $Enums.OrganizationRole[] | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrganizationRole[] | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumOrganizationRoleFilter<$PrismaModel> | $Enums.OrganizationRole
  }

  export type NestedEnumOrganizationRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganizationRole | EnumOrganizationRoleFieldRefInput<$PrismaModel>
    in?: $Enums.OrganizationRole[] | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrganizationRole[] | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumOrganizationRoleWithAggregatesFilter<$PrismaModel> | $Enums.OrganizationRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrganizationRoleFilter<$PrismaModel>
    _max?: NestedEnumOrganizationRoleFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionLevel | EnumSubscriptionLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionLevel[] | ListEnumSubscriptionLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionLevel[] | ListEnumSubscriptionLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionLevelFilter<$PrismaModel> | $Enums.SubscriptionLevel
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumPaymentFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentFrequency | EnumPaymentFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentFrequency[] | ListEnumPaymentFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentFrequency[] | ListEnumPaymentFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentFrequencyFilter<$PrismaModel> | $Enums.PaymentFrequency
  }

  export type NestedEnumSubscriptionLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionLevel | EnumSubscriptionLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionLevel[] | ListEnumSubscriptionLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionLevel[] | ListEnumSubscriptionLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionLevelWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionLevelFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionLevelFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPaymentFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentFrequency | EnumPaymentFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentFrequency[] | ListEnumPaymentFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentFrequency[] | ListEnumPaymentFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.PaymentFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentFrequencyFilter<$PrismaModel>
    _max?: NestedEnumPaymentFrequencyFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumWeekDayFilter<$PrismaModel = never> = {
    equals?: $Enums.WeekDay | EnumWeekDayFieldRefInput<$PrismaModel>
    in?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    not?: NestedEnumWeekDayFilter<$PrismaModel> | $Enums.WeekDay
  }

  export type NestedEnumWeekDayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WeekDay | EnumWeekDayFieldRefInput<$PrismaModel>
    in?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    not?: NestedEnumWeekDayWithAggregatesFilter<$PrismaModel> | $Enums.WeekDay
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWeekDayFilter<$PrismaModel>
    _max?: NestedEnumWeekDayFilter<$PrismaModel>
  }

  export type CustomerCreateWithoutAppointmentsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    mobile?: string | null
    firstName?: string | null
    lastName?: string | null
  }

  export type CustomerUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    mobile?: string | null
    firstName?: string | null
    lastName?: string | null
  }

  export type CustomerCreateOrConnectWithoutAppointmentsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutAppointmentsInput, CustomerUncheckedCreateWithoutAppointmentsInput>
  }

  export type ServiceCreateWithoutAppointmentsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    Business?: BusinessCreateNestedOneWithoutServicesInput
    availibilityGroup: AvailabilityGroupCreateNestedOneWithoutServicesInput
  }

  export type ServiceUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    businessId?: number | null
    availibilityGroupId: number
  }

  export type ServiceCreateOrConnectWithoutAppointmentsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutAppointmentsInput, ServiceUncheckedCreateWithoutAppointmentsInput>
  }

  export type BookableSlotCreateWithoutAppointmentInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    startTime: Date | string
    endTime: Date | string
    AvailabilityGroup?: AvailabilityGroupCreateNestedOneWithoutBookableSlotInput
  }

  export type BookableSlotUncheckedCreateWithoutAppointmentInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    startTime: Date | string
    endTime: Date | string
    availabilityGroupId?: number | null
  }

  export type BookableSlotCreateOrConnectWithoutAppointmentInput = {
    where: BookableSlotWhereUniqueInput
    create: XOR<BookableSlotCreateWithoutAppointmentInput, BookableSlotUncheckedCreateWithoutAppointmentInput>
  }

  export type CustomerUpsertWithoutAppointmentsInput = {
    update: XOR<CustomerUpdateWithoutAppointmentsInput, CustomerUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<CustomerCreateWithoutAppointmentsInput, CustomerUncheckedCreateWithoutAppointmentsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutAppointmentsInput, CustomerUncheckedUpdateWithoutAppointmentsInput>
  }

  export type CustomerUpdateWithoutAppointmentsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceUpsertWithoutAppointmentsInput = {
    update: XOR<ServiceUpdateWithoutAppointmentsInput, ServiceUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<ServiceCreateWithoutAppointmentsInput, ServiceUncheckedCreateWithoutAppointmentsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutAppointmentsInput, ServiceUncheckedUpdateWithoutAppointmentsInput>
  }

  export type ServiceUpdateWithoutAppointmentsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    Business?: BusinessUpdateOneWithoutServicesNestedInput
    availibilityGroup?: AvailabilityGroupUpdateOneRequiredWithoutServicesNestedInput
  }

  export type ServiceUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    businessId?: NullableIntFieldUpdateOperationsInput | number | null
    availibilityGroupId?: IntFieldUpdateOperationsInput | number
  }

  export type BookableSlotUpsertWithoutAppointmentInput = {
    update: XOR<BookableSlotUpdateWithoutAppointmentInput, BookableSlotUncheckedUpdateWithoutAppointmentInput>
    create: XOR<BookableSlotCreateWithoutAppointmentInput, BookableSlotUncheckedCreateWithoutAppointmentInput>
    where?: BookableSlotWhereInput
  }

  export type BookableSlotUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: BookableSlotWhereInput
    data: XOR<BookableSlotUpdateWithoutAppointmentInput, BookableSlotUncheckedUpdateWithoutAppointmentInput>
  }

  export type BookableSlotUpdateWithoutAppointmentInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    AvailabilityGroup?: AvailabilityGroupUpdateOneWithoutBookableSlotNestedInput
  }

  export type BookableSlotUncheckedUpdateWithoutAppointmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilityGroupId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrganizationCreateWithoutBusinessInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    legalName: string
    firstLineOfAddress: string
    secondLineOfAddress?: string | null
    city: string
    postCode: string
    stripeCustomerId?: string | null
    businessCustomers?: OrganizationOnBusinessCustomerCreateNestedOneWithoutOrganizationInput
    subscription: SubscriptionCreateNestedOneWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutBusinessInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    legalName: string
    firstLineOfAddress: string
    secondLineOfAddress?: string | null
    city: string
    postCode: string
    stripeCustomerId?: string | null
    subscriptionId: number
    businessCustomers?: OrganizationOnBusinessCustomerUncheckedCreateNestedOneWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutBusinessInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutBusinessInput, OrganizationUncheckedCreateWithoutBusinessInput>
  }

  export type ServiceCreateWithoutBusinessInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    appointments?: AppointmentCreateNestedManyWithoutServiceInput
    availibilityGroup: AvailabilityGroupCreateNestedOneWithoutServicesInput
  }

  export type ServiceUncheckedCreateWithoutBusinessInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    availibilityGroupId: number
    appointments?: AppointmentUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutBusinessInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutBusinessInput, ServiceUncheckedCreateWithoutBusinessInput>
  }

  export type ServiceCreateManyBusinessInputEnvelope = {
    data: ServiceCreateManyBusinessInput | ServiceCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutBusinessInput = {
    update: XOR<OrganizationUpdateWithoutBusinessInput, OrganizationUncheckedUpdateWithoutBusinessInput>
    create: XOR<OrganizationCreateWithoutBusinessInput, OrganizationUncheckedCreateWithoutBusinessInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutBusinessInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutBusinessInput, OrganizationUncheckedUpdateWithoutBusinessInput>
  }

  export type OrganizationUpdateWithoutBusinessInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legalName?: StringFieldUpdateOperationsInput | string
    firstLineOfAddress?: StringFieldUpdateOperationsInput | string
    secondLineOfAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postCode?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    businessCustomers?: OrganizationOnBusinessCustomerUpdateOneWithoutOrganizationNestedInput
    subscription?: SubscriptionUpdateOneRequiredWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legalName?: StringFieldUpdateOperationsInput | string
    firstLineOfAddress?: StringFieldUpdateOperationsInput | string
    secondLineOfAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postCode?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: IntFieldUpdateOperationsInput | number
    businessCustomers?: OrganizationOnBusinessCustomerUncheckedUpdateOneWithoutOrganizationNestedInput
  }

  export type ServiceUpsertWithWhereUniqueWithoutBusinessInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutBusinessInput, ServiceUncheckedUpdateWithoutBusinessInput>
    create: XOR<ServiceCreateWithoutBusinessInput, ServiceUncheckedCreateWithoutBusinessInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutBusinessInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutBusinessInput, ServiceUncheckedUpdateWithoutBusinessInput>
  }

  export type ServiceUpdateManyWithWhereWithoutBusinessInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutBusinessInput>
  }

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    OR?: ServiceScalarWhereInput[]
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    id?: IntFilter<"Service"> | number
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    active?: BoolFilter<"Service"> | boolean
    businessId?: IntNullableFilter<"Service"> | number | null
    availibilityGroupId?: IntFilter<"Service"> | number
  }

  export type OrganizationOnBusinessCustomerCreateWithoutBusinessCustomerInput = {
    role: $Enums.OrganizationRole
    organization: OrganizationCreateNestedOneWithoutBusinessCustomersInput
  }

  export type OrganizationOnBusinessCustomerUncheckedCreateWithoutBusinessCustomerInput = {
    organizationId: number
    role: $Enums.OrganizationRole
  }

  export type OrganizationOnBusinessCustomerCreateOrConnectWithoutBusinessCustomerInput = {
    where: OrganizationOnBusinessCustomerWhereUniqueInput
    create: XOR<OrganizationOnBusinessCustomerCreateWithoutBusinessCustomerInput, OrganizationOnBusinessCustomerUncheckedCreateWithoutBusinessCustomerInput>
  }

  export type OrganizationOnBusinessCustomerUpsertWithoutBusinessCustomerInput = {
    update: XOR<OrganizationOnBusinessCustomerUpdateWithoutBusinessCustomerInput, OrganizationOnBusinessCustomerUncheckedUpdateWithoutBusinessCustomerInput>
    create: XOR<OrganizationOnBusinessCustomerCreateWithoutBusinessCustomerInput, OrganizationOnBusinessCustomerUncheckedCreateWithoutBusinessCustomerInput>
    where?: OrganizationOnBusinessCustomerWhereInput
  }

  export type OrganizationOnBusinessCustomerUpdateToOneWithWhereWithoutBusinessCustomerInput = {
    where?: OrganizationOnBusinessCustomerWhereInput
    data: XOR<OrganizationOnBusinessCustomerUpdateWithoutBusinessCustomerInput, OrganizationOnBusinessCustomerUncheckedUpdateWithoutBusinessCustomerInput>
  }

  export type OrganizationOnBusinessCustomerUpdateWithoutBusinessCustomerInput = {
    role?: EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole
    organization?: OrganizationUpdateOneRequiredWithoutBusinessCustomersNestedInput
  }

  export type OrganizationOnBusinessCustomerUncheckedUpdateWithoutBusinessCustomerInput = {
    organizationId?: IntFieldUpdateOperationsInput | number
    role?: EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole
  }

  export type AppointmentCreateWithoutCustomerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.Status
    service: ServiceCreateNestedOneWithoutAppointmentsInput
    slot: BookableSlotCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutCustomerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceId: number
    slotId: number
    status: $Enums.Status
  }

  export type AppointmentCreateOrConnectWithoutCustomerInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput>
  }

  export type AppointmentCreateManyCustomerInputEnvelope = {
    data: AppointmentCreateManyCustomerInput | AppointmentCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentUpsertWithWhereUniqueWithoutCustomerInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutCustomerInput, AppointmentUncheckedUpdateWithoutCustomerInput>
    create: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutCustomerInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutCustomerInput, AppointmentUncheckedUpdateWithoutCustomerInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutCustomerInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutCustomerInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: StringFilter<"Appointment"> | string
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    customerId?: IntFilter<"Appointment"> | number
    serviceId?: IntFilter<"Appointment"> | number
    slotId?: IntFilter<"Appointment"> | number
    status?: EnumStatusFilter<"Appointment"> | $Enums.Status
  }

  export type OrganizationOnBusinessCustomerCreateWithoutOrganizationInput = {
    role: $Enums.OrganizationRole
    businessCustomer: BusinessCustomerCreateNestedOneWithoutOrganizationInput
  }

  export type OrganizationOnBusinessCustomerUncheckedCreateWithoutOrganizationInput = {
    businessCustomerId: number
    role: $Enums.OrganizationRole
  }

  export type OrganizationOnBusinessCustomerCreateOrConnectWithoutOrganizationInput = {
    where: OrganizationOnBusinessCustomerWhereUniqueInput
    create: XOR<OrganizationOnBusinessCustomerCreateWithoutOrganizationInput, OrganizationOnBusinessCustomerUncheckedCreateWithoutOrganizationInput>
  }

  export type SubscriptionCreateWithoutOrganizationInput = {
    createdAt?: Date | string
    level: $Enums.SubscriptionLevel
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    trialEndsAt?: Date | string | null
    paymentFrequency: $Enums.PaymentFrequency
  }

  export type SubscriptionUncheckedCreateWithoutOrganizationInput = {
    id?: number
    createdAt?: Date | string
    level: $Enums.SubscriptionLevel
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    trialEndsAt?: Date | string | null
    paymentFrequency: $Enums.PaymentFrequency
  }

  export type SubscriptionCreateOrConnectWithoutOrganizationInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutOrganizationInput, SubscriptionUncheckedCreateWithoutOrganizationInput>
  }

  export type BusinessCreateWithoutOrganizationInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    businessName: string
    contactNumber: string
    services?: ServiceCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutOrganizationInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    businessName: string
    contactNumber: string
    services?: ServiceUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutOrganizationInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutOrganizationInput, BusinessUncheckedCreateWithoutOrganizationInput>
  }

  export type BusinessCreateManyOrganizationInputEnvelope = {
    data: BusinessCreateManyOrganizationInput | BusinessCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationOnBusinessCustomerUpsertWithoutOrganizationInput = {
    update: XOR<OrganizationOnBusinessCustomerUpdateWithoutOrganizationInput, OrganizationOnBusinessCustomerUncheckedUpdateWithoutOrganizationInput>
    create: XOR<OrganizationOnBusinessCustomerCreateWithoutOrganizationInput, OrganizationOnBusinessCustomerUncheckedCreateWithoutOrganizationInput>
    where?: OrganizationOnBusinessCustomerWhereInput
  }

  export type OrganizationOnBusinessCustomerUpdateToOneWithWhereWithoutOrganizationInput = {
    where?: OrganizationOnBusinessCustomerWhereInput
    data: XOR<OrganizationOnBusinessCustomerUpdateWithoutOrganizationInput, OrganizationOnBusinessCustomerUncheckedUpdateWithoutOrganizationInput>
  }

  export type OrganizationOnBusinessCustomerUpdateWithoutOrganizationInput = {
    role?: EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole
    businessCustomer?: BusinessCustomerUpdateOneRequiredWithoutOrganizationNestedInput
  }

  export type OrganizationOnBusinessCustomerUncheckedUpdateWithoutOrganizationInput = {
    businessCustomerId?: IntFieldUpdateOperationsInput | number
    role?: EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole
  }

  export type SubscriptionUpsertWithoutOrganizationInput = {
    update: XOR<SubscriptionUpdateWithoutOrganizationInput, SubscriptionUncheckedUpdateWithoutOrganizationInput>
    create: XOR<SubscriptionCreateWithoutOrganizationInput, SubscriptionUncheckedCreateWithoutOrganizationInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutOrganizationInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutOrganizationInput, SubscriptionUncheckedUpdateWithoutOrganizationInput>
  }

  export type SubscriptionUpdateWithoutOrganizationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: EnumSubscriptionLevelFieldUpdateOperationsInput | $Enums.SubscriptionLevel
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
  }

  export type SubscriptionUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: EnumSubscriptionLevelFieldUpdateOperationsInput | $Enums.SubscriptionLevel
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
  }

  export type BusinessUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: BusinessWhereUniqueInput
    update: XOR<BusinessUpdateWithoutOrganizationInput, BusinessUncheckedUpdateWithoutOrganizationInput>
    create: XOR<BusinessCreateWithoutOrganizationInput, BusinessUncheckedCreateWithoutOrganizationInput>
  }

  export type BusinessUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: BusinessWhereUniqueInput
    data: XOR<BusinessUpdateWithoutOrganizationInput, BusinessUncheckedUpdateWithoutOrganizationInput>
  }

  export type BusinessUpdateManyWithWhereWithoutOrganizationInput = {
    where: BusinessScalarWhereInput
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type BusinessScalarWhereInput = {
    AND?: BusinessScalarWhereInput | BusinessScalarWhereInput[]
    OR?: BusinessScalarWhereInput[]
    NOT?: BusinessScalarWhereInput | BusinessScalarWhereInput[]
    id?: IntFilter<"Business"> | number
    createdAt?: DateTimeFilter<"Business"> | Date | string
    updatedAt?: DateTimeFilter<"Business"> | Date | string
    businessName?: StringFilter<"Business"> | string
    contactNumber?: StringFilter<"Business"> | string
    organizationId?: IntFilter<"Business"> | number
  }

  export type OrganizationCreateWithoutBusinessCustomersInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    legalName: string
    firstLineOfAddress: string
    secondLineOfAddress?: string | null
    city: string
    postCode: string
    stripeCustomerId?: string | null
    subscription: SubscriptionCreateNestedOneWithoutOrganizationInput
    business?: BusinessCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutBusinessCustomersInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    legalName: string
    firstLineOfAddress: string
    secondLineOfAddress?: string | null
    city: string
    postCode: string
    stripeCustomerId?: string | null
    subscriptionId: number
    business?: BusinessUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutBusinessCustomersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutBusinessCustomersInput, OrganizationUncheckedCreateWithoutBusinessCustomersInput>
  }

  export type BusinessCustomerCreateWithoutOrganizationInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    mobile?: string | null
    firstName: string
    lastName: string
  }

  export type BusinessCustomerUncheckedCreateWithoutOrganizationInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    mobile?: string | null
    firstName: string
    lastName: string
  }

  export type BusinessCustomerCreateOrConnectWithoutOrganizationInput = {
    where: BusinessCustomerWhereUniqueInput
    create: XOR<BusinessCustomerCreateWithoutOrganizationInput, BusinessCustomerUncheckedCreateWithoutOrganizationInput>
  }

  export type OrganizationUpsertWithoutBusinessCustomersInput = {
    update: XOR<OrganizationUpdateWithoutBusinessCustomersInput, OrganizationUncheckedUpdateWithoutBusinessCustomersInput>
    create: XOR<OrganizationCreateWithoutBusinessCustomersInput, OrganizationUncheckedCreateWithoutBusinessCustomersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutBusinessCustomersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutBusinessCustomersInput, OrganizationUncheckedUpdateWithoutBusinessCustomersInput>
  }

  export type OrganizationUpdateWithoutBusinessCustomersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legalName?: StringFieldUpdateOperationsInput | string
    firstLineOfAddress?: StringFieldUpdateOperationsInput | string
    secondLineOfAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postCode?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    subscription?: SubscriptionUpdateOneRequiredWithoutOrganizationNestedInput
    business?: BusinessUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutBusinessCustomersInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legalName?: StringFieldUpdateOperationsInput | string
    firstLineOfAddress?: StringFieldUpdateOperationsInput | string
    secondLineOfAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postCode?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: IntFieldUpdateOperationsInput | number
    business?: BusinessUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type BusinessCustomerUpsertWithoutOrganizationInput = {
    update: XOR<BusinessCustomerUpdateWithoutOrganizationInput, BusinessCustomerUncheckedUpdateWithoutOrganizationInput>
    create: XOR<BusinessCustomerCreateWithoutOrganizationInput, BusinessCustomerUncheckedCreateWithoutOrganizationInput>
    where?: BusinessCustomerWhereInput
  }

  export type BusinessCustomerUpdateToOneWithWhereWithoutOrganizationInput = {
    where?: BusinessCustomerWhereInput
    data: XOR<BusinessCustomerUpdateWithoutOrganizationInput, BusinessCustomerUncheckedUpdateWithoutOrganizationInput>
  }

  export type BusinessCustomerUpdateWithoutOrganizationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessCustomerUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type OrganizationCreateWithoutSubscriptionInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    legalName: string
    firstLineOfAddress: string
    secondLineOfAddress?: string | null
    city: string
    postCode: string
    stripeCustomerId?: string | null
    businessCustomers?: OrganizationOnBusinessCustomerCreateNestedOneWithoutOrganizationInput
    business?: BusinessCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutSubscriptionInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    legalName: string
    firstLineOfAddress: string
    secondLineOfAddress?: string | null
    city: string
    postCode: string
    stripeCustomerId?: string | null
    businessCustomers?: OrganizationOnBusinessCustomerUncheckedCreateNestedOneWithoutOrganizationInput
    business?: BusinessUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutSubscriptionInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutSubscriptionInput, OrganizationUncheckedCreateWithoutSubscriptionInput>
  }

  export type OrganizationUpsertWithoutSubscriptionInput = {
    update: XOR<OrganizationUpdateWithoutSubscriptionInput, OrganizationUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<OrganizationCreateWithoutSubscriptionInput, OrganizationUncheckedCreateWithoutSubscriptionInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutSubscriptionInput, OrganizationUncheckedUpdateWithoutSubscriptionInput>
  }

  export type OrganizationUpdateWithoutSubscriptionInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legalName?: StringFieldUpdateOperationsInput | string
    firstLineOfAddress?: StringFieldUpdateOperationsInput | string
    secondLineOfAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postCode?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    businessCustomers?: OrganizationOnBusinessCustomerUpdateOneWithoutOrganizationNestedInput
    business?: BusinessUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutSubscriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legalName?: StringFieldUpdateOperationsInput | string
    firstLineOfAddress?: StringFieldUpdateOperationsInput | string
    secondLineOfAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postCode?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    businessCustomers?: OrganizationOnBusinessCustomerUncheckedUpdateOneWithoutOrganizationNestedInput
    business?: BusinessUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type BusinessCreateWithoutServicesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    businessName: string
    contactNumber: string
    organization: OrganizationCreateNestedOneWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutServicesInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    businessName: string
    contactNumber: string
    organizationId: number
  }

  export type BusinessCreateOrConnectWithoutServicesInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutServicesInput, BusinessUncheckedCreateWithoutServicesInput>
  }

  export type AppointmentCreateWithoutServiceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.Status
    customer: CustomerCreateNestedOneWithoutAppointmentsInput
    slot: BookableSlotCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutServiceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customerId: number
    slotId: number
    status: $Enums.Status
  }

  export type AppointmentCreateOrConnectWithoutServiceInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutServiceInput, AppointmentUncheckedCreateWithoutServiceInput>
  }

  export type AppointmentCreateManyServiceInputEnvelope = {
    data: AppointmentCreateManyServiceInput | AppointmentCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type AvailabilityGroupCreateWithoutServicesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyAvailability?: DailyAvailabilityCreateNestedManyWithoutAvailabilityGroupInput
    BookableSlot?: BookableSlotCreateNestedManyWithoutAvailabilityGroupInput
  }

  export type AvailabilityGroupUncheckedCreateWithoutServicesInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyAvailability?: DailyAvailabilityUncheckedCreateNestedManyWithoutAvailabilityGroupInput
    BookableSlot?: BookableSlotUncheckedCreateNestedManyWithoutAvailabilityGroupInput
  }

  export type AvailabilityGroupCreateOrConnectWithoutServicesInput = {
    where: AvailabilityGroupWhereUniqueInput
    create: XOR<AvailabilityGroupCreateWithoutServicesInput, AvailabilityGroupUncheckedCreateWithoutServicesInput>
  }

  export type BusinessUpsertWithoutServicesInput = {
    update: XOR<BusinessUpdateWithoutServicesInput, BusinessUncheckedUpdateWithoutServicesInput>
    create: XOR<BusinessCreateWithoutServicesInput, BusinessUncheckedCreateWithoutServicesInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutServicesInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutServicesInput, BusinessUncheckedUpdateWithoutServicesInput>
  }

  export type BusinessUpdateWithoutServicesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessName?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    organization?: OrganizationUpdateOneRequiredWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessName?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    organizationId?: IntFieldUpdateOperationsInput | number
  }

  export type AppointmentUpsertWithWhereUniqueWithoutServiceInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutServiceInput, AppointmentUncheckedUpdateWithoutServiceInput>
    create: XOR<AppointmentCreateWithoutServiceInput, AppointmentUncheckedCreateWithoutServiceInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutServiceInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutServiceInput, AppointmentUncheckedUpdateWithoutServiceInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutServiceInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutServiceInput>
  }

  export type AvailabilityGroupUpsertWithoutServicesInput = {
    update: XOR<AvailabilityGroupUpdateWithoutServicesInput, AvailabilityGroupUncheckedUpdateWithoutServicesInput>
    create: XOR<AvailabilityGroupCreateWithoutServicesInput, AvailabilityGroupUncheckedCreateWithoutServicesInput>
    where?: AvailabilityGroupWhereInput
  }

  export type AvailabilityGroupUpdateToOneWithWhereWithoutServicesInput = {
    where?: AvailabilityGroupWhereInput
    data: XOR<AvailabilityGroupUpdateWithoutServicesInput, AvailabilityGroupUncheckedUpdateWithoutServicesInput>
  }

  export type AvailabilityGroupUpdateWithoutServicesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyAvailability?: DailyAvailabilityUpdateManyWithoutAvailabilityGroupNestedInput
    BookableSlot?: BookableSlotUpdateManyWithoutAvailabilityGroupNestedInput
  }

  export type AvailabilityGroupUncheckedUpdateWithoutServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyAvailability?: DailyAvailabilityUncheckedUpdateManyWithoutAvailabilityGroupNestedInput
    BookableSlot?: BookableSlotUncheckedUpdateManyWithoutAvailabilityGroupNestedInput
  }

  export type DailyAvailabilityCreateWithoutAvailabilityGroupInput = {
    dayOfWeek: $Enums.WeekDay
    availabilityBlocks?: TimeBlockCreateNestedManyWithoutDailyAvailabilityDayInput
  }

  export type DailyAvailabilityUncheckedCreateWithoutAvailabilityGroupInput = {
    id?: number
    dayOfWeek: $Enums.WeekDay
    availabilityBlocks?: TimeBlockUncheckedCreateNestedManyWithoutDailyAvailabilityDayInput
  }

  export type DailyAvailabilityCreateOrConnectWithoutAvailabilityGroupInput = {
    where: DailyAvailabilityWhereUniqueInput
    create: XOR<DailyAvailabilityCreateWithoutAvailabilityGroupInput, DailyAvailabilityUncheckedCreateWithoutAvailabilityGroupInput>
  }

  export type DailyAvailabilityCreateManyAvailabilityGroupInputEnvelope = {
    data: DailyAvailabilityCreateManyAvailabilityGroupInput | DailyAvailabilityCreateManyAvailabilityGroupInput[]
    skipDuplicates?: boolean
  }

  export type ServiceCreateWithoutAvailibilityGroupInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    Business?: BusinessCreateNestedOneWithoutServicesInput
    appointments?: AppointmentCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutAvailibilityGroupInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    businessId?: number | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutAvailibilityGroupInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutAvailibilityGroupInput, ServiceUncheckedCreateWithoutAvailibilityGroupInput>
  }

  export type ServiceCreateManyAvailibilityGroupInputEnvelope = {
    data: ServiceCreateManyAvailibilityGroupInput | ServiceCreateManyAvailibilityGroupInput[]
    skipDuplicates?: boolean
  }

  export type BookableSlotCreateWithoutAvailabilityGroupInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    startTime: Date | string
    endTime: Date | string
    Appointment?: AppointmentCreateNestedManyWithoutSlotInput
  }

  export type BookableSlotUncheckedCreateWithoutAvailabilityGroupInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    startTime: Date | string
    endTime: Date | string
    Appointment?: AppointmentUncheckedCreateNestedManyWithoutSlotInput
  }

  export type BookableSlotCreateOrConnectWithoutAvailabilityGroupInput = {
    where: BookableSlotWhereUniqueInput
    create: XOR<BookableSlotCreateWithoutAvailabilityGroupInput, BookableSlotUncheckedCreateWithoutAvailabilityGroupInput>
  }

  export type BookableSlotCreateManyAvailabilityGroupInputEnvelope = {
    data: BookableSlotCreateManyAvailabilityGroupInput | BookableSlotCreateManyAvailabilityGroupInput[]
    skipDuplicates?: boolean
  }

  export type DailyAvailabilityUpsertWithWhereUniqueWithoutAvailabilityGroupInput = {
    where: DailyAvailabilityWhereUniqueInput
    update: XOR<DailyAvailabilityUpdateWithoutAvailabilityGroupInput, DailyAvailabilityUncheckedUpdateWithoutAvailabilityGroupInput>
    create: XOR<DailyAvailabilityCreateWithoutAvailabilityGroupInput, DailyAvailabilityUncheckedCreateWithoutAvailabilityGroupInput>
  }

  export type DailyAvailabilityUpdateWithWhereUniqueWithoutAvailabilityGroupInput = {
    where: DailyAvailabilityWhereUniqueInput
    data: XOR<DailyAvailabilityUpdateWithoutAvailabilityGroupInput, DailyAvailabilityUncheckedUpdateWithoutAvailabilityGroupInput>
  }

  export type DailyAvailabilityUpdateManyWithWhereWithoutAvailabilityGroupInput = {
    where: DailyAvailabilityScalarWhereInput
    data: XOR<DailyAvailabilityUpdateManyMutationInput, DailyAvailabilityUncheckedUpdateManyWithoutAvailabilityGroupInput>
  }

  export type DailyAvailabilityScalarWhereInput = {
    AND?: DailyAvailabilityScalarWhereInput | DailyAvailabilityScalarWhereInput[]
    OR?: DailyAvailabilityScalarWhereInput[]
    NOT?: DailyAvailabilityScalarWhereInput | DailyAvailabilityScalarWhereInput[]
    id?: IntFilter<"DailyAvailability"> | number
    availabilityGroupId?: IntFilter<"DailyAvailability"> | number
    dayOfWeek?: EnumWeekDayFilter<"DailyAvailability"> | $Enums.WeekDay
  }

  export type ServiceUpsertWithWhereUniqueWithoutAvailibilityGroupInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutAvailibilityGroupInput, ServiceUncheckedUpdateWithoutAvailibilityGroupInput>
    create: XOR<ServiceCreateWithoutAvailibilityGroupInput, ServiceUncheckedCreateWithoutAvailibilityGroupInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutAvailibilityGroupInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutAvailibilityGroupInput, ServiceUncheckedUpdateWithoutAvailibilityGroupInput>
  }

  export type ServiceUpdateManyWithWhereWithoutAvailibilityGroupInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutAvailibilityGroupInput>
  }

  export type BookableSlotUpsertWithWhereUniqueWithoutAvailabilityGroupInput = {
    where: BookableSlotWhereUniqueInput
    update: XOR<BookableSlotUpdateWithoutAvailabilityGroupInput, BookableSlotUncheckedUpdateWithoutAvailabilityGroupInput>
    create: XOR<BookableSlotCreateWithoutAvailabilityGroupInput, BookableSlotUncheckedCreateWithoutAvailabilityGroupInput>
  }

  export type BookableSlotUpdateWithWhereUniqueWithoutAvailabilityGroupInput = {
    where: BookableSlotWhereUniqueInput
    data: XOR<BookableSlotUpdateWithoutAvailabilityGroupInput, BookableSlotUncheckedUpdateWithoutAvailabilityGroupInput>
  }

  export type BookableSlotUpdateManyWithWhereWithoutAvailabilityGroupInput = {
    where: BookableSlotScalarWhereInput
    data: XOR<BookableSlotUpdateManyMutationInput, BookableSlotUncheckedUpdateManyWithoutAvailabilityGroupInput>
  }

  export type BookableSlotScalarWhereInput = {
    AND?: BookableSlotScalarWhereInput | BookableSlotScalarWhereInput[]
    OR?: BookableSlotScalarWhereInput[]
    NOT?: BookableSlotScalarWhereInput | BookableSlotScalarWhereInput[]
    id?: IntFilter<"BookableSlot"> | number
    createdAt?: DateTimeFilter<"BookableSlot"> | Date | string
    updatedAt?: DateTimeFilter<"BookableSlot"> | Date | string
    startTime?: DateTimeFilter<"BookableSlot"> | Date | string
    endTime?: DateTimeFilter<"BookableSlot"> | Date | string
    availabilityGroupId?: IntNullableFilter<"BookableSlot"> | number | null
  }

  export type AvailabilityGroupCreateWithoutDailyAvailabilityInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceCreateNestedManyWithoutAvailibilityGroupInput
    BookableSlot?: BookableSlotCreateNestedManyWithoutAvailabilityGroupInput
  }

  export type AvailabilityGroupUncheckedCreateWithoutDailyAvailabilityInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutAvailibilityGroupInput
    BookableSlot?: BookableSlotUncheckedCreateNestedManyWithoutAvailabilityGroupInput
  }

  export type AvailabilityGroupCreateOrConnectWithoutDailyAvailabilityInput = {
    where: AvailabilityGroupWhereUniqueInput
    create: XOR<AvailabilityGroupCreateWithoutDailyAvailabilityInput, AvailabilityGroupUncheckedCreateWithoutDailyAvailabilityInput>
  }

  export type TimeBlockCreateWithoutDailyAvailabilityDayInput = {
    startTime: string
    endTime: string
  }

  export type TimeBlockUncheckedCreateWithoutDailyAvailabilityDayInput = {
    id?: number
    startTime: string
    endTime: string
  }

  export type TimeBlockCreateOrConnectWithoutDailyAvailabilityDayInput = {
    where: TimeBlockWhereUniqueInput
    create: XOR<TimeBlockCreateWithoutDailyAvailabilityDayInput, TimeBlockUncheckedCreateWithoutDailyAvailabilityDayInput>
  }

  export type TimeBlockCreateManyDailyAvailabilityDayInputEnvelope = {
    data: TimeBlockCreateManyDailyAvailabilityDayInput | TimeBlockCreateManyDailyAvailabilityDayInput[]
    skipDuplicates?: boolean
  }

  export type AvailabilityGroupUpsertWithoutDailyAvailabilityInput = {
    update: XOR<AvailabilityGroupUpdateWithoutDailyAvailabilityInput, AvailabilityGroupUncheckedUpdateWithoutDailyAvailabilityInput>
    create: XOR<AvailabilityGroupCreateWithoutDailyAvailabilityInput, AvailabilityGroupUncheckedCreateWithoutDailyAvailabilityInput>
    where?: AvailabilityGroupWhereInput
  }

  export type AvailabilityGroupUpdateToOneWithWhereWithoutDailyAvailabilityInput = {
    where?: AvailabilityGroupWhereInput
    data: XOR<AvailabilityGroupUpdateWithoutDailyAvailabilityInput, AvailabilityGroupUncheckedUpdateWithoutDailyAvailabilityInput>
  }

  export type AvailabilityGroupUpdateWithoutDailyAvailabilityInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUpdateManyWithoutAvailibilityGroupNestedInput
    BookableSlot?: BookableSlotUpdateManyWithoutAvailabilityGroupNestedInput
  }

  export type AvailabilityGroupUncheckedUpdateWithoutDailyAvailabilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutAvailibilityGroupNestedInput
    BookableSlot?: BookableSlotUncheckedUpdateManyWithoutAvailabilityGroupNestedInput
  }

  export type TimeBlockUpsertWithWhereUniqueWithoutDailyAvailabilityDayInput = {
    where: TimeBlockWhereUniqueInput
    update: XOR<TimeBlockUpdateWithoutDailyAvailabilityDayInput, TimeBlockUncheckedUpdateWithoutDailyAvailabilityDayInput>
    create: XOR<TimeBlockCreateWithoutDailyAvailabilityDayInput, TimeBlockUncheckedCreateWithoutDailyAvailabilityDayInput>
  }

  export type TimeBlockUpdateWithWhereUniqueWithoutDailyAvailabilityDayInput = {
    where: TimeBlockWhereUniqueInput
    data: XOR<TimeBlockUpdateWithoutDailyAvailabilityDayInput, TimeBlockUncheckedUpdateWithoutDailyAvailabilityDayInput>
  }

  export type TimeBlockUpdateManyWithWhereWithoutDailyAvailabilityDayInput = {
    where: TimeBlockScalarWhereInput
    data: XOR<TimeBlockUpdateManyMutationInput, TimeBlockUncheckedUpdateManyWithoutDailyAvailabilityDayInput>
  }

  export type TimeBlockScalarWhereInput = {
    AND?: TimeBlockScalarWhereInput | TimeBlockScalarWhereInput[]
    OR?: TimeBlockScalarWhereInput[]
    NOT?: TimeBlockScalarWhereInput | TimeBlockScalarWhereInput[]
    id?: IntFilter<"TimeBlock"> | number
    dailyAvailabilityDayId?: IntFilter<"TimeBlock"> | number
    startTime?: StringFilter<"TimeBlock"> | string
    endTime?: StringFilter<"TimeBlock"> | string
  }

  export type DailyAvailabilityCreateWithoutAvailabilityBlocksInput = {
    dayOfWeek: $Enums.WeekDay
    availabilityGroup: AvailabilityGroupCreateNestedOneWithoutDailyAvailabilityInput
  }

  export type DailyAvailabilityUncheckedCreateWithoutAvailabilityBlocksInput = {
    id?: number
    availabilityGroupId: number
    dayOfWeek: $Enums.WeekDay
  }

  export type DailyAvailabilityCreateOrConnectWithoutAvailabilityBlocksInput = {
    where: DailyAvailabilityWhereUniqueInput
    create: XOR<DailyAvailabilityCreateWithoutAvailabilityBlocksInput, DailyAvailabilityUncheckedCreateWithoutAvailabilityBlocksInput>
  }

  export type DailyAvailabilityUpsertWithoutAvailabilityBlocksInput = {
    update: XOR<DailyAvailabilityUpdateWithoutAvailabilityBlocksInput, DailyAvailabilityUncheckedUpdateWithoutAvailabilityBlocksInput>
    create: XOR<DailyAvailabilityCreateWithoutAvailabilityBlocksInput, DailyAvailabilityUncheckedCreateWithoutAvailabilityBlocksInput>
    where?: DailyAvailabilityWhereInput
  }

  export type DailyAvailabilityUpdateToOneWithWhereWithoutAvailabilityBlocksInput = {
    where?: DailyAvailabilityWhereInput
    data: XOR<DailyAvailabilityUpdateWithoutAvailabilityBlocksInput, DailyAvailabilityUncheckedUpdateWithoutAvailabilityBlocksInput>
  }

  export type DailyAvailabilityUpdateWithoutAvailabilityBlocksInput = {
    dayOfWeek?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    availabilityGroup?: AvailabilityGroupUpdateOneRequiredWithoutDailyAvailabilityNestedInput
  }

  export type DailyAvailabilityUncheckedUpdateWithoutAvailabilityBlocksInput = {
    id?: IntFieldUpdateOperationsInput | number
    availabilityGroupId?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
  }

  export type AppointmentCreateWithoutSlotInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.Status
    customer: CustomerCreateNestedOneWithoutAppointmentsInput
    service: ServiceCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutSlotInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customerId: number
    serviceId: number
    status: $Enums.Status
  }

  export type AppointmentCreateOrConnectWithoutSlotInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutSlotInput, AppointmentUncheckedCreateWithoutSlotInput>
  }

  export type AppointmentCreateManySlotInputEnvelope = {
    data: AppointmentCreateManySlotInput | AppointmentCreateManySlotInput[]
    skipDuplicates?: boolean
  }

  export type AvailabilityGroupCreateWithoutBookableSlotInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyAvailability?: DailyAvailabilityCreateNestedManyWithoutAvailabilityGroupInput
    services?: ServiceCreateNestedManyWithoutAvailibilityGroupInput
  }

  export type AvailabilityGroupUncheckedCreateWithoutBookableSlotInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyAvailability?: DailyAvailabilityUncheckedCreateNestedManyWithoutAvailabilityGroupInput
    services?: ServiceUncheckedCreateNestedManyWithoutAvailibilityGroupInput
  }

  export type AvailabilityGroupCreateOrConnectWithoutBookableSlotInput = {
    where: AvailabilityGroupWhereUniqueInput
    create: XOR<AvailabilityGroupCreateWithoutBookableSlotInput, AvailabilityGroupUncheckedCreateWithoutBookableSlotInput>
  }

  export type AppointmentUpsertWithWhereUniqueWithoutSlotInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutSlotInput, AppointmentUncheckedUpdateWithoutSlotInput>
    create: XOR<AppointmentCreateWithoutSlotInput, AppointmentUncheckedCreateWithoutSlotInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutSlotInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutSlotInput, AppointmentUncheckedUpdateWithoutSlotInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutSlotInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutSlotInput>
  }

  export type AvailabilityGroupUpsertWithoutBookableSlotInput = {
    update: XOR<AvailabilityGroupUpdateWithoutBookableSlotInput, AvailabilityGroupUncheckedUpdateWithoutBookableSlotInput>
    create: XOR<AvailabilityGroupCreateWithoutBookableSlotInput, AvailabilityGroupUncheckedCreateWithoutBookableSlotInput>
    where?: AvailabilityGroupWhereInput
  }

  export type AvailabilityGroupUpdateToOneWithWhereWithoutBookableSlotInput = {
    where?: AvailabilityGroupWhereInput
    data: XOR<AvailabilityGroupUpdateWithoutBookableSlotInput, AvailabilityGroupUncheckedUpdateWithoutBookableSlotInput>
  }

  export type AvailabilityGroupUpdateWithoutBookableSlotInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyAvailability?: DailyAvailabilityUpdateManyWithoutAvailabilityGroupNestedInput
    services?: ServiceUpdateManyWithoutAvailibilityGroupNestedInput
  }

  export type AvailabilityGroupUncheckedUpdateWithoutBookableSlotInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyAvailability?: DailyAvailabilityUncheckedUpdateManyWithoutAvailabilityGroupNestedInput
    services?: ServiceUncheckedUpdateManyWithoutAvailibilityGroupNestedInput
  }

  export type ServiceCreateManyBusinessInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    availibilityGroupId: number
  }

  export type ServiceUpdateWithoutBusinessInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    appointments?: AppointmentUpdateManyWithoutServiceNestedInput
    availibilityGroup?: AvailabilityGroupUpdateOneRequiredWithoutServicesNestedInput
  }

  export type ServiceUncheckedUpdateWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    availibilityGroupId?: IntFieldUpdateOperationsInput | number
    appointments?: AppointmentUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    availibilityGroupId?: IntFieldUpdateOperationsInput | number
  }

  export type AppointmentCreateManyCustomerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceId: number
    slotId: number
    status: $Enums.Status
  }

  export type AppointmentUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    service?: ServiceUpdateOneRequiredWithoutAppointmentsNestedInput
    slot?: BookableSlotUpdateOneRequiredWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceId?: IntFieldUpdateOperationsInput | number
    slotId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type AppointmentUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceId?: IntFieldUpdateOperationsInput | number
    slotId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type BusinessCreateManyOrganizationInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    businessName: string
    contactNumber: string
  }

  export type BusinessUpdateWithoutOrganizationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessName?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    services?: ServiceUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessName?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    services?: ServiceUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateManyWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessName?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentCreateManyServiceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customerId: number
    slotId: number
    status: $Enums.Status
  }

  export type AppointmentUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    customer?: CustomerUpdateOneRequiredWithoutAppointmentsNestedInput
    slot?: BookableSlotUpdateOneRequiredWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: IntFieldUpdateOperationsInput | number
    slotId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type AppointmentUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: IntFieldUpdateOperationsInput | number
    slotId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type DailyAvailabilityCreateManyAvailabilityGroupInput = {
    id?: number
    dayOfWeek: $Enums.WeekDay
  }

  export type ServiceCreateManyAvailibilityGroupInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    businessId?: number | null
  }

  export type BookableSlotCreateManyAvailabilityGroupInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    startTime: Date | string
    endTime: Date | string
  }

  export type DailyAvailabilityUpdateWithoutAvailabilityGroupInput = {
    dayOfWeek?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    availabilityBlocks?: TimeBlockUpdateManyWithoutDailyAvailabilityDayNestedInput
  }

  export type DailyAvailabilityUncheckedUpdateWithoutAvailabilityGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    availabilityBlocks?: TimeBlockUncheckedUpdateManyWithoutDailyAvailabilityDayNestedInput
  }

  export type DailyAvailabilityUncheckedUpdateManyWithoutAvailabilityGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
  }

  export type ServiceUpdateWithoutAvailibilityGroupInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    Business?: BusinessUpdateOneWithoutServicesNestedInput
    appointments?: AppointmentUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutAvailibilityGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    businessId?: NullableIntFieldUpdateOperationsInput | number | null
    appointments?: AppointmentUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutAvailibilityGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    businessId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookableSlotUpdateWithoutAvailabilityGroupInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    Appointment?: AppointmentUpdateManyWithoutSlotNestedInput
  }

  export type BookableSlotUncheckedUpdateWithoutAvailabilityGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    Appointment?: AppointmentUncheckedUpdateManyWithoutSlotNestedInput
  }

  export type BookableSlotUncheckedUpdateManyWithoutAvailabilityGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeBlockCreateManyDailyAvailabilityDayInput = {
    id?: number
    startTime: string
    endTime: string
  }

  export type TimeBlockUpdateWithoutDailyAvailabilityDayInput = {
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type TimeBlockUncheckedUpdateWithoutDailyAvailabilityDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type TimeBlockUncheckedUpdateManyWithoutDailyAvailabilityDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentCreateManySlotInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customerId: number
    serviceId: number
    status: $Enums.Status
  }

  export type AppointmentUpdateWithoutSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    customer?: CustomerUpdateOneRequiredWithoutAppointmentsNestedInput
    service?: ServiceUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type AppointmentUncheckedUpdateManyWithoutSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}