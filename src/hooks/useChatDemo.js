import { useEffect, useRef } from 'react';

const msgs = [
  { side: 'right', text: 'Здравствуйте, хотела узнать стоимость имплантации', time: '22:47' },
  { side: 'left', text: 'Добрый вечер! Рада помочь.\n\nИмплантация под ключ - от 180 000 тг. Цена зависит от системы импланта и объема работы.\n\nПодскажите, один зуб или несколько нужно восстановить?', time: '22:47' },
  { side: 'right', text: 'Один зуб, верхний. Боюсь что больно будет', time: '22:48' },
  { side: 'left', text: 'Это самый частый вопрос - и понимаю этот страх.\n\nУстановка проходит под анестезией, пациенты обычно говорят что ощущения как при лечении кариеса. После - небольшой дискомфорт 1-2 дня, не больше.\n\nХотите запишем на бесплатную консультацию? Врач покажет 3D-снимок и объяснит весь план лично.', time: '22:48' },
  { side: 'right', text: 'Да, хочу. Когда можно?', time: '22:49' },
  { side: 'left', text: 'Ближайшие места:\n\n- Завтра 10:00\n- Завтра 15:30\n- Послезавтра 11:00\n\nКакое время удобнее?', time: '22:49' },
];

export function useChatDemo() {
  const bodyRef = useRef(null);
  const idxRef = useRef(0);
  const timersRef = useRef([]);

  function clearTimers() {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }

  function schedule(fn, delay) {
    const id = setTimeout(fn, delay);
    timersRef.current.push(id);
    return id;
  }

  function add(m) {
    const body = bodyRef.current;
    if (!body) return;
    const el = document.createElement('div');
    el.className = `msg msg-${m.side}`;
    const txt = m.text.replace(/\n/g, '<br>');
    el.innerHTML = `
      ${m.side === 'left' ? '<div class="msg-sender">Co-Founder AI</div>' : ''}
      <div class="msg-bubble">${txt}</div>
      <div class="msg-meta">${m.time}</div>
    `;
    body.appendChild(el);
    setTimeout(() => el.classList.add('show'), 10);
  }

  function reset() {
    const body = bodyRef.current;
    if (!body) return;
    body.innerHTML = '';
    idxRef.current = 0;
    schedule(next, 800);
  }

  function next() {
    const body = bodyRef.current;
    if (!body) return;
    if (idxRef.current >= msgs.length) {
      schedule(reset, 3000);
      return;
    }
    const m = msgs[idxRef.current];
    if (m.side === 'left') {
      const t = document.createElement('div');
      t.className = 'msg msg-left';
      t.style.alignSelf = 'flex-start';
      t.innerHTML = `<div class="typing show"><div class="tdot"></div><div class="tdot"></div><div class="tdot"></div></div>`;
      body.appendChild(t);
      schedule(() => {
        if (body.contains(t)) body.removeChild(t);
        add(m);
        idxRef.current++;
        schedule(next, 2200);
      }, 1000);
    } else {
      add(m);
      idxRef.current++;
      schedule(next, 1600);
    }
  }

  useEffect(() => {
    schedule(next, 1000);
    return () => clearTimers();
  }, []);

  return bodyRef;
}
