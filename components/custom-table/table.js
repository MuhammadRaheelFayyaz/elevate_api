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
    <div>
      <table className="min-w-full divide-y divide-gray-200 mb-4">
        <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.key}
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {column.label}
            </th>
          ))}
        </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
        {currentData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td
                key={colIndex}
                className="px-6 py-4 whitespace-nowrap w-[250px] md:w-auto"
              >
                {row[column.key]}
              </td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
      {havePagination && (
        <div className='flex' >
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
