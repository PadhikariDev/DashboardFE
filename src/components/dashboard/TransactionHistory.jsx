import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassChart, faEye } from '@fortawesome/free-solid-svg-icons';

export const TransactionHistory = () => {
    const transactions = [
        {
            tID: "TXN10234",
            cusName: "Alice Johnson",
            date: "2025-06-10",
            amount: "$120.00",
            paymentMethod: "Credit Card",
            Status: "Completed"
        },
        {
            tID: "TXN10235",
            cusName: "Brian Lee",
            date: "2025-06-09",
            amount: "$340.75",
            paymentMethod: "PayPal",
            Status: "Pending"
        },
        {
            tID: "TXN10236",
            cusName: "Catherine Miles",
            date: "2025-06-08",
            amount: "$58.90",
            paymentMethod: "UPI",
            Status: "Failed"
        },
        {
            tID: "TXN10237",
            cusName: "David Kim",
            date: "2025-06-07",
            amount: "$470.20",
            paymentMethod: "Net Banking",
            Status: "Completed"
        },
        {
            tID: "TXN10238",
            cusName: "Emma Watson",
            date: "2025-06-06",
            amount: "$215.30",
            paymentMethod: "Debit Card",
            Status: "Refunded"
        },
        {
            tID: "TXN10239",
            cusName: "Frank Murphy",
            date: "2025-06-05",
            amount: "$135.50",
            paymentMethod: "UPI",
            Status: "Completed"
        },
        {
            tID: "TXN10240",
            cusName: "Grace Hall",
            date: "2025-06-04",
            amount: "$780.00",
            paymentMethod: "PayPal",
            Status: "Pending"
        },
        {
            tID: "TXN10241",
            cusName: "Henry Blake",
            date: "2025-06-03",
            amount: "$25.99",
            paymentMethod: "Credit Card",
            Status: "Failed"
        },
        {
            tID: "TXN10242",
            cusName: "Isabella Green",
            date: "2025-06-02",
            amount: "$999.99",
            paymentMethod: "Net Banking",
            Status: "Completed"
        },
        {
            tID: "TXN10243",
            cusName: "Jack White",
            date: "2025-06-01",
            amount: "$312.40",
            paymentMethod: "Debit Card",
            Status: "Completed"
        },
        {
            tID: "TXN10244",
            cusName: "Kylie Brown",
            date: "2025-05-31",
            amount: "$215.20",
            paymentMethod: "UPI",
            Status: "Pending"
        },
        {
            tID: "TXN10245",
            cusName: "Liam Scott",
            date: "2025-05-30",
            amount: "$99.95",
            paymentMethod: "Credit Card",
            Status: "Completed"
        },
        {
            tID: "TXN10246",
            cusName: "Mia Lopez",
            date: "2025-05-29",
            amount: "$645.10",
            paymentMethod: "PayPal",
            Status: "Refunded"
        },
        {
            tID: "TXN10247",
            cusName: "Noah Adams",
            date: "2025-05-28",
            amount: "$78.25",
            paymentMethod: "Net Banking",
            Status: "Completed"
        }
    ];

    return (
        <div className='p-4 col-span-12 rounded border border-stone-300'>
            <div className="mb-4 flex items-center justify-between">
                <h3 className="flex items-center gap-1.5 font-medium text-stone-700">
                    <FontAwesomeIcon icon={faMagnifyingGlassChart} /> Transaction History
                </h3>
                <button className="text-sm text-violet-600 hover:underline hover:cursor-pointer">
                    <FontAwesomeIcon icon={faEye} /> See all
                </button>
            </div>

            <table className="w-full table-auto">
                <TableHead />
                <tbody>
                    {transactions.map((txn, index) => (
                        <TableRow
                            key={txn.tID}
                            index={index}
                            {...txn}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const TableHead = () => {
    return (
        <thead>
            <tr className="text-sm font-normal text-stone-600">
                <th className="text-start p-1.5">Transaction ID</th>
                <th className="text-start p-1.5">Customer Name</th>
                <th className="text-start p-1.5">Date</th>
                <th className="text-start p-1.5">Amount</th>
                <th className="text-start p-1.5">Payment Method</th>
                <th className="text-start p-1.5">Status</th>
                <th className="w-8"></th>
            </tr>
        </thead>
    );
};

const TableRow = ({ index, tID, cusName, date, amount, paymentMethod, Status }) => {
    // Optional colored badge based on status
    const statusColor = {
        Completed: 'bg-green-100 text-green-700',
        Pending: 'bg-yellow-100 text-yellow-700',
        Failed: 'bg-red-100 text-red-700',
        Refunded: 'bg-blue-100 text-blue-700',
    };

    return (
        <tr className={`${index % 2 === 0 ? "bg-stone-100" : ""} text-sm`}>
            <td className='p-1.5'>
                <a href="#" className='text-violet-600 underline flex items-center gap-1'>{tID}</a>
            </td>
            <td className='p-1.5'>{cusName}</td>
            <td className='p-1.5'>{date}</td>
            <td className='p-1.5'>{amount}</td>
            <td className='p-1.5'>{paymentMethod}</td>
            <td className='p-1.5'>
                <span className={`px-2 py-0.5 rounded text-xs font-medium ${statusColor[Status] || 'bg-gray-100 text-gray-600'}`}>
                    {Status}
                </span>
            </td>
            <td className='w-8'>
                <button className='hover:bg-stone-200 transition-colors grid place-content-center rounded text-sm size-8'>
                    <FontAwesomeIcon icon={faEye} />
                </button>
            </td>
        </tr>
    );
};
