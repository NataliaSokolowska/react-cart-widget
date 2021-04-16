import { ItemSection, ItemTitle, ItemInfo, ItemImage } from "./ItemStyle";
import Paragraph from "../../Atoms/Paragraph/Paragraph";

const Item = ({ items }) => {
  return items.map((item) => (
    <ItemSection key={item.id}>
      <ItemInfo>
        <ItemImage src={item.image} alt={item.name} />
        <ItemTitle>
          <Paragraph extra="bold" title={item.name} />
          <Paragraph extra="light" title={`Kategoria: ${item.category}`} />
        </ItemTitle>
      </ItemInfo>
      <div className="col-lg-7">
        <div className="row">
          <div className="col-lg-5">
            Max: {item.max}
            Min: {item.min}
          </div>
          <div className="col-lg-7">{item.price}</div>
        </div>
      </div>
    </ItemSection>
  ));
};

export default Item;
