import { TestBed, waitForAsync } from '@angular/core/testing';
import { SECURIZE_ENV_ACCESOR } from '../../ngx-securize.constants';
import { SECURIZE_INJECTOR_ENV } from '../../ngx-securize.injector';
import { SecurizeEnvEnum, SecurizeAPI } from '../../nxg-securize.models';
import { SecurizeResolver } from '../ngx-securize.resolver.service';
import { SecurizeService } from '../ngx-securize.service';

describe('SecurizeService', () => {
  let service: SecurizeService;

  describe('--> without injector', () => {
    beforeEach(
      waitForAsync(() => {
        TestBed.configureTestingModule({
          providers: [SecurizeService, SecurizeResolver],
        }).compileComponents();
      }),
    );

    beforeEach(() => {
      service = TestBed.inject(SecurizeService);
    });

    test('should exists', () => expect(service).toBeDefined());

    test('(by default) should be in prod', () => expect(service['_env']).toBe(SecurizeEnvEnum.PROD));
    test('(by default) should have not conf', () => expect(service['_conf']).toBeUndefined());

    test('should have a check method', () => {
      const conf: SecurizeAPI = {
        check: roles => roles.includes('test'),
      };
      service['_conf'] = conf;
      expect(service.check('read')).toBeFalsy();
      expect(service.check('test')).toBeTruthy();
    });

    test('should have a [SECURIZE_ENV_ACCESOR] method', () => {
      expect(service[SECURIZE_ENV_ACCESOR]()).toBe(SecurizeEnvEnum.PROD);
    });

    test('should have a setConf method', () => {
      const conf: SecurizeAPI = {
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
      service['setEnv'](SecurizeEnvEnum.TEST);
      expect(service['_env']).toBe(SecurizeEnvEnum.TEST);
    });

    test('should have a setEnv method that ignores nullish values', () => {
      service['setEnv'](null);
      expect(service['_env']).toBe(SecurizeEnvEnum.PROD);
    });
  });

  describe('--> with injector', () => {
    beforeEach(
      waitForAsync(() => {
        TestBed.configureTestingModule({
          providers: [
            SecurizeService,
            SecurizeResolver,
            {
              provide: SECURIZE_INJECTOR_ENV,
              useValue: SecurizeEnvEnum.TEST,
            },
          ],
        }).compileComponents();
      }),
    );

    beforeEach(() => {
      service = TestBed.inject(SecurizeService);
    });

    test('should be in test mode', () => expect(service['_env']).toBe(SecurizeEnvEnum.TEST));
  });
});
