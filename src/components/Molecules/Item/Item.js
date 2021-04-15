import React from "react";

const Item = ({ items }) => {
  return items.map((item) => (
    <div className="row" key={item.id}>
      <div className="col-lg-5">{item.name}</div>
      <div className="col-lg-7">
        <div className="row">
          <div className="col-lg-5">
            Max: {item.max}
            Min: {item.min}
          </div>
          <div className="col-lg-7">{item.price}</div>
        </div>
      </div>
    </div>
  ));
};

export default Item;
