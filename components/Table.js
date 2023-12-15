import React from 'react';

const Table = () => {
  return (
    <div className="overflow-x-auto mt-7 table-auto">
      <table className="min-w-full bg-gray-800 text-white border-3 border-blue-800 border-collapse">
        <thead className='border-2  border-white' >
          <tr className=' bg-blue-600 '>
            <th className="py-5 px-7">Quality</th>
            <th className="py-5 px-7">Size</th>
            <th className="py-5 px-7">Link</th>
          </tr>
        </thead>
        <tbody  className='border-2  border-white'  >
          <tr  className='border-2  border-white' >
            <td className="py-5 px-7">720P</td>
            <td className="py-5 px-7">1.29MB</td>
            <td className="py-5 px-7">Download</td>
          </tr>
          <tr  className='border-2  border-white' >
            <td className="py-5 px-7">360P</td>
            <td className="py-5 px-7">10.29MB</td>
            <td className="py-5 px-7">Download</td>
          </tr>
          <tr  className='border-2  border-white' >
            <td className="py-5 px-7">1080P</td>
            <td className="py-5 px-7">111.29MB</td>
            <td className="py-5 px-7">Download</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
