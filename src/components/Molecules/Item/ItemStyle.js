import styled from "styled-components";

export const ItemSection = styled.div.attrs((props) => ({
  className: "row",
}))`
  margin-bottom: 20px;
  align-items: center;
`;

export const ItemInfo = styled.div.attrs((props) => ({
  className: "col-lg-5",
}))`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ItemImage = styled.img`
  max-width: 100px;
  margin-right: 20px;
`;

export const ItemTitle = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
