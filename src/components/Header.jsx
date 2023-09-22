import React from 'react';


const Header = () => {
  return (
    <nav className="bg-red-600 py-4 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="flex justify-between items-center">
        <img src="./../../public/imagesswiggylogo.png" alt="swiggy image"/>
        <div className="text-white text-xl font-semibold">
          <a href="/">Swiggy</a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-red-200">
            Home
          </a>
          <a href="#" className="text-white hover:text-red-200">
            Orders
          </a>
          <a href="#" className="text-white hover:text-red-200">
            Favorites
          </a>
          <a href="#" className="text-white hover:text-red-200">
            Profile
          </a>
        </div>

        {/* Mobile Menu (Hamburger Icon) */}
        <div className="md:hidden">
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
