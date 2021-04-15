import styled, { css } from "styled-components";

export const ParagraphText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: flex-start;
  line-height: 2.5rem;

  ${(props) =>
    props &&
    props.extra === "light" &&
    css`
      color: ${({ theme }) => theme.silver};
      font-size: ${({ theme }) => theme.fontSize.xs};
    `}
`;
