export default async function handler(req, res) {
  // const body = req.body;

  // const items = body.items[2].products.map((product) => ({
  //   id: product.product_id,
  //   quantity: product.order_quantity,
  // }));
  // const url = `https://yourspiritualrevolution.org/wp-json/wpc/v1/cart/products`;
  // const data = await fetch(url, {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     items,
  //   }),
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  // })
  //   .then((r) => r.json())
  //   .catch((err) => console.log(err));

  const data_to = calculation();

  res.json({ ...data_to });
}

function calculation(products) {
  // const total_tax = products
  //   .map((p) => tax(Object.values(p.taxes)[0].rate, p.total))
  //   .reduce((partialSum, a) => partialSum + a, 0);

  return {
    total_tax: 0,
    shipping_charge: 50,
    unavailable_products: [],
    wallet_currency: 0,
    wallet_amount: 0,
  };
}
function tax(rate, total) {
  return total * (rate / 100);
}
