import { Injectable } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { SecurizeModule } from '../../ngx-securize.module';
import { SECURIZE_FACTORY_ACCESOR } from '../../ngx-securize.constants';
import { SecurizeClass } from '../ngx-securize.class.decorator';
import { SecurizeService } from '../../services';

@Injectable()
@SecurizeClass()
class TestClass {}

describe('SecurizeClass', () => {
  let testClass: TestClass;

  it('should be defined', () => expect(SecurizeClass).toBeDefined());

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        providers: [TestClass],
        imports: [SecurizeModule.forRoot()],
      });
    }),
  );

  beforeEach(() => {
    testClass = TestBed.inject(TestClass);
  });

  it('should write private metadata', () => {
    expect(typeof testClass[SECURIZE_FACTORY_ACCESOR]).toBe('function');
  });

  it('should create a factory to acees the securizeService', () => {
    const factory = testClass[SECURIZE_FACTORY_ACCESOR];
    const service = factory();
    expect(service instanceof SecurizeService).toBeTruthy();
  });
});
