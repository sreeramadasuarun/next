import React from "react";
import { useUserAuth } from "../routes/login/UserAuthContext";

const Employees = () => {
  const { show, getData } = useUserAuth();
  getData();
  console.log(show);

  return (
    <div className="mt-[5rem] relative">
      <div className="absolute inset-y-0 left-[18rem] w-[61rem] min-h-screen">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  User Email
                </th>
                <th scope="col" className="px-6 py-3">
                  User Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Tittle
                </th>
                <th scope="col" className="px-6 py-3">
                  Company
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* {show.map(({ permanentAddress, fullname, id, companyName }) => {
        return (
          <article
            key={id}
            className="bg-whitegray text-center p-[1.3rem] flex flex-col gap-5 items-center rounded-[1.3rem] max-w-22 max-h-full shadow-shadownero hover:shadow-inner"
          >
            <h3>{fullname}</h3>

            <div className="flex justify-around gap-[4.5rem] text-[0.9rem]">
              <div className="flex flex-col item-start">
                <span>price:</span>
                <span className="font-bold">{permanentAddress}</span>
              </div>
              <div className="flex flex-col items-start">
                <span>category:</span>
                <span className="font-bold">{companyName}</span>
              </div>
            </div>
          </article>
        );
      })} */}
    </div>
  );
};

export default Employees;
