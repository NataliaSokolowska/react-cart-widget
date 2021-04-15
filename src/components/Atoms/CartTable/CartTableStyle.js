import styled from "styled-components";

export const CartTableWrapper = styled.div.attrs((props) => ({
  className: "row",
}))`
  border-bottom: 1px solid ${({ theme }) => theme.grey};
`;
