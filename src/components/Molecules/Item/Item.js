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
  const itemsRef = useRef([]);

  const handlePriceSummary = (id, summary, count) => {
    const newFormatPrice = formatPrice(summary);
    const itemsIndex = items?.findIndex((obj) => obj.id === id);

    itemsRef.current.map((reference, i) => {
      if (itemsIndex === i) {
        reference.innerHTML = newFormatPrice;
      }
    });
  };

  return items.map((item, i) => (
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
          <ItemPrice ref={(item) => (itemsRef.current[i] = item)}>
            {formatPrice(item.price)}
          </ItemPrice>
        </ItemRow>
      </ItemActions>
    </ItemRow>
  ));
};

export default Item;
