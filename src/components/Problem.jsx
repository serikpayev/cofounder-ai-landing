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
              <div className="funnel-v2">
                <div className="fv-step">
                  <div className="fv-meta"><span className="fv-lbl">Написали в WhatsApp</span><span className="fv-num bad">100%</span></div>
                  <div className="fv-bar-wrap"><div className="fv-bar bad" data-w="100"></div></div>
                </div>
                <div className="fv-step">
                  <div className="fv-meta"><span className="fv-lbl">Получили ответ быстро</span><span className="fv-num bad">35%</span></div>
                  <div className="fv-bar-wrap"><div className="fv-bar bad" data-w="35"></div></div>
                </div>
                <div className="fv-step">
                  <div className="fv-meta"><span className="fv-lbl">Записались на прием</span><span className="fv-num bad">15%</span></div>
                  <div className="fv-bar-wrap"><div className="fv-bar bad" data-w="15"></div></div>
                </div>
                <div className="fv-step">
                  <div className="fv-meta"><span className="fv-lbl">Пришли в клинику</span><span className="fv-num ok">10%</span></div>
                  <div className="fv-bar-wrap"><div className="fv-bar ok" data-w="10"></div></div>
                </div>
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
