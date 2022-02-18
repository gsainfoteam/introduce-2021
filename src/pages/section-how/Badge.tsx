import React from "react";
import styled from "styled-components";
import Image from "components/Image";
import Text from "components/Text";
import { MEDIA_QUERY_WIDTH_MOBILE_WIDTH } from "config/mediaQuery";

interface BadgeProps {
  width: string;
  src: string;
  text?: string;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    margin-bottom: 27px;
  }
`;

const ImageWrapper = styled.div`
  width: auto;
  height: auto;
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 2px 2px 30px 1px rgba(0, 0, 0, 0.22);
`;

const Badge: React.FC<BadgeProps> = ({ width, src, text }) => {
  return (
    <Root>
      <ImageWrapper>
        <Image width={width} src={src} />
      </ImageWrapper>
      <Text size="20px" weight="900" marginTop="10px">
        {text}
      </Text>
    </Root>
  );
};

export default Badge;
