// pages/api/razorpay.js
const Razorpay = require('razorpay');
const shortid = require('shortid');

// Initialize razorpay object
const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});
function percentage(percent, total) {
  return ((percent / 100) * total).toFixed(2);
}
async function handler(req, res) {
  const body = JSON.parse(req.body);

  const items = body.items.map((product) => ({
    id: product.variation_option_id
      ? product.variation_option_id
      : product.product_id,
    quantity: product.order_quantity,
  }));

  const url = `https://yourspiritualrevolution.org/wp-json/wpc/v1/cart/products`;

  const data = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      items,
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((r) => r.json());

  const subTotal = percentage(95, calculateTotal(data));
  const amount = subTotal * 100; // amount in paisa. In our case it's INR 1
  const currency = 'INR';
  const options = {
    amount: amount.toString(),
    currency,
    receipt: shortid.generate(),

    notes: {
      customer_id: 0,

      products_id: JSON.stringify(items),
    },
  };
  const paymentResp = await razorpay.orders.create(options);
  res.send(paymentResp);
}

function calculateTotal(data) {
  const { items } = data;
  if (items && items.length > 0) {
    const allTotal = items.map((t) => t.total);
    return allTotal.reduce(add, 0);
  }
}
function add(accumulator, a) {
  return accumulator + a;
}
export default handler;
