import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Text from "components/Text";
import useIsMobile from "../../hooks/useIsMobile";
import Content from "./Content";
import photo1 from "assets/nas.svg";
import photo2 from "assets/facebook.svg";
import photo3 from "assets/ams.svg";
import photo4 from "assets/gistory.svg";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  margin-bottom: 100px;
  max-width: 1440px;
  width: 90%;
`;

const What: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <Root id="what-scroll-view">
      <Text size={isMobile ? "30px" : "45px"} weight="900" marginBottom="30px">
        {t("what.title")}
      </Text>
      <Content index={0} src={photo1} imgSize="180px" />
      <Content index={1} src={photo2} imgSize="300px" />
      <Content index={2} src={photo3} imgSize="160px" />
      <Content index={3} src={photo4} imgSize="240px" />
    </Root>
  );
};

export default What;
