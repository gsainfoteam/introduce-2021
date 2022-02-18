import React from "react";
import styled from "styled-components";
import transition from "config/transition";

interface LanguageBtnProps extends React.HTMLProps<HTMLAnchorElement> {
  children?: React.ReactNode;
  noneStyled?: boolean;
  outlined?: boolean;
  filled?: boolean;
  icon?: boolean;
  disabled?: boolean;
  color?: string;
  rel?: string;
  target?: string;
  href?: string;
  width?: number;
  height?: number;
  fontSize?: number;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
}

const Root = styled.a<{
  noneStyled?: boolean;
  outlined?: boolean;
  filled?: boolean;
  icon?: boolean;
  disabled?: boolean;
}>`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  text-align: center;
  cursor: pointer;
  ${transition}
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
  ${(props) =>
    props.noneStyled
      ? ""
      : `
    height: 48px;
    min-width: 40px;
    padding-left: 20px;
    padding-right: 20px;
  `}
  ${(props) => (props.outlined || props.filled ? `border-radius: 100px;` : "")}
  ${(props) => (props.outlined ? `border: solid 3px #fff;` : "")}
  ${(props) => (props.filled ? `color: #000; background-color: #fff;` : "")}
  ${(props) =>
    props.icon
      ? `
    width: 48px;
    height: 48px;
    min-height: unset;
    padding-left: 0px;
    padding-right: 0px;
    border-radius: 24px;
  `
      : ""}
  ${(props) =>
    props.disabled
      ? `
    pointer-events: none;
    opacity: 0.7;
  `
      : ""}
`;

const LanguageBtn: React.FC<LanguageBtnProps> = ({
  children,
  noneStyled,
  outlined,
  filled,
  icon,
  disabled,
  color,
  rel,
  target,
  href,
  width,
  height,
  fontSize,
  onClick,
}) => {
  const styledWidth = width && `${width}px`;
  const styledHeight = height && `${height}px`;
  const styledFontSize = fontSize && `${fontSize}px`;
  const styledColor = outlined || filled ? "" : color;
  const styledBorderColor = outlined || filled ? color : "";
  const styledBackgroundColor = outlined || filled ? color : "";
  const rootStyle: React.CSSProperties = {};

  if (styledWidth) {
    rootStyle.width = styledWidth;
  }
  if (styledHeight) {
    rootStyle.height = styledHeight;
  }
  if (styledFontSize) {
    rootStyle.fontSize = styledFontSize;
  }
  if (styledColor) {
    rootStyle.color = styledColor;
  }
  if (styledBorderColor) {
    rootStyle.borderColor = styledBorderColor;
  }
  if (styledBackgroundColor) {
    rootStyle.backgroundColor = styledBackgroundColor;
  }

  return (
    <Root
      noneStyled={noneStyled}
      outlined={outlined}
      filled={filled}
      icon={icon}
      disabled={disabled}
      rel={rel}
      target={target}
      href={href}
      onClick={onClick}
      style={rootStyle}
    >
      {children}
    </Root>
  );
};

export default LanguageBtn;
