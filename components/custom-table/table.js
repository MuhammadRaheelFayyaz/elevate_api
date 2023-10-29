import React from 'react';

const Table = ({ columns, data }) => {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead >
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
            {data.map((row, rowIndex) => (
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
    );
};

export default Table;
