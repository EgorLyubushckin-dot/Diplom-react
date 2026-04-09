import { useState } from "react";



const timeline = [
  {
    title: "Старт миссии",
    year: "11 апреля 1970",
    description:
      "Apollo 13 стартовал с мыса Кеннеди как штатная лунная миссия. Планировалась высадка в районе Фра-Мауро.",
  },
  {
    title: "Полёт к Луне",
    year: "Первые сутки полёта",
    description:
      "После выхода на траекторию к Луне корабль двигался по расчётной схеме. Командный и служебный модуль были состыкованы с лунным модулем.",
  },
  {
    title: "Авария",
    year: "13 апреля 1970",
    description:
      "Во время перемешивания содержимого баков произошла авария в служебном модуле. Началась потеря кислорода и электроэнергии, что сделало высадку невозможной.",
  },
  {
    title: "Коррекция траектории",
    year: "После аварии",
    description:
      "Экипаж и наземные службы выполнили коррекцию траектории, чтобы обеспечить возврат к Земле. Лунный модуль использовался как средство жизнеобеспечения и управления.",
  },
  {
    title: "Возвращение на Землю",
    year: "17 апреля 1970",
    description:
      "После облёта Луны и корректировок корабль вернулся к Земле и успешно вошёл в атмосферу с допустимыми параметрами.",
  },
];

const ApolloTimelineSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="apollo-timeline" className="content-section">
      <h2>Этапы миссии Apollo 13</h2>
      <p className="section-subtitle">
        Интерактивная временная шкала ключевых событий миссии.
      </p>

      <div className="timeline-layout">
        <div className="timeline-list">
          {timeline.map((item, index) => (
            <button
              key={index}
              className={`timeline-item ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="timeline-year">{item.year}</span>
              <span className="timeline-title">{item.title}</span>
            </button>
          ))}
        </div>

        <div className="timeline-detail">
          <h3>{timeline[activeIndex].title}</h3>
          <p className="timeline-detail-year">{timeline[activeIndex].year}</p>
          <p>{timeline[activeIndex].description}</p>
        </div>
      </div>
    </section>
  );
};

export default ApolloTimelineSection;