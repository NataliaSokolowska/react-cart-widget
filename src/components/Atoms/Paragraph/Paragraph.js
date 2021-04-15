import React from "react";
import { ParagraphText } from "./ParagraphStyle";

const Paragraph = ({ title, extra }) => {
  return <ParagraphText extra={extra}>{title}</ParagraphText>;
};

export default Paragraph;
