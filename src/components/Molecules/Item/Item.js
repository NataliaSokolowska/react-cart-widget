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

const Item = ({ items }) => {
  const handlePriceSummary = (id, summary, price) => {
    if (items.length > 0) {
      const index = items?.findIndex((obj) => obj.id === id);
      price = summary.toFixed(2);
      console.log(price);
    }
  };

  return items.map((item) => (
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
              itemData={(id, summary, price) =>
                handlePriceSummary(id, summary, price)
              }
            />
          </ItemQuantity>
          <ItemPrice>{formatPrice(item.price)}</ItemPrice>
        </ItemRow>
      </ItemActions>
    </ItemRow>
  ));
};

export default Item;
