import { NGXSecurizeEnvEnum, NGXSecurizeEnvType } from './nxg-securize.models';
import { NGXSecurizeMethodConf } from './nxg-securize.models';

export const NGXSecurizeConfAccesor = Symbol('__NGXSecurizeConfAccesor__');
export const NGXSecurizeEnvAccesor = Symbol('__NGXSecurizeEnvAccesor__');
export const NGXSecurizeResolverAccesor = Symbol('__NGXSecurizeResolverAccesor__');
export const NGXSecurizeFactoryAccesor = Symbol('__NGXSecurizeFactoryAccesor__');

export const NGXSecurizeEnvTesting: NGXSecurizeEnvType = NGXSecurizeEnvEnum.TEST;

export const NGXDefaultSecurizeMethodDecoratorConf: NGXSecurizeMethodConf = {
  debug: false,
};
