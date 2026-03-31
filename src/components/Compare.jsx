export default function Compare() {
  return (
    <div id="compare" className="section-alt">
      <section className="section fade">
        <div className="section-label">Сравнение</div>
        <h2>Почему не работают<br /><span className="accent">привычные решения</span></h2>

        <div className="comp-wrap">
          <table>
            <thead>
              <tr>
                <th>Функция</th>
                <th>Рекламное агентство</th>
                <th>Чат-бот на сайте</th>
                <th>Администратор</th>
                <th className="hl">Co-Founder AI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Приводит лидов</td>
                <td><span className="yes">✓</span></td>
                <td><span className="no">✗</span></td>
                <td><span className="no">✗</span></td>
                <td className="hl"><span className="yes">✓</span></td>
              </tr>
              <tr>
                <td>Отвечает за 5 секунд</td>
                <td><span className="no">✗</span></td>
                <td><span className="part">кнопки только</span></td>
                <td><span className="no">✗</span></td>
                <td className="hl"><span className="yes">✓</span></td>
              </tr>
              <tr>
                <td>Работает ночью и в выходные</td>
                <td><span className="no">✗</span></td>
                <td><span className="part">FAQ только</span></td>
                <td><span className="no">✗</span></td>
                <td className="hl"><span className="yes">✓</span></td>
              </tr>
              <tr>
                <td>Закрывает возражения</td>
                <td><span className="no">✗</span></td>
                <td><span className="no">✗</span></td>
                <td><span className="part">не всегда</span></td>
                <td className="hl"><span className="yes">✓</span></td>
              </tr>
              <tr>
                <td>Снижает потери от неприхода</td>
                <td><span className="no">✗</span></td>
                <td><span className="no">✗</span></td>
                <td><span className="part">вручную</span></td>
                <td className="hl"><span className="yes">✓</span></td>
              </tr>
              <tr>
                <td>Полная аналитика воронки</td>
                <td><span className="part">частично</span></td>
                <td><span className="no">✗</span></td>
                <td><span className="no">✗</span></td>
                <td className="hl"><span className="yes">✓</span></td>
              </tr>
              <tr>
                <td>Ответственность за результат</td>
                <td><span className="no">✗</span></td>
                <td><span className="no">✗</span></td>
                <td><span className="no">✗</span></td>
                <td className="hl"><span className="yes">✓</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
