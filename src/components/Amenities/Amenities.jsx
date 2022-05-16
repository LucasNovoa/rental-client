import React from "react";
import "./Amenities.scss";

const Amenities = (props) => {
  const arreglo = [
    "Cocina",
    "Accesibilidad: rampas ascensor",
    "Internet WiFi",
    "Jacuzzi",
    "Actividades: Masajes servicio de spa",
  ];
  const arregloControlTotal = [
    "Internet WiFi", //listo
    "Accesibilidad: rampas ascensor", //listo
    "Seguridad", //listo
    "Gimnasio", //listo
    "Vistas a punto de interés", //listo
    "Actividades: Masajes servicio de spa", //listo
    "TV pantalla plana", //listo
    "Early Check in", //listo
    "Late Check out", //listo
    "Calefacción", //listo
    "Cocina", //listo
    "Estacionamiento", //listo
    "Jacuzzi", //listo
    "Sala de Juegos", //listo
    "Desayuno incluido", //listo
    "Bar", //listo
    "piscina", //listo
    "Servicio de limpieza diario", //listo
  ];
  return (
    <div className="amenities">
      <h1 className="amenities__title">{"Lo que este lugar ofrece "}</h1>
      <div className="amenities__wrapper">
        <div className="amenities__wrapper__grid">
          {arregloControlTotal.map((e, index) => {
            let visible = false;
            if (arreglo.includes(e)) visible = true;
            let icon = `../assets/iconsAmenities/${e}.svg`;
            if (e === "Actividades: Masajes servicio de spa") {
              icon = `../assets/iconsAmenities/banera.svg`;
            } else if (e === "Accesibilidad: rampas ascensor") {
              icon = `../assets/iconsAmenities/ascensor.svg`;
            }
            console.log(icon);
            return (
              <React.Fragment key={index}>
                <div>
                  <img
                    src={icon}
                    className="amenities__wrapper__grid__category__img"
                  />
                  <div
                    className={`amenities__wrapper__grid__category__text ${
                      !visible && "tachado"
                    }`}
                  >
                    {e}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
