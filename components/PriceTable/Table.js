import React from "react";
import Typography from "../Typegraphy/Typography";
import UserDropdown from "../UserDropdown";

const options = [
  { name: 'John Doe', avatar: '/images/profile.jpeg', accountType:"Personal Account" },
];

const Tables = () => {
  
  return (
    <>
      <div className="mb-6 w-full px-4 pt-4 sm:w-2/4 mx-auto">
      <Typography
            variant="h1"
            text="Select the Ideal Plan for Your Needs"
            className="text-black text-center text-2xl font-semibold pb-2"
          />
      
        <Typography
            variant="body"
            text="ElevateAPI collaborates directly with API providers to offer straightforward, transparent pricing. Discover a plan that aligns perfectly with the scale required for your application."
            className="text-black text-center sm:text-xs md:text-lg"
          />
      </div>
      <div className="w-full max-w-[200px] mb-5 mx-auto" >
        <UserDropdown options={options} onSelect={(option) => console.log(option)} placeholder="Select a person" />
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg md:mx-[10%]">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="px-6 py-3 text-black min-w-[200px]">
                Objects
              </th>
              <th
                scope="col"
                className="px-6 py-5 text-black text-xl text-center flex flex-col  min-w-[200px]"
              >
                Basic <span className="block">$00.00 / mo</span>{" "}
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="block mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none "
                  >
                    Subscribe
                  </button>
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-black text-xl text-center min-w-[200px]"
              >
                Pro <span className="block">$29.00 / mo</span>{" "}
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="block mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                  >
                    Subscribe
                  </button>
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-black text-xl text-center min-w-[200px]"
              >
                Ultra <span className="block">$99.00 / mo</span>{" "}
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="block mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                  >
                    Subscribe
                  </button>
                </div>
                <Typography variant='body' text='Recommended' />
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-black text-xl text-center min-w-[200px]"
              >
                Mega <span className="block">$999.00 / mo</span>{" "}
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="block mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                  >
                    Subscribe
                  </button>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Results{" "}
                <span className="block text-blue-500 pt-2">
                  Related Endpoints
                </span>
              </th>
              <td className="px-6 py-4 text-black font-bold text-center">
                500 / day{" "}
                <span className="block font-normal">+ $0.003 each other</span>
              </td>
              <td className="px-6 py-4 text-black font-bold text-center">
                5000 / day{" "}
                <span className="block font-normal">+ $0.003 each other</span>
              </td>
              <td className="px-6 py-4 text-black font-bold text-center">
                25,000 / day{" "}
                <span className="block font-normal">+ $0.003 each other</span>
              </td>
              <td className="px-6 py-4 text-black font-bold text-center">
                100,000 / day{" "}
                <span className="block font-normal">+ $0.001 each other</span>
              </td>
            </tr>
            <tr className="border-b bg-gray-50bg-gray-800 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Tiny requests{" "}

              </th>
              <td className="px-6 py-4 text-black font-bold text-center">
                500 / day{" "}
                <span className="block font-normal">+ $0.003 each other</span>
              </td>
              <td className="px-6 py-4 text-black font-bold text-center">
                500 / day{" "}
                <span className="block font-normal">+ $0.003 each other</span>
              </td>
              <td className="px-6 py-4 text-black font-bold text-center">
                50,000 / day{" "}
                <span className="block font-normal">+ $0.003 each other</span>
              </td>
              <td className="px-6 py-4 text-black font-bold text-center">
                200,000 / day{" "}
                <span className="block font-normal">+ $0.001 each other</span>
              </td>
            </tr>
            <tr className="bg-white border-b  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Requests{" "}

              </th>
              <td className="px-6 py-4 text-black font-bold text-center">
                50 / day{" "}
                <span className="block font-normal">+ $0.007 each other</span>
              </td>
              <td className="px-6 py-4 text-black font-bold text-center">
                500 / day{" "}
                <span className="block font-normal">+ $0.004 each other</span>
              </td>
              <td className="px-6 py-4 text-black font-bold text-center">
                2,500 / day{" "}
                <span className="block font-normal">+ $0.004 each other</span>
              </td>
              <td className="px-6 py-4 text-black font-bold text-center">
                30,000 / day{" "}
                <span className="block font-normal">+ $0.001 each other</span>
              </td>
            </tr>
            <tr className="border-b bg-gray-50 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Features
              </th>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4">
                <a
                  href="https://example.com"
                  className="font-medium text-blue-600  hover:underline"
                ></a>
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Support
              </th>
              <td className="px-6 py-4">
                <div className="flex flex-col justify-center items-center">
                  <img src='/icons/cross-icon.svg' className='w-[15px]' />
                </div>
              </td>
              <td className="px-6 py-4 ">
                <div className="flex flex-col justify-center items-center">
                  <img src='/icons/cross-icon.svg' className='w-[15px]' />
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-col justify-center items-center">
                  <img src='/icons/tick-icon.svg' className='w-[15px]' />
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-col justify-center items-center">
                  <img src='/icons/tick-icon.svg' className='w-[15px]' />
                </div>
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                On-Demand API Endpoints
              </th>
              <td className="px-6 py-4">
                <div className="flex flex-col justify-center items-center">
                 <img src='/icons/cross-icon.svg' className='w-[15px]' />
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-col justify-center items-center">
                  <img src='/icons/cross-icon.svg' className='w-[15px]' />
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-col justify-center items-center">
                  <img src='/icons/tick-icon.svg' className='w-[15px]' />
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-col justify-center items-center">
                  <img src='/icons/tick-icon.svg' className='w-[15px]' />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tables;
