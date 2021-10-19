import { waitForAsync, TestBed } from '@angular/core/testing';
import { SecurizeModule, SecurizeProvider, SecurizeResolver } from '../';

// const conf: SecurizeProvider;
// const injector = SecurizeModule.injector;

// const restore = () => {
//   SecurizeModule.injector = injector;
// };

const providedApi = {
  check: () => true,
};
const factory = () => {
  return new SecurizeResolver(providedApi);
};

const conf: SecurizeProvider = {
  useProvider: {
    provide: SecurizeResolver,
    useFactory: factory,
  },
};
describe('SecurizeModule', () => {
  let module: SecurizeModule;
  let resolver: SecurizeResolver;

  describe('--> with conf', () => {
    beforeEach(
      waitForAsync(() => {
        TestBed.configureTestingModule({
          imports: [SecurizeModule.forRoot(conf)],
        }).compileComponents();
      }),
    );

    beforeEach(() => {
      module = TestBed.inject(SecurizeModule);
      resolver = TestBed.inject(SecurizeResolver);
    });

    it('should exists', () => expect(module).toBeDefined());

    it('should resolve a config', () => {
      expect(resolver['conf']).toEqual(providedApi);
    });
  });

  describe('--> without conf', () => {
    beforeEach(
      waitForAsync(() => {
        TestBed.configureTestingModule({
          imports: [SecurizeModule.forRoot()],
        }).compileComponents();
      }),
    );

    beforeEach(() => {
      module = TestBed.inject(SecurizeModule);
      resolver = TestBed.inject(SecurizeResolver);
    });

    it('should exists', () => expect(module).toBeDefined());

    it('should have no conf', () => {
      expect(resolver['conf']).toBeNull();
    });
  });
});
