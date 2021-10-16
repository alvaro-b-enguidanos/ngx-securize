import { SECURIZE_RESOLVER_ACCESOR, SECURIZE_FACTORY_ACCESOR } from '../ngx-securize.constants';
import { SecurizeModule } from '../ngx-securize.module';
import { SecurizeService } from '../services';
import { defineAndSeal } from '../utils';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const SecurizeClass =
  () =>
  <T extends new (...args: any[]) => unknown>(constructor: T) => {
    try {
      const serviceFactory = (): SecurizeService => SecurizeModule[SECURIZE_RESOLVER_ACCESOR]();

      defineAndSeal<T, () => SecurizeService>(constructor.prototype, serviceFactory, SECURIZE_FACTORY_ACCESOR);
    } catch (error) {
      console.error(`:: SecurizeClass :: ${error}`);
    }

    return constructor;
  };
