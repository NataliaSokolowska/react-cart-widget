import styled from "styled-components";

export const CartTableWrapper = styled.div.attrs((props) => ({
  className: "row",
}))`
  border-bottom: 0.1rem solid ${({ theme }) => theme.grey};
  margin-bottom: 2rem;
`;
