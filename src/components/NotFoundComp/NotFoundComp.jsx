import React from "react";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <div className="NotFound">
      <div className="NotFound__container">
        <div
          data-w-id="619efe17469a19c94a600b1500000000000b"
          style={{ opacity: 1 }}
          className="NotFound__container__min"
        >
          <div className="NotFound__container__min__404">404</div>
          <h2 className="NotFound__container__min__text">
            Oops! Hotel no encontrado
          </h2>
          <p className="NotFound__container__min__text2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore ma, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore ma.
          </p>
          <div className="NotFound__container__min__home">
            <a href="/" className="NotFound__container__min__home__text3">
              Ir a inicio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
