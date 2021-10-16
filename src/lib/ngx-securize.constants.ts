import { SecurizeEnvEnum, SecurizeEnvType } from './nxg-securize.models';
import { SecurizeMethodConf } from './nxg-securize.models';

export const SECURIZE_CONF_ACCESOR = Symbol('__SECURIZE_CONF_ACCESOR__');
export const SECURIZE_ENV_ACCESOR = Symbol('__SECURIZE_ENV_ACCESOR__');
export const SECURIZE_RESOLVER_ACCESOR = Symbol('__SECURIZE_RESOLVER_ACCESOR__');
export const SECURIZE_FACTORY_ACCESOR = Symbol('__SECURIZE_FACTORY_ACCESOR__');

export const SECURIZE_ENV_TESTING: SecurizeEnvType = SecurizeEnvEnum.TEST;

export const DEFAULT_SECURIZE_METHOD_DECORATOR_CONF: SecurizeMethodConf = {
  debug: false,
};
