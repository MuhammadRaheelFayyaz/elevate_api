import React, {useState} from 'react';
import Pagination from "@/components/Pagination";

const Table = ({columns, data, havePagination = false}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentData = data.slice(start, end);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='w-full mb-4 border border-blue-500 rounded-xl overflow-hidden'>
      <div className='max-w-full overflow-x-auto'>
        <table className="w-full divide-y divide-gray-200 ">
          <thead className='bg-blue-500 h-14'>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-6 py-3 text-left text-base font-medium text-white uppercase tracking-wider"
              >
                {column.label}
              </th>
            ))}
          </tr>
          </thead>
          <tbody className=" divide-y divide-gray-200">
          {currentData.map((row, rowIndex) => (
            <tr key={rowIndex} className='odd:bg-blue-200 even:bg-blue-100 hover:bg-blue-300 text-sm'>
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className="px-6 py-2 whitespace-nowrap max-w-[250px] md:w-auto"
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      {havePagination && totalPages > 1 && (
        <div className='flex p-3'>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )
      }
    </div>
  );
};

export default Table;
