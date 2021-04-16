import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import {
  CartTableWrapper,
  CartTableFifth,
  CartTableSeventh,
} from "./CartTableStyle";

const Item = () => {
  return (
    <CartTableWrapper>
      <CartTableFifth>
        <Paragraph title="Produkt" extra="light" />
      </CartTableFifth>
      <CartTableSeventh>
        <div className="row">
          <CartTableFifth>
            <Paragraph title="Ilość" extra="light" />
          </CartTableFifth>
          <CartTableSeventh extra="textRight">
            <Paragraph title="Cena" extra="light" />
          </CartTableSeventh>
        </div>
      </CartTableSeventh>
    </CartTableWrapper>
  );
};

export default Item;
