/**
 * This is a case trying to reproduce - https://github.com/webdriverio/webdriverio/issues/6068
 *
 * Selenium Server needs to be running before running this test.
 * This needs to run with webdriver protocol
 */

const { remote } = require('webdriverio');

const opts1 = {
  path: '/wd/hub',
  capabilities: {
    // maxInstances: 1,
    browserName: 'chrome',
    acceptInsecureCerts: true
  },
  services: ['selenium-standalone'],
  logLevel: "trace",
  automationProtocol: "webdriver",
  outputDir: `log1`
};

const opts2 = {
  path: '/wd/hub',
  capabilities: {
    // maxInstances: 1,
    browserName: 'chrome',
    acceptInsecureCerts: true
  },
  logLevel: "trace",
  services: ['selenium-standalone'],
  automationProtocol: "webdriver",
  outputDir: `log2`
};

;(async () => {
  let myBrowser = await remote(opts1);
  setTimeout(() => { console.debug("ses1-sleep"); }, 4000);

  await myBrowser.url('https://www.google.com');

  // await myBrowser.deleteSession();
  setTimeout(() => { console.debug("ses1-end"); }, 5000);

  // log of the following is still in log1/wdio.log instead of log2/wdio.log
  myBrowser = await remote(opts2);
  setTimeout(() => { console.debug("ses2-sleep"); }, 6000);

  await myBrowser.url('https://www.google.com');

  setTimeout(() => { console.debug("ses2 - pre end"); }, 7000);
  await myBrowser.deleteSession();
})();
