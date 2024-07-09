import React from "react";

function SearchBar() {
  return (
    <div className="max-sm:hidden block w-96 flex border text-sm  border-gray-500 rounded-3xl p-1 pr-2 pl-3 ">
      <input
        type="search"
        className=" w-full pl-1 text-white border-none outline-none rounded-3xl "
        placeholder="Search Mockups, Logos..."
      />
      <button class=" py-2 px-4 rounded text-gray-400 font-bold inline-flex items-center">
        <svg
          class="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </button>
    </div>
  );
}

export default SearchBar;
