import React from "react";
import styled from "styled-components";
import transition from "config/transition";

interface TextProps {
  children: string | React.ReactNode;
  size?: string;
  color?: string;
  align?: "left" | "right" | "center";
  weight?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
}

const Root = styled.div<{
  size?: string;
  color?: string;
  align?: string;
  weight?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
}>`
  ${(props) => (props.align ? `text-align: ${props.align};` : "")}
  ${(props) => (props.size ? `font-size: ${props.size};` : "")}
  font-family: "Roboto", sans-serif;
  color: ${(props) => props.color || "black"};
  font-weight: ${(props) => props.weight || "400"};
  ${(props) => (props.marginTop ? `margin-top: ${props.marginTop};` : "")}
  ${(props) => (props.marginRight ? `margin-right: ${props.marginRight};` : "")}
  ${(props) =>
    props.marginBottom ? `margin-bottom: ${props.marginBottom};` : ""}
  ${transition}
`;

const Text: React.FC<TextProps> = ({
  children,
  size,
  color,
  align,
  weight,
  marginTop,
  marginRight,
  marginBottom,
}) => {
  return (
    <Root
      size={size}
      color={color}
      align={align}
      weight={weight}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
    >
      {children}
    </Root>
  );
};

export default Text;
