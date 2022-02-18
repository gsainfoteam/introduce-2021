import React from "react";
import styled from "styled-components";
import { MEDIA_QUERY_WIDTH_MOBILE_WIDTH } from "config/mediaQuery";
import CollapseListItem from "./CollapseListItem";
import Text from "components/Text";

export interface ICollapseListItem {
  title?: string;
  contents?: string | React.ReactNode | undefined;
}
interface CollapseListProps {
  items: ICollapseListItem[];
}

const Root = styled.div`
  width: 60%;
  margin-top: -36px;
  @media (${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    margin-top: -12px;
    width: 80%;
  }
`;

const CollapseList: React.FC<CollapseListProps> = ({ items }) => (
  <Root>
    {items.map((item, index) => (
      <CollapseListItem header={item.title} key={index}>
        <Text color="black">{item.contents}</Text>
      </CollapseListItem>
    ))}
  </Root>
);

export default CollapseList;
