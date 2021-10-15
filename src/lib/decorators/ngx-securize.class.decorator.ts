import { NGXSecurizeResolverAccesor, NGXSecurizeFactoryAccesor } from '../ngx-securize.constants';
import { NGXSecurizeModule } from '../ngx-securize.module';
import { NGXSecurizeService } from '../services';
import { defineAndSeal } from '../utils';

export const NGXSecurizeClass =
  () =>
  <T extends new (...args: any[]) => unknown>(constructor: T) => {
    try {
      const serviceFactory = (): NGXSecurizeService => NGXSecurizeModule[NGXSecurizeResolverAccesor]();

      defineAndSeal<T, () => NGXSecurizeService>(constructor.prototype, serviceFactory, NGXSecurizeFactoryAccesor);
    } catch (error) {
      console.error(`:: NGXSecurizeClass :: ${error}`);
    }

    return constructor;
  };
