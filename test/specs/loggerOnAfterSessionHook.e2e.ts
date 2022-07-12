import logger from '@wdio/logger';
import {basename} from 'path';

const log = logger(basename(__filename));

/**
 * Please compare with afterSession hook enabled and disabled in the config file - wdio.conf.js when running the test
 */
describe('wido logger use case - afterSession', () => {
    it('should not clear log on afterSession hook', async () => {
        await browser.url('https://www.google.com');
        log.debug('should not clear log on afterSession hook');
    });
});


