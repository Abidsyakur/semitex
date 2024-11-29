import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#3C4048] text-white py-24 px-28 flex justify-between items-center">
      <h1 className="text-2xl font-bold">SEMITEX</h1>
      <ul className="flex gap-12">
        <li className="text-base">Каталог</li>
        <li className="text-base">Производители</li>
        <li className="text-base">Для кого мы работаем</li>
        <li className="text-base">Сертификаты</li>
        <li className="text-base">О нас</li>
        <li className="text-base">Контакты</li>
      </ul>
      <a
        href="tel:+78123135845"
        className="bg-orange-500 py-2 px-4 rounded hover:bg-orange-600 text-base"
      >
        +7 (812) 313-58-45
      </a>
    </footer>
  );
};

export default Footer;
