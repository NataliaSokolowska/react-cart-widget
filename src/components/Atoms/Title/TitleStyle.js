import styled from "styled-components";

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: flex-start;
  padding: 2rem 2.4rem;
`;
