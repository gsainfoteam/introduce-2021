import React from "react";
import styled from "styled-components";
import Text from "components/Text";
import useIsMobile from "hooks/useIsMobile";
import { useTranslation } from "react-i18next";
import Badge from "./Badge";
import slack from "assets/slack.svg";
import figma from "assets/figma.svg";
import git from "assets/git.svg";
import react from "assets/react.svg";
import flask from "assets/flask.svg";
import { MEDIA_QUERY_WIDTH_MOBILE_WIDTH } from "../../config/mediaQuery";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: linear-gradient(
    276.17deg,
    rgba(92, 172, 252, 0.7) -1.47%,
    rgba(250, 215, 144, 0.729166) 40.5%,
    #f39274 100.95%
  );

  padding-bottom: 100px;
`;

const BadgeWrapper = styled.div<{ width: string; marginTop: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: ${(props) => props.width};
  max-width: 600px;
  margin-top: ${(props) => props.marginTop};

  @media (${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    flex-direction: column;
  }
`;

const How: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <Root id="how-scroll-view">
      <Text size={isMobile ? "40px" : "50px"} weight="900" marginTop="100px">
        {t("how.title")}
      </Text>
      <Text size="32px" weight="800" marginTop="100px">
        {t("how.team")}
      </Text>
      <BadgeWrapper width="55%" marginTop="40px">
        <Badge width="130" src={slack} text="Slack" />
        <Badge width="130" src={figma} text="Figma" />
        <Badge width="130" src={git} text="Git" />
      </BadgeWrapper>
      <Text size="32px" weight="800" marginTop="100px">
        {t("how.developer")}
      </Text>
      <BadgeWrapper width="60%" marginTop="40px">
        <Badge width="270" src={react} text="React.js" />
        <Badge width="270" src={flask} text="Flask" />
      </BadgeWrapper>
    </Root>
  );
};

export default How;
