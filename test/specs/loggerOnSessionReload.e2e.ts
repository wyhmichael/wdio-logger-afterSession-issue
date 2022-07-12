import logger from '@wdio/logger';
import {basename} from 'path';

const log = logger(basename(__filename));

/**
 * Please turn of afterSession hook in the config file - wdio.conf.js when running the test
 */
describe('wido logger use case - reloadSession', () => {

    it('should not clear log on session reload', async () => {
        await browser.url('https://www.google.com');
        log.debug('before session reload');
        await browser.reloadSession(); // after this command, the log will be cleared and the rest of the test will be in the new log file
        await browser.url('https://www.google.com');
        log.debug('after session reload');
    });
});


