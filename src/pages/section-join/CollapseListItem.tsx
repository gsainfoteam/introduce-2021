import React, { useRef, useState, useMemo } from "react";
import styled from "styled-components";
import { MEDIA_QUERY_WIDTH_MOBILE_WIDTH } from "config/mediaQuery";
import transition from "config/transition";
import { Add } from "@mui/icons-material";

interface CollapseListItemProps {
  children?: React.ReactNode;
  header?: React.ReactNode;
  notAllowed?: boolean;
}

const Root = styled.div`
  margin-top: 36px;
  border-radius: 10px;
  background-color: #e3e3e3;
  overflow: hidden;
  @media (${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    margin-top: 12px;
  }
`;
const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 22px;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.93;
  color: black;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #ffffff14;
    opacity: 0;
    ${transition}
  }
  &:hover:after {
    opacity: 0.5;
  }
  &:active:after {
    opacity: 1;
  }
  @media (${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    padding: 12px;
    font-size: 14px;
    line-height: 1.4;
  }
`;
const HeaderIcon = styled(Add)<{ open?: boolean }>`
  margin-right: 24px;
  ${transition}
  ${(props) => (props.open ? "color: #F39274; transform: rotate(45deg);" : "")}
  @media (${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    margin-right: 12px;
  }
`;
const BodyWrapper = styled.div<{ height?: number }>`
  margin-top: 22px;
  ${transition}
  ${(props) => `height: ${props.height}px;`}
  @media (${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    margin-top: 12px;
  }
`;
const Body = styled.div`
  margin-top: -22px;
  padding: 22px;
  @media (${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    margin-top: -12px;
  }
`;

const CollapseListItem: React.FC<CollapseListItemProps> = ({
  children,
  header,
  notAllowed,
}) => {
  const bodyRef = useRef(null as HTMLDivElement | null);

  const [open, setOpen] = useState(false);
  const [bodyHeight, setBodyHeight] = useState(0);

  const openedExactly = useMemo(() => !notAllowed && open, [notAllowed, open]);
  const bodyHeightNow = useMemo(
    () => (openedExactly && bodyHeight) || 0,
    [openedExactly, bodyHeight]
  );

  const switchOpen = () => {
    setOpen(!open);
    setBodyHeight(
      (bodyRef && bodyRef.current && bodyRef.current.clientHeight) || 0
    );
  };

  return (
    <Root>
      <Header onClick={switchOpen}>
        <HeaderIcon open={openedExactly} fontSize="large" />
        {header}
      </Header>
      <BodyWrapper height={bodyHeightNow}>
        <Body ref={bodyRef}>{children}</Body>
      </BodyWrapper>
    </Root>
  );
};

export default CollapseListItem;
