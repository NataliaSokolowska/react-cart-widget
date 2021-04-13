import React from "react";
import CartHeader from "../../Molecules/CartHeader/CartHeader";
import CartTable from "../../Atoms/CartTable/CartTable";
import Item from "../../Molecules/Item/Item";
import Summary from "../../Atoms/Summary/Summary";
import Button from "../../Atoms/Button/Button";

const CartSection = () => {
  return (
    <>
      <CartHeader />
      <CartTable />
      <Item />
      <Summary />
      <Button buttonTitle="Zamawiam" />
    </>
  );
};

export default CartSection;
