"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkType {
    path: string;
    title: string;
}

const SearchButton = ({ path, title }: LinkType) => {
    const activePath = usePathname();

    return (
        <button
            type="button"
            className={`text-center px-3 py-2 rounded-md text-xs md:text-lg font-medium ${
                activePath === path
                    ? "bg-primary text-white"
                    : "text-text-black"
            }`}
        >
            {title}
        </button>
    );
};

const NameSearchBy = () => {
    return (
        <div className="grid grid-cols-3 bg-teal rounded-md mb-2.5 md:mb-6">
            <SearchButton path="/" title="Search by Name" />
            <SearchButton path="/settings" title="Search by Meaning" />
            <SearchButton path="/subscription" title="Search Full Name" />
        </div>
    );
};

export default NameSearchBy;
