# This repo is created using `npm init wdio`

## This repo shows uses cases of wido logger

### There are 3 test cases under `test/specs` folder

#### loggerOnAfterSessionHook.e2e.ts - `shows how wido log behaves with afterSession hook on/off`
- run this test with `wdio ./test/wdio.conf.ts`
- when `afterSession` hook is on, wido-0-x.log is going to be cleared, only anything after `afterSession` hook will be logged
- when `afterSession` hook is off, wido-0-x.log is not going to be cleared, only anything after `afterSession` hook will be logged

#### loggerOnSessionReload.e2e.ts - `shows how wido log behaves when session is reloaded`
- run this test with `wdio ./test/wdio.conf.ts`
- when `reloadSession` is called, wido-0-x.log is going to be cleared, only anything after `reloadSession` hook will be in the log file

#### sequentialWDIOSessions.e2e.js - `shows how wido log behaves when multiple sessions are created`
- run this test with `node .\test\specs\sequentialWDIOSessions.e2e.js`
- This test is meant to reproduce the issue [#6068](https://github.com/webdriverio/webdriverio/issues/6068)
- This test is expected to write logs to both log1 and log2, but it only writes to log1
