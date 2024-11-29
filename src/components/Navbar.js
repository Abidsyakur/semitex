import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#3C4048] text-white py-8 px-12 flex justify-between items-center">
      <h1 className="text-3xl font-bold">SEMITEX</h1>
      <ul className="flex gap-12">
        <li className="text-lg">Каталог</li>
        <li className="text-lg">Производители</li>
        <li className="text-lg">Для кого мы работаем</li>
        <li className="text-lg">Сертификаты</li>
        <li className="text-lg">О нас</li>
        <li className="text-lg">Контакты</li>
      </ul>
      <a
        href="tel:+78123135845"
        className="bg-orange-500 py-3 px-6 rounded hover:bg-orange-600 text-lg"
      >
        +7 (812) 313-58-45
      </a>
    </footer>
  );
};

export default Footer;
