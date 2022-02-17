import React from "react";
import styled from "styled-components";
import transition from "config/transition";

interface LogoProps {
  width: string;
  marginTop?: string;
  marginRight?: string;
  src: string;
}

const Image = styled.img<{
  width: string;
  marginTop?: string;
  marginRight?: string;
}>`
  overflow: hidden;
  min-width: ${(props) => props.width};
  height: auto;
  ${transition}
  ${(props) => (props.marginTop ? `margin-top: ${props.marginTop};` : "")}
  ${(props) => (props.marginRight ? `margin-right: ${props.marginRight};` : "")}
  background-color: transparent;
`;

const Logo: React.FC<LogoProps> = ({ width, marginTop, marginRight, src }) => {
  return (
    <Image
      width={width}
      marginTop={marginTop}
      marginRight={marginRight}
      src={src}
      alt="No Image"
    />
  );
};

export default Logo;
