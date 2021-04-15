import React from "react";
import Paragraph from "../Paragraph/Paragraph";

const Item = () => {
  return (
    <div className="row">
      <div className="col-lg-4">
        <Paragraph title="Produkt" extra="light" />
      </div>
      <div className="col-lg-4">
        <Paragraph title="Ilość" extra="light" />
      </div>
      <div className="col-lg-4">
        <Paragraph title="Cena" extra="light" />
      </div>
    </div>
  );
};

export default Item;
