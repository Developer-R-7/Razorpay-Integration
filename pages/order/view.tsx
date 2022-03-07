import axios from 'axios';
import React from 'react';
import NavBar from '../../components/NavBar';
import TableRow from '../../components/TableRow';
import { CONSTANTS } from '../../shared/utils/constants';
import { orderItemsSchema } from '../../shared/models/schemas';

export default function view({ data }: any) {
  return (
    <div className="bg-primary-blue h-full">
      <NavBar />
      <div className="w-full flex justify-center mt-4">
        <div className="w-full -mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className=" inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Client / Invoice
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Amount/Currency
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Issued
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    ACTION
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                </tr>
              </thead>
              <tbody>
                {data.items.map((object: orderItemsSchema, index: number) => {
                  return <TableRow {...object} key={index} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const ordersList = await axios.get(CONSTANTS.ORDER_API, {
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
      },
      auth: {
        username: CONSTANTS.AUTH_USERNAME,
        password: CONSTANTS.AUTH_PASSWORD,
      },
    });
    const data = ordersList.data;
    return { props: { data } };
  } catch (err) {
    console.log(err);
  }
}
