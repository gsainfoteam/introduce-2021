import React from "react";
import styled from "styled-components";
import transition from "config/transition";
import Text from "./Text";

interface ButtonProps {
  children?: React.ReactNode;
  marginTop?: string;
  onClick?: () => void;
}

const Root = styled.button<{ marginTop?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 53px;
  background-color: black;
  border: none;
  border-radius: 10px;
  ${(props) => (props.marginTop ? `margin-top: ${props.marginTop};` : "")}
  ${transition}
  
  &:hover {
    width: calc(180px + 25px);
  }
  &:active {
    opacity: 0.5;
  }
`;

const Button: React.FC<ButtonProps> = ({ children, marginTop, onClick }) => {
  return (
    <div onClick={onClick}>
      <Root marginTop={marginTop}>
        <Text color="white" size="18px" weight="700">
          {children}
        </Text>
      </Root>
    </div>
  );
};

export default Button;
