import React from 'react';
import Scroll from '../common/Scroll';

const Introduction = () =>
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <h1>Ton plan de match, ton planificateur de road trip sportif.</h1>
      <p>
        Organise ton prochain road trip à thématique sportive en quelques clics.{' '}
      </p>
      <ul className="actions">
        <li>
          <Scroll type="id" element="three">
            <a href="#three" className="button">
              COMMENCER
            </a>
          </Scroll>
        </li>
        <li>
            <a href="#three" className="button">
              RÉCUPÉRER UN PLAN DE MATCH
            </a>
        </li>
      </ul>
    </div>
  </section>


export default Introduction;
