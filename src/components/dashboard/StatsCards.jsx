import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp, faArrowTrendDown } from '@fortawesome/free-solid-svg-icons';
export const StatsCards = () => {
    return (
        <>
            <Card
                title="Revenue"
                value="$52,110,000,000"
                pilltext="2.75%"
                period="April to March fiscal year"
                trend="up" />
            <Card
                title="Order"
                value="25,233"
                pilltext="4.76% "
                trend="down"
                period="Previous 1 month" />
            <Card
                title="Profit"
                value="$1,225,000"
                pilltext="10.65%"
                trend="up"
                period="Previous 6 months" />
        </>
    )
}

const Card = ({
    title,
    value,
    pilltext,
    trend,
    period,
}) => {
    return (
        <div className='p-4 col-span-4 rounded border border-stone-300'>
            <div className="flex mb-8 items-start justify-between">
                <div>
                    <h3 className='text-stone-900 mb-2 text-sm'>
                        {title}
                    </h3>
                    <p className='text-3xl font-bold'>{value}</p>
                </div>
                <span className={`text-sm flex items-center gap-1 font-medium px-2 py-1 rounded ${trend === "up" ? "bg-green-300 text-green-700" : "bg-red-300 text-red-700"}`}>{trend === "up" ? <FontAwesomeIcon icon={faArrowTrendUp} /> : <FontAwesomeIcon icon={faArrowTrendDown} />}{pilltext}
                </span>
            </div>
            <div>
                <h2 className='text-stone-500 mb-2 text-sm'>
                    {period}
                </h2>
            </div>
        </div>
    )
}
