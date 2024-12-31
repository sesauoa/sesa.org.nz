import React from 'react';

export default function PastExecutives() {
  return (
    <div className='bg-white rounded-lg shadow-lg justify-center p-4'>
      <strong className='text-xl'>2024 SESA Executives</strong>
      <div className='flex items-center justify-center pt-4'>
        <img
          className="w-[90%] lg:w-[70%] mb-4 rounded-lg"
          src={`/team-images/2024/team_photo.png`}
          alt="SESA 2024 Team Photo"
        />
      </div>
      <table className='table-auto'>
        <thead>
          <tr>
            <th className='px-4 py-2'>Name</th>
            <th className='px-4 py-2'>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border px-4'>President</td>
            <td className='border px-4'>John Doe</td>
          </tr>
          <tr>
            <td className='border px-4'>Vice President</td>
            <td className='border px-4'>Jane Doe</td>
          </tr>
          <tr>
            <td className='border px-4'>Treasurer</td>
            <td className='border px-4'>John Smith</td>
          </tr>
          <tr>
            <td className='border px-4'>Secretary</td>
            <td className='border px-4'>Jane Smith</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
