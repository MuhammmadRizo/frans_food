import React, { useState } from "react";
import Header from "../components/Header/Header";
import "./faq.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Map from "../components/Map/Map";
import Footer from "../components/Footer/Footer";

const Faq1 = () => {
  const faqData = [
    {
      question: "Qancha vaqtda buyurtmani olishim mumkin ?",
      answer: "React is a JavaScript library for building user interfaces.",
      icon: "fa-solid fa-chevron-down",
    },
    {
      question: "Ish vaqtlari qachondan qachongacha ?",
      answer:
        "You can install React by using the create-react-app tool or by manually configuring a new React project.",
      icon: "fa-solid fa-chevron-down",
    },
    {
      question: "Bu yerga ishga kirish uchun nimalar kerak ?",
      answer:
        "You can install React by using the create-react-app tool or by manually configuring a new React project.",
      icon: "fa-solid fa-chevron-down",
    },
    {
      question: "Bu yerning kattasi kim ?",
      answer:
        "You can install React by using the create-react-app tool or by manually configuring a new React project.",
      icon: "fa-solid fa-chevron-down",
    },
    // Add more questions and answers as needed
  ];

  const [activeIndices, setActiveIndices] = useState([]);

  const toggleQuestion = (index) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  return (
    <div>
      <Header />
      <div className="faq__section">
        <h1>Ko’p beriladigan savollar</h1>

        <div className="faq__collapse-one">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <h3 onClick={() => toggleQuestion(index)} className="question">
                {item.question}{" "}
                <i
                  className={`fa fa-${
                    activeIndices.includes(index)
                      ? "chevron-up"
                      : "chevron-down"
                  }`}
                />
              </h3>

              {activeIndices.includes(index) && (
                <p className="answer">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <Map />
      <Footer />
    </div>
  );
};

export default Faq1;
