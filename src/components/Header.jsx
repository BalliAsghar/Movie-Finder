import React, { useState } from "react";

const Header = ({ handleInput }) => {
  // input value useState
  const [inputValue, setInputValue] = useState("");

  const handleValue = (e) => {
    setInputValue(e.target.value);
    handleInput(e.target.value);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 shadow-2xl">
      <div
        className="flex items-center flex-shrink-0 
       mr-6"
      >
        <span className="text-3xl font-extrabold tracking-tight text-white">React Movie Finder</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <input
            className="border-opacity-75 bg-gray-800 text-white focus:outline-none focus:shadow-outline border border-gray-600 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="text"
            placeholder="Search"
            value={inputValue}
            onChange={(e) => handleValue(e)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
