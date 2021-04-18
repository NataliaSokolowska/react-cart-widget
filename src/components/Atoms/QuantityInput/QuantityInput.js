import { useEffect, useState } from "react";
import { pluralizeForm } from "../../../helpers";
import { QBtn, QInput } from "./QuantityInputStyle";

const QuantityInput = ({ itemData, item }) => {
  const { id, name, price, min, max, isBlocked } = item;
  const [count, setCount] = useState(1);
  const [newPrice, setNewPrice] = useState(price);
  const summary = count * newPrice;

  useEffect(() => {
    itemData(id, summary);
  }, [count]);

  useEffect(() => {
    setCount(min);
    setNewPrice(price);
  }, []);

  const addCountHandler = () => {
    if (count >= max) {
      alert(
        `Nie mozesz zamówić więcej produktu: ${name} niz ${pluralizeForm(max)}`
      );
      return;
    }
    setCount(count + 1);
  };

  const removeCountHandler = () => {
    if (count <= min) {
      alert(
        `Nie mozesz zamówić mniej produktu: ${name} niz ${pluralizeForm(min)}`
      );
      return;
    }
    setCount(count - 1);
  };

  return (
    <>
      <QBtn disabled={isBlocked} onClick={removeCountHandler}>
        -
      </QBtn>
      <QInput
        type="number"
        name="quantity"
        value={count}
        min={min}
        max={max}
        disabled={isBlocked}
        readOnly={true}
      />
      <QBtn disabled={isBlocked} onClick={addCountHandler}>
        +
      </QBtn>
    </>
  );
};
export default QuantityInput;
