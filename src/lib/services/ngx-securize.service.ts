import { Inject, Injectable, Optional } from '@angular/core';
import { NGXSecurizeAPI, NGXSecurizeEnvType } from '../nxg-securize.models';
import { NGXSecurizeConfAccesor, NGXSecurizeEnvAccesor } from '../ngx-securize.constants';
import { NGXSecurizeResolver } from './ngx-securize.resolver.service';
import { NGXSecurizeServicesModule } from './ngx-securize.services.module';
import { NGXSecurizeInjectorEnv } from '../ngx-securize.injector';
import { NGXSecurizeEnvEnum } from '../nxg-securize.models';

@Injectable({
  providedIn: NGXSecurizeServicesModule,
})
export class NGXSecurizeService implements NGXSecurizeAPI {
  private _conf!: NGXSecurizeAPI;
  private _env: NGXSecurizeEnvType = NGXSecurizeEnvEnum.PROD;

  constructor(
    @Optional() @Inject(NGXSecurizeInjectorEnv) private env: NGXSecurizeEnvType,
    private resolver: NGXSecurizeResolver,
  ) {
    this.setConf(this.resolver[NGXSecurizeConfAccesor]());
    this.setEnv(this.env);
  }

  public check(...args: any[]): boolean {
    return this[NGXSecurizeConfAccesor]().check(...args);
  }

  public [NGXSecurizeEnvAccesor](): NGXSecurizeEnvType {
    return this._env;
  }

  private setConf(c: NGXSecurizeAPI): void {
    if (!c) {
      return;
    }
    this._conf = c;
  }

  private setEnv(env: NGXSecurizeEnvType): void {
    if (!env) {
      return;
    }
    this._env = env;
  }

  private [NGXSecurizeConfAccesor](): NGXSecurizeAPI {
    return this._conf;
  }
}
