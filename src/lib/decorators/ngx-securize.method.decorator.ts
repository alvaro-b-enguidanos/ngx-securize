import { NGXSecurizeEnvAccesor, NGXSecurizeFactoryAccesor } from '../ngx-securize.constants';
import { NGXSecurizeMethodConf, NGXSecurizeEnvEnum } from '../nxg-securize.models';
import { NGXSecurizeService } from '../services';
import { initializeMethodDecoratorConf } from '../utils';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};
const context = ':: NGXSecurizeMethod ::';
const noLog = (
  propertyKey: string,
  result: boolean,
  params?: any,
  args?: any[],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
) => {};
const log = (propertyKey: string, result: boolean, params?: any, args?: any[]) => {
  const message = `
${context}
  -- evaluating: ${propertyKey}
  -- params: ${params}
  -- args: ${args}
  -- result: ${result}
`;
  const styles = `color: #A6E2FF;`;
  // eslint-disable-next-line no-console
  console.log('%c%s', styles, message);
};

export const NGXSecurizeMethod =
  (param?: any, conf?: NGXSecurizeMethodConf) =>
  <T>(target: T, propertyKey: string, descriptor: PropertyDescriptor) => {
    try {
      const original = descriptor.value;
      const initializedConf = initializeMethodDecoratorConf(conf);
      const logger = initializedConf.debug ? log : noLog;

      /* eslint-disable prefer-arrow/prefer-arrow-functions */
      // eslint-disable-next-line space-before-function-paren
      const wrapped = function (...args: any[]) {
        /* eslint-enable prefer-arrow/prefer-arrow-functions */
        const serviceFactory = this[NGXSecurizeFactoryAccesor];
        const service: NGXSecurizeService = serviceFactory();

        if (service?.[NGXSecurizeEnvAccesor]() === NGXSecurizeEnvEnum.PROD) {
          const canAcces = service.check(param);
          logger(propertyKey, canAcces, param, args);

          if (!canAcces) {
            return noop;
          }
        }

        return original.apply(this, args);
      };

      descriptor.value = wrapped;
    } catch (error) {
      console.error(`${context} (${propertyKey}) ==> ${error}`);
    }
  };
