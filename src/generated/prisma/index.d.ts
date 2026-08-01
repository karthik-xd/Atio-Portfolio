
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
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model AcademicItem
 * 
 */
export type AcademicItem = $Result.DefaultSelection<Prisma.$AcademicItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ItemCategory: {
  PROJECT: 'PROJECT',
  RESEARCH_PAPER: 'RESEARCH_PAPER'
};

export type ItemCategory = (typeof ItemCategory)[keyof typeof ItemCategory]


export const AcademicType: {
  EDUCATION: 'EDUCATION',
  PUBLICATION: 'PUBLICATION'
};

export type AcademicType = (typeof AcademicType)[keyof typeof AcademicType]

}

export type ItemCategory = $Enums.ItemCategory

export const ItemCategory: typeof $Enums.ItemCategory

export type AcademicType = $Enums.AcademicType

export const AcademicType: typeof $Enums.AcademicType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Items
 * const items = await prisma.item.findMany()
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Items
   * const items = await prisma.item.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.academicItem`: Exposes CRUD operations for the **AcademicItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AcademicItems
    * const academicItems = await prisma.academicItem.findMany()
    * ```
    */
  get academicItem(): Prisma.AcademicItemDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    Item: 'Item',
    Profile: 'Profile',
    AcademicItem: 'AcademicItem'
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
      modelProps: "item" | "profile" | "academicItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      AcademicItem: {
        payload: Prisma.$AcademicItemPayload<ExtArgs>
        fields: Prisma.AcademicItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AcademicItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AcademicItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicItemPayload>
          }
          findFirst: {
            args: Prisma.AcademicItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AcademicItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicItemPayload>
          }
          findMany: {
            args: Prisma.AcademicItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicItemPayload>[]
          }
          create: {
            args: Prisma.AcademicItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicItemPayload>
          }
          createMany: {
            args: Prisma.AcademicItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AcademicItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicItemPayload>[]
          }
          delete: {
            args: Prisma.AcademicItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicItemPayload>
          }
          update: {
            args: Prisma.AcademicItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicItemPayload>
          }
          deleteMany: {
            args: Prisma.AcademicItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AcademicItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AcademicItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicItemPayload>[]
          }
          upsert: {
            args: Prisma.AcademicItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicItemPayload>
          }
          aggregate: {
            args: Prisma.AcademicItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAcademicItem>
          }
          groupBy: {
            args: Prisma.AcademicItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<AcademicItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.AcademicItemCountArgs<ExtArgs>
            result: $Utils.Optional<AcademicItemCountAggregateOutputType> | number
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
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
    item?: ItemOmit
    profile?: ProfileOmit
    academicItem?: AcademicItemOmit
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
   * Models
   */

  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    id: number | null
  }

  export type ItemSumAggregateOutputType = {
    id: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    category: $Enums.ItemCategory | null
    externalLink: string | null
    mediaUrl: string | null
    createdAt: Date | null
  }

  export type ItemMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    category: $Enums.ItemCategory | null
    externalLink: string | null
    mediaUrl: string | null
    createdAt: Date | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    title: number
    description: number
    category: number
    externalLink: number
    mediaUrl: number
    createdAt: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    id?: true
  }

  export type ItemSumAggregateInputType = {
    id?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    externalLink?: true
    mediaUrl?: true
    createdAt?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    externalLink?: true
    mediaUrl?: true
    createdAt?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    externalLink?: true
    mediaUrl?: true
    createdAt?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: number
    title: string
    description: string
    category: $Enums.ItemCategory
    externalLink: string | null
    mediaUrl: string | null
    createdAt: Date
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    externalLink?: boolean
    mediaUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    externalLink?: boolean
    mediaUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    externalLink?: boolean
    mediaUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    externalLink?: boolean
    mediaUrl?: boolean
    createdAt?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "category" | "externalLink" | "mediaUrl" | "createdAt", ExtArgs["result"]["item"]>

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      category: $Enums.ItemCategory
      externalLink: string | null
      mediaUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.updateManyAndReturn({
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
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
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
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'Int'>
    readonly title: FieldRef<"Item", 'String'>
    readonly description: FieldRef<"Item", 'String'>
    readonly category: FieldRef<"Item", 'ItemCategory'>
    readonly externalLink: FieldRef<"Item", 'String'>
    readonly mediaUrl: FieldRef<"Item", 'String'>
    readonly createdAt: FieldRef<"Item", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item updateManyAndReturn
   */
  export type ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
    profileSize: number | null
    glowSpread: number | null
    glowOpacity: number | null
    ambientGlowSize: number | null
    ambientGlowOpacity: number | null
    ringPadding: number | null
    photoContrast: number | null
    bgMediaOpacity: number | null
    bgOverlayOpacity: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: number | null
    profileSize: number | null
    glowSpread: number | null
    glowOpacity: number | null
    ambientGlowSize: number | null
    ambientGlowOpacity: number | null
    ringPadding: number | null
    photoContrast: number | null
    bgMediaOpacity: number | null
    bgOverlayOpacity: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: number | null
    name: string | null
    subtitle: string | null
    photoUrl: string | null
    linkedinUrl: string | null
    githubUrl: string | null
    twitterUrl: string | null
    email: string | null
    resumeUrl: string | null
    themeBgColor: string | null
    themePrimaryColor: string | null
    bgImageUrl: string | null
    profileSize: number | null
    glowSpread: number | null
    glowOpacity: number | null
    themeSecondaryColor: string | null
    themeAccentColor: string | null
    ambientGlowSize: number | null
    ambientGlowOpacity: number | null
    ambientGlowColor: string | null
    ringPadding: number | null
    photoContrast: number | null
    bgMediaOpacity: number | null
    bgOverlayOpacity: number | null
    heroPrimaryBtnBg: string | null
    heroPrimaryBtnHover: string | null
    heroPrimaryBtnText: string | null
    heroSecondaryBtnBg: string | null
    heroSecondaryBtnHover: string | null
    heroSecondaryBtnText: string | null
    filterBtnBg: string | null
    filterBtnText: string | null
    filterBtnHoverBg: string | null
    filterBtnHoverText: string | null
    socialIconBg: string | null
    socialIconColor: string | null
    socialIconHoverBg: string | null
    socialIconHoverColor: string | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    name: string | null
    subtitle: string | null
    photoUrl: string | null
    linkedinUrl: string | null
    githubUrl: string | null
    twitterUrl: string | null
    email: string | null
    resumeUrl: string | null
    themeBgColor: string | null
    themePrimaryColor: string | null
    bgImageUrl: string | null
    profileSize: number | null
    glowSpread: number | null
    glowOpacity: number | null
    themeSecondaryColor: string | null
    themeAccentColor: string | null
    ambientGlowSize: number | null
    ambientGlowOpacity: number | null
    ambientGlowColor: string | null
    ringPadding: number | null
    photoContrast: number | null
    bgMediaOpacity: number | null
    bgOverlayOpacity: number | null
    heroPrimaryBtnBg: string | null
    heroPrimaryBtnHover: string | null
    heroPrimaryBtnText: string | null
    heroSecondaryBtnBg: string | null
    heroSecondaryBtnHover: string | null
    heroSecondaryBtnText: string | null
    filterBtnBg: string | null
    filterBtnText: string | null
    filterBtnHoverBg: string | null
    filterBtnHoverText: string | null
    socialIconBg: string | null
    socialIconColor: string | null
    socialIconHoverBg: string | null
    socialIconHoverColor: string | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    name: number
    subtitle: number
    photoUrl: number
    linkedinUrl: number
    githubUrl: number
    twitterUrl: number
    email: number
    resumeUrl: number
    themeBgColor: number
    themePrimaryColor: number
    bgImageUrl: number
    profileSize: number
    glowSpread: number
    glowOpacity: number
    themeSecondaryColor: number
    themeAccentColor: number
    ambientGlowSize: number
    ambientGlowOpacity: number
    ambientGlowColor: number
    ringPadding: number
    photoContrast: number
    bgMediaOpacity: number
    bgOverlayOpacity: number
    heroPrimaryBtnBg: number
    heroPrimaryBtnHover: number
    heroPrimaryBtnText: number
    heroSecondaryBtnBg: number
    heroSecondaryBtnHover: number
    heroSecondaryBtnText: number
    filterBtnBg: number
    filterBtnText: number
    filterBtnHoverBg: number
    filterBtnHoverText: number
    socialIconBg: number
    socialIconColor: number
    socialIconHoverBg: number
    socialIconHoverColor: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
    profileSize?: true
    glowSpread?: true
    glowOpacity?: true
    ambientGlowSize?: true
    ambientGlowOpacity?: true
    ringPadding?: true
    photoContrast?: true
    bgMediaOpacity?: true
    bgOverlayOpacity?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
    profileSize?: true
    glowSpread?: true
    glowOpacity?: true
    ambientGlowSize?: true
    ambientGlowOpacity?: true
    ringPadding?: true
    photoContrast?: true
    bgMediaOpacity?: true
    bgOverlayOpacity?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    name?: true
    subtitle?: true
    photoUrl?: true
    linkedinUrl?: true
    githubUrl?: true
    twitterUrl?: true
    email?: true
    resumeUrl?: true
    themeBgColor?: true
    themePrimaryColor?: true
    bgImageUrl?: true
    profileSize?: true
    glowSpread?: true
    glowOpacity?: true
    themeSecondaryColor?: true
    themeAccentColor?: true
    ambientGlowSize?: true
    ambientGlowOpacity?: true
    ambientGlowColor?: true
    ringPadding?: true
    photoContrast?: true
    bgMediaOpacity?: true
    bgOverlayOpacity?: true
    heroPrimaryBtnBg?: true
    heroPrimaryBtnHover?: true
    heroPrimaryBtnText?: true
    heroSecondaryBtnBg?: true
    heroSecondaryBtnHover?: true
    heroSecondaryBtnText?: true
    filterBtnBg?: true
    filterBtnText?: true
    filterBtnHoverBg?: true
    filterBtnHoverText?: true
    socialIconBg?: true
    socialIconColor?: true
    socialIconHoverBg?: true
    socialIconHoverColor?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    name?: true
    subtitle?: true
    photoUrl?: true
    linkedinUrl?: true
    githubUrl?: true
    twitterUrl?: true
    email?: true
    resumeUrl?: true
    themeBgColor?: true
    themePrimaryColor?: true
    bgImageUrl?: true
    profileSize?: true
    glowSpread?: true
    glowOpacity?: true
    themeSecondaryColor?: true
    themeAccentColor?: true
    ambientGlowSize?: true
    ambientGlowOpacity?: true
    ambientGlowColor?: true
    ringPadding?: true
    photoContrast?: true
    bgMediaOpacity?: true
    bgOverlayOpacity?: true
    heroPrimaryBtnBg?: true
    heroPrimaryBtnHover?: true
    heroPrimaryBtnText?: true
    heroSecondaryBtnBg?: true
    heroSecondaryBtnHover?: true
    heroSecondaryBtnText?: true
    filterBtnBg?: true
    filterBtnText?: true
    filterBtnHoverBg?: true
    filterBtnHoverText?: true
    socialIconBg?: true
    socialIconColor?: true
    socialIconHoverBg?: true
    socialIconHoverColor?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    name?: true
    subtitle?: true
    photoUrl?: true
    linkedinUrl?: true
    githubUrl?: true
    twitterUrl?: true
    email?: true
    resumeUrl?: true
    themeBgColor?: true
    themePrimaryColor?: true
    bgImageUrl?: true
    profileSize?: true
    glowSpread?: true
    glowOpacity?: true
    themeSecondaryColor?: true
    themeAccentColor?: true
    ambientGlowSize?: true
    ambientGlowOpacity?: true
    ambientGlowColor?: true
    ringPadding?: true
    photoContrast?: true
    bgMediaOpacity?: true
    bgOverlayOpacity?: true
    heroPrimaryBtnBg?: true
    heroPrimaryBtnHover?: true
    heroPrimaryBtnText?: true
    heroSecondaryBtnBg?: true
    heroSecondaryBtnHover?: true
    heroSecondaryBtnText?: true
    filterBtnBg?: true
    filterBtnText?: true
    filterBtnHoverBg?: true
    filterBtnHoverText?: true
    socialIconBg?: true
    socialIconColor?: true
    socialIconHoverBg?: true
    socialIconHoverColor?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: number
    name: string
    subtitle: string
    photoUrl: string | null
    linkedinUrl: string | null
    githubUrl: string | null
    twitterUrl: string | null
    email: string | null
    resumeUrl: string | null
    themeBgColor: string | null
    themePrimaryColor: string | null
    bgImageUrl: string | null
    profileSize: number | null
    glowSpread: number | null
    glowOpacity: number | null
    themeSecondaryColor: string | null
    themeAccentColor: string | null
    ambientGlowSize: number | null
    ambientGlowOpacity: number | null
    ambientGlowColor: string | null
    ringPadding: number | null
    photoContrast: number | null
    bgMediaOpacity: number | null
    bgOverlayOpacity: number | null
    heroPrimaryBtnBg: string | null
    heroPrimaryBtnHover: string | null
    heroPrimaryBtnText: string | null
    heroSecondaryBtnBg: string | null
    heroSecondaryBtnHover: string | null
    heroSecondaryBtnText: string | null
    filterBtnBg: string | null
    filterBtnText: string | null
    filterBtnHoverBg: string | null
    filterBtnHoverText: string | null
    socialIconBg: string | null
    socialIconColor: string | null
    socialIconHoverBg: string | null
    socialIconHoverColor: string | null
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subtitle?: boolean
    photoUrl?: boolean
    linkedinUrl?: boolean
    githubUrl?: boolean
    twitterUrl?: boolean
    email?: boolean
    resumeUrl?: boolean
    themeBgColor?: boolean
    themePrimaryColor?: boolean
    bgImageUrl?: boolean
    profileSize?: boolean
    glowSpread?: boolean
    glowOpacity?: boolean
    themeSecondaryColor?: boolean
    themeAccentColor?: boolean
    ambientGlowSize?: boolean
    ambientGlowOpacity?: boolean
    ambientGlowColor?: boolean
    ringPadding?: boolean
    photoContrast?: boolean
    bgMediaOpacity?: boolean
    bgOverlayOpacity?: boolean
    heroPrimaryBtnBg?: boolean
    heroPrimaryBtnHover?: boolean
    heroPrimaryBtnText?: boolean
    heroSecondaryBtnBg?: boolean
    heroSecondaryBtnHover?: boolean
    heroSecondaryBtnText?: boolean
    filterBtnBg?: boolean
    filterBtnText?: boolean
    filterBtnHoverBg?: boolean
    filterBtnHoverText?: boolean
    socialIconBg?: boolean
    socialIconColor?: boolean
    socialIconHoverBg?: boolean
    socialIconHoverColor?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subtitle?: boolean
    photoUrl?: boolean
    linkedinUrl?: boolean
    githubUrl?: boolean
    twitterUrl?: boolean
    email?: boolean
    resumeUrl?: boolean
    themeBgColor?: boolean
    themePrimaryColor?: boolean
    bgImageUrl?: boolean
    profileSize?: boolean
    glowSpread?: boolean
    glowOpacity?: boolean
    themeSecondaryColor?: boolean
    themeAccentColor?: boolean
    ambientGlowSize?: boolean
    ambientGlowOpacity?: boolean
    ambientGlowColor?: boolean
    ringPadding?: boolean
    photoContrast?: boolean
    bgMediaOpacity?: boolean
    bgOverlayOpacity?: boolean
    heroPrimaryBtnBg?: boolean
    heroPrimaryBtnHover?: boolean
    heroPrimaryBtnText?: boolean
    heroSecondaryBtnBg?: boolean
    heroSecondaryBtnHover?: boolean
    heroSecondaryBtnText?: boolean
    filterBtnBg?: boolean
    filterBtnText?: boolean
    filterBtnHoverBg?: boolean
    filterBtnHoverText?: boolean
    socialIconBg?: boolean
    socialIconColor?: boolean
    socialIconHoverBg?: boolean
    socialIconHoverColor?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subtitle?: boolean
    photoUrl?: boolean
    linkedinUrl?: boolean
    githubUrl?: boolean
    twitterUrl?: boolean
    email?: boolean
    resumeUrl?: boolean
    themeBgColor?: boolean
    themePrimaryColor?: boolean
    bgImageUrl?: boolean
    profileSize?: boolean
    glowSpread?: boolean
    glowOpacity?: boolean
    themeSecondaryColor?: boolean
    themeAccentColor?: boolean
    ambientGlowSize?: boolean
    ambientGlowOpacity?: boolean
    ambientGlowColor?: boolean
    ringPadding?: boolean
    photoContrast?: boolean
    bgMediaOpacity?: boolean
    bgOverlayOpacity?: boolean
    heroPrimaryBtnBg?: boolean
    heroPrimaryBtnHover?: boolean
    heroPrimaryBtnText?: boolean
    heroSecondaryBtnBg?: boolean
    heroSecondaryBtnHover?: boolean
    heroSecondaryBtnText?: boolean
    filterBtnBg?: boolean
    filterBtnText?: boolean
    filterBtnHoverBg?: boolean
    filterBtnHoverText?: boolean
    socialIconBg?: boolean
    socialIconColor?: boolean
    socialIconHoverBg?: boolean
    socialIconHoverColor?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    name?: boolean
    subtitle?: boolean
    photoUrl?: boolean
    linkedinUrl?: boolean
    githubUrl?: boolean
    twitterUrl?: boolean
    email?: boolean
    resumeUrl?: boolean
    themeBgColor?: boolean
    themePrimaryColor?: boolean
    bgImageUrl?: boolean
    profileSize?: boolean
    glowSpread?: boolean
    glowOpacity?: boolean
    themeSecondaryColor?: boolean
    themeAccentColor?: boolean
    ambientGlowSize?: boolean
    ambientGlowOpacity?: boolean
    ambientGlowColor?: boolean
    ringPadding?: boolean
    photoContrast?: boolean
    bgMediaOpacity?: boolean
    bgOverlayOpacity?: boolean
    heroPrimaryBtnBg?: boolean
    heroPrimaryBtnHover?: boolean
    heroPrimaryBtnText?: boolean
    heroSecondaryBtnBg?: boolean
    heroSecondaryBtnHover?: boolean
    heroSecondaryBtnText?: boolean
    filterBtnBg?: boolean
    filterBtnText?: boolean
    filterBtnHoverBg?: boolean
    filterBtnHoverText?: boolean
    socialIconBg?: boolean
    socialIconColor?: boolean
    socialIconHoverBg?: boolean
    socialIconHoverColor?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "subtitle" | "photoUrl" | "linkedinUrl" | "githubUrl" | "twitterUrl" | "email" | "resumeUrl" | "themeBgColor" | "themePrimaryColor" | "bgImageUrl" | "profileSize" | "glowSpread" | "glowOpacity" | "themeSecondaryColor" | "themeAccentColor" | "ambientGlowSize" | "ambientGlowOpacity" | "ambientGlowColor" | "ringPadding" | "photoContrast" | "bgMediaOpacity" | "bgOverlayOpacity" | "heroPrimaryBtnBg" | "heroPrimaryBtnHover" | "heroPrimaryBtnText" | "heroSecondaryBtnBg" | "heroSecondaryBtnHover" | "heroSecondaryBtnText" | "filterBtnBg" | "filterBtnText" | "filterBtnHoverBg" | "filterBtnHoverText" | "socialIconBg" | "socialIconColor" | "socialIconHoverBg" | "socialIconHoverColor", ExtArgs["result"]["profile"]>

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      subtitle: string
      photoUrl: string | null
      linkedinUrl: string | null
      githubUrl: string | null
      twitterUrl: string | null
      email: string | null
      resumeUrl: string | null
      themeBgColor: string | null
      themePrimaryColor: string | null
      bgImageUrl: string | null
      profileSize: number | null
      glowSpread: number | null
      glowOpacity: number | null
      themeSecondaryColor: string | null
      themeAccentColor: string | null
      ambientGlowSize: number | null
      ambientGlowOpacity: number | null
      ambientGlowColor: string | null
      ringPadding: number | null
      photoContrast: number | null
      bgMediaOpacity: number | null
      bgOverlayOpacity: number | null
      heroPrimaryBtnBg: string | null
      heroPrimaryBtnHover: string | null
      heroPrimaryBtnText: string | null
      heroSecondaryBtnBg: string | null
      heroSecondaryBtnHover: string | null
      heroSecondaryBtnText: string | null
      filterBtnBg: string | null
      filterBtnText: string | null
      filterBtnHoverBg: string | null
      filterBtnHoverText: string | null
      socialIconBg: string | null
      socialIconColor: string | null
      socialIconHoverBg: string | null
      socialIconHoverColor: string | null
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'Int'>
    readonly name: FieldRef<"Profile", 'String'>
    readonly subtitle: FieldRef<"Profile", 'String'>
    readonly photoUrl: FieldRef<"Profile", 'String'>
    readonly linkedinUrl: FieldRef<"Profile", 'String'>
    readonly githubUrl: FieldRef<"Profile", 'String'>
    readonly twitterUrl: FieldRef<"Profile", 'String'>
    readonly email: FieldRef<"Profile", 'String'>
    readonly resumeUrl: FieldRef<"Profile", 'String'>
    readonly themeBgColor: FieldRef<"Profile", 'String'>
    readonly themePrimaryColor: FieldRef<"Profile", 'String'>
    readonly bgImageUrl: FieldRef<"Profile", 'String'>
    readonly profileSize: FieldRef<"Profile", 'Int'>
    readonly glowSpread: FieldRef<"Profile", 'Int'>
    readonly glowOpacity: FieldRef<"Profile", 'Float'>
    readonly themeSecondaryColor: FieldRef<"Profile", 'String'>
    readonly themeAccentColor: FieldRef<"Profile", 'String'>
    readonly ambientGlowSize: FieldRef<"Profile", 'Int'>
    readonly ambientGlowOpacity: FieldRef<"Profile", 'Float'>
    readonly ambientGlowColor: FieldRef<"Profile", 'String'>
    readonly ringPadding: FieldRef<"Profile", 'Int'>
    readonly photoContrast: FieldRef<"Profile", 'Float'>
    readonly bgMediaOpacity: FieldRef<"Profile", 'Float'>
    readonly bgOverlayOpacity: FieldRef<"Profile", 'Float'>
    readonly heroPrimaryBtnBg: FieldRef<"Profile", 'String'>
    readonly heroPrimaryBtnHover: FieldRef<"Profile", 'String'>
    readonly heroPrimaryBtnText: FieldRef<"Profile", 'String'>
    readonly heroSecondaryBtnBg: FieldRef<"Profile", 'String'>
    readonly heroSecondaryBtnHover: FieldRef<"Profile", 'String'>
    readonly heroSecondaryBtnText: FieldRef<"Profile", 'String'>
    readonly filterBtnBg: FieldRef<"Profile", 'String'>
    readonly filterBtnText: FieldRef<"Profile", 'String'>
    readonly filterBtnHoverBg: FieldRef<"Profile", 'String'>
    readonly filterBtnHoverText: FieldRef<"Profile", 'String'>
    readonly socialIconBg: FieldRef<"Profile", 'String'>
    readonly socialIconColor: FieldRef<"Profile", 'String'>
    readonly socialIconHoverBg: FieldRef<"Profile", 'String'>
    readonly socialIconHoverColor: FieldRef<"Profile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data?: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
  }


  /**
   * Model AcademicItem
   */

  export type AggregateAcademicItem = {
    _count: AcademicItemCountAggregateOutputType | null
    _avg: AcademicItemAvgAggregateOutputType | null
    _sum: AcademicItemSumAggregateOutputType | null
    _min: AcademicItemMinAggregateOutputType | null
    _max: AcademicItemMaxAggregateOutputType | null
  }

  export type AcademicItemAvgAggregateOutputType = {
    id: number | null
  }

  export type AcademicItemSumAggregateOutputType = {
    id: number | null
  }

  export type AcademicItemMinAggregateOutputType = {
    id: number | null
    title: string | null
    institution: string | null
    date: string | null
    description: string | null
    type: $Enums.AcademicType | null
    link: string | null
    authors: string | null
    createdAt: Date | null
  }

  export type AcademicItemMaxAggregateOutputType = {
    id: number | null
    title: string | null
    institution: string | null
    date: string | null
    description: string | null
    type: $Enums.AcademicType | null
    link: string | null
    authors: string | null
    createdAt: Date | null
  }

  export type AcademicItemCountAggregateOutputType = {
    id: number
    title: number
    institution: number
    date: number
    description: number
    type: number
    link: number
    authors: number
    createdAt: number
    _all: number
  }


  export type AcademicItemAvgAggregateInputType = {
    id?: true
  }

  export type AcademicItemSumAggregateInputType = {
    id?: true
  }

  export type AcademicItemMinAggregateInputType = {
    id?: true
    title?: true
    institution?: true
    date?: true
    description?: true
    type?: true
    link?: true
    authors?: true
    createdAt?: true
  }

  export type AcademicItemMaxAggregateInputType = {
    id?: true
    title?: true
    institution?: true
    date?: true
    description?: true
    type?: true
    link?: true
    authors?: true
    createdAt?: true
  }

  export type AcademicItemCountAggregateInputType = {
    id?: true
    title?: true
    institution?: true
    date?: true
    description?: true
    type?: true
    link?: true
    authors?: true
    createdAt?: true
    _all?: true
  }

  export type AcademicItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcademicItem to aggregate.
     */
    where?: AcademicItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicItems to fetch.
     */
    orderBy?: AcademicItemOrderByWithRelationInput | AcademicItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AcademicItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AcademicItems
    **/
    _count?: true | AcademicItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AcademicItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AcademicItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AcademicItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AcademicItemMaxAggregateInputType
  }

  export type GetAcademicItemAggregateType<T extends AcademicItemAggregateArgs> = {
        [P in keyof T & keyof AggregateAcademicItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAcademicItem[P]>
      : GetScalarType<T[P], AggregateAcademicItem[P]>
  }




  export type AcademicItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcademicItemWhereInput
    orderBy?: AcademicItemOrderByWithAggregationInput | AcademicItemOrderByWithAggregationInput[]
    by: AcademicItemScalarFieldEnum[] | AcademicItemScalarFieldEnum
    having?: AcademicItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AcademicItemCountAggregateInputType | true
    _avg?: AcademicItemAvgAggregateInputType
    _sum?: AcademicItemSumAggregateInputType
    _min?: AcademicItemMinAggregateInputType
    _max?: AcademicItemMaxAggregateInputType
  }

  export type AcademicItemGroupByOutputType = {
    id: number
    title: string
    institution: string
    date: string
    description: string
    type: $Enums.AcademicType
    link: string | null
    authors: string | null
    createdAt: Date
    _count: AcademicItemCountAggregateOutputType | null
    _avg: AcademicItemAvgAggregateOutputType | null
    _sum: AcademicItemSumAggregateOutputType | null
    _min: AcademicItemMinAggregateOutputType | null
    _max: AcademicItemMaxAggregateOutputType | null
  }

  type GetAcademicItemGroupByPayload<T extends AcademicItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AcademicItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AcademicItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AcademicItemGroupByOutputType[P]>
            : GetScalarType<T[P], AcademicItemGroupByOutputType[P]>
        }
      >
    >


  export type AcademicItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    institution?: boolean
    date?: boolean
    description?: boolean
    type?: boolean
    link?: boolean
    authors?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["academicItem"]>

  export type AcademicItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    institution?: boolean
    date?: boolean
    description?: boolean
    type?: boolean
    link?: boolean
    authors?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["academicItem"]>

  export type AcademicItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    institution?: boolean
    date?: boolean
    description?: boolean
    type?: boolean
    link?: boolean
    authors?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["academicItem"]>

  export type AcademicItemSelectScalar = {
    id?: boolean
    title?: boolean
    institution?: boolean
    date?: boolean
    description?: boolean
    type?: boolean
    link?: boolean
    authors?: boolean
    createdAt?: boolean
  }

  export type AcademicItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "institution" | "date" | "description" | "type" | "link" | "authors" | "createdAt", ExtArgs["result"]["academicItem"]>

  export type $AcademicItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AcademicItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      institution: string
      date: string
      description: string
      type: $Enums.AcademicType
      link: string | null
      authors: string | null
      createdAt: Date
    }, ExtArgs["result"]["academicItem"]>
    composites: {}
  }

  type AcademicItemGetPayload<S extends boolean | null | undefined | AcademicItemDefaultArgs> = $Result.GetResult<Prisma.$AcademicItemPayload, S>

  type AcademicItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AcademicItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AcademicItemCountAggregateInputType | true
    }

  export interface AcademicItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AcademicItem'], meta: { name: 'AcademicItem' } }
    /**
     * Find zero or one AcademicItem that matches the filter.
     * @param {AcademicItemFindUniqueArgs} args - Arguments to find a AcademicItem
     * @example
     * // Get one AcademicItem
     * const academicItem = await prisma.academicItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AcademicItemFindUniqueArgs>(args: SelectSubset<T, AcademicItemFindUniqueArgs<ExtArgs>>): Prisma__AcademicItemClient<$Result.GetResult<Prisma.$AcademicItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AcademicItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AcademicItemFindUniqueOrThrowArgs} args - Arguments to find a AcademicItem
     * @example
     * // Get one AcademicItem
     * const academicItem = await prisma.academicItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AcademicItemFindUniqueOrThrowArgs>(args: SelectSubset<T, AcademicItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AcademicItemClient<$Result.GetResult<Prisma.$AcademicItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AcademicItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicItemFindFirstArgs} args - Arguments to find a AcademicItem
     * @example
     * // Get one AcademicItem
     * const academicItem = await prisma.academicItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AcademicItemFindFirstArgs>(args?: SelectSubset<T, AcademicItemFindFirstArgs<ExtArgs>>): Prisma__AcademicItemClient<$Result.GetResult<Prisma.$AcademicItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AcademicItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicItemFindFirstOrThrowArgs} args - Arguments to find a AcademicItem
     * @example
     * // Get one AcademicItem
     * const academicItem = await prisma.academicItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AcademicItemFindFirstOrThrowArgs>(args?: SelectSubset<T, AcademicItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__AcademicItemClient<$Result.GetResult<Prisma.$AcademicItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AcademicItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AcademicItems
     * const academicItems = await prisma.academicItem.findMany()
     * 
     * // Get first 10 AcademicItems
     * const academicItems = await prisma.academicItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const academicItemWithIdOnly = await prisma.academicItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AcademicItemFindManyArgs>(args?: SelectSubset<T, AcademicItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademicItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AcademicItem.
     * @param {AcademicItemCreateArgs} args - Arguments to create a AcademicItem.
     * @example
     * // Create one AcademicItem
     * const AcademicItem = await prisma.academicItem.create({
     *   data: {
     *     // ... data to create a AcademicItem
     *   }
     * })
     * 
     */
    create<T extends AcademicItemCreateArgs>(args: SelectSubset<T, AcademicItemCreateArgs<ExtArgs>>): Prisma__AcademicItemClient<$Result.GetResult<Prisma.$AcademicItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AcademicItems.
     * @param {AcademicItemCreateManyArgs} args - Arguments to create many AcademicItems.
     * @example
     * // Create many AcademicItems
     * const academicItem = await prisma.academicItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AcademicItemCreateManyArgs>(args?: SelectSubset<T, AcademicItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AcademicItems and returns the data saved in the database.
     * @param {AcademicItemCreateManyAndReturnArgs} args - Arguments to create many AcademicItems.
     * @example
     * // Create many AcademicItems
     * const academicItem = await prisma.academicItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AcademicItems and only return the `id`
     * const academicItemWithIdOnly = await prisma.academicItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AcademicItemCreateManyAndReturnArgs>(args?: SelectSubset<T, AcademicItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademicItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AcademicItem.
     * @param {AcademicItemDeleteArgs} args - Arguments to delete one AcademicItem.
     * @example
     * // Delete one AcademicItem
     * const AcademicItem = await prisma.academicItem.delete({
     *   where: {
     *     // ... filter to delete one AcademicItem
     *   }
     * })
     * 
     */
    delete<T extends AcademicItemDeleteArgs>(args: SelectSubset<T, AcademicItemDeleteArgs<ExtArgs>>): Prisma__AcademicItemClient<$Result.GetResult<Prisma.$AcademicItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AcademicItem.
     * @param {AcademicItemUpdateArgs} args - Arguments to update one AcademicItem.
     * @example
     * // Update one AcademicItem
     * const academicItem = await prisma.academicItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AcademicItemUpdateArgs>(args: SelectSubset<T, AcademicItemUpdateArgs<ExtArgs>>): Prisma__AcademicItemClient<$Result.GetResult<Prisma.$AcademicItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AcademicItems.
     * @param {AcademicItemDeleteManyArgs} args - Arguments to filter AcademicItems to delete.
     * @example
     * // Delete a few AcademicItems
     * const { count } = await prisma.academicItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AcademicItemDeleteManyArgs>(args?: SelectSubset<T, AcademicItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AcademicItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AcademicItems
     * const academicItem = await prisma.academicItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AcademicItemUpdateManyArgs>(args: SelectSubset<T, AcademicItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AcademicItems and returns the data updated in the database.
     * @param {AcademicItemUpdateManyAndReturnArgs} args - Arguments to update many AcademicItems.
     * @example
     * // Update many AcademicItems
     * const academicItem = await prisma.academicItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AcademicItems and only return the `id`
     * const academicItemWithIdOnly = await prisma.academicItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends AcademicItemUpdateManyAndReturnArgs>(args: SelectSubset<T, AcademicItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademicItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AcademicItem.
     * @param {AcademicItemUpsertArgs} args - Arguments to update or create a AcademicItem.
     * @example
     * // Update or create a AcademicItem
     * const academicItem = await prisma.academicItem.upsert({
     *   create: {
     *     // ... data to create a AcademicItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AcademicItem we want to update
     *   }
     * })
     */
    upsert<T extends AcademicItemUpsertArgs>(args: SelectSubset<T, AcademicItemUpsertArgs<ExtArgs>>): Prisma__AcademicItemClient<$Result.GetResult<Prisma.$AcademicItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AcademicItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicItemCountArgs} args - Arguments to filter AcademicItems to count.
     * @example
     * // Count the number of AcademicItems
     * const count = await prisma.academicItem.count({
     *   where: {
     *     // ... the filter for the AcademicItems we want to count
     *   }
     * })
    **/
    count<T extends AcademicItemCountArgs>(
      args?: Subset<T, AcademicItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AcademicItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AcademicItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AcademicItemAggregateArgs>(args: Subset<T, AcademicItemAggregateArgs>): Prisma.PrismaPromise<GetAcademicItemAggregateType<T>>

    /**
     * Group by AcademicItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicItemGroupByArgs} args - Group by arguments.
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
      T extends AcademicItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AcademicItemGroupByArgs['orderBy'] }
        : { orderBy?: AcademicItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AcademicItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcademicItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AcademicItem model
   */
  readonly fields: AcademicItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AcademicItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AcademicItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AcademicItem model
   */
  interface AcademicItemFieldRefs {
    readonly id: FieldRef<"AcademicItem", 'Int'>
    readonly title: FieldRef<"AcademicItem", 'String'>
    readonly institution: FieldRef<"AcademicItem", 'String'>
    readonly date: FieldRef<"AcademicItem", 'String'>
    readonly description: FieldRef<"AcademicItem", 'String'>
    readonly type: FieldRef<"AcademicItem", 'AcademicType'>
    readonly link: FieldRef<"AcademicItem", 'String'>
    readonly authors: FieldRef<"AcademicItem", 'String'>
    readonly createdAt: FieldRef<"AcademicItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AcademicItem findUnique
   */
  export type AcademicItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicItem
     */
    select?: AcademicItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicItem
     */
    omit?: AcademicItemOmit<ExtArgs> | null
    /**
     * Filter, which AcademicItem to fetch.
     */
    where: AcademicItemWhereUniqueInput
  }

  /**
   * AcademicItem findUniqueOrThrow
   */
  export type AcademicItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicItem
     */
    select?: AcademicItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicItem
     */
    omit?: AcademicItemOmit<ExtArgs> | null
    /**
     * Filter, which AcademicItem to fetch.
     */
    where: AcademicItemWhereUniqueInput
  }

  /**
   * AcademicItem findFirst
   */
  export type AcademicItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicItem
     */
    select?: AcademicItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicItem
     */
    omit?: AcademicItemOmit<ExtArgs> | null
    /**
     * Filter, which AcademicItem to fetch.
     */
    where?: AcademicItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicItems to fetch.
     */
    orderBy?: AcademicItemOrderByWithRelationInput | AcademicItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcademicItems.
     */
    cursor?: AcademicItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcademicItems.
     */
    distinct?: AcademicItemScalarFieldEnum | AcademicItemScalarFieldEnum[]
  }

  /**
   * AcademicItem findFirstOrThrow
   */
  export type AcademicItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicItem
     */
    select?: AcademicItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicItem
     */
    omit?: AcademicItemOmit<ExtArgs> | null
    /**
     * Filter, which AcademicItem to fetch.
     */
    where?: AcademicItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicItems to fetch.
     */
    orderBy?: AcademicItemOrderByWithRelationInput | AcademicItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcademicItems.
     */
    cursor?: AcademicItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcademicItems.
     */
    distinct?: AcademicItemScalarFieldEnum | AcademicItemScalarFieldEnum[]
  }

  /**
   * AcademicItem findMany
   */
  export type AcademicItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicItem
     */
    select?: AcademicItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicItem
     */
    omit?: AcademicItemOmit<ExtArgs> | null
    /**
     * Filter, which AcademicItems to fetch.
     */
    where?: AcademicItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicItems to fetch.
     */
    orderBy?: AcademicItemOrderByWithRelationInput | AcademicItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AcademicItems.
     */
    cursor?: AcademicItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcademicItems.
     */
    distinct?: AcademicItemScalarFieldEnum | AcademicItemScalarFieldEnum[]
  }

  /**
   * AcademicItem create
   */
  export type AcademicItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicItem
     */
    select?: AcademicItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicItem
     */
    omit?: AcademicItemOmit<ExtArgs> | null
    /**
     * The data needed to create a AcademicItem.
     */
    data: XOR<AcademicItemCreateInput, AcademicItemUncheckedCreateInput>
  }

  /**
   * AcademicItem createMany
   */
  export type AcademicItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AcademicItems.
     */
    data: AcademicItemCreateManyInput | AcademicItemCreateManyInput[]
  }

  /**
   * AcademicItem createManyAndReturn
   */
  export type AcademicItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicItem
     */
    select?: AcademicItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicItem
     */
    omit?: AcademicItemOmit<ExtArgs> | null
    /**
     * The data used to create many AcademicItems.
     */
    data: AcademicItemCreateManyInput | AcademicItemCreateManyInput[]
  }

  /**
   * AcademicItem update
   */
  export type AcademicItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicItem
     */
    select?: AcademicItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicItem
     */
    omit?: AcademicItemOmit<ExtArgs> | null
    /**
     * The data needed to update a AcademicItem.
     */
    data: XOR<AcademicItemUpdateInput, AcademicItemUncheckedUpdateInput>
    /**
     * Choose, which AcademicItem to update.
     */
    where: AcademicItemWhereUniqueInput
  }

  /**
   * AcademicItem updateMany
   */
  export type AcademicItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AcademicItems.
     */
    data: XOR<AcademicItemUpdateManyMutationInput, AcademicItemUncheckedUpdateManyInput>
    /**
     * Filter which AcademicItems to update
     */
    where?: AcademicItemWhereInput
    /**
     * Limit how many AcademicItems to update.
     */
    limit?: number
  }

  /**
   * AcademicItem updateManyAndReturn
   */
  export type AcademicItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicItem
     */
    select?: AcademicItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicItem
     */
    omit?: AcademicItemOmit<ExtArgs> | null
    /**
     * The data used to update AcademicItems.
     */
    data: XOR<AcademicItemUpdateManyMutationInput, AcademicItemUncheckedUpdateManyInput>
    /**
     * Filter which AcademicItems to update
     */
    where?: AcademicItemWhereInput
    /**
     * Limit how many AcademicItems to update.
     */
    limit?: number
  }

  /**
   * AcademicItem upsert
   */
  export type AcademicItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicItem
     */
    select?: AcademicItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicItem
     */
    omit?: AcademicItemOmit<ExtArgs> | null
    /**
     * The filter to search for the AcademicItem to update in case it exists.
     */
    where: AcademicItemWhereUniqueInput
    /**
     * In case the AcademicItem found by the `where` argument doesn't exist, create a new AcademicItem with this data.
     */
    create: XOR<AcademicItemCreateInput, AcademicItemUncheckedCreateInput>
    /**
     * In case the AcademicItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AcademicItemUpdateInput, AcademicItemUncheckedUpdateInput>
  }

  /**
   * AcademicItem delete
   */
  export type AcademicItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicItem
     */
    select?: AcademicItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicItem
     */
    omit?: AcademicItemOmit<ExtArgs> | null
    /**
     * Filter which AcademicItem to delete.
     */
    where: AcademicItemWhereUniqueInput
  }

  /**
   * AcademicItem deleteMany
   */
  export type AcademicItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcademicItems to delete
     */
    where?: AcademicItemWhereInput
    /**
     * Limit how many AcademicItems to delete.
     */
    limit?: number
  }

  /**
   * AcademicItem without action
   */
  export type AcademicItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicItem
     */
    select?: AcademicItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicItem
     */
    omit?: AcademicItemOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ItemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    category: 'category',
    externalLink: 'externalLink',
    mediaUrl: 'mediaUrl',
    createdAt: 'createdAt'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    name: 'name',
    subtitle: 'subtitle',
    photoUrl: 'photoUrl',
    linkedinUrl: 'linkedinUrl',
    githubUrl: 'githubUrl',
    twitterUrl: 'twitterUrl',
    email: 'email',
    resumeUrl: 'resumeUrl',
    themeBgColor: 'themeBgColor',
    themePrimaryColor: 'themePrimaryColor',
    bgImageUrl: 'bgImageUrl',
    profileSize: 'profileSize',
    glowSpread: 'glowSpread',
    glowOpacity: 'glowOpacity',
    themeSecondaryColor: 'themeSecondaryColor',
    themeAccentColor: 'themeAccentColor',
    ambientGlowSize: 'ambientGlowSize',
    ambientGlowOpacity: 'ambientGlowOpacity',
    ambientGlowColor: 'ambientGlowColor',
    ringPadding: 'ringPadding',
    photoContrast: 'photoContrast',
    bgMediaOpacity: 'bgMediaOpacity',
    bgOverlayOpacity: 'bgOverlayOpacity',
    heroPrimaryBtnBg: 'heroPrimaryBtnBg',
    heroPrimaryBtnHover: 'heroPrimaryBtnHover',
    heroPrimaryBtnText: 'heroPrimaryBtnText',
    heroSecondaryBtnBg: 'heroSecondaryBtnBg',
    heroSecondaryBtnHover: 'heroSecondaryBtnHover',
    heroSecondaryBtnText: 'heroSecondaryBtnText',
    filterBtnBg: 'filterBtnBg',
    filterBtnText: 'filterBtnText',
    filterBtnHoverBg: 'filterBtnHoverBg',
    filterBtnHoverText: 'filterBtnHoverText',
    socialIconBg: 'socialIconBg',
    socialIconColor: 'socialIconColor',
    socialIconHoverBg: 'socialIconHoverBg',
    socialIconHoverColor: 'socialIconHoverColor'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const AcademicItemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    institution: 'institution',
    date: 'date',
    description: 'description',
    type: 'type',
    link: 'link',
    authors: 'authors',
    createdAt: 'createdAt'
  };

  export type AcademicItemScalarFieldEnum = (typeof AcademicItemScalarFieldEnum)[keyof typeof AcademicItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'ItemCategory'
   */
  export type EnumItemCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemCategory'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'AcademicType'
   */
  export type EnumAcademicTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AcademicType'>
    
  /**
   * Deep Input Types
   */


  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: IntFilter<"Item"> | number
    title?: StringFilter<"Item"> | string
    description?: StringFilter<"Item"> | string
    category?: EnumItemCategoryFilter<"Item"> | $Enums.ItemCategory
    externalLink?: StringNullableFilter<"Item"> | string | null
    mediaUrl?: StringNullableFilter<"Item"> | string | null
    createdAt?: DateTimeFilter<"Item"> | Date | string
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    externalLink?: SortOrderInput | SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    title?: StringFilter<"Item"> | string
    description?: StringFilter<"Item"> | string
    category?: EnumItemCategoryFilter<"Item"> | $Enums.ItemCategory
    externalLink?: StringNullableFilter<"Item"> | string | null
    mediaUrl?: StringNullableFilter<"Item"> | string | null
    createdAt?: DateTimeFilter<"Item"> | Date | string
  }, "id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    externalLink?: SortOrderInput | SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Item"> | number
    title?: StringWithAggregatesFilter<"Item"> | string
    description?: StringWithAggregatesFilter<"Item"> | string
    category?: EnumItemCategoryWithAggregatesFilter<"Item"> | $Enums.ItemCategory
    externalLink?: StringNullableWithAggregatesFilter<"Item"> | string | null
    mediaUrl?: StringNullableWithAggregatesFilter<"Item"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: IntFilter<"Profile"> | number
    name?: StringFilter<"Profile"> | string
    subtitle?: StringFilter<"Profile"> | string
    photoUrl?: StringNullableFilter<"Profile"> | string | null
    linkedinUrl?: StringNullableFilter<"Profile"> | string | null
    githubUrl?: StringNullableFilter<"Profile"> | string | null
    twitterUrl?: StringNullableFilter<"Profile"> | string | null
    email?: StringNullableFilter<"Profile"> | string | null
    resumeUrl?: StringNullableFilter<"Profile"> | string | null
    themeBgColor?: StringNullableFilter<"Profile"> | string | null
    themePrimaryColor?: StringNullableFilter<"Profile"> | string | null
    bgImageUrl?: StringNullableFilter<"Profile"> | string | null
    profileSize?: IntNullableFilter<"Profile"> | number | null
    glowSpread?: IntNullableFilter<"Profile"> | number | null
    glowOpacity?: FloatNullableFilter<"Profile"> | number | null
    themeSecondaryColor?: StringNullableFilter<"Profile"> | string | null
    themeAccentColor?: StringNullableFilter<"Profile"> | string | null
    ambientGlowSize?: IntNullableFilter<"Profile"> | number | null
    ambientGlowOpacity?: FloatNullableFilter<"Profile"> | number | null
    ambientGlowColor?: StringNullableFilter<"Profile"> | string | null
    ringPadding?: IntNullableFilter<"Profile"> | number | null
    photoContrast?: FloatNullableFilter<"Profile"> | number | null
    bgMediaOpacity?: FloatNullableFilter<"Profile"> | number | null
    bgOverlayOpacity?: FloatNullableFilter<"Profile"> | number | null
    heroPrimaryBtnBg?: StringNullableFilter<"Profile"> | string | null
    heroPrimaryBtnHover?: StringNullableFilter<"Profile"> | string | null
    heroPrimaryBtnText?: StringNullableFilter<"Profile"> | string | null
    heroSecondaryBtnBg?: StringNullableFilter<"Profile"> | string | null
    heroSecondaryBtnHover?: StringNullableFilter<"Profile"> | string | null
    heroSecondaryBtnText?: StringNullableFilter<"Profile"> | string | null
    filterBtnBg?: StringNullableFilter<"Profile"> | string | null
    filterBtnText?: StringNullableFilter<"Profile"> | string | null
    filterBtnHoverBg?: StringNullableFilter<"Profile"> | string | null
    filterBtnHoverText?: StringNullableFilter<"Profile"> | string | null
    socialIconBg?: StringNullableFilter<"Profile"> | string | null
    socialIconColor?: StringNullableFilter<"Profile"> | string | null
    socialIconHoverBg?: StringNullableFilter<"Profile"> | string | null
    socialIconHoverColor?: StringNullableFilter<"Profile"> | string | null
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    subtitle?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    linkedinUrl?: SortOrderInput | SortOrder
    githubUrl?: SortOrderInput | SortOrder
    twitterUrl?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    themeBgColor?: SortOrderInput | SortOrder
    themePrimaryColor?: SortOrderInput | SortOrder
    bgImageUrl?: SortOrderInput | SortOrder
    profileSize?: SortOrderInput | SortOrder
    glowSpread?: SortOrderInput | SortOrder
    glowOpacity?: SortOrderInput | SortOrder
    themeSecondaryColor?: SortOrderInput | SortOrder
    themeAccentColor?: SortOrderInput | SortOrder
    ambientGlowSize?: SortOrderInput | SortOrder
    ambientGlowOpacity?: SortOrderInput | SortOrder
    ambientGlowColor?: SortOrderInput | SortOrder
    ringPadding?: SortOrderInput | SortOrder
    photoContrast?: SortOrderInput | SortOrder
    bgMediaOpacity?: SortOrderInput | SortOrder
    bgOverlayOpacity?: SortOrderInput | SortOrder
    heroPrimaryBtnBg?: SortOrderInput | SortOrder
    heroPrimaryBtnHover?: SortOrderInput | SortOrder
    heroPrimaryBtnText?: SortOrderInput | SortOrder
    heroSecondaryBtnBg?: SortOrderInput | SortOrder
    heroSecondaryBtnHover?: SortOrderInput | SortOrder
    heroSecondaryBtnText?: SortOrderInput | SortOrder
    filterBtnBg?: SortOrderInput | SortOrder
    filterBtnText?: SortOrderInput | SortOrder
    filterBtnHoverBg?: SortOrderInput | SortOrder
    filterBtnHoverText?: SortOrderInput | SortOrder
    socialIconBg?: SortOrderInput | SortOrder
    socialIconColor?: SortOrderInput | SortOrder
    socialIconHoverBg?: SortOrderInput | SortOrder
    socialIconHoverColor?: SortOrderInput | SortOrder
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    name?: StringFilter<"Profile"> | string
    subtitle?: StringFilter<"Profile"> | string
    photoUrl?: StringNullableFilter<"Profile"> | string | null
    linkedinUrl?: StringNullableFilter<"Profile"> | string | null
    githubUrl?: StringNullableFilter<"Profile"> | string | null
    twitterUrl?: StringNullableFilter<"Profile"> | string | null
    email?: StringNullableFilter<"Profile"> | string | null
    resumeUrl?: StringNullableFilter<"Profile"> | string | null
    themeBgColor?: StringNullableFilter<"Profile"> | string | null
    themePrimaryColor?: StringNullableFilter<"Profile"> | string | null
    bgImageUrl?: StringNullableFilter<"Profile"> | string | null
    profileSize?: IntNullableFilter<"Profile"> | number | null
    glowSpread?: IntNullableFilter<"Profile"> | number | null
    glowOpacity?: FloatNullableFilter<"Profile"> | number | null
    themeSecondaryColor?: StringNullableFilter<"Profile"> | string | null
    themeAccentColor?: StringNullableFilter<"Profile"> | string | null
    ambientGlowSize?: IntNullableFilter<"Profile"> | number | null
    ambientGlowOpacity?: FloatNullableFilter<"Profile"> | number | null
    ambientGlowColor?: StringNullableFilter<"Profile"> | string | null
    ringPadding?: IntNullableFilter<"Profile"> | number | null
    photoContrast?: FloatNullableFilter<"Profile"> | number | null
    bgMediaOpacity?: FloatNullableFilter<"Profile"> | number | null
    bgOverlayOpacity?: FloatNullableFilter<"Profile"> | number | null
    heroPrimaryBtnBg?: StringNullableFilter<"Profile"> | string | null
    heroPrimaryBtnHover?: StringNullableFilter<"Profile"> | string | null
    heroPrimaryBtnText?: StringNullableFilter<"Profile"> | string | null
    heroSecondaryBtnBg?: StringNullableFilter<"Profile"> | string | null
    heroSecondaryBtnHover?: StringNullableFilter<"Profile"> | string | null
    heroSecondaryBtnText?: StringNullableFilter<"Profile"> | string | null
    filterBtnBg?: StringNullableFilter<"Profile"> | string | null
    filterBtnText?: StringNullableFilter<"Profile"> | string | null
    filterBtnHoverBg?: StringNullableFilter<"Profile"> | string | null
    filterBtnHoverText?: StringNullableFilter<"Profile"> | string | null
    socialIconBg?: StringNullableFilter<"Profile"> | string | null
    socialIconColor?: StringNullableFilter<"Profile"> | string | null
    socialIconHoverBg?: StringNullableFilter<"Profile"> | string | null
    socialIconHoverColor?: StringNullableFilter<"Profile"> | string | null
  }, "id">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    subtitle?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    linkedinUrl?: SortOrderInput | SortOrder
    githubUrl?: SortOrderInput | SortOrder
    twitterUrl?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    themeBgColor?: SortOrderInput | SortOrder
    themePrimaryColor?: SortOrderInput | SortOrder
    bgImageUrl?: SortOrderInput | SortOrder
    profileSize?: SortOrderInput | SortOrder
    glowSpread?: SortOrderInput | SortOrder
    glowOpacity?: SortOrderInput | SortOrder
    themeSecondaryColor?: SortOrderInput | SortOrder
    themeAccentColor?: SortOrderInput | SortOrder
    ambientGlowSize?: SortOrderInput | SortOrder
    ambientGlowOpacity?: SortOrderInput | SortOrder
    ambientGlowColor?: SortOrderInput | SortOrder
    ringPadding?: SortOrderInput | SortOrder
    photoContrast?: SortOrderInput | SortOrder
    bgMediaOpacity?: SortOrderInput | SortOrder
    bgOverlayOpacity?: SortOrderInput | SortOrder
    heroPrimaryBtnBg?: SortOrderInput | SortOrder
    heroPrimaryBtnHover?: SortOrderInput | SortOrder
    heroPrimaryBtnText?: SortOrderInput | SortOrder
    heroSecondaryBtnBg?: SortOrderInput | SortOrder
    heroSecondaryBtnHover?: SortOrderInput | SortOrder
    heroSecondaryBtnText?: SortOrderInput | SortOrder
    filterBtnBg?: SortOrderInput | SortOrder
    filterBtnText?: SortOrderInput | SortOrder
    filterBtnHoverBg?: SortOrderInput | SortOrder
    filterBtnHoverText?: SortOrderInput | SortOrder
    socialIconBg?: SortOrderInput | SortOrder
    socialIconColor?: SortOrderInput | SortOrder
    socialIconHoverBg?: SortOrderInput | SortOrder
    socialIconHoverColor?: SortOrderInput | SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profile"> | number
    name?: StringWithAggregatesFilter<"Profile"> | string
    subtitle?: StringWithAggregatesFilter<"Profile"> | string
    photoUrl?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    linkedinUrl?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    githubUrl?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    twitterUrl?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    email?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    resumeUrl?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    themeBgColor?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    themePrimaryColor?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    bgImageUrl?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    profileSize?: IntNullableWithAggregatesFilter<"Profile"> | number | null
    glowSpread?: IntNullableWithAggregatesFilter<"Profile"> | number | null
    glowOpacity?: FloatNullableWithAggregatesFilter<"Profile"> | number | null
    themeSecondaryColor?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    themeAccentColor?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    ambientGlowSize?: IntNullableWithAggregatesFilter<"Profile"> | number | null
    ambientGlowOpacity?: FloatNullableWithAggregatesFilter<"Profile"> | number | null
    ambientGlowColor?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    ringPadding?: IntNullableWithAggregatesFilter<"Profile"> | number | null
    photoContrast?: FloatNullableWithAggregatesFilter<"Profile"> | number | null
    bgMediaOpacity?: FloatNullableWithAggregatesFilter<"Profile"> | number | null
    bgOverlayOpacity?: FloatNullableWithAggregatesFilter<"Profile"> | number | null
    heroPrimaryBtnBg?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    heroPrimaryBtnHover?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    heroPrimaryBtnText?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    heroSecondaryBtnBg?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    heroSecondaryBtnHover?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    heroSecondaryBtnText?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    filterBtnBg?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    filterBtnText?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    filterBtnHoverBg?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    filterBtnHoverText?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    socialIconBg?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    socialIconColor?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    socialIconHoverBg?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    socialIconHoverColor?: StringNullableWithAggregatesFilter<"Profile"> | string | null
  }

  export type AcademicItemWhereInput = {
    AND?: AcademicItemWhereInput | AcademicItemWhereInput[]
    OR?: AcademicItemWhereInput[]
    NOT?: AcademicItemWhereInput | AcademicItemWhereInput[]
    id?: IntFilter<"AcademicItem"> | number
    title?: StringFilter<"AcademicItem"> | string
    institution?: StringFilter<"AcademicItem"> | string
    date?: StringFilter<"AcademicItem"> | string
    description?: StringFilter<"AcademicItem"> | string
    type?: EnumAcademicTypeFilter<"AcademicItem"> | $Enums.AcademicType
    link?: StringNullableFilter<"AcademicItem"> | string | null
    authors?: StringNullableFilter<"AcademicItem"> | string | null
    createdAt?: DateTimeFilter<"AcademicItem"> | Date | string
  }

  export type AcademicItemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    institution?: SortOrder
    date?: SortOrder
    description?: SortOrder
    type?: SortOrder
    link?: SortOrderInput | SortOrder
    authors?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AcademicItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AcademicItemWhereInput | AcademicItemWhereInput[]
    OR?: AcademicItemWhereInput[]
    NOT?: AcademicItemWhereInput | AcademicItemWhereInput[]
    title?: StringFilter<"AcademicItem"> | string
    institution?: StringFilter<"AcademicItem"> | string
    date?: StringFilter<"AcademicItem"> | string
    description?: StringFilter<"AcademicItem"> | string
    type?: EnumAcademicTypeFilter<"AcademicItem"> | $Enums.AcademicType
    link?: StringNullableFilter<"AcademicItem"> | string | null
    authors?: StringNullableFilter<"AcademicItem"> | string | null
    createdAt?: DateTimeFilter<"AcademicItem"> | Date | string
  }, "id">

  export type AcademicItemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    institution?: SortOrder
    date?: SortOrder
    description?: SortOrder
    type?: SortOrder
    link?: SortOrderInput | SortOrder
    authors?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AcademicItemCountOrderByAggregateInput
    _avg?: AcademicItemAvgOrderByAggregateInput
    _max?: AcademicItemMaxOrderByAggregateInput
    _min?: AcademicItemMinOrderByAggregateInput
    _sum?: AcademicItemSumOrderByAggregateInput
  }

  export type AcademicItemScalarWhereWithAggregatesInput = {
    AND?: AcademicItemScalarWhereWithAggregatesInput | AcademicItemScalarWhereWithAggregatesInput[]
    OR?: AcademicItemScalarWhereWithAggregatesInput[]
    NOT?: AcademicItemScalarWhereWithAggregatesInput | AcademicItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AcademicItem"> | number
    title?: StringWithAggregatesFilter<"AcademicItem"> | string
    institution?: StringWithAggregatesFilter<"AcademicItem"> | string
    date?: StringWithAggregatesFilter<"AcademicItem"> | string
    description?: StringWithAggregatesFilter<"AcademicItem"> | string
    type?: EnumAcademicTypeWithAggregatesFilter<"AcademicItem"> | $Enums.AcademicType
    link?: StringNullableWithAggregatesFilter<"AcademicItem"> | string | null
    authors?: StringNullableWithAggregatesFilter<"AcademicItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AcademicItem"> | Date | string
  }

  export type ItemCreateInput = {
    title: string
    description: string
    category?: $Enums.ItemCategory
    externalLink?: string | null
    mediaUrl?: string | null
    createdAt?: Date | string
  }

  export type ItemUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    category?: $Enums.ItemCategory
    externalLink?: string | null
    mediaUrl?: string | null
    createdAt?: Date | string
  }

  export type ItemUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumItemCategoryFieldUpdateOperationsInput | $Enums.ItemCategory
    externalLink?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumItemCategoryFieldUpdateOperationsInput | $Enums.ItemCategory
    externalLink?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateManyInput = {
    id?: number
    title: string
    description: string
    category?: $Enums.ItemCategory
    externalLink?: string | null
    mediaUrl?: string | null
    createdAt?: Date | string
  }

  export type ItemUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumItemCategoryFieldUpdateOperationsInput | $Enums.ItemCategory
    externalLink?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumItemCategoryFieldUpdateOperationsInput | $Enums.ItemCategory
    externalLink?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateInput = {
    id?: number
    name?: string
    subtitle?: string
    photoUrl?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    twitterUrl?: string | null
    email?: string | null
    resumeUrl?: string | null
    themeBgColor?: string | null
    themePrimaryColor?: string | null
    bgImageUrl?: string | null
    profileSize?: number | null
    glowSpread?: number | null
    glowOpacity?: number | null
    themeSecondaryColor?: string | null
    themeAccentColor?: string | null
    ambientGlowSize?: number | null
    ambientGlowOpacity?: number | null
    ambientGlowColor?: string | null
    ringPadding?: number | null
    photoContrast?: number | null
    bgMediaOpacity?: number | null
    bgOverlayOpacity?: number | null
    heroPrimaryBtnBg?: string | null
    heroPrimaryBtnHover?: string | null
    heroPrimaryBtnText?: string | null
    heroSecondaryBtnBg?: string | null
    heroSecondaryBtnHover?: string | null
    heroSecondaryBtnText?: string | null
    filterBtnBg?: string | null
    filterBtnText?: string | null
    filterBtnHoverBg?: string | null
    filterBtnHoverText?: string | null
    socialIconBg?: string | null
    socialIconColor?: string | null
    socialIconHoverBg?: string | null
    socialIconHoverColor?: string | null
  }

  export type ProfileUncheckedCreateInput = {
    id?: number
    name?: string
    subtitle?: string
    photoUrl?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    twitterUrl?: string | null
    email?: string | null
    resumeUrl?: string | null
    themeBgColor?: string | null
    themePrimaryColor?: string | null
    bgImageUrl?: string | null
    profileSize?: number | null
    glowSpread?: number | null
    glowOpacity?: number | null
    themeSecondaryColor?: string | null
    themeAccentColor?: string | null
    ambientGlowSize?: number | null
    ambientGlowOpacity?: number | null
    ambientGlowColor?: string | null
    ringPadding?: number | null
    photoContrast?: number | null
    bgMediaOpacity?: number | null
    bgOverlayOpacity?: number | null
    heroPrimaryBtnBg?: string | null
    heroPrimaryBtnHover?: string | null
    heroPrimaryBtnText?: string | null
    heroSecondaryBtnBg?: string | null
    heroSecondaryBtnHover?: string | null
    heroSecondaryBtnText?: string | null
    filterBtnBg?: string | null
    filterBtnText?: string | null
    filterBtnHoverBg?: string | null
    filterBtnHoverText?: string | null
    socialIconBg?: string | null
    socialIconColor?: string | null
    socialIconHoverBg?: string | null
    socialIconHoverColor?: string | null
  }

  export type ProfileUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    themeBgColor?: NullableStringFieldUpdateOperationsInput | string | null
    themePrimaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    bgImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileSize?: NullableIntFieldUpdateOperationsInput | number | null
    glowSpread?: NullableIntFieldUpdateOperationsInput | number | null
    glowOpacity?: NullableFloatFieldUpdateOperationsInput | number | null
    themeSecondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    themeAccentColor?: NullableStringFieldUpdateOperationsInput | string | null
    ambientGlowSize?: NullableIntFieldUpdateOperationsInput | number | null
    ambientGlowOpacity?: NullableFloatFieldUpdateOperationsInput | number | null
    ambientGlowColor?: NullableStringFieldUpdateOperationsInput | string | null
    ringPadding?: NullableIntFieldUpdateOperationsInput | number | null
    photoContrast?: NullableFloatFieldUpdateOperationsInput | number | null
    bgMediaOpacity?: NullableFloatFieldUpdateOperationsInput | number | null
    bgOverlayOpacity?: NullableFloatFieldUpdateOperationsInput | number | null
    heroPrimaryBtnBg?: NullableStringFieldUpdateOperationsInput | string | null
    heroPrimaryBtnHover?: NullableStringFieldUpdateOperationsInput | string | null
    heroPrimaryBtnText?: NullableStringFieldUpdateOperationsInput | string | null
    heroSecondaryBtnBg?: NullableStringFieldUpdateOperationsInput | string | null
    heroSecondaryBtnHover?: NullableStringFieldUpdateOperationsInput | string | null
    heroSecondaryBtnText?: NullableStringFieldUpdateOperationsInput | string | null
    filterBtnBg?: NullableStringFieldUpdateOperationsInput | string | null
    filterBtnText?: NullableStringFieldUpdateOperationsInput | string | null
    filterBtnHoverBg?: NullableStringFieldUpdateOperationsInput | string | null
    filterBtnHoverText?: NullableStringFieldUpdateOperationsInput | string | null
    socialIconBg?: NullableStringFieldUpdateOperationsInput | string | null
    socialIconColor?: NullableStringFieldUpdateOperationsInput | string | null
    socialIconHoverBg?: NullableStringFieldUpdateOperationsInput | string | null
    socialIconHoverColor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    themeBgColor?: NullableStringFieldUpdateOperationsInput | string | null
    themePrimaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    bgImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileSize?: NullableIntFieldUpdateOperationsInput | number | null
    glowSpread?: NullableIntFieldUpdateOperationsInput | number | null
    glowOpacity?: NullableFloatFieldUpdateOperationsInput | number | null
    themeSecondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    themeAccentColor?: NullableStringFieldUpdateOperationsInput | string | null
    ambientGlowSize?: NullableIntFieldUpdateOperationsInput | number | null
    ambientGlowOpacity?: NullableFloatFieldUpdateOperationsInput | number | null
    ambientGlowColor?: NullableStringFieldUpdateOperationsInput | string | null
    ringPadding?: NullableIntFieldUpdateOperationsInput | number | null
    photoContrast?: NullableFloatFieldUpdateOperationsInput | number | null
    bgMediaOpacity?: NullableFloatFieldUpdateOperationsInput | number | null
    bgOverlayOpacity?: NullableFloatFieldUpdateOperationsInput | number | null
    heroPrimaryBtnBg?: NullableStringFieldUpdateOperationsInput | string | null
    heroPrimaryBtnHover?: NullableStringFieldUpdateOperationsInput | string | null
    heroPrimaryBtnText?: NullableStringFieldUpdateOperationsInput | string | null
    heroSecondaryBtnBg?: NullableStringFieldUpdateOperationsInput | string | null
    heroSecondaryBtnHover?: NullableStringFieldUpdateOperationsInput | string | null
    heroSecondaryBtnText?: NullableStringFieldUpdateOperationsInput | string | null
    filterBtnBg?: NullableStringFieldUpdateOperationsInput | string | null
    filterBtnText?: NullableStringFieldUpdateOperationsInput | string | null
    filterBtnHoverBg?: NullableStringFieldUpdateOperationsInput | string | null
    filterBtnHoverText?: NullableStringFieldUpdateOperationsInput | string | null
    socialIconBg?: NullableStringFieldUpdateOperationsInput | string | null
    socialIconColor?: NullableStringFieldUpdateOperationsInput | string | null
    socialIconHoverBg?: NullableStringFieldUpdateOperationsInput | string | null
    socialIconHoverColor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileCreateManyInput = {
    id?: number
    name?: string
    subtitle?: string
    photoUrl?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    twitterUrl?: string | null
    email?: string | null
    resumeUrl?: string | null
    themeBgColor?: string | null
    themePrimaryColor?: string | null
    bgImageUrl?: string | null
    profileSize?: number | null
    glowSpread?: number | null
    glowOpacity?: number | null
    themeSecondaryColor?: string | null
    themeAccentColor?: string | null
    ambientGlowSize?: number | null
    ambientGlowOpacity?: number | null
    ambientGlowColor?: string | null
    ringPadding?: number | null
    photoContrast?: number | null
    bgMediaOpacity?: number | null
    bgOverlayOpacity?: number | null
    heroPrimaryBtnBg?: string | null
    heroPrimaryBtnHover?: string | null
    heroPrimaryBtnText?: string | null
    heroSecondaryBtnBg?: string | null
    heroSecondaryBtnHover?: string | null
    heroSecondaryBtnText?: string | null
    filterBtnBg?: string | null
    filterBtnText?: string | null
    filterBtnHoverBg?: string | null
    filterBtnHoverText?: string | null
    socialIconBg?: string | null
    socialIconColor?: string | null
    socialIconHoverBg?: string | null
    socialIconHoverColor?: string | null
  }

  export type ProfileUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    themeBgColor?: NullableStringFieldUpdateOperationsInput | string | null
    themePrimaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    bgImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileSize?: NullableIntFieldUpdateOperationsInput | number | null
    glowSpread?: NullableIntFieldUpdateOperationsInput | number | null
    glowOpacity?: NullableFloatFieldUpdateOperationsInput | number | null
    themeSecondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    themeAccentColor?: NullableStringFieldUpdateOperationsInput | string | null
    ambientGlowSize?: NullableIntFieldUpdateOperationsInput | number | null
    ambientGlowOpacity?: NullableFloatFieldUpdateOperationsInput | number | null
    ambientGlowColor?: NullableStringFieldUpdateOperationsInput | string | null
    ringPadding?: NullableIntFieldUpdateOperationsInput | number | null
    photoContrast?: NullableFloatFieldUpdateOperationsInput | number | null
    bgMediaOpacity?: NullableFloatFieldUpdateOperationsInput | number | null
    bgOverlayOpacity?: NullableFloatFieldUpdateOperationsInput | number | null
    heroPrimaryBtnBg?: NullableStringFieldUpdateOperationsInput | string | null
    heroPrimaryBtnHover?: NullableStringFieldUpdateOperationsInput | string | null
    heroPrimaryBtnText?: NullableStringFieldUpdateOperationsInput | string | null
    heroSecondaryBtnBg?: NullableStringFieldUpdateOperationsInput | string | null
    heroSecondaryBtnHover?: NullableStringFieldUpdateOperationsInput | string | null
    heroSecondaryBtnText?: NullableStringFieldUpdateOperationsInput | string | null
    filterBtnBg?: NullableStringFieldUpdateOperationsInput | string | null
    filterBtnText?: NullableStringFieldUpdateOperationsInput | string | null
    filterBtnHoverBg?: NullableStringFieldUpdateOperationsInput | string | null
    filterBtnHoverText?: NullableStringFieldUpdateOperationsInput | string | null
    socialIconBg?: NullableStringFieldUpdateOperationsInput | string | null
    socialIconColor?: NullableStringFieldUpdateOperationsInput | string | null
    socialIconHoverBg?: NullableStringFieldUpdateOperationsInput | string | null
    socialIconHoverColor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    themeBgColor?: NullableStringFieldUpdateOperationsInput | string | null
    themePrimaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    bgImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileSize?: NullableIntFieldUpdateOperationsInput | number | null
    glowSpread?: NullableIntFieldUpdateOperationsInput | number | null
    glowOpacity?: NullableFloatFieldUpdateOperationsInput | number | null
    themeSecondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    themeAccentColor?: NullableStringFieldUpdateOperationsInput | string | null
    ambientGlowSize?: NullableIntFieldUpdateOperationsInput | number | null
    ambientGlowOpacity?: NullableFloatFieldUpdateOperationsInput | number | null
    ambientGlowColor?: NullableStringFieldUpdateOperationsInput | string | null
    ringPadding?: NullableIntFieldUpdateOperationsInput | number | null
    photoContrast?: NullableFloatFieldUpdateOperationsInput | number | null
    bgMediaOpacity?: NullableFloatFieldUpdateOperationsInput | number | null
    bgOverlayOpacity?: NullableFloatFieldUpdateOperationsInput | number | null
    heroPrimaryBtnBg?: NullableStringFieldUpdateOperationsInput | string | null
    heroPrimaryBtnHover?: NullableStringFieldUpdateOperationsInput | string | null
    heroPrimaryBtnText?: NullableStringFieldUpdateOperationsInput | string | null
    heroSecondaryBtnBg?: NullableStringFieldUpdateOperationsInput | string | null
    heroSecondaryBtnHover?: NullableStringFieldUpdateOperationsInput | string | null
    heroSecondaryBtnText?: NullableStringFieldUpdateOperationsInput | string | null
    filterBtnBg?: NullableStringFieldUpdateOperationsInput | string | null
    filterBtnText?: NullableStringFieldUpdateOperationsInput | string | null
    filterBtnHoverBg?: NullableStringFieldUpdateOperationsInput | string | null
    filterBtnHoverText?: NullableStringFieldUpdateOperationsInput | string | null
    socialIconBg?: NullableStringFieldUpdateOperationsInput | string | null
    socialIconColor?: NullableStringFieldUpdateOperationsInput | string | null
    socialIconHoverBg?: NullableStringFieldUpdateOperationsInput | string | null
    socialIconHoverColor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AcademicItemCreateInput = {
    title: string
    institution: string
    date: string
    description: string
    type?: $Enums.AcademicType
    link?: string | null
    authors?: string | null
    createdAt?: Date | string
  }

  export type AcademicItemUncheckedCreateInput = {
    id?: number
    title: string
    institution: string
    date: string
    description: string
    type?: $Enums.AcademicType
    link?: string | null
    authors?: string | null
    createdAt?: Date | string
  }

  export type AcademicItemUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumAcademicTypeFieldUpdateOperationsInput | $Enums.AcademicType
    link?: NullableStringFieldUpdateOperationsInput | string | null
    authors?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumAcademicTypeFieldUpdateOperationsInput | $Enums.AcademicType
    link?: NullableStringFieldUpdateOperationsInput | string | null
    authors?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicItemCreateManyInput = {
    id?: number
    title: string
    institution: string
    date: string
    description: string
    type?: $Enums.AcademicType
    link?: string | null
    authors?: string | null
    createdAt?: Date | string
  }

  export type AcademicItemUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumAcademicTypeFieldUpdateOperationsInput | $Enums.AcademicType
    link?: NullableStringFieldUpdateOperationsInput | string | null
    authors?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumAcademicTypeFieldUpdateOperationsInput | $Enums.AcademicType
    link?: NullableStringFieldUpdateOperationsInput | string | null
    authors?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumItemCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemCategory | EnumItemCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ItemCategory[]
    notIn?: $Enums.ItemCategory[]
    not?: NestedEnumItemCategoryFilter<$PrismaModel> | $Enums.ItemCategory
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    externalLink?: SortOrder
    mediaUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    externalLink?: SortOrder
    mediaUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    externalLink?: SortOrder
    mediaUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type EnumItemCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemCategory | EnumItemCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ItemCategory[]
    notIn?: $Enums.ItemCategory[]
    not?: NestedEnumItemCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ItemCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemCategoryFilter<$PrismaModel>
    _max?: NestedEnumItemCategoryFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subtitle?: SortOrder
    photoUrl?: SortOrder
    linkedinUrl?: SortOrder
    githubUrl?: SortOrder
    twitterUrl?: SortOrder
    email?: SortOrder
    resumeUrl?: SortOrder
    themeBgColor?: SortOrder
    themePrimaryColor?: SortOrder
    bgImageUrl?: SortOrder
    profileSize?: SortOrder
    glowSpread?: SortOrder
    glowOpacity?: SortOrder
    themeSecondaryColor?: SortOrder
    themeAccentColor?: SortOrder
    ambientGlowSize?: SortOrder
    ambientGlowOpacity?: SortOrder
    ambientGlowColor?: SortOrder
    ringPadding?: SortOrder
    photoContrast?: SortOrder
    bgMediaOpacity?: SortOrder
    bgOverlayOpacity?: SortOrder
    heroPrimaryBtnBg?: SortOrder
    heroPrimaryBtnHover?: SortOrder
    heroPrimaryBtnText?: SortOrder
    heroSecondaryBtnBg?: SortOrder
    heroSecondaryBtnHover?: SortOrder
    heroSecondaryBtnText?: SortOrder
    filterBtnBg?: SortOrder
    filterBtnText?: SortOrder
    filterBtnHoverBg?: SortOrder
    filterBtnHoverText?: SortOrder
    socialIconBg?: SortOrder
    socialIconColor?: SortOrder
    socialIconHoverBg?: SortOrder
    socialIconHoverColor?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    profileSize?: SortOrder
    glowSpread?: SortOrder
    glowOpacity?: SortOrder
    ambientGlowSize?: SortOrder
    ambientGlowOpacity?: SortOrder
    ringPadding?: SortOrder
    photoContrast?: SortOrder
    bgMediaOpacity?: SortOrder
    bgOverlayOpacity?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subtitle?: SortOrder
    photoUrl?: SortOrder
    linkedinUrl?: SortOrder
    githubUrl?: SortOrder
    twitterUrl?: SortOrder
    email?: SortOrder
    resumeUrl?: SortOrder
    themeBgColor?: SortOrder
    themePrimaryColor?: SortOrder
    bgImageUrl?: SortOrder
    profileSize?: SortOrder
    glowSpread?: SortOrder
    glowOpacity?: SortOrder
    themeSecondaryColor?: SortOrder
    themeAccentColor?: SortOrder
    ambientGlowSize?: SortOrder
    ambientGlowOpacity?: SortOrder
    ambientGlowColor?: SortOrder
    ringPadding?: SortOrder
    photoContrast?: SortOrder
    bgMediaOpacity?: SortOrder
    bgOverlayOpacity?: SortOrder
    heroPrimaryBtnBg?: SortOrder
    heroPrimaryBtnHover?: SortOrder
    heroPrimaryBtnText?: SortOrder
    heroSecondaryBtnBg?: SortOrder
    heroSecondaryBtnHover?: SortOrder
    heroSecondaryBtnText?: SortOrder
    filterBtnBg?: SortOrder
    filterBtnText?: SortOrder
    filterBtnHoverBg?: SortOrder
    filterBtnHoverText?: SortOrder
    socialIconBg?: SortOrder
    socialIconColor?: SortOrder
    socialIconHoverBg?: SortOrder
    socialIconHoverColor?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subtitle?: SortOrder
    photoUrl?: SortOrder
    linkedinUrl?: SortOrder
    githubUrl?: SortOrder
    twitterUrl?: SortOrder
    email?: SortOrder
    resumeUrl?: SortOrder
    themeBgColor?: SortOrder
    themePrimaryColor?: SortOrder
    bgImageUrl?: SortOrder
    profileSize?: SortOrder
    glowSpread?: SortOrder
    glowOpacity?: SortOrder
    themeSecondaryColor?: SortOrder
    themeAccentColor?: SortOrder
    ambientGlowSize?: SortOrder
    ambientGlowOpacity?: SortOrder
    ambientGlowColor?: SortOrder
    ringPadding?: SortOrder
    photoContrast?: SortOrder
    bgMediaOpacity?: SortOrder
    bgOverlayOpacity?: SortOrder
    heroPrimaryBtnBg?: SortOrder
    heroPrimaryBtnHover?: SortOrder
    heroPrimaryBtnText?: SortOrder
    heroSecondaryBtnBg?: SortOrder
    heroSecondaryBtnHover?: SortOrder
    heroSecondaryBtnText?: SortOrder
    filterBtnBg?: SortOrder
    filterBtnText?: SortOrder
    filterBtnHoverBg?: SortOrder
    filterBtnHoverText?: SortOrder
    socialIconBg?: SortOrder
    socialIconColor?: SortOrder
    socialIconHoverBg?: SortOrder
    socialIconHoverColor?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    id?: SortOrder
    profileSize?: SortOrder
    glowSpread?: SortOrder
    glowOpacity?: SortOrder
    ambientGlowSize?: SortOrder
    ambientGlowOpacity?: SortOrder
    ringPadding?: SortOrder
    photoContrast?: SortOrder
    bgMediaOpacity?: SortOrder
    bgOverlayOpacity?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type EnumAcademicTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AcademicType | EnumAcademicTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AcademicType[]
    notIn?: $Enums.AcademicType[]
    not?: NestedEnumAcademicTypeFilter<$PrismaModel> | $Enums.AcademicType
  }

  export type AcademicItemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    institution?: SortOrder
    date?: SortOrder
    description?: SortOrder
    type?: SortOrder
    link?: SortOrder
    authors?: SortOrder
    createdAt?: SortOrder
  }

  export type AcademicItemAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AcademicItemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    institution?: SortOrder
    date?: SortOrder
    description?: SortOrder
    type?: SortOrder
    link?: SortOrder
    authors?: SortOrder
    createdAt?: SortOrder
  }

  export type AcademicItemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    institution?: SortOrder
    date?: SortOrder
    description?: SortOrder
    type?: SortOrder
    link?: SortOrder
    authors?: SortOrder
    createdAt?: SortOrder
  }

  export type AcademicItemSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumAcademicTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AcademicType | EnumAcademicTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AcademicType[]
    notIn?: $Enums.AcademicType[]
    not?: NestedEnumAcademicTypeWithAggregatesFilter<$PrismaModel> | $Enums.AcademicType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAcademicTypeFilter<$PrismaModel>
    _max?: NestedEnumAcademicTypeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumItemCategoryFieldUpdateOperationsInput = {
    set?: $Enums.ItemCategory
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumAcademicTypeFieldUpdateOperationsInput = {
    set?: $Enums.AcademicType
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumItemCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemCategory | EnumItemCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ItemCategory[]
    notIn?: $Enums.ItemCategory[]
    not?: NestedEnumItemCategoryFilter<$PrismaModel> | $Enums.ItemCategory
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedEnumItemCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemCategory | EnumItemCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ItemCategory[]
    notIn?: $Enums.ItemCategory[]
    not?: NestedEnumItemCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ItemCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemCategoryFilter<$PrismaModel>
    _max?: NestedEnumItemCategoryFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedEnumAcademicTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AcademicType | EnumAcademicTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AcademicType[]
    notIn?: $Enums.AcademicType[]
    not?: NestedEnumAcademicTypeFilter<$PrismaModel> | $Enums.AcademicType
  }

  export type NestedEnumAcademicTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AcademicType | EnumAcademicTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AcademicType[]
    notIn?: $Enums.AcademicType[]
    not?: NestedEnumAcademicTypeWithAggregatesFilter<$PrismaModel> | $Enums.AcademicType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAcademicTypeFilter<$PrismaModel>
    _max?: NestedEnumAcademicTypeFilter<$PrismaModel>
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