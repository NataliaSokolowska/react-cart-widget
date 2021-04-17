import { useRef } from "react";
import Paragraph from "../../Atoms/Paragraph/Paragraph";
import QuantityInput from "../../Atoms/QuantityInput/QuantityInput";
import { formatPrice } from "../../../helpers";
import {
  ItemRow,
  ItemTitle,
  ItemInfo,
  ItemImage,
  ItemPrice,
  ItemActions,
  ItemQuantity,
} from "./ItemStyle";

const Item = ({ items, setItems }) => {
  const myPrice = useRef();

  const handlePriceSummary = (id, summary) => {
    //summary zwraca mi poprawną cenę, tę którą chcę mieć zamiast item.price po zmianie inputu
    items.map((item) => {
      if (item.id === id) {
        // myPrice.current.innerHTML = summary; //przypisuje summary do ostatniego zmapowanego elem.
      }
    });
  };

  return items.map((item, index) => (
    <ItemRow key={item.id} extra="itemSection">
      <ItemInfo>
        <ItemImage src={item.image} alt={item.name} />
        <ItemTitle>
          <Paragraph extra="bold" title={item.name} />
          <Paragraph extra="light" title={`Kategoria: ${item.category}`} />
        </ItemTitle>
      </ItemInfo>
      <ItemActions>
        <ItemRow>
          <ItemQuantity>
            <QuantityInput
              item={item}
              itemData={(id, summary) => handlePriceSummary(id, summary)}
            />
          </ItemQuantity>
          <ItemPrice ref={myPrice}>{formatPrice(item.price)}</ItemPrice>
        </ItemRow>
      </ItemActions>
    </ItemRow>
  ));
};

export default Item;
