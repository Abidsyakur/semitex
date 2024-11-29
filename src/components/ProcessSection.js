import React from "react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Вы оставляете заявку",
      description:
        "Отправить запрос вы можете любым удобным для вас способом: например, через форму на сайте. Также вы можете связаться с нами напрямую.",
    },
    {
      number: "02",
      title: "Мы проверяем наличие позиций",
      description:
        "Проверяем наличие на складе, а также актуальность производства (возможна замена, если необходимо.)",
    },
    {
      number: "03",
      title: "Формируем коммерческое предложение",
      description:
        "На данном этапе мы с вами согласуем ценовое предложение, обговариваем сроки поставки и условия оплаты.",
    },
    {
      number: "04",
      title: "Проводим оплату",
      description:
        "Далее, после получения авансового платежа, мы размещаем заказ.",
    },
    {
      number: "05",
      title: "Мы выполняем заказ",
      description:
        "Товар поступает на склад в Москву или Санкт-Петербург, где мы сверяем правильность поставки и начинаем сборку.",
    },
    {
      number: "06",
      title: "Вы получаете товар",
      description:
        "Поставляем вам товар в надлежащей упаковке в сопровождении оригиналов всех необходимых документов либо вы забираете его самовывозом.",
    },
  ];

  return (
    <section className="relative bg-white py-16">
      <div className="container mx-auto text-center px-4 md:px-8">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-4">Схема работы</h2>
        <p className="text-gray-600 mb-12">
          Lorem ipsum dolor sit amet consectetur. Augue velit in enim sagittis
          imperdiet sit mauris.
        </p>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-b from-blue-500 to-blue-700 text-white p-6 rounded-lg shadow-lg"
              style={{
                clipPath:
                  index % 2 === 0
                    ? "polygon(0% 0%, 95% 0%, 100% 20%, 100% 100%, 5% 100%, 0% 80%)"
                    : "polygon(5% 0%, 100% 0%, 100% 80%, 95% 100%, 0% 100%, 0% 20%)",
              }}
            >
              {/* Step Number */}
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white text-blue-700 font-bold text-lg w-12 h-12 flex items-center justify-center rounded-full shadow-md">
                {step.number}
              </div>
              {/* Step Content */}
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg">
            Оставить заявку
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
