import { init, trackEvent } from './node_modules/@aptabase/web/dist/index.js';

const APP_KEY = 'A-SH-1180694718';
const API_URL = 'https://analytics.vps.divparser.com';

init(APP_KEY, {
  host: API_URL,
  // If you want to use `host` instead, replace this with:
  // host: 'https://analytics.vps.divparser.com',
});

trackEvent('siteopen');

const downloadLink = document.getElementById('download-zip-link');
if (downloadLink) {
  downloadLink.addEventListener('click', () => {
    trackEvent('zipfiledownloaded');
  });
}
