import React from "react";
import { Link } from "react-router-dom";
import "./presentation.scss";

function Presentation() {
  return (
    <section className="presentation">
      <div className="presentation__data">
        <h1 className="presentation__data__title">
          Encuentra tu alojamiento ideal
        </h1>
        <p className="presentation__data__description">
          Hoy más que nunca, las personas tienen más flexibilidad para decidir,
          cuando y a donde viajan. Te ofrecemos Rental app, la mejor plataforma
          para buscar y reservar hospedaje y servicios
        </p>
        <div className="presentation__data__buttonRow">
          <Link to="/hotels">
            <button className="presentation__data__buttonRow__red">
              Explorar Alojamientos
            </button>
          </Link>
          <Link to="/about">
            <button className="presentation__data__buttonRow__white">
              Sobre nosotros
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
