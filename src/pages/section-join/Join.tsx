import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import CollapseList, { ICollapseListItem } from "./CollapseList";
import Text from "components/Text";
import useIsMobile from "hooks/useIsMobile";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 110px;

  padding-bottom: 170px;
`;

const Join: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  const items: ICollapseListItem[] = [
    {
      title: t("join.content.0.title"),
      contents: t("join.content.0.description"),
    },
    {
      title: t("join.content.1.title"),
      contents: t("join.content.1.description"),
    },
    {
      title: t("join.content.2.title"),
      contents: t("join.content.2.description"),
    },
    {
      title: t("join.content.3.title"),
      contents: t("join.content.3.description"),
    },
    {
      title: t("join.content.4.title"),
      contents: t("join.content.4.description"),
    },
  ];

  return (
    <Root id="join-scroll-view">
      <Text
        size={isMobile ? "30px" : "45px"}
        weight="900"
        marginLeft={isMobile ? "8%" : "0"}
        marginBottom="70px"
      >
        {t("join.title")}
      </Text>
      <CollapseList items={items} />
    </Root>
  );
};

export default Join;
