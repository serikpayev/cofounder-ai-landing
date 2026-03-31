export default function Recognition() {
  return (
    <section className="section fade">
      <div className="recog-grid">
        <div>
          <div className="section-label">Узнаете себя?</div>
          <h2>Это ваша<br /><span className="accent">клиника?</span></h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '32px', lineHeight: '1.7' }}>Если хотя бы три пункта из шести про вас - самое время разобраться где именно уходят ваши пациенты.</p>
          <div className="checks">
            <div className="check-row">
              <div className="check-icon">✓</div>
              <div className="check-text">Вкладываете в рекламу - а запись врачей не заполнена</div>
            </div>
            <div className="check-row">
              <div className="check-icon">✓</div>
              <div className="check-text">Администраторы консультируют, но не продают - теряете пациентов в переписке</div>
            </div>
            <div className="check-row">
              <div className="check-icon">✓</div>
              <div className="check-text">Пишут вечером и в выходные - утром они уже в другой клинике</div>
            </div>
            <div className="check-row">
              <div className="check-icon">✓</div>
              <div className="check-text">Спрашивают цену, говорят "подумаю" - и исчезают навсегда</div>
            </div>
            <div className="check-row">
              <div className="check-icon">✓</div>
              <div className="check-text">Врач сидит без пациента - человек не пришел и не предупредил</div>
            </div>
            <div className="check-row">
              <div className="check-icon">✓</div>
              <div className="check-text">Хотите масштабироваться, но очередной найм не решает проблему</div>
            </div>
          </div>
        </div>

        <div className="recog-cta fade d1">
          <h3>Покажем сколько кресел вы<br /><span className="accent">теряете каждую неделю</span></h3>
          <p>Бесплатный аудит за 15 минут. Берем ваши последние заявки и показываем где именно уходят пациенты и сколько это стоит в деньгах.</p>
          <a href="#cta" className="btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block' }}>Получить аудит бесплатно</a>
        </div>
      </div>
    </section>
  );
}
