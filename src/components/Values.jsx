export default function Values() {
  return (
    <div className="section-alt">
      <section className="section fade">
        <div className="section-label">Результаты</div>
        <h2>Цифры которые меняют<br /><span className="accent">экономику клиники</span></h2>
        <div className="values-grid" style={{ marginTop: '56px' }}>
          <div className="val-card fade">
            <div className="val-big">x3 <span className="val-unit">конверсия</span></div>
            <div className="val-title">Из тех же лидов - в три раза больше пациентов</div>
            <div className="val-desc">Стандартная конверсия из заявки в прием - 10-15%. Наша система доводит до 40-60%. Вы не тратите больше на рекламу - просто перестаете терять тех кто уже написал.</div>
          </div>
          <div className="val-card fade d1">
            <div className="val-big">5 <span className="val-unit">секунд</span></div>
            <div className="val-title">Первый ответ - пока пациент еще горячий</div>
            <div className="val-desc">78% людей уходят к конкуренту если не получили ответ в первые 5 минут. Наш ИИ отвечает за 5 секунд - в любое время суток. Вы всегда первые.</div>
          </div>
          <div className="val-card fade d2">
            <div className="val-big">-70% <span className="val-unit">потерь</span></div>
            <div className="val-title">Меньше пациентов не приходят без предупреждения</div>
            <div className="val-desc">Автоматические напоминания за день и за час. Пациент подтверждает или переносит - врач всегда знает заполнено ли кресло.</div>
          </div>
          <div className="val-card fade d3">
            <div className="val-big">5 <span className="val-unit">дней</span></div>
            <div className="val-title">Полная система - за пять рабочих дней</div>
            <div className="val-desc">Берем все на себя: бриф, настройка, тестирование, согласование. Вы только проверяете финальный вариант. Через неделю система работает.</div>
          </div>
        </div>
      </section>
    </div>
  );
}
