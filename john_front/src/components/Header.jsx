import React from "react";
import user from "../assets/User Avatar (3).png";

const SearchIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 20 20"
        fill="none"
        className="text-gray-400"
    >
        <path
        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        />
    </svg>
    );

    const Header = () => {
    return (
        <header
        className="h-20 flex justify-between items-center px-6 py-5 border-b"
        style={{ backgroundColor: "#F9FAFB", borderBottomColor: "#E5E7EB" }}
        >
        <div className="relative w-1/2">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon />
            </div>
            <input
            type="text"
            placeholder="Search anecdotes..."
            className="w-full pl-10 pr-4 py-2 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            style={{ backgroundColor: "white" }}
            />
        </div>
        <div className="flex items-center gap-2">
            <img
            src={user}
            alt="Jane Doe"
            className="rounded-full w-8 h-8"
            />
            <span className="text-sm font-medium">Jane Doe</span>
        </div>
        </header>
    );
};

export default Header;
