'use strict';

try {
  require('core-js/es6/reflect');
} catch (e) {
  try {
    require('core-js/es/reflect');
  } catch (e) {
    throw new Error('core-js es6-reflect not found!');
  }
}

try {
  require('core-js/es7/reflect');
} catch (e) {
  try {
    require('core-js/proposals/reflect-metadata');
  } catch (e) {
    throw new Error('core-js es7-reflect not found!');
  }
}

require('zone.js/dist/zone.js');
require('zone.js/dist/proxy.js');
require('zone.js/dist/sync-test');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');
require('jest-preset-angular/zone-patch');

const getTestBed = require('@angular/core/testing').getTestBed;
const BrowserDynamicTestingModule = require('@angular/platform-browser-dynamic/testing').BrowserDynamicTestingModule;
const platformBrowserDynamicTesting =
  require('@angular/platform-browser-dynamic/testing').platformBrowserDynamicTesting;
const ɵDomSharedStylesHost = require('@angular/platform-browser').ɵDomSharedStylesHost;

getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

// https://github.com/angular/angular/issues/31834
afterEach(() => {
  // this is an experimental feature that reduce test times up to a 1/3. If you encounter any issues, comment the entire block and the import above
  getTestBed().inject(ɵDomSharedStylesHost).ngOnDestroy();
});
