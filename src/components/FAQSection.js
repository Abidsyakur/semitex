import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Menambahkan ikon panah

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    'Как производится доставка?',
    'Какие сроки выполнения заказа?',
    'Можно ли получить скидку?',
  ];

  return (
    <div className="bg-blue-700 text-white p-8">
      <h2 className="text-2xl font-bold text-center mb-4">
        Ответы на популярные вопросы
      </h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            className="w-full text-left bg-white text-blue-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex justify-between items-center"
            onClick={() => toggleFAQ(index)}
          >
            <span>{faq}</span>
            {/* Ikon panah */}
            {openIndex === index ? (
              <FaChevronUp className="text-xl" />
            ) : (
              <FaChevronDown className="text-xl" />
            )}
          </button>

          {/* Bagian jawaban dengan perubahan warna */}
          {openIndex === index && (
            <div className="p-4 bg-[#9694FF] text-white border rounded mt-2 shadow-md transition-all duration-300">
              <p>Здесь будет ответ на вопрос: {faq}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
