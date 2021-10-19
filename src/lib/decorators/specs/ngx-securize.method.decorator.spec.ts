import { Injectable } from '@angular/core';
import { waitForAsync, TestBed } from '@angular/core/testing';
import { SecurizeClass } from '../ngx-securize.class.decorator';
import { SecurizeModule } from '../../ngx-securize.module';
import { SecurizeMethod } from '../ngx-securize.method.decorator';
import { SECURIZE_ENV_ACCESOR, SECURIZE_FACTORY_ACCESOR } from '../../ngx-securize.constants';
import { SecurizeEnvEnum } from '../../nxg-securize.models';

let fakeRoles = ['read', 'write'];
let env = SecurizeEnvEnum.PROD;
const fakeService = {
  check: (role: string) => fakeRoles.includes(role),
  [SECURIZE_ENV_ACCESOR]: () => env,
};
const accesor = () => fakeService;

@Injectable()
class TestClass {
  methodCalled(method: string, ...params) {}

  @SecurizeMethod('write')
  method1() {
    this.methodCalled('method1');
  }

  @SecurizeMethod('delete')
  method2() {
    this.methodCalled('method2');
  }

  @SecurizeMethod('read', {
    debug: true,
  })
  method3(...args) {
    this.methodCalled('method3', ...args);
  }

  [SECURIZE_FACTORY_ACCESOR] = accesor;
}

describe('SecurizeMethod', () => {
  let testClass: TestClass;

  it('should be defined', () => expect(SecurizeMethod).toBeDefined());

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        providers: [TestClass],
        // imports: [SecurizeModule.forRoot()],
      });
    }),
  );

  beforeEach(() => {
    env = SecurizeEnvEnum.PROD;
    testClass = TestBed.inject(TestClass);
    testClass[SECURIZE_FACTORY_ACCESOR] = accesor;
  });

  it('should allow', () => {
    const spy = jest.spyOn(testClass, 'methodCalled');

    testClass.method1();

    expect(spy).toHaveBeenCalledWith('method1');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should allow and keep the params', () => {
    const spy = jest.spyOn(testClass, 'methodCalled');

    testClass.method3('foo');

    expect(spy).toHaveBeenCalledWith('method3', 'foo');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should not allow', () => {
    const spy = jest.spyOn(testClass, 'methodCalled');

    testClass.method2();

    expect(spy).not.toHaveBeenCalled();
  });

  it('should allow always on test env', () => {
    const spy = jest.spyOn(testClass, 'methodCalled');
    env = SecurizeEnvEnum.TEST;

    testClass.method2();

    expect(spy).toHaveBeenCalledWith('method2');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should allow if cannot access to service', () => {
    const spy = jest.spyOn(testClass, 'methodCalled');
    testClass[SECURIZE_FACTORY_ACCESOR] = () => undefined;

    testClass.method2();

    expect(spy).toHaveBeenCalledWith('method2');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should control an error', () => {
    const spy = jest.spyOn(testClass, 'methodCalled');
    testClass[SECURIZE_FACTORY_ACCESOR] = () => {
      throw `fake error`;
    };

    expect(() => testClass.method2()).toThrowError();
  });
});
