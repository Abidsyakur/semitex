import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      icon: '/path/to/icon-1.svg',
      title: 'Качественная продукция',
      description: 'Все наши товары сертифицированы и имеют сопроводительную документацию.',
    },
    {
      icon: '/path/to/icon-2.svg',
      title: 'Индивидуальный подход',
      description: 'Возможность изготовления компонентов специально для вас по запросу.',
    },
    {
      icon: '/path/to/icon-3.svg',
      title: 'Бесплатная доставка',
      description: 'Доставка в Москву и СПб в течение 24 часов при заказе от 10 000 рублей.',
    },
    {
      icon: '/path/to/icon-4.svg',
      title: 'Подбираем аналоги',
      description: 'Поможем подобрать аналоги популярных брендов в условиях санкций.',
    },
    {
      icon: '/path/to/icon-5.svg',
      title: 'Резервный запас компонентов',
      description: 'Храним товары на наших складах для постоянных клиентов.',
    },
    {
      icon: '/path/to/icon-6.svg',
      title: 'Гибкая система оплаты',
      description: 'Отсрочка платежей для постоянных клиентов.',
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 md:px-12 lg:px-16 text-center">
        <h2 className="text-3xl font-bold mb-12">Почему с нами выгодно</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-left flex flex-col items-center"
            >
              <div className="mb-4">
                <img src={feature.icon} alt={feature.title} className="w-16 h-16" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-700 text-sm text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
