import { Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { NGXSecurizeResolverAccesor } from './ngx-securize.constants';
import { NGXSecurizeProvider } from './nxg-securize.models';
import { NGXSecurizeService } from './services';
import { NGXSecurizeServicesModule } from './services/ngx-securize.services.module';

@NgModule({
  imports: [NGXSecurizeServicesModule],
})
export class NGXSecurizeModule {
  static injector: Injector;

  constructor(injector: Injector) {
    NGXSecurizeModule.injector = injector;
  }

  static [NGXSecurizeResolverAccesor](): NGXSecurizeService {
    return this.injector?.get<NGXSecurizeService>(NGXSecurizeService);
  }

  static forRoot(
    conf?: NGXSecurizeProvider
  ): ModuleWithProviders<NGXSecurizeModule> {
    if (!conf) {
      return {
        ngModule: NGXSecurizeModule,
      };
    }
    return {
      ngModule: NGXSecurizeModule,
      providers: [conf.useProvider],
    };
  }
}
