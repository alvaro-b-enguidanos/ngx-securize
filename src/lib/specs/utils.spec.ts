import { DEFAULT_SECURIZE_METHOD_DECORATOR_CONF } from '../ngx-securize.constants';
import { SecurizeMethodConf } from '../nxg-securize.models';
import { defineAndSeal, initializeMethodDecoratorConf } from '../utils';

describe('utils', () => {
  describe('--> defineAndSeal', () => {
    it('should exists', () => expect(defineAndSeal).toBeDefined());
    it('should define', () => {
      const gived = {};
      defineAndSeal(gived, 'bar', 'foo');
      expect(gived['foo']).toBe('bar');
    });
  });
  describe('--> initializeMethodDecoratorConf', () => {
    it('should exists', () => expect(initializeMethodDecoratorConf).toBeDefined());
    it('should merge', () => {
      const gived: SecurizeMethodConf = {
        debug: true,
      };
      const expected: SecurizeMethodConf = {
        debug: true,
      };
      const received: SecurizeMethodConf = initializeMethodDecoratorConf(gived);
      expect(received).toMatchObject(expected);
    });

    it('should return the default conf if no params provided', () => {
      const gived: SecurizeMethodConf = null;
      const expected: SecurizeMethodConf = DEFAULT_SECURIZE_METHOD_DECORATOR_CONF;
      const received: SecurizeMethodConf = initializeMethodDecoratorConf(gived);
      expect(received).toMatchObject(expected);
    });
  });
});
