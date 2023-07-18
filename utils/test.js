import Api from '../src/config/WooCommerce';

export default async function test(ids) {
  const products = await Api.get(`products?include=${ids}`)
    .then((r) => r.data)
    .catch((e) => e.response.data);
  return products;
}
