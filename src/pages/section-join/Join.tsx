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
  margin-top: 70px;

  padding-bottom: 100px;
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
  ];

  return (
    <Root>
      <Text
        size={isMobile ? "30px" : "45px"}
        weight="900"
        marginLeft={isMobile ? "8%" : "0"}
        marginBottom="50px"
      >
        {t("join.title")}
      </Text>
      <CollapseList items={items} />
    </Root>
  );
};

export default Join;
