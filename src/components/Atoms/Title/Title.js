import React from "react";
import { TitleHeader } from "./TitleStyle";

const Title = ({ title, extra }) => {
  return <TitleHeader extra={extra}>{title}</TitleHeader>;
};

export default Title;
