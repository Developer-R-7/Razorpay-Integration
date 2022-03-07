import React from 'react';
import Image from 'next/image';
import Router from 'next/router';
interface navcard {
  image: string;
  title: string;
  buttonText: string;
}

export default function NavCard(props: navcard) {
  const navigator = (route: string) => {
    if (route === 'create') {
      Router.push('/order/create');
    } else {
      Router.push('/order/view');
    }
  };
  return (
    <div>
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg flex flex-col">
        <div className="w-full content-center flex justify-center bg-primary-yellow p-3">
          <Image className="bg-primary-yellow" src={props.image} alt="order" width={300} height={250} />
        </div>
        <div className="px-6 py-4 bg-blue-active">
          <div className="font-bold text-xl mb-2 text-white">{props.title}</div>
        </div>
        <div className="px-6 pt-4 pb-2 bg-blue-active">
          <button
            type="button"
            className="text-white w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={() => {
              navigator(props.buttonText);
            }}
          >
            {props.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
