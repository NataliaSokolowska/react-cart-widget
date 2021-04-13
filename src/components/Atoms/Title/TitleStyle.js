import styled, { css } from "styled-components";

export const TitleHeader = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: flex-start;

  ${(props) =>
    props &&
    props.extra === "bold" &&
    css`
      font-weight: bold;
    `}
`;
