import { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import Values from './components/Values';
import AhaBlock from './components/AhaBlock';
import Recognition from './components/Recognition';
import Compare from './components/Compare';
import Barriers from './components/Barriers';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';

function runFunnels() {
  document.querySelectorAll('.funnel-fill, .fv-bar').forEach(b => {
    b.style.width = b.dataset.w + '%';
  });
}

function App() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          if (e.target.querySelector('.funnel-fill')) runFunnels();
          if (e.target.closest('.funnel-block')) runFunnels();
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade').forEach(el => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Values />
      <AhaBlock />
      <Recognition />
      <Compare />
      <Barriers />
      <FinalCta />
      <Footer />
    </>
  );
}

export default App;
