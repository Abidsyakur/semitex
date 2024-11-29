import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menuOpen state
  };

  return (
    <nav className="bg-[#3C4048] text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">SEMITEX</h1>
      
      {/* Hamburger Button */}
      <button
        className="text-white text-2xl md:hidden focus:outline-none"
        onClick={toggleMenu} // Add onClick to toggle menu visibility
      >
        ☰
      </button>

      {/* Navigation Links */}
      <ul
        className={`flex gap-8 items-center md:flex-row ${
          menuOpen ? 'flex flex-col' : 'hidden'
        } md:flex bg-[#3C4048] md:bg-transparent absolute md:static top-16 left-0 right-0 md:top-auto md:left-auto md:right-auto p-4 md:p-0`}
      >
        <li className="text-lg cursor-pointer hover:text-orange-400">Каталог</li>
        <li className="text-lg cursor-pointer hover:text-orange-400">Производители</li>
        <li className="text-lg cursor-pointer hover:text-orange-400">Для кого мы работаем</li>
        <li className="text-lg cursor-pointer hover:text-orange-400">Сертификаты</li>
        <li className="text-lg cursor-pointer hover:text-orange-400">О нас</li>
        <li className="text-lg cursor-pointer hover:text-orange-400">Контакты</li>
      </ul>

      {/* Call Button visible only on large screens */}
      <a
        href="tel:+78123135845"
        className="bg-orange-500 py-2 px-4 rounded hover:bg-orange-600 text-sm md:text-lg hidden md:block"
      >
        +7 (812) 313-58-45
      </a>
    </nav>
  );
};

export default Navbar;
