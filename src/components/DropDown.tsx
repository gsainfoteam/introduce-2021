import React, { useRef, useState, useMemo, useEffect } from "react";
import styled from "styled-components";
import transition from "config/transition";
import useClickOutside from "hooks/useClickOutside";

interface Props {
  children?: React.ReactNode;
  anchor?: React.ReactNode;
  value?: boolean;
  onContentClick?: React.MouseEventHandler<HTMLElement> | undefined;
  onClickOutside?: (e: MouseEvent) => any | undefined;
}

const Root = styled.div`
  position: relative;
  display: inline-block;
  z-index: 1;
`;
const Menu = styled.div<{ open?: boolean; height?: number }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 48px;
  border-radius: 24px;
  opacity: 0;
  background-color: #fad790;
  overflow: hidden;
  ${transition}
  ${(props) => (props.open ? "opacity: 1;" : "")}
  ${(props) => `height: ${props.height}px;`}
`;
const MenuContent = styled.div``;

const DropDown: React.FC<Props> = ({
  children,
  anchor,
  value,
  onContentClick,
  onClickOutside,
}) => {
  const menuRef = useRef(null as HTMLDivElement | null);

  const [menuHeight, setBodyHeight] = useState(0);

  const menuHeightNow = useMemo(
    () => (value && menuHeight) || 0,
    [value, menuHeight]
  );

  useClickOutside(menuRef, onClickOutside);

  useEffect(() => {
    setBodyHeight(
      (menuRef && menuRef.current && menuRef.current.clientHeight) || 0
    );
  }, [value]);

  return (
    <Root>
      <Menu open={value} height={menuHeightNow + 7}>
        <MenuContent ref={menuRef} onClick={onContentClick}>
          {children}
        </MenuContent>
      </Menu>
      {anchor}
    </Root>
  );
};

export default DropDown;
