import React from 'react';
import Scroll from '../common/Scroll';

const Introduction = () =>
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <h1>Coach, c'est quoi le plan de match?</h1>
      <p>
        Planifie ton prochain road trip sportif en quelques clics seulement.{' '}
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
          <Scroll type="id" element="three">
            <a href="#three" className="button">
              RÉCUPÉRER UN PLAN DE MATCH
            </a>
          </Scroll>
        </li>
      </ul>
    </div>
  </section>


export default Introduction;
