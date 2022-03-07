import React from 'react';
import Image from 'next/image';
import { orderItemsSchema } from '../shared/models/schemas';

function TableRow(props: orderItemsSchema) {
  const unixTime = props.created_at;
  const date = new Date(unixTime * 1000);
  function loadScript(src: string) {
    return new Promise(resolve => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  async function displayRazorpay(amount: number, order_id: string) {
    await loadScript('https://checkout.razorpay.com/v1/checkout.js');
    const options = {
      key: '', //your razorpay key,
      amount: amount.toString(),
      currency: 'INR',
      name: 'CaffeineCode',
      description: 'RazorPay Test Transaction',
      order_id: order_id,
      handler: async function (response: any) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };
        console.log(data);
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex">
          <div className="flex-shrink-0 w-10 h-10">
            <Image className="w-full h-full rounded-full" src="/user.svg" alt="order" width={160} height={160} />
          </div>
          <div className="ml-5">
            <p className="text-gray-900 whitespace-no-wrap font-bold">Order-ID</p>
            <p className="text-gray-900 whitespace-no-wrap  ">{props.id}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">&#8377;{props.amount / 100}</p>
        <p className="text-gray-600 whitespace-no-wrap">{props.currency}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{date.toLocaleDateString('en-US')}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
          <span
            className="relative"
            style={{ cursor: 'pointer' }}
            id={props.id}
            onClick={() => {
              displayRazorpay(props.amount, props.id);
            }}
          >
            Pay for this order
          </span>
        </span>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
        <button type="button" className="inline-block text-gray-500 hover:text-gray-700">
          <svg className="inline-block h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
          </svg>
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
