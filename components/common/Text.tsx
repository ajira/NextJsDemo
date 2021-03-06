import React, { ReactNode } from "react";
import styled from "styled-components";

export interface TextProps {
  children: ReactNode;
  type: "secondary" | "primary" | "paragraph";
  form: "small" | "h1" | "h2" | "h3" | "h4" | "large" | "normal" | "paragraph";
  decoration?: string;
}

const types = {
  secondary: { color: "grey" },
  primary: { color: "black" },
  paragraph: { color: "#4d4d4d" },
};

const forms = {
  small: { fontsize: "small", fontWeight: "normal" },
  large: { fontsize: "xx-large", fontWeight: "normal" },
  normal: { fontsize: "large", fontWeight: "normal" },
  paragraph: { fontsize: "15px", fontWeight: "normal" },
  h1: { fontsize: "32px", fontWeight: "bold" },
  h2: { fontsize: "24px", fontWeight: "bold" },
  h3: { fontsize: "20px", fontWeight: "bold" },
  h4: { fontsize: "16px", fontWeight: "bold" },
};

const Container = styled.div`
  display: flex;
  cursor: pointer;
  color: ${(props) => types[props.type].color};
  font-size: ${(props) => forms[props.form].fontsize};
  font-weight: ${(props) => forms[props.form].fontWeight};
  text-decoration: ${(props) => props.decoration || "none"};
`;

const Text: React.FC<TextProps> = ({
  children,
  type,
  form,
  decoration,
}: TextProps) => (
  <Container type={type} form={form} decoration={decoration}>
    {children}
  </Container>
);

export default Text;
