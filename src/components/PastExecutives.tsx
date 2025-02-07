"use client"

import { useState } from "react";
import React from 'react';
import ExecTable from "@/components/ExecTable";
import { Statistics } from "@/data/statistics";

export default function PastExecutives() {
  const [selectedYear, setSelectedYear] = useState(Statistics.YEAR);
  const years = [2024, 2023, 2022, 2021];

  return (
    <div className='bg-white rounded-lg shadow-lg justify-center px-4'>
      <div className='flex items-center justify-center'>
        <div className="max-w-4xl mx-auto p-6">
          <div className="border-b border-gray-300 mb-6">

            <div className="flex justify-center space-x-4">
              {years.map((year) => (
                <button
                  key={year}
                  className={`px-4 py-2 text-md font-bold transition-colors duration-200 ${selectedYear === year
                    ? "border-b-2 border-sesa-teal-dark text-sesa-teal-dark"
                    : "text-gray-500 hover:text-sesa-teal-dark"
                    }`}
                  onClick={() => setSelectedYear(year)}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full md:w-[80%] lg:w-[70%] ">
              <div className="mb-6">
                <img
                  src={`/team-images/2024/team_photo.png`}
                  alt="Past Executives Banner"
                  className="rounded-lg shadow-md"
                />
              </div>

              <ExecTable selectedYear={selectedYear} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

