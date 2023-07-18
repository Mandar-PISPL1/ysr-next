// YourBillingComponent.jsx
import Script from 'next/script';
import { toast } from 'react-toastify';
export default function YourBillingComponent() {
  const makePayment = async ({ productId }: any) => {
    // Make API call to the serverless API
    const data = await fetch('/api/razorpay', {
      method: 'POST',
      headers: {
        // Authorization: 'YOUR_AUTH_HERE'
      },
      body: JSON.stringify({ productId }),
    }).then((t) => t.json());
    const options = {
      name: data.name,
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: data.amountDesc,
      // image: logoBase64,
      handler: function (response: any) {
        console.log({ response });
        // Validate payment at server - using webhooks is a better idea.
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
      },
      prefill: {
        name: 'John Doe',
        email: 'jdoe@example.com',
        contact: '9876543210',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    paymentObject.on('payment.failed', function (response: any) {
      toast.error('Payment failed. Please try again. Contact support for help');
    });
  };

  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />

      <p className="block text-sm text-body">
        Credit Card/Debit Card/NetBanking - 5% Extra Discount
      </p>
    </>
  );
}
