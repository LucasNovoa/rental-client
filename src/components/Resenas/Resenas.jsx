import React from "react";
import "./Resenas.scss";
// import datos from "../datos.js";

const Resenas = (datos) => {
  // console.log(datos.data);
  const arrayInit = [];

  for (let i = 0; i < 3; i++) {
    arrayInit.push(datos.data[i].description);
  }

  // console.log(datos.data[0].image);
  // console.log(arrayInit);

  let varcleaning = 0;
  let varlocation = 0;
  let varattentionService = 0;
  let varcomfortable = 0;
  let varfacilities = 0;
  let varpriceQualityRatio = 0;

  for (let i = 0; i < datos.data.length; i++) {
    varcleaning += datos.data[i].cleaning;
    varlocation += datos.data[i].location;
    varattentionService += datos.data[i].attentionService;
    varcomfortable += datos.data[i].comfortable;
    varfacilities += datos.data[i].facilities;
    varpriceQualityRatio += datos.data[i].priceQualityRatio;
  }

  const puntaje =
    (varcleaning +
      varlocation +
      varattentionService +
      varcomfortable +
      varfacilities +
      varpriceQualityRatio) /
    (6 * datos.data.length);

  // console.log(puntaje);

  const catPuntaje = () => {
    let cat = "";
    if (puntaje < 3) return (cat = "Poco aceptable");
    else if (puntaje < 3.5) return (cat = "Aceptable");
    else if (puntaje < 4) return (cat = "Bueno");
    else if (puntaje < 4.5) return (cat = "Muy bueno");
    else if (puntaje >= 4.5) return (cat = "Fantástico");
    return cat;
  };

  return (
    <div className="resenas">
      <div className="resenas__container">
        <span className="resenas__container__title">
          Comentarios de los clientes
        </span>
      </div>
      <div className="resenas__resumen">
        <span className="resenas__resumen__puntaje">{puntaje.toFixed(1)}</span>
        <span className="resenas__resumen__categoria">{catPuntaje()}</span>
        <span className="resenas__resumen__cantidad">{`${datos.data.length} comentarios sobre este lugar`}</span>
        {/* <span className="resenas__resumen__link">
          Leer todos los comentarios
        </span> */}
      </div>
      <div className="resenas__categoriasContainer">
        <div className="resenas__categoriasContainer__title">Categorías:</div>
      </div>
      <div className="resenas__categoriaList">
        <div className="resenas__categoriaList__categoria">
          <span className="resenas__categoriaList__categoria__subtitle">
            Personal
          </span>
          <div className="resenas__categoriaList__categoria__cont">
            <span
              className="resenas__categoriaList__categoria__cont__values"
              style={{
                width: `${(varattentionService / datos.data.length) * 50}px`,
              }}
            >
              {`${(varattentionService / datos.data.length).toFixed(1)} `}
            </span>
          </div>
        </div>
        <div className="resenas__categoriaList__categoria">
          <span className="resenas__categoriaList__categoria__subtitle">
            Instalaciones
          </span>
          <div className="resenas__categoriaList__categoria__cont">
            <span
              className="resenas__categoriaList__categoria__cont__values"
              // style={{ width: `${resenasTotal.facilities * 50}px` }}
              style={{
                width: `${(varfacilities / datos.data.length) * 50}px`,
              }}
            >
              {`${(varfacilities / datos.data.length).toFixed(1)} `}
            </span>
          </div>
        </div>
        <div className="resenas__categoriaList__categoria">
          <span className="resenas__categoriaList__categoria__subtitle">
            Limpieza
          </span>
          <div className="resenas__categoriaList__categoria__cont">
            <span
              className="resenas__categoriaList__categoria__cont__values"
              style={{
                width: `${(varcleaning / datos.data.length) * 50}px`,
              }}
            >
              {`${(varcleaning / datos.data.length).toFixed(1)} `}
            </span>
          </div>
        </div>
        <div className="resenas__categoriaList__categoria">
          <span className="resenas__categoriaList__categoria__subtitle">
            Confort
          </span>
          <div className="resenas__categoriaList__categoria__cont">
            <span
              className="resenas__categoriaList__categoria__cont__values"
              style={{
                width: `${(varcomfortable / datos.data.length) * 50}px`,
              }}
            >
              {`${(varcomfortable / datos.data.length).toFixed(1)} `}
            </span>
          </div>
        </div>
        <div className="resenas__categoriaList__categoria">
          <span className="resenas__categoriaList__categoria__subtitle">
            Calidad/Precio
          </span>
          <div className="resenas__categoriaList__categoria__cont">
            <span
              className="resenas__categoriaList__categoria__cont__values"
              style={{
                width: `${(varpriceQualityRatio / datos.data.length) * 50}px`,
              }}
            >
              {`${(varpriceQualityRatio / datos.data.length).toFixed(1)} `}
            </span>
          </div>
        </div>
        <div className="resenas__categoriaList__categoria">
          <span className="resenas__categoriaList__categoria__subtitle">
            Ubicación
          </span>
          <div className="resenas__categoriaList__categoria__cont">
            <span
              className="resenas__categoriaList__categoria__cont__values"
              style={{
                width: `${(varlocation / datos.data.length) * 50}px`,
              }}
            >
              {`${(varlocation / datos.data.length).toFixed(1)} `}
            </span>
          </div>
        </div>
      </div>
      <div className="resenas__description">
        <span className="resenas__description__title">
          Lo que más gustó a otros clientes:
        </span>
        <div className="resenas__description__grid">
          {/* {arrayInit.map((e, index) => { */}
          {datos.data.map((e, index) => {
            return (
              <React.Fragment key={index}>
                <div className="resenas__description__grid__content">
                  <img
                    // src={datos.data[index].image}
                    src={e.image}
                    alt="img"
                    className="resenas__description__grid__content__img"
                  ></img>
                  <div className="resenas__description__grid__content__datos">
                    <div className="resenas__description__grid__content__datos__name">
                      {e.nombre}
                    </div>
                    <div className="resenas__description__grid__content__datos__pais">
                      {e.pais}
                    </div>
                  </div>
                  <div className="resenas__description__grid__content__text">
                    {e.description}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
          {/* {resenasTotal.map((e, index) => {
            return (
              <React.Fragment key={index}>
                <div className="resenas__description__grid__text">
                  {e.description}
                </div>
              </React.Fragment>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Resenas;
