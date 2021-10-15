import { TestBed, waitForAsync } from '@angular/core/testing';
import { NGXSecurizeEnvAccesor } from '../../ngx-securize.constants';
import { NGXSecurizeInjectorEnv } from '../../ngx-securize.injector';
import { NGXSecurizeEnvEnum, NGXSecurizeAPI } from '../../nxg-securize.models';
import { NGXSecurizeResolver } from '../ngx-securize.resolver.service';
import { NGXSecurizeService } from '../ngx-securize.service';

describe('NGXSecurizeService', () => {
  let service: NGXSecurizeService;

  describe('--> without injector', () => {
    beforeEach(
      waitForAsync(() => {
        TestBed.configureTestingModule({
          providers: [NGXSecurizeService, NGXSecurizeResolver],
        }).compileComponents();
      }),
    );

    beforeEach(() => {
      service = TestBed.inject(NGXSecurizeService);
    });

    test('should exists', () => expect(service).toBeDefined());

    test('(by default) should be in prod', () => expect(service['_env']).toBe(NGXSecurizeEnvEnum.PROD));
    test('(by default) should have not conf', () => expect(service['_conf']).toBeUndefined());

    test('should have a check method', () => {
      const conf: NGXSecurizeAPI = {
        check: roles => roles.includes('test'),
      };
      service['_conf'] = conf;
      expect(service.check('read')).toBeFalsy();
      expect(service.check('test')).toBeTruthy();
    });

    test('should have a [NGXSecurizeEnvAccesor] method', () => {
      expect(service[NGXSecurizeEnvAccesor]()).toBe(NGXSecurizeEnvEnum.PROD);
    });

    test('should have a setConf method', () => {
      const conf: NGXSecurizeAPI = {
        check: (...args) => false,
      };
      service['setConf'](conf);
      expect(service['_conf']).toMatchObject(conf);
    });

    test('should have a setConf method that ignores nullish values', () => {
      service['setConf'](null);
      expect(service['_conf']).toBeUndefined();
    });

    test('should have a setEnv method', () => {
      service['setEnv'](NGXSecurizeEnvEnum.TEST);
      expect(service['_env']).toBe(NGXSecurizeEnvEnum.TEST);
    });

    test('should have a setEnv method that ignores nullish values', () => {
      service['setEnv'](null);
      expect(service['_env']).toBe(NGXSecurizeEnvEnum.PROD);
    });
  });

  describe('--> with injector', () => {
    beforeEach(
      waitForAsync(() => {
        TestBed.configureTestingModule({
          providers: [
            NGXSecurizeService,
            NGXSecurizeResolver,
            {
              provide: NGXSecurizeInjectorEnv,
              useValue: NGXSecurizeEnvEnum.TEST,
            },
          ],
        }).compileComponents();
      }),
    );

    beforeEach(() => {
      service = TestBed.inject(NGXSecurizeService);
    });

    test('should be in test mode', () => expect(service['_env']).toBe(NGXSecurizeEnvEnum.TEST));
  });
});
