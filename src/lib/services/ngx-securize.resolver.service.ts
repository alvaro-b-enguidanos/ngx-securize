import { Inject, Injectable, Optional } from '@angular/core';
import { SECURIZE_CONF_ACCESOR } from '../ngx-securize.constants';
import { SECURIZE_INJECTOR } from '../ngx-securize.injector';
import { SecurizeAPI } from '../nxg-securize.models';
import { SecurizeServicesModule } from './ngx-securize.services.module';

@Injectable({
  providedIn: SecurizeServicesModule,
})
export class SecurizeResolver {
  constructor(@Optional() @Inject(SECURIZE_INJECTOR) private conf: SecurizeAPI) {}

  public [SECURIZE_CONF_ACCESOR](): SecurizeAPI {
    return this.conf;
  }
}
