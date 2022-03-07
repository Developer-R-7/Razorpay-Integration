import React from 'react';
import Image from 'next/image';
import { orderItemsSchema } from '../shared/models/schemas';

function TableRow(props: orderItemsSchema) {
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
        <p className="text-gray-900 whitespace-no-wrap">{props.amount}</p>
        <p className="text-gray-600 whitespace-no-wrap">{props.currency}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">Sept 28, 2019</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
          <span className="relative">Pay for this order</span>
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
