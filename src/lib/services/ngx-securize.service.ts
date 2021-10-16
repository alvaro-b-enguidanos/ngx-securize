import { Inject, Injectable, Optional } from '@angular/core';
import { SecurizeAPI, SecurizeEnvType } from '../nxg-securize.models';
import { SECURIZE_CONF_ACCESOR, SECURIZE_ENV_ACCESOR } from '../ngx-securize.constants';
import { SecurizeResolver } from './ngx-securize.resolver.service';
import { SecurizeServicesModule } from './ngx-securize.services.module';
import { SECURIZE_INJECTOR_ENV } from '../ngx-securize.injector';
import { SecurizeEnvEnum } from '../nxg-securize.models';

@Injectable({
  providedIn: SecurizeServicesModule,
})
export class SecurizeService implements SecurizeAPI {
  private _conf!: SecurizeAPI;
  private _env: SecurizeEnvType = SecurizeEnvEnum.PROD;

  constructor(
    @Optional() @Inject(SECURIZE_INJECTOR_ENV) private env: SecurizeEnvType,
    private resolver: SecurizeResolver,
  ) {
    this.setConf(this.resolver[SECURIZE_CONF_ACCESOR]());
    this.setEnv(this.env);
  }

  public check(arg: any): boolean {
    return this[SECURIZE_CONF_ACCESOR]().check(arg);
  }

  public [SECURIZE_ENV_ACCESOR](): SecurizeEnvType {
    return this._env;
  }

  private setConf(c: SecurizeAPI): void {
    if (!c) {
      return;
    }
    this._conf = c;
  }

  private setEnv(env: SecurizeEnvType): void {
    if (!env) {
      return;
    }
    this._env = env;
  }

  private [SECURIZE_CONF_ACCESOR](): SecurizeAPI {
    return this._conf;
  }
}
