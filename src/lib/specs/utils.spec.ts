import { NGXDefaultSecurizeMethodDecoratorConf } from '../ngx-securize.constants';
import { NGXSecurizeMethodConf } from '../nxg-securize.models';
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
      const gived: NGXSecurizeMethodConf = {
        debug: true,
      };
      const expected: NGXSecurizeMethodConf = {
        debug: true,
      };
      const received: NGXSecurizeMethodConf = initializeMethodDecoratorConf(gived);
      expect(received).toMatchObject(expected);
    });

    it('should return the default conf if no params provided', () => {
      const gived: NGXSecurizeMethodConf = null;
      const expected: NGXSecurizeMethodConf = NGXDefaultSecurizeMethodDecoratorConf;
      const received: NGXSecurizeMethodConf = initializeMethodDecoratorConf(gived);
      expect(received).toMatchObject(expected);
    });
  });
});
