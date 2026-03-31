export default function AhaBlock() {
  return (
    <div id="aha" className="aha-section">
      <div className="aha-inner">
        <div className="aha-grid">
          <div className="fade">
            <div className="aha-label">Попробуйте прямо сейчас</div>
            <h2>Покажем сколько пациентов вы <span className="accent">теряете каждую неделю</span></h2>
            <p className="aha-desc">Два способа убедиться что это работает - без обязательств и без продаж. Просто покажем цифры.</p>
            <div className="aha-options">
              <a href="#cta" className="aha-opt" style={{ textDecoration: 'none' }}>
                <div className="aha-opt-num">01</div>
                <div>
                  <div className="aha-opt-title">Бесплатный аудит воронки</div>
                  <div className="aha-opt-desc">Берем ваши последние 50 заявок и показываем сколько из них не дошли до кресла и почему. В деньгах - сколько вы теряете каждую неделю.</div>
                </div>
              </a>
              <a href="#cta" className="aha-opt" style={{ textDecoration: 'none' }}>
                <div className="aha-opt-num">02</div>
                <div>
                  <div className="aha-opt-title">Демо вживую на созвоне</div>
                  <div className="aha-opt-desc">Запускаем ИИ-продажника на одном реальном лиде прямо на звонке - вы видите как он отрабатывает "дорого" и записывает на консультацию.</div>
                </div>
              </a>
            </div>
          </div>

          <div className="aha-demo-box fade d2">
            <div className="aha-demo-header">Результаты аудита - пример клиники</div>
            <div className="aha-metrics">
              <div className="aha-metric-row">
                <div className="aha-metric-label">Заявок за месяц</div>
                <div className="aha-metric-val neutral">147</div>
              </div>
              <div className="aha-metric-row">
                <div className="aha-metric-label">Дошли до кресла</div>
                <div className="aha-metric-val loss">18 (12%)</div>
              </div>
              <div className="aha-metric-row">
                <div className="aha-metric-label">Потеряно пациентов</div>
                <div className="aha-metric-val loss">129</div>
              </div>
              <div className="aha-metric-row">
                <div className="aha-metric-label">Потери в деньгах / мес</div>
                <div className="aha-metric-val loss">36 900 000 тг</div>
              </div>
              <div className="aha-metric-row">
                <div className="aha-metric-label">С Co-Founder AI дошло бы</div>
                <div className="aha-metric-val gain">74 пациента (50%)</div>
              </div>
            </div>
            <div className="aha-cta-row">
              <a href="#cta" className="btn-white">Рассчитать для вашей клиники</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
