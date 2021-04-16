import styled, { css } from "styled-components";

export const ItemRow = styled.div.attrs((props) => ({
  className: "row",
}))`
  ${(props) =>
    props &&
    props.extra === "itemSection" &&
    css`
      margin-bottom: 25px;
      padding-bottom: 20px;
      align-items: center;
      border-bottom: 1px solid ${({ theme }) => theme.grey};
    `}
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

export const ItemQuantity = styled.div.attrs((props) => ({
  className: "col-lg-6",
}))`
  display: flex;
  justify-content: flex-start;
`;

export const ItemActions = styled.div.attrs((props) => ({
  className: "col-lg-7",
}))``;

export const ItemPrice = styled.div.attrs((props) => ({
  className: "col-lg-6",
}))`
  display: flex;
  justify-content: flex-end;
`;
