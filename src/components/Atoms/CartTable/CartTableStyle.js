import styled, { css } from "styled-components";

export const CartTableWrapper = styled.div.attrs((props) => ({
  className: "row",
}))`
  border-bottom: 0.1rem solid ${({ theme }) => theme.grey};
  margin-bottom: 2rem;
`;

export const CartTableFifth = styled.div.attrs((props) => ({
  className: "col-lg-5",
}))``;

export const CartTableSeventh = styled.div.attrs((props) => ({
  className: "col-lg-7",
}))`
  ${(props) =>
    props &&
    props.extra === "textRight" &&
    css`
      display: flex;
      justify-content: flex-end;
    `}
`;
