import React from 'react';
import Scroll from '../common/Scroll';

const Introduction = () =>
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <h1>C'est quoi ton plan de match?</h1>
      <p>
        Planifie ton prochain road trip sportif en quelques clics seulement. Choisis tes dates, tes sports et la distance que t'es prêt à voyager, et on s'occupe du reste.{' '}
      </p>
      <ul className="actions">
        <li>
          <Scroll type="id" element="formulaire">
            <a href="#formulaire" className="button">
              COMMENCER
            </a>
          </Scroll>
        </li>
      </ul>
    </div>
  </section>


export default Introduction;
