import { FactoryProvider } from '@angular/core';

export interface NGXSecurizeAPI {
  check: (...args: any[]) => boolean;
}

export interface NGXSecurizeProvider {
  useProvider: FactoryProvider;
}

export interface NGXSecurizeMethodConf {
  debug?: boolean;
}

export enum NGXSecurizeEnvEnum {
  TEST = 'TEST',
  PROD = 'PROD',
}

export type NGXSecurizeEnvType =
  | NGXSecurizeEnvEnum.PROD
  | NGXSecurizeEnvEnum.TEST;
