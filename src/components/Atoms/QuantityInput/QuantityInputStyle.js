import styled, { css } from "styled-components";

export const QInput = styled.input`
  text-align: center;
  height: 3.7rem;
  vertical-align: middle;
  width: 3.7rem;
  font-size: 1.6rem;
  padding: 0;
  margin: 0 5px;
  outline: 0;
  border: 0.1rem solid ${({ theme }) => theme.grey};

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ${(props) =>
    props.disabled &&
    css`
      background: ${({ theme }) => theme.disabled};
      cursor: not-allowed;
      pointer-events: all !important;
      height: 3.7rem;
      line-height: 3.7rem;
    `};
`;

export const QBtn = styled.button`
  height: 3.7rem;
  vertical-align: middle;
  cursor: pointer;
  width: 3.5rem;
  background: transparent;
  outline: 0;
  border: 0.1rem solid ${({ theme }) => theme.grey};
  ${(props) =>
    props.disabled &&
    css`
      background: ${({ theme }) => theme.disabled};
      cursor: not-allowed;
      pointer-events: all !important;
    `};
`;
