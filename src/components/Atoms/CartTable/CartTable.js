import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import { CartTableWrapper } from "./CartTableStyle";

const Item = () => {
  return (
    <CartTableWrapper>
      <div className="col-lg-5">
        <Paragraph title="Produkt" extra="light" />
      </div>
      <div className="col-lg-7">
        <div className="row">
          <div className="col-lg-5">
            <Paragraph title="Ilość" extra="light" />
          </div>
          <div className="col-lg-7">
            <Paragraph title="Cena" extra="light" />
          </div>
        </div>
      </div>
    </CartTableWrapper>
  );
};

export default Item;
