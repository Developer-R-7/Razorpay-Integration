import React from 'react';
import Image from 'next/image';
function NavBar() {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Image src="/razorpay.svg" alt="me" width="130" height="40" />
          <span className=" font-bold block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-2xl hover:text-primary-blue mr-4">
            {' '}
            &nbsp; Intergation
          </span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow"></div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Open Github Repo ❣️
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
