import { useChatDemo } from '../hooks/useChatDemo';

export default function Hero() {
  const chatBodyRef = useChatDemo();

  return (
    <div className="hero">
      <div className="hero-inner">
        <div className="fade">
          <div className="hero-badge">ИИ-партнер для стоматологии</div>
          <h1>Заполним ваши кресла<br />на <span className="accent">90%</span> за 2 месяца<br />пока вы лечите пациентов</h1>
          <p className="hero-sub">
            Берем лида из рекламы и сами доводим до кресла. <strong>ИИ отвечает за 5 секунд</strong> в любое время суток, снимает возражения и записывает на прием. Вы просто принимаете пациентов.
          </p>
          <div className="hero-btns">
            <a href="#cta" className="btn-primary">Бесплатный аудит воронки</a>
            <a href="#aha" className="btn-outline">Посмотреть демо</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-num">5 СЕК</div>
              <div className="stat-label">Время ответа ИИ</div>
            </div>
            <div className="stat">
              <div className="stat-num">x3</div>
              <div className="stat-label">Рост конверсии</div>
            </div>
            <div className="stat">
              <div className="stat-num">24/7</div>
              <div className="stat-label">Без выходных</div>
            </div>
          </div>
        </div>

        <div className="chat-wrap fade d2">
          <div className="chat-bar">
            <div className="chat-ava">AI</div>
            <div className="chat-bar-info">
              <div className="chat-bar-name">Co-Founder AI</div>
              <div className="chat-bar-status">онлайн сейчас</div>
            </div>
            <div className="chat-platform-tag">WhatsApp</div>
          </div>
          <div className="chat-body" ref={chatBodyRef}></div>
          <div className="chat-footer">
            <span className="chat-time-label">Время первого ответа</span>
            <span className="chat-time-val">5 секунд</span>
          </div>
        </div>
      </div>
    </div>
  );
}
