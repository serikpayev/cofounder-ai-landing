import { FaMoon, FaCommentDots, FaCalendarTimes, FaBullhorn } from 'react-icons/fa';

export default function Problem() {
  return (
    <div id="problem" className="section-alt">
      <section className="section">
        <div className="pain-grid">
          <div className="fade">
            <div className="section-label">Проблема</div>
            <h2>Лиды есть.<br /><span className="accent">Кресла пустые.</span></h2>
            <p className="section-sub">Вы вкладываете в рекламу, но из каждых 100 человек которые написали - до кресла доходят только 10-15. Остальные уходят к конкуренту который ответил быстрее.</p>

            <div className="funnel-block fade d1">
              <div className="funnel-title">Стандартная воронка стоматологии</div>
              <div className="funnel-row">
                <div className="funnel-lbl">Написали в WhatsApp</div>
                <div className="funnel-track"><div className="funnel-fill bad" data-w="100"></div></div>
                <div className="funnel-val bad">100</div>
              </div>
              <div className="funnel-row">
                <div className="funnel-lbl">Получили ответ быстро</div>
                <div className="funnel-track"><div className="funnel-fill bad" data-w="35"></div></div>
                <div className="funnel-val bad">35</div>
              </div>
              <div className="funnel-row">
                <div className="funnel-lbl">Записались на прием</div>
                <div className="funnel-track"><div className="funnel-fill bad" data-w="15"></div></div>
                <div className="funnel-val bad">15</div>
              </div>
              <div className="funnel-row">
                <div className="funnel-lbl">Пришли в клинику</div>
                <div className="funnel-track"><div className="funnel-fill ok" data-w="10"></div></div>
                <div className="funnel-val ok">10</div>
              </div>
            </div>
          </div>

          <div className="pain-cards fade d2">
            <div className="pain-card">
              <div className="pain-icon"><FaMoon /></div>
              <div>
                <div className="pain-title">Пишут ночью - утром уже в другой клинике</div>
                <div className="pain-desc">Администратор работает до 18:00. Пациент написал в 21:30. К утру он уже записан к конкуренту.</div>
              </div>
            </div>
            <div className="pain-card">
              <div className="pain-icon"><FaCommentDots /></div>
              <div>
                <div className="pain-title">Спросили цену - и тишина</div>
                <div className="pain-desc">Администратор называет стоимость. Человек говорит "подумаю". Никто не дожимает. Пациент потерян.</div>
              </div>
            </div>
            <div className="pain-card">
              <div className="pain-icon"><FaCalendarTimes /></div>
              <div>
                <div className="pain-title">Записались но не пришли</div>
                <div className="pain-desc">Каждый четвертый пациент не приходит на прием без предупреждения. Врач сидит, время и деньги потеряны.</div>
              </div>
            </div>
            <div className="pain-card">
              <div className="pain-icon"><FaBullhorn /></div>
              <div>
                <div className="pain-title">Реклама работает - продажи не растут</div>
                <div className="pain-desc">Три агентства, красивый контент, бюджет растет. А количество новых пациентов - нет. Проблема не в рекламе.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
