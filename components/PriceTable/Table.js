import React from "react";
import Typography from "../Typegraphy/Typography";
import UserDropdown from "../UserDropdown";

const options = [
  { name: 'John Doe', avatar: '/images/profile.jpeg', accountType:"Personal Account" },
];

const Tables = () => {
  
  return (
    <div>
      <div className="mb-6 w-full px-4 pt-4 sm:w-2/4 mx-auto">
      <Typography
            variant="h1"
            text="Choose the Right Plan For You"
            className="text-black text-center text-2xl font-semibold pb-2"
          />
      
        <Typography
            variant="body"
            text="RapidAPI performs directly with API providers to give you no-fuss,
            transparent pricing. Find a plan that best matches the scale you need
            for your application."
            className="text-black text-center sm:text-xs md:text-lg"
          />
      </div>
      <div className="w-full max-w-[200px] mb-5 mx-auto" >
        <UserDropdown options={options} onSelect={(option) => console.log(option)} placeholder="Select a person" />
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-[10%]">
        <table class="w-full text-sm text-left text-gray-500 ">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="px-6 py-3 text-black min-w-[200px]">
                Objects
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-black text-xl text-center flex flex-col  min-w-[200px]"
              >
                Basic <span className="block">$0.00 / mo</span>{" "}
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
            <tr class="bg-white border-b ">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                results{" "}
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
            <tr class="border-b bg-gray-50bg-gray-800 ">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Tiny requests{" "}
                <span className="block text-blue-500 pt-2">
                  Related Endpoints
                </span>
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
            <tr class="bg-white border-b  ">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Requests{" "}
                <span className="block text-blue-500 pt-2">
                  Related Endpoints
                </span>
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
            <tr class="border-b bg-gray-50 ">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Features
              </th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">
                <a
                  href="https://example.com"
                  class="font-medium text-blue-600  hover:underline"
                ></a>
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Support
              </th>
              <td className="px-6 py-4">
                <div className="flex flex-col justify-center items-center">
                  <svg
                    class="w-3 h-3 text-red-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </div>
              </td>
              <td className="px-6 py-4 ">
                <div className="flex flex-col justify-center items-center">
                  <svg
                    class="w-3 h-3 text-red-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-col justify-center items-center">
                  <svg
                    class="w-3 h-3 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-col justify-center items-center">
                  <svg
                    class="w-3 h-3 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </div>
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                On-Demand API Endpoints
              </th>
              <td className="px-6 py-4">
                <div className="flex flex-col justify-center items-center">
                  <svg
                    class="w-3 h-3 text-red-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-col justify-center items-center">
                  <svg
                    class="w-3 h-3 text-red-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-col justify-center items-center">
                  <svg
                    class="w-3 h-3 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-col justify-center items-center">
                  <svg
                    class="w-3 h-3 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tables;
