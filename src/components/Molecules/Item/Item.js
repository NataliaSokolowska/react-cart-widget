import Paragraph from "../../Atoms/Paragraph/Paragraph";
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
            Max: {item.max}
            Min: {item.min}
          </ItemQuantity>
          <ItemPrice>{formatPrice(item.price)}</ItemPrice>
        </ItemRow>
      </ItemActions>
    </ItemRow>
  ));
};

export default Item;
