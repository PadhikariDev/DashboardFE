import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTableColumns,
    faPeopleGroup,
    faLink,
    faFileInvoice,
    faCoins,
    faGear, faRightFromBracket, faChartSimple, faCalendarDays, faBarsProgress
} from '@fortawesome/free-solid-svg-icons';

const Route = ({ selected, icon, title }) => {
    const isLogout = title === "Logout";
    return (
        <button
            className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm
        ${isLogout
                    ? 'bg-red-200 text-stone-500 font-semibold hover:bg-red-100'
                    : selected
                        ? 'bg-white text-stone-950 shadow'
                        : 'hover:bg-stone-200 bg-transparent'}
        hover:cursor-pointer`}
        >
            <FontAwesomeIcon icon={icon} className="text-base" />
            <span>{title}</span>
        </button>
    );
};

export const RouteSelect = () => {
    return (
        <div className="space-y-3">
            <Route icon={faTableColumns} selected={true} title="Dashboard" />
            <Route icon={faPeopleGroup} selected={false} title="Team" />
            <Route icon={faLink} selected={false} title="Invoices" />
            <Route icon={faFileInvoice} selected={false} title="Integration" />
            <Route icon={faCoins} selected={false} title="Finance" />
            <Route icon={faGear} selected={false} title="Settings" />
            <Route icon={faBarsProgress} selected={false} title="User Management" />
            <Route icon={faCalendarDays} selected={false} title="Calendar / Schedule" />
            <Route icon={faChartSimple} selected={false} title="Analytics" />
            <Route icon={faRightFromBracket} selected={false} title="Logout" />
        </div>
    );
};
