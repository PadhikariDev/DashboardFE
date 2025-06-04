import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTableColumns,
    faPeopleGroup,
    faLink,
    faFileInvoice,
    faCoins,
} from '@fortawesome/free-solid-svg-icons';

const Route = ({ selected, icon, title }) => {
    return (
        <button
            className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm ${selected ? 'bg-white text-stone-950 shadow ' : 'hover:bg-stone-200 bg-transparent hover:cursor-pointer'
                }`}
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
        </div>
    );
};
