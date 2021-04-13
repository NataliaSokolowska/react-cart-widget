import React from "react";
import Title from "../../Atoms/Title/Title";
import ProgressBar from "../../Atoms/ProgressBar/ProgressBar";
import * as S from "./CartHeaderStyle";

const CartHeader = () => {
  return (
    <>
      <S.CartHeaderWrapper>
        <Title title="Twój koszyk" extra="bold" />
        <ProgressBar />
      </S.CartHeaderWrapper>
    </>
  );
};

export default CartHeader;
