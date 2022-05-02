import React from 'react';
import './presentation.scss';

function Presentation() {
  return (
    <section className="presentation">
      <div className="presentation__data">
        <h1 className="presentation__data__title">Encuentra tu alojamiento ideal</h1>
        <p className="presentation__data__description">Non consectetur a erat nam at lectus urna duis convallis molestie nunc non blandit massa ut etiam sit amet nisl purus in mollis nunc sed et magnis dis parturient.</p>
        <div className="presentation__data__buttonRow">
          <button className="presentation__data__buttonRow__red">Explorar Alojamientos</button>
          <button className="presentation__data__buttonRow__white">Sobre nosotros</button>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
