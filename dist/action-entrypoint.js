import { createRequire } from "node:module";
var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __require = /* @__PURE__ */ createRequire(import.meta.url);

// node_modules/pgsql-enums/main/enums2int.json
var require_enums2int = __commonJS((exports, module) => {
  module.exports = {
    OverridingKind: {
      OVERRIDING_NOT_SET: 0,
      OVERRIDING_USER_VALUE: 1,
      OVERRIDING_SYSTEM_VALUE: 2
    },
    QuerySource: {
      QSRC_ORIGINAL: 0,
      QSRC_PARSER: 1,
      QSRC_INSTEAD_RULE: 2,
      QSRC_QUAL_INSTEAD_RULE: 3,
      QSRC_NON_INSTEAD_RULE: 4
    },
    SortByDir: {
      SORTBY_DEFAULT: 0,
      SORTBY_ASC: 1,
      SORTBY_DESC: 2,
      SORTBY_USING: 3
    },
    SortByNulls: {
      SORTBY_NULLS_DEFAULT: 0,
      SORTBY_NULLS_FIRST: 1,
      SORTBY_NULLS_LAST: 2
    },
    A_Expr_Kind: {
      AEXPR_OP: 0,
      AEXPR_OP_ANY: 1,
      AEXPR_OP_ALL: 2,
      AEXPR_DISTINCT: 3,
      AEXPR_NOT_DISTINCT: 4,
      AEXPR_NULLIF: 5,
      AEXPR_OF: 6,
      AEXPR_IN: 7,
      AEXPR_LIKE: 8,
      AEXPR_ILIKE: 9,
      AEXPR_SIMILAR: 10,
      AEXPR_BETWEEN: 11,
      AEXPR_NOT_BETWEEN: 12,
      AEXPR_BETWEEN_SYM: 13,
      AEXPR_NOT_BETWEEN_SYM: 14,
      AEXPR_PAREN: 15
    },
    RoleSpecType: {
      ROLESPEC_CSTRING: 0,
      ROLESPEC_CURRENT_USER: 1,
      ROLESPEC_SESSION_USER: 2,
      ROLESPEC_PUBLIC: 3
    },
    TableLikeOption: {
      CREATE_TABLE_LIKE_COMMENTS: 0,
      CREATE_TABLE_LIKE_CONSTRAINTS: 1,
      CREATE_TABLE_LIKE_DEFAULTS: 2,
      CREATE_TABLE_LIKE_GENERATED: 3,
      CREATE_TABLE_LIKE_IDENTITY: 4,
      CREATE_TABLE_LIKE_INDEXES: 5,
      CREATE_TABLE_LIKE_STATISTICS: 6,
      CREATE_TABLE_LIKE_STORAGE: 7,
      CREATE_TABLE_LIKE_ALL: 8
    },
    DefElemAction: {
      DEFELEM_UNSPEC: 0,
      DEFELEM_SET: 1,
      DEFELEM_ADD: 2,
      DEFELEM_DROP: 3
    },
    PartitionRangeDatumKind: {
      PARTITION_RANGE_DATUM_MINVALUE: 0,
      PARTITION_RANGE_DATUM_VALUE: 1,
      PARTITION_RANGE_DATUM_MAXVALUE: 2
    },
    RTEKind: {
      RTE_RELATION: 0,
      RTE_SUBQUERY: 1,
      RTE_JOIN: 2,
      RTE_FUNCTION: 3,
      RTE_TABLEFUNC: 4,
      RTE_VALUES: 5,
      RTE_CTE: 6,
      RTE_NAMEDTUPLESTORE: 7,
      RTE_RESULT: 8
    },
    WCOKind: {
      WCO_VIEW_CHECK: 0,
      WCO_RLS_INSERT_CHECK: 1,
      WCO_RLS_UPDATE_CHECK: 2,
      WCO_RLS_CONFLICT_CHECK: 3
    },
    GroupingSetKind: {
      GROUPING_SET_EMPTY: 0,
      GROUPING_SET_SIMPLE: 1,
      GROUPING_SET_ROLLUP: 2,
      GROUPING_SET_CUBE: 3,
      GROUPING_SET_SETS: 4
    },
    CTEMaterialize: {
      CTEMaterializeDefault: 0,
      CTEMaterializeAlways: 1,
      CTEMaterializeNever: 2
    },
    SetOperation: {
      SETOP_NONE: 0,
      SETOP_UNION: 1,
      SETOP_INTERSECT: 2,
      SETOP_EXCEPT: 3
    },
    ObjectType: {
      OBJECT_ACCESS_METHOD: 0,
      OBJECT_AGGREGATE: 1,
      OBJECT_AMOP: 2,
      OBJECT_AMPROC: 3,
      OBJECT_ATTRIBUTE: 4,
      OBJECT_CAST: 5,
      OBJECT_COLUMN: 6,
      OBJECT_COLLATION: 7,
      OBJECT_CONVERSION: 8,
      OBJECT_DATABASE: 9,
      OBJECT_DEFAULT: 10,
      OBJECT_DEFACL: 11,
      OBJECT_DOMAIN: 12,
      OBJECT_DOMCONSTRAINT: 13,
      OBJECT_EVENT_TRIGGER: 14,
      OBJECT_EXTENSION: 15,
      OBJECT_FDW: 16,
      OBJECT_FOREIGN_SERVER: 17,
      OBJECT_FOREIGN_TABLE: 18,
      OBJECT_FUNCTION: 19,
      OBJECT_INDEX: 20,
      OBJECT_LANGUAGE: 21,
      OBJECT_LARGEOBJECT: 22,
      OBJECT_MATVIEW: 23,
      OBJECT_OPCLASS: 24,
      OBJECT_OPERATOR: 25,
      OBJECT_OPFAMILY: 26,
      OBJECT_POLICY: 27,
      OBJECT_PROCEDURE: 28,
      OBJECT_PUBLICATION: 29,
      OBJECT_PUBLICATION_REL: 30,
      OBJECT_ROLE: 31,
      OBJECT_ROUTINE: 32,
      OBJECT_RULE: 33,
      OBJECT_SCHEMA: 34,
      OBJECT_SEQUENCE: 35,
      OBJECT_SUBSCRIPTION: 36,
      OBJECT_STATISTIC_EXT: 37,
      OBJECT_TABCONSTRAINT: 38,
      OBJECT_TABLE: 39,
      OBJECT_TABLESPACE: 40,
      OBJECT_TRANSFORM: 41,
      OBJECT_TRIGGER: 42,
      OBJECT_TSCONFIGURATION: 43,
      OBJECT_TSDICTIONARY: 44,
      OBJECT_TSPARSER: 45,
      OBJECT_TSTEMPLATE: 46,
      OBJECT_TYPE: 47,
      OBJECT_USER_MAPPING: 48,
      OBJECT_VIEW: 49
    },
    DropBehavior: {
      DROP_RESTRICT: 0,
      DROP_CASCADE: 1
    },
    AlterTableType: {
      AT_AddColumn: 0,
      AT_AddColumnRecurse: 1,
      AT_AddColumnToView: 2,
      AT_ColumnDefault: 3,
      AT_CookedColumnDefault: 4,
      AT_DropNotNull: 5,
      AT_SetNotNull: 6,
      AT_DropExpression: 7,
      AT_CheckNotNull: 8,
      AT_SetStatistics: 9,
      AT_SetOptions: 10,
      AT_ResetOptions: 11,
      AT_SetStorage: 12,
      AT_DropColumn: 13,
      AT_DropColumnRecurse: 14,
      AT_AddIndex: 15,
      AT_ReAddIndex: 16,
      AT_AddConstraint: 17,
      AT_AddConstraintRecurse: 18,
      AT_ReAddConstraint: 19,
      AT_ReAddDomainConstraint: 20,
      AT_AlterConstraint: 21,
      AT_ValidateConstraint: 22,
      AT_ValidateConstraintRecurse: 23,
      AT_AddIndexConstraint: 24,
      AT_DropConstraint: 25,
      AT_DropConstraintRecurse: 26,
      AT_ReAddComment: 27,
      AT_AlterColumnType: 28,
      AT_AlterColumnGenericOptions: 29,
      AT_ChangeOwner: 30,
      AT_ClusterOn: 31,
      AT_DropCluster: 32,
      AT_SetLogged: 33,
      AT_SetUnLogged: 34,
      AT_DropOids: 35,
      AT_SetTableSpace: 36,
      AT_SetRelOptions: 37,
      AT_ResetRelOptions: 38,
      AT_ReplaceRelOptions: 39,
      AT_EnableTrig: 40,
      AT_EnableAlwaysTrig: 41,
      AT_EnableReplicaTrig: 42,
      AT_DisableTrig: 43,
      AT_EnableTrigAll: 44,
      AT_DisableTrigAll: 45,
      AT_EnableTrigUser: 46,
      AT_DisableTrigUser: 47,
      AT_EnableRule: 48,
      AT_EnableAlwaysRule: 49,
      AT_EnableReplicaRule: 50,
      AT_DisableRule: 51,
      AT_AddInherit: 52,
      AT_DropInherit: 53,
      AT_AddOf: 54,
      AT_DropOf: 55,
      AT_ReplicaIdentity: 56,
      AT_EnableRowSecurity: 57,
      AT_DisableRowSecurity: 58,
      AT_ForceRowSecurity: 59,
      AT_NoForceRowSecurity: 60,
      AT_GenericOptions: 61,
      AT_AttachPartition: 62,
      AT_DetachPartition: 63,
      AT_AddIdentity: 64,
      AT_SetIdentity: 65,
      AT_DropIdentity: 66
    },
    GrantTargetType: {
      ACL_TARGET_OBJECT: 0,
      ACL_TARGET_ALL_IN_SCHEMA: 1,
      ACL_TARGET_DEFAULTS: 2
    },
    VariableSetKind: {
      VAR_SET_VALUE: 0,
      VAR_SET_DEFAULT: 1,
      VAR_SET_CURRENT: 2,
      VAR_SET_MULTI: 3,
      VAR_RESET: 4,
      VAR_RESET_ALL: 5
    },
    ConstrType: {
      CONSTR_NULL: 0,
      CONSTR_NOTNULL: 1,
      CONSTR_DEFAULT: 2,
      CONSTR_IDENTITY: 3,
      CONSTR_GENERATED: 4,
      CONSTR_CHECK: 5,
      CONSTR_PRIMARY: 6,
      CONSTR_UNIQUE: 7,
      CONSTR_EXCLUSION: 8,
      CONSTR_FOREIGN: 9,
      CONSTR_ATTR_DEFERRABLE: 10,
      CONSTR_ATTR_NOT_DEFERRABLE: 11,
      CONSTR_ATTR_DEFERRED: 12,
      CONSTR_ATTR_IMMEDIATE: 13
    },
    ImportForeignSchemaType: {
      FDW_IMPORT_SCHEMA_ALL: 0,
      FDW_IMPORT_SCHEMA_LIMIT_TO: 1,
      FDW_IMPORT_SCHEMA_EXCEPT: 2
    },
    RoleStmtType: {
      ROLESTMT_ROLE: 0,
      ROLESTMT_USER: 1,
      ROLESTMT_GROUP: 2
    },
    FetchDirection: {
      FETCH_FORWARD: 0,
      FETCH_BACKWARD: 1,
      FETCH_ABSOLUTE: 2,
      FETCH_RELATIVE: 3
    },
    FunctionParameterMode: {
      FUNC_PARAM_IN: 0,
      FUNC_PARAM_OUT: 1,
      FUNC_PARAM_INOUT: 2,
      FUNC_PARAM_VARIADIC: 3,
      FUNC_PARAM_TABLE: 4
    },
    TransactionStmtKind: {
      TRANS_STMT_BEGIN: 0,
      TRANS_STMT_START: 1,
      TRANS_STMT_COMMIT: 2,
      TRANS_STMT_ROLLBACK: 3,
      TRANS_STMT_SAVEPOINT: 4,
      TRANS_STMT_RELEASE: 5,
      TRANS_STMT_ROLLBACK_TO: 6,
      TRANS_STMT_PREPARE: 7,
      TRANS_STMT_COMMIT_PREPARED: 8,
      TRANS_STMT_ROLLBACK_PREPARED: 9
    },
    ViewCheckOption: {
      NO_CHECK_OPTION: 0,
      LOCAL_CHECK_OPTION: 1,
      CASCADED_CHECK_OPTION: 2
    },
    ClusterOption: {
      CLUOPT_RECHECK: 0,
      CLUOPT_VERBOSE: 1
    },
    DiscardMode: {
      DISCARD_ALL: 0,
      DISCARD_PLANS: 1,
      DISCARD_SEQUENCES: 2,
      DISCARD_TEMP: 3
    },
    ReindexObjectType: {
      REINDEX_OBJECT_INDEX: 0,
      REINDEX_OBJECT_TABLE: 1,
      REINDEX_OBJECT_SCHEMA: 2,
      REINDEX_OBJECT_SYSTEM: 3,
      REINDEX_OBJECT_DATABASE: 4
    },
    AlterTSConfigType: {
      ALTER_TSCONFIG_ADD_MAPPING: 0,
      ALTER_TSCONFIG_ALTER_MAPPING_FOR_TOKEN: 1,
      ALTER_TSCONFIG_REPLACE_DICT: 2,
      ALTER_TSCONFIG_REPLACE_DICT_FOR_TOKEN: 3,
      ALTER_TSCONFIG_DROP_MAPPING: 4
    },
    AlterSubscriptionType: {
      ALTER_SUBSCRIPTION_OPTIONS: 0,
      ALTER_SUBSCRIPTION_CONNECTION: 1,
      ALTER_SUBSCRIPTION_PUBLICATION: 2,
      ALTER_SUBSCRIPTION_REFRESH: 3,
      ALTER_SUBSCRIPTION_ENABLED: 4
    },
    OnCommitAction: {
      ONCOMMIT_NOOP: 0,
      ONCOMMIT_PRESERVE_ROWS: 1,
      ONCOMMIT_DELETE_ROWS: 2,
      ONCOMMIT_DROP: 3
    },
    ParamKind: {
      PARAM_EXTERN: 0,
      PARAM_EXEC: 1,
      PARAM_SUBLINK: 2,
      PARAM_MULTIEXPR: 3
    },
    CoercionContext: {
      COERCION_IMPLICIT: 0,
      COERCION_ASSIGNMENT: 1,
      COERCION_EXPLICIT: 2
    },
    CoercionForm: {
      COERCE_EXPLICIT_CALL: 0,
      COERCE_EXPLICIT_CAST: 1,
      COERCE_IMPLICIT_CAST: 2
    },
    BoolExprType: {
      AND_EXPR: 0,
      OR_EXPR: 1,
      NOT_EXPR: 2
    },
    SubLinkType: {
      EXISTS_SUBLINK: 0,
      ALL_SUBLINK: 1,
      ANY_SUBLINK: 2,
      ROWCOMPARE_SUBLINK: 3,
      EXPR_SUBLINK: 4,
      MULTIEXPR_SUBLINK: 5,
      ARRAY_SUBLINK: 6,
      CTE_SUBLINK: 7
    },
    RowCompareType: {
      ROWCOMPARE_LT: 0,
      ROWCOMPARE_LE: 1,
      ROWCOMPARE_EQ: 2,
      ROWCOMPARE_GE: 3,
      ROWCOMPARE_GT: 4,
      ROWCOMPARE_NE: 5
    },
    MinMaxOp: {
      IS_GREATEST: 0,
      IS_LEAST: 1
    },
    SQLValueFunctionOp: {
      SVFOP_CURRENT_DATE: 0,
      SVFOP_CURRENT_TIME: 1,
      SVFOP_CURRENT_TIME_N: 2,
      SVFOP_CURRENT_TIMESTAMP: 3,
      SVFOP_CURRENT_TIMESTAMP_N: 4,
      SVFOP_LOCALTIME: 5,
      SVFOP_LOCALTIME_N: 6,
      SVFOP_LOCALTIMESTAMP: 7,
      SVFOP_LOCALTIMESTAMP_N: 8,
      SVFOP_CURRENT_ROLE: 9,
      SVFOP_CURRENT_USER: 10,
      SVFOP_USER: 11,
      SVFOP_SESSION_USER: 12,
      SVFOP_CURRENT_CATALOG: 13,
      SVFOP_CURRENT_SCHEMA: 14
    },
    XmlExprOp: {
      IS_XMLCONCAT: 0,
      IS_XMLELEMENT: 1,
      IS_XMLFOREST: 2,
      IS_XMLPARSE: 3,
      IS_XMLPI: 4,
      IS_XMLROOT: 5,
      IS_XMLSERIALIZE: 6,
      IS_DOCUMENT: 7
    },
    XmlOptionType: {
      XMLOPTION_DOCUMENT: 0,
      XMLOPTION_CONTENT: 1
    },
    NullTestType: {
      IS_NULL: 0,
      IS_NOT_NULL: 1
    },
    BoolTestType: {
      IS_TRUE: 0,
      IS_NOT_TRUE: 1,
      IS_FALSE: 2,
      IS_NOT_FALSE: 3,
      IS_UNKNOWN: 4,
      IS_NOT_UNKNOWN: 5
    },
    CmdType: {
      CMD_UNKNOWN: 0,
      CMD_SELECT: 1,
      CMD_UPDATE: 2,
      CMD_INSERT: 3,
      CMD_DELETE: 4,
      CMD_UTILITY: 5,
      CMD_NOTHING: 6
    },
    JoinType: {
      JOIN_INNER: 0,
      JOIN_LEFT: 1,
      JOIN_FULL: 2,
      JOIN_RIGHT: 3,
      JOIN_SEMI: 4,
      JOIN_ANTI: 5,
      JOIN_UNIQUE_OUTER: 6,
      JOIN_UNIQUE_INNER: 7
    },
    AggStrategy: {
      AGG_PLAIN: 0,
      AGG_SORTED: 1,
      AGG_HASHED: 2,
      AGG_MIXED: 3
    },
    AggSplit: {
      AGGSPLIT_SIMPLE: 0,
      AGGSPLIT_INITIAL_SERIAL: 1,
      AGGSPLIT_FINAL_DESERIAL: 2
    },
    SetOpCmd: {
      SETOPCMD_INTERSECT: 0,
      SETOPCMD_INTERSECT_ALL: 1,
      SETOPCMD_EXCEPT: 2,
      SETOPCMD_EXCEPT_ALL: 3
    },
    SetOpStrategy: {
      SETOP_SORTED: 0,
      SETOP_HASHED: 1
    },
    OnConflictAction: {
      ONCONFLICT_NONE: 0,
      ONCONFLICT_NOTHING: 1,
      ONCONFLICT_UPDATE: 2
    },
    LimitOption: {
      LIMIT_OPTION_DEFAULT: 0,
      LIMIT_OPTION_COUNT: 1,
      LIMIT_OPTION_WITH_TIES: 2
    },
    LockClauseStrength: {
      LCS_NONE: 0,
      LCS_FORKEYSHARE: 1,
      LCS_FORSHARE: 2,
      LCS_FORNOKEYUPDATE: 3,
      LCS_FORUPDATE: 4
    },
    LockWaitPolicy: {
      LockWaitBlock: 0,
      LockWaitSkip: 1,
      LockWaitError: 2
    },
    LockTupleMode: {
      LockTupleKeyShare: 0,
      LockTupleShare: 1,
      LockTupleNoKeyExclusive: 2,
      LockTupleExclusive: 3
    },
    KeywordKind: {
      NO_KEYWORD: 0,
      UNRESERVED_KEYWORD: 1,
      COL_NAME_KEYWORD: 2,
      TYPE_FUNC_NAME_KEYWORD: 3,
      RESERVED_KEYWORD: 4
    },
    Token: {
      NUL: 0,
      ASCII_37: 37,
      ASCII_40: 40,
      ASCII_41: 41,
      ASCII_42: 42,
      ASCII_43: 43,
      ASCII_44: 44,
      ASCII_45: 45,
      ASCII_46: 46,
      ASCII_47: 47,
      ASCII_58: 58,
      ASCII_59: 59,
      ASCII_60: 60,
      ASCII_61: 61,
      ASCII_62: 62,
      ASCII_63: 63,
      ASCII_91: 91,
      ASCII_92: 92,
      ASCII_93: 93,
      ASCII_94: 94,
      IDENT: 258,
      UIDENT: 259,
      FCONST: 260,
      SCONST: 261,
      USCONST: 262,
      BCONST: 263,
      XCONST: 264,
      Op: 265,
      ICONST: 266,
      PARAM: 267,
      TYPECAST: 268,
      DOT_DOT: 269,
      COLON_EQUALS: 270,
      EQUALS_GREATER: 271,
      LESS_EQUALS: 272,
      GREATER_EQUALS: 273,
      NOT_EQUALS: 274,
      SQL_COMMENT: 275,
      C_COMMENT: 276,
      ABORT_P: 277,
      ABSOLUTE_P: 278,
      ACCESS: 279,
      ACTION: 280,
      ADD_P: 281,
      ADMIN: 282,
      AFTER: 283,
      AGGREGATE: 284,
      ALL: 285,
      ALSO: 286,
      ALTER: 287,
      ALWAYS: 288,
      ANALYSE: 289,
      ANALYZE: 290,
      AND: 291,
      ANY: 292,
      ARRAY: 293,
      AS: 294,
      ASC: 295,
      ASSERTION: 296,
      ASSIGNMENT: 297,
      ASYMMETRIC: 298,
      AT: 299,
      ATTACH: 300,
      ATTRIBUTE: 301,
      AUTHORIZATION: 302,
      BACKWARD: 303,
      BEFORE: 304,
      BEGIN_P: 305,
      BETWEEN: 306,
      BIGINT: 307,
      BINARY: 308,
      BIT: 309,
      BOOLEAN_P: 310,
      BOTH: 311,
      BY: 312,
      CACHE: 313,
      CALL: 314,
      CALLED: 315,
      CASCADE: 316,
      CASCADED: 317,
      CASE: 318,
      CAST: 319,
      CATALOG_P: 320,
      CHAIN: 321,
      CHAR_P: 322,
      CHARACTER: 323,
      CHARACTERISTICS: 324,
      CHECK: 325,
      CHECKPOINT: 326,
      CLASS: 327,
      CLOSE: 328,
      CLUSTER: 329,
      COALESCE: 330,
      COLLATE: 331,
      COLLATION: 332,
      COLUMN: 333,
      COLUMNS: 334,
      COMMENT: 335,
      COMMENTS: 336,
      COMMIT: 337,
      COMMITTED: 338,
      CONCURRENTLY: 339,
      CONFIGURATION: 340,
      CONFLICT: 341,
      CONNECTION: 342,
      CONSTRAINT: 343,
      CONSTRAINTS: 344,
      CONTENT_P: 345,
      CONTINUE_P: 346,
      CONVERSION_P: 347,
      COPY: 348,
      COST: 349,
      CREATE: 350,
      CROSS: 351,
      CSV: 352,
      CUBE: 353,
      CURRENT_P: 354,
      CURRENT_CATALOG: 355,
      CURRENT_DATE: 356,
      CURRENT_ROLE: 357,
      CURRENT_SCHEMA: 358,
      CURRENT_TIME: 359,
      CURRENT_TIMESTAMP: 360,
      CURRENT_USER: 361,
      CURSOR: 362,
      CYCLE: 363,
      DATA_P: 364,
      DATABASE: 365,
      DAY_P: 366,
      DEALLOCATE: 367,
      DEC: 368,
      DECIMAL_P: 369,
      DECLARE: 370,
      DEFAULT: 371,
      DEFAULTS: 372,
      DEFERRABLE: 373,
      DEFERRED: 374,
      DEFINER: 375,
      DELETE_P: 376,
      DELIMITER: 377,
      DELIMITERS: 378,
      DEPENDS: 379,
      DESC: 380,
      DETACH: 381,
      DICTIONARY: 382,
      DISABLE_P: 383,
      DISCARD: 384,
      DISTINCT: 385,
      DO: 386,
      DOCUMENT_P: 387,
      DOMAIN_P: 388,
      DOUBLE_P: 389,
      DROP: 390,
      EACH: 391,
      ELSE: 392,
      ENABLE_P: 393,
      ENCODING: 394,
      ENCRYPTED: 395,
      END_P: 396,
      ENUM_P: 397,
      ESCAPE: 398,
      EVENT: 399,
      EXCEPT: 400,
      EXCLUDE: 401,
      EXCLUDING: 402,
      EXCLUSIVE: 403,
      EXECUTE: 404,
      EXISTS: 405,
      EXPLAIN: 406,
      EXPRESSION: 407,
      EXTENSION: 408,
      EXTERNAL: 409,
      EXTRACT: 410,
      FALSE_P: 411,
      FAMILY: 412,
      FETCH: 413,
      FILTER: 414,
      FIRST_P: 415,
      FLOAT_P: 416,
      FOLLOWING: 417,
      FOR: 418,
      FORCE: 419,
      FOREIGN: 420,
      FORWARD: 421,
      FREEZE: 422,
      FROM: 423,
      FULL: 424,
      FUNCTION: 425,
      FUNCTIONS: 426,
      GENERATED: 427,
      GLOBAL: 428,
      GRANT: 429,
      GRANTED: 430,
      GREATEST: 431,
      GROUP_P: 432,
      GROUPING: 433,
      GROUPS: 434,
      HANDLER: 435,
      HAVING: 436,
      HEADER_P: 437,
      HOLD: 438,
      HOUR_P: 439,
      IDENTITY_P: 440,
      IF_P: 441,
      ILIKE: 442,
      IMMEDIATE: 443,
      IMMUTABLE: 444,
      IMPLICIT_P: 445,
      IMPORT_P: 446,
      IN_P: 447,
      INCLUDE: 448,
      INCLUDING: 449,
      INCREMENT: 450,
      INDEX: 451,
      INDEXES: 452,
      INHERIT: 453,
      INHERITS: 454,
      INITIALLY: 455,
      INLINE_P: 456,
      INNER_P: 457,
      INOUT: 458,
      INPUT_P: 459,
      INSENSITIVE: 460,
      INSERT: 461,
      INSTEAD: 462,
      INT_P: 463,
      INTEGER: 464,
      INTERSECT: 465,
      INTERVAL: 466,
      INTO: 467,
      INVOKER: 468,
      IS: 469,
      ISNULL: 470,
      ISOLATION: 471,
      JOIN: 472,
      KEY: 473,
      LABEL: 474,
      LANGUAGE: 475,
      LARGE_P: 476,
      LAST_P: 477,
      LATERAL_P: 478,
      LEADING: 479,
      LEAKPROOF: 480,
      LEAST: 481,
      LEFT: 482,
      LEVEL: 483,
      LIKE: 484,
      LIMIT: 485,
      LISTEN: 486,
      LOAD: 487,
      LOCAL: 488,
      LOCALTIME: 489,
      LOCALTIMESTAMP: 490,
      LOCATION: 491,
      LOCK_P: 492,
      LOCKED: 493,
      LOGGED: 494,
      MAPPING: 495,
      MATCH: 496,
      MATERIALIZED: 497,
      MAXVALUE: 498,
      METHOD: 499,
      MINUTE_P: 500,
      MINVALUE: 501,
      MODE: 502,
      MONTH_P: 503,
      MOVE: 504,
      NAME_P: 505,
      NAMES: 506,
      NATIONAL: 507,
      NATURAL: 508,
      NCHAR: 509,
      NEW: 510,
      NEXT: 511,
      NFC: 512,
      NFD: 513,
      NFKC: 514,
      NFKD: 515,
      NO: 516,
      NONE: 517,
      NORMALIZE: 518,
      NORMALIZED: 519,
      NOT: 520,
      NOTHING: 521,
      NOTIFY: 522,
      NOTNULL: 523,
      NOWAIT: 524,
      NULL_P: 525,
      NULLIF: 526,
      NULLS_P: 527,
      NUMERIC: 528,
      OBJECT_P: 529,
      OF: 530,
      OFF: 531,
      OFFSET: 532,
      OIDS: 533,
      OLD: 534,
      ON: 535,
      ONLY: 536,
      OPERATOR: 537,
      OPTION: 538,
      OPTIONS: 539,
      OR: 540,
      ORDER: 541,
      ORDINALITY: 542,
      OTHERS: 543,
      OUT_P: 544,
      OUTER_P: 545,
      OVER: 546,
      OVERLAPS: 547,
      OVERLAY: 548,
      OVERRIDING: 549,
      OWNED: 550,
      OWNER: 551,
      PARALLEL: 552,
      PARSER: 553,
      PARTIAL: 554,
      PARTITION: 555,
      PASSING: 556,
      PASSWORD: 557,
      PLACING: 558,
      PLANS: 559,
      POLICY: 560,
      POSITION: 561,
      PRECEDING: 562,
      PRECISION: 563,
      PRESERVE: 564,
      PREPARE: 565,
      PREPARED: 566,
      PRIMARY: 567,
      PRIOR: 568,
      PRIVILEGES: 569,
      PROCEDURAL: 570,
      PROCEDURE: 571,
      PROCEDURES: 572,
      PROGRAM: 573,
      PUBLICATION: 574,
      QUOTE: 575,
      RANGE: 576,
      READ: 577,
      REAL: 578,
      REASSIGN: 579,
      RECHECK: 580,
      RECURSIVE: 581,
      REF_P: 582,
      REFERENCES: 583,
      REFERENCING: 584,
      REFRESH: 585,
      REINDEX: 586,
      RELATIVE_P: 587,
      RELEASE: 588,
      RENAME: 589,
      REPEATABLE: 590,
      REPLACE: 591,
      REPLICA: 592,
      RESET: 593,
      RESTART: 594,
      RESTRICT: 595,
      RETURNING: 596,
      RETURNS: 597,
      REVOKE: 598,
      RIGHT: 599,
      ROLE: 600,
      ROLLBACK: 601,
      ROLLUP: 602,
      ROUTINE: 603,
      ROUTINES: 604,
      ROW: 605,
      ROWS: 606,
      RULE: 607,
      SAVEPOINT: 608,
      SCHEMA: 609,
      SCHEMAS: 610,
      SCROLL: 611,
      SEARCH: 612,
      SECOND_P: 613,
      SECURITY: 614,
      SELECT: 615,
      SEQUENCE: 616,
      SEQUENCES: 617,
      SERIALIZABLE: 618,
      SERVER: 619,
      SESSION: 620,
      SESSION_USER: 621,
      SET: 622,
      SETS: 623,
      SETOF: 624,
      SHARE: 625,
      SHOW: 626,
      SIMILAR: 627,
      SIMPLE: 628,
      SKIP: 629,
      SMALLINT: 630,
      SNAPSHOT: 631,
      SOME: 632,
      SQL_P: 633,
      STABLE: 634,
      STANDALONE_P: 635,
      START: 636,
      STATEMENT: 637,
      STATISTICS: 638,
      STDIN: 639,
      STDOUT: 640,
      STORAGE: 641,
      STORED: 642,
      STRICT_P: 643,
      STRIP_P: 644,
      SUBSCRIPTION: 645,
      SUBSTRING: 646,
      SUPPORT: 647,
      SYMMETRIC: 648,
      SYSID: 649,
      SYSTEM_P: 650,
      TABLE: 651,
      TABLES: 652,
      TABLESAMPLE: 653,
      TABLESPACE: 654,
      TEMP: 655,
      TEMPLATE: 656,
      TEMPORARY: 657,
      TEXT_P: 658,
      THEN: 659,
      TIES: 660,
      TIME: 661,
      TIMESTAMP: 662,
      TO: 663,
      TRAILING: 664,
      TRANSACTION: 665,
      TRANSFORM: 666,
      TREAT: 667,
      TRIGGER: 668,
      TRIM: 669,
      TRUE_P: 670,
      TRUNCATE: 671,
      TRUSTED: 672,
      TYPE_P: 673,
      TYPES_P: 674,
      UESCAPE: 675,
      UNBOUNDED: 676,
      UNCOMMITTED: 677,
      UNENCRYPTED: 678,
      UNION: 679,
      UNIQUE: 680,
      UNKNOWN: 681,
      UNLISTEN: 682,
      UNLOGGED: 683,
      UNTIL: 684,
      UPDATE: 685,
      USER: 686,
      USING: 687,
      VACUUM: 688,
      VALID: 689,
      VALIDATE: 690,
      VALIDATOR: 691,
      VALUE_P: 692,
      VALUES: 693,
      VARCHAR: 694,
      VARIADIC: 695,
      VARYING: 696,
      VERBOSE: 697,
      VERSION_P: 698,
      VIEW: 699,
      VIEWS: 700,
      VOLATILE: 701,
      WHEN: 702,
      WHERE: 703,
      WHITESPACE_P: 704,
      WINDOW: 705,
      WITH: 706,
      WITHIN: 707,
      WITHOUT: 708,
      WORK: 709,
      WRAPPER: 710,
      WRITE: 711,
      XML_P: 712,
      XMLATTRIBUTES: 713,
      XMLCONCAT: 714,
      XMLELEMENT: 715,
      XMLEXISTS: 716,
      XMLFOREST: 717,
      XMLNAMESPACES: 718,
      XMLPARSE: 719,
      XMLPI: 720,
      XMLROOT: 721,
      XMLSERIALIZE: 722,
      XMLTABLE: 723,
      YEAR_P: 724,
      YES_P: 725,
      ZONE: 726,
      NOT_LA: 727,
      NULLS_LA: 728,
      WITH_LA: 729,
      POSTFIXOP: 730,
      UMINUS: 731
    }
  };
});

// node_modules/pgsql-enums/main/enums2str.json
var require_enums2str = __commonJS((exports, module) => {
  module.exports = {
    OverridingKind: {
      "0": "OVERRIDING_NOT_SET",
      "1": "OVERRIDING_USER_VALUE",
      "2": "OVERRIDING_SYSTEM_VALUE"
    },
    QuerySource: {
      "0": "QSRC_ORIGINAL",
      "1": "QSRC_PARSER",
      "2": "QSRC_INSTEAD_RULE",
      "3": "QSRC_QUAL_INSTEAD_RULE",
      "4": "QSRC_NON_INSTEAD_RULE"
    },
    SortByDir: {
      "0": "SORTBY_DEFAULT",
      "1": "SORTBY_ASC",
      "2": "SORTBY_DESC",
      "3": "SORTBY_USING"
    },
    SortByNulls: {
      "0": "SORTBY_NULLS_DEFAULT",
      "1": "SORTBY_NULLS_FIRST",
      "2": "SORTBY_NULLS_LAST"
    },
    A_Expr_Kind: {
      "0": "AEXPR_OP",
      "1": "AEXPR_OP_ANY",
      "2": "AEXPR_OP_ALL",
      "3": "AEXPR_DISTINCT",
      "4": "AEXPR_NOT_DISTINCT",
      "5": "AEXPR_NULLIF",
      "6": "AEXPR_OF",
      "7": "AEXPR_IN",
      "8": "AEXPR_LIKE",
      "9": "AEXPR_ILIKE",
      "10": "AEXPR_SIMILAR",
      "11": "AEXPR_BETWEEN",
      "12": "AEXPR_NOT_BETWEEN",
      "13": "AEXPR_BETWEEN_SYM",
      "14": "AEXPR_NOT_BETWEEN_SYM",
      "15": "AEXPR_PAREN"
    },
    RoleSpecType: {
      "0": "ROLESPEC_CSTRING",
      "1": "ROLESPEC_CURRENT_USER",
      "2": "ROLESPEC_SESSION_USER",
      "3": "ROLESPEC_PUBLIC"
    },
    TableLikeOption: {
      "0": "CREATE_TABLE_LIKE_COMMENTS",
      "1": "CREATE_TABLE_LIKE_CONSTRAINTS",
      "2": "CREATE_TABLE_LIKE_DEFAULTS",
      "3": "CREATE_TABLE_LIKE_GENERATED",
      "4": "CREATE_TABLE_LIKE_IDENTITY",
      "5": "CREATE_TABLE_LIKE_INDEXES",
      "6": "CREATE_TABLE_LIKE_STATISTICS",
      "7": "CREATE_TABLE_LIKE_STORAGE",
      "8": "CREATE_TABLE_LIKE_ALL"
    },
    DefElemAction: {
      "0": "DEFELEM_UNSPEC",
      "1": "DEFELEM_SET",
      "2": "DEFELEM_ADD",
      "3": "DEFELEM_DROP"
    },
    PartitionRangeDatumKind: {
      "0": "PARTITION_RANGE_DATUM_MINVALUE",
      "1": "PARTITION_RANGE_DATUM_VALUE",
      "2": "PARTITION_RANGE_DATUM_MAXVALUE"
    },
    RTEKind: {
      "0": "RTE_RELATION",
      "1": "RTE_SUBQUERY",
      "2": "RTE_JOIN",
      "3": "RTE_FUNCTION",
      "4": "RTE_TABLEFUNC",
      "5": "RTE_VALUES",
      "6": "RTE_CTE",
      "7": "RTE_NAMEDTUPLESTORE",
      "8": "RTE_RESULT"
    },
    WCOKind: {
      "0": "WCO_VIEW_CHECK",
      "1": "WCO_RLS_INSERT_CHECK",
      "2": "WCO_RLS_UPDATE_CHECK",
      "3": "WCO_RLS_CONFLICT_CHECK"
    },
    GroupingSetKind: {
      "0": "GROUPING_SET_EMPTY",
      "1": "GROUPING_SET_SIMPLE",
      "2": "GROUPING_SET_ROLLUP",
      "3": "GROUPING_SET_CUBE",
      "4": "GROUPING_SET_SETS"
    },
    CTEMaterialize: {
      "0": "CTEMaterializeDefault",
      "1": "CTEMaterializeAlways",
      "2": "CTEMaterializeNever"
    },
    SetOperation: {
      "0": "SETOP_NONE",
      "1": "SETOP_UNION",
      "2": "SETOP_INTERSECT",
      "3": "SETOP_EXCEPT"
    },
    ObjectType: {
      "0": "OBJECT_ACCESS_METHOD",
      "1": "OBJECT_AGGREGATE",
      "2": "OBJECT_AMOP",
      "3": "OBJECT_AMPROC",
      "4": "OBJECT_ATTRIBUTE",
      "5": "OBJECT_CAST",
      "6": "OBJECT_COLUMN",
      "7": "OBJECT_COLLATION",
      "8": "OBJECT_CONVERSION",
      "9": "OBJECT_DATABASE",
      "10": "OBJECT_DEFAULT",
      "11": "OBJECT_DEFACL",
      "12": "OBJECT_DOMAIN",
      "13": "OBJECT_DOMCONSTRAINT",
      "14": "OBJECT_EVENT_TRIGGER",
      "15": "OBJECT_EXTENSION",
      "16": "OBJECT_FDW",
      "17": "OBJECT_FOREIGN_SERVER",
      "18": "OBJECT_FOREIGN_TABLE",
      "19": "OBJECT_FUNCTION",
      "20": "OBJECT_INDEX",
      "21": "OBJECT_LANGUAGE",
      "22": "OBJECT_LARGEOBJECT",
      "23": "OBJECT_MATVIEW",
      "24": "OBJECT_OPCLASS",
      "25": "OBJECT_OPERATOR",
      "26": "OBJECT_OPFAMILY",
      "27": "OBJECT_POLICY",
      "28": "OBJECT_PROCEDURE",
      "29": "OBJECT_PUBLICATION",
      "30": "OBJECT_PUBLICATION_REL",
      "31": "OBJECT_ROLE",
      "32": "OBJECT_ROUTINE",
      "33": "OBJECT_RULE",
      "34": "OBJECT_SCHEMA",
      "35": "OBJECT_SEQUENCE",
      "36": "OBJECT_SUBSCRIPTION",
      "37": "OBJECT_STATISTIC_EXT",
      "38": "OBJECT_TABCONSTRAINT",
      "39": "OBJECT_TABLE",
      "40": "OBJECT_TABLESPACE",
      "41": "OBJECT_TRANSFORM",
      "42": "OBJECT_TRIGGER",
      "43": "OBJECT_TSCONFIGURATION",
      "44": "OBJECT_TSDICTIONARY",
      "45": "OBJECT_TSPARSER",
      "46": "OBJECT_TSTEMPLATE",
      "47": "OBJECT_TYPE",
      "48": "OBJECT_USER_MAPPING",
      "49": "OBJECT_VIEW"
    },
    DropBehavior: {
      "0": "DROP_RESTRICT",
      "1": "DROP_CASCADE"
    },
    AlterTableType: {
      "0": "AT_AddColumn",
      "1": "AT_AddColumnRecurse",
      "2": "AT_AddColumnToView",
      "3": "AT_ColumnDefault",
      "4": "AT_CookedColumnDefault",
      "5": "AT_DropNotNull",
      "6": "AT_SetNotNull",
      "7": "AT_DropExpression",
      "8": "AT_CheckNotNull",
      "9": "AT_SetStatistics",
      "10": "AT_SetOptions",
      "11": "AT_ResetOptions",
      "12": "AT_SetStorage",
      "13": "AT_DropColumn",
      "14": "AT_DropColumnRecurse",
      "15": "AT_AddIndex",
      "16": "AT_ReAddIndex",
      "17": "AT_AddConstraint",
      "18": "AT_AddConstraintRecurse",
      "19": "AT_ReAddConstraint",
      "20": "AT_ReAddDomainConstraint",
      "21": "AT_AlterConstraint",
      "22": "AT_ValidateConstraint",
      "23": "AT_ValidateConstraintRecurse",
      "24": "AT_AddIndexConstraint",
      "25": "AT_DropConstraint",
      "26": "AT_DropConstraintRecurse",
      "27": "AT_ReAddComment",
      "28": "AT_AlterColumnType",
      "29": "AT_AlterColumnGenericOptions",
      "30": "AT_ChangeOwner",
      "31": "AT_ClusterOn",
      "32": "AT_DropCluster",
      "33": "AT_SetLogged",
      "34": "AT_SetUnLogged",
      "35": "AT_DropOids",
      "36": "AT_SetTableSpace",
      "37": "AT_SetRelOptions",
      "38": "AT_ResetRelOptions",
      "39": "AT_ReplaceRelOptions",
      "40": "AT_EnableTrig",
      "41": "AT_EnableAlwaysTrig",
      "42": "AT_EnableReplicaTrig",
      "43": "AT_DisableTrig",
      "44": "AT_EnableTrigAll",
      "45": "AT_DisableTrigAll",
      "46": "AT_EnableTrigUser",
      "47": "AT_DisableTrigUser",
      "48": "AT_EnableRule",
      "49": "AT_EnableAlwaysRule",
      "50": "AT_EnableReplicaRule",
      "51": "AT_DisableRule",
      "52": "AT_AddInherit",
      "53": "AT_DropInherit",
      "54": "AT_AddOf",
      "55": "AT_DropOf",
      "56": "AT_ReplicaIdentity",
      "57": "AT_EnableRowSecurity",
      "58": "AT_DisableRowSecurity",
      "59": "AT_ForceRowSecurity",
      "60": "AT_NoForceRowSecurity",
      "61": "AT_GenericOptions",
      "62": "AT_AttachPartition",
      "63": "AT_DetachPartition",
      "64": "AT_AddIdentity",
      "65": "AT_SetIdentity",
      "66": "AT_DropIdentity"
    },
    GrantTargetType: {
      "0": "ACL_TARGET_OBJECT",
      "1": "ACL_TARGET_ALL_IN_SCHEMA",
      "2": "ACL_TARGET_DEFAULTS"
    },
    VariableSetKind: {
      "0": "VAR_SET_VALUE",
      "1": "VAR_SET_DEFAULT",
      "2": "VAR_SET_CURRENT",
      "3": "VAR_SET_MULTI",
      "4": "VAR_RESET",
      "5": "VAR_RESET_ALL"
    },
    ConstrType: {
      "0": "CONSTR_NULL",
      "1": "CONSTR_NOTNULL",
      "2": "CONSTR_DEFAULT",
      "3": "CONSTR_IDENTITY",
      "4": "CONSTR_GENERATED",
      "5": "CONSTR_CHECK",
      "6": "CONSTR_PRIMARY",
      "7": "CONSTR_UNIQUE",
      "8": "CONSTR_EXCLUSION",
      "9": "CONSTR_FOREIGN",
      "10": "CONSTR_ATTR_DEFERRABLE",
      "11": "CONSTR_ATTR_NOT_DEFERRABLE",
      "12": "CONSTR_ATTR_DEFERRED",
      "13": "CONSTR_ATTR_IMMEDIATE"
    },
    ImportForeignSchemaType: {
      "0": "FDW_IMPORT_SCHEMA_ALL",
      "1": "FDW_IMPORT_SCHEMA_LIMIT_TO",
      "2": "FDW_IMPORT_SCHEMA_EXCEPT"
    },
    RoleStmtType: {
      "0": "ROLESTMT_ROLE",
      "1": "ROLESTMT_USER",
      "2": "ROLESTMT_GROUP"
    },
    FetchDirection: {
      "0": "FETCH_FORWARD",
      "1": "FETCH_BACKWARD",
      "2": "FETCH_ABSOLUTE",
      "3": "FETCH_RELATIVE"
    },
    FunctionParameterMode: {
      "0": "FUNC_PARAM_IN",
      "1": "FUNC_PARAM_OUT",
      "2": "FUNC_PARAM_INOUT",
      "3": "FUNC_PARAM_VARIADIC",
      "4": "FUNC_PARAM_TABLE"
    },
    TransactionStmtKind: {
      "0": "TRANS_STMT_BEGIN",
      "1": "TRANS_STMT_START",
      "2": "TRANS_STMT_COMMIT",
      "3": "TRANS_STMT_ROLLBACK",
      "4": "TRANS_STMT_SAVEPOINT",
      "5": "TRANS_STMT_RELEASE",
      "6": "TRANS_STMT_ROLLBACK_TO",
      "7": "TRANS_STMT_PREPARE",
      "8": "TRANS_STMT_COMMIT_PREPARED",
      "9": "TRANS_STMT_ROLLBACK_PREPARED"
    },
    ViewCheckOption: {
      "0": "NO_CHECK_OPTION",
      "1": "LOCAL_CHECK_OPTION",
      "2": "CASCADED_CHECK_OPTION"
    },
    ClusterOption: {
      "0": "CLUOPT_RECHECK",
      "1": "CLUOPT_VERBOSE"
    },
    DiscardMode: {
      "0": "DISCARD_ALL",
      "1": "DISCARD_PLANS",
      "2": "DISCARD_SEQUENCES",
      "3": "DISCARD_TEMP"
    },
    ReindexObjectType: {
      "0": "REINDEX_OBJECT_INDEX",
      "1": "REINDEX_OBJECT_TABLE",
      "2": "REINDEX_OBJECT_SCHEMA",
      "3": "REINDEX_OBJECT_SYSTEM",
      "4": "REINDEX_OBJECT_DATABASE"
    },
    AlterTSConfigType: {
      "0": "ALTER_TSCONFIG_ADD_MAPPING",
      "1": "ALTER_TSCONFIG_ALTER_MAPPING_FOR_TOKEN",
      "2": "ALTER_TSCONFIG_REPLACE_DICT",
      "3": "ALTER_TSCONFIG_REPLACE_DICT_FOR_TOKEN",
      "4": "ALTER_TSCONFIG_DROP_MAPPING"
    },
    AlterSubscriptionType: {
      "0": "ALTER_SUBSCRIPTION_OPTIONS",
      "1": "ALTER_SUBSCRIPTION_CONNECTION",
      "2": "ALTER_SUBSCRIPTION_PUBLICATION",
      "3": "ALTER_SUBSCRIPTION_REFRESH",
      "4": "ALTER_SUBSCRIPTION_ENABLED"
    },
    OnCommitAction: {
      "0": "ONCOMMIT_NOOP",
      "1": "ONCOMMIT_PRESERVE_ROWS",
      "2": "ONCOMMIT_DELETE_ROWS",
      "3": "ONCOMMIT_DROP"
    },
    ParamKind: {
      "0": "PARAM_EXTERN",
      "1": "PARAM_EXEC",
      "2": "PARAM_SUBLINK",
      "3": "PARAM_MULTIEXPR"
    },
    CoercionContext: {
      "0": "COERCION_IMPLICIT",
      "1": "COERCION_ASSIGNMENT",
      "2": "COERCION_EXPLICIT"
    },
    CoercionForm: {
      "0": "COERCE_EXPLICIT_CALL",
      "1": "COERCE_EXPLICIT_CAST",
      "2": "COERCE_IMPLICIT_CAST"
    },
    BoolExprType: {
      "0": "AND_EXPR",
      "1": "OR_EXPR",
      "2": "NOT_EXPR"
    },
    SubLinkType: {
      "0": "EXISTS_SUBLINK",
      "1": "ALL_SUBLINK",
      "2": "ANY_SUBLINK",
      "3": "ROWCOMPARE_SUBLINK",
      "4": "EXPR_SUBLINK",
      "5": "MULTIEXPR_SUBLINK",
      "6": "ARRAY_SUBLINK",
      "7": "CTE_SUBLINK"
    },
    RowCompareType: {
      "0": "ROWCOMPARE_LT",
      "1": "ROWCOMPARE_LE",
      "2": "ROWCOMPARE_EQ",
      "3": "ROWCOMPARE_GE",
      "4": "ROWCOMPARE_GT",
      "5": "ROWCOMPARE_NE"
    },
    MinMaxOp: {
      "0": "IS_GREATEST",
      "1": "IS_LEAST"
    },
    SQLValueFunctionOp: {
      "0": "SVFOP_CURRENT_DATE",
      "1": "SVFOP_CURRENT_TIME",
      "2": "SVFOP_CURRENT_TIME_N",
      "3": "SVFOP_CURRENT_TIMESTAMP",
      "4": "SVFOP_CURRENT_TIMESTAMP_N",
      "5": "SVFOP_LOCALTIME",
      "6": "SVFOP_LOCALTIME_N",
      "7": "SVFOP_LOCALTIMESTAMP",
      "8": "SVFOP_LOCALTIMESTAMP_N",
      "9": "SVFOP_CURRENT_ROLE",
      "10": "SVFOP_CURRENT_USER",
      "11": "SVFOP_USER",
      "12": "SVFOP_SESSION_USER",
      "13": "SVFOP_CURRENT_CATALOG",
      "14": "SVFOP_CURRENT_SCHEMA"
    },
    XmlExprOp: {
      "0": "IS_XMLCONCAT",
      "1": "IS_XMLELEMENT",
      "2": "IS_XMLFOREST",
      "3": "IS_XMLPARSE",
      "4": "IS_XMLPI",
      "5": "IS_XMLROOT",
      "6": "IS_XMLSERIALIZE",
      "7": "IS_DOCUMENT"
    },
    XmlOptionType: {
      "0": "XMLOPTION_DOCUMENT",
      "1": "XMLOPTION_CONTENT"
    },
    NullTestType: {
      "0": "IS_NULL",
      "1": "IS_NOT_NULL"
    },
    BoolTestType: {
      "0": "IS_TRUE",
      "1": "IS_NOT_TRUE",
      "2": "IS_FALSE",
      "3": "IS_NOT_FALSE",
      "4": "IS_UNKNOWN",
      "5": "IS_NOT_UNKNOWN"
    },
    CmdType: {
      "0": "CMD_UNKNOWN",
      "1": "CMD_SELECT",
      "2": "CMD_UPDATE",
      "3": "CMD_INSERT",
      "4": "CMD_DELETE",
      "5": "CMD_UTILITY",
      "6": "CMD_NOTHING"
    },
    JoinType: {
      "0": "JOIN_INNER",
      "1": "JOIN_LEFT",
      "2": "JOIN_FULL",
      "3": "JOIN_RIGHT",
      "4": "JOIN_SEMI",
      "5": "JOIN_ANTI",
      "6": "JOIN_UNIQUE_OUTER",
      "7": "JOIN_UNIQUE_INNER"
    },
    AggStrategy: {
      "0": "AGG_PLAIN",
      "1": "AGG_SORTED",
      "2": "AGG_HASHED",
      "3": "AGG_MIXED"
    },
    AggSplit: {
      "0": "AGGSPLIT_SIMPLE",
      "1": "AGGSPLIT_INITIAL_SERIAL",
      "2": "AGGSPLIT_FINAL_DESERIAL"
    },
    SetOpCmd: {
      "0": "SETOPCMD_INTERSECT",
      "1": "SETOPCMD_INTERSECT_ALL",
      "2": "SETOPCMD_EXCEPT",
      "3": "SETOPCMD_EXCEPT_ALL"
    },
    SetOpStrategy: {
      "0": "SETOP_SORTED",
      "1": "SETOP_HASHED"
    },
    OnConflictAction: {
      "0": "ONCONFLICT_NONE",
      "1": "ONCONFLICT_NOTHING",
      "2": "ONCONFLICT_UPDATE"
    },
    LimitOption: {
      "0": "LIMIT_OPTION_DEFAULT",
      "1": "LIMIT_OPTION_COUNT",
      "2": "LIMIT_OPTION_WITH_TIES"
    },
    LockClauseStrength: {
      "0": "LCS_NONE",
      "1": "LCS_FORKEYSHARE",
      "2": "LCS_FORSHARE",
      "3": "LCS_FORNOKEYUPDATE",
      "4": "LCS_FORUPDATE"
    },
    LockWaitPolicy: {
      "0": "LockWaitBlock",
      "1": "LockWaitSkip",
      "2": "LockWaitError"
    },
    LockTupleMode: {
      "0": "LockTupleKeyShare",
      "1": "LockTupleShare",
      "2": "LockTupleNoKeyExclusive",
      "3": "LockTupleExclusive"
    },
    KeywordKind: {
      "0": "NO_KEYWORD",
      "1": "UNRESERVED_KEYWORD",
      "2": "COL_NAME_KEYWORD",
      "3": "TYPE_FUNC_NAME_KEYWORD",
      "4": "RESERVED_KEYWORD"
    },
    Token: {
      "0": "NUL",
      "37": "ASCII_37",
      "40": "ASCII_40",
      "41": "ASCII_41",
      "42": "ASCII_42",
      "43": "ASCII_43",
      "44": "ASCII_44",
      "45": "ASCII_45",
      "46": "ASCII_46",
      "47": "ASCII_47",
      "58": "ASCII_58",
      "59": "ASCII_59",
      "60": "ASCII_60",
      "61": "ASCII_61",
      "62": "ASCII_62",
      "63": "ASCII_63",
      "91": "ASCII_91",
      "92": "ASCII_92",
      "93": "ASCII_93",
      "94": "ASCII_94",
      "258": "IDENT",
      "259": "UIDENT",
      "260": "FCONST",
      "261": "SCONST",
      "262": "USCONST",
      "263": "BCONST",
      "264": "XCONST",
      "265": "Op",
      "266": "ICONST",
      "267": "PARAM",
      "268": "TYPECAST",
      "269": "DOT_DOT",
      "270": "COLON_EQUALS",
      "271": "EQUALS_GREATER",
      "272": "LESS_EQUALS",
      "273": "GREATER_EQUALS",
      "274": "NOT_EQUALS",
      "275": "SQL_COMMENT",
      "276": "C_COMMENT",
      "277": "ABORT_P",
      "278": "ABSOLUTE_P",
      "279": "ACCESS",
      "280": "ACTION",
      "281": "ADD_P",
      "282": "ADMIN",
      "283": "AFTER",
      "284": "AGGREGATE",
      "285": "ALL",
      "286": "ALSO",
      "287": "ALTER",
      "288": "ALWAYS",
      "289": "ANALYSE",
      "290": "ANALYZE",
      "291": "AND",
      "292": "ANY",
      "293": "ARRAY",
      "294": "AS",
      "295": "ASC",
      "296": "ASSERTION",
      "297": "ASSIGNMENT",
      "298": "ASYMMETRIC",
      "299": "AT",
      "300": "ATTACH",
      "301": "ATTRIBUTE",
      "302": "AUTHORIZATION",
      "303": "BACKWARD",
      "304": "BEFORE",
      "305": "BEGIN_P",
      "306": "BETWEEN",
      "307": "BIGINT",
      "308": "BINARY",
      "309": "BIT",
      "310": "BOOLEAN_P",
      "311": "BOTH",
      "312": "BY",
      "313": "CACHE",
      "314": "CALL",
      "315": "CALLED",
      "316": "CASCADE",
      "317": "CASCADED",
      "318": "CASE",
      "319": "CAST",
      "320": "CATALOG_P",
      "321": "CHAIN",
      "322": "CHAR_P",
      "323": "CHARACTER",
      "324": "CHARACTERISTICS",
      "325": "CHECK",
      "326": "CHECKPOINT",
      "327": "CLASS",
      "328": "CLOSE",
      "329": "CLUSTER",
      "330": "COALESCE",
      "331": "COLLATE",
      "332": "COLLATION",
      "333": "COLUMN",
      "334": "COLUMNS",
      "335": "COMMENT",
      "336": "COMMENTS",
      "337": "COMMIT",
      "338": "COMMITTED",
      "339": "CONCURRENTLY",
      "340": "CONFIGURATION",
      "341": "CONFLICT",
      "342": "CONNECTION",
      "343": "CONSTRAINT",
      "344": "CONSTRAINTS",
      "345": "CONTENT_P",
      "346": "CONTINUE_P",
      "347": "CONVERSION_P",
      "348": "COPY",
      "349": "COST",
      "350": "CREATE",
      "351": "CROSS",
      "352": "CSV",
      "353": "CUBE",
      "354": "CURRENT_P",
      "355": "CURRENT_CATALOG",
      "356": "CURRENT_DATE",
      "357": "CURRENT_ROLE",
      "358": "CURRENT_SCHEMA",
      "359": "CURRENT_TIME",
      "360": "CURRENT_TIMESTAMP",
      "361": "CURRENT_USER",
      "362": "CURSOR",
      "363": "CYCLE",
      "364": "DATA_P",
      "365": "DATABASE",
      "366": "DAY_P",
      "367": "DEALLOCATE",
      "368": "DEC",
      "369": "DECIMAL_P",
      "370": "DECLARE",
      "371": "DEFAULT",
      "372": "DEFAULTS",
      "373": "DEFERRABLE",
      "374": "DEFERRED",
      "375": "DEFINER",
      "376": "DELETE_P",
      "377": "DELIMITER",
      "378": "DELIMITERS",
      "379": "DEPENDS",
      "380": "DESC",
      "381": "DETACH",
      "382": "DICTIONARY",
      "383": "DISABLE_P",
      "384": "DISCARD",
      "385": "DISTINCT",
      "386": "DO",
      "387": "DOCUMENT_P",
      "388": "DOMAIN_P",
      "389": "DOUBLE_P",
      "390": "DROP",
      "391": "EACH",
      "392": "ELSE",
      "393": "ENABLE_P",
      "394": "ENCODING",
      "395": "ENCRYPTED",
      "396": "END_P",
      "397": "ENUM_P",
      "398": "ESCAPE",
      "399": "EVENT",
      "400": "EXCEPT",
      "401": "EXCLUDE",
      "402": "EXCLUDING",
      "403": "EXCLUSIVE",
      "404": "EXECUTE",
      "405": "EXISTS",
      "406": "EXPLAIN",
      "407": "EXPRESSION",
      "408": "EXTENSION",
      "409": "EXTERNAL",
      "410": "EXTRACT",
      "411": "FALSE_P",
      "412": "FAMILY",
      "413": "FETCH",
      "414": "FILTER",
      "415": "FIRST_P",
      "416": "FLOAT_P",
      "417": "FOLLOWING",
      "418": "FOR",
      "419": "FORCE",
      "420": "FOREIGN",
      "421": "FORWARD",
      "422": "FREEZE",
      "423": "FROM",
      "424": "FULL",
      "425": "FUNCTION",
      "426": "FUNCTIONS",
      "427": "GENERATED",
      "428": "GLOBAL",
      "429": "GRANT",
      "430": "GRANTED",
      "431": "GREATEST",
      "432": "GROUP_P",
      "433": "GROUPING",
      "434": "GROUPS",
      "435": "HANDLER",
      "436": "HAVING",
      "437": "HEADER_P",
      "438": "HOLD",
      "439": "HOUR_P",
      "440": "IDENTITY_P",
      "441": "IF_P",
      "442": "ILIKE",
      "443": "IMMEDIATE",
      "444": "IMMUTABLE",
      "445": "IMPLICIT_P",
      "446": "IMPORT_P",
      "447": "IN_P",
      "448": "INCLUDE",
      "449": "INCLUDING",
      "450": "INCREMENT",
      "451": "INDEX",
      "452": "INDEXES",
      "453": "INHERIT",
      "454": "INHERITS",
      "455": "INITIALLY",
      "456": "INLINE_P",
      "457": "INNER_P",
      "458": "INOUT",
      "459": "INPUT_P",
      "460": "INSENSITIVE",
      "461": "INSERT",
      "462": "INSTEAD",
      "463": "INT_P",
      "464": "INTEGER",
      "465": "INTERSECT",
      "466": "INTERVAL",
      "467": "INTO",
      "468": "INVOKER",
      "469": "IS",
      "470": "ISNULL",
      "471": "ISOLATION",
      "472": "JOIN",
      "473": "KEY",
      "474": "LABEL",
      "475": "LANGUAGE",
      "476": "LARGE_P",
      "477": "LAST_P",
      "478": "LATERAL_P",
      "479": "LEADING",
      "480": "LEAKPROOF",
      "481": "LEAST",
      "482": "LEFT",
      "483": "LEVEL",
      "484": "LIKE",
      "485": "LIMIT",
      "486": "LISTEN",
      "487": "LOAD",
      "488": "LOCAL",
      "489": "LOCALTIME",
      "490": "LOCALTIMESTAMP",
      "491": "LOCATION",
      "492": "LOCK_P",
      "493": "LOCKED",
      "494": "LOGGED",
      "495": "MAPPING",
      "496": "MATCH",
      "497": "MATERIALIZED",
      "498": "MAXVALUE",
      "499": "METHOD",
      "500": "MINUTE_P",
      "501": "MINVALUE",
      "502": "MODE",
      "503": "MONTH_P",
      "504": "MOVE",
      "505": "NAME_P",
      "506": "NAMES",
      "507": "NATIONAL",
      "508": "NATURAL",
      "509": "NCHAR",
      "510": "NEW",
      "511": "NEXT",
      "512": "NFC",
      "513": "NFD",
      "514": "NFKC",
      "515": "NFKD",
      "516": "NO",
      "517": "NONE",
      "518": "NORMALIZE",
      "519": "NORMALIZED",
      "520": "NOT",
      "521": "NOTHING",
      "522": "NOTIFY",
      "523": "NOTNULL",
      "524": "NOWAIT",
      "525": "NULL_P",
      "526": "NULLIF",
      "527": "NULLS_P",
      "528": "NUMERIC",
      "529": "OBJECT_P",
      "530": "OF",
      "531": "OFF",
      "532": "OFFSET",
      "533": "OIDS",
      "534": "OLD",
      "535": "ON",
      "536": "ONLY",
      "537": "OPERATOR",
      "538": "OPTION",
      "539": "OPTIONS",
      "540": "OR",
      "541": "ORDER",
      "542": "ORDINALITY",
      "543": "OTHERS",
      "544": "OUT_P",
      "545": "OUTER_P",
      "546": "OVER",
      "547": "OVERLAPS",
      "548": "OVERLAY",
      "549": "OVERRIDING",
      "550": "OWNED",
      "551": "OWNER",
      "552": "PARALLEL",
      "553": "PARSER",
      "554": "PARTIAL",
      "555": "PARTITION",
      "556": "PASSING",
      "557": "PASSWORD",
      "558": "PLACING",
      "559": "PLANS",
      "560": "POLICY",
      "561": "POSITION",
      "562": "PRECEDING",
      "563": "PRECISION",
      "564": "PRESERVE",
      "565": "PREPARE",
      "566": "PREPARED",
      "567": "PRIMARY",
      "568": "PRIOR",
      "569": "PRIVILEGES",
      "570": "PROCEDURAL",
      "571": "PROCEDURE",
      "572": "PROCEDURES",
      "573": "PROGRAM",
      "574": "PUBLICATION",
      "575": "QUOTE",
      "576": "RANGE",
      "577": "READ",
      "578": "REAL",
      "579": "REASSIGN",
      "580": "RECHECK",
      "581": "RECURSIVE",
      "582": "REF_P",
      "583": "REFERENCES",
      "584": "REFERENCING",
      "585": "REFRESH",
      "586": "REINDEX",
      "587": "RELATIVE_P",
      "588": "RELEASE",
      "589": "RENAME",
      "590": "REPEATABLE",
      "591": "REPLACE",
      "592": "REPLICA",
      "593": "RESET",
      "594": "RESTART",
      "595": "RESTRICT",
      "596": "RETURNING",
      "597": "RETURNS",
      "598": "REVOKE",
      "599": "RIGHT",
      "600": "ROLE",
      "601": "ROLLBACK",
      "602": "ROLLUP",
      "603": "ROUTINE",
      "604": "ROUTINES",
      "605": "ROW",
      "606": "ROWS",
      "607": "RULE",
      "608": "SAVEPOINT",
      "609": "SCHEMA",
      "610": "SCHEMAS",
      "611": "SCROLL",
      "612": "SEARCH",
      "613": "SECOND_P",
      "614": "SECURITY",
      "615": "SELECT",
      "616": "SEQUENCE",
      "617": "SEQUENCES",
      "618": "SERIALIZABLE",
      "619": "SERVER",
      "620": "SESSION",
      "621": "SESSION_USER",
      "622": "SET",
      "623": "SETS",
      "624": "SETOF",
      "625": "SHARE",
      "626": "SHOW",
      "627": "SIMILAR",
      "628": "SIMPLE",
      "629": "SKIP",
      "630": "SMALLINT",
      "631": "SNAPSHOT",
      "632": "SOME",
      "633": "SQL_P",
      "634": "STABLE",
      "635": "STANDALONE_P",
      "636": "START",
      "637": "STATEMENT",
      "638": "STATISTICS",
      "639": "STDIN",
      "640": "STDOUT",
      "641": "STORAGE",
      "642": "STORED",
      "643": "STRICT_P",
      "644": "STRIP_P",
      "645": "SUBSCRIPTION",
      "646": "SUBSTRING",
      "647": "SUPPORT",
      "648": "SYMMETRIC",
      "649": "SYSID",
      "650": "SYSTEM_P",
      "651": "TABLE",
      "652": "TABLES",
      "653": "TABLESAMPLE",
      "654": "TABLESPACE",
      "655": "TEMP",
      "656": "TEMPLATE",
      "657": "TEMPORARY",
      "658": "TEXT_P",
      "659": "THEN",
      "660": "TIES",
      "661": "TIME",
      "662": "TIMESTAMP",
      "663": "TO",
      "664": "TRAILING",
      "665": "TRANSACTION",
      "666": "TRANSFORM",
      "667": "TREAT",
      "668": "TRIGGER",
      "669": "TRIM",
      "670": "TRUE_P",
      "671": "TRUNCATE",
      "672": "TRUSTED",
      "673": "TYPE_P",
      "674": "TYPES_P",
      "675": "UESCAPE",
      "676": "UNBOUNDED",
      "677": "UNCOMMITTED",
      "678": "UNENCRYPTED",
      "679": "UNION",
      "680": "UNIQUE",
      "681": "UNKNOWN",
      "682": "UNLISTEN",
      "683": "UNLOGGED",
      "684": "UNTIL",
      "685": "UPDATE",
      "686": "USER",
      "687": "USING",
      "688": "VACUUM",
      "689": "VALID",
      "690": "VALIDATE",
      "691": "VALIDATOR",
      "692": "VALUE_P",
      "693": "VALUES",
      "694": "VARCHAR",
      "695": "VARIADIC",
      "696": "VARYING",
      "697": "VERBOSE",
      "698": "VERSION_P",
      "699": "VIEW",
      "700": "VIEWS",
      "701": "VOLATILE",
      "702": "WHEN",
      "703": "WHERE",
      "704": "WHITESPACE_P",
      "705": "WINDOW",
      "706": "WITH",
      "707": "WITHIN",
      "708": "WITHOUT",
      "709": "WORK",
      "710": "WRAPPER",
      "711": "WRITE",
      "712": "XML_P",
      "713": "XMLATTRIBUTES",
      "714": "XMLCONCAT",
      "715": "XMLELEMENT",
      "716": "XMLEXISTS",
      "717": "XMLFOREST",
      "718": "XMLNAMESPACES",
      "719": "XMLPARSE",
      "720": "XMLPI",
      "721": "XMLROOT",
      "722": "XMLSERIALIZE",
      "723": "XMLTABLE",
      "724": "YEAR_P",
      "725": "YES_P",
      "726": "ZONE",
      "727": "NOT_LA",
      "728": "NULLS_LA",
      "729": "WITH_LA",
      "730": "POSTFIXOP",
      "731": "UMINUS"
    }
  };
});

// node_modules/pgsql-enums/main/nodes.json
var require_nodes = __commonJS((exports, module) => {
  module.exports = {
    Alias: {
      type: {
        type: "NodeTag",
        enum: true
      },
      aliasname: {
        type: "char"
      },
      colnames: {
        type: "List"
      }
    },
    RangeVar: {
      type: {
        type: "NodeTag",
        enum: true
      },
      catalogname: {
        type: "char"
      },
      schemaname: {
        type: "char"
      },
      relname: {
        type: "char"
      },
      inh: {
        type: "bool"
      },
      relpersistence: {
        type: "char"
      },
      alias: {
        type: "Alias",
        nested: true
      },
      location: {
        type: "int"
      }
    },
    TableFunc: {
      type: {
        type: "NodeTag",
        enum: true
      },
      ns_uris: {
        type: "List"
      },
      ns_names: {
        type: "List"
      },
      docexpr: {
        type: "Node"
      },
      rowexpr: {
        type: "Node"
      },
      colnames: {
        type: "List"
      },
      coltypes: {
        type: "List"
      },
      coltypmods: {
        type: "List"
      },
      colcollations: {
        type: "List"
      },
      colexprs: {
        type: "List"
      },
      coldefexprs: {
        type: "List"
      },
      notnulls: {
        type: "Bitmapset"
      },
      ordinalitycol: {
        type: "int"
      },
      location: {
        type: "int"
      }
    },
    IntoClause: {
      type: {
        type: "NodeTag",
        enum: true
      },
      rel: {
        type: "RangeVar",
        nested: true
      },
      colNames: {
        type: "List"
      },
      accessMethod: {
        type: "char"
      },
      options: {
        type: "List"
      },
      onCommit: {
        type: "OnCommitAction",
        enum: true
      },
      tableSpaceName: {
        type: "char"
      },
      viewQuery: {
        type: "Node"
      },
      skipData: {
        type: "bool"
      }
    },
    Expr: {
      type: {
        type: "NodeTag",
        enum: true
      }
    },
    Var: {
      xpr: {
        type: "Expr",
        nested: true
      },
      varno: {
        type: "Index"
      },
      varattno: {
        type: "AttrNumber"
      },
      vartype: {
        type: "Oid"
      },
      vartypmod: {
        type: "int32"
      },
      varcollid: {
        type: "Oid"
      },
      varlevelsup: {
        type: "Index"
      },
      varnosyn: {
        type: "Index"
      },
      varattnosyn: {
        type: "AttrNumber"
      },
      location: {
        type: "int"
      }
    },
    Const: {
      xpr: {
        type: "Expr",
        nested: true
      },
      consttype: {
        type: "Oid"
      },
      consttypmod: {
        type: "int32"
      },
      constcollid: {
        type: "Oid"
      },
      constlen: {
        type: "int"
      },
      constvalue: {
        type: "Datum"
      },
      constisnull: {
        type: "bool"
      },
      constbyval: {
        type: "bool"
      },
      location: {
        type: "int"
      }
    },
    Param: {
      xpr: {
        type: "Expr",
        nested: true
      },
      paramkind: {
        type: "ParamKind",
        enum: true
      },
      paramid: {
        type: "int"
      },
      paramtype: {
        type: "Oid"
      },
      paramtypmod: {
        type: "int32"
      },
      paramcollid: {
        type: "Oid"
      },
      location: {
        type: "int"
      }
    },
    Aggref: {
      xpr: {
        type: "Expr",
        nested: true
      },
      aggfnoid: {
        type: "Oid"
      },
      aggtype: {
        type: "Oid"
      },
      aggcollid: {
        type: "Oid"
      },
      inputcollid: {
        type: "Oid"
      },
      aggtranstype: {
        type: "Oid"
      },
      aggargtypes: {
        type: "List"
      },
      aggdirectargs: {
        type: "List"
      },
      args: {
        type: "List"
      },
      aggorder: {
        type: "List"
      },
      aggdistinct: {
        type: "List"
      },
      aggfilter: {
        type: "Expr",
        nested: true
      },
      aggstar: {
        type: "bool"
      },
      aggvariadic: {
        type: "bool"
      },
      aggkind: {
        type: "char"
      },
      agglevelsup: {
        type: "Index"
      },
      aggsplit: {
        type: "AggSplit",
        enum: true
      },
      location: {
        type: "int"
      }
    },
    GroupingFunc: {
      xpr: {
        type: "Expr",
        nested: true
      },
      args: {
        type: "List"
      },
      refs: {
        type: "List"
      },
      cols: {
        type: "List"
      },
      agglevelsup: {
        type: "Index"
      },
      location: {
        type: "int"
      }
    },
    WindowFunc: {
      xpr: {
        type: "Expr",
        nested: true
      },
      winfnoid: {
        type: "Oid"
      },
      wintype: {
        type: "Oid"
      },
      wincollid: {
        type: "Oid"
      },
      inputcollid: {
        type: "Oid"
      },
      args: {
        type: "List"
      },
      aggfilter: {
        type: "Expr",
        nested: true
      },
      winref: {
        type: "Index"
      },
      winstar: {
        type: "bool"
      },
      winagg: {
        type: "bool"
      },
      location: {
        type: "int"
      }
    },
    SubscriptingRef: {
      xpr: {
        type: "Expr",
        nested: true
      },
      refcontainertype: {
        type: "Oid"
      },
      refelemtype: {
        type: "Oid"
      },
      reftypmod: {
        type: "int32"
      },
      refcollid: {
        type: "Oid"
      },
      refupperindexpr: {
        type: "List"
      },
      reflowerindexpr: {
        type: "List"
      },
      refexpr: {
        type: "Expr",
        nested: true
      },
      refassgnexpr: {
        type: "Expr",
        nested: true
      }
    },
    FuncExpr: {
      xpr: {
        type: "Expr",
        nested: true
      },
      funcid: {
        type: "Oid"
      },
      funcresulttype: {
        type: "Oid"
      },
      funcretset: {
        type: "bool"
      },
      funcvariadic: {
        type: "bool"
      },
      funcformat: {
        type: "CoercionForm",
        enum: true
      },
      funccollid: {
        type: "Oid"
      },
      inputcollid: {
        type: "Oid"
      },
      args: {
        type: "List"
      },
      location: {
        type: "int"
      }
    },
    NamedArgExpr: {
      xpr: {
        type: "Expr",
        nested: true
      },
      arg: {
        type: "Expr",
        nested: true
      },
      name: {
        type: "char"
      },
      argnumber: {
        type: "int"
      },
      location: {
        type: "int"
      }
    },
    OpExpr: {
      xpr: {
        type: "Expr",
        nested: true
      },
      opno: {
        type: "Oid"
      },
      opfuncid: {
        type: "Oid"
      },
      opresulttype: {
        type: "Oid"
      },
      opretset: {
        type: "bool"
      },
      opcollid: {
        type: "Oid"
      },
      inputcollid: {
        type: "Oid"
      },
      args: {
        type: "List"
      },
      location: {
        type: "int"
      }
    },
    ScalarArrayOpExpr: {
      xpr: {
        type: "Expr",
        nested: true
      },
      opno: {
        type: "Oid"
      },
      opfuncid: {
        type: "Oid"
      },
      useOr: {
        type: "bool"
      },
      inputcollid: {
        type: "Oid"
      },
      args: {
        type: "List"
      },
      location: {
        type: "int"
      }
    },
    BoolExpr: {
      xpr: {
        type: "Expr",
        nested: true
      },
      boolop: {
        type: "BoolExprType",
        enum: true
      },
      args: {
        type: "List"
      },
      location: {
        type: "int"
      }
    },
    SubLink: {
      xpr: {
        type: "Expr",
        nested: true
      },
      subLinkType: {
        type: "SubLinkType",
        enum: true
      },
      subLinkId: {
        type: "int"
      },
      testexpr: {
        type: "Node"
      },
      operName: {
        type: "List"
      },
      subselect: {
        type: "Node"
      },
      location: {
        type: "int"
      }
    },
    SubPlan: {
      xpr: {
        type: "Expr",
        nested: true
      },
      subLinkType: {
        type: "SubLinkType",
        enum: true
      },
      testexpr: {
        type: "Node"
      },
      paramIds: {
        type: "List"
      },
      plan_id: {
        type: "int"
      },
      plan_name: {
        type: "char"
      },
      firstColType: {
        type: "Oid"
      },
      firstColTypmod: {
        type: "int32"
      },
      firstColCollation: {
        type: "Oid"
      },
      useHashTable: {
        type: "bool"
      },
      unknownEqFalse: {
        type: "bool"
      },
      parallel_safe: {
        type: "bool"
      },
      setParam: {
        type: "List"
      },
      parParam: {
        type: "List"
      },
      args: {
        type: "List"
      },
      startup_cost: {
        type: "Cost"
      },
      per_call_cost: {
        type: "Cost"
      }
    },
    AlternativeSubPlan: {
      xpr: {
        type: "Expr",
        nested: true
      },
      subplans: {
        type: "List"
      }
    },
    FieldSelect: {
      xpr: {
        type: "Expr",
        nested: true
      },
      arg: {
        type: "Expr",
        nested: true
      },
      fieldnum: {
        type: "AttrNumber"
      },
      resulttype: {
        type: "Oid"
      },
      resulttypmod: {
        type: "int32"
      },
      resultcollid: {
        type: "Oid"
      }
    },
    FieldStore: {
      xpr: {
        type: "Expr",
        nested: true
      },
      arg: {
        type: "Expr",
        nested: true
      },
      newvals: {
        type: "List"
      },
      fieldnums: {
        type: "List"
      },
      resulttype: {
        type: "Oid"
      }
    },
    RelabelType: {
      xpr: {
        type: "Expr",
        nested: true
      },
      arg: {
        type: "Expr",
        nested: true
      },
      resulttype: {
        type: "Oid"
      },
      resulttypmod: {
        type: "int32"
      },
      resultcollid: {
        type: "Oid"
      },
      relabelformat: {
        type: "CoercionForm",
        enum: true
      },
      location: {
        type: "int"
      }
    },
    CoerceViaIO: {
      xpr: {
        type: "Expr",
        nested: true
      },
      arg: {
        type: "Expr",
        nested: true
      },
      resulttype: {
        type: "Oid"
      },
      resultcollid: {
        type: "Oid"
      },
      coerceformat: {
        type: "CoercionForm",
        enum: true
      },
      location: {
        type: "int"
      }
    },
    ArrayCoerceExpr: {
      xpr: {
        type: "Expr",
        nested: true
      },
      arg: {
        type: "Expr",
        nested: true
      },
      elemexpr: {
        type: "Expr",
        nested: true
      },
      resulttype: {
        type: "Oid"
      },
      resulttypmod: {
        type: "int32"
      },
      resultcollid: {
        type: "Oid"
      },
      coerceformat: {
        type: "CoercionForm",
        enum: true
      },
      location: {
        type: "int"
      }
    },
    ConvertRowtypeExpr: {
      xpr: {
        type: "Expr",
        nested: true
      },
      arg: {
        type: "Expr",
        nested: true
      },
      resulttype: {
        type: "Oid"
      },
      convertformat: {
        type: "CoercionForm",
        enum: true
      },
      location: {
        type: "int"
      }
    },
    CollateExpr: {
      xpr: {
        type: "Expr",
        nested: true
      },
      arg: {
        type: "Expr",
        nested: true
      },
      collOid: {
        type: "Oid"
      },
      location: {
        type: "int"
      }
    },
    CaseExpr: {
      xpr: {
        type: "Expr",
        nested: true
      },
      casetype: {
        type: "Oid"
      },
      casecollid: {
        type: "Oid"
      },
      arg: {
        type: "Expr",
        nested: true
      },
      args: {
        type: "List"
      },
      defresult: {
        type: "Expr",
        nested: true
      },
      location: {
        type: "int"
      }
    },
    CaseWhen: {
      xpr: {
        type: "Expr",
        nested: true
      },
      expr: {
        type: "Expr",
        nested: true
      },
      result: {
        type: "Expr",
        nested: true
      },
      location: {
        type: "int"
      }
    },
    CaseTestExpr: {
      xpr: {
        type: "Expr",
        nested: true
      },
      typeId: {
        type: "Oid"
      },
      typeMod: {
        type: "int32"
      },
      collation: {
        type: "Oid"
      }
    },
    ArrayExpr: {
      xpr: {
        type: "Expr",
        nested: true
      },
      array_typeid: {
        type: "Oid"
      },
      array_collid: {
        type: "Oid"
      },
      element_typeid: {
        type: "Oid"
      },
      elements: {
        type: "List"
      },
      multidims: {
        type: "bool"
      },
      location: {
        type: "int"
      }
    },
    RowExpr: {
      xpr: {
        type: "Expr",
        nested: true
      },
      args: {
        type: "List"
      },
      row_typeid: {
        type: "Oid"
      },
      row_format: {
        type: "CoercionForm",
        enum: true
      },
      colnames: {
        type: "List"
      },
      location: {
        type: "int"
      }
    },
    RowCompareExpr: {
      xpr: {
        type: "Expr",
        nested: true
      },
      rctype: {
        type: "RowCompareType",
        enum: true
      },
      opnos: {
        type: "List"
      },
      opfamilies: {
        type: "List"
      },
      inputcollids: {
        type: "List"
      },
      largs: {
        type: "List"
      },
      rargs: {
        type: "List"
      }
    },
    CoalesceExpr: {
      xpr: {
        type: "Expr",
        nested: true
      },
      coalescetype: {
        type: "Oid"
      },
      coalescecollid: {
        type: "Oid"
      },
      args: {
        type: "List"
      },
      location: {
        type: "int"
      }
    },
    MinMaxExpr: {
      xpr: {
        type: "Expr",
        nested: true
      },
      minmaxtype: {
        type: "Oid"
      },
      minmaxcollid: {
        type: "Oid"
      },
      inputcollid: {
        type: "Oid"
      },
      op: {
        type: "MinMaxOp",
        enum: true
      },
      args: {
        type: "List"
      },
      location: {
        type: "int"
      }
    },
    SQLValueFunction: {
      xpr: {
        type: "Expr",
        nested: true
      },
      op: {
        type: "SQLValueFunctionOp",
        enum: true
      },
      type: {
        type: "Oid"
      },
      typmod: {
        type: "int32"
      },
      location: {
        type: "int"
      }
    },
    XmlExpr: {
      xpr: {
        type: "Expr",
        nested: true
      },
      op: {
        type: "XmlExprOp",
        enum: true
      },
      name: {
        type: "char"
      },
      named_args: {
        type: "List"
      },
      arg_names: {
        type: "List"
      },
      args: {
        type: "List"
      },
      xmloption: {
        type: "XmlOptionType",
        enum: true
      },
      type: {
        type: "Oid"
      },
      typmod: {
        type: "int32"
      },
      location: {
        type: "int"
      }
    },
    NullTest: {
      xpr: {
        type: "Expr",
        nested: true
      },
      arg: {
        type: "Expr",
        nested: true
      },
      nulltesttype: {
        type: "NullTestType",
        enum: true
      },
      argisrow: {
        type: "bool"
      },
      location: {
        type: "int"
      }
    },
    BooleanTest: {
      xpr: {
        type: "Expr",
        nested: true
      },
      arg: {
        type: "Expr",
        nested: true
      },
      booltesttype: {
        type: "BoolTestType",
        enum: true
      },
      location: {
        type: "int"
      }
    },
    CoerceToDomain: {
      xpr: {
        type: "Expr",
        nested: true
      },
      arg: {
        type: "Expr",
        nested: true
      },
      resulttype: {
        type: "Oid"
      },
      resulttypmod: {
        type: "int32"
      },
      resultcollid: {
        type: "Oid"
      },
      coercionformat: {
        type: "CoercionForm",
        enum: true
      },
      location: {
        type: "int"
      }
    },
    CoerceToDomainValue: {
      xpr: {
        type: "Expr",
        nested: true
      },
      typeId: {
        type: "Oid"
      },
      typeMod: {
        type: "int32"
      },
      collation: {
        type: "Oid"
      },
      location: {
        type: "int"
      }
    },
    SetToDefault: {
      xpr: {
        type: "Expr",
        nested: true
      },
      typeId: {
        type: "Oid"
      },
      typeMod: {
        type: "int32"
      },
      collation: {
        type: "Oid"
      },
      location: {
        type: "int"
      }
    },
    CurrentOfExpr: {
      xpr: {
        type: "Expr",
        nested: true
      },
      cvarno: {
        type: "Index"
      },
      cursor_name: {
        type: "char"
      },
      cursor_param: {
        type: "int"
      }
    },
    NextValueExpr: {
      xpr: {
        type: "Expr",
        nested: true
      },
      seqid: {
        type: "Oid"
      },
      typeId: {
        type: "Oid"
      }
    },
    InferenceElem: {
      xpr: {
        type: "Expr",
        nested: true
      },
      expr: {
        type: "Node"
      },
      infercollid: {
        type: "Oid"
      },
      inferopclass: {
        type: "Oid"
      }
    },
    TargetEntry: {
      xpr: {
        type: "Expr",
        nested: true
      },
      expr: {
        type: "Expr",
        nested: true
      },
      resno: {
        type: "AttrNumber"
      },
      resname: {
        type: "char"
      },
      ressortgroupref: {
        type: "Index"
      },
      resorigtbl: {
        type: "Oid"
      },
      resorigcol: {
        type: "AttrNumber"
      },
      resjunk: {
        type: "bool"
      }
    },
    RangeTblRef: {
      type: {
        type: "NodeTag",
        enum: true
      },
      rtindex: {
        type: "int"
      }
    },
    JoinExpr: {
      type: {
        type: "NodeTag",
        enum: true
      },
      jointype: {
        type: "JoinType",
        enum: true
      },
      isNatural: {
        type: "bool"
      },
      larg: {
        type: "Node"
      },
      rarg: {
        type: "Node"
      },
      usingClause: {
        type: "List"
      },
      quals: {
        type: "Node"
      },
      alias: {
        type: "Alias",
        nested: true
      },
      rtindex: {
        type: "int"
      }
    },
    FromExpr: {
      type: {
        type: "NodeTag",
        enum: true
      },
      fromlist: {
        type: "List"
      },
      quals: {
        type: "Node"
      }
    },
    OnConflictExpr: {
      type: {
        type: "NodeTag",
        enum: true
      },
      action: {
        type: "OnConflictAction",
        enum: true
      },
      arbiterElems: {
        type: "List"
      },
      arbiterWhere: {
        type: "Node"
      },
      constraint: {
        type: "Oid"
      },
      onConflictSet: {
        type: "List"
      },
      onConflictWhere: {
        type: "Node"
      },
      exclRelIndex: {
        type: "int"
      },
      exclRelTlist: {
        type: "List"
      }
    },
    Query: {
      type: {
        type: "NodeTag",
        enum: true
      },
      commandType: {
        type: "CmdType",
        enum: true
      },
      querySource: {
        type: "QuerySource",
        enum: true
      },
      queryId: {
        type: "uint64"
      },
      canSetTag: {
        type: "bool"
      },
      utilityStmt: {
        type: "Node"
      },
      resultRelation: {
        type: "int"
      },
      hasAggs: {
        type: "bool"
      },
      hasWindowFuncs: {
        type: "bool"
      },
      hasTargetSRFs: {
        type: "bool"
      },
      hasSubLinks: {
        type: "bool"
      },
      hasDistinctOn: {
        type: "bool"
      },
      hasRecursive: {
        type: "bool"
      },
      hasModifyingCTE: {
        type: "bool"
      },
      hasForUpdate: {
        type: "bool"
      },
      hasRowSecurity: {
        type: "bool"
      },
      cteList: {
        type: "List"
      },
      rtable: {
        type: "List"
      },
      jointree: {
        type: "FromExpr"
      },
      targetList: {
        type: "List"
      },
      override: {
        type: "OverridingKind",
        enum: true
      },
      onConflict: {
        type: "OnConflictExpr"
      },
      returningList: {
        type: "List"
      },
      groupClause: {
        type: "List"
      },
      groupingSets: {
        type: "List"
      },
      havingQual: {
        type: "Node"
      },
      windowClause: {
        type: "List"
      },
      distinctClause: {
        type: "List"
      },
      sortClause: {
        type: "List"
      },
      limitOffset: {
        type: "Node"
      },
      limitCount: {
        type: "Node"
      },
      limitOption: {
        type: "LimitOption",
        enum: true
      },
      rowMarks: {
        type: "List"
      },
      setOperations: {
        type: "Node"
      },
      constraintDeps: {
        type: "List"
      },
      withCheckOptions: {
        type: "List"
      },
      stmt_location: {
        type: "int"
      },
      stmt_len: {
        type: "int"
      }
    },
    TypeName: {
      type: {
        type: "NodeTag",
        enum: true
      },
      names: {
        type: "List"
      },
      typeOid: {
        type: "Oid"
      },
      setof: {
        type: "bool"
      },
      pct_type: {
        type: "bool"
      },
      typmods: {
        type: "List"
      },
      typemod: {
        type: "int32"
      },
      arrayBounds: {
        type: "List"
      },
      location: {
        type: "int"
      }
    },
    ColumnRef: {
      type: {
        type: "NodeTag",
        enum: true
      },
      fields: {
        type: "List"
      },
      location: {
        type: "int"
      }
    },
    ParamRef: {
      type: {
        type: "NodeTag",
        enum: true
      },
      number: {
        type: "int"
      },
      location: {
        type: "int"
      }
    },
    A_Expr: {
      type: {
        type: "NodeTag",
        enum: true
      },
      kind: {
        type: "A_Expr_Kind",
        enum: true
      },
      name: {
        type: "List"
      },
      lexpr: {
        type: "Node"
      },
      rexpr: {
        type: "Node"
      },
      location: {
        type: "int"
      }
    },
    A_Const: {
      type: {
        type: "NodeTag",
        enum: true
      },
      val: {
        type: "Value"
      },
      location: {
        type: "int"
      }
    },
    TypeCast: {
      type: {
        type: "NodeTag",
        enum: true
      },
      arg: {
        type: "Node"
      },
      typeName: {
        type: "TypeName",
        nested: true
      },
      location: {
        type: "int"
      }
    },
    CollateClause: {
      type: {
        type: "NodeTag",
        enum: true
      },
      arg: {
        type: "Node"
      },
      collname: {
        type: "List"
      },
      location: {
        type: "int"
      }
    },
    RoleSpec: {
      type: {
        type: "NodeTag",
        enum: true
      },
      roletype: {
        type: "RoleSpecType",
        enum: true
      },
      rolename: {
        type: "char"
      },
      location: {
        type: "int"
      }
    },
    FuncCall: {
      type: {
        type: "NodeTag",
        enum: true
      },
      funcname: {
        type: "List"
      },
      args: {
        type: "List"
      },
      agg_order: {
        type: "List"
      },
      agg_filter: {
        type: "Node"
      },
      agg_within_group: {
        type: "bool"
      },
      agg_star: {
        type: "bool"
      },
      agg_distinct: {
        type: "bool"
      },
      func_variadic: {
        type: "bool"
      },
      over: {
        type: "WindowDef",
        nested: true
      },
      location: {
        type: "int"
      }
    },
    A_Star: {
      type: {
        type: "NodeTag",
        enum: true
      }
    },
    A_Indices: {
      type: {
        type: "NodeTag",
        enum: true
      },
      is_slice: {
        type: "bool"
      },
      lidx: {
        type: "Node"
      },
      uidx: {
        type: "Node"
      }
    },
    A_Indirection: {
      type: {
        type: "NodeTag",
        enum: true
      },
      arg: {
        type: "Node"
      },
      indirection: {
        type: "List"
      }
    },
    A_ArrayExpr: {
      type: {
        type: "NodeTag",
        enum: true
      },
      elements: {
        type: "List"
      },
      location: {
        type: "int"
      }
    },
    ResTarget: {
      type: {
        type: "NodeTag",
        enum: true
      },
      name: {
        type: "char"
      },
      indirection: {
        type: "List"
      },
      val: {
        type: "Node"
      },
      location: {
        type: "int"
      }
    },
    MultiAssignRef: {
      type: {
        type: "NodeTag",
        enum: true
      },
      source: {
        type: "Node"
      },
      colno: {
        type: "int"
      },
      ncolumns: {
        type: "int"
      }
    },
    SortBy: {
      type: {
        type: "NodeTag",
        enum: true
      },
      node: {
        type: "Node"
      },
      sortby_dir: {
        type: "SortByDir",
        enum: true
      },
      sortby_nulls: {
        type: "SortByNulls",
        enum: true
      },
      useOp: {
        type: "List"
      },
      location: {
        type: "int"
      }
    },
    WindowDef: {
      type: {
        type: "NodeTag",
        enum: true
      },
      name: {
        type: "char"
      },
      refname: {
        type: "char"
      },
      partitionClause: {
        type: "List"
      },
      orderClause: {
        type: "List"
      },
      frameOptions: {
        type: "int"
      },
      startOffset: {
        type: "Node"
      },
      endOffset: {
        type: "Node"
      },
      location: {
        type: "int"
      }
    },
    RangeSubselect: {
      type: {
        type: "NodeTag",
        enum: true
      },
      lateral: {
        type: "bool"
      },
      subquery: {
        type: "Node"
      },
      alias: {
        type: "Alias"
      }
    },
    RangeFunction: {
      type: {
        type: "NodeTag",
        enum: true
      },
      lateral: {
        type: "bool"
      },
      ordinality: {
        type: "bool"
      },
      is_rowsfrom: {
        type: "bool"
      },
      functions: {
        type: "List"
      },
      alias: {
        type: "Alias"
      },
      coldeflist: {
        type: "List"
      }
    },
    RangeTableFunc: {
      type: {
        type: "NodeTag",
        enum: true
      },
      lateral: {
        type: "bool"
      },
      docexpr: {
        type: "Node"
      },
      rowexpr: {
        type: "Node"
      },
      namespaces: {
        type: "List"
      },
      columns: {
        type: "List"
      },
      alias: {
        type: "Alias"
      },
      location: {
        type: "int"
      }
    },
    RangeTableFuncCol: {
      type: {
        type: "NodeTag",
        enum: true
      },
      colname: {
        type: "char"
      },
      typeName: {
        type: "TypeName",
        nested: true
      },
      for_ordinality: {
        type: "bool"
      },
      is_not_null: {
        type: "bool"
      },
      colexpr: {
        type: "Node"
      },
      coldefexpr: {
        type: "Node"
      },
      location: {
        type: "int"
      }
    },
    RangeTableSample: {
      type: {
        type: "NodeTag",
        enum: true
      },
      relation: {
        type: "Node"
      },
      method: {
        type: "List"
      },
      args: {
        type: "List"
      },
      repeatable: {
        type: "Node"
      },
      location: {
        type: "int"
      }
    },
    ColumnDef: {
      type: {
        type: "NodeTag",
        enum: true
      },
      colname: {
        type: "char"
      },
      typeName: {
        type: "TypeName",
        nested: true
      },
      inhcount: {
        type: "int"
      },
      is_local: {
        type: "bool"
      },
      is_not_null: {
        type: "bool"
      },
      is_from_type: {
        type: "bool"
      },
      storage: {
        type: "char"
      },
      raw_default: {
        type: "Node"
      },
      cooked_default: {
        type: "Node"
      },
      identity: {
        type: "char"
      },
      identitySequence: {
        type: "RangeVar"
      },
      generated: {
        type: "char"
      },
      collClause: {
        type: "CollateClause",
        nested: true
      },
      collOid: {
        type: "Oid"
      },
      constraints: {
        type: "List"
      },
      fdwoptions: {
        type: "List"
      },
      location: {
        type: "int"
      }
    },
    TableLikeClause: {
      type: {
        type: "NodeTag",
        enum: true
      },
      relation: {
        type: "RangeVar"
      },
      options: {
        type: "bits32"
      }
    },
    IndexElem: {
      type: {
        type: "NodeTag",
        enum: true
      },
      name: {
        type: "char"
      },
      expr: {
        type: "Node"
      },
      indexcolname: {
        type: "char"
      },
      collation: {
        type: "List"
      },
      opclass: {
        type: "List"
      },
      opclassopts: {
        type: "List"
      },
      ordering: {
        type: "SortByDir",
        enum: true
      },
      nulls_ordering: {
        type: "SortByNulls",
        enum: true
      }
    },
    DefElem: {
      type: {
        type: "NodeTag",
        enum: true
      },
      defnamespace: {
        type: "char"
      },
      defname: {
        type: "char"
      },
      arg: {
        type: "Node"
      },
      defaction: {
        type: "DefElemAction",
        enum: true
      },
      location: {
        type: "int"
      }
    },
    LockingClause: {
      type: {
        type: "NodeTag",
        enum: true
      },
      lockedRels: {
        type: "List"
      },
      strength: {
        type: "LockClauseStrength",
        enum: true
      },
      waitPolicy: {
        type: "LockWaitPolicy",
        enum: true
      }
    },
    XmlSerialize: {
      type: {
        type: "NodeTag",
        enum: true
      },
      xmloption: {
        type: "XmlOptionType",
        enum: true
      },
      expr: {
        type: "Node"
      },
      typeName: {
        type: "TypeName",
        nested: true
      },
      location: {
        type: "int"
      }
    },
    PartitionElem: {
      type: {
        type: "NodeTag",
        enum: true
      },
      name: {
        type: "char"
      },
      expr: {
        type: "Node"
      },
      collation: {
        type: "List"
      },
      opclass: {
        type: "List"
      },
      location: {
        type: "int"
      }
    },
    PartitionSpec: {
      type: {
        type: "NodeTag",
        enum: true
      },
      strategy: {
        type: "char"
      },
      partParams: {
        type: "List"
      },
      location: {
        type: "int"
      }
    },
    PartitionBoundSpec: {
      type: {
        type: "NodeTag",
        enum: true
      },
      strategy: {
        type: "char"
      },
      is_default: {
        type: "bool"
      },
      modulus: {
        type: "int"
      },
      remainder: {
        type: "int"
      },
      listdatums: {
        type: "List"
      },
      lowerdatums: {
        type: "List"
      },
      upperdatums: {
        type: "List"
      },
      location: {
        type: "int"
      }
    },
    PartitionRangeDatum: {
      type: {
        type: "NodeTag",
        enum: true
      },
      kind: {
        type: "PartitionRangeDatumKind",
        enum: true
      },
      value: {
        type: "Node"
      },
      location: {
        type: "int"
      }
    },
    PartitionCmd: {
      type: {
        type: "NodeTag",
        enum: true
      },
      name: {
        type: "RangeVar"
      },
      bound: {
        type: "PartitionBoundSpec",
        nested: true
      }
    },
    RangeTblEntry: {
      type: {
        type: "NodeTag",
        enum: true
      },
      rtekind: {
        type: "RTEKind",
        enum: true
      },
      relid: {
        type: "Oid"
      },
      relkind: {
        type: "char"
      },
      rellockmode: {
        type: "int"
      },
      tablesample: {
        type: "TableSampleClause",
        nested: true
      },
      subquery: {
        type: "Query",
        nested: true
      },
      security_barrier: {
        type: "bool"
      },
      jointype: {
        type: "JoinType",
        enum: true
      },
      joinmergedcols: {
        type: "int"
      },
      joinaliasvars: {
        type: "List"
      },
      joinleftcols: {
        type: "List"
      },
      joinrightcols: {
        type: "List"
      },
      functions: {
        type: "List"
      },
      funcordinality: {
        type: "bool"
      },
      tablefunc: {
        type: "TableFunc"
      },
      values_lists: {
        type: "List"
      },
      ctename: {
        type: "char"
      },
      ctelevelsup: {
        type: "Index"
      },
      self_reference: {
        type: "bool"
      },
      coltypes: {
        type: "List"
      },
      coltypmods: {
        type: "List"
      },
      colcollations: {
        type: "List"
      },
      enrname: {
        type: "char"
      },
      enrtuples: {
        type: "double"
      },
      alias: {
        type: "Alias"
      },
      eref: {
        type: "Alias"
      },
      lateral: {
        type: "bool"
      },
      inh: {
        type: "bool"
      },
      inFromCl: {
        type: "bool"
      },
      requiredPerms: {
        type: "AclMode"
      },
      checkAsUser: {
        type: "Oid"
      },
      selectedCols: {
        type: "Bitmapset"
      },
      insertedCols: {
        type: "Bitmapset"
      },
      updatedCols: {
        type: "Bitmapset"
      },
      extraUpdatedCols: {
        type: "Bitmapset"
      },
      securityQuals: {
        type: "List"
      }
    },
    RangeTblFunction: {
      type: {
        type: "NodeTag",
        enum: true
      },
      funcexpr: {
        type: "Node"
      },
      funccolcount: {
        type: "int"
      },
      funccolnames: {
        type: "List"
      },
      funccoltypes: {
        type: "List"
      },
      funccoltypmods: {
        type: "List"
      },
      funccolcollations: {
        type: "List"
      },
      funcparams: {
        type: "Bitmapset"
      }
    },
    TableSampleClause: {
      type: {
        type: "NodeTag",
        enum: true
      },
      tsmhandler: {
        type: "Oid"
      },
      args: {
        type: "List"
      },
      repeatable: {
        type: "Expr"
      }
    },
    WithCheckOption: {
      type: {
        type: "NodeTag",
        enum: true
      },
      kind: {
        type: "WCOKind",
        enum: true
      },
      relname: {
        type: "char"
      },
      polname: {
        type: "char"
      },
      qual: {
        type: "Node"
      },
      cascaded: {
        type: "bool"
      }
    },
    SortGroupClause: {
      type: {
        type: "NodeTag",
        enum: true
      },
      tleSortGroupRef: {
        type: "Index"
      },
      eqop: {
        type: "Oid"
      },
      sortop: {
        type: "Oid"
      },
      nulls_first: {
        type: "bool"
      },
      hashable: {
        type: "bool"
      }
    },
    GroupingSet: {
      type: {
        type: "NodeTag",
        enum: true
      },
      kind: {
        type: "GroupingSetKind",
        enum: true
      },
      content: {
        type: "List"
      },
      location: {
        type: "int"
      }
    },
    WindowClause: {
      type: {
        type: "NodeTag",
        enum: true
      },
      name: {
        type: "char"
      },
      refname: {
        type: "char"
      },
      partitionClause: {
        type: "List"
      },
      orderClause: {
        type: "List"
      },
      frameOptions: {
        type: "int"
      },
      startOffset: {
        type: "Node"
      },
      endOffset: {
        type: "Node"
      },
      startInRangeFunc: {
        type: "Oid"
      },
      endInRangeFunc: {
        type: "Oid"
      },
      inRangeColl: {
        type: "Oid"
      },
      inRangeAsc: {
        type: "bool"
      },
      inRangeNullsFirst: {
        type: "bool"
      },
      winref: {
        type: "Index"
      },
      copiedOrder: {
        type: "bool"
      }
    },
    RowMarkClause: {
      type: {
        type: "NodeTag",
        enum: true
      },
      rti: {
        type: "Index"
      },
      strength: {
        type: "LockClauseStrength",
        enum: true
      },
      waitPolicy: {
        type: "LockWaitPolicy",
        enum: true
      },
      pushedDown: {
        type: "bool"
      }
    },
    WithClause: {
      type: {
        type: "NodeTag",
        enum: true
      },
      ctes: {
        type: "List"
      },
      recursive: {
        type: "bool"
      },
      location: {
        type: "int"
      }
    },
    InferClause: {
      type: {
        type: "NodeTag",
        enum: true
      },
      indexElems: {
        type: "List"
      },
      whereClause: {
        type: "Node"
      },
      conname: {
        type: "char"
      },
      location: {
        type: "int"
      }
    },
    OnConflictClause: {
      type: {
        type: "NodeTag",
        enum: true
      },
      action: {
        type: "OnConflictAction",
        enum: true
      },
      infer: {
        type: "InferClause",
        nested: true
      },
      targetList: {
        type: "List"
      },
      whereClause: {
        type: "Node"
      },
      location: {
        type: "int"
      }
    },
    CommonTableExpr: {
      type: {
        type: "NodeTag",
        enum: true
      },
      ctename: {
        type: "char"
      },
      aliascolnames: {
        type: "List"
      },
      ctematerialized: {
        type: "CTEMaterialize",
        enum: true
      },
      ctequery: {
        type: "Node"
      },
      location: {
        type: "int"
      },
      cterecursive: {
        type: "bool"
      },
      cterefcount: {
        type: "int"
      },
      ctecolnames: {
        type: "List"
      },
      ctecoltypes: {
        type: "List"
      },
      ctecoltypmods: {
        type: "List"
      },
      ctecolcollations: {
        type: "List"
      }
    },
    TriggerTransition: {
      type: {
        type: "NodeTag",
        enum: true
      },
      name: {
        type: "char"
      },
      isNew: {
        type: "bool"
      },
      isTable: {
        type: "bool"
      }
    },
    RawStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      stmt: {
        type: "Node"
      },
      stmt_location: {
        type: "int"
      },
      stmt_len: {
        type: "int"
      }
    },
    InsertStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      relation: {
        type: "RangeVar"
      },
      cols: {
        type: "List"
      },
      selectStmt: {
        type: "Node"
      },
      onConflictClause: {
        type: "OnConflictClause",
        nested: true
      },
      returningList: {
        type: "List"
      },
      withClause: {
        type: "WithClause",
        nested: true
      },
      override: {
        type: "OverridingKind",
        enum: true
      }
    },
    DeleteStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      relation: {
        type: "RangeVar"
      },
      usingClause: {
        type: "List"
      },
      whereClause: {
        type: "Node"
      },
      returningList: {
        type: "List"
      },
      withClause: {
        type: "WithClause",
        nested: true
      }
    },
    UpdateStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      relation: {
        type: "RangeVar"
      },
      targetList: {
        type: "List"
      },
      whereClause: {
        type: "Node"
      },
      fromClause: {
        type: "List"
      },
      returningList: {
        type: "List"
      },
      withClause: {
        type: "WithClause",
        nested: true
      }
    },
    SelectStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      distinctClause: {
        type: "List"
      },
      intoClause: {
        type: "IntoClause"
      },
      targetList: {
        type: "List"
      },
      fromClause: {
        type: "List"
      },
      whereClause: {
        type: "Node"
      },
      groupClause: {
        type: "List"
      },
      havingClause: {
        type: "Node"
      },
      windowClause: {
        type: "List"
      },
      valuesLists: {
        type: "List"
      },
      sortClause: {
        type: "List"
      },
      limitOffset: {
        type: "Node"
      },
      limitCount: {
        type: "Node"
      },
      limitOption: {
        type: "LimitOption",
        enum: true
      },
      lockingClause: {
        type: "List"
      },
      withClause: {
        type: "WithClause",
        nested: true
      },
      op: {
        type: "SetOperation",
        enum: true
      },
      all: {
        type: "bool"
      },
      larg: {
        type: "SelectStmt",
        nested: true
      },
      rarg: {
        type: "SelectStmt",
        nested: true
      }
    },
    SetOperationStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      op: {
        type: "SetOperation",
        enum: true
      },
      all: {
        type: "bool"
      },
      larg: {
        type: "Node"
      },
      rarg: {
        type: "Node"
      },
      colTypes: {
        type: "List"
      },
      colTypmods: {
        type: "List"
      },
      colCollations: {
        type: "List"
      },
      groupClauses: {
        type: "List"
      }
    },
    CreateSchemaStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      schemaname: {
        type: "char"
      },
      authrole: {
        type: "RoleSpec",
        nested: true
      },
      schemaElts: {
        type: "List"
      },
      if_not_exists: {
        type: "bool"
      }
    },
    AlterTableStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      relation: {
        type: "RangeVar"
      },
      cmds: {
        type: "List"
      },
      relkind: {
        type: "ObjectType",
        enum: true
      },
      missing_ok: {
        type: "bool"
      }
    },
    ReplicaIdentityStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      identity_type: {
        type: "char"
      },
      name: {
        type: "char"
      }
    },
    AlterTableCmd: {
      type: {
        type: "NodeTag",
        enum: true
      },
      subtype: {
        type: "AlterTableType",
        enum: true
      },
      name: {
        type: "char"
      },
      num: {
        type: "int16"
      },
      newowner: {
        type: "RoleSpec",
        nested: true
      },
      def: {
        type: "Node"
      },
      behavior: {
        type: "DropBehavior",
        enum: true
      },
      missing_ok: {
        type: "bool"
      }
    },
    AlterCollationStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      collname: {
        type: "List"
      }
    },
    AlterDomainStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      subtype: {
        type: "char"
      },
      typeName: {
        type: "List"
      },
      name: {
        type: "char"
      },
      def: {
        type: "Node"
      },
      behavior: {
        type: "DropBehavior",
        enum: true
      },
      missing_ok: {
        type: "bool"
      }
    },
    GrantStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      is_grant: {
        type: "bool"
      },
      targtype: {
        type: "GrantTargetType",
        enum: true
      },
      objtype: {
        type: "ObjectType",
        enum: true
      },
      objects: {
        type: "List"
      },
      privileges: {
        type: "List"
      },
      grantees: {
        type: "List"
      },
      grant_option: {
        type: "bool"
      },
      behavior: {
        type: "DropBehavior",
        enum: true
      }
    },
    ObjectWithArgs: {
      type: {
        type: "NodeTag",
        enum: true
      },
      objname: {
        type: "List"
      },
      objargs: {
        type: "List"
      },
      args_unspecified: {
        type: "bool"
      }
    },
    AccessPriv: {
      type: {
        type: "NodeTag",
        enum: true
      },
      priv_name: {
        type: "char"
      },
      cols: {
        type: "List"
      }
    },
    GrantRoleStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      granted_roles: {
        type: "List"
      },
      grantee_roles: {
        type: "List"
      },
      is_grant: {
        type: "bool"
      },
      admin_opt: {
        type: "bool"
      },
      grantor: {
        type: "RoleSpec",
        nested: true
      },
      behavior: {
        type: "DropBehavior",
        enum: true
      }
    },
    AlterDefaultPrivilegesStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      options: {
        type: "List"
      },
      action: {
        type: "GrantStmt",
        nested: true
      }
    },
    CopyStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      relation: {
        type: "RangeVar"
      },
      query: {
        type: "Node"
      },
      attlist: {
        type: "List"
      },
      is_from: {
        type: "bool"
      },
      is_program: {
        type: "bool"
      },
      filename: {
        type: "char"
      },
      options: {
        type: "List"
      },
      whereClause: {
        type: "Node"
      }
    },
    VariableSetStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      kind: {
        type: "VariableSetKind",
        enum: true
      },
      name: {
        type: "char"
      },
      args: {
        type: "List"
      },
      is_local: {
        type: "bool"
      }
    },
    VariableShowStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      name: {
        type: "char"
      }
    },
    CreateStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      relation: {
        type: "RangeVar"
      },
      tableElts: {
        type: "List"
      },
      inhRelations: {
        type: "List"
      },
      partbound: {
        type: "PartitionBoundSpec",
        nested: true
      },
      partspec: {
        type: "PartitionSpec",
        nested: true
      },
      ofTypename: {
        type: "TypeName",
        nested: true
      },
      constraints: {
        type: "List"
      },
      options: {
        type: "List"
      },
      oncommit: {
        type: "OnCommitAction",
        enum: true
      },
      tablespacename: {
        type: "char"
      },
      accessMethod: {
        type: "char"
      },
      if_not_exists: {
        type: "bool"
      }
    },
    Constraint: {
      type: {
        type: "NodeTag",
        enum: true
      },
      contype: {
        type: "ConstrType",
        enum: true
      },
      conname: {
        type: "char"
      },
      deferrable: {
        type: "bool"
      },
      initdeferred: {
        type: "bool"
      },
      location: {
        type: "int"
      },
      is_no_inherit: {
        type: "bool"
      },
      raw_expr: {
        type: "Node"
      },
      cooked_expr: {
        type: "char"
      },
      generated_when: {
        type: "char"
      },
      keys: {
        type: "List"
      },
      including: {
        type: "List"
      },
      exclusions: {
        type: "List"
      },
      options: {
        type: "List"
      },
      indexname: {
        type: "char"
      },
      indexspace: {
        type: "char"
      },
      reset_default_tblspc: {
        type: "bool"
      },
      access_method: {
        type: "char"
      },
      where_clause: {
        type: "Node"
      },
      pktable: {
        type: "RangeVar"
      },
      fk_attrs: {
        type: "List"
      },
      pk_attrs: {
        type: "List"
      },
      fk_matchtype: {
        type: "char"
      },
      fk_upd_action: {
        type: "char"
      },
      fk_del_action: {
        type: "char"
      },
      old_conpfeqop: {
        type: "List"
      },
      old_pktable_oid: {
        type: "Oid"
      },
      skip_validation: {
        type: "bool"
      },
      initially_valid: {
        type: "bool"
      }
    },
    CreateTableSpaceStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      tablespacename: {
        type: "char"
      },
      owner: {
        type: "RoleSpec",
        nested: true
      },
      location: {
        type: "char"
      },
      options: {
        type: "List"
      }
    },
    DropTableSpaceStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      tablespacename: {
        type: "char"
      },
      missing_ok: {
        type: "bool"
      }
    },
    AlterTableSpaceOptionsStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      tablespacename: {
        type: "char"
      },
      options: {
        type: "List"
      },
      isReset: {
        type: "bool"
      }
    },
    AlterTableMoveAllStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      orig_tablespacename: {
        type: "char"
      },
      objtype: {
        type: "ObjectType",
        enum: true
      },
      roles: {
        type: "List"
      },
      new_tablespacename: {
        type: "char"
      },
      nowait: {
        type: "bool"
      }
    },
    CreateExtensionStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      extname: {
        type: "char"
      },
      if_not_exists: {
        type: "bool"
      },
      options: {
        type: "List"
      }
    },
    AlterExtensionStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      extname: {
        type: "char"
      },
      options: {
        type: "List"
      }
    },
    AlterExtensionContentsStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      extname: {
        type: "char"
      },
      action: {
        type: "int"
      },
      objtype: {
        type: "ObjectType",
        enum: true
      },
      object: {
        type: "Node"
      }
    },
    CreateFdwStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      fdwname: {
        type: "char"
      },
      func_options: {
        type: "List"
      },
      options: {
        type: "List"
      }
    },
    AlterFdwStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      fdwname: {
        type: "char"
      },
      func_options: {
        type: "List"
      },
      options: {
        type: "List"
      }
    },
    CreateForeignServerStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      servername: {
        type: "char"
      },
      servertype: {
        type: "char"
      },
      version: {
        type: "char"
      },
      fdwname: {
        type: "char"
      },
      if_not_exists: {
        type: "bool"
      },
      options: {
        type: "List"
      }
    },
    AlterForeignServerStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      servername: {
        type: "char"
      },
      version: {
        type: "char"
      },
      options: {
        type: "List"
      },
      has_version: {
        type: "bool"
      }
    },
    CreateForeignTableStmt: {
      base: {
        type: "CreateStmt",
        nested: true
      },
      servername: {
        type: "char"
      },
      options: {
        type: "List"
      }
    },
    CreateUserMappingStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      user: {
        type: "RoleSpec",
        nested: true
      },
      servername: {
        type: "char"
      },
      if_not_exists: {
        type: "bool"
      },
      options: {
        type: "List"
      }
    },
    AlterUserMappingStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      user: {
        type: "RoleSpec",
        nested: true
      },
      servername: {
        type: "char"
      },
      options: {
        type: "List"
      }
    },
    DropUserMappingStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      user: {
        type: "RoleSpec",
        nested: true
      },
      servername: {
        type: "char"
      },
      missing_ok: {
        type: "bool"
      }
    },
    ImportForeignSchemaStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      server_name: {
        type: "char"
      },
      remote_schema: {
        type: "char"
      },
      local_schema: {
        type: "char"
      },
      list_type: {
        type: "ImportForeignSchemaType",
        enum: true
      },
      table_list: {
        type: "List"
      },
      options: {
        type: "List"
      }
    },
    CreatePolicyStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      policy_name: {
        type: "char"
      },
      table: {
        type: "RangeVar"
      },
      cmd_name: {
        type: "char"
      },
      permissive: {
        type: "bool"
      },
      roles: {
        type: "List"
      },
      qual: {
        type: "Node"
      },
      with_check: {
        type: "Node"
      }
    },
    AlterPolicyStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      policy_name: {
        type: "char"
      },
      table: {
        type: "RangeVar"
      },
      roles: {
        type: "List"
      },
      qual: {
        type: "Node"
      },
      with_check: {
        type: "Node"
      }
    },
    CreateAmStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      amname: {
        type: "char"
      },
      handler_name: {
        type: "List"
      },
      amtype: {
        type: "char"
      }
    },
    CreateTrigStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      trigname: {
        type: "char"
      },
      relation: {
        type: "RangeVar"
      },
      funcname: {
        type: "List"
      },
      args: {
        type: "List"
      },
      row: {
        type: "bool"
      },
      timing: {
        type: "int16"
      },
      events: {
        type: "int16"
      },
      columns: {
        type: "List"
      },
      whenClause: {
        type: "Node"
      },
      isconstraint: {
        type: "bool"
      },
      transitionRels: {
        type: "List"
      },
      deferrable: {
        type: "bool"
      },
      initdeferred: {
        type: "bool"
      },
      constrrel: {
        type: "RangeVar"
      }
    },
    CreateEventTrigStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      trigname: {
        type: "char"
      },
      eventname: {
        type: "char"
      },
      whenclause: {
        type: "List"
      },
      funcname: {
        type: "List"
      }
    },
    AlterEventTrigStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      trigname: {
        type: "char"
      },
      tgenabled: {
        type: "char"
      }
    },
    CreatePLangStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      replace: {
        type: "bool"
      },
      plname: {
        type: "char"
      },
      plhandler: {
        type: "List"
      },
      plinline: {
        type: "List"
      },
      plvalidator: {
        type: "List"
      },
      pltrusted: {
        type: "bool"
      }
    },
    CreateRoleStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      stmt_type: {
        type: "RoleStmtType",
        enum: true
      },
      role: {
        type: "char"
      },
      options: {
        type: "List"
      }
    },
    AlterRoleStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      role: {
        type: "RoleSpec",
        nested: true
      },
      options: {
        type: "List"
      },
      action: {
        type: "int"
      }
    },
    AlterRoleSetStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      role: {
        type: "RoleSpec",
        nested: true
      },
      database: {
        type: "char"
      },
      setstmt: {
        type: "VariableSetStmt",
        nested: true
      }
    },
    DropRoleStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      roles: {
        type: "List"
      },
      missing_ok: {
        type: "bool"
      }
    },
    CreateSeqStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      sequence: {
        type: "RangeVar"
      },
      options: {
        type: "List"
      },
      ownerId: {
        type: "Oid"
      },
      for_identity: {
        type: "bool"
      },
      if_not_exists: {
        type: "bool"
      }
    },
    AlterSeqStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      sequence: {
        type: "RangeVar"
      },
      options: {
        type: "List"
      },
      for_identity: {
        type: "bool"
      },
      missing_ok: {
        type: "bool"
      }
    },
    DefineStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      kind: {
        type: "ObjectType",
        enum: true
      },
      oldstyle: {
        type: "bool"
      },
      defnames: {
        type: "List"
      },
      args: {
        type: "List"
      },
      definition: {
        type: "List"
      },
      if_not_exists: {
        type: "bool"
      },
      replace: {
        type: "bool"
      }
    },
    CreateDomainStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      domainname: {
        type: "List"
      },
      typeName: {
        type: "TypeName",
        nested: true
      },
      collClause: {
        type: "CollateClause",
        nested: true
      },
      constraints: {
        type: "List"
      }
    },
    CreateOpClassStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      opclassname: {
        type: "List"
      },
      opfamilyname: {
        type: "List"
      },
      amname: {
        type: "char"
      },
      datatype: {
        type: "TypeName",
        nested: true
      },
      items: {
        type: "List"
      },
      isDefault: {
        type: "bool"
      }
    },
    CreateOpClassItem: {
      type: {
        type: "NodeTag",
        enum: true
      },
      itemtype: {
        type: "int"
      },
      name: {
        type: "ObjectWithArgs",
        nested: true
      },
      number: {
        type: "int"
      },
      order_family: {
        type: "List"
      },
      class_args: {
        type: "List"
      },
      storedtype: {
        type: "TypeName",
        nested: true
      }
    },
    CreateOpFamilyStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      opfamilyname: {
        type: "List"
      },
      amname: {
        type: "char"
      }
    },
    AlterOpFamilyStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      opfamilyname: {
        type: "List"
      },
      amname: {
        type: "char"
      },
      isDrop: {
        type: "bool"
      },
      items: {
        type: "List"
      }
    },
    DropStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      objects: {
        type: "List"
      },
      removeType: {
        type: "ObjectType",
        enum: true
      },
      behavior: {
        type: "DropBehavior",
        enum: true
      },
      missing_ok: {
        type: "bool"
      },
      concurrent: {
        type: "bool"
      }
    },
    TruncateStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      relations: {
        type: "List"
      },
      restart_seqs: {
        type: "bool"
      },
      behavior: {
        type: "DropBehavior",
        enum: true
      }
    },
    CommentStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      objtype: {
        type: "ObjectType",
        enum: true
      },
      object: {
        type: "Node"
      },
      comment: {
        type: "char"
      }
    },
    SecLabelStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      objtype: {
        type: "ObjectType",
        enum: true
      },
      object: {
        type: "Node"
      },
      provider: {
        type: "char"
      },
      label: {
        type: "char"
      }
    },
    DeclareCursorStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      portalname: {
        type: "char"
      },
      options: {
        type: "int"
      },
      query: {
        type: "Node"
      }
    },
    ClosePortalStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      portalname: {
        type: "char"
      }
    },
    FetchStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      direction: {
        type: "FetchDirection",
        enum: true
      },
      howMany: {
        type: "long"
      },
      portalname: {
        type: "char"
      },
      ismove: {
        type: "bool"
      }
    },
    IndexStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      idxname: {
        type: "char"
      },
      relation: {
        type: "RangeVar"
      },
      accessMethod: {
        type: "char"
      },
      tableSpace: {
        type: "char"
      },
      indexParams: {
        type: "List"
      },
      indexIncludingParams: {
        type: "List"
      },
      options: {
        type: "List"
      },
      whereClause: {
        type: "Node"
      },
      excludeOpNames: {
        type: "List"
      },
      idxcomment: {
        type: "char"
      },
      indexOid: {
        type: "Oid"
      },
      oldNode: {
        type: "Oid"
      },
      oldCreateSubid: {
        type: "SubTransactionId"
      },
      oldFirstRelfilenodeSubid: {
        type: "SubTransactionId"
      },
      unique: {
        type: "bool"
      },
      primary: {
        type: "bool"
      },
      isconstraint: {
        type: "bool"
      },
      deferrable: {
        type: "bool"
      },
      initdeferred: {
        type: "bool"
      },
      transformed: {
        type: "bool"
      },
      concurrent: {
        type: "bool"
      },
      if_not_exists: {
        type: "bool"
      },
      reset_default_tblspc: {
        type: "bool"
      }
    },
    CreateStatsStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      defnames: {
        type: "List"
      },
      stat_types: {
        type: "List"
      },
      exprs: {
        type: "List"
      },
      relations: {
        type: "List"
      },
      stxcomment: {
        type: "char"
      },
      if_not_exists: {
        type: "bool"
      }
    },
    AlterStatsStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      defnames: {
        type: "List"
      },
      stxstattarget: {
        type: "int"
      },
      missing_ok: {
        type: "bool"
      }
    },
    CreateFunctionStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      is_procedure: {
        type: "bool"
      },
      replace: {
        type: "bool"
      },
      funcname: {
        type: "List"
      },
      parameters: {
        type: "List"
      },
      returnType: {
        type: "TypeName",
        nested: true
      },
      options: {
        type: "List"
      }
    },
    FunctionParameter: {
      type: {
        type: "NodeTag",
        enum: true
      },
      name: {
        type: "char"
      },
      argType: {
        type: "TypeName",
        nested: true
      },
      mode: {
        type: "FunctionParameterMode",
        enum: true
      },
      defexpr: {
        type: "Node"
      }
    },
    AlterFunctionStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      objtype: {
        type: "ObjectType",
        enum: true
      },
      func: {
        type: "ObjectWithArgs",
        nested: true
      },
      actions: {
        type: "List"
      }
    },
    DoStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      args: {
        type: "List"
      }
    },
    InlineCodeBlock: {
      type: {
        type: "NodeTag",
        enum: true
      },
      source_text: {
        type: "char"
      },
      langOid: {
        type: "Oid"
      },
      langIsTrusted: {
        type: "bool"
      },
      atomic: {
        type: "bool"
      }
    },
    CallStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      funccall: {
        type: "FuncCall",
        nested: true
      },
      funcexpr: {
        type: "FuncExpr"
      }
    },
    CallContext: {
      type: {
        type: "NodeTag",
        enum: true
      },
      atomic: {
        type: "bool"
      }
    },
    RenameStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      renameType: {
        type: "ObjectType",
        enum: true
      },
      relationType: {
        type: "ObjectType",
        enum: true
      },
      relation: {
        type: "RangeVar"
      },
      object: {
        type: "Node"
      },
      subname: {
        type: "char"
      },
      newname: {
        type: "char"
      },
      behavior: {
        type: "DropBehavior",
        enum: true
      },
      missing_ok: {
        type: "bool"
      }
    },
    AlterObjectDependsStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      objectType: {
        type: "ObjectType",
        enum: true
      },
      relation: {
        type: "RangeVar"
      },
      object: {
        type: "Node"
      },
      extname: {
        type: "Value"
      },
      remove: {
        type: "bool"
      }
    },
    AlterObjectSchemaStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      objectType: {
        type: "ObjectType",
        enum: true
      },
      relation: {
        type: "RangeVar"
      },
      object: {
        type: "Node"
      },
      newschema: {
        type: "char"
      },
      missing_ok: {
        type: "bool"
      }
    },
    AlterOwnerStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      objectType: {
        type: "ObjectType",
        enum: true
      },
      relation: {
        type: "RangeVar"
      },
      object: {
        type: "Node"
      },
      newowner: {
        type: "RoleSpec",
        nested: true
      }
    },
    AlterOperatorStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      opername: {
        type: "ObjectWithArgs",
        nested: true
      },
      options: {
        type: "List"
      }
    },
    AlterTypeStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      typeName: {
        type: "List"
      },
      options: {
        type: "List"
      }
    },
    RuleStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      relation: {
        type: "RangeVar"
      },
      rulename: {
        type: "char"
      },
      whereClause: {
        type: "Node"
      },
      event: {
        type: "CmdType",
        enum: true
      },
      instead: {
        type: "bool"
      },
      actions: {
        type: "List"
      },
      replace: {
        type: "bool"
      }
    },
    NotifyStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      conditionname: {
        type: "char"
      },
      payload: {
        type: "char"
      }
    },
    ListenStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      conditionname: {
        type: "char"
      }
    },
    UnlistenStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      conditionname: {
        type: "char"
      }
    },
    TransactionStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      kind: {
        type: "TransactionStmtKind",
        enum: true
      },
      options: {
        type: "List"
      },
      savepoint_name: {
        type: "char"
      },
      gid: {
        type: "char"
      },
      chain: {
        type: "bool"
      }
    },
    CompositeTypeStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      typevar: {
        type: "RangeVar"
      },
      coldeflist: {
        type: "List"
      }
    },
    CreateEnumStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      typeName: {
        type: "List"
      },
      vals: {
        type: "List"
      }
    },
    CreateRangeStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      typeName: {
        type: "List"
      },
      params: {
        type: "List"
      }
    },
    AlterEnumStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      typeName: {
        type: "List"
      },
      oldVal: {
        type: "char"
      },
      newVal: {
        type: "char"
      },
      newValNeighbor: {
        type: "char"
      },
      newValIsAfter: {
        type: "bool"
      },
      skipIfNewValExists: {
        type: "bool"
      }
    },
    ViewStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      view: {
        type: "RangeVar"
      },
      aliases: {
        type: "List"
      },
      query: {
        type: "Node"
      },
      replace: {
        type: "bool"
      },
      options: {
        type: "List"
      },
      withCheckOption: {
        type: "ViewCheckOption",
        enum: true
      }
    },
    LoadStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      filename: {
        type: "char"
      }
    },
    CreatedbStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      dbname: {
        type: "char"
      },
      options: {
        type: "List"
      }
    },
    AlterDatabaseStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      dbname: {
        type: "char"
      },
      options: {
        type: "List"
      }
    },
    AlterDatabaseSetStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      dbname: {
        type: "char"
      },
      setstmt: {
        type: "VariableSetStmt",
        nested: true
      }
    },
    DropdbStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      dbname: {
        type: "char"
      },
      missing_ok: {
        type: "bool"
      },
      options: {
        type: "List"
      }
    },
    AlterSystemStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      setstmt: {
        type: "VariableSetStmt",
        nested: true
      }
    },
    ClusterStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      relation: {
        type: "RangeVar"
      },
      indexname: {
        type: "char"
      },
      options: {
        type: "int"
      }
    },
    VacuumStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      options: {
        type: "List"
      },
      rels: {
        type: "List"
      },
      is_vacuumcmd: {
        type: "bool"
      }
    },
    VacuumRelation: {
      type: {
        type: "NodeTag",
        enum: true
      },
      relation: {
        type: "RangeVar"
      },
      oid: {
        type: "Oid"
      },
      va_cols: {
        type: "List"
      }
    },
    ExplainStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      query: {
        type: "Node"
      },
      options: {
        type: "List"
      }
    },
    CreateTableAsStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      query: {
        type: "Node"
      },
      into: {
        type: "IntoClause"
      },
      relkind: {
        type: "ObjectType",
        enum: true
      },
      is_select_into: {
        type: "bool"
      },
      if_not_exists: {
        type: "bool"
      }
    },
    RefreshMatViewStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      concurrent: {
        type: "bool"
      },
      skipData: {
        type: "bool"
      },
      relation: {
        type: "RangeVar"
      }
    },
    CheckPointStmt: {
      type: {
        type: "NodeTag",
        enum: true
      }
    },
    DiscardStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      target: {
        type: "DiscardMode",
        enum: true
      }
    },
    LockStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      relations: {
        type: "List"
      },
      mode: {
        type: "int"
      },
      nowait: {
        type: "bool"
      }
    },
    ConstraintsSetStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      constraints: {
        type: "List"
      },
      deferred: {
        type: "bool"
      }
    },
    ReindexStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      kind: {
        type: "ReindexObjectType",
        enum: true
      },
      relation: {
        type: "RangeVar"
      },
      name: {
        type: "char"
      },
      options: {
        type: "int"
      },
      concurrent: {
        type: "bool"
      }
    },
    CreateConversionStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      conversion_name: {
        type: "List"
      },
      for_encoding_name: {
        type: "char"
      },
      to_encoding_name: {
        type: "char"
      },
      func_name: {
        type: "List"
      },
      def: {
        type: "bool"
      }
    },
    CreateCastStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      sourcetype: {
        type: "TypeName",
        nested: true
      },
      targettype: {
        type: "TypeName",
        nested: true
      },
      func: {
        type: "ObjectWithArgs",
        nested: true
      },
      context: {
        type: "CoercionContext",
        enum: true
      },
      inout: {
        type: "bool"
      }
    },
    CreateTransformStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      replace: {
        type: "bool"
      },
      type_name: {
        type: "TypeName",
        nested: true
      },
      lang: {
        type: "char"
      },
      fromsql: {
        type: "ObjectWithArgs",
        nested: true
      },
      tosql: {
        type: "ObjectWithArgs",
        nested: true
      }
    },
    PrepareStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      name: {
        type: "char"
      },
      argtypes: {
        type: "List"
      },
      query: {
        type: "Node"
      }
    },
    ExecuteStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      name: {
        type: "char"
      },
      params: {
        type: "List"
      }
    },
    DeallocateStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      name: {
        type: "char"
      }
    },
    DropOwnedStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      roles: {
        type: "List"
      },
      behavior: {
        type: "DropBehavior",
        enum: true
      }
    },
    ReassignOwnedStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      roles: {
        type: "List"
      },
      newrole: {
        type: "RoleSpec",
        nested: true
      }
    },
    AlterTSDictionaryStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      dictname: {
        type: "List"
      },
      options: {
        type: "List"
      }
    },
    AlterTSConfigurationStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      kind: {
        type: "AlterTSConfigType",
        enum: true
      },
      cfgname: {
        type: "List"
      },
      tokentype: {
        type: "List"
      },
      dicts: {
        type: "List"
      },
      override: {
        type: "bool"
      },
      replace: {
        type: "bool"
      },
      missing_ok: {
        type: "bool"
      }
    },
    CreatePublicationStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      pubname: {
        type: "char"
      },
      options: {
        type: "List"
      },
      tables: {
        type: "List"
      },
      for_all_tables: {
        type: "bool"
      }
    },
    AlterPublicationStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      pubname: {
        type: "char"
      },
      options: {
        type: "List"
      },
      tables: {
        type: "List"
      },
      for_all_tables: {
        type: "bool"
      },
      tableAction: {
        type: "DefElemAction",
        enum: true
      }
    },
    CreateSubscriptionStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      subname: {
        type: "char"
      },
      conninfo: {
        type: "char"
      },
      publication: {
        type: "List"
      },
      options: {
        type: "List"
      }
    },
    AlterSubscriptionStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      kind: {
        type: "AlterSubscriptionType",
        enum: true
      },
      subname: {
        type: "char"
      },
      conninfo: {
        type: "char"
      },
      publication: {
        type: "List"
      },
      options: {
        type: "List"
      }
    },
    DropSubscriptionStmt: {
      type: {
        type: "NodeTag",
        enum: true
      },
      subname: {
        type: "char"
      },
      missing_ok: {
        type: "bool"
      },
      behavior: {
        type: "DropBehavior",
        enum: true
      }
    },
    VacAttrStats: {
      attr: {
        type: "Form_pg_attribute"
      },
      attrtypid: {
        type: "Oid"
      },
      attrtypmod: {
        type: "int32"
      },
      attrtype: {
        type: "Form_pg_type"
      },
      attrcollid: {
        type: "Oid"
      },
      anl_context: {
        type: "MemoryContext"
      },
      compute_stats: {
        type: "AnalyzeAttrComputeStatsFunc"
      },
      minrows: {
        type: "int"
      },
      extra_data: {
        type: "void"
      },
      stats_valid: {
        type: "bool"
      },
      stanullfrac: {
        type: "float4"
      },
      stawidth: {
        type: "int32"
      },
      stadistinct: {
        type: "float4"
      },
      "stakind[STATISTIC_NUM_SLOTS]": {
        type: "int16"
      },
      "staop[STATISTIC_NUM_SLOTS]": {
        type: "Oid"
      },
      "stacoll[STATISTIC_NUM_SLOTS]": {
        type: "Oid"
      },
      "numnumbers[STATISTIC_NUM_SLOTS]": {
        type: "int"
      },
      "stanumbers[STATISTIC_NUM_SLOTS]": {
        type: "float4"
      },
      "numvalues[STATISTIC_NUM_SLOTS]": {
        type: "int"
      },
      "stavalues[STATISTIC_NUM_SLOTS]": {
        type: "Datum"
      },
      "statypid[STATISTIC_NUM_SLOTS]": {
        type: "Oid"
      },
      "statyplen[STATISTIC_NUM_SLOTS]": {
        type: "int16"
      },
      "statypbyval[STATISTIC_NUM_SLOTS]": {
        type: "bool"
      },
      "statypalign[STATISTIC_NUM_SLOTS]": {
        type: "char"
      },
      tupattnum: {
        type: "int"
      },
      rows: {
        type: "HeapTuple"
      },
      tupDesc: {
        type: "TupleDesc"
      },
      exprvals: {
        type: "Datum"
      },
      exprnulls: {
        type: "bool"
      },
      rowstride: {
        type: "int"
      }
    },
    VacuumParams: {
      options: {
        type: "int"
      },
      freeze_min_age: {
        type: "int"
      },
      freeze_table_age: {
        type: "int"
      },
      multixact_freeze_min_age: {
        type: "int"
      },
      multixact_freeze_table_age: {
        type: "int"
      },
      is_wraparound: {
        type: "bool"
      },
      log_min_duration: {
        type: "int"
      },
      index_cleanup: {
        type: "VacOptTernaryValue",
        enum: true
      },
      truncate: {
        type: "VacOptTernaryValue",
        enum: true
      },
      nworkers: {
        type: "int"
      }
    },
    Integer: {
      ival: {
        type: "long"
      }
    },
    Float: {
      str: {
        type: "char"
      }
    },
    String: {
      str: {
        type: "char"
      }
    },
    BitString: {
      str: {
        type: "char"
      }
    },
    Null: {}
  };
});

// node_modules/pgsql-enums/main/types.js
var require_types = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getConstraintFromConstrType = exports.objtypeName = exports.TYPE_NAMES = undefined;
  var util_1 = __require("util");
  var fail = (type, node) => {
    throw new Error((0, util_1.format)("Unhandled %s node: %s", type, JSON.stringify(node)));
  };
  exports.TYPE_NAMES = {
    OBJECT_ACCESS_METHOD: "ACCESS METHOD",
    OBJECT_AGGREGATE: "AGGREGATE",
    OBJECT_ATTRIBUTE: "ATTRIBUTE",
    OBJECT_CAST: "CAST",
    OBJECT_COLLATION: "COLLATION",
    OBJECT_COLUMN: "COLUMN",
    OBJECT_CONVERSION: "CONVERSION",
    OBJECT_DATABASE: "DATABASE",
    OBJECT_DOMAIN: "DOMAIN",
    OBJECT_DOMCONSTRAINT: "CONSTRAINT",
    OBJECT_EVENT_TRIGGER: "EVENT TRIGGER",
    OBJECT_EXTENSION: "EXTENSION",
    OBJECT_FDW: "FOREIGN DATA WRAPPER",
    OBJECT_FOREIGN_SERVER: "SERVER",
    OBJECT_FOREIGN_TABLE: "FOREIGN TABLE",
    OBJECT_FUNCTION: "FUNCTION",
    OBJECT_INDEX: "INDEX",
    OBJECT_LANGUAGE: "LANGUAGE",
    OBJECT_LARGEOBJECT: "LARGE OBJECT",
    OBJECT_MATVIEW: "MATERIALIZED VIEW",
    OBJECT_OPCLASS: "OPERATOR CLASS",
    OBJECT_OPERATOR: "OPERATOR",
    OBJECT_OPFAMILY: "OPERATOR FAMILY",
    OBJECT_POLICY: "POLICY",
    OBJECT_PROCEDURE: "PROCEDURE",
    OBJECT_PUBLICATION: "PUBLICATION",
    OBJECT_ROLE: "ROLE",
    OBJECT_ROUTINE: "ROUTINE",
    OBJECT_RULE: "RULE",
    OBJECT_SCHEMA: "SCHEMA",
    OBJECT_SEQUENCE: "SEQUENCE",
    OBJECT_STATISTIC_EXT: "STATISTICS",
    OBJECT_SUBSCRIPTION: "SUBSCRIPTION",
    OBJECT_TABCONSTRAINT: "CONSTRAINT",
    OBJECT_TABLE: "TABLE",
    OBJECT_TABLESPACE: "TABLESPACE",
    OBJECT_TRANSFORM: "TRANSFORM",
    OBJECT_TRIGGER: "TRIGGER",
    OBJECT_TSCONFIGURATION: "TEXT SEARCH CONFIGURATION",
    OBJECT_TSDICTIONARY: "TEXT SEARCH DICTIONARY",
    OBJECT_TSPARSER: "TEXT SEARCH PARSER",
    OBJECT_TSTEMPLATE: "TEXT SEARCH TEMPLATE",
    OBJECT_TYPE: "TYPE",
    OBJECT_VIEW: "VIEW"
  };
  var objtypeName = (arg) => {
    return exports.TYPE_NAMES[arg];
  };
  exports.objtypeName = objtypeName;
  var getConstraintFromConstrType = (type) => {
    switch (type) {
      case "CONSTR_NULL":
        return "NULL";
      case "CONSTR_NOTNULL":
        return "NOT NULL";
      case "CONSTR_DEFAULT":
        return "DEFAULT";
      case "CONSTR_CHECK":
        return "CHECK";
      case "CONSTR_PRIMARY":
        return "PRIMARY KEY";
      case "CONSTR_UNIQUE":
        return "UNIQUE";
      case "CONSTR_EXCLUSION":
        return "EXCLUDE";
      case "CONSTR_FOREIGN":
        return "REFERENCES";
      case "CONSTR_GENERATED":
        return "GENERATED";
      case "CONSTR_IDENTITY":
        return "IDENTITY";
      case "CONSTR_ATTR_DEFERRABLE":
      case "CONSTR_ATTR_NOT_DEFERRABLE":
      case "CONSTR_ATTR_DEFERRED":
      case "CONSTR_ATTR_IMMEDIATE":
      default:
        return fail(type, "ConstrType");
    }
  };
  exports.getConstraintFromConstrType = getConstraintFromConstrType;
});

// node_modules/pgsql-enums/main/index.js
var require_main = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getEnum = exports.nodes = exports.toStr = exports.toInt = undefined;
  var enums2int_json_1 = __importDefault(require_enums2int());
  exports.toInt = enums2int_json_1.default;
  var enums2str_json_1 = __importDefault(require_enums2str());
  exports.toStr = enums2str_json_1.default;
  var nodes_json_1 = __importDefault(require_nodes());
  exports.nodes = nodes_json_1.default;
  var getEnum = (enumType, key) => {
    if (typeof key === "number") {
      return enums2str_json_1.default[enumType][key];
    } else {
      return enums2int_json_1.default[enumType][key];
    }
  };
  exports.getEnum = getEnum;
  __exportStar(require_types(), exports);
});

// node_modules/dotty/lib/index.js
var require_lib = __commonJS((exports, module) => {
  var exists = exports.exists = function exists(object, path) {
    if (typeof path === "string") {
      path = path.split(".");
    }
    if (!(path instanceof Array) || path.length === 0) {
      return false;
    }
    path = path.slice();
    var key = path.shift();
    if (typeof object !== "object" || object === null) {
      return false;
    }
    if (path.length === 0) {
      return Object.hasOwnProperty.apply(object, [key]);
    } else {
      return exists(object[key], path);
    }
  };
  var get = exports.get = function get(object, path) {
    if (typeof path === "string") {
      path = path.split(".");
    }
    if (!(path instanceof Array) || path.length === 0) {
      return;
    }
    path = path.slice();
    var key = path.shift();
    if (typeof object !== "object" || object === null) {
      return;
    }
    if (path.length === 0) {
      return object[key];
    }
    if (path.length) {
      return get(object[key], path);
    }
  };
  var search = exports.search = function search(object, path, action) {
    if (typeof path === "string") {
      path = path.split(".");
    }
    if (!(path instanceof Array) || path.length === 0) {
      return;
    }
    path = path.slice();
    var key = path.shift();
    if (typeof object !== "object" || object === null) {
      return;
    }
    if (key === "*") {
      key = ".*";
    }
    if (typeof key === "string") {
      key = new RegExp(key);
    }
    if (path.length === 0) {
      return Object.keys(object).filter(key.test.bind(key)).map(function(k) {
        var value = object[k];
        if (action) {
          action(value, object, k);
        }
        return value;
      });
    } else {
      return Array.prototype.concat.apply([], Object.keys(object).filter(key.test.bind(key)).map(function(k) {
        return search(object[k], path, action);
      }));
    }
  };
  var removeSearch = exports.removeSearch = function removeSearch(object, path) {
    search(object, path, function(value, object2, key) {
      delete object2[key];
    });
    return object;
  };
  var put = exports.put = function put(object, path, value) {
    if (typeof path === "string") {
      path = path.split(".");
    }
    if (!(path instanceof Array) || path.length === 0) {
      return false;
    }
    path = path.slice();
    var key = "" + path.shift();
    if (typeof object !== "object" || object === null || key === "__proto__") {
      return false;
    }
    if (path.length === 0) {
      object[key] = value;
    } else {
      if (typeof object[key] === "undefined") {
        object[key] = {};
      }
      if (typeof object[key] !== "object" || object[key] === null) {
        return false;
      }
      return put(object[key], path, value);
    }
    return true;
  };
  var remove = exports.remove = function remove(object, path, value) {
    if (typeof path === "string") {
      path = path.split(".");
    }
    if (!(path instanceof Array) || path.length === 0) {
      return false;
    }
    path = path.slice();
    var key = path.shift();
    if (typeof object !== "object" || object === null) {
      return false;
    }
    if (path.length === 0) {
      if (!Object.hasOwnProperty.call(object, key)) {
        return false;
      }
      delete object[key];
      return true;
    } else {
      return remove(object[key], path, value);
    }
  };
  var deepKeys = exports.deepKeys = function deepKeys(object, options, prefix) {
    options = options || {};
    if (typeof prefix === "undefined") {
      prefix = [];
    }
    var keys = [];
    for (var k in object) {
      if (!Object.hasOwnProperty.call(object, k)) {
        continue;
      }
      if (!options.leavesOnly || typeof object[k] !== "object") {
        keys.push(prefix.concat([k]));
      }
      if (typeof object[k] === "object" && object[k] !== null) {
        keys = keys.concat(deepKeys(object[k], { leavesOnly: options.leavesOnly }, prefix.concat([k])));
      }
    }
    if (options.asStrings) {
      keys = keys.map(function(e) {
        return e.join(".");
      });
    }
    return keys;
  };
});

// node_modules/pgsql-deparser/main/deparser.js
var require_deparser = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var util_1 = __require("util");
  var pgsql_enums_1 = require_main();
  var TAB_CHAR = "\t";
  var NEWLINE_CHAR = "\n";
  var isEmptyObject = (obj) => {
    return !obj || typeof obj === "object" && !Object.keys(obj).length;
  };
  var dotty = require_lib();
  var fail = (type, node) => {
    throw new Error((0, util_1.format)("Unhandled %s node: %s", type, JSON.stringify(node)));
  };
  var RESERVED_WORDS = new Set([
    "all",
    "analyse",
    "analyze",
    "and",
    "any",
    "array",
    "as",
    "asc",
    "asymmetric",
    "both",
    "case",
    "cast",
    "check",
    "collate",
    "column",
    "constraint",
    "create",
    "current_catalog",
    "current_date",
    "current_role",
    "current_time",
    "current_timestamp",
    "current_user",
    "default",
    "deferrable",
    "desc",
    "distinct",
    "do",
    "else",
    "end",
    "except",
    "false",
    "fetch",
    "for",
    "foreign",
    "from",
    "grant",
    "group",
    "having",
    "in",
    "initially",
    "intersect",
    "into",
    "lateral",
    "leading",
    "limit",
    "localtime",
    "localtimestamp",
    "not",
    "null",
    "offset",
    "on",
    "only",
    "or",
    "order",
    "placing",
    "primary",
    "references",
    "returning",
    "select",
    "session_user",
    "some",
    "symmetric",
    "table",
    "then",
    "to",
    "trailing",
    "true",
    "union",
    "unique",
    "user",
    "using",
    "variadic",
    "when",
    "where",
    "window",
    "with"
  ]);
  var LOCK_MODES = {
    1: "ACCESS SHARE",
    2: "ROW SHARE",
    3: "ROW EXCLUSIVE",
    4: "SHARE UPDATE EXCLUSIVE",
    5: "SHARE",
    6: "SHARE ROW",
    7: "EXCLUSIVE",
    8: "ACCESS EXCLUSIVE"
  };
  var isReserved = (value) => RESERVED_WORDS.has(value.toLowerCase());
  var needsQuotesRegex = /[a-z]+[\W\w]*[A-Z]+|[A-Z]+[\W\w]*[a-z]+|\W/;
  var needsQuotes = (value) => needsQuotesRegex.test(value) || isReserved(value);
  var compact = (o) => o.filter((e) => {
    const isFalsy = !e;
    return !isFalsy && e.toString().length;
  });
  var flatten = (o) => {
    const flattened = [];
    for (let i = 0;i < o.length; i++) {
      if (Array.isArray(o[i])) {
        for (let j = 0;j < o[i].length; j++) {
          flattened.push(o[i][j]);
        }
      } else {
        flattened.push(o[i]);
      }
    }
    return flattened;
  };
  var inverted = (o) => {
    const objInverted = {};
    const keys = Object.keys(o);
    for (let i = 0;i < keys.length; i++) {
      const key = keys[i];
      objInverted[o[key]] = key;
    }
    return objInverted;
  };
  var parens = (string) => {
    return "(" + string + ")";
  };
  var indent = (text, count = 1) => text;
  var unwrapList = (obj) => obj !== undefined && obj.List !== undefined ? obj.List.items : obj;

  class Deparser {
    static deparse(query, opts) {
      return new Deparser(query, opts).deparseQuery();
    }
    constructor(tree, opts = {}) {
      this.tree = tree;
      if (opts.hasOwnProperty("newline")) {
        NEWLINE_CHAR = opts.newline;
      }
      if (opts.hasOwnProperty("tab")) {
        TAB_CHAR = opts.tab;
      }
      if (!Array.isArray(this.tree))
        this.tree = [this.tree];
    }
    deparseQuery() {
      return this.tree.map((node) => this.deparse(node)).join(NEWLINE_CHAR + NEWLINE_CHAR);
    }
    deparseNodes(nodes, context) {
      return unwrapList(nodes).map((node) => {
        const unwrapped = unwrapList(node);
        return Array.isArray(unwrapped) ? this.list(unwrapped, ", ", "", context) : this.deparse(node, context);
      });
    }
    deparseReturningList(list, context) {
      return unwrapList(list).map((returning) => this.deparse(returning.ResTarget.val, context) + (returning.ResTarget.name ? " AS " + this.quote(returning.ResTarget.name) : "")).join(",");
    }
    list(nodes, separator = ", ", prefix = "", context) {
      if (!nodes) {
        return "";
      }
      return this.deparseNodes(nodes, context).map((l) => `${prefix}${l}`).join(separator);
    }
    listQuotes(nodes, separator = ", ") {
      return this.list(unwrapList(nodes), separator).split(separator).map((a) => this.quote(a.trim())).join(separator);
    }
    quote(value) {
      if (value == null) {
        return null;
      }
      const unwrapped = unwrapList(value);
      if (Array.isArray(unwrapped)) {
        return unwrapped.map((o) => this.quote(o));
      }
      if (needsQuotes(value)) {
        return '"' + value + '"';
      }
      return value;
    }
    escape(literal) {
      return "'" + literal.replace(/'/g, "''") + "'";
    }
    getPgCatalogTypeName(typeName, size) {
      switch (typeName) {
        case "bpchar":
          if (size != null) {
            return "char";
          }
          return "pg_catalog.bpchar";
        case "varchar":
          return "varchar";
        case "numeric":
          return "numeric";
        case "bool":
          return "boolean";
        case "int2":
          return "smallint";
        case "int4":
          return "int";
        case "int8":
          return "bigint";
        case "real":
          return "pg_catalog.float4";
        case "time":
          return "time";
        case "timestamp":
          return "timestamp";
        case "interval":
          return "interval";
        case "bit":
          return "bit";
        default:
          return "pg_catalog." + typeName;
      }
    }
    type(names, args) {
      const catalogAndType = unwrapList(names).map((name) => this.deparse(name));
      const catalog = catalogAndType[0];
      const type = catalogAndType[1];
      const mods = (name, size) => {
        if (size != null) {
          return name + "(" + size + ")";
        }
        return name;
      };
      if (catalog === "char" && !type) {
        return mods('"char"', args);
      }
      if (catalog === "pg_catalog" && type === "char") {
        return mods('pg_catalog."char"', args);
      }
      if (catalog !== "pg_catalog") {
        return mods(this.listQuotes(names, "."), args);
      }
      const res = this.getPgCatalogTypeName(type, args);
      return mods(res, args);
    }
    deparse(item, context) {
      if (item == null) {
        return null;
      }
      if (typeof item === "number" || item instanceof Number) {
        return item;
      }
      const type = Object.keys(item)[0];
      const node = item[type];
      if (this[type] == null) {
        throw new Error(type + " is not implemented: " + JSON.stringify(node));
      }
      return this[type](node, context);
    }
    RawStmt(node, context = {}) {
      if (node.stmt_len) {
        return this.deparse(node.stmt, context) + ";";
      }
      return this.deparse(node.stmt, context);
    }
    RuleStmt(node, context = {}) {
      const output = [];
      output.push("CREATE");
      output.push("RULE");
      if (node.rulename === "_RETURN") {
        output.push('"_RETURN"');
      } else {
        output.push(node.rulename);
      }
      output.push("AS");
      output.push("ON");
      switch (node.event) {
        case "CMD_SELECT":
          output.push("SELECT");
          break;
        case "CMD_UPDATE":
          output.push("UPDATE");
          break;
        case "CMD_INSERT":
          output.push("INSERT");
          break;
        case "CMD_DELETE":
          output.push("DELETE");
          break;
        default:
          throw new Error("event type not yet implemented for RuleStmt");
      }
      output.push("TO");
      output.push(this.RangeVar(node.relation, context));
      if (node.whereClause) {
        output.push("WHERE");
        output.push(this.deparse(node.whereClause, context));
      }
      output.push("DO");
      if (node.instead) {
        output.push("INSTEAD");
      }
      const actions = unwrapList(node.actions);
      if (!actions || !actions.length) {
        output.push("NOTHING");
      } else {
        output.push(this.deparse(actions[0], context));
      }
      return output.join(" ");
    }
    A_Expr(node, context = {}) {
      const output = [];
      const nodeName = unwrapList(node.name);
      switch (node.kind) {
        case "AEXPR_OP": {
          let operator;
          if (node.lexpr) {
            if (node.lexpr !== undefined && node.lexpr.A_Expr !== undefined) {
              output.push(parens(this.deparse(node.lexpr, context)));
            } else {
              output.push(this.deparse(node.lexpr, context));
            }
          }
          if (nodeName.length > 1) {
            const schema = this.deparse(nodeName[0], context);
            operator = this.deparse(nodeName[1], context);
            output.push(`OPERATOR(${schema}.${operator})`);
          } else {
            operator = this.deparse(nodeName[0], context);
            output.push(operator);
          }
          if (node.rexpr) {
            if (node.rexpr !== undefined && node.rexpr.A_Expr !== undefined) {
              output.push(parens(this.deparse(node.rexpr, context)));
            } else {
              output.push(this.deparse(node.rexpr, context));
            }
          }
          if (output.length === 2) {
            return output.join("");
          }
          if (["->", "->>"].includes(operator)) {
            return output.join("");
          }
          return output.join(" ");
        }
        case "AEXPR_OP_ANY":
          output.push(this.deparse(node.lexpr, context));
          output.push((0, util_1.format)("ANY (%s)", this.deparse(node.rexpr, context)));
          return output.join(` ${this.deparse(nodeName[0], context)} `);
        case "AEXPR_OP_ALL":
          output.push(this.deparse(node.lexpr, context));
          output.push((0, util_1.format)("ALL (%s)", this.deparse(node.rexpr, context)));
          return output.join(` ${this.deparse(nodeName[0], context)} `);
        case "AEXPR_DISTINCT":
          return (0, util_1.format)("%s IS DISTINCT FROM %s", this.deparse(node.lexpr, context), this.deparse(node.rexpr, context));
        case "AEXPR_NOT_DISTINCT":
          return (0, util_1.format)("%s IS NOT DISTINCT FROM %s", this.deparse(node.lexpr, context), this.deparse(node.rexpr, context));
        case "AEXPR_NULLIF":
          return (0, util_1.format)("NULLIF(%s, %s)", this.deparse(node.lexpr, context), this.deparse(node.rexpr, context));
        case "AEXPR_OF": {
          const op = nodeName[0].String.str === "=" ? "IS OF" : "IS NOT OF";
          return (0, util_1.format)("%s %s (%s)", this.deparse(node.lexpr, context), op, this.list(node.rexpr, ", ", "", context));
        }
        case "AEXPR_IN": {
          const operator = nodeName[0].String.str === "=" ? "IN" : "NOT IN";
          return (0, util_1.format)("%s %s (%s)", this.deparse(node.lexpr, context), operator, this.list(node.rexpr, ", ", "", context));
        }
        case "AEXPR_LIKE":
          output.push(this.deparse(node.lexpr, context));
          if (nodeName[0].String.str === "!~~") {
            output.push((0, util_1.format)("NOT LIKE (%s)", this.deparse(node.rexpr, context)));
          } else {
            output.push((0, util_1.format)("LIKE (%s)", this.deparse(node.rexpr, context)));
          }
          return output.join(" ");
        case "AEXPR_ILIKE":
          output.push(this.deparse(node.lexpr, context));
          if (nodeName[0].String.str === "!~~*") {
            output.push((0, util_1.format)("NOT ILIKE (%s)", this.deparse(node.rexpr, context)));
          } else {
            output.push((0, util_1.format)("ILIKE (%s)", this.deparse(node.rexpr, context)));
          }
          return output.join(" ");
        case "AEXPR_SIMILAR":
          output.push(this.deparse(node.lexpr, context));
          if (nodeName[0].String.str === "~") {
            if (unwrapList(node.rexpr.FuncCall.args).length > 1) {
              output.push((0, util_1.format)("SIMILAR TO %s ESCAPE %s", this.deparse(unwrapList(node.rexpr.FuncCall.args)[0], context), this.deparse(unwrapList(node.rexpr.FuncCall.args)[1], context)));
            } else {
              output.push((0, util_1.format)("SIMILAR TO %s", this.deparse(unwrapList(node.rexpr.FuncCall.args)[0], context)));
            }
          } else {
            if (unwrapList(node.rexpr.FuncCall.args).length > 1) {
              output.push((0, util_1.format)("NOT SIMILAR TO %s ESCAPE %s", this.deparse(unwrapList(node.rexpr.FuncCall.args)[0], context), this.deparse(unwrapList(node.rexpr.FuncCall.args)[1], context)));
            } else {
              output.push((0, util_1.format)("NOT SIMILAR TO %s", this.deparse(unwrapList(node.rexpr.FuncCall.args)[0], context)));
            }
          }
          return output.join(" ");
        case "AEXPR_BETWEEN":
          output.push(this.deparse(node.lexpr, context));
          output.push((0, util_1.format)("BETWEEN %s AND %s", this.deparse(unwrapList(node.rexpr)[0], context), this.deparse(unwrapList(node.rexpr)[1], context)));
          return output.join(" ");
        case "AEXPR_NOT_BETWEEN":
          output.push(this.deparse(node.lexpr, context));
          output.push((0, util_1.format)("NOT BETWEEN %s AND %s", this.deparse(unwrapList(node.rexpr)[0], context), this.deparse(unwrapList(node.rexpr)[1], context)));
          return output.join(" ");
        case "AEXPR_BETWEEN_SYM":
          output.push(this.deparse(node.lexpr, context));
          output.push((0, util_1.format)("BETWEEN SYMMETRIC %s AND %s", this.deparse(unwrapList(node.rexpr)[0], context), this.deparse(unwrapList(node.rexpr)[1], context)));
          return output.join(" ");
        case "AEXPR_NOT_BETWEEN_SYM":
          output.push(this.deparse(node.lexpr, context));
          output.push((0, util_1.format)("NOT BETWEEN SYMMETRIC %s AND %s", this.deparse(unwrapList(node.rexpr)[0], context), this.deparse(unwrapList(node.rexpr)[1], context)));
          return output.join(" ");
        default:
          return fail("A_Expr", node);
      }
    }
    Alias(node, context = {}) {
      const name = node.aliasname;
      const output = ["AS"];
      if (node.colnames) {
        output.push(this.quote(name) + parens(this.listQuotes(node.colnames)));
      } else {
        output.push(this.quote(name));
      }
      return output.join(" ");
    }
    A_ArrayExpr(node) {
      return (0, util_1.format)("ARRAY[%s]", this.list(node.elements));
    }
    A_Const(node, context = {}) {
      if (node.val.String) {
        return this.escape(this.deparse(node.val, context));
      }
      return this.deparse(node.val, context);
    }
    A_Indices(node, context = {}) {
      if (node.lidx) {
        return (0, util_1.format)("[%s:%s]", this.deparse(node.lidx, context), this.deparse(node.uidx, context));
      }
      return (0, util_1.format)("[%s]", this.deparse(node.uidx, context));
    }
    A_Indirection(node, context = {}) {
      const output = [`(${this.deparse(node.arg, context)})`];
      const indirection = unwrapList(node.indirection);
      for (let i = 0;i < indirection.length; i++) {
        const subnode = indirection[i];
        if (subnode.String || subnode.A_Star) {
          const value = subnode.A_Star ? "*" : this.quote(subnode.String.str);
          output.push(`.${value}`);
        } else {
          output.push(this.deparse(subnode, context));
        }
      }
      return output.join("");
    }
    A_Star(node) {
      return "*";
    }
    BitString(node) {
      const prefix = node.str[0];
      return `${prefix}'${node.str.substring(1)}'`;
    }
    BoolExpr(node, context = {}) {
      let fmt_str = "%s";
      if (context.bool) {
        fmt_str = "(%s)";
      }
      const ctx = Object.assign({}, context);
      ctx.bool = true;
      switch (node.boolop) {
        case "AND_EXPR":
          return (0, util_1.format)(fmt_str, this.list(node.args, " AND ", "", ctx));
        case "OR_EXPR":
          return (0, util_1.format)(fmt_str, this.list(node.args, " OR ", "", ctx));
        case "NOT_EXPR":
          return (0, util_1.format)("NOT (%s)", this.deparse(unwrapList(node.args)[0], context));
        default:
          return fail("BoolExpr", node);
      }
    }
    BooleanTest(node, context = {}) {
      const output = [];
      const ctx = Object.assign({}, context);
      ctx.bool = true;
      output.push(this.deparse(node.arg, ctx));
      switch (node.booltesttype) {
        case "IS_TRUE":
          output.push("IS TRUE");
          break;
        case "IS_NOT_TRUE":
          output.push("IS NOT TRUE");
          break;
        case "IS_FALSE":
          output.push("IS FALSE");
          break;
        case "IS_NOT_FALSE":
          output.push("IS NOT FALSE");
          break;
        case "IS_UNKNOWN":
          output.push("IS UNKNOWN");
          break;
        case "IS_NOT_UNKNOWN":
          output.push("IS NOT UNKNOWN");
          break;
      }
      return output.join(" ");
    }
    CaseExpr(node, context = {}) {
      const output = ["CASE"];
      if (node.arg) {
        output.push(this.deparse(node.arg, context));
      }
      const args = unwrapList(node.args);
      for (let i = 0;i < args.length; i++) {
        output.push(this.deparse(args[i], context));
      }
      if (node.defresult) {
        output.push("ELSE");
        output.push(this.deparse(node.defresult, context));
      }
      output.push("END");
      return output.join(" ");
    }
    CoalesceExpr(node, context = {}) {
      return (0, util_1.format)("COALESCE(%s)", this.list(node.args, ", ", "", context));
    }
    CollateClause(node, context = {}) {
      const output = [];
      if (node.arg) {
        output.push(this.deparse(node.arg, context));
      }
      output.push("COLLATE");
      if (node.collname) {
        output.push(this.quote(this.deparseNodes(node.collname, context)));
      }
      return output.join(" ");
    }
    CompositeTypeStmt(node, context = {}) {
      const output = [];
      output.push("CREATE TYPE");
      output.push(this.RangeVar(node.typevar, context));
      output.push("AS");
      output.push("(");
      output.push(this.list(node.coldeflist, `,${NEWLINE_CHAR}`, TAB_CHAR, context));
      output.push(")");
      return output.join(" ");
    }
    RenameStmt(node, context = {}) {
      const output = [];
      if (node.renameType === "OBJECT_FUNCTION" || node.renameType === "OBJECT_FOREIGN_TABLE" || node.renameType === "OBJECT_FDW" || node.renameType === "OBJECT_FOREIGN_SERVER") {
        output.push("ALTER");
        output.push((0, pgsql_enums_1.objtypeName)(node.renameType));
        if (node.missing_ok) {
          output.push("IF EXISTS");
        }
        output.push(this.deparse(node.object, context));
        output.push("RENAME");
        output.push("TO");
        output.push(this.quote(node.newname));
      } else if (node.renameType === "OBJECT_ATTRIBUTE") {
        output.push("ALTER");
        output.push((0, pgsql_enums_1.objtypeName)(node.relationType));
        if (node.missing_ok) {
          output.push("IF EXISTS");
        }
        output.push(this.RangeVar(node.relation, context));
        output.push("RENAME");
        output.push((0, pgsql_enums_1.objtypeName)(node.renameType));
        output.push(this.quote(node.subname));
        output.push("TO");
        output.push(this.quote(node.newname));
      } else if (node.renameType === "OBJECT_DOMAIN" || node.renameType === "OBJECT_TYPE") {
        output.push("ALTER");
        output.push((0, pgsql_enums_1.objtypeName)(node.renameType));
        if (node.missing_ok) {
          output.push("IF EXISTS");
        }
        const typObj = {
          TypeName: {
            names: node.object
          }
        };
        output.push(this.deparse(typObj, context));
        output.push("RENAME");
        output.push("TO");
        output.push(this.quote(node.newname));
      } else if (node.renameType === "OBJECT_SCHEMA") {
        output.push("ALTER");
        output.push((0, pgsql_enums_1.objtypeName)(node.renameType));
        if (node.missing_ok) {
          output.push("IF EXISTS");
        }
        output.push(this.quote(node.subname));
        output.push("RENAME");
        output.push("TO");
        output.push(this.quote(node.newname));
      } else if (node.renameType === "OBJECT_DOMCONSTRAINT") {
        output.push("ALTER");
        output.push("DOMAIN");
        if (node.missing_ok) {
          output.push("IF EXISTS");
        }
        const typObj = {
          TypeName: {
            names: node.object
          }
        };
        output.push(this.deparse(typObj, context));
        output.push("RENAME CONSTRAINT");
        output.push(this.quote(node.subname));
        output.push("TO");
        output.push(this.quote(node.newname));
      } else {
        output.push("ALTER");
        output.push("TABLE");
        if (node.missing_ok) {
          output.push("IF EXISTS");
        }
        output.push(this.RangeVar(node.relation, context));
        output.push("RENAME");
        output.push(this.quote(node.subname));
        output.push("TO");
        output.push(this.quote(node.newname));
      }
      if (node.behavior === "DROP_CASCADE") {
        output.push("CASCADE");
      }
      return output.join(" ");
    }
    AlterOwnerStmt(node, context = {}) {
      const output = [];
      output.push("ALTER");
      output.push((0, pgsql_enums_1.objtypeName)(node.objectType));
      const unwrapped = unwrapList(node.object);
      if (Array.isArray(unwrapped)) {
        output.push(this.listQuotes(unwrapped, "."));
      } else {
        output.push(this.deparse(node.object, context));
      }
      output.push("OWNER TO");
      output.push(this.RoleSpec(node.newowner, context));
      return output.join(" ");
    }
    AlterObjectSchemaStmt(node, context = {}) {
      const output = [];
      if (node.objectType === "OBJECT_TABLE") {
        output.push("ALTER");
        output.push((0, pgsql_enums_1.objtypeName)(node.objectType));
        if (node.missing_ok) {
          output.push("IF EXISTS");
        }
        output.push(this.RangeVar(node.relation, context));
        output.push("SET SCHEMA");
        output.push(this.quote(node.newschema));
      } else {
        output.push("ALTER");
        output.push((0, pgsql_enums_1.objtypeName)(node.objectType));
        if (node.missing_ok) {
          output.push("IF EXISTS");
        }
        const unwrapped = unwrapList(node.object);
        if (Array.isArray(unwrapped)) {
          output.push(this.listQuotes(unwrapped, "."));
        } else {
          output.push(this.deparse(node.object, context));
        }
        output.push("SET SCHEMA");
        output.push(this.quote(node.newschema));
      }
      return output.join(" ");
    }
    ColumnDef(node, context = {}) {
      const output = [this.quote(node.colname)];
      output.push(this.TypeName(node.typeName, context));
      if (node.raw_default) {
        output.push("USING");
        output.push(this.deparse(node.raw_default, context));
      }
      if (node.constraints) {
        output.push(this.list(node.constraints, " ", "", context));
      }
      if (node.collClause) {
        output.push("COLLATE");
        const str = unwrapList(node.collClause.collname)[0].String.str;
        output.push(this.quote(str));
      }
      return compact(output).join(" ");
    }
    SQLValueFunction(node) {
      if (node.op === "SVFOP_CURRENT_DATE") {
        return "CURRENT_DATE";
      }
      if (node.op === "SVFOP_CURRENT_TIMESTAMP") {
        return "CURRENT_TIMESTAMP";
      }
      if (node.op === "SVFOP_CURRENT_USER") {
        return "CURRENT_USER";
      }
      if (node.op === "SVFOP_SESSION_USER") {
        return "SESSION_USER";
      }
      throw new Error(`op=${node.op} SQLValueFunction not implemented`);
    }
    ColumnRef(node, context = {}) {
      const KEYWORDS = ["old", "new"];
      const fields = unwrapList(node.fields).map((field) => {
        if (field.String) {
          const value = this.deparse(field, context);
          if (context === "trigger" && KEYWORDS.includes(value.toLowerCase())) {
            return value.toUpperCase();
          }
          return this.quote(value);
        }
        return this.deparse(field, context);
      });
      return fields.join(".");
    }
    CommentStmt(node, context = {}) {
      const output = [];
      output.push("COMMENT");
      output.push("ON");
      output.push((0, pgsql_enums_1.objtypeName)(node.objtype));
      const object = unwrapList(node.object);
      if (node.objtype === "OBJECT_CAST") {
        output.push("(");
        output.push(this.deparse(object[0], context));
        output.push("AS");
        output.push(this.deparse(object[1], context));
        output.push(")");
      } else if (node.objtype === "OBJECT_DOMCONSTRAINT") {
        output.push(this.deparse(object[1], context));
        output.push("ON");
        output.push("DOMAIN");
        output.push(this.deparse(object[0], context));
      } else if (node.objtype === "OBJECT_OPCLASS" || node.objtype === "OBJECT_OPFAMILY") {
        output.push(this.deparse(object[1], context));
        output.push("USING");
        output.push(this.deparse(object[0], context));
      } else if (node.objtype === "OBJECT_OPERATOR") {
        output.push(this.deparse(object, "noquotes"));
      } else if (node.objtype === "OBJECT_POLICY") {
        output.push(this.deparse(object[1], context));
        output.push("ON");
        output.push(this.deparse(object[0], context));
      } else if (node.objtype === "OBJECT_ROLE") {
        output.push(this.deparse(object, context));
      } else if (node.objtype === "OBJECT_RULE") {
        output.push(this.deparse(object[1], context));
        output.push("ON");
        output.push(this.deparse(object[0], context));
      } else if (node.objtype === "OBJECT_TABCONSTRAINT") {
        if (object.length === 3) {
          output.push(this.deparse(object[2], context));
          output.push("ON");
          output.push(this.deparse(object[0], context) + "." + this.deparse(object[1], context));
        } else {
          output.push(this.deparse(object[1], context));
          output.push("ON");
          output.push(this.deparse(object[0], context));
        }
      } else if (node.objtype === "OBJECT_TRANSFORM") {
        output.push("FOR");
        output.push(this.deparse(object[0], context));
        output.push("LANGUAGE");
        output.push(this.deparse(object[1], context));
      } else if (node.objtype === "OBJECT_TRIGGER") {
        output.push(this.deparse(object[1], context));
        output.push("ON");
        output.push(this.deparse(object[0], context));
      } else {
        if (node.objtype === "OBJECT_LARGEOBJECT") {
          output.push(dotty.get(node, "object.Integer.ival"));
        } else if (object instanceof Array) {
          output.push(this.listQuotes(object, "."));
        } else {
          output.push(this.deparse(object, context));
        }
        if (node.objargs) {
          output.push("(");
          output.push(this.list(node.objargs, ", ", "", context));
          output.push(")");
        }
      }
      output.push("IS");
      const escapeComment = (str) => {
        return str.replace(/\\/g, "\\");
      };
      if (node.comment) {
        if (/[^a-zA-Z0-9]/.test(node.comment)) {
          output.push(`E'${escapeComment(node.comment)}'`);
        } else {
          output.push(`'${node.comment}'`);
        }
      } else {
        output.push("NULL");
      }
      return output.join(" ");
    }
    CommonTableExpr(node, context = {}) {
      const output = [];
      output.push(node.ctename);
      if (node.aliascolnames) {
        const colnames = this.quote(this.deparseNodes(node.aliascolnames, context));
        output.push(`(${colnames.join(", ")})`);
      }
      output.push("AS");
      if (node.ctematerialized === "CTEMaterializeAlways") {
        output.push("MATERIALIZED");
      } else if (node.ctematerialized === "CTEMaterializeNever") {
        output.push("NOT MATERIALIZED");
      }
      output.push((0, util_1.format)("(%s)", this.deparse(node.ctequery)));
      return output.join(" ");
    }
    DefineStmt(node, context = {}) {
      const output = [];
      output.push("CREATE");
      if (node.replace) {
        output.push("OR REPLACE");
      }
      switch (node.kind) {
        case "OBJECT_AGGREGATE":
          output.push("AGGREGATE");
          break;
        case "OBJECT_OPERATOR":
          output.push("OPERATOR");
          break;
        case "OBJECT_TYPE":
          output.push("TYPE");
          break;
        case "OBJECT_TSPARSER":
          output.push("TEXT SEARCH PARSER");
          break;
        case "OBJECT_TSDICTIONARY":
          output.push("TEXT SEARCH DICTIONARY");
          break;
        case "OBJECT_TSTEMPLATE":
          output.push("TEXT SEARCH TEMPLATE");
          break;
        case "OBJECT_TSCONFIGURATION":
          output.push("TEXT SEARCH CONFIGURATION");
          break;
        case "OBJECT_COLLATION":
          output.push("COLLATION");
          break;
        default:
          throw new Error("DefineStmt not recognized");
      }
      if (node.if_not_exists) {
        output.push("IF NOT EXISTS");
      }
      switch (node.kind) {
        case "OBJECT_AGGREGATE":
          output.push(this.list(node.defnames, ".", "", context));
          break;
        case "OBJECT_OPERATOR":
          output.push(this.list(node.defnames, ".", "", context));
          break;
        case "OBJECT_TYPE":
        case "OBJECT_TSPARSER":
        case "OBJECT_TSDICTIONARY":
        case "OBJECT_TSTEMPLATE":
        case "OBJECT_TSCONFIGURATION":
        case "OBJECT_COLLATION":
          output.push(this.deparse(node.defnames));
          break;
        default:
          throw new Error("DefineStmt not recognized");
      }
      if (!node.oldstyle && node.kind == "OBJECT_AGGREGATE") {
        output.push("(");
        output.push(`${this.listQuotes(node.args[0], ",")}`);
        output.push(")");
      }
      const definition = unwrapList(node.definition);
      if (definition.length > 0) {
        output.push("(");
        for (let n = 0;n < definition.length; n++) {
          const defElement = definition[n].DefElem;
          output.push(defElement.defname);
          if (defElement.arg) {
            output.push("=");
            output.push(this.deparse(defElement.arg));
          }
          if (n !== definition.length - 1) {
            output.push(",");
          }
        }
        output.push(")");
      }
      return output.join(" ");
    }
    DefElem(node, context = {}) {
      if (node.defname === "transaction_isolation") {
        return (0, util_1.format)("ISOLATION LEVEL %s", node.arg.A_Const.val.String.str.toUpperCase());
      }
      if (node.defname === "transaction_read_only") {
        return node.arg.A_Const.val.Integer.ival === 0 ? "READ WRITE" : "READ ONLY";
      }
      if (node.defname === "transaction_deferrable") {
        return node.arg.A_Const.val.Integer.ival === 0 ? "NOT DEFERRABLE" : "DEFERRABLE";
      }
      if (node.defname === "set") {
        return this.deparse(node.arg, context);
      }
      let name = node.defname;
      if (node.defnamespace) {
        name = `${node.defnamespace}.${node.defname}`;
      }
      if (context === "generated" || context === "sequence") {
        switch (name) {
          case "start": {
            const start = this.deparse(node.arg, context);
            return `START WITH ${start}`;
          }
          case "increment": {
            const inc = this.deparse(node.arg, context);
            if (context === "sequence") {
              return `${name} ${this.deparse(node.arg, "simple")}`;
            }
            return `INCREMENT BY ${inc}`;
          }
          case "sequence_name": {
            return `SEQUENCE NAME ${this.listQuotes(node.arg, ".")}`;
          }
          case "cycle": {
            const on = this.deparse(node.arg, context) + "" === "1";
            return on ? "CYCLE" : "NO CYCLE";
          }
          case "minvalue": {
            const off = !node.hasOwnProperty("arg");
            return off ? "NO MINVALUE" : `${name} ${this.deparse(node.arg, "simple")}`;
          }
          case "maxvalue": {
            const off = !node.hasOwnProperty("arg");
            return off ? "NO MAXVALUE" : `${name} ${this.deparse(node.arg, "simple")}`;
          }
          case "owned_by": {
            const output = [];
            unwrapList(node.arg).forEach((opt) => {
              output.push(this.quote(this.deparse(opt, context)));
            });
            return `OWNED BY ${output.join(".")}`;
          }
          case "restart": {
            if (node.arg) {
              return `RESTART WITH ${this.deparse(node.arg, context)}`;
            }
            return `RESTART`;
          }
          default:
            if (node.arg) {
              return `${name} ${this.deparse(node.arg, "simple")}`;
            }
        }
      } else if (context === "explain") {
        if (node.arg) {
          return `${name} ${this.deparse(node.arg)}`;
        }
      } else if (node.arg) {
        return `${name} = ${this.deparse(node.arg, context)}`;
      }
      return name;
    }
    DoStmt(node) {
      return `DO \$\$${NEWLINE_CHAR}  ${dotty.get(node, "args.0.DefElem.arg.String.str").trim()} \$\$`;
    }
    Float(node) {
      if (node.str[0] === "-") {
        return `(${node.str})`;
      }
      return node.str;
    }
    FuncCall(node, context = {}) {
      const output = [];
      let params = [];
      if (node.args) {
        params = unwrapList(node.args).map((item) => {
          return this.deparse(item, context);
        });
      }
      if (node.agg_star) {
        params.push("*");
      }
      const name = this.list(node.funcname, ".", "", context);
      const order = [];
      const withinGroup = node.agg_within_group;
      if (node.agg_order) {
        order.push("ORDER BY");
        order.push(this.list(node.agg_order, ", ", "", context));
      }
      const call = [];
      call.push(name + "(");
      if (node.agg_distinct) {
        call.push("DISTINCT ");
      }
      if (node.func_variadic) {
        params[params.length - 1] = "VARIADIC " + params[params.length - 1];
      }
      call.push(params.join(", "));
      if (order.length && !withinGroup) {
        call.push(" ");
        call.push(order.join(" "));
      }
      call.push(")");
      output.push(compact(call).join(""));
      if (order.length && withinGroup) {
        output.push("WITHIN GROUP");
        output.push(parens(order.join(" ")));
      }
      if (node.agg_filter != null) {
        output.push((0, util_1.format)("FILTER (WHERE %s)", this.deparse(node.agg_filter, context)));
      }
      if (node.over != null) {
        output.push((0, util_1.format)("OVER %s", this.WindowDef(node.over, context)));
      }
      return output.join(" ");
    }
    GroupingFunc(node, context = {}) {
      return "GROUPING(" + this.list(node.args, ", ", "", context) + ")";
    }
    GroupingSet(node, context = {}) {
      switch (node.kind) {
        case "GROUPING_SET_EMPTY":
          return "()";
        case "GROUPING_SET_SIMPLE":
          return fail("GroupingSet", node);
        case "GROUPING_SET_ROLLUP":
          return "ROLLUP (" + this.list(node.content, ", ", "", context) + ")";
        case "GROUPING_SET_CUBE":
          return "CUBE (" + this.list(node.content, ", ", "", context) + ")";
        case "GROUPING_SET_SETS":
          return "GROUPING SETS (" + this.list(node.content, ", ", "", context) + ")";
        default:
          return fail("GroupingSet", node);
      }
    }
    IndexStmt(node, context = {}) {
      const output = [];
      output.push("CREATE");
      if (node.unique) {
        output.push("UNIQUE");
      }
      output.push("INDEX");
      if (node.concurrent) {
        output.push("CONCURRENTLY");
      }
      if (node.idxname) {
        output.push(node.idxname);
      }
      output.push("ON");
      output.push(this.RangeVar(node.relation, context));
      if (node.accessMethod) {
        const accessMethod = node.accessMethod.toUpperCase();
        if (accessMethod !== "BTREE") {
          output.push("USING");
          output.push(accessMethod);
        }
      }
      if (node.indexParams) {
        output.push("(");
        output.push(this.list(node.indexParams, ", ", "", context));
        output.push(")");
      }
      if (node.indexIncludingParams) {
        output.push("INCLUDE (");
        output.push(this.list(node.indexIncludingParams, ", ", "", context));
        output.push(")");
      }
      if (node.whereClause) {
        output.push("WHERE");
        output.push(this.deparse(node.whereClause, context));
      }
      return output.join(" ");
    }
    IndexElem(node, context = {}) {
      const output = [];
      if (node.name) {
        output.push(node.name);
        if (node.ordering === "SORTBY_DESC") {
          output.push("DESC");
        } else if (node.ordering === "SORTBY_ASC") {
          output.push("ASC");
        }
        return output.join(" ");
      }
      if (node.expr) {
        return this.deparse(node.expr, context);
      }
      return fail("IndexElem", node);
    }
    InsertStmt(node, context = {}) {
      const output = [];
      if (node.withClause) {
        output.push(this.WithClause(node.withClause, context));
      }
      output.push("INSERT INTO");
      output.push(this.RangeVar(node.relation, context));
      const cols = unwrapList(node.cols);
      if (cols && cols.length) {
        output.push("(");
        output.push(this.list(cols, ", ", "", context));
        output.push(")");
      }
      if (node.selectStmt) {
        output.push(this.deparse(node.selectStmt, context));
      } else {
        output.push("DEFAULT VALUES");
      }
      if (node.onConflictClause) {
        const clause = node.onConflictClause;
        output.push("ON CONFLICT");
        if (clause.infer.indexElems) {
          output.push("(");
          output.push(this.list(clause.infer.indexElems, ", ", "", context));
          output.push(")");
        } else if (clause.infer.conname) {
          output.push("ON CONSTRAINT");
          output.push(clause.infer.conname);
        }
        switch (clause.action) {
          case "ONCONFLICT_NOTHING":
            output.push("DO NOTHING");
            break;
          case "ONCONFLICT_UPDATE":
            output.push("DO");
            output.push(this.UpdateStmt(clause, context));
            break;
          default:
            throw new Error("unhandled CONFLICT CLAUSE");
        }
      }
      if (node.returningList) {
        output.push("RETURNING");
        output.push(this.deparseReturningList(node.returningList, context));
      }
      return output.join(" ");
    }
    SetToDefault(node) {
      return "DEFAULT";
    }
    MultiAssignRef(node, context = {}) {
      const output = [];
      output.push(this.deparse(node.source, context));
      return output.join(" ");
    }
    DeleteStmt(node, context = {}) {
      const output = [""];
      if (node.withClause) {
        output.push(this.WithClause(node.withClause, context));
      }
      output.push("DELETE");
      output.push("FROM");
      output.push(this.RangeVar(node.relation, context));
      if (node.usingClause) {
        output.push("USING");
        output.push(this.list(node.usingClause, ", ", "", context));
      }
      if (node.whereClause) {
        output.push("WHERE");
        output.push(this.deparse(node.whereClause, context));
      }
      if (node.returningList) {
        output.push("RETURNING");
        output.push(this.deparseReturningList(node.returningList, context));
      }
      return output.join(" ");
    }
    UpdateStmt(node, context = {}) {
      const output = [];
      if (node.withClause) {
        output.push(this.WithClause(node.withClause, context));
      }
      output.push("UPDATE");
      if (node.relation) {
        output.push(this.RangeVar(node.relation, context));
      }
      output.push("SET");
      const targetList = unwrapList(node.targetList);
      if (targetList && targetList.length) {
        if (targetList[0].ResTarget && targetList[0].ResTarget.val && targetList[0].ResTarget.val.MultiAssignRef) {
          output.push("(");
          output.push(targetList.map((target) => target.ResTarget.name).join(","));
          output.push(")");
          output.push("=");
          output.push(this.deparse(targetList[0].ResTarget.val, context));
        } else {
          output.push(targetList.map((target) => this.deparse(target, "update")).join(","));
        }
      }
      if (node.fromClause) {
        output.push("FROM");
        output.push(this.list(node.fromClause, ", ", "", context));
      }
      if (node.whereClause) {
        output.push("WHERE");
        output.push(this.deparse(node.whereClause, context));
      }
      if (node.returningList) {
        output.push("RETURNING");
        output.push(this.deparseReturningList(node.returningList, context));
      }
      return output.join(" ");
    }
    Integer(node, context = {}) {
      if (node.ival < 0 && context !== "simple") {
        return `(${node.ival})`;
      }
      return node.ival.toString();
    }
    IntoClause(node, context = {}) {
      return this.RangeVar(node.rel, context);
    }
    JoinExpr(node, context = {}) {
      const output = [];
      output.push(this.deparse(node.larg, context));
      if (node.isNatural) {
        output.push("NATURAL");
      }
      let join = null;
      switch (true) {
        case (node.jointype === "JOIN_INNER" && node.quals != null):
          join = "INNER JOIN";
          break;
        case (node.jointype === "JOIN_INNER" && !node.isNatural && !(node.quals != null) && !(node.usingClause != null)):
          join = "CROSS JOIN";
          break;
        case node.jointype === "JOIN_INNER":
          join = "JOIN";
          break;
        case node.jointype === "JOIN_LEFT":
          join = "LEFT OUTER JOIN";
          break;
        case node.jointype === "JOIN_FULL":
          join = "FULL OUTER JOIN";
          break;
        case node.jointype === "JOIN_RIGHT":
          join = "RIGHT OUTER JOIN";
          break;
        default:
          fail("JoinExpr", node);
          break;
      }
      output.push(join);
      if (node.rarg) {
        if (node.rarg.JoinExpr != null && !(node.rarg.JoinExpr.alias != null)) {
          output.push(`(${this.deparse(node.rarg, context)})`);
        } else {
          output.push(this.deparse(node.rarg, context));
        }
      }
      if (node.quals) {
        output.push(`ON ${this.deparse(node.quals, context)}`);
      }
      if (node.usingClause) {
        const using = this.quote(this.deparseNodes(node.usingClause, context)).join(", ");
        output.push(`USING (${using})`);
      }
      const wrapped = node.rarg.JoinExpr != null || node.alias ? "(" + output.join(" ") + ")" : output.join(" ");
      if (node.alias) {
        return wrapped + " " + this.Alias(node.alias, context);
      }
      return wrapped;
    }
    LockingClause(node, context = {}) {
      const output = [];
      switch (node.strength) {
        case "LCS_NONE":
          output.push("NONE");
          break;
        case "LCS_FORKEYSHARE":
          output.push("FOR KEY SHARE");
          break;
        case "LCS_FORSHARE":
          output.push("FOR SHARE");
          break;
        case "LCS_FORNOKEYUPDATE":
          output.push("FOR NO KEY UPDATE");
          break;
        case "LCS_FORUPDATE":
          output.push("FOR UPDATE");
          break;
        default:
          return fail("LockingClause", node);
      }
      if (node.lockedRels) {
        output.push("OF");
        output.push(this.list(node.lockedRels, ", ", "", context));
      }
      return output.join(" ");
    }
    LockStmt(node, context = {}) {
      const output = ["LOCK"];
      output.push(this.list(node.relations, ", ", "", { lock: true }));
      output.push("IN");
      output.push(LOCK_MODES[node.mode]);
      output.push("MODE");
      if (node.nowait) {
        output.push("NOWAIT");
      }
      return output.join(" ");
    }
    MinMaxExpr(node, context = {}) {
      const output = [];
      if (node.op === "IS_GREATEST") {
        output.push("GREATEST");
      } else {
        output.push("LEAST");
      }
      output.push(parens(this.list(node.args, ", ", "", context)));
      return output.join("");
    }
    NamedArgExpr(node, context = {}) {
      const output = [];
      output.push(node.name);
      output.push(":=");
      output.push(this.deparse(node.arg, context));
      return output.join(" ");
    }
    Null(node) {
      return "NULL";
    }
    NullTest(node, context = {}) {
      const output = [this.deparse(node.arg, context)];
      if (node.nulltesttype === "IS_NULL") {
        output.push("IS NULL");
      } else if (node.nulltesttype === "IS_NOT_NULL") {
        output.push("IS NOT NULL");
      }
      return output.join(" ");
    }
    ParamRef(node) {
      if (node.number >= 0) {
        return ["$", node.number].join("");
      }
      return "?";
    }
    RangeFunction(node, context = {}) {
      const output = [];
      if (node.lateral) {
        output.push("LATERAL");
      }
      const funcs = [];
      const functions = unwrapList(node.functions);
      for (let i = 0;i < functions.length; i++) {
        const funcCall = unwrapList(functions[i]);
        const call = [this.deparse(funcCall[0], context)];
        const secondFuncCall = unwrapList(funcCall[1]);
        if (secondFuncCall && secondFuncCall.length) {
          call.push((0, util_1.format)("AS (%s)", this.list(secondFuncCall, ", ", "", context)));
        }
        funcs.push(call.join(" "));
      }
      const calls = funcs.join(", ");
      if (node.is_rowsfrom) {
        output.push(`ROWS FROM (${calls})`);
      } else {
        output.push(calls);
      }
      if (node.ordinality) {
        output.push("WITH ORDINALITY");
      }
      if (node.alias) {
        output.push(this.Alias(node.alias, context));
      }
      if (node.coldeflist) {
        const defList = this.list(node.coldeflist, ", ", "", context);
        if (!node.alias) {
          output.push(` AS (${defList})`);
        } else {
          output.push(`(${defList})`);
        }
      }
      return output.join(" ");
    }
    RangeSubselect(node, context = {}) {
      let output = "";
      if (node.lateral) {
        output += "LATERAL ";
      }
      output += parens(this.deparse(node.subquery, context));
      if (node.alias) {
        return output + " " + this.Alias(node.alias, context);
      }
      return output;
    }
    RangeTableSample(node, context = {}) {
      const output = [];
      output.push(this.deparse(node.relation, context));
      output.push("TABLESAMPLE");
      output.push(this.deparse(unwrapList(node.method)[0], context));
      if (node.args) {
        output.push(parens(this.list(node.args, ", ", "", context)));
      }
      if (node.repeatable) {
        output.push("REPEATABLE(" + this.deparse(node.repeatable, context) + ")");
      }
      return output.join(" ");
    }
    RangeVar(node, context = {}) {
      const output = [];
      if (node.inhOpt === 0) {
        output.push("ONLY");
      }
      if (!node.inh && (context.lock || context === "truncate")) {
        output.push("ONLY");
      }
      if (node.relpersistence === "u") {
        output.push("UNLOGGED");
      }
      if (node.relpersistence === "t" && context !== "view") {
        output.push("TEMPORARY TABLE");
      }
      if (node.schemaname != null) {
        output.push(`${this.quote(node.schemaname)}.${this.quote(node.relname)}`);
      } else {
        output.push(this.quote(node.relname));
      }
      if (node.alias) {
        output.push(this.Alias(node.alias, context));
      }
      return output.join(" ");
    }
    ResTarget(node, context = {}) {
      if (context === "select") {
        return compact([
          this.deparse(node.val, context),
          this.quote(node.name)
        ]).join(" AS ");
      } else if (context === "update") {
        return compact([node.name, this.deparse(node.val, context)]).join(" = ");
      } else if (!(node.val != null)) {
        return this.quote(node.name);
      }
      return fail("ResTarget", node);
    }
    RowExpr(node, context = {}) {
      if (node.row_format === "COERCE_IMPLICIT_CAST") {
        return parens(this.list(node.args, ", ", "", context));
      }
      return (0, util_1.format)("ROW(%s)", this.list(node.args, ", ", "", context));
    }
    ExplainStmt(node, context = {}) {
      const output = [];
      output.push("EXPLAIN");
      if (node.options) {
        output.push("(");
        output.push(this.list(node.options, ", ", "", "explain"));
        output.push(")");
      }
      output.push(this.deparse(node.query, context));
      return output.join(" ");
    }
    SelectStmt(node, context = {}) {
      const output = [];
      if (node.withClause) {
        output.push(this.WithClause(node.withClause, context));
      }
      if (node.op === "SETOP_NONE") {
        if (node.valuesLists == null) {
          output.push("SELECT");
        }
      } else {
        output.push(parens(this.SelectStmt(node.larg, context)));
        switch (node.op) {
          case "SETOP_NONE":
            output.push("NONE");
            break;
          case "SETOP_UNION":
            output.push("UNION");
            break;
          case "SETOP_INTERSECT":
            output.push("INTERSECT");
            break;
          case "SETOP_EXCEPT":
            output.push("EXCEPT");
            break;
          default:
            throw new Error("bad SelectStmt op");
        }
        if (node.all) {
          output.push("ALL");
        }
        output.push(parens(this.SelectStmt(node.rarg, context)));
      }
      if (node.distinctClause) {
        const distinctClause = unwrapList(node.distinctClause);
        if (!isEmptyObject(distinctClause[0])) {
          output.push("DISTINCT ON");
          const clause = distinctClause.map((e) => this.deparse(e, "select")).join(`,${NEWLINE_CHAR}`);
          output.push(`(${clause})`);
        } else {
          output.push("DISTINCT");
        }
      }
      if (node.targetList) {
        output.push(indent(unwrapList(node.targetList).map((e) => this.deparse(e, "select")).join(`,${NEWLINE_CHAR}`)));
      }
      if (node.intoClause) {
        output.push("INTO");
        output.push(indent(this.IntoClause(node.intoClause, context)));
      }
      if (node.fromClause) {
        output.push("FROM");
        output.push(indent(unwrapList(node.fromClause).map((e) => this.deparse(e, "from")).join(`,${NEWLINE_CHAR}`)));
      }
      if (node.whereClause) {
        output.push("WHERE");
        output.push(indent(this.deparse(node.whereClause, context)));
      }
      if (node.valuesLists) {
        output.push("VALUES");
        const lists = unwrapList(node.valuesLists).map((list) => {
          return `(${this.list(list, ", ", "", context)})`;
        });
        output.push(lists.join(", "));
      }
      if (node.groupClause) {
        output.push("GROUP BY");
        output.push(indent(unwrapList(node.groupClause).map((e) => this.deparse(e, "group")).join(`,${NEWLINE_CHAR}`)));
      }
      if (node.havingClause) {
        output.push("HAVING");
        output.push(indent(this.deparse(node.havingClause, context)));
      }
      if (node.windowClause) {
        output.push("WINDOW");
        const windows = [];
        const windowClause = unwrapList(node.windowClause);
        for (let i = 0;i < windowClause.length; i++) {
          const w = windowClause[i];
          const window = [];
          if (w.WindowDef.name) {
            window.push(this.quote(w.WindowDef.name) + " AS");
          }
          window.push(parens(this.deparse(w, "window")));
          windows.push(window.join(" "));
        }
        output.push(windows.join(", "));
      }
      if (node.sortClause) {
        output.push("ORDER BY");
        output.push(indent(unwrapList(node.sortClause).map((e) => this.deparse(e, "sort")).join(`,${NEWLINE_CHAR}`)));
      }
      if (node.limitCount) {
        output.push("LIMIT");
        output.push(indent(this.deparse(node.limitCount, context)));
      }
      if (node.limitOffset) {
        output.push("OFFSET");
        output.push(indent(this.deparse(node.limitOffset, context)));
      }
      if (node.lockingClause) {
        node.lockingClause.forEach((item) => {
          return output.push(this.deparse(item, context));
        });
      }
      return output.join(" ");
    }
    TruncateStmt(node, context = {}) {
      const output = ["TRUNCATE TABLE"];
      output.push(this.list(node.relations, ", ", "", "truncate"));
      if (node.restart_seqs) {
        output.push("RESTART IDENTITY");
      }
      if (node.behavior === "DROP_CASCADE") {
        output.push("CASCADE");
      }
      return output.join(" ");
    }
    AlterDefaultPrivilegesStmt(node, context = {}) {
      const output = [];
      output.push("ALTER DEFAULT PRIVILEGES");
      const options = unwrapList(dotty.get(node, "options"));
      if (options) {
        const elem = options.find((el) => el.hasOwnProperty("DefElem"));
        const elemDefElemArg = unwrapList(elem.DefElem.arg);
        if (elem.DefElem.defname === "schemas") {
          output.push("IN SCHEMA");
          output.push(elemDefElemArg[0].String.str);
        }
        if (elem.DefElem.defname === "roles") {
          output.push("FOR ROLE");
          const roleSpec = elemDefElemArg[0];
          output.push(this.deparse(roleSpec, context));
        }
        output.push(NEWLINE_CHAR);
      }
      output.push(this.GrantStmt(node.action, context));
      return output.join(" ");
    }
    AlterTableStmt(node, context = {}) {
      const output = [];
      const ctx = Object.assign({}, context);
      output.push("ALTER");
      if (node.relkind === "OBJECT_TABLE") {
        output.push("TABLE");
        const inh = dotty.get(node, "relation.inh");
        if (!inh) {
          output.push("ONLY");
        }
      } else if (node.relkind === "OBJECT_TYPE") {
        output.push("TYPE");
      } else {
        fail("AlterTableStmt", node);
      }
      if (node.missing_ok) {
        output.push("IF EXISTS");
      }
      ctx.alterType = node.relkind;
      output.push(this.RangeVar(node.relation, ctx));
      output.push(this.list(node.cmds, ", ", "", ctx));
      return output.join(" ");
    }
    AlterTableCmd(node, context = {}) {
      const output = [];
      let subType = "COLUMN";
      if (context && context.alterType === "OBJECT_TYPE") {
        subType = "ATTRIBUTE";
      }
      if (node.subtype === "AT_AddColumn") {
        output.push("ADD");
        output.push(subType);
        if (node.missing_ok) {
          output.push("IF NOT EXISTS");
        }
        output.push(this.quote(node.name));
        output.push(this.deparse(node.def, context));
      } else if (node.subtype === "AT_ColumnDefault") {
        output.push("ALTER");
        output.push(subType);
        output.push(this.quote(node.name));
        if (node.def) {
          output.push("SET DEFAULT");
          output.push(this.deparse(node.def, context));
        } else {
          output.push("DROP DEFAULT");
        }
      } else if (node.subtype === "AT_DropNotNull") {
        output.push("ALTER");
        output.push(subType);
        output.push(this.quote(node.name));
        output.push("DROP NOT NULL");
      } else if (node.subtype === "AT_SetNotNull") {
        output.push("ALTER");
        output.push(subType);
        output.push(this.quote(node.name));
        output.push("SET NOT NULL");
      } else if (node.subtype === "AT_SetStatistics") {
        output.push("ALTER");
        output.push(this.quote(node.name));
        output.push("SET STATISTICS");
        output.push(dotty.get(node, "def.Integer.ival"));
      } else if (node.subtype === "AT_SetOptions") {
        output.push("ALTER");
        output.push(subType);
        output.push(this.quote(node.name));
        output.push("SET");
        output.push("(");
        output.push(this.list(node.def, ", ", "", context));
        output.push(")");
      } else if (node.subtype === "AT_SetStorage") {
        output.push("ALTER");
        output.push(this.quote(node.name));
        output.push("SET STORAGE");
        if (node.def) {
          output.push(this.deparse(node.def, context));
        } else {
          output.push("PLAIN");
        }
      } else if (node.subtype === "AT_DropColumn") {
        output.push("DROP");
        output.push(subType);
        if (node.missing_ok) {
          output.push("IF EXISTS");
        }
        output.push(this.quote(node.name));
      } else if (node.subtype === "AT_AddConstraint") {
        output.push("ADD");
        output.push(this.deparse(node.def, context));
      } else if (node.subtype === "AT_ValidateConstraint") {
        output.push("VALIDATE CONSTRAINT");
        output.push(this.quote(node.name, context));
      } else if (node.subtype === "AT_DropConstraint") {
        output.push("DROP CONSTRAINT");
        if (node.missing_ok) {
          output.push("IF EXISTS");
        }
        output.push(this.quote(node.name));
      } else if (node.subtype === "AT_AlterColumnType") {
        output.push("ALTER");
        output.push(subType);
        output.push(this.quote(node.name));
        output.push("TYPE");
        output.push(this.deparse(node.def, context));
      } else if (node.subtype === "AT_ChangeOwner") {
        output.push("OWNER");
        output.push("TO");
        output.push(this.RoleSpec(node.newowner, context));
      } else if (node.subtype === "AT_ClusterOn") {
        output.push("CLUSTER ON");
        output.push(this.quote(node.name));
      } else if (node.subtype === "AT_DropCluster") {
        output.push("SET WITHOUT CLUSTER");
      } else if (node.subtype === "AT_AddOids") {
        output.push("SET WITH OIDS");
      } else if (node.subtype === "AT_DropOids") {
        output.push("SET WITHOUT OIDS");
      } else if (node.subtype === "AT_SetRelOptions") {
        output.push("SET");
        output.push("(");
        output.push(this.list(node.def, ", ", "", context));
        output.push(")");
      } else if (node.subtype === "AT_ResetRelOptions") {
        output.push("RESET");
        output.push("(");
        output.push(this.list(node.def, ", ", "", context));
        output.push(")");
      } else if (node.subtype === "AT_AddIdentity") {
        output.push("ALTER COLUMN");
        output.push(this.quote(node.name));
        output.push("ADD");
        output.push(this.deparse(node.def, context));
      } else if (node.subtype === "AT_AddInherit") {
        output.push("INHERIT");
        output.push(this.deparse(node.def, context));
      } else if (node.subtype === "AT_DropInherit") {
        output.push("NO INHERIT");
        output.push(this.deparse(node.def, context));
      } else if (node.subtype === "AT_AddOf") {
        output.push("OF");
        output.push(this.deparse(node.def, context));
      } else if (node.subtype === "AT_DropOf") {
        output.push("NOT OF");
      } else if (node.subtype === "AT_EnableRowSecurity") {
        output.push("ENABLE ROW LEVEL SECURITY");
      } else if (node.subtype === "AT_DisableRowSecurity") {
        output.push("DISABLE ROW LEVEL SECURITY");
      } else if (node.subtype === "AT_ForceRowSecurity") {
        output.push("FORCE ROW SECURITY");
      } else if (node.subtype === "AT_NoForceRowSecurity") {
        output.push("NO FORCE ROW SECURITY");
      }
      if (node.behavior === "DROP_CASCADE") {
        output.push("CASCADE");
      }
      return output.join(" ");
    }
    CreateEnumStmt(node, context = {}) {
      const output = [];
      output.push("CREATE TYPE");
      output.push(this.list(node.typeName, ".", "", context));
      output.push("AS ENUM");
      output.push(`(${NEWLINE_CHAR}`);
      const vals = unwrapList(node.vals).map((val) => {
        return { String: { str: `'${val.String.str}'` } };
      });
      output.push(this.list(vals, `,${NEWLINE_CHAR}`, TAB_CHAR));
      output.push(`${NEWLINE_CHAR})`);
      return output.join(" ");
    }
    AlterEnumStmt(node, context = {}) {
      const output = [];
      output.push("ALTER TYPE");
      const typObj = {
        TypeName: {
          names: node.typeName
        }
      };
      output.push(this.deparse(typObj, context));
      if (node.newVal) {
        output.push("ADD VALUE");
        const result = node.newVal.replace(/'/g, "''");
        output.push(`'${result}'`);
      }
      if (node.newValNeighbor) {
        if (node.newValIsAfter) {
          output.push("AFTER");
        } else {
          output.push("BEFORE");
        }
        const result = node.newValNeighbor.replace(/'/g, "''");
        output.push(`'${result}'`);
      }
      if (node.behavior === "DROP_CASCADE") {
        output.push("CASCADE");
      }
      return output.join(" ");
    }
    AlterDomainStmt(node, context = {}) {
      const output = [];
      output.push("ALTER DOMAIN");
      const typObj = {
        TypeName: {
          names: node.typeName
        }
      };
      output.push(this.deparse(typObj, context));
      if (node.subtype === "C") {
        output.push("ADD");
        output.push(this.deparse(node.def, context));
      } else if (node.subtype === "V") {
        output.push("VALIDATE");
        output.push("CONSTRAINT");
        output.push(this.quote(node.name));
      } else if (node.subtype === "X") {
        output.push("DROP");
        output.push("CONSTRAINT");
        output.push(this.quote(node.name));
      }
      if (node.behavior === "DROP_CASCADE") {
        output.push("CASCADE");
      }
      return output.join(" ");
    }
    CreateExtensionStmt(node) {
      const output = [];
      output.push("CREATE EXTENSION");
      if (node.if_not_exists) {
        output.push("IF NOT EXISTS");
      }
      output.push(this.quote(node.extname));
      if (node.options) {
        node.options.forEach((opt) => {
          if (opt.DefElem.defname === "cascade" && opt.DefElem.arg.Integer.ival === 1) {
            output.push("CASCADE");
          }
          if (opt.DefElem.defname === "schema") {
            output.push("WITH SCHEMA");
            output.push(this.quote(this.deparse(opt.DefElem.arg)));
          }
        });
      }
      return output.join(" ");
    }
    DropStmt(node, context = {}) {
      const output = [];
      output.push("DROP");
      output.push((0, pgsql_enums_1.objtypeName)(node.removeType));
      if (node.missing_ok) {
        output.push("IF EXISTS");
      }
      const stmts = [];
      const objects = unwrapList(node.objects);
      for (let s = 0;s < objects.length; s++) {
        const children = unwrapList(objects[s]);
        const stmt = [];
        if (node.removeType === "OBJECT_TABLE" || node.removeType === "OBJECT_CONVERSION" || node.removeType === "OBJECT_COLLATION" || node.removeType === "OBJECT_MATVIEW" || node.removeType === "OBJECT_INDEX" || node.removeType === "OBJECT_FOREIGN_TABLE") {
          if (children.length === 1) {
            stmt.push(this.quote(this.deparse(children[0])));
          } else if (children.length === 2) {
            stmt.push(this.listQuotes(children, "."));
          } else {
            throw new Error("bad case 2 drop stmt" + JSON.stringify(node, null, 2));
          }
        } else if (node.removeType === "OBJECT_SCHEMA") {
          stmt.push(this.quote(this.deparse(children)));
        } else if (node.removeType === "OBJECT_SEQUENCE") {
          stmt.push(this.listQuotes(children, "."));
        } else if (node.removeType === "OBJECT_POLICY") {
          if (children.length === 2) {
            stmt.push(this.quote(this.deparse(children[1], context)));
            stmt.push("ON");
            stmt.push(this.quote(this.deparse(children[0], context)));
          } else if (children.length === 3) {
            stmt.push(this.quote(this.deparse(children[2], context)));
            stmt.push("ON");
            stmt.push(this.listQuotes([children[0], children[1]], "."));
          } else {
            throw new Error("bad drop policy stmt: " + JSON.stringify(node, null, 2));
          }
        } else if (node.removeType === "OBJECT_TRIGGER") {
          if (children.length === 2) {
            stmt.push(this.quote(this.deparse(children[1], context)));
            stmt.push("ON");
            stmt.push(this.quote(this.deparse(children[0], context)));
          } else if (children.length === 3) {
            stmt.push(this.quote(this.deparse(children[2], context)));
            stmt.push("ON");
            stmt.push(this.listQuotes([children[0], children[1]], "."));
          } else {
            throw new Error("bad drop trigger stmt: " + JSON.stringify(node, null, 2));
          }
        } else if (node.removeType === "OBJECT_RULE") {
          if (children.length === 2) {
            stmt.push(this.quote(this.deparse(children[1], context)));
            stmt.push("ON");
            stmt.push(this.quote(this.deparse(children[0], context)));
          } else if (children.length === 3) {
            stmt.push(this.quote(this.deparse(children[2], context)));
            stmt.push("ON");
            stmt.push(this.listQuotes([children[0], children[1]], "."));
          } else {
            throw new Error("bad drop rule stmt: " + JSON.stringify(node, null, 2));
          }
        } else if (node.removeType === "OBJECT_VIEW") {
          if (children.length === 1) {
            stmt.push(this.quote(this.deparse(children[0], context)));
          } else if (children.length === 2) {
            stmt.push(this.listQuotes(children, "."));
          } else {
            throw new Error("bad drop value stmt: " + JSON.stringify(node, null, 2));
          }
        } else if (node.removeType === "OBJECT_CAST") {
          stmt.push("(");
          stmt.push(this.deparse(children[0], context));
          stmt.push("AS");
          stmt.push(this.deparse(children[1], context));
          stmt.push(")");
        } else if (node.removeType === "OBJECT_AGGREGATE") {
          stmt.push(this.deparse(children, context));
        } else if (node.removeType === "OBJECT_FDW") {
          stmt.push(this.deparse(children, context));
        } else if (node.removeType === "OBJECT_FOREIGN_SERVER") {
          stmt.push(this.deparse(children, context));
        } else if (node.removeType === "OBJECT_EXTENSION") {
          stmt.push(this.deparse(children, context));
        } else if (node.removeType === "OBJECT_DOMAIN") {
          stmt.push(this.deparse(children, context));
        } else if (node.removeType === "OBJECT_FUNCTION") {
          stmt.push(this.deparse(children, context));
        } else if (node.removeType === "OBJECT_TYPE") {
          stmt.push(this.deparse(children, context));
        } else {
          throw new Error("bad drop stmt: " + JSON.stringify(node, null, 2));
        }
        stmts.push(stmt.join(" "));
      }
      output.push(stmts.join(","));
      if (node.behavior === "DROP_CASCADE") {
        output.push("CASCADE");
      }
      return output.join(" ");
    }
    CreatePolicyStmt(node, context = {}) {
      const output = [];
      output.push("CREATE POLICY");
      output.push(this.quote(node.policy_name));
      if (node.table) {
        output.push("ON");
        output.push(this.RangeVar(node.table, context));
      }
      if (node.permissive) {
      } else {
        output.push("AS");
        output.push("RESTRICTIVE");
      }
      if (node.cmd_name) {
        output.push("FOR");
        output.push(node.cmd_name.toUpperCase());
      }
      output.push("TO");
      output.push(this.list(node.roles));
      if (node.qual) {
        output.push("USING");
        output.push("(");
        output.push(this.deparse(node.qual, context));
        output.push(")");
      }
      if (node.with_check) {
        output.push("WITH CHECK");
        output.push("(");
        output.push(this.deparse(node.with_check, context));
        output.push(")");
      }
      return output.join(" ");
    }
    AlterPolicyStmt(node, context = {}) {
      const output = [];
      output.push("ALTER POLICY");
      output.push(this.quote(node.policy_name));
      if (node.table) {
        output.push("ON");
        output.push(this.RangeVar(node.table, context));
      }
      output.push("TO");
      output.push(this.list(node.roles));
      if (node.qual) {
        output.push("USING");
        output.push("(");
        output.push(this.deparse(node.qual, context));
        output.push(")");
      }
      if (node.with_check) {
        output.push("WITH CHECK");
        output.push("(");
        output.push(this.deparse(node.with_check, context));
        output.push(")");
      }
      return output.join(" ");
    }
    ViewStmt(node, context = {}) {
      const output = [];
      output.push("CREATE");
      if (node.replace)
        output.push("OR REPLACE");
      if (node.view.relpersistence === "t") {
        output.push("TEMPORARY");
      }
      output.push("VIEW");
      output.push(this.RangeVar(node.view, "view"));
      if (node.aliases) {
        output.push("(");
        output.push(this.list(node.aliases, ", ", "", context));
        output.push(")");
      }
      output.push("AS");
      output.push(this.deparse(node.query, context));
      if (node.withCheckOption === "LOCAL_CHECK_OPTION") {
        output.push("WITH LOCAL CHECK OPTION");
      } else if (node.withCheckOption === "CASCADED_CHECK_OPTION") {
        output.push("WITH CASCADED CHECK OPTION");
      }
      return output.join(" ");
    }
    CreateSeqStmt(node, context = {}) {
      const output = [];
      output.push("CREATE SEQUENCE");
      output.push(this.RangeVar(node.sequence, context));
      const options = unwrapList(node.options);
      if (options && options.length) {
        options.forEach((opt) => {
          output.push(this.deparse(opt, "sequence"));
        });
      }
      return output.join(" ");
    }
    AlterSeqStmt(node, context = {}) {
      const output = [];
      output.push("ALTER SEQUENCE");
      output.push(this.RangeVar(node.sequence, context));
      const options = unwrapList(node.options);
      if (options && options.length) {
        options.forEach((opt) => {
          output.push(this.deparse(opt, "sequence"));
        });
      }
      return output.join(" ");
    }
    CreateTableAsStmt(node, context = {}) {
      const output = ["CREATE"];
      const relpersistence = dotty.get(node, "into.rel.relpersistence");
      if (node.relkind === "OBJECT_MATVIEW") {
        output.push("MATERIALIZED VIEW");
      } else if (relpersistence !== "t") {
        output.push("TABLE");
        if (node.if_not_exists) {
          output.push("IF NOT EXISTS");
        }
      }
      output.push(this.IntoClause(node.into, context));
      output.push("AS");
      output.push(this.deparse(node.query, context));
      return output.join(" ");
    }
    CreateTrigStmt(node, context = {}) {
      const output = [];
      output.push("CREATE");
      if (node.isconstraint) {
        output.push("CONSTRAINT");
      }
      output.push("TRIGGER");
      output.push(this.quote(node.trigname));
      output.push(NEWLINE_CHAR);
      if (node.timing === 64) {
        output.push("INSTEAD OF");
      } else if (node.timing === 2) {
        output.push("BEFORE");
      } else {
        output.push("AFTER");
      }
      const TRIGGER_EVENTS = {
        INSERT: 4,
        DELETE: 8,
        UPDATE: 16,
        TRUNCATE: 32
      };
      const events = [];
      if ((TRIGGER_EVENTS.INSERT & node.events) === TRIGGER_EVENTS.INSERT) {
        events.push("INSERT");
      }
      if ((TRIGGER_EVENTS.UPDATE & node.events) === TRIGGER_EVENTS.UPDATE) {
        events.push("UPDATE");
      }
      if ((TRIGGER_EVENTS.DELETE & node.events) === TRIGGER_EVENTS.DELETE) {
        events.push("DELETE");
      }
      if ((TRIGGER_EVENTS.TRUNCATE & node.events) === TRIGGER_EVENTS.TRUNCATE) {
        events.push("TRUNCATE");
      }
      output.push(events.join(" OR "));
      if (node.columns) {
        output.push("OF");
        output.push(this.list(node.columns, ", ", "", context));
      }
      output.push("ON");
      output.push(this.RangeVar(node.relation, context));
      output.push(NEWLINE_CHAR);
      if (node.transitionRels) {
        output.push("REFERENCING");
        node.transitionRels.forEach(({ TriggerTransition }) => {
          if (TriggerTransition.isNew === true && TriggerTransition.isTable === true) {
            output.push(`NEW TABLE AS ${TriggerTransition.name}`);
          } else if (TriggerTransition.isNew !== true && TriggerTransition.isTable === true) {
            output.push(`OLD TABLE AS ${TriggerTransition.name}`);
          }
        });
      }
      if (node.deferrable || node.initdeferred) {
        if (node.deferrable) {
          output.push("DEFERRABLE");
        }
        if (node.deferrable) {
          output.push("INITIALLY DEFERRED");
        }
        output.push(NEWLINE_CHAR);
      }
      if (node.row) {
        output.push(`FOR EACH ROW${NEWLINE_CHAR}`);
      } else {
        output.push(`FOR EACH STATEMENT${NEWLINE_CHAR}`);
      }
      if (node.whenClause) {
        output.push("WHEN");
        output.push("(");
        output.push(this.deparse(node.whenClause, "trigger"));
        output.push(")");
        output.push(NEWLINE_CHAR);
      }
      output.push("EXECUTE PROCEDURE");
      output.push(this.listQuotes(node.funcname).split(",").join("."));
      output.push("(");
      let args = [];
      if (node.args) {
        args = unwrapList(node.args);
      }
      args = args.map((arg) => {
        if (arg.String !== undefined && arg.String.str !== undefined) {
          return `'${arg.String.str}'`;
        }
        return this.deparse(arg, context);
      }).filter((a) => a);
      output.push(args.join(","));
      output.push(")");
      return output.join(" ");
    }
    CreateDomainStmt(node, context = {}) {
      const output = [];
      output.push("CREATE DOMAIN");
      output.push(this.list(node.domainname, ".", "", context));
      output.push("AS");
      output.push(this.TypeName(node.typeName, context));
      if (node.constraints) {
        output.push(this.list(node.constraints, ", ", "", context));
      }
      return output.join(" ");
    }
    CreateStmt(node, context = {}) {
      const output = [];
      const relpersistence = dotty.get(node, "relation.relpersistence");
      if (relpersistence === "t") {
        output.push("CREATE");
      } else {
        output.push("CREATE TABLE");
        if (node.if_not_exists) {
          output.push("IF NOT EXISTS");
        }
      }
      output.push(this.RangeVar(node.relation, context));
      output.push(`(${NEWLINE_CHAR}`);
      output.push(this.list(node.tableElts, `,${NEWLINE_CHAR}`, TAB_CHAR, context));
      output.push(`${NEWLINE_CHAR})`);
      if (node.hasOwnProperty("inhRelations")) {
        output.push("INHERITS");
        output.push("(");
        output.push(this.list(node.inhRelations, ", ", "", context));
        output.push(")");
      }
      if (node.options) {
        node.options.forEach((opt) => {
          if (dotty.get(opt, "DefElem.defname") === "oids") {
            if (Number(dotty.get(opt, "DefElem.arg.Integer.ival")) === 1) {
              output.push("WITH OIDS");
            } else {
              output.push("WITHOUT OIDS");
            }
          }
        });
      }
      return output.join(" ");
    }
    ConstraintStmt(node) {
      const output = [];
      const constraint = (0, pgsql_enums_1.getConstraintFromConstrType)(node.contype);
      if (node.conname) {
        output.push("CONSTRAINT");
        output.push(node.conname);
        if (!node.pktable) {
          output.push(constraint);
        }
      } else if (node.contype === "CONSTR_IDENTITY") {
        output.push("GENERATED");
        if (node.generated_when == "a") {
          output.push("ALWAYS AS");
        } else {
          output.push("BY DEFAULT AS");
        }
        output.push("IDENTITY");
        const options = unwrapList(node.options);
        if (options && options.length) {
          output.push("(");
          output.push(this.list(options, " ", "", "generated"));
          output.push(")");
        }
      } else if (node.contype === "CONSTR_GENERATED") {
        output.push("GENERATED");
        if (node.generated_when == "a") {
          output.push("ALWAYS AS");
        }
      } else {
        output.push(constraint);
      }
      return output.join(" ");
    }
    ReferenceConstraint(node, context = {}) {
      const output = [];
      if (node.pk_attrs && node.fk_attrs) {
        if (node.conname) {
          output.push("CONSTRAINT");
          output.push(node.conname);
        }
        output.push("FOREIGN KEY");
        output.push("(");
        output.push(this.listQuotes(node.fk_attrs));
        output.push(")");
        output.push("REFERENCES");
        output.push(this.RangeVar(node.pktable, context));
        output.push("(");
        output.push(this.listQuotes(node.pk_attrs));
        output.push(")");
      } else if (node.pk_attrs) {
        output.push(this.ConstraintStmt(node, context));
        output.push(this.RangeVar(node.pktable, context));
        output.push("(");
        output.push(this.listQuotes(node.pk_attrs));
        output.push(")");
      } else if (node.fk_attrs) {
        if (node.conname) {
          output.push("CONSTRAINT");
          output.push(node.conname);
        }
        output.push("FOREIGN KEY");
        output.push("(");
        output.push(this.listQuotes(node.fk_attrs));
        output.push(")");
        output.push("REFERENCES");
        output.push(this.RangeVar(node.pktable, context));
      } else {
        output.push(this.ConstraintStmt(node, context));
        output.push(this.RangeVar(node.pktable, context));
      }
      return output.join(" ");
    }
    ExclusionConstraint(node, context = {}) {
      const output = [];
      function getExclusionGroup(nde) {
        const exclusions = unwrapList(nde.exclusions);
        const a = exclusions.map((excl) => {
          const firstExcl = unwrapList(excl)[0];
          if (firstExcl.IndexElem.name) {
            return firstExcl.IndexElem.name;
          }
          return firstExcl.IndexElem.expr ? this.deparse(firstExcl.IndexElem.expr, context) : null;
        });
        const b = exclusions.map((excl) => this.deparse(unwrapList(unwrapList(excl)[1])[0], context));
        const stmts = a.map((_v, i) => `${a[i]} WITH ${b[i]}`);
        return stmts.join(", ");
      }
      if (node.exclusions && node.access_method) {
        output.push("USING");
        output.push(node.access_method);
        output.push("(");
        output.push(getExclusionGroup.call(this, node));
        output.push(")");
      }
      return output.join(" ");
    }
    Constraint(node, context = {}) {
      const output = [];
      if (node.contype === "CONSTR_FOREIGN") {
        output.push(this.ReferenceConstraint(node, context));
      } else {
        output.push(this.ConstraintStmt(node, context));
      }
      if (node.keys) {
        output.push("(");
        output.push(this.listQuotes(node.keys));
        output.push(")");
      }
      if (node.raw_expr) {
        output.push("(");
        output.push(this.deparse(node.raw_expr, context));
        output.push(")");
        if (node.contype == "CONSTR_GENERATED") {
          output.push("STORED");
        }
      }
      if (node.fk_del_action) {
        switch (node.fk_del_action) {
          case "r":
            output.push("ON DELETE RESTRICT");
            break;
          case "c":
            output.push("ON DELETE CASCADE");
            break;
          case "n":
            output.push("ON DELETE SET NULL");
            break;
          case "d":
            output.push("ON DELETE SET DEFAULT");
            break;
          case "a":
            break;
          default:
        }
      }
      if (node.fk_upd_action) {
        switch (node.fk_upd_action) {
          case "r":
            output.push("ON UPDATE RESTRICT");
            break;
          case "c":
            output.push("ON UPDATE CASCADE");
            break;
          case "n":
            output.push("ON UPDATE SET NULL");
            break;
          case "d":
            output.push("ON UPDATE SET DEFAULT");
            break;
          case "a":
            break;
          default:
        }
      }
      if (node.fk_matchtype === "f") {
        output.push("MATCH FULL");
      }
      if (node.is_no_inherit === true) {
        output.push("NO INHERIT");
      }
      if (node.skip_validation === true) {
        output.push("NOT VALID");
      }
      if (node.contype === "CONSTR_EXCLUSION") {
        output.push(this.ExclusionConstraint(node, context));
      }
      if (node.deferrable) {
        output.push("deferrable");
      }
      return output.join(" ");
    }
    AccessPriv(node) {
      const output = [];
      if (node.priv_name) {
        output.push(node.priv_name.toUpperCase());
      } else {
        output.push("ALL");
      }
      if (node.cols) {
        output.push("(");
        output.push(this.listQuotes(node.cols));
        output.push(")");
      }
      return output.join(" ");
    }
    VariableSetStmt(node) {
      switch (node.kind) {
        case "VAR_SET_VALUE":
          return (0, util_1.format)("SET %s%s = %s", node.is_local ? "LOCAL " : "", node.name, this.deparseNodes(node.args, "simple").join(", "));
        case "VAR_SET_DEFAULT":
          return (0, util_1.format)("SET %s TO DEFAULT", node.name);
        case "VAR_SET_CURRENT":
          return (0, util_1.format)("SET %s FROM CURRENT", node.name);
        case "VAR_SET_MULTI": {
          const name = {
            TRANSACTION: "TRANSACTION",
            "SESSION CHARACTERISTICS": "SESSION CHARACTERISTICS AS TRANSACTION"
          }[node.name];
          return (0, util_1.format)("SET %s %s", name, this.deparseNodes(node.args, "simple").join(", "));
        }
        case "VAR_RESET":
          return (0, util_1.format)("RESET %s", node.name);
        case "VAR_RESET_ALL":
          return "RESET ALL";
        default:
          return fail("VariableSetKind", node);
      }
    }
    VariableShowStmt(node) {
      return (0, util_1.format)("SHOW %s", node.name);
    }
    FuncWithArgs(node, context = {}) {
      const output = [];
      output.push(this.deparse(unwrapList(node.funcname)[0], context));
      output.push("(");
      output.push(this.list(node.funcargs, ", ", "", context));
      output.push(")");
      return output.join(" ");
    }
    FunctionParameter(node, context = {}) {
      const output = [];
      if (node.mode === "FUNC_PARAM_VARIADIC") {
        output.push("VARIADIC");
      }
      if (node.mode === "FUNC_PARAM_OUT") {
        output.push("OUT");
      }
      if (node.mode === "FUNC_PARAM_INOUT") {
        output.push("INOUT");
      }
      output.push(node.name);
      output.push(this.TypeName(node.argType, context));
      if (node.defexpr) {
        output.push("DEFAULT");
        output.push(this.deparse(node.defexpr, context));
      }
      return output.join(" ");
    }
    CreateFunctionStmt(node, context = {}) {
      const output = [];
      output.push("CREATE");
      if (node.replace) {
        output.push("OR REPLACE");
      }
      output.push("FUNCTION");
      output.push(unwrapList(node.funcname).map((name) => this.deparse(name, context)).join("."));
      output.push("(");
      let parameters = [];
      if (node.parameters) {
        parameters = unwrapList(node.parameters);
      }
      const parametersList = parameters.filter(({ FunctionParameter }) => FunctionParameter.mode === "FUNC_PARAM_VARIADIC" || FunctionParameter.mode === "FUNC_PARAM_OUT" || FunctionParameter.mode === "FUNC_PARAM_INOUT" || FunctionParameter.mode === "FUNC_PARAM_IN");
      output.push(this.list(parametersList));
      output.push(")");
      const returns = parameters.filter(({ FunctionParameter }) => FunctionParameter.mode === "FUNC_PARAM_TABLE");
      if (returns.length > 0) {
        output.push("RETURNS");
        output.push("TABLE");
        output.push("(");
        output.push(this.list(returns, ", ", "", context));
        output.push(")");
      } else if (node.returnType) {
        output.push("RETURNS");
        output.push(this.TypeName(node.returnType, context));
      }
      node.options.forEach((option, i) => {
        if (option && option.DefElem) {
          let value = "";
          switch (option.DefElem.defname) {
            case "as":
              value = this.deparse(unwrapList(option.DefElem.arg)[0], context);
              output.push(`AS \$EOFCODE\$${value}\$EOFCODE\$`);
              break;
            case "language":
              value = this.deparse(option.DefElem.arg, context);
              output.push("LANGUAGE");
              output.push(value);
              break;
            case "security":
              output.push("SECURITY");
              value = Number(option.DefElem.arg.Integer.ival);
              if (value > 0) {
                output.push("DEFINER");
              } else {
                output.push("INVOKER");
              }
              break;
            case "leakproof":
              value = Number(option.DefElem.arg.Integer.ival);
              if (value > 0) {
                output.push("LEAKPROOF");
              }
              break;
            case "window":
              value = Number(option.DefElem.arg.Integer.ival);
              if (value > 0) {
                output.push("WINDOW");
              }
              break;
            case "strict":
              value = Number(option.DefElem.arg.Integer.ival);
              if (value > 0) {
                output.push("STRICT");
              } else {
                output.push("CALLED ON NULL INPUT");
              }
              break;
            case "set":
              output.push(this.deparse(option, context));
              break;
            case "volatility":
              value = this.deparse(option.DefElem.arg, context);
              output.push(value.toUpperCase());
              break;
            default:
          }
        }
      });
      return output.join(" ");
    }
    CreateSchemaStmt(node) {
      const output = [];
      output.push("CREATE");
      if (node.replace) {
        output.push("OR REPLACE");
      }
      output.push("SCHEMA");
      if (node.if_not_exists) {
        output.push("IF NOT EXISTS");
      }
      output.push(node.schemaname);
      return output.join(" ");
    }
    RoleSpec(node) {
      switch (node.roletype) {
        case "ROLESPEC_CSTRING":
          return this.quote(node.rolename);
        case "ROLESPEC_CURRENT_USER":
          return "CURRENT_USER";
        case "ROLESPEC_SESSION_USER":
          return "SESSION_USER";
        case "ROLESPEC_PUBLIC":
          return "PUBLIC";
        default:
          return fail("RoleSpec", node);
      }
    }
    GrantStmt(node) {
      const output = [];
      const getTypeFromNode = (nodeObj) => {
        switch (nodeObj.objtype) {
          case "OBJECT_TABLE":
            if (nodeObj.targtype === "ACL_TARGET_ALL_IN_SCHEMA") {
              return "ALL TABLES IN SCHEMA";
            }
            if (nodeObj.targtype === "ACL_TARGET_DEFAULTS") {
              return "TABLES";
            }
            return "TABLE";
          case "OBJECT_SEQUENCE":
            if (nodeObj.targtype === "ACL_TARGET_ALL_IN_SCHEMA") {
              return "ALL SEQUENCES IN SCHEMA";
            }
            if (nodeObj.targtype === "ACL_TARGET_DEFAULTS") {
              return "SEQUENCES";
            }
            return "SEQUENCE";
          case "OBJECT_DATABASE":
            return "DATABASE";
          case "OBJECT_DOMAIN":
            return "DOMAIN";
          case "OBJECT_FDW":
            return "FOREIGN DATA WRAPPER";
          case "OBJECT_FOREIGN_SERVER":
            return "FOREIGN SERVER";
          case "OBJECT_FUNCTION":
            if (nodeObj.targtype === "ACL_TARGET_ALL_IN_SCHEMA") {
              return "ALL FUNCTIONS IN SCHEMA";
            }
            if (nodeObj.targtype === "ACL_TARGET_DEFAULTS") {
              return "FUNCTIONS";
            }
            return "FUNCTION";
          case "OBJECT_LANGUAGE":
            return "LANGUAGE";
          case "OBJECT_LARGEOBJECT":
            return "LARGE OBJECT";
          case "OBJECT_SCHEMA":
            return "SCHEMA";
          case "OBJECT_TABLESPACE":
            return "TABLESPACE";
          case "OBJECT_TYPE":
            return "TYPE";
          default:
        }
        return fail("GrantStmt", node);
      };
      if (node.objtype !== "OBJECT_COLUMN") {
        if (!node.is_grant) {
          output.push("REVOKE");
          if (node.grant_option) {
            output.push("GRANT OPTION");
            output.push("FOR");
          }
          if (node.privileges) {
            output.push(this.list(node.privileges));
          } else {
            output.push("ALL");
          }
          output.push("ON");
          output.push(getTypeFromNode(node));
          output.push(this.list(node.objects));
          output.push("FROM");
          output.push(this.list(node.grantees));
        } else {
          output.push("GRANT");
          if (node.privileges) {
            output.push(this.list(node.privileges));
          } else {
            output.push("ALL");
          }
          output.push("ON");
          output.push(getTypeFromNode(node));
          output.push(this.list(node.objects));
          output.push("TO");
          output.push(this.list(node.grantees));
          if (node.grant_option) {
            output.push("WITH GRANT OPTION");
          }
        }
        if (node.behavior === "DROP_CASCADE") {
          output.push("CASCADE");
        }
      }
      return output.join(" ");
    }
    GrantRoleStmt(node, context = {}) {
      const output = [];
      if (!node.is_grant) {
        output.push("REVOKE");
        output.push(this.list(node.granted_roles, ", ", "", context));
        output.push("FROM");
        output.push(this.list(node.grantee_roles, ", ", "", context));
      } else {
        output.push("GRANT");
        output.push(this.list(node.granted_roles, ", ", "", context));
        output.push("TO");
        output.push(this.list(node.grantee_roles, ", ", "", context));
      }
      if (node.admin_opt) {
        output.push("WITH ADMIN OPTION");
      }
      return output.join(" ");
    }
    CreateRoleStmt(node, context = {}) {
      const output = [];
      const roleOption = (nodeObj, i, val1, val2) => {
        const val = Number(dotty.get(unwrapList(nodeObj.options), `${i}.DefElem.arg.Integer.ival`));
        if (val > 0) {
          output.push(val1);
        } else {
          output.push(val2);
        }
      };
      output.push("CREATE");
      switch (node.stmt_type) {
        case "ROLESTMT_USER":
          output.push("USER");
          break;
        case "ROLESTMT_GROUP":
          output.push("GROUP");
          break;
        default:
          output.push("ROLE");
      }
      output.push(`"${node.role}"`);
      if (node.options) {
        const options = unwrapList(node.options);
        const opts = dotty.search(options, "*.DefElem.defname");
        if (opts.length === 1 && opts[0] === "addroleto") {
        } else {
          output.push("WITH");
        }
        opts.forEach((option, i) => {
          let value = "";
          switch (option) {
            case "canlogin":
              roleOption(node, i, "LOGIN", "NOLOGIN");
              break;
            case "addroleto":
              output.push("IN ROLE");
              output.push(dotty.search(flatten(dotty.search(options, `${i}.DefElem.arg`).map(unwrapList)), "*.RoleSpec.rolename").join(","));
              break;
            case "password":
              output.push("PASSWORD");
              value = dotty.get(options, `${i}.DefElem.arg.String.str`);
              output.push(`'${value}'`);
              break;
            case "adminmembers":
              output.push("ADMIN");
              output.push(this.list(options[i].DefElem.arg, ", ", "", context));
              break;
            case "rolemembers":
              output.push("USER");
              output.push(this.list(options[i].DefElem.arg, ", ", "", context));
              break;
            case "createdb":
              roleOption(node, i, "CREATEDB", "NOCREATEDB");
              break;
            case "isreplication":
              roleOption(node, i, "REPLICATION", "NOREPLICATION");
              break;
            case "bypassrls":
              roleOption(node, i, "BYPASSRLS", "NOBYPASSRLS");
              break;
            case "inherit":
              roleOption(node, i, "INHERIT", "NOINHERIT");
              break;
            case "superuser":
              roleOption(node, i, "SUPERUSER", "NOSUPERUSER");
              break;
            case "createrole":
              roleOption(node, i, "CREATEROLE", "NOCREATEROLE");
              break;
            case "validUntil":
              output.push("VALID UNTIL");
              value = dotty.get(options[i], `DefElem.arg.String.str`);
              output.push(`'${value}'`);
              break;
            default:
          }
        });
      }
      return output.join(" ");
    }
    TransactionStmt(node, context = {}) {
      const output = [];
      const begin = (nodeOpts) => {
        const options = unwrapList(nodeOpts.options);
        const opts = options ? dotty.search(options, "*.DefElem.defname") : [];
        if (opts.includes("transaction_read_only")) {
          const index = opts.indexOf("transaction_read_only");
          const obj = options[index];
          let set = false;
          const flag = Number(this.deparse(dotty.get(obj, "DefElem.arg"), context));
          if (flag > 0) {
            set = true;
          }
          if (set) {
            return "BEGIN TRANSACTION READ ONLY";
          }
          return "BEGIN TRANSACTION READ WRITE";
        }
        if (opts.includes("transaction_isolation")) {
          const index = opts.indexOf("transaction_isolation");
          const obj = options[index];
          const lopts = this.deparse(dotty.get(obj, "DefElem.arg"), context).replace(/['"]+/g, "");
          return `BEGIN TRANSACTION ISOLATION LEVEL ${lopts.toUpperCase()}`;
        }
        return "BEGIN";
      };
      const start = (nodeOpts) => {
        const options = unwrapList(nodeOpts.options);
        const opts = options ? dotty.search(options, "*.DefElem.defname") : [];
        if (opts.includes("transaction_read_only")) {
          const index = opts.indexOf("transaction_read_only");
          const obj = options[index];
          let set = false;
          const flag = Number(this.deparse(dotty.get(obj, "DefElem.arg"), context));
          if (flag > 0) {
            set = true;
          }
          if (set) {
            return "START TRANSACTION READ ONLY";
          }
          return "START TRANSACTION READ WRITE";
        }
        return "START TRANSACTION";
      };
      const nodeOptions = unwrapList(node.options);
      switch (node.kind) {
        case "TRANS_STMT_BEGIN":
          return begin(node);
        case "TRANS_STMT_START":
          return start(node);
        case "TRANS_STMT_COMMIT":
          return "COMMIT";
        case "TRANS_STMT_ROLLBACK":
          return "ROLLBACK";
        case "TRANS_STMT_SAVEPOINT":
          output.push("SAVEPOINT");
          output.push(this.deparse(nodeOptions[0].DefElem.arg, context));
          break;
        case "TRANS_STMT_RELEASE":
          output.push("RELEASE SAVEPOINT");
          output.push(this.deparse(nodeOptions[0].DefElem.arg, context));
          break;
        case "TRANS_STMT_ROLLBACK_TO":
          output.push("ROLLBACK TO");
          output.push(this.deparse(nodeOptions[0].DefElem.arg, context));
          break;
        case "TRANS_STMT_PREPARE":
          output.push("PREPARE TRANSACTION");
          output.push(`'${node.gid}'`);
          break;
        case "TRANS_STMT_COMMIT_PREPARED":
          output.push("COMMIT PREPARED");
          output.push(`'${node.gid}'`);
          break;
        case "TRANS_STMT_ROLLBACK_PREPARED":
          output.push("ROLLBACK PREPARED");
          output.push(`'${node.gid}'`);
          break;
        default:
      }
      return output.join(" ");
    }
    SortBy(node, context = {}) {
      const output = [];
      output.push(this.deparse(node.node, context));
      switch (node.sortby_dir) {
        case "SORTBY_ASC":
          output.push("ASC");
          break;
        case "SORTBY_DESC":
          output.push("DESC");
          break;
        case "SORTBY_USING":
          output.push(`USING ${this.deparseNodes(node.useOp, context)}`);
          break;
        case "SORTBY_DEFAULT":
          break;
        default:
          return fail("SortBy", node);
      }
      if (node.sortby_nulls === "SORTBY_NULLS_FIRST") {
        output.push("NULLS FIRST");
      }
      if (node.sortby_nulls === "SORTBY_NULLS_LAST") {
        output.push("NULLS LAST");
      }
      return output.join(" ");
    }
    ObjectWithArgs(node, context = {}) {
      const output = [];
      if (context === "noquotes") {
        output.push(this.list(node.objname, ", ", "", context));
      } else {
        output.push(this.listQuotes(node.objname, "."));
      }
      const objargs = unwrapList(node.objargs);
      if (objargs && objargs.length) {
        output.push("(");
        output.push(objargs.map((arg) => {
          if (isEmptyObject(arg)) {
            return "NONE";
          }
          return this.deparse(arg, context);
        }).join(","));
        output.push(")");
      } else if (!node.args_unspecified) {
        output.push("()");
      }
      return output.join(" ");
    }
    String(node) {
      return node.str;
    }
    SubLink(node, context = {}) {
      switch (true) {
        case node.subLinkType === "EXISTS_SUBLINK":
          return (0, util_1.format)("EXISTS (%s)", this.deparse(node.subselect, context));
        case node.subLinkType === "ALL_SUBLINK":
          return (0, util_1.format)("%s %s ALL (%s)", this.deparse(node.testexpr, context), this.deparse(node.operName[0], context), this.deparse(node.subselect, context));
        case (node.subLinkType === "ANY_SUBLINK" && !(node.operName != null)):
          return (0, util_1.format)("%s IN (%s)", this.deparse(node.testexpr, context), this.deparse(node.subselect, context));
        case node.subLinkType === "ANY_SUBLINK":
          return (0, util_1.format)("%s %s ANY (%s)", this.deparse(node.testexpr, context), this.deparse(node.operName[0], context), this.deparse(node.subselect, context));
        case node.subLinkType === "ROWCOMPARE_SUBLINK":
          return (0, util_1.format)("%s %s (%s)", this.deparse(node.testexpr, context), this.deparse(node.operName[0], context), this.deparse(node.subselect, context));
        case node.subLinkType === "EXPR_SUBLINK":
          return (0, util_1.format)("(%s)", this.deparse(node.subselect, context));
        case node.subLinkType === "MULTIEXPR_SUBLINK":
          return fail("SubLink", node);
        case node.subLinkType === "ARRAY_SUBLINK":
          return (0, util_1.format)("ARRAY (%s)", this.deparse(node.subselect, context));
        default:
          return fail("SubLink", node);
      }
    }
    TypeCast(node, context = {}) {
      const type = this.TypeName(node.typeName, context);
      let arg = this.deparse(node.arg, context);
      if (node.arg !== undefined && node.arg.A_Expr !== undefined) {
        arg = (0, util_1.format)("(%s)", arg);
      }
      if (type === "boolean") {
        const value = dotty.get(node, "arg.A_Const.val.String.str");
        if (value === "f") {
          return "FALSE";
        }
        if (value === "t") {
          return "TRUE";
        }
      }
      return (0, util_1.format)("%s::%s", arg, type);
    }
    TypeName(node, context = {}) {
      const names = unwrapList(node.names);
      if (names[names.length - 1].String.str === "interval") {
        return this.deparseInterval(node);
      }
      const output = [];
      if (node.setof) {
        output.push("SETOF");
      }
      let args = null;
      if (node.typmods != null) {
        args = unwrapList(node.typmods).map((item) => {
          return this.deparse(item, context);
        });
      }
      const type = [];
      type.push(this.type(names, args && args.join(", ")));
      if (node.arrayBounds != null) {
        type.push("[]");
      }
      output.push(type.join(""));
      return output.join(" ");
    }
    CaseWhen(node, context = {}) {
      const output = ["WHEN"];
      output.push(this.deparse(node.expr, context));
      output.push("THEN");
      output.push(this.deparse(node.result, context));
      return output.join(" ");
    }
    WindowDef(node, context = {}) {
      const output = [];
      if (context !== "window") {
        if (node.name) {
          output.push(node.name);
        }
      }
      const empty = !(node.partitionClause != null) && !(node.orderClause != null);
      const frameOptions = this.deparseFrameOptions(node.frameOptions, node.refname, node.startOffset, node.endOffset);
      if (empty && context !== "window" && !(node.name != null) && frameOptions.length === 0) {
        return "()";
      }
      const windowParts = [];
      let useParens = false;
      if (node.partitionClause) {
        const partition = ["PARTITION BY"];
        const clause = unwrapList(node.partitionClause).map((item) => this.deparse(item, context));
        partition.push(clause.join(", "));
        windowParts.push(partition.join(" "));
        useParens = true;
      }
      if (node.orderClause) {
        windowParts.push("ORDER BY");
        const orders = unwrapList(node.orderClause).map((item) => {
          return this.deparse(item);
        });
        windowParts.push(orders.join(", "));
        useParens = true;
      }
      if (frameOptions.length) {
        useParens = true;
        windowParts.push(frameOptions);
      }
      if (useParens && context !== "window") {
        return output.join(" ") + " (" + windowParts.join(" ") + ")";
      }
      return output.join(" ") + windowParts.join(" ");
    }
    WithClause(node, context = {}) {
      const output = ["WITH"];
      if (node.recursive) {
        output.push("RECURSIVE");
      }
      output.push(this.list(node.ctes, ", ", "", context));
      return output.join(" ");
    }
    CopyStmt(node, context = {}) {
      const output = ["COPY"];
      output.push("(" + this.deparse(node.query, context) + ")");
      output.push("TO");
      output.push(`'${node.filename}'`);
      const options = unwrapList(node.options);
      if (options?.length > 0 && options[0].DefElem.defname === "format") {
        output.push(`(FORMAT '${this.deparse(options[0].DefElem.arg)}')`);
      }
      return output.join(" ");
    }
    CallStmt(node, context = {}) {
      const output = ["CALL"];
      output.push(this.deparse(unwrapList(node.funccall.funcname)[0]));
      const funccallArgs = unwrapList(node.funccall.args);
      if (funccallArgs && funccallArgs.length) {
        output.push("(" + this.list(funccallArgs, ", ", "", context) + ")");
      } else {
        output.push("()");
      }
      return output.join(" ");
    }
    deparseFrameOptions(options, refName, startOffset, endOffset) {
      const FRAMEOPTION_NONDEFAULT = 1;
      const FRAMEOPTION_RANGE = 2;
      const FRAMEOPTION_ROWS = 4;
      const FRAMEOPTION_GROUPS = 8;
      const FRAMEOPTION_BETWEEN = 16;
      const FRAMEOPTION_START_UNBOUNDED_PRECEDING = 32;
      const FRAMEOPTION_END_UNBOUNDED_PRECEDING = 64;
      const FRAMEOPTION_START_UNBOUNDED_FOLLOWING = 128;
      const FRAMEOPTION_END_UNBOUNDED_FOLLOWING = 256;
      const FRAMEOPTION_START_CURRENT_ROW = 512;
      const FRAMEOPTION_END_CURRENT_ROW = 1024;
      const FRAMEOPTION_START_OFFSET_PRECEDING = 2048;
      const FRAMEOPTION_END_OFFSET_PRECEDING = 4096;
      const FRAMEOPTION_START_OFFSET_FOLLOWING = 8192;
      const FRAMEOPTION_END_OFFSET_FOLLOWING = 16384;
      const FRAMEOPTION_EXCLUDE_CURRENT_ROW = 32768;
      const FRAMEOPTION_EXCLUDE_GROUP = 65536;
      const FRAMEOPTION_EXCLUDE_TIES = 131072;
      if (!(options & FRAMEOPTION_NONDEFAULT)) {
        return "";
      }
      const output = [];
      if (refName != null) {
        output.push(refName);
      }
      if (options & FRAMEOPTION_RANGE) {
        output.push("RANGE");
      }
      if (options & FRAMEOPTION_ROWS) {
        output.push("ROWS");
      }
      const between = options & FRAMEOPTION_BETWEEN;
      if (between) {
        output.push("BETWEEN");
      }
      if (options & FRAMEOPTION_START_UNBOUNDED_PRECEDING) {
        output.push("UNBOUNDED PRECEDING");
      }
      if (options & FRAMEOPTION_START_UNBOUNDED_FOLLOWING) {
        output.push("UNBOUNDED FOLLOWING");
      }
      if (options & FRAMEOPTION_START_CURRENT_ROW) {
        output.push("CURRENT ROW");
      }
      if (options & FRAMEOPTION_START_OFFSET_PRECEDING) {
        output.push(this.deparse(startOffset) + " PRECEDING");
      }
      if (options & FRAMEOPTION_START_OFFSET_FOLLOWING) {
        output.push(this.deparse(startOffset) + " FOLLOWING");
      }
      if (between) {
        output.push("AND");
        if (options & FRAMEOPTION_END_UNBOUNDED_PRECEDING) {
          output.push("UNBOUNDED PRECEDING");
        }
        if (options & FRAMEOPTION_END_UNBOUNDED_FOLLOWING) {
          output.push("UNBOUNDED FOLLOWING");
        }
        if (options & FRAMEOPTION_END_CURRENT_ROW) {
          output.push("CURRENT ROW");
        }
        if (options & FRAMEOPTION_END_OFFSET_PRECEDING) {
          output.push(this.deparse(endOffset) + " PRECEDING");
        }
        if (options & FRAMEOPTION_END_OFFSET_FOLLOWING) {
          output.push(this.deparse(endOffset) + " FOLLOWING");
        }
      }
      return output.join(" ");
    }
    deparseInterval(node) {
      const type = ["interval"];
      if (node.arrayBounds != null) {
        type.push("[]");
      }
      if (node.typmods) {
        const nodeTypmods = unwrapList(node.typmods);
        const typmods = nodeTypmods.map((item) => this.deparse(item));
        let intervals = this.interval(typmods[0]);
        if (nodeTypmods[0] && nodeTypmods[0].A_Const && nodeTypmods[0].A_Const.val.Integer.ival === 32767 && nodeTypmods[1] && nodeTypmods[1].A_Const != null) {
          intervals = [`(${nodeTypmods[1].A_Const.val.Integer.ival})`];
        } else {
          intervals = unwrapList(intervals).map((part) => {
            if (part === "second" && typmods.length === 2) {
              return "second(" + typmods[typmods.length - 1] + ")";
            }
            return part;
          });
        }
        type.push(intervals.join(" to "));
      }
      return type.join(" ");
    }
    interval(mask) {
      if (this.MASKS == null) {
        this.MASKS = {
          0: "RESERV",
          1: "MONTH",
          2: "YEAR",
          3: "DAY",
          4: "JULIAN",
          5: "TZ",
          6: "DTZ",
          7: "DYNTZ",
          8: "IGNORE_DTF",
          9: "AMPM",
          10: "HOUR",
          11: "MINUTE",
          12: "SECOND",
          13: "MILLISECOND",
          14: "MICROSECOND",
          15: "DOY",
          16: "DOW",
          17: "UNITS",
          18: "ADBC",
          19: "AGO",
          20: "ABS_BEFORE",
          21: "ABS_AFTER",
          22: "ISODATE",
          23: "ISOTIME",
          24: "WEEK",
          25: "DECADE",
          26: "CENTURY",
          27: "MILLENNIUM",
          28: "DTZMOD"
        };
      }
      if (this.BITS == null) {
        this.BITS = inverted(this.MASKS);
      }
      if (this.INTERVALS == null) {
        this.INTERVALS = {};
        this.INTERVALS[1 << this.BITS.YEAR] = ["year"];
        this.INTERVALS[1 << this.BITS.MONTH] = ["month"];
        this.INTERVALS[1 << this.BITS.DAY] = ["day"];
        this.INTERVALS[1 << this.BITS.HOUR] = ["hour"];
        this.INTERVALS[1 << this.BITS.MINUTE] = ["minute"];
        this.INTERVALS[1 << this.BITS.SECOND] = ["second"];
        this.INTERVALS[1 << this.BITS.YEAR | 1 << this.BITS.MONTH] = [
          "year",
          "month"
        ];
        this.INTERVALS[1 << this.BITS.DAY | 1 << this.BITS.HOUR] = [
          "day",
          "hour"
        ];
        this.INTERVALS[1 << this.BITS.DAY | 1 << this.BITS.HOUR | 1 << this.BITS.MINUTE] = ["day", "minute"];
        this.INTERVALS[1 << this.BITS.DAY | 1 << this.BITS.HOUR | 1 << this.BITS.MINUTE | 1 << this.BITS.SECOND] = ["day", "second"];
        this.INTERVALS[1 << this.BITS.HOUR | 1 << this.BITS.MINUTE] = [
          "hour",
          "minute"
        ];
        this.INTERVALS[1 << this.BITS.HOUR | 1 << this.BITS.MINUTE | 1 << this.BITS.SECOND] = ["hour", "second"];
        this.INTERVALS[1 << this.BITS.MINUTE | 1 << this.BITS.SECOND] = [
          "minute",
          "second"
        ];
        this.INTERVALS[this.INTERVAL_FULL_RANGE = "32767"] = [];
      }
      return this.INTERVALS[mask.toString()];
    }
  }
  exports.default = Deparser;
});

// node_modules/pgsql-deparser/main/index.js
var require_main2 = __commonJS((exports) => {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Deparser = exports.deparse = undefined;
  var deparser_1 = __importDefault(require_deparser());
  exports.Deparser = deparser_1.default;
  var deparse = deparser_1.default.deparse;
  exports.deparse = deparse;
});

// node_modules/libpg-query/build/Release/queryparser.node
var require_queryparser = __commonJS((exports, module) => {
  module.exports = __require("./queryparser-hz1q7a0m.node");
});

// node_modules/libpg-query/index.js
var require_libpg_query = __commonJS((exports, module) => {
  var PgQuery = require_queryparser();
  module.exports = {
    parseQuery(query) {
      return new Promise((resolve, reject) => {
        PgQuery.parseQueryAsync(query, (err, result) => {
          err ? reject(err) : resolve(JSON.parse(result));
        });
      });
    },
    parsePlPgSQL(query) {
      return new Promise((resolve, reject) => {
        PgQuery.parsePlPgSQLAsync(query, (err, result) => {
          err ? reject(err) : resolve(JSON.parse(result));
        });
      });
    },
    parseQuerySync(query) {
      return JSON.parse(PgQuery.parseQuerySync(query));
    },
    parsePlPgSQLSync(query) {
      return JSON.parse(PgQuery.parsePlPgSQLSync(query));
    },
    fingerprint(query) {
      return new Promise((resolve, reject) => {
        PgQuery.fingerprintAsync(query, (err, result) => {
          err ? reject(err) : resolve(result);
        });
      });
    },
    fingerprintSync(query) {
      return PgQuery.fingerprintSync(query);
    }
  };
});

// node_modules/pgsql-parser/main/index.js
var require_main3 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.parseFunction = exports.Deparser = exports.deparse = exports.parseAsync = exports.parse = undefined;
  var pgsql_deparser_1 = require_main2();
  Object.defineProperty(exports, "Deparser", { enumerable: true, get: function() {
    return pgsql_deparser_1.Deparser;
  } });
  Object.defineProperty(exports, "deparse", { enumerable: true, get: function() {
    return pgsql_deparser_1.deparse;
  } });
  var libpg_query_1 = require_libpg_query();
  Object.defineProperty(exports, "parseFunction", { enumerable: true, get: function() {
    return libpg_query_1.parsePlPgSQLSync;
  } });
  function mapStmt({ stmt, stmt_len, stmt_location }) {
    return {
      RawStmt: {
        stmt,
        stmt_len,
        stmt_location: stmt_location || 0
      }
    };
  }
  var parse = (sql) => {
    if (!sql)
      throw new Error("no SQL provided to parser");
    const result = (0, libpg_query_1.parseQuerySync)(sql);
    return result.stmts.map(mapStmt);
  };
  exports.parse = parse;
  var parseAsync = async (sql) => {
    if (!sql)
      throw new Error("no SQL provided to parser");
    const result = await (0, libpg_query_1.parseQuery)(sql);
    return result.stmts.map(mapStmt);
  };
  exports.parseAsync = parseAsync;
});

// action-entrypoint.ts
var import_pgsql_parser = __toESM(require_main3(), 1);
var filePaths = Bun.env.SQL_FILES?.split(" ") || [];
var errors = [];
for (const path of filePaths) {
  const file = await Bun.file(path).text();
  const statements = file.split(";").filter((sta) => sta.trim());
  for (const statement of statements) {
    try {
      import_pgsql_parser.parse(statement);
    } catch (error) {
      const e = error;
      errors.push(`Error in file [${path}]: ${e.message}`);
    }
  }
}
if (errors.length > 0) {
  console.error("The following syntax errors were detected. Please review the syntax and ensure it conforms to PostgreSQL standards:\n");
  console.error(errors.join("\n"));
  if (Bun.env.GITHUB_OUTPUT)
    await Bun.write(Bun.env.GITHUB_OUTPUT, `sql_errors=${errors.join("@split_here@")}`);
  process.exit(1);
} else {
  console.log("No syntax errors found in the SQL files.");
  if (Bun.env.GITHUB_OUTPUT)
    await Bun.write(Bun.env.GITHUB_OUTPUT, `sql_errors=No syntax errors found.`);
}
