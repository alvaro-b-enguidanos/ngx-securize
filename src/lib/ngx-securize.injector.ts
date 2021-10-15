import { InjectionToken } from '@angular/core';
import { NGXSecurizeEnvType } from './nxg-securize.models';
import { NGXSecurizeAPI } from './nxg-securize.models';

export const NGXSecurizeInjector: InjectionToken<NGXSecurizeAPI> = new InjectionToken<NGXSecurizeAPI>(
  'NGXSecurizeInjector',
);

export const NGXSecurizeInjectorEnv: InjectionToken<NGXSecurizeEnvType> = new InjectionToken<NGXSecurizeEnvType>(
  'NGXSecurizeInjectorEnv',
);
