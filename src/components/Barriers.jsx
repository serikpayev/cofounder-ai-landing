export default function Barriers() {
  return (
    <section className="section fade">
      <div className="section-label">Частые вопросы</div>
      <h2>Отвечаем на<br /><span className="accent">главные сомнения</span></h2>
      <div className="barr-grid">
        <div className="barr-card fade">
          <span className="barr-emoji">🤔</span>
          <div className="barr-q">А вдруг ИИ ответит что-то не то пациенту?</div>
          <div className="barr-a">Все ответы согласовываются с вами до запуска. ИИ работает строго в рамках ваших скриптов и прайса. Любой нестандартный вопрос автоматически переводится на живого человека.</div>
        </div>
        <div className="barr-card fade d1">
          <span className="barr-emoji">🔧</span>
          <div className="barr-q">Это сложно настраивать и долго внедрять?</div>
          <div className="barr-a">Запуск за 5 рабочих дней. Мы берем все на себя - бриф, настройку, тестирование. Вы только согласовываете финальный вариант. От вас нужен один час времени.</div>
        </div>
        <div className="barr-card fade d2">
          <span className="barr-emoji">🏢</span>
          <div className="barr-q">У нас уже есть рекламное агентство</div>
          <div className="barr-a">Мы не просто реклама. Мы закрываем всю цепочку - от показа объявления до пациента в кресле. Можем работать вместе с вашим агентством: они приводят лидов, мы их конвертируем.</div>
        </div>
      </div>
    </section>
  );
}
