"use client"

import { useState } from "react";
import React from 'react';
import ExecTable from "@/components/ExecTable";
import ExecTeamImages from "@/components/ExecTeamImages";
import { Statistics } from "@/data/statistics";
import { executives } from "@/data/executives";

export default function PastExecutives() {
  const [selectedYear, setSelectedYear] = useState(Statistics.YEAR);
  const years = Object.keys(executives).map((year) => parseInt(year)).reverse();

  return (
    <div className='bg-white rounded-lg shadow-lg px-4 py-6 w-full sm:w-[90%] md:w-[80%] lg:w-[70%]'>
      <div className='flex flex-col items-center'>
        <div className="w-full max-w-4xl">
          <div className="border-b border-gray-300 mb-6">
            <div className="w-full overflow-x-auto">
              <div className="flex justify-start space-x-4 py-2 whitespace-nowrap">
                {years.map((year) => (
                  <button
                    key={year}
                    className={`px-4 py-2 text-md font-bold transition-colors duration-200 ${selectedYear === year
                      ? "border-b-2 border-sesa-teal-dark text-sesa-teal-dark"
                      : "text-gray-600 hover:text-sesa-teal-dark"
                      }`}
                    onClick={() => setSelectedYear(year)}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full md:w-[80%] lg:w-[70%]">
              <ExecTeamImages selectedYear={selectedYear} />
              <ExecTable selectedYear={selectedYear} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
