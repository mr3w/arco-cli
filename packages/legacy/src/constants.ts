import os from 'os';
import path from 'path';
import cliSpinners from 'cli-spinners';

const userHome = os.homedir();

function getDirectory(): string {
  if (process.platform === 'win32' && process.env.LOCALAPPDATA) {
    return path.join(process.env.LOCALAPPDATA, 'Arco');
  }
  return path.join(userHome, '.arco');
}

export const ENV_GLOBAL_CACHE_DIR = 'ARCO_GLOBAL_CACHE_DIR';

function getCacheDirectory(): string {
  const fromEnvVar = process.env[ENV_GLOBAL_CACHE_DIR];
  if (fromEnvVar && typeof fromEnvVar === 'string') {
    return fromEnvVar;
  }
  if (process.platform === 'darwin' || process.platform === 'linux') {
    return path.join(userHome, 'Library', 'Caches', 'Arco');
  }
  return getDirectory();
}

export const ENV_VARIABLE_CONFIG_PREFIX = 'ARCO_CONFIG_';

export const ENV_BUNDLE_SIZE_ANALYZER = 'BUNDLE_SIZE_ANALYZER';

export const ENV_BUNDLE_SPEED_ANALYZER = 'BUNDLE_SPEED_ANALYZER';

export const MATERIAL_GENERATION = 2;

/**
 * Dir or file path
 */
export const DIR_CACHE_ROOT = getCacheDirectory();

export const DIR_GLOBAL_CONFIG = path.join(DIR_CACHE_ROOT, 'config');

export const DIR_GLOBAL_LOGS = path.join(DIR_CACHE_ROOT, 'logs');

/**
 * A folder to write artifacts generated during a build task
 * This folder is used in the core envs and excluded by default from the package tar file
 */
export const DIR_ARTIFACTS = 'artifacts';

export const DIR_ARTIFACTS_PREVIEW = path.join(DIR_ARTIFACTS, 'preview');

export const DIR_ARTIFACTS_DOCS = path.join(DIR_ARTIFACTS, 'docs');

export const FILE_GLOBAL_CONFIG = 'config.json';

export const FILE_WORKSPACE_JSONC = 'arco.workspace.jsonc';

export const FILE_WORKSPACE_JS = 'arco.workspace.js';

export const PATH_DEBUG_LOGS = path.join(DIR_CACHE_ROOT, 'debug.log');

/**
 * Global config keys
 */
export const CFG_LOG_JSON_FORMAT = 'log_json_format';

export const CFG_LOG_LEVEL = 'log_level';

export const CFG_NO_WARNINGS = 'no_warnings';

export const CFG_USER_EMAIL_KEY = 'user.email';

export const CFG_USER_TOKEN_KEY = 'x-arco-token';

export const CFG_ACCESS_TOKEN_KEY = 'x-arco-access-token';

export const CFG_USER_NAME_KEY = 'user.name';

export const CFG_USER_ACCOUNT_TYPE_KET = 'user.accountType';

export const CFG_HOST_NPM_KEY = 'host.npm';

export const CFG_HOST_ARCO_KEY = 'host.arco';

export const CFG_ANALYTICS_DOMAIN_KEY = 'analytics_domain';

export const CFG_ANALYTICS_ANONYMOUS_KEY = 'anonymous_reporting';

export const CFG_ANALYTICS_REPORTING_KEY = 'analytics_reporting';

export const CFG_ANALYTICS_ERROR_REPORTS_KEY = 'error_reporting';

export const CFG_ANALYTICS_ENVIRONMENT_KEY = 'arco_environment';

export const CFG_ANALYTICS_USERID_KEY = 'analytics_id';

/**
 * Aspect info
 */
export const CORE_ASPECT_PACKAGE_NAME_MAP = {
  APP_ARCO: '@arco-cli/arco',
  ENV_REACT: '@arco-cli/react',
};

export const CORE_ASPECT_ID_MAP = {
  APP_ARCO: 'arco.app/arco',
  ENV_REACT: 'arco.env/react',
};

/**
 * Domain info
 */
export const BASE_WEB_DOMAIN = 'arco.design';

export const BASE_DOCS_DOMAIN = `${BASE_WEB_DOMAIN}/material`;

/**
 * Default values
 */
export const DEFAULT_ENV = CORE_ASPECT_ID_MAP.ENV_REACT;

export const DEFAULT_ENV_CONFIG_PATH = 'arco.env.config.js';

export const DEFAULT_ANALYTICS_DOMAIN = `TODO: date analytics`;

export const DEFAULT_DIST_DIRNAME = 'dist';

export const DEFAULT_BUILD_IGNORE_PATTERNS = ['**/__test__/**/*', '**/__docs__/**/*'];

export const DEFAULT_LANGUAGE = 'javascript';

export const DEFAULT_HOST_ARCO = 'arco.design';

export const DEFAULT_MATERIAL_GROUP_ID = 0;

export const DEFAULT_TEST_FILE_PATTERNS = ['**/?(*.)+(spec|test).[jt]s?(x)'];

/**
 * Others
 */
export const IS_WINDOWS = os.platform() === 'win32';

export const SPINNER_TYPE = IS_WINDOWS ? cliSpinners.dots : cliSpinners.dots12;

export const GIT_IGNORE = '.gitignore';

export const PACKAGE_JSON = 'package.json';

export const IGNORE_LIST = [
  '**/.gitignore',
  '**/node_modules/**',
  '**/package-lock.json',
  '**/yarn.lock',
  '**/LICENSE',
  '*/tsconfig.json',
];

/**
 * CLI help infos
 */
export const CLI_DESCRIPTION = '';

export const CLI_USAGE = '[--version] [--help] <command> [<args>]';

export const CLI_COMPONENT_PATTERN_HELP = `component name, package name, or component pattern. use component pattern to select multiple components.
use comma to separate patterns and "!" to exclude. e.g. "ui/**, !ui/button"
wrap the pattern with quotes`;

export const CLI_TASK_NAME_HELP = `build the specified task(s) only. for multiple tasks, separate by a comma.
specify the task-name (e.g. "TSCompilerESM") or the task-aspect-id (e.g. "arco.service/compiler");`;

export const CLI_LOGIN_FIRST_TIP = `please use 'arco login' to login in first`;

/**
 * Build task names
 */
export const BUILD_TASK_NAME_DOCS = 'HandleDocuments';

export const BUILD_TASK_NAME_PREVIEW = 'GeneratePreview';

export const BUILD_TASK_NAME_COMPILER_ESM = 'TSCompilerESM';

export const BUILD_TASK_NAME_COMPILER_CJS = 'TSCompilerCJS';
