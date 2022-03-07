import React, { FormEvent } from 'react';
import NavBar from '../../components/NavBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useEffect } from 'react';

function create() {
  async function handleform(event: FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      const formData = {
        amount: parseInt((event.currentTarget.elements[0] as HTMLInputElement).value),
        currency: (event.currentTarget.elements[1] as HTMLInputElement).value,
      };
      const result = await axios.get('../api/orders', {
        params: { amount: formData.amount, currency: formData.currency },
      });
      console.log(result.data);
    } catch (e) {
      console.log(e);
    }
    const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
    toast.promise(
      resolveAfter3Sec,
      {
        pending: 'Drafting your order ⌛',
        success: 'Order Generated👌',
        error: 'Oops! Something went wrong',
      },
      {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      },
    );
  }
  return (
    <div>
      <div className="bg-primary-blue">
        <NavBar />
        <div className="h-[calc(100vh_-_89px)] p-28 place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 cards">
          <div className="flex justify-center w-full">
            <div className="w-96">
              <form onSubmit={handleform} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="text-primary-yellow mb-5 font-bold text-xl">
                  <h2>Create Order</h2>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Amount">
                    Amount
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="amount"
                    name="amount"
                    type="number"
                    placeholder="Amount - &#8377; 50"
                    required
                    title="Enter Amount"
                    autoComplete="off"
                  />
                </div>
                <div className="mb-9">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Currency
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="currency"
                    type="text"
                    placeholder="INR"
                    required
                    name="currency"
                    title="Enter Currency"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    type="submit"
                  >
                    Place Order
                  </button>
                  <ToastContainer />
                </div>
              </form>
              <p className="text-center text-gray-500 text-xs">&copy;2022 RazorPay integration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default create;
