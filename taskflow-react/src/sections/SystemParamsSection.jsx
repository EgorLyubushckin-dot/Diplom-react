const params = [
  {
    title: "Масса Земли",
    value: "5.972 × 10^24",
    unit: "кг",
    description: "Масса Земли, используемая в модели системы Земля-Луна.",
  },
  {
    title: "Масса Луны",
    value: "7.348 × 10^22",
    unit: "кг",
    description: "Масса Луны, влияющая на динамику движения аппарата.",
  },
  {
    title: "Расстояние Земля–Луна",
    value: "384 400 000",
    unit: "м",
    description: "Среднее расстояние между центрами Земли и Луны.",
  },
  {
    title: "Радиус Земли",
    value: "6 371 000",
    unit: "м",
    description: "Средний радиус Земли, используемый при расчёте высоты входа.",
  },
  {
    title: "Высота границы атмосферы",
    value: "100 000",
    unit: "м",
    description: "Условная граница атмосферы, используемая как точка входа.",
  },
];

const SystemParamsSection = () => {
  return (
    <section id="system-params" className="content-section">
      <h2>Параметры системы</h2>
      <p className="section-subtitle">
        Основные физические параметры системы Земля–Луна, используемые в модели.
      </p>

      <div className="params-grid">
        {params.map((item, index) => (
          <div key={index} className="param-card">
            <h3>{item.title}</h3>
            <p className="param-value">
              {item.value} <span>{item.unit}</span>
            </p>
            <p className="param-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SystemParamsSection;