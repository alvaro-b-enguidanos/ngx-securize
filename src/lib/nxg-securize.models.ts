import { FactoryProvider } from '@angular/core';

export interface SecurizeAPI {
  check: (arg: any) => boolean;
}

export interface SecurizeProvider {
  useProvider: FactoryProvider;
}

export interface SecurizeMethodConf {
  debug?: boolean;
}

export enum SecurizeEnvEnum {
  TEST = 'TEST',
  PROD = 'PROD',
}

export type SecurizeEnvType = SecurizeEnvEnum.PROD | SecurizeEnvEnum.TEST;
