import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Image from "components/Image";
import img from "assets/main.svg";
import useIsMobile from "hooks/useIsMobile";

const Root = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding-top: 40px;
`;

const About: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <Root>
      <Title />
      {!isMobile && <Image width="500px" src={img} />}
    </Root>
  );
};

export default About;
