
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ConfirmationCode
 * 
 */
export type ConfirmationCode = $Result.DefaultSelection<Prisma.$ConfirmationCodePayload>
/**
 * Model SocialNetwork
 * 
 */
export type SocialNetwork = $Result.DefaultSelection<Prisma.$SocialNetworkPayload>
/**
 * Model SocialAccount
 * 
 */
export type SocialAccount = $Result.DefaultSelection<Prisma.$SocialAccountPayload>
/**
 * Model GeneralAnalyticsData
 * 
 */
export type GeneralAnalyticsData = $Result.DefaultSelection<Prisma.$GeneralAnalyticsDataPayload>
/**
 * Model FacebookAnalyticsPost
 * 
 */
export type FacebookAnalyticsPost = $Result.DefaultSelection<Prisma.$FacebookAnalyticsPostPayload>
/**
 * Model TwitterAnalyticsTweet
 * 
 */
export type TwitterAnalyticsTweet = $Result.DefaultSelection<Prisma.$TwitterAnalyticsTweetPayload>
/**
 * Model InstagramAnalyticsPost
 * 
 */
export type InstagramAnalyticsPost = $Result.DefaultSelection<Prisma.$InstagramAnalyticsPostPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.confirmationCode`: Exposes CRUD operations for the **ConfirmationCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConfirmationCodes
    * const confirmationCodes = await prisma.confirmationCode.findMany()
    * ```
    */
  get confirmationCode(): Prisma.ConfirmationCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.socialNetwork`: Exposes CRUD operations for the **SocialNetwork** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialNetworks
    * const socialNetworks = await prisma.socialNetwork.findMany()
    * ```
    */
  get socialNetwork(): Prisma.SocialNetworkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.socialAccount`: Exposes CRUD operations for the **SocialAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialAccounts
    * const socialAccounts = await prisma.socialAccount.findMany()
    * ```
    */
  get socialAccount(): Prisma.SocialAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.generalAnalyticsData`: Exposes CRUD operations for the **GeneralAnalyticsData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GeneralAnalyticsData
    * const generalAnalyticsData = await prisma.generalAnalyticsData.findMany()
    * ```
    */
  get generalAnalyticsData(): Prisma.GeneralAnalyticsDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facebookAnalyticsPost`: Exposes CRUD operations for the **FacebookAnalyticsPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacebookAnalyticsPosts
    * const facebookAnalyticsPosts = await prisma.facebookAnalyticsPost.findMany()
    * ```
    */
  get facebookAnalyticsPost(): Prisma.FacebookAnalyticsPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.twitterAnalyticsTweet`: Exposes CRUD operations for the **TwitterAnalyticsTweet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TwitterAnalyticsTweets
    * const twitterAnalyticsTweets = await prisma.twitterAnalyticsTweet.findMany()
    * ```
    */
  get twitterAnalyticsTweet(): Prisma.TwitterAnalyticsTweetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instagramAnalyticsPost`: Exposes CRUD operations for the **InstagramAnalyticsPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InstagramAnalyticsPosts
    * const instagramAnalyticsPosts = await prisma.instagramAnalyticsPost.findMany()
    * ```
    */
  get instagramAnalyticsPost(): Prisma.InstagramAnalyticsPostDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
    User: 'User',
    ConfirmationCode: 'ConfirmationCode',
    SocialNetwork: 'SocialNetwork',
    SocialAccount: 'SocialAccount',
    GeneralAnalyticsData: 'GeneralAnalyticsData',
    FacebookAnalyticsPost: 'FacebookAnalyticsPost',
    TwitterAnalyticsTweet: 'TwitterAnalyticsTweet',
    InstagramAnalyticsPost: 'InstagramAnalyticsPost'
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
      modelProps: "user" | "confirmationCode" | "socialNetwork" | "socialAccount" | "generalAnalyticsData" | "facebookAnalyticsPost" | "twitterAnalyticsTweet" | "instagramAnalyticsPost"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ConfirmationCode: {
        payload: Prisma.$ConfirmationCodePayload<ExtArgs>
        fields: Prisma.ConfirmationCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConfirmationCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmationCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConfirmationCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmationCodePayload>
          }
          findFirst: {
            args: Prisma.ConfirmationCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmationCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConfirmationCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmationCodePayload>
          }
          findMany: {
            args: Prisma.ConfirmationCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmationCodePayload>[]
          }
          create: {
            args: Prisma.ConfirmationCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmationCodePayload>
          }
          createMany: {
            args: Prisma.ConfirmationCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConfirmationCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmationCodePayload>[]
          }
          delete: {
            args: Prisma.ConfirmationCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmationCodePayload>
          }
          update: {
            args: Prisma.ConfirmationCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmationCodePayload>
          }
          deleteMany: {
            args: Prisma.ConfirmationCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConfirmationCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConfirmationCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmationCodePayload>[]
          }
          upsert: {
            args: Prisma.ConfirmationCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmationCodePayload>
          }
          aggregate: {
            args: Prisma.ConfirmationCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfirmationCode>
          }
          groupBy: {
            args: Prisma.ConfirmationCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfirmationCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConfirmationCodeCountArgs<ExtArgs>
            result: $Utils.Optional<ConfirmationCodeCountAggregateOutputType> | number
          }
        }
      }
      SocialNetwork: {
        payload: Prisma.$SocialNetworkPayload<ExtArgs>
        fields: Prisma.SocialNetworkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialNetworkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialNetworkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialNetworkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialNetworkPayload>
          }
          findFirst: {
            args: Prisma.SocialNetworkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialNetworkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialNetworkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialNetworkPayload>
          }
          findMany: {
            args: Prisma.SocialNetworkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialNetworkPayload>[]
          }
          create: {
            args: Prisma.SocialNetworkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialNetworkPayload>
          }
          createMany: {
            args: Prisma.SocialNetworkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialNetworkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialNetworkPayload>[]
          }
          delete: {
            args: Prisma.SocialNetworkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialNetworkPayload>
          }
          update: {
            args: Prisma.SocialNetworkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialNetworkPayload>
          }
          deleteMany: {
            args: Prisma.SocialNetworkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialNetworkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocialNetworkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialNetworkPayload>[]
          }
          upsert: {
            args: Prisma.SocialNetworkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialNetworkPayload>
          }
          aggregate: {
            args: Prisma.SocialNetworkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialNetwork>
          }
          groupBy: {
            args: Prisma.SocialNetworkGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialNetworkGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialNetworkCountArgs<ExtArgs>
            result: $Utils.Optional<SocialNetworkCountAggregateOutputType> | number
          }
        }
      }
      SocialAccount: {
        payload: Prisma.$SocialAccountPayload<ExtArgs>
        fields: Prisma.SocialAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialAccountPayload>
          }
          findFirst: {
            args: Prisma.SocialAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialAccountPayload>
          }
          findMany: {
            args: Prisma.SocialAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialAccountPayload>[]
          }
          create: {
            args: Prisma.SocialAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialAccountPayload>
          }
          createMany: {
            args: Prisma.SocialAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialAccountPayload>[]
          }
          delete: {
            args: Prisma.SocialAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialAccountPayload>
          }
          update: {
            args: Prisma.SocialAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialAccountPayload>
          }
          deleteMany: {
            args: Prisma.SocialAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocialAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialAccountPayload>[]
          }
          upsert: {
            args: Prisma.SocialAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialAccountPayload>
          }
          aggregate: {
            args: Prisma.SocialAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialAccount>
          }
          groupBy: {
            args: Prisma.SocialAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialAccountCountArgs<ExtArgs>
            result: $Utils.Optional<SocialAccountCountAggregateOutputType> | number
          }
        }
      }
      GeneralAnalyticsData: {
        payload: Prisma.$GeneralAnalyticsDataPayload<ExtArgs>
        fields: Prisma.GeneralAnalyticsDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeneralAnalyticsDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralAnalyticsDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeneralAnalyticsDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralAnalyticsDataPayload>
          }
          findFirst: {
            args: Prisma.GeneralAnalyticsDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralAnalyticsDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeneralAnalyticsDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralAnalyticsDataPayload>
          }
          findMany: {
            args: Prisma.GeneralAnalyticsDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralAnalyticsDataPayload>[]
          }
          create: {
            args: Prisma.GeneralAnalyticsDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralAnalyticsDataPayload>
          }
          createMany: {
            args: Prisma.GeneralAnalyticsDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GeneralAnalyticsDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralAnalyticsDataPayload>[]
          }
          delete: {
            args: Prisma.GeneralAnalyticsDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralAnalyticsDataPayload>
          }
          update: {
            args: Prisma.GeneralAnalyticsDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralAnalyticsDataPayload>
          }
          deleteMany: {
            args: Prisma.GeneralAnalyticsDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeneralAnalyticsDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GeneralAnalyticsDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralAnalyticsDataPayload>[]
          }
          upsert: {
            args: Prisma.GeneralAnalyticsDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralAnalyticsDataPayload>
          }
          aggregate: {
            args: Prisma.GeneralAnalyticsDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeneralAnalyticsData>
          }
          groupBy: {
            args: Prisma.GeneralAnalyticsDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeneralAnalyticsDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.GeneralAnalyticsDataCountArgs<ExtArgs>
            result: $Utils.Optional<GeneralAnalyticsDataCountAggregateOutputType> | number
          }
        }
      }
      FacebookAnalyticsPost: {
        payload: Prisma.$FacebookAnalyticsPostPayload<ExtArgs>
        fields: Prisma.FacebookAnalyticsPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacebookAnalyticsPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookAnalyticsPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacebookAnalyticsPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookAnalyticsPostPayload>
          }
          findFirst: {
            args: Prisma.FacebookAnalyticsPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookAnalyticsPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacebookAnalyticsPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookAnalyticsPostPayload>
          }
          findMany: {
            args: Prisma.FacebookAnalyticsPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookAnalyticsPostPayload>[]
          }
          create: {
            args: Prisma.FacebookAnalyticsPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookAnalyticsPostPayload>
          }
          createMany: {
            args: Prisma.FacebookAnalyticsPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacebookAnalyticsPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookAnalyticsPostPayload>[]
          }
          delete: {
            args: Prisma.FacebookAnalyticsPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookAnalyticsPostPayload>
          }
          update: {
            args: Prisma.FacebookAnalyticsPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookAnalyticsPostPayload>
          }
          deleteMany: {
            args: Prisma.FacebookAnalyticsPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacebookAnalyticsPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacebookAnalyticsPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookAnalyticsPostPayload>[]
          }
          upsert: {
            args: Prisma.FacebookAnalyticsPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookAnalyticsPostPayload>
          }
          aggregate: {
            args: Prisma.FacebookAnalyticsPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacebookAnalyticsPost>
          }
          groupBy: {
            args: Prisma.FacebookAnalyticsPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacebookAnalyticsPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacebookAnalyticsPostCountArgs<ExtArgs>
            result: $Utils.Optional<FacebookAnalyticsPostCountAggregateOutputType> | number
          }
        }
      }
      TwitterAnalyticsTweet: {
        payload: Prisma.$TwitterAnalyticsTweetPayload<ExtArgs>
        fields: Prisma.TwitterAnalyticsTweetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TwitterAnalyticsTweetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwitterAnalyticsTweetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TwitterAnalyticsTweetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwitterAnalyticsTweetPayload>
          }
          findFirst: {
            args: Prisma.TwitterAnalyticsTweetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwitterAnalyticsTweetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TwitterAnalyticsTweetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwitterAnalyticsTweetPayload>
          }
          findMany: {
            args: Prisma.TwitterAnalyticsTweetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwitterAnalyticsTweetPayload>[]
          }
          create: {
            args: Prisma.TwitterAnalyticsTweetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwitterAnalyticsTweetPayload>
          }
          createMany: {
            args: Prisma.TwitterAnalyticsTweetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TwitterAnalyticsTweetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwitterAnalyticsTweetPayload>[]
          }
          delete: {
            args: Prisma.TwitterAnalyticsTweetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwitterAnalyticsTweetPayload>
          }
          update: {
            args: Prisma.TwitterAnalyticsTweetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwitterAnalyticsTweetPayload>
          }
          deleteMany: {
            args: Prisma.TwitterAnalyticsTweetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TwitterAnalyticsTweetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TwitterAnalyticsTweetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwitterAnalyticsTweetPayload>[]
          }
          upsert: {
            args: Prisma.TwitterAnalyticsTweetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwitterAnalyticsTweetPayload>
          }
          aggregate: {
            args: Prisma.TwitterAnalyticsTweetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTwitterAnalyticsTweet>
          }
          groupBy: {
            args: Prisma.TwitterAnalyticsTweetGroupByArgs<ExtArgs>
            result: $Utils.Optional<TwitterAnalyticsTweetGroupByOutputType>[]
          }
          count: {
            args: Prisma.TwitterAnalyticsTweetCountArgs<ExtArgs>
            result: $Utils.Optional<TwitterAnalyticsTweetCountAggregateOutputType> | number
          }
        }
      }
      InstagramAnalyticsPost: {
        payload: Prisma.$InstagramAnalyticsPostPayload<ExtArgs>
        fields: Prisma.InstagramAnalyticsPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstagramAnalyticsPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstagramAnalyticsPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstagramAnalyticsPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstagramAnalyticsPostPayload>
          }
          findFirst: {
            args: Prisma.InstagramAnalyticsPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstagramAnalyticsPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstagramAnalyticsPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstagramAnalyticsPostPayload>
          }
          findMany: {
            args: Prisma.InstagramAnalyticsPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstagramAnalyticsPostPayload>[]
          }
          create: {
            args: Prisma.InstagramAnalyticsPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstagramAnalyticsPostPayload>
          }
          createMany: {
            args: Prisma.InstagramAnalyticsPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstagramAnalyticsPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstagramAnalyticsPostPayload>[]
          }
          delete: {
            args: Prisma.InstagramAnalyticsPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstagramAnalyticsPostPayload>
          }
          update: {
            args: Prisma.InstagramAnalyticsPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstagramAnalyticsPostPayload>
          }
          deleteMany: {
            args: Prisma.InstagramAnalyticsPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstagramAnalyticsPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstagramAnalyticsPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstagramAnalyticsPostPayload>[]
          }
          upsert: {
            args: Prisma.InstagramAnalyticsPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstagramAnalyticsPostPayload>
          }
          aggregate: {
            args: Prisma.InstagramAnalyticsPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstagramAnalyticsPost>
          }
          groupBy: {
            args: Prisma.InstagramAnalyticsPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstagramAnalyticsPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstagramAnalyticsPostCountArgs<ExtArgs>
            result: $Utils.Optional<InstagramAnalyticsPostCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    user?: UserOmit
    confirmationCode?: ConfirmationCodeOmit
    socialNetwork?: SocialNetworkOmit
    socialAccount?: SocialAccountOmit
    generalAnalyticsData?: GeneralAnalyticsDataOmit
    facebookAnalyticsPost?: FacebookAnalyticsPostOmit
    twitterAnalyticsTweet?: TwitterAnalyticsTweetOmit
    instagramAnalyticsPost?: InstagramAnalyticsPostOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    socialAccounts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    socialAccounts?: boolean | UserCountOutputTypeCountSocialAccountsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSocialAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialAccountWhereInput
  }


  /**
   * Count Type SocialNetworkCountOutputType
   */

  export type SocialNetworkCountOutputType = {
    socialAccounts: number
  }

  export type SocialNetworkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    socialAccounts?: boolean | SocialNetworkCountOutputTypeCountSocialAccountsArgs
  }

  // Custom InputTypes
  /**
   * SocialNetworkCountOutputType without action
   */
  export type SocialNetworkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialNetworkCountOutputType
     */
    select?: SocialNetworkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SocialNetworkCountOutputType without action
   */
  export type SocialNetworkCountOutputTypeCountSocialAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialAccountWhereInput
  }


  /**
   * Count Type SocialAccountCountOutputType
   */

  export type SocialAccountCountOutputType = {
    generalAnalytics: number
  }

  export type SocialAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generalAnalytics?: boolean | SocialAccountCountOutputTypeCountGeneralAnalyticsArgs
  }

  // Custom InputTypes
  /**
   * SocialAccountCountOutputType without action
   */
  export type SocialAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccountCountOutputType
     */
    select?: SocialAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SocialAccountCountOutputType without action
   */
  export type SocialAccountCountOutputTypeCountGeneralAnalyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneralAnalyticsDataWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    registeredAt: Date | null
    isEmailVerified: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    registeredAt: Date | null
    isEmailVerified: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    registeredAt: number
    isEmailVerified: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    registeredAt?: true
    isEmailVerified?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    registeredAt?: true
    isEmailVerified?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    registeredAt?: true
    isEmailVerified?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    passwordHash: string
    registeredAt: Date
    isEmailVerified: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    registeredAt?: boolean
    isEmailVerified?: boolean
    confirmationCode?: boolean | User$confirmationCodeArgs<ExtArgs>
    socialAccounts?: boolean | User$socialAccountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    registeredAt?: boolean
    isEmailVerified?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    registeredAt?: boolean
    isEmailVerified?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    registeredAt?: boolean
    isEmailVerified?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "registeredAt" | "isEmailVerified", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    confirmationCode?: boolean | User$confirmationCodeArgs<ExtArgs>
    socialAccounts?: boolean | User$socialAccountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      confirmationCode: Prisma.$ConfirmationCodePayload<ExtArgs> | null
      socialAccounts: Prisma.$SocialAccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      passwordHash: string
      registeredAt: Date
      isEmailVerified: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    confirmationCode<T extends User$confirmationCodeArgs<ExtArgs> = {}>(args?: Subset<T, User$confirmationCodeArgs<ExtArgs>>): Prisma__ConfirmationCodeClient<$Result.GetResult<Prisma.$ConfirmationCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    socialAccounts<T extends User$socialAccountsArgs<ExtArgs> = {}>(args?: Subset<T, User$socialAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly registeredAt: FieldRef<"User", 'DateTime'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.confirmationCode
   */
  export type User$confirmationCodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmationCode
     */
    select?: ConfirmationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmationCode
     */
    omit?: ConfirmationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmationCodeInclude<ExtArgs> | null
    where?: ConfirmationCodeWhereInput
  }

  /**
   * User.socialAccounts
   */
  export type User$socialAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
    where?: SocialAccountWhereInput
    orderBy?: SocialAccountOrderByWithRelationInput | SocialAccountOrderByWithRelationInput[]
    cursor?: SocialAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SocialAccountScalarFieldEnum | SocialAccountScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ConfirmationCode
   */

  export type AggregateConfirmationCode = {
    _count: ConfirmationCodeCountAggregateOutputType | null
    _avg: ConfirmationCodeAvgAggregateOutputType | null
    _sum: ConfirmationCodeSumAggregateOutputType | null
    _min: ConfirmationCodeMinAggregateOutputType | null
    _max: ConfirmationCodeMaxAggregateOutputType | null
  }

  export type ConfirmationCodeAvgAggregateOutputType = {
    userId: number | null
  }

  export type ConfirmationCodeSumAggregateOutputType = {
    userId: number | null
  }

  export type ConfirmationCodeMinAggregateOutputType = {
    code: string | null
    expiresAt: Date | null
    userId: number | null
  }

  export type ConfirmationCodeMaxAggregateOutputType = {
    code: string | null
    expiresAt: Date | null
    userId: number | null
  }

  export type ConfirmationCodeCountAggregateOutputType = {
    code: number
    expiresAt: number
    userId: number
    _all: number
  }


  export type ConfirmationCodeAvgAggregateInputType = {
    userId?: true
  }

  export type ConfirmationCodeSumAggregateInputType = {
    userId?: true
  }

  export type ConfirmationCodeMinAggregateInputType = {
    code?: true
    expiresAt?: true
    userId?: true
  }

  export type ConfirmationCodeMaxAggregateInputType = {
    code?: true
    expiresAt?: true
    userId?: true
  }

  export type ConfirmationCodeCountAggregateInputType = {
    code?: true
    expiresAt?: true
    userId?: true
    _all?: true
  }

  export type ConfirmationCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConfirmationCode to aggregate.
     */
    where?: ConfirmationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfirmationCodes to fetch.
     */
    orderBy?: ConfirmationCodeOrderByWithRelationInput | ConfirmationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConfirmationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfirmationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfirmationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConfirmationCodes
    **/
    _count?: true | ConfirmationCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConfirmationCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConfirmationCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfirmationCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfirmationCodeMaxAggregateInputType
  }

  export type GetConfirmationCodeAggregateType<T extends ConfirmationCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateConfirmationCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfirmationCode[P]>
      : GetScalarType<T[P], AggregateConfirmationCode[P]>
  }




  export type ConfirmationCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfirmationCodeWhereInput
    orderBy?: ConfirmationCodeOrderByWithAggregationInput | ConfirmationCodeOrderByWithAggregationInput[]
    by: ConfirmationCodeScalarFieldEnum[] | ConfirmationCodeScalarFieldEnum
    having?: ConfirmationCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfirmationCodeCountAggregateInputType | true
    _avg?: ConfirmationCodeAvgAggregateInputType
    _sum?: ConfirmationCodeSumAggregateInputType
    _min?: ConfirmationCodeMinAggregateInputType
    _max?: ConfirmationCodeMaxAggregateInputType
  }

  export type ConfirmationCodeGroupByOutputType = {
    code: string
    expiresAt: Date
    userId: number
    _count: ConfirmationCodeCountAggregateOutputType | null
    _avg: ConfirmationCodeAvgAggregateOutputType | null
    _sum: ConfirmationCodeSumAggregateOutputType | null
    _min: ConfirmationCodeMinAggregateOutputType | null
    _max: ConfirmationCodeMaxAggregateOutputType | null
  }

  type GetConfirmationCodeGroupByPayload<T extends ConfirmationCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfirmationCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfirmationCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfirmationCodeGroupByOutputType[P]>
            : GetScalarType<T[P], ConfirmationCodeGroupByOutputType[P]>
        }
      >
    >


  export type ConfirmationCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    expiresAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["confirmationCode"]>

  export type ConfirmationCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    expiresAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["confirmationCode"]>

  export type ConfirmationCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    expiresAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["confirmationCode"]>

  export type ConfirmationCodeSelectScalar = {
    code?: boolean
    expiresAt?: boolean
    userId?: boolean
  }

  export type ConfirmationCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"code" | "expiresAt" | "userId", ExtArgs["result"]["confirmationCode"]>
  export type ConfirmationCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConfirmationCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConfirmationCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ConfirmationCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConfirmationCode"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      code: string
      expiresAt: Date
      userId: number
    }, ExtArgs["result"]["confirmationCode"]>
    composites: {}
  }

  type ConfirmationCodeGetPayload<S extends boolean | null | undefined | ConfirmationCodeDefaultArgs> = $Result.GetResult<Prisma.$ConfirmationCodePayload, S>

  type ConfirmationCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConfirmationCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConfirmationCodeCountAggregateInputType | true
    }

  export interface ConfirmationCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConfirmationCode'], meta: { name: 'ConfirmationCode' } }
    /**
     * Find zero or one ConfirmationCode that matches the filter.
     * @param {ConfirmationCodeFindUniqueArgs} args - Arguments to find a ConfirmationCode
     * @example
     * // Get one ConfirmationCode
     * const confirmationCode = await prisma.confirmationCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConfirmationCodeFindUniqueArgs>(args: SelectSubset<T, ConfirmationCodeFindUniqueArgs<ExtArgs>>): Prisma__ConfirmationCodeClient<$Result.GetResult<Prisma.$ConfirmationCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConfirmationCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConfirmationCodeFindUniqueOrThrowArgs} args - Arguments to find a ConfirmationCode
     * @example
     * // Get one ConfirmationCode
     * const confirmationCode = await prisma.confirmationCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConfirmationCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, ConfirmationCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConfirmationCodeClient<$Result.GetResult<Prisma.$ConfirmationCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConfirmationCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmationCodeFindFirstArgs} args - Arguments to find a ConfirmationCode
     * @example
     * // Get one ConfirmationCode
     * const confirmationCode = await prisma.confirmationCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConfirmationCodeFindFirstArgs>(args?: SelectSubset<T, ConfirmationCodeFindFirstArgs<ExtArgs>>): Prisma__ConfirmationCodeClient<$Result.GetResult<Prisma.$ConfirmationCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConfirmationCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmationCodeFindFirstOrThrowArgs} args - Arguments to find a ConfirmationCode
     * @example
     * // Get one ConfirmationCode
     * const confirmationCode = await prisma.confirmationCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConfirmationCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, ConfirmationCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConfirmationCodeClient<$Result.GetResult<Prisma.$ConfirmationCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConfirmationCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmationCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConfirmationCodes
     * const confirmationCodes = await prisma.confirmationCode.findMany()
     * 
     * // Get first 10 ConfirmationCodes
     * const confirmationCodes = await prisma.confirmationCode.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const confirmationCodeWithCodeOnly = await prisma.confirmationCode.findMany({ select: { code: true } })
     * 
     */
    findMany<T extends ConfirmationCodeFindManyArgs>(args?: SelectSubset<T, ConfirmationCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfirmationCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConfirmationCode.
     * @param {ConfirmationCodeCreateArgs} args - Arguments to create a ConfirmationCode.
     * @example
     * // Create one ConfirmationCode
     * const ConfirmationCode = await prisma.confirmationCode.create({
     *   data: {
     *     // ... data to create a ConfirmationCode
     *   }
     * })
     * 
     */
    create<T extends ConfirmationCodeCreateArgs>(args: SelectSubset<T, ConfirmationCodeCreateArgs<ExtArgs>>): Prisma__ConfirmationCodeClient<$Result.GetResult<Prisma.$ConfirmationCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConfirmationCodes.
     * @param {ConfirmationCodeCreateManyArgs} args - Arguments to create many ConfirmationCodes.
     * @example
     * // Create many ConfirmationCodes
     * const confirmationCode = await prisma.confirmationCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConfirmationCodeCreateManyArgs>(args?: SelectSubset<T, ConfirmationCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConfirmationCodes and returns the data saved in the database.
     * @param {ConfirmationCodeCreateManyAndReturnArgs} args - Arguments to create many ConfirmationCodes.
     * @example
     * // Create many ConfirmationCodes
     * const confirmationCode = await prisma.confirmationCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConfirmationCodes and only return the `code`
     * const confirmationCodeWithCodeOnly = await prisma.confirmationCode.createManyAndReturn({
     *   select: { code: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConfirmationCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, ConfirmationCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfirmationCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConfirmationCode.
     * @param {ConfirmationCodeDeleteArgs} args - Arguments to delete one ConfirmationCode.
     * @example
     * // Delete one ConfirmationCode
     * const ConfirmationCode = await prisma.confirmationCode.delete({
     *   where: {
     *     // ... filter to delete one ConfirmationCode
     *   }
     * })
     * 
     */
    delete<T extends ConfirmationCodeDeleteArgs>(args: SelectSubset<T, ConfirmationCodeDeleteArgs<ExtArgs>>): Prisma__ConfirmationCodeClient<$Result.GetResult<Prisma.$ConfirmationCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConfirmationCode.
     * @param {ConfirmationCodeUpdateArgs} args - Arguments to update one ConfirmationCode.
     * @example
     * // Update one ConfirmationCode
     * const confirmationCode = await prisma.confirmationCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConfirmationCodeUpdateArgs>(args: SelectSubset<T, ConfirmationCodeUpdateArgs<ExtArgs>>): Prisma__ConfirmationCodeClient<$Result.GetResult<Prisma.$ConfirmationCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConfirmationCodes.
     * @param {ConfirmationCodeDeleteManyArgs} args - Arguments to filter ConfirmationCodes to delete.
     * @example
     * // Delete a few ConfirmationCodes
     * const { count } = await prisma.confirmationCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConfirmationCodeDeleteManyArgs>(args?: SelectSubset<T, ConfirmationCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConfirmationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmationCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConfirmationCodes
     * const confirmationCode = await prisma.confirmationCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConfirmationCodeUpdateManyArgs>(args: SelectSubset<T, ConfirmationCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConfirmationCodes and returns the data updated in the database.
     * @param {ConfirmationCodeUpdateManyAndReturnArgs} args - Arguments to update many ConfirmationCodes.
     * @example
     * // Update many ConfirmationCodes
     * const confirmationCode = await prisma.confirmationCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConfirmationCodes and only return the `code`
     * const confirmationCodeWithCodeOnly = await prisma.confirmationCode.updateManyAndReturn({
     *   select: { code: true },
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
    updateManyAndReturn<T extends ConfirmationCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, ConfirmationCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfirmationCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConfirmationCode.
     * @param {ConfirmationCodeUpsertArgs} args - Arguments to update or create a ConfirmationCode.
     * @example
     * // Update or create a ConfirmationCode
     * const confirmationCode = await prisma.confirmationCode.upsert({
     *   create: {
     *     // ... data to create a ConfirmationCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConfirmationCode we want to update
     *   }
     * })
     */
    upsert<T extends ConfirmationCodeUpsertArgs>(args: SelectSubset<T, ConfirmationCodeUpsertArgs<ExtArgs>>): Prisma__ConfirmationCodeClient<$Result.GetResult<Prisma.$ConfirmationCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConfirmationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmationCodeCountArgs} args - Arguments to filter ConfirmationCodes to count.
     * @example
     * // Count the number of ConfirmationCodes
     * const count = await prisma.confirmationCode.count({
     *   where: {
     *     // ... the filter for the ConfirmationCodes we want to count
     *   }
     * })
    **/
    count<T extends ConfirmationCodeCountArgs>(
      args?: Subset<T, ConfirmationCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfirmationCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConfirmationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmationCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConfirmationCodeAggregateArgs>(args: Subset<T, ConfirmationCodeAggregateArgs>): Prisma.PrismaPromise<GetConfirmationCodeAggregateType<T>>

    /**
     * Group by ConfirmationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmationCodeGroupByArgs} args - Group by arguments.
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
      T extends ConfirmationCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfirmationCodeGroupByArgs['orderBy'] }
        : { orderBy?: ConfirmationCodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConfirmationCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfirmationCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConfirmationCode model
   */
  readonly fields: ConfirmationCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConfirmationCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConfirmationCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ConfirmationCode model
   */
  interface ConfirmationCodeFieldRefs {
    readonly code: FieldRef<"ConfirmationCode", 'String'>
    readonly expiresAt: FieldRef<"ConfirmationCode", 'DateTime'>
    readonly userId: FieldRef<"ConfirmationCode", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ConfirmationCode findUnique
   */
  export type ConfirmationCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmationCode
     */
    select?: ConfirmationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmationCode
     */
    omit?: ConfirmationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmationCodeInclude<ExtArgs> | null
    /**
     * Filter, which ConfirmationCode to fetch.
     */
    where: ConfirmationCodeWhereUniqueInput
  }

  /**
   * ConfirmationCode findUniqueOrThrow
   */
  export type ConfirmationCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmationCode
     */
    select?: ConfirmationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmationCode
     */
    omit?: ConfirmationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmationCodeInclude<ExtArgs> | null
    /**
     * Filter, which ConfirmationCode to fetch.
     */
    where: ConfirmationCodeWhereUniqueInput
  }

  /**
   * ConfirmationCode findFirst
   */
  export type ConfirmationCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmationCode
     */
    select?: ConfirmationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmationCode
     */
    omit?: ConfirmationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmationCodeInclude<ExtArgs> | null
    /**
     * Filter, which ConfirmationCode to fetch.
     */
    where?: ConfirmationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfirmationCodes to fetch.
     */
    orderBy?: ConfirmationCodeOrderByWithRelationInput | ConfirmationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConfirmationCodes.
     */
    cursor?: ConfirmationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfirmationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfirmationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConfirmationCodes.
     */
    distinct?: ConfirmationCodeScalarFieldEnum | ConfirmationCodeScalarFieldEnum[]
  }

  /**
   * ConfirmationCode findFirstOrThrow
   */
  export type ConfirmationCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmationCode
     */
    select?: ConfirmationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmationCode
     */
    omit?: ConfirmationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmationCodeInclude<ExtArgs> | null
    /**
     * Filter, which ConfirmationCode to fetch.
     */
    where?: ConfirmationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfirmationCodes to fetch.
     */
    orderBy?: ConfirmationCodeOrderByWithRelationInput | ConfirmationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConfirmationCodes.
     */
    cursor?: ConfirmationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfirmationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfirmationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConfirmationCodes.
     */
    distinct?: ConfirmationCodeScalarFieldEnum | ConfirmationCodeScalarFieldEnum[]
  }

  /**
   * ConfirmationCode findMany
   */
  export type ConfirmationCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmationCode
     */
    select?: ConfirmationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmationCode
     */
    omit?: ConfirmationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmationCodeInclude<ExtArgs> | null
    /**
     * Filter, which ConfirmationCodes to fetch.
     */
    where?: ConfirmationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfirmationCodes to fetch.
     */
    orderBy?: ConfirmationCodeOrderByWithRelationInput | ConfirmationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConfirmationCodes.
     */
    cursor?: ConfirmationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfirmationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfirmationCodes.
     */
    skip?: number
    distinct?: ConfirmationCodeScalarFieldEnum | ConfirmationCodeScalarFieldEnum[]
  }

  /**
   * ConfirmationCode create
   */
  export type ConfirmationCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmationCode
     */
    select?: ConfirmationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmationCode
     */
    omit?: ConfirmationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmationCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a ConfirmationCode.
     */
    data: XOR<ConfirmationCodeCreateInput, ConfirmationCodeUncheckedCreateInput>
  }

  /**
   * ConfirmationCode createMany
   */
  export type ConfirmationCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConfirmationCodes.
     */
    data: ConfirmationCodeCreateManyInput | ConfirmationCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConfirmationCode createManyAndReturn
   */
  export type ConfirmationCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmationCode
     */
    select?: ConfirmationCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmationCode
     */
    omit?: ConfirmationCodeOmit<ExtArgs> | null
    /**
     * The data used to create many ConfirmationCodes.
     */
    data: ConfirmationCodeCreateManyInput | ConfirmationCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmationCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConfirmationCode update
   */
  export type ConfirmationCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmationCode
     */
    select?: ConfirmationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmationCode
     */
    omit?: ConfirmationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmationCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a ConfirmationCode.
     */
    data: XOR<ConfirmationCodeUpdateInput, ConfirmationCodeUncheckedUpdateInput>
    /**
     * Choose, which ConfirmationCode to update.
     */
    where: ConfirmationCodeWhereUniqueInput
  }

  /**
   * ConfirmationCode updateMany
   */
  export type ConfirmationCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConfirmationCodes.
     */
    data: XOR<ConfirmationCodeUpdateManyMutationInput, ConfirmationCodeUncheckedUpdateManyInput>
    /**
     * Filter which ConfirmationCodes to update
     */
    where?: ConfirmationCodeWhereInput
    /**
     * Limit how many ConfirmationCodes to update.
     */
    limit?: number
  }

  /**
   * ConfirmationCode updateManyAndReturn
   */
  export type ConfirmationCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmationCode
     */
    select?: ConfirmationCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmationCode
     */
    omit?: ConfirmationCodeOmit<ExtArgs> | null
    /**
     * The data used to update ConfirmationCodes.
     */
    data: XOR<ConfirmationCodeUpdateManyMutationInput, ConfirmationCodeUncheckedUpdateManyInput>
    /**
     * Filter which ConfirmationCodes to update
     */
    where?: ConfirmationCodeWhereInput
    /**
     * Limit how many ConfirmationCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmationCodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConfirmationCode upsert
   */
  export type ConfirmationCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmationCode
     */
    select?: ConfirmationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmationCode
     */
    omit?: ConfirmationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmationCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the ConfirmationCode to update in case it exists.
     */
    where: ConfirmationCodeWhereUniqueInput
    /**
     * In case the ConfirmationCode found by the `where` argument doesn't exist, create a new ConfirmationCode with this data.
     */
    create: XOR<ConfirmationCodeCreateInput, ConfirmationCodeUncheckedCreateInput>
    /**
     * In case the ConfirmationCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConfirmationCodeUpdateInput, ConfirmationCodeUncheckedUpdateInput>
  }

  /**
   * ConfirmationCode delete
   */
  export type ConfirmationCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmationCode
     */
    select?: ConfirmationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmationCode
     */
    omit?: ConfirmationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmationCodeInclude<ExtArgs> | null
    /**
     * Filter which ConfirmationCode to delete.
     */
    where: ConfirmationCodeWhereUniqueInput
  }

  /**
   * ConfirmationCode deleteMany
   */
  export type ConfirmationCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConfirmationCodes to delete
     */
    where?: ConfirmationCodeWhereInput
    /**
     * Limit how many ConfirmationCodes to delete.
     */
    limit?: number
  }

  /**
   * ConfirmationCode without action
   */
  export type ConfirmationCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmationCode
     */
    select?: ConfirmationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmationCode
     */
    omit?: ConfirmationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmationCodeInclude<ExtArgs> | null
  }


  /**
   * Model SocialNetwork
   */

  export type AggregateSocialNetwork = {
    _count: SocialNetworkCountAggregateOutputType | null
    _avg: SocialNetworkAvgAggregateOutputType | null
    _sum: SocialNetworkSumAggregateOutputType | null
    _min: SocialNetworkMinAggregateOutputType | null
    _max: SocialNetworkMaxAggregateOutputType | null
  }

  export type SocialNetworkAvgAggregateOutputType = {
    id: number | null
  }

  export type SocialNetworkSumAggregateOutputType = {
    id: number | null
  }

  export type SocialNetworkMinAggregateOutputType = {
    id: number | null
    name: string | null
    profileUrlFormat: string | null
  }

  export type SocialNetworkMaxAggregateOutputType = {
    id: number | null
    name: string | null
    profileUrlFormat: string | null
  }

  export type SocialNetworkCountAggregateOutputType = {
    id: number
    name: number
    profileUrlFormat: number
    _all: number
  }


  export type SocialNetworkAvgAggregateInputType = {
    id?: true
  }

  export type SocialNetworkSumAggregateInputType = {
    id?: true
  }

  export type SocialNetworkMinAggregateInputType = {
    id?: true
    name?: true
    profileUrlFormat?: true
  }

  export type SocialNetworkMaxAggregateInputType = {
    id?: true
    name?: true
    profileUrlFormat?: true
  }

  export type SocialNetworkCountAggregateInputType = {
    id?: true
    name?: true
    profileUrlFormat?: true
    _all?: true
  }

  export type SocialNetworkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialNetwork to aggregate.
     */
    where?: SocialNetworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialNetworks to fetch.
     */
    orderBy?: SocialNetworkOrderByWithRelationInput | SocialNetworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialNetworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialNetworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialNetworks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialNetworks
    **/
    _count?: true | SocialNetworkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SocialNetworkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SocialNetworkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialNetworkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialNetworkMaxAggregateInputType
  }

  export type GetSocialNetworkAggregateType<T extends SocialNetworkAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialNetwork]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialNetwork[P]>
      : GetScalarType<T[P], AggregateSocialNetwork[P]>
  }




  export type SocialNetworkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialNetworkWhereInput
    orderBy?: SocialNetworkOrderByWithAggregationInput | SocialNetworkOrderByWithAggregationInput[]
    by: SocialNetworkScalarFieldEnum[] | SocialNetworkScalarFieldEnum
    having?: SocialNetworkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialNetworkCountAggregateInputType | true
    _avg?: SocialNetworkAvgAggregateInputType
    _sum?: SocialNetworkSumAggregateInputType
    _min?: SocialNetworkMinAggregateInputType
    _max?: SocialNetworkMaxAggregateInputType
  }

  export type SocialNetworkGroupByOutputType = {
    id: number
    name: string
    profileUrlFormat: string | null
    _count: SocialNetworkCountAggregateOutputType | null
    _avg: SocialNetworkAvgAggregateOutputType | null
    _sum: SocialNetworkSumAggregateOutputType | null
    _min: SocialNetworkMinAggregateOutputType | null
    _max: SocialNetworkMaxAggregateOutputType | null
  }

  type GetSocialNetworkGroupByPayload<T extends SocialNetworkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialNetworkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialNetworkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialNetworkGroupByOutputType[P]>
            : GetScalarType<T[P], SocialNetworkGroupByOutputType[P]>
        }
      >
    >


  export type SocialNetworkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    profileUrlFormat?: boolean
    socialAccounts?: boolean | SocialNetwork$socialAccountsArgs<ExtArgs>
    _count?: boolean | SocialNetworkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialNetwork"]>

  export type SocialNetworkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    profileUrlFormat?: boolean
  }, ExtArgs["result"]["socialNetwork"]>

  export type SocialNetworkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    profileUrlFormat?: boolean
  }, ExtArgs["result"]["socialNetwork"]>

  export type SocialNetworkSelectScalar = {
    id?: boolean
    name?: boolean
    profileUrlFormat?: boolean
  }

  export type SocialNetworkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "profileUrlFormat", ExtArgs["result"]["socialNetwork"]>
  export type SocialNetworkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    socialAccounts?: boolean | SocialNetwork$socialAccountsArgs<ExtArgs>
    _count?: boolean | SocialNetworkCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SocialNetworkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SocialNetworkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SocialNetworkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialNetwork"
    objects: {
      socialAccounts: Prisma.$SocialAccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      profileUrlFormat: string | null
    }, ExtArgs["result"]["socialNetwork"]>
    composites: {}
  }

  type SocialNetworkGetPayload<S extends boolean | null | undefined | SocialNetworkDefaultArgs> = $Result.GetResult<Prisma.$SocialNetworkPayload, S>

  type SocialNetworkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialNetworkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialNetworkCountAggregateInputType | true
    }

  export interface SocialNetworkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialNetwork'], meta: { name: 'SocialNetwork' } }
    /**
     * Find zero or one SocialNetwork that matches the filter.
     * @param {SocialNetworkFindUniqueArgs} args - Arguments to find a SocialNetwork
     * @example
     * // Get one SocialNetwork
     * const socialNetwork = await prisma.socialNetwork.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialNetworkFindUniqueArgs>(args: SelectSubset<T, SocialNetworkFindUniqueArgs<ExtArgs>>): Prisma__SocialNetworkClient<$Result.GetResult<Prisma.$SocialNetworkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SocialNetwork that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialNetworkFindUniqueOrThrowArgs} args - Arguments to find a SocialNetwork
     * @example
     * // Get one SocialNetwork
     * const socialNetwork = await prisma.socialNetwork.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialNetworkFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialNetworkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialNetworkClient<$Result.GetResult<Prisma.$SocialNetworkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialNetwork that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialNetworkFindFirstArgs} args - Arguments to find a SocialNetwork
     * @example
     * // Get one SocialNetwork
     * const socialNetwork = await prisma.socialNetwork.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialNetworkFindFirstArgs>(args?: SelectSubset<T, SocialNetworkFindFirstArgs<ExtArgs>>): Prisma__SocialNetworkClient<$Result.GetResult<Prisma.$SocialNetworkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialNetwork that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialNetworkFindFirstOrThrowArgs} args - Arguments to find a SocialNetwork
     * @example
     * // Get one SocialNetwork
     * const socialNetwork = await prisma.socialNetwork.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialNetworkFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialNetworkFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialNetworkClient<$Result.GetResult<Prisma.$SocialNetworkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SocialNetworks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialNetworkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialNetworks
     * const socialNetworks = await prisma.socialNetwork.findMany()
     * 
     * // Get first 10 SocialNetworks
     * const socialNetworks = await prisma.socialNetwork.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialNetworkWithIdOnly = await prisma.socialNetwork.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialNetworkFindManyArgs>(args?: SelectSubset<T, SocialNetworkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialNetworkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SocialNetwork.
     * @param {SocialNetworkCreateArgs} args - Arguments to create a SocialNetwork.
     * @example
     * // Create one SocialNetwork
     * const SocialNetwork = await prisma.socialNetwork.create({
     *   data: {
     *     // ... data to create a SocialNetwork
     *   }
     * })
     * 
     */
    create<T extends SocialNetworkCreateArgs>(args: SelectSubset<T, SocialNetworkCreateArgs<ExtArgs>>): Prisma__SocialNetworkClient<$Result.GetResult<Prisma.$SocialNetworkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SocialNetworks.
     * @param {SocialNetworkCreateManyArgs} args - Arguments to create many SocialNetworks.
     * @example
     * // Create many SocialNetworks
     * const socialNetwork = await prisma.socialNetwork.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialNetworkCreateManyArgs>(args?: SelectSubset<T, SocialNetworkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocialNetworks and returns the data saved in the database.
     * @param {SocialNetworkCreateManyAndReturnArgs} args - Arguments to create many SocialNetworks.
     * @example
     * // Create many SocialNetworks
     * const socialNetwork = await prisma.socialNetwork.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocialNetworks and only return the `id`
     * const socialNetworkWithIdOnly = await prisma.socialNetwork.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialNetworkCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialNetworkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialNetworkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SocialNetwork.
     * @param {SocialNetworkDeleteArgs} args - Arguments to delete one SocialNetwork.
     * @example
     * // Delete one SocialNetwork
     * const SocialNetwork = await prisma.socialNetwork.delete({
     *   where: {
     *     // ... filter to delete one SocialNetwork
     *   }
     * })
     * 
     */
    delete<T extends SocialNetworkDeleteArgs>(args: SelectSubset<T, SocialNetworkDeleteArgs<ExtArgs>>): Prisma__SocialNetworkClient<$Result.GetResult<Prisma.$SocialNetworkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SocialNetwork.
     * @param {SocialNetworkUpdateArgs} args - Arguments to update one SocialNetwork.
     * @example
     * // Update one SocialNetwork
     * const socialNetwork = await prisma.socialNetwork.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialNetworkUpdateArgs>(args: SelectSubset<T, SocialNetworkUpdateArgs<ExtArgs>>): Prisma__SocialNetworkClient<$Result.GetResult<Prisma.$SocialNetworkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SocialNetworks.
     * @param {SocialNetworkDeleteManyArgs} args - Arguments to filter SocialNetworks to delete.
     * @example
     * // Delete a few SocialNetworks
     * const { count } = await prisma.socialNetwork.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialNetworkDeleteManyArgs>(args?: SelectSubset<T, SocialNetworkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialNetworks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialNetworkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialNetworks
     * const socialNetwork = await prisma.socialNetwork.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialNetworkUpdateManyArgs>(args: SelectSubset<T, SocialNetworkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialNetworks and returns the data updated in the database.
     * @param {SocialNetworkUpdateManyAndReturnArgs} args - Arguments to update many SocialNetworks.
     * @example
     * // Update many SocialNetworks
     * const socialNetwork = await prisma.socialNetwork.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SocialNetworks and only return the `id`
     * const socialNetworkWithIdOnly = await prisma.socialNetwork.updateManyAndReturn({
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
    updateManyAndReturn<T extends SocialNetworkUpdateManyAndReturnArgs>(args: SelectSubset<T, SocialNetworkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialNetworkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SocialNetwork.
     * @param {SocialNetworkUpsertArgs} args - Arguments to update or create a SocialNetwork.
     * @example
     * // Update or create a SocialNetwork
     * const socialNetwork = await prisma.socialNetwork.upsert({
     *   create: {
     *     // ... data to create a SocialNetwork
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialNetwork we want to update
     *   }
     * })
     */
    upsert<T extends SocialNetworkUpsertArgs>(args: SelectSubset<T, SocialNetworkUpsertArgs<ExtArgs>>): Prisma__SocialNetworkClient<$Result.GetResult<Prisma.$SocialNetworkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SocialNetworks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialNetworkCountArgs} args - Arguments to filter SocialNetworks to count.
     * @example
     * // Count the number of SocialNetworks
     * const count = await prisma.socialNetwork.count({
     *   where: {
     *     // ... the filter for the SocialNetworks we want to count
     *   }
     * })
    **/
    count<T extends SocialNetworkCountArgs>(
      args?: Subset<T, SocialNetworkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialNetworkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialNetwork.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialNetworkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocialNetworkAggregateArgs>(args: Subset<T, SocialNetworkAggregateArgs>): Prisma.PrismaPromise<GetSocialNetworkAggregateType<T>>

    /**
     * Group by SocialNetwork.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialNetworkGroupByArgs} args - Group by arguments.
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
      T extends SocialNetworkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialNetworkGroupByArgs['orderBy'] }
        : { orderBy?: SocialNetworkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SocialNetworkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialNetworkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialNetwork model
   */
  readonly fields: SocialNetworkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialNetwork.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialNetworkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    socialAccounts<T extends SocialNetwork$socialAccountsArgs<ExtArgs> = {}>(args?: Subset<T, SocialNetwork$socialAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SocialNetwork model
   */
  interface SocialNetworkFieldRefs {
    readonly id: FieldRef<"SocialNetwork", 'Int'>
    readonly name: FieldRef<"SocialNetwork", 'String'>
    readonly profileUrlFormat: FieldRef<"SocialNetwork", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SocialNetwork findUnique
   */
  export type SocialNetworkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialNetwork
     */
    select?: SocialNetworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialNetwork
     */
    omit?: SocialNetworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialNetworkInclude<ExtArgs> | null
    /**
     * Filter, which SocialNetwork to fetch.
     */
    where: SocialNetworkWhereUniqueInput
  }

  /**
   * SocialNetwork findUniqueOrThrow
   */
  export type SocialNetworkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialNetwork
     */
    select?: SocialNetworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialNetwork
     */
    omit?: SocialNetworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialNetworkInclude<ExtArgs> | null
    /**
     * Filter, which SocialNetwork to fetch.
     */
    where: SocialNetworkWhereUniqueInput
  }

  /**
   * SocialNetwork findFirst
   */
  export type SocialNetworkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialNetwork
     */
    select?: SocialNetworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialNetwork
     */
    omit?: SocialNetworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialNetworkInclude<ExtArgs> | null
    /**
     * Filter, which SocialNetwork to fetch.
     */
    where?: SocialNetworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialNetworks to fetch.
     */
    orderBy?: SocialNetworkOrderByWithRelationInput | SocialNetworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialNetworks.
     */
    cursor?: SocialNetworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialNetworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialNetworks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialNetworks.
     */
    distinct?: SocialNetworkScalarFieldEnum | SocialNetworkScalarFieldEnum[]
  }

  /**
   * SocialNetwork findFirstOrThrow
   */
  export type SocialNetworkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialNetwork
     */
    select?: SocialNetworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialNetwork
     */
    omit?: SocialNetworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialNetworkInclude<ExtArgs> | null
    /**
     * Filter, which SocialNetwork to fetch.
     */
    where?: SocialNetworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialNetworks to fetch.
     */
    orderBy?: SocialNetworkOrderByWithRelationInput | SocialNetworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialNetworks.
     */
    cursor?: SocialNetworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialNetworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialNetworks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialNetworks.
     */
    distinct?: SocialNetworkScalarFieldEnum | SocialNetworkScalarFieldEnum[]
  }

  /**
   * SocialNetwork findMany
   */
  export type SocialNetworkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialNetwork
     */
    select?: SocialNetworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialNetwork
     */
    omit?: SocialNetworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialNetworkInclude<ExtArgs> | null
    /**
     * Filter, which SocialNetworks to fetch.
     */
    where?: SocialNetworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialNetworks to fetch.
     */
    orderBy?: SocialNetworkOrderByWithRelationInput | SocialNetworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialNetworks.
     */
    cursor?: SocialNetworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialNetworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialNetworks.
     */
    skip?: number
    distinct?: SocialNetworkScalarFieldEnum | SocialNetworkScalarFieldEnum[]
  }

  /**
   * SocialNetwork create
   */
  export type SocialNetworkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialNetwork
     */
    select?: SocialNetworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialNetwork
     */
    omit?: SocialNetworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialNetworkInclude<ExtArgs> | null
    /**
     * The data needed to create a SocialNetwork.
     */
    data: XOR<SocialNetworkCreateInput, SocialNetworkUncheckedCreateInput>
  }

  /**
   * SocialNetwork createMany
   */
  export type SocialNetworkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialNetworks.
     */
    data: SocialNetworkCreateManyInput | SocialNetworkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialNetwork createManyAndReturn
   */
  export type SocialNetworkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialNetwork
     */
    select?: SocialNetworkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialNetwork
     */
    omit?: SocialNetworkOmit<ExtArgs> | null
    /**
     * The data used to create many SocialNetworks.
     */
    data: SocialNetworkCreateManyInput | SocialNetworkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialNetwork update
   */
  export type SocialNetworkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialNetwork
     */
    select?: SocialNetworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialNetwork
     */
    omit?: SocialNetworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialNetworkInclude<ExtArgs> | null
    /**
     * The data needed to update a SocialNetwork.
     */
    data: XOR<SocialNetworkUpdateInput, SocialNetworkUncheckedUpdateInput>
    /**
     * Choose, which SocialNetwork to update.
     */
    where: SocialNetworkWhereUniqueInput
  }

  /**
   * SocialNetwork updateMany
   */
  export type SocialNetworkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialNetworks.
     */
    data: XOR<SocialNetworkUpdateManyMutationInput, SocialNetworkUncheckedUpdateManyInput>
    /**
     * Filter which SocialNetworks to update
     */
    where?: SocialNetworkWhereInput
    /**
     * Limit how many SocialNetworks to update.
     */
    limit?: number
  }

  /**
   * SocialNetwork updateManyAndReturn
   */
  export type SocialNetworkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialNetwork
     */
    select?: SocialNetworkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialNetwork
     */
    omit?: SocialNetworkOmit<ExtArgs> | null
    /**
     * The data used to update SocialNetworks.
     */
    data: XOR<SocialNetworkUpdateManyMutationInput, SocialNetworkUncheckedUpdateManyInput>
    /**
     * Filter which SocialNetworks to update
     */
    where?: SocialNetworkWhereInput
    /**
     * Limit how many SocialNetworks to update.
     */
    limit?: number
  }

  /**
   * SocialNetwork upsert
   */
  export type SocialNetworkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialNetwork
     */
    select?: SocialNetworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialNetwork
     */
    omit?: SocialNetworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialNetworkInclude<ExtArgs> | null
    /**
     * The filter to search for the SocialNetwork to update in case it exists.
     */
    where: SocialNetworkWhereUniqueInput
    /**
     * In case the SocialNetwork found by the `where` argument doesn't exist, create a new SocialNetwork with this data.
     */
    create: XOR<SocialNetworkCreateInput, SocialNetworkUncheckedCreateInput>
    /**
     * In case the SocialNetwork was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialNetworkUpdateInput, SocialNetworkUncheckedUpdateInput>
  }

  /**
   * SocialNetwork delete
   */
  export type SocialNetworkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialNetwork
     */
    select?: SocialNetworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialNetwork
     */
    omit?: SocialNetworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialNetworkInclude<ExtArgs> | null
    /**
     * Filter which SocialNetwork to delete.
     */
    where: SocialNetworkWhereUniqueInput
  }

  /**
   * SocialNetwork deleteMany
   */
  export type SocialNetworkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialNetworks to delete
     */
    where?: SocialNetworkWhereInput
    /**
     * Limit how many SocialNetworks to delete.
     */
    limit?: number
  }

  /**
   * SocialNetwork.socialAccounts
   */
  export type SocialNetwork$socialAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
    where?: SocialAccountWhereInput
    orderBy?: SocialAccountOrderByWithRelationInput | SocialAccountOrderByWithRelationInput[]
    cursor?: SocialAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SocialAccountScalarFieldEnum | SocialAccountScalarFieldEnum[]
  }

  /**
   * SocialNetwork without action
   */
  export type SocialNetworkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialNetwork
     */
    select?: SocialNetworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialNetwork
     */
    omit?: SocialNetworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialNetworkInclude<ExtArgs> | null
  }


  /**
   * Model SocialAccount
   */

  export type AggregateSocialAccount = {
    _count: SocialAccountCountAggregateOutputType | null
    _avg: SocialAccountAvgAggregateOutputType | null
    _sum: SocialAccountSumAggregateOutputType | null
    _min: SocialAccountMinAggregateOutputType | null
    _max: SocialAccountMaxAggregateOutputType | null
  }

  export type SocialAccountAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    socialNetworkId: number | null
  }

  export type SocialAccountSumAggregateOutputType = {
    id: number | null
    userId: number | null
    socialNetworkId: number | null
  }

  export type SocialAccountMinAggregateOutputType = {
    id: number | null
    userId: number | null
    socialNetworkId: number | null
    accessToken: string | null
    refreshToken: string | null
    socialAccountId: string | null
    connectedAt: Date | null
  }

  export type SocialAccountMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    socialNetworkId: number | null
    accessToken: string | null
    refreshToken: string | null
    socialAccountId: string | null
    connectedAt: Date | null
  }

  export type SocialAccountCountAggregateOutputType = {
    id: number
    userId: number
    socialNetworkId: number
    accessToken: number
    refreshToken: number
    socialAccountId: number
    connectedAt: number
    _all: number
  }


  export type SocialAccountAvgAggregateInputType = {
    id?: true
    userId?: true
    socialNetworkId?: true
  }

  export type SocialAccountSumAggregateInputType = {
    id?: true
    userId?: true
    socialNetworkId?: true
  }

  export type SocialAccountMinAggregateInputType = {
    id?: true
    userId?: true
    socialNetworkId?: true
    accessToken?: true
    refreshToken?: true
    socialAccountId?: true
    connectedAt?: true
  }

  export type SocialAccountMaxAggregateInputType = {
    id?: true
    userId?: true
    socialNetworkId?: true
    accessToken?: true
    refreshToken?: true
    socialAccountId?: true
    connectedAt?: true
  }

  export type SocialAccountCountAggregateInputType = {
    id?: true
    userId?: true
    socialNetworkId?: true
    accessToken?: true
    refreshToken?: true
    socialAccountId?: true
    connectedAt?: true
    _all?: true
  }

  export type SocialAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialAccount to aggregate.
     */
    where?: SocialAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialAccounts to fetch.
     */
    orderBy?: SocialAccountOrderByWithRelationInput | SocialAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialAccounts
    **/
    _count?: true | SocialAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SocialAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SocialAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialAccountMaxAggregateInputType
  }

  export type GetSocialAccountAggregateType<T extends SocialAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialAccount[P]>
      : GetScalarType<T[P], AggregateSocialAccount[P]>
  }




  export type SocialAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialAccountWhereInput
    orderBy?: SocialAccountOrderByWithAggregationInput | SocialAccountOrderByWithAggregationInput[]
    by: SocialAccountScalarFieldEnum[] | SocialAccountScalarFieldEnum
    having?: SocialAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialAccountCountAggregateInputType | true
    _avg?: SocialAccountAvgAggregateInputType
    _sum?: SocialAccountSumAggregateInputType
    _min?: SocialAccountMinAggregateInputType
    _max?: SocialAccountMaxAggregateInputType
  }

  export type SocialAccountGroupByOutputType = {
    id: number
    userId: number
    socialNetworkId: number
    accessToken: string
    refreshToken: string | null
    socialAccountId: string
    connectedAt: Date
    _count: SocialAccountCountAggregateOutputType | null
    _avg: SocialAccountAvgAggregateOutputType | null
    _sum: SocialAccountSumAggregateOutputType | null
    _min: SocialAccountMinAggregateOutputType | null
    _max: SocialAccountMaxAggregateOutputType | null
  }

  type GetSocialAccountGroupByPayload<T extends SocialAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialAccountGroupByOutputType[P]>
            : GetScalarType<T[P], SocialAccountGroupByOutputType[P]>
        }
      >
    >


  export type SocialAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    socialNetworkId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    socialAccountId?: boolean
    connectedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    socialNetwork?: boolean | SocialNetworkDefaultArgs<ExtArgs>
    generalAnalytics?: boolean | SocialAccount$generalAnalyticsArgs<ExtArgs>
    _count?: boolean | SocialAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialAccount"]>

  export type SocialAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    socialNetworkId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    socialAccountId?: boolean
    connectedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    socialNetwork?: boolean | SocialNetworkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialAccount"]>

  export type SocialAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    socialNetworkId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    socialAccountId?: boolean
    connectedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    socialNetwork?: boolean | SocialNetworkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialAccount"]>

  export type SocialAccountSelectScalar = {
    id?: boolean
    userId?: boolean
    socialNetworkId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    socialAccountId?: boolean
    connectedAt?: boolean
  }

  export type SocialAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "socialNetworkId" | "accessToken" | "refreshToken" | "socialAccountId" | "connectedAt", ExtArgs["result"]["socialAccount"]>
  export type SocialAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    socialNetwork?: boolean | SocialNetworkDefaultArgs<ExtArgs>
    generalAnalytics?: boolean | SocialAccount$generalAnalyticsArgs<ExtArgs>
    _count?: boolean | SocialAccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SocialAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    socialNetwork?: boolean | SocialNetworkDefaultArgs<ExtArgs>
  }
  export type SocialAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    socialNetwork?: boolean | SocialNetworkDefaultArgs<ExtArgs>
  }

  export type $SocialAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialAccount"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      socialNetwork: Prisma.$SocialNetworkPayload<ExtArgs>
      generalAnalytics: Prisma.$GeneralAnalyticsDataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      socialNetworkId: number
      accessToken: string
      refreshToken: string | null
      socialAccountId: string
      connectedAt: Date
    }, ExtArgs["result"]["socialAccount"]>
    composites: {}
  }

  type SocialAccountGetPayload<S extends boolean | null | undefined | SocialAccountDefaultArgs> = $Result.GetResult<Prisma.$SocialAccountPayload, S>

  type SocialAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialAccountCountAggregateInputType | true
    }

  export interface SocialAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialAccount'], meta: { name: 'SocialAccount' } }
    /**
     * Find zero or one SocialAccount that matches the filter.
     * @param {SocialAccountFindUniqueArgs} args - Arguments to find a SocialAccount
     * @example
     * // Get one SocialAccount
     * const socialAccount = await prisma.socialAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialAccountFindUniqueArgs>(args: SelectSubset<T, SocialAccountFindUniqueArgs<ExtArgs>>): Prisma__SocialAccountClient<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SocialAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialAccountFindUniqueOrThrowArgs} args - Arguments to find a SocialAccount
     * @example
     * // Get one SocialAccount
     * const socialAccount = await prisma.socialAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialAccountClient<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialAccountFindFirstArgs} args - Arguments to find a SocialAccount
     * @example
     * // Get one SocialAccount
     * const socialAccount = await prisma.socialAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialAccountFindFirstArgs>(args?: SelectSubset<T, SocialAccountFindFirstArgs<ExtArgs>>): Prisma__SocialAccountClient<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialAccountFindFirstOrThrowArgs} args - Arguments to find a SocialAccount
     * @example
     * // Get one SocialAccount
     * const socialAccount = await prisma.socialAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialAccountClient<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SocialAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialAccounts
     * const socialAccounts = await prisma.socialAccount.findMany()
     * 
     * // Get first 10 SocialAccounts
     * const socialAccounts = await prisma.socialAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialAccountWithIdOnly = await prisma.socialAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialAccountFindManyArgs>(args?: SelectSubset<T, SocialAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SocialAccount.
     * @param {SocialAccountCreateArgs} args - Arguments to create a SocialAccount.
     * @example
     * // Create one SocialAccount
     * const SocialAccount = await prisma.socialAccount.create({
     *   data: {
     *     // ... data to create a SocialAccount
     *   }
     * })
     * 
     */
    create<T extends SocialAccountCreateArgs>(args: SelectSubset<T, SocialAccountCreateArgs<ExtArgs>>): Prisma__SocialAccountClient<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SocialAccounts.
     * @param {SocialAccountCreateManyArgs} args - Arguments to create many SocialAccounts.
     * @example
     * // Create many SocialAccounts
     * const socialAccount = await prisma.socialAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialAccountCreateManyArgs>(args?: SelectSubset<T, SocialAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocialAccounts and returns the data saved in the database.
     * @param {SocialAccountCreateManyAndReturnArgs} args - Arguments to create many SocialAccounts.
     * @example
     * // Create many SocialAccounts
     * const socialAccount = await prisma.socialAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocialAccounts and only return the `id`
     * const socialAccountWithIdOnly = await prisma.socialAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SocialAccount.
     * @param {SocialAccountDeleteArgs} args - Arguments to delete one SocialAccount.
     * @example
     * // Delete one SocialAccount
     * const SocialAccount = await prisma.socialAccount.delete({
     *   where: {
     *     // ... filter to delete one SocialAccount
     *   }
     * })
     * 
     */
    delete<T extends SocialAccountDeleteArgs>(args: SelectSubset<T, SocialAccountDeleteArgs<ExtArgs>>): Prisma__SocialAccountClient<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SocialAccount.
     * @param {SocialAccountUpdateArgs} args - Arguments to update one SocialAccount.
     * @example
     * // Update one SocialAccount
     * const socialAccount = await prisma.socialAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialAccountUpdateArgs>(args: SelectSubset<T, SocialAccountUpdateArgs<ExtArgs>>): Prisma__SocialAccountClient<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SocialAccounts.
     * @param {SocialAccountDeleteManyArgs} args - Arguments to filter SocialAccounts to delete.
     * @example
     * // Delete a few SocialAccounts
     * const { count } = await prisma.socialAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialAccountDeleteManyArgs>(args?: SelectSubset<T, SocialAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialAccounts
     * const socialAccount = await prisma.socialAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialAccountUpdateManyArgs>(args: SelectSubset<T, SocialAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialAccounts and returns the data updated in the database.
     * @param {SocialAccountUpdateManyAndReturnArgs} args - Arguments to update many SocialAccounts.
     * @example
     * // Update many SocialAccounts
     * const socialAccount = await prisma.socialAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SocialAccounts and only return the `id`
     * const socialAccountWithIdOnly = await prisma.socialAccount.updateManyAndReturn({
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
    updateManyAndReturn<T extends SocialAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, SocialAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SocialAccount.
     * @param {SocialAccountUpsertArgs} args - Arguments to update or create a SocialAccount.
     * @example
     * // Update or create a SocialAccount
     * const socialAccount = await prisma.socialAccount.upsert({
     *   create: {
     *     // ... data to create a SocialAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialAccount we want to update
     *   }
     * })
     */
    upsert<T extends SocialAccountUpsertArgs>(args: SelectSubset<T, SocialAccountUpsertArgs<ExtArgs>>): Prisma__SocialAccountClient<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SocialAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialAccountCountArgs} args - Arguments to filter SocialAccounts to count.
     * @example
     * // Count the number of SocialAccounts
     * const count = await prisma.socialAccount.count({
     *   where: {
     *     // ... the filter for the SocialAccounts we want to count
     *   }
     * })
    **/
    count<T extends SocialAccountCountArgs>(
      args?: Subset<T, SocialAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocialAccountAggregateArgs>(args: Subset<T, SocialAccountAggregateArgs>): Prisma.PrismaPromise<GetSocialAccountAggregateType<T>>

    /**
     * Group by SocialAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialAccountGroupByArgs} args - Group by arguments.
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
      T extends SocialAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialAccountGroupByArgs['orderBy'] }
        : { orderBy?: SocialAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SocialAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialAccount model
   */
  readonly fields: SocialAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    socialNetwork<T extends SocialNetworkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SocialNetworkDefaultArgs<ExtArgs>>): Prisma__SocialNetworkClient<$Result.GetResult<Prisma.$SocialNetworkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    generalAnalytics<T extends SocialAccount$generalAnalyticsArgs<ExtArgs> = {}>(args?: Subset<T, SocialAccount$generalAnalyticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneralAnalyticsDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SocialAccount model
   */
  interface SocialAccountFieldRefs {
    readonly id: FieldRef<"SocialAccount", 'Int'>
    readonly userId: FieldRef<"SocialAccount", 'Int'>
    readonly socialNetworkId: FieldRef<"SocialAccount", 'Int'>
    readonly accessToken: FieldRef<"SocialAccount", 'String'>
    readonly refreshToken: FieldRef<"SocialAccount", 'String'>
    readonly socialAccountId: FieldRef<"SocialAccount", 'String'>
    readonly connectedAt: FieldRef<"SocialAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SocialAccount findUnique
   */
  export type SocialAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
    /**
     * Filter, which SocialAccount to fetch.
     */
    where: SocialAccountWhereUniqueInput
  }

  /**
   * SocialAccount findUniqueOrThrow
   */
  export type SocialAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
    /**
     * Filter, which SocialAccount to fetch.
     */
    where: SocialAccountWhereUniqueInput
  }

  /**
   * SocialAccount findFirst
   */
  export type SocialAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
    /**
     * Filter, which SocialAccount to fetch.
     */
    where?: SocialAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialAccounts to fetch.
     */
    orderBy?: SocialAccountOrderByWithRelationInput | SocialAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialAccounts.
     */
    cursor?: SocialAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialAccounts.
     */
    distinct?: SocialAccountScalarFieldEnum | SocialAccountScalarFieldEnum[]
  }

  /**
   * SocialAccount findFirstOrThrow
   */
  export type SocialAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
    /**
     * Filter, which SocialAccount to fetch.
     */
    where?: SocialAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialAccounts to fetch.
     */
    orderBy?: SocialAccountOrderByWithRelationInput | SocialAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialAccounts.
     */
    cursor?: SocialAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialAccounts.
     */
    distinct?: SocialAccountScalarFieldEnum | SocialAccountScalarFieldEnum[]
  }

  /**
   * SocialAccount findMany
   */
  export type SocialAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
    /**
     * Filter, which SocialAccounts to fetch.
     */
    where?: SocialAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialAccounts to fetch.
     */
    orderBy?: SocialAccountOrderByWithRelationInput | SocialAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialAccounts.
     */
    cursor?: SocialAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialAccounts.
     */
    skip?: number
    distinct?: SocialAccountScalarFieldEnum | SocialAccountScalarFieldEnum[]
  }

  /**
   * SocialAccount create
   */
  export type SocialAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a SocialAccount.
     */
    data: XOR<SocialAccountCreateInput, SocialAccountUncheckedCreateInput>
  }

  /**
   * SocialAccount createMany
   */
  export type SocialAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialAccounts.
     */
    data: SocialAccountCreateManyInput | SocialAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialAccount createManyAndReturn
   */
  export type SocialAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * The data used to create many SocialAccounts.
     */
    data: SocialAccountCreateManyInput | SocialAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialAccount update
   */
  export type SocialAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a SocialAccount.
     */
    data: XOR<SocialAccountUpdateInput, SocialAccountUncheckedUpdateInput>
    /**
     * Choose, which SocialAccount to update.
     */
    where: SocialAccountWhereUniqueInput
  }

  /**
   * SocialAccount updateMany
   */
  export type SocialAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialAccounts.
     */
    data: XOR<SocialAccountUpdateManyMutationInput, SocialAccountUncheckedUpdateManyInput>
    /**
     * Filter which SocialAccounts to update
     */
    where?: SocialAccountWhereInput
    /**
     * Limit how many SocialAccounts to update.
     */
    limit?: number
  }

  /**
   * SocialAccount updateManyAndReturn
   */
  export type SocialAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * The data used to update SocialAccounts.
     */
    data: XOR<SocialAccountUpdateManyMutationInput, SocialAccountUncheckedUpdateManyInput>
    /**
     * Filter which SocialAccounts to update
     */
    where?: SocialAccountWhereInput
    /**
     * Limit how many SocialAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialAccount upsert
   */
  export type SocialAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the SocialAccount to update in case it exists.
     */
    where: SocialAccountWhereUniqueInput
    /**
     * In case the SocialAccount found by the `where` argument doesn't exist, create a new SocialAccount with this data.
     */
    create: XOR<SocialAccountCreateInput, SocialAccountUncheckedCreateInput>
    /**
     * In case the SocialAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialAccountUpdateInput, SocialAccountUncheckedUpdateInput>
  }

  /**
   * SocialAccount delete
   */
  export type SocialAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
    /**
     * Filter which SocialAccount to delete.
     */
    where: SocialAccountWhereUniqueInput
  }

  /**
   * SocialAccount deleteMany
   */
  export type SocialAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialAccounts to delete
     */
    where?: SocialAccountWhereInput
    /**
     * Limit how many SocialAccounts to delete.
     */
    limit?: number
  }

  /**
   * SocialAccount.generalAnalytics
   */
  export type SocialAccount$generalAnalyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralAnalyticsData
     */
    select?: GeneralAnalyticsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralAnalyticsData
     */
    omit?: GeneralAnalyticsDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralAnalyticsDataInclude<ExtArgs> | null
    where?: GeneralAnalyticsDataWhereInput
    orderBy?: GeneralAnalyticsDataOrderByWithRelationInput | GeneralAnalyticsDataOrderByWithRelationInput[]
    cursor?: GeneralAnalyticsDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GeneralAnalyticsDataScalarFieldEnum | GeneralAnalyticsDataScalarFieldEnum[]
  }

  /**
   * SocialAccount without action
   */
  export type SocialAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
  }


  /**
   * Model GeneralAnalyticsData
   */

  export type AggregateGeneralAnalyticsData = {
    _count: GeneralAnalyticsDataCountAggregateOutputType | null
    _avg: GeneralAnalyticsDataAvgAggregateOutputType | null
    _sum: GeneralAnalyticsDataSumAggregateOutputType | null
    _min: GeneralAnalyticsDataMinAggregateOutputType | null
    _max: GeneralAnalyticsDataMaxAggregateOutputType | null
  }

  export type GeneralAnalyticsDataAvgAggregateOutputType = {
    id: number | null
    socialAccountId: number | null
  }

  export type GeneralAnalyticsDataSumAggregateOutputType = {
    id: number | null
    socialAccountId: number | null
  }

  export type GeneralAnalyticsDataMinAggregateOutputType = {
    id: number | null
    metricCollectedAt: Date | null
    dataType: string | null
    lastUpdatedAt: Date | null
    socialAccountId: number | null
  }

  export type GeneralAnalyticsDataMaxAggregateOutputType = {
    id: number | null
    metricCollectedAt: Date | null
    dataType: string | null
    lastUpdatedAt: Date | null
    socialAccountId: number | null
  }

  export type GeneralAnalyticsDataCountAggregateOutputType = {
    id: number
    metricCollectedAt: number
    dataType: number
    lastUpdatedAt: number
    socialAccountId: number
    _all: number
  }


  export type GeneralAnalyticsDataAvgAggregateInputType = {
    id?: true
    socialAccountId?: true
  }

  export type GeneralAnalyticsDataSumAggregateInputType = {
    id?: true
    socialAccountId?: true
  }

  export type GeneralAnalyticsDataMinAggregateInputType = {
    id?: true
    metricCollectedAt?: true
    dataType?: true
    lastUpdatedAt?: true
    socialAccountId?: true
  }

  export type GeneralAnalyticsDataMaxAggregateInputType = {
    id?: true
    metricCollectedAt?: true
    dataType?: true
    lastUpdatedAt?: true
    socialAccountId?: true
  }

  export type GeneralAnalyticsDataCountAggregateInputType = {
    id?: true
    metricCollectedAt?: true
    dataType?: true
    lastUpdatedAt?: true
    socialAccountId?: true
    _all?: true
  }

  export type GeneralAnalyticsDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneralAnalyticsData to aggregate.
     */
    where?: GeneralAnalyticsDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneralAnalyticsData to fetch.
     */
    orderBy?: GeneralAnalyticsDataOrderByWithRelationInput | GeneralAnalyticsDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneralAnalyticsDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneralAnalyticsData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneralAnalyticsData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GeneralAnalyticsData
    **/
    _count?: true | GeneralAnalyticsDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeneralAnalyticsDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeneralAnalyticsDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneralAnalyticsDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneralAnalyticsDataMaxAggregateInputType
  }

  export type GetGeneralAnalyticsDataAggregateType<T extends GeneralAnalyticsDataAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneralAnalyticsData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneralAnalyticsData[P]>
      : GetScalarType<T[P], AggregateGeneralAnalyticsData[P]>
  }




  export type GeneralAnalyticsDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneralAnalyticsDataWhereInput
    orderBy?: GeneralAnalyticsDataOrderByWithAggregationInput | GeneralAnalyticsDataOrderByWithAggregationInput[]
    by: GeneralAnalyticsDataScalarFieldEnum[] | GeneralAnalyticsDataScalarFieldEnum
    having?: GeneralAnalyticsDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneralAnalyticsDataCountAggregateInputType | true
    _avg?: GeneralAnalyticsDataAvgAggregateInputType
    _sum?: GeneralAnalyticsDataSumAggregateInputType
    _min?: GeneralAnalyticsDataMinAggregateInputType
    _max?: GeneralAnalyticsDataMaxAggregateInputType
  }

  export type GeneralAnalyticsDataGroupByOutputType = {
    id: number
    metricCollectedAt: Date
    dataType: string
    lastUpdatedAt: Date
    socialAccountId: number
    _count: GeneralAnalyticsDataCountAggregateOutputType | null
    _avg: GeneralAnalyticsDataAvgAggregateOutputType | null
    _sum: GeneralAnalyticsDataSumAggregateOutputType | null
    _min: GeneralAnalyticsDataMinAggregateOutputType | null
    _max: GeneralAnalyticsDataMaxAggregateOutputType | null
  }

  type GetGeneralAnalyticsDataGroupByPayload<T extends GeneralAnalyticsDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneralAnalyticsDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneralAnalyticsDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneralAnalyticsDataGroupByOutputType[P]>
            : GetScalarType<T[P], GeneralAnalyticsDataGroupByOutputType[P]>
        }
      >
    >


  export type GeneralAnalyticsDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metricCollectedAt?: boolean
    dataType?: boolean
    lastUpdatedAt?: boolean
    socialAccountId?: boolean
    socialAccount?: boolean | SocialAccountDefaultArgs<ExtArgs>
    facebookAnalyticsPost?: boolean | GeneralAnalyticsData$facebookAnalyticsPostArgs<ExtArgs>
    twitterAnalyticsTweet?: boolean | GeneralAnalyticsData$twitterAnalyticsTweetArgs<ExtArgs>
    instagramAnalyticsPost?: boolean | GeneralAnalyticsData$instagramAnalyticsPostArgs<ExtArgs>
  }, ExtArgs["result"]["generalAnalyticsData"]>

  export type GeneralAnalyticsDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metricCollectedAt?: boolean
    dataType?: boolean
    lastUpdatedAt?: boolean
    socialAccountId?: boolean
    socialAccount?: boolean | SocialAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generalAnalyticsData"]>

  export type GeneralAnalyticsDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metricCollectedAt?: boolean
    dataType?: boolean
    lastUpdatedAt?: boolean
    socialAccountId?: boolean
    socialAccount?: boolean | SocialAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generalAnalyticsData"]>

  export type GeneralAnalyticsDataSelectScalar = {
    id?: boolean
    metricCollectedAt?: boolean
    dataType?: boolean
    lastUpdatedAt?: boolean
    socialAccountId?: boolean
  }

  export type GeneralAnalyticsDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "metricCollectedAt" | "dataType" | "lastUpdatedAt" | "socialAccountId", ExtArgs["result"]["generalAnalyticsData"]>
  export type GeneralAnalyticsDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    socialAccount?: boolean | SocialAccountDefaultArgs<ExtArgs>
    facebookAnalyticsPost?: boolean | GeneralAnalyticsData$facebookAnalyticsPostArgs<ExtArgs>
    twitterAnalyticsTweet?: boolean | GeneralAnalyticsData$twitterAnalyticsTweetArgs<ExtArgs>
    instagramAnalyticsPost?: boolean | GeneralAnalyticsData$instagramAnalyticsPostArgs<ExtArgs>
  }
  export type GeneralAnalyticsDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    socialAccount?: boolean | SocialAccountDefaultArgs<ExtArgs>
  }
  export type GeneralAnalyticsDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    socialAccount?: boolean | SocialAccountDefaultArgs<ExtArgs>
  }

  export type $GeneralAnalyticsDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GeneralAnalyticsData"
    objects: {
      socialAccount: Prisma.$SocialAccountPayload<ExtArgs>
      facebookAnalyticsPost: Prisma.$FacebookAnalyticsPostPayload<ExtArgs> | null
      twitterAnalyticsTweet: Prisma.$TwitterAnalyticsTweetPayload<ExtArgs> | null
      instagramAnalyticsPost: Prisma.$InstagramAnalyticsPostPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      metricCollectedAt: Date
      dataType: string
      lastUpdatedAt: Date
      socialAccountId: number
    }, ExtArgs["result"]["generalAnalyticsData"]>
    composites: {}
  }

  type GeneralAnalyticsDataGetPayload<S extends boolean | null | undefined | GeneralAnalyticsDataDefaultArgs> = $Result.GetResult<Prisma.$GeneralAnalyticsDataPayload, S>

  type GeneralAnalyticsDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GeneralAnalyticsDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeneralAnalyticsDataCountAggregateInputType | true
    }

  export interface GeneralAnalyticsDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GeneralAnalyticsData'], meta: { name: 'GeneralAnalyticsData' } }
    /**
     * Find zero or one GeneralAnalyticsData that matches the filter.
     * @param {GeneralAnalyticsDataFindUniqueArgs} args - Arguments to find a GeneralAnalyticsData
     * @example
     * // Get one GeneralAnalyticsData
     * const generalAnalyticsData = await prisma.generalAnalyticsData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeneralAnalyticsDataFindUniqueArgs>(args: SelectSubset<T, GeneralAnalyticsDataFindUniqueArgs<ExtArgs>>): Prisma__GeneralAnalyticsDataClient<$Result.GetResult<Prisma.$GeneralAnalyticsDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GeneralAnalyticsData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GeneralAnalyticsDataFindUniqueOrThrowArgs} args - Arguments to find a GeneralAnalyticsData
     * @example
     * // Get one GeneralAnalyticsData
     * const generalAnalyticsData = await prisma.generalAnalyticsData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeneralAnalyticsDataFindUniqueOrThrowArgs>(args: SelectSubset<T, GeneralAnalyticsDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeneralAnalyticsDataClient<$Result.GetResult<Prisma.$GeneralAnalyticsDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneralAnalyticsData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralAnalyticsDataFindFirstArgs} args - Arguments to find a GeneralAnalyticsData
     * @example
     * // Get one GeneralAnalyticsData
     * const generalAnalyticsData = await prisma.generalAnalyticsData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeneralAnalyticsDataFindFirstArgs>(args?: SelectSubset<T, GeneralAnalyticsDataFindFirstArgs<ExtArgs>>): Prisma__GeneralAnalyticsDataClient<$Result.GetResult<Prisma.$GeneralAnalyticsDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneralAnalyticsData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralAnalyticsDataFindFirstOrThrowArgs} args - Arguments to find a GeneralAnalyticsData
     * @example
     * // Get one GeneralAnalyticsData
     * const generalAnalyticsData = await prisma.generalAnalyticsData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeneralAnalyticsDataFindFirstOrThrowArgs>(args?: SelectSubset<T, GeneralAnalyticsDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeneralAnalyticsDataClient<$Result.GetResult<Prisma.$GeneralAnalyticsDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GeneralAnalyticsData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralAnalyticsDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GeneralAnalyticsData
     * const generalAnalyticsData = await prisma.generalAnalyticsData.findMany()
     * 
     * // Get first 10 GeneralAnalyticsData
     * const generalAnalyticsData = await prisma.generalAnalyticsData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generalAnalyticsDataWithIdOnly = await prisma.generalAnalyticsData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GeneralAnalyticsDataFindManyArgs>(args?: SelectSubset<T, GeneralAnalyticsDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneralAnalyticsDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GeneralAnalyticsData.
     * @param {GeneralAnalyticsDataCreateArgs} args - Arguments to create a GeneralAnalyticsData.
     * @example
     * // Create one GeneralAnalyticsData
     * const GeneralAnalyticsData = await prisma.generalAnalyticsData.create({
     *   data: {
     *     // ... data to create a GeneralAnalyticsData
     *   }
     * })
     * 
     */
    create<T extends GeneralAnalyticsDataCreateArgs>(args: SelectSubset<T, GeneralAnalyticsDataCreateArgs<ExtArgs>>): Prisma__GeneralAnalyticsDataClient<$Result.GetResult<Prisma.$GeneralAnalyticsDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GeneralAnalyticsData.
     * @param {GeneralAnalyticsDataCreateManyArgs} args - Arguments to create many GeneralAnalyticsData.
     * @example
     * // Create many GeneralAnalyticsData
     * const generalAnalyticsData = await prisma.generalAnalyticsData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeneralAnalyticsDataCreateManyArgs>(args?: SelectSubset<T, GeneralAnalyticsDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GeneralAnalyticsData and returns the data saved in the database.
     * @param {GeneralAnalyticsDataCreateManyAndReturnArgs} args - Arguments to create many GeneralAnalyticsData.
     * @example
     * // Create many GeneralAnalyticsData
     * const generalAnalyticsData = await prisma.generalAnalyticsData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GeneralAnalyticsData and only return the `id`
     * const generalAnalyticsDataWithIdOnly = await prisma.generalAnalyticsData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GeneralAnalyticsDataCreateManyAndReturnArgs>(args?: SelectSubset<T, GeneralAnalyticsDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneralAnalyticsDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GeneralAnalyticsData.
     * @param {GeneralAnalyticsDataDeleteArgs} args - Arguments to delete one GeneralAnalyticsData.
     * @example
     * // Delete one GeneralAnalyticsData
     * const GeneralAnalyticsData = await prisma.generalAnalyticsData.delete({
     *   where: {
     *     // ... filter to delete one GeneralAnalyticsData
     *   }
     * })
     * 
     */
    delete<T extends GeneralAnalyticsDataDeleteArgs>(args: SelectSubset<T, GeneralAnalyticsDataDeleteArgs<ExtArgs>>): Prisma__GeneralAnalyticsDataClient<$Result.GetResult<Prisma.$GeneralAnalyticsDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GeneralAnalyticsData.
     * @param {GeneralAnalyticsDataUpdateArgs} args - Arguments to update one GeneralAnalyticsData.
     * @example
     * // Update one GeneralAnalyticsData
     * const generalAnalyticsData = await prisma.generalAnalyticsData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeneralAnalyticsDataUpdateArgs>(args: SelectSubset<T, GeneralAnalyticsDataUpdateArgs<ExtArgs>>): Prisma__GeneralAnalyticsDataClient<$Result.GetResult<Prisma.$GeneralAnalyticsDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GeneralAnalyticsData.
     * @param {GeneralAnalyticsDataDeleteManyArgs} args - Arguments to filter GeneralAnalyticsData to delete.
     * @example
     * // Delete a few GeneralAnalyticsData
     * const { count } = await prisma.generalAnalyticsData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeneralAnalyticsDataDeleteManyArgs>(args?: SelectSubset<T, GeneralAnalyticsDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneralAnalyticsData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralAnalyticsDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GeneralAnalyticsData
     * const generalAnalyticsData = await prisma.generalAnalyticsData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeneralAnalyticsDataUpdateManyArgs>(args: SelectSubset<T, GeneralAnalyticsDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneralAnalyticsData and returns the data updated in the database.
     * @param {GeneralAnalyticsDataUpdateManyAndReturnArgs} args - Arguments to update many GeneralAnalyticsData.
     * @example
     * // Update many GeneralAnalyticsData
     * const generalAnalyticsData = await prisma.generalAnalyticsData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GeneralAnalyticsData and only return the `id`
     * const generalAnalyticsDataWithIdOnly = await prisma.generalAnalyticsData.updateManyAndReturn({
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
    updateManyAndReturn<T extends GeneralAnalyticsDataUpdateManyAndReturnArgs>(args: SelectSubset<T, GeneralAnalyticsDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneralAnalyticsDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GeneralAnalyticsData.
     * @param {GeneralAnalyticsDataUpsertArgs} args - Arguments to update or create a GeneralAnalyticsData.
     * @example
     * // Update or create a GeneralAnalyticsData
     * const generalAnalyticsData = await prisma.generalAnalyticsData.upsert({
     *   create: {
     *     // ... data to create a GeneralAnalyticsData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GeneralAnalyticsData we want to update
     *   }
     * })
     */
    upsert<T extends GeneralAnalyticsDataUpsertArgs>(args: SelectSubset<T, GeneralAnalyticsDataUpsertArgs<ExtArgs>>): Prisma__GeneralAnalyticsDataClient<$Result.GetResult<Prisma.$GeneralAnalyticsDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GeneralAnalyticsData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralAnalyticsDataCountArgs} args - Arguments to filter GeneralAnalyticsData to count.
     * @example
     * // Count the number of GeneralAnalyticsData
     * const count = await prisma.generalAnalyticsData.count({
     *   where: {
     *     // ... the filter for the GeneralAnalyticsData we want to count
     *   }
     * })
    **/
    count<T extends GeneralAnalyticsDataCountArgs>(
      args?: Subset<T, GeneralAnalyticsDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneralAnalyticsDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GeneralAnalyticsData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralAnalyticsDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GeneralAnalyticsDataAggregateArgs>(args: Subset<T, GeneralAnalyticsDataAggregateArgs>): Prisma.PrismaPromise<GetGeneralAnalyticsDataAggregateType<T>>

    /**
     * Group by GeneralAnalyticsData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralAnalyticsDataGroupByArgs} args - Group by arguments.
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
      T extends GeneralAnalyticsDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneralAnalyticsDataGroupByArgs['orderBy'] }
        : { orderBy?: GeneralAnalyticsDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GeneralAnalyticsDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneralAnalyticsDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GeneralAnalyticsData model
   */
  readonly fields: GeneralAnalyticsDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GeneralAnalyticsData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeneralAnalyticsDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    socialAccount<T extends SocialAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SocialAccountDefaultArgs<ExtArgs>>): Prisma__SocialAccountClient<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    facebookAnalyticsPost<T extends GeneralAnalyticsData$facebookAnalyticsPostArgs<ExtArgs> = {}>(args?: Subset<T, GeneralAnalyticsData$facebookAnalyticsPostArgs<ExtArgs>>): Prisma__FacebookAnalyticsPostClient<$Result.GetResult<Prisma.$FacebookAnalyticsPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    twitterAnalyticsTweet<T extends GeneralAnalyticsData$twitterAnalyticsTweetArgs<ExtArgs> = {}>(args?: Subset<T, GeneralAnalyticsData$twitterAnalyticsTweetArgs<ExtArgs>>): Prisma__TwitterAnalyticsTweetClient<$Result.GetResult<Prisma.$TwitterAnalyticsTweetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    instagramAnalyticsPost<T extends GeneralAnalyticsData$instagramAnalyticsPostArgs<ExtArgs> = {}>(args?: Subset<T, GeneralAnalyticsData$instagramAnalyticsPostArgs<ExtArgs>>): Prisma__InstagramAnalyticsPostClient<$Result.GetResult<Prisma.$InstagramAnalyticsPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GeneralAnalyticsData model
   */
  interface GeneralAnalyticsDataFieldRefs {
    readonly id: FieldRef<"GeneralAnalyticsData", 'Int'>
    readonly metricCollectedAt: FieldRef<"GeneralAnalyticsData", 'DateTime'>
    readonly dataType: FieldRef<"GeneralAnalyticsData", 'String'>
    readonly lastUpdatedAt: FieldRef<"GeneralAnalyticsData", 'DateTime'>
    readonly socialAccountId: FieldRef<"GeneralAnalyticsData", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GeneralAnalyticsData findUnique
   */
  export type GeneralAnalyticsDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralAnalyticsData
     */
    select?: GeneralAnalyticsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralAnalyticsData
     */
    omit?: GeneralAnalyticsDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralAnalyticsDataInclude<ExtArgs> | null
    /**
     * Filter, which GeneralAnalyticsData to fetch.
     */
    where: GeneralAnalyticsDataWhereUniqueInput
  }

  /**
   * GeneralAnalyticsData findUniqueOrThrow
   */
  export type GeneralAnalyticsDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralAnalyticsData
     */
    select?: GeneralAnalyticsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralAnalyticsData
     */
    omit?: GeneralAnalyticsDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralAnalyticsDataInclude<ExtArgs> | null
    /**
     * Filter, which GeneralAnalyticsData to fetch.
     */
    where: GeneralAnalyticsDataWhereUniqueInput
  }

  /**
   * GeneralAnalyticsData findFirst
   */
  export type GeneralAnalyticsDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralAnalyticsData
     */
    select?: GeneralAnalyticsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralAnalyticsData
     */
    omit?: GeneralAnalyticsDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralAnalyticsDataInclude<ExtArgs> | null
    /**
     * Filter, which GeneralAnalyticsData to fetch.
     */
    where?: GeneralAnalyticsDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneralAnalyticsData to fetch.
     */
    orderBy?: GeneralAnalyticsDataOrderByWithRelationInput | GeneralAnalyticsDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneralAnalyticsData.
     */
    cursor?: GeneralAnalyticsDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneralAnalyticsData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneralAnalyticsData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneralAnalyticsData.
     */
    distinct?: GeneralAnalyticsDataScalarFieldEnum | GeneralAnalyticsDataScalarFieldEnum[]
  }

  /**
   * GeneralAnalyticsData findFirstOrThrow
   */
  export type GeneralAnalyticsDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralAnalyticsData
     */
    select?: GeneralAnalyticsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralAnalyticsData
     */
    omit?: GeneralAnalyticsDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralAnalyticsDataInclude<ExtArgs> | null
    /**
     * Filter, which GeneralAnalyticsData to fetch.
     */
    where?: GeneralAnalyticsDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneralAnalyticsData to fetch.
     */
    orderBy?: GeneralAnalyticsDataOrderByWithRelationInput | GeneralAnalyticsDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneralAnalyticsData.
     */
    cursor?: GeneralAnalyticsDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneralAnalyticsData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneralAnalyticsData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneralAnalyticsData.
     */
    distinct?: GeneralAnalyticsDataScalarFieldEnum | GeneralAnalyticsDataScalarFieldEnum[]
  }

  /**
   * GeneralAnalyticsData findMany
   */
  export type GeneralAnalyticsDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralAnalyticsData
     */
    select?: GeneralAnalyticsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralAnalyticsData
     */
    omit?: GeneralAnalyticsDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralAnalyticsDataInclude<ExtArgs> | null
    /**
     * Filter, which GeneralAnalyticsData to fetch.
     */
    where?: GeneralAnalyticsDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneralAnalyticsData to fetch.
     */
    orderBy?: GeneralAnalyticsDataOrderByWithRelationInput | GeneralAnalyticsDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GeneralAnalyticsData.
     */
    cursor?: GeneralAnalyticsDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneralAnalyticsData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneralAnalyticsData.
     */
    skip?: number
    distinct?: GeneralAnalyticsDataScalarFieldEnum | GeneralAnalyticsDataScalarFieldEnum[]
  }

  /**
   * GeneralAnalyticsData create
   */
  export type GeneralAnalyticsDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralAnalyticsData
     */
    select?: GeneralAnalyticsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralAnalyticsData
     */
    omit?: GeneralAnalyticsDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralAnalyticsDataInclude<ExtArgs> | null
    /**
     * The data needed to create a GeneralAnalyticsData.
     */
    data: XOR<GeneralAnalyticsDataCreateInput, GeneralAnalyticsDataUncheckedCreateInput>
  }

  /**
   * GeneralAnalyticsData createMany
   */
  export type GeneralAnalyticsDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GeneralAnalyticsData.
     */
    data: GeneralAnalyticsDataCreateManyInput | GeneralAnalyticsDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GeneralAnalyticsData createManyAndReturn
   */
  export type GeneralAnalyticsDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralAnalyticsData
     */
    select?: GeneralAnalyticsDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralAnalyticsData
     */
    omit?: GeneralAnalyticsDataOmit<ExtArgs> | null
    /**
     * The data used to create many GeneralAnalyticsData.
     */
    data: GeneralAnalyticsDataCreateManyInput | GeneralAnalyticsDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralAnalyticsDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GeneralAnalyticsData update
   */
  export type GeneralAnalyticsDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralAnalyticsData
     */
    select?: GeneralAnalyticsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralAnalyticsData
     */
    omit?: GeneralAnalyticsDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralAnalyticsDataInclude<ExtArgs> | null
    /**
     * The data needed to update a GeneralAnalyticsData.
     */
    data: XOR<GeneralAnalyticsDataUpdateInput, GeneralAnalyticsDataUncheckedUpdateInput>
    /**
     * Choose, which GeneralAnalyticsData to update.
     */
    where: GeneralAnalyticsDataWhereUniqueInput
  }

  /**
   * GeneralAnalyticsData updateMany
   */
  export type GeneralAnalyticsDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GeneralAnalyticsData.
     */
    data: XOR<GeneralAnalyticsDataUpdateManyMutationInput, GeneralAnalyticsDataUncheckedUpdateManyInput>
    /**
     * Filter which GeneralAnalyticsData to update
     */
    where?: GeneralAnalyticsDataWhereInput
    /**
     * Limit how many GeneralAnalyticsData to update.
     */
    limit?: number
  }

  /**
   * GeneralAnalyticsData updateManyAndReturn
   */
  export type GeneralAnalyticsDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralAnalyticsData
     */
    select?: GeneralAnalyticsDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralAnalyticsData
     */
    omit?: GeneralAnalyticsDataOmit<ExtArgs> | null
    /**
     * The data used to update GeneralAnalyticsData.
     */
    data: XOR<GeneralAnalyticsDataUpdateManyMutationInput, GeneralAnalyticsDataUncheckedUpdateManyInput>
    /**
     * Filter which GeneralAnalyticsData to update
     */
    where?: GeneralAnalyticsDataWhereInput
    /**
     * Limit how many GeneralAnalyticsData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralAnalyticsDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GeneralAnalyticsData upsert
   */
  export type GeneralAnalyticsDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralAnalyticsData
     */
    select?: GeneralAnalyticsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralAnalyticsData
     */
    omit?: GeneralAnalyticsDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralAnalyticsDataInclude<ExtArgs> | null
    /**
     * The filter to search for the GeneralAnalyticsData to update in case it exists.
     */
    where: GeneralAnalyticsDataWhereUniqueInput
    /**
     * In case the GeneralAnalyticsData found by the `where` argument doesn't exist, create a new GeneralAnalyticsData with this data.
     */
    create: XOR<GeneralAnalyticsDataCreateInput, GeneralAnalyticsDataUncheckedCreateInput>
    /**
     * In case the GeneralAnalyticsData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneralAnalyticsDataUpdateInput, GeneralAnalyticsDataUncheckedUpdateInput>
  }

  /**
   * GeneralAnalyticsData delete
   */
  export type GeneralAnalyticsDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralAnalyticsData
     */
    select?: GeneralAnalyticsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralAnalyticsData
     */
    omit?: GeneralAnalyticsDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralAnalyticsDataInclude<ExtArgs> | null
    /**
     * Filter which GeneralAnalyticsData to delete.
     */
    where: GeneralAnalyticsDataWhereUniqueInput
  }

  /**
   * GeneralAnalyticsData deleteMany
   */
  export type GeneralAnalyticsDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneralAnalyticsData to delete
     */
    where?: GeneralAnalyticsDataWhereInput
    /**
     * Limit how many GeneralAnalyticsData to delete.
     */
    limit?: number
  }

  /**
   * GeneralAnalyticsData.facebookAnalyticsPost
   */
  export type GeneralAnalyticsData$facebookAnalyticsPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookAnalyticsPost
     */
    select?: FacebookAnalyticsPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookAnalyticsPost
     */
    omit?: FacebookAnalyticsPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookAnalyticsPostInclude<ExtArgs> | null
    where?: FacebookAnalyticsPostWhereInput
  }

  /**
   * GeneralAnalyticsData.twitterAnalyticsTweet
   */
  export type GeneralAnalyticsData$twitterAnalyticsTweetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwitterAnalyticsTweet
     */
    select?: TwitterAnalyticsTweetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwitterAnalyticsTweet
     */
    omit?: TwitterAnalyticsTweetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwitterAnalyticsTweetInclude<ExtArgs> | null
    where?: TwitterAnalyticsTweetWhereInput
  }

  /**
   * GeneralAnalyticsData.instagramAnalyticsPost
   */
  export type GeneralAnalyticsData$instagramAnalyticsPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstagramAnalyticsPost
     */
    select?: InstagramAnalyticsPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstagramAnalyticsPost
     */
    omit?: InstagramAnalyticsPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstagramAnalyticsPostInclude<ExtArgs> | null
    where?: InstagramAnalyticsPostWhereInput
  }

  /**
   * GeneralAnalyticsData without action
   */
  export type GeneralAnalyticsDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralAnalyticsData
     */
    select?: GeneralAnalyticsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralAnalyticsData
     */
    omit?: GeneralAnalyticsDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralAnalyticsDataInclude<ExtArgs> | null
  }


  /**
   * Model FacebookAnalyticsPost
   */

  export type AggregateFacebookAnalyticsPost = {
    _count: FacebookAnalyticsPostCountAggregateOutputType | null
    _avg: FacebookAnalyticsPostAvgAggregateOutputType | null
    _sum: FacebookAnalyticsPostSumAggregateOutputType | null
    _min: FacebookAnalyticsPostMinAggregateOutputType | null
    _max: FacebookAnalyticsPostMaxAggregateOutputType | null
  }

  export type FacebookAnalyticsPostAvgAggregateOutputType = {
    id: number | null
    likeCount: number | null
    commentCount: number | null
    shareCount: number | null
    coverageOrganic: number | null
    coveragePaid: number | null
    postClickCount: number | null
    generalAnalyticsId: number | null
  }

  export type FacebookAnalyticsPostSumAggregateOutputType = {
    id: number | null
    likeCount: number | null
    commentCount: number | null
    shareCount: number | null
    coverageOrganic: number | null
    coveragePaid: number | null
    postClickCount: number | null
    generalAnalyticsId: number | null
  }

  export type FacebookAnalyticsPostMinAggregateOutputType = {
    id: number | null
    postId: string | null
    postContent: string | null
    postType: string | null
    likeCount: number | null
    commentCount: number | null
    shareCount: number | null
    coverageOrganic: number | null
    coveragePaid: number | null
    postClickCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    generalAnalyticsId: number | null
  }

  export type FacebookAnalyticsPostMaxAggregateOutputType = {
    id: number | null
    postId: string | null
    postContent: string | null
    postType: string | null
    likeCount: number | null
    commentCount: number | null
    shareCount: number | null
    coverageOrganic: number | null
    coveragePaid: number | null
    postClickCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    generalAnalyticsId: number | null
  }

  export type FacebookAnalyticsPostCountAggregateOutputType = {
    id: number
    postId: number
    postContent: number
    postType: number
    likeCount: number
    commentCount: number
    shareCount: number
    coverageOrganic: number
    coveragePaid: number
    postClickCount: number
    createdAt: number
    updatedAt: number
    generalAnalyticsId: number
    _all: number
  }


  export type FacebookAnalyticsPostAvgAggregateInputType = {
    id?: true
    likeCount?: true
    commentCount?: true
    shareCount?: true
    coverageOrganic?: true
    coveragePaid?: true
    postClickCount?: true
    generalAnalyticsId?: true
  }

  export type FacebookAnalyticsPostSumAggregateInputType = {
    id?: true
    likeCount?: true
    commentCount?: true
    shareCount?: true
    coverageOrganic?: true
    coveragePaid?: true
    postClickCount?: true
    generalAnalyticsId?: true
  }

  export type FacebookAnalyticsPostMinAggregateInputType = {
    id?: true
    postId?: true
    postContent?: true
    postType?: true
    likeCount?: true
    commentCount?: true
    shareCount?: true
    coverageOrganic?: true
    coveragePaid?: true
    postClickCount?: true
    createdAt?: true
    updatedAt?: true
    generalAnalyticsId?: true
  }

  export type FacebookAnalyticsPostMaxAggregateInputType = {
    id?: true
    postId?: true
    postContent?: true
    postType?: true
    likeCount?: true
    commentCount?: true
    shareCount?: true
    coverageOrganic?: true
    coveragePaid?: true
    postClickCount?: true
    createdAt?: true
    updatedAt?: true
    generalAnalyticsId?: true
  }

  export type FacebookAnalyticsPostCountAggregateInputType = {
    id?: true
    postId?: true
    postContent?: true
    postType?: true
    likeCount?: true
    commentCount?: true
    shareCount?: true
    coverageOrganic?: true
    coveragePaid?: true
    postClickCount?: true
    createdAt?: true
    updatedAt?: true
    generalAnalyticsId?: true
    _all?: true
  }

  export type FacebookAnalyticsPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacebookAnalyticsPost to aggregate.
     */
    where?: FacebookAnalyticsPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookAnalyticsPosts to fetch.
     */
    orderBy?: FacebookAnalyticsPostOrderByWithRelationInput | FacebookAnalyticsPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacebookAnalyticsPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookAnalyticsPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookAnalyticsPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacebookAnalyticsPosts
    **/
    _count?: true | FacebookAnalyticsPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacebookAnalyticsPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacebookAnalyticsPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacebookAnalyticsPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacebookAnalyticsPostMaxAggregateInputType
  }

  export type GetFacebookAnalyticsPostAggregateType<T extends FacebookAnalyticsPostAggregateArgs> = {
        [P in keyof T & keyof AggregateFacebookAnalyticsPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacebookAnalyticsPost[P]>
      : GetScalarType<T[P], AggregateFacebookAnalyticsPost[P]>
  }




  export type FacebookAnalyticsPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacebookAnalyticsPostWhereInput
    orderBy?: FacebookAnalyticsPostOrderByWithAggregationInput | FacebookAnalyticsPostOrderByWithAggregationInput[]
    by: FacebookAnalyticsPostScalarFieldEnum[] | FacebookAnalyticsPostScalarFieldEnum
    having?: FacebookAnalyticsPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacebookAnalyticsPostCountAggregateInputType | true
    _avg?: FacebookAnalyticsPostAvgAggregateInputType
    _sum?: FacebookAnalyticsPostSumAggregateInputType
    _min?: FacebookAnalyticsPostMinAggregateInputType
    _max?: FacebookAnalyticsPostMaxAggregateInputType
  }

  export type FacebookAnalyticsPostGroupByOutputType = {
    id: number
    postId: string
    postContent: string | null
    postType: string | null
    likeCount: number
    commentCount: number
    shareCount: number
    coverageOrganic: number | null
    coveragePaid: number | null
    postClickCount: number | null
    createdAt: Date
    updatedAt: Date
    generalAnalyticsId: number
    _count: FacebookAnalyticsPostCountAggregateOutputType | null
    _avg: FacebookAnalyticsPostAvgAggregateOutputType | null
    _sum: FacebookAnalyticsPostSumAggregateOutputType | null
    _min: FacebookAnalyticsPostMinAggregateOutputType | null
    _max: FacebookAnalyticsPostMaxAggregateOutputType | null
  }

  type GetFacebookAnalyticsPostGroupByPayload<T extends FacebookAnalyticsPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacebookAnalyticsPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacebookAnalyticsPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacebookAnalyticsPostGroupByOutputType[P]>
            : GetScalarType<T[P], FacebookAnalyticsPostGroupByOutputType[P]>
        }
      >
    >


  export type FacebookAnalyticsPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    postContent?: boolean
    postType?: boolean
    likeCount?: boolean
    commentCount?: boolean
    shareCount?: boolean
    coverageOrganic?: boolean
    coveragePaid?: boolean
    postClickCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    generalAnalyticsId?: boolean
    generalAnalytics?: boolean | GeneralAnalyticsDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facebookAnalyticsPost"]>

  export type FacebookAnalyticsPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    postContent?: boolean
    postType?: boolean
    likeCount?: boolean
    commentCount?: boolean
    shareCount?: boolean
    coverageOrganic?: boolean
    coveragePaid?: boolean
    postClickCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    generalAnalyticsId?: boolean
    generalAnalytics?: boolean | GeneralAnalyticsDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facebookAnalyticsPost"]>

  export type FacebookAnalyticsPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    postContent?: boolean
    postType?: boolean
    likeCount?: boolean
    commentCount?: boolean
    shareCount?: boolean
    coverageOrganic?: boolean
    coveragePaid?: boolean
    postClickCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    generalAnalyticsId?: boolean
    generalAnalytics?: boolean | GeneralAnalyticsDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facebookAnalyticsPost"]>

  export type FacebookAnalyticsPostSelectScalar = {
    id?: boolean
    postId?: boolean
    postContent?: boolean
    postType?: boolean
    likeCount?: boolean
    commentCount?: boolean
    shareCount?: boolean
    coverageOrganic?: boolean
    coveragePaid?: boolean
    postClickCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    generalAnalyticsId?: boolean
  }

  export type FacebookAnalyticsPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "postContent" | "postType" | "likeCount" | "commentCount" | "shareCount" | "coverageOrganic" | "coveragePaid" | "postClickCount" | "createdAt" | "updatedAt" | "generalAnalyticsId", ExtArgs["result"]["facebookAnalyticsPost"]>
  export type FacebookAnalyticsPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generalAnalytics?: boolean | GeneralAnalyticsDataDefaultArgs<ExtArgs>
  }
  export type FacebookAnalyticsPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generalAnalytics?: boolean | GeneralAnalyticsDataDefaultArgs<ExtArgs>
  }
  export type FacebookAnalyticsPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generalAnalytics?: boolean | GeneralAnalyticsDataDefaultArgs<ExtArgs>
  }

  export type $FacebookAnalyticsPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacebookAnalyticsPost"
    objects: {
      generalAnalytics: Prisma.$GeneralAnalyticsDataPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      postId: string
      postContent: string | null
      postType: string | null
      likeCount: number
      commentCount: number
      shareCount: number
      coverageOrganic: number | null
      coveragePaid: number | null
      postClickCount: number | null
      createdAt: Date
      updatedAt: Date
      generalAnalyticsId: number
    }, ExtArgs["result"]["facebookAnalyticsPost"]>
    composites: {}
  }

  type FacebookAnalyticsPostGetPayload<S extends boolean | null | undefined | FacebookAnalyticsPostDefaultArgs> = $Result.GetResult<Prisma.$FacebookAnalyticsPostPayload, S>

  type FacebookAnalyticsPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacebookAnalyticsPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacebookAnalyticsPostCountAggregateInputType | true
    }

  export interface FacebookAnalyticsPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacebookAnalyticsPost'], meta: { name: 'FacebookAnalyticsPost' } }
    /**
     * Find zero or one FacebookAnalyticsPost that matches the filter.
     * @param {FacebookAnalyticsPostFindUniqueArgs} args - Arguments to find a FacebookAnalyticsPost
     * @example
     * // Get one FacebookAnalyticsPost
     * const facebookAnalyticsPost = await prisma.facebookAnalyticsPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacebookAnalyticsPostFindUniqueArgs>(args: SelectSubset<T, FacebookAnalyticsPostFindUniqueArgs<ExtArgs>>): Prisma__FacebookAnalyticsPostClient<$Result.GetResult<Prisma.$FacebookAnalyticsPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FacebookAnalyticsPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacebookAnalyticsPostFindUniqueOrThrowArgs} args - Arguments to find a FacebookAnalyticsPost
     * @example
     * // Get one FacebookAnalyticsPost
     * const facebookAnalyticsPost = await prisma.facebookAnalyticsPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacebookAnalyticsPostFindUniqueOrThrowArgs>(args: SelectSubset<T, FacebookAnalyticsPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacebookAnalyticsPostClient<$Result.GetResult<Prisma.$FacebookAnalyticsPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacebookAnalyticsPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookAnalyticsPostFindFirstArgs} args - Arguments to find a FacebookAnalyticsPost
     * @example
     * // Get one FacebookAnalyticsPost
     * const facebookAnalyticsPost = await prisma.facebookAnalyticsPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacebookAnalyticsPostFindFirstArgs>(args?: SelectSubset<T, FacebookAnalyticsPostFindFirstArgs<ExtArgs>>): Prisma__FacebookAnalyticsPostClient<$Result.GetResult<Prisma.$FacebookAnalyticsPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacebookAnalyticsPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookAnalyticsPostFindFirstOrThrowArgs} args - Arguments to find a FacebookAnalyticsPost
     * @example
     * // Get one FacebookAnalyticsPost
     * const facebookAnalyticsPost = await prisma.facebookAnalyticsPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacebookAnalyticsPostFindFirstOrThrowArgs>(args?: SelectSubset<T, FacebookAnalyticsPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacebookAnalyticsPostClient<$Result.GetResult<Prisma.$FacebookAnalyticsPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FacebookAnalyticsPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookAnalyticsPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacebookAnalyticsPosts
     * const facebookAnalyticsPosts = await prisma.facebookAnalyticsPost.findMany()
     * 
     * // Get first 10 FacebookAnalyticsPosts
     * const facebookAnalyticsPosts = await prisma.facebookAnalyticsPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facebookAnalyticsPostWithIdOnly = await prisma.facebookAnalyticsPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacebookAnalyticsPostFindManyArgs>(args?: SelectSubset<T, FacebookAnalyticsPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookAnalyticsPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FacebookAnalyticsPost.
     * @param {FacebookAnalyticsPostCreateArgs} args - Arguments to create a FacebookAnalyticsPost.
     * @example
     * // Create one FacebookAnalyticsPost
     * const FacebookAnalyticsPost = await prisma.facebookAnalyticsPost.create({
     *   data: {
     *     // ... data to create a FacebookAnalyticsPost
     *   }
     * })
     * 
     */
    create<T extends FacebookAnalyticsPostCreateArgs>(args: SelectSubset<T, FacebookAnalyticsPostCreateArgs<ExtArgs>>): Prisma__FacebookAnalyticsPostClient<$Result.GetResult<Prisma.$FacebookAnalyticsPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FacebookAnalyticsPosts.
     * @param {FacebookAnalyticsPostCreateManyArgs} args - Arguments to create many FacebookAnalyticsPosts.
     * @example
     * // Create many FacebookAnalyticsPosts
     * const facebookAnalyticsPost = await prisma.facebookAnalyticsPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacebookAnalyticsPostCreateManyArgs>(args?: SelectSubset<T, FacebookAnalyticsPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FacebookAnalyticsPosts and returns the data saved in the database.
     * @param {FacebookAnalyticsPostCreateManyAndReturnArgs} args - Arguments to create many FacebookAnalyticsPosts.
     * @example
     * // Create many FacebookAnalyticsPosts
     * const facebookAnalyticsPost = await prisma.facebookAnalyticsPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FacebookAnalyticsPosts and only return the `id`
     * const facebookAnalyticsPostWithIdOnly = await prisma.facebookAnalyticsPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacebookAnalyticsPostCreateManyAndReturnArgs>(args?: SelectSubset<T, FacebookAnalyticsPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookAnalyticsPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FacebookAnalyticsPost.
     * @param {FacebookAnalyticsPostDeleteArgs} args - Arguments to delete one FacebookAnalyticsPost.
     * @example
     * // Delete one FacebookAnalyticsPost
     * const FacebookAnalyticsPost = await prisma.facebookAnalyticsPost.delete({
     *   where: {
     *     // ... filter to delete one FacebookAnalyticsPost
     *   }
     * })
     * 
     */
    delete<T extends FacebookAnalyticsPostDeleteArgs>(args: SelectSubset<T, FacebookAnalyticsPostDeleteArgs<ExtArgs>>): Prisma__FacebookAnalyticsPostClient<$Result.GetResult<Prisma.$FacebookAnalyticsPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FacebookAnalyticsPost.
     * @param {FacebookAnalyticsPostUpdateArgs} args - Arguments to update one FacebookAnalyticsPost.
     * @example
     * // Update one FacebookAnalyticsPost
     * const facebookAnalyticsPost = await prisma.facebookAnalyticsPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacebookAnalyticsPostUpdateArgs>(args: SelectSubset<T, FacebookAnalyticsPostUpdateArgs<ExtArgs>>): Prisma__FacebookAnalyticsPostClient<$Result.GetResult<Prisma.$FacebookAnalyticsPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FacebookAnalyticsPosts.
     * @param {FacebookAnalyticsPostDeleteManyArgs} args - Arguments to filter FacebookAnalyticsPosts to delete.
     * @example
     * // Delete a few FacebookAnalyticsPosts
     * const { count } = await prisma.facebookAnalyticsPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacebookAnalyticsPostDeleteManyArgs>(args?: SelectSubset<T, FacebookAnalyticsPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacebookAnalyticsPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookAnalyticsPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacebookAnalyticsPosts
     * const facebookAnalyticsPost = await prisma.facebookAnalyticsPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacebookAnalyticsPostUpdateManyArgs>(args: SelectSubset<T, FacebookAnalyticsPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacebookAnalyticsPosts and returns the data updated in the database.
     * @param {FacebookAnalyticsPostUpdateManyAndReturnArgs} args - Arguments to update many FacebookAnalyticsPosts.
     * @example
     * // Update many FacebookAnalyticsPosts
     * const facebookAnalyticsPost = await prisma.facebookAnalyticsPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FacebookAnalyticsPosts and only return the `id`
     * const facebookAnalyticsPostWithIdOnly = await prisma.facebookAnalyticsPost.updateManyAndReturn({
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
    updateManyAndReturn<T extends FacebookAnalyticsPostUpdateManyAndReturnArgs>(args: SelectSubset<T, FacebookAnalyticsPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookAnalyticsPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FacebookAnalyticsPost.
     * @param {FacebookAnalyticsPostUpsertArgs} args - Arguments to update or create a FacebookAnalyticsPost.
     * @example
     * // Update or create a FacebookAnalyticsPost
     * const facebookAnalyticsPost = await prisma.facebookAnalyticsPost.upsert({
     *   create: {
     *     // ... data to create a FacebookAnalyticsPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacebookAnalyticsPost we want to update
     *   }
     * })
     */
    upsert<T extends FacebookAnalyticsPostUpsertArgs>(args: SelectSubset<T, FacebookAnalyticsPostUpsertArgs<ExtArgs>>): Prisma__FacebookAnalyticsPostClient<$Result.GetResult<Prisma.$FacebookAnalyticsPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FacebookAnalyticsPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookAnalyticsPostCountArgs} args - Arguments to filter FacebookAnalyticsPosts to count.
     * @example
     * // Count the number of FacebookAnalyticsPosts
     * const count = await prisma.facebookAnalyticsPost.count({
     *   where: {
     *     // ... the filter for the FacebookAnalyticsPosts we want to count
     *   }
     * })
    **/
    count<T extends FacebookAnalyticsPostCountArgs>(
      args?: Subset<T, FacebookAnalyticsPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacebookAnalyticsPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacebookAnalyticsPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookAnalyticsPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacebookAnalyticsPostAggregateArgs>(args: Subset<T, FacebookAnalyticsPostAggregateArgs>): Prisma.PrismaPromise<GetFacebookAnalyticsPostAggregateType<T>>

    /**
     * Group by FacebookAnalyticsPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookAnalyticsPostGroupByArgs} args - Group by arguments.
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
      T extends FacebookAnalyticsPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacebookAnalyticsPostGroupByArgs['orderBy'] }
        : { orderBy?: FacebookAnalyticsPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacebookAnalyticsPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacebookAnalyticsPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacebookAnalyticsPost model
   */
  readonly fields: FacebookAnalyticsPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacebookAnalyticsPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacebookAnalyticsPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    generalAnalytics<T extends GeneralAnalyticsDataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GeneralAnalyticsDataDefaultArgs<ExtArgs>>): Prisma__GeneralAnalyticsDataClient<$Result.GetResult<Prisma.$GeneralAnalyticsDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FacebookAnalyticsPost model
   */
  interface FacebookAnalyticsPostFieldRefs {
    readonly id: FieldRef<"FacebookAnalyticsPost", 'Int'>
    readonly postId: FieldRef<"FacebookAnalyticsPost", 'String'>
    readonly postContent: FieldRef<"FacebookAnalyticsPost", 'String'>
    readonly postType: FieldRef<"FacebookAnalyticsPost", 'String'>
    readonly likeCount: FieldRef<"FacebookAnalyticsPost", 'Int'>
    readonly commentCount: FieldRef<"FacebookAnalyticsPost", 'Int'>
    readonly shareCount: FieldRef<"FacebookAnalyticsPost", 'Int'>
    readonly coverageOrganic: FieldRef<"FacebookAnalyticsPost", 'Int'>
    readonly coveragePaid: FieldRef<"FacebookAnalyticsPost", 'Int'>
    readonly postClickCount: FieldRef<"FacebookAnalyticsPost", 'Int'>
    readonly createdAt: FieldRef<"FacebookAnalyticsPost", 'DateTime'>
    readonly updatedAt: FieldRef<"FacebookAnalyticsPost", 'DateTime'>
    readonly generalAnalyticsId: FieldRef<"FacebookAnalyticsPost", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FacebookAnalyticsPost findUnique
   */
  export type FacebookAnalyticsPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookAnalyticsPost
     */
    select?: FacebookAnalyticsPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookAnalyticsPost
     */
    omit?: FacebookAnalyticsPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookAnalyticsPostInclude<ExtArgs> | null
    /**
     * Filter, which FacebookAnalyticsPost to fetch.
     */
    where: FacebookAnalyticsPostWhereUniqueInput
  }

  /**
   * FacebookAnalyticsPost findUniqueOrThrow
   */
  export type FacebookAnalyticsPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookAnalyticsPost
     */
    select?: FacebookAnalyticsPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookAnalyticsPost
     */
    omit?: FacebookAnalyticsPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookAnalyticsPostInclude<ExtArgs> | null
    /**
     * Filter, which FacebookAnalyticsPost to fetch.
     */
    where: FacebookAnalyticsPostWhereUniqueInput
  }

  /**
   * FacebookAnalyticsPost findFirst
   */
  export type FacebookAnalyticsPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookAnalyticsPost
     */
    select?: FacebookAnalyticsPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookAnalyticsPost
     */
    omit?: FacebookAnalyticsPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookAnalyticsPostInclude<ExtArgs> | null
    /**
     * Filter, which FacebookAnalyticsPost to fetch.
     */
    where?: FacebookAnalyticsPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookAnalyticsPosts to fetch.
     */
    orderBy?: FacebookAnalyticsPostOrderByWithRelationInput | FacebookAnalyticsPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacebookAnalyticsPosts.
     */
    cursor?: FacebookAnalyticsPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookAnalyticsPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookAnalyticsPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacebookAnalyticsPosts.
     */
    distinct?: FacebookAnalyticsPostScalarFieldEnum | FacebookAnalyticsPostScalarFieldEnum[]
  }

  /**
   * FacebookAnalyticsPost findFirstOrThrow
   */
  export type FacebookAnalyticsPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookAnalyticsPost
     */
    select?: FacebookAnalyticsPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookAnalyticsPost
     */
    omit?: FacebookAnalyticsPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookAnalyticsPostInclude<ExtArgs> | null
    /**
     * Filter, which FacebookAnalyticsPost to fetch.
     */
    where?: FacebookAnalyticsPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookAnalyticsPosts to fetch.
     */
    orderBy?: FacebookAnalyticsPostOrderByWithRelationInput | FacebookAnalyticsPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacebookAnalyticsPosts.
     */
    cursor?: FacebookAnalyticsPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookAnalyticsPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookAnalyticsPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacebookAnalyticsPosts.
     */
    distinct?: FacebookAnalyticsPostScalarFieldEnum | FacebookAnalyticsPostScalarFieldEnum[]
  }

  /**
   * FacebookAnalyticsPost findMany
   */
  export type FacebookAnalyticsPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookAnalyticsPost
     */
    select?: FacebookAnalyticsPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookAnalyticsPost
     */
    omit?: FacebookAnalyticsPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookAnalyticsPostInclude<ExtArgs> | null
    /**
     * Filter, which FacebookAnalyticsPosts to fetch.
     */
    where?: FacebookAnalyticsPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookAnalyticsPosts to fetch.
     */
    orderBy?: FacebookAnalyticsPostOrderByWithRelationInput | FacebookAnalyticsPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacebookAnalyticsPosts.
     */
    cursor?: FacebookAnalyticsPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookAnalyticsPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookAnalyticsPosts.
     */
    skip?: number
    distinct?: FacebookAnalyticsPostScalarFieldEnum | FacebookAnalyticsPostScalarFieldEnum[]
  }

  /**
   * FacebookAnalyticsPost create
   */
  export type FacebookAnalyticsPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookAnalyticsPost
     */
    select?: FacebookAnalyticsPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookAnalyticsPost
     */
    omit?: FacebookAnalyticsPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookAnalyticsPostInclude<ExtArgs> | null
    /**
     * The data needed to create a FacebookAnalyticsPost.
     */
    data: XOR<FacebookAnalyticsPostCreateInput, FacebookAnalyticsPostUncheckedCreateInput>
  }

  /**
   * FacebookAnalyticsPost createMany
   */
  export type FacebookAnalyticsPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacebookAnalyticsPosts.
     */
    data: FacebookAnalyticsPostCreateManyInput | FacebookAnalyticsPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacebookAnalyticsPost createManyAndReturn
   */
  export type FacebookAnalyticsPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookAnalyticsPost
     */
    select?: FacebookAnalyticsPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookAnalyticsPost
     */
    omit?: FacebookAnalyticsPostOmit<ExtArgs> | null
    /**
     * The data used to create many FacebookAnalyticsPosts.
     */
    data: FacebookAnalyticsPostCreateManyInput | FacebookAnalyticsPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookAnalyticsPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacebookAnalyticsPost update
   */
  export type FacebookAnalyticsPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookAnalyticsPost
     */
    select?: FacebookAnalyticsPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookAnalyticsPost
     */
    omit?: FacebookAnalyticsPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookAnalyticsPostInclude<ExtArgs> | null
    /**
     * The data needed to update a FacebookAnalyticsPost.
     */
    data: XOR<FacebookAnalyticsPostUpdateInput, FacebookAnalyticsPostUncheckedUpdateInput>
    /**
     * Choose, which FacebookAnalyticsPost to update.
     */
    where: FacebookAnalyticsPostWhereUniqueInput
  }

  /**
   * FacebookAnalyticsPost updateMany
   */
  export type FacebookAnalyticsPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacebookAnalyticsPosts.
     */
    data: XOR<FacebookAnalyticsPostUpdateManyMutationInput, FacebookAnalyticsPostUncheckedUpdateManyInput>
    /**
     * Filter which FacebookAnalyticsPosts to update
     */
    where?: FacebookAnalyticsPostWhereInput
    /**
     * Limit how many FacebookAnalyticsPosts to update.
     */
    limit?: number
  }

  /**
   * FacebookAnalyticsPost updateManyAndReturn
   */
  export type FacebookAnalyticsPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookAnalyticsPost
     */
    select?: FacebookAnalyticsPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookAnalyticsPost
     */
    omit?: FacebookAnalyticsPostOmit<ExtArgs> | null
    /**
     * The data used to update FacebookAnalyticsPosts.
     */
    data: XOR<FacebookAnalyticsPostUpdateManyMutationInput, FacebookAnalyticsPostUncheckedUpdateManyInput>
    /**
     * Filter which FacebookAnalyticsPosts to update
     */
    where?: FacebookAnalyticsPostWhereInput
    /**
     * Limit how many FacebookAnalyticsPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookAnalyticsPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacebookAnalyticsPost upsert
   */
  export type FacebookAnalyticsPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookAnalyticsPost
     */
    select?: FacebookAnalyticsPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookAnalyticsPost
     */
    omit?: FacebookAnalyticsPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookAnalyticsPostInclude<ExtArgs> | null
    /**
     * The filter to search for the FacebookAnalyticsPost to update in case it exists.
     */
    where: FacebookAnalyticsPostWhereUniqueInput
    /**
     * In case the FacebookAnalyticsPost found by the `where` argument doesn't exist, create a new FacebookAnalyticsPost with this data.
     */
    create: XOR<FacebookAnalyticsPostCreateInput, FacebookAnalyticsPostUncheckedCreateInput>
    /**
     * In case the FacebookAnalyticsPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacebookAnalyticsPostUpdateInput, FacebookAnalyticsPostUncheckedUpdateInput>
  }

  /**
   * FacebookAnalyticsPost delete
   */
  export type FacebookAnalyticsPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookAnalyticsPost
     */
    select?: FacebookAnalyticsPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookAnalyticsPost
     */
    omit?: FacebookAnalyticsPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookAnalyticsPostInclude<ExtArgs> | null
    /**
     * Filter which FacebookAnalyticsPost to delete.
     */
    where: FacebookAnalyticsPostWhereUniqueInput
  }

  /**
   * FacebookAnalyticsPost deleteMany
   */
  export type FacebookAnalyticsPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacebookAnalyticsPosts to delete
     */
    where?: FacebookAnalyticsPostWhereInput
    /**
     * Limit how many FacebookAnalyticsPosts to delete.
     */
    limit?: number
  }

  /**
   * FacebookAnalyticsPost without action
   */
  export type FacebookAnalyticsPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookAnalyticsPost
     */
    select?: FacebookAnalyticsPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookAnalyticsPost
     */
    omit?: FacebookAnalyticsPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookAnalyticsPostInclude<ExtArgs> | null
  }


  /**
   * Model TwitterAnalyticsTweet
   */

  export type AggregateTwitterAnalyticsTweet = {
    _count: TwitterAnalyticsTweetCountAggregateOutputType | null
    _avg: TwitterAnalyticsTweetAvgAggregateOutputType | null
    _sum: TwitterAnalyticsTweetSumAggregateOutputType | null
    _min: TwitterAnalyticsTweetMinAggregateOutputType | null
    _max: TwitterAnalyticsTweetMaxAggregateOutputType | null
  }

  export type TwitterAnalyticsTweetAvgAggregateOutputType = {
    id: number | null
    retweetsCount: number | null
    quoteCount: number | null
    likeCount: number | null
    commentCount: number | null
    viewCount: number | null
    generalAnalyticsId: number | null
  }

  export type TwitterAnalyticsTweetSumAggregateOutputType = {
    id: number | null
    retweetsCount: number | null
    quoteCount: number | null
    likeCount: number | null
    commentCount: number | null
    viewCount: number | null
    generalAnalyticsId: number | null
  }

  export type TwitterAnalyticsTweetMinAggregateOutputType = {
    id: number | null
    tweetId: string | null
    tweetContent: string | null
    retweetsCount: number | null
    quoteCount: number | null
    likeCount: number | null
    commentCount: number | null
    viewCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    generalAnalyticsId: number | null
  }

  export type TwitterAnalyticsTweetMaxAggregateOutputType = {
    id: number | null
    tweetId: string | null
    tweetContent: string | null
    retweetsCount: number | null
    quoteCount: number | null
    likeCount: number | null
    commentCount: number | null
    viewCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    generalAnalyticsId: number | null
  }

  export type TwitterAnalyticsTweetCountAggregateOutputType = {
    id: number
    tweetId: number
    tweetContent: number
    retweetsCount: number
    quoteCount: number
    likeCount: number
    commentCount: number
    viewCount: number
    hashtags: number
    createdAt: number
    updatedAt: number
    generalAnalyticsId: number
    _all: number
  }


  export type TwitterAnalyticsTweetAvgAggregateInputType = {
    id?: true
    retweetsCount?: true
    quoteCount?: true
    likeCount?: true
    commentCount?: true
    viewCount?: true
    generalAnalyticsId?: true
  }

  export type TwitterAnalyticsTweetSumAggregateInputType = {
    id?: true
    retweetsCount?: true
    quoteCount?: true
    likeCount?: true
    commentCount?: true
    viewCount?: true
    generalAnalyticsId?: true
  }

  export type TwitterAnalyticsTweetMinAggregateInputType = {
    id?: true
    tweetId?: true
    tweetContent?: true
    retweetsCount?: true
    quoteCount?: true
    likeCount?: true
    commentCount?: true
    viewCount?: true
    createdAt?: true
    updatedAt?: true
    generalAnalyticsId?: true
  }

  export type TwitterAnalyticsTweetMaxAggregateInputType = {
    id?: true
    tweetId?: true
    tweetContent?: true
    retweetsCount?: true
    quoteCount?: true
    likeCount?: true
    commentCount?: true
    viewCount?: true
    createdAt?: true
    updatedAt?: true
    generalAnalyticsId?: true
  }

  export type TwitterAnalyticsTweetCountAggregateInputType = {
    id?: true
    tweetId?: true
    tweetContent?: true
    retweetsCount?: true
    quoteCount?: true
    likeCount?: true
    commentCount?: true
    viewCount?: true
    hashtags?: true
    createdAt?: true
    updatedAt?: true
    generalAnalyticsId?: true
    _all?: true
  }

  export type TwitterAnalyticsTweetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TwitterAnalyticsTweet to aggregate.
     */
    where?: TwitterAnalyticsTweetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterAnalyticsTweets to fetch.
     */
    orderBy?: TwitterAnalyticsTweetOrderByWithRelationInput | TwitterAnalyticsTweetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TwitterAnalyticsTweetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterAnalyticsTweets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterAnalyticsTweets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TwitterAnalyticsTweets
    **/
    _count?: true | TwitterAnalyticsTweetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TwitterAnalyticsTweetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TwitterAnalyticsTweetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TwitterAnalyticsTweetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TwitterAnalyticsTweetMaxAggregateInputType
  }

  export type GetTwitterAnalyticsTweetAggregateType<T extends TwitterAnalyticsTweetAggregateArgs> = {
        [P in keyof T & keyof AggregateTwitterAnalyticsTweet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTwitterAnalyticsTweet[P]>
      : GetScalarType<T[P], AggregateTwitterAnalyticsTweet[P]>
  }




  export type TwitterAnalyticsTweetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TwitterAnalyticsTweetWhereInput
    orderBy?: TwitterAnalyticsTweetOrderByWithAggregationInput | TwitterAnalyticsTweetOrderByWithAggregationInput[]
    by: TwitterAnalyticsTweetScalarFieldEnum[] | TwitterAnalyticsTweetScalarFieldEnum
    having?: TwitterAnalyticsTweetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TwitterAnalyticsTweetCountAggregateInputType | true
    _avg?: TwitterAnalyticsTweetAvgAggregateInputType
    _sum?: TwitterAnalyticsTweetSumAggregateInputType
    _min?: TwitterAnalyticsTweetMinAggregateInputType
    _max?: TwitterAnalyticsTweetMaxAggregateInputType
  }

  export type TwitterAnalyticsTweetGroupByOutputType = {
    id: number
    tweetId: string
    tweetContent: string | null
    retweetsCount: number
    quoteCount: number
    likeCount: number
    commentCount: number
    viewCount: number | null
    hashtags: string[]
    createdAt: Date
    updatedAt: Date
    generalAnalyticsId: number
    _count: TwitterAnalyticsTweetCountAggregateOutputType | null
    _avg: TwitterAnalyticsTweetAvgAggregateOutputType | null
    _sum: TwitterAnalyticsTweetSumAggregateOutputType | null
    _min: TwitterAnalyticsTweetMinAggregateOutputType | null
    _max: TwitterAnalyticsTweetMaxAggregateOutputType | null
  }

  type GetTwitterAnalyticsTweetGroupByPayload<T extends TwitterAnalyticsTweetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TwitterAnalyticsTweetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TwitterAnalyticsTweetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TwitterAnalyticsTweetGroupByOutputType[P]>
            : GetScalarType<T[P], TwitterAnalyticsTweetGroupByOutputType[P]>
        }
      >
    >


  export type TwitterAnalyticsTweetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tweetId?: boolean
    tweetContent?: boolean
    retweetsCount?: boolean
    quoteCount?: boolean
    likeCount?: boolean
    commentCount?: boolean
    viewCount?: boolean
    hashtags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    generalAnalyticsId?: boolean
    generalAnalytics?: boolean | GeneralAnalyticsDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["twitterAnalyticsTweet"]>

  export type TwitterAnalyticsTweetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tweetId?: boolean
    tweetContent?: boolean
    retweetsCount?: boolean
    quoteCount?: boolean
    likeCount?: boolean
    commentCount?: boolean
    viewCount?: boolean
    hashtags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    generalAnalyticsId?: boolean
    generalAnalytics?: boolean | GeneralAnalyticsDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["twitterAnalyticsTweet"]>

  export type TwitterAnalyticsTweetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tweetId?: boolean
    tweetContent?: boolean
    retweetsCount?: boolean
    quoteCount?: boolean
    likeCount?: boolean
    commentCount?: boolean
    viewCount?: boolean
    hashtags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    generalAnalyticsId?: boolean
    generalAnalytics?: boolean | GeneralAnalyticsDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["twitterAnalyticsTweet"]>

  export type TwitterAnalyticsTweetSelectScalar = {
    id?: boolean
    tweetId?: boolean
    tweetContent?: boolean
    retweetsCount?: boolean
    quoteCount?: boolean
    likeCount?: boolean
    commentCount?: boolean
    viewCount?: boolean
    hashtags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    generalAnalyticsId?: boolean
  }

  export type TwitterAnalyticsTweetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tweetId" | "tweetContent" | "retweetsCount" | "quoteCount" | "likeCount" | "commentCount" | "viewCount" | "hashtags" | "createdAt" | "updatedAt" | "generalAnalyticsId", ExtArgs["result"]["twitterAnalyticsTweet"]>
  export type TwitterAnalyticsTweetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generalAnalytics?: boolean | GeneralAnalyticsDataDefaultArgs<ExtArgs>
  }
  export type TwitterAnalyticsTweetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generalAnalytics?: boolean | GeneralAnalyticsDataDefaultArgs<ExtArgs>
  }
  export type TwitterAnalyticsTweetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generalAnalytics?: boolean | GeneralAnalyticsDataDefaultArgs<ExtArgs>
  }

  export type $TwitterAnalyticsTweetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TwitterAnalyticsTweet"
    objects: {
      generalAnalytics: Prisma.$GeneralAnalyticsDataPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tweetId: string
      tweetContent: string | null
      retweetsCount: number
      quoteCount: number
      likeCount: number
      commentCount: number
      viewCount: number | null
      hashtags: string[]
      createdAt: Date
      updatedAt: Date
      generalAnalyticsId: number
    }, ExtArgs["result"]["twitterAnalyticsTweet"]>
    composites: {}
  }

  type TwitterAnalyticsTweetGetPayload<S extends boolean | null | undefined | TwitterAnalyticsTweetDefaultArgs> = $Result.GetResult<Prisma.$TwitterAnalyticsTweetPayload, S>

  type TwitterAnalyticsTweetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TwitterAnalyticsTweetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TwitterAnalyticsTweetCountAggregateInputType | true
    }

  export interface TwitterAnalyticsTweetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TwitterAnalyticsTweet'], meta: { name: 'TwitterAnalyticsTweet' } }
    /**
     * Find zero or one TwitterAnalyticsTweet that matches the filter.
     * @param {TwitterAnalyticsTweetFindUniqueArgs} args - Arguments to find a TwitterAnalyticsTweet
     * @example
     * // Get one TwitterAnalyticsTweet
     * const twitterAnalyticsTweet = await prisma.twitterAnalyticsTweet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TwitterAnalyticsTweetFindUniqueArgs>(args: SelectSubset<T, TwitterAnalyticsTweetFindUniqueArgs<ExtArgs>>): Prisma__TwitterAnalyticsTweetClient<$Result.GetResult<Prisma.$TwitterAnalyticsTweetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TwitterAnalyticsTweet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TwitterAnalyticsTweetFindUniqueOrThrowArgs} args - Arguments to find a TwitterAnalyticsTweet
     * @example
     * // Get one TwitterAnalyticsTweet
     * const twitterAnalyticsTweet = await prisma.twitterAnalyticsTweet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TwitterAnalyticsTweetFindUniqueOrThrowArgs>(args: SelectSubset<T, TwitterAnalyticsTweetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TwitterAnalyticsTweetClient<$Result.GetResult<Prisma.$TwitterAnalyticsTweetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TwitterAnalyticsTweet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterAnalyticsTweetFindFirstArgs} args - Arguments to find a TwitterAnalyticsTweet
     * @example
     * // Get one TwitterAnalyticsTweet
     * const twitterAnalyticsTweet = await prisma.twitterAnalyticsTweet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TwitterAnalyticsTweetFindFirstArgs>(args?: SelectSubset<T, TwitterAnalyticsTweetFindFirstArgs<ExtArgs>>): Prisma__TwitterAnalyticsTweetClient<$Result.GetResult<Prisma.$TwitterAnalyticsTweetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TwitterAnalyticsTweet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterAnalyticsTweetFindFirstOrThrowArgs} args - Arguments to find a TwitterAnalyticsTweet
     * @example
     * // Get one TwitterAnalyticsTweet
     * const twitterAnalyticsTweet = await prisma.twitterAnalyticsTweet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TwitterAnalyticsTweetFindFirstOrThrowArgs>(args?: SelectSubset<T, TwitterAnalyticsTweetFindFirstOrThrowArgs<ExtArgs>>): Prisma__TwitterAnalyticsTweetClient<$Result.GetResult<Prisma.$TwitterAnalyticsTweetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TwitterAnalyticsTweets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterAnalyticsTweetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TwitterAnalyticsTweets
     * const twitterAnalyticsTweets = await prisma.twitterAnalyticsTweet.findMany()
     * 
     * // Get first 10 TwitterAnalyticsTweets
     * const twitterAnalyticsTweets = await prisma.twitterAnalyticsTweet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const twitterAnalyticsTweetWithIdOnly = await prisma.twitterAnalyticsTweet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TwitterAnalyticsTweetFindManyArgs>(args?: SelectSubset<T, TwitterAnalyticsTweetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TwitterAnalyticsTweetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TwitterAnalyticsTweet.
     * @param {TwitterAnalyticsTweetCreateArgs} args - Arguments to create a TwitterAnalyticsTweet.
     * @example
     * // Create one TwitterAnalyticsTweet
     * const TwitterAnalyticsTweet = await prisma.twitterAnalyticsTweet.create({
     *   data: {
     *     // ... data to create a TwitterAnalyticsTweet
     *   }
     * })
     * 
     */
    create<T extends TwitterAnalyticsTweetCreateArgs>(args: SelectSubset<T, TwitterAnalyticsTweetCreateArgs<ExtArgs>>): Prisma__TwitterAnalyticsTweetClient<$Result.GetResult<Prisma.$TwitterAnalyticsTweetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TwitterAnalyticsTweets.
     * @param {TwitterAnalyticsTweetCreateManyArgs} args - Arguments to create many TwitterAnalyticsTweets.
     * @example
     * // Create many TwitterAnalyticsTweets
     * const twitterAnalyticsTweet = await prisma.twitterAnalyticsTweet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TwitterAnalyticsTweetCreateManyArgs>(args?: SelectSubset<T, TwitterAnalyticsTweetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TwitterAnalyticsTweets and returns the data saved in the database.
     * @param {TwitterAnalyticsTweetCreateManyAndReturnArgs} args - Arguments to create many TwitterAnalyticsTweets.
     * @example
     * // Create many TwitterAnalyticsTweets
     * const twitterAnalyticsTweet = await prisma.twitterAnalyticsTweet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TwitterAnalyticsTweets and only return the `id`
     * const twitterAnalyticsTweetWithIdOnly = await prisma.twitterAnalyticsTweet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TwitterAnalyticsTweetCreateManyAndReturnArgs>(args?: SelectSubset<T, TwitterAnalyticsTweetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TwitterAnalyticsTweetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TwitterAnalyticsTweet.
     * @param {TwitterAnalyticsTweetDeleteArgs} args - Arguments to delete one TwitterAnalyticsTweet.
     * @example
     * // Delete one TwitterAnalyticsTweet
     * const TwitterAnalyticsTweet = await prisma.twitterAnalyticsTweet.delete({
     *   where: {
     *     // ... filter to delete one TwitterAnalyticsTweet
     *   }
     * })
     * 
     */
    delete<T extends TwitterAnalyticsTweetDeleteArgs>(args: SelectSubset<T, TwitterAnalyticsTweetDeleteArgs<ExtArgs>>): Prisma__TwitterAnalyticsTweetClient<$Result.GetResult<Prisma.$TwitterAnalyticsTweetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TwitterAnalyticsTweet.
     * @param {TwitterAnalyticsTweetUpdateArgs} args - Arguments to update one TwitterAnalyticsTweet.
     * @example
     * // Update one TwitterAnalyticsTweet
     * const twitterAnalyticsTweet = await prisma.twitterAnalyticsTweet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TwitterAnalyticsTweetUpdateArgs>(args: SelectSubset<T, TwitterAnalyticsTweetUpdateArgs<ExtArgs>>): Prisma__TwitterAnalyticsTweetClient<$Result.GetResult<Prisma.$TwitterAnalyticsTweetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TwitterAnalyticsTweets.
     * @param {TwitterAnalyticsTweetDeleteManyArgs} args - Arguments to filter TwitterAnalyticsTweets to delete.
     * @example
     * // Delete a few TwitterAnalyticsTweets
     * const { count } = await prisma.twitterAnalyticsTweet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TwitterAnalyticsTweetDeleteManyArgs>(args?: SelectSubset<T, TwitterAnalyticsTweetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TwitterAnalyticsTweets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterAnalyticsTweetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TwitterAnalyticsTweets
     * const twitterAnalyticsTweet = await prisma.twitterAnalyticsTweet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TwitterAnalyticsTweetUpdateManyArgs>(args: SelectSubset<T, TwitterAnalyticsTweetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TwitterAnalyticsTweets and returns the data updated in the database.
     * @param {TwitterAnalyticsTweetUpdateManyAndReturnArgs} args - Arguments to update many TwitterAnalyticsTweets.
     * @example
     * // Update many TwitterAnalyticsTweets
     * const twitterAnalyticsTweet = await prisma.twitterAnalyticsTweet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TwitterAnalyticsTweets and only return the `id`
     * const twitterAnalyticsTweetWithIdOnly = await prisma.twitterAnalyticsTweet.updateManyAndReturn({
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
    updateManyAndReturn<T extends TwitterAnalyticsTweetUpdateManyAndReturnArgs>(args: SelectSubset<T, TwitterAnalyticsTweetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TwitterAnalyticsTweetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TwitterAnalyticsTweet.
     * @param {TwitterAnalyticsTweetUpsertArgs} args - Arguments to update or create a TwitterAnalyticsTweet.
     * @example
     * // Update or create a TwitterAnalyticsTweet
     * const twitterAnalyticsTweet = await prisma.twitterAnalyticsTweet.upsert({
     *   create: {
     *     // ... data to create a TwitterAnalyticsTweet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TwitterAnalyticsTweet we want to update
     *   }
     * })
     */
    upsert<T extends TwitterAnalyticsTweetUpsertArgs>(args: SelectSubset<T, TwitterAnalyticsTweetUpsertArgs<ExtArgs>>): Prisma__TwitterAnalyticsTweetClient<$Result.GetResult<Prisma.$TwitterAnalyticsTweetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TwitterAnalyticsTweets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterAnalyticsTweetCountArgs} args - Arguments to filter TwitterAnalyticsTweets to count.
     * @example
     * // Count the number of TwitterAnalyticsTweets
     * const count = await prisma.twitterAnalyticsTweet.count({
     *   where: {
     *     // ... the filter for the TwitterAnalyticsTweets we want to count
     *   }
     * })
    **/
    count<T extends TwitterAnalyticsTweetCountArgs>(
      args?: Subset<T, TwitterAnalyticsTweetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TwitterAnalyticsTweetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TwitterAnalyticsTweet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterAnalyticsTweetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TwitterAnalyticsTweetAggregateArgs>(args: Subset<T, TwitterAnalyticsTweetAggregateArgs>): Prisma.PrismaPromise<GetTwitterAnalyticsTweetAggregateType<T>>

    /**
     * Group by TwitterAnalyticsTweet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterAnalyticsTweetGroupByArgs} args - Group by arguments.
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
      T extends TwitterAnalyticsTweetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TwitterAnalyticsTweetGroupByArgs['orderBy'] }
        : { orderBy?: TwitterAnalyticsTweetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TwitterAnalyticsTweetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTwitterAnalyticsTweetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TwitterAnalyticsTweet model
   */
  readonly fields: TwitterAnalyticsTweetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TwitterAnalyticsTweet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TwitterAnalyticsTweetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    generalAnalytics<T extends GeneralAnalyticsDataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GeneralAnalyticsDataDefaultArgs<ExtArgs>>): Prisma__GeneralAnalyticsDataClient<$Result.GetResult<Prisma.$GeneralAnalyticsDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TwitterAnalyticsTweet model
   */
  interface TwitterAnalyticsTweetFieldRefs {
    readonly id: FieldRef<"TwitterAnalyticsTweet", 'Int'>
    readonly tweetId: FieldRef<"TwitterAnalyticsTweet", 'String'>
    readonly tweetContent: FieldRef<"TwitterAnalyticsTweet", 'String'>
    readonly retweetsCount: FieldRef<"TwitterAnalyticsTweet", 'Int'>
    readonly quoteCount: FieldRef<"TwitterAnalyticsTweet", 'Int'>
    readonly likeCount: FieldRef<"TwitterAnalyticsTweet", 'Int'>
    readonly commentCount: FieldRef<"TwitterAnalyticsTweet", 'Int'>
    readonly viewCount: FieldRef<"TwitterAnalyticsTweet", 'Int'>
    readonly hashtags: FieldRef<"TwitterAnalyticsTweet", 'String[]'>
    readonly createdAt: FieldRef<"TwitterAnalyticsTweet", 'DateTime'>
    readonly updatedAt: FieldRef<"TwitterAnalyticsTweet", 'DateTime'>
    readonly generalAnalyticsId: FieldRef<"TwitterAnalyticsTweet", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TwitterAnalyticsTweet findUnique
   */
  export type TwitterAnalyticsTweetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwitterAnalyticsTweet
     */
    select?: TwitterAnalyticsTweetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwitterAnalyticsTweet
     */
    omit?: TwitterAnalyticsTweetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwitterAnalyticsTweetInclude<ExtArgs> | null
    /**
     * Filter, which TwitterAnalyticsTweet to fetch.
     */
    where: TwitterAnalyticsTweetWhereUniqueInput
  }

  /**
   * TwitterAnalyticsTweet findUniqueOrThrow
   */
  export type TwitterAnalyticsTweetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwitterAnalyticsTweet
     */
    select?: TwitterAnalyticsTweetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwitterAnalyticsTweet
     */
    omit?: TwitterAnalyticsTweetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwitterAnalyticsTweetInclude<ExtArgs> | null
    /**
     * Filter, which TwitterAnalyticsTweet to fetch.
     */
    where: TwitterAnalyticsTweetWhereUniqueInput
  }

  /**
   * TwitterAnalyticsTweet findFirst
   */
  export type TwitterAnalyticsTweetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwitterAnalyticsTweet
     */
    select?: TwitterAnalyticsTweetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwitterAnalyticsTweet
     */
    omit?: TwitterAnalyticsTweetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwitterAnalyticsTweetInclude<ExtArgs> | null
    /**
     * Filter, which TwitterAnalyticsTweet to fetch.
     */
    where?: TwitterAnalyticsTweetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterAnalyticsTweets to fetch.
     */
    orderBy?: TwitterAnalyticsTweetOrderByWithRelationInput | TwitterAnalyticsTweetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwitterAnalyticsTweets.
     */
    cursor?: TwitterAnalyticsTweetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterAnalyticsTweets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterAnalyticsTweets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwitterAnalyticsTweets.
     */
    distinct?: TwitterAnalyticsTweetScalarFieldEnum | TwitterAnalyticsTweetScalarFieldEnum[]
  }

  /**
   * TwitterAnalyticsTweet findFirstOrThrow
   */
  export type TwitterAnalyticsTweetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwitterAnalyticsTweet
     */
    select?: TwitterAnalyticsTweetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwitterAnalyticsTweet
     */
    omit?: TwitterAnalyticsTweetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwitterAnalyticsTweetInclude<ExtArgs> | null
    /**
     * Filter, which TwitterAnalyticsTweet to fetch.
     */
    where?: TwitterAnalyticsTweetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterAnalyticsTweets to fetch.
     */
    orderBy?: TwitterAnalyticsTweetOrderByWithRelationInput | TwitterAnalyticsTweetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwitterAnalyticsTweets.
     */
    cursor?: TwitterAnalyticsTweetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterAnalyticsTweets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterAnalyticsTweets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwitterAnalyticsTweets.
     */
    distinct?: TwitterAnalyticsTweetScalarFieldEnum | TwitterAnalyticsTweetScalarFieldEnum[]
  }

  /**
   * TwitterAnalyticsTweet findMany
   */
  export type TwitterAnalyticsTweetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwitterAnalyticsTweet
     */
    select?: TwitterAnalyticsTweetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwitterAnalyticsTweet
     */
    omit?: TwitterAnalyticsTweetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwitterAnalyticsTweetInclude<ExtArgs> | null
    /**
     * Filter, which TwitterAnalyticsTweets to fetch.
     */
    where?: TwitterAnalyticsTweetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterAnalyticsTweets to fetch.
     */
    orderBy?: TwitterAnalyticsTweetOrderByWithRelationInput | TwitterAnalyticsTweetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TwitterAnalyticsTweets.
     */
    cursor?: TwitterAnalyticsTweetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterAnalyticsTweets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterAnalyticsTweets.
     */
    skip?: number
    distinct?: TwitterAnalyticsTweetScalarFieldEnum | TwitterAnalyticsTweetScalarFieldEnum[]
  }

  /**
   * TwitterAnalyticsTweet create
   */
  export type TwitterAnalyticsTweetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwitterAnalyticsTweet
     */
    select?: TwitterAnalyticsTweetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwitterAnalyticsTweet
     */
    omit?: TwitterAnalyticsTweetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwitterAnalyticsTweetInclude<ExtArgs> | null
    /**
     * The data needed to create a TwitterAnalyticsTweet.
     */
    data: XOR<TwitterAnalyticsTweetCreateInput, TwitterAnalyticsTweetUncheckedCreateInput>
  }

  /**
   * TwitterAnalyticsTweet createMany
   */
  export type TwitterAnalyticsTweetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TwitterAnalyticsTweets.
     */
    data: TwitterAnalyticsTweetCreateManyInput | TwitterAnalyticsTweetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TwitterAnalyticsTweet createManyAndReturn
   */
  export type TwitterAnalyticsTweetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwitterAnalyticsTweet
     */
    select?: TwitterAnalyticsTweetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TwitterAnalyticsTweet
     */
    omit?: TwitterAnalyticsTweetOmit<ExtArgs> | null
    /**
     * The data used to create many TwitterAnalyticsTweets.
     */
    data: TwitterAnalyticsTweetCreateManyInput | TwitterAnalyticsTweetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwitterAnalyticsTweetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TwitterAnalyticsTweet update
   */
  export type TwitterAnalyticsTweetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwitterAnalyticsTweet
     */
    select?: TwitterAnalyticsTweetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwitterAnalyticsTweet
     */
    omit?: TwitterAnalyticsTweetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwitterAnalyticsTweetInclude<ExtArgs> | null
    /**
     * The data needed to update a TwitterAnalyticsTweet.
     */
    data: XOR<TwitterAnalyticsTweetUpdateInput, TwitterAnalyticsTweetUncheckedUpdateInput>
    /**
     * Choose, which TwitterAnalyticsTweet to update.
     */
    where: TwitterAnalyticsTweetWhereUniqueInput
  }

  /**
   * TwitterAnalyticsTweet updateMany
   */
  export type TwitterAnalyticsTweetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TwitterAnalyticsTweets.
     */
    data: XOR<TwitterAnalyticsTweetUpdateManyMutationInput, TwitterAnalyticsTweetUncheckedUpdateManyInput>
    /**
     * Filter which TwitterAnalyticsTweets to update
     */
    where?: TwitterAnalyticsTweetWhereInput
    /**
     * Limit how many TwitterAnalyticsTweets to update.
     */
    limit?: number
  }

  /**
   * TwitterAnalyticsTweet updateManyAndReturn
   */
  export type TwitterAnalyticsTweetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwitterAnalyticsTweet
     */
    select?: TwitterAnalyticsTweetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TwitterAnalyticsTweet
     */
    omit?: TwitterAnalyticsTweetOmit<ExtArgs> | null
    /**
     * The data used to update TwitterAnalyticsTweets.
     */
    data: XOR<TwitterAnalyticsTweetUpdateManyMutationInput, TwitterAnalyticsTweetUncheckedUpdateManyInput>
    /**
     * Filter which TwitterAnalyticsTweets to update
     */
    where?: TwitterAnalyticsTweetWhereInput
    /**
     * Limit how many TwitterAnalyticsTweets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwitterAnalyticsTweetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TwitterAnalyticsTweet upsert
   */
  export type TwitterAnalyticsTweetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwitterAnalyticsTweet
     */
    select?: TwitterAnalyticsTweetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwitterAnalyticsTweet
     */
    omit?: TwitterAnalyticsTweetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwitterAnalyticsTweetInclude<ExtArgs> | null
    /**
     * The filter to search for the TwitterAnalyticsTweet to update in case it exists.
     */
    where: TwitterAnalyticsTweetWhereUniqueInput
    /**
     * In case the TwitterAnalyticsTweet found by the `where` argument doesn't exist, create a new TwitterAnalyticsTweet with this data.
     */
    create: XOR<TwitterAnalyticsTweetCreateInput, TwitterAnalyticsTweetUncheckedCreateInput>
    /**
     * In case the TwitterAnalyticsTweet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TwitterAnalyticsTweetUpdateInput, TwitterAnalyticsTweetUncheckedUpdateInput>
  }

  /**
   * TwitterAnalyticsTweet delete
   */
  export type TwitterAnalyticsTweetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwitterAnalyticsTweet
     */
    select?: TwitterAnalyticsTweetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwitterAnalyticsTweet
     */
    omit?: TwitterAnalyticsTweetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwitterAnalyticsTweetInclude<ExtArgs> | null
    /**
     * Filter which TwitterAnalyticsTweet to delete.
     */
    where: TwitterAnalyticsTweetWhereUniqueInput
  }

  /**
   * TwitterAnalyticsTweet deleteMany
   */
  export type TwitterAnalyticsTweetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TwitterAnalyticsTweets to delete
     */
    where?: TwitterAnalyticsTweetWhereInput
    /**
     * Limit how many TwitterAnalyticsTweets to delete.
     */
    limit?: number
  }

  /**
   * TwitterAnalyticsTweet without action
   */
  export type TwitterAnalyticsTweetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwitterAnalyticsTweet
     */
    select?: TwitterAnalyticsTweetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwitterAnalyticsTweet
     */
    omit?: TwitterAnalyticsTweetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwitterAnalyticsTweetInclude<ExtArgs> | null
  }


  /**
   * Model InstagramAnalyticsPost
   */

  export type AggregateInstagramAnalyticsPost = {
    _count: InstagramAnalyticsPostCountAggregateOutputType | null
    _avg: InstagramAnalyticsPostAvgAggregateOutputType | null
    _sum: InstagramAnalyticsPostSumAggregateOutputType | null
    _min: InstagramAnalyticsPostMinAggregateOutputType | null
    _max: InstagramAnalyticsPostMaxAggregateOutputType | null
  }

  export type InstagramAnalyticsPostAvgAggregateOutputType = {
    id: number | null
    likeCount: number | null
    commentCount: number | null
    saveCount: number | null
    reach: number | null
    impressions: number | null
    engagementRate: number | null
    videoViews: number | null
    generalAnalyticsId: number | null
  }

  export type InstagramAnalyticsPostSumAggregateOutputType = {
    id: number | null
    likeCount: number | null
    commentCount: number | null
    saveCount: number | null
    reach: number | null
    impressions: number | null
    engagementRate: number | null
    videoViews: number | null
    generalAnalyticsId: number | null
  }

  export type InstagramAnalyticsPostMinAggregateOutputType = {
    id: number | null
    postId: string | null
    postContent: string | null
    postType: string | null
    likeCount: number | null
    commentCount: number | null
    saveCount: number | null
    reach: number | null
    impressions: number | null
    engagementRate: number | null
    videoViews: number | null
    createdAt: Date | null
    updatedAt: Date | null
    generalAnalyticsId: number | null
  }

  export type InstagramAnalyticsPostMaxAggregateOutputType = {
    id: number | null
    postId: string | null
    postContent: string | null
    postType: string | null
    likeCount: number | null
    commentCount: number | null
    saveCount: number | null
    reach: number | null
    impressions: number | null
    engagementRate: number | null
    videoViews: number | null
    createdAt: Date | null
    updatedAt: Date | null
    generalAnalyticsId: number | null
  }

  export type InstagramAnalyticsPostCountAggregateOutputType = {
    id: number
    postId: number
    postContent: number
    postType: number
    likeCount: number
    commentCount: number
    saveCount: number
    reach: number
    impressions: number
    engagementRate: number
    videoViews: number
    createdAt: number
    updatedAt: number
    generalAnalyticsId: number
    _all: number
  }


  export type InstagramAnalyticsPostAvgAggregateInputType = {
    id?: true
    likeCount?: true
    commentCount?: true
    saveCount?: true
    reach?: true
    impressions?: true
    engagementRate?: true
    videoViews?: true
    generalAnalyticsId?: true
  }

  export type InstagramAnalyticsPostSumAggregateInputType = {
    id?: true
    likeCount?: true
    commentCount?: true
    saveCount?: true
    reach?: true
    impressions?: true
    engagementRate?: true
    videoViews?: true
    generalAnalyticsId?: true
  }

  export type InstagramAnalyticsPostMinAggregateInputType = {
    id?: true
    postId?: true
    postContent?: true
    postType?: true
    likeCount?: true
    commentCount?: true
    saveCount?: true
    reach?: true
    impressions?: true
    engagementRate?: true
    videoViews?: true
    createdAt?: true
    updatedAt?: true
    generalAnalyticsId?: true
  }

  export type InstagramAnalyticsPostMaxAggregateInputType = {
    id?: true
    postId?: true
    postContent?: true
    postType?: true
    likeCount?: true
    commentCount?: true
    saveCount?: true
    reach?: true
    impressions?: true
    engagementRate?: true
    videoViews?: true
    createdAt?: true
    updatedAt?: true
    generalAnalyticsId?: true
  }

  export type InstagramAnalyticsPostCountAggregateInputType = {
    id?: true
    postId?: true
    postContent?: true
    postType?: true
    likeCount?: true
    commentCount?: true
    saveCount?: true
    reach?: true
    impressions?: true
    engagementRate?: true
    videoViews?: true
    createdAt?: true
    updatedAt?: true
    generalAnalyticsId?: true
    _all?: true
  }

  export type InstagramAnalyticsPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstagramAnalyticsPost to aggregate.
     */
    where?: InstagramAnalyticsPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstagramAnalyticsPosts to fetch.
     */
    orderBy?: InstagramAnalyticsPostOrderByWithRelationInput | InstagramAnalyticsPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstagramAnalyticsPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstagramAnalyticsPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstagramAnalyticsPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InstagramAnalyticsPosts
    **/
    _count?: true | InstagramAnalyticsPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstagramAnalyticsPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstagramAnalyticsPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstagramAnalyticsPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstagramAnalyticsPostMaxAggregateInputType
  }

  export type GetInstagramAnalyticsPostAggregateType<T extends InstagramAnalyticsPostAggregateArgs> = {
        [P in keyof T & keyof AggregateInstagramAnalyticsPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstagramAnalyticsPost[P]>
      : GetScalarType<T[P], AggregateInstagramAnalyticsPost[P]>
  }




  export type InstagramAnalyticsPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstagramAnalyticsPostWhereInput
    orderBy?: InstagramAnalyticsPostOrderByWithAggregationInput | InstagramAnalyticsPostOrderByWithAggregationInput[]
    by: InstagramAnalyticsPostScalarFieldEnum[] | InstagramAnalyticsPostScalarFieldEnum
    having?: InstagramAnalyticsPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstagramAnalyticsPostCountAggregateInputType | true
    _avg?: InstagramAnalyticsPostAvgAggregateInputType
    _sum?: InstagramAnalyticsPostSumAggregateInputType
    _min?: InstagramAnalyticsPostMinAggregateInputType
    _max?: InstagramAnalyticsPostMaxAggregateInputType
  }

  export type InstagramAnalyticsPostGroupByOutputType = {
    id: number
    postId: string
    postContent: string | null
    postType: string | null
    likeCount: number
    commentCount: number
    saveCount: number | null
    reach: number | null
    impressions: number | null
    engagementRate: number | null
    videoViews: number | null
    createdAt: Date
    updatedAt: Date
    generalAnalyticsId: number
    _count: InstagramAnalyticsPostCountAggregateOutputType | null
    _avg: InstagramAnalyticsPostAvgAggregateOutputType | null
    _sum: InstagramAnalyticsPostSumAggregateOutputType | null
    _min: InstagramAnalyticsPostMinAggregateOutputType | null
    _max: InstagramAnalyticsPostMaxAggregateOutputType | null
  }

  type GetInstagramAnalyticsPostGroupByPayload<T extends InstagramAnalyticsPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstagramAnalyticsPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstagramAnalyticsPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstagramAnalyticsPostGroupByOutputType[P]>
            : GetScalarType<T[P], InstagramAnalyticsPostGroupByOutputType[P]>
        }
      >
    >


  export type InstagramAnalyticsPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    postContent?: boolean
    postType?: boolean
    likeCount?: boolean
    commentCount?: boolean
    saveCount?: boolean
    reach?: boolean
    impressions?: boolean
    engagementRate?: boolean
    videoViews?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    generalAnalyticsId?: boolean
    generalAnalytics?: boolean | GeneralAnalyticsDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instagramAnalyticsPost"]>

  export type InstagramAnalyticsPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    postContent?: boolean
    postType?: boolean
    likeCount?: boolean
    commentCount?: boolean
    saveCount?: boolean
    reach?: boolean
    impressions?: boolean
    engagementRate?: boolean
    videoViews?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    generalAnalyticsId?: boolean
    generalAnalytics?: boolean | GeneralAnalyticsDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instagramAnalyticsPost"]>

  export type InstagramAnalyticsPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    postContent?: boolean
    postType?: boolean
    likeCount?: boolean
    commentCount?: boolean
    saveCount?: boolean
    reach?: boolean
    impressions?: boolean
    engagementRate?: boolean
    videoViews?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    generalAnalyticsId?: boolean
    generalAnalytics?: boolean | GeneralAnalyticsDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instagramAnalyticsPost"]>

  export type InstagramAnalyticsPostSelectScalar = {
    id?: boolean
    postId?: boolean
    postContent?: boolean
    postType?: boolean
    likeCount?: boolean
    commentCount?: boolean
    saveCount?: boolean
    reach?: boolean
    impressions?: boolean
    engagementRate?: boolean
    videoViews?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    generalAnalyticsId?: boolean
  }

  export type InstagramAnalyticsPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "postContent" | "postType" | "likeCount" | "commentCount" | "saveCount" | "reach" | "impressions" | "engagementRate" | "videoViews" | "createdAt" | "updatedAt" | "generalAnalyticsId", ExtArgs["result"]["instagramAnalyticsPost"]>
  export type InstagramAnalyticsPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generalAnalytics?: boolean | GeneralAnalyticsDataDefaultArgs<ExtArgs>
  }
  export type InstagramAnalyticsPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generalAnalytics?: boolean | GeneralAnalyticsDataDefaultArgs<ExtArgs>
  }
  export type InstagramAnalyticsPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generalAnalytics?: boolean | GeneralAnalyticsDataDefaultArgs<ExtArgs>
  }

  export type $InstagramAnalyticsPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InstagramAnalyticsPost"
    objects: {
      generalAnalytics: Prisma.$GeneralAnalyticsDataPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      postId: string
      postContent: string | null
      postType: string | null
      likeCount: number
      commentCount: number
      saveCount: number | null
      reach: number | null
      impressions: number | null
      engagementRate: number | null
      videoViews: number | null
      createdAt: Date
      updatedAt: Date
      generalAnalyticsId: number
    }, ExtArgs["result"]["instagramAnalyticsPost"]>
    composites: {}
  }

  type InstagramAnalyticsPostGetPayload<S extends boolean | null | undefined | InstagramAnalyticsPostDefaultArgs> = $Result.GetResult<Prisma.$InstagramAnalyticsPostPayload, S>

  type InstagramAnalyticsPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstagramAnalyticsPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstagramAnalyticsPostCountAggregateInputType | true
    }

  export interface InstagramAnalyticsPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InstagramAnalyticsPost'], meta: { name: 'InstagramAnalyticsPost' } }
    /**
     * Find zero or one InstagramAnalyticsPost that matches the filter.
     * @param {InstagramAnalyticsPostFindUniqueArgs} args - Arguments to find a InstagramAnalyticsPost
     * @example
     * // Get one InstagramAnalyticsPost
     * const instagramAnalyticsPost = await prisma.instagramAnalyticsPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstagramAnalyticsPostFindUniqueArgs>(args: SelectSubset<T, InstagramAnalyticsPostFindUniqueArgs<ExtArgs>>): Prisma__InstagramAnalyticsPostClient<$Result.GetResult<Prisma.$InstagramAnalyticsPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InstagramAnalyticsPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstagramAnalyticsPostFindUniqueOrThrowArgs} args - Arguments to find a InstagramAnalyticsPost
     * @example
     * // Get one InstagramAnalyticsPost
     * const instagramAnalyticsPost = await prisma.instagramAnalyticsPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstagramAnalyticsPostFindUniqueOrThrowArgs>(args: SelectSubset<T, InstagramAnalyticsPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstagramAnalyticsPostClient<$Result.GetResult<Prisma.$InstagramAnalyticsPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstagramAnalyticsPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstagramAnalyticsPostFindFirstArgs} args - Arguments to find a InstagramAnalyticsPost
     * @example
     * // Get one InstagramAnalyticsPost
     * const instagramAnalyticsPost = await prisma.instagramAnalyticsPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstagramAnalyticsPostFindFirstArgs>(args?: SelectSubset<T, InstagramAnalyticsPostFindFirstArgs<ExtArgs>>): Prisma__InstagramAnalyticsPostClient<$Result.GetResult<Prisma.$InstagramAnalyticsPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstagramAnalyticsPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstagramAnalyticsPostFindFirstOrThrowArgs} args - Arguments to find a InstagramAnalyticsPost
     * @example
     * // Get one InstagramAnalyticsPost
     * const instagramAnalyticsPost = await prisma.instagramAnalyticsPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstagramAnalyticsPostFindFirstOrThrowArgs>(args?: SelectSubset<T, InstagramAnalyticsPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstagramAnalyticsPostClient<$Result.GetResult<Prisma.$InstagramAnalyticsPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InstagramAnalyticsPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstagramAnalyticsPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InstagramAnalyticsPosts
     * const instagramAnalyticsPosts = await prisma.instagramAnalyticsPost.findMany()
     * 
     * // Get first 10 InstagramAnalyticsPosts
     * const instagramAnalyticsPosts = await prisma.instagramAnalyticsPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instagramAnalyticsPostWithIdOnly = await prisma.instagramAnalyticsPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstagramAnalyticsPostFindManyArgs>(args?: SelectSubset<T, InstagramAnalyticsPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstagramAnalyticsPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InstagramAnalyticsPost.
     * @param {InstagramAnalyticsPostCreateArgs} args - Arguments to create a InstagramAnalyticsPost.
     * @example
     * // Create one InstagramAnalyticsPost
     * const InstagramAnalyticsPost = await prisma.instagramAnalyticsPost.create({
     *   data: {
     *     // ... data to create a InstagramAnalyticsPost
     *   }
     * })
     * 
     */
    create<T extends InstagramAnalyticsPostCreateArgs>(args: SelectSubset<T, InstagramAnalyticsPostCreateArgs<ExtArgs>>): Prisma__InstagramAnalyticsPostClient<$Result.GetResult<Prisma.$InstagramAnalyticsPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InstagramAnalyticsPosts.
     * @param {InstagramAnalyticsPostCreateManyArgs} args - Arguments to create many InstagramAnalyticsPosts.
     * @example
     * // Create many InstagramAnalyticsPosts
     * const instagramAnalyticsPost = await prisma.instagramAnalyticsPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstagramAnalyticsPostCreateManyArgs>(args?: SelectSubset<T, InstagramAnalyticsPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InstagramAnalyticsPosts and returns the data saved in the database.
     * @param {InstagramAnalyticsPostCreateManyAndReturnArgs} args - Arguments to create many InstagramAnalyticsPosts.
     * @example
     * // Create many InstagramAnalyticsPosts
     * const instagramAnalyticsPost = await prisma.instagramAnalyticsPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InstagramAnalyticsPosts and only return the `id`
     * const instagramAnalyticsPostWithIdOnly = await prisma.instagramAnalyticsPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstagramAnalyticsPostCreateManyAndReturnArgs>(args?: SelectSubset<T, InstagramAnalyticsPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstagramAnalyticsPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InstagramAnalyticsPost.
     * @param {InstagramAnalyticsPostDeleteArgs} args - Arguments to delete one InstagramAnalyticsPost.
     * @example
     * // Delete one InstagramAnalyticsPost
     * const InstagramAnalyticsPost = await prisma.instagramAnalyticsPost.delete({
     *   where: {
     *     // ... filter to delete one InstagramAnalyticsPost
     *   }
     * })
     * 
     */
    delete<T extends InstagramAnalyticsPostDeleteArgs>(args: SelectSubset<T, InstagramAnalyticsPostDeleteArgs<ExtArgs>>): Prisma__InstagramAnalyticsPostClient<$Result.GetResult<Prisma.$InstagramAnalyticsPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InstagramAnalyticsPost.
     * @param {InstagramAnalyticsPostUpdateArgs} args - Arguments to update one InstagramAnalyticsPost.
     * @example
     * // Update one InstagramAnalyticsPost
     * const instagramAnalyticsPost = await prisma.instagramAnalyticsPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstagramAnalyticsPostUpdateArgs>(args: SelectSubset<T, InstagramAnalyticsPostUpdateArgs<ExtArgs>>): Prisma__InstagramAnalyticsPostClient<$Result.GetResult<Prisma.$InstagramAnalyticsPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InstagramAnalyticsPosts.
     * @param {InstagramAnalyticsPostDeleteManyArgs} args - Arguments to filter InstagramAnalyticsPosts to delete.
     * @example
     * // Delete a few InstagramAnalyticsPosts
     * const { count } = await prisma.instagramAnalyticsPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstagramAnalyticsPostDeleteManyArgs>(args?: SelectSubset<T, InstagramAnalyticsPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstagramAnalyticsPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstagramAnalyticsPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InstagramAnalyticsPosts
     * const instagramAnalyticsPost = await prisma.instagramAnalyticsPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstagramAnalyticsPostUpdateManyArgs>(args: SelectSubset<T, InstagramAnalyticsPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstagramAnalyticsPosts and returns the data updated in the database.
     * @param {InstagramAnalyticsPostUpdateManyAndReturnArgs} args - Arguments to update many InstagramAnalyticsPosts.
     * @example
     * // Update many InstagramAnalyticsPosts
     * const instagramAnalyticsPost = await prisma.instagramAnalyticsPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InstagramAnalyticsPosts and only return the `id`
     * const instagramAnalyticsPostWithIdOnly = await prisma.instagramAnalyticsPost.updateManyAndReturn({
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
    updateManyAndReturn<T extends InstagramAnalyticsPostUpdateManyAndReturnArgs>(args: SelectSubset<T, InstagramAnalyticsPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstagramAnalyticsPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InstagramAnalyticsPost.
     * @param {InstagramAnalyticsPostUpsertArgs} args - Arguments to update or create a InstagramAnalyticsPost.
     * @example
     * // Update or create a InstagramAnalyticsPost
     * const instagramAnalyticsPost = await prisma.instagramAnalyticsPost.upsert({
     *   create: {
     *     // ... data to create a InstagramAnalyticsPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InstagramAnalyticsPost we want to update
     *   }
     * })
     */
    upsert<T extends InstagramAnalyticsPostUpsertArgs>(args: SelectSubset<T, InstagramAnalyticsPostUpsertArgs<ExtArgs>>): Prisma__InstagramAnalyticsPostClient<$Result.GetResult<Prisma.$InstagramAnalyticsPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InstagramAnalyticsPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstagramAnalyticsPostCountArgs} args - Arguments to filter InstagramAnalyticsPosts to count.
     * @example
     * // Count the number of InstagramAnalyticsPosts
     * const count = await prisma.instagramAnalyticsPost.count({
     *   where: {
     *     // ... the filter for the InstagramAnalyticsPosts we want to count
     *   }
     * })
    **/
    count<T extends InstagramAnalyticsPostCountArgs>(
      args?: Subset<T, InstagramAnalyticsPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstagramAnalyticsPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InstagramAnalyticsPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstagramAnalyticsPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstagramAnalyticsPostAggregateArgs>(args: Subset<T, InstagramAnalyticsPostAggregateArgs>): Prisma.PrismaPromise<GetInstagramAnalyticsPostAggregateType<T>>

    /**
     * Group by InstagramAnalyticsPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstagramAnalyticsPostGroupByArgs} args - Group by arguments.
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
      T extends InstagramAnalyticsPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstagramAnalyticsPostGroupByArgs['orderBy'] }
        : { orderBy?: InstagramAnalyticsPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstagramAnalyticsPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstagramAnalyticsPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InstagramAnalyticsPost model
   */
  readonly fields: InstagramAnalyticsPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InstagramAnalyticsPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstagramAnalyticsPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    generalAnalytics<T extends GeneralAnalyticsDataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GeneralAnalyticsDataDefaultArgs<ExtArgs>>): Prisma__GeneralAnalyticsDataClient<$Result.GetResult<Prisma.$GeneralAnalyticsDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InstagramAnalyticsPost model
   */
  interface InstagramAnalyticsPostFieldRefs {
    readonly id: FieldRef<"InstagramAnalyticsPost", 'Int'>
    readonly postId: FieldRef<"InstagramAnalyticsPost", 'String'>
    readonly postContent: FieldRef<"InstagramAnalyticsPost", 'String'>
    readonly postType: FieldRef<"InstagramAnalyticsPost", 'String'>
    readonly likeCount: FieldRef<"InstagramAnalyticsPost", 'Int'>
    readonly commentCount: FieldRef<"InstagramAnalyticsPost", 'Int'>
    readonly saveCount: FieldRef<"InstagramAnalyticsPost", 'Int'>
    readonly reach: FieldRef<"InstagramAnalyticsPost", 'Int'>
    readonly impressions: FieldRef<"InstagramAnalyticsPost", 'Int'>
    readonly engagementRate: FieldRef<"InstagramAnalyticsPost", 'Float'>
    readonly videoViews: FieldRef<"InstagramAnalyticsPost", 'Int'>
    readonly createdAt: FieldRef<"InstagramAnalyticsPost", 'DateTime'>
    readonly updatedAt: FieldRef<"InstagramAnalyticsPost", 'DateTime'>
    readonly generalAnalyticsId: FieldRef<"InstagramAnalyticsPost", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * InstagramAnalyticsPost findUnique
   */
  export type InstagramAnalyticsPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstagramAnalyticsPost
     */
    select?: InstagramAnalyticsPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstagramAnalyticsPost
     */
    omit?: InstagramAnalyticsPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstagramAnalyticsPostInclude<ExtArgs> | null
    /**
     * Filter, which InstagramAnalyticsPost to fetch.
     */
    where: InstagramAnalyticsPostWhereUniqueInput
  }

  /**
   * InstagramAnalyticsPost findUniqueOrThrow
   */
  export type InstagramAnalyticsPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstagramAnalyticsPost
     */
    select?: InstagramAnalyticsPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstagramAnalyticsPost
     */
    omit?: InstagramAnalyticsPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstagramAnalyticsPostInclude<ExtArgs> | null
    /**
     * Filter, which InstagramAnalyticsPost to fetch.
     */
    where: InstagramAnalyticsPostWhereUniqueInput
  }

  /**
   * InstagramAnalyticsPost findFirst
   */
  export type InstagramAnalyticsPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstagramAnalyticsPost
     */
    select?: InstagramAnalyticsPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstagramAnalyticsPost
     */
    omit?: InstagramAnalyticsPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstagramAnalyticsPostInclude<ExtArgs> | null
    /**
     * Filter, which InstagramAnalyticsPost to fetch.
     */
    where?: InstagramAnalyticsPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstagramAnalyticsPosts to fetch.
     */
    orderBy?: InstagramAnalyticsPostOrderByWithRelationInput | InstagramAnalyticsPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstagramAnalyticsPosts.
     */
    cursor?: InstagramAnalyticsPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstagramAnalyticsPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstagramAnalyticsPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstagramAnalyticsPosts.
     */
    distinct?: InstagramAnalyticsPostScalarFieldEnum | InstagramAnalyticsPostScalarFieldEnum[]
  }

  /**
   * InstagramAnalyticsPost findFirstOrThrow
   */
  export type InstagramAnalyticsPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstagramAnalyticsPost
     */
    select?: InstagramAnalyticsPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstagramAnalyticsPost
     */
    omit?: InstagramAnalyticsPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstagramAnalyticsPostInclude<ExtArgs> | null
    /**
     * Filter, which InstagramAnalyticsPost to fetch.
     */
    where?: InstagramAnalyticsPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstagramAnalyticsPosts to fetch.
     */
    orderBy?: InstagramAnalyticsPostOrderByWithRelationInput | InstagramAnalyticsPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstagramAnalyticsPosts.
     */
    cursor?: InstagramAnalyticsPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstagramAnalyticsPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstagramAnalyticsPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstagramAnalyticsPosts.
     */
    distinct?: InstagramAnalyticsPostScalarFieldEnum | InstagramAnalyticsPostScalarFieldEnum[]
  }

  /**
   * InstagramAnalyticsPost findMany
   */
  export type InstagramAnalyticsPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstagramAnalyticsPost
     */
    select?: InstagramAnalyticsPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstagramAnalyticsPost
     */
    omit?: InstagramAnalyticsPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstagramAnalyticsPostInclude<ExtArgs> | null
    /**
     * Filter, which InstagramAnalyticsPosts to fetch.
     */
    where?: InstagramAnalyticsPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstagramAnalyticsPosts to fetch.
     */
    orderBy?: InstagramAnalyticsPostOrderByWithRelationInput | InstagramAnalyticsPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InstagramAnalyticsPosts.
     */
    cursor?: InstagramAnalyticsPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstagramAnalyticsPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstagramAnalyticsPosts.
     */
    skip?: number
    distinct?: InstagramAnalyticsPostScalarFieldEnum | InstagramAnalyticsPostScalarFieldEnum[]
  }

  /**
   * InstagramAnalyticsPost create
   */
  export type InstagramAnalyticsPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstagramAnalyticsPost
     */
    select?: InstagramAnalyticsPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstagramAnalyticsPost
     */
    omit?: InstagramAnalyticsPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstagramAnalyticsPostInclude<ExtArgs> | null
    /**
     * The data needed to create a InstagramAnalyticsPost.
     */
    data: XOR<InstagramAnalyticsPostCreateInput, InstagramAnalyticsPostUncheckedCreateInput>
  }

  /**
   * InstagramAnalyticsPost createMany
   */
  export type InstagramAnalyticsPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InstagramAnalyticsPosts.
     */
    data: InstagramAnalyticsPostCreateManyInput | InstagramAnalyticsPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InstagramAnalyticsPost createManyAndReturn
   */
  export type InstagramAnalyticsPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstagramAnalyticsPost
     */
    select?: InstagramAnalyticsPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstagramAnalyticsPost
     */
    omit?: InstagramAnalyticsPostOmit<ExtArgs> | null
    /**
     * The data used to create many InstagramAnalyticsPosts.
     */
    data: InstagramAnalyticsPostCreateManyInput | InstagramAnalyticsPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstagramAnalyticsPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InstagramAnalyticsPost update
   */
  export type InstagramAnalyticsPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstagramAnalyticsPost
     */
    select?: InstagramAnalyticsPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstagramAnalyticsPost
     */
    omit?: InstagramAnalyticsPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstagramAnalyticsPostInclude<ExtArgs> | null
    /**
     * The data needed to update a InstagramAnalyticsPost.
     */
    data: XOR<InstagramAnalyticsPostUpdateInput, InstagramAnalyticsPostUncheckedUpdateInput>
    /**
     * Choose, which InstagramAnalyticsPost to update.
     */
    where: InstagramAnalyticsPostWhereUniqueInput
  }

  /**
   * InstagramAnalyticsPost updateMany
   */
  export type InstagramAnalyticsPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InstagramAnalyticsPosts.
     */
    data: XOR<InstagramAnalyticsPostUpdateManyMutationInput, InstagramAnalyticsPostUncheckedUpdateManyInput>
    /**
     * Filter which InstagramAnalyticsPosts to update
     */
    where?: InstagramAnalyticsPostWhereInput
    /**
     * Limit how many InstagramAnalyticsPosts to update.
     */
    limit?: number
  }

  /**
   * InstagramAnalyticsPost updateManyAndReturn
   */
  export type InstagramAnalyticsPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstagramAnalyticsPost
     */
    select?: InstagramAnalyticsPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstagramAnalyticsPost
     */
    omit?: InstagramAnalyticsPostOmit<ExtArgs> | null
    /**
     * The data used to update InstagramAnalyticsPosts.
     */
    data: XOR<InstagramAnalyticsPostUpdateManyMutationInput, InstagramAnalyticsPostUncheckedUpdateManyInput>
    /**
     * Filter which InstagramAnalyticsPosts to update
     */
    where?: InstagramAnalyticsPostWhereInput
    /**
     * Limit how many InstagramAnalyticsPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstagramAnalyticsPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InstagramAnalyticsPost upsert
   */
  export type InstagramAnalyticsPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstagramAnalyticsPost
     */
    select?: InstagramAnalyticsPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstagramAnalyticsPost
     */
    omit?: InstagramAnalyticsPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstagramAnalyticsPostInclude<ExtArgs> | null
    /**
     * The filter to search for the InstagramAnalyticsPost to update in case it exists.
     */
    where: InstagramAnalyticsPostWhereUniqueInput
    /**
     * In case the InstagramAnalyticsPost found by the `where` argument doesn't exist, create a new InstagramAnalyticsPost with this data.
     */
    create: XOR<InstagramAnalyticsPostCreateInput, InstagramAnalyticsPostUncheckedCreateInput>
    /**
     * In case the InstagramAnalyticsPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstagramAnalyticsPostUpdateInput, InstagramAnalyticsPostUncheckedUpdateInput>
  }

  /**
   * InstagramAnalyticsPost delete
   */
  export type InstagramAnalyticsPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstagramAnalyticsPost
     */
    select?: InstagramAnalyticsPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstagramAnalyticsPost
     */
    omit?: InstagramAnalyticsPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstagramAnalyticsPostInclude<ExtArgs> | null
    /**
     * Filter which InstagramAnalyticsPost to delete.
     */
    where: InstagramAnalyticsPostWhereUniqueInput
  }

  /**
   * InstagramAnalyticsPost deleteMany
   */
  export type InstagramAnalyticsPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstagramAnalyticsPosts to delete
     */
    where?: InstagramAnalyticsPostWhereInput
    /**
     * Limit how many InstagramAnalyticsPosts to delete.
     */
    limit?: number
  }

  /**
   * InstagramAnalyticsPost without action
   */
  export type InstagramAnalyticsPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstagramAnalyticsPost
     */
    select?: InstagramAnalyticsPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstagramAnalyticsPost
     */
    omit?: InstagramAnalyticsPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstagramAnalyticsPostInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    registeredAt: 'registeredAt',
    isEmailVerified: 'isEmailVerified'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ConfirmationCodeScalarFieldEnum: {
    code: 'code',
    expiresAt: 'expiresAt',
    userId: 'userId'
  };

  export type ConfirmationCodeScalarFieldEnum = (typeof ConfirmationCodeScalarFieldEnum)[keyof typeof ConfirmationCodeScalarFieldEnum]


  export const SocialNetworkScalarFieldEnum: {
    id: 'id',
    name: 'name',
    profileUrlFormat: 'profileUrlFormat'
  };

  export type SocialNetworkScalarFieldEnum = (typeof SocialNetworkScalarFieldEnum)[keyof typeof SocialNetworkScalarFieldEnum]


  export const SocialAccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    socialNetworkId: 'socialNetworkId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    socialAccountId: 'socialAccountId',
    connectedAt: 'connectedAt'
  };

  export type SocialAccountScalarFieldEnum = (typeof SocialAccountScalarFieldEnum)[keyof typeof SocialAccountScalarFieldEnum]


  export const GeneralAnalyticsDataScalarFieldEnum: {
    id: 'id',
    metricCollectedAt: 'metricCollectedAt',
    dataType: 'dataType',
    lastUpdatedAt: 'lastUpdatedAt',
    socialAccountId: 'socialAccountId'
  };

  export type GeneralAnalyticsDataScalarFieldEnum = (typeof GeneralAnalyticsDataScalarFieldEnum)[keyof typeof GeneralAnalyticsDataScalarFieldEnum]


  export const FacebookAnalyticsPostScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    postContent: 'postContent',
    postType: 'postType',
    likeCount: 'likeCount',
    commentCount: 'commentCount',
    shareCount: 'shareCount',
    coverageOrganic: 'coverageOrganic',
    coveragePaid: 'coveragePaid',
    postClickCount: 'postClickCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    generalAnalyticsId: 'generalAnalyticsId'
  };

  export type FacebookAnalyticsPostScalarFieldEnum = (typeof FacebookAnalyticsPostScalarFieldEnum)[keyof typeof FacebookAnalyticsPostScalarFieldEnum]


  export const TwitterAnalyticsTweetScalarFieldEnum: {
    id: 'id',
    tweetId: 'tweetId',
    tweetContent: 'tweetContent',
    retweetsCount: 'retweetsCount',
    quoteCount: 'quoteCount',
    likeCount: 'likeCount',
    commentCount: 'commentCount',
    viewCount: 'viewCount',
    hashtags: 'hashtags',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    generalAnalyticsId: 'generalAnalyticsId'
  };

  export type TwitterAnalyticsTweetScalarFieldEnum = (typeof TwitterAnalyticsTweetScalarFieldEnum)[keyof typeof TwitterAnalyticsTweetScalarFieldEnum]


  export const InstagramAnalyticsPostScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    postContent: 'postContent',
    postType: 'postType',
    likeCount: 'likeCount',
    commentCount: 'commentCount',
    saveCount: 'saveCount',
    reach: 'reach',
    impressions: 'impressions',
    engagementRate: 'engagementRate',
    videoViews: 'videoViews',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    generalAnalyticsId: 'generalAnalyticsId'
  };

  export type InstagramAnalyticsPostScalarFieldEnum = (typeof InstagramAnalyticsPostScalarFieldEnum)[keyof typeof InstagramAnalyticsPostScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    registeredAt?: DateTimeFilter<"User"> | Date | string
    isEmailVerified?: BoolFilter<"User"> | boolean
    confirmationCode?: XOR<ConfirmationCodeNullableScalarRelationFilter, ConfirmationCodeWhereInput> | null
    socialAccounts?: SocialAccountListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    registeredAt?: SortOrder
    isEmailVerified?: SortOrder
    confirmationCode?: ConfirmationCodeOrderByWithRelationInput
    socialAccounts?: SocialAccountOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    registeredAt?: DateTimeFilter<"User"> | Date | string
    isEmailVerified?: BoolFilter<"User"> | boolean
    confirmationCode?: XOR<ConfirmationCodeNullableScalarRelationFilter, ConfirmationCodeWhereInput> | null
    socialAccounts?: SocialAccountListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    registeredAt?: SortOrder
    isEmailVerified?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    registeredAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type ConfirmationCodeWhereInput = {
    AND?: ConfirmationCodeWhereInput | ConfirmationCodeWhereInput[]
    OR?: ConfirmationCodeWhereInput[]
    NOT?: ConfirmationCodeWhereInput | ConfirmationCodeWhereInput[]
    code?: StringFilter<"ConfirmationCode"> | string
    expiresAt?: DateTimeFilter<"ConfirmationCode"> | Date | string
    userId?: IntFilter<"ConfirmationCode"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ConfirmationCodeOrderByWithRelationInput = {
    code?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ConfirmationCodeWhereUniqueInput = Prisma.AtLeast<{
    code?: string
    userId?: number
    AND?: ConfirmationCodeWhereInput | ConfirmationCodeWhereInput[]
    OR?: ConfirmationCodeWhereInput[]
    NOT?: ConfirmationCodeWhereInput | ConfirmationCodeWhereInput[]
    expiresAt?: DateTimeFilter<"ConfirmationCode"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "code" | "userId">

  export type ConfirmationCodeOrderByWithAggregationInput = {
    code?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    _count?: ConfirmationCodeCountOrderByAggregateInput
    _avg?: ConfirmationCodeAvgOrderByAggregateInput
    _max?: ConfirmationCodeMaxOrderByAggregateInput
    _min?: ConfirmationCodeMinOrderByAggregateInput
    _sum?: ConfirmationCodeSumOrderByAggregateInput
  }

  export type ConfirmationCodeScalarWhereWithAggregatesInput = {
    AND?: ConfirmationCodeScalarWhereWithAggregatesInput | ConfirmationCodeScalarWhereWithAggregatesInput[]
    OR?: ConfirmationCodeScalarWhereWithAggregatesInput[]
    NOT?: ConfirmationCodeScalarWhereWithAggregatesInput | ConfirmationCodeScalarWhereWithAggregatesInput[]
    code?: StringWithAggregatesFilter<"ConfirmationCode"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"ConfirmationCode"> | Date | string
    userId?: IntWithAggregatesFilter<"ConfirmationCode"> | number
  }

  export type SocialNetworkWhereInput = {
    AND?: SocialNetworkWhereInput | SocialNetworkWhereInput[]
    OR?: SocialNetworkWhereInput[]
    NOT?: SocialNetworkWhereInput | SocialNetworkWhereInput[]
    id?: IntFilter<"SocialNetwork"> | number
    name?: StringFilter<"SocialNetwork"> | string
    profileUrlFormat?: StringNullableFilter<"SocialNetwork"> | string | null
    socialAccounts?: SocialAccountListRelationFilter
  }

  export type SocialNetworkOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    profileUrlFormat?: SortOrderInput | SortOrder
    socialAccounts?: SocialAccountOrderByRelationAggregateInput
  }

  export type SocialNetworkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SocialNetworkWhereInput | SocialNetworkWhereInput[]
    OR?: SocialNetworkWhereInput[]
    NOT?: SocialNetworkWhereInput | SocialNetworkWhereInput[]
    profileUrlFormat?: StringNullableFilter<"SocialNetwork"> | string | null
    socialAccounts?: SocialAccountListRelationFilter
  }, "id" | "name">

  export type SocialNetworkOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    profileUrlFormat?: SortOrderInput | SortOrder
    _count?: SocialNetworkCountOrderByAggregateInput
    _avg?: SocialNetworkAvgOrderByAggregateInput
    _max?: SocialNetworkMaxOrderByAggregateInput
    _min?: SocialNetworkMinOrderByAggregateInput
    _sum?: SocialNetworkSumOrderByAggregateInput
  }

  export type SocialNetworkScalarWhereWithAggregatesInput = {
    AND?: SocialNetworkScalarWhereWithAggregatesInput | SocialNetworkScalarWhereWithAggregatesInput[]
    OR?: SocialNetworkScalarWhereWithAggregatesInput[]
    NOT?: SocialNetworkScalarWhereWithAggregatesInput | SocialNetworkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SocialNetwork"> | number
    name?: StringWithAggregatesFilter<"SocialNetwork"> | string
    profileUrlFormat?: StringNullableWithAggregatesFilter<"SocialNetwork"> | string | null
  }

  export type SocialAccountWhereInput = {
    AND?: SocialAccountWhereInput | SocialAccountWhereInput[]
    OR?: SocialAccountWhereInput[]
    NOT?: SocialAccountWhereInput | SocialAccountWhereInput[]
    id?: IntFilter<"SocialAccount"> | number
    userId?: IntFilter<"SocialAccount"> | number
    socialNetworkId?: IntFilter<"SocialAccount"> | number
    accessToken?: StringFilter<"SocialAccount"> | string
    refreshToken?: StringNullableFilter<"SocialAccount"> | string | null
    socialAccountId?: StringFilter<"SocialAccount"> | string
    connectedAt?: DateTimeFilter<"SocialAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    socialNetwork?: XOR<SocialNetworkScalarRelationFilter, SocialNetworkWhereInput>
    generalAnalytics?: GeneralAnalyticsDataListRelationFilter
  }

  export type SocialAccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    socialNetworkId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    socialAccountId?: SortOrder
    connectedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    socialNetwork?: SocialNetworkOrderByWithRelationInput
    generalAnalytics?: GeneralAnalyticsDataOrderByRelationAggregateInput
  }

  export type SocialAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_socialNetworkId?: SocialAccountUserIdSocialNetworkIdCompoundUniqueInput
    AND?: SocialAccountWhereInput | SocialAccountWhereInput[]
    OR?: SocialAccountWhereInput[]
    NOT?: SocialAccountWhereInput | SocialAccountWhereInput[]
    userId?: IntFilter<"SocialAccount"> | number
    socialNetworkId?: IntFilter<"SocialAccount"> | number
    accessToken?: StringFilter<"SocialAccount"> | string
    refreshToken?: StringNullableFilter<"SocialAccount"> | string | null
    socialAccountId?: StringFilter<"SocialAccount"> | string
    connectedAt?: DateTimeFilter<"SocialAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    socialNetwork?: XOR<SocialNetworkScalarRelationFilter, SocialNetworkWhereInput>
    generalAnalytics?: GeneralAnalyticsDataListRelationFilter
  }, "id" | "userId_socialNetworkId">

  export type SocialAccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    socialNetworkId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    socialAccountId?: SortOrder
    connectedAt?: SortOrder
    _count?: SocialAccountCountOrderByAggregateInput
    _avg?: SocialAccountAvgOrderByAggregateInput
    _max?: SocialAccountMaxOrderByAggregateInput
    _min?: SocialAccountMinOrderByAggregateInput
    _sum?: SocialAccountSumOrderByAggregateInput
  }

  export type SocialAccountScalarWhereWithAggregatesInput = {
    AND?: SocialAccountScalarWhereWithAggregatesInput | SocialAccountScalarWhereWithAggregatesInput[]
    OR?: SocialAccountScalarWhereWithAggregatesInput[]
    NOT?: SocialAccountScalarWhereWithAggregatesInput | SocialAccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SocialAccount"> | number
    userId?: IntWithAggregatesFilter<"SocialAccount"> | number
    socialNetworkId?: IntWithAggregatesFilter<"SocialAccount"> | number
    accessToken?: StringWithAggregatesFilter<"SocialAccount"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"SocialAccount"> | string | null
    socialAccountId?: StringWithAggregatesFilter<"SocialAccount"> | string
    connectedAt?: DateTimeWithAggregatesFilter<"SocialAccount"> | Date | string
  }

  export type GeneralAnalyticsDataWhereInput = {
    AND?: GeneralAnalyticsDataWhereInput | GeneralAnalyticsDataWhereInput[]
    OR?: GeneralAnalyticsDataWhereInput[]
    NOT?: GeneralAnalyticsDataWhereInput | GeneralAnalyticsDataWhereInput[]
    id?: IntFilter<"GeneralAnalyticsData"> | number
    metricCollectedAt?: DateTimeFilter<"GeneralAnalyticsData"> | Date | string
    dataType?: StringFilter<"GeneralAnalyticsData"> | string
    lastUpdatedAt?: DateTimeFilter<"GeneralAnalyticsData"> | Date | string
    socialAccountId?: IntFilter<"GeneralAnalyticsData"> | number
    socialAccount?: XOR<SocialAccountScalarRelationFilter, SocialAccountWhereInput>
    facebookAnalyticsPost?: XOR<FacebookAnalyticsPostNullableScalarRelationFilter, FacebookAnalyticsPostWhereInput> | null
    twitterAnalyticsTweet?: XOR<TwitterAnalyticsTweetNullableScalarRelationFilter, TwitterAnalyticsTweetWhereInput> | null
    instagramAnalyticsPost?: XOR<InstagramAnalyticsPostNullableScalarRelationFilter, InstagramAnalyticsPostWhereInput> | null
  }

  export type GeneralAnalyticsDataOrderByWithRelationInput = {
    id?: SortOrder
    metricCollectedAt?: SortOrder
    dataType?: SortOrder
    lastUpdatedAt?: SortOrder
    socialAccountId?: SortOrder
    socialAccount?: SocialAccountOrderByWithRelationInput
    facebookAnalyticsPost?: FacebookAnalyticsPostOrderByWithRelationInput
    twitterAnalyticsTweet?: TwitterAnalyticsTweetOrderByWithRelationInput
    instagramAnalyticsPost?: InstagramAnalyticsPostOrderByWithRelationInput
  }

  export type GeneralAnalyticsDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GeneralAnalyticsDataWhereInput | GeneralAnalyticsDataWhereInput[]
    OR?: GeneralAnalyticsDataWhereInput[]
    NOT?: GeneralAnalyticsDataWhereInput | GeneralAnalyticsDataWhereInput[]
    metricCollectedAt?: DateTimeFilter<"GeneralAnalyticsData"> | Date | string
    dataType?: StringFilter<"GeneralAnalyticsData"> | string
    lastUpdatedAt?: DateTimeFilter<"GeneralAnalyticsData"> | Date | string
    socialAccountId?: IntFilter<"GeneralAnalyticsData"> | number
    socialAccount?: XOR<SocialAccountScalarRelationFilter, SocialAccountWhereInput>
    facebookAnalyticsPost?: XOR<FacebookAnalyticsPostNullableScalarRelationFilter, FacebookAnalyticsPostWhereInput> | null
    twitterAnalyticsTweet?: XOR<TwitterAnalyticsTweetNullableScalarRelationFilter, TwitterAnalyticsTweetWhereInput> | null
    instagramAnalyticsPost?: XOR<InstagramAnalyticsPostNullableScalarRelationFilter, InstagramAnalyticsPostWhereInput> | null
  }, "id">

  export type GeneralAnalyticsDataOrderByWithAggregationInput = {
    id?: SortOrder
    metricCollectedAt?: SortOrder
    dataType?: SortOrder
    lastUpdatedAt?: SortOrder
    socialAccountId?: SortOrder
    _count?: GeneralAnalyticsDataCountOrderByAggregateInput
    _avg?: GeneralAnalyticsDataAvgOrderByAggregateInput
    _max?: GeneralAnalyticsDataMaxOrderByAggregateInput
    _min?: GeneralAnalyticsDataMinOrderByAggregateInput
    _sum?: GeneralAnalyticsDataSumOrderByAggregateInput
  }

  export type GeneralAnalyticsDataScalarWhereWithAggregatesInput = {
    AND?: GeneralAnalyticsDataScalarWhereWithAggregatesInput | GeneralAnalyticsDataScalarWhereWithAggregatesInput[]
    OR?: GeneralAnalyticsDataScalarWhereWithAggregatesInput[]
    NOT?: GeneralAnalyticsDataScalarWhereWithAggregatesInput | GeneralAnalyticsDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GeneralAnalyticsData"> | number
    metricCollectedAt?: DateTimeWithAggregatesFilter<"GeneralAnalyticsData"> | Date | string
    dataType?: StringWithAggregatesFilter<"GeneralAnalyticsData"> | string
    lastUpdatedAt?: DateTimeWithAggregatesFilter<"GeneralAnalyticsData"> | Date | string
    socialAccountId?: IntWithAggregatesFilter<"GeneralAnalyticsData"> | number
  }

  export type FacebookAnalyticsPostWhereInput = {
    AND?: FacebookAnalyticsPostWhereInput | FacebookAnalyticsPostWhereInput[]
    OR?: FacebookAnalyticsPostWhereInput[]
    NOT?: FacebookAnalyticsPostWhereInput | FacebookAnalyticsPostWhereInput[]
    id?: IntFilter<"FacebookAnalyticsPost"> | number
    postId?: StringFilter<"FacebookAnalyticsPost"> | string
    postContent?: StringNullableFilter<"FacebookAnalyticsPost"> | string | null
    postType?: StringNullableFilter<"FacebookAnalyticsPost"> | string | null
    likeCount?: IntFilter<"FacebookAnalyticsPost"> | number
    commentCount?: IntFilter<"FacebookAnalyticsPost"> | number
    shareCount?: IntFilter<"FacebookAnalyticsPost"> | number
    coverageOrganic?: IntNullableFilter<"FacebookAnalyticsPost"> | number | null
    coveragePaid?: IntNullableFilter<"FacebookAnalyticsPost"> | number | null
    postClickCount?: IntNullableFilter<"FacebookAnalyticsPost"> | number | null
    createdAt?: DateTimeFilter<"FacebookAnalyticsPost"> | Date | string
    updatedAt?: DateTimeFilter<"FacebookAnalyticsPost"> | Date | string
    generalAnalyticsId?: IntFilter<"FacebookAnalyticsPost"> | number
    generalAnalytics?: XOR<GeneralAnalyticsDataScalarRelationFilter, GeneralAnalyticsDataWhereInput>
  }

  export type FacebookAnalyticsPostOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    postContent?: SortOrderInput | SortOrder
    postType?: SortOrderInput | SortOrder
    likeCount?: SortOrder
    commentCount?: SortOrder
    shareCount?: SortOrder
    coverageOrganic?: SortOrderInput | SortOrder
    coveragePaid?: SortOrderInput | SortOrder
    postClickCount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    generalAnalyticsId?: SortOrder
    generalAnalytics?: GeneralAnalyticsDataOrderByWithRelationInput
  }

  export type FacebookAnalyticsPostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    postId?: string
    generalAnalyticsId?: number
    AND?: FacebookAnalyticsPostWhereInput | FacebookAnalyticsPostWhereInput[]
    OR?: FacebookAnalyticsPostWhereInput[]
    NOT?: FacebookAnalyticsPostWhereInput | FacebookAnalyticsPostWhereInput[]
    postContent?: StringNullableFilter<"FacebookAnalyticsPost"> | string | null
    postType?: StringNullableFilter<"FacebookAnalyticsPost"> | string | null
    likeCount?: IntFilter<"FacebookAnalyticsPost"> | number
    commentCount?: IntFilter<"FacebookAnalyticsPost"> | number
    shareCount?: IntFilter<"FacebookAnalyticsPost"> | number
    coverageOrganic?: IntNullableFilter<"FacebookAnalyticsPost"> | number | null
    coveragePaid?: IntNullableFilter<"FacebookAnalyticsPost"> | number | null
    postClickCount?: IntNullableFilter<"FacebookAnalyticsPost"> | number | null
    createdAt?: DateTimeFilter<"FacebookAnalyticsPost"> | Date | string
    updatedAt?: DateTimeFilter<"FacebookAnalyticsPost"> | Date | string
    generalAnalytics?: XOR<GeneralAnalyticsDataScalarRelationFilter, GeneralAnalyticsDataWhereInput>
  }, "id" | "postId" | "generalAnalyticsId">

  export type FacebookAnalyticsPostOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    postContent?: SortOrderInput | SortOrder
    postType?: SortOrderInput | SortOrder
    likeCount?: SortOrder
    commentCount?: SortOrder
    shareCount?: SortOrder
    coverageOrganic?: SortOrderInput | SortOrder
    coveragePaid?: SortOrderInput | SortOrder
    postClickCount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    generalAnalyticsId?: SortOrder
    _count?: FacebookAnalyticsPostCountOrderByAggregateInput
    _avg?: FacebookAnalyticsPostAvgOrderByAggregateInput
    _max?: FacebookAnalyticsPostMaxOrderByAggregateInput
    _min?: FacebookAnalyticsPostMinOrderByAggregateInput
    _sum?: FacebookAnalyticsPostSumOrderByAggregateInput
  }

  export type FacebookAnalyticsPostScalarWhereWithAggregatesInput = {
    AND?: FacebookAnalyticsPostScalarWhereWithAggregatesInput | FacebookAnalyticsPostScalarWhereWithAggregatesInput[]
    OR?: FacebookAnalyticsPostScalarWhereWithAggregatesInput[]
    NOT?: FacebookAnalyticsPostScalarWhereWithAggregatesInput | FacebookAnalyticsPostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FacebookAnalyticsPost"> | number
    postId?: StringWithAggregatesFilter<"FacebookAnalyticsPost"> | string
    postContent?: StringNullableWithAggregatesFilter<"FacebookAnalyticsPost"> | string | null
    postType?: StringNullableWithAggregatesFilter<"FacebookAnalyticsPost"> | string | null
    likeCount?: IntWithAggregatesFilter<"FacebookAnalyticsPost"> | number
    commentCount?: IntWithAggregatesFilter<"FacebookAnalyticsPost"> | number
    shareCount?: IntWithAggregatesFilter<"FacebookAnalyticsPost"> | number
    coverageOrganic?: IntNullableWithAggregatesFilter<"FacebookAnalyticsPost"> | number | null
    coveragePaid?: IntNullableWithAggregatesFilter<"FacebookAnalyticsPost"> | number | null
    postClickCount?: IntNullableWithAggregatesFilter<"FacebookAnalyticsPost"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"FacebookAnalyticsPost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FacebookAnalyticsPost"> | Date | string
    generalAnalyticsId?: IntWithAggregatesFilter<"FacebookAnalyticsPost"> | number
  }

  export type TwitterAnalyticsTweetWhereInput = {
    AND?: TwitterAnalyticsTweetWhereInput | TwitterAnalyticsTweetWhereInput[]
    OR?: TwitterAnalyticsTweetWhereInput[]
    NOT?: TwitterAnalyticsTweetWhereInput | TwitterAnalyticsTweetWhereInput[]
    id?: IntFilter<"TwitterAnalyticsTweet"> | number
    tweetId?: StringFilter<"TwitterAnalyticsTweet"> | string
    tweetContent?: StringNullableFilter<"TwitterAnalyticsTweet"> | string | null
    retweetsCount?: IntFilter<"TwitterAnalyticsTweet"> | number
    quoteCount?: IntFilter<"TwitterAnalyticsTweet"> | number
    likeCount?: IntFilter<"TwitterAnalyticsTweet"> | number
    commentCount?: IntFilter<"TwitterAnalyticsTweet"> | number
    viewCount?: IntNullableFilter<"TwitterAnalyticsTweet"> | number | null
    hashtags?: StringNullableListFilter<"TwitterAnalyticsTweet">
    createdAt?: DateTimeFilter<"TwitterAnalyticsTweet"> | Date | string
    updatedAt?: DateTimeFilter<"TwitterAnalyticsTweet"> | Date | string
    generalAnalyticsId?: IntFilter<"TwitterAnalyticsTweet"> | number
    generalAnalytics?: XOR<GeneralAnalyticsDataScalarRelationFilter, GeneralAnalyticsDataWhereInput>
  }

  export type TwitterAnalyticsTweetOrderByWithRelationInput = {
    id?: SortOrder
    tweetId?: SortOrder
    tweetContent?: SortOrderInput | SortOrder
    retweetsCount?: SortOrder
    quoteCount?: SortOrder
    likeCount?: SortOrder
    commentCount?: SortOrder
    viewCount?: SortOrderInput | SortOrder
    hashtags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    generalAnalyticsId?: SortOrder
    generalAnalytics?: GeneralAnalyticsDataOrderByWithRelationInput
  }

  export type TwitterAnalyticsTweetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tweetId?: string
    generalAnalyticsId?: number
    AND?: TwitterAnalyticsTweetWhereInput | TwitterAnalyticsTweetWhereInput[]
    OR?: TwitterAnalyticsTweetWhereInput[]
    NOT?: TwitterAnalyticsTweetWhereInput | TwitterAnalyticsTweetWhereInput[]
    tweetContent?: StringNullableFilter<"TwitterAnalyticsTweet"> | string | null
    retweetsCount?: IntFilter<"TwitterAnalyticsTweet"> | number
    quoteCount?: IntFilter<"TwitterAnalyticsTweet"> | number
    likeCount?: IntFilter<"TwitterAnalyticsTweet"> | number
    commentCount?: IntFilter<"TwitterAnalyticsTweet"> | number
    viewCount?: IntNullableFilter<"TwitterAnalyticsTweet"> | number | null
    hashtags?: StringNullableListFilter<"TwitterAnalyticsTweet">
    createdAt?: DateTimeFilter<"TwitterAnalyticsTweet"> | Date | string
    updatedAt?: DateTimeFilter<"TwitterAnalyticsTweet"> | Date | string
    generalAnalytics?: XOR<GeneralAnalyticsDataScalarRelationFilter, GeneralAnalyticsDataWhereInput>
  }, "id" | "tweetId" | "generalAnalyticsId">

  export type TwitterAnalyticsTweetOrderByWithAggregationInput = {
    id?: SortOrder
    tweetId?: SortOrder
    tweetContent?: SortOrderInput | SortOrder
    retweetsCount?: SortOrder
    quoteCount?: SortOrder
    likeCount?: SortOrder
    commentCount?: SortOrder
    viewCount?: SortOrderInput | SortOrder
    hashtags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    generalAnalyticsId?: SortOrder
    _count?: TwitterAnalyticsTweetCountOrderByAggregateInput
    _avg?: TwitterAnalyticsTweetAvgOrderByAggregateInput
    _max?: TwitterAnalyticsTweetMaxOrderByAggregateInput
    _min?: TwitterAnalyticsTweetMinOrderByAggregateInput
    _sum?: TwitterAnalyticsTweetSumOrderByAggregateInput
  }

  export type TwitterAnalyticsTweetScalarWhereWithAggregatesInput = {
    AND?: TwitterAnalyticsTweetScalarWhereWithAggregatesInput | TwitterAnalyticsTweetScalarWhereWithAggregatesInput[]
    OR?: TwitterAnalyticsTweetScalarWhereWithAggregatesInput[]
    NOT?: TwitterAnalyticsTweetScalarWhereWithAggregatesInput | TwitterAnalyticsTweetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TwitterAnalyticsTweet"> | number
    tweetId?: StringWithAggregatesFilter<"TwitterAnalyticsTweet"> | string
    tweetContent?: StringNullableWithAggregatesFilter<"TwitterAnalyticsTweet"> | string | null
    retweetsCount?: IntWithAggregatesFilter<"TwitterAnalyticsTweet"> | number
    quoteCount?: IntWithAggregatesFilter<"TwitterAnalyticsTweet"> | number
    likeCount?: IntWithAggregatesFilter<"TwitterAnalyticsTweet"> | number
    commentCount?: IntWithAggregatesFilter<"TwitterAnalyticsTweet"> | number
    viewCount?: IntNullableWithAggregatesFilter<"TwitterAnalyticsTweet"> | number | null
    hashtags?: StringNullableListFilter<"TwitterAnalyticsTweet">
    createdAt?: DateTimeWithAggregatesFilter<"TwitterAnalyticsTweet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TwitterAnalyticsTweet"> | Date | string
    generalAnalyticsId?: IntWithAggregatesFilter<"TwitterAnalyticsTweet"> | number
  }

  export type InstagramAnalyticsPostWhereInput = {
    AND?: InstagramAnalyticsPostWhereInput | InstagramAnalyticsPostWhereInput[]
    OR?: InstagramAnalyticsPostWhereInput[]
    NOT?: InstagramAnalyticsPostWhereInput | InstagramAnalyticsPostWhereInput[]
    id?: IntFilter<"InstagramAnalyticsPost"> | number
    postId?: StringFilter<"InstagramAnalyticsPost"> | string
    postContent?: StringNullableFilter<"InstagramAnalyticsPost"> | string | null
    postType?: StringNullableFilter<"InstagramAnalyticsPost"> | string | null
    likeCount?: IntFilter<"InstagramAnalyticsPost"> | number
    commentCount?: IntFilter<"InstagramAnalyticsPost"> | number
    saveCount?: IntNullableFilter<"InstagramAnalyticsPost"> | number | null
    reach?: IntNullableFilter<"InstagramAnalyticsPost"> | number | null
    impressions?: IntNullableFilter<"InstagramAnalyticsPost"> | number | null
    engagementRate?: FloatNullableFilter<"InstagramAnalyticsPost"> | number | null
    videoViews?: IntNullableFilter<"InstagramAnalyticsPost"> | number | null
    createdAt?: DateTimeFilter<"InstagramAnalyticsPost"> | Date | string
    updatedAt?: DateTimeFilter<"InstagramAnalyticsPost"> | Date | string
    generalAnalyticsId?: IntFilter<"InstagramAnalyticsPost"> | number
    generalAnalytics?: XOR<GeneralAnalyticsDataScalarRelationFilter, GeneralAnalyticsDataWhereInput>
  }

  export type InstagramAnalyticsPostOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    postContent?: SortOrderInput | SortOrder
    postType?: SortOrderInput | SortOrder
    likeCount?: SortOrder
    commentCount?: SortOrder
    saveCount?: SortOrderInput | SortOrder
    reach?: SortOrderInput | SortOrder
    impressions?: SortOrderInput | SortOrder
    engagementRate?: SortOrderInput | SortOrder
    videoViews?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    generalAnalyticsId?: SortOrder
    generalAnalytics?: GeneralAnalyticsDataOrderByWithRelationInput
  }

  export type InstagramAnalyticsPostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    postId?: string
    generalAnalyticsId?: number
    AND?: InstagramAnalyticsPostWhereInput | InstagramAnalyticsPostWhereInput[]
    OR?: InstagramAnalyticsPostWhereInput[]
    NOT?: InstagramAnalyticsPostWhereInput | InstagramAnalyticsPostWhereInput[]
    postContent?: StringNullableFilter<"InstagramAnalyticsPost"> | string | null
    postType?: StringNullableFilter<"InstagramAnalyticsPost"> | string | null
    likeCount?: IntFilter<"InstagramAnalyticsPost"> | number
    commentCount?: IntFilter<"InstagramAnalyticsPost"> | number
    saveCount?: IntNullableFilter<"InstagramAnalyticsPost"> | number | null
    reach?: IntNullableFilter<"InstagramAnalyticsPost"> | number | null
    impressions?: IntNullableFilter<"InstagramAnalyticsPost"> | number | null
    engagementRate?: FloatNullableFilter<"InstagramAnalyticsPost"> | number | null
    videoViews?: IntNullableFilter<"InstagramAnalyticsPost"> | number | null
    createdAt?: DateTimeFilter<"InstagramAnalyticsPost"> | Date | string
    updatedAt?: DateTimeFilter<"InstagramAnalyticsPost"> | Date | string
    generalAnalytics?: XOR<GeneralAnalyticsDataScalarRelationFilter, GeneralAnalyticsDataWhereInput>
  }, "id" | "postId" | "generalAnalyticsId">

  export type InstagramAnalyticsPostOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    postContent?: SortOrderInput | SortOrder
    postType?: SortOrderInput | SortOrder
    likeCount?: SortOrder
    commentCount?: SortOrder
    saveCount?: SortOrderInput | SortOrder
    reach?: SortOrderInput | SortOrder
    impressions?: SortOrderInput | SortOrder
    engagementRate?: SortOrderInput | SortOrder
    videoViews?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    generalAnalyticsId?: SortOrder
    _count?: InstagramAnalyticsPostCountOrderByAggregateInput
    _avg?: InstagramAnalyticsPostAvgOrderByAggregateInput
    _max?: InstagramAnalyticsPostMaxOrderByAggregateInput
    _min?: InstagramAnalyticsPostMinOrderByAggregateInput
    _sum?: InstagramAnalyticsPostSumOrderByAggregateInput
  }

  export type InstagramAnalyticsPostScalarWhereWithAggregatesInput = {
    AND?: InstagramAnalyticsPostScalarWhereWithAggregatesInput | InstagramAnalyticsPostScalarWhereWithAggregatesInput[]
    OR?: InstagramAnalyticsPostScalarWhereWithAggregatesInput[]
    NOT?: InstagramAnalyticsPostScalarWhereWithAggregatesInput | InstagramAnalyticsPostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InstagramAnalyticsPost"> | number
    postId?: StringWithAggregatesFilter<"InstagramAnalyticsPost"> | string
    postContent?: StringNullableWithAggregatesFilter<"InstagramAnalyticsPost"> | string | null
    postType?: StringNullableWithAggregatesFilter<"InstagramAnalyticsPost"> | string | null
    likeCount?: IntWithAggregatesFilter<"InstagramAnalyticsPost"> | number
    commentCount?: IntWithAggregatesFilter<"InstagramAnalyticsPost"> | number
    saveCount?: IntNullableWithAggregatesFilter<"InstagramAnalyticsPost"> | number | null
    reach?: IntNullableWithAggregatesFilter<"InstagramAnalyticsPost"> | number | null
    impressions?: IntNullableWithAggregatesFilter<"InstagramAnalyticsPost"> | number | null
    engagementRate?: FloatNullableWithAggregatesFilter<"InstagramAnalyticsPost"> | number | null
    videoViews?: IntNullableWithAggregatesFilter<"InstagramAnalyticsPost"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"InstagramAnalyticsPost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InstagramAnalyticsPost"> | Date | string
    generalAnalyticsId?: IntWithAggregatesFilter<"InstagramAnalyticsPost"> | number
  }

  export type UserCreateInput = {
    email: string
    passwordHash: string
    registeredAt?: Date | string
    isEmailVerified?: boolean
    confirmationCode?: ConfirmationCodeCreateNestedOneWithoutUserInput
    socialAccounts?: SocialAccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    passwordHash: string
    registeredAt?: Date | string
    isEmailVerified?: boolean
    confirmationCode?: ConfirmationCodeUncheckedCreateNestedOneWithoutUserInput
    socialAccounts?: SocialAccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    confirmationCode?: ConfirmationCodeUpdateOneWithoutUserNestedInput
    socialAccounts?: SocialAccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    confirmationCode?: ConfirmationCodeUncheckedUpdateOneWithoutUserNestedInput
    socialAccounts?: SocialAccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    passwordHash: string
    registeredAt?: Date | string
    isEmailVerified?: boolean
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ConfirmationCodeCreateInput = {
    code?: string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutConfirmationCodeInput
  }

  export type ConfirmationCodeUncheckedCreateInput = {
    code?: string
    expiresAt: Date | string
    userId: number
  }

  export type ConfirmationCodeUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConfirmationCodeNestedInput
  }

  export type ConfirmationCodeUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ConfirmationCodeCreateManyInput = {
    code?: string
    expiresAt: Date | string
    userId: number
  }

  export type ConfirmationCodeUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfirmationCodeUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SocialNetworkCreateInput = {
    name: string
    profileUrlFormat?: string | null
    socialAccounts?: SocialAccountCreateNestedManyWithoutSocialNetworkInput
  }

  export type SocialNetworkUncheckedCreateInput = {
    id?: number
    name: string
    profileUrlFormat?: string | null
    socialAccounts?: SocialAccountUncheckedCreateNestedManyWithoutSocialNetworkInput
  }

  export type SocialNetworkUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    profileUrlFormat?: NullableStringFieldUpdateOperationsInput | string | null
    socialAccounts?: SocialAccountUpdateManyWithoutSocialNetworkNestedInput
  }

  export type SocialNetworkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profileUrlFormat?: NullableStringFieldUpdateOperationsInput | string | null
    socialAccounts?: SocialAccountUncheckedUpdateManyWithoutSocialNetworkNestedInput
  }

  export type SocialNetworkCreateManyInput = {
    id?: number
    name: string
    profileUrlFormat?: string | null
  }

  export type SocialNetworkUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    profileUrlFormat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SocialNetworkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profileUrlFormat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SocialAccountCreateInput = {
    accessToken: string
    refreshToken?: string | null
    socialAccountId: string
    connectedAt?: Date | string
    user: UserCreateNestedOneWithoutSocialAccountsInput
    socialNetwork: SocialNetworkCreateNestedOneWithoutSocialAccountsInput
    generalAnalytics?: GeneralAnalyticsDataCreateNestedManyWithoutSocialAccountInput
  }

  export type SocialAccountUncheckedCreateInput = {
    id?: number
    userId: number
    socialNetworkId: number
    accessToken: string
    refreshToken?: string | null
    socialAccountId: string
    connectedAt?: Date | string
    generalAnalytics?: GeneralAnalyticsDataUncheckedCreateNestedManyWithoutSocialAccountInput
  }

  export type SocialAccountUpdateInput = {
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    socialAccountId?: StringFieldUpdateOperationsInput | string
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSocialAccountsNestedInput
    socialNetwork?: SocialNetworkUpdateOneRequiredWithoutSocialAccountsNestedInput
    generalAnalytics?: GeneralAnalyticsDataUpdateManyWithoutSocialAccountNestedInput
  }

  export type SocialAccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    socialNetworkId?: IntFieldUpdateOperationsInput | number
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    socialAccountId?: StringFieldUpdateOperationsInput | string
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generalAnalytics?: GeneralAnalyticsDataUncheckedUpdateManyWithoutSocialAccountNestedInput
  }

  export type SocialAccountCreateManyInput = {
    id?: number
    userId: number
    socialNetworkId: number
    accessToken: string
    refreshToken?: string | null
    socialAccountId: string
    connectedAt?: Date | string
  }

  export type SocialAccountUpdateManyMutationInput = {
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    socialAccountId?: StringFieldUpdateOperationsInput | string
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialAccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    socialNetworkId?: IntFieldUpdateOperationsInput | number
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    socialAccountId?: StringFieldUpdateOperationsInput | string
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneralAnalyticsDataCreateInput = {
    metricCollectedAt?: Date | string
    dataType: string
    lastUpdatedAt?: Date | string
    socialAccount: SocialAccountCreateNestedOneWithoutGeneralAnalyticsInput
    facebookAnalyticsPost?: FacebookAnalyticsPostCreateNestedOneWithoutGeneralAnalyticsInput
    twitterAnalyticsTweet?: TwitterAnalyticsTweetCreateNestedOneWithoutGeneralAnalyticsInput
    instagramAnalyticsPost?: InstagramAnalyticsPostCreateNestedOneWithoutGeneralAnalyticsInput
  }

  export type GeneralAnalyticsDataUncheckedCreateInput = {
    id?: number
    metricCollectedAt?: Date | string
    dataType: string
    lastUpdatedAt?: Date | string
    socialAccountId: number
    facebookAnalyticsPost?: FacebookAnalyticsPostUncheckedCreateNestedOneWithoutGeneralAnalyticsInput
    twitterAnalyticsTweet?: TwitterAnalyticsTweetUncheckedCreateNestedOneWithoutGeneralAnalyticsInput
    instagramAnalyticsPost?: InstagramAnalyticsPostUncheckedCreateNestedOneWithoutGeneralAnalyticsInput
  }

  export type GeneralAnalyticsDataUpdateInput = {
    metricCollectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataType?: StringFieldUpdateOperationsInput | string
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialAccount?: SocialAccountUpdateOneRequiredWithoutGeneralAnalyticsNestedInput
    facebookAnalyticsPost?: FacebookAnalyticsPostUpdateOneWithoutGeneralAnalyticsNestedInput
    twitterAnalyticsTweet?: TwitterAnalyticsTweetUpdateOneWithoutGeneralAnalyticsNestedInput
    instagramAnalyticsPost?: InstagramAnalyticsPostUpdateOneWithoutGeneralAnalyticsNestedInput
  }

  export type GeneralAnalyticsDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    metricCollectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataType?: StringFieldUpdateOperationsInput | string
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialAccountId?: IntFieldUpdateOperationsInput | number
    facebookAnalyticsPost?: FacebookAnalyticsPostUncheckedUpdateOneWithoutGeneralAnalyticsNestedInput
    twitterAnalyticsTweet?: TwitterAnalyticsTweetUncheckedUpdateOneWithoutGeneralAnalyticsNestedInput
    instagramAnalyticsPost?: InstagramAnalyticsPostUncheckedUpdateOneWithoutGeneralAnalyticsNestedInput
  }

  export type GeneralAnalyticsDataCreateManyInput = {
    id?: number
    metricCollectedAt?: Date | string
    dataType: string
    lastUpdatedAt?: Date | string
    socialAccountId: number
  }

  export type GeneralAnalyticsDataUpdateManyMutationInput = {
    metricCollectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataType?: StringFieldUpdateOperationsInput | string
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneralAnalyticsDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    metricCollectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataType?: StringFieldUpdateOperationsInput | string
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialAccountId?: IntFieldUpdateOperationsInput | number
  }

  export type FacebookAnalyticsPostCreateInput = {
    postId: string
    postContent?: string | null
    postType?: string | null
    likeCount?: number
    commentCount?: number
    shareCount?: number
    coverageOrganic?: number | null
    coveragePaid?: number | null
    postClickCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    generalAnalytics: GeneralAnalyticsDataCreateNestedOneWithoutFacebookAnalyticsPostInput
  }

  export type FacebookAnalyticsPostUncheckedCreateInput = {
    id?: number
    postId: string
    postContent?: string | null
    postType?: string | null
    likeCount?: number
    commentCount?: number
    shareCount?: number
    coverageOrganic?: number | null
    coveragePaid?: number | null
    postClickCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    generalAnalyticsId: number
  }

  export type FacebookAnalyticsPostUpdateInput = {
    postId?: StringFieldUpdateOperationsInput | string
    postContent?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    shareCount?: IntFieldUpdateOperationsInput | number
    coverageOrganic?: NullableIntFieldUpdateOperationsInput | number | null
    coveragePaid?: NullableIntFieldUpdateOperationsInput | number | null
    postClickCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generalAnalytics?: GeneralAnalyticsDataUpdateOneRequiredWithoutFacebookAnalyticsPostNestedInput
  }

  export type FacebookAnalyticsPostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: StringFieldUpdateOperationsInput | string
    postContent?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    shareCount?: IntFieldUpdateOperationsInput | number
    coverageOrganic?: NullableIntFieldUpdateOperationsInput | number | null
    coveragePaid?: NullableIntFieldUpdateOperationsInput | number | null
    postClickCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generalAnalyticsId?: IntFieldUpdateOperationsInput | number
  }

  export type FacebookAnalyticsPostCreateManyInput = {
    id?: number
    postId: string
    postContent?: string | null
    postType?: string | null
    likeCount?: number
    commentCount?: number
    shareCount?: number
    coverageOrganic?: number | null
    coveragePaid?: number | null
    postClickCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    generalAnalyticsId: number
  }

  export type FacebookAnalyticsPostUpdateManyMutationInput = {
    postId?: StringFieldUpdateOperationsInput | string
    postContent?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    shareCount?: IntFieldUpdateOperationsInput | number
    coverageOrganic?: NullableIntFieldUpdateOperationsInput | number | null
    coveragePaid?: NullableIntFieldUpdateOperationsInput | number | null
    postClickCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacebookAnalyticsPostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: StringFieldUpdateOperationsInput | string
    postContent?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    shareCount?: IntFieldUpdateOperationsInput | number
    coverageOrganic?: NullableIntFieldUpdateOperationsInput | number | null
    coveragePaid?: NullableIntFieldUpdateOperationsInput | number | null
    postClickCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generalAnalyticsId?: IntFieldUpdateOperationsInput | number
  }

  export type TwitterAnalyticsTweetCreateInput = {
    tweetId: string
    tweetContent?: string | null
    retweetsCount?: number
    quoteCount?: number
    likeCount?: number
    commentCount?: number
    viewCount?: number | null
    hashtags?: TwitterAnalyticsTweetCreatehashtagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    generalAnalytics: GeneralAnalyticsDataCreateNestedOneWithoutTwitterAnalyticsTweetInput
  }

  export type TwitterAnalyticsTweetUncheckedCreateInput = {
    id?: number
    tweetId: string
    tweetContent?: string | null
    retweetsCount?: number
    quoteCount?: number
    likeCount?: number
    commentCount?: number
    viewCount?: number | null
    hashtags?: TwitterAnalyticsTweetCreatehashtagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    generalAnalyticsId: number
  }

  export type TwitterAnalyticsTweetUpdateInput = {
    tweetId?: StringFieldUpdateOperationsInput | string
    tweetContent?: NullableStringFieldUpdateOperationsInput | string | null
    retweetsCount?: IntFieldUpdateOperationsInput | number
    quoteCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    viewCount?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: TwitterAnalyticsTweetUpdatehashtagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generalAnalytics?: GeneralAnalyticsDataUpdateOneRequiredWithoutTwitterAnalyticsTweetNestedInput
  }

  export type TwitterAnalyticsTweetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tweetId?: StringFieldUpdateOperationsInput | string
    tweetContent?: NullableStringFieldUpdateOperationsInput | string | null
    retweetsCount?: IntFieldUpdateOperationsInput | number
    quoteCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    viewCount?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: TwitterAnalyticsTweetUpdatehashtagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generalAnalyticsId?: IntFieldUpdateOperationsInput | number
  }

  export type TwitterAnalyticsTweetCreateManyInput = {
    id?: number
    tweetId: string
    tweetContent?: string | null
    retweetsCount?: number
    quoteCount?: number
    likeCount?: number
    commentCount?: number
    viewCount?: number | null
    hashtags?: TwitterAnalyticsTweetCreatehashtagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    generalAnalyticsId: number
  }

  export type TwitterAnalyticsTweetUpdateManyMutationInput = {
    tweetId?: StringFieldUpdateOperationsInput | string
    tweetContent?: NullableStringFieldUpdateOperationsInput | string | null
    retweetsCount?: IntFieldUpdateOperationsInput | number
    quoteCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    viewCount?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: TwitterAnalyticsTweetUpdatehashtagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterAnalyticsTweetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tweetId?: StringFieldUpdateOperationsInput | string
    tweetContent?: NullableStringFieldUpdateOperationsInput | string | null
    retweetsCount?: IntFieldUpdateOperationsInput | number
    quoteCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    viewCount?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: TwitterAnalyticsTweetUpdatehashtagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generalAnalyticsId?: IntFieldUpdateOperationsInput | number
  }

  export type InstagramAnalyticsPostCreateInput = {
    postId: string
    postContent?: string | null
    postType?: string | null
    likeCount?: number
    commentCount?: number
    saveCount?: number | null
    reach?: number | null
    impressions?: number | null
    engagementRate?: number | null
    videoViews?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    generalAnalytics: GeneralAnalyticsDataCreateNestedOneWithoutInstagramAnalyticsPostInput
  }

  export type InstagramAnalyticsPostUncheckedCreateInput = {
    id?: number
    postId: string
    postContent?: string | null
    postType?: string | null
    likeCount?: number
    commentCount?: number
    saveCount?: number | null
    reach?: number | null
    impressions?: number | null
    engagementRate?: number | null
    videoViews?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    generalAnalyticsId: number
  }

  export type InstagramAnalyticsPostUpdateInput = {
    postId?: StringFieldUpdateOperationsInput | string
    postContent?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    saveCount?: NullableIntFieldUpdateOperationsInput | number | null
    reach?: NullableIntFieldUpdateOperationsInput | number | null
    impressions?: NullableIntFieldUpdateOperationsInput | number | null
    engagementRate?: NullableFloatFieldUpdateOperationsInput | number | null
    videoViews?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generalAnalytics?: GeneralAnalyticsDataUpdateOneRequiredWithoutInstagramAnalyticsPostNestedInput
  }

  export type InstagramAnalyticsPostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: StringFieldUpdateOperationsInput | string
    postContent?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    saveCount?: NullableIntFieldUpdateOperationsInput | number | null
    reach?: NullableIntFieldUpdateOperationsInput | number | null
    impressions?: NullableIntFieldUpdateOperationsInput | number | null
    engagementRate?: NullableFloatFieldUpdateOperationsInput | number | null
    videoViews?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generalAnalyticsId?: IntFieldUpdateOperationsInput | number
  }

  export type InstagramAnalyticsPostCreateManyInput = {
    id?: number
    postId: string
    postContent?: string | null
    postType?: string | null
    likeCount?: number
    commentCount?: number
    saveCount?: number | null
    reach?: number | null
    impressions?: number | null
    engagementRate?: number | null
    videoViews?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    generalAnalyticsId: number
  }

  export type InstagramAnalyticsPostUpdateManyMutationInput = {
    postId?: StringFieldUpdateOperationsInput | string
    postContent?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    saveCount?: NullableIntFieldUpdateOperationsInput | number | null
    reach?: NullableIntFieldUpdateOperationsInput | number | null
    impressions?: NullableIntFieldUpdateOperationsInput | number | null
    engagementRate?: NullableFloatFieldUpdateOperationsInput | number | null
    videoViews?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstagramAnalyticsPostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: StringFieldUpdateOperationsInput | string
    postContent?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    saveCount?: NullableIntFieldUpdateOperationsInput | number | null
    reach?: NullableIntFieldUpdateOperationsInput | number | null
    impressions?: NullableIntFieldUpdateOperationsInput | number | null
    engagementRate?: NullableFloatFieldUpdateOperationsInput | number | null
    videoViews?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generalAnalyticsId?: IntFieldUpdateOperationsInput | number
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ConfirmationCodeNullableScalarRelationFilter = {
    is?: ConfirmationCodeWhereInput | null
    isNot?: ConfirmationCodeWhereInput | null
  }

  export type SocialAccountListRelationFilter = {
    every?: SocialAccountWhereInput
    some?: SocialAccountWhereInput
    none?: SocialAccountWhereInput
  }

  export type SocialAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    registeredAt?: SortOrder
    isEmailVerified?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    registeredAt?: SortOrder
    isEmailVerified?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    registeredAt?: SortOrder
    isEmailVerified?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ConfirmationCodeCountOrderByAggregateInput = {
    code?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
  }

  export type ConfirmationCodeAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type ConfirmationCodeMaxOrderByAggregateInput = {
    code?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
  }

  export type ConfirmationCodeMinOrderByAggregateInput = {
    code?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
  }

  export type ConfirmationCodeSumOrderByAggregateInput = {
    userId?: SortOrder
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SocialNetworkCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profileUrlFormat?: SortOrder
  }

  export type SocialNetworkAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SocialNetworkMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profileUrlFormat?: SortOrder
  }

  export type SocialNetworkMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profileUrlFormat?: SortOrder
  }

  export type SocialNetworkSumOrderByAggregateInput = {
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

  export type SocialNetworkScalarRelationFilter = {
    is?: SocialNetworkWhereInput
    isNot?: SocialNetworkWhereInput
  }

  export type GeneralAnalyticsDataListRelationFilter = {
    every?: GeneralAnalyticsDataWhereInput
    some?: GeneralAnalyticsDataWhereInput
    none?: GeneralAnalyticsDataWhereInput
  }

  export type GeneralAnalyticsDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SocialAccountUserIdSocialNetworkIdCompoundUniqueInput = {
    userId: number
    socialNetworkId: number
  }

  export type SocialAccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    socialNetworkId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    socialAccountId?: SortOrder
    connectedAt?: SortOrder
  }

  export type SocialAccountAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    socialNetworkId?: SortOrder
  }

  export type SocialAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    socialNetworkId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    socialAccountId?: SortOrder
    connectedAt?: SortOrder
  }

  export type SocialAccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    socialNetworkId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    socialAccountId?: SortOrder
    connectedAt?: SortOrder
  }

  export type SocialAccountSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    socialNetworkId?: SortOrder
  }

  export type SocialAccountScalarRelationFilter = {
    is?: SocialAccountWhereInput
    isNot?: SocialAccountWhereInput
  }

  export type FacebookAnalyticsPostNullableScalarRelationFilter = {
    is?: FacebookAnalyticsPostWhereInput | null
    isNot?: FacebookAnalyticsPostWhereInput | null
  }

  export type TwitterAnalyticsTweetNullableScalarRelationFilter = {
    is?: TwitterAnalyticsTweetWhereInput | null
    isNot?: TwitterAnalyticsTweetWhereInput | null
  }

  export type InstagramAnalyticsPostNullableScalarRelationFilter = {
    is?: InstagramAnalyticsPostWhereInput | null
    isNot?: InstagramAnalyticsPostWhereInput | null
  }

  export type GeneralAnalyticsDataCountOrderByAggregateInput = {
    id?: SortOrder
    metricCollectedAt?: SortOrder
    dataType?: SortOrder
    lastUpdatedAt?: SortOrder
    socialAccountId?: SortOrder
  }

  export type GeneralAnalyticsDataAvgOrderByAggregateInput = {
    id?: SortOrder
    socialAccountId?: SortOrder
  }

  export type GeneralAnalyticsDataMaxOrderByAggregateInput = {
    id?: SortOrder
    metricCollectedAt?: SortOrder
    dataType?: SortOrder
    lastUpdatedAt?: SortOrder
    socialAccountId?: SortOrder
  }

  export type GeneralAnalyticsDataMinOrderByAggregateInput = {
    id?: SortOrder
    metricCollectedAt?: SortOrder
    dataType?: SortOrder
    lastUpdatedAt?: SortOrder
    socialAccountId?: SortOrder
  }

  export type GeneralAnalyticsDataSumOrderByAggregateInput = {
    id?: SortOrder
    socialAccountId?: SortOrder
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

  export type GeneralAnalyticsDataScalarRelationFilter = {
    is?: GeneralAnalyticsDataWhereInput
    isNot?: GeneralAnalyticsDataWhereInput
  }

  export type FacebookAnalyticsPostCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    postContent?: SortOrder
    postType?: SortOrder
    likeCount?: SortOrder
    commentCount?: SortOrder
    shareCount?: SortOrder
    coverageOrganic?: SortOrder
    coveragePaid?: SortOrder
    postClickCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    generalAnalyticsId?: SortOrder
  }

  export type FacebookAnalyticsPostAvgOrderByAggregateInput = {
    id?: SortOrder
    likeCount?: SortOrder
    commentCount?: SortOrder
    shareCount?: SortOrder
    coverageOrganic?: SortOrder
    coveragePaid?: SortOrder
    postClickCount?: SortOrder
    generalAnalyticsId?: SortOrder
  }

  export type FacebookAnalyticsPostMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    postContent?: SortOrder
    postType?: SortOrder
    likeCount?: SortOrder
    commentCount?: SortOrder
    shareCount?: SortOrder
    coverageOrganic?: SortOrder
    coveragePaid?: SortOrder
    postClickCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    generalAnalyticsId?: SortOrder
  }

  export type FacebookAnalyticsPostMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    postContent?: SortOrder
    postType?: SortOrder
    likeCount?: SortOrder
    commentCount?: SortOrder
    shareCount?: SortOrder
    coverageOrganic?: SortOrder
    coveragePaid?: SortOrder
    postClickCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    generalAnalyticsId?: SortOrder
  }

  export type FacebookAnalyticsPostSumOrderByAggregateInput = {
    id?: SortOrder
    likeCount?: SortOrder
    commentCount?: SortOrder
    shareCount?: SortOrder
    coverageOrganic?: SortOrder
    coveragePaid?: SortOrder
    postClickCount?: SortOrder
    generalAnalyticsId?: SortOrder
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type TwitterAnalyticsTweetCountOrderByAggregateInput = {
    id?: SortOrder
    tweetId?: SortOrder
    tweetContent?: SortOrder
    retweetsCount?: SortOrder
    quoteCount?: SortOrder
    likeCount?: SortOrder
    commentCount?: SortOrder
    viewCount?: SortOrder
    hashtags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    generalAnalyticsId?: SortOrder
  }

  export type TwitterAnalyticsTweetAvgOrderByAggregateInput = {
    id?: SortOrder
    retweetsCount?: SortOrder
    quoteCount?: SortOrder
    likeCount?: SortOrder
    commentCount?: SortOrder
    viewCount?: SortOrder
    generalAnalyticsId?: SortOrder
  }

  export type TwitterAnalyticsTweetMaxOrderByAggregateInput = {
    id?: SortOrder
    tweetId?: SortOrder
    tweetContent?: SortOrder
    retweetsCount?: SortOrder
    quoteCount?: SortOrder
    likeCount?: SortOrder
    commentCount?: SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    generalAnalyticsId?: SortOrder
  }

  export type TwitterAnalyticsTweetMinOrderByAggregateInput = {
    id?: SortOrder
    tweetId?: SortOrder
    tweetContent?: SortOrder
    retweetsCount?: SortOrder
    quoteCount?: SortOrder
    likeCount?: SortOrder
    commentCount?: SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    generalAnalyticsId?: SortOrder
  }

  export type TwitterAnalyticsTweetSumOrderByAggregateInput = {
    id?: SortOrder
    retweetsCount?: SortOrder
    quoteCount?: SortOrder
    likeCount?: SortOrder
    commentCount?: SortOrder
    viewCount?: SortOrder
    generalAnalyticsId?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type InstagramAnalyticsPostCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    postContent?: SortOrder
    postType?: SortOrder
    likeCount?: SortOrder
    commentCount?: SortOrder
    saveCount?: SortOrder
    reach?: SortOrder
    impressions?: SortOrder
    engagementRate?: SortOrder
    videoViews?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    generalAnalyticsId?: SortOrder
  }

  export type InstagramAnalyticsPostAvgOrderByAggregateInput = {
    id?: SortOrder
    likeCount?: SortOrder
    commentCount?: SortOrder
    saveCount?: SortOrder
    reach?: SortOrder
    impressions?: SortOrder
    engagementRate?: SortOrder
    videoViews?: SortOrder
    generalAnalyticsId?: SortOrder
  }

  export type InstagramAnalyticsPostMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    postContent?: SortOrder
    postType?: SortOrder
    likeCount?: SortOrder
    commentCount?: SortOrder
    saveCount?: SortOrder
    reach?: SortOrder
    impressions?: SortOrder
    engagementRate?: SortOrder
    videoViews?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    generalAnalyticsId?: SortOrder
  }

  export type InstagramAnalyticsPostMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    postContent?: SortOrder
    postType?: SortOrder
    likeCount?: SortOrder
    commentCount?: SortOrder
    saveCount?: SortOrder
    reach?: SortOrder
    impressions?: SortOrder
    engagementRate?: SortOrder
    videoViews?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    generalAnalyticsId?: SortOrder
  }

  export type InstagramAnalyticsPostSumOrderByAggregateInput = {
    id?: SortOrder
    likeCount?: SortOrder
    commentCount?: SortOrder
    saveCount?: SortOrder
    reach?: SortOrder
    impressions?: SortOrder
    engagementRate?: SortOrder
    videoViews?: SortOrder
    generalAnalyticsId?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ConfirmationCodeCreateNestedOneWithoutUserInput = {
    create?: XOR<ConfirmationCodeCreateWithoutUserInput, ConfirmationCodeUncheckedCreateWithoutUserInput>
    connectOrCreate?: ConfirmationCodeCreateOrConnectWithoutUserInput
    connect?: ConfirmationCodeWhereUniqueInput
  }

  export type SocialAccountCreateNestedManyWithoutUserInput = {
    create?: XOR<SocialAccountCreateWithoutUserInput, SocialAccountUncheckedCreateWithoutUserInput> | SocialAccountCreateWithoutUserInput[] | SocialAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SocialAccountCreateOrConnectWithoutUserInput | SocialAccountCreateOrConnectWithoutUserInput[]
    createMany?: SocialAccountCreateManyUserInputEnvelope
    connect?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
  }

  export type ConfirmationCodeUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ConfirmationCodeCreateWithoutUserInput, ConfirmationCodeUncheckedCreateWithoutUserInput>
    connectOrCreate?: ConfirmationCodeCreateOrConnectWithoutUserInput
    connect?: ConfirmationCodeWhereUniqueInput
  }

  export type SocialAccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SocialAccountCreateWithoutUserInput, SocialAccountUncheckedCreateWithoutUserInput> | SocialAccountCreateWithoutUserInput[] | SocialAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SocialAccountCreateOrConnectWithoutUserInput | SocialAccountCreateOrConnectWithoutUserInput[]
    createMany?: SocialAccountCreateManyUserInputEnvelope
    connect?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ConfirmationCodeUpdateOneWithoutUserNestedInput = {
    create?: XOR<ConfirmationCodeCreateWithoutUserInput, ConfirmationCodeUncheckedCreateWithoutUserInput>
    connectOrCreate?: ConfirmationCodeCreateOrConnectWithoutUserInput
    upsert?: ConfirmationCodeUpsertWithoutUserInput
    disconnect?: ConfirmationCodeWhereInput | boolean
    delete?: ConfirmationCodeWhereInput | boolean
    connect?: ConfirmationCodeWhereUniqueInput
    update?: XOR<XOR<ConfirmationCodeUpdateToOneWithWhereWithoutUserInput, ConfirmationCodeUpdateWithoutUserInput>, ConfirmationCodeUncheckedUpdateWithoutUserInput>
  }

  export type SocialAccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<SocialAccountCreateWithoutUserInput, SocialAccountUncheckedCreateWithoutUserInput> | SocialAccountCreateWithoutUserInput[] | SocialAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SocialAccountCreateOrConnectWithoutUserInput | SocialAccountCreateOrConnectWithoutUserInput[]
    upsert?: SocialAccountUpsertWithWhereUniqueWithoutUserInput | SocialAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SocialAccountCreateManyUserInputEnvelope
    set?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
    disconnect?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
    delete?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
    connect?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
    update?: SocialAccountUpdateWithWhereUniqueWithoutUserInput | SocialAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SocialAccountUpdateManyWithWhereWithoutUserInput | SocialAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SocialAccountScalarWhereInput | SocialAccountScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ConfirmationCodeUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ConfirmationCodeCreateWithoutUserInput, ConfirmationCodeUncheckedCreateWithoutUserInput>
    connectOrCreate?: ConfirmationCodeCreateOrConnectWithoutUserInput
    upsert?: ConfirmationCodeUpsertWithoutUserInput
    disconnect?: ConfirmationCodeWhereInput | boolean
    delete?: ConfirmationCodeWhereInput | boolean
    connect?: ConfirmationCodeWhereUniqueInput
    update?: XOR<XOR<ConfirmationCodeUpdateToOneWithWhereWithoutUserInput, ConfirmationCodeUpdateWithoutUserInput>, ConfirmationCodeUncheckedUpdateWithoutUserInput>
  }

  export type SocialAccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SocialAccountCreateWithoutUserInput, SocialAccountUncheckedCreateWithoutUserInput> | SocialAccountCreateWithoutUserInput[] | SocialAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SocialAccountCreateOrConnectWithoutUserInput | SocialAccountCreateOrConnectWithoutUserInput[]
    upsert?: SocialAccountUpsertWithWhereUniqueWithoutUserInput | SocialAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SocialAccountCreateManyUserInputEnvelope
    set?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
    disconnect?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
    delete?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
    connect?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
    update?: SocialAccountUpdateWithWhereUniqueWithoutUserInput | SocialAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SocialAccountUpdateManyWithWhereWithoutUserInput | SocialAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SocialAccountScalarWhereInput | SocialAccountScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutConfirmationCodeInput = {
    create?: XOR<UserCreateWithoutConfirmationCodeInput, UserUncheckedCreateWithoutConfirmationCodeInput>
    connectOrCreate?: UserCreateOrConnectWithoutConfirmationCodeInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutConfirmationCodeNestedInput = {
    create?: XOR<UserCreateWithoutConfirmationCodeInput, UserUncheckedCreateWithoutConfirmationCodeInput>
    connectOrCreate?: UserCreateOrConnectWithoutConfirmationCodeInput
    upsert?: UserUpsertWithoutConfirmationCodeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConfirmationCodeInput, UserUpdateWithoutConfirmationCodeInput>, UserUncheckedUpdateWithoutConfirmationCodeInput>
  }

  export type SocialAccountCreateNestedManyWithoutSocialNetworkInput = {
    create?: XOR<SocialAccountCreateWithoutSocialNetworkInput, SocialAccountUncheckedCreateWithoutSocialNetworkInput> | SocialAccountCreateWithoutSocialNetworkInput[] | SocialAccountUncheckedCreateWithoutSocialNetworkInput[]
    connectOrCreate?: SocialAccountCreateOrConnectWithoutSocialNetworkInput | SocialAccountCreateOrConnectWithoutSocialNetworkInput[]
    createMany?: SocialAccountCreateManySocialNetworkInputEnvelope
    connect?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
  }

  export type SocialAccountUncheckedCreateNestedManyWithoutSocialNetworkInput = {
    create?: XOR<SocialAccountCreateWithoutSocialNetworkInput, SocialAccountUncheckedCreateWithoutSocialNetworkInput> | SocialAccountCreateWithoutSocialNetworkInput[] | SocialAccountUncheckedCreateWithoutSocialNetworkInput[]
    connectOrCreate?: SocialAccountCreateOrConnectWithoutSocialNetworkInput | SocialAccountCreateOrConnectWithoutSocialNetworkInput[]
    createMany?: SocialAccountCreateManySocialNetworkInputEnvelope
    connect?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SocialAccountUpdateManyWithoutSocialNetworkNestedInput = {
    create?: XOR<SocialAccountCreateWithoutSocialNetworkInput, SocialAccountUncheckedCreateWithoutSocialNetworkInput> | SocialAccountCreateWithoutSocialNetworkInput[] | SocialAccountUncheckedCreateWithoutSocialNetworkInput[]
    connectOrCreate?: SocialAccountCreateOrConnectWithoutSocialNetworkInput | SocialAccountCreateOrConnectWithoutSocialNetworkInput[]
    upsert?: SocialAccountUpsertWithWhereUniqueWithoutSocialNetworkInput | SocialAccountUpsertWithWhereUniqueWithoutSocialNetworkInput[]
    createMany?: SocialAccountCreateManySocialNetworkInputEnvelope
    set?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
    disconnect?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
    delete?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
    connect?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
    update?: SocialAccountUpdateWithWhereUniqueWithoutSocialNetworkInput | SocialAccountUpdateWithWhereUniqueWithoutSocialNetworkInput[]
    updateMany?: SocialAccountUpdateManyWithWhereWithoutSocialNetworkInput | SocialAccountUpdateManyWithWhereWithoutSocialNetworkInput[]
    deleteMany?: SocialAccountScalarWhereInput | SocialAccountScalarWhereInput[]
  }

  export type SocialAccountUncheckedUpdateManyWithoutSocialNetworkNestedInput = {
    create?: XOR<SocialAccountCreateWithoutSocialNetworkInput, SocialAccountUncheckedCreateWithoutSocialNetworkInput> | SocialAccountCreateWithoutSocialNetworkInput[] | SocialAccountUncheckedCreateWithoutSocialNetworkInput[]
    connectOrCreate?: SocialAccountCreateOrConnectWithoutSocialNetworkInput | SocialAccountCreateOrConnectWithoutSocialNetworkInput[]
    upsert?: SocialAccountUpsertWithWhereUniqueWithoutSocialNetworkInput | SocialAccountUpsertWithWhereUniqueWithoutSocialNetworkInput[]
    createMany?: SocialAccountCreateManySocialNetworkInputEnvelope
    set?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
    disconnect?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
    delete?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
    connect?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
    update?: SocialAccountUpdateWithWhereUniqueWithoutSocialNetworkInput | SocialAccountUpdateWithWhereUniqueWithoutSocialNetworkInput[]
    updateMany?: SocialAccountUpdateManyWithWhereWithoutSocialNetworkInput | SocialAccountUpdateManyWithWhereWithoutSocialNetworkInput[]
    deleteMany?: SocialAccountScalarWhereInput | SocialAccountScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSocialAccountsInput = {
    create?: XOR<UserCreateWithoutSocialAccountsInput, UserUncheckedCreateWithoutSocialAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSocialAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type SocialNetworkCreateNestedOneWithoutSocialAccountsInput = {
    create?: XOR<SocialNetworkCreateWithoutSocialAccountsInput, SocialNetworkUncheckedCreateWithoutSocialAccountsInput>
    connectOrCreate?: SocialNetworkCreateOrConnectWithoutSocialAccountsInput
    connect?: SocialNetworkWhereUniqueInput
  }

  export type GeneralAnalyticsDataCreateNestedManyWithoutSocialAccountInput = {
    create?: XOR<GeneralAnalyticsDataCreateWithoutSocialAccountInput, GeneralAnalyticsDataUncheckedCreateWithoutSocialAccountInput> | GeneralAnalyticsDataCreateWithoutSocialAccountInput[] | GeneralAnalyticsDataUncheckedCreateWithoutSocialAccountInput[]
    connectOrCreate?: GeneralAnalyticsDataCreateOrConnectWithoutSocialAccountInput | GeneralAnalyticsDataCreateOrConnectWithoutSocialAccountInput[]
    createMany?: GeneralAnalyticsDataCreateManySocialAccountInputEnvelope
    connect?: GeneralAnalyticsDataWhereUniqueInput | GeneralAnalyticsDataWhereUniqueInput[]
  }

  export type GeneralAnalyticsDataUncheckedCreateNestedManyWithoutSocialAccountInput = {
    create?: XOR<GeneralAnalyticsDataCreateWithoutSocialAccountInput, GeneralAnalyticsDataUncheckedCreateWithoutSocialAccountInput> | GeneralAnalyticsDataCreateWithoutSocialAccountInput[] | GeneralAnalyticsDataUncheckedCreateWithoutSocialAccountInput[]
    connectOrCreate?: GeneralAnalyticsDataCreateOrConnectWithoutSocialAccountInput | GeneralAnalyticsDataCreateOrConnectWithoutSocialAccountInput[]
    createMany?: GeneralAnalyticsDataCreateManySocialAccountInputEnvelope
    connect?: GeneralAnalyticsDataWhereUniqueInput | GeneralAnalyticsDataWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutSocialAccountsNestedInput = {
    create?: XOR<UserCreateWithoutSocialAccountsInput, UserUncheckedCreateWithoutSocialAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSocialAccountsInput
    upsert?: UserUpsertWithoutSocialAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSocialAccountsInput, UserUpdateWithoutSocialAccountsInput>, UserUncheckedUpdateWithoutSocialAccountsInput>
  }

  export type SocialNetworkUpdateOneRequiredWithoutSocialAccountsNestedInput = {
    create?: XOR<SocialNetworkCreateWithoutSocialAccountsInput, SocialNetworkUncheckedCreateWithoutSocialAccountsInput>
    connectOrCreate?: SocialNetworkCreateOrConnectWithoutSocialAccountsInput
    upsert?: SocialNetworkUpsertWithoutSocialAccountsInput
    connect?: SocialNetworkWhereUniqueInput
    update?: XOR<XOR<SocialNetworkUpdateToOneWithWhereWithoutSocialAccountsInput, SocialNetworkUpdateWithoutSocialAccountsInput>, SocialNetworkUncheckedUpdateWithoutSocialAccountsInput>
  }

  export type GeneralAnalyticsDataUpdateManyWithoutSocialAccountNestedInput = {
    create?: XOR<GeneralAnalyticsDataCreateWithoutSocialAccountInput, GeneralAnalyticsDataUncheckedCreateWithoutSocialAccountInput> | GeneralAnalyticsDataCreateWithoutSocialAccountInput[] | GeneralAnalyticsDataUncheckedCreateWithoutSocialAccountInput[]
    connectOrCreate?: GeneralAnalyticsDataCreateOrConnectWithoutSocialAccountInput | GeneralAnalyticsDataCreateOrConnectWithoutSocialAccountInput[]
    upsert?: GeneralAnalyticsDataUpsertWithWhereUniqueWithoutSocialAccountInput | GeneralAnalyticsDataUpsertWithWhereUniqueWithoutSocialAccountInput[]
    createMany?: GeneralAnalyticsDataCreateManySocialAccountInputEnvelope
    set?: GeneralAnalyticsDataWhereUniqueInput | GeneralAnalyticsDataWhereUniqueInput[]
    disconnect?: GeneralAnalyticsDataWhereUniqueInput | GeneralAnalyticsDataWhereUniqueInput[]
    delete?: GeneralAnalyticsDataWhereUniqueInput | GeneralAnalyticsDataWhereUniqueInput[]
    connect?: GeneralAnalyticsDataWhereUniqueInput | GeneralAnalyticsDataWhereUniqueInput[]
    update?: GeneralAnalyticsDataUpdateWithWhereUniqueWithoutSocialAccountInput | GeneralAnalyticsDataUpdateWithWhereUniqueWithoutSocialAccountInput[]
    updateMany?: GeneralAnalyticsDataUpdateManyWithWhereWithoutSocialAccountInput | GeneralAnalyticsDataUpdateManyWithWhereWithoutSocialAccountInput[]
    deleteMany?: GeneralAnalyticsDataScalarWhereInput | GeneralAnalyticsDataScalarWhereInput[]
  }

  export type GeneralAnalyticsDataUncheckedUpdateManyWithoutSocialAccountNestedInput = {
    create?: XOR<GeneralAnalyticsDataCreateWithoutSocialAccountInput, GeneralAnalyticsDataUncheckedCreateWithoutSocialAccountInput> | GeneralAnalyticsDataCreateWithoutSocialAccountInput[] | GeneralAnalyticsDataUncheckedCreateWithoutSocialAccountInput[]
    connectOrCreate?: GeneralAnalyticsDataCreateOrConnectWithoutSocialAccountInput | GeneralAnalyticsDataCreateOrConnectWithoutSocialAccountInput[]
    upsert?: GeneralAnalyticsDataUpsertWithWhereUniqueWithoutSocialAccountInput | GeneralAnalyticsDataUpsertWithWhereUniqueWithoutSocialAccountInput[]
    createMany?: GeneralAnalyticsDataCreateManySocialAccountInputEnvelope
    set?: GeneralAnalyticsDataWhereUniqueInput | GeneralAnalyticsDataWhereUniqueInput[]
    disconnect?: GeneralAnalyticsDataWhereUniqueInput | GeneralAnalyticsDataWhereUniqueInput[]
    delete?: GeneralAnalyticsDataWhereUniqueInput | GeneralAnalyticsDataWhereUniqueInput[]
    connect?: GeneralAnalyticsDataWhereUniqueInput | GeneralAnalyticsDataWhereUniqueInput[]
    update?: GeneralAnalyticsDataUpdateWithWhereUniqueWithoutSocialAccountInput | GeneralAnalyticsDataUpdateWithWhereUniqueWithoutSocialAccountInput[]
    updateMany?: GeneralAnalyticsDataUpdateManyWithWhereWithoutSocialAccountInput | GeneralAnalyticsDataUpdateManyWithWhereWithoutSocialAccountInput[]
    deleteMany?: GeneralAnalyticsDataScalarWhereInput | GeneralAnalyticsDataScalarWhereInput[]
  }

  export type SocialAccountCreateNestedOneWithoutGeneralAnalyticsInput = {
    create?: XOR<SocialAccountCreateWithoutGeneralAnalyticsInput, SocialAccountUncheckedCreateWithoutGeneralAnalyticsInput>
    connectOrCreate?: SocialAccountCreateOrConnectWithoutGeneralAnalyticsInput
    connect?: SocialAccountWhereUniqueInput
  }

  export type FacebookAnalyticsPostCreateNestedOneWithoutGeneralAnalyticsInput = {
    create?: XOR<FacebookAnalyticsPostCreateWithoutGeneralAnalyticsInput, FacebookAnalyticsPostUncheckedCreateWithoutGeneralAnalyticsInput>
    connectOrCreate?: FacebookAnalyticsPostCreateOrConnectWithoutGeneralAnalyticsInput
    connect?: FacebookAnalyticsPostWhereUniqueInput
  }

  export type TwitterAnalyticsTweetCreateNestedOneWithoutGeneralAnalyticsInput = {
    create?: XOR<TwitterAnalyticsTweetCreateWithoutGeneralAnalyticsInput, TwitterAnalyticsTweetUncheckedCreateWithoutGeneralAnalyticsInput>
    connectOrCreate?: TwitterAnalyticsTweetCreateOrConnectWithoutGeneralAnalyticsInput
    connect?: TwitterAnalyticsTweetWhereUniqueInput
  }

  export type InstagramAnalyticsPostCreateNestedOneWithoutGeneralAnalyticsInput = {
    create?: XOR<InstagramAnalyticsPostCreateWithoutGeneralAnalyticsInput, InstagramAnalyticsPostUncheckedCreateWithoutGeneralAnalyticsInput>
    connectOrCreate?: InstagramAnalyticsPostCreateOrConnectWithoutGeneralAnalyticsInput
    connect?: InstagramAnalyticsPostWhereUniqueInput
  }

  export type FacebookAnalyticsPostUncheckedCreateNestedOneWithoutGeneralAnalyticsInput = {
    create?: XOR<FacebookAnalyticsPostCreateWithoutGeneralAnalyticsInput, FacebookAnalyticsPostUncheckedCreateWithoutGeneralAnalyticsInput>
    connectOrCreate?: FacebookAnalyticsPostCreateOrConnectWithoutGeneralAnalyticsInput
    connect?: FacebookAnalyticsPostWhereUniqueInput
  }

  export type TwitterAnalyticsTweetUncheckedCreateNestedOneWithoutGeneralAnalyticsInput = {
    create?: XOR<TwitterAnalyticsTweetCreateWithoutGeneralAnalyticsInput, TwitterAnalyticsTweetUncheckedCreateWithoutGeneralAnalyticsInput>
    connectOrCreate?: TwitterAnalyticsTweetCreateOrConnectWithoutGeneralAnalyticsInput
    connect?: TwitterAnalyticsTweetWhereUniqueInput
  }

  export type InstagramAnalyticsPostUncheckedCreateNestedOneWithoutGeneralAnalyticsInput = {
    create?: XOR<InstagramAnalyticsPostCreateWithoutGeneralAnalyticsInput, InstagramAnalyticsPostUncheckedCreateWithoutGeneralAnalyticsInput>
    connectOrCreate?: InstagramAnalyticsPostCreateOrConnectWithoutGeneralAnalyticsInput
    connect?: InstagramAnalyticsPostWhereUniqueInput
  }

  export type SocialAccountUpdateOneRequiredWithoutGeneralAnalyticsNestedInput = {
    create?: XOR<SocialAccountCreateWithoutGeneralAnalyticsInput, SocialAccountUncheckedCreateWithoutGeneralAnalyticsInput>
    connectOrCreate?: SocialAccountCreateOrConnectWithoutGeneralAnalyticsInput
    upsert?: SocialAccountUpsertWithoutGeneralAnalyticsInput
    connect?: SocialAccountWhereUniqueInput
    update?: XOR<XOR<SocialAccountUpdateToOneWithWhereWithoutGeneralAnalyticsInput, SocialAccountUpdateWithoutGeneralAnalyticsInput>, SocialAccountUncheckedUpdateWithoutGeneralAnalyticsInput>
  }

  export type FacebookAnalyticsPostUpdateOneWithoutGeneralAnalyticsNestedInput = {
    create?: XOR<FacebookAnalyticsPostCreateWithoutGeneralAnalyticsInput, FacebookAnalyticsPostUncheckedCreateWithoutGeneralAnalyticsInput>
    connectOrCreate?: FacebookAnalyticsPostCreateOrConnectWithoutGeneralAnalyticsInput
    upsert?: FacebookAnalyticsPostUpsertWithoutGeneralAnalyticsInput
    disconnect?: FacebookAnalyticsPostWhereInput | boolean
    delete?: FacebookAnalyticsPostWhereInput | boolean
    connect?: FacebookAnalyticsPostWhereUniqueInput
    update?: XOR<XOR<FacebookAnalyticsPostUpdateToOneWithWhereWithoutGeneralAnalyticsInput, FacebookAnalyticsPostUpdateWithoutGeneralAnalyticsInput>, FacebookAnalyticsPostUncheckedUpdateWithoutGeneralAnalyticsInput>
  }

  export type TwitterAnalyticsTweetUpdateOneWithoutGeneralAnalyticsNestedInput = {
    create?: XOR<TwitterAnalyticsTweetCreateWithoutGeneralAnalyticsInput, TwitterAnalyticsTweetUncheckedCreateWithoutGeneralAnalyticsInput>
    connectOrCreate?: TwitterAnalyticsTweetCreateOrConnectWithoutGeneralAnalyticsInput
    upsert?: TwitterAnalyticsTweetUpsertWithoutGeneralAnalyticsInput
    disconnect?: TwitterAnalyticsTweetWhereInput | boolean
    delete?: TwitterAnalyticsTweetWhereInput | boolean
    connect?: TwitterAnalyticsTweetWhereUniqueInput
    update?: XOR<XOR<TwitterAnalyticsTweetUpdateToOneWithWhereWithoutGeneralAnalyticsInput, TwitterAnalyticsTweetUpdateWithoutGeneralAnalyticsInput>, TwitterAnalyticsTweetUncheckedUpdateWithoutGeneralAnalyticsInput>
  }

  export type InstagramAnalyticsPostUpdateOneWithoutGeneralAnalyticsNestedInput = {
    create?: XOR<InstagramAnalyticsPostCreateWithoutGeneralAnalyticsInput, InstagramAnalyticsPostUncheckedCreateWithoutGeneralAnalyticsInput>
    connectOrCreate?: InstagramAnalyticsPostCreateOrConnectWithoutGeneralAnalyticsInput
    upsert?: InstagramAnalyticsPostUpsertWithoutGeneralAnalyticsInput
    disconnect?: InstagramAnalyticsPostWhereInput | boolean
    delete?: InstagramAnalyticsPostWhereInput | boolean
    connect?: InstagramAnalyticsPostWhereUniqueInput
    update?: XOR<XOR<InstagramAnalyticsPostUpdateToOneWithWhereWithoutGeneralAnalyticsInput, InstagramAnalyticsPostUpdateWithoutGeneralAnalyticsInput>, InstagramAnalyticsPostUncheckedUpdateWithoutGeneralAnalyticsInput>
  }

  export type FacebookAnalyticsPostUncheckedUpdateOneWithoutGeneralAnalyticsNestedInput = {
    create?: XOR<FacebookAnalyticsPostCreateWithoutGeneralAnalyticsInput, FacebookAnalyticsPostUncheckedCreateWithoutGeneralAnalyticsInput>
    connectOrCreate?: FacebookAnalyticsPostCreateOrConnectWithoutGeneralAnalyticsInput
    upsert?: FacebookAnalyticsPostUpsertWithoutGeneralAnalyticsInput
    disconnect?: FacebookAnalyticsPostWhereInput | boolean
    delete?: FacebookAnalyticsPostWhereInput | boolean
    connect?: FacebookAnalyticsPostWhereUniqueInput
    update?: XOR<XOR<FacebookAnalyticsPostUpdateToOneWithWhereWithoutGeneralAnalyticsInput, FacebookAnalyticsPostUpdateWithoutGeneralAnalyticsInput>, FacebookAnalyticsPostUncheckedUpdateWithoutGeneralAnalyticsInput>
  }

  export type TwitterAnalyticsTweetUncheckedUpdateOneWithoutGeneralAnalyticsNestedInput = {
    create?: XOR<TwitterAnalyticsTweetCreateWithoutGeneralAnalyticsInput, TwitterAnalyticsTweetUncheckedCreateWithoutGeneralAnalyticsInput>
    connectOrCreate?: TwitterAnalyticsTweetCreateOrConnectWithoutGeneralAnalyticsInput
    upsert?: TwitterAnalyticsTweetUpsertWithoutGeneralAnalyticsInput
    disconnect?: TwitterAnalyticsTweetWhereInput | boolean
    delete?: TwitterAnalyticsTweetWhereInput | boolean
    connect?: TwitterAnalyticsTweetWhereUniqueInput
    update?: XOR<XOR<TwitterAnalyticsTweetUpdateToOneWithWhereWithoutGeneralAnalyticsInput, TwitterAnalyticsTweetUpdateWithoutGeneralAnalyticsInput>, TwitterAnalyticsTweetUncheckedUpdateWithoutGeneralAnalyticsInput>
  }

  export type InstagramAnalyticsPostUncheckedUpdateOneWithoutGeneralAnalyticsNestedInput = {
    create?: XOR<InstagramAnalyticsPostCreateWithoutGeneralAnalyticsInput, InstagramAnalyticsPostUncheckedCreateWithoutGeneralAnalyticsInput>
    connectOrCreate?: InstagramAnalyticsPostCreateOrConnectWithoutGeneralAnalyticsInput
    upsert?: InstagramAnalyticsPostUpsertWithoutGeneralAnalyticsInput
    disconnect?: InstagramAnalyticsPostWhereInput | boolean
    delete?: InstagramAnalyticsPostWhereInput | boolean
    connect?: InstagramAnalyticsPostWhereUniqueInput
    update?: XOR<XOR<InstagramAnalyticsPostUpdateToOneWithWhereWithoutGeneralAnalyticsInput, InstagramAnalyticsPostUpdateWithoutGeneralAnalyticsInput>, InstagramAnalyticsPostUncheckedUpdateWithoutGeneralAnalyticsInput>
  }

  export type GeneralAnalyticsDataCreateNestedOneWithoutFacebookAnalyticsPostInput = {
    create?: XOR<GeneralAnalyticsDataCreateWithoutFacebookAnalyticsPostInput, GeneralAnalyticsDataUncheckedCreateWithoutFacebookAnalyticsPostInput>
    connectOrCreate?: GeneralAnalyticsDataCreateOrConnectWithoutFacebookAnalyticsPostInput
    connect?: GeneralAnalyticsDataWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GeneralAnalyticsDataUpdateOneRequiredWithoutFacebookAnalyticsPostNestedInput = {
    create?: XOR<GeneralAnalyticsDataCreateWithoutFacebookAnalyticsPostInput, GeneralAnalyticsDataUncheckedCreateWithoutFacebookAnalyticsPostInput>
    connectOrCreate?: GeneralAnalyticsDataCreateOrConnectWithoutFacebookAnalyticsPostInput
    upsert?: GeneralAnalyticsDataUpsertWithoutFacebookAnalyticsPostInput
    connect?: GeneralAnalyticsDataWhereUniqueInput
    update?: XOR<XOR<GeneralAnalyticsDataUpdateToOneWithWhereWithoutFacebookAnalyticsPostInput, GeneralAnalyticsDataUpdateWithoutFacebookAnalyticsPostInput>, GeneralAnalyticsDataUncheckedUpdateWithoutFacebookAnalyticsPostInput>
  }

  export type TwitterAnalyticsTweetCreatehashtagsInput = {
    set: string[]
  }

  export type GeneralAnalyticsDataCreateNestedOneWithoutTwitterAnalyticsTweetInput = {
    create?: XOR<GeneralAnalyticsDataCreateWithoutTwitterAnalyticsTweetInput, GeneralAnalyticsDataUncheckedCreateWithoutTwitterAnalyticsTweetInput>
    connectOrCreate?: GeneralAnalyticsDataCreateOrConnectWithoutTwitterAnalyticsTweetInput
    connect?: GeneralAnalyticsDataWhereUniqueInput
  }

  export type TwitterAnalyticsTweetUpdatehashtagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type GeneralAnalyticsDataUpdateOneRequiredWithoutTwitterAnalyticsTweetNestedInput = {
    create?: XOR<GeneralAnalyticsDataCreateWithoutTwitterAnalyticsTweetInput, GeneralAnalyticsDataUncheckedCreateWithoutTwitterAnalyticsTweetInput>
    connectOrCreate?: GeneralAnalyticsDataCreateOrConnectWithoutTwitterAnalyticsTweetInput
    upsert?: GeneralAnalyticsDataUpsertWithoutTwitterAnalyticsTweetInput
    connect?: GeneralAnalyticsDataWhereUniqueInput
    update?: XOR<XOR<GeneralAnalyticsDataUpdateToOneWithWhereWithoutTwitterAnalyticsTweetInput, GeneralAnalyticsDataUpdateWithoutTwitterAnalyticsTweetInput>, GeneralAnalyticsDataUncheckedUpdateWithoutTwitterAnalyticsTweetInput>
  }

  export type GeneralAnalyticsDataCreateNestedOneWithoutInstagramAnalyticsPostInput = {
    create?: XOR<GeneralAnalyticsDataCreateWithoutInstagramAnalyticsPostInput, GeneralAnalyticsDataUncheckedCreateWithoutInstagramAnalyticsPostInput>
    connectOrCreate?: GeneralAnalyticsDataCreateOrConnectWithoutInstagramAnalyticsPostInput
    connect?: GeneralAnalyticsDataWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GeneralAnalyticsDataUpdateOneRequiredWithoutInstagramAnalyticsPostNestedInput = {
    create?: XOR<GeneralAnalyticsDataCreateWithoutInstagramAnalyticsPostInput, GeneralAnalyticsDataUncheckedCreateWithoutInstagramAnalyticsPostInput>
    connectOrCreate?: GeneralAnalyticsDataCreateOrConnectWithoutInstagramAnalyticsPostInput
    upsert?: GeneralAnalyticsDataUpsertWithoutInstagramAnalyticsPostInput
    connect?: GeneralAnalyticsDataWhereUniqueInput
    update?: XOR<XOR<GeneralAnalyticsDataUpdateToOneWithWhereWithoutInstagramAnalyticsPostInput, GeneralAnalyticsDataUpdateWithoutInstagramAnalyticsPostInput>, GeneralAnalyticsDataUncheckedUpdateWithoutInstagramAnalyticsPostInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ConfirmationCodeCreateWithoutUserInput = {
    code?: string
    expiresAt: Date | string
  }

  export type ConfirmationCodeUncheckedCreateWithoutUserInput = {
    code?: string
    expiresAt: Date | string
  }

  export type ConfirmationCodeCreateOrConnectWithoutUserInput = {
    where: ConfirmationCodeWhereUniqueInput
    create: XOR<ConfirmationCodeCreateWithoutUserInput, ConfirmationCodeUncheckedCreateWithoutUserInput>
  }

  export type SocialAccountCreateWithoutUserInput = {
    accessToken: string
    refreshToken?: string | null
    socialAccountId: string
    connectedAt?: Date | string
    socialNetwork: SocialNetworkCreateNestedOneWithoutSocialAccountsInput
    generalAnalytics?: GeneralAnalyticsDataCreateNestedManyWithoutSocialAccountInput
  }

  export type SocialAccountUncheckedCreateWithoutUserInput = {
    id?: number
    socialNetworkId: number
    accessToken: string
    refreshToken?: string | null
    socialAccountId: string
    connectedAt?: Date | string
    generalAnalytics?: GeneralAnalyticsDataUncheckedCreateNestedManyWithoutSocialAccountInput
  }

  export type SocialAccountCreateOrConnectWithoutUserInput = {
    where: SocialAccountWhereUniqueInput
    create: XOR<SocialAccountCreateWithoutUserInput, SocialAccountUncheckedCreateWithoutUserInput>
  }

  export type SocialAccountCreateManyUserInputEnvelope = {
    data: SocialAccountCreateManyUserInput | SocialAccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ConfirmationCodeUpsertWithoutUserInput = {
    update: XOR<ConfirmationCodeUpdateWithoutUserInput, ConfirmationCodeUncheckedUpdateWithoutUserInput>
    create: XOR<ConfirmationCodeCreateWithoutUserInput, ConfirmationCodeUncheckedCreateWithoutUserInput>
    where?: ConfirmationCodeWhereInput
  }

  export type ConfirmationCodeUpdateToOneWithWhereWithoutUserInput = {
    where?: ConfirmationCodeWhereInput
    data: XOR<ConfirmationCodeUpdateWithoutUserInput, ConfirmationCodeUncheckedUpdateWithoutUserInput>
  }

  export type ConfirmationCodeUpdateWithoutUserInput = {
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfirmationCodeUncheckedUpdateWithoutUserInput = {
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialAccountUpsertWithWhereUniqueWithoutUserInput = {
    where: SocialAccountWhereUniqueInput
    update: XOR<SocialAccountUpdateWithoutUserInput, SocialAccountUncheckedUpdateWithoutUserInput>
    create: XOR<SocialAccountCreateWithoutUserInput, SocialAccountUncheckedCreateWithoutUserInput>
  }

  export type SocialAccountUpdateWithWhereUniqueWithoutUserInput = {
    where: SocialAccountWhereUniqueInput
    data: XOR<SocialAccountUpdateWithoutUserInput, SocialAccountUncheckedUpdateWithoutUserInput>
  }

  export type SocialAccountUpdateManyWithWhereWithoutUserInput = {
    where: SocialAccountScalarWhereInput
    data: XOR<SocialAccountUpdateManyMutationInput, SocialAccountUncheckedUpdateManyWithoutUserInput>
  }

  export type SocialAccountScalarWhereInput = {
    AND?: SocialAccountScalarWhereInput | SocialAccountScalarWhereInput[]
    OR?: SocialAccountScalarWhereInput[]
    NOT?: SocialAccountScalarWhereInput | SocialAccountScalarWhereInput[]
    id?: IntFilter<"SocialAccount"> | number
    userId?: IntFilter<"SocialAccount"> | number
    socialNetworkId?: IntFilter<"SocialAccount"> | number
    accessToken?: StringFilter<"SocialAccount"> | string
    refreshToken?: StringNullableFilter<"SocialAccount"> | string | null
    socialAccountId?: StringFilter<"SocialAccount"> | string
    connectedAt?: DateTimeFilter<"SocialAccount"> | Date | string
  }

  export type UserCreateWithoutConfirmationCodeInput = {
    email: string
    passwordHash: string
    registeredAt?: Date | string
    isEmailVerified?: boolean
    socialAccounts?: SocialAccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConfirmationCodeInput = {
    id?: number
    email: string
    passwordHash: string
    registeredAt?: Date | string
    isEmailVerified?: boolean
    socialAccounts?: SocialAccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConfirmationCodeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConfirmationCodeInput, UserUncheckedCreateWithoutConfirmationCodeInput>
  }

  export type UserUpsertWithoutConfirmationCodeInput = {
    update: XOR<UserUpdateWithoutConfirmationCodeInput, UserUncheckedUpdateWithoutConfirmationCodeInput>
    create: XOR<UserCreateWithoutConfirmationCodeInput, UserUncheckedCreateWithoutConfirmationCodeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConfirmationCodeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConfirmationCodeInput, UserUncheckedUpdateWithoutConfirmationCodeInput>
  }

  export type UserUpdateWithoutConfirmationCodeInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    socialAccounts?: SocialAccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConfirmationCodeInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    socialAccounts?: SocialAccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SocialAccountCreateWithoutSocialNetworkInput = {
    accessToken: string
    refreshToken?: string | null
    socialAccountId: string
    connectedAt?: Date | string
    user: UserCreateNestedOneWithoutSocialAccountsInput
    generalAnalytics?: GeneralAnalyticsDataCreateNestedManyWithoutSocialAccountInput
  }

  export type SocialAccountUncheckedCreateWithoutSocialNetworkInput = {
    id?: number
    userId: number
    accessToken: string
    refreshToken?: string | null
    socialAccountId: string
    connectedAt?: Date | string
    generalAnalytics?: GeneralAnalyticsDataUncheckedCreateNestedManyWithoutSocialAccountInput
  }

  export type SocialAccountCreateOrConnectWithoutSocialNetworkInput = {
    where: SocialAccountWhereUniqueInput
    create: XOR<SocialAccountCreateWithoutSocialNetworkInput, SocialAccountUncheckedCreateWithoutSocialNetworkInput>
  }

  export type SocialAccountCreateManySocialNetworkInputEnvelope = {
    data: SocialAccountCreateManySocialNetworkInput | SocialAccountCreateManySocialNetworkInput[]
    skipDuplicates?: boolean
  }

  export type SocialAccountUpsertWithWhereUniqueWithoutSocialNetworkInput = {
    where: SocialAccountWhereUniqueInput
    update: XOR<SocialAccountUpdateWithoutSocialNetworkInput, SocialAccountUncheckedUpdateWithoutSocialNetworkInput>
    create: XOR<SocialAccountCreateWithoutSocialNetworkInput, SocialAccountUncheckedCreateWithoutSocialNetworkInput>
  }

  export type SocialAccountUpdateWithWhereUniqueWithoutSocialNetworkInput = {
    where: SocialAccountWhereUniqueInput
    data: XOR<SocialAccountUpdateWithoutSocialNetworkInput, SocialAccountUncheckedUpdateWithoutSocialNetworkInput>
  }

  export type SocialAccountUpdateManyWithWhereWithoutSocialNetworkInput = {
    where: SocialAccountScalarWhereInput
    data: XOR<SocialAccountUpdateManyMutationInput, SocialAccountUncheckedUpdateManyWithoutSocialNetworkInput>
  }

  export type UserCreateWithoutSocialAccountsInput = {
    email: string
    passwordHash: string
    registeredAt?: Date | string
    isEmailVerified?: boolean
    confirmationCode?: ConfirmationCodeCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSocialAccountsInput = {
    id?: number
    email: string
    passwordHash: string
    registeredAt?: Date | string
    isEmailVerified?: boolean
    confirmationCode?: ConfirmationCodeUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSocialAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSocialAccountsInput, UserUncheckedCreateWithoutSocialAccountsInput>
  }

  export type SocialNetworkCreateWithoutSocialAccountsInput = {
    name: string
    profileUrlFormat?: string | null
  }

  export type SocialNetworkUncheckedCreateWithoutSocialAccountsInput = {
    id?: number
    name: string
    profileUrlFormat?: string | null
  }

  export type SocialNetworkCreateOrConnectWithoutSocialAccountsInput = {
    where: SocialNetworkWhereUniqueInput
    create: XOR<SocialNetworkCreateWithoutSocialAccountsInput, SocialNetworkUncheckedCreateWithoutSocialAccountsInput>
  }

  export type GeneralAnalyticsDataCreateWithoutSocialAccountInput = {
    metricCollectedAt?: Date | string
    dataType: string
    lastUpdatedAt?: Date | string
    facebookAnalyticsPost?: FacebookAnalyticsPostCreateNestedOneWithoutGeneralAnalyticsInput
    twitterAnalyticsTweet?: TwitterAnalyticsTweetCreateNestedOneWithoutGeneralAnalyticsInput
    instagramAnalyticsPost?: InstagramAnalyticsPostCreateNestedOneWithoutGeneralAnalyticsInput
  }

  export type GeneralAnalyticsDataUncheckedCreateWithoutSocialAccountInput = {
    id?: number
    metricCollectedAt?: Date | string
    dataType: string
    lastUpdatedAt?: Date | string
    facebookAnalyticsPost?: FacebookAnalyticsPostUncheckedCreateNestedOneWithoutGeneralAnalyticsInput
    twitterAnalyticsTweet?: TwitterAnalyticsTweetUncheckedCreateNestedOneWithoutGeneralAnalyticsInput
    instagramAnalyticsPost?: InstagramAnalyticsPostUncheckedCreateNestedOneWithoutGeneralAnalyticsInput
  }

  export type GeneralAnalyticsDataCreateOrConnectWithoutSocialAccountInput = {
    where: GeneralAnalyticsDataWhereUniqueInput
    create: XOR<GeneralAnalyticsDataCreateWithoutSocialAccountInput, GeneralAnalyticsDataUncheckedCreateWithoutSocialAccountInput>
  }

  export type GeneralAnalyticsDataCreateManySocialAccountInputEnvelope = {
    data: GeneralAnalyticsDataCreateManySocialAccountInput | GeneralAnalyticsDataCreateManySocialAccountInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSocialAccountsInput = {
    update: XOR<UserUpdateWithoutSocialAccountsInput, UserUncheckedUpdateWithoutSocialAccountsInput>
    create: XOR<UserCreateWithoutSocialAccountsInput, UserUncheckedCreateWithoutSocialAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSocialAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSocialAccountsInput, UserUncheckedUpdateWithoutSocialAccountsInput>
  }

  export type UserUpdateWithoutSocialAccountsInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    confirmationCode?: ConfirmationCodeUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSocialAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    confirmationCode?: ConfirmationCodeUncheckedUpdateOneWithoutUserNestedInput
  }

  export type SocialNetworkUpsertWithoutSocialAccountsInput = {
    update: XOR<SocialNetworkUpdateWithoutSocialAccountsInput, SocialNetworkUncheckedUpdateWithoutSocialAccountsInput>
    create: XOR<SocialNetworkCreateWithoutSocialAccountsInput, SocialNetworkUncheckedCreateWithoutSocialAccountsInput>
    where?: SocialNetworkWhereInput
  }

  export type SocialNetworkUpdateToOneWithWhereWithoutSocialAccountsInput = {
    where?: SocialNetworkWhereInput
    data: XOR<SocialNetworkUpdateWithoutSocialAccountsInput, SocialNetworkUncheckedUpdateWithoutSocialAccountsInput>
  }

  export type SocialNetworkUpdateWithoutSocialAccountsInput = {
    name?: StringFieldUpdateOperationsInput | string
    profileUrlFormat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SocialNetworkUncheckedUpdateWithoutSocialAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profileUrlFormat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GeneralAnalyticsDataUpsertWithWhereUniqueWithoutSocialAccountInput = {
    where: GeneralAnalyticsDataWhereUniqueInput
    update: XOR<GeneralAnalyticsDataUpdateWithoutSocialAccountInput, GeneralAnalyticsDataUncheckedUpdateWithoutSocialAccountInput>
    create: XOR<GeneralAnalyticsDataCreateWithoutSocialAccountInput, GeneralAnalyticsDataUncheckedCreateWithoutSocialAccountInput>
  }

  export type GeneralAnalyticsDataUpdateWithWhereUniqueWithoutSocialAccountInput = {
    where: GeneralAnalyticsDataWhereUniqueInput
    data: XOR<GeneralAnalyticsDataUpdateWithoutSocialAccountInput, GeneralAnalyticsDataUncheckedUpdateWithoutSocialAccountInput>
  }

  export type GeneralAnalyticsDataUpdateManyWithWhereWithoutSocialAccountInput = {
    where: GeneralAnalyticsDataScalarWhereInput
    data: XOR<GeneralAnalyticsDataUpdateManyMutationInput, GeneralAnalyticsDataUncheckedUpdateManyWithoutSocialAccountInput>
  }

  export type GeneralAnalyticsDataScalarWhereInput = {
    AND?: GeneralAnalyticsDataScalarWhereInput | GeneralAnalyticsDataScalarWhereInput[]
    OR?: GeneralAnalyticsDataScalarWhereInput[]
    NOT?: GeneralAnalyticsDataScalarWhereInput | GeneralAnalyticsDataScalarWhereInput[]
    id?: IntFilter<"GeneralAnalyticsData"> | number
    metricCollectedAt?: DateTimeFilter<"GeneralAnalyticsData"> | Date | string
    dataType?: StringFilter<"GeneralAnalyticsData"> | string
    lastUpdatedAt?: DateTimeFilter<"GeneralAnalyticsData"> | Date | string
    socialAccountId?: IntFilter<"GeneralAnalyticsData"> | number
  }

  export type SocialAccountCreateWithoutGeneralAnalyticsInput = {
    accessToken: string
    refreshToken?: string | null
    socialAccountId: string
    connectedAt?: Date | string
    user: UserCreateNestedOneWithoutSocialAccountsInput
    socialNetwork: SocialNetworkCreateNestedOneWithoutSocialAccountsInput
  }

  export type SocialAccountUncheckedCreateWithoutGeneralAnalyticsInput = {
    id?: number
    userId: number
    socialNetworkId: number
    accessToken: string
    refreshToken?: string | null
    socialAccountId: string
    connectedAt?: Date | string
  }

  export type SocialAccountCreateOrConnectWithoutGeneralAnalyticsInput = {
    where: SocialAccountWhereUniqueInput
    create: XOR<SocialAccountCreateWithoutGeneralAnalyticsInput, SocialAccountUncheckedCreateWithoutGeneralAnalyticsInput>
  }

  export type FacebookAnalyticsPostCreateWithoutGeneralAnalyticsInput = {
    postId: string
    postContent?: string | null
    postType?: string | null
    likeCount?: number
    commentCount?: number
    shareCount?: number
    coverageOrganic?: number | null
    coveragePaid?: number | null
    postClickCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacebookAnalyticsPostUncheckedCreateWithoutGeneralAnalyticsInput = {
    id?: number
    postId: string
    postContent?: string | null
    postType?: string | null
    likeCount?: number
    commentCount?: number
    shareCount?: number
    coverageOrganic?: number | null
    coveragePaid?: number | null
    postClickCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacebookAnalyticsPostCreateOrConnectWithoutGeneralAnalyticsInput = {
    where: FacebookAnalyticsPostWhereUniqueInput
    create: XOR<FacebookAnalyticsPostCreateWithoutGeneralAnalyticsInput, FacebookAnalyticsPostUncheckedCreateWithoutGeneralAnalyticsInput>
  }

  export type TwitterAnalyticsTweetCreateWithoutGeneralAnalyticsInput = {
    tweetId: string
    tweetContent?: string | null
    retweetsCount?: number
    quoteCount?: number
    likeCount?: number
    commentCount?: number
    viewCount?: number | null
    hashtags?: TwitterAnalyticsTweetCreatehashtagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterAnalyticsTweetUncheckedCreateWithoutGeneralAnalyticsInput = {
    id?: number
    tweetId: string
    tweetContent?: string | null
    retweetsCount?: number
    quoteCount?: number
    likeCount?: number
    commentCount?: number
    viewCount?: number | null
    hashtags?: TwitterAnalyticsTweetCreatehashtagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterAnalyticsTweetCreateOrConnectWithoutGeneralAnalyticsInput = {
    where: TwitterAnalyticsTweetWhereUniqueInput
    create: XOR<TwitterAnalyticsTweetCreateWithoutGeneralAnalyticsInput, TwitterAnalyticsTweetUncheckedCreateWithoutGeneralAnalyticsInput>
  }

  export type InstagramAnalyticsPostCreateWithoutGeneralAnalyticsInput = {
    postId: string
    postContent?: string | null
    postType?: string | null
    likeCount?: number
    commentCount?: number
    saveCount?: number | null
    reach?: number | null
    impressions?: number | null
    engagementRate?: number | null
    videoViews?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstagramAnalyticsPostUncheckedCreateWithoutGeneralAnalyticsInput = {
    id?: number
    postId: string
    postContent?: string | null
    postType?: string | null
    likeCount?: number
    commentCount?: number
    saveCount?: number | null
    reach?: number | null
    impressions?: number | null
    engagementRate?: number | null
    videoViews?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstagramAnalyticsPostCreateOrConnectWithoutGeneralAnalyticsInput = {
    where: InstagramAnalyticsPostWhereUniqueInput
    create: XOR<InstagramAnalyticsPostCreateWithoutGeneralAnalyticsInput, InstagramAnalyticsPostUncheckedCreateWithoutGeneralAnalyticsInput>
  }

  export type SocialAccountUpsertWithoutGeneralAnalyticsInput = {
    update: XOR<SocialAccountUpdateWithoutGeneralAnalyticsInput, SocialAccountUncheckedUpdateWithoutGeneralAnalyticsInput>
    create: XOR<SocialAccountCreateWithoutGeneralAnalyticsInput, SocialAccountUncheckedCreateWithoutGeneralAnalyticsInput>
    where?: SocialAccountWhereInput
  }

  export type SocialAccountUpdateToOneWithWhereWithoutGeneralAnalyticsInput = {
    where?: SocialAccountWhereInput
    data: XOR<SocialAccountUpdateWithoutGeneralAnalyticsInput, SocialAccountUncheckedUpdateWithoutGeneralAnalyticsInput>
  }

  export type SocialAccountUpdateWithoutGeneralAnalyticsInput = {
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    socialAccountId?: StringFieldUpdateOperationsInput | string
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSocialAccountsNestedInput
    socialNetwork?: SocialNetworkUpdateOneRequiredWithoutSocialAccountsNestedInput
  }

  export type SocialAccountUncheckedUpdateWithoutGeneralAnalyticsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    socialNetworkId?: IntFieldUpdateOperationsInput | number
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    socialAccountId?: StringFieldUpdateOperationsInput | string
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacebookAnalyticsPostUpsertWithoutGeneralAnalyticsInput = {
    update: XOR<FacebookAnalyticsPostUpdateWithoutGeneralAnalyticsInput, FacebookAnalyticsPostUncheckedUpdateWithoutGeneralAnalyticsInput>
    create: XOR<FacebookAnalyticsPostCreateWithoutGeneralAnalyticsInput, FacebookAnalyticsPostUncheckedCreateWithoutGeneralAnalyticsInput>
    where?: FacebookAnalyticsPostWhereInput
  }

  export type FacebookAnalyticsPostUpdateToOneWithWhereWithoutGeneralAnalyticsInput = {
    where?: FacebookAnalyticsPostWhereInput
    data: XOR<FacebookAnalyticsPostUpdateWithoutGeneralAnalyticsInput, FacebookAnalyticsPostUncheckedUpdateWithoutGeneralAnalyticsInput>
  }

  export type FacebookAnalyticsPostUpdateWithoutGeneralAnalyticsInput = {
    postId?: StringFieldUpdateOperationsInput | string
    postContent?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    shareCount?: IntFieldUpdateOperationsInput | number
    coverageOrganic?: NullableIntFieldUpdateOperationsInput | number | null
    coveragePaid?: NullableIntFieldUpdateOperationsInput | number | null
    postClickCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacebookAnalyticsPostUncheckedUpdateWithoutGeneralAnalyticsInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: StringFieldUpdateOperationsInput | string
    postContent?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    shareCount?: IntFieldUpdateOperationsInput | number
    coverageOrganic?: NullableIntFieldUpdateOperationsInput | number | null
    coveragePaid?: NullableIntFieldUpdateOperationsInput | number | null
    postClickCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterAnalyticsTweetUpsertWithoutGeneralAnalyticsInput = {
    update: XOR<TwitterAnalyticsTweetUpdateWithoutGeneralAnalyticsInput, TwitterAnalyticsTweetUncheckedUpdateWithoutGeneralAnalyticsInput>
    create: XOR<TwitterAnalyticsTweetCreateWithoutGeneralAnalyticsInput, TwitterAnalyticsTweetUncheckedCreateWithoutGeneralAnalyticsInput>
    where?: TwitterAnalyticsTweetWhereInput
  }

  export type TwitterAnalyticsTweetUpdateToOneWithWhereWithoutGeneralAnalyticsInput = {
    where?: TwitterAnalyticsTweetWhereInput
    data: XOR<TwitterAnalyticsTweetUpdateWithoutGeneralAnalyticsInput, TwitterAnalyticsTweetUncheckedUpdateWithoutGeneralAnalyticsInput>
  }

  export type TwitterAnalyticsTweetUpdateWithoutGeneralAnalyticsInput = {
    tweetId?: StringFieldUpdateOperationsInput | string
    tweetContent?: NullableStringFieldUpdateOperationsInput | string | null
    retweetsCount?: IntFieldUpdateOperationsInput | number
    quoteCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    viewCount?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: TwitterAnalyticsTweetUpdatehashtagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterAnalyticsTweetUncheckedUpdateWithoutGeneralAnalyticsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tweetId?: StringFieldUpdateOperationsInput | string
    tweetContent?: NullableStringFieldUpdateOperationsInput | string | null
    retweetsCount?: IntFieldUpdateOperationsInput | number
    quoteCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    viewCount?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: TwitterAnalyticsTweetUpdatehashtagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstagramAnalyticsPostUpsertWithoutGeneralAnalyticsInput = {
    update: XOR<InstagramAnalyticsPostUpdateWithoutGeneralAnalyticsInput, InstagramAnalyticsPostUncheckedUpdateWithoutGeneralAnalyticsInput>
    create: XOR<InstagramAnalyticsPostCreateWithoutGeneralAnalyticsInput, InstagramAnalyticsPostUncheckedCreateWithoutGeneralAnalyticsInput>
    where?: InstagramAnalyticsPostWhereInput
  }

  export type InstagramAnalyticsPostUpdateToOneWithWhereWithoutGeneralAnalyticsInput = {
    where?: InstagramAnalyticsPostWhereInput
    data: XOR<InstagramAnalyticsPostUpdateWithoutGeneralAnalyticsInput, InstagramAnalyticsPostUncheckedUpdateWithoutGeneralAnalyticsInput>
  }

  export type InstagramAnalyticsPostUpdateWithoutGeneralAnalyticsInput = {
    postId?: StringFieldUpdateOperationsInput | string
    postContent?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    saveCount?: NullableIntFieldUpdateOperationsInput | number | null
    reach?: NullableIntFieldUpdateOperationsInput | number | null
    impressions?: NullableIntFieldUpdateOperationsInput | number | null
    engagementRate?: NullableFloatFieldUpdateOperationsInput | number | null
    videoViews?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstagramAnalyticsPostUncheckedUpdateWithoutGeneralAnalyticsInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: StringFieldUpdateOperationsInput | string
    postContent?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: NullableStringFieldUpdateOperationsInput | string | null
    likeCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    saveCount?: NullableIntFieldUpdateOperationsInput | number | null
    reach?: NullableIntFieldUpdateOperationsInput | number | null
    impressions?: NullableIntFieldUpdateOperationsInput | number | null
    engagementRate?: NullableFloatFieldUpdateOperationsInput | number | null
    videoViews?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneralAnalyticsDataCreateWithoutFacebookAnalyticsPostInput = {
    metricCollectedAt?: Date | string
    dataType: string
    lastUpdatedAt?: Date | string
    socialAccount: SocialAccountCreateNestedOneWithoutGeneralAnalyticsInput
    twitterAnalyticsTweet?: TwitterAnalyticsTweetCreateNestedOneWithoutGeneralAnalyticsInput
    instagramAnalyticsPost?: InstagramAnalyticsPostCreateNestedOneWithoutGeneralAnalyticsInput
  }

  export type GeneralAnalyticsDataUncheckedCreateWithoutFacebookAnalyticsPostInput = {
    id?: number
    metricCollectedAt?: Date | string
    dataType: string
    lastUpdatedAt?: Date | string
    socialAccountId: number
    twitterAnalyticsTweet?: TwitterAnalyticsTweetUncheckedCreateNestedOneWithoutGeneralAnalyticsInput
    instagramAnalyticsPost?: InstagramAnalyticsPostUncheckedCreateNestedOneWithoutGeneralAnalyticsInput
  }

  export type GeneralAnalyticsDataCreateOrConnectWithoutFacebookAnalyticsPostInput = {
    where: GeneralAnalyticsDataWhereUniqueInput
    create: XOR<GeneralAnalyticsDataCreateWithoutFacebookAnalyticsPostInput, GeneralAnalyticsDataUncheckedCreateWithoutFacebookAnalyticsPostInput>
  }

  export type GeneralAnalyticsDataUpsertWithoutFacebookAnalyticsPostInput = {
    update: XOR<GeneralAnalyticsDataUpdateWithoutFacebookAnalyticsPostInput, GeneralAnalyticsDataUncheckedUpdateWithoutFacebookAnalyticsPostInput>
    create: XOR<GeneralAnalyticsDataCreateWithoutFacebookAnalyticsPostInput, GeneralAnalyticsDataUncheckedCreateWithoutFacebookAnalyticsPostInput>
    where?: GeneralAnalyticsDataWhereInput
  }

  export type GeneralAnalyticsDataUpdateToOneWithWhereWithoutFacebookAnalyticsPostInput = {
    where?: GeneralAnalyticsDataWhereInput
    data: XOR<GeneralAnalyticsDataUpdateWithoutFacebookAnalyticsPostInput, GeneralAnalyticsDataUncheckedUpdateWithoutFacebookAnalyticsPostInput>
  }

  export type GeneralAnalyticsDataUpdateWithoutFacebookAnalyticsPostInput = {
    metricCollectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataType?: StringFieldUpdateOperationsInput | string
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialAccount?: SocialAccountUpdateOneRequiredWithoutGeneralAnalyticsNestedInput
    twitterAnalyticsTweet?: TwitterAnalyticsTweetUpdateOneWithoutGeneralAnalyticsNestedInput
    instagramAnalyticsPost?: InstagramAnalyticsPostUpdateOneWithoutGeneralAnalyticsNestedInput
  }

  export type GeneralAnalyticsDataUncheckedUpdateWithoutFacebookAnalyticsPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    metricCollectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataType?: StringFieldUpdateOperationsInput | string
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialAccountId?: IntFieldUpdateOperationsInput | number
    twitterAnalyticsTweet?: TwitterAnalyticsTweetUncheckedUpdateOneWithoutGeneralAnalyticsNestedInput
    instagramAnalyticsPost?: InstagramAnalyticsPostUncheckedUpdateOneWithoutGeneralAnalyticsNestedInput
  }

  export type GeneralAnalyticsDataCreateWithoutTwitterAnalyticsTweetInput = {
    metricCollectedAt?: Date | string
    dataType: string
    lastUpdatedAt?: Date | string
    socialAccount: SocialAccountCreateNestedOneWithoutGeneralAnalyticsInput
    facebookAnalyticsPost?: FacebookAnalyticsPostCreateNestedOneWithoutGeneralAnalyticsInput
    instagramAnalyticsPost?: InstagramAnalyticsPostCreateNestedOneWithoutGeneralAnalyticsInput
  }

  export type GeneralAnalyticsDataUncheckedCreateWithoutTwitterAnalyticsTweetInput = {
    id?: number
    metricCollectedAt?: Date | string
    dataType: string
    lastUpdatedAt?: Date | string
    socialAccountId: number
    facebookAnalyticsPost?: FacebookAnalyticsPostUncheckedCreateNestedOneWithoutGeneralAnalyticsInput
    instagramAnalyticsPost?: InstagramAnalyticsPostUncheckedCreateNestedOneWithoutGeneralAnalyticsInput
  }

  export type GeneralAnalyticsDataCreateOrConnectWithoutTwitterAnalyticsTweetInput = {
    where: GeneralAnalyticsDataWhereUniqueInput
    create: XOR<GeneralAnalyticsDataCreateWithoutTwitterAnalyticsTweetInput, GeneralAnalyticsDataUncheckedCreateWithoutTwitterAnalyticsTweetInput>
  }

  export type GeneralAnalyticsDataUpsertWithoutTwitterAnalyticsTweetInput = {
    update: XOR<GeneralAnalyticsDataUpdateWithoutTwitterAnalyticsTweetInput, GeneralAnalyticsDataUncheckedUpdateWithoutTwitterAnalyticsTweetInput>
    create: XOR<GeneralAnalyticsDataCreateWithoutTwitterAnalyticsTweetInput, GeneralAnalyticsDataUncheckedCreateWithoutTwitterAnalyticsTweetInput>
    where?: GeneralAnalyticsDataWhereInput
  }

  export type GeneralAnalyticsDataUpdateToOneWithWhereWithoutTwitterAnalyticsTweetInput = {
    where?: GeneralAnalyticsDataWhereInput
    data: XOR<GeneralAnalyticsDataUpdateWithoutTwitterAnalyticsTweetInput, GeneralAnalyticsDataUncheckedUpdateWithoutTwitterAnalyticsTweetInput>
  }

  export type GeneralAnalyticsDataUpdateWithoutTwitterAnalyticsTweetInput = {
    metricCollectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataType?: StringFieldUpdateOperationsInput | string
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialAccount?: SocialAccountUpdateOneRequiredWithoutGeneralAnalyticsNestedInput
    facebookAnalyticsPost?: FacebookAnalyticsPostUpdateOneWithoutGeneralAnalyticsNestedInput
    instagramAnalyticsPost?: InstagramAnalyticsPostUpdateOneWithoutGeneralAnalyticsNestedInput
  }

  export type GeneralAnalyticsDataUncheckedUpdateWithoutTwitterAnalyticsTweetInput = {
    id?: IntFieldUpdateOperationsInput | number
    metricCollectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataType?: StringFieldUpdateOperationsInput | string
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialAccountId?: IntFieldUpdateOperationsInput | number
    facebookAnalyticsPost?: FacebookAnalyticsPostUncheckedUpdateOneWithoutGeneralAnalyticsNestedInput
    instagramAnalyticsPost?: InstagramAnalyticsPostUncheckedUpdateOneWithoutGeneralAnalyticsNestedInput
  }

  export type GeneralAnalyticsDataCreateWithoutInstagramAnalyticsPostInput = {
    metricCollectedAt?: Date | string
    dataType: string
    lastUpdatedAt?: Date | string
    socialAccount: SocialAccountCreateNestedOneWithoutGeneralAnalyticsInput
    facebookAnalyticsPost?: FacebookAnalyticsPostCreateNestedOneWithoutGeneralAnalyticsInput
    twitterAnalyticsTweet?: TwitterAnalyticsTweetCreateNestedOneWithoutGeneralAnalyticsInput
  }

  export type GeneralAnalyticsDataUncheckedCreateWithoutInstagramAnalyticsPostInput = {
    id?: number
    metricCollectedAt?: Date | string
    dataType: string
    lastUpdatedAt?: Date | string
    socialAccountId: number
    facebookAnalyticsPost?: FacebookAnalyticsPostUncheckedCreateNestedOneWithoutGeneralAnalyticsInput
    twitterAnalyticsTweet?: TwitterAnalyticsTweetUncheckedCreateNestedOneWithoutGeneralAnalyticsInput
  }

  export type GeneralAnalyticsDataCreateOrConnectWithoutInstagramAnalyticsPostInput = {
    where: GeneralAnalyticsDataWhereUniqueInput
    create: XOR<GeneralAnalyticsDataCreateWithoutInstagramAnalyticsPostInput, GeneralAnalyticsDataUncheckedCreateWithoutInstagramAnalyticsPostInput>
  }

  export type GeneralAnalyticsDataUpsertWithoutInstagramAnalyticsPostInput = {
    update: XOR<GeneralAnalyticsDataUpdateWithoutInstagramAnalyticsPostInput, GeneralAnalyticsDataUncheckedUpdateWithoutInstagramAnalyticsPostInput>
    create: XOR<GeneralAnalyticsDataCreateWithoutInstagramAnalyticsPostInput, GeneralAnalyticsDataUncheckedCreateWithoutInstagramAnalyticsPostInput>
    where?: GeneralAnalyticsDataWhereInput
  }

  export type GeneralAnalyticsDataUpdateToOneWithWhereWithoutInstagramAnalyticsPostInput = {
    where?: GeneralAnalyticsDataWhereInput
    data: XOR<GeneralAnalyticsDataUpdateWithoutInstagramAnalyticsPostInput, GeneralAnalyticsDataUncheckedUpdateWithoutInstagramAnalyticsPostInput>
  }

  export type GeneralAnalyticsDataUpdateWithoutInstagramAnalyticsPostInput = {
    metricCollectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataType?: StringFieldUpdateOperationsInput | string
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialAccount?: SocialAccountUpdateOneRequiredWithoutGeneralAnalyticsNestedInput
    facebookAnalyticsPost?: FacebookAnalyticsPostUpdateOneWithoutGeneralAnalyticsNestedInput
    twitterAnalyticsTweet?: TwitterAnalyticsTweetUpdateOneWithoutGeneralAnalyticsNestedInput
  }

  export type GeneralAnalyticsDataUncheckedUpdateWithoutInstagramAnalyticsPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    metricCollectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataType?: StringFieldUpdateOperationsInput | string
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialAccountId?: IntFieldUpdateOperationsInput | number
    facebookAnalyticsPost?: FacebookAnalyticsPostUncheckedUpdateOneWithoutGeneralAnalyticsNestedInput
    twitterAnalyticsTweet?: TwitterAnalyticsTweetUncheckedUpdateOneWithoutGeneralAnalyticsNestedInput
  }

  export type SocialAccountCreateManyUserInput = {
    id?: number
    socialNetworkId: number
    accessToken: string
    refreshToken?: string | null
    socialAccountId: string
    connectedAt?: Date | string
  }

  export type SocialAccountUpdateWithoutUserInput = {
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    socialAccountId?: StringFieldUpdateOperationsInput | string
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialNetwork?: SocialNetworkUpdateOneRequiredWithoutSocialAccountsNestedInput
    generalAnalytics?: GeneralAnalyticsDataUpdateManyWithoutSocialAccountNestedInput
  }

  export type SocialAccountUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    socialNetworkId?: IntFieldUpdateOperationsInput | number
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    socialAccountId?: StringFieldUpdateOperationsInput | string
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generalAnalytics?: GeneralAnalyticsDataUncheckedUpdateManyWithoutSocialAccountNestedInput
  }

  export type SocialAccountUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    socialNetworkId?: IntFieldUpdateOperationsInput | number
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    socialAccountId?: StringFieldUpdateOperationsInput | string
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialAccountCreateManySocialNetworkInput = {
    id?: number
    userId: number
    accessToken: string
    refreshToken?: string | null
    socialAccountId: string
    connectedAt?: Date | string
  }

  export type SocialAccountUpdateWithoutSocialNetworkInput = {
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    socialAccountId?: StringFieldUpdateOperationsInput | string
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSocialAccountsNestedInput
    generalAnalytics?: GeneralAnalyticsDataUpdateManyWithoutSocialAccountNestedInput
  }

  export type SocialAccountUncheckedUpdateWithoutSocialNetworkInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    socialAccountId?: StringFieldUpdateOperationsInput | string
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generalAnalytics?: GeneralAnalyticsDataUncheckedUpdateManyWithoutSocialAccountNestedInput
  }

  export type SocialAccountUncheckedUpdateManyWithoutSocialNetworkInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    socialAccountId?: StringFieldUpdateOperationsInput | string
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneralAnalyticsDataCreateManySocialAccountInput = {
    id?: number
    metricCollectedAt?: Date | string
    dataType: string
    lastUpdatedAt?: Date | string
  }

  export type GeneralAnalyticsDataUpdateWithoutSocialAccountInput = {
    metricCollectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataType?: StringFieldUpdateOperationsInput | string
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookAnalyticsPost?: FacebookAnalyticsPostUpdateOneWithoutGeneralAnalyticsNestedInput
    twitterAnalyticsTweet?: TwitterAnalyticsTweetUpdateOneWithoutGeneralAnalyticsNestedInput
    instagramAnalyticsPost?: InstagramAnalyticsPostUpdateOneWithoutGeneralAnalyticsNestedInput
  }

  export type GeneralAnalyticsDataUncheckedUpdateWithoutSocialAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    metricCollectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataType?: StringFieldUpdateOperationsInput | string
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facebookAnalyticsPost?: FacebookAnalyticsPostUncheckedUpdateOneWithoutGeneralAnalyticsNestedInput
    twitterAnalyticsTweet?: TwitterAnalyticsTweetUncheckedUpdateOneWithoutGeneralAnalyticsNestedInput
    instagramAnalyticsPost?: InstagramAnalyticsPostUncheckedUpdateOneWithoutGeneralAnalyticsNestedInput
  }

  export type GeneralAnalyticsDataUncheckedUpdateManyWithoutSocialAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    metricCollectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataType?: StringFieldUpdateOperationsInput | string
    lastUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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