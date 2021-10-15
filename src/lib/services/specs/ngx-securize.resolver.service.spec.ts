import { waitForAsync, TestBed } from '@angular/core/testing';
import { NGXSecurizeAPI } from '../../nxg-securize.models';
import { NGXSecurizeInjector } from '../../ngx-securize.injector';
import { NGXSecurizeResolver } from '../ngx-securize.resolver.service';
import { NGXSecurizeConfAccesor } from '../../ngx-securize.constants';

const api: NGXSecurizeAPI = {
  check: (roles: string[]) => roles.includes('fakerol'),
};

describe('NGXSecurizeResolver', () => {
  let service: NGXSecurizeResolver;
  describe('--> without config', () => {
    beforeEach(
      waitForAsync(() => {
        TestBed.configureTestingModule({
          providers: [NGXSecurizeResolver],
        }).compileComponents();
      }),
    );

    beforeEach(() => {
      service = TestBed.inject(NGXSecurizeResolver);
    });

    test('should exists', () => expect(service).toBeDefined());
    test('should have no conf', () => expect(service['conf']).toBeNull());
    test('should have a [NGXSecurizeConfAccesor] method', () => expect(service[NGXSecurizeConfAccesor]()).toBeNull());
  });

  describe('--> with config', () => {
    beforeEach(
      waitForAsync(() => {
        TestBed.configureTestingModule({
          providers: [
            NGXSecurizeResolver,
            {
              provide: NGXSecurizeInjector,
              useValue: api,
            },
          ],
        }).compileComponents();
      }),
    );

    beforeEach(() => {
      service = TestBed.inject(NGXSecurizeResolver);
    });

    test('should have no conf', () => expect(service['conf']).toMatchObject(api));
    test('should have a [NGXSecurizeConfAccesor] method', () =>
      expect(service[NGXSecurizeConfAccesor]()).toMatchObject(api));
  });
});
