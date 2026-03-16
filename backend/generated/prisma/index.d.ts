
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AdminUser
 * 
 */
export type AdminUser = $Result.DefaultSelection<Prisma.$AdminUserPayload>
/**
 * Model HomeSlider
 * 
 */
export type HomeSlider = $Result.DefaultSelection<Prisma.$HomeSliderPayload>
/**
 * Model HomeSliderItem
 * 
 */
export type HomeSliderItem = $Result.DefaultSelection<Prisma.$HomeSliderItemPayload>
/**
 * Model CoverImage
 * 
 */
export type CoverImage = $Result.DefaultSelection<Prisma.$CoverImagePayload>
/**
 * Model SuccessHero
 * 
 */
export type SuccessHero = $Result.DefaultSelection<Prisma.$SuccessHeroPayload>
/**
 * Model SuccessModelReview
 * 
 */
export type SuccessModelReview = $Result.DefaultSelection<Prisma.$SuccessModelReviewPayload>
/**
 * Model FeaturedItem
 * 
 */
export type FeaturedItem = $Result.DefaultSelection<Prisma.$FeaturedItemPayload>
/**
 * Model News
 * 
 */
export type News = $Result.DefaultSelection<Prisma.$NewsPayload>
/**
 * Model AboutPage
 * 
 */
export type AboutPage = $Result.DefaultSelection<Prisma.$AboutPagePayload>
/**
 * Model ContactInfo
 * 
 */
export type ContactInfo = $Result.DefaultSelection<Prisma.$ContactInfoPayload>
/**
 * Model FAQ
 * 
 */
export type FAQ = $Result.DefaultSelection<Prisma.$FAQPayload>
/**
 * Model Application
 * 
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>
/**
 * Model ContactMessage
 * 
 */
export type ContactMessage = $Result.DefaultSelection<Prisma.$ContactMessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AdminRole: {
  SUPERADMIN: 'SUPERADMIN',
  ADMIN: 'ADMIN',
  MODERATOR: 'MODERATOR',
  SUPPORT: 'SUPPORT'
};

export type AdminRole = (typeof AdminRole)[keyof typeof AdminRole]


export const CoverType: {
  WOMEN: 'WOMEN',
  MEN: 'MEN',
  NEW_FACES: 'NEW_FACES'
};

export type CoverType = (typeof CoverType)[keyof typeof CoverType]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const ApplicationStatus: {
  NEW: 'NEW',
  REVIEW: 'REVIEW',
  REJECTED: 'REJECTED',
  ACCEPTED: 'ACCEPTED'
};

export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus]

}

export type AdminRole = $Enums.AdminRole

export const AdminRole: typeof $Enums.AdminRole

export type CoverType = $Enums.CoverType

export const CoverType: typeof $Enums.CoverType

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type ApplicationStatus = $Enums.ApplicationStatus

export const ApplicationStatus: typeof $Enums.ApplicationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AdminUsers
 * const adminUsers = await prisma.adminUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * // Fetch zero or more AdminUsers
   * const adminUsers = await prisma.adminUser.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.adminUser`: Exposes CRUD operations for the **AdminUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminUsers
    * const adminUsers = await prisma.adminUser.findMany()
    * ```
    */
  get adminUser(): Prisma.AdminUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.homeSlider`: Exposes CRUD operations for the **HomeSlider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HomeSliders
    * const homeSliders = await prisma.homeSlider.findMany()
    * ```
    */
  get homeSlider(): Prisma.HomeSliderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.homeSliderItem`: Exposes CRUD operations for the **HomeSliderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HomeSliderItems
    * const homeSliderItems = await prisma.homeSliderItem.findMany()
    * ```
    */
  get homeSliderItem(): Prisma.HomeSliderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coverImage`: Exposes CRUD operations for the **CoverImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoverImages
    * const coverImages = await prisma.coverImage.findMany()
    * ```
    */
  get coverImage(): Prisma.CoverImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.successHero`: Exposes CRUD operations for the **SuccessHero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SuccessHeroes
    * const successHeroes = await prisma.successHero.findMany()
    * ```
    */
  get successHero(): Prisma.SuccessHeroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.successModelReview`: Exposes CRUD operations for the **SuccessModelReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SuccessModelReviews
    * const successModelReviews = await prisma.successModelReview.findMany()
    * ```
    */
  get successModelReview(): Prisma.SuccessModelReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.featuredItem`: Exposes CRUD operations for the **FeaturedItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeaturedItems
    * const featuredItems = await prisma.featuredItem.findMany()
    * ```
    */
  get featuredItem(): Prisma.FeaturedItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.news`: Exposes CRUD operations for the **News** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more News
    * const news = await prisma.news.findMany()
    * ```
    */
  get news(): Prisma.NewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aboutPage`: Exposes CRUD operations for the **AboutPage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AboutPages
    * const aboutPages = await prisma.aboutPage.findMany()
    * ```
    */
  get aboutPage(): Prisma.AboutPageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactInfo`: Exposes CRUD operations for the **ContactInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactInfos
    * const contactInfos = await prisma.contactInfo.findMany()
    * ```
    */
  get contactInfo(): Prisma.ContactInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fAQ`: Exposes CRUD operations for the **FAQ** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FAQS
    * const fAQS = await prisma.fAQ.findMany()
    * ```
    */
  get fAQ(): Prisma.FAQDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactMessage`: Exposes CRUD operations for the **ContactMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactMessages
    * const contactMessages = await prisma.contactMessage.findMany()
    * ```
    */
  get contactMessage(): Prisma.ContactMessageDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    AdminUser: 'AdminUser',
    HomeSlider: 'HomeSlider',
    HomeSliderItem: 'HomeSliderItem',
    CoverImage: 'CoverImage',
    SuccessHero: 'SuccessHero',
    SuccessModelReview: 'SuccessModelReview',
    FeaturedItem: 'FeaturedItem',
    News: 'News',
    AboutPage: 'AboutPage',
    ContactInfo: 'ContactInfo',
    FAQ: 'FAQ',
    Application: 'Application',
    ContactMessage: 'ContactMessage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "adminUser" | "homeSlider" | "homeSliderItem" | "coverImage" | "successHero" | "successModelReview" | "featuredItem" | "news" | "aboutPage" | "contactInfo" | "fAQ" | "application" | "contactMessage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AdminUser: {
        payload: Prisma.$AdminUserPayload<ExtArgs>
        fields: Prisma.AdminUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findFirst: {
            args: Prisma.AdminUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findMany: {
            args: Prisma.AdminUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          create: {
            args: Prisma.AdminUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          createMany: {
            args: Prisma.AdminUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          delete: {
            args: Prisma.AdminUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          update: {
            args: Prisma.AdminUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          deleteMany: {
            args: Prisma.AdminUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          upsert: {
            args: Prisma.AdminUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          aggregate: {
            args: Prisma.AdminUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminUser>
          }
          groupBy: {
            args: Prisma.AdminUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminUserCountArgs<ExtArgs>
            result: $Utils.Optional<AdminUserCountAggregateOutputType> | number
          }
        }
      }
      HomeSlider: {
        payload: Prisma.$HomeSliderPayload<ExtArgs>
        fields: Prisma.HomeSliderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HomeSliderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeSliderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HomeSliderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeSliderPayload>
          }
          findFirst: {
            args: Prisma.HomeSliderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeSliderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HomeSliderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeSliderPayload>
          }
          findMany: {
            args: Prisma.HomeSliderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeSliderPayload>[]
          }
          create: {
            args: Prisma.HomeSliderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeSliderPayload>
          }
          createMany: {
            args: Prisma.HomeSliderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HomeSliderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeSliderPayload>[]
          }
          delete: {
            args: Prisma.HomeSliderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeSliderPayload>
          }
          update: {
            args: Prisma.HomeSliderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeSliderPayload>
          }
          deleteMany: {
            args: Prisma.HomeSliderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HomeSliderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HomeSliderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeSliderPayload>[]
          }
          upsert: {
            args: Prisma.HomeSliderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeSliderPayload>
          }
          aggregate: {
            args: Prisma.HomeSliderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHomeSlider>
          }
          groupBy: {
            args: Prisma.HomeSliderGroupByArgs<ExtArgs>
            result: $Utils.Optional<HomeSliderGroupByOutputType>[]
          }
          count: {
            args: Prisma.HomeSliderCountArgs<ExtArgs>
            result: $Utils.Optional<HomeSliderCountAggregateOutputType> | number
          }
        }
      }
      HomeSliderItem: {
        payload: Prisma.$HomeSliderItemPayload<ExtArgs>
        fields: Prisma.HomeSliderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HomeSliderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeSliderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HomeSliderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeSliderItemPayload>
          }
          findFirst: {
            args: Prisma.HomeSliderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeSliderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HomeSliderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeSliderItemPayload>
          }
          findMany: {
            args: Prisma.HomeSliderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeSliderItemPayload>[]
          }
          create: {
            args: Prisma.HomeSliderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeSliderItemPayload>
          }
          createMany: {
            args: Prisma.HomeSliderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HomeSliderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeSliderItemPayload>[]
          }
          delete: {
            args: Prisma.HomeSliderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeSliderItemPayload>
          }
          update: {
            args: Prisma.HomeSliderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeSliderItemPayload>
          }
          deleteMany: {
            args: Prisma.HomeSliderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HomeSliderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HomeSliderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeSliderItemPayload>[]
          }
          upsert: {
            args: Prisma.HomeSliderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeSliderItemPayload>
          }
          aggregate: {
            args: Prisma.HomeSliderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHomeSliderItem>
          }
          groupBy: {
            args: Prisma.HomeSliderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<HomeSliderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.HomeSliderItemCountArgs<ExtArgs>
            result: $Utils.Optional<HomeSliderItemCountAggregateOutputType> | number
          }
        }
      }
      CoverImage: {
        payload: Prisma.$CoverImagePayload<ExtArgs>
        fields: Prisma.CoverImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoverImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoverImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverImagePayload>
          }
          findFirst: {
            args: Prisma.CoverImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoverImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverImagePayload>
          }
          findMany: {
            args: Prisma.CoverImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverImagePayload>[]
          }
          create: {
            args: Prisma.CoverImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverImagePayload>
          }
          createMany: {
            args: Prisma.CoverImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoverImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverImagePayload>[]
          }
          delete: {
            args: Prisma.CoverImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverImagePayload>
          }
          update: {
            args: Prisma.CoverImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverImagePayload>
          }
          deleteMany: {
            args: Prisma.CoverImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoverImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoverImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverImagePayload>[]
          }
          upsert: {
            args: Prisma.CoverImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverImagePayload>
          }
          aggregate: {
            args: Prisma.CoverImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoverImage>
          }
          groupBy: {
            args: Prisma.CoverImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoverImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoverImageCountArgs<ExtArgs>
            result: $Utils.Optional<CoverImageCountAggregateOutputType> | number
          }
        }
      }
      SuccessHero: {
        payload: Prisma.$SuccessHeroPayload<ExtArgs>
        fields: Prisma.SuccessHeroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuccessHeroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessHeroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuccessHeroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessHeroPayload>
          }
          findFirst: {
            args: Prisma.SuccessHeroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessHeroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuccessHeroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessHeroPayload>
          }
          findMany: {
            args: Prisma.SuccessHeroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessHeroPayload>[]
          }
          create: {
            args: Prisma.SuccessHeroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessHeroPayload>
          }
          createMany: {
            args: Prisma.SuccessHeroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SuccessHeroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessHeroPayload>[]
          }
          delete: {
            args: Prisma.SuccessHeroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessHeroPayload>
          }
          update: {
            args: Prisma.SuccessHeroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessHeroPayload>
          }
          deleteMany: {
            args: Prisma.SuccessHeroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuccessHeroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SuccessHeroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessHeroPayload>[]
          }
          upsert: {
            args: Prisma.SuccessHeroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessHeroPayload>
          }
          aggregate: {
            args: Prisma.SuccessHeroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuccessHero>
          }
          groupBy: {
            args: Prisma.SuccessHeroGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuccessHeroGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuccessHeroCountArgs<ExtArgs>
            result: $Utils.Optional<SuccessHeroCountAggregateOutputType> | number
          }
        }
      }
      SuccessModelReview: {
        payload: Prisma.$SuccessModelReviewPayload<ExtArgs>
        fields: Prisma.SuccessModelReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuccessModelReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessModelReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuccessModelReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessModelReviewPayload>
          }
          findFirst: {
            args: Prisma.SuccessModelReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessModelReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuccessModelReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessModelReviewPayload>
          }
          findMany: {
            args: Prisma.SuccessModelReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessModelReviewPayload>[]
          }
          create: {
            args: Prisma.SuccessModelReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessModelReviewPayload>
          }
          createMany: {
            args: Prisma.SuccessModelReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SuccessModelReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessModelReviewPayload>[]
          }
          delete: {
            args: Prisma.SuccessModelReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessModelReviewPayload>
          }
          update: {
            args: Prisma.SuccessModelReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessModelReviewPayload>
          }
          deleteMany: {
            args: Prisma.SuccessModelReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuccessModelReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SuccessModelReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessModelReviewPayload>[]
          }
          upsert: {
            args: Prisma.SuccessModelReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessModelReviewPayload>
          }
          aggregate: {
            args: Prisma.SuccessModelReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuccessModelReview>
          }
          groupBy: {
            args: Prisma.SuccessModelReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuccessModelReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuccessModelReviewCountArgs<ExtArgs>
            result: $Utils.Optional<SuccessModelReviewCountAggregateOutputType> | number
          }
        }
      }
      FeaturedItem: {
        payload: Prisma.$FeaturedItemPayload<ExtArgs>
        fields: Prisma.FeaturedItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeaturedItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeaturedItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedItemPayload>
          }
          findFirst: {
            args: Prisma.FeaturedItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeaturedItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedItemPayload>
          }
          findMany: {
            args: Prisma.FeaturedItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedItemPayload>[]
          }
          create: {
            args: Prisma.FeaturedItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedItemPayload>
          }
          createMany: {
            args: Prisma.FeaturedItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeaturedItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedItemPayload>[]
          }
          delete: {
            args: Prisma.FeaturedItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedItemPayload>
          }
          update: {
            args: Prisma.FeaturedItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedItemPayload>
          }
          deleteMany: {
            args: Prisma.FeaturedItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeaturedItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeaturedItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedItemPayload>[]
          }
          upsert: {
            args: Prisma.FeaturedItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedItemPayload>
          }
          aggregate: {
            args: Prisma.FeaturedItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeaturedItem>
          }
          groupBy: {
            args: Prisma.FeaturedItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeaturedItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeaturedItemCountArgs<ExtArgs>
            result: $Utils.Optional<FeaturedItemCountAggregateOutputType> | number
          }
        }
      }
      News: {
        payload: Prisma.$NewsPayload<ExtArgs>
        fields: Prisma.NewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findFirst: {
            args: Prisma.NewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findMany: {
            args: Prisma.NewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          create: {
            args: Prisma.NewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          createMany: {
            args: Prisma.NewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          delete: {
            args: Prisma.NewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          update: {
            args: Prisma.NewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          deleteMany: {
            args: Prisma.NewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          upsert: {
            args: Prisma.NewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          aggregate: {
            args: Prisma.NewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNews>
          }
          groupBy: {
            args: Prisma.NewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsCountArgs<ExtArgs>
            result: $Utils.Optional<NewsCountAggregateOutputType> | number
          }
        }
      }
      AboutPage: {
        payload: Prisma.$AboutPagePayload<ExtArgs>
        fields: Prisma.AboutPageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AboutPageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AboutPageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPagePayload>
          }
          findFirst: {
            args: Prisma.AboutPageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AboutPageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPagePayload>
          }
          findMany: {
            args: Prisma.AboutPageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPagePayload>[]
          }
          create: {
            args: Prisma.AboutPageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPagePayload>
          }
          createMany: {
            args: Prisma.AboutPageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AboutPageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPagePayload>[]
          }
          delete: {
            args: Prisma.AboutPageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPagePayload>
          }
          update: {
            args: Prisma.AboutPageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPagePayload>
          }
          deleteMany: {
            args: Prisma.AboutPageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AboutPageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AboutPageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPagePayload>[]
          }
          upsert: {
            args: Prisma.AboutPageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPagePayload>
          }
          aggregate: {
            args: Prisma.AboutPageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAboutPage>
          }
          groupBy: {
            args: Prisma.AboutPageGroupByArgs<ExtArgs>
            result: $Utils.Optional<AboutPageGroupByOutputType>[]
          }
          count: {
            args: Prisma.AboutPageCountArgs<ExtArgs>
            result: $Utils.Optional<AboutPageCountAggregateOutputType> | number
          }
        }
      }
      ContactInfo: {
        payload: Prisma.$ContactInfoPayload<ExtArgs>
        fields: Prisma.ContactInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          findFirst: {
            args: Prisma.ContactInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          findMany: {
            args: Prisma.ContactInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>[]
          }
          create: {
            args: Prisma.ContactInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          createMany: {
            args: Prisma.ContactInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>[]
          }
          delete: {
            args: Prisma.ContactInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          update: {
            args: Prisma.ContactInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          deleteMany: {
            args: Prisma.ContactInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>[]
          }
          upsert: {
            args: Prisma.ContactInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          aggregate: {
            args: Prisma.ContactInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactInfo>
          }
          groupBy: {
            args: Prisma.ContactInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactInfoCountArgs<ExtArgs>
            result: $Utils.Optional<ContactInfoCountAggregateOutputType> | number
          }
        }
      }
      FAQ: {
        payload: Prisma.$FAQPayload<ExtArgs>
        fields: Prisma.FAQFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FAQFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FAQFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          findFirst: {
            args: Prisma.FAQFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FAQFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          findMany: {
            args: Prisma.FAQFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>[]
          }
          create: {
            args: Prisma.FAQCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          createMany: {
            args: Prisma.FAQCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FAQCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>[]
          }
          delete: {
            args: Prisma.FAQDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          update: {
            args: Prisma.FAQUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          deleteMany: {
            args: Prisma.FAQDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FAQUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FAQUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>[]
          }
          upsert: {
            args: Prisma.FAQUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          aggregate: {
            args: Prisma.FAQAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFAQ>
          }
          groupBy: {
            args: Prisma.FAQGroupByArgs<ExtArgs>
            result: $Utils.Optional<FAQGroupByOutputType>[]
          }
          count: {
            args: Prisma.FAQCountArgs<ExtArgs>
            result: $Utils.Optional<FAQCountAggregateOutputType> | number
          }
        }
      }
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>
        fields: Prisma.ApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
      ContactMessage: {
        payload: Prisma.$ContactMessagePayload<ExtArgs>
        fields: Prisma.ContactMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          findFirst: {
            args: Prisma.ContactMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          findMany: {
            args: Prisma.ContactMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>[]
          }
          create: {
            args: Prisma.ContactMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          createMany: {
            args: Prisma.ContactMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>[]
          }
          delete: {
            args: Prisma.ContactMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          update: {
            args: Prisma.ContactMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          deleteMany: {
            args: Prisma.ContactMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>[]
          }
          upsert: {
            args: Prisma.ContactMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          aggregate: {
            args: Prisma.ContactMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactMessage>
          }
          groupBy: {
            args: Prisma.ContactMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ContactMessageCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    adminUser?: AdminUserOmit
    homeSlider?: HomeSliderOmit
    homeSliderItem?: HomeSliderItemOmit
    coverImage?: CoverImageOmit
    successHero?: SuccessHeroOmit
    successModelReview?: SuccessModelReviewOmit
    featuredItem?: FeaturedItemOmit
    news?: NewsOmit
    aboutPage?: AboutPageOmit
    contactInfo?: ContactInfoOmit
    fAQ?: FAQOmit
    application?: ApplicationOmit
    contactMessage?: ContactMessageOmit
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
   * Count Type HomeSliderCountOutputType
   */

  export type HomeSliderCountOutputType = {
    items: number
  }

  export type HomeSliderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | HomeSliderCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * HomeSliderCountOutputType without action
   */
  export type HomeSliderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeSliderCountOutputType
     */
    select?: HomeSliderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HomeSliderCountOutputType without action
   */
  export type HomeSliderCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HomeSliderItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AdminUser
   */

  export type AggregateAdminUser = {
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  export type AdminUserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    phone: string | null
    role: $Enums.AdminRole | null
    isActive: boolean | null
  }

  export type AdminUserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    phone: string | null
    role: $Enums.AdminRole | null
    isActive: boolean | null
  }

  export type AdminUserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    phone: number
    role: number
    isActive: number
    _all: number
  }


  export type AdminUserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    phone?: true
    role?: true
    isActive?: true
  }

  export type AdminUserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    phone?: true
    role?: true
    isActive?: true
  }

  export type AdminUserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    phone?: true
    role?: true
    isActive?: true
    _all?: true
  }

  export type AdminUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUser to aggregate.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminUsers
    **/
    _count?: true | AdminUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminUserMaxAggregateInputType
  }

  export type GetAdminUserAggregateType<T extends AdminUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminUser[P]>
      : GetScalarType<T[P], AggregateAdminUser[P]>
  }




  export type AdminUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserWhereInput
    orderBy?: AdminUserOrderByWithAggregationInput | AdminUserOrderByWithAggregationInput[]
    by: AdminUserScalarFieldEnum[] | AdminUserScalarFieldEnum
    having?: AdminUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminUserCountAggregateInputType | true
    _min?: AdminUserMinAggregateInputType
    _max?: AdminUserMaxAggregateInputType
  }

  export type AdminUserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    name: string | null
    phone: string | null
    role: $Enums.AdminRole
    isActive: boolean
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  type GetAdminUserGroupByPayload<T extends AdminUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
            : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
        }
      >
    >


  export type AdminUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    phone?: boolean
    role?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    phone?: boolean
    role?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    phone?: boolean
    role?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    phone?: boolean
    role?: boolean
    isActive?: boolean
  }

  export type AdminUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "name" | "phone" | "role" | "isActive", ExtArgs["result"]["adminUser"]>

  export type $AdminUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      name: string | null
      phone: string | null
      role: $Enums.AdminRole
      isActive: boolean
    }, ExtArgs["result"]["adminUser"]>
    composites: {}
  }

  type AdminUserGetPayload<S extends boolean | null | undefined | AdminUserDefaultArgs> = $Result.GetResult<Prisma.$AdminUserPayload, S>

  type AdminUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminUserCountAggregateInputType | true
    }

  export interface AdminUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminUser'], meta: { name: 'AdminUser' } }
    /**
     * Find zero or one AdminUser that matches the filter.
     * @param {AdminUserFindUniqueArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminUserFindUniqueArgs>(args: SelectSubset<T, AdminUserFindUniqueArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminUserFindUniqueOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminUserFindFirstArgs>(args?: SelectSubset<T, AdminUserFindFirstArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminUsers
     * const adminUsers = await prisma.adminUser.findMany()
     * 
     * // Get first 10 AdminUsers
     * const adminUsers = await prisma.adminUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminUserFindManyArgs>(args?: SelectSubset<T, AdminUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminUser.
     * @param {AdminUserCreateArgs} args - Arguments to create a AdminUser.
     * @example
     * // Create one AdminUser
     * const AdminUser = await prisma.adminUser.create({
     *   data: {
     *     // ... data to create a AdminUser
     *   }
     * })
     * 
     */
    create<T extends AdminUserCreateArgs>(args: SelectSubset<T, AdminUserCreateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminUsers.
     * @param {AdminUserCreateManyArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminUserCreateManyArgs>(args?: SelectSubset<T, AdminUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminUsers and returns the data saved in the database.
     * @param {AdminUserCreateManyAndReturnArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminUser.
     * @param {AdminUserDeleteArgs} args - Arguments to delete one AdminUser.
     * @example
     * // Delete one AdminUser
     * const AdminUser = await prisma.adminUser.delete({
     *   where: {
     *     // ... filter to delete one AdminUser
     *   }
     * })
     * 
     */
    delete<T extends AdminUserDeleteArgs>(args: SelectSubset<T, AdminUserDeleteArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminUser.
     * @param {AdminUserUpdateArgs} args - Arguments to update one AdminUser.
     * @example
     * // Update one AdminUser
     * const adminUser = await prisma.adminUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUserUpdateArgs>(args: SelectSubset<T, AdminUserUpdateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminUsers.
     * @param {AdminUserDeleteManyArgs} args - Arguments to filter AdminUsers to delete.
     * @example
     * // Delete a few AdminUsers
     * const { count } = await prisma.adminUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminUserDeleteManyArgs>(args?: SelectSubset<T, AdminUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUserUpdateManyArgs>(args: SelectSubset<T, AdminUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers and returns the data updated in the database.
     * @param {AdminUserUpdateManyAndReturnArgs} args - Arguments to update many AdminUsers.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminUserUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminUser.
     * @param {AdminUserUpsertArgs} args - Arguments to update or create a AdminUser.
     * @example
     * // Update or create a AdminUser
     * const adminUser = await prisma.adminUser.upsert({
     *   create: {
     *     // ... data to create a AdminUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminUser we want to update
     *   }
     * })
     */
    upsert<T extends AdminUserUpsertArgs>(args: SelectSubset<T, AdminUserUpsertArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserCountArgs} args - Arguments to filter AdminUsers to count.
     * @example
     * // Count the number of AdminUsers
     * const count = await prisma.adminUser.count({
     *   where: {
     *     // ... the filter for the AdminUsers we want to count
     *   }
     * })
    **/
    count<T extends AdminUserCountArgs>(
      args?: Subset<T, AdminUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminUserAggregateArgs>(args: Subset<T, AdminUserAggregateArgs>): Prisma.PrismaPromise<GetAdminUserAggregateType<T>>

    /**
     * Group by AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserGroupByArgs} args - Group by arguments.
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
      T extends AdminUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminUserGroupByArgs['orderBy'] }
        : { orderBy?: AdminUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminUser model
   */
  readonly fields: AdminUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the AdminUser model
   */
  interface AdminUserFieldRefs {
    readonly id: FieldRef<"AdminUser", 'String'>
    readonly email: FieldRef<"AdminUser", 'String'>
    readonly passwordHash: FieldRef<"AdminUser", 'String'>
    readonly name: FieldRef<"AdminUser", 'String'>
    readonly phone: FieldRef<"AdminUser", 'String'>
    readonly role: FieldRef<"AdminUser", 'AdminRole'>
    readonly isActive: FieldRef<"AdminUser", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * AdminUser findUnique
   */
  export type AdminUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findUniqueOrThrow
   */
  export type AdminUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findFirst
   */
  export type AdminUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findFirstOrThrow
   */
  export type AdminUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findMany
   */
  export type AdminUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUsers to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser create
   */
  export type AdminUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to create a AdminUser.
     */
    data: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
  }

  /**
   * AdminUser createMany
   */
  export type AdminUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser createManyAndReturn
   */
  export type AdminUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser update
   */
  export type AdminUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to update a AdminUser.
     */
    data: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
    /**
     * Choose, which AdminUser to update.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser updateMany
   */
  export type AdminUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser updateManyAndReturn
   */
  export type AdminUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser upsert
   */
  export type AdminUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The filter to search for the AdminUser to update in case it exists.
     */
    where: AdminUserWhereUniqueInput
    /**
     * In case the AdminUser found by the `where` argument doesn't exist, create a new AdminUser with this data.
     */
    create: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
    /**
     * In case the AdminUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
  }

  /**
   * AdminUser delete
   */
  export type AdminUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter which AdminUser to delete.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser deleteMany
   */
  export type AdminUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUsers to delete
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to delete.
     */
    limit?: number
  }

  /**
   * AdminUser without action
   */
  export type AdminUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
  }


  /**
   * Model HomeSlider
   */

  export type AggregateHomeSlider = {
    _count: HomeSliderCountAggregateOutputType | null
    _avg: HomeSliderAvgAggregateOutputType | null
    _sum: HomeSliderSumAggregateOutputType | null
    _min: HomeSliderMinAggregateOutputType | null
    _max: HomeSliderMaxAggregateOutputType | null
  }

  export type HomeSliderAvgAggregateOutputType = {
    id: number | null
  }

  export type HomeSliderSumAggregateOutputType = {
    id: number | null
  }

  export type HomeSliderMinAggregateOutputType = {
    id: number | null
    key: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HomeSliderMaxAggregateOutputType = {
    id: number | null
    key: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HomeSliderCountAggregateOutputType = {
    id: number
    key: number
    name: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HomeSliderAvgAggregateInputType = {
    id?: true
  }

  export type HomeSliderSumAggregateInputType = {
    id?: true
  }

  export type HomeSliderMinAggregateInputType = {
    id?: true
    key?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HomeSliderMaxAggregateInputType = {
    id?: true
    key?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HomeSliderCountAggregateInputType = {
    id?: true
    key?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HomeSliderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HomeSlider to aggregate.
     */
    where?: HomeSliderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeSliders to fetch.
     */
    orderBy?: HomeSliderOrderByWithRelationInput | HomeSliderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HomeSliderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeSliders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeSliders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HomeSliders
    **/
    _count?: true | HomeSliderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HomeSliderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HomeSliderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HomeSliderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HomeSliderMaxAggregateInputType
  }

  export type GetHomeSliderAggregateType<T extends HomeSliderAggregateArgs> = {
        [P in keyof T & keyof AggregateHomeSlider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHomeSlider[P]>
      : GetScalarType<T[P], AggregateHomeSlider[P]>
  }




  export type HomeSliderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HomeSliderWhereInput
    orderBy?: HomeSliderOrderByWithAggregationInput | HomeSliderOrderByWithAggregationInput[]
    by: HomeSliderScalarFieldEnum[] | HomeSliderScalarFieldEnum
    having?: HomeSliderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HomeSliderCountAggregateInputType | true
    _avg?: HomeSliderAvgAggregateInputType
    _sum?: HomeSliderSumAggregateInputType
    _min?: HomeSliderMinAggregateInputType
    _max?: HomeSliderMaxAggregateInputType
  }

  export type HomeSliderGroupByOutputType = {
    id: number
    key: string
    name: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: HomeSliderCountAggregateOutputType | null
    _avg: HomeSliderAvgAggregateOutputType | null
    _sum: HomeSliderSumAggregateOutputType | null
    _min: HomeSliderMinAggregateOutputType | null
    _max: HomeSliderMaxAggregateOutputType | null
  }

  type GetHomeSliderGroupByPayload<T extends HomeSliderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HomeSliderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HomeSliderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HomeSliderGroupByOutputType[P]>
            : GetScalarType<T[P], HomeSliderGroupByOutputType[P]>
        }
      >
    >


  export type HomeSliderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | HomeSlider$itemsArgs<ExtArgs>
    _count?: boolean | HomeSliderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["homeSlider"]>

  export type HomeSliderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["homeSlider"]>

  export type HomeSliderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["homeSlider"]>

  export type HomeSliderSelectScalar = {
    id?: boolean
    key?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HomeSliderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "name" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["homeSlider"]>
  export type HomeSliderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | HomeSlider$itemsArgs<ExtArgs>
    _count?: boolean | HomeSliderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HomeSliderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HomeSliderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HomeSliderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HomeSlider"
    objects: {
      items: Prisma.$HomeSliderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      key: string
      name: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["homeSlider"]>
    composites: {}
  }

  type HomeSliderGetPayload<S extends boolean | null | undefined | HomeSliderDefaultArgs> = $Result.GetResult<Prisma.$HomeSliderPayload, S>

  type HomeSliderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HomeSliderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HomeSliderCountAggregateInputType | true
    }

  export interface HomeSliderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HomeSlider'], meta: { name: 'HomeSlider' } }
    /**
     * Find zero or one HomeSlider that matches the filter.
     * @param {HomeSliderFindUniqueArgs} args - Arguments to find a HomeSlider
     * @example
     * // Get one HomeSlider
     * const homeSlider = await prisma.homeSlider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HomeSliderFindUniqueArgs>(args: SelectSubset<T, HomeSliderFindUniqueArgs<ExtArgs>>): Prisma__HomeSliderClient<$Result.GetResult<Prisma.$HomeSliderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HomeSlider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HomeSliderFindUniqueOrThrowArgs} args - Arguments to find a HomeSlider
     * @example
     * // Get one HomeSlider
     * const homeSlider = await prisma.homeSlider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HomeSliderFindUniqueOrThrowArgs>(args: SelectSubset<T, HomeSliderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HomeSliderClient<$Result.GetResult<Prisma.$HomeSliderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HomeSlider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeSliderFindFirstArgs} args - Arguments to find a HomeSlider
     * @example
     * // Get one HomeSlider
     * const homeSlider = await prisma.homeSlider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HomeSliderFindFirstArgs>(args?: SelectSubset<T, HomeSliderFindFirstArgs<ExtArgs>>): Prisma__HomeSliderClient<$Result.GetResult<Prisma.$HomeSliderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HomeSlider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeSliderFindFirstOrThrowArgs} args - Arguments to find a HomeSlider
     * @example
     * // Get one HomeSlider
     * const homeSlider = await prisma.homeSlider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HomeSliderFindFirstOrThrowArgs>(args?: SelectSubset<T, HomeSliderFindFirstOrThrowArgs<ExtArgs>>): Prisma__HomeSliderClient<$Result.GetResult<Prisma.$HomeSliderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HomeSliders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeSliderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HomeSliders
     * const homeSliders = await prisma.homeSlider.findMany()
     * 
     * // Get first 10 HomeSliders
     * const homeSliders = await prisma.homeSlider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const homeSliderWithIdOnly = await prisma.homeSlider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HomeSliderFindManyArgs>(args?: SelectSubset<T, HomeSliderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomeSliderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HomeSlider.
     * @param {HomeSliderCreateArgs} args - Arguments to create a HomeSlider.
     * @example
     * // Create one HomeSlider
     * const HomeSlider = await prisma.homeSlider.create({
     *   data: {
     *     // ... data to create a HomeSlider
     *   }
     * })
     * 
     */
    create<T extends HomeSliderCreateArgs>(args: SelectSubset<T, HomeSliderCreateArgs<ExtArgs>>): Prisma__HomeSliderClient<$Result.GetResult<Prisma.$HomeSliderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HomeSliders.
     * @param {HomeSliderCreateManyArgs} args - Arguments to create many HomeSliders.
     * @example
     * // Create many HomeSliders
     * const homeSlider = await prisma.homeSlider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HomeSliderCreateManyArgs>(args?: SelectSubset<T, HomeSliderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HomeSliders and returns the data saved in the database.
     * @param {HomeSliderCreateManyAndReturnArgs} args - Arguments to create many HomeSliders.
     * @example
     * // Create many HomeSliders
     * const homeSlider = await prisma.homeSlider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HomeSliders and only return the `id`
     * const homeSliderWithIdOnly = await prisma.homeSlider.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HomeSliderCreateManyAndReturnArgs>(args?: SelectSubset<T, HomeSliderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomeSliderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HomeSlider.
     * @param {HomeSliderDeleteArgs} args - Arguments to delete one HomeSlider.
     * @example
     * // Delete one HomeSlider
     * const HomeSlider = await prisma.homeSlider.delete({
     *   where: {
     *     // ... filter to delete one HomeSlider
     *   }
     * })
     * 
     */
    delete<T extends HomeSliderDeleteArgs>(args: SelectSubset<T, HomeSliderDeleteArgs<ExtArgs>>): Prisma__HomeSliderClient<$Result.GetResult<Prisma.$HomeSliderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HomeSlider.
     * @param {HomeSliderUpdateArgs} args - Arguments to update one HomeSlider.
     * @example
     * // Update one HomeSlider
     * const homeSlider = await prisma.homeSlider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HomeSliderUpdateArgs>(args: SelectSubset<T, HomeSliderUpdateArgs<ExtArgs>>): Prisma__HomeSliderClient<$Result.GetResult<Prisma.$HomeSliderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HomeSliders.
     * @param {HomeSliderDeleteManyArgs} args - Arguments to filter HomeSliders to delete.
     * @example
     * // Delete a few HomeSliders
     * const { count } = await prisma.homeSlider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HomeSliderDeleteManyArgs>(args?: SelectSubset<T, HomeSliderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomeSliders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeSliderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HomeSliders
     * const homeSlider = await prisma.homeSlider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HomeSliderUpdateManyArgs>(args: SelectSubset<T, HomeSliderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomeSliders and returns the data updated in the database.
     * @param {HomeSliderUpdateManyAndReturnArgs} args - Arguments to update many HomeSliders.
     * @example
     * // Update many HomeSliders
     * const homeSlider = await prisma.homeSlider.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HomeSliders and only return the `id`
     * const homeSliderWithIdOnly = await prisma.homeSlider.updateManyAndReturn({
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
    updateManyAndReturn<T extends HomeSliderUpdateManyAndReturnArgs>(args: SelectSubset<T, HomeSliderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomeSliderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HomeSlider.
     * @param {HomeSliderUpsertArgs} args - Arguments to update or create a HomeSlider.
     * @example
     * // Update or create a HomeSlider
     * const homeSlider = await prisma.homeSlider.upsert({
     *   create: {
     *     // ... data to create a HomeSlider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HomeSlider we want to update
     *   }
     * })
     */
    upsert<T extends HomeSliderUpsertArgs>(args: SelectSubset<T, HomeSliderUpsertArgs<ExtArgs>>): Prisma__HomeSliderClient<$Result.GetResult<Prisma.$HomeSliderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HomeSliders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeSliderCountArgs} args - Arguments to filter HomeSliders to count.
     * @example
     * // Count the number of HomeSliders
     * const count = await prisma.homeSlider.count({
     *   where: {
     *     // ... the filter for the HomeSliders we want to count
     *   }
     * })
    **/
    count<T extends HomeSliderCountArgs>(
      args?: Subset<T, HomeSliderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HomeSliderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HomeSlider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeSliderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HomeSliderAggregateArgs>(args: Subset<T, HomeSliderAggregateArgs>): Prisma.PrismaPromise<GetHomeSliderAggregateType<T>>

    /**
     * Group by HomeSlider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeSliderGroupByArgs} args - Group by arguments.
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
      T extends HomeSliderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HomeSliderGroupByArgs['orderBy'] }
        : { orderBy?: HomeSliderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HomeSliderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomeSliderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HomeSlider model
   */
  readonly fields: HomeSliderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HomeSlider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HomeSliderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends HomeSlider$itemsArgs<ExtArgs> = {}>(args?: Subset<T, HomeSlider$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomeSliderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the HomeSlider model
   */
  interface HomeSliderFieldRefs {
    readonly id: FieldRef<"HomeSlider", 'Int'>
    readonly key: FieldRef<"HomeSlider", 'String'>
    readonly name: FieldRef<"HomeSlider", 'String'>
    readonly isActive: FieldRef<"HomeSlider", 'Boolean'>
    readonly createdAt: FieldRef<"HomeSlider", 'DateTime'>
    readonly updatedAt: FieldRef<"HomeSlider", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HomeSlider findUnique
   */
  export type HomeSliderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeSlider
     */
    select?: HomeSliderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeSlider
     */
    omit?: HomeSliderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeSliderInclude<ExtArgs> | null
    /**
     * Filter, which HomeSlider to fetch.
     */
    where: HomeSliderWhereUniqueInput
  }

  /**
   * HomeSlider findUniqueOrThrow
   */
  export type HomeSliderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeSlider
     */
    select?: HomeSliderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeSlider
     */
    omit?: HomeSliderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeSliderInclude<ExtArgs> | null
    /**
     * Filter, which HomeSlider to fetch.
     */
    where: HomeSliderWhereUniqueInput
  }

  /**
   * HomeSlider findFirst
   */
  export type HomeSliderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeSlider
     */
    select?: HomeSliderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeSlider
     */
    omit?: HomeSliderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeSliderInclude<ExtArgs> | null
    /**
     * Filter, which HomeSlider to fetch.
     */
    where?: HomeSliderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeSliders to fetch.
     */
    orderBy?: HomeSliderOrderByWithRelationInput | HomeSliderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomeSliders.
     */
    cursor?: HomeSliderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeSliders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeSliders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomeSliders.
     */
    distinct?: HomeSliderScalarFieldEnum | HomeSliderScalarFieldEnum[]
  }

  /**
   * HomeSlider findFirstOrThrow
   */
  export type HomeSliderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeSlider
     */
    select?: HomeSliderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeSlider
     */
    omit?: HomeSliderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeSliderInclude<ExtArgs> | null
    /**
     * Filter, which HomeSlider to fetch.
     */
    where?: HomeSliderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeSliders to fetch.
     */
    orderBy?: HomeSliderOrderByWithRelationInput | HomeSliderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomeSliders.
     */
    cursor?: HomeSliderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeSliders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeSliders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomeSliders.
     */
    distinct?: HomeSliderScalarFieldEnum | HomeSliderScalarFieldEnum[]
  }

  /**
   * HomeSlider findMany
   */
  export type HomeSliderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeSlider
     */
    select?: HomeSliderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeSlider
     */
    omit?: HomeSliderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeSliderInclude<ExtArgs> | null
    /**
     * Filter, which HomeSliders to fetch.
     */
    where?: HomeSliderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeSliders to fetch.
     */
    orderBy?: HomeSliderOrderByWithRelationInput | HomeSliderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HomeSliders.
     */
    cursor?: HomeSliderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeSliders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeSliders.
     */
    skip?: number
    distinct?: HomeSliderScalarFieldEnum | HomeSliderScalarFieldEnum[]
  }

  /**
   * HomeSlider create
   */
  export type HomeSliderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeSlider
     */
    select?: HomeSliderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeSlider
     */
    omit?: HomeSliderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeSliderInclude<ExtArgs> | null
    /**
     * The data needed to create a HomeSlider.
     */
    data: XOR<HomeSliderCreateInput, HomeSliderUncheckedCreateInput>
  }

  /**
   * HomeSlider createMany
   */
  export type HomeSliderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HomeSliders.
     */
    data: HomeSliderCreateManyInput | HomeSliderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HomeSlider createManyAndReturn
   */
  export type HomeSliderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeSlider
     */
    select?: HomeSliderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HomeSlider
     */
    omit?: HomeSliderOmit<ExtArgs> | null
    /**
     * The data used to create many HomeSliders.
     */
    data: HomeSliderCreateManyInput | HomeSliderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HomeSlider update
   */
  export type HomeSliderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeSlider
     */
    select?: HomeSliderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeSlider
     */
    omit?: HomeSliderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeSliderInclude<ExtArgs> | null
    /**
     * The data needed to update a HomeSlider.
     */
    data: XOR<HomeSliderUpdateInput, HomeSliderUncheckedUpdateInput>
    /**
     * Choose, which HomeSlider to update.
     */
    where: HomeSliderWhereUniqueInput
  }

  /**
   * HomeSlider updateMany
   */
  export type HomeSliderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HomeSliders.
     */
    data: XOR<HomeSliderUpdateManyMutationInput, HomeSliderUncheckedUpdateManyInput>
    /**
     * Filter which HomeSliders to update
     */
    where?: HomeSliderWhereInput
    /**
     * Limit how many HomeSliders to update.
     */
    limit?: number
  }

  /**
   * HomeSlider updateManyAndReturn
   */
  export type HomeSliderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeSlider
     */
    select?: HomeSliderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HomeSlider
     */
    omit?: HomeSliderOmit<ExtArgs> | null
    /**
     * The data used to update HomeSliders.
     */
    data: XOR<HomeSliderUpdateManyMutationInput, HomeSliderUncheckedUpdateManyInput>
    /**
     * Filter which HomeSliders to update
     */
    where?: HomeSliderWhereInput
    /**
     * Limit how many HomeSliders to update.
     */
    limit?: number
  }

  /**
   * HomeSlider upsert
   */
  export type HomeSliderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeSlider
     */
    select?: HomeSliderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeSlider
     */
    omit?: HomeSliderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeSliderInclude<ExtArgs> | null
    /**
     * The filter to search for the HomeSlider to update in case it exists.
     */
    where: HomeSliderWhereUniqueInput
    /**
     * In case the HomeSlider found by the `where` argument doesn't exist, create a new HomeSlider with this data.
     */
    create: XOR<HomeSliderCreateInput, HomeSliderUncheckedCreateInput>
    /**
     * In case the HomeSlider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HomeSliderUpdateInput, HomeSliderUncheckedUpdateInput>
  }

  /**
   * HomeSlider delete
   */
  export type HomeSliderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeSlider
     */
    select?: HomeSliderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeSlider
     */
    omit?: HomeSliderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeSliderInclude<ExtArgs> | null
    /**
     * Filter which HomeSlider to delete.
     */
    where: HomeSliderWhereUniqueInput
  }

  /**
   * HomeSlider deleteMany
   */
  export type HomeSliderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HomeSliders to delete
     */
    where?: HomeSliderWhereInput
    /**
     * Limit how many HomeSliders to delete.
     */
    limit?: number
  }

  /**
   * HomeSlider.items
   */
  export type HomeSlider$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeSliderItem
     */
    select?: HomeSliderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeSliderItem
     */
    omit?: HomeSliderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeSliderItemInclude<ExtArgs> | null
    where?: HomeSliderItemWhereInput
    orderBy?: HomeSliderItemOrderByWithRelationInput | HomeSliderItemOrderByWithRelationInput[]
    cursor?: HomeSliderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HomeSliderItemScalarFieldEnum | HomeSliderItemScalarFieldEnum[]
  }

  /**
   * HomeSlider without action
   */
  export type HomeSliderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeSlider
     */
    select?: HomeSliderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeSlider
     */
    omit?: HomeSliderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeSliderInclude<ExtArgs> | null
  }


  /**
   * Model HomeSliderItem
   */

  export type AggregateHomeSliderItem = {
    _count: HomeSliderItemCountAggregateOutputType | null
    _avg: HomeSliderItemAvgAggregateOutputType | null
    _sum: HomeSliderItemSumAggregateOutputType | null
    _min: HomeSliderItemMinAggregateOutputType | null
    _max: HomeSliderItemMaxAggregateOutputType | null
  }

  export type HomeSliderItemAvgAggregateOutputType = {
    id: number | null
    homeSliderId: number | null
    order: number | null
  }

  export type HomeSliderItemSumAggregateOutputType = {
    id: number | null
    homeSliderId: number | null
    order: number | null
  }

  export type HomeSliderItemMinAggregateOutputType = {
    id: number | null
    homeSliderId: number | null
    title_tr: string | null
    title_en: string | null
    title_de: string | null
    title_ru: string | null
    description_tr: string | null
    description_en: string | null
    description_de: string | null
    description_ru: string | null
    imageUrl: string | null
    linkUrl: string | null
    order: number | null
    isActive: boolean | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HomeSliderItemMaxAggregateOutputType = {
    id: number | null
    homeSliderId: number | null
    title_tr: string | null
    title_en: string | null
    title_de: string | null
    title_ru: string | null
    description_tr: string | null
    description_en: string | null
    description_de: string | null
    description_ru: string | null
    imageUrl: string | null
    linkUrl: string | null
    order: number | null
    isActive: boolean | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HomeSliderItemCountAggregateOutputType = {
    id: number
    homeSliderId: number
    title_tr: number
    title_en: number
    title_de: number
    title_ru: number
    description_tr: number
    description_en: number
    description_de: number
    description_ru: number
    imageUrl: number
    linkUrl: number
    order: number
    isActive: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HomeSliderItemAvgAggregateInputType = {
    id?: true
    homeSliderId?: true
    order?: true
  }

  export type HomeSliderItemSumAggregateInputType = {
    id?: true
    homeSliderId?: true
    order?: true
  }

  export type HomeSliderItemMinAggregateInputType = {
    id?: true
    homeSliderId?: true
    title_tr?: true
    title_en?: true
    title_de?: true
    title_ru?: true
    description_tr?: true
    description_en?: true
    description_de?: true
    description_ru?: true
    imageUrl?: true
    linkUrl?: true
    order?: true
    isActive?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HomeSliderItemMaxAggregateInputType = {
    id?: true
    homeSliderId?: true
    title_tr?: true
    title_en?: true
    title_de?: true
    title_ru?: true
    description_tr?: true
    description_en?: true
    description_de?: true
    description_ru?: true
    imageUrl?: true
    linkUrl?: true
    order?: true
    isActive?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HomeSliderItemCountAggregateInputType = {
    id?: true
    homeSliderId?: true
    title_tr?: true
    title_en?: true
    title_de?: true
    title_ru?: true
    description_tr?: true
    description_en?: true
    description_de?: true
    description_ru?: true
    imageUrl?: true
    linkUrl?: true
    order?: true
    isActive?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HomeSliderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HomeSliderItem to aggregate.
     */
    where?: HomeSliderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeSliderItems to fetch.
     */
    orderBy?: HomeSliderItemOrderByWithRelationInput | HomeSliderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HomeSliderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeSliderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeSliderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HomeSliderItems
    **/
    _count?: true | HomeSliderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HomeSliderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HomeSliderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HomeSliderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HomeSliderItemMaxAggregateInputType
  }

  export type GetHomeSliderItemAggregateType<T extends HomeSliderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateHomeSliderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHomeSliderItem[P]>
      : GetScalarType<T[P], AggregateHomeSliderItem[P]>
  }




  export type HomeSliderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HomeSliderItemWhereInput
    orderBy?: HomeSliderItemOrderByWithAggregationInput | HomeSliderItemOrderByWithAggregationInput[]
    by: HomeSliderItemScalarFieldEnum[] | HomeSliderItemScalarFieldEnum
    having?: HomeSliderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HomeSliderItemCountAggregateInputType | true
    _avg?: HomeSliderItemAvgAggregateInputType
    _sum?: HomeSliderItemSumAggregateInputType
    _min?: HomeSliderItemMinAggregateInputType
    _max?: HomeSliderItemMaxAggregateInputType
  }

  export type HomeSliderItemGroupByOutputType = {
    id: number
    homeSliderId: number
    title_tr: string | null
    title_en: string | null
    title_de: string | null
    title_ru: string | null
    description_tr: string | null
    description_en: string | null
    description_de: string | null
    description_ru: string | null
    imageUrl: string | null
    linkUrl: string | null
    order: number
    isActive: boolean
    startDate: Date | null
    endDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: HomeSliderItemCountAggregateOutputType | null
    _avg: HomeSliderItemAvgAggregateOutputType | null
    _sum: HomeSliderItemSumAggregateOutputType | null
    _min: HomeSliderItemMinAggregateOutputType | null
    _max: HomeSliderItemMaxAggregateOutputType | null
  }

  type GetHomeSliderItemGroupByPayload<T extends HomeSliderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HomeSliderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HomeSliderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HomeSliderItemGroupByOutputType[P]>
            : GetScalarType<T[P], HomeSliderItemGroupByOutputType[P]>
        }
      >
    >


  export type HomeSliderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    homeSliderId?: boolean
    title_tr?: boolean
    title_en?: boolean
    title_de?: boolean
    title_ru?: boolean
    description_tr?: boolean
    description_en?: boolean
    description_de?: boolean
    description_ru?: boolean
    imageUrl?: boolean
    linkUrl?: boolean
    order?: boolean
    isActive?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    homeSlider?: boolean | HomeSliderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["homeSliderItem"]>

  export type HomeSliderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    homeSliderId?: boolean
    title_tr?: boolean
    title_en?: boolean
    title_de?: boolean
    title_ru?: boolean
    description_tr?: boolean
    description_en?: boolean
    description_de?: boolean
    description_ru?: boolean
    imageUrl?: boolean
    linkUrl?: boolean
    order?: boolean
    isActive?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    homeSlider?: boolean | HomeSliderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["homeSliderItem"]>

  export type HomeSliderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    homeSliderId?: boolean
    title_tr?: boolean
    title_en?: boolean
    title_de?: boolean
    title_ru?: boolean
    description_tr?: boolean
    description_en?: boolean
    description_de?: boolean
    description_ru?: boolean
    imageUrl?: boolean
    linkUrl?: boolean
    order?: boolean
    isActive?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    homeSlider?: boolean | HomeSliderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["homeSliderItem"]>

  export type HomeSliderItemSelectScalar = {
    id?: boolean
    homeSliderId?: boolean
    title_tr?: boolean
    title_en?: boolean
    title_de?: boolean
    title_ru?: boolean
    description_tr?: boolean
    description_en?: boolean
    description_de?: boolean
    description_ru?: boolean
    imageUrl?: boolean
    linkUrl?: boolean
    order?: boolean
    isActive?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HomeSliderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "homeSliderId" | "title_tr" | "title_en" | "title_de" | "title_ru" | "description_tr" | "description_en" | "description_de" | "description_ru" | "imageUrl" | "linkUrl" | "order" | "isActive" | "startDate" | "endDate" | "createdAt" | "updatedAt", ExtArgs["result"]["homeSliderItem"]>
  export type HomeSliderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homeSlider?: boolean | HomeSliderDefaultArgs<ExtArgs>
  }
  export type HomeSliderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homeSlider?: boolean | HomeSliderDefaultArgs<ExtArgs>
  }
  export type HomeSliderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homeSlider?: boolean | HomeSliderDefaultArgs<ExtArgs>
  }

  export type $HomeSliderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HomeSliderItem"
    objects: {
      homeSlider: Prisma.$HomeSliderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      homeSliderId: number
      title_tr: string | null
      title_en: string | null
      title_de: string | null
      title_ru: string | null
      description_tr: string | null
      description_en: string | null
      description_de: string | null
      description_ru: string | null
      imageUrl: string | null
      linkUrl: string | null
      order: number
      isActive: boolean
      startDate: Date | null
      endDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["homeSliderItem"]>
    composites: {}
  }

  type HomeSliderItemGetPayload<S extends boolean | null | undefined | HomeSliderItemDefaultArgs> = $Result.GetResult<Prisma.$HomeSliderItemPayload, S>

  type HomeSliderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HomeSliderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HomeSliderItemCountAggregateInputType | true
    }

  export interface HomeSliderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HomeSliderItem'], meta: { name: 'HomeSliderItem' } }
    /**
     * Find zero or one HomeSliderItem that matches the filter.
     * @param {HomeSliderItemFindUniqueArgs} args - Arguments to find a HomeSliderItem
     * @example
     * // Get one HomeSliderItem
     * const homeSliderItem = await prisma.homeSliderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HomeSliderItemFindUniqueArgs>(args: SelectSubset<T, HomeSliderItemFindUniqueArgs<ExtArgs>>): Prisma__HomeSliderItemClient<$Result.GetResult<Prisma.$HomeSliderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HomeSliderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HomeSliderItemFindUniqueOrThrowArgs} args - Arguments to find a HomeSliderItem
     * @example
     * // Get one HomeSliderItem
     * const homeSliderItem = await prisma.homeSliderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HomeSliderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, HomeSliderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HomeSliderItemClient<$Result.GetResult<Prisma.$HomeSliderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HomeSliderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeSliderItemFindFirstArgs} args - Arguments to find a HomeSliderItem
     * @example
     * // Get one HomeSliderItem
     * const homeSliderItem = await prisma.homeSliderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HomeSliderItemFindFirstArgs>(args?: SelectSubset<T, HomeSliderItemFindFirstArgs<ExtArgs>>): Prisma__HomeSliderItemClient<$Result.GetResult<Prisma.$HomeSliderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HomeSliderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeSliderItemFindFirstOrThrowArgs} args - Arguments to find a HomeSliderItem
     * @example
     * // Get one HomeSliderItem
     * const homeSliderItem = await prisma.homeSliderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HomeSliderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, HomeSliderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__HomeSliderItemClient<$Result.GetResult<Prisma.$HomeSliderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HomeSliderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeSliderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HomeSliderItems
     * const homeSliderItems = await prisma.homeSliderItem.findMany()
     * 
     * // Get first 10 HomeSliderItems
     * const homeSliderItems = await prisma.homeSliderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const homeSliderItemWithIdOnly = await prisma.homeSliderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HomeSliderItemFindManyArgs>(args?: SelectSubset<T, HomeSliderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomeSliderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HomeSliderItem.
     * @param {HomeSliderItemCreateArgs} args - Arguments to create a HomeSliderItem.
     * @example
     * // Create one HomeSliderItem
     * const HomeSliderItem = await prisma.homeSliderItem.create({
     *   data: {
     *     // ... data to create a HomeSliderItem
     *   }
     * })
     * 
     */
    create<T extends HomeSliderItemCreateArgs>(args: SelectSubset<T, HomeSliderItemCreateArgs<ExtArgs>>): Prisma__HomeSliderItemClient<$Result.GetResult<Prisma.$HomeSliderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HomeSliderItems.
     * @param {HomeSliderItemCreateManyArgs} args - Arguments to create many HomeSliderItems.
     * @example
     * // Create many HomeSliderItems
     * const homeSliderItem = await prisma.homeSliderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HomeSliderItemCreateManyArgs>(args?: SelectSubset<T, HomeSliderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HomeSliderItems and returns the data saved in the database.
     * @param {HomeSliderItemCreateManyAndReturnArgs} args - Arguments to create many HomeSliderItems.
     * @example
     * // Create many HomeSliderItems
     * const homeSliderItem = await prisma.homeSliderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HomeSliderItems and only return the `id`
     * const homeSliderItemWithIdOnly = await prisma.homeSliderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HomeSliderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, HomeSliderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomeSliderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HomeSliderItem.
     * @param {HomeSliderItemDeleteArgs} args - Arguments to delete one HomeSliderItem.
     * @example
     * // Delete one HomeSliderItem
     * const HomeSliderItem = await prisma.homeSliderItem.delete({
     *   where: {
     *     // ... filter to delete one HomeSliderItem
     *   }
     * })
     * 
     */
    delete<T extends HomeSliderItemDeleteArgs>(args: SelectSubset<T, HomeSliderItemDeleteArgs<ExtArgs>>): Prisma__HomeSliderItemClient<$Result.GetResult<Prisma.$HomeSliderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HomeSliderItem.
     * @param {HomeSliderItemUpdateArgs} args - Arguments to update one HomeSliderItem.
     * @example
     * // Update one HomeSliderItem
     * const homeSliderItem = await prisma.homeSliderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HomeSliderItemUpdateArgs>(args: SelectSubset<T, HomeSliderItemUpdateArgs<ExtArgs>>): Prisma__HomeSliderItemClient<$Result.GetResult<Prisma.$HomeSliderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HomeSliderItems.
     * @param {HomeSliderItemDeleteManyArgs} args - Arguments to filter HomeSliderItems to delete.
     * @example
     * // Delete a few HomeSliderItems
     * const { count } = await prisma.homeSliderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HomeSliderItemDeleteManyArgs>(args?: SelectSubset<T, HomeSliderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomeSliderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeSliderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HomeSliderItems
     * const homeSliderItem = await prisma.homeSliderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HomeSliderItemUpdateManyArgs>(args: SelectSubset<T, HomeSliderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomeSliderItems and returns the data updated in the database.
     * @param {HomeSliderItemUpdateManyAndReturnArgs} args - Arguments to update many HomeSliderItems.
     * @example
     * // Update many HomeSliderItems
     * const homeSliderItem = await prisma.homeSliderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HomeSliderItems and only return the `id`
     * const homeSliderItemWithIdOnly = await prisma.homeSliderItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends HomeSliderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, HomeSliderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomeSliderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HomeSliderItem.
     * @param {HomeSliderItemUpsertArgs} args - Arguments to update or create a HomeSliderItem.
     * @example
     * // Update or create a HomeSliderItem
     * const homeSliderItem = await prisma.homeSliderItem.upsert({
     *   create: {
     *     // ... data to create a HomeSliderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HomeSliderItem we want to update
     *   }
     * })
     */
    upsert<T extends HomeSliderItemUpsertArgs>(args: SelectSubset<T, HomeSliderItemUpsertArgs<ExtArgs>>): Prisma__HomeSliderItemClient<$Result.GetResult<Prisma.$HomeSliderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HomeSliderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeSliderItemCountArgs} args - Arguments to filter HomeSliderItems to count.
     * @example
     * // Count the number of HomeSliderItems
     * const count = await prisma.homeSliderItem.count({
     *   where: {
     *     // ... the filter for the HomeSliderItems we want to count
     *   }
     * })
    **/
    count<T extends HomeSliderItemCountArgs>(
      args?: Subset<T, HomeSliderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HomeSliderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HomeSliderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeSliderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HomeSliderItemAggregateArgs>(args: Subset<T, HomeSliderItemAggregateArgs>): Prisma.PrismaPromise<GetHomeSliderItemAggregateType<T>>

    /**
     * Group by HomeSliderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeSliderItemGroupByArgs} args - Group by arguments.
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
      T extends HomeSliderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HomeSliderItemGroupByArgs['orderBy'] }
        : { orderBy?: HomeSliderItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HomeSliderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomeSliderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HomeSliderItem model
   */
  readonly fields: HomeSliderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HomeSliderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HomeSliderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    homeSlider<T extends HomeSliderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HomeSliderDefaultArgs<ExtArgs>>): Prisma__HomeSliderClient<$Result.GetResult<Prisma.$HomeSliderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HomeSliderItem model
   */
  interface HomeSliderItemFieldRefs {
    readonly id: FieldRef<"HomeSliderItem", 'Int'>
    readonly homeSliderId: FieldRef<"HomeSliderItem", 'Int'>
    readonly title_tr: FieldRef<"HomeSliderItem", 'String'>
    readonly title_en: FieldRef<"HomeSliderItem", 'String'>
    readonly title_de: FieldRef<"HomeSliderItem", 'String'>
    readonly title_ru: FieldRef<"HomeSliderItem", 'String'>
    readonly description_tr: FieldRef<"HomeSliderItem", 'String'>
    readonly description_en: FieldRef<"HomeSliderItem", 'String'>
    readonly description_de: FieldRef<"HomeSliderItem", 'String'>
    readonly description_ru: FieldRef<"HomeSliderItem", 'String'>
    readonly imageUrl: FieldRef<"HomeSliderItem", 'String'>
    readonly linkUrl: FieldRef<"HomeSliderItem", 'String'>
    readonly order: FieldRef<"HomeSliderItem", 'Int'>
    readonly isActive: FieldRef<"HomeSliderItem", 'Boolean'>
    readonly startDate: FieldRef<"HomeSliderItem", 'DateTime'>
    readonly endDate: FieldRef<"HomeSliderItem", 'DateTime'>
    readonly createdAt: FieldRef<"HomeSliderItem", 'DateTime'>
    readonly updatedAt: FieldRef<"HomeSliderItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HomeSliderItem findUnique
   */
  export type HomeSliderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeSliderItem
     */
    select?: HomeSliderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeSliderItem
     */
    omit?: HomeSliderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeSliderItemInclude<ExtArgs> | null
    /**
     * Filter, which HomeSliderItem to fetch.
     */
    where: HomeSliderItemWhereUniqueInput
  }

  /**
   * HomeSliderItem findUniqueOrThrow
   */
  export type HomeSliderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeSliderItem
     */
    select?: HomeSliderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeSliderItem
     */
    omit?: HomeSliderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeSliderItemInclude<ExtArgs> | null
    /**
     * Filter, which HomeSliderItem to fetch.
     */
    where: HomeSliderItemWhereUniqueInput
  }

  /**
   * HomeSliderItem findFirst
   */
  export type HomeSliderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeSliderItem
     */
    select?: HomeSliderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeSliderItem
     */
    omit?: HomeSliderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeSliderItemInclude<ExtArgs> | null
    /**
     * Filter, which HomeSliderItem to fetch.
     */
    where?: HomeSliderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeSliderItems to fetch.
     */
    orderBy?: HomeSliderItemOrderByWithRelationInput | HomeSliderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomeSliderItems.
     */
    cursor?: HomeSliderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeSliderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeSliderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomeSliderItems.
     */
    distinct?: HomeSliderItemScalarFieldEnum | HomeSliderItemScalarFieldEnum[]
  }

  /**
   * HomeSliderItem findFirstOrThrow
   */
  export type HomeSliderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeSliderItem
     */
    select?: HomeSliderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeSliderItem
     */
    omit?: HomeSliderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeSliderItemInclude<ExtArgs> | null
    /**
     * Filter, which HomeSliderItem to fetch.
     */
    where?: HomeSliderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeSliderItems to fetch.
     */
    orderBy?: HomeSliderItemOrderByWithRelationInput | HomeSliderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomeSliderItems.
     */
    cursor?: HomeSliderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeSliderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeSliderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomeSliderItems.
     */
    distinct?: HomeSliderItemScalarFieldEnum | HomeSliderItemScalarFieldEnum[]
  }

  /**
   * HomeSliderItem findMany
   */
  export type HomeSliderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeSliderItem
     */
    select?: HomeSliderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeSliderItem
     */
    omit?: HomeSliderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeSliderItemInclude<ExtArgs> | null
    /**
     * Filter, which HomeSliderItems to fetch.
     */
    where?: HomeSliderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeSliderItems to fetch.
     */
    orderBy?: HomeSliderItemOrderByWithRelationInput | HomeSliderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HomeSliderItems.
     */
    cursor?: HomeSliderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeSliderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeSliderItems.
     */
    skip?: number
    distinct?: HomeSliderItemScalarFieldEnum | HomeSliderItemScalarFieldEnum[]
  }

  /**
   * HomeSliderItem create
   */
  export type HomeSliderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeSliderItem
     */
    select?: HomeSliderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeSliderItem
     */
    omit?: HomeSliderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeSliderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a HomeSliderItem.
     */
    data: XOR<HomeSliderItemCreateInput, HomeSliderItemUncheckedCreateInput>
  }

  /**
   * HomeSliderItem createMany
   */
  export type HomeSliderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HomeSliderItems.
     */
    data: HomeSliderItemCreateManyInput | HomeSliderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HomeSliderItem createManyAndReturn
   */
  export type HomeSliderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeSliderItem
     */
    select?: HomeSliderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HomeSliderItem
     */
    omit?: HomeSliderItemOmit<ExtArgs> | null
    /**
     * The data used to create many HomeSliderItems.
     */
    data: HomeSliderItemCreateManyInput | HomeSliderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeSliderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HomeSliderItem update
   */
  export type HomeSliderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeSliderItem
     */
    select?: HomeSliderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeSliderItem
     */
    omit?: HomeSliderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeSliderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a HomeSliderItem.
     */
    data: XOR<HomeSliderItemUpdateInput, HomeSliderItemUncheckedUpdateInput>
    /**
     * Choose, which HomeSliderItem to update.
     */
    where: HomeSliderItemWhereUniqueInput
  }

  /**
   * HomeSliderItem updateMany
   */
  export type HomeSliderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HomeSliderItems.
     */
    data: XOR<HomeSliderItemUpdateManyMutationInput, HomeSliderItemUncheckedUpdateManyInput>
    /**
     * Filter which HomeSliderItems to update
     */
    where?: HomeSliderItemWhereInput
    /**
     * Limit how many HomeSliderItems to update.
     */
    limit?: number
  }

  /**
   * HomeSliderItem updateManyAndReturn
   */
  export type HomeSliderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeSliderItem
     */
    select?: HomeSliderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HomeSliderItem
     */
    omit?: HomeSliderItemOmit<ExtArgs> | null
    /**
     * The data used to update HomeSliderItems.
     */
    data: XOR<HomeSliderItemUpdateManyMutationInput, HomeSliderItemUncheckedUpdateManyInput>
    /**
     * Filter which HomeSliderItems to update
     */
    where?: HomeSliderItemWhereInput
    /**
     * Limit how many HomeSliderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeSliderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HomeSliderItem upsert
   */
  export type HomeSliderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeSliderItem
     */
    select?: HomeSliderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeSliderItem
     */
    omit?: HomeSliderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeSliderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the HomeSliderItem to update in case it exists.
     */
    where: HomeSliderItemWhereUniqueInput
    /**
     * In case the HomeSliderItem found by the `where` argument doesn't exist, create a new HomeSliderItem with this data.
     */
    create: XOR<HomeSliderItemCreateInput, HomeSliderItemUncheckedCreateInput>
    /**
     * In case the HomeSliderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HomeSliderItemUpdateInput, HomeSliderItemUncheckedUpdateInput>
  }

  /**
   * HomeSliderItem delete
   */
  export type HomeSliderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeSliderItem
     */
    select?: HomeSliderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeSliderItem
     */
    omit?: HomeSliderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeSliderItemInclude<ExtArgs> | null
    /**
     * Filter which HomeSliderItem to delete.
     */
    where: HomeSliderItemWhereUniqueInput
  }

  /**
   * HomeSliderItem deleteMany
   */
  export type HomeSliderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HomeSliderItems to delete
     */
    where?: HomeSliderItemWhereInput
    /**
     * Limit how many HomeSliderItems to delete.
     */
    limit?: number
  }

  /**
   * HomeSliderItem without action
   */
  export type HomeSliderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeSliderItem
     */
    select?: HomeSliderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeSliderItem
     */
    omit?: HomeSliderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeSliderItemInclude<ExtArgs> | null
  }


  /**
   * Model CoverImage
   */

  export type AggregateCoverImage = {
    _count: CoverImageCountAggregateOutputType | null
    _avg: CoverImageAvgAggregateOutputType | null
    _sum: CoverImageSumAggregateOutputType | null
    _min: CoverImageMinAggregateOutputType | null
    _max: CoverImageMaxAggregateOutputType | null
  }

  export type CoverImageAvgAggregateOutputType = {
    order: number | null
  }

  export type CoverImageSumAggregateOutputType = {
    order: number | null
  }

  export type CoverImageMinAggregateOutputType = {
    id: string | null
    type: $Enums.CoverType | null
    imageUrl: string | null
    isActive: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CoverImageMaxAggregateOutputType = {
    id: string | null
    type: $Enums.CoverType | null
    imageUrl: string | null
    isActive: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CoverImageCountAggregateOutputType = {
    id: number
    type: number
    imageUrl: number
    isActive: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CoverImageAvgAggregateInputType = {
    order?: true
  }

  export type CoverImageSumAggregateInputType = {
    order?: true
  }

  export type CoverImageMinAggregateInputType = {
    id?: true
    type?: true
    imageUrl?: true
    isActive?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CoverImageMaxAggregateInputType = {
    id?: true
    type?: true
    imageUrl?: true
    isActive?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CoverImageCountAggregateInputType = {
    id?: true
    type?: true
    imageUrl?: true
    isActive?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CoverImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoverImage to aggregate.
     */
    where?: CoverImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoverImages to fetch.
     */
    orderBy?: CoverImageOrderByWithRelationInput | CoverImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoverImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoverImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoverImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoverImages
    **/
    _count?: true | CoverImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoverImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoverImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoverImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoverImageMaxAggregateInputType
  }

  export type GetCoverImageAggregateType<T extends CoverImageAggregateArgs> = {
        [P in keyof T & keyof AggregateCoverImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoverImage[P]>
      : GetScalarType<T[P], AggregateCoverImage[P]>
  }




  export type CoverImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoverImageWhereInput
    orderBy?: CoverImageOrderByWithAggregationInput | CoverImageOrderByWithAggregationInput[]
    by: CoverImageScalarFieldEnum[] | CoverImageScalarFieldEnum
    having?: CoverImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoverImageCountAggregateInputType | true
    _avg?: CoverImageAvgAggregateInputType
    _sum?: CoverImageSumAggregateInputType
    _min?: CoverImageMinAggregateInputType
    _max?: CoverImageMaxAggregateInputType
  }

  export type CoverImageGroupByOutputType = {
    id: string
    type: $Enums.CoverType
    imageUrl: string
    isActive: boolean
    order: number
    createdAt: Date
    updatedAt: Date
    _count: CoverImageCountAggregateOutputType | null
    _avg: CoverImageAvgAggregateOutputType | null
    _sum: CoverImageSumAggregateOutputType | null
    _min: CoverImageMinAggregateOutputType | null
    _max: CoverImageMaxAggregateOutputType | null
  }

  type GetCoverImageGroupByPayload<T extends CoverImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoverImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoverImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoverImageGroupByOutputType[P]>
            : GetScalarType<T[P], CoverImageGroupByOutputType[P]>
        }
      >
    >


  export type CoverImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    imageUrl?: boolean
    isActive?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["coverImage"]>

  export type CoverImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    imageUrl?: boolean
    isActive?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["coverImage"]>

  export type CoverImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    imageUrl?: boolean
    isActive?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["coverImage"]>

  export type CoverImageSelectScalar = {
    id?: boolean
    type?: boolean
    imageUrl?: boolean
    isActive?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CoverImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "imageUrl" | "isActive" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["coverImage"]>

  export type $CoverImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoverImage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.CoverType
      imageUrl: string
      isActive: boolean
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["coverImage"]>
    composites: {}
  }

  type CoverImageGetPayload<S extends boolean | null | undefined | CoverImageDefaultArgs> = $Result.GetResult<Prisma.$CoverImagePayload, S>

  type CoverImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoverImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoverImageCountAggregateInputType | true
    }

  export interface CoverImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoverImage'], meta: { name: 'CoverImage' } }
    /**
     * Find zero or one CoverImage that matches the filter.
     * @param {CoverImageFindUniqueArgs} args - Arguments to find a CoverImage
     * @example
     * // Get one CoverImage
     * const coverImage = await prisma.coverImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoverImageFindUniqueArgs>(args: SelectSubset<T, CoverImageFindUniqueArgs<ExtArgs>>): Prisma__CoverImageClient<$Result.GetResult<Prisma.$CoverImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CoverImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoverImageFindUniqueOrThrowArgs} args - Arguments to find a CoverImage
     * @example
     * // Get one CoverImage
     * const coverImage = await prisma.coverImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoverImageFindUniqueOrThrowArgs>(args: SelectSubset<T, CoverImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoverImageClient<$Result.GetResult<Prisma.$CoverImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoverImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverImageFindFirstArgs} args - Arguments to find a CoverImage
     * @example
     * // Get one CoverImage
     * const coverImage = await prisma.coverImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoverImageFindFirstArgs>(args?: SelectSubset<T, CoverImageFindFirstArgs<ExtArgs>>): Prisma__CoverImageClient<$Result.GetResult<Prisma.$CoverImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoverImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverImageFindFirstOrThrowArgs} args - Arguments to find a CoverImage
     * @example
     * // Get one CoverImage
     * const coverImage = await prisma.coverImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoverImageFindFirstOrThrowArgs>(args?: SelectSubset<T, CoverImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoverImageClient<$Result.GetResult<Prisma.$CoverImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CoverImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoverImages
     * const coverImages = await prisma.coverImage.findMany()
     * 
     * // Get first 10 CoverImages
     * const coverImages = await prisma.coverImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coverImageWithIdOnly = await prisma.coverImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoverImageFindManyArgs>(args?: SelectSubset<T, CoverImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoverImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CoverImage.
     * @param {CoverImageCreateArgs} args - Arguments to create a CoverImage.
     * @example
     * // Create one CoverImage
     * const CoverImage = await prisma.coverImage.create({
     *   data: {
     *     // ... data to create a CoverImage
     *   }
     * })
     * 
     */
    create<T extends CoverImageCreateArgs>(args: SelectSubset<T, CoverImageCreateArgs<ExtArgs>>): Prisma__CoverImageClient<$Result.GetResult<Prisma.$CoverImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CoverImages.
     * @param {CoverImageCreateManyArgs} args - Arguments to create many CoverImages.
     * @example
     * // Create many CoverImages
     * const coverImage = await prisma.coverImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoverImageCreateManyArgs>(args?: SelectSubset<T, CoverImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CoverImages and returns the data saved in the database.
     * @param {CoverImageCreateManyAndReturnArgs} args - Arguments to create many CoverImages.
     * @example
     * // Create many CoverImages
     * const coverImage = await prisma.coverImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CoverImages and only return the `id`
     * const coverImageWithIdOnly = await prisma.coverImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoverImageCreateManyAndReturnArgs>(args?: SelectSubset<T, CoverImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoverImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CoverImage.
     * @param {CoverImageDeleteArgs} args - Arguments to delete one CoverImage.
     * @example
     * // Delete one CoverImage
     * const CoverImage = await prisma.coverImage.delete({
     *   where: {
     *     // ... filter to delete one CoverImage
     *   }
     * })
     * 
     */
    delete<T extends CoverImageDeleteArgs>(args: SelectSubset<T, CoverImageDeleteArgs<ExtArgs>>): Prisma__CoverImageClient<$Result.GetResult<Prisma.$CoverImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CoverImage.
     * @param {CoverImageUpdateArgs} args - Arguments to update one CoverImage.
     * @example
     * // Update one CoverImage
     * const coverImage = await prisma.coverImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoverImageUpdateArgs>(args: SelectSubset<T, CoverImageUpdateArgs<ExtArgs>>): Prisma__CoverImageClient<$Result.GetResult<Prisma.$CoverImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CoverImages.
     * @param {CoverImageDeleteManyArgs} args - Arguments to filter CoverImages to delete.
     * @example
     * // Delete a few CoverImages
     * const { count } = await prisma.coverImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoverImageDeleteManyArgs>(args?: SelectSubset<T, CoverImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoverImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoverImages
     * const coverImage = await prisma.coverImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoverImageUpdateManyArgs>(args: SelectSubset<T, CoverImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoverImages and returns the data updated in the database.
     * @param {CoverImageUpdateManyAndReturnArgs} args - Arguments to update many CoverImages.
     * @example
     * // Update many CoverImages
     * const coverImage = await prisma.coverImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CoverImages and only return the `id`
     * const coverImageWithIdOnly = await prisma.coverImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends CoverImageUpdateManyAndReturnArgs>(args: SelectSubset<T, CoverImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoverImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CoverImage.
     * @param {CoverImageUpsertArgs} args - Arguments to update or create a CoverImage.
     * @example
     * // Update or create a CoverImage
     * const coverImage = await prisma.coverImage.upsert({
     *   create: {
     *     // ... data to create a CoverImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoverImage we want to update
     *   }
     * })
     */
    upsert<T extends CoverImageUpsertArgs>(args: SelectSubset<T, CoverImageUpsertArgs<ExtArgs>>): Prisma__CoverImageClient<$Result.GetResult<Prisma.$CoverImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CoverImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverImageCountArgs} args - Arguments to filter CoverImages to count.
     * @example
     * // Count the number of CoverImages
     * const count = await prisma.coverImage.count({
     *   where: {
     *     // ... the filter for the CoverImages we want to count
     *   }
     * })
    **/
    count<T extends CoverImageCountArgs>(
      args?: Subset<T, CoverImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoverImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoverImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoverImageAggregateArgs>(args: Subset<T, CoverImageAggregateArgs>): Prisma.PrismaPromise<GetCoverImageAggregateType<T>>

    /**
     * Group by CoverImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverImageGroupByArgs} args - Group by arguments.
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
      T extends CoverImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoverImageGroupByArgs['orderBy'] }
        : { orderBy?: CoverImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CoverImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoverImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoverImage model
   */
  readonly fields: CoverImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoverImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoverImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the CoverImage model
   */
  interface CoverImageFieldRefs {
    readonly id: FieldRef<"CoverImage", 'String'>
    readonly type: FieldRef<"CoverImage", 'CoverType'>
    readonly imageUrl: FieldRef<"CoverImage", 'String'>
    readonly isActive: FieldRef<"CoverImage", 'Boolean'>
    readonly order: FieldRef<"CoverImage", 'Int'>
    readonly createdAt: FieldRef<"CoverImage", 'DateTime'>
    readonly updatedAt: FieldRef<"CoverImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CoverImage findUnique
   */
  export type CoverImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * Filter, which CoverImage to fetch.
     */
    where: CoverImageWhereUniqueInput
  }

  /**
   * CoverImage findUniqueOrThrow
   */
  export type CoverImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * Filter, which CoverImage to fetch.
     */
    where: CoverImageWhereUniqueInput
  }

  /**
   * CoverImage findFirst
   */
  export type CoverImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * Filter, which CoverImage to fetch.
     */
    where?: CoverImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoverImages to fetch.
     */
    orderBy?: CoverImageOrderByWithRelationInput | CoverImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoverImages.
     */
    cursor?: CoverImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoverImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoverImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoverImages.
     */
    distinct?: CoverImageScalarFieldEnum | CoverImageScalarFieldEnum[]
  }

  /**
   * CoverImage findFirstOrThrow
   */
  export type CoverImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * Filter, which CoverImage to fetch.
     */
    where?: CoverImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoverImages to fetch.
     */
    orderBy?: CoverImageOrderByWithRelationInput | CoverImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoverImages.
     */
    cursor?: CoverImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoverImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoverImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoverImages.
     */
    distinct?: CoverImageScalarFieldEnum | CoverImageScalarFieldEnum[]
  }

  /**
   * CoverImage findMany
   */
  export type CoverImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * Filter, which CoverImages to fetch.
     */
    where?: CoverImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoverImages to fetch.
     */
    orderBy?: CoverImageOrderByWithRelationInput | CoverImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoverImages.
     */
    cursor?: CoverImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoverImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoverImages.
     */
    skip?: number
    distinct?: CoverImageScalarFieldEnum | CoverImageScalarFieldEnum[]
  }

  /**
   * CoverImage create
   */
  export type CoverImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * The data needed to create a CoverImage.
     */
    data: XOR<CoverImageCreateInput, CoverImageUncheckedCreateInput>
  }

  /**
   * CoverImage createMany
   */
  export type CoverImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoverImages.
     */
    data: CoverImageCreateManyInput | CoverImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoverImage createManyAndReturn
   */
  export type CoverImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * The data used to create many CoverImages.
     */
    data: CoverImageCreateManyInput | CoverImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoverImage update
   */
  export type CoverImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * The data needed to update a CoverImage.
     */
    data: XOR<CoverImageUpdateInput, CoverImageUncheckedUpdateInput>
    /**
     * Choose, which CoverImage to update.
     */
    where: CoverImageWhereUniqueInput
  }

  /**
   * CoverImage updateMany
   */
  export type CoverImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoverImages.
     */
    data: XOR<CoverImageUpdateManyMutationInput, CoverImageUncheckedUpdateManyInput>
    /**
     * Filter which CoverImages to update
     */
    where?: CoverImageWhereInput
    /**
     * Limit how many CoverImages to update.
     */
    limit?: number
  }

  /**
   * CoverImage updateManyAndReturn
   */
  export type CoverImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * The data used to update CoverImages.
     */
    data: XOR<CoverImageUpdateManyMutationInput, CoverImageUncheckedUpdateManyInput>
    /**
     * Filter which CoverImages to update
     */
    where?: CoverImageWhereInput
    /**
     * Limit how many CoverImages to update.
     */
    limit?: number
  }

  /**
   * CoverImage upsert
   */
  export type CoverImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * The filter to search for the CoverImage to update in case it exists.
     */
    where: CoverImageWhereUniqueInput
    /**
     * In case the CoverImage found by the `where` argument doesn't exist, create a new CoverImage with this data.
     */
    create: XOR<CoverImageCreateInput, CoverImageUncheckedCreateInput>
    /**
     * In case the CoverImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoverImageUpdateInput, CoverImageUncheckedUpdateInput>
  }

  /**
   * CoverImage delete
   */
  export type CoverImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * Filter which CoverImage to delete.
     */
    where: CoverImageWhereUniqueInput
  }

  /**
   * CoverImage deleteMany
   */
  export type CoverImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoverImages to delete
     */
    where?: CoverImageWhereInput
    /**
     * Limit how many CoverImages to delete.
     */
    limit?: number
  }

  /**
   * CoverImage without action
   */
  export type CoverImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
  }


  /**
   * Model SuccessHero
   */

  export type AggregateSuccessHero = {
    _count: SuccessHeroCountAggregateOutputType | null
    _min: SuccessHeroMinAggregateOutputType | null
    _max: SuccessHeroMaxAggregateOutputType | null
  }

  export type SuccessHeroMinAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    isActive: boolean | null
    title_tr: string | null
    title_en: string | null
    title_de: string | null
    title_ru: string | null
    text_tr: string | null
    text_en: string | null
    text_de: string | null
    text_ru: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SuccessHeroMaxAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    isActive: boolean | null
    title_tr: string | null
    title_en: string | null
    title_de: string | null
    title_ru: string | null
    text_tr: string | null
    text_en: string | null
    text_de: string | null
    text_ru: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SuccessHeroCountAggregateOutputType = {
    id: number
    imageUrl: number
    isActive: number
    title_tr: number
    title_en: number
    title_de: number
    title_ru: number
    text_tr: number
    text_en: number
    text_de: number
    text_ru: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SuccessHeroMinAggregateInputType = {
    id?: true
    imageUrl?: true
    isActive?: true
    title_tr?: true
    title_en?: true
    title_de?: true
    title_ru?: true
    text_tr?: true
    text_en?: true
    text_de?: true
    text_ru?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SuccessHeroMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    isActive?: true
    title_tr?: true
    title_en?: true
    title_de?: true
    title_ru?: true
    text_tr?: true
    text_en?: true
    text_de?: true
    text_ru?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SuccessHeroCountAggregateInputType = {
    id?: true
    imageUrl?: true
    isActive?: true
    title_tr?: true
    title_en?: true
    title_de?: true
    title_ru?: true
    text_tr?: true
    text_en?: true
    text_de?: true
    text_ru?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SuccessHeroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuccessHero to aggregate.
     */
    where?: SuccessHeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuccessHeroes to fetch.
     */
    orderBy?: SuccessHeroOrderByWithRelationInput | SuccessHeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuccessHeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuccessHeroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuccessHeroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SuccessHeroes
    **/
    _count?: true | SuccessHeroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuccessHeroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuccessHeroMaxAggregateInputType
  }

  export type GetSuccessHeroAggregateType<T extends SuccessHeroAggregateArgs> = {
        [P in keyof T & keyof AggregateSuccessHero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuccessHero[P]>
      : GetScalarType<T[P], AggregateSuccessHero[P]>
  }




  export type SuccessHeroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuccessHeroWhereInput
    orderBy?: SuccessHeroOrderByWithAggregationInput | SuccessHeroOrderByWithAggregationInput[]
    by: SuccessHeroScalarFieldEnum[] | SuccessHeroScalarFieldEnum
    having?: SuccessHeroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuccessHeroCountAggregateInputType | true
    _min?: SuccessHeroMinAggregateInputType
    _max?: SuccessHeroMaxAggregateInputType
  }

  export type SuccessHeroGroupByOutputType = {
    id: string
    imageUrl: string
    isActive: boolean
    title_tr: string
    title_en: string
    title_de: string
    title_ru: string
    text_tr: string
    text_en: string
    text_de: string
    text_ru: string
    createdAt: Date
    updatedAt: Date
    _count: SuccessHeroCountAggregateOutputType | null
    _min: SuccessHeroMinAggregateOutputType | null
    _max: SuccessHeroMaxAggregateOutputType | null
  }

  type GetSuccessHeroGroupByPayload<T extends SuccessHeroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuccessHeroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuccessHeroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuccessHeroGroupByOutputType[P]>
            : GetScalarType<T[P], SuccessHeroGroupByOutputType[P]>
        }
      >
    >


  export type SuccessHeroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    isActive?: boolean
    title_tr?: boolean
    title_en?: boolean
    title_de?: boolean
    title_ru?: boolean
    text_tr?: boolean
    text_en?: boolean
    text_de?: boolean
    text_ru?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["successHero"]>

  export type SuccessHeroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    isActive?: boolean
    title_tr?: boolean
    title_en?: boolean
    title_de?: boolean
    title_ru?: boolean
    text_tr?: boolean
    text_en?: boolean
    text_de?: boolean
    text_ru?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["successHero"]>

  export type SuccessHeroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    isActive?: boolean
    title_tr?: boolean
    title_en?: boolean
    title_de?: boolean
    title_ru?: boolean
    text_tr?: boolean
    text_en?: boolean
    text_de?: boolean
    text_ru?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["successHero"]>

  export type SuccessHeroSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    isActive?: boolean
    title_tr?: boolean
    title_en?: boolean
    title_de?: boolean
    title_ru?: boolean
    text_tr?: boolean
    text_en?: boolean
    text_de?: boolean
    text_ru?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SuccessHeroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "isActive" | "title_tr" | "title_en" | "title_de" | "title_ru" | "text_tr" | "text_en" | "text_de" | "text_ru" | "createdAt" | "updatedAt", ExtArgs["result"]["successHero"]>

  export type $SuccessHeroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SuccessHero"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageUrl: string
      isActive: boolean
      title_tr: string
      title_en: string
      title_de: string
      title_ru: string
      text_tr: string
      text_en: string
      text_de: string
      text_ru: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["successHero"]>
    composites: {}
  }

  type SuccessHeroGetPayload<S extends boolean | null | undefined | SuccessHeroDefaultArgs> = $Result.GetResult<Prisma.$SuccessHeroPayload, S>

  type SuccessHeroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SuccessHeroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuccessHeroCountAggregateInputType | true
    }

  export interface SuccessHeroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SuccessHero'], meta: { name: 'SuccessHero' } }
    /**
     * Find zero or one SuccessHero that matches the filter.
     * @param {SuccessHeroFindUniqueArgs} args - Arguments to find a SuccessHero
     * @example
     * // Get one SuccessHero
     * const successHero = await prisma.successHero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuccessHeroFindUniqueArgs>(args: SelectSubset<T, SuccessHeroFindUniqueArgs<ExtArgs>>): Prisma__SuccessHeroClient<$Result.GetResult<Prisma.$SuccessHeroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SuccessHero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuccessHeroFindUniqueOrThrowArgs} args - Arguments to find a SuccessHero
     * @example
     * // Get one SuccessHero
     * const successHero = await prisma.successHero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuccessHeroFindUniqueOrThrowArgs>(args: SelectSubset<T, SuccessHeroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuccessHeroClient<$Result.GetResult<Prisma.$SuccessHeroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuccessHero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessHeroFindFirstArgs} args - Arguments to find a SuccessHero
     * @example
     * // Get one SuccessHero
     * const successHero = await prisma.successHero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuccessHeroFindFirstArgs>(args?: SelectSubset<T, SuccessHeroFindFirstArgs<ExtArgs>>): Prisma__SuccessHeroClient<$Result.GetResult<Prisma.$SuccessHeroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuccessHero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessHeroFindFirstOrThrowArgs} args - Arguments to find a SuccessHero
     * @example
     * // Get one SuccessHero
     * const successHero = await prisma.successHero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuccessHeroFindFirstOrThrowArgs>(args?: SelectSubset<T, SuccessHeroFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuccessHeroClient<$Result.GetResult<Prisma.$SuccessHeroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SuccessHeroes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessHeroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SuccessHeroes
     * const successHeroes = await prisma.successHero.findMany()
     * 
     * // Get first 10 SuccessHeroes
     * const successHeroes = await prisma.successHero.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const successHeroWithIdOnly = await prisma.successHero.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuccessHeroFindManyArgs>(args?: SelectSubset<T, SuccessHeroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuccessHeroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SuccessHero.
     * @param {SuccessHeroCreateArgs} args - Arguments to create a SuccessHero.
     * @example
     * // Create one SuccessHero
     * const SuccessHero = await prisma.successHero.create({
     *   data: {
     *     // ... data to create a SuccessHero
     *   }
     * })
     * 
     */
    create<T extends SuccessHeroCreateArgs>(args: SelectSubset<T, SuccessHeroCreateArgs<ExtArgs>>): Prisma__SuccessHeroClient<$Result.GetResult<Prisma.$SuccessHeroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SuccessHeroes.
     * @param {SuccessHeroCreateManyArgs} args - Arguments to create many SuccessHeroes.
     * @example
     * // Create many SuccessHeroes
     * const successHero = await prisma.successHero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuccessHeroCreateManyArgs>(args?: SelectSubset<T, SuccessHeroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SuccessHeroes and returns the data saved in the database.
     * @param {SuccessHeroCreateManyAndReturnArgs} args - Arguments to create many SuccessHeroes.
     * @example
     * // Create many SuccessHeroes
     * const successHero = await prisma.successHero.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SuccessHeroes and only return the `id`
     * const successHeroWithIdOnly = await prisma.successHero.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SuccessHeroCreateManyAndReturnArgs>(args?: SelectSubset<T, SuccessHeroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuccessHeroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SuccessHero.
     * @param {SuccessHeroDeleteArgs} args - Arguments to delete one SuccessHero.
     * @example
     * // Delete one SuccessHero
     * const SuccessHero = await prisma.successHero.delete({
     *   where: {
     *     // ... filter to delete one SuccessHero
     *   }
     * })
     * 
     */
    delete<T extends SuccessHeroDeleteArgs>(args: SelectSubset<T, SuccessHeroDeleteArgs<ExtArgs>>): Prisma__SuccessHeroClient<$Result.GetResult<Prisma.$SuccessHeroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SuccessHero.
     * @param {SuccessHeroUpdateArgs} args - Arguments to update one SuccessHero.
     * @example
     * // Update one SuccessHero
     * const successHero = await prisma.successHero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuccessHeroUpdateArgs>(args: SelectSubset<T, SuccessHeroUpdateArgs<ExtArgs>>): Prisma__SuccessHeroClient<$Result.GetResult<Prisma.$SuccessHeroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SuccessHeroes.
     * @param {SuccessHeroDeleteManyArgs} args - Arguments to filter SuccessHeroes to delete.
     * @example
     * // Delete a few SuccessHeroes
     * const { count } = await prisma.successHero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuccessHeroDeleteManyArgs>(args?: SelectSubset<T, SuccessHeroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuccessHeroes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessHeroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SuccessHeroes
     * const successHero = await prisma.successHero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuccessHeroUpdateManyArgs>(args: SelectSubset<T, SuccessHeroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuccessHeroes and returns the data updated in the database.
     * @param {SuccessHeroUpdateManyAndReturnArgs} args - Arguments to update many SuccessHeroes.
     * @example
     * // Update many SuccessHeroes
     * const successHero = await prisma.successHero.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SuccessHeroes and only return the `id`
     * const successHeroWithIdOnly = await prisma.successHero.updateManyAndReturn({
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
    updateManyAndReturn<T extends SuccessHeroUpdateManyAndReturnArgs>(args: SelectSubset<T, SuccessHeroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuccessHeroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SuccessHero.
     * @param {SuccessHeroUpsertArgs} args - Arguments to update or create a SuccessHero.
     * @example
     * // Update or create a SuccessHero
     * const successHero = await prisma.successHero.upsert({
     *   create: {
     *     // ... data to create a SuccessHero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SuccessHero we want to update
     *   }
     * })
     */
    upsert<T extends SuccessHeroUpsertArgs>(args: SelectSubset<T, SuccessHeroUpsertArgs<ExtArgs>>): Prisma__SuccessHeroClient<$Result.GetResult<Prisma.$SuccessHeroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SuccessHeroes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessHeroCountArgs} args - Arguments to filter SuccessHeroes to count.
     * @example
     * // Count the number of SuccessHeroes
     * const count = await prisma.successHero.count({
     *   where: {
     *     // ... the filter for the SuccessHeroes we want to count
     *   }
     * })
    **/
    count<T extends SuccessHeroCountArgs>(
      args?: Subset<T, SuccessHeroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuccessHeroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SuccessHero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessHeroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuccessHeroAggregateArgs>(args: Subset<T, SuccessHeroAggregateArgs>): Prisma.PrismaPromise<GetSuccessHeroAggregateType<T>>

    /**
     * Group by SuccessHero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessHeroGroupByArgs} args - Group by arguments.
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
      T extends SuccessHeroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuccessHeroGroupByArgs['orderBy'] }
        : { orderBy?: SuccessHeroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SuccessHeroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuccessHeroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SuccessHero model
   */
  readonly fields: SuccessHeroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SuccessHero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuccessHeroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SuccessHero model
   */
  interface SuccessHeroFieldRefs {
    readonly id: FieldRef<"SuccessHero", 'String'>
    readonly imageUrl: FieldRef<"SuccessHero", 'String'>
    readonly isActive: FieldRef<"SuccessHero", 'Boolean'>
    readonly title_tr: FieldRef<"SuccessHero", 'String'>
    readonly title_en: FieldRef<"SuccessHero", 'String'>
    readonly title_de: FieldRef<"SuccessHero", 'String'>
    readonly title_ru: FieldRef<"SuccessHero", 'String'>
    readonly text_tr: FieldRef<"SuccessHero", 'String'>
    readonly text_en: FieldRef<"SuccessHero", 'String'>
    readonly text_de: FieldRef<"SuccessHero", 'String'>
    readonly text_ru: FieldRef<"SuccessHero", 'String'>
    readonly createdAt: FieldRef<"SuccessHero", 'DateTime'>
    readonly updatedAt: FieldRef<"SuccessHero", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SuccessHero findUnique
   */
  export type SuccessHeroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessHero
     */
    select?: SuccessHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessHero
     */
    omit?: SuccessHeroOmit<ExtArgs> | null
    /**
     * Filter, which SuccessHero to fetch.
     */
    where: SuccessHeroWhereUniqueInput
  }

  /**
   * SuccessHero findUniqueOrThrow
   */
  export type SuccessHeroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessHero
     */
    select?: SuccessHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessHero
     */
    omit?: SuccessHeroOmit<ExtArgs> | null
    /**
     * Filter, which SuccessHero to fetch.
     */
    where: SuccessHeroWhereUniqueInput
  }

  /**
   * SuccessHero findFirst
   */
  export type SuccessHeroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessHero
     */
    select?: SuccessHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessHero
     */
    omit?: SuccessHeroOmit<ExtArgs> | null
    /**
     * Filter, which SuccessHero to fetch.
     */
    where?: SuccessHeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuccessHeroes to fetch.
     */
    orderBy?: SuccessHeroOrderByWithRelationInput | SuccessHeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuccessHeroes.
     */
    cursor?: SuccessHeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuccessHeroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuccessHeroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuccessHeroes.
     */
    distinct?: SuccessHeroScalarFieldEnum | SuccessHeroScalarFieldEnum[]
  }

  /**
   * SuccessHero findFirstOrThrow
   */
  export type SuccessHeroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessHero
     */
    select?: SuccessHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessHero
     */
    omit?: SuccessHeroOmit<ExtArgs> | null
    /**
     * Filter, which SuccessHero to fetch.
     */
    where?: SuccessHeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuccessHeroes to fetch.
     */
    orderBy?: SuccessHeroOrderByWithRelationInput | SuccessHeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuccessHeroes.
     */
    cursor?: SuccessHeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuccessHeroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuccessHeroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuccessHeroes.
     */
    distinct?: SuccessHeroScalarFieldEnum | SuccessHeroScalarFieldEnum[]
  }

  /**
   * SuccessHero findMany
   */
  export type SuccessHeroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessHero
     */
    select?: SuccessHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessHero
     */
    omit?: SuccessHeroOmit<ExtArgs> | null
    /**
     * Filter, which SuccessHeroes to fetch.
     */
    where?: SuccessHeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuccessHeroes to fetch.
     */
    orderBy?: SuccessHeroOrderByWithRelationInput | SuccessHeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SuccessHeroes.
     */
    cursor?: SuccessHeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuccessHeroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuccessHeroes.
     */
    skip?: number
    distinct?: SuccessHeroScalarFieldEnum | SuccessHeroScalarFieldEnum[]
  }

  /**
   * SuccessHero create
   */
  export type SuccessHeroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessHero
     */
    select?: SuccessHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessHero
     */
    omit?: SuccessHeroOmit<ExtArgs> | null
    /**
     * The data needed to create a SuccessHero.
     */
    data: XOR<SuccessHeroCreateInput, SuccessHeroUncheckedCreateInput>
  }

  /**
   * SuccessHero createMany
   */
  export type SuccessHeroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SuccessHeroes.
     */
    data: SuccessHeroCreateManyInput | SuccessHeroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SuccessHero createManyAndReturn
   */
  export type SuccessHeroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessHero
     */
    select?: SuccessHeroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessHero
     */
    omit?: SuccessHeroOmit<ExtArgs> | null
    /**
     * The data used to create many SuccessHeroes.
     */
    data: SuccessHeroCreateManyInput | SuccessHeroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SuccessHero update
   */
  export type SuccessHeroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessHero
     */
    select?: SuccessHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessHero
     */
    omit?: SuccessHeroOmit<ExtArgs> | null
    /**
     * The data needed to update a SuccessHero.
     */
    data: XOR<SuccessHeroUpdateInput, SuccessHeroUncheckedUpdateInput>
    /**
     * Choose, which SuccessHero to update.
     */
    where: SuccessHeroWhereUniqueInput
  }

  /**
   * SuccessHero updateMany
   */
  export type SuccessHeroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SuccessHeroes.
     */
    data: XOR<SuccessHeroUpdateManyMutationInput, SuccessHeroUncheckedUpdateManyInput>
    /**
     * Filter which SuccessHeroes to update
     */
    where?: SuccessHeroWhereInput
    /**
     * Limit how many SuccessHeroes to update.
     */
    limit?: number
  }

  /**
   * SuccessHero updateManyAndReturn
   */
  export type SuccessHeroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessHero
     */
    select?: SuccessHeroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessHero
     */
    omit?: SuccessHeroOmit<ExtArgs> | null
    /**
     * The data used to update SuccessHeroes.
     */
    data: XOR<SuccessHeroUpdateManyMutationInput, SuccessHeroUncheckedUpdateManyInput>
    /**
     * Filter which SuccessHeroes to update
     */
    where?: SuccessHeroWhereInput
    /**
     * Limit how many SuccessHeroes to update.
     */
    limit?: number
  }

  /**
   * SuccessHero upsert
   */
  export type SuccessHeroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessHero
     */
    select?: SuccessHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessHero
     */
    omit?: SuccessHeroOmit<ExtArgs> | null
    /**
     * The filter to search for the SuccessHero to update in case it exists.
     */
    where: SuccessHeroWhereUniqueInput
    /**
     * In case the SuccessHero found by the `where` argument doesn't exist, create a new SuccessHero with this data.
     */
    create: XOR<SuccessHeroCreateInput, SuccessHeroUncheckedCreateInput>
    /**
     * In case the SuccessHero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuccessHeroUpdateInput, SuccessHeroUncheckedUpdateInput>
  }

  /**
   * SuccessHero delete
   */
  export type SuccessHeroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessHero
     */
    select?: SuccessHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessHero
     */
    omit?: SuccessHeroOmit<ExtArgs> | null
    /**
     * Filter which SuccessHero to delete.
     */
    where: SuccessHeroWhereUniqueInput
  }

  /**
   * SuccessHero deleteMany
   */
  export type SuccessHeroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuccessHeroes to delete
     */
    where?: SuccessHeroWhereInput
    /**
     * Limit how many SuccessHeroes to delete.
     */
    limit?: number
  }

  /**
   * SuccessHero without action
   */
  export type SuccessHeroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessHero
     */
    select?: SuccessHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessHero
     */
    omit?: SuccessHeroOmit<ExtArgs> | null
  }


  /**
   * Model SuccessModelReview
   */

  export type AggregateSuccessModelReview = {
    _count: SuccessModelReviewCountAggregateOutputType | null
    _min: SuccessModelReviewMinAggregateOutputType | null
    _max: SuccessModelReviewMaxAggregateOutputType | null
  }

  export type SuccessModelReviewMinAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    isActive: boolean | null
    title_tr: string | null
    title_en: string | null
    title_de: string | null
    title_ru: string | null
    text_tr: string | null
    text_en: string | null
    text_de: string | null
    text_ru: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SuccessModelReviewMaxAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    isActive: boolean | null
    title_tr: string | null
    title_en: string | null
    title_de: string | null
    title_ru: string | null
    text_tr: string | null
    text_en: string | null
    text_de: string | null
    text_ru: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SuccessModelReviewCountAggregateOutputType = {
    id: number
    imageUrl: number
    isActive: number
    title_tr: number
    title_en: number
    title_de: number
    title_ru: number
    text_tr: number
    text_en: number
    text_de: number
    text_ru: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SuccessModelReviewMinAggregateInputType = {
    id?: true
    imageUrl?: true
    isActive?: true
    title_tr?: true
    title_en?: true
    title_de?: true
    title_ru?: true
    text_tr?: true
    text_en?: true
    text_de?: true
    text_ru?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SuccessModelReviewMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    isActive?: true
    title_tr?: true
    title_en?: true
    title_de?: true
    title_ru?: true
    text_tr?: true
    text_en?: true
    text_de?: true
    text_ru?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SuccessModelReviewCountAggregateInputType = {
    id?: true
    imageUrl?: true
    isActive?: true
    title_tr?: true
    title_en?: true
    title_de?: true
    title_ru?: true
    text_tr?: true
    text_en?: true
    text_de?: true
    text_ru?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SuccessModelReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuccessModelReview to aggregate.
     */
    where?: SuccessModelReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuccessModelReviews to fetch.
     */
    orderBy?: SuccessModelReviewOrderByWithRelationInput | SuccessModelReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuccessModelReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuccessModelReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuccessModelReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SuccessModelReviews
    **/
    _count?: true | SuccessModelReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuccessModelReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuccessModelReviewMaxAggregateInputType
  }

  export type GetSuccessModelReviewAggregateType<T extends SuccessModelReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateSuccessModelReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuccessModelReview[P]>
      : GetScalarType<T[P], AggregateSuccessModelReview[P]>
  }




  export type SuccessModelReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuccessModelReviewWhereInput
    orderBy?: SuccessModelReviewOrderByWithAggregationInput | SuccessModelReviewOrderByWithAggregationInput[]
    by: SuccessModelReviewScalarFieldEnum[] | SuccessModelReviewScalarFieldEnum
    having?: SuccessModelReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuccessModelReviewCountAggregateInputType | true
    _min?: SuccessModelReviewMinAggregateInputType
    _max?: SuccessModelReviewMaxAggregateInputType
  }

  export type SuccessModelReviewGroupByOutputType = {
    id: string
    imageUrl: string
    isActive: boolean
    title_tr: string
    title_en: string
    title_de: string
    title_ru: string
    text_tr: string
    text_en: string
    text_de: string
    text_ru: string
    createdAt: Date
    updatedAt: Date
    _count: SuccessModelReviewCountAggregateOutputType | null
    _min: SuccessModelReviewMinAggregateOutputType | null
    _max: SuccessModelReviewMaxAggregateOutputType | null
  }

  type GetSuccessModelReviewGroupByPayload<T extends SuccessModelReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuccessModelReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuccessModelReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuccessModelReviewGroupByOutputType[P]>
            : GetScalarType<T[P], SuccessModelReviewGroupByOutputType[P]>
        }
      >
    >


  export type SuccessModelReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    isActive?: boolean
    title_tr?: boolean
    title_en?: boolean
    title_de?: boolean
    title_ru?: boolean
    text_tr?: boolean
    text_en?: boolean
    text_de?: boolean
    text_ru?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["successModelReview"]>

  export type SuccessModelReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    isActive?: boolean
    title_tr?: boolean
    title_en?: boolean
    title_de?: boolean
    title_ru?: boolean
    text_tr?: boolean
    text_en?: boolean
    text_de?: boolean
    text_ru?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["successModelReview"]>

  export type SuccessModelReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    isActive?: boolean
    title_tr?: boolean
    title_en?: boolean
    title_de?: boolean
    title_ru?: boolean
    text_tr?: boolean
    text_en?: boolean
    text_de?: boolean
    text_ru?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["successModelReview"]>

  export type SuccessModelReviewSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    isActive?: boolean
    title_tr?: boolean
    title_en?: boolean
    title_de?: boolean
    title_ru?: boolean
    text_tr?: boolean
    text_en?: boolean
    text_de?: boolean
    text_ru?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SuccessModelReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "isActive" | "title_tr" | "title_en" | "title_de" | "title_ru" | "text_tr" | "text_en" | "text_de" | "text_ru" | "createdAt" | "updatedAt", ExtArgs["result"]["successModelReview"]>

  export type $SuccessModelReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SuccessModelReview"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageUrl: string
      isActive: boolean
      title_tr: string
      title_en: string
      title_de: string
      title_ru: string
      text_tr: string
      text_en: string
      text_de: string
      text_ru: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["successModelReview"]>
    composites: {}
  }

  type SuccessModelReviewGetPayload<S extends boolean | null | undefined | SuccessModelReviewDefaultArgs> = $Result.GetResult<Prisma.$SuccessModelReviewPayload, S>

  type SuccessModelReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SuccessModelReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuccessModelReviewCountAggregateInputType | true
    }

  export interface SuccessModelReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SuccessModelReview'], meta: { name: 'SuccessModelReview' } }
    /**
     * Find zero or one SuccessModelReview that matches the filter.
     * @param {SuccessModelReviewFindUniqueArgs} args - Arguments to find a SuccessModelReview
     * @example
     * // Get one SuccessModelReview
     * const successModelReview = await prisma.successModelReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuccessModelReviewFindUniqueArgs>(args: SelectSubset<T, SuccessModelReviewFindUniqueArgs<ExtArgs>>): Prisma__SuccessModelReviewClient<$Result.GetResult<Prisma.$SuccessModelReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SuccessModelReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuccessModelReviewFindUniqueOrThrowArgs} args - Arguments to find a SuccessModelReview
     * @example
     * // Get one SuccessModelReview
     * const successModelReview = await prisma.successModelReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuccessModelReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, SuccessModelReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuccessModelReviewClient<$Result.GetResult<Prisma.$SuccessModelReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuccessModelReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessModelReviewFindFirstArgs} args - Arguments to find a SuccessModelReview
     * @example
     * // Get one SuccessModelReview
     * const successModelReview = await prisma.successModelReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuccessModelReviewFindFirstArgs>(args?: SelectSubset<T, SuccessModelReviewFindFirstArgs<ExtArgs>>): Prisma__SuccessModelReviewClient<$Result.GetResult<Prisma.$SuccessModelReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuccessModelReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessModelReviewFindFirstOrThrowArgs} args - Arguments to find a SuccessModelReview
     * @example
     * // Get one SuccessModelReview
     * const successModelReview = await prisma.successModelReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuccessModelReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, SuccessModelReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuccessModelReviewClient<$Result.GetResult<Prisma.$SuccessModelReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SuccessModelReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessModelReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SuccessModelReviews
     * const successModelReviews = await prisma.successModelReview.findMany()
     * 
     * // Get first 10 SuccessModelReviews
     * const successModelReviews = await prisma.successModelReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const successModelReviewWithIdOnly = await prisma.successModelReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuccessModelReviewFindManyArgs>(args?: SelectSubset<T, SuccessModelReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuccessModelReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SuccessModelReview.
     * @param {SuccessModelReviewCreateArgs} args - Arguments to create a SuccessModelReview.
     * @example
     * // Create one SuccessModelReview
     * const SuccessModelReview = await prisma.successModelReview.create({
     *   data: {
     *     // ... data to create a SuccessModelReview
     *   }
     * })
     * 
     */
    create<T extends SuccessModelReviewCreateArgs>(args: SelectSubset<T, SuccessModelReviewCreateArgs<ExtArgs>>): Prisma__SuccessModelReviewClient<$Result.GetResult<Prisma.$SuccessModelReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SuccessModelReviews.
     * @param {SuccessModelReviewCreateManyArgs} args - Arguments to create many SuccessModelReviews.
     * @example
     * // Create many SuccessModelReviews
     * const successModelReview = await prisma.successModelReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuccessModelReviewCreateManyArgs>(args?: SelectSubset<T, SuccessModelReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SuccessModelReviews and returns the data saved in the database.
     * @param {SuccessModelReviewCreateManyAndReturnArgs} args - Arguments to create many SuccessModelReviews.
     * @example
     * // Create many SuccessModelReviews
     * const successModelReview = await prisma.successModelReview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SuccessModelReviews and only return the `id`
     * const successModelReviewWithIdOnly = await prisma.successModelReview.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SuccessModelReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, SuccessModelReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuccessModelReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SuccessModelReview.
     * @param {SuccessModelReviewDeleteArgs} args - Arguments to delete one SuccessModelReview.
     * @example
     * // Delete one SuccessModelReview
     * const SuccessModelReview = await prisma.successModelReview.delete({
     *   where: {
     *     // ... filter to delete one SuccessModelReview
     *   }
     * })
     * 
     */
    delete<T extends SuccessModelReviewDeleteArgs>(args: SelectSubset<T, SuccessModelReviewDeleteArgs<ExtArgs>>): Prisma__SuccessModelReviewClient<$Result.GetResult<Prisma.$SuccessModelReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SuccessModelReview.
     * @param {SuccessModelReviewUpdateArgs} args - Arguments to update one SuccessModelReview.
     * @example
     * // Update one SuccessModelReview
     * const successModelReview = await prisma.successModelReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuccessModelReviewUpdateArgs>(args: SelectSubset<T, SuccessModelReviewUpdateArgs<ExtArgs>>): Prisma__SuccessModelReviewClient<$Result.GetResult<Prisma.$SuccessModelReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SuccessModelReviews.
     * @param {SuccessModelReviewDeleteManyArgs} args - Arguments to filter SuccessModelReviews to delete.
     * @example
     * // Delete a few SuccessModelReviews
     * const { count } = await prisma.successModelReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuccessModelReviewDeleteManyArgs>(args?: SelectSubset<T, SuccessModelReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuccessModelReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessModelReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SuccessModelReviews
     * const successModelReview = await prisma.successModelReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuccessModelReviewUpdateManyArgs>(args: SelectSubset<T, SuccessModelReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuccessModelReviews and returns the data updated in the database.
     * @param {SuccessModelReviewUpdateManyAndReturnArgs} args - Arguments to update many SuccessModelReviews.
     * @example
     * // Update many SuccessModelReviews
     * const successModelReview = await prisma.successModelReview.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SuccessModelReviews and only return the `id`
     * const successModelReviewWithIdOnly = await prisma.successModelReview.updateManyAndReturn({
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
    updateManyAndReturn<T extends SuccessModelReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, SuccessModelReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuccessModelReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SuccessModelReview.
     * @param {SuccessModelReviewUpsertArgs} args - Arguments to update or create a SuccessModelReview.
     * @example
     * // Update or create a SuccessModelReview
     * const successModelReview = await prisma.successModelReview.upsert({
     *   create: {
     *     // ... data to create a SuccessModelReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SuccessModelReview we want to update
     *   }
     * })
     */
    upsert<T extends SuccessModelReviewUpsertArgs>(args: SelectSubset<T, SuccessModelReviewUpsertArgs<ExtArgs>>): Prisma__SuccessModelReviewClient<$Result.GetResult<Prisma.$SuccessModelReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SuccessModelReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessModelReviewCountArgs} args - Arguments to filter SuccessModelReviews to count.
     * @example
     * // Count the number of SuccessModelReviews
     * const count = await prisma.successModelReview.count({
     *   where: {
     *     // ... the filter for the SuccessModelReviews we want to count
     *   }
     * })
    **/
    count<T extends SuccessModelReviewCountArgs>(
      args?: Subset<T, SuccessModelReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuccessModelReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SuccessModelReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessModelReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuccessModelReviewAggregateArgs>(args: Subset<T, SuccessModelReviewAggregateArgs>): Prisma.PrismaPromise<GetSuccessModelReviewAggregateType<T>>

    /**
     * Group by SuccessModelReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessModelReviewGroupByArgs} args - Group by arguments.
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
      T extends SuccessModelReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuccessModelReviewGroupByArgs['orderBy'] }
        : { orderBy?: SuccessModelReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SuccessModelReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuccessModelReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SuccessModelReview model
   */
  readonly fields: SuccessModelReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SuccessModelReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuccessModelReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SuccessModelReview model
   */
  interface SuccessModelReviewFieldRefs {
    readonly id: FieldRef<"SuccessModelReview", 'String'>
    readonly imageUrl: FieldRef<"SuccessModelReview", 'String'>
    readonly isActive: FieldRef<"SuccessModelReview", 'Boolean'>
    readonly title_tr: FieldRef<"SuccessModelReview", 'String'>
    readonly title_en: FieldRef<"SuccessModelReview", 'String'>
    readonly title_de: FieldRef<"SuccessModelReview", 'String'>
    readonly title_ru: FieldRef<"SuccessModelReview", 'String'>
    readonly text_tr: FieldRef<"SuccessModelReview", 'String'>
    readonly text_en: FieldRef<"SuccessModelReview", 'String'>
    readonly text_de: FieldRef<"SuccessModelReview", 'String'>
    readonly text_ru: FieldRef<"SuccessModelReview", 'String'>
    readonly createdAt: FieldRef<"SuccessModelReview", 'DateTime'>
    readonly updatedAt: FieldRef<"SuccessModelReview", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SuccessModelReview findUnique
   */
  export type SuccessModelReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessModelReview
     */
    select?: SuccessModelReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessModelReview
     */
    omit?: SuccessModelReviewOmit<ExtArgs> | null
    /**
     * Filter, which SuccessModelReview to fetch.
     */
    where: SuccessModelReviewWhereUniqueInput
  }

  /**
   * SuccessModelReview findUniqueOrThrow
   */
  export type SuccessModelReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessModelReview
     */
    select?: SuccessModelReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessModelReview
     */
    omit?: SuccessModelReviewOmit<ExtArgs> | null
    /**
     * Filter, which SuccessModelReview to fetch.
     */
    where: SuccessModelReviewWhereUniqueInput
  }

  /**
   * SuccessModelReview findFirst
   */
  export type SuccessModelReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessModelReview
     */
    select?: SuccessModelReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessModelReview
     */
    omit?: SuccessModelReviewOmit<ExtArgs> | null
    /**
     * Filter, which SuccessModelReview to fetch.
     */
    where?: SuccessModelReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuccessModelReviews to fetch.
     */
    orderBy?: SuccessModelReviewOrderByWithRelationInput | SuccessModelReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuccessModelReviews.
     */
    cursor?: SuccessModelReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuccessModelReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuccessModelReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuccessModelReviews.
     */
    distinct?: SuccessModelReviewScalarFieldEnum | SuccessModelReviewScalarFieldEnum[]
  }

  /**
   * SuccessModelReview findFirstOrThrow
   */
  export type SuccessModelReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessModelReview
     */
    select?: SuccessModelReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessModelReview
     */
    omit?: SuccessModelReviewOmit<ExtArgs> | null
    /**
     * Filter, which SuccessModelReview to fetch.
     */
    where?: SuccessModelReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuccessModelReviews to fetch.
     */
    orderBy?: SuccessModelReviewOrderByWithRelationInput | SuccessModelReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuccessModelReviews.
     */
    cursor?: SuccessModelReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuccessModelReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuccessModelReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuccessModelReviews.
     */
    distinct?: SuccessModelReviewScalarFieldEnum | SuccessModelReviewScalarFieldEnum[]
  }

  /**
   * SuccessModelReview findMany
   */
  export type SuccessModelReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessModelReview
     */
    select?: SuccessModelReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessModelReview
     */
    omit?: SuccessModelReviewOmit<ExtArgs> | null
    /**
     * Filter, which SuccessModelReviews to fetch.
     */
    where?: SuccessModelReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuccessModelReviews to fetch.
     */
    orderBy?: SuccessModelReviewOrderByWithRelationInput | SuccessModelReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SuccessModelReviews.
     */
    cursor?: SuccessModelReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuccessModelReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuccessModelReviews.
     */
    skip?: number
    distinct?: SuccessModelReviewScalarFieldEnum | SuccessModelReviewScalarFieldEnum[]
  }

  /**
   * SuccessModelReview create
   */
  export type SuccessModelReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessModelReview
     */
    select?: SuccessModelReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessModelReview
     */
    omit?: SuccessModelReviewOmit<ExtArgs> | null
    /**
     * The data needed to create a SuccessModelReview.
     */
    data: XOR<SuccessModelReviewCreateInput, SuccessModelReviewUncheckedCreateInput>
  }

  /**
   * SuccessModelReview createMany
   */
  export type SuccessModelReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SuccessModelReviews.
     */
    data: SuccessModelReviewCreateManyInput | SuccessModelReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SuccessModelReview createManyAndReturn
   */
  export type SuccessModelReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessModelReview
     */
    select?: SuccessModelReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessModelReview
     */
    omit?: SuccessModelReviewOmit<ExtArgs> | null
    /**
     * The data used to create many SuccessModelReviews.
     */
    data: SuccessModelReviewCreateManyInput | SuccessModelReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SuccessModelReview update
   */
  export type SuccessModelReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessModelReview
     */
    select?: SuccessModelReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessModelReview
     */
    omit?: SuccessModelReviewOmit<ExtArgs> | null
    /**
     * The data needed to update a SuccessModelReview.
     */
    data: XOR<SuccessModelReviewUpdateInput, SuccessModelReviewUncheckedUpdateInput>
    /**
     * Choose, which SuccessModelReview to update.
     */
    where: SuccessModelReviewWhereUniqueInput
  }

  /**
   * SuccessModelReview updateMany
   */
  export type SuccessModelReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SuccessModelReviews.
     */
    data: XOR<SuccessModelReviewUpdateManyMutationInput, SuccessModelReviewUncheckedUpdateManyInput>
    /**
     * Filter which SuccessModelReviews to update
     */
    where?: SuccessModelReviewWhereInput
    /**
     * Limit how many SuccessModelReviews to update.
     */
    limit?: number
  }

  /**
   * SuccessModelReview updateManyAndReturn
   */
  export type SuccessModelReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessModelReview
     */
    select?: SuccessModelReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessModelReview
     */
    omit?: SuccessModelReviewOmit<ExtArgs> | null
    /**
     * The data used to update SuccessModelReviews.
     */
    data: XOR<SuccessModelReviewUpdateManyMutationInput, SuccessModelReviewUncheckedUpdateManyInput>
    /**
     * Filter which SuccessModelReviews to update
     */
    where?: SuccessModelReviewWhereInput
    /**
     * Limit how many SuccessModelReviews to update.
     */
    limit?: number
  }

  /**
   * SuccessModelReview upsert
   */
  export type SuccessModelReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessModelReview
     */
    select?: SuccessModelReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessModelReview
     */
    omit?: SuccessModelReviewOmit<ExtArgs> | null
    /**
     * The filter to search for the SuccessModelReview to update in case it exists.
     */
    where: SuccessModelReviewWhereUniqueInput
    /**
     * In case the SuccessModelReview found by the `where` argument doesn't exist, create a new SuccessModelReview with this data.
     */
    create: XOR<SuccessModelReviewCreateInput, SuccessModelReviewUncheckedCreateInput>
    /**
     * In case the SuccessModelReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuccessModelReviewUpdateInput, SuccessModelReviewUncheckedUpdateInput>
  }

  /**
   * SuccessModelReview delete
   */
  export type SuccessModelReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessModelReview
     */
    select?: SuccessModelReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessModelReview
     */
    omit?: SuccessModelReviewOmit<ExtArgs> | null
    /**
     * Filter which SuccessModelReview to delete.
     */
    where: SuccessModelReviewWhereUniqueInput
  }

  /**
   * SuccessModelReview deleteMany
   */
  export type SuccessModelReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuccessModelReviews to delete
     */
    where?: SuccessModelReviewWhereInput
    /**
     * Limit how many SuccessModelReviews to delete.
     */
    limit?: number
  }

  /**
   * SuccessModelReview without action
   */
  export type SuccessModelReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessModelReview
     */
    select?: SuccessModelReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessModelReview
     */
    omit?: SuccessModelReviewOmit<ExtArgs> | null
  }


  /**
   * Model FeaturedItem
   */

  export type AggregateFeaturedItem = {
    _count: FeaturedItemCountAggregateOutputType | null
    _avg: FeaturedItemAvgAggregateOutputType | null
    _sum: FeaturedItemSumAggregateOutputType | null
    _min: FeaturedItemMinAggregateOutputType | null
    _max: FeaturedItemMaxAggregateOutputType | null
  }

  export type FeaturedItemAvgAggregateOutputType = {
    order: number | null
  }

  export type FeaturedItemSumAggregateOutputType = {
    order: number | null
  }

  export type FeaturedItemMinAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    title_tr: string | null
    title_en: string | null
    title_de: string | null
    title_ru: string | null
    content_tr: string | null
    content_en: string | null
    content_de: string | null
    content_ru: string | null
    order: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeaturedItemMaxAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    title_tr: string | null
    title_en: string | null
    title_de: string | null
    title_ru: string | null
    content_tr: string | null
    content_en: string | null
    content_de: string | null
    content_ru: string | null
    order: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeaturedItemCountAggregateOutputType = {
    id: number
    imageUrl: number
    title_tr: number
    title_en: number
    title_de: number
    title_ru: number
    content_tr: number
    content_en: number
    content_de: number
    content_ru: number
    order: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FeaturedItemAvgAggregateInputType = {
    order?: true
  }

  export type FeaturedItemSumAggregateInputType = {
    order?: true
  }

  export type FeaturedItemMinAggregateInputType = {
    id?: true
    imageUrl?: true
    title_tr?: true
    title_en?: true
    title_de?: true
    title_ru?: true
    content_tr?: true
    content_en?: true
    content_de?: true
    content_ru?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeaturedItemMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    title_tr?: true
    title_en?: true
    title_de?: true
    title_ru?: true
    content_tr?: true
    content_en?: true
    content_de?: true
    content_ru?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeaturedItemCountAggregateInputType = {
    id?: true
    imageUrl?: true
    title_tr?: true
    title_en?: true
    title_de?: true
    title_ru?: true
    content_tr?: true
    content_en?: true
    content_de?: true
    content_ru?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FeaturedItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeaturedItem to aggregate.
     */
    where?: FeaturedItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeaturedItems to fetch.
     */
    orderBy?: FeaturedItemOrderByWithRelationInput | FeaturedItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeaturedItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeaturedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeaturedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeaturedItems
    **/
    _count?: true | FeaturedItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeaturedItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeaturedItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeaturedItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeaturedItemMaxAggregateInputType
  }

  export type GetFeaturedItemAggregateType<T extends FeaturedItemAggregateArgs> = {
        [P in keyof T & keyof AggregateFeaturedItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeaturedItem[P]>
      : GetScalarType<T[P], AggregateFeaturedItem[P]>
  }




  export type FeaturedItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeaturedItemWhereInput
    orderBy?: FeaturedItemOrderByWithAggregationInput | FeaturedItemOrderByWithAggregationInput[]
    by: FeaturedItemScalarFieldEnum[] | FeaturedItemScalarFieldEnum
    having?: FeaturedItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeaturedItemCountAggregateInputType | true
    _avg?: FeaturedItemAvgAggregateInputType
    _sum?: FeaturedItemSumAggregateInputType
    _min?: FeaturedItemMinAggregateInputType
    _max?: FeaturedItemMaxAggregateInputType
  }

  export type FeaturedItemGroupByOutputType = {
    id: string
    imageUrl: string
    title_tr: string
    title_en: string
    title_de: string
    title_ru: string
    content_tr: string
    content_en: string
    content_de: string
    content_ru: string
    order: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: FeaturedItemCountAggregateOutputType | null
    _avg: FeaturedItemAvgAggregateOutputType | null
    _sum: FeaturedItemSumAggregateOutputType | null
    _min: FeaturedItemMinAggregateOutputType | null
    _max: FeaturedItemMaxAggregateOutputType | null
  }

  type GetFeaturedItemGroupByPayload<T extends FeaturedItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeaturedItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeaturedItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeaturedItemGroupByOutputType[P]>
            : GetScalarType<T[P], FeaturedItemGroupByOutputType[P]>
        }
      >
    >


  export type FeaturedItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    title_tr?: boolean
    title_en?: boolean
    title_de?: boolean
    title_ru?: boolean
    content_tr?: boolean
    content_en?: boolean
    content_de?: boolean
    content_ru?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["featuredItem"]>

  export type FeaturedItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    title_tr?: boolean
    title_en?: boolean
    title_de?: boolean
    title_ru?: boolean
    content_tr?: boolean
    content_en?: boolean
    content_de?: boolean
    content_ru?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["featuredItem"]>

  export type FeaturedItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    title_tr?: boolean
    title_en?: boolean
    title_de?: boolean
    title_ru?: boolean
    content_tr?: boolean
    content_en?: boolean
    content_de?: boolean
    content_ru?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["featuredItem"]>

  export type FeaturedItemSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    title_tr?: boolean
    title_en?: boolean
    title_de?: boolean
    title_ru?: boolean
    content_tr?: boolean
    content_en?: boolean
    content_de?: boolean
    content_ru?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FeaturedItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "title_tr" | "title_en" | "title_de" | "title_ru" | "content_tr" | "content_en" | "content_de" | "content_ru" | "order" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["featuredItem"]>

  export type $FeaturedItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeaturedItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageUrl: string
      title_tr: string
      title_en: string
      title_de: string
      title_ru: string
      content_tr: string
      content_en: string
      content_de: string
      content_ru: string
      order: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["featuredItem"]>
    composites: {}
  }

  type FeaturedItemGetPayload<S extends boolean | null | undefined | FeaturedItemDefaultArgs> = $Result.GetResult<Prisma.$FeaturedItemPayload, S>

  type FeaturedItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeaturedItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeaturedItemCountAggregateInputType | true
    }

  export interface FeaturedItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeaturedItem'], meta: { name: 'FeaturedItem' } }
    /**
     * Find zero or one FeaturedItem that matches the filter.
     * @param {FeaturedItemFindUniqueArgs} args - Arguments to find a FeaturedItem
     * @example
     * // Get one FeaturedItem
     * const featuredItem = await prisma.featuredItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeaturedItemFindUniqueArgs>(args: SelectSubset<T, FeaturedItemFindUniqueArgs<ExtArgs>>): Prisma__FeaturedItemClient<$Result.GetResult<Prisma.$FeaturedItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeaturedItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeaturedItemFindUniqueOrThrowArgs} args - Arguments to find a FeaturedItem
     * @example
     * // Get one FeaturedItem
     * const featuredItem = await prisma.featuredItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeaturedItemFindUniqueOrThrowArgs>(args: SelectSubset<T, FeaturedItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeaturedItemClient<$Result.GetResult<Prisma.$FeaturedItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeaturedItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedItemFindFirstArgs} args - Arguments to find a FeaturedItem
     * @example
     * // Get one FeaturedItem
     * const featuredItem = await prisma.featuredItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeaturedItemFindFirstArgs>(args?: SelectSubset<T, FeaturedItemFindFirstArgs<ExtArgs>>): Prisma__FeaturedItemClient<$Result.GetResult<Prisma.$FeaturedItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeaturedItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedItemFindFirstOrThrowArgs} args - Arguments to find a FeaturedItem
     * @example
     * // Get one FeaturedItem
     * const featuredItem = await prisma.featuredItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeaturedItemFindFirstOrThrowArgs>(args?: SelectSubset<T, FeaturedItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeaturedItemClient<$Result.GetResult<Prisma.$FeaturedItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeaturedItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeaturedItems
     * const featuredItems = await prisma.featuredItem.findMany()
     * 
     * // Get first 10 FeaturedItems
     * const featuredItems = await prisma.featuredItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const featuredItemWithIdOnly = await prisma.featuredItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeaturedItemFindManyArgs>(args?: SelectSubset<T, FeaturedItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturedItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeaturedItem.
     * @param {FeaturedItemCreateArgs} args - Arguments to create a FeaturedItem.
     * @example
     * // Create one FeaturedItem
     * const FeaturedItem = await prisma.featuredItem.create({
     *   data: {
     *     // ... data to create a FeaturedItem
     *   }
     * })
     * 
     */
    create<T extends FeaturedItemCreateArgs>(args: SelectSubset<T, FeaturedItemCreateArgs<ExtArgs>>): Prisma__FeaturedItemClient<$Result.GetResult<Prisma.$FeaturedItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeaturedItems.
     * @param {FeaturedItemCreateManyArgs} args - Arguments to create many FeaturedItems.
     * @example
     * // Create many FeaturedItems
     * const featuredItem = await prisma.featuredItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeaturedItemCreateManyArgs>(args?: SelectSubset<T, FeaturedItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeaturedItems and returns the data saved in the database.
     * @param {FeaturedItemCreateManyAndReturnArgs} args - Arguments to create many FeaturedItems.
     * @example
     * // Create many FeaturedItems
     * const featuredItem = await prisma.featuredItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeaturedItems and only return the `id`
     * const featuredItemWithIdOnly = await prisma.featuredItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeaturedItemCreateManyAndReturnArgs>(args?: SelectSubset<T, FeaturedItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturedItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FeaturedItem.
     * @param {FeaturedItemDeleteArgs} args - Arguments to delete one FeaturedItem.
     * @example
     * // Delete one FeaturedItem
     * const FeaturedItem = await prisma.featuredItem.delete({
     *   where: {
     *     // ... filter to delete one FeaturedItem
     *   }
     * })
     * 
     */
    delete<T extends FeaturedItemDeleteArgs>(args: SelectSubset<T, FeaturedItemDeleteArgs<ExtArgs>>): Prisma__FeaturedItemClient<$Result.GetResult<Prisma.$FeaturedItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeaturedItem.
     * @param {FeaturedItemUpdateArgs} args - Arguments to update one FeaturedItem.
     * @example
     * // Update one FeaturedItem
     * const featuredItem = await prisma.featuredItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeaturedItemUpdateArgs>(args: SelectSubset<T, FeaturedItemUpdateArgs<ExtArgs>>): Prisma__FeaturedItemClient<$Result.GetResult<Prisma.$FeaturedItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeaturedItems.
     * @param {FeaturedItemDeleteManyArgs} args - Arguments to filter FeaturedItems to delete.
     * @example
     * // Delete a few FeaturedItems
     * const { count } = await prisma.featuredItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeaturedItemDeleteManyArgs>(args?: SelectSubset<T, FeaturedItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeaturedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeaturedItems
     * const featuredItem = await prisma.featuredItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeaturedItemUpdateManyArgs>(args: SelectSubset<T, FeaturedItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeaturedItems and returns the data updated in the database.
     * @param {FeaturedItemUpdateManyAndReturnArgs} args - Arguments to update many FeaturedItems.
     * @example
     * // Update many FeaturedItems
     * const featuredItem = await prisma.featuredItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FeaturedItems and only return the `id`
     * const featuredItemWithIdOnly = await prisma.featuredItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends FeaturedItemUpdateManyAndReturnArgs>(args: SelectSubset<T, FeaturedItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturedItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FeaturedItem.
     * @param {FeaturedItemUpsertArgs} args - Arguments to update or create a FeaturedItem.
     * @example
     * // Update or create a FeaturedItem
     * const featuredItem = await prisma.featuredItem.upsert({
     *   create: {
     *     // ... data to create a FeaturedItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeaturedItem we want to update
     *   }
     * })
     */
    upsert<T extends FeaturedItemUpsertArgs>(args: SelectSubset<T, FeaturedItemUpsertArgs<ExtArgs>>): Prisma__FeaturedItemClient<$Result.GetResult<Prisma.$FeaturedItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeaturedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedItemCountArgs} args - Arguments to filter FeaturedItems to count.
     * @example
     * // Count the number of FeaturedItems
     * const count = await prisma.featuredItem.count({
     *   where: {
     *     // ... the filter for the FeaturedItems we want to count
     *   }
     * })
    **/
    count<T extends FeaturedItemCountArgs>(
      args?: Subset<T, FeaturedItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeaturedItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeaturedItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeaturedItemAggregateArgs>(args: Subset<T, FeaturedItemAggregateArgs>): Prisma.PrismaPromise<GetFeaturedItemAggregateType<T>>

    /**
     * Group by FeaturedItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedItemGroupByArgs} args - Group by arguments.
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
      T extends FeaturedItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeaturedItemGroupByArgs['orderBy'] }
        : { orderBy?: FeaturedItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeaturedItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeaturedItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeaturedItem model
   */
  readonly fields: FeaturedItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeaturedItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeaturedItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the FeaturedItem model
   */
  interface FeaturedItemFieldRefs {
    readonly id: FieldRef<"FeaturedItem", 'String'>
    readonly imageUrl: FieldRef<"FeaturedItem", 'String'>
    readonly title_tr: FieldRef<"FeaturedItem", 'String'>
    readonly title_en: FieldRef<"FeaturedItem", 'String'>
    readonly title_de: FieldRef<"FeaturedItem", 'String'>
    readonly title_ru: FieldRef<"FeaturedItem", 'String'>
    readonly content_tr: FieldRef<"FeaturedItem", 'String'>
    readonly content_en: FieldRef<"FeaturedItem", 'String'>
    readonly content_de: FieldRef<"FeaturedItem", 'String'>
    readonly content_ru: FieldRef<"FeaturedItem", 'String'>
    readonly order: FieldRef<"FeaturedItem", 'Int'>
    readonly isActive: FieldRef<"FeaturedItem", 'Boolean'>
    readonly createdAt: FieldRef<"FeaturedItem", 'DateTime'>
    readonly updatedAt: FieldRef<"FeaturedItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FeaturedItem findUnique
   */
  export type FeaturedItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedItem
     */
    select?: FeaturedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedItem
     */
    omit?: FeaturedItemOmit<ExtArgs> | null
    /**
     * Filter, which FeaturedItem to fetch.
     */
    where: FeaturedItemWhereUniqueInput
  }

  /**
   * FeaturedItem findUniqueOrThrow
   */
  export type FeaturedItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedItem
     */
    select?: FeaturedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedItem
     */
    omit?: FeaturedItemOmit<ExtArgs> | null
    /**
     * Filter, which FeaturedItem to fetch.
     */
    where: FeaturedItemWhereUniqueInput
  }

  /**
   * FeaturedItem findFirst
   */
  export type FeaturedItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedItem
     */
    select?: FeaturedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedItem
     */
    omit?: FeaturedItemOmit<ExtArgs> | null
    /**
     * Filter, which FeaturedItem to fetch.
     */
    where?: FeaturedItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeaturedItems to fetch.
     */
    orderBy?: FeaturedItemOrderByWithRelationInput | FeaturedItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeaturedItems.
     */
    cursor?: FeaturedItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeaturedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeaturedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeaturedItems.
     */
    distinct?: FeaturedItemScalarFieldEnum | FeaturedItemScalarFieldEnum[]
  }

  /**
   * FeaturedItem findFirstOrThrow
   */
  export type FeaturedItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedItem
     */
    select?: FeaturedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedItem
     */
    omit?: FeaturedItemOmit<ExtArgs> | null
    /**
     * Filter, which FeaturedItem to fetch.
     */
    where?: FeaturedItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeaturedItems to fetch.
     */
    orderBy?: FeaturedItemOrderByWithRelationInput | FeaturedItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeaturedItems.
     */
    cursor?: FeaturedItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeaturedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeaturedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeaturedItems.
     */
    distinct?: FeaturedItemScalarFieldEnum | FeaturedItemScalarFieldEnum[]
  }

  /**
   * FeaturedItem findMany
   */
  export type FeaturedItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedItem
     */
    select?: FeaturedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedItem
     */
    omit?: FeaturedItemOmit<ExtArgs> | null
    /**
     * Filter, which FeaturedItems to fetch.
     */
    where?: FeaturedItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeaturedItems to fetch.
     */
    orderBy?: FeaturedItemOrderByWithRelationInput | FeaturedItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeaturedItems.
     */
    cursor?: FeaturedItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeaturedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeaturedItems.
     */
    skip?: number
    distinct?: FeaturedItemScalarFieldEnum | FeaturedItemScalarFieldEnum[]
  }

  /**
   * FeaturedItem create
   */
  export type FeaturedItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedItem
     */
    select?: FeaturedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedItem
     */
    omit?: FeaturedItemOmit<ExtArgs> | null
    /**
     * The data needed to create a FeaturedItem.
     */
    data: XOR<FeaturedItemCreateInput, FeaturedItemUncheckedCreateInput>
  }

  /**
   * FeaturedItem createMany
   */
  export type FeaturedItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeaturedItems.
     */
    data: FeaturedItemCreateManyInput | FeaturedItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeaturedItem createManyAndReturn
   */
  export type FeaturedItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedItem
     */
    select?: FeaturedItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedItem
     */
    omit?: FeaturedItemOmit<ExtArgs> | null
    /**
     * The data used to create many FeaturedItems.
     */
    data: FeaturedItemCreateManyInput | FeaturedItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeaturedItem update
   */
  export type FeaturedItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedItem
     */
    select?: FeaturedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedItem
     */
    omit?: FeaturedItemOmit<ExtArgs> | null
    /**
     * The data needed to update a FeaturedItem.
     */
    data: XOR<FeaturedItemUpdateInput, FeaturedItemUncheckedUpdateInput>
    /**
     * Choose, which FeaturedItem to update.
     */
    where: FeaturedItemWhereUniqueInput
  }

  /**
   * FeaturedItem updateMany
   */
  export type FeaturedItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeaturedItems.
     */
    data: XOR<FeaturedItemUpdateManyMutationInput, FeaturedItemUncheckedUpdateManyInput>
    /**
     * Filter which FeaturedItems to update
     */
    where?: FeaturedItemWhereInput
    /**
     * Limit how many FeaturedItems to update.
     */
    limit?: number
  }

  /**
   * FeaturedItem updateManyAndReturn
   */
  export type FeaturedItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedItem
     */
    select?: FeaturedItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedItem
     */
    omit?: FeaturedItemOmit<ExtArgs> | null
    /**
     * The data used to update FeaturedItems.
     */
    data: XOR<FeaturedItemUpdateManyMutationInput, FeaturedItemUncheckedUpdateManyInput>
    /**
     * Filter which FeaturedItems to update
     */
    where?: FeaturedItemWhereInput
    /**
     * Limit how many FeaturedItems to update.
     */
    limit?: number
  }

  /**
   * FeaturedItem upsert
   */
  export type FeaturedItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedItem
     */
    select?: FeaturedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedItem
     */
    omit?: FeaturedItemOmit<ExtArgs> | null
    /**
     * The filter to search for the FeaturedItem to update in case it exists.
     */
    where: FeaturedItemWhereUniqueInput
    /**
     * In case the FeaturedItem found by the `where` argument doesn't exist, create a new FeaturedItem with this data.
     */
    create: XOR<FeaturedItemCreateInput, FeaturedItemUncheckedCreateInput>
    /**
     * In case the FeaturedItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeaturedItemUpdateInput, FeaturedItemUncheckedUpdateInput>
  }

  /**
   * FeaturedItem delete
   */
  export type FeaturedItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedItem
     */
    select?: FeaturedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedItem
     */
    omit?: FeaturedItemOmit<ExtArgs> | null
    /**
     * Filter which FeaturedItem to delete.
     */
    where: FeaturedItemWhereUniqueInput
  }

  /**
   * FeaturedItem deleteMany
   */
  export type FeaturedItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeaturedItems to delete
     */
    where?: FeaturedItemWhereInput
    /**
     * Limit how many FeaturedItems to delete.
     */
    limit?: number
  }

  /**
   * FeaturedItem without action
   */
  export type FeaturedItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedItem
     */
    select?: FeaturedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedItem
     */
    omit?: FeaturedItemOmit<ExtArgs> | null
  }


  /**
   * Model News
   */

  export type AggregateNews = {
    _count: NewsCountAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  export type NewsMinAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    category: string | null
    category_tr: string | null
    category_en: string | null
    category_de: string | null
    category_ru: string | null
    title_tr: string | null
    title_en: string | null
    title_de: string | null
    title_ru: string | null
    content_tr: string | null
    content_en: string | null
    content_de: string | null
    content_ru: string | null
    description_tr: string | null
    description_en: string | null
    description_de: string | null
    description_ru: string | null
    publishedAt: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsMaxAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    category: string | null
    category_tr: string | null
    category_en: string | null
    category_de: string | null
    category_ru: string | null
    title_tr: string | null
    title_en: string | null
    title_de: string | null
    title_ru: string | null
    content_tr: string | null
    content_en: string | null
    content_de: string | null
    content_ru: string | null
    description_tr: string | null
    description_en: string | null
    description_de: string | null
    description_ru: string | null
    publishedAt: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsCountAggregateOutputType = {
    id: number
    imageUrl: number
    category: number
    category_tr: number
    category_en: number
    category_de: number
    category_ru: number
    galleryUrls: number
    title_tr: number
    title_en: number
    title_de: number
    title_ru: number
    content_tr: number
    content_en: number
    content_de: number
    content_ru: number
    description_tr: number
    description_en: number
    description_de: number
    description_ru: number
    publishedAt: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NewsMinAggregateInputType = {
    id?: true
    imageUrl?: true
    category?: true
    category_tr?: true
    category_en?: true
    category_de?: true
    category_ru?: true
    title_tr?: true
    title_en?: true
    title_de?: true
    title_ru?: true
    content_tr?: true
    content_en?: true
    content_de?: true
    content_ru?: true
    description_tr?: true
    description_en?: true
    description_de?: true
    description_ru?: true
    publishedAt?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    category?: true
    category_tr?: true
    category_en?: true
    category_de?: true
    category_ru?: true
    title_tr?: true
    title_en?: true
    title_de?: true
    title_ru?: true
    content_tr?: true
    content_en?: true
    content_de?: true
    content_ru?: true
    description_tr?: true
    description_en?: true
    description_de?: true
    description_ru?: true
    publishedAt?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsCountAggregateInputType = {
    id?: true
    imageUrl?: true
    category?: true
    category_tr?: true
    category_en?: true
    category_de?: true
    category_ru?: true
    galleryUrls?: true
    title_tr?: true
    title_en?: true
    title_de?: true
    title_ru?: true
    content_tr?: true
    content_en?: true
    content_de?: true
    content_ru?: true
    description_tr?: true
    description_en?: true
    description_de?: true
    description_ru?: true
    publishedAt?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to aggregate.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned News
    **/
    _count?: true | NewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsMaxAggregateInputType
  }

  export type GetNewsAggregateType<T extends NewsAggregateArgs> = {
        [P in keyof T & keyof AggregateNews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNews[P]>
      : GetScalarType<T[P], AggregateNews[P]>
  }




  export type NewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithAggregationInput | NewsOrderByWithAggregationInput[]
    by: NewsScalarFieldEnum[] | NewsScalarFieldEnum
    having?: NewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsCountAggregateInputType | true
    _min?: NewsMinAggregateInputType
    _max?: NewsMaxAggregateInputType
  }

  export type NewsGroupByOutputType = {
    id: string
    imageUrl: string
    category: string | null
    category_tr: string | null
    category_en: string | null
    category_de: string | null
    category_ru: string | null
    galleryUrls: string[]
    title_tr: string
    title_en: string
    title_de: string
    title_ru: string
    content_tr: string
    content_en: string
    content_de: string
    content_ru: string
    description_tr: string | null
    description_en: string | null
    description_de: string | null
    description_ru: string | null
    publishedAt: Date
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: NewsCountAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  type GetNewsGroupByPayload<T extends NewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsGroupByOutputType[P]>
            : GetScalarType<T[P], NewsGroupByOutputType[P]>
        }
      >
    >


  export type NewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    category?: boolean
    category_tr?: boolean
    category_en?: boolean
    category_de?: boolean
    category_ru?: boolean
    galleryUrls?: boolean
    title_tr?: boolean
    title_en?: boolean
    title_de?: boolean
    title_ru?: boolean
    content_tr?: boolean
    content_en?: boolean
    content_de?: boolean
    content_ru?: boolean
    description_tr?: boolean
    description_en?: boolean
    description_de?: boolean
    description_ru?: boolean
    publishedAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["news"]>

  export type NewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    category?: boolean
    category_tr?: boolean
    category_en?: boolean
    category_de?: boolean
    category_ru?: boolean
    galleryUrls?: boolean
    title_tr?: boolean
    title_en?: boolean
    title_de?: boolean
    title_ru?: boolean
    content_tr?: boolean
    content_en?: boolean
    content_de?: boolean
    content_ru?: boolean
    description_tr?: boolean
    description_en?: boolean
    description_de?: boolean
    description_ru?: boolean
    publishedAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["news"]>

  export type NewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    category?: boolean
    category_tr?: boolean
    category_en?: boolean
    category_de?: boolean
    category_ru?: boolean
    galleryUrls?: boolean
    title_tr?: boolean
    title_en?: boolean
    title_de?: boolean
    title_ru?: boolean
    content_tr?: boolean
    content_en?: boolean
    content_de?: boolean
    content_ru?: boolean
    description_tr?: boolean
    description_en?: boolean
    description_de?: boolean
    description_ru?: boolean
    publishedAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["news"]>

  export type NewsSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    category?: boolean
    category_tr?: boolean
    category_en?: boolean
    category_de?: boolean
    category_ru?: boolean
    galleryUrls?: boolean
    title_tr?: boolean
    title_en?: boolean
    title_de?: boolean
    title_ru?: boolean
    content_tr?: boolean
    content_en?: boolean
    content_de?: boolean
    content_ru?: boolean
    description_tr?: boolean
    description_en?: boolean
    description_de?: boolean
    description_ru?: boolean
    publishedAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "category" | "category_tr" | "category_en" | "category_de" | "category_ru" | "galleryUrls" | "title_tr" | "title_en" | "title_de" | "title_ru" | "content_tr" | "content_en" | "content_de" | "content_ru" | "description_tr" | "description_en" | "description_de" | "description_ru" | "publishedAt" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["news"]>

  export type $NewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "News"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageUrl: string
      category: string | null
      category_tr: string | null
      category_en: string | null
      category_de: string | null
      category_ru: string | null
      galleryUrls: string[]
      title_tr: string
      title_en: string
      title_de: string
      title_ru: string
      content_tr: string
      content_en: string
      content_de: string
      content_ru: string
      description_tr: string | null
      description_en: string | null
      description_de: string | null
      description_ru: string | null
      publishedAt: Date
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["news"]>
    composites: {}
  }

  type NewsGetPayload<S extends boolean | null | undefined | NewsDefaultArgs> = $Result.GetResult<Prisma.$NewsPayload, S>

  type NewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsCountAggregateInputType | true
    }

  export interface NewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['News'], meta: { name: 'News' } }
    /**
     * Find zero or one News that matches the filter.
     * @param {NewsFindUniqueArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsFindUniqueArgs>(args: SelectSubset<T, NewsFindUniqueArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one News that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsFindUniqueOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsFindFirstArgs>(args?: SelectSubset<T, NewsFindFirstArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all News
     * const news = await prisma.news.findMany()
     * 
     * // Get first 10 News
     * const news = await prisma.news.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsWithIdOnly = await prisma.news.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsFindManyArgs>(args?: SelectSubset<T, NewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a News.
     * @param {NewsCreateArgs} args - Arguments to create a News.
     * @example
     * // Create one News
     * const News = await prisma.news.create({
     *   data: {
     *     // ... data to create a News
     *   }
     * })
     * 
     */
    create<T extends NewsCreateArgs>(args: SelectSubset<T, NewsCreateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many News.
     * @param {NewsCreateManyArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsCreateManyArgs>(args?: SelectSubset<T, NewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many News and returns the data saved in the database.
     * @param {NewsCreateManyAndReturnArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many News and only return the `id`
     * const newsWithIdOnly = await prisma.news.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a News.
     * @param {NewsDeleteArgs} args - Arguments to delete one News.
     * @example
     * // Delete one News
     * const News = await prisma.news.delete({
     *   where: {
     *     // ... filter to delete one News
     *   }
     * })
     * 
     */
    delete<T extends NewsDeleteArgs>(args: SelectSubset<T, NewsDeleteArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one News.
     * @param {NewsUpdateArgs} args - Arguments to update one News.
     * @example
     * // Update one News
     * const news = await prisma.news.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsUpdateArgs>(args: SelectSubset<T, NewsUpdateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more News.
     * @param {NewsDeleteManyArgs} args - Arguments to filter News to delete.
     * @example
     * // Delete a few News
     * const { count } = await prisma.news.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsDeleteManyArgs>(args?: SelectSubset<T, NewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many News
     * const news = await prisma.news.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsUpdateManyArgs>(args: SelectSubset<T, NewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News and returns the data updated in the database.
     * @param {NewsUpdateManyAndReturnArgs} args - Arguments to update many News.
     * @example
     * // Update many News
     * const news = await prisma.news.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more News and only return the `id`
     * const newsWithIdOnly = await prisma.news.updateManyAndReturn({
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
    updateManyAndReturn<T extends NewsUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one News.
     * @param {NewsUpsertArgs} args - Arguments to update or create a News.
     * @example
     * // Update or create a News
     * const news = await prisma.news.upsert({
     *   create: {
     *     // ... data to create a News
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the News we want to update
     *   }
     * })
     */
    upsert<T extends NewsUpsertArgs>(args: SelectSubset<T, NewsUpsertArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCountArgs} args - Arguments to filter News to count.
     * @example
     * // Count the number of News
     * const count = await prisma.news.count({
     *   where: {
     *     // ... the filter for the News we want to count
     *   }
     * })
    **/
    count<T extends NewsCountArgs>(
      args?: Subset<T, NewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsAggregateArgs>(args: Subset<T, NewsAggregateArgs>): Prisma.PrismaPromise<GetNewsAggregateType<T>>

    /**
     * Group by News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsGroupByArgs} args - Group by arguments.
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
      T extends NewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsGroupByArgs['orderBy'] }
        : { orderBy?: NewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the News model
   */
  readonly fields: NewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for News.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the News model
   */
  interface NewsFieldRefs {
    readonly id: FieldRef<"News", 'String'>
    readonly imageUrl: FieldRef<"News", 'String'>
    readonly category: FieldRef<"News", 'String'>
    readonly category_tr: FieldRef<"News", 'String'>
    readonly category_en: FieldRef<"News", 'String'>
    readonly category_de: FieldRef<"News", 'String'>
    readonly category_ru: FieldRef<"News", 'String'>
    readonly galleryUrls: FieldRef<"News", 'String[]'>
    readonly title_tr: FieldRef<"News", 'String'>
    readonly title_en: FieldRef<"News", 'String'>
    readonly title_de: FieldRef<"News", 'String'>
    readonly title_ru: FieldRef<"News", 'String'>
    readonly content_tr: FieldRef<"News", 'String'>
    readonly content_en: FieldRef<"News", 'String'>
    readonly content_de: FieldRef<"News", 'String'>
    readonly content_ru: FieldRef<"News", 'String'>
    readonly description_tr: FieldRef<"News", 'String'>
    readonly description_en: FieldRef<"News", 'String'>
    readonly description_de: FieldRef<"News", 'String'>
    readonly description_ru: FieldRef<"News", 'String'>
    readonly publishedAt: FieldRef<"News", 'DateTime'>
    readonly isActive: FieldRef<"News", 'Boolean'>
    readonly createdAt: FieldRef<"News", 'DateTime'>
    readonly updatedAt: FieldRef<"News", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * News findUnique
   */
  export type NewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findUniqueOrThrow
   */
  export type NewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findFirst
   */
  export type NewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findFirstOrThrow
   */
  export type NewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findMany
   */
  export type NewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News create
   */
  export type NewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data needed to create a News.
     */
    data: XOR<NewsCreateInput, NewsUncheckedCreateInput>
  }

  /**
   * News createMany
   */
  export type NewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * News createManyAndReturn
   */
  export type NewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * News update
   */
  export type NewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data needed to update a News.
     */
    data: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
    /**
     * Choose, which News to update.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News updateMany
   */
  export type NewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
  }

  /**
   * News updateManyAndReturn
   */
  export type NewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
  }

  /**
   * News upsert
   */
  export type NewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The filter to search for the News to update in case it exists.
     */
    where: NewsWhereUniqueInput
    /**
     * In case the News found by the `where` argument doesn't exist, create a new News with this data.
     */
    create: XOR<NewsCreateInput, NewsUncheckedCreateInput>
    /**
     * In case the News was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
  }

  /**
   * News delete
   */
  export type NewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Filter which News to delete.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News deleteMany
   */
  export type NewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to delete
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to delete.
     */
    limit?: number
  }

  /**
   * News without action
   */
  export type NewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
  }


  /**
   * Model AboutPage
   */

  export type AggregateAboutPage = {
    _count: AboutPageCountAggregateOutputType | null
    _min: AboutPageMinAggregateOutputType | null
    _max: AboutPageMaxAggregateOutputType | null
  }

  export type AboutPageMinAggregateOutputType = {
    id: string | null
    intro_title_tr: string | null
    intro_title_en: string | null
    intro_title_de: string | null
    intro_title_ru: string | null
    intro_text_tr: string | null
    intro_text_en: string | null
    intro_text_de: string | null
    intro_text_ru: string | null
    vision_imageUrl: string | null
    vision_title_tr: string | null
    vision_title_en: string | null
    vision_title_de: string | null
    vision_title_ru: string | null
    vision_slogan_tr: string | null
    vision_slogan_en: string | null
    vision_slogan_de: string | null
    vision_slogan_ru: string | null
    vision_text_tr: string | null
    vision_text_en: string | null
    vision_text_de: string | null
    vision_text_ru: string | null
    mission_imageUrl: string | null
    mission_title_tr: string | null
    mission_title_en: string | null
    mission_title_de: string | null
    mission_title_ru: string | null
    mission_slogan_tr: string | null
    mission_slogan_en: string | null
    mission_slogan_de: string | null
    mission_slogan_ru: string | null
    mission_text_tr: string | null
    mission_text_en: string | null
    mission_text_de: string | null
    mission_text_ru: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AboutPageMaxAggregateOutputType = {
    id: string | null
    intro_title_tr: string | null
    intro_title_en: string | null
    intro_title_de: string | null
    intro_title_ru: string | null
    intro_text_tr: string | null
    intro_text_en: string | null
    intro_text_de: string | null
    intro_text_ru: string | null
    vision_imageUrl: string | null
    vision_title_tr: string | null
    vision_title_en: string | null
    vision_title_de: string | null
    vision_title_ru: string | null
    vision_slogan_tr: string | null
    vision_slogan_en: string | null
    vision_slogan_de: string | null
    vision_slogan_ru: string | null
    vision_text_tr: string | null
    vision_text_en: string | null
    vision_text_de: string | null
    vision_text_ru: string | null
    mission_imageUrl: string | null
    mission_title_tr: string | null
    mission_title_en: string | null
    mission_title_de: string | null
    mission_title_ru: string | null
    mission_slogan_tr: string | null
    mission_slogan_en: string | null
    mission_slogan_de: string | null
    mission_slogan_ru: string | null
    mission_text_tr: string | null
    mission_text_en: string | null
    mission_text_de: string | null
    mission_text_ru: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AboutPageCountAggregateOutputType = {
    id: number
    intro_title_tr: number
    intro_title_en: number
    intro_title_de: number
    intro_title_ru: number
    intro_text_tr: number
    intro_text_en: number
    intro_text_de: number
    intro_text_ru: number
    vision_imageUrl: number
    vision_title_tr: number
    vision_title_en: number
    vision_title_de: number
    vision_title_ru: number
    vision_slogan_tr: number
    vision_slogan_en: number
    vision_slogan_de: number
    vision_slogan_ru: number
    vision_text_tr: number
    vision_text_en: number
    vision_text_de: number
    vision_text_ru: number
    mission_imageUrl: number
    mission_title_tr: number
    mission_title_en: number
    mission_title_de: number
    mission_title_ru: number
    mission_slogan_tr: number
    mission_slogan_en: number
    mission_slogan_de: number
    mission_slogan_ru: number
    mission_text_tr: number
    mission_text_en: number
    mission_text_de: number
    mission_text_ru: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AboutPageMinAggregateInputType = {
    id?: true
    intro_title_tr?: true
    intro_title_en?: true
    intro_title_de?: true
    intro_title_ru?: true
    intro_text_tr?: true
    intro_text_en?: true
    intro_text_de?: true
    intro_text_ru?: true
    vision_imageUrl?: true
    vision_title_tr?: true
    vision_title_en?: true
    vision_title_de?: true
    vision_title_ru?: true
    vision_slogan_tr?: true
    vision_slogan_en?: true
    vision_slogan_de?: true
    vision_slogan_ru?: true
    vision_text_tr?: true
    vision_text_en?: true
    vision_text_de?: true
    vision_text_ru?: true
    mission_imageUrl?: true
    mission_title_tr?: true
    mission_title_en?: true
    mission_title_de?: true
    mission_title_ru?: true
    mission_slogan_tr?: true
    mission_slogan_en?: true
    mission_slogan_de?: true
    mission_slogan_ru?: true
    mission_text_tr?: true
    mission_text_en?: true
    mission_text_de?: true
    mission_text_ru?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AboutPageMaxAggregateInputType = {
    id?: true
    intro_title_tr?: true
    intro_title_en?: true
    intro_title_de?: true
    intro_title_ru?: true
    intro_text_tr?: true
    intro_text_en?: true
    intro_text_de?: true
    intro_text_ru?: true
    vision_imageUrl?: true
    vision_title_tr?: true
    vision_title_en?: true
    vision_title_de?: true
    vision_title_ru?: true
    vision_slogan_tr?: true
    vision_slogan_en?: true
    vision_slogan_de?: true
    vision_slogan_ru?: true
    vision_text_tr?: true
    vision_text_en?: true
    vision_text_de?: true
    vision_text_ru?: true
    mission_imageUrl?: true
    mission_title_tr?: true
    mission_title_en?: true
    mission_title_de?: true
    mission_title_ru?: true
    mission_slogan_tr?: true
    mission_slogan_en?: true
    mission_slogan_de?: true
    mission_slogan_ru?: true
    mission_text_tr?: true
    mission_text_en?: true
    mission_text_de?: true
    mission_text_ru?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AboutPageCountAggregateInputType = {
    id?: true
    intro_title_tr?: true
    intro_title_en?: true
    intro_title_de?: true
    intro_title_ru?: true
    intro_text_tr?: true
    intro_text_en?: true
    intro_text_de?: true
    intro_text_ru?: true
    vision_imageUrl?: true
    vision_title_tr?: true
    vision_title_en?: true
    vision_title_de?: true
    vision_title_ru?: true
    vision_slogan_tr?: true
    vision_slogan_en?: true
    vision_slogan_de?: true
    vision_slogan_ru?: true
    vision_text_tr?: true
    vision_text_en?: true
    vision_text_de?: true
    vision_text_ru?: true
    mission_imageUrl?: true
    mission_title_tr?: true
    mission_title_en?: true
    mission_title_de?: true
    mission_title_ru?: true
    mission_slogan_tr?: true
    mission_slogan_en?: true
    mission_slogan_de?: true
    mission_slogan_ru?: true
    mission_text_tr?: true
    mission_text_en?: true
    mission_text_de?: true
    mission_text_ru?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AboutPageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutPage to aggregate.
     */
    where?: AboutPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutPages to fetch.
     */
    orderBy?: AboutPageOrderByWithRelationInput | AboutPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AboutPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AboutPages
    **/
    _count?: true | AboutPageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AboutPageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AboutPageMaxAggregateInputType
  }

  export type GetAboutPageAggregateType<T extends AboutPageAggregateArgs> = {
        [P in keyof T & keyof AggregateAboutPage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAboutPage[P]>
      : GetScalarType<T[P], AggregateAboutPage[P]>
  }




  export type AboutPageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AboutPageWhereInput
    orderBy?: AboutPageOrderByWithAggregationInput | AboutPageOrderByWithAggregationInput[]
    by: AboutPageScalarFieldEnum[] | AboutPageScalarFieldEnum
    having?: AboutPageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AboutPageCountAggregateInputType | true
    _min?: AboutPageMinAggregateInputType
    _max?: AboutPageMaxAggregateInputType
  }

  export type AboutPageGroupByOutputType = {
    id: string
    intro_title_tr: string
    intro_title_en: string
    intro_title_de: string
    intro_title_ru: string
    intro_text_tr: string
    intro_text_en: string
    intro_text_de: string
    intro_text_ru: string
    vision_imageUrl: string
    vision_title_tr: string
    vision_title_en: string
    vision_title_de: string
    vision_title_ru: string
    vision_slogan_tr: string
    vision_slogan_en: string
    vision_slogan_de: string
    vision_slogan_ru: string
    vision_text_tr: string
    vision_text_en: string
    vision_text_de: string
    vision_text_ru: string
    mission_imageUrl: string
    mission_title_tr: string
    mission_title_en: string
    mission_title_de: string
    mission_title_ru: string
    mission_slogan_tr: string
    mission_slogan_en: string
    mission_slogan_de: string
    mission_slogan_ru: string
    mission_text_tr: string
    mission_text_en: string
    mission_text_de: string
    mission_text_ru: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AboutPageCountAggregateOutputType | null
    _min: AboutPageMinAggregateOutputType | null
    _max: AboutPageMaxAggregateOutputType | null
  }

  type GetAboutPageGroupByPayload<T extends AboutPageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AboutPageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AboutPageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AboutPageGroupByOutputType[P]>
            : GetScalarType<T[P], AboutPageGroupByOutputType[P]>
        }
      >
    >


  export type AboutPageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    intro_title_tr?: boolean
    intro_title_en?: boolean
    intro_title_de?: boolean
    intro_title_ru?: boolean
    intro_text_tr?: boolean
    intro_text_en?: boolean
    intro_text_de?: boolean
    intro_text_ru?: boolean
    vision_imageUrl?: boolean
    vision_title_tr?: boolean
    vision_title_en?: boolean
    vision_title_de?: boolean
    vision_title_ru?: boolean
    vision_slogan_tr?: boolean
    vision_slogan_en?: boolean
    vision_slogan_de?: boolean
    vision_slogan_ru?: boolean
    vision_text_tr?: boolean
    vision_text_en?: boolean
    vision_text_de?: boolean
    vision_text_ru?: boolean
    mission_imageUrl?: boolean
    mission_title_tr?: boolean
    mission_title_en?: boolean
    mission_title_de?: boolean
    mission_title_ru?: boolean
    mission_slogan_tr?: boolean
    mission_slogan_en?: boolean
    mission_slogan_de?: boolean
    mission_slogan_ru?: boolean
    mission_text_tr?: boolean
    mission_text_en?: boolean
    mission_text_de?: boolean
    mission_text_ru?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aboutPage"]>

  export type AboutPageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    intro_title_tr?: boolean
    intro_title_en?: boolean
    intro_title_de?: boolean
    intro_title_ru?: boolean
    intro_text_tr?: boolean
    intro_text_en?: boolean
    intro_text_de?: boolean
    intro_text_ru?: boolean
    vision_imageUrl?: boolean
    vision_title_tr?: boolean
    vision_title_en?: boolean
    vision_title_de?: boolean
    vision_title_ru?: boolean
    vision_slogan_tr?: boolean
    vision_slogan_en?: boolean
    vision_slogan_de?: boolean
    vision_slogan_ru?: boolean
    vision_text_tr?: boolean
    vision_text_en?: boolean
    vision_text_de?: boolean
    vision_text_ru?: boolean
    mission_imageUrl?: boolean
    mission_title_tr?: boolean
    mission_title_en?: boolean
    mission_title_de?: boolean
    mission_title_ru?: boolean
    mission_slogan_tr?: boolean
    mission_slogan_en?: boolean
    mission_slogan_de?: boolean
    mission_slogan_ru?: boolean
    mission_text_tr?: boolean
    mission_text_en?: boolean
    mission_text_de?: boolean
    mission_text_ru?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aboutPage"]>

  export type AboutPageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    intro_title_tr?: boolean
    intro_title_en?: boolean
    intro_title_de?: boolean
    intro_title_ru?: boolean
    intro_text_tr?: boolean
    intro_text_en?: boolean
    intro_text_de?: boolean
    intro_text_ru?: boolean
    vision_imageUrl?: boolean
    vision_title_tr?: boolean
    vision_title_en?: boolean
    vision_title_de?: boolean
    vision_title_ru?: boolean
    vision_slogan_tr?: boolean
    vision_slogan_en?: boolean
    vision_slogan_de?: boolean
    vision_slogan_ru?: boolean
    vision_text_tr?: boolean
    vision_text_en?: boolean
    vision_text_de?: boolean
    vision_text_ru?: boolean
    mission_imageUrl?: boolean
    mission_title_tr?: boolean
    mission_title_en?: boolean
    mission_title_de?: boolean
    mission_title_ru?: boolean
    mission_slogan_tr?: boolean
    mission_slogan_en?: boolean
    mission_slogan_de?: boolean
    mission_slogan_ru?: boolean
    mission_text_tr?: boolean
    mission_text_en?: boolean
    mission_text_de?: boolean
    mission_text_ru?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aboutPage"]>

  export type AboutPageSelectScalar = {
    id?: boolean
    intro_title_tr?: boolean
    intro_title_en?: boolean
    intro_title_de?: boolean
    intro_title_ru?: boolean
    intro_text_tr?: boolean
    intro_text_en?: boolean
    intro_text_de?: boolean
    intro_text_ru?: boolean
    vision_imageUrl?: boolean
    vision_title_tr?: boolean
    vision_title_en?: boolean
    vision_title_de?: boolean
    vision_title_ru?: boolean
    vision_slogan_tr?: boolean
    vision_slogan_en?: boolean
    vision_slogan_de?: boolean
    vision_slogan_ru?: boolean
    vision_text_tr?: boolean
    vision_text_en?: boolean
    vision_text_de?: boolean
    vision_text_ru?: boolean
    mission_imageUrl?: boolean
    mission_title_tr?: boolean
    mission_title_en?: boolean
    mission_title_de?: boolean
    mission_title_ru?: boolean
    mission_slogan_tr?: boolean
    mission_slogan_en?: boolean
    mission_slogan_de?: boolean
    mission_slogan_ru?: boolean
    mission_text_tr?: boolean
    mission_text_en?: boolean
    mission_text_de?: boolean
    mission_text_ru?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AboutPageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "intro_title_tr" | "intro_title_en" | "intro_title_de" | "intro_title_ru" | "intro_text_tr" | "intro_text_en" | "intro_text_de" | "intro_text_ru" | "vision_imageUrl" | "vision_title_tr" | "vision_title_en" | "vision_title_de" | "vision_title_ru" | "vision_slogan_tr" | "vision_slogan_en" | "vision_slogan_de" | "vision_slogan_ru" | "vision_text_tr" | "vision_text_en" | "vision_text_de" | "vision_text_ru" | "mission_imageUrl" | "mission_title_tr" | "mission_title_en" | "mission_title_de" | "mission_title_ru" | "mission_slogan_tr" | "mission_slogan_en" | "mission_slogan_de" | "mission_slogan_ru" | "mission_text_tr" | "mission_text_en" | "mission_text_de" | "mission_text_ru" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["aboutPage"]>

  export type $AboutPagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AboutPage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      intro_title_tr: string
      intro_title_en: string
      intro_title_de: string
      intro_title_ru: string
      intro_text_tr: string
      intro_text_en: string
      intro_text_de: string
      intro_text_ru: string
      vision_imageUrl: string
      vision_title_tr: string
      vision_title_en: string
      vision_title_de: string
      vision_title_ru: string
      vision_slogan_tr: string
      vision_slogan_en: string
      vision_slogan_de: string
      vision_slogan_ru: string
      vision_text_tr: string
      vision_text_en: string
      vision_text_de: string
      vision_text_ru: string
      mission_imageUrl: string
      mission_title_tr: string
      mission_title_en: string
      mission_title_de: string
      mission_title_ru: string
      mission_slogan_tr: string
      mission_slogan_en: string
      mission_slogan_de: string
      mission_slogan_ru: string
      mission_text_tr: string
      mission_text_en: string
      mission_text_de: string
      mission_text_ru: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aboutPage"]>
    composites: {}
  }

  type AboutPageGetPayload<S extends boolean | null | undefined | AboutPageDefaultArgs> = $Result.GetResult<Prisma.$AboutPagePayload, S>

  type AboutPageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AboutPageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AboutPageCountAggregateInputType | true
    }

  export interface AboutPageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AboutPage'], meta: { name: 'AboutPage' } }
    /**
     * Find zero or one AboutPage that matches the filter.
     * @param {AboutPageFindUniqueArgs} args - Arguments to find a AboutPage
     * @example
     * // Get one AboutPage
     * const aboutPage = await prisma.aboutPage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AboutPageFindUniqueArgs>(args: SelectSubset<T, AboutPageFindUniqueArgs<ExtArgs>>): Prisma__AboutPageClient<$Result.GetResult<Prisma.$AboutPagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AboutPage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AboutPageFindUniqueOrThrowArgs} args - Arguments to find a AboutPage
     * @example
     * // Get one AboutPage
     * const aboutPage = await prisma.aboutPage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AboutPageFindUniqueOrThrowArgs>(args: SelectSubset<T, AboutPageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AboutPageClient<$Result.GetResult<Prisma.$AboutPagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AboutPage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPageFindFirstArgs} args - Arguments to find a AboutPage
     * @example
     * // Get one AboutPage
     * const aboutPage = await prisma.aboutPage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AboutPageFindFirstArgs>(args?: SelectSubset<T, AboutPageFindFirstArgs<ExtArgs>>): Prisma__AboutPageClient<$Result.GetResult<Prisma.$AboutPagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AboutPage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPageFindFirstOrThrowArgs} args - Arguments to find a AboutPage
     * @example
     * // Get one AboutPage
     * const aboutPage = await prisma.aboutPage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AboutPageFindFirstOrThrowArgs>(args?: SelectSubset<T, AboutPageFindFirstOrThrowArgs<ExtArgs>>): Prisma__AboutPageClient<$Result.GetResult<Prisma.$AboutPagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AboutPages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AboutPages
     * const aboutPages = await prisma.aboutPage.findMany()
     * 
     * // Get first 10 AboutPages
     * const aboutPages = await prisma.aboutPage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aboutPageWithIdOnly = await prisma.aboutPage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AboutPageFindManyArgs>(args?: SelectSubset<T, AboutPageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutPagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AboutPage.
     * @param {AboutPageCreateArgs} args - Arguments to create a AboutPage.
     * @example
     * // Create one AboutPage
     * const AboutPage = await prisma.aboutPage.create({
     *   data: {
     *     // ... data to create a AboutPage
     *   }
     * })
     * 
     */
    create<T extends AboutPageCreateArgs>(args: SelectSubset<T, AboutPageCreateArgs<ExtArgs>>): Prisma__AboutPageClient<$Result.GetResult<Prisma.$AboutPagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AboutPages.
     * @param {AboutPageCreateManyArgs} args - Arguments to create many AboutPages.
     * @example
     * // Create many AboutPages
     * const aboutPage = await prisma.aboutPage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AboutPageCreateManyArgs>(args?: SelectSubset<T, AboutPageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AboutPages and returns the data saved in the database.
     * @param {AboutPageCreateManyAndReturnArgs} args - Arguments to create many AboutPages.
     * @example
     * // Create many AboutPages
     * const aboutPage = await prisma.aboutPage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AboutPages and only return the `id`
     * const aboutPageWithIdOnly = await prisma.aboutPage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AboutPageCreateManyAndReturnArgs>(args?: SelectSubset<T, AboutPageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutPagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AboutPage.
     * @param {AboutPageDeleteArgs} args - Arguments to delete one AboutPage.
     * @example
     * // Delete one AboutPage
     * const AboutPage = await prisma.aboutPage.delete({
     *   where: {
     *     // ... filter to delete one AboutPage
     *   }
     * })
     * 
     */
    delete<T extends AboutPageDeleteArgs>(args: SelectSubset<T, AboutPageDeleteArgs<ExtArgs>>): Prisma__AboutPageClient<$Result.GetResult<Prisma.$AboutPagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AboutPage.
     * @param {AboutPageUpdateArgs} args - Arguments to update one AboutPage.
     * @example
     * // Update one AboutPage
     * const aboutPage = await prisma.aboutPage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AboutPageUpdateArgs>(args: SelectSubset<T, AboutPageUpdateArgs<ExtArgs>>): Prisma__AboutPageClient<$Result.GetResult<Prisma.$AboutPagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AboutPages.
     * @param {AboutPageDeleteManyArgs} args - Arguments to filter AboutPages to delete.
     * @example
     * // Delete a few AboutPages
     * const { count } = await prisma.aboutPage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AboutPageDeleteManyArgs>(args?: SelectSubset<T, AboutPageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AboutPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AboutPages
     * const aboutPage = await prisma.aboutPage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AboutPageUpdateManyArgs>(args: SelectSubset<T, AboutPageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AboutPages and returns the data updated in the database.
     * @param {AboutPageUpdateManyAndReturnArgs} args - Arguments to update many AboutPages.
     * @example
     * // Update many AboutPages
     * const aboutPage = await prisma.aboutPage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AboutPages and only return the `id`
     * const aboutPageWithIdOnly = await prisma.aboutPage.updateManyAndReturn({
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
    updateManyAndReturn<T extends AboutPageUpdateManyAndReturnArgs>(args: SelectSubset<T, AboutPageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutPagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AboutPage.
     * @param {AboutPageUpsertArgs} args - Arguments to update or create a AboutPage.
     * @example
     * // Update or create a AboutPage
     * const aboutPage = await prisma.aboutPage.upsert({
     *   create: {
     *     // ... data to create a AboutPage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AboutPage we want to update
     *   }
     * })
     */
    upsert<T extends AboutPageUpsertArgs>(args: SelectSubset<T, AboutPageUpsertArgs<ExtArgs>>): Prisma__AboutPageClient<$Result.GetResult<Prisma.$AboutPagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AboutPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPageCountArgs} args - Arguments to filter AboutPages to count.
     * @example
     * // Count the number of AboutPages
     * const count = await prisma.aboutPage.count({
     *   where: {
     *     // ... the filter for the AboutPages we want to count
     *   }
     * })
    **/
    count<T extends AboutPageCountArgs>(
      args?: Subset<T, AboutPageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AboutPageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AboutPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AboutPageAggregateArgs>(args: Subset<T, AboutPageAggregateArgs>): Prisma.PrismaPromise<GetAboutPageAggregateType<T>>

    /**
     * Group by AboutPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutPageGroupByArgs} args - Group by arguments.
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
      T extends AboutPageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AboutPageGroupByArgs['orderBy'] }
        : { orderBy?: AboutPageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AboutPageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAboutPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AboutPage model
   */
  readonly fields: AboutPageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AboutPage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AboutPageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the AboutPage model
   */
  interface AboutPageFieldRefs {
    readonly id: FieldRef<"AboutPage", 'String'>
    readonly intro_title_tr: FieldRef<"AboutPage", 'String'>
    readonly intro_title_en: FieldRef<"AboutPage", 'String'>
    readonly intro_title_de: FieldRef<"AboutPage", 'String'>
    readonly intro_title_ru: FieldRef<"AboutPage", 'String'>
    readonly intro_text_tr: FieldRef<"AboutPage", 'String'>
    readonly intro_text_en: FieldRef<"AboutPage", 'String'>
    readonly intro_text_de: FieldRef<"AboutPage", 'String'>
    readonly intro_text_ru: FieldRef<"AboutPage", 'String'>
    readonly vision_imageUrl: FieldRef<"AboutPage", 'String'>
    readonly vision_title_tr: FieldRef<"AboutPage", 'String'>
    readonly vision_title_en: FieldRef<"AboutPage", 'String'>
    readonly vision_title_de: FieldRef<"AboutPage", 'String'>
    readonly vision_title_ru: FieldRef<"AboutPage", 'String'>
    readonly vision_slogan_tr: FieldRef<"AboutPage", 'String'>
    readonly vision_slogan_en: FieldRef<"AboutPage", 'String'>
    readonly vision_slogan_de: FieldRef<"AboutPage", 'String'>
    readonly vision_slogan_ru: FieldRef<"AboutPage", 'String'>
    readonly vision_text_tr: FieldRef<"AboutPage", 'String'>
    readonly vision_text_en: FieldRef<"AboutPage", 'String'>
    readonly vision_text_de: FieldRef<"AboutPage", 'String'>
    readonly vision_text_ru: FieldRef<"AboutPage", 'String'>
    readonly mission_imageUrl: FieldRef<"AboutPage", 'String'>
    readonly mission_title_tr: FieldRef<"AboutPage", 'String'>
    readonly mission_title_en: FieldRef<"AboutPage", 'String'>
    readonly mission_title_de: FieldRef<"AboutPage", 'String'>
    readonly mission_title_ru: FieldRef<"AboutPage", 'String'>
    readonly mission_slogan_tr: FieldRef<"AboutPage", 'String'>
    readonly mission_slogan_en: FieldRef<"AboutPage", 'String'>
    readonly mission_slogan_de: FieldRef<"AboutPage", 'String'>
    readonly mission_slogan_ru: FieldRef<"AboutPage", 'String'>
    readonly mission_text_tr: FieldRef<"AboutPage", 'String'>
    readonly mission_text_en: FieldRef<"AboutPage", 'String'>
    readonly mission_text_de: FieldRef<"AboutPage", 'String'>
    readonly mission_text_ru: FieldRef<"AboutPage", 'String'>
    readonly isActive: FieldRef<"AboutPage", 'Boolean'>
    readonly createdAt: FieldRef<"AboutPage", 'DateTime'>
    readonly updatedAt: FieldRef<"AboutPage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AboutPage findUnique
   */
  export type AboutPageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPage
     */
    select?: AboutPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPage
     */
    omit?: AboutPageOmit<ExtArgs> | null
    /**
     * Filter, which AboutPage to fetch.
     */
    where: AboutPageWhereUniqueInput
  }

  /**
   * AboutPage findUniqueOrThrow
   */
  export type AboutPageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPage
     */
    select?: AboutPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPage
     */
    omit?: AboutPageOmit<ExtArgs> | null
    /**
     * Filter, which AboutPage to fetch.
     */
    where: AboutPageWhereUniqueInput
  }

  /**
   * AboutPage findFirst
   */
  export type AboutPageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPage
     */
    select?: AboutPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPage
     */
    omit?: AboutPageOmit<ExtArgs> | null
    /**
     * Filter, which AboutPage to fetch.
     */
    where?: AboutPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutPages to fetch.
     */
    orderBy?: AboutPageOrderByWithRelationInput | AboutPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutPages.
     */
    cursor?: AboutPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutPages.
     */
    distinct?: AboutPageScalarFieldEnum | AboutPageScalarFieldEnum[]
  }

  /**
   * AboutPage findFirstOrThrow
   */
  export type AboutPageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPage
     */
    select?: AboutPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPage
     */
    omit?: AboutPageOmit<ExtArgs> | null
    /**
     * Filter, which AboutPage to fetch.
     */
    where?: AboutPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutPages to fetch.
     */
    orderBy?: AboutPageOrderByWithRelationInput | AboutPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutPages.
     */
    cursor?: AboutPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutPages.
     */
    distinct?: AboutPageScalarFieldEnum | AboutPageScalarFieldEnum[]
  }

  /**
   * AboutPage findMany
   */
  export type AboutPageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPage
     */
    select?: AboutPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPage
     */
    omit?: AboutPageOmit<ExtArgs> | null
    /**
     * Filter, which AboutPages to fetch.
     */
    where?: AboutPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutPages to fetch.
     */
    orderBy?: AboutPageOrderByWithRelationInput | AboutPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AboutPages.
     */
    cursor?: AboutPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutPages.
     */
    skip?: number
    distinct?: AboutPageScalarFieldEnum | AboutPageScalarFieldEnum[]
  }

  /**
   * AboutPage create
   */
  export type AboutPageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPage
     */
    select?: AboutPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPage
     */
    omit?: AboutPageOmit<ExtArgs> | null
    /**
     * The data needed to create a AboutPage.
     */
    data: XOR<AboutPageCreateInput, AboutPageUncheckedCreateInput>
  }

  /**
   * AboutPage createMany
   */
  export type AboutPageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AboutPages.
     */
    data: AboutPageCreateManyInput | AboutPageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutPage createManyAndReturn
   */
  export type AboutPageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPage
     */
    select?: AboutPageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPage
     */
    omit?: AboutPageOmit<ExtArgs> | null
    /**
     * The data used to create many AboutPages.
     */
    data: AboutPageCreateManyInput | AboutPageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutPage update
   */
  export type AboutPageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPage
     */
    select?: AboutPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPage
     */
    omit?: AboutPageOmit<ExtArgs> | null
    /**
     * The data needed to update a AboutPage.
     */
    data: XOR<AboutPageUpdateInput, AboutPageUncheckedUpdateInput>
    /**
     * Choose, which AboutPage to update.
     */
    where: AboutPageWhereUniqueInput
  }

  /**
   * AboutPage updateMany
   */
  export type AboutPageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AboutPages.
     */
    data: XOR<AboutPageUpdateManyMutationInput, AboutPageUncheckedUpdateManyInput>
    /**
     * Filter which AboutPages to update
     */
    where?: AboutPageWhereInput
    /**
     * Limit how many AboutPages to update.
     */
    limit?: number
  }

  /**
   * AboutPage updateManyAndReturn
   */
  export type AboutPageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPage
     */
    select?: AboutPageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPage
     */
    omit?: AboutPageOmit<ExtArgs> | null
    /**
     * The data used to update AboutPages.
     */
    data: XOR<AboutPageUpdateManyMutationInput, AboutPageUncheckedUpdateManyInput>
    /**
     * Filter which AboutPages to update
     */
    where?: AboutPageWhereInput
    /**
     * Limit how many AboutPages to update.
     */
    limit?: number
  }

  /**
   * AboutPage upsert
   */
  export type AboutPageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPage
     */
    select?: AboutPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPage
     */
    omit?: AboutPageOmit<ExtArgs> | null
    /**
     * The filter to search for the AboutPage to update in case it exists.
     */
    where: AboutPageWhereUniqueInput
    /**
     * In case the AboutPage found by the `where` argument doesn't exist, create a new AboutPage with this data.
     */
    create: XOR<AboutPageCreateInput, AboutPageUncheckedCreateInput>
    /**
     * In case the AboutPage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AboutPageUpdateInput, AboutPageUncheckedUpdateInput>
  }

  /**
   * AboutPage delete
   */
  export type AboutPageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPage
     */
    select?: AboutPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPage
     */
    omit?: AboutPageOmit<ExtArgs> | null
    /**
     * Filter which AboutPage to delete.
     */
    where: AboutPageWhereUniqueInput
  }

  /**
   * AboutPage deleteMany
   */
  export type AboutPageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutPages to delete
     */
    where?: AboutPageWhereInput
    /**
     * Limit how many AboutPages to delete.
     */
    limit?: number
  }

  /**
   * AboutPage without action
   */
  export type AboutPageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutPage
     */
    select?: AboutPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutPage
     */
    omit?: AboutPageOmit<ExtArgs> | null
  }


  /**
   * Model ContactInfo
   */

  export type AggregateContactInfo = {
    _count: ContactInfoCountAggregateOutputType | null
    _min: ContactInfoMinAggregateOutputType | null
    _max: ContactInfoMaxAggregateOutputType | null
  }

  export type ContactInfoMinAggregateOutputType = {
    id: string | null
    address_tr: string | null
    address_en: string | null
    address_de: string | null
    address_ru: string | null
    phone: string | null
    email: string | null
    locationUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactInfoMaxAggregateOutputType = {
    id: string | null
    address_tr: string | null
    address_en: string | null
    address_de: string | null
    address_ru: string | null
    phone: string | null
    email: string | null
    locationUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactInfoCountAggregateOutputType = {
    id: number
    address_tr: number
    address_en: number
    address_de: number
    address_ru: number
    phone: number
    email: number
    locationUrl: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactInfoMinAggregateInputType = {
    id?: true
    address_tr?: true
    address_en?: true
    address_de?: true
    address_ru?: true
    phone?: true
    email?: true
    locationUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactInfoMaxAggregateInputType = {
    id?: true
    address_tr?: true
    address_en?: true
    address_de?: true
    address_ru?: true
    phone?: true
    email?: true
    locationUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactInfoCountAggregateInputType = {
    id?: true
    address_tr?: true
    address_en?: true
    address_de?: true
    address_ru?: true
    phone?: true
    email?: true
    locationUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactInfo to aggregate.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactInfos
    **/
    _count?: true | ContactInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactInfoMaxAggregateInputType
  }

  export type GetContactInfoAggregateType<T extends ContactInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateContactInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactInfo[P]>
      : GetScalarType<T[P], AggregateContactInfo[P]>
  }




  export type ContactInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactInfoWhereInput
    orderBy?: ContactInfoOrderByWithAggregationInput | ContactInfoOrderByWithAggregationInput[]
    by: ContactInfoScalarFieldEnum[] | ContactInfoScalarFieldEnum
    having?: ContactInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactInfoCountAggregateInputType | true
    _min?: ContactInfoMinAggregateInputType
    _max?: ContactInfoMaxAggregateInputType
  }

  export type ContactInfoGroupByOutputType = {
    id: string
    address_tr: string
    address_en: string
    address_de: string
    address_ru: string
    phone: string
    email: string
    locationUrl: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ContactInfoCountAggregateOutputType | null
    _min: ContactInfoMinAggregateOutputType | null
    _max: ContactInfoMaxAggregateOutputType | null
  }

  type GetContactInfoGroupByPayload<T extends ContactInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactInfoGroupByOutputType[P]>
            : GetScalarType<T[P], ContactInfoGroupByOutputType[P]>
        }
      >
    >


  export type ContactInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address_tr?: boolean
    address_en?: boolean
    address_de?: boolean
    address_ru?: boolean
    phone?: boolean
    email?: boolean
    locationUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactInfo"]>

  export type ContactInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address_tr?: boolean
    address_en?: boolean
    address_de?: boolean
    address_ru?: boolean
    phone?: boolean
    email?: boolean
    locationUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactInfo"]>

  export type ContactInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address_tr?: boolean
    address_en?: boolean
    address_de?: boolean
    address_ru?: boolean
    phone?: boolean
    email?: boolean
    locationUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactInfo"]>

  export type ContactInfoSelectScalar = {
    id?: boolean
    address_tr?: boolean
    address_en?: boolean
    address_de?: boolean
    address_ru?: boolean
    phone?: boolean
    email?: boolean
    locationUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address_tr" | "address_en" | "address_de" | "address_ru" | "phone" | "email" | "locationUrl" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["contactInfo"]>

  export type $ContactInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactInfo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      address_tr: string
      address_en: string
      address_de: string
      address_ru: string
      phone: string
      email: string
      locationUrl: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contactInfo"]>
    composites: {}
  }

  type ContactInfoGetPayload<S extends boolean | null | undefined | ContactInfoDefaultArgs> = $Result.GetResult<Prisma.$ContactInfoPayload, S>

  type ContactInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactInfoCountAggregateInputType | true
    }

  export interface ContactInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactInfo'], meta: { name: 'ContactInfo' } }
    /**
     * Find zero or one ContactInfo that matches the filter.
     * @param {ContactInfoFindUniqueArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactInfoFindUniqueArgs>(args: SelectSubset<T, ContactInfoFindUniqueArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactInfoFindUniqueOrThrowArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoFindFirstArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactInfoFindFirstArgs>(args?: SelectSubset<T, ContactInfoFindFirstArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoFindFirstOrThrowArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactInfos
     * const contactInfos = await prisma.contactInfo.findMany()
     * 
     * // Get first 10 ContactInfos
     * const contactInfos = await prisma.contactInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactInfoWithIdOnly = await prisma.contactInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactInfoFindManyArgs>(args?: SelectSubset<T, ContactInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactInfo.
     * @param {ContactInfoCreateArgs} args - Arguments to create a ContactInfo.
     * @example
     * // Create one ContactInfo
     * const ContactInfo = await prisma.contactInfo.create({
     *   data: {
     *     // ... data to create a ContactInfo
     *   }
     * })
     * 
     */
    create<T extends ContactInfoCreateArgs>(args: SelectSubset<T, ContactInfoCreateArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactInfos.
     * @param {ContactInfoCreateManyArgs} args - Arguments to create many ContactInfos.
     * @example
     * // Create many ContactInfos
     * const contactInfo = await prisma.contactInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactInfoCreateManyArgs>(args?: SelectSubset<T, ContactInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactInfos and returns the data saved in the database.
     * @param {ContactInfoCreateManyAndReturnArgs} args - Arguments to create many ContactInfos.
     * @example
     * // Create many ContactInfos
     * const contactInfo = await prisma.contactInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactInfos and only return the `id`
     * const contactInfoWithIdOnly = await prisma.contactInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactInfo.
     * @param {ContactInfoDeleteArgs} args - Arguments to delete one ContactInfo.
     * @example
     * // Delete one ContactInfo
     * const ContactInfo = await prisma.contactInfo.delete({
     *   where: {
     *     // ... filter to delete one ContactInfo
     *   }
     * })
     * 
     */
    delete<T extends ContactInfoDeleteArgs>(args: SelectSubset<T, ContactInfoDeleteArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactInfo.
     * @param {ContactInfoUpdateArgs} args - Arguments to update one ContactInfo.
     * @example
     * // Update one ContactInfo
     * const contactInfo = await prisma.contactInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactInfoUpdateArgs>(args: SelectSubset<T, ContactInfoUpdateArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactInfos.
     * @param {ContactInfoDeleteManyArgs} args - Arguments to filter ContactInfos to delete.
     * @example
     * // Delete a few ContactInfos
     * const { count } = await prisma.contactInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactInfoDeleteManyArgs>(args?: SelectSubset<T, ContactInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactInfos
     * const contactInfo = await prisma.contactInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactInfoUpdateManyArgs>(args: SelectSubset<T, ContactInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactInfos and returns the data updated in the database.
     * @param {ContactInfoUpdateManyAndReturnArgs} args - Arguments to update many ContactInfos.
     * @example
     * // Update many ContactInfos
     * const contactInfo = await prisma.contactInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactInfos and only return the `id`
     * const contactInfoWithIdOnly = await prisma.contactInfo.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContactInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactInfo.
     * @param {ContactInfoUpsertArgs} args - Arguments to update or create a ContactInfo.
     * @example
     * // Update or create a ContactInfo
     * const contactInfo = await prisma.contactInfo.upsert({
     *   create: {
     *     // ... data to create a ContactInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactInfo we want to update
     *   }
     * })
     */
    upsert<T extends ContactInfoUpsertArgs>(args: SelectSubset<T, ContactInfoUpsertArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoCountArgs} args - Arguments to filter ContactInfos to count.
     * @example
     * // Count the number of ContactInfos
     * const count = await prisma.contactInfo.count({
     *   where: {
     *     // ... the filter for the ContactInfos we want to count
     *   }
     * })
    **/
    count<T extends ContactInfoCountArgs>(
      args?: Subset<T, ContactInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactInfoAggregateArgs>(args: Subset<T, ContactInfoAggregateArgs>): Prisma.PrismaPromise<GetContactInfoAggregateType<T>>

    /**
     * Group by ContactInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoGroupByArgs} args - Group by arguments.
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
      T extends ContactInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactInfoGroupByArgs['orderBy'] }
        : { orderBy?: ContactInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactInfo model
   */
  readonly fields: ContactInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ContactInfo model
   */
  interface ContactInfoFieldRefs {
    readonly id: FieldRef<"ContactInfo", 'String'>
    readonly address_tr: FieldRef<"ContactInfo", 'String'>
    readonly address_en: FieldRef<"ContactInfo", 'String'>
    readonly address_de: FieldRef<"ContactInfo", 'String'>
    readonly address_ru: FieldRef<"ContactInfo", 'String'>
    readonly phone: FieldRef<"ContactInfo", 'String'>
    readonly email: FieldRef<"ContactInfo", 'String'>
    readonly locationUrl: FieldRef<"ContactInfo", 'String'>
    readonly isActive: FieldRef<"ContactInfo", 'Boolean'>
    readonly createdAt: FieldRef<"ContactInfo", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactInfo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactInfo findUnique
   */
  export type ContactInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo findUniqueOrThrow
   */
  export type ContactInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo findFirst
   */
  export type ContactInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactInfos.
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactInfos.
     */
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * ContactInfo findFirstOrThrow
   */
  export type ContactInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactInfos.
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactInfos.
     */
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * ContactInfo findMany
   */
  export type ContactInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter, which ContactInfos to fetch.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactInfos.
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * ContactInfo create
   */
  export type ContactInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactInfo.
     */
    data: XOR<ContactInfoCreateInput, ContactInfoUncheckedCreateInput>
  }

  /**
   * ContactInfo createMany
   */
  export type ContactInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactInfos.
     */
    data: ContactInfoCreateManyInput | ContactInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactInfo createManyAndReturn
   */
  export type ContactInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * The data used to create many ContactInfos.
     */
    data: ContactInfoCreateManyInput | ContactInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactInfo update
   */
  export type ContactInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactInfo.
     */
    data: XOR<ContactInfoUpdateInput, ContactInfoUncheckedUpdateInput>
    /**
     * Choose, which ContactInfo to update.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo updateMany
   */
  export type ContactInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactInfos.
     */
    data: XOR<ContactInfoUpdateManyMutationInput, ContactInfoUncheckedUpdateManyInput>
    /**
     * Filter which ContactInfos to update
     */
    where?: ContactInfoWhereInput
    /**
     * Limit how many ContactInfos to update.
     */
    limit?: number
  }

  /**
   * ContactInfo updateManyAndReturn
   */
  export type ContactInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * The data used to update ContactInfos.
     */
    data: XOR<ContactInfoUpdateManyMutationInput, ContactInfoUncheckedUpdateManyInput>
    /**
     * Filter which ContactInfos to update
     */
    where?: ContactInfoWhereInput
    /**
     * Limit how many ContactInfos to update.
     */
    limit?: number
  }

  /**
   * ContactInfo upsert
   */
  export type ContactInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactInfo to update in case it exists.
     */
    where: ContactInfoWhereUniqueInput
    /**
     * In case the ContactInfo found by the `where` argument doesn't exist, create a new ContactInfo with this data.
     */
    create: XOR<ContactInfoCreateInput, ContactInfoUncheckedCreateInput>
    /**
     * In case the ContactInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactInfoUpdateInput, ContactInfoUncheckedUpdateInput>
  }

  /**
   * ContactInfo delete
   */
  export type ContactInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter which ContactInfo to delete.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo deleteMany
   */
  export type ContactInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactInfos to delete
     */
    where?: ContactInfoWhereInput
    /**
     * Limit how many ContactInfos to delete.
     */
    limit?: number
  }

  /**
   * ContactInfo without action
   */
  export type ContactInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
  }


  /**
   * Model FAQ
   */

  export type AggregateFAQ = {
    _count: FAQCountAggregateOutputType | null
    _avg: FAQAvgAggregateOutputType | null
    _sum: FAQSumAggregateOutputType | null
    _min: FAQMinAggregateOutputType | null
    _max: FAQMaxAggregateOutputType | null
  }

  export type FAQAvgAggregateOutputType = {
    order: number | null
  }

  export type FAQSumAggregateOutputType = {
    order: number | null
  }

  export type FAQMinAggregateOutputType = {
    id: string | null
    question_tr: string | null
    question_en: string | null
    question_de: string | null
    question_ru: string | null
    answer_tr: string | null
    answer_en: string | null
    answer_de: string | null
    answer_ru: string | null
    order: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FAQMaxAggregateOutputType = {
    id: string | null
    question_tr: string | null
    question_en: string | null
    question_de: string | null
    question_ru: string | null
    answer_tr: string | null
    answer_en: string | null
    answer_de: string | null
    answer_ru: string | null
    order: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FAQCountAggregateOutputType = {
    id: number
    question_tr: number
    question_en: number
    question_de: number
    question_ru: number
    answer_tr: number
    answer_en: number
    answer_de: number
    answer_ru: number
    order: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FAQAvgAggregateInputType = {
    order?: true
  }

  export type FAQSumAggregateInputType = {
    order?: true
  }

  export type FAQMinAggregateInputType = {
    id?: true
    question_tr?: true
    question_en?: true
    question_de?: true
    question_ru?: true
    answer_tr?: true
    answer_en?: true
    answer_de?: true
    answer_ru?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FAQMaxAggregateInputType = {
    id?: true
    question_tr?: true
    question_en?: true
    question_de?: true
    question_ru?: true
    answer_tr?: true
    answer_en?: true
    answer_de?: true
    answer_ru?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FAQCountAggregateInputType = {
    id?: true
    question_tr?: true
    question_en?: true
    question_de?: true
    question_ru?: true
    answer_tr?: true
    answer_en?: true
    answer_de?: true
    answer_ru?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FAQAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FAQ to aggregate.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FAQS
    **/
    _count?: true | FAQCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FAQAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FAQSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FAQMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FAQMaxAggregateInputType
  }

  export type GetFAQAggregateType<T extends FAQAggregateArgs> = {
        [P in keyof T & keyof AggregateFAQ]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFAQ[P]>
      : GetScalarType<T[P], AggregateFAQ[P]>
  }




  export type FAQGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FAQWhereInput
    orderBy?: FAQOrderByWithAggregationInput | FAQOrderByWithAggregationInput[]
    by: FAQScalarFieldEnum[] | FAQScalarFieldEnum
    having?: FAQScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FAQCountAggregateInputType | true
    _avg?: FAQAvgAggregateInputType
    _sum?: FAQSumAggregateInputType
    _min?: FAQMinAggregateInputType
    _max?: FAQMaxAggregateInputType
  }

  export type FAQGroupByOutputType = {
    id: string
    question_tr: string
    question_en: string
    question_de: string
    question_ru: string
    answer_tr: string
    answer_en: string
    answer_de: string
    answer_ru: string
    order: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: FAQCountAggregateOutputType | null
    _avg: FAQAvgAggregateOutputType | null
    _sum: FAQSumAggregateOutputType | null
    _min: FAQMinAggregateOutputType | null
    _max: FAQMaxAggregateOutputType | null
  }

  type GetFAQGroupByPayload<T extends FAQGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FAQGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FAQGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FAQGroupByOutputType[P]>
            : GetScalarType<T[P], FAQGroupByOutputType[P]>
        }
      >
    >


  export type FAQSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question_tr?: boolean
    question_en?: boolean
    question_de?: boolean
    question_ru?: boolean
    answer_tr?: boolean
    answer_en?: boolean
    answer_de?: boolean
    answer_ru?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fAQ"]>

  export type FAQSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question_tr?: boolean
    question_en?: boolean
    question_de?: boolean
    question_ru?: boolean
    answer_tr?: boolean
    answer_en?: boolean
    answer_de?: boolean
    answer_ru?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fAQ"]>

  export type FAQSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question_tr?: boolean
    question_en?: boolean
    question_de?: boolean
    question_ru?: boolean
    answer_tr?: boolean
    answer_en?: boolean
    answer_de?: boolean
    answer_ru?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fAQ"]>

  export type FAQSelectScalar = {
    id?: boolean
    question_tr?: boolean
    question_en?: boolean
    question_de?: boolean
    question_ru?: boolean
    answer_tr?: boolean
    answer_en?: boolean
    answer_de?: boolean
    answer_ru?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FAQOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question_tr" | "question_en" | "question_de" | "question_ru" | "answer_tr" | "answer_en" | "answer_de" | "answer_ru" | "order" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["fAQ"]>

  export type $FAQPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FAQ"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      question_tr: string
      question_en: string
      question_de: string
      question_ru: string
      answer_tr: string
      answer_en: string
      answer_de: string
      answer_ru: string
      order: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fAQ"]>
    composites: {}
  }

  type FAQGetPayload<S extends boolean | null | undefined | FAQDefaultArgs> = $Result.GetResult<Prisma.$FAQPayload, S>

  type FAQCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FAQFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FAQCountAggregateInputType | true
    }

  export interface FAQDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FAQ'], meta: { name: 'FAQ' } }
    /**
     * Find zero or one FAQ that matches the filter.
     * @param {FAQFindUniqueArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FAQFindUniqueArgs>(args: SelectSubset<T, FAQFindUniqueArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FAQ that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FAQFindUniqueOrThrowArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FAQFindUniqueOrThrowArgs>(args: SelectSubset<T, FAQFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FAQ that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQFindFirstArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FAQFindFirstArgs>(args?: SelectSubset<T, FAQFindFirstArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FAQ that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQFindFirstOrThrowArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FAQFindFirstOrThrowArgs>(args?: SelectSubset<T, FAQFindFirstOrThrowArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FAQS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FAQS
     * const fAQS = await prisma.fAQ.findMany()
     * 
     * // Get first 10 FAQS
     * const fAQS = await prisma.fAQ.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fAQWithIdOnly = await prisma.fAQ.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FAQFindManyArgs>(args?: SelectSubset<T, FAQFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FAQ.
     * @param {FAQCreateArgs} args - Arguments to create a FAQ.
     * @example
     * // Create one FAQ
     * const FAQ = await prisma.fAQ.create({
     *   data: {
     *     // ... data to create a FAQ
     *   }
     * })
     * 
     */
    create<T extends FAQCreateArgs>(args: SelectSubset<T, FAQCreateArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FAQS.
     * @param {FAQCreateManyArgs} args - Arguments to create many FAQS.
     * @example
     * // Create many FAQS
     * const fAQ = await prisma.fAQ.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FAQCreateManyArgs>(args?: SelectSubset<T, FAQCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FAQS and returns the data saved in the database.
     * @param {FAQCreateManyAndReturnArgs} args - Arguments to create many FAQS.
     * @example
     * // Create many FAQS
     * const fAQ = await prisma.fAQ.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FAQS and only return the `id`
     * const fAQWithIdOnly = await prisma.fAQ.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FAQCreateManyAndReturnArgs>(args?: SelectSubset<T, FAQCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FAQ.
     * @param {FAQDeleteArgs} args - Arguments to delete one FAQ.
     * @example
     * // Delete one FAQ
     * const FAQ = await prisma.fAQ.delete({
     *   where: {
     *     // ... filter to delete one FAQ
     *   }
     * })
     * 
     */
    delete<T extends FAQDeleteArgs>(args: SelectSubset<T, FAQDeleteArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FAQ.
     * @param {FAQUpdateArgs} args - Arguments to update one FAQ.
     * @example
     * // Update one FAQ
     * const fAQ = await prisma.fAQ.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FAQUpdateArgs>(args: SelectSubset<T, FAQUpdateArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FAQS.
     * @param {FAQDeleteManyArgs} args - Arguments to filter FAQS to delete.
     * @example
     * // Delete a few FAQS
     * const { count } = await prisma.fAQ.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FAQDeleteManyArgs>(args?: SelectSubset<T, FAQDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FAQS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FAQS
     * const fAQ = await prisma.fAQ.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FAQUpdateManyArgs>(args: SelectSubset<T, FAQUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FAQS and returns the data updated in the database.
     * @param {FAQUpdateManyAndReturnArgs} args - Arguments to update many FAQS.
     * @example
     * // Update many FAQS
     * const fAQ = await prisma.fAQ.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FAQS and only return the `id`
     * const fAQWithIdOnly = await prisma.fAQ.updateManyAndReturn({
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
    updateManyAndReturn<T extends FAQUpdateManyAndReturnArgs>(args: SelectSubset<T, FAQUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FAQ.
     * @param {FAQUpsertArgs} args - Arguments to update or create a FAQ.
     * @example
     * // Update or create a FAQ
     * const fAQ = await prisma.fAQ.upsert({
     *   create: {
     *     // ... data to create a FAQ
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FAQ we want to update
     *   }
     * })
     */
    upsert<T extends FAQUpsertArgs>(args: SelectSubset<T, FAQUpsertArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FAQS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQCountArgs} args - Arguments to filter FAQS to count.
     * @example
     * // Count the number of FAQS
     * const count = await prisma.fAQ.count({
     *   where: {
     *     // ... the filter for the FAQS we want to count
     *   }
     * })
    **/
    count<T extends FAQCountArgs>(
      args?: Subset<T, FAQCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FAQCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FAQ.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FAQAggregateArgs>(args: Subset<T, FAQAggregateArgs>): Prisma.PrismaPromise<GetFAQAggregateType<T>>

    /**
     * Group by FAQ.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQGroupByArgs} args - Group by arguments.
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
      T extends FAQGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FAQGroupByArgs['orderBy'] }
        : { orderBy?: FAQGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FAQGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFAQGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FAQ model
   */
  readonly fields: FAQFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FAQ.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FAQClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the FAQ model
   */
  interface FAQFieldRefs {
    readonly id: FieldRef<"FAQ", 'String'>
    readonly question_tr: FieldRef<"FAQ", 'String'>
    readonly question_en: FieldRef<"FAQ", 'String'>
    readonly question_de: FieldRef<"FAQ", 'String'>
    readonly question_ru: FieldRef<"FAQ", 'String'>
    readonly answer_tr: FieldRef<"FAQ", 'String'>
    readonly answer_en: FieldRef<"FAQ", 'String'>
    readonly answer_de: FieldRef<"FAQ", 'String'>
    readonly answer_ru: FieldRef<"FAQ", 'String'>
    readonly order: FieldRef<"FAQ", 'Int'>
    readonly isActive: FieldRef<"FAQ", 'Boolean'>
    readonly createdAt: FieldRef<"FAQ", 'DateTime'>
    readonly updatedAt: FieldRef<"FAQ", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FAQ findUnique
   */
  export type FAQFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ findUniqueOrThrow
   */
  export type FAQFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ findFirst
   */
  export type FAQFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FAQS.
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FAQS.
     */
    distinct?: FAQScalarFieldEnum | FAQScalarFieldEnum[]
  }

  /**
   * FAQ findFirstOrThrow
   */
  export type FAQFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FAQS.
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FAQS.
     */
    distinct?: FAQScalarFieldEnum | FAQScalarFieldEnum[]
  }

  /**
   * FAQ findMany
   */
  export type FAQFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Filter, which FAQS to fetch.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FAQS.
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    distinct?: FAQScalarFieldEnum | FAQScalarFieldEnum[]
  }

  /**
   * FAQ create
   */
  export type FAQCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * The data needed to create a FAQ.
     */
    data: XOR<FAQCreateInput, FAQUncheckedCreateInput>
  }

  /**
   * FAQ createMany
   */
  export type FAQCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FAQS.
     */
    data: FAQCreateManyInput | FAQCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FAQ createManyAndReturn
   */
  export type FAQCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * The data used to create many FAQS.
     */
    data: FAQCreateManyInput | FAQCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FAQ update
   */
  export type FAQUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * The data needed to update a FAQ.
     */
    data: XOR<FAQUpdateInput, FAQUncheckedUpdateInput>
    /**
     * Choose, which FAQ to update.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ updateMany
   */
  export type FAQUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FAQS.
     */
    data: XOR<FAQUpdateManyMutationInput, FAQUncheckedUpdateManyInput>
    /**
     * Filter which FAQS to update
     */
    where?: FAQWhereInput
    /**
     * Limit how many FAQS to update.
     */
    limit?: number
  }

  /**
   * FAQ updateManyAndReturn
   */
  export type FAQUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * The data used to update FAQS.
     */
    data: XOR<FAQUpdateManyMutationInput, FAQUncheckedUpdateManyInput>
    /**
     * Filter which FAQS to update
     */
    where?: FAQWhereInput
    /**
     * Limit how many FAQS to update.
     */
    limit?: number
  }

  /**
   * FAQ upsert
   */
  export type FAQUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * The filter to search for the FAQ to update in case it exists.
     */
    where: FAQWhereUniqueInput
    /**
     * In case the FAQ found by the `where` argument doesn't exist, create a new FAQ with this data.
     */
    create: XOR<FAQCreateInput, FAQUncheckedCreateInput>
    /**
     * In case the FAQ was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FAQUpdateInput, FAQUncheckedUpdateInput>
  }

  /**
   * FAQ delete
   */
  export type FAQDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Filter which FAQ to delete.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ deleteMany
   */
  export type FAQDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FAQS to delete
     */
    where?: FAQWhereInput
    /**
     * Limit how many FAQS to delete.
     */
    limit?: number
  }

  /**
   * FAQ without action
   */
  export type FAQDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
  }


  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationAvgAggregateOutputType = {
    heightCm: number | null
    chestCm: number | null
    hipsCm: number | null
    footCm: number | null
    waistCm: number | null
  }

  export type ApplicationSumAggregateOutputType = {
    heightCm: number | null
    chestCm: number | null
    hipsCm: number | null
    footCm: number | null
    waistCm: number | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    birthDate: Date | null
    gender: $Enums.Gender | null
    nationality: string | null
    email: string | null
    phone: string | null
    city: string | null
    heightCm: number | null
    chestCm: number | null
    hipsCm: number | null
    footCm: number | null
    waistCm: number | null
    eyeColor: string | null
    selfieUrl: string | null
    profilePhoto: string | null
    fullBodyPhoto: string | null
    status: $Enums.ApplicationStatus | null
    adminNotes: string | null
    submittedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    birthDate: Date | null
    gender: $Enums.Gender | null
    nationality: string | null
    email: string | null
    phone: string | null
    city: string | null
    heightCm: number | null
    chestCm: number | null
    hipsCm: number | null
    footCm: number | null
    waistCm: number | null
    eyeColor: string | null
    selfieUrl: string | null
    profilePhoto: string | null
    fullBodyPhoto: string | null
    status: $Enums.ApplicationStatus | null
    adminNotes: string | null
    submittedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    fullName: number
    birthDate: number
    gender: number
    nationality: number
    email: number
    phone: number
    city: number
    heightCm: number
    chestCm: number
    hipsCm: number
    footCm: number
    waistCm: number
    eyeColor: number
    selfieUrl: number
    profilePhoto: number
    fullBodyPhoto: number
    status: number
    adminNotes: number
    submittedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApplicationAvgAggregateInputType = {
    heightCm?: true
    chestCm?: true
    hipsCm?: true
    footCm?: true
    waistCm?: true
  }

  export type ApplicationSumAggregateInputType = {
    heightCm?: true
    chestCm?: true
    hipsCm?: true
    footCm?: true
    waistCm?: true
  }

  export type ApplicationMinAggregateInputType = {
    id?: true
    fullName?: true
    birthDate?: true
    gender?: true
    nationality?: true
    email?: true
    phone?: true
    city?: true
    heightCm?: true
    chestCm?: true
    hipsCm?: true
    footCm?: true
    waistCm?: true
    eyeColor?: true
    selfieUrl?: true
    profilePhoto?: true
    fullBodyPhoto?: true
    status?: true
    adminNotes?: true
    submittedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    fullName?: true
    birthDate?: true
    gender?: true
    nationality?: true
    email?: true
    phone?: true
    city?: true
    heightCm?: true
    chestCm?: true
    hipsCm?: true
    footCm?: true
    waistCm?: true
    eyeColor?: true
    selfieUrl?: true
    profilePhoto?: true
    fullBodyPhoto?: true
    status?: true
    adminNotes?: true
    submittedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    fullName?: true
    birthDate?: true
    gender?: true
    nationality?: true
    email?: true
    phone?: true
    city?: true
    heightCm?: true
    chestCm?: true
    hipsCm?: true
    footCm?: true
    waistCm?: true
    eyeColor?: true
    selfieUrl?: true
    profilePhoto?: true
    fullBodyPhoto?: true
    status?: true
    adminNotes?: true
    submittedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithAggregationInput | ApplicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _avg?: ApplicationAvgAggregateInputType
    _sum?: ApplicationSumAggregateInputType
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    id: string
    fullName: string
    birthDate: Date
    gender: $Enums.Gender
    nationality: string
    email: string
    phone: string
    city: string
    heightCm: number
    chestCm: number
    hipsCm: number
    footCm: number
    waistCm: number
    eyeColor: string
    selfieUrl: string
    profilePhoto: string
    fullBodyPhoto: string
    status: $Enums.ApplicationStatus
    adminNotes: string | null
    submittedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    birthDate?: boolean
    gender?: boolean
    nationality?: boolean
    email?: boolean
    phone?: boolean
    city?: boolean
    heightCm?: boolean
    chestCm?: boolean
    hipsCm?: boolean
    footCm?: boolean
    waistCm?: boolean
    eyeColor?: boolean
    selfieUrl?: boolean
    profilePhoto?: boolean
    fullBodyPhoto?: boolean
    status?: boolean
    adminNotes?: boolean
    submittedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    birthDate?: boolean
    gender?: boolean
    nationality?: boolean
    email?: boolean
    phone?: boolean
    city?: boolean
    heightCm?: boolean
    chestCm?: boolean
    hipsCm?: boolean
    footCm?: boolean
    waistCm?: boolean
    eyeColor?: boolean
    selfieUrl?: boolean
    profilePhoto?: boolean
    fullBodyPhoto?: boolean
    status?: boolean
    adminNotes?: boolean
    submittedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    birthDate?: boolean
    gender?: boolean
    nationality?: boolean
    email?: boolean
    phone?: boolean
    city?: boolean
    heightCm?: boolean
    chestCm?: boolean
    hipsCm?: boolean
    footCm?: boolean
    waistCm?: boolean
    eyeColor?: boolean
    selfieUrl?: boolean
    profilePhoto?: boolean
    fullBodyPhoto?: boolean
    status?: boolean
    adminNotes?: boolean
    submittedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectScalar = {
    id?: boolean
    fullName?: boolean
    birthDate?: boolean
    gender?: boolean
    nationality?: boolean
    email?: boolean
    phone?: boolean
    city?: boolean
    heightCm?: boolean
    chestCm?: boolean
    hipsCm?: boolean
    footCm?: boolean
    waistCm?: boolean
    eyeColor?: boolean
    selfieUrl?: boolean
    profilePhoto?: boolean
    fullBodyPhoto?: boolean
    status?: boolean
    adminNotes?: boolean
    submittedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "birthDate" | "gender" | "nationality" | "email" | "phone" | "city" | "heightCm" | "chestCm" | "hipsCm" | "footCm" | "waistCm" | "eyeColor" | "selfieUrl" | "profilePhoto" | "fullBodyPhoto" | "status" | "adminNotes" | "submittedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["application"]>

  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      birthDate: Date
      gender: $Enums.Gender
      nationality: string
      email: string
      phone: string
      city: string
      heightCm: number
      chestCm: number
      hipsCm: number
      footCm: number
      waistCm: number
      eyeColor: string
      selfieUrl: string
      profilePhoto: string
      fullBodyPhoto: string
      status: $Enums.ApplicationStatus
      adminNotes: string | null
      submittedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["application"]>
    composites: {}
  }

  type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = $Result.GetResult<Prisma.$ApplicationPayload, S>

  type ApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface ApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Application'], meta: { name: 'Application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFindUniqueArgs>(args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFindFirstArgs>(args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationFindManyArgs>(args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
     */
    create<T extends ApplicationCreateArgs>(args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationCreateManyArgs>(args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applications and returns the data saved in the database.
     * @param {ApplicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
     */
    delete<T extends ApplicationDeleteArgs>(args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationUpdateArgs>(args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationDeleteManyArgs>(args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationUpdateManyArgs>(args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications and returns the data updated in the database.
     * @param {ApplicationUpdateManyAndReturnArgs} args - Arguments to update many Applications.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationUpsertArgs>(args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
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
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Application model
   */
  readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Application model
   */
  interface ApplicationFieldRefs {
    readonly id: FieldRef<"Application", 'String'>
    readonly fullName: FieldRef<"Application", 'String'>
    readonly birthDate: FieldRef<"Application", 'DateTime'>
    readonly gender: FieldRef<"Application", 'Gender'>
    readonly nationality: FieldRef<"Application", 'String'>
    readonly email: FieldRef<"Application", 'String'>
    readonly phone: FieldRef<"Application", 'String'>
    readonly city: FieldRef<"Application", 'String'>
    readonly heightCm: FieldRef<"Application", 'Int'>
    readonly chestCm: FieldRef<"Application", 'Int'>
    readonly hipsCm: FieldRef<"Application", 'Int'>
    readonly footCm: FieldRef<"Application", 'Int'>
    readonly waistCm: FieldRef<"Application", 'Int'>
    readonly eyeColor: FieldRef<"Application", 'String'>
    readonly selfieUrl: FieldRef<"Application", 'String'>
    readonly profilePhoto: FieldRef<"Application", 'String'>
    readonly fullBodyPhoto: FieldRef<"Application", 'String'>
    readonly status: FieldRef<"Application", 'ApplicationStatus'>
    readonly adminNotes: FieldRef<"Application", 'String'>
    readonly submittedAt: FieldRef<"Application", 'DateTime'>
    readonly createdAt: FieldRef<"Application", 'DateTime'>
    readonly updatedAt: FieldRef<"Application", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application create
   */
  export type ApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }

  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Application createManyAndReturn
   */
  export type ApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Application update
   */
  export type ApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
  }

  /**
   * Application updateManyAndReturn
   */
  export type ApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
  }

  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }

  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to delete.
     */
    limit?: number
  }

  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
  }


  /**
   * Model ContactMessage
   */

  export type AggregateContactMessage = {
    _count: ContactMessageCountAggregateOutputType | null
    _min: ContactMessageMinAggregateOutputType | null
    _max: ContactMessageMaxAggregateOutputType | null
  }

  export type ContactMessageMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    subject: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactMessageMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    subject: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactMessageCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    subject: number
    message: number
    isRead: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactMessageMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    subject?: true
    message?: true
    isRead?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactMessageMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    subject?: true
    message?: true
    isRead?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactMessageCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    subject?: true
    message?: true
    isRead?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactMessage to aggregate.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactMessages
    **/
    _count?: true | ContactMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMessageMaxAggregateInputType
  }

  export type GetContactMessageAggregateType<T extends ContactMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateContactMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactMessage[P]>
      : GetScalarType<T[P], AggregateContactMessage[P]>
  }




  export type ContactMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactMessageWhereInput
    orderBy?: ContactMessageOrderByWithAggregationInput | ContactMessageOrderByWithAggregationInput[]
    by: ContactMessageScalarFieldEnum[] | ContactMessageScalarFieldEnum
    having?: ContactMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactMessageCountAggregateInputType | true
    _min?: ContactMessageMinAggregateInputType
    _max?: ContactMessageMaxAggregateInputType
  }

  export type ContactMessageGroupByOutputType = {
    id: string
    fullName: string
    email: string
    subject: string
    message: string
    isRead: boolean
    createdAt: Date
    updatedAt: Date
    _count: ContactMessageCountAggregateOutputType | null
    _min: ContactMessageMinAggregateOutputType | null
    _max: ContactMessageMaxAggregateOutputType | null
  }

  type GetContactMessageGroupByPayload<T extends ContactMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ContactMessageGroupByOutputType[P]>
        }
      >
    >


  export type ContactMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactMessage"]>

  export type ContactMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactMessage"]>

  export type ContactMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactMessage"]>

  export type ContactMessageSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "subject" | "message" | "isRead" | "createdAt" | "updatedAt", ExtArgs["result"]["contactMessage"]>

  export type $ContactMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactMessage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      subject: string
      message: string
      isRead: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contactMessage"]>
    composites: {}
  }

  type ContactMessageGetPayload<S extends boolean | null | undefined | ContactMessageDefaultArgs> = $Result.GetResult<Prisma.$ContactMessagePayload, S>

  type ContactMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactMessageCountAggregateInputType | true
    }

  export interface ContactMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactMessage'], meta: { name: 'ContactMessage' } }
    /**
     * Find zero or one ContactMessage that matches the filter.
     * @param {ContactMessageFindUniqueArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactMessageFindUniqueArgs>(args: SelectSubset<T, ContactMessageFindUniqueArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactMessageFindUniqueOrThrowArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageFindFirstArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactMessageFindFirstArgs>(args?: SelectSubset<T, ContactMessageFindFirstArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageFindFirstOrThrowArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactMessages
     * const contactMessages = await prisma.contactMessage.findMany()
     * 
     * // Get first 10 ContactMessages
     * const contactMessages = await prisma.contactMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactMessageWithIdOnly = await prisma.contactMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactMessageFindManyArgs>(args?: SelectSubset<T, ContactMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactMessage.
     * @param {ContactMessageCreateArgs} args - Arguments to create a ContactMessage.
     * @example
     * // Create one ContactMessage
     * const ContactMessage = await prisma.contactMessage.create({
     *   data: {
     *     // ... data to create a ContactMessage
     *   }
     * })
     * 
     */
    create<T extends ContactMessageCreateArgs>(args: SelectSubset<T, ContactMessageCreateArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactMessages.
     * @param {ContactMessageCreateManyArgs} args - Arguments to create many ContactMessages.
     * @example
     * // Create many ContactMessages
     * const contactMessage = await prisma.contactMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactMessageCreateManyArgs>(args?: SelectSubset<T, ContactMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactMessages and returns the data saved in the database.
     * @param {ContactMessageCreateManyAndReturnArgs} args - Arguments to create many ContactMessages.
     * @example
     * // Create many ContactMessages
     * const contactMessage = await prisma.contactMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactMessages and only return the `id`
     * const contactMessageWithIdOnly = await prisma.contactMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactMessage.
     * @param {ContactMessageDeleteArgs} args - Arguments to delete one ContactMessage.
     * @example
     * // Delete one ContactMessage
     * const ContactMessage = await prisma.contactMessage.delete({
     *   where: {
     *     // ... filter to delete one ContactMessage
     *   }
     * })
     * 
     */
    delete<T extends ContactMessageDeleteArgs>(args: SelectSubset<T, ContactMessageDeleteArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactMessage.
     * @param {ContactMessageUpdateArgs} args - Arguments to update one ContactMessage.
     * @example
     * // Update one ContactMessage
     * const contactMessage = await prisma.contactMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactMessageUpdateArgs>(args: SelectSubset<T, ContactMessageUpdateArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactMessages.
     * @param {ContactMessageDeleteManyArgs} args - Arguments to filter ContactMessages to delete.
     * @example
     * // Delete a few ContactMessages
     * const { count } = await prisma.contactMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactMessageDeleteManyArgs>(args?: SelectSubset<T, ContactMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactMessages
     * const contactMessage = await prisma.contactMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactMessageUpdateManyArgs>(args: SelectSubset<T, ContactMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactMessages and returns the data updated in the database.
     * @param {ContactMessageUpdateManyAndReturnArgs} args - Arguments to update many ContactMessages.
     * @example
     * // Update many ContactMessages
     * const contactMessage = await prisma.contactMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactMessages and only return the `id`
     * const contactMessageWithIdOnly = await prisma.contactMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContactMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactMessage.
     * @param {ContactMessageUpsertArgs} args - Arguments to update or create a ContactMessage.
     * @example
     * // Update or create a ContactMessage
     * const contactMessage = await prisma.contactMessage.upsert({
     *   create: {
     *     // ... data to create a ContactMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactMessage we want to update
     *   }
     * })
     */
    upsert<T extends ContactMessageUpsertArgs>(args: SelectSubset<T, ContactMessageUpsertArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageCountArgs} args - Arguments to filter ContactMessages to count.
     * @example
     * // Count the number of ContactMessages
     * const count = await prisma.contactMessage.count({
     *   where: {
     *     // ... the filter for the ContactMessages we want to count
     *   }
     * })
    **/
    count<T extends ContactMessageCountArgs>(
      args?: Subset<T, ContactMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactMessageAggregateArgs>(args: Subset<T, ContactMessageAggregateArgs>): Prisma.PrismaPromise<GetContactMessageAggregateType<T>>

    /**
     * Group by ContactMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageGroupByArgs} args - Group by arguments.
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
      T extends ContactMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactMessageGroupByArgs['orderBy'] }
        : { orderBy?: ContactMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactMessage model
   */
  readonly fields: ContactMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ContactMessage model
   */
  interface ContactMessageFieldRefs {
    readonly id: FieldRef<"ContactMessage", 'String'>
    readonly fullName: FieldRef<"ContactMessage", 'String'>
    readonly email: FieldRef<"ContactMessage", 'String'>
    readonly subject: FieldRef<"ContactMessage", 'String'>
    readonly message: FieldRef<"ContactMessage", 'String'>
    readonly isRead: FieldRef<"ContactMessage", 'Boolean'>
    readonly createdAt: FieldRef<"ContactMessage", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactMessage findUnique
   */
  export type ContactMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage findUniqueOrThrow
   */
  export type ContactMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage findFirst
   */
  export type ContactMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactMessages.
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactMessages.
     */
    distinct?: ContactMessageScalarFieldEnum | ContactMessageScalarFieldEnum[]
  }

  /**
   * ContactMessage findFirstOrThrow
   */
  export type ContactMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactMessages.
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactMessages.
     */
    distinct?: ContactMessageScalarFieldEnum | ContactMessageScalarFieldEnum[]
  }

  /**
   * ContactMessage findMany
   */
  export type ContactMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessages to fetch.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactMessages.
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    distinct?: ContactMessageScalarFieldEnum | ContactMessageScalarFieldEnum[]
  }

  /**
   * ContactMessage create
   */
  export type ContactMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactMessage.
     */
    data: XOR<ContactMessageCreateInput, ContactMessageUncheckedCreateInput>
  }

  /**
   * ContactMessage createMany
   */
  export type ContactMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactMessages.
     */
    data: ContactMessageCreateManyInput | ContactMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactMessage createManyAndReturn
   */
  export type ContactMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ContactMessages.
     */
    data: ContactMessageCreateManyInput | ContactMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactMessage update
   */
  export type ContactMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactMessage.
     */
    data: XOR<ContactMessageUpdateInput, ContactMessageUncheckedUpdateInput>
    /**
     * Choose, which ContactMessage to update.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage updateMany
   */
  export type ContactMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactMessages.
     */
    data: XOR<ContactMessageUpdateManyMutationInput, ContactMessageUncheckedUpdateManyInput>
    /**
     * Filter which ContactMessages to update
     */
    where?: ContactMessageWhereInput
    /**
     * Limit how many ContactMessages to update.
     */
    limit?: number
  }

  /**
   * ContactMessage updateManyAndReturn
   */
  export type ContactMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data used to update ContactMessages.
     */
    data: XOR<ContactMessageUpdateManyMutationInput, ContactMessageUncheckedUpdateManyInput>
    /**
     * Filter which ContactMessages to update
     */
    where?: ContactMessageWhereInput
    /**
     * Limit how many ContactMessages to update.
     */
    limit?: number
  }

  /**
   * ContactMessage upsert
   */
  export type ContactMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactMessage to update in case it exists.
     */
    where: ContactMessageWhereUniqueInput
    /**
     * In case the ContactMessage found by the `where` argument doesn't exist, create a new ContactMessage with this data.
     */
    create: XOR<ContactMessageCreateInput, ContactMessageUncheckedCreateInput>
    /**
     * In case the ContactMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactMessageUpdateInput, ContactMessageUncheckedUpdateInput>
  }

  /**
   * ContactMessage delete
   */
  export type ContactMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter which ContactMessage to delete.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage deleteMany
   */
  export type ContactMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactMessages to delete
     */
    where?: ContactMessageWhereInput
    /**
     * Limit how many ContactMessages to delete.
     */
    limit?: number
  }

  /**
   * ContactMessage without action
   */
  export type ContactMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
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


  export const AdminUserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    phone: 'phone',
    role: 'role',
    isActive: 'isActive'
  };

  export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum]


  export const HomeSliderScalarFieldEnum: {
    id: 'id',
    key: 'key',
    name: 'name',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HomeSliderScalarFieldEnum = (typeof HomeSliderScalarFieldEnum)[keyof typeof HomeSliderScalarFieldEnum]


  export const HomeSliderItemScalarFieldEnum: {
    id: 'id',
    homeSliderId: 'homeSliderId',
    title_tr: 'title_tr',
    title_en: 'title_en',
    title_de: 'title_de',
    title_ru: 'title_ru',
    description_tr: 'description_tr',
    description_en: 'description_en',
    description_de: 'description_de',
    description_ru: 'description_ru',
    imageUrl: 'imageUrl',
    linkUrl: 'linkUrl',
    order: 'order',
    isActive: 'isActive',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HomeSliderItemScalarFieldEnum = (typeof HomeSliderItemScalarFieldEnum)[keyof typeof HomeSliderItemScalarFieldEnum]


  export const CoverImageScalarFieldEnum: {
    id: 'id',
    type: 'type',
    imageUrl: 'imageUrl',
    isActive: 'isActive',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CoverImageScalarFieldEnum = (typeof CoverImageScalarFieldEnum)[keyof typeof CoverImageScalarFieldEnum]


  export const SuccessHeroScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    isActive: 'isActive',
    title_tr: 'title_tr',
    title_en: 'title_en',
    title_de: 'title_de',
    title_ru: 'title_ru',
    text_tr: 'text_tr',
    text_en: 'text_en',
    text_de: 'text_de',
    text_ru: 'text_ru',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SuccessHeroScalarFieldEnum = (typeof SuccessHeroScalarFieldEnum)[keyof typeof SuccessHeroScalarFieldEnum]


  export const SuccessModelReviewScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    isActive: 'isActive',
    title_tr: 'title_tr',
    title_en: 'title_en',
    title_de: 'title_de',
    title_ru: 'title_ru',
    text_tr: 'text_tr',
    text_en: 'text_en',
    text_de: 'text_de',
    text_ru: 'text_ru',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SuccessModelReviewScalarFieldEnum = (typeof SuccessModelReviewScalarFieldEnum)[keyof typeof SuccessModelReviewScalarFieldEnum]


  export const FeaturedItemScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    title_tr: 'title_tr',
    title_en: 'title_en',
    title_de: 'title_de',
    title_ru: 'title_ru',
    content_tr: 'content_tr',
    content_en: 'content_en',
    content_de: 'content_de',
    content_ru: 'content_ru',
    order: 'order',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FeaturedItemScalarFieldEnum = (typeof FeaturedItemScalarFieldEnum)[keyof typeof FeaturedItemScalarFieldEnum]


  export const NewsScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    category: 'category',
    category_tr: 'category_tr',
    category_en: 'category_en',
    category_de: 'category_de',
    category_ru: 'category_ru',
    galleryUrls: 'galleryUrls',
    title_tr: 'title_tr',
    title_en: 'title_en',
    title_de: 'title_de',
    title_ru: 'title_ru',
    content_tr: 'content_tr',
    content_en: 'content_en',
    content_de: 'content_de',
    content_ru: 'content_ru',
    description_tr: 'description_tr',
    description_en: 'description_en',
    description_de: 'description_de',
    description_ru: 'description_ru',
    publishedAt: 'publishedAt',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NewsScalarFieldEnum = (typeof NewsScalarFieldEnum)[keyof typeof NewsScalarFieldEnum]


  export const AboutPageScalarFieldEnum: {
    id: 'id',
    intro_title_tr: 'intro_title_tr',
    intro_title_en: 'intro_title_en',
    intro_title_de: 'intro_title_de',
    intro_title_ru: 'intro_title_ru',
    intro_text_tr: 'intro_text_tr',
    intro_text_en: 'intro_text_en',
    intro_text_de: 'intro_text_de',
    intro_text_ru: 'intro_text_ru',
    vision_imageUrl: 'vision_imageUrl',
    vision_title_tr: 'vision_title_tr',
    vision_title_en: 'vision_title_en',
    vision_title_de: 'vision_title_de',
    vision_title_ru: 'vision_title_ru',
    vision_slogan_tr: 'vision_slogan_tr',
    vision_slogan_en: 'vision_slogan_en',
    vision_slogan_de: 'vision_slogan_de',
    vision_slogan_ru: 'vision_slogan_ru',
    vision_text_tr: 'vision_text_tr',
    vision_text_en: 'vision_text_en',
    vision_text_de: 'vision_text_de',
    vision_text_ru: 'vision_text_ru',
    mission_imageUrl: 'mission_imageUrl',
    mission_title_tr: 'mission_title_tr',
    mission_title_en: 'mission_title_en',
    mission_title_de: 'mission_title_de',
    mission_title_ru: 'mission_title_ru',
    mission_slogan_tr: 'mission_slogan_tr',
    mission_slogan_en: 'mission_slogan_en',
    mission_slogan_de: 'mission_slogan_de',
    mission_slogan_ru: 'mission_slogan_ru',
    mission_text_tr: 'mission_text_tr',
    mission_text_en: 'mission_text_en',
    mission_text_de: 'mission_text_de',
    mission_text_ru: 'mission_text_ru',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AboutPageScalarFieldEnum = (typeof AboutPageScalarFieldEnum)[keyof typeof AboutPageScalarFieldEnum]


  export const ContactInfoScalarFieldEnum: {
    id: 'id',
    address_tr: 'address_tr',
    address_en: 'address_en',
    address_de: 'address_de',
    address_ru: 'address_ru',
    phone: 'phone',
    email: 'email',
    locationUrl: 'locationUrl',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactInfoScalarFieldEnum = (typeof ContactInfoScalarFieldEnum)[keyof typeof ContactInfoScalarFieldEnum]


  export const FAQScalarFieldEnum: {
    id: 'id',
    question_tr: 'question_tr',
    question_en: 'question_en',
    question_de: 'question_de',
    question_ru: 'question_ru',
    answer_tr: 'answer_tr',
    answer_en: 'answer_en',
    answer_de: 'answer_de',
    answer_ru: 'answer_ru',
    order: 'order',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FAQScalarFieldEnum = (typeof FAQScalarFieldEnum)[keyof typeof FAQScalarFieldEnum]


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    birthDate: 'birthDate',
    gender: 'gender',
    nationality: 'nationality',
    email: 'email',
    phone: 'phone',
    city: 'city',
    heightCm: 'heightCm',
    chestCm: 'chestCm',
    hipsCm: 'hipsCm',
    footCm: 'footCm',
    waistCm: 'waistCm',
    eyeColor: 'eyeColor',
    selfieUrl: 'selfieUrl',
    profilePhoto: 'profilePhoto',
    fullBodyPhoto: 'fullBodyPhoto',
    status: 'status',
    adminNotes: 'adminNotes',
    submittedAt: 'submittedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const ContactMessageScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    subject: 'subject',
    message: 'message',
    isRead: 'isRead',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactMessageScalarFieldEnum = (typeof ContactMessageScalarFieldEnum)[keyof typeof ContactMessageScalarFieldEnum]


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
   * Reference to a field of type 'AdminRole'
   */
  export type EnumAdminRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminRole'>
    


  /**
   * Reference to a field of type 'AdminRole[]'
   */
  export type ListEnumAdminRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CoverType'
   */
  export type EnumCoverTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CoverType'>
    


  /**
   * Reference to a field of type 'CoverType[]'
   */
  export type ListEnumCoverTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CoverType[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'ApplicationStatus'
   */
  export type EnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus'>
    


  /**
   * Reference to a field of type 'ApplicationStatus[]'
   */
  export type ListEnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus[]'>
    


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


  export type AdminUserWhereInput = {
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    id?: StringFilter<"AdminUser"> | string
    email?: StringFilter<"AdminUser"> | string
    passwordHash?: StringFilter<"AdminUser"> | string
    name?: StringNullableFilter<"AdminUser"> | string | null
    phone?: StringNullableFilter<"AdminUser"> | string | null
    role?: EnumAdminRoleFilter<"AdminUser"> | $Enums.AdminRole
    isActive?: BoolFilter<"AdminUser"> | boolean
  }

  export type AdminUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
  }

  export type AdminUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    passwordHash?: StringFilter<"AdminUser"> | string
    name?: StringNullableFilter<"AdminUser"> | string | null
    phone?: StringNullableFilter<"AdminUser"> | string | null
    role?: EnumAdminRoleFilter<"AdminUser"> | $Enums.AdminRole
    isActive?: BoolFilter<"AdminUser"> | boolean
  }, "id" | "email">

  export type AdminUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    _count?: AdminUserCountOrderByAggregateInput
    _max?: AdminUserMaxOrderByAggregateInput
    _min?: AdminUserMinOrderByAggregateInput
  }

  export type AdminUserScalarWhereWithAggregatesInput = {
    AND?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    OR?: AdminUserScalarWhereWithAggregatesInput[]
    NOT?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminUser"> | string
    email?: StringWithAggregatesFilter<"AdminUser"> | string
    passwordHash?: StringWithAggregatesFilter<"AdminUser"> | string
    name?: StringNullableWithAggregatesFilter<"AdminUser"> | string | null
    phone?: StringNullableWithAggregatesFilter<"AdminUser"> | string | null
    role?: EnumAdminRoleWithAggregatesFilter<"AdminUser"> | $Enums.AdminRole
    isActive?: BoolWithAggregatesFilter<"AdminUser"> | boolean
  }

  export type HomeSliderWhereInput = {
    AND?: HomeSliderWhereInput | HomeSliderWhereInput[]
    OR?: HomeSliderWhereInput[]
    NOT?: HomeSliderWhereInput | HomeSliderWhereInput[]
    id?: IntFilter<"HomeSlider"> | number
    key?: StringFilter<"HomeSlider"> | string
    name?: StringFilter<"HomeSlider"> | string
    isActive?: BoolFilter<"HomeSlider"> | boolean
    createdAt?: DateTimeFilter<"HomeSlider"> | Date | string
    updatedAt?: DateTimeFilter<"HomeSlider"> | Date | string
    items?: HomeSliderItemListRelationFilter
  }

  export type HomeSliderOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: HomeSliderItemOrderByRelationAggregateInput
  }

  export type HomeSliderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    key?: string
    AND?: HomeSliderWhereInput | HomeSliderWhereInput[]
    OR?: HomeSliderWhereInput[]
    NOT?: HomeSliderWhereInput | HomeSliderWhereInput[]
    name?: StringFilter<"HomeSlider"> | string
    isActive?: BoolFilter<"HomeSlider"> | boolean
    createdAt?: DateTimeFilter<"HomeSlider"> | Date | string
    updatedAt?: DateTimeFilter<"HomeSlider"> | Date | string
    items?: HomeSliderItemListRelationFilter
  }, "id" | "key">

  export type HomeSliderOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HomeSliderCountOrderByAggregateInput
    _avg?: HomeSliderAvgOrderByAggregateInput
    _max?: HomeSliderMaxOrderByAggregateInput
    _min?: HomeSliderMinOrderByAggregateInput
    _sum?: HomeSliderSumOrderByAggregateInput
  }

  export type HomeSliderScalarWhereWithAggregatesInput = {
    AND?: HomeSliderScalarWhereWithAggregatesInput | HomeSliderScalarWhereWithAggregatesInput[]
    OR?: HomeSliderScalarWhereWithAggregatesInput[]
    NOT?: HomeSliderScalarWhereWithAggregatesInput | HomeSliderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HomeSlider"> | number
    key?: StringWithAggregatesFilter<"HomeSlider"> | string
    name?: StringWithAggregatesFilter<"HomeSlider"> | string
    isActive?: BoolWithAggregatesFilter<"HomeSlider"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"HomeSlider"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HomeSlider"> | Date | string
  }

  export type HomeSliderItemWhereInput = {
    AND?: HomeSliderItemWhereInput | HomeSliderItemWhereInput[]
    OR?: HomeSliderItemWhereInput[]
    NOT?: HomeSliderItemWhereInput | HomeSliderItemWhereInput[]
    id?: IntFilter<"HomeSliderItem"> | number
    homeSliderId?: IntFilter<"HomeSliderItem"> | number
    title_tr?: StringNullableFilter<"HomeSliderItem"> | string | null
    title_en?: StringNullableFilter<"HomeSliderItem"> | string | null
    title_de?: StringNullableFilter<"HomeSliderItem"> | string | null
    title_ru?: StringNullableFilter<"HomeSliderItem"> | string | null
    description_tr?: StringNullableFilter<"HomeSliderItem"> | string | null
    description_en?: StringNullableFilter<"HomeSliderItem"> | string | null
    description_de?: StringNullableFilter<"HomeSliderItem"> | string | null
    description_ru?: StringNullableFilter<"HomeSliderItem"> | string | null
    imageUrl?: StringNullableFilter<"HomeSliderItem"> | string | null
    linkUrl?: StringNullableFilter<"HomeSliderItem"> | string | null
    order?: IntFilter<"HomeSliderItem"> | number
    isActive?: BoolFilter<"HomeSliderItem"> | boolean
    startDate?: DateTimeNullableFilter<"HomeSliderItem"> | Date | string | null
    endDate?: DateTimeNullableFilter<"HomeSliderItem"> | Date | string | null
    createdAt?: DateTimeFilter<"HomeSliderItem"> | Date | string
    updatedAt?: DateTimeFilter<"HomeSliderItem"> | Date | string
    homeSlider?: XOR<HomeSliderScalarRelationFilter, HomeSliderWhereInput>
  }

  export type HomeSliderItemOrderByWithRelationInput = {
    id?: SortOrder
    homeSliderId?: SortOrder
    title_tr?: SortOrderInput | SortOrder
    title_en?: SortOrderInput | SortOrder
    title_de?: SortOrderInput | SortOrder
    title_ru?: SortOrderInput | SortOrder
    description_tr?: SortOrderInput | SortOrder
    description_en?: SortOrderInput | SortOrder
    description_de?: SortOrderInput | SortOrder
    description_ru?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    linkUrl?: SortOrderInput | SortOrder
    order?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    homeSlider?: HomeSliderOrderByWithRelationInput
  }

  export type HomeSliderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    homeSliderId_order?: HomeSliderItemHomeSliderIdOrderCompoundUniqueInput
    AND?: HomeSliderItemWhereInput | HomeSliderItemWhereInput[]
    OR?: HomeSliderItemWhereInput[]
    NOT?: HomeSliderItemWhereInput | HomeSliderItemWhereInput[]
    homeSliderId?: IntFilter<"HomeSliderItem"> | number
    title_tr?: StringNullableFilter<"HomeSliderItem"> | string | null
    title_en?: StringNullableFilter<"HomeSliderItem"> | string | null
    title_de?: StringNullableFilter<"HomeSliderItem"> | string | null
    title_ru?: StringNullableFilter<"HomeSliderItem"> | string | null
    description_tr?: StringNullableFilter<"HomeSliderItem"> | string | null
    description_en?: StringNullableFilter<"HomeSliderItem"> | string | null
    description_de?: StringNullableFilter<"HomeSliderItem"> | string | null
    description_ru?: StringNullableFilter<"HomeSliderItem"> | string | null
    imageUrl?: StringNullableFilter<"HomeSliderItem"> | string | null
    linkUrl?: StringNullableFilter<"HomeSliderItem"> | string | null
    order?: IntFilter<"HomeSliderItem"> | number
    isActive?: BoolFilter<"HomeSliderItem"> | boolean
    startDate?: DateTimeNullableFilter<"HomeSliderItem"> | Date | string | null
    endDate?: DateTimeNullableFilter<"HomeSliderItem"> | Date | string | null
    createdAt?: DateTimeFilter<"HomeSliderItem"> | Date | string
    updatedAt?: DateTimeFilter<"HomeSliderItem"> | Date | string
    homeSlider?: XOR<HomeSliderScalarRelationFilter, HomeSliderWhereInput>
  }, "id" | "homeSliderId_order">

  export type HomeSliderItemOrderByWithAggregationInput = {
    id?: SortOrder
    homeSliderId?: SortOrder
    title_tr?: SortOrderInput | SortOrder
    title_en?: SortOrderInput | SortOrder
    title_de?: SortOrderInput | SortOrder
    title_ru?: SortOrderInput | SortOrder
    description_tr?: SortOrderInput | SortOrder
    description_en?: SortOrderInput | SortOrder
    description_de?: SortOrderInput | SortOrder
    description_ru?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    linkUrl?: SortOrderInput | SortOrder
    order?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HomeSliderItemCountOrderByAggregateInput
    _avg?: HomeSliderItemAvgOrderByAggregateInput
    _max?: HomeSliderItemMaxOrderByAggregateInput
    _min?: HomeSliderItemMinOrderByAggregateInput
    _sum?: HomeSliderItemSumOrderByAggregateInput
  }

  export type HomeSliderItemScalarWhereWithAggregatesInput = {
    AND?: HomeSliderItemScalarWhereWithAggregatesInput | HomeSliderItemScalarWhereWithAggregatesInput[]
    OR?: HomeSliderItemScalarWhereWithAggregatesInput[]
    NOT?: HomeSliderItemScalarWhereWithAggregatesInput | HomeSliderItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HomeSliderItem"> | number
    homeSliderId?: IntWithAggregatesFilter<"HomeSliderItem"> | number
    title_tr?: StringNullableWithAggregatesFilter<"HomeSliderItem"> | string | null
    title_en?: StringNullableWithAggregatesFilter<"HomeSliderItem"> | string | null
    title_de?: StringNullableWithAggregatesFilter<"HomeSliderItem"> | string | null
    title_ru?: StringNullableWithAggregatesFilter<"HomeSliderItem"> | string | null
    description_tr?: StringNullableWithAggregatesFilter<"HomeSliderItem"> | string | null
    description_en?: StringNullableWithAggregatesFilter<"HomeSliderItem"> | string | null
    description_de?: StringNullableWithAggregatesFilter<"HomeSliderItem"> | string | null
    description_ru?: StringNullableWithAggregatesFilter<"HomeSliderItem"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"HomeSliderItem"> | string | null
    linkUrl?: StringNullableWithAggregatesFilter<"HomeSliderItem"> | string | null
    order?: IntWithAggregatesFilter<"HomeSliderItem"> | number
    isActive?: BoolWithAggregatesFilter<"HomeSliderItem"> | boolean
    startDate?: DateTimeNullableWithAggregatesFilter<"HomeSliderItem"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"HomeSliderItem"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"HomeSliderItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HomeSliderItem"> | Date | string
  }

  export type CoverImageWhereInput = {
    AND?: CoverImageWhereInput | CoverImageWhereInput[]
    OR?: CoverImageWhereInput[]
    NOT?: CoverImageWhereInput | CoverImageWhereInput[]
    id?: StringFilter<"CoverImage"> | string
    type?: EnumCoverTypeFilter<"CoverImage"> | $Enums.CoverType
    imageUrl?: StringFilter<"CoverImage"> | string
    isActive?: BoolFilter<"CoverImage"> | boolean
    order?: IntFilter<"CoverImage"> | number
    createdAt?: DateTimeFilter<"CoverImage"> | Date | string
    updatedAt?: DateTimeFilter<"CoverImage"> | Date | string
  }

  export type CoverImageOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoverImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    type?: $Enums.CoverType
    AND?: CoverImageWhereInput | CoverImageWhereInput[]
    OR?: CoverImageWhereInput[]
    NOT?: CoverImageWhereInput | CoverImageWhereInput[]
    imageUrl?: StringFilter<"CoverImage"> | string
    isActive?: BoolFilter<"CoverImage"> | boolean
    order?: IntFilter<"CoverImage"> | number
    createdAt?: DateTimeFilter<"CoverImage"> | Date | string
    updatedAt?: DateTimeFilter<"CoverImage"> | Date | string
  }, "id" | "type">

  export type CoverImageOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CoverImageCountOrderByAggregateInput
    _avg?: CoverImageAvgOrderByAggregateInput
    _max?: CoverImageMaxOrderByAggregateInput
    _min?: CoverImageMinOrderByAggregateInput
    _sum?: CoverImageSumOrderByAggregateInput
  }

  export type CoverImageScalarWhereWithAggregatesInput = {
    AND?: CoverImageScalarWhereWithAggregatesInput | CoverImageScalarWhereWithAggregatesInput[]
    OR?: CoverImageScalarWhereWithAggregatesInput[]
    NOT?: CoverImageScalarWhereWithAggregatesInput | CoverImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CoverImage"> | string
    type?: EnumCoverTypeWithAggregatesFilter<"CoverImage"> | $Enums.CoverType
    imageUrl?: StringWithAggregatesFilter<"CoverImage"> | string
    isActive?: BoolWithAggregatesFilter<"CoverImage"> | boolean
    order?: IntWithAggregatesFilter<"CoverImage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CoverImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CoverImage"> | Date | string
  }

  export type SuccessHeroWhereInput = {
    AND?: SuccessHeroWhereInput | SuccessHeroWhereInput[]
    OR?: SuccessHeroWhereInput[]
    NOT?: SuccessHeroWhereInput | SuccessHeroWhereInput[]
    id?: StringFilter<"SuccessHero"> | string
    imageUrl?: StringFilter<"SuccessHero"> | string
    isActive?: BoolFilter<"SuccessHero"> | boolean
    title_tr?: StringFilter<"SuccessHero"> | string
    title_en?: StringFilter<"SuccessHero"> | string
    title_de?: StringFilter<"SuccessHero"> | string
    title_ru?: StringFilter<"SuccessHero"> | string
    text_tr?: StringFilter<"SuccessHero"> | string
    text_en?: StringFilter<"SuccessHero"> | string
    text_de?: StringFilter<"SuccessHero"> | string
    text_ru?: StringFilter<"SuccessHero"> | string
    createdAt?: DateTimeFilter<"SuccessHero"> | Date | string
    updatedAt?: DateTimeFilter<"SuccessHero"> | Date | string
  }

  export type SuccessHeroOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    title_tr?: SortOrder
    title_en?: SortOrder
    title_de?: SortOrder
    title_ru?: SortOrder
    text_tr?: SortOrder
    text_en?: SortOrder
    text_de?: SortOrder
    text_ru?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuccessHeroWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SuccessHeroWhereInput | SuccessHeroWhereInput[]
    OR?: SuccessHeroWhereInput[]
    NOT?: SuccessHeroWhereInput | SuccessHeroWhereInput[]
    imageUrl?: StringFilter<"SuccessHero"> | string
    isActive?: BoolFilter<"SuccessHero"> | boolean
    title_tr?: StringFilter<"SuccessHero"> | string
    title_en?: StringFilter<"SuccessHero"> | string
    title_de?: StringFilter<"SuccessHero"> | string
    title_ru?: StringFilter<"SuccessHero"> | string
    text_tr?: StringFilter<"SuccessHero"> | string
    text_en?: StringFilter<"SuccessHero"> | string
    text_de?: StringFilter<"SuccessHero"> | string
    text_ru?: StringFilter<"SuccessHero"> | string
    createdAt?: DateTimeFilter<"SuccessHero"> | Date | string
    updatedAt?: DateTimeFilter<"SuccessHero"> | Date | string
  }, "id">

  export type SuccessHeroOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    title_tr?: SortOrder
    title_en?: SortOrder
    title_de?: SortOrder
    title_ru?: SortOrder
    text_tr?: SortOrder
    text_en?: SortOrder
    text_de?: SortOrder
    text_ru?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SuccessHeroCountOrderByAggregateInput
    _max?: SuccessHeroMaxOrderByAggregateInput
    _min?: SuccessHeroMinOrderByAggregateInput
  }

  export type SuccessHeroScalarWhereWithAggregatesInput = {
    AND?: SuccessHeroScalarWhereWithAggregatesInput | SuccessHeroScalarWhereWithAggregatesInput[]
    OR?: SuccessHeroScalarWhereWithAggregatesInput[]
    NOT?: SuccessHeroScalarWhereWithAggregatesInput | SuccessHeroScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SuccessHero"> | string
    imageUrl?: StringWithAggregatesFilter<"SuccessHero"> | string
    isActive?: BoolWithAggregatesFilter<"SuccessHero"> | boolean
    title_tr?: StringWithAggregatesFilter<"SuccessHero"> | string
    title_en?: StringWithAggregatesFilter<"SuccessHero"> | string
    title_de?: StringWithAggregatesFilter<"SuccessHero"> | string
    title_ru?: StringWithAggregatesFilter<"SuccessHero"> | string
    text_tr?: StringWithAggregatesFilter<"SuccessHero"> | string
    text_en?: StringWithAggregatesFilter<"SuccessHero"> | string
    text_de?: StringWithAggregatesFilter<"SuccessHero"> | string
    text_ru?: StringWithAggregatesFilter<"SuccessHero"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SuccessHero"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SuccessHero"> | Date | string
  }

  export type SuccessModelReviewWhereInput = {
    AND?: SuccessModelReviewWhereInput | SuccessModelReviewWhereInput[]
    OR?: SuccessModelReviewWhereInput[]
    NOT?: SuccessModelReviewWhereInput | SuccessModelReviewWhereInput[]
    id?: StringFilter<"SuccessModelReview"> | string
    imageUrl?: StringFilter<"SuccessModelReview"> | string
    isActive?: BoolFilter<"SuccessModelReview"> | boolean
    title_tr?: StringFilter<"SuccessModelReview"> | string
    title_en?: StringFilter<"SuccessModelReview"> | string
    title_de?: StringFilter<"SuccessModelReview"> | string
    title_ru?: StringFilter<"SuccessModelReview"> | string
    text_tr?: StringFilter<"SuccessModelReview"> | string
    text_en?: StringFilter<"SuccessModelReview"> | string
    text_de?: StringFilter<"SuccessModelReview"> | string
    text_ru?: StringFilter<"SuccessModelReview"> | string
    createdAt?: DateTimeFilter<"SuccessModelReview"> | Date | string
    updatedAt?: DateTimeFilter<"SuccessModelReview"> | Date | string
  }

  export type SuccessModelReviewOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    title_tr?: SortOrder
    title_en?: SortOrder
    title_de?: SortOrder
    title_ru?: SortOrder
    text_tr?: SortOrder
    text_en?: SortOrder
    text_de?: SortOrder
    text_ru?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuccessModelReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SuccessModelReviewWhereInput | SuccessModelReviewWhereInput[]
    OR?: SuccessModelReviewWhereInput[]
    NOT?: SuccessModelReviewWhereInput | SuccessModelReviewWhereInput[]
    imageUrl?: StringFilter<"SuccessModelReview"> | string
    isActive?: BoolFilter<"SuccessModelReview"> | boolean
    title_tr?: StringFilter<"SuccessModelReview"> | string
    title_en?: StringFilter<"SuccessModelReview"> | string
    title_de?: StringFilter<"SuccessModelReview"> | string
    title_ru?: StringFilter<"SuccessModelReview"> | string
    text_tr?: StringFilter<"SuccessModelReview"> | string
    text_en?: StringFilter<"SuccessModelReview"> | string
    text_de?: StringFilter<"SuccessModelReview"> | string
    text_ru?: StringFilter<"SuccessModelReview"> | string
    createdAt?: DateTimeFilter<"SuccessModelReview"> | Date | string
    updatedAt?: DateTimeFilter<"SuccessModelReview"> | Date | string
  }, "id">

  export type SuccessModelReviewOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    title_tr?: SortOrder
    title_en?: SortOrder
    title_de?: SortOrder
    title_ru?: SortOrder
    text_tr?: SortOrder
    text_en?: SortOrder
    text_de?: SortOrder
    text_ru?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SuccessModelReviewCountOrderByAggregateInput
    _max?: SuccessModelReviewMaxOrderByAggregateInput
    _min?: SuccessModelReviewMinOrderByAggregateInput
  }

  export type SuccessModelReviewScalarWhereWithAggregatesInput = {
    AND?: SuccessModelReviewScalarWhereWithAggregatesInput | SuccessModelReviewScalarWhereWithAggregatesInput[]
    OR?: SuccessModelReviewScalarWhereWithAggregatesInput[]
    NOT?: SuccessModelReviewScalarWhereWithAggregatesInput | SuccessModelReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SuccessModelReview"> | string
    imageUrl?: StringWithAggregatesFilter<"SuccessModelReview"> | string
    isActive?: BoolWithAggregatesFilter<"SuccessModelReview"> | boolean
    title_tr?: StringWithAggregatesFilter<"SuccessModelReview"> | string
    title_en?: StringWithAggregatesFilter<"SuccessModelReview"> | string
    title_de?: StringWithAggregatesFilter<"SuccessModelReview"> | string
    title_ru?: StringWithAggregatesFilter<"SuccessModelReview"> | string
    text_tr?: StringWithAggregatesFilter<"SuccessModelReview"> | string
    text_en?: StringWithAggregatesFilter<"SuccessModelReview"> | string
    text_de?: StringWithAggregatesFilter<"SuccessModelReview"> | string
    text_ru?: StringWithAggregatesFilter<"SuccessModelReview"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SuccessModelReview"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SuccessModelReview"> | Date | string
  }

  export type FeaturedItemWhereInput = {
    AND?: FeaturedItemWhereInput | FeaturedItemWhereInput[]
    OR?: FeaturedItemWhereInput[]
    NOT?: FeaturedItemWhereInput | FeaturedItemWhereInput[]
    id?: StringFilter<"FeaturedItem"> | string
    imageUrl?: StringFilter<"FeaturedItem"> | string
    title_tr?: StringFilter<"FeaturedItem"> | string
    title_en?: StringFilter<"FeaturedItem"> | string
    title_de?: StringFilter<"FeaturedItem"> | string
    title_ru?: StringFilter<"FeaturedItem"> | string
    content_tr?: StringFilter<"FeaturedItem"> | string
    content_en?: StringFilter<"FeaturedItem"> | string
    content_de?: StringFilter<"FeaturedItem"> | string
    content_ru?: StringFilter<"FeaturedItem"> | string
    order?: IntFilter<"FeaturedItem"> | number
    isActive?: BoolFilter<"FeaturedItem"> | boolean
    createdAt?: DateTimeFilter<"FeaturedItem"> | Date | string
    updatedAt?: DateTimeFilter<"FeaturedItem"> | Date | string
  }

  export type FeaturedItemOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    title_tr?: SortOrder
    title_en?: SortOrder
    title_de?: SortOrder
    title_ru?: SortOrder
    content_tr?: SortOrder
    content_en?: SortOrder
    content_de?: SortOrder
    content_ru?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeaturedItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeaturedItemWhereInput | FeaturedItemWhereInput[]
    OR?: FeaturedItemWhereInput[]
    NOT?: FeaturedItemWhereInput | FeaturedItemWhereInput[]
    imageUrl?: StringFilter<"FeaturedItem"> | string
    title_tr?: StringFilter<"FeaturedItem"> | string
    title_en?: StringFilter<"FeaturedItem"> | string
    title_de?: StringFilter<"FeaturedItem"> | string
    title_ru?: StringFilter<"FeaturedItem"> | string
    content_tr?: StringFilter<"FeaturedItem"> | string
    content_en?: StringFilter<"FeaturedItem"> | string
    content_de?: StringFilter<"FeaturedItem"> | string
    content_ru?: StringFilter<"FeaturedItem"> | string
    order?: IntFilter<"FeaturedItem"> | number
    isActive?: BoolFilter<"FeaturedItem"> | boolean
    createdAt?: DateTimeFilter<"FeaturedItem"> | Date | string
    updatedAt?: DateTimeFilter<"FeaturedItem"> | Date | string
  }, "id">

  export type FeaturedItemOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    title_tr?: SortOrder
    title_en?: SortOrder
    title_de?: SortOrder
    title_ru?: SortOrder
    content_tr?: SortOrder
    content_en?: SortOrder
    content_de?: SortOrder
    content_ru?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FeaturedItemCountOrderByAggregateInput
    _avg?: FeaturedItemAvgOrderByAggregateInput
    _max?: FeaturedItemMaxOrderByAggregateInput
    _min?: FeaturedItemMinOrderByAggregateInput
    _sum?: FeaturedItemSumOrderByAggregateInput
  }

  export type FeaturedItemScalarWhereWithAggregatesInput = {
    AND?: FeaturedItemScalarWhereWithAggregatesInput | FeaturedItemScalarWhereWithAggregatesInput[]
    OR?: FeaturedItemScalarWhereWithAggregatesInput[]
    NOT?: FeaturedItemScalarWhereWithAggregatesInput | FeaturedItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FeaturedItem"> | string
    imageUrl?: StringWithAggregatesFilter<"FeaturedItem"> | string
    title_tr?: StringWithAggregatesFilter<"FeaturedItem"> | string
    title_en?: StringWithAggregatesFilter<"FeaturedItem"> | string
    title_de?: StringWithAggregatesFilter<"FeaturedItem"> | string
    title_ru?: StringWithAggregatesFilter<"FeaturedItem"> | string
    content_tr?: StringWithAggregatesFilter<"FeaturedItem"> | string
    content_en?: StringWithAggregatesFilter<"FeaturedItem"> | string
    content_de?: StringWithAggregatesFilter<"FeaturedItem"> | string
    content_ru?: StringWithAggregatesFilter<"FeaturedItem"> | string
    order?: IntWithAggregatesFilter<"FeaturedItem"> | number
    isActive?: BoolWithAggregatesFilter<"FeaturedItem"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"FeaturedItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FeaturedItem"> | Date | string
  }

  export type NewsWhereInput = {
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    id?: StringFilter<"News"> | string
    imageUrl?: StringFilter<"News"> | string
    category?: StringNullableFilter<"News"> | string | null
    category_tr?: StringNullableFilter<"News"> | string | null
    category_en?: StringNullableFilter<"News"> | string | null
    category_de?: StringNullableFilter<"News"> | string | null
    category_ru?: StringNullableFilter<"News"> | string | null
    galleryUrls?: StringNullableListFilter<"News">
    title_tr?: StringFilter<"News"> | string
    title_en?: StringFilter<"News"> | string
    title_de?: StringFilter<"News"> | string
    title_ru?: StringFilter<"News"> | string
    content_tr?: StringFilter<"News"> | string
    content_en?: StringFilter<"News"> | string
    content_de?: StringFilter<"News"> | string
    content_ru?: StringFilter<"News"> | string
    description_tr?: StringNullableFilter<"News"> | string | null
    description_en?: StringNullableFilter<"News"> | string | null
    description_de?: StringNullableFilter<"News"> | string | null
    description_ru?: StringNullableFilter<"News"> | string | null
    publishedAt?: DateTimeFilter<"News"> | Date | string
    isActive?: BoolFilter<"News"> | boolean
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
  }

  export type NewsOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    category?: SortOrderInput | SortOrder
    category_tr?: SortOrderInput | SortOrder
    category_en?: SortOrderInput | SortOrder
    category_de?: SortOrderInput | SortOrder
    category_ru?: SortOrderInput | SortOrder
    galleryUrls?: SortOrder
    title_tr?: SortOrder
    title_en?: SortOrder
    title_de?: SortOrder
    title_ru?: SortOrder
    content_tr?: SortOrder
    content_en?: SortOrder
    content_de?: SortOrder
    content_ru?: SortOrder
    description_tr?: SortOrderInput | SortOrder
    description_en?: SortOrderInput | SortOrder
    description_de?: SortOrderInput | SortOrder
    description_ru?: SortOrderInput | SortOrder
    publishedAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    imageUrl?: StringFilter<"News"> | string
    category?: StringNullableFilter<"News"> | string | null
    category_tr?: StringNullableFilter<"News"> | string | null
    category_en?: StringNullableFilter<"News"> | string | null
    category_de?: StringNullableFilter<"News"> | string | null
    category_ru?: StringNullableFilter<"News"> | string | null
    galleryUrls?: StringNullableListFilter<"News">
    title_tr?: StringFilter<"News"> | string
    title_en?: StringFilter<"News"> | string
    title_de?: StringFilter<"News"> | string
    title_ru?: StringFilter<"News"> | string
    content_tr?: StringFilter<"News"> | string
    content_en?: StringFilter<"News"> | string
    content_de?: StringFilter<"News"> | string
    content_ru?: StringFilter<"News"> | string
    description_tr?: StringNullableFilter<"News"> | string | null
    description_en?: StringNullableFilter<"News"> | string | null
    description_de?: StringNullableFilter<"News"> | string | null
    description_ru?: StringNullableFilter<"News"> | string | null
    publishedAt?: DateTimeFilter<"News"> | Date | string
    isActive?: BoolFilter<"News"> | boolean
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
  }, "id">

  export type NewsOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    category?: SortOrderInput | SortOrder
    category_tr?: SortOrderInput | SortOrder
    category_en?: SortOrderInput | SortOrder
    category_de?: SortOrderInput | SortOrder
    category_ru?: SortOrderInput | SortOrder
    galleryUrls?: SortOrder
    title_tr?: SortOrder
    title_en?: SortOrder
    title_de?: SortOrder
    title_ru?: SortOrder
    content_tr?: SortOrder
    content_en?: SortOrder
    content_de?: SortOrder
    content_ru?: SortOrder
    description_tr?: SortOrderInput | SortOrder
    description_en?: SortOrderInput | SortOrder
    description_de?: SortOrderInput | SortOrder
    description_ru?: SortOrderInput | SortOrder
    publishedAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NewsCountOrderByAggregateInput
    _max?: NewsMaxOrderByAggregateInput
    _min?: NewsMinOrderByAggregateInput
  }

  export type NewsScalarWhereWithAggregatesInput = {
    AND?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    OR?: NewsScalarWhereWithAggregatesInput[]
    NOT?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"News"> | string
    imageUrl?: StringWithAggregatesFilter<"News"> | string
    category?: StringNullableWithAggregatesFilter<"News"> | string | null
    category_tr?: StringNullableWithAggregatesFilter<"News"> | string | null
    category_en?: StringNullableWithAggregatesFilter<"News"> | string | null
    category_de?: StringNullableWithAggregatesFilter<"News"> | string | null
    category_ru?: StringNullableWithAggregatesFilter<"News"> | string | null
    galleryUrls?: StringNullableListFilter<"News">
    title_tr?: StringWithAggregatesFilter<"News"> | string
    title_en?: StringWithAggregatesFilter<"News"> | string
    title_de?: StringWithAggregatesFilter<"News"> | string
    title_ru?: StringWithAggregatesFilter<"News"> | string
    content_tr?: StringWithAggregatesFilter<"News"> | string
    content_en?: StringWithAggregatesFilter<"News"> | string
    content_de?: StringWithAggregatesFilter<"News"> | string
    content_ru?: StringWithAggregatesFilter<"News"> | string
    description_tr?: StringNullableWithAggregatesFilter<"News"> | string | null
    description_en?: StringNullableWithAggregatesFilter<"News"> | string | null
    description_de?: StringNullableWithAggregatesFilter<"News"> | string | null
    description_ru?: StringNullableWithAggregatesFilter<"News"> | string | null
    publishedAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
    isActive?: BoolWithAggregatesFilter<"News"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
  }

  export type AboutPageWhereInput = {
    AND?: AboutPageWhereInput | AboutPageWhereInput[]
    OR?: AboutPageWhereInput[]
    NOT?: AboutPageWhereInput | AboutPageWhereInput[]
    id?: StringFilter<"AboutPage"> | string
    intro_title_tr?: StringFilter<"AboutPage"> | string
    intro_title_en?: StringFilter<"AboutPage"> | string
    intro_title_de?: StringFilter<"AboutPage"> | string
    intro_title_ru?: StringFilter<"AboutPage"> | string
    intro_text_tr?: StringFilter<"AboutPage"> | string
    intro_text_en?: StringFilter<"AboutPage"> | string
    intro_text_de?: StringFilter<"AboutPage"> | string
    intro_text_ru?: StringFilter<"AboutPage"> | string
    vision_imageUrl?: StringFilter<"AboutPage"> | string
    vision_title_tr?: StringFilter<"AboutPage"> | string
    vision_title_en?: StringFilter<"AboutPage"> | string
    vision_title_de?: StringFilter<"AboutPage"> | string
    vision_title_ru?: StringFilter<"AboutPage"> | string
    vision_slogan_tr?: StringFilter<"AboutPage"> | string
    vision_slogan_en?: StringFilter<"AboutPage"> | string
    vision_slogan_de?: StringFilter<"AboutPage"> | string
    vision_slogan_ru?: StringFilter<"AboutPage"> | string
    vision_text_tr?: StringFilter<"AboutPage"> | string
    vision_text_en?: StringFilter<"AboutPage"> | string
    vision_text_de?: StringFilter<"AboutPage"> | string
    vision_text_ru?: StringFilter<"AboutPage"> | string
    mission_imageUrl?: StringFilter<"AboutPage"> | string
    mission_title_tr?: StringFilter<"AboutPage"> | string
    mission_title_en?: StringFilter<"AboutPage"> | string
    mission_title_de?: StringFilter<"AboutPage"> | string
    mission_title_ru?: StringFilter<"AboutPage"> | string
    mission_slogan_tr?: StringFilter<"AboutPage"> | string
    mission_slogan_en?: StringFilter<"AboutPage"> | string
    mission_slogan_de?: StringFilter<"AboutPage"> | string
    mission_slogan_ru?: StringFilter<"AboutPage"> | string
    mission_text_tr?: StringFilter<"AboutPage"> | string
    mission_text_en?: StringFilter<"AboutPage"> | string
    mission_text_de?: StringFilter<"AboutPage"> | string
    mission_text_ru?: StringFilter<"AboutPage"> | string
    isActive?: BoolFilter<"AboutPage"> | boolean
    createdAt?: DateTimeFilter<"AboutPage"> | Date | string
    updatedAt?: DateTimeFilter<"AboutPage"> | Date | string
  }

  export type AboutPageOrderByWithRelationInput = {
    id?: SortOrder
    intro_title_tr?: SortOrder
    intro_title_en?: SortOrder
    intro_title_de?: SortOrder
    intro_title_ru?: SortOrder
    intro_text_tr?: SortOrder
    intro_text_en?: SortOrder
    intro_text_de?: SortOrder
    intro_text_ru?: SortOrder
    vision_imageUrl?: SortOrder
    vision_title_tr?: SortOrder
    vision_title_en?: SortOrder
    vision_title_de?: SortOrder
    vision_title_ru?: SortOrder
    vision_slogan_tr?: SortOrder
    vision_slogan_en?: SortOrder
    vision_slogan_de?: SortOrder
    vision_slogan_ru?: SortOrder
    vision_text_tr?: SortOrder
    vision_text_en?: SortOrder
    vision_text_de?: SortOrder
    vision_text_ru?: SortOrder
    mission_imageUrl?: SortOrder
    mission_title_tr?: SortOrder
    mission_title_en?: SortOrder
    mission_title_de?: SortOrder
    mission_title_ru?: SortOrder
    mission_slogan_tr?: SortOrder
    mission_slogan_en?: SortOrder
    mission_slogan_de?: SortOrder
    mission_slogan_ru?: SortOrder
    mission_text_tr?: SortOrder
    mission_text_en?: SortOrder
    mission_text_de?: SortOrder
    mission_text_ru?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutPageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AboutPageWhereInput | AboutPageWhereInput[]
    OR?: AboutPageWhereInput[]
    NOT?: AboutPageWhereInput | AboutPageWhereInput[]
    intro_title_tr?: StringFilter<"AboutPage"> | string
    intro_title_en?: StringFilter<"AboutPage"> | string
    intro_title_de?: StringFilter<"AboutPage"> | string
    intro_title_ru?: StringFilter<"AboutPage"> | string
    intro_text_tr?: StringFilter<"AboutPage"> | string
    intro_text_en?: StringFilter<"AboutPage"> | string
    intro_text_de?: StringFilter<"AboutPage"> | string
    intro_text_ru?: StringFilter<"AboutPage"> | string
    vision_imageUrl?: StringFilter<"AboutPage"> | string
    vision_title_tr?: StringFilter<"AboutPage"> | string
    vision_title_en?: StringFilter<"AboutPage"> | string
    vision_title_de?: StringFilter<"AboutPage"> | string
    vision_title_ru?: StringFilter<"AboutPage"> | string
    vision_slogan_tr?: StringFilter<"AboutPage"> | string
    vision_slogan_en?: StringFilter<"AboutPage"> | string
    vision_slogan_de?: StringFilter<"AboutPage"> | string
    vision_slogan_ru?: StringFilter<"AboutPage"> | string
    vision_text_tr?: StringFilter<"AboutPage"> | string
    vision_text_en?: StringFilter<"AboutPage"> | string
    vision_text_de?: StringFilter<"AboutPage"> | string
    vision_text_ru?: StringFilter<"AboutPage"> | string
    mission_imageUrl?: StringFilter<"AboutPage"> | string
    mission_title_tr?: StringFilter<"AboutPage"> | string
    mission_title_en?: StringFilter<"AboutPage"> | string
    mission_title_de?: StringFilter<"AboutPage"> | string
    mission_title_ru?: StringFilter<"AboutPage"> | string
    mission_slogan_tr?: StringFilter<"AboutPage"> | string
    mission_slogan_en?: StringFilter<"AboutPage"> | string
    mission_slogan_de?: StringFilter<"AboutPage"> | string
    mission_slogan_ru?: StringFilter<"AboutPage"> | string
    mission_text_tr?: StringFilter<"AboutPage"> | string
    mission_text_en?: StringFilter<"AboutPage"> | string
    mission_text_de?: StringFilter<"AboutPage"> | string
    mission_text_ru?: StringFilter<"AboutPage"> | string
    isActive?: BoolFilter<"AboutPage"> | boolean
    createdAt?: DateTimeFilter<"AboutPage"> | Date | string
    updatedAt?: DateTimeFilter<"AboutPage"> | Date | string
  }, "id">

  export type AboutPageOrderByWithAggregationInput = {
    id?: SortOrder
    intro_title_tr?: SortOrder
    intro_title_en?: SortOrder
    intro_title_de?: SortOrder
    intro_title_ru?: SortOrder
    intro_text_tr?: SortOrder
    intro_text_en?: SortOrder
    intro_text_de?: SortOrder
    intro_text_ru?: SortOrder
    vision_imageUrl?: SortOrder
    vision_title_tr?: SortOrder
    vision_title_en?: SortOrder
    vision_title_de?: SortOrder
    vision_title_ru?: SortOrder
    vision_slogan_tr?: SortOrder
    vision_slogan_en?: SortOrder
    vision_slogan_de?: SortOrder
    vision_slogan_ru?: SortOrder
    vision_text_tr?: SortOrder
    vision_text_en?: SortOrder
    vision_text_de?: SortOrder
    vision_text_ru?: SortOrder
    mission_imageUrl?: SortOrder
    mission_title_tr?: SortOrder
    mission_title_en?: SortOrder
    mission_title_de?: SortOrder
    mission_title_ru?: SortOrder
    mission_slogan_tr?: SortOrder
    mission_slogan_en?: SortOrder
    mission_slogan_de?: SortOrder
    mission_slogan_ru?: SortOrder
    mission_text_tr?: SortOrder
    mission_text_en?: SortOrder
    mission_text_de?: SortOrder
    mission_text_ru?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AboutPageCountOrderByAggregateInput
    _max?: AboutPageMaxOrderByAggregateInput
    _min?: AboutPageMinOrderByAggregateInput
  }

  export type AboutPageScalarWhereWithAggregatesInput = {
    AND?: AboutPageScalarWhereWithAggregatesInput | AboutPageScalarWhereWithAggregatesInput[]
    OR?: AboutPageScalarWhereWithAggregatesInput[]
    NOT?: AboutPageScalarWhereWithAggregatesInput | AboutPageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AboutPage"> | string
    intro_title_tr?: StringWithAggregatesFilter<"AboutPage"> | string
    intro_title_en?: StringWithAggregatesFilter<"AboutPage"> | string
    intro_title_de?: StringWithAggregatesFilter<"AboutPage"> | string
    intro_title_ru?: StringWithAggregatesFilter<"AboutPage"> | string
    intro_text_tr?: StringWithAggregatesFilter<"AboutPage"> | string
    intro_text_en?: StringWithAggregatesFilter<"AboutPage"> | string
    intro_text_de?: StringWithAggregatesFilter<"AboutPage"> | string
    intro_text_ru?: StringWithAggregatesFilter<"AboutPage"> | string
    vision_imageUrl?: StringWithAggregatesFilter<"AboutPage"> | string
    vision_title_tr?: StringWithAggregatesFilter<"AboutPage"> | string
    vision_title_en?: StringWithAggregatesFilter<"AboutPage"> | string
    vision_title_de?: StringWithAggregatesFilter<"AboutPage"> | string
    vision_title_ru?: StringWithAggregatesFilter<"AboutPage"> | string
    vision_slogan_tr?: StringWithAggregatesFilter<"AboutPage"> | string
    vision_slogan_en?: StringWithAggregatesFilter<"AboutPage"> | string
    vision_slogan_de?: StringWithAggregatesFilter<"AboutPage"> | string
    vision_slogan_ru?: StringWithAggregatesFilter<"AboutPage"> | string
    vision_text_tr?: StringWithAggregatesFilter<"AboutPage"> | string
    vision_text_en?: StringWithAggregatesFilter<"AboutPage"> | string
    vision_text_de?: StringWithAggregatesFilter<"AboutPage"> | string
    vision_text_ru?: StringWithAggregatesFilter<"AboutPage"> | string
    mission_imageUrl?: StringWithAggregatesFilter<"AboutPage"> | string
    mission_title_tr?: StringWithAggregatesFilter<"AboutPage"> | string
    mission_title_en?: StringWithAggregatesFilter<"AboutPage"> | string
    mission_title_de?: StringWithAggregatesFilter<"AboutPage"> | string
    mission_title_ru?: StringWithAggregatesFilter<"AboutPage"> | string
    mission_slogan_tr?: StringWithAggregatesFilter<"AboutPage"> | string
    mission_slogan_en?: StringWithAggregatesFilter<"AboutPage"> | string
    mission_slogan_de?: StringWithAggregatesFilter<"AboutPage"> | string
    mission_slogan_ru?: StringWithAggregatesFilter<"AboutPage"> | string
    mission_text_tr?: StringWithAggregatesFilter<"AboutPage"> | string
    mission_text_en?: StringWithAggregatesFilter<"AboutPage"> | string
    mission_text_de?: StringWithAggregatesFilter<"AboutPage"> | string
    mission_text_ru?: StringWithAggregatesFilter<"AboutPage"> | string
    isActive?: BoolWithAggregatesFilter<"AboutPage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AboutPage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AboutPage"> | Date | string
  }

  export type ContactInfoWhereInput = {
    AND?: ContactInfoWhereInput | ContactInfoWhereInput[]
    OR?: ContactInfoWhereInput[]
    NOT?: ContactInfoWhereInput | ContactInfoWhereInput[]
    id?: StringFilter<"ContactInfo"> | string
    address_tr?: StringFilter<"ContactInfo"> | string
    address_en?: StringFilter<"ContactInfo"> | string
    address_de?: StringFilter<"ContactInfo"> | string
    address_ru?: StringFilter<"ContactInfo"> | string
    phone?: StringFilter<"ContactInfo"> | string
    email?: StringFilter<"ContactInfo"> | string
    locationUrl?: StringFilter<"ContactInfo"> | string
    isActive?: BoolFilter<"ContactInfo"> | boolean
    createdAt?: DateTimeFilter<"ContactInfo"> | Date | string
    updatedAt?: DateTimeFilter<"ContactInfo"> | Date | string
  }

  export type ContactInfoOrderByWithRelationInput = {
    id?: SortOrder
    address_tr?: SortOrder
    address_en?: SortOrder
    address_de?: SortOrder
    address_ru?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    locationUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactInfoWhereInput | ContactInfoWhereInput[]
    OR?: ContactInfoWhereInput[]
    NOT?: ContactInfoWhereInput | ContactInfoWhereInput[]
    address_tr?: StringFilter<"ContactInfo"> | string
    address_en?: StringFilter<"ContactInfo"> | string
    address_de?: StringFilter<"ContactInfo"> | string
    address_ru?: StringFilter<"ContactInfo"> | string
    phone?: StringFilter<"ContactInfo"> | string
    email?: StringFilter<"ContactInfo"> | string
    locationUrl?: StringFilter<"ContactInfo"> | string
    isActive?: BoolFilter<"ContactInfo"> | boolean
    createdAt?: DateTimeFilter<"ContactInfo"> | Date | string
    updatedAt?: DateTimeFilter<"ContactInfo"> | Date | string
  }, "id">

  export type ContactInfoOrderByWithAggregationInput = {
    id?: SortOrder
    address_tr?: SortOrder
    address_en?: SortOrder
    address_de?: SortOrder
    address_ru?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    locationUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactInfoCountOrderByAggregateInput
    _max?: ContactInfoMaxOrderByAggregateInput
    _min?: ContactInfoMinOrderByAggregateInput
  }

  export type ContactInfoScalarWhereWithAggregatesInput = {
    AND?: ContactInfoScalarWhereWithAggregatesInput | ContactInfoScalarWhereWithAggregatesInput[]
    OR?: ContactInfoScalarWhereWithAggregatesInput[]
    NOT?: ContactInfoScalarWhereWithAggregatesInput | ContactInfoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactInfo"> | string
    address_tr?: StringWithAggregatesFilter<"ContactInfo"> | string
    address_en?: StringWithAggregatesFilter<"ContactInfo"> | string
    address_de?: StringWithAggregatesFilter<"ContactInfo"> | string
    address_ru?: StringWithAggregatesFilter<"ContactInfo"> | string
    phone?: StringWithAggregatesFilter<"ContactInfo"> | string
    email?: StringWithAggregatesFilter<"ContactInfo"> | string
    locationUrl?: StringWithAggregatesFilter<"ContactInfo"> | string
    isActive?: BoolWithAggregatesFilter<"ContactInfo"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ContactInfo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContactInfo"> | Date | string
  }

  export type FAQWhereInput = {
    AND?: FAQWhereInput | FAQWhereInput[]
    OR?: FAQWhereInput[]
    NOT?: FAQWhereInput | FAQWhereInput[]
    id?: StringFilter<"FAQ"> | string
    question_tr?: StringFilter<"FAQ"> | string
    question_en?: StringFilter<"FAQ"> | string
    question_de?: StringFilter<"FAQ"> | string
    question_ru?: StringFilter<"FAQ"> | string
    answer_tr?: StringFilter<"FAQ"> | string
    answer_en?: StringFilter<"FAQ"> | string
    answer_de?: StringFilter<"FAQ"> | string
    answer_ru?: StringFilter<"FAQ"> | string
    order?: IntFilter<"FAQ"> | number
    isActive?: BoolFilter<"FAQ"> | boolean
    createdAt?: DateTimeFilter<"FAQ"> | Date | string
    updatedAt?: DateTimeFilter<"FAQ"> | Date | string
  }

  export type FAQOrderByWithRelationInput = {
    id?: SortOrder
    question_tr?: SortOrder
    question_en?: SortOrder
    question_de?: SortOrder
    question_ru?: SortOrder
    answer_tr?: SortOrder
    answer_en?: SortOrder
    answer_de?: SortOrder
    answer_ru?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FAQWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FAQWhereInput | FAQWhereInput[]
    OR?: FAQWhereInput[]
    NOT?: FAQWhereInput | FAQWhereInput[]
    question_tr?: StringFilter<"FAQ"> | string
    question_en?: StringFilter<"FAQ"> | string
    question_de?: StringFilter<"FAQ"> | string
    question_ru?: StringFilter<"FAQ"> | string
    answer_tr?: StringFilter<"FAQ"> | string
    answer_en?: StringFilter<"FAQ"> | string
    answer_de?: StringFilter<"FAQ"> | string
    answer_ru?: StringFilter<"FAQ"> | string
    order?: IntFilter<"FAQ"> | number
    isActive?: BoolFilter<"FAQ"> | boolean
    createdAt?: DateTimeFilter<"FAQ"> | Date | string
    updatedAt?: DateTimeFilter<"FAQ"> | Date | string
  }, "id">

  export type FAQOrderByWithAggregationInput = {
    id?: SortOrder
    question_tr?: SortOrder
    question_en?: SortOrder
    question_de?: SortOrder
    question_ru?: SortOrder
    answer_tr?: SortOrder
    answer_en?: SortOrder
    answer_de?: SortOrder
    answer_ru?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FAQCountOrderByAggregateInput
    _avg?: FAQAvgOrderByAggregateInput
    _max?: FAQMaxOrderByAggregateInput
    _min?: FAQMinOrderByAggregateInput
    _sum?: FAQSumOrderByAggregateInput
  }

  export type FAQScalarWhereWithAggregatesInput = {
    AND?: FAQScalarWhereWithAggregatesInput | FAQScalarWhereWithAggregatesInput[]
    OR?: FAQScalarWhereWithAggregatesInput[]
    NOT?: FAQScalarWhereWithAggregatesInput | FAQScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FAQ"> | string
    question_tr?: StringWithAggregatesFilter<"FAQ"> | string
    question_en?: StringWithAggregatesFilter<"FAQ"> | string
    question_de?: StringWithAggregatesFilter<"FAQ"> | string
    question_ru?: StringWithAggregatesFilter<"FAQ"> | string
    answer_tr?: StringWithAggregatesFilter<"FAQ"> | string
    answer_en?: StringWithAggregatesFilter<"FAQ"> | string
    answer_de?: StringWithAggregatesFilter<"FAQ"> | string
    answer_ru?: StringWithAggregatesFilter<"FAQ"> | string
    order?: IntWithAggregatesFilter<"FAQ"> | number
    isActive?: BoolWithAggregatesFilter<"FAQ"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"FAQ"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FAQ"> | Date | string
  }

  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    id?: StringFilter<"Application"> | string
    fullName?: StringFilter<"Application"> | string
    birthDate?: DateTimeFilter<"Application"> | Date | string
    gender?: EnumGenderFilter<"Application"> | $Enums.Gender
    nationality?: StringFilter<"Application"> | string
    email?: StringFilter<"Application"> | string
    phone?: StringFilter<"Application"> | string
    city?: StringFilter<"Application"> | string
    heightCm?: IntFilter<"Application"> | number
    chestCm?: IntFilter<"Application"> | number
    hipsCm?: IntFilter<"Application"> | number
    footCm?: IntFilter<"Application"> | number
    waistCm?: IntFilter<"Application"> | number
    eyeColor?: StringFilter<"Application"> | string
    selfieUrl?: StringFilter<"Application"> | string
    profilePhoto?: StringFilter<"Application"> | string
    fullBodyPhoto?: StringFilter<"Application"> | string
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    adminNotes?: StringNullableFilter<"Application"> | string | null
    submittedAt?: DateTimeFilter<"Application"> | Date | string
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    birthDate?: SortOrder
    gender?: SortOrder
    nationality?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    heightCm?: SortOrder
    chestCm?: SortOrder
    hipsCm?: SortOrder
    footCm?: SortOrder
    waistCm?: SortOrder
    eyeColor?: SortOrder
    selfieUrl?: SortOrder
    profilePhoto?: SortOrder
    fullBodyPhoto?: SortOrder
    status?: SortOrder
    adminNotes?: SortOrderInput | SortOrder
    submittedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    fullName?: StringFilter<"Application"> | string
    birthDate?: DateTimeFilter<"Application"> | Date | string
    gender?: EnumGenderFilter<"Application"> | $Enums.Gender
    nationality?: StringFilter<"Application"> | string
    email?: StringFilter<"Application"> | string
    phone?: StringFilter<"Application"> | string
    city?: StringFilter<"Application"> | string
    heightCm?: IntFilter<"Application"> | number
    chestCm?: IntFilter<"Application"> | number
    hipsCm?: IntFilter<"Application"> | number
    footCm?: IntFilter<"Application"> | number
    waistCm?: IntFilter<"Application"> | number
    eyeColor?: StringFilter<"Application"> | string
    selfieUrl?: StringFilter<"Application"> | string
    profilePhoto?: StringFilter<"Application"> | string
    fullBodyPhoto?: StringFilter<"Application"> | string
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    adminNotes?: StringNullableFilter<"Application"> | string | null
    submittedAt?: DateTimeFilter<"Application"> | Date | string
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
  }, "id">

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    birthDate?: SortOrder
    gender?: SortOrder
    nationality?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    heightCm?: SortOrder
    chestCm?: SortOrder
    hipsCm?: SortOrder
    footCm?: SortOrder
    waistCm?: SortOrder
    eyeColor?: SortOrder
    selfieUrl?: SortOrder
    profilePhoto?: SortOrder
    fullBodyPhoto?: SortOrder
    status?: SortOrder
    adminNotes?: SortOrderInput | SortOrder
    submittedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _avg?: ApplicationAvgOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
    _sum?: ApplicationSumOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    OR?: ApplicationScalarWhereWithAggregatesInput[]
    NOT?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Application"> | string
    fullName?: StringWithAggregatesFilter<"Application"> | string
    birthDate?: DateTimeWithAggregatesFilter<"Application"> | Date | string
    gender?: EnumGenderWithAggregatesFilter<"Application"> | $Enums.Gender
    nationality?: StringWithAggregatesFilter<"Application"> | string
    email?: StringWithAggregatesFilter<"Application"> | string
    phone?: StringWithAggregatesFilter<"Application"> | string
    city?: StringWithAggregatesFilter<"Application"> | string
    heightCm?: IntWithAggregatesFilter<"Application"> | number
    chestCm?: IntWithAggregatesFilter<"Application"> | number
    hipsCm?: IntWithAggregatesFilter<"Application"> | number
    footCm?: IntWithAggregatesFilter<"Application"> | number
    waistCm?: IntWithAggregatesFilter<"Application"> | number
    eyeColor?: StringWithAggregatesFilter<"Application"> | string
    selfieUrl?: StringWithAggregatesFilter<"Application"> | string
    profilePhoto?: StringWithAggregatesFilter<"Application"> | string
    fullBodyPhoto?: StringWithAggregatesFilter<"Application"> | string
    status?: EnumApplicationStatusWithAggregatesFilter<"Application"> | $Enums.ApplicationStatus
    adminNotes?: StringNullableWithAggregatesFilter<"Application"> | string | null
    submittedAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
  }

  export type ContactMessageWhereInput = {
    AND?: ContactMessageWhereInput | ContactMessageWhereInput[]
    OR?: ContactMessageWhereInput[]
    NOT?: ContactMessageWhereInput | ContactMessageWhereInput[]
    id?: StringFilter<"ContactMessage"> | string
    fullName?: StringFilter<"ContactMessage"> | string
    email?: StringFilter<"ContactMessage"> | string
    subject?: StringFilter<"ContactMessage"> | string
    message?: StringFilter<"ContactMessage"> | string
    isRead?: BoolFilter<"ContactMessage"> | boolean
    createdAt?: DateTimeFilter<"ContactMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ContactMessage"> | Date | string
  }

  export type ContactMessageOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactMessageWhereInput | ContactMessageWhereInput[]
    OR?: ContactMessageWhereInput[]
    NOT?: ContactMessageWhereInput | ContactMessageWhereInput[]
    fullName?: StringFilter<"ContactMessage"> | string
    email?: StringFilter<"ContactMessage"> | string
    subject?: StringFilter<"ContactMessage"> | string
    message?: StringFilter<"ContactMessage"> | string
    isRead?: BoolFilter<"ContactMessage"> | boolean
    createdAt?: DateTimeFilter<"ContactMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ContactMessage"> | Date | string
  }, "id">

  export type ContactMessageOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactMessageCountOrderByAggregateInput
    _max?: ContactMessageMaxOrderByAggregateInput
    _min?: ContactMessageMinOrderByAggregateInput
  }

  export type ContactMessageScalarWhereWithAggregatesInput = {
    AND?: ContactMessageScalarWhereWithAggregatesInput | ContactMessageScalarWhereWithAggregatesInput[]
    OR?: ContactMessageScalarWhereWithAggregatesInput[]
    NOT?: ContactMessageScalarWhereWithAggregatesInput | ContactMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactMessage"> | string
    fullName?: StringWithAggregatesFilter<"ContactMessage"> | string
    email?: StringWithAggregatesFilter<"ContactMessage"> | string
    subject?: StringWithAggregatesFilter<"ContactMessage"> | string
    message?: StringWithAggregatesFilter<"ContactMessage"> | string
    isRead?: BoolWithAggregatesFilter<"ContactMessage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ContactMessage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContactMessage"> | Date | string
  }

  export type AdminUserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    phone?: string | null
    role?: $Enums.AdminRole
    isActive?: boolean
  }

  export type AdminUserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    phone?: string | null
    role?: $Enums.AdminRole
    isActive?: boolean
  }

  export type AdminUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AdminUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AdminUserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    phone?: string | null
    role?: $Enums.AdminRole
    isActive?: boolean
  }

  export type AdminUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AdminUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HomeSliderCreateInput = {
    key: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: HomeSliderItemCreateNestedManyWithoutHomeSliderInput
  }

  export type HomeSliderUncheckedCreateInput = {
    id?: number
    key: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: HomeSliderItemUncheckedCreateNestedManyWithoutHomeSliderInput
  }

  export type HomeSliderUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: HomeSliderItemUpdateManyWithoutHomeSliderNestedInput
  }

  export type HomeSliderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: HomeSliderItemUncheckedUpdateManyWithoutHomeSliderNestedInput
  }

  export type HomeSliderCreateManyInput = {
    id?: number
    key: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomeSliderUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomeSliderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomeSliderItemCreateInput = {
    title_tr?: string | null
    title_en?: string | null
    title_de?: string | null
    title_ru?: string | null
    description_tr?: string | null
    description_en?: string | null
    description_de?: string | null
    description_ru?: string | null
    imageUrl?: string | null
    linkUrl?: string | null
    order?: number
    isActive?: boolean
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    homeSlider: HomeSliderCreateNestedOneWithoutItemsInput
  }

  export type HomeSliderItemUncheckedCreateInput = {
    id?: number
    homeSliderId: number
    title_tr?: string | null
    title_en?: string | null
    title_de?: string | null
    title_ru?: string | null
    description_tr?: string | null
    description_en?: string | null
    description_de?: string | null
    description_ru?: string | null
    imageUrl?: string | null
    linkUrl?: string | null
    order?: number
    isActive?: boolean
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomeSliderItemUpdateInput = {
    title_tr?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_de?: NullableStringFieldUpdateOperationsInput | string | null
    title_ru?: NullableStringFieldUpdateOperationsInput | string | null
    description_tr?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_de?: NullableStringFieldUpdateOperationsInput | string | null
    description_ru?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    homeSlider?: HomeSliderUpdateOneRequiredWithoutItemsNestedInput
  }

  export type HomeSliderItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    homeSliderId?: IntFieldUpdateOperationsInput | number
    title_tr?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_de?: NullableStringFieldUpdateOperationsInput | string | null
    title_ru?: NullableStringFieldUpdateOperationsInput | string | null
    description_tr?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_de?: NullableStringFieldUpdateOperationsInput | string | null
    description_ru?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomeSliderItemCreateManyInput = {
    id?: number
    homeSliderId: number
    title_tr?: string | null
    title_en?: string | null
    title_de?: string | null
    title_ru?: string | null
    description_tr?: string | null
    description_en?: string | null
    description_de?: string | null
    description_ru?: string | null
    imageUrl?: string | null
    linkUrl?: string | null
    order?: number
    isActive?: boolean
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomeSliderItemUpdateManyMutationInput = {
    title_tr?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_de?: NullableStringFieldUpdateOperationsInput | string | null
    title_ru?: NullableStringFieldUpdateOperationsInput | string | null
    description_tr?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_de?: NullableStringFieldUpdateOperationsInput | string | null
    description_ru?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomeSliderItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    homeSliderId?: IntFieldUpdateOperationsInput | number
    title_tr?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_de?: NullableStringFieldUpdateOperationsInput | string | null
    title_ru?: NullableStringFieldUpdateOperationsInput | string | null
    description_tr?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_de?: NullableStringFieldUpdateOperationsInput | string | null
    description_ru?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoverImageCreateInput = {
    id?: string
    type: $Enums.CoverType
    imageUrl: string
    isActive?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoverImageUncheckedCreateInput = {
    id?: string
    type: $Enums.CoverType
    imageUrl: string
    isActive?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoverImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCoverTypeFieldUpdateOperationsInput | $Enums.CoverType
    imageUrl?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoverImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCoverTypeFieldUpdateOperationsInput | $Enums.CoverType
    imageUrl?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoverImageCreateManyInput = {
    id?: string
    type: $Enums.CoverType
    imageUrl: string
    isActive?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoverImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCoverTypeFieldUpdateOperationsInput | $Enums.CoverType
    imageUrl?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoverImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCoverTypeFieldUpdateOperationsInput | $Enums.CoverType
    imageUrl?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuccessHeroCreateInput = {
    id?: string
    imageUrl: string
    isActive?: boolean
    title_tr: string
    title_en: string
    title_de: string
    title_ru: string
    text_tr: string
    text_en: string
    text_de: string
    text_ru: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuccessHeroUncheckedCreateInput = {
    id?: string
    imageUrl: string
    isActive?: boolean
    title_tr: string
    title_en: string
    title_de: string
    title_ru: string
    text_tr: string
    text_en: string
    text_de: string
    text_ru: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuccessHeroUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    title_tr?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_de?: StringFieldUpdateOperationsInput | string
    title_ru?: StringFieldUpdateOperationsInput | string
    text_tr?: StringFieldUpdateOperationsInput | string
    text_en?: StringFieldUpdateOperationsInput | string
    text_de?: StringFieldUpdateOperationsInput | string
    text_ru?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuccessHeroUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    title_tr?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_de?: StringFieldUpdateOperationsInput | string
    title_ru?: StringFieldUpdateOperationsInput | string
    text_tr?: StringFieldUpdateOperationsInput | string
    text_en?: StringFieldUpdateOperationsInput | string
    text_de?: StringFieldUpdateOperationsInput | string
    text_ru?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuccessHeroCreateManyInput = {
    id?: string
    imageUrl: string
    isActive?: boolean
    title_tr: string
    title_en: string
    title_de: string
    title_ru: string
    text_tr: string
    text_en: string
    text_de: string
    text_ru: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuccessHeroUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    title_tr?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_de?: StringFieldUpdateOperationsInput | string
    title_ru?: StringFieldUpdateOperationsInput | string
    text_tr?: StringFieldUpdateOperationsInput | string
    text_en?: StringFieldUpdateOperationsInput | string
    text_de?: StringFieldUpdateOperationsInput | string
    text_ru?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuccessHeroUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    title_tr?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_de?: StringFieldUpdateOperationsInput | string
    title_ru?: StringFieldUpdateOperationsInput | string
    text_tr?: StringFieldUpdateOperationsInput | string
    text_en?: StringFieldUpdateOperationsInput | string
    text_de?: StringFieldUpdateOperationsInput | string
    text_ru?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuccessModelReviewCreateInput = {
    id?: string
    imageUrl: string
    isActive?: boolean
    title_tr: string
    title_en: string
    title_de: string
    title_ru: string
    text_tr: string
    text_en: string
    text_de: string
    text_ru: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuccessModelReviewUncheckedCreateInput = {
    id?: string
    imageUrl: string
    isActive?: boolean
    title_tr: string
    title_en: string
    title_de: string
    title_ru: string
    text_tr: string
    text_en: string
    text_de: string
    text_ru: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuccessModelReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    title_tr?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_de?: StringFieldUpdateOperationsInput | string
    title_ru?: StringFieldUpdateOperationsInput | string
    text_tr?: StringFieldUpdateOperationsInput | string
    text_en?: StringFieldUpdateOperationsInput | string
    text_de?: StringFieldUpdateOperationsInput | string
    text_ru?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuccessModelReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    title_tr?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_de?: StringFieldUpdateOperationsInput | string
    title_ru?: StringFieldUpdateOperationsInput | string
    text_tr?: StringFieldUpdateOperationsInput | string
    text_en?: StringFieldUpdateOperationsInput | string
    text_de?: StringFieldUpdateOperationsInput | string
    text_ru?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuccessModelReviewCreateManyInput = {
    id?: string
    imageUrl: string
    isActive?: boolean
    title_tr: string
    title_en: string
    title_de: string
    title_ru: string
    text_tr: string
    text_en: string
    text_de: string
    text_ru: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuccessModelReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    title_tr?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_de?: StringFieldUpdateOperationsInput | string
    title_ru?: StringFieldUpdateOperationsInput | string
    text_tr?: StringFieldUpdateOperationsInput | string
    text_en?: StringFieldUpdateOperationsInput | string
    text_de?: StringFieldUpdateOperationsInput | string
    text_ru?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuccessModelReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    title_tr?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_de?: StringFieldUpdateOperationsInput | string
    title_ru?: StringFieldUpdateOperationsInput | string
    text_tr?: StringFieldUpdateOperationsInput | string
    text_en?: StringFieldUpdateOperationsInput | string
    text_de?: StringFieldUpdateOperationsInput | string
    text_ru?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeaturedItemCreateInput = {
    id?: string
    imageUrl: string
    title_tr: string
    title_en: string
    title_de: string
    title_ru: string
    content_tr: string
    content_en: string
    content_de: string
    content_ru: string
    order: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeaturedItemUncheckedCreateInput = {
    id?: string
    imageUrl: string
    title_tr: string
    title_en: string
    title_de: string
    title_ru: string
    content_tr: string
    content_en: string
    content_de: string
    content_ru: string
    order: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeaturedItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    title_tr?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_de?: StringFieldUpdateOperationsInput | string
    title_ru?: StringFieldUpdateOperationsInput | string
    content_tr?: StringFieldUpdateOperationsInput | string
    content_en?: StringFieldUpdateOperationsInput | string
    content_de?: StringFieldUpdateOperationsInput | string
    content_ru?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeaturedItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    title_tr?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_de?: StringFieldUpdateOperationsInput | string
    title_ru?: StringFieldUpdateOperationsInput | string
    content_tr?: StringFieldUpdateOperationsInput | string
    content_en?: StringFieldUpdateOperationsInput | string
    content_de?: StringFieldUpdateOperationsInput | string
    content_ru?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeaturedItemCreateManyInput = {
    id?: string
    imageUrl: string
    title_tr: string
    title_en: string
    title_de: string
    title_ru: string
    content_tr: string
    content_en: string
    content_de: string
    content_ru: string
    order: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeaturedItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    title_tr?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_de?: StringFieldUpdateOperationsInput | string
    title_ru?: StringFieldUpdateOperationsInput | string
    content_tr?: StringFieldUpdateOperationsInput | string
    content_en?: StringFieldUpdateOperationsInput | string
    content_de?: StringFieldUpdateOperationsInput | string
    content_ru?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeaturedItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    title_tr?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_de?: StringFieldUpdateOperationsInput | string
    title_ru?: StringFieldUpdateOperationsInput | string
    content_tr?: StringFieldUpdateOperationsInput | string
    content_en?: StringFieldUpdateOperationsInput | string
    content_de?: StringFieldUpdateOperationsInput | string
    content_ru?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCreateInput = {
    id?: string
    imageUrl: string
    category?: string | null
    category_tr?: string | null
    category_en?: string | null
    category_de?: string | null
    category_ru?: string | null
    galleryUrls?: NewsCreategalleryUrlsInput | string[]
    title_tr: string
    title_en: string
    title_de: string
    title_ru: string
    content_tr: string
    content_en: string
    content_de: string
    content_ru: string
    description_tr?: string | null
    description_en?: string | null
    description_de?: string | null
    description_ru?: string | null
    publishedAt: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUncheckedCreateInput = {
    id?: string
    imageUrl: string
    category?: string | null
    category_tr?: string | null
    category_en?: string | null
    category_de?: string | null
    category_ru?: string | null
    galleryUrls?: NewsCreategalleryUrlsInput | string[]
    title_tr: string
    title_en: string
    title_de: string
    title_ru: string
    content_tr: string
    content_en: string
    content_de: string
    content_ru: string
    description_tr?: string | null
    description_en?: string | null
    description_de?: string | null
    description_ru?: string | null
    publishedAt: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    category_tr?: NullableStringFieldUpdateOperationsInput | string | null
    category_en?: NullableStringFieldUpdateOperationsInput | string | null
    category_de?: NullableStringFieldUpdateOperationsInput | string | null
    category_ru?: NullableStringFieldUpdateOperationsInput | string | null
    galleryUrls?: NewsUpdategalleryUrlsInput | string[]
    title_tr?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_de?: StringFieldUpdateOperationsInput | string
    title_ru?: StringFieldUpdateOperationsInput | string
    content_tr?: StringFieldUpdateOperationsInput | string
    content_en?: StringFieldUpdateOperationsInput | string
    content_de?: StringFieldUpdateOperationsInput | string
    content_ru?: StringFieldUpdateOperationsInput | string
    description_tr?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_de?: NullableStringFieldUpdateOperationsInput | string | null
    description_ru?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    category_tr?: NullableStringFieldUpdateOperationsInput | string | null
    category_en?: NullableStringFieldUpdateOperationsInput | string | null
    category_de?: NullableStringFieldUpdateOperationsInput | string | null
    category_ru?: NullableStringFieldUpdateOperationsInput | string | null
    galleryUrls?: NewsUpdategalleryUrlsInput | string[]
    title_tr?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_de?: StringFieldUpdateOperationsInput | string
    title_ru?: StringFieldUpdateOperationsInput | string
    content_tr?: StringFieldUpdateOperationsInput | string
    content_en?: StringFieldUpdateOperationsInput | string
    content_de?: StringFieldUpdateOperationsInput | string
    content_ru?: StringFieldUpdateOperationsInput | string
    description_tr?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_de?: NullableStringFieldUpdateOperationsInput | string | null
    description_ru?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCreateManyInput = {
    id?: string
    imageUrl: string
    category?: string | null
    category_tr?: string | null
    category_en?: string | null
    category_de?: string | null
    category_ru?: string | null
    galleryUrls?: NewsCreategalleryUrlsInput | string[]
    title_tr: string
    title_en: string
    title_de: string
    title_ru: string
    content_tr: string
    content_en: string
    content_de: string
    content_ru: string
    description_tr?: string | null
    description_en?: string | null
    description_de?: string | null
    description_ru?: string | null
    publishedAt: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    category_tr?: NullableStringFieldUpdateOperationsInput | string | null
    category_en?: NullableStringFieldUpdateOperationsInput | string | null
    category_de?: NullableStringFieldUpdateOperationsInput | string | null
    category_ru?: NullableStringFieldUpdateOperationsInput | string | null
    galleryUrls?: NewsUpdategalleryUrlsInput | string[]
    title_tr?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_de?: StringFieldUpdateOperationsInput | string
    title_ru?: StringFieldUpdateOperationsInput | string
    content_tr?: StringFieldUpdateOperationsInput | string
    content_en?: StringFieldUpdateOperationsInput | string
    content_de?: StringFieldUpdateOperationsInput | string
    content_ru?: StringFieldUpdateOperationsInput | string
    description_tr?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_de?: NullableStringFieldUpdateOperationsInput | string | null
    description_ru?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    category_tr?: NullableStringFieldUpdateOperationsInput | string | null
    category_en?: NullableStringFieldUpdateOperationsInput | string | null
    category_de?: NullableStringFieldUpdateOperationsInput | string | null
    category_ru?: NullableStringFieldUpdateOperationsInput | string | null
    galleryUrls?: NewsUpdategalleryUrlsInput | string[]
    title_tr?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_de?: StringFieldUpdateOperationsInput | string
    title_ru?: StringFieldUpdateOperationsInput | string
    content_tr?: StringFieldUpdateOperationsInput | string
    content_en?: StringFieldUpdateOperationsInput | string
    content_de?: StringFieldUpdateOperationsInput | string
    content_ru?: StringFieldUpdateOperationsInput | string
    description_tr?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_de?: NullableStringFieldUpdateOperationsInput | string | null
    description_ru?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutPageCreateInput = {
    id?: string
    intro_title_tr: string
    intro_title_en: string
    intro_title_de: string
    intro_title_ru: string
    intro_text_tr: string
    intro_text_en: string
    intro_text_de: string
    intro_text_ru: string
    vision_imageUrl: string
    vision_title_tr: string
    vision_title_en: string
    vision_title_de: string
    vision_title_ru: string
    vision_slogan_tr: string
    vision_slogan_en: string
    vision_slogan_de: string
    vision_slogan_ru: string
    vision_text_tr: string
    vision_text_en: string
    vision_text_de: string
    vision_text_ru: string
    mission_imageUrl: string
    mission_title_tr: string
    mission_title_en: string
    mission_title_de: string
    mission_title_ru: string
    mission_slogan_tr: string
    mission_slogan_en: string
    mission_slogan_de: string
    mission_slogan_ru: string
    mission_text_tr: string
    mission_text_en: string
    mission_text_de: string
    mission_text_ru: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutPageUncheckedCreateInput = {
    id?: string
    intro_title_tr: string
    intro_title_en: string
    intro_title_de: string
    intro_title_ru: string
    intro_text_tr: string
    intro_text_en: string
    intro_text_de: string
    intro_text_ru: string
    vision_imageUrl: string
    vision_title_tr: string
    vision_title_en: string
    vision_title_de: string
    vision_title_ru: string
    vision_slogan_tr: string
    vision_slogan_en: string
    vision_slogan_de: string
    vision_slogan_ru: string
    vision_text_tr: string
    vision_text_en: string
    vision_text_de: string
    vision_text_ru: string
    mission_imageUrl: string
    mission_title_tr: string
    mission_title_en: string
    mission_title_de: string
    mission_title_ru: string
    mission_slogan_tr: string
    mission_slogan_en: string
    mission_slogan_de: string
    mission_slogan_ru: string
    mission_text_tr: string
    mission_text_en: string
    mission_text_de: string
    mission_text_ru: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutPageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    intro_title_tr?: StringFieldUpdateOperationsInput | string
    intro_title_en?: StringFieldUpdateOperationsInput | string
    intro_title_de?: StringFieldUpdateOperationsInput | string
    intro_title_ru?: StringFieldUpdateOperationsInput | string
    intro_text_tr?: StringFieldUpdateOperationsInput | string
    intro_text_en?: StringFieldUpdateOperationsInput | string
    intro_text_de?: StringFieldUpdateOperationsInput | string
    intro_text_ru?: StringFieldUpdateOperationsInput | string
    vision_imageUrl?: StringFieldUpdateOperationsInput | string
    vision_title_tr?: StringFieldUpdateOperationsInput | string
    vision_title_en?: StringFieldUpdateOperationsInput | string
    vision_title_de?: StringFieldUpdateOperationsInput | string
    vision_title_ru?: StringFieldUpdateOperationsInput | string
    vision_slogan_tr?: StringFieldUpdateOperationsInput | string
    vision_slogan_en?: StringFieldUpdateOperationsInput | string
    vision_slogan_de?: StringFieldUpdateOperationsInput | string
    vision_slogan_ru?: StringFieldUpdateOperationsInput | string
    vision_text_tr?: StringFieldUpdateOperationsInput | string
    vision_text_en?: StringFieldUpdateOperationsInput | string
    vision_text_de?: StringFieldUpdateOperationsInput | string
    vision_text_ru?: StringFieldUpdateOperationsInput | string
    mission_imageUrl?: StringFieldUpdateOperationsInput | string
    mission_title_tr?: StringFieldUpdateOperationsInput | string
    mission_title_en?: StringFieldUpdateOperationsInput | string
    mission_title_de?: StringFieldUpdateOperationsInput | string
    mission_title_ru?: StringFieldUpdateOperationsInput | string
    mission_slogan_tr?: StringFieldUpdateOperationsInput | string
    mission_slogan_en?: StringFieldUpdateOperationsInput | string
    mission_slogan_de?: StringFieldUpdateOperationsInput | string
    mission_slogan_ru?: StringFieldUpdateOperationsInput | string
    mission_text_tr?: StringFieldUpdateOperationsInput | string
    mission_text_en?: StringFieldUpdateOperationsInput | string
    mission_text_de?: StringFieldUpdateOperationsInput | string
    mission_text_ru?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutPageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    intro_title_tr?: StringFieldUpdateOperationsInput | string
    intro_title_en?: StringFieldUpdateOperationsInput | string
    intro_title_de?: StringFieldUpdateOperationsInput | string
    intro_title_ru?: StringFieldUpdateOperationsInput | string
    intro_text_tr?: StringFieldUpdateOperationsInput | string
    intro_text_en?: StringFieldUpdateOperationsInput | string
    intro_text_de?: StringFieldUpdateOperationsInput | string
    intro_text_ru?: StringFieldUpdateOperationsInput | string
    vision_imageUrl?: StringFieldUpdateOperationsInput | string
    vision_title_tr?: StringFieldUpdateOperationsInput | string
    vision_title_en?: StringFieldUpdateOperationsInput | string
    vision_title_de?: StringFieldUpdateOperationsInput | string
    vision_title_ru?: StringFieldUpdateOperationsInput | string
    vision_slogan_tr?: StringFieldUpdateOperationsInput | string
    vision_slogan_en?: StringFieldUpdateOperationsInput | string
    vision_slogan_de?: StringFieldUpdateOperationsInput | string
    vision_slogan_ru?: StringFieldUpdateOperationsInput | string
    vision_text_tr?: StringFieldUpdateOperationsInput | string
    vision_text_en?: StringFieldUpdateOperationsInput | string
    vision_text_de?: StringFieldUpdateOperationsInput | string
    vision_text_ru?: StringFieldUpdateOperationsInput | string
    mission_imageUrl?: StringFieldUpdateOperationsInput | string
    mission_title_tr?: StringFieldUpdateOperationsInput | string
    mission_title_en?: StringFieldUpdateOperationsInput | string
    mission_title_de?: StringFieldUpdateOperationsInput | string
    mission_title_ru?: StringFieldUpdateOperationsInput | string
    mission_slogan_tr?: StringFieldUpdateOperationsInput | string
    mission_slogan_en?: StringFieldUpdateOperationsInput | string
    mission_slogan_de?: StringFieldUpdateOperationsInput | string
    mission_slogan_ru?: StringFieldUpdateOperationsInput | string
    mission_text_tr?: StringFieldUpdateOperationsInput | string
    mission_text_en?: StringFieldUpdateOperationsInput | string
    mission_text_de?: StringFieldUpdateOperationsInput | string
    mission_text_ru?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutPageCreateManyInput = {
    id?: string
    intro_title_tr: string
    intro_title_en: string
    intro_title_de: string
    intro_title_ru: string
    intro_text_tr: string
    intro_text_en: string
    intro_text_de: string
    intro_text_ru: string
    vision_imageUrl: string
    vision_title_tr: string
    vision_title_en: string
    vision_title_de: string
    vision_title_ru: string
    vision_slogan_tr: string
    vision_slogan_en: string
    vision_slogan_de: string
    vision_slogan_ru: string
    vision_text_tr: string
    vision_text_en: string
    vision_text_de: string
    vision_text_ru: string
    mission_imageUrl: string
    mission_title_tr: string
    mission_title_en: string
    mission_title_de: string
    mission_title_ru: string
    mission_slogan_tr: string
    mission_slogan_en: string
    mission_slogan_de: string
    mission_slogan_ru: string
    mission_text_tr: string
    mission_text_en: string
    mission_text_de: string
    mission_text_ru: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutPageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    intro_title_tr?: StringFieldUpdateOperationsInput | string
    intro_title_en?: StringFieldUpdateOperationsInput | string
    intro_title_de?: StringFieldUpdateOperationsInput | string
    intro_title_ru?: StringFieldUpdateOperationsInput | string
    intro_text_tr?: StringFieldUpdateOperationsInput | string
    intro_text_en?: StringFieldUpdateOperationsInput | string
    intro_text_de?: StringFieldUpdateOperationsInput | string
    intro_text_ru?: StringFieldUpdateOperationsInput | string
    vision_imageUrl?: StringFieldUpdateOperationsInput | string
    vision_title_tr?: StringFieldUpdateOperationsInput | string
    vision_title_en?: StringFieldUpdateOperationsInput | string
    vision_title_de?: StringFieldUpdateOperationsInput | string
    vision_title_ru?: StringFieldUpdateOperationsInput | string
    vision_slogan_tr?: StringFieldUpdateOperationsInput | string
    vision_slogan_en?: StringFieldUpdateOperationsInput | string
    vision_slogan_de?: StringFieldUpdateOperationsInput | string
    vision_slogan_ru?: StringFieldUpdateOperationsInput | string
    vision_text_tr?: StringFieldUpdateOperationsInput | string
    vision_text_en?: StringFieldUpdateOperationsInput | string
    vision_text_de?: StringFieldUpdateOperationsInput | string
    vision_text_ru?: StringFieldUpdateOperationsInput | string
    mission_imageUrl?: StringFieldUpdateOperationsInput | string
    mission_title_tr?: StringFieldUpdateOperationsInput | string
    mission_title_en?: StringFieldUpdateOperationsInput | string
    mission_title_de?: StringFieldUpdateOperationsInput | string
    mission_title_ru?: StringFieldUpdateOperationsInput | string
    mission_slogan_tr?: StringFieldUpdateOperationsInput | string
    mission_slogan_en?: StringFieldUpdateOperationsInput | string
    mission_slogan_de?: StringFieldUpdateOperationsInput | string
    mission_slogan_ru?: StringFieldUpdateOperationsInput | string
    mission_text_tr?: StringFieldUpdateOperationsInput | string
    mission_text_en?: StringFieldUpdateOperationsInput | string
    mission_text_de?: StringFieldUpdateOperationsInput | string
    mission_text_ru?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutPageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    intro_title_tr?: StringFieldUpdateOperationsInput | string
    intro_title_en?: StringFieldUpdateOperationsInput | string
    intro_title_de?: StringFieldUpdateOperationsInput | string
    intro_title_ru?: StringFieldUpdateOperationsInput | string
    intro_text_tr?: StringFieldUpdateOperationsInput | string
    intro_text_en?: StringFieldUpdateOperationsInput | string
    intro_text_de?: StringFieldUpdateOperationsInput | string
    intro_text_ru?: StringFieldUpdateOperationsInput | string
    vision_imageUrl?: StringFieldUpdateOperationsInput | string
    vision_title_tr?: StringFieldUpdateOperationsInput | string
    vision_title_en?: StringFieldUpdateOperationsInput | string
    vision_title_de?: StringFieldUpdateOperationsInput | string
    vision_title_ru?: StringFieldUpdateOperationsInput | string
    vision_slogan_tr?: StringFieldUpdateOperationsInput | string
    vision_slogan_en?: StringFieldUpdateOperationsInput | string
    vision_slogan_de?: StringFieldUpdateOperationsInput | string
    vision_slogan_ru?: StringFieldUpdateOperationsInput | string
    vision_text_tr?: StringFieldUpdateOperationsInput | string
    vision_text_en?: StringFieldUpdateOperationsInput | string
    vision_text_de?: StringFieldUpdateOperationsInput | string
    vision_text_ru?: StringFieldUpdateOperationsInput | string
    mission_imageUrl?: StringFieldUpdateOperationsInput | string
    mission_title_tr?: StringFieldUpdateOperationsInput | string
    mission_title_en?: StringFieldUpdateOperationsInput | string
    mission_title_de?: StringFieldUpdateOperationsInput | string
    mission_title_ru?: StringFieldUpdateOperationsInput | string
    mission_slogan_tr?: StringFieldUpdateOperationsInput | string
    mission_slogan_en?: StringFieldUpdateOperationsInput | string
    mission_slogan_de?: StringFieldUpdateOperationsInput | string
    mission_slogan_ru?: StringFieldUpdateOperationsInput | string
    mission_text_tr?: StringFieldUpdateOperationsInput | string
    mission_text_en?: StringFieldUpdateOperationsInput | string
    mission_text_de?: StringFieldUpdateOperationsInput | string
    mission_text_ru?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoCreateInput = {
    id?: string
    address_tr: string
    address_en: string
    address_de: string
    address_ru: string
    phone: string
    email: string
    locationUrl: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactInfoUncheckedCreateInput = {
    id?: string
    address_tr: string
    address_en: string
    address_de: string
    address_ru: string
    phone: string
    email: string
    locationUrl: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactInfoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address_tr?: StringFieldUpdateOperationsInput | string
    address_en?: StringFieldUpdateOperationsInput | string
    address_de?: StringFieldUpdateOperationsInput | string
    address_ru?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    locationUrl?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address_tr?: StringFieldUpdateOperationsInput | string
    address_en?: StringFieldUpdateOperationsInput | string
    address_de?: StringFieldUpdateOperationsInput | string
    address_ru?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    locationUrl?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoCreateManyInput = {
    id?: string
    address_tr: string
    address_en: string
    address_de: string
    address_ru: string
    phone: string
    email: string
    locationUrl: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactInfoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address_tr?: StringFieldUpdateOperationsInput | string
    address_en?: StringFieldUpdateOperationsInput | string
    address_de?: StringFieldUpdateOperationsInput | string
    address_ru?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    locationUrl?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    address_tr?: StringFieldUpdateOperationsInput | string
    address_en?: StringFieldUpdateOperationsInput | string
    address_de?: StringFieldUpdateOperationsInput | string
    address_ru?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    locationUrl?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FAQCreateInput = {
    id?: string
    question_tr: string
    question_en: string
    question_de: string
    question_ru: string
    answer_tr: string
    answer_en: string
    answer_de: string
    answer_ru: string
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FAQUncheckedCreateInput = {
    id?: string
    question_tr: string
    question_en: string
    question_de: string
    question_ru: string
    answer_tr: string
    answer_en: string
    answer_de: string
    answer_ru: string
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FAQUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question_tr?: StringFieldUpdateOperationsInput | string
    question_en?: StringFieldUpdateOperationsInput | string
    question_de?: StringFieldUpdateOperationsInput | string
    question_ru?: StringFieldUpdateOperationsInput | string
    answer_tr?: StringFieldUpdateOperationsInput | string
    answer_en?: StringFieldUpdateOperationsInput | string
    answer_de?: StringFieldUpdateOperationsInput | string
    answer_ru?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FAQUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question_tr?: StringFieldUpdateOperationsInput | string
    question_en?: StringFieldUpdateOperationsInput | string
    question_de?: StringFieldUpdateOperationsInput | string
    question_ru?: StringFieldUpdateOperationsInput | string
    answer_tr?: StringFieldUpdateOperationsInput | string
    answer_en?: StringFieldUpdateOperationsInput | string
    answer_de?: StringFieldUpdateOperationsInput | string
    answer_ru?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FAQCreateManyInput = {
    id?: string
    question_tr: string
    question_en: string
    question_de: string
    question_ru: string
    answer_tr: string
    answer_en: string
    answer_de: string
    answer_ru: string
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FAQUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question_tr?: StringFieldUpdateOperationsInput | string
    question_en?: StringFieldUpdateOperationsInput | string
    question_de?: StringFieldUpdateOperationsInput | string
    question_ru?: StringFieldUpdateOperationsInput | string
    answer_tr?: StringFieldUpdateOperationsInput | string
    answer_en?: StringFieldUpdateOperationsInput | string
    answer_de?: StringFieldUpdateOperationsInput | string
    answer_ru?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FAQUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    question_tr?: StringFieldUpdateOperationsInput | string
    question_en?: StringFieldUpdateOperationsInput | string
    question_de?: StringFieldUpdateOperationsInput | string
    question_ru?: StringFieldUpdateOperationsInput | string
    answer_tr?: StringFieldUpdateOperationsInput | string
    answer_en?: StringFieldUpdateOperationsInput | string
    answer_de?: StringFieldUpdateOperationsInput | string
    answer_ru?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateInput = {
    id?: string
    fullName: string
    birthDate: Date | string
    gender: $Enums.Gender
    nationality: string
    email: string
    phone: string
    city: string
    heightCm: number
    chestCm: number
    hipsCm: number
    footCm: number
    waistCm: number
    eyeColor: string
    selfieUrl: string
    profilePhoto: string
    fullBodyPhoto: string
    status?: $Enums.ApplicationStatus
    adminNotes?: string | null
    submittedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUncheckedCreateInput = {
    id?: string
    fullName: string
    birthDate: Date | string
    gender: $Enums.Gender
    nationality: string
    email: string
    phone: string
    city: string
    heightCm: number
    chestCm: number
    hipsCm: number
    footCm: number
    waistCm: number
    eyeColor: string
    selfieUrl: string
    profilePhoto: string
    fullBodyPhoto: string
    status?: $Enums.ApplicationStatus
    adminNotes?: string | null
    submittedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nationality?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    heightCm?: IntFieldUpdateOperationsInput | number
    chestCm?: IntFieldUpdateOperationsInput | number
    hipsCm?: IntFieldUpdateOperationsInput | number
    footCm?: IntFieldUpdateOperationsInput | number
    waistCm?: IntFieldUpdateOperationsInput | number
    eyeColor?: StringFieldUpdateOperationsInput | string
    selfieUrl?: StringFieldUpdateOperationsInput | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    fullBodyPhoto?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nationality?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    heightCm?: IntFieldUpdateOperationsInput | number
    chestCm?: IntFieldUpdateOperationsInput | number
    hipsCm?: IntFieldUpdateOperationsInput | number
    footCm?: IntFieldUpdateOperationsInput | number
    waistCm?: IntFieldUpdateOperationsInput | number
    eyeColor?: StringFieldUpdateOperationsInput | string
    selfieUrl?: StringFieldUpdateOperationsInput | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    fullBodyPhoto?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateManyInput = {
    id?: string
    fullName: string
    birthDate: Date | string
    gender: $Enums.Gender
    nationality: string
    email: string
    phone: string
    city: string
    heightCm: number
    chestCm: number
    hipsCm: number
    footCm: number
    waistCm: number
    eyeColor: string
    selfieUrl: string
    profilePhoto: string
    fullBodyPhoto: string
    status?: $Enums.ApplicationStatus
    adminNotes?: string | null
    submittedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nationality?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    heightCm?: IntFieldUpdateOperationsInput | number
    chestCm?: IntFieldUpdateOperationsInput | number
    hipsCm?: IntFieldUpdateOperationsInput | number
    footCm?: IntFieldUpdateOperationsInput | number
    waistCm?: IntFieldUpdateOperationsInput | number
    eyeColor?: StringFieldUpdateOperationsInput | string
    selfieUrl?: StringFieldUpdateOperationsInput | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    fullBodyPhoto?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nationality?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    heightCm?: IntFieldUpdateOperationsInput | number
    chestCm?: IntFieldUpdateOperationsInput | number
    hipsCm?: IntFieldUpdateOperationsInput | number
    footCm?: IntFieldUpdateOperationsInput | number
    waistCm?: IntFieldUpdateOperationsInput | number
    eyeColor?: StringFieldUpdateOperationsInput | string
    selfieUrl?: StringFieldUpdateOperationsInput | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    fullBodyPhoto?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactMessageCreateInput = {
    id?: string
    fullName: string
    email: string
    subject: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactMessageUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    subject: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactMessageCreateManyInput = {
    id?: string
    fullName: string
    email: string
    subject: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumAdminRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleFilter<$PrismaModel> | $Enums.AdminRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdminUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
  }

  export type AdminUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
  }

  export type AdminUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
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

  export type EnumAdminRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel> | $Enums.AdminRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminRoleFilter<$PrismaModel>
    _max?: NestedEnumAdminRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type HomeSliderItemListRelationFilter = {
    every?: HomeSliderItemWhereInput
    some?: HomeSliderItemWhereInput
    none?: HomeSliderItemWhereInput
  }

  export type HomeSliderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HomeSliderCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomeSliderAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HomeSliderMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomeSliderMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomeSliderSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type HomeSliderScalarRelationFilter = {
    is?: HomeSliderWhereInput
    isNot?: HomeSliderWhereInput
  }

  export type HomeSliderItemHomeSliderIdOrderCompoundUniqueInput = {
    homeSliderId: number
    order: number
  }

  export type HomeSliderItemCountOrderByAggregateInput = {
    id?: SortOrder
    homeSliderId?: SortOrder
    title_tr?: SortOrder
    title_en?: SortOrder
    title_de?: SortOrder
    title_ru?: SortOrder
    description_tr?: SortOrder
    description_en?: SortOrder
    description_de?: SortOrder
    description_ru?: SortOrder
    imageUrl?: SortOrder
    linkUrl?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomeSliderItemAvgOrderByAggregateInput = {
    id?: SortOrder
    homeSliderId?: SortOrder
    order?: SortOrder
  }

  export type HomeSliderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    homeSliderId?: SortOrder
    title_tr?: SortOrder
    title_en?: SortOrder
    title_de?: SortOrder
    title_ru?: SortOrder
    description_tr?: SortOrder
    description_en?: SortOrder
    description_de?: SortOrder
    description_ru?: SortOrder
    imageUrl?: SortOrder
    linkUrl?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomeSliderItemMinOrderByAggregateInput = {
    id?: SortOrder
    homeSliderId?: SortOrder
    title_tr?: SortOrder
    title_en?: SortOrder
    title_de?: SortOrder
    title_ru?: SortOrder
    description_tr?: SortOrder
    description_en?: SortOrder
    description_de?: SortOrder
    description_ru?: SortOrder
    imageUrl?: SortOrder
    linkUrl?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomeSliderItemSumOrderByAggregateInput = {
    id?: SortOrder
    homeSliderId?: SortOrder
    order?: SortOrder
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

  export type EnumCoverTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CoverType | EnumCoverTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CoverType[] | ListEnumCoverTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoverType[] | ListEnumCoverTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCoverTypeFilter<$PrismaModel> | $Enums.CoverType
  }

  export type CoverImageCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoverImageAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type CoverImageMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoverImageMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoverImageSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumCoverTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CoverType | EnumCoverTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CoverType[] | ListEnumCoverTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoverType[] | ListEnumCoverTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCoverTypeWithAggregatesFilter<$PrismaModel> | $Enums.CoverType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCoverTypeFilter<$PrismaModel>
    _max?: NestedEnumCoverTypeFilter<$PrismaModel>
  }

  export type SuccessHeroCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    title_tr?: SortOrder
    title_en?: SortOrder
    title_de?: SortOrder
    title_ru?: SortOrder
    text_tr?: SortOrder
    text_en?: SortOrder
    text_de?: SortOrder
    text_ru?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuccessHeroMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    title_tr?: SortOrder
    title_en?: SortOrder
    title_de?: SortOrder
    title_ru?: SortOrder
    text_tr?: SortOrder
    text_en?: SortOrder
    text_de?: SortOrder
    text_ru?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuccessHeroMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    title_tr?: SortOrder
    title_en?: SortOrder
    title_de?: SortOrder
    title_ru?: SortOrder
    text_tr?: SortOrder
    text_en?: SortOrder
    text_de?: SortOrder
    text_ru?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuccessModelReviewCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    title_tr?: SortOrder
    title_en?: SortOrder
    title_de?: SortOrder
    title_ru?: SortOrder
    text_tr?: SortOrder
    text_en?: SortOrder
    text_de?: SortOrder
    text_ru?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuccessModelReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    title_tr?: SortOrder
    title_en?: SortOrder
    title_de?: SortOrder
    title_ru?: SortOrder
    text_tr?: SortOrder
    text_en?: SortOrder
    text_de?: SortOrder
    text_ru?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuccessModelReviewMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    title_tr?: SortOrder
    title_en?: SortOrder
    title_de?: SortOrder
    title_ru?: SortOrder
    text_tr?: SortOrder
    text_en?: SortOrder
    text_de?: SortOrder
    text_ru?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeaturedItemCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    title_tr?: SortOrder
    title_en?: SortOrder
    title_de?: SortOrder
    title_ru?: SortOrder
    content_tr?: SortOrder
    content_en?: SortOrder
    content_de?: SortOrder
    content_ru?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeaturedItemAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type FeaturedItemMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    title_tr?: SortOrder
    title_en?: SortOrder
    title_de?: SortOrder
    title_ru?: SortOrder
    content_tr?: SortOrder
    content_en?: SortOrder
    content_de?: SortOrder
    content_ru?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeaturedItemMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    title_tr?: SortOrder
    title_en?: SortOrder
    title_de?: SortOrder
    title_ru?: SortOrder
    content_tr?: SortOrder
    content_en?: SortOrder
    content_de?: SortOrder
    content_ru?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeaturedItemSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type NewsCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    category?: SortOrder
    category_tr?: SortOrder
    category_en?: SortOrder
    category_de?: SortOrder
    category_ru?: SortOrder
    galleryUrls?: SortOrder
    title_tr?: SortOrder
    title_en?: SortOrder
    title_de?: SortOrder
    title_ru?: SortOrder
    content_tr?: SortOrder
    content_en?: SortOrder
    content_de?: SortOrder
    content_ru?: SortOrder
    description_tr?: SortOrder
    description_en?: SortOrder
    description_de?: SortOrder
    description_ru?: SortOrder
    publishedAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    category?: SortOrder
    category_tr?: SortOrder
    category_en?: SortOrder
    category_de?: SortOrder
    category_ru?: SortOrder
    title_tr?: SortOrder
    title_en?: SortOrder
    title_de?: SortOrder
    title_ru?: SortOrder
    content_tr?: SortOrder
    content_en?: SortOrder
    content_de?: SortOrder
    content_ru?: SortOrder
    description_tr?: SortOrder
    description_en?: SortOrder
    description_de?: SortOrder
    description_ru?: SortOrder
    publishedAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    category?: SortOrder
    category_tr?: SortOrder
    category_en?: SortOrder
    category_de?: SortOrder
    category_ru?: SortOrder
    title_tr?: SortOrder
    title_en?: SortOrder
    title_de?: SortOrder
    title_ru?: SortOrder
    content_tr?: SortOrder
    content_en?: SortOrder
    content_de?: SortOrder
    content_ru?: SortOrder
    description_tr?: SortOrder
    description_en?: SortOrder
    description_de?: SortOrder
    description_ru?: SortOrder
    publishedAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutPageCountOrderByAggregateInput = {
    id?: SortOrder
    intro_title_tr?: SortOrder
    intro_title_en?: SortOrder
    intro_title_de?: SortOrder
    intro_title_ru?: SortOrder
    intro_text_tr?: SortOrder
    intro_text_en?: SortOrder
    intro_text_de?: SortOrder
    intro_text_ru?: SortOrder
    vision_imageUrl?: SortOrder
    vision_title_tr?: SortOrder
    vision_title_en?: SortOrder
    vision_title_de?: SortOrder
    vision_title_ru?: SortOrder
    vision_slogan_tr?: SortOrder
    vision_slogan_en?: SortOrder
    vision_slogan_de?: SortOrder
    vision_slogan_ru?: SortOrder
    vision_text_tr?: SortOrder
    vision_text_en?: SortOrder
    vision_text_de?: SortOrder
    vision_text_ru?: SortOrder
    mission_imageUrl?: SortOrder
    mission_title_tr?: SortOrder
    mission_title_en?: SortOrder
    mission_title_de?: SortOrder
    mission_title_ru?: SortOrder
    mission_slogan_tr?: SortOrder
    mission_slogan_en?: SortOrder
    mission_slogan_de?: SortOrder
    mission_slogan_ru?: SortOrder
    mission_text_tr?: SortOrder
    mission_text_en?: SortOrder
    mission_text_de?: SortOrder
    mission_text_ru?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutPageMaxOrderByAggregateInput = {
    id?: SortOrder
    intro_title_tr?: SortOrder
    intro_title_en?: SortOrder
    intro_title_de?: SortOrder
    intro_title_ru?: SortOrder
    intro_text_tr?: SortOrder
    intro_text_en?: SortOrder
    intro_text_de?: SortOrder
    intro_text_ru?: SortOrder
    vision_imageUrl?: SortOrder
    vision_title_tr?: SortOrder
    vision_title_en?: SortOrder
    vision_title_de?: SortOrder
    vision_title_ru?: SortOrder
    vision_slogan_tr?: SortOrder
    vision_slogan_en?: SortOrder
    vision_slogan_de?: SortOrder
    vision_slogan_ru?: SortOrder
    vision_text_tr?: SortOrder
    vision_text_en?: SortOrder
    vision_text_de?: SortOrder
    vision_text_ru?: SortOrder
    mission_imageUrl?: SortOrder
    mission_title_tr?: SortOrder
    mission_title_en?: SortOrder
    mission_title_de?: SortOrder
    mission_title_ru?: SortOrder
    mission_slogan_tr?: SortOrder
    mission_slogan_en?: SortOrder
    mission_slogan_de?: SortOrder
    mission_slogan_ru?: SortOrder
    mission_text_tr?: SortOrder
    mission_text_en?: SortOrder
    mission_text_de?: SortOrder
    mission_text_ru?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutPageMinOrderByAggregateInput = {
    id?: SortOrder
    intro_title_tr?: SortOrder
    intro_title_en?: SortOrder
    intro_title_de?: SortOrder
    intro_title_ru?: SortOrder
    intro_text_tr?: SortOrder
    intro_text_en?: SortOrder
    intro_text_de?: SortOrder
    intro_text_ru?: SortOrder
    vision_imageUrl?: SortOrder
    vision_title_tr?: SortOrder
    vision_title_en?: SortOrder
    vision_title_de?: SortOrder
    vision_title_ru?: SortOrder
    vision_slogan_tr?: SortOrder
    vision_slogan_en?: SortOrder
    vision_slogan_de?: SortOrder
    vision_slogan_ru?: SortOrder
    vision_text_tr?: SortOrder
    vision_text_en?: SortOrder
    vision_text_de?: SortOrder
    vision_text_ru?: SortOrder
    mission_imageUrl?: SortOrder
    mission_title_tr?: SortOrder
    mission_title_en?: SortOrder
    mission_title_de?: SortOrder
    mission_title_ru?: SortOrder
    mission_slogan_tr?: SortOrder
    mission_slogan_en?: SortOrder
    mission_slogan_de?: SortOrder
    mission_slogan_ru?: SortOrder
    mission_text_tr?: SortOrder
    mission_text_en?: SortOrder
    mission_text_de?: SortOrder
    mission_text_ru?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactInfoCountOrderByAggregateInput = {
    id?: SortOrder
    address_tr?: SortOrder
    address_en?: SortOrder
    address_de?: SortOrder
    address_ru?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    locationUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    address_tr?: SortOrder
    address_en?: SortOrder
    address_de?: SortOrder
    address_ru?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    locationUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactInfoMinOrderByAggregateInput = {
    id?: SortOrder
    address_tr?: SortOrder
    address_en?: SortOrder
    address_de?: SortOrder
    address_ru?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    locationUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FAQCountOrderByAggregateInput = {
    id?: SortOrder
    question_tr?: SortOrder
    question_en?: SortOrder
    question_de?: SortOrder
    question_ru?: SortOrder
    answer_tr?: SortOrder
    answer_en?: SortOrder
    answer_de?: SortOrder
    answer_ru?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FAQAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type FAQMaxOrderByAggregateInput = {
    id?: SortOrder
    question_tr?: SortOrder
    question_en?: SortOrder
    question_de?: SortOrder
    question_ru?: SortOrder
    answer_tr?: SortOrder
    answer_en?: SortOrder
    answer_de?: SortOrder
    answer_ru?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FAQMinOrderByAggregateInput = {
    id?: SortOrder
    question_tr?: SortOrder
    question_en?: SortOrder
    question_de?: SortOrder
    question_ru?: SortOrder
    answer_tr?: SortOrder
    answer_en?: SortOrder
    answer_de?: SortOrder
    answer_ru?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FAQSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type EnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    birthDate?: SortOrder
    gender?: SortOrder
    nationality?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    heightCm?: SortOrder
    chestCm?: SortOrder
    hipsCm?: SortOrder
    footCm?: SortOrder
    waistCm?: SortOrder
    eyeColor?: SortOrder
    selfieUrl?: SortOrder
    profilePhoto?: SortOrder
    fullBodyPhoto?: SortOrder
    status?: SortOrder
    adminNotes?: SortOrder
    submittedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationAvgOrderByAggregateInput = {
    heightCm?: SortOrder
    chestCm?: SortOrder
    hipsCm?: SortOrder
    footCm?: SortOrder
    waistCm?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    birthDate?: SortOrder
    gender?: SortOrder
    nationality?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    heightCm?: SortOrder
    chestCm?: SortOrder
    hipsCm?: SortOrder
    footCm?: SortOrder
    waistCm?: SortOrder
    eyeColor?: SortOrder
    selfieUrl?: SortOrder
    profilePhoto?: SortOrder
    fullBodyPhoto?: SortOrder
    status?: SortOrder
    adminNotes?: SortOrder
    submittedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    birthDate?: SortOrder
    gender?: SortOrder
    nationality?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    heightCm?: SortOrder
    chestCm?: SortOrder
    hipsCm?: SortOrder
    footCm?: SortOrder
    waistCm?: SortOrder
    eyeColor?: SortOrder
    selfieUrl?: SortOrder
    profilePhoto?: SortOrder
    fullBodyPhoto?: SortOrder
    status?: SortOrder
    adminNotes?: SortOrder
    submittedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationSumOrderByAggregateInput = {
    heightCm?: SortOrder
    chestCm?: SortOrder
    hipsCm?: SortOrder
    footCm?: SortOrder
    waistCm?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type EnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type ContactMessageCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactMessageMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumAdminRoleFieldUpdateOperationsInput = {
    set?: $Enums.AdminRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type HomeSliderItemCreateNestedManyWithoutHomeSliderInput = {
    create?: XOR<HomeSliderItemCreateWithoutHomeSliderInput, HomeSliderItemUncheckedCreateWithoutHomeSliderInput> | HomeSliderItemCreateWithoutHomeSliderInput[] | HomeSliderItemUncheckedCreateWithoutHomeSliderInput[]
    connectOrCreate?: HomeSliderItemCreateOrConnectWithoutHomeSliderInput | HomeSliderItemCreateOrConnectWithoutHomeSliderInput[]
    createMany?: HomeSliderItemCreateManyHomeSliderInputEnvelope
    connect?: HomeSliderItemWhereUniqueInput | HomeSliderItemWhereUniqueInput[]
  }

  export type HomeSliderItemUncheckedCreateNestedManyWithoutHomeSliderInput = {
    create?: XOR<HomeSliderItemCreateWithoutHomeSliderInput, HomeSliderItemUncheckedCreateWithoutHomeSliderInput> | HomeSliderItemCreateWithoutHomeSliderInput[] | HomeSliderItemUncheckedCreateWithoutHomeSliderInput[]
    connectOrCreate?: HomeSliderItemCreateOrConnectWithoutHomeSliderInput | HomeSliderItemCreateOrConnectWithoutHomeSliderInput[]
    createMany?: HomeSliderItemCreateManyHomeSliderInputEnvelope
    connect?: HomeSliderItemWhereUniqueInput | HomeSliderItemWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type HomeSliderItemUpdateManyWithoutHomeSliderNestedInput = {
    create?: XOR<HomeSliderItemCreateWithoutHomeSliderInput, HomeSliderItemUncheckedCreateWithoutHomeSliderInput> | HomeSliderItemCreateWithoutHomeSliderInput[] | HomeSliderItemUncheckedCreateWithoutHomeSliderInput[]
    connectOrCreate?: HomeSliderItemCreateOrConnectWithoutHomeSliderInput | HomeSliderItemCreateOrConnectWithoutHomeSliderInput[]
    upsert?: HomeSliderItemUpsertWithWhereUniqueWithoutHomeSliderInput | HomeSliderItemUpsertWithWhereUniqueWithoutHomeSliderInput[]
    createMany?: HomeSliderItemCreateManyHomeSliderInputEnvelope
    set?: HomeSliderItemWhereUniqueInput | HomeSliderItemWhereUniqueInput[]
    disconnect?: HomeSliderItemWhereUniqueInput | HomeSliderItemWhereUniqueInput[]
    delete?: HomeSliderItemWhereUniqueInput | HomeSliderItemWhereUniqueInput[]
    connect?: HomeSliderItemWhereUniqueInput | HomeSliderItemWhereUniqueInput[]
    update?: HomeSliderItemUpdateWithWhereUniqueWithoutHomeSliderInput | HomeSliderItemUpdateWithWhereUniqueWithoutHomeSliderInput[]
    updateMany?: HomeSliderItemUpdateManyWithWhereWithoutHomeSliderInput | HomeSliderItemUpdateManyWithWhereWithoutHomeSliderInput[]
    deleteMany?: HomeSliderItemScalarWhereInput | HomeSliderItemScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type HomeSliderItemUncheckedUpdateManyWithoutHomeSliderNestedInput = {
    create?: XOR<HomeSliderItemCreateWithoutHomeSliderInput, HomeSliderItemUncheckedCreateWithoutHomeSliderInput> | HomeSliderItemCreateWithoutHomeSliderInput[] | HomeSliderItemUncheckedCreateWithoutHomeSliderInput[]
    connectOrCreate?: HomeSliderItemCreateOrConnectWithoutHomeSliderInput | HomeSliderItemCreateOrConnectWithoutHomeSliderInput[]
    upsert?: HomeSliderItemUpsertWithWhereUniqueWithoutHomeSliderInput | HomeSliderItemUpsertWithWhereUniqueWithoutHomeSliderInput[]
    createMany?: HomeSliderItemCreateManyHomeSliderInputEnvelope
    set?: HomeSliderItemWhereUniqueInput | HomeSliderItemWhereUniqueInput[]
    disconnect?: HomeSliderItemWhereUniqueInput | HomeSliderItemWhereUniqueInput[]
    delete?: HomeSliderItemWhereUniqueInput | HomeSliderItemWhereUniqueInput[]
    connect?: HomeSliderItemWhereUniqueInput | HomeSliderItemWhereUniqueInput[]
    update?: HomeSliderItemUpdateWithWhereUniqueWithoutHomeSliderInput | HomeSliderItemUpdateWithWhereUniqueWithoutHomeSliderInput[]
    updateMany?: HomeSliderItemUpdateManyWithWhereWithoutHomeSliderInput | HomeSliderItemUpdateManyWithWhereWithoutHomeSliderInput[]
    deleteMany?: HomeSliderItemScalarWhereInput | HomeSliderItemScalarWhereInput[]
  }

  export type HomeSliderCreateNestedOneWithoutItemsInput = {
    create?: XOR<HomeSliderCreateWithoutItemsInput, HomeSliderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: HomeSliderCreateOrConnectWithoutItemsInput
    connect?: HomeSliderWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type HomeSliderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<HomeSliderCreateWithoutItemsInput, HomeSliderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: HomeSliderCreateOrConnectWithoutItemsInput
    upsert?: HomeSliderUpsertWithoutItemsInput
    connect?: HomeSliderWhereUniqueInput
    update?: XOR<XOR<HomeSliderUpdateToOneWithWhereWithoutItemsInput, HomeSliderUpdateWithoutItemsInput>, HomeSliderUncheckedUpdateWithoutItemsInput>
  }

  export type EnumCoverTypeFieldUpdateOperationsInput = {
    set?: $Enums.CoverType
  }

  export type NewsCreategalleryUrlsInput = {
    set: string[]
  }

  export type NewsUpdategalleryUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type EnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus
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

  export type NestedEnumAdminRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleFilter<$PrismaModel> | $Enums.AdminRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel> | $Enums.AdminRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminRoleFilter<$PrismaModel>
    _max?: NestedEnumAdminRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumCoverTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CoverType | EnumCoverTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CoverType[] | ListEnumCoverTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoverType[] | ListEnumCoverTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCoverTypeFilter<$PrismaModel> | $Enums.CoverType
  }

  export type NestedEnumCoverTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CoverType | EnumCoverTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CoverType[] | ListEnumCoverTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoverType[] | ListEnumCoverTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCoverTypeWithAggregatesFilter<$PrismaModel> | $Enums.CoverType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCoverTypeFilter<$PrismaModel>
    _max?: NestedEnumCoverTypeFilter<$PrismaModel>
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type HomeSliderItemCreateWithoutHomeSliderInput = {
    title_tr?: string | null
    title_en?: string | null
    title_de?: string | null
    title_ru?: string | null
    description_tr?: string | null
    description_en?: string | null
    description_de?: string | null
    description_ru?: string | null
    imageUrl?: string | null
    linkUrl?: string | null
    order?: number
    isActive?: boolean
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomeSliderItemUncheckedCreateWithoutHomeSliderInput = {
    id?: number
    title_tr?: string | null
    title_en?: string | null
    title_de?: string | null
    title_ru?: string | null
    description_tr?: string | null
    description_en?: string | null
    description_de?: string | null
    description_ru?: string | null
    imageUrl?: string | null
    linkUrl?: string | null
    order?: number
    isActive?: boolean
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomeSliderItemCreateOrConnectWithoutHomeSliderInput = {
    where: HomeSliderItemWhereUniqueInput
    create: XOR<HomeSliderItemCreateWithoutHomeSliderInput, HomeSliderItemUncheckedCreateWithoutHomeSliderInput>
  }

  export type HomeSliderItemCreateManyHomeSliderInputEnvelope = {
    data: HomeSliderItemCreateManyHomeSliderInput | HomeSliderItemCreateManyHomeSliderInput[]
    skipDuplicates?: boolean
  }

  export type HomeSliderItemUpsertWithWhereUniqueWithoutHomeSliderInput = {
    where: HomeSliderItemWhereUniqueInput
    update: XOR<HomeSliderItemUpdateWithoutHomeSliderInput, HomeSliderItemUncheckedUpdateWithoutHomeSliderInput>
    create: XOR<HomeSliderItemCreateWithoutHomeSliderInput, HomeSliderItemUncheckedCreateWithoutHomeSliderInput>
  }

  export type HomeSliderItemUpdateWithWhereUniqueWithoutHomeSliderInput = {
    where: HomeSliderItemWhereUniqueInput
    data: XOR<HomeSliderItemUpdateWithoutHomeSliderInput, HomeSliderItemUncheckedUpdateWithoutHomeSliderInput>
  }

  export type HomeSliderItemUpdateManyWithWhereWithoutHomeSliderInput = {
    where: HomeSliderItemScalarWhereInput
    data: XOR<HomeSliderItemUpdateManyMutationInput, HomeSliderItemUncheckedUpdateManyWithoutHomeSliderInput>
  }

  export type HomeSliderItemScalarWhereInput = {
    AND?: HomeSliderItemScalarWhereInput | HomeSliderItemScalarWhereInput[]
    OR?: HomeSliderItemScalarWhereInput[]
    NOT?: HomeSliderItemScalarWhereInput | HomeSliderItemScalarWhereInput[]
    id?: IntFilter<"HomeSliderItem"> | number
    homeSliderId?: IntFilter<"HomeSliderItem"> | number
    title_tr?: StringNullableFilter<"HomeSliderItem"> | string | null
    title_en?: StringNullableFilter<"HomeSliderItem"> | string | null
    title_de?: StringNullableFilter<"HomeSliderItem"> | string | null
    title_ru?: StringNullableFilter<"HomeSliderItem"> | string | null
    description_tr?: StringNullableFilter<"HomeSliderItem"> | string | null
    description_en?: StringNullableFilter<"HomeSliderItem"> | string | null
    description_de?: StringNullableFilter<"HomeSliderItem"> | string | null
    description_ru?: StringNullableFilter<"HomeSliderItem"> | string | null
    imageUrl?: StringNullableFilter<"HomeSliderItem"> | string | null
    linkUrl?: StringNullableFilter<"HomeSliderItem"> | string | null
    order?: IntFilter<"HomeSliderItem"> | number
    isActive?: BoolFilter<"HomeSliderItem"> | boolean
    startDate?: DateTimeNullableFilter<"HomeSliderItem"> | Date | string | null
    endDate?: DateTimeNullableFilter<"HomeSliderItem"> | Date | string | null
    createdAt?: DateTimeFilter<"HomeSliderItem"> | Date | string
    updatedAt?: DateTimeFilter<"HomeSliderItem"> | Date | string
  }

  export type HomeSliderCreateWithoutItemsInput = {
    key: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomeSliderUncheckedCreateWithoutItemsInput = {
    id?: number
    key: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomeSliderCreateOrConnectWithoutItemsInput = {
    where: HomeSliderWhereUniqueInput
    create: XOR<HomeSliderCreateWithoutItemsInput, HomeSliderUncheckedCreateWithoutItemsInput>
  }

  export type HomeSliderUpsertWithoutItemsInput = {
    update: XOR<HomeSliderUpdateWithoutItemsInput, HomeSliderUncheckedUpdateWithoutItemsInput>
    create: XOR<HomeSliderCreateWithoutItemsInput, HomeSliderUncheckedCreateWithoutItemsInput>
    where?: HomeSliderWhereInput
  }

  export type HomeSliderUpdateToOneWithWhereWithoutItemsInput = {
    where?: HomeSliderWhereInput
    data: XOR<HomeSliderUpdateWithoutItemsInput, HomeSliderUncheckedUpdateWithoutItemsInput>
  }

  export type HomeSliderUpdateWithoutItemsInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomeSliderUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomeSliderItemCreateManyHomeSliderInput = {
    id?: number
    title_tr?: string | null
    title_en?: string | null
    title_de?: string | null
    title_ru?: string | null
    description_tr?: string | null
    description_en?: string | null
    description_de?: string | null
    description_ru?: string | null
    imageUrl?: string | null
    linkUrl?: string | null
    order?: number
    isActive?: boolean
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomeSliderItemUpdateWithoutHomeSliderInput = {
    title_tr?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_de?: NullableStringFieldUpdateOperationsInput | string | null
    title_ru?: NullableStringFieldUpdateOperationsInput | string | null
    description_tr?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_de?: NullableStringFieldUpdateOperationsInput | string | null
    description_ru?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomeSliderItemUncheckedUpdateWithoutHomeSliderInput = {
    id?: IntFieldUpdateOperationsInput | number
    title_tr?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_de?: NullableStringFieldUpdateOperationsInput | string | null
    title_ru?: NullableStringFieldUpdateOperationsInput | string | null
    description_tr?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_de?: NullableStringFieldUpdateOperationsInput | string | null
    description_ru?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomeSliderItemUncheckedUpdateManyWithoutHomeSliderInput = {
    id?: IntFieldUpdateOperationsInput | number
    title_tr?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_de?: NullableStringFieldUpdateOperationsInput | string | null
    title_ru?: NullableStringFieldUpdateOperationsInput | string | null
    description_tr?: NullableStringFieldUpdateOperationsInput | string | null
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_de?: NullableStringFieldUpdateOperationsInput | string | null
    description_ru?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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