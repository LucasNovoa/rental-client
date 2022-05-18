import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import NotFoundComp from "../components/NotFoundComp/NotFoundComp";

import "../scss/NotFound.scss";

export const NotFound = () => {
  return (
    <div className="hotels">
      <Header />
      <NotFoundComp />
      <Footer />
    </div>
  );
};
