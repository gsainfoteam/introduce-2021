import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Text from "components/Text";
import Button from "components/Button";
import useIsMobile from "../../hooks/useIsMobile";
import { MEDIA_QUERY_WIDTH_MOBILE_WIDTH } from "config/mediaQuery";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 400px;

  @media (${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    margin-left: 10%;
  }
`;

const Title: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <Root>
      <Text size={isMobile ? "40px" : "50px"} weight="900">
        {t("about.title")}
      </Text>
      <Text size={isMobile ? "14px" : "16px"} marginTop="40px">
        {t("about.description")
          .split("\n")
          .map((line, lineIndex) => (
            <div key={lineIndex}>{line}</div>
          ))}
      </Text>
      <Button marginTop="35px">{t("about.button")}</Button>
    </Root>
  );
};

export default Title;
