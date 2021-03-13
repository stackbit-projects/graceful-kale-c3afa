import React from 'react';

const ContactForm = () =>
  <section>
    <form method="post" action="#">
      <div className="fields">
        <div className="field">
            
          <label htmlFor="message">Ligues</label>
          <input type="checkbox" name="message" id="message"/>
          
        </div>
        <div className="field half">
          <label htmlFor="name">Point de départ</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="field half">
          <label htmlFor="email">Rayon maximum</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="field half">
          <label htmlFor="name">Date de départ</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="field half">
          <label htmlFor="email">Date de retour</label>
          <input type="text" name="email" id="email" />
        </div>
      </div>
      <ul className="actions">
        <li>
          <a href="/#" className="button submit">
            Send Message
          </a>
        </li>
      </ul>
    </form>
  </section>

export default ContactForm;
