import { NGXDefaultSecurizeMethodDecoratorConf } from './ngx-securize.constants';
import { NGXSecurizeMethodConf } from './nxg-securize.models';

export const defineAndSeal = <T, K>(obj: T, value: K, key: string | symbol) =>
  Object.defineProperty(obj, key, {
    value,
    writable: false,
    configurable: false,
  });

export const initializeMethodDecoratorConf = (
  conf?: NGXSecurizeMethodConf
): NGXSecurizeMethodConf => ({
  ...NGXDefaultSecurizeMethodDecoratorConf,
  ...(conf ?? {}),
});
