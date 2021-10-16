import { InjectionToken } from '@angular/core';
import { SecurizeEnvType } from './nxg-securize.models';
import { SecurizeAPI } from './nxg-securize.models';

export const SECURIZE_INJECTOR: InjectionToken<SecurizeAPI> = new InjectionToken<SecurizeAPI>('SECURIZE_INJECTOR');

export const SECURIZE_INJECTOR_ENV: InjectionToken<SecurizeEnvType> = new InjectionToken<SecurizeEnvType>(
  'SECURIZE_INJECTOR_ENV',
);
