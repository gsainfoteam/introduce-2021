import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Text from "components/Text";
import Image from "components/Image";
import { MEDIA_QUERY_WIDTH_MOBILE_WIDTH } from "config/mediaQuery";
import transition from "config/transition";
import useIsMobile from "../../hooks/useIsMobile";

interface CardProps {
  index: number;
  backgroundColor: string;
  color?: string;
  src: string;
}

const Root = styled.div<{ backgroundColor: string }>`
  display: flex;
  min-width: 240px;
  min-height: 300px;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props) => props.backgroundColor};
  ${transition}

  @media (${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    margin: 10px;
    min-width: 200px;
    min-height: 270px;
  }
`;

const Card: React.FC<CardProps> = ({ index, backgroundColor, color, src }) => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <Root backgroundColor={backgroundColor}>
      <Text
        color={color}
        size={isMobile ? "16px" : "20px"}
        weight="800"
        marginTop="20px"
      >
        {t(`overview.${index}.title`)}
      </Text>
      <Text
        color={color}
        size={isMobile ? "11px" : "15px"}
        align="center"
        marginTop="12px"
      >
        {t(`overview.${index}.description`)
          .split("\n")
          .map((line, lineIndex) => (
            <div key={lineIndex}>{line}</div>
          ))}
      </Text>
      <Image width="140px" src={src} marginTop="25px" />
    </Root>
  );
};

export default Card;
