import React, { useState, useEffect } from "react";
import CartHeader from "../../Molecules/CartHeader/CartHeader";
import CartTable from "../../Atoms/CartTable/CartTable";
import Item from "../../Molecules/Item/Item";
import Summary from "../../Atoms/Summary/Summary";
import Button from "../../Atoms/Button/Button";

const CartSection = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("./data/cart.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        const items = response.map((item) => ({
          ...item,
          price: item.price * item.min,
        }));

        setItems(items);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <CartHeader />
      <CartTable />
      <Item items={items} setItems={setItems} />
      <Summary />
      <Button buttonTitle="Zamawiam" />
    </>
  );
};

export default CartSection;
