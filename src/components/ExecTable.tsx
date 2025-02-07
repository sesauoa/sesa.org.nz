"use client";

import React from "react";
import { executives } from "@/data/executives";

export default function ExecTable({ selectedYear }: { selectedYear: number }) {
   return (
      <div className="overflow-x-auto">
         <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
               <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Role</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
               </tr>
            </thead>
            <tbody>
               {executives[selectedYear] ? (
                  executives[selectedYear].map((exec, index) => (
                      <tr key={index} className="odd:bg-white even:bg-gray-100">
                        <td className="border border-gray-300 px-4 py-2 text-left text-sm md:text-base">{exec.role}</td>
                        <td className="border border-gray-300 px-4 py-2 text-left text-sm md:text-base">{exec.name}</td>
                      </tr>
                  ))
               ) : (
                  <tr>
                     <td colSpan={2} className="border border-gray-300 px-4 py-2 text-center">
                        No data available for year {selectedYear}
                     </td>
                  </tr>
               )}
            </tbody>
         </table>
      </div>
   );
}
