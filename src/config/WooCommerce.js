import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

export const Api = new WooCommerceRestApi({
  url: 'https://yourspiritualrevolution.org/',
  consumerKey: 'ck_fe41d15fb1f122eb869acfb822415c27f5071d4f',
  consumerSecret: 'cs_f1c68131f7ac6a1b7cb14809d06a67b56a6711be',
  version: 'wc/v3',
});

export default Api;
