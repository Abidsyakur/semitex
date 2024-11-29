import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-20">
        {/* Bagian Teks */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-snug mb-6">
            ОПТОВЫЕ ПОСТАВКИ <br />
            ЭЛЕКТРОННЫХ КОМПОНЕНТОВ <br />
            <span className="text-blue-300">ИЗ КИТАЯ ДЕНЬ В ДЕНЬ</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Комплексная поставка электронных компонентов и оборудования. Подберем аналоги популярных брендов в Европе и условиях санкций.
          </p>
          <ul className="list-disc list-inside text-left text-base md:text-lg mb-8 space-y-2">
            <li>Отсрочка платежей для постоянных клиентов</li>
            <li>Бесплатная доставка по Москве и СПб в течение 24 часов</li>
            <li>Квалифицированный персональный менеджер</li>
          </ul>
        </div>

        {/* Bagian Formulir */}
        <div className="flex-1 bg-white rounded-xl shadow-lg p-6 md:p-8 text-black max-w-sm">
          <h3 className="text-lg font-semibold mb-4">Закажите обратный звонок</h3>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
              >
                Ваше имя
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Иван Иванов"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium mb-2"
              >
                Номер телефона
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+7 (999) 123-45-67"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-md text-sm font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              ЗАКАЗАТЬ ЗВОНОК
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
