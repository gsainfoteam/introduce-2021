import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Text from "components/Text";
import Image from "components/Image";
import transition from "config/transition";
import { MEDIA_QUERY_WIDTH_MOBILE_WIDTH } from "config/mediaQuery";
import useIsMobile from "hooks/useIsMobile";

interface ContentProps {
  index: number;
  src: string;
  imgSize: string;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  ${transition}

  @media (${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    align-items: center;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 35px;
  width: 90%;
  max-width: 1200px;
  align-items: center;
  ${transition}

  @media (${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    text-align: center;
    flex-direction: column;
    align-items: center;
  }
`;

const Content: React.FC<ContentProps> = ({ index, src, imgSize }) => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <Root>
      <Text
        color="#5cacfc"
        size={isMobile ? "22px" : "26px"}
        weight="700"
        align={isMobile ? "center" : "left"}
      >
        {t(`what.content.${index}.title`)}
      </Text>
      <ContentWrapper>
        <Text
          size={isMobile ? "16px" : "22px"}
          color="gray"
          weight="bold"
          marginRight={isMobile ? "0" : "120px"}
        >
          {t(`what.content.${index}.description`)
            .split("\n")
            .map((line, lineIndex) => (
              <div key={lineIndex}>{line}</div>
            ))}
        </Text>
        <Image
          width={imgSize}
          src={src}
          marginRight="30px"
          marginTop={isMobile ? "20px" : "0"}
        />
      </ContentWrapper>
    </Root>
  );
};

export default Content;
