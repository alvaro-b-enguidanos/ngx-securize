import { Inject, Injectable, Optional } from '@angular/core';
import { NGXSecurizeConfAccesor } from '../ngx-securize.constants';
import { NGXSecurizeInjector } from '../ngx-securize.injector';
import { NGXSecurizeAPI } from '../nxg-securize.models';
import { NGXSecurizeServicesModule } from './ngx-securize.services.module';

@Injectable({
  providedIn: NGXSecurizeServicesModule,
})
export class NGXSecurizeResolver {
  constructor(@Optional() @Inject(NGXSecurizeInjector) private conf: NGXSecurizeAPI) {}

  public [NGXSecurizeConfAccesor](): NGXSecurizeAPI {
    return this.conf;
  }
}
