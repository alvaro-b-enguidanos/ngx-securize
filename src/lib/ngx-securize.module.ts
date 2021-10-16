import { Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { SECURIZE_RESOLVER_ACCESOR } from './ngx-securize.constants';
import { SecurizeProvider } from './nxg-securize.models';
import { SecurizeService } from './services';
import { SecurizeServicesModule } from './services/ngx-securize.services.module';

@NgModule({
  imports: [SecurizeServicesModule],
})
export class SecurizeModule {
  static injector: Injector;

  constructor(injector: Injector) {
    SecurizeModule.injector = injector;
  }

  static [SECURIZE_RESOLVER_ACCESOR](): SecurizeService {
    return this.injector?.get<SecurizeService>(SecurizeService);
  }

  static forRoot(conf?: SecurizeProvider): ModuleWithProviders<SecurizeModule> {
    if (!conf) {
      return {
        ngModule: SecurizeModule,
      };
    }
    return {
      ngModule: SecurizeModule,
      providers: [conf.useProvider],
    };
  }
}
