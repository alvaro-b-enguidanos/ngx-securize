import { waitForAsync, TestBed } from '@angular/core/testing';
import { SecurizeAPI } from '../../nxg-securize.models';
import { SECURIZE_INJECTOR } from '../../ngx-securize.injector';
import { SecurizeResolver } from '../ngx-securize.resolver.service';
import { SECURIZE_CONF_ACCESOR } from '../../ngx-securize.constants';

const api: SecurizeAPI = {
  check: (roles: string[]) => roles.includes('fakerol'),
};

describe('SecurizeResolver', () => {
  let service: SecurizeResolver;
  describe('--> without config', () => {
    beforeEach(
      waitForAsync(() => {
        TestBed.configureTestingModule({
          providers: [SecurizeResolver],
        }).compileComponents();
      }),
    );

    beforeEach(() => {
      service = TestBed.inject(SecurizeResolver);
    });

    test('should exists', () => expect(service).toBeDefined());
    test('should have no conf', () => expect(service['conf']).toBeNull());
    test('should have a [SECURIZE_CONF_ACCESOR] method', () => expect(service[SECURIZE_CONF_ACCESOR]()).toBeNull());
  });

  describe('--> with config', () => {
    beforeEach(
      waitForAsync(() => {
        TestBed.configureTestingModule({
          providers: [
            SecurizeResolver,
            {
              provide: SECURIZE_INJECTOR,
              useValue: api,
            },
          ],
        }).compileComponents();
      }),
    );

    beforeEach(() => {
      service = TestBed.inject(SecurizeResolver);
    });

    test('should have no conf', () => expect(service['conf']).toMatchObject(api));
    test('should have a [SECURIZE_CONF_ACCESOR] method', () =>
      expect(service[SECURIZE_CONF_ACCESOR]()).toMatchObject(api));
  });
});
