export default function HowItWorks() {
  return (
    <section id="how" className="section fade">
      <div className="section-label">Как это работает</div>
      <h2>От рекламы до кресла -<br /><span className="accent">без вашего участия</span></h2>
      <p className="section-sub">Полная система: сами запускаем рекламу, сами отвечаем на заявки, сами записываем. Вы только принимаете готовых пациентов.</p>

      <div className="steps-row">
        <div className="step-card fade">
          <div className="step-n">01</div>
          <div className="step-title">Запускаем рекламу</div>
          <div className="step-desc">Таргет в Instagram и Facebook под вашу специализацию: имплантация, эстетика, ортодонтия. ИИ анализирует что работает и масштабирует лучшее.</div>
          <div className="step-tag">Запуск за 3 дня</div>
        </div>
        <div className="step-card fade d1">
          <div className="step-n">02</div>
          <div className="step-title">Отвечаем за 5 секунд 24/7 и закрываем все возражения</div>
          <div className="step-desc">Каждый лид получает ответ в WhatsApp или Instagram мгновенно - в 2 ночи, в воскресенье, в праздник. ИИ снимает страх боли, возражения по цене и ведет к записи без скидок и давления.</div>
          <div className="step-tag">Конверсия x2</div>
        </div>
        <div className="step-card fade d2">
          <div className="step-n">03</div>
          <div className="step-title">Доводим до кресла</div>
          <div className="step-desc">Напоминает за день и за час. Пациент приходит подготовленным. Количество тех кто не пришел без предупреждения падает с 25% до 8%.</div>
          <div className="step-tag">Потери -70%</div>
        </div>
        <div className="step-card fade d3">
          <div className="step-n">04</div>
          <div className="step-title">Дожимает тех кто не дошел</div>
          <div className="step-desc">Написал и пропал, записался но не пришел - ИИ сам напоминает, возвращает и дожимает пока человек не запишется снова. Работа с базой на автопилоте.</div>
          <div className="step-tag">Возврат клиентов</div>
        </div>
      </div>
    </section>
  );
}
