import React from "react";

interface DetailProps {
    title : string;
    value : string;
}

const Detail : React.FC<DetailProps> = ({ title, value }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
        {title}
        </th>
        <td className="px-6 py-4">{value}</td>
           
            
    </tr>
  );
};

export default Detail;
