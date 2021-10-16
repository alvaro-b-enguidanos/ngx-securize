import { DEFAULT_SECURIZE_METHOD_DECORATOR_CONF } from './ngx-securize.constants';
import { SecurizeMethodConf } from './nxg-securize.models';

export const defineAndSeal = <T, K>(obj: T, value: K, key: string | symbol) =>
  Object.defineProperty(obj, key, {
    value,
    writable: false,
    configurable: false,
  });

export const initializeMethodDecoratorConf = (conf?: SecurizeMethodConf): SecurizeMethodConf => ({
  ...DEFAULT_SECURIZE_METHOD_DECORATOR_CONF,
  ...(conf ?? {}),
});
