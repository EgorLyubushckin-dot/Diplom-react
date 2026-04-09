import { useState } from "react";

const concepts = [
  {
    title: "Ограниченная задача трех тел",
    description:
      "Круговая ограниченная задача трёх тел — модель движения в системе Земля-Луна, где рассматривается влияние двух массивных тел на третье с малой массой.",
  },
  {
    title: "Угол входа",
    description:
      "Угол, под которым космический аппарат входит в атмосферу Земли. Слишком малый или слишком большой угол приводит к срыву миссии.",
  },
  {
    title: "Скорость входа",
    description:
      "Скорость аппарата при входе в атмосферу. Определяет тепловые нагрузки и перегрузки.",
  },
  {
    title: "Баллистические уравнения",
    description:
      "Уравнения, определяющие движение космического аппарата после входа в атмосферу Земли",
  },
];

const ConceptsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  function toggle(index) {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  }

  return (
    <section id="concepts" className="content-section">
      <h2>Ключевые понятия</h2>

      <div className="concepts-list">
        {concepts.map((item, index) => (
          <div
            key={index}
            className="concept-card"
            onClick={() => toggle(index)}
          >
            <div className="concept-header">
              <h3>{item.title}</h3>
              <span className="concept-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <p className="concept-description">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConceptsSection;