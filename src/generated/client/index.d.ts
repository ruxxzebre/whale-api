
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Container
 * 
 */
export type Container = {
  id: number
  name: string
  internal_id: string
  internal_pid: string
  createdAt: Date
}

/**
 * Model Logs
 * 
 */
export type Logs = {
  id: number
  containerId: number
  error: boolean
  data: Buffer
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Containers
 * const containers = await prisma.container.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Containers
   * const containers = await prisma.container.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.container`: Exposes CRUD operations for the **Container** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Containers
    * const containers = await prisma.container.findMany()
    * ```
    */
  get container(): Prisma.ContainerDelegate<GlobalReject>;

  /**
   * `prisma.logs`: Exposes CRUD operations for the **Logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.logs.findMany()
    * ```
    */
  get logs(): Prisma.LogsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

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

  /**
   * Prisma Client JS version: 3.9.1
   * Query Engine version: bcc2ff906db47790ee902e7bbc76d7ffb1893009
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Container: 'Container',
    Logs: 'Logs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ContainerCountOutputType
   */


  export type ContainerCountOutputType = {
    Logs: number
  }

  export type ContainerCountOutputTypeSelect = {
    Logs?: boolean
  }

  export type ContainerCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ContainerCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ContainerCountOutputType
    : S extends undefined
    ? never
    : S extends ContainerCountOutputTypeArgs
    ?'include' extends U
    ? ContainerCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ContainerCountOutputType ?ContainerCountOutputType [P]
  : 
     never
  } 
    : ContainerCountOutputType
  : ContainerCountOutputType




  // Custom InputTypes

  /**
   * ContainerCountOutputType without action
   */
  export type ContainerCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ContainerCountOutputType
     * 
    **/
    select?: ContainerCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Container
   */


  export type AggregateContainer = {
    _count: ContainerCountAggregateOutputType | null
    _avg: ContainerAvgAggregateOutputType | null
    _sum: ContainerSumAggregateOutputType | null
    _min: ContainerMinAggregateOutputType | null
    _max: ContainerMaxAggregateOutputType | null
  }

  export type ContainerAvgAggregateOutputType = {
    id: number | null
  }

  export type ContainerSumAggregateOutputType = {
    id: number | null
  }

  export type ContainerMinAggregateOutputType = {
    id: number | null
    name: string | null
    internal_id: string | null
    internal_pid: string | null
    createdAt: Date | null
  }

  export type ContainerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    internal_id: string | null
    internal_pid: string | null
    createdAt: Date | null
  }

  export type ContainerCountAggregateOutputType = {
    id: number
    name: number
    internal_id: number
    internal_pid: number
    createdAt: number
    _all: number
  }


  export type ContainerAvgAggregateInputType = {
    id?: true
  }

  export type ContainerSumAggregateInputType = {
    id?: true
  }

  export type ContainerMinAggregateInputType = {
    id?: true
    name?: true
    internal_id?: true
    internal_pid?: true
    createdAt?: true
  }

  export type ContainerMaxAggregateInputType = {
    id?: true
    name?: true
    internal_id?: true
    internal_pid?: true
    createdAt?: true
  }

  export type ContainerCountAggregateInputType = {
    id?: true
    name?: true
    internal_id?: true
    internal_pid?: true
    createdAt?: true
    _all?: true
  }

  export type ContainerAggregateArgs = {
    /**
     * Filter which Container to aggregate.
     * 
    **/
    where?: ContainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Containers to fetch.
     * 
    **/
    orderBy?: Enumerable<ContainerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ContainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Containers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Containers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Containers
    **/
    _count?: true | ContainerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContainerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContainerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContainerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContainerMaxAggregateInputType
  }

  export type GetContainerAggregateType<T extends ContainerAggregateArgs> = {
        [P in keyof T & keyof AggregateContainer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContainer[P]>
      : GetScalarType<T[P], AggregateContainer[P]>
  }




  export type ContainerGroupByArgs = {
    where?: ContainerWhereInput
    orderBy?: Enumerable<ContainerOrderByWithAggregationInput>
    by: Array<ContainerScalarFieldEnum>
    having?: ContainerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContainerCountAggregateInputType | true
    _avg?: ContainerAvgAggregateInputType
    _sum?: ContainerSumAggregateInputType
    _min?: ContainerMinAggregateInputType
    _max?: ContainerMaxAggregateInputType
  }


  export type ContainerGroupByOutputType = {
    id: number
    name: string
    internal_id: string
    internal_pid: string
    createdAt: Date
    _count: ContainerCountAggregateOutputType | null
    _avg: ContainerAvgAggregateOutputType | null
    _sum: ContainerSumAggregateOutputType | null
    _min: ContainerMinAggregateOutputType | null
    _max: ContainerMaxAggregateOutputType | null
  }

  type GetContainerGroupByPayload<T extends ContainerGroupByArgs> = Promise<
    Array<
      PickArray<ContainerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContainerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContainerGroupByOutputType[P]>
            : GetScalarType<T[P], ContainerGroupByOutputType[P]>
        }
      >
    >


  export type ContainerSelect = {
    id?: boolean
    name?: boolean
    internal_id?: boolean
    internal_pid?: boolean
    createdAt?: boolean
    Logs?: boolean | LogsFindManyArgs
    _count?: boolean | ContainerCountOutputTypeArgs
  }

  export type ContainerInclude = {
    Logs?: boolean | LogsFindManyArgs
    _count?: boolean | ContainerCountOutputTypeArgs
  }

  export type ContainerGetPayload<
    S extends boolean | null | undefined | ContainerArgs,
    U = keyof S
      > = S extends true
        ? Container
    : S extends undefined
    ? never
    : S extends ContainerArgs | ContainerFindManyArgs
    ?'include' extends U
    ? Container  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'Logs'
        ? Array < LogsGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? ContainerCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Container ?Container [P]
  : 
          P extends 'Logs'
        ? Array < LogsGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? ContainerCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Container
  : Container


  type ContainerCountArgs = Merge<
    Omit<ContainerFindManyArgs, 'select' | 'include'> & {
      select?: ContainerCountAggregateInputType | true
    }
  >

  export interface ContainerDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Container that matches the filter.
     * @param {ContainerFindUniqueArgs} args - Arguments to find a Container
     * @example
     * // Get one Container
     * const container = await prisma.container.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContainerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ContainerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Container'> extends True ? CheckSelect<T, Prisma__ContainerClient<Container>, Prisma__ContainerClient<ContainerGetPayload<T>>> : CheckSelect<T, Prisma__ContainerClient<Container | null >, Prisma__ContainerClient<ContainerGetPayload<T> | null >>

    /**
     * Find the first Container that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerFindFirstArgs} args - Arguments to find a Container
     * @example
     * // Get one Container
     * const container = await prisma.container.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContainerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ContainerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Container'> extends True ? CheckSelect<T, Prisma__ContainerClient<Container>, Prisma__ContainerClient<ContainerGetPayload<T>>> : CheckSelect<T, Prisma__ContainerClient<Container | null >, Prisma__ContainerClient<ContainerGetPayload<T> | null >>

    /**
     * Find zero or more Containers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Containers
     * const containers = await prisma.container.findMany()
     * 
     * // Get first 10 Containers
     * const containers = await prisma.container.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const containerWithIdOnly = await prisma.container.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContainerFindManyArgs>(
      args?: SelectSubset<T, ContainerFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Container>>, PrismaPromise<Array<ContainerGetPayload<T>>>>

    /**
     * Create a Container.
     * @param {ContainerCreateArgs} args - Arguments to create a Container.
     * @example
     * // Create one Container
     * const Container = await prisma.container.create({
     *   data: {
     *     // ... data to create a Container
     *   }
     * })
     * 
    **/
    create<T extends ContainerCreateArgs>(
      args: SelectSubset<T, ContainerCreateArgs>
    ): CheckSelect<T, Prisma__ContainerClient<Container>, Prisma__ContainerClient<ContainerGetPayload<T>>>

    /**
     * Delete a Container.
     * @param {ContainerDeleteArgs} args - Arguments to delete one Container.
     * @example
     * // Delete one Container
     * const Container = await prisma.container.delete({
     *   where: {
     *     // ... filter to delete one Container
     *   }
     * })
     * 
    **/
    delete<T extends ContainerDeleteArgs>(
      args: SelectSubset<T, ContainerDeleteArgs>
    ): CheckSelect<T, Prisma__ContainerClient<Container>, Prisma__ContainerClient<ContainerGetPayload<T>>>

    /**
     * Update one Container.
     * @param {ContainerUpdateArgs} args - Arguments to update one Container.
     * @example
     * // Update one Container
     * const container = await prisma.container.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContainerUpdateArgs>(
      args: SelectSubset<T, ContainerUpdateArgs>
    ): CheckSelect<T, Prisma__ContainerClient<Container>, Prisma__ContainerClient<ContainerGetPayload<T>>>

    /**
     * Delete zero or more Containers.
     * @param {ContainerDeleteManyArgs} args - Arguments to filter Containers to delete.
     * @example
     * // Delete a few Containers
     * const { count } = await prisma.container.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContainerDeleteManyArgs>(
      args?: SelectSubset<T, ContainerDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Containers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Containers
     * const container = await prisma.container.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContainerUpdateManyArgs>(
      args: SelectSubset<T, ContainerUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Container.
     * @param {ContainerUpsertArgs} args - Arguments to update or create a Container.
     * @example
     * // Update or create a Container
     * const container = await prisma.container.upsert({
     *   create: {
     *     // ... data to create a Container
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Container we want to update
     *   }
     * })
    **/
    upsert<T extends ContainerUpsertArgs>(
      args: SelectSubset<T, ContainerUpsertArgs>
    ): CheckSelect<T, Prisma__ContainerClient<Container>, Prisma__ContainerClient<ContainerGetPayload<T>>>

    /**
     * Count the number of Containers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerCountArgs} args - Arguments to filter Containers to count.
     * @example
     * // Count the number of Containers
     * const count = await prisma.container.count({
     *   where: {
     *     // ... the filter for the Containers we want to count
     *   }
     * })
    **/
    count<T extends ContainerCountArgs>(
      args?: Subset<T, ContainerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContainerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Container.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContainerAggregateArgs>(args: Subset<T, ContainerAggregateArgs>): PrismaPromise<GetContainerAggregateType<T>>

    /**
     * Group by Container.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerGroupByArgs} args - Group by arguments.
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
      T extends ContainerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContainerGroupByArgs['orderBy'] }
        : { orderBy?: ContainerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ContainerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContainerGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Container.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ContainerClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Logs<T extends LogsFindManyArgs = {}>(args?: Subset<T, LogsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Logs>>, PrismaPromise<Array<LogsGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Container findUnique
   */
  export type ContainerFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Container
     * 
    **/
    select?: ContainerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContainerInclude | null
    /**
     * Throw an Error if a Container can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Container to fetch.
     * 
    **/
    where: ContainerWhereUniqueInput
  }


  /**
   * Container findFirst
   */
  export type ContainerFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Container
     * 
    **/
    select?: ContainerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContainerInclude | null
    /**
     * Throw an Error if a Container can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Container to fetch.
     * 
    **/
    where?: ContainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Containers to fetch.
     * 
    **/
    orderBy?: Enumerable<ContainerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Containers.
     * 
    **/
    cursor?: ContainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Containers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Containers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Containers.
     * 
    **/
    distinct?: Enumerable<ContainerScalarFieldEnum>
  }


  /**
   * Container findMany
   */
  export type ContainerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Container
     * 
    **/
    select?: ContainerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContainerInclude | null
    /**
     * Filter, which Containers to fetch.
     * 
    **/
    where?: ContainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Containers to fetch.
     * 
    **/
    orderBy?: Enumerable<ContainerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Containers.
     * 
    **/
    cursor?: ContainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Containers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Containers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ContainerScalarFieldEnum>
  }


  /**
   * Container create
   */
  export type ContainerCreateArgs = {
    /**
     * Select specific fields to fetch from the Container
     * 
    **/
    select?: ContainerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContainerInclude | null
    /**
     * The data needed to create a Container.
     * 
    **/
    data: XOR<ContainerCreateInput, ContainerUncheckedCreateInput>
  }


  /**
   * Container update
   */
  export type ContainerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Container
     * 
    **/
    select?: ContainerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContainerInclude | null
    /**
     * The data needed to update a Container.
     * 
    **/
    data: XOR<ContainerUpdateInput, ContainerUncheckedUpdateInput>
    /**
     * Choose, which Container to update.
     * 
    **/
    where: ContainerWhereUniqueInput
  }


  /**
   * Container updateMany
   */
  export type ContainerUpdateManyArgs = {
    /**
     * The data used to update Containers.
     * 
    **/
    data: XOR<ContainerUpdateManyMutationInput, ContainerUncheckedUpdateManyInput>
    /**
     * Filter which Containers to update
     * 
    **/
    where?: ContainerWhereInput
  }


  /**
   * Container upsert
   */
  export type ContainerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Container
     * 
    **/
    select?: ContainerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContainerInclude | null
    /**
     * The filter to search for the Container to update in case it exists.
     * 
    **/
    where: ContainerWhereUniqueInput
    /**
     * In case the Container found by the `where` argument doesn't exist, create a new Container with this data.
     * 
    **/
    create: XOR<ContainerCreateInput, ContainerUncheckedCreateInput>
    /**
     * In case the Container was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ContainerUpdateInput, ContainerUncheckedUpdateInput>
  }


  /**
   * Container delete
   */
  export type ContainerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Container
     * 
    **/
    select?: ContainerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContainerInclude | null
    /**
     * Filter which Container to delete.
     * 
    **/
    where: ContainerWhereUniqueInput
  }


  /**
   * Container deleteMany
   */
  export type ContainerDeleteManyArgs = {
    /**
     * Filter which Containers to delete
     * 
    **/
    where?: ContainerWhereInput
  }


  /**
   * Container without action
   */
  export type ContainerArgs = {
    /**
     * Select specific fields to fetch from the Container
     * 
    **/
    select?: ContainerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContainerInclude | null
  }



  /**
   * Model Logs
   */


  export type AggregateLogs = {
    _count: LogsCountAggregateOutputType | null
    _avg: LogsAvgAggregateOutputType | null
    _sum: LogsSumAggregateOutputType | null
    _min: LogsMinAggregateOutputType | null
    _max: LogsMaxAggregateOutputType | null
  }

  export type LogsAvgAggregateOutputType = {
    id: number | null
    containerId: number | null
  }

  export type LogsSumAggregateOutputType = {
    id: number | null
    containerId: number | null
  }

  export type LogsMinAggregateOutputType = {
    id: number | null
    containerId: number | null
    error: boolean | null
    data: Buffer | null
  }

  export type LogsMaxAggregateOutputType = {
    id: number | null
    containerId: number | null
    error: boolean | null
    data: Buffer | null
  }

  export type LogsCountAggregateOutputType = {
    id: number
    containerId: number
    error: number
    data: number
    _all: number
  }


  export type LogsAvgAggregateInputType = {
    id?: true
    containerId?: true
  }

  export type LogsSumAggregateInputType = {
    id?: true
    containerId?: true
  }

  export type LogsMinAggregateInputType = {
    id?: true
    containerId?: true
    error?: true
    data?: true
  }

  export type LogsMaxAggregateInputType = {
    id?: true
    containerId?: true
    error?: true
    data?: true
  }

  export type LogsCountAggregateInputType = {
    id?: true
    containerId?: true
    error?: true
    data?: true
    _all?: true
  }

  export type LogsAggregateArgs = {
    /**
     * Filter which Logs to aggregate.
     * 
    **/
    where?: LogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     * 
    **/
    orderBy?: Enumerable<LogsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: LogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logs
    **/
    _count?: true | LogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogsMaxAggregateInputType
  }

  export type GetLogsAggregateType<T extends LogsAggregateArgs> = {
        [P in keyof T & keyof AggregateLogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogs[P]>
      : GetScalarType<T[P], AggregateLogs[P]>
  }




  export type LogsGroupByArgs = {
    where?: LogsWhereInput
    orderBy?: Enumerable<LogsOrderByWithAggregationInput>
    by: Array<LogsScalarFieldEnum>
    having?: LogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogsCountAggregateInputType | true
    _avg?: LogsAvgAggregateInputType
    _sum?: LogsSumAggregateInputType
    _min?: LogsMinAggregateInputType
    _max?: LogsMaxAggregateInputType
  }


  export type LogsGroupByOutputType = {
    id: number
    containerId: number
    error: boolean
    data: Buffer
    _count: LogsCountAggregateOutputType | null
    _avg: LogsAvgAggregateOutputType | null
    _sum: LogsSumAggregateOutputType | null
    _min: LogsMinAggregateOutputType | null
    _max: LogsMaxAggregateOutputType | null
  }

  type GetLogsGroupByPayload<T extends LogsGroupByArgs> = Promise<
    Array<
      PickArray<LogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogsGroupByOutputType[P]>
            : GetScalarType<T[P], LogsGroupByOutputType[P]>
        }
      >
    >


  export type LogsSelect = {
    id?: boolean
    container?: boolean | ContainerArgs
    containerId?: boolean
    error?: boolean
    data?: boolean
  }

  export type LogsInclude = {
    container?: boolean | ContainerArgs
  }

  export type LogsGetPayload<
    S extends boolean | null | undefined | LogsArgs,
    U = keyof S
      > = S extends true
        ? Logs
    : S extends undefined
    ? never
    : S extends LogsArgs | LogsFindManyArgs
    ?'include' extends U
    ? Logs  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'container'
        ? ContainerGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Logs ?Logs [P]
  : 
          P extends 'container'
        ? ContainerGetPayload<S['select'][P]> : never
  } 
    : Logs
  : Logs


  type LogsCountArgs = Merge<
    Omit<LogsFindManyArgs, 'select' | 'include'> & {
      select?: LogsCountAggregateInputType | true
    }
  >

  export interface LogsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Logs that matches the filter.
     * @param {LogsFindUniqueArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LogsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LogsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Logs'> extends True ? CheckSelect<T, Prisma__LogsClient<Logs>, Prisma__LogsClient<LogsGetPayload<T>>> : CheckSelect<T, Prisma__LogsClient<Logs | null >, Prisma__LogsClient<LogsGetPayload<T> | null >>

    /**
     * Find the first Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsFindFirstArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LogsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LogsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Logs'> extends True ? CheckSelect<T, Prisma__LogsClient<Logs>, Prisma__LogsClient<LogsGetPayload<T>>> : CheckSelect<T, Prisma__LogsClient<Logs | null >, Prisma__LogsClient<LogsGetPayload<T> | null >>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.logs.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logsWithIdOnly = await prisma.logs.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LogsFindManyArgs>(
      args?: SelectSubset<T, LogsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Logs>>, PrismaPromise<Array<LogsGetPayload<T>>>>

    /**
     * Create a Logs.
     * @param {LogsCreateArgs} args - Arguments to create a Logs.
     * @example
     * // Create one Logs
     * const Logs = await prisma.logs.create({
     *   data: {
     *     // ... data to create a Logs
     *   }
     * })
     * 
    **/
    create<T extends LogsCreateArgs>(
      args: SelectSubset<T, LogsCreateArgs>
    ): CheckSelect<T, Prisma__LogsClient<Logs>, Prisma__LogsClient<LogsGetPayload<T>>>

    /**
     * Delete a Logs.
     * @param {LogsDeleteArgs} args - Arguments to delete one Logs.
     * @example
     * // Delete one Logs
     * const Logs = await prisma.logs.delete({
     *   where: {
     *     // ... filter to delete one Logs
     *   }
     * })
     * 
    **/
    delete<T extends LogsDeleteArgs>(
      args: SelectSubset<T, LogsDeleteArgs>
    ): CheckSelect<T, Prisma__LogsClient<Logs>, Prisma__LogsClient<LogsGetPayload<T>>>

    /**
     * Update one Logs.
     * @param {LogsUpdateArgs} args - Arguments to update one Logs.
     * @example
     * // Update one Logs
     * const logs = await prisma.logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LogsUpdateArgs>(
      args: SelectSubset<T, LogsUpdateArgs>
    ): CheckSelect<T, Prisma__LogsClient<Logs>, Prisma__LogsClient<LogsGetPayload<T>>>

    /**
     * Delete zero or more Logs.
     * @param {LogsDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LogsDeleteManyArgs>(
      args?: SelectSubset<T, LogsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const logs = await prisma.logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LogsUpdateManyArgs>(
      args: SelectSubset<T, LogsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Logs.
     * @param {LogsUpsertArgs} args - Arguments to update or create a Logs.
     * @example
     * // Update or create a Logs
     * const logs = await prisma.logs.upsert({
     *   create: {
     *     // ... data to create a Logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Logs we want to update
     *   }
     * })
    **/
    upsert<T extends LogsUpsertArgs>(
      args: SelectSubset<T, LogsUpsertArgs>
    ): CheckSelect<T, Prisma__LogsClient<Logs>, Prisma__LogsClient<LogsGetPayload<T>>>

    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.logs.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends LogsCountArgs>(
      args?: Subset<T, LogsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogsAggregateArgs>(args: Subset<T, LogsAggregateArgs>): PrismaPromise<GetLogsAggregateType<T>>

    /**
     * Group by Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsGroupByArgs} args - Group by arguments.
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
      T extends LogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogsGroupByArgs['orderBy'] }
        : { orderBy?: LogsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, LogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LogsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    container<T extends ContainerArgs = {}>(args?: Subset<T, ContainerArgs>): CheckSelect<T, Prisma__ContainerClient<Container | null >, Prisma__ContainerClient<ContainerGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Logs findUnique
   */
  export type LogsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Logs
     * 
    **/
    select?: LogsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LogsInclude | null
    /**
     * Throw an Error if a Logs can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Logs to fetch.
     * 
    **/
    where: LogsWhereUniqueInput
  }


  /**
   * Logs findFirst
   */
  export type LogsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Logs
     * 
    **/
    select?: LogsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LogsInclude | null
    /**
     * Throw an Error if a Logs can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Logs to fetch.
     * 
    **/
    where?: LogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     * 
    **/
    orderBy?: Enumerable<LogsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     * 
    **/
    cursor?: LogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     * 
    **/
    distinct?: Enumerable<LogsScalarFieldEnum>
  }


  /**
   * Logs findMany
   */
  export type LogsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Logs
     * 
    **/
    select?: LogsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LogsInclude | null
    /**
     * Filter, which Logs to fetch.
     * 
    **/
    where?: LogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     * 
    **/
    orderBy?: Enumerable<LogsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logs.
     * 
    **/
    cursor?: LogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<LogsScalarFieldEnum>
  }


  /**
   * Logs create
   */
  export type LogsCreateArgs = {
    /**
     * Select specific fields to fetch from the Logs
     * 
    **/
    select?: LogsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LogsInclude | null
    /**
     * The data needed to create a Logs.
     * 
    **/
    data: XOR<LogsCreateInput, LogsUncheckedCreateInput>
  }


  /**
   * Logs update
   */
  export type LogsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Logs
     * 
    **/
    select?: LogsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LogsInclude | null
    /**
     * The data needed to update a Logs.
     * 
    **/
    data: XOR<LogsUpdateInput, LogsUncheckedUpdateInput>
    /**
     * Choose, which Logs to update.
     * 
    **/
    where: LogsWhereUniqueInput
  }


  /**
   * Logs updateMany
   */
  export type LogsUpdateManyArgs = {
    /**
     * The data used to update Logs.
     * 
    **/
    data: XOR<LogsUpdateManyMutationInput, LogsUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     * 
    **/
    where?: LogsWhereInput
  }


  /**
   * Logs upsert
   */
  export type LogsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Logs
     * 
    **/
    select?: LogsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LogsInclude | null
    /**
     * The filter to search for the Logs to update in case it exists.
     * 
    **/
    where: LogsWhereUniqueInput
    /**
     * In case the Logs found by the `where` argument doesn't exist, create a new Logs with this data.
     * 
    **/
    create: XOR<LogsCreateInput, LogsUncheckedCreateInput>
    /**
     * In case the Logs was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<LogsUpdateInput, LogsUncheckedUpdateInput>
  }


  /**
   * Logs delete
   */
  export type LogsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Logs
     * 
    **/
    select?: LogsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LogsInclude | null
    /**
     * Filter which Logs to delete.
     * 
    **/
    where: LogsWhereUniqueInput
  }


  /**
   * Logs deleteMany
   */
  export type LogsDeleteManyArgs = {
    /**
     * Filter which Logs to delete
     * 
    **/
    where?: LogsWhereInput
  }


  /**
   * Logs without action
   */
  export type LogsArgs = {
    /**
     * Select specific fields to fetch from the Logs
     * 
    **/
    select?: LogsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LogsInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ContainerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    internal_id: 'internal_id',
    internal_pid: 'internal_pid',
    createdAt: 'createdAt'
  };

  export type ContainerScalarFieldEnum = (typeof ContainerScalarFieldEnum)[keyof typeof ContainerScalarFieldEnum]


  export const LogsScalarFieldEnum: {
    id: 'id',
    containerId: 'containerId',
    error: 'error',
    data: 'data'
  };

  export type LogsScalarFieldEnum = (typeof LogsScalarFieldEnum)[keyof typeof LogsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type ContainerWhereInput = {
    AND?: Enumerable<ContainerWhereInput>
    OR?: Enumerable<ContainerWhereInput>
    NOT?: Enumerable<ContainerWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    internal_id?: StringFilter | string
    internal_pid?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    Logs?: LogsListRelationFilter
  }

  export type ContainerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    internal_id?: SortOrder
    internal_pid?: SortOrder
    createdAt?: SortOrder
    Logs?: LogsOrderByRelationAggregateInput
  }

  export type ContainerWhereUniqueInput = {
    id?: number
  }

  export type ContainerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    internal_id?: SortOrder
    internal_pid?: SortOrder
    createdAt?: SortOrder
    _count?: ContainerCountOrderByAggregateInput
    _avg?: ContainerAvgOrderByAggregateInput
    _max?: ContainerMaxOrderByAggregateInput
    _min?: ContainerMinOrderByAggregateInput
    _sum?: ContainerSumOrderByAggregateInput
  }

  export type ContainerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ContainerScalarWhereWithAggregatesInput>
    OR?: Enumerable<ContainerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ContainerScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    internal_id?: StringWithAggregatesFilter | string
    internal_pid?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type LogsWhereInput = {
    AND?: Enumerable<LogsWhereInput>
    OR?: Enumerable<LogsWhereInput>
    NOT?: Enumerable<LogsWhereInput>
    id?: IntFilter | number
    container?: XOR<ContainerRelationFilter, ContainerWhereInput>
    containerId?: IntFilter | number
    error?: BoolFilter | boolean
    data?: BytesFilter | Buffer
  }

  export type LogsOrderByWithRelationInput = {
    id?: SortOrder
    container?: ContainerOrderByWithRelationInput
    containerId?: SortOrder
    error?: SortOrder
    data?: SortOrder
  }

  export type LogsWhereUniqueInput = {
    id?: number
  }

  export type LogsOrderByWithAggregationInput = {
    id?: SortOrder
    containerId?: SortOrder
    error?: SortOrder
    data?: SortOrder
    _count?: LogsCountOrderByAggregateInput
    _avg?: LogsAvgOrderByAggregateInput
    _max?: LogsMaxOrderByAggregateInput
    _min?: LogsMinOrderByAggregateInput
    _sum?: LogsSumOrderByAggregateInput
  }

  export type LogsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LogsScalarWhereWithAggregatesInput>
    OR?: Enumerable<LogsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LogsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    containerId?: IntWithAggregatesFilter | number
    error?: BoolWithAggregatesFilter | boolean
    data?: BytesWithAggregatesFilter | Buffer
  }

  export type ContainerCreateInput = {
    name: string
    internal_id: string
    internal_pid: string
    createdAt?: Date | string
    Logs?: LogsCreateNestedManyWithoutContainerInput
  }

  export type ContainerUncheckedCreateInput = {
    id?: number
    name: string
    internal_id: string
    internal_pid: string
    createdAt?: Date | string
    Logs?: LogsUncheckedCreateNestedManyWithoutContainerInput
  }

  export type ContainerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    internal_id?: StringFieldUpdateOperationsInput | string
    internal_pid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Logs?: LogsUpdateManyWithoutContainerInput
  }

  export type ContainerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    internal_id?: StringFieldUpdateOperationsInput | string
    internal_pid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Logs?: LogsUncheckedUpdateManyWithoutContainerInput
  }

  export type ContainerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    internal_id?: StringFieldUpdateOperationsInput | string
    internal_pid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContainerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    internal_id?: StringFieldUpdateOperationsInput | string
    internal_pid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogsCreateInput = {
    error: boolean
    data: Buffer
    container: ContainerCreateNestedOneWithoutLogsInput
  }

  export type LogsUncheckedCreateInput = {
    id?: number
    containerId: number
    error: boolean
    data: Buffer
  }

  export type LogsUpdateInput = {
    error?: BoolFieldUpdateOperationsInput | boolean
    data?: BytesFieldUpdateOperationsInput | Buffer
    container?: ContainerUpdateOneRequiredWithoutLogsInput
  }

  export type LogsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    containerId?: IntFieldUpdateOperationsInput | number
    error?: BoolFieldUpdateOperationsInput | boolean
    data?: BytesFieldUpdateOperationsInput | Buffer
  }

  export type LogsUpdateManyMutationInput = {
    error?: BoolFieldUpdateOperationsInput | boolean
    data?: BytesFieldUpdateOperationsInput | Buffer
  }

  export type LogsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    containerId?: IntFieldUpdateOperationsInput | number
    error?: BoolFieldUpdateOperationsInput | boolean
    data?: BytesFieldUpdateOperationsInput | Buffer
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type LogsListRelationFilter = {
    every?: LogsWhereInput
    some?: LogsWhereInput
    none?: LogsWhereInput
  }

  export type LogsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContainerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    internal_id?: SortOrder
    internal_pid?: SortOrder
    createdAt?: SortOrder
  }

  export type ContainerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContainerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    internal_id?: SortOrder
    internal_pid?: SortOrder
    createdAt?: SortOrder
  }

  export type ContainerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    internal_id?: SortOrder
    internal_pid?: SortOrder
    createdAt?: SortOrder
  }

  export type ContainerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type ContainerRelationFilter = {
    is?: ContainerWhereInput
    isNot?: ContainerWhereInput
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type BytesFilter = {
    equals?: Buffer
    in?: Enumerable<Buffer>
    notIn?: Enumerable<Buffer>
    not?: NestedBytesFilter | Buffer
  }

  export type LogsCountOrderByAggregateInput = {
    id?: SortOrder
    containerId?: SortOrder
    error?: SortOrder
    data?: SortOrder
  }

  export type LogsAvgOrderByAggregateInput = {
    id?: SortOrder
    containerId?: SortOrder
  }

  export type LogsMaxOrderByAggregateInput = {
    id?: SortOrder
    containerId?: SortOrder
    error?: SortOrder
    data?: SortOrder
  }

  export type LogsMinOrderByAggregateInput = {
    id?: SortOrder
    containerId?: SortOrder
    error?: SortOrder
    data?: SortOrder
  }

  export type LogsSumOrderByAggregateInput = {
    id?: SortOrder
    containerId?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type BytesWithAggregatesFilter = {
    equals?: Buffer
    in?: Enumerable<Buffer>
    notIn?: Enumerable<Buffer>
    not?: NestedBytesWithAggregatesFilter | Buffer
    _count?: NestedIntFilter
    _min?: NestedBytesFilter
    _max?: NestedBytesFilter
  }

  export type LogsCreateNestedManyWithoutContainerInput = {
    create?: XOR<Enumerable<LogsCreateWithoutContainerInput>, Enumerable<LogsUncheckedCreateWithoutContainerInput>>
    connectOrCreate?: Enumerable<LogsCreateOrConnectWithoutContainerInput>
    connect?: Enumerable<LogsWhereUniqueInput>
  }

  export type LogsUncheckedCreateNestedManyWithoutContainerInput = {
    create?: XOR<Enumerable<LogsCreateWithoutContainerInput>, Enumerable<LogsUncheckedCreateWithoutContainerInput>>
    connectOrCreate?: Enumerable<LogsCreateOrConnectWithoutContainerInput>
    connect?: Enumerable<LogsWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LogsUpdateManyWithoutContainerInput = {
    create?: XOR<Enumerable<LogsCreateWithoutContainerInput>, Enumerable<LogsUncheckedCreateWithoutContainerInput>>
    connectOrCreate?: Enumerable<LogsCreateOrConnectWithoutContainerInput>
    upsert?: Enumerable<LogsUpsertWithWhereUniqueWithoutContainerInput>
    set?: Enumerable<LogsWhereUniqueInput>
    disconnect?: Enumerable<LogsWhereUniqueInput>
    delete?: Enumerable<LogsWhereUniqueInput>
    connect?: Enumerable<LogsWhereUniqueInput>
    update?: Enumerable<LogsUpdateWithWhereUniqueWithoutContainerInput>
    updateMany?: Enumerable<LogsUpdateManyWithWhereWithoutContainerInput>
    deleteMany?: Enumerable<LogsScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LogsUncheckedUpdateManyWithoutContainerInput = {
    create?: XOR<Enumerable<LogsCreateWithoutContainerInput>, Enumerable<LogsUncheckedCreateWithoutContainerInput>>
    connectOrCreate?: Enumerable<LogsCreateOrConnectWithoutContainerInput>
    upsert?: Enumerable<LogsUpsertWithWhereUniqueWithoutContainerInput>
    set?: Enumerable<LogsWhereUniqueInput>
    disconnect?: Enumerable<LogsWhereUniqueInput>
    delete?: Enumerable<LogsWhereUniqueInput>
    connect?: Enumerable<LogsWhereUniqueInput>
    update?: Enumerable<LogsUpdateWithWhereUniqueWithoutContainerInput>
    updateMany?: Enumerable<LogsUpdateManyWithWhereWithoutContainerInput>
    deleteMany?: Enumerable<LogsScalarWhereInput>
  }

  export type ContainerCreateNestedOneWithoutLogsInput = {
    create?: XOR<ContainerCreateWithoutLogsInput, ContainerUncheckedCreateWithoutLogsInput>
    connectOrCreate?: ContainerCreateOrConnectWithoutLogsInput
    connect?: ContainerWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Buffer
  }

  export type ContainerUpdateOneRequiredWithoutLogsInput = {
    create?: XOR<ContainerCreateWithoutLogsInput, ContainerUncheckedCreateWithoutLogsInput>
    connectOrCreate?: ContainerCreateOrConnectWithoutLogsInput
    upsert?: ContainerUpsertWithoutLogsInput
    connect?: ContainerWhereUniqueInput
    update?: XOR<ContainerUpdateWithoutLogsInput, ContainerUncheckedUpdateWithoutLogsInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBytesFilter = {
    equals?: Buffer
    in?: Enumerable<Buffer>
    notIn?: Enumerable<Buffer>
    not?: NestedBytesFilter | Buffer
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedBytesWithAggregatesFilter = {
    equals?: Buffer
    in?: Enumerable<Buffer>
    notIn?: Enumerable<Buffer>
    not?: NestedBytesWithAggregatesFilter | Buffer
    _count?: NestedIntFilter
    _min?: NestedBytesFilter
    _max?: NestedBytesFilter
  }

  export type LogsCreateWithoutContainerInput = {
    error: boolean
    data: Buffer
  }

  export type LogsUncheckedCreateWithoutContainerInput = {
    id?: number
    error: boolean
    data: Buffer
  }

  export type LogsCreateOrConnectWithoutContainerInput = {
    where: LogsWhereUniqueInput
    create: XOR<LogsCreateWithoutContainerInput, LogsUncheckedCreateWithoutContainerInput>
  }

  export type LogsUpsertWithWhereUniqueWithoutContainerInput = {
    where: LogsWhereUniqueInput
    update: XOR<LogsUpdateWithoutContainerInput, LogsUncheckedUpdateWithoutContainerInput>
    create: XOR<LogsCreateWithoutContainerInput, LogsUncheckedCreateWithoutContainerInput>
  }

  export type LogsUpdateWithWhereUniqueWithoutContainerInput = {
    where: LogsWhereUniqueInput
    data: XOR<LogsUpdateWithoutContainerInput, LogsUncheckedUpdateWithoutContainerInput>
  }

  export type LogsUpdateManyWithWhereWithoutContainerInput = {
    where: LogsScalarWhereInput
    data: XOR<LogsUpdateManyMutationInput, LogsUncheckedUpdateManyWithoutLogsInput>
  }

  export type LogsScalarWhereInput = {
    AND?: Enumerable<LogsScalarWhereInput>
    OR?: Enumerable<LogsScalarWhereInput>
    NOT?: Enumerable<LogsScalarWhereInput>
    id?: IntFilter | number
    containerId?: IntFilter | number
    error?: BoolFilter | boolean
    data?: BytesFilter | Buffer
  }

  export type ContainerCreateWithoutLogsInput = {
    name: string
    internal_id: string
    internal_pid: string
    createdAt?: Date | string
  }

  export type ContainerUncheckedCreateWithoutLogsInput = {
    id?: number
    name: string
    internal_id: string
    internal_pid: string
    createdAt?: Date | string
  }

  export type ContainerCreateOrConnectWithoutLogsInput = {
    where: ContainerWhereUniqueInput
    create: XOR<ContainerCreateWithoutLogsInput, ContainerUncheckedCreateWithoutLogsInput>
  }

  export type ContainerUpsertWithoutLogsInput = {
    update: XOR<ContainerUpdateWithoutLogsInput, ContainerUncheckedUpdateWithoutLogsInput>
    create: XOR<ContainerCreateWithoutLogsInput, ContainerUncheckedCreateWithoutLogsInput>
  }

  export type ContainerUpdateWithoutLogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    internal_id?: StringFieldUpdateOperationsInput | string
    internal_pid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContainerUncheckedUpdateWithoutLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    internal_id?: StringFieldUpdateOperationsInput | string
    internal_pid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogsUpdateWithoutContainerInput = {
    error?: BoolFieldUpdateOperationsInput | boolean
    data?: BytesFieldUpdateOperationsInput | Buffer
  }

  export type LogsUncheckedUpdateWithoutContainerInput = {
    id?: IntFieldUpdateOperationsInput | number
    error?: BoolFieldUpdateOperationsInput | boolean
    data?: BytesFieldUpdateOperationsInput | Buffer
  }

  export type LogsUncheckedUpdateManyWithoutLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    error?: BoolFieldUpdateOperationsInput | boolean
    data?: BytesFieldUpdateOperationsInput | Buffer
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
  export const dmmf: runtime.DMMF.Document;
}