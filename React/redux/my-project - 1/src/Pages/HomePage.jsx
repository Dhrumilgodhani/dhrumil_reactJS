/* eslint-disable no-unused-vars */
import React from "react";

const HomePage = () => {
  return (
    <>
      <div>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            CRUD Database
          </h1>

          <table className="w-full table-auto">
            <thead>
              <tr className="text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-center">ID</th>
                <th className="py-3 px-6 text-left">First</th>
                <th className="py-3 px-6 text-left">Last</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Phone</th>
                <th className="py-3 px-6 text-left">Location</th>
                <th className="py-3 px-6 text-left">Hobby</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white hover:bg-gray-100 text-gray-800 text-sm leading-normal">
                <td className="py-3 px-6 text-center">35</td>
                <td className="py-3 px-6 text-left">Jane</td>
                <td className="py-3 px-6 text-left">Smith</td>
                <td className="py-3 px-6 text-left">js@gmail.com</td>
                <td className="py-3 px-6 text-left">503-555-5555</td>
                <td className="py-3 px-6 text-left">Portland, Oregon</td>
                <td className="py-3 px-6 text-left">Photography</td>
                <td className="py-3 px-6 text-center">
                  <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2">
                    Del
                  </button>
                </td>
              </tr>
              <tr className="bg-white hover:bg-gray-100 text-gray-800 text-sm leading-normal">
                <td className="py-3 px-6 text-center">36</td>
                <td className="py-3 px-6 text-left">Tristan</td>
                <td className="py-3 px-6 text-left">Rodriguez</td>
                <td className="py-3 px-6 text-left">tr@gmail.com</td>
                <td className="py-3 px-6 text-left">201-555-5555</td>
                <td className="py-3 px-6 text-left">New York, New York</td>
                <td className="py-3 px-6 text-left"></td>
                <td className="py-3 px-6 text-center">
                  <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2">
                    Del
                  </button>
                </td>
              </tr>
              <tr className="bg-white hover:bg-gray-100 text-gray-800 text-sm leading-normal">
                <td className="py-3 px-6 text-center">37</td>
                <td className="py-3 px-6 text-left">Andrea</td>
                <td className="py-3 px-6 text-left">Jones</td>
                <td className="py-3 px-6 text-left">aj@gmail.com</td>
                <td className="py-3 px-6 text-left">503-555-5555</td>
                <td className="py-3 px-6 text-left">Portland, Oregon</td>
                <td className="py-3 px-6 text-left">Programming</td>
                <td className="py-3 px-6 text-center">
                  <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2">
                    Del
                  </button>
                </td>
              </tr>
              <tr className="bg-gray-200 hover:bg-gray-100 text-gray-800 text-sm leading-normal">
                <td className="py-3 px-6 text-center">38</td>
                <td className="py-3 px-6 text-left">Elliott</td>
                <td className="py-3 px-6 text-left">Richardson</td>
                <td className="py-3 px-6 text-left">er@gmail.com</td>
                <td className="py-3 px-6 text-left"></td>
                <td className="py-3 px-6 text-left">Boise, Idaho</td>
                <td className="py-3 px-6 text-left"></td>
                <td className="py-3 px-6 text-center">
                  <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2">
                    Del
                  </button>
                </td>
              </tr>
              <tr className="bg-white hover:bg-gray-100 text-gray-800 text-sm leading-normal">
                <td className="py-3 px-6 text-center">39</td>
                <td className="py-3 px-6 text-left">June</td>
                <td className="py-3 px-6 text-left">Bug</td>
                <td className="py-3 px-6 text-left">jb@gmail.com</td>
                <td className="py-3 px-6 text-left"></td>
                <td className="py-3 px-6 text-left"></td>
                <td className="py-3 px-6 text-left">Cooking</td>
                <td className="py-3 px-6 text-center">
                  <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2">
                    Del
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">
              Download CSV
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add Item
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;