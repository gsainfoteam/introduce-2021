import React from "react";
import styled from "styled-components";
import Card from "./Card";
import photo1 from "assets/photo1.svg";
import photo2 from "assets/photo2.svg";
import photo3 from "assets/photo3.svg";
import photo4 from "assets/photo4.svg";
import { MEDIA_QUERY_WIDTH_MOBILE_WIDTH } from "../../config/mediaQuery";

const Root = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding-top: 50px;
  max-width: 1320px;

  @media (${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    flex-wrap: wrap;
  }
`;

const Overview: React.FC = () => {
  return (
    <Root>
      <Card index={0} backgroundColor="#fad790" src={photo1} />
      <Card index={1} backgroundColor="#f39274" color="white" src={photo2} />
      <Card index={2} backgroundColor="#5cacfc" color="white" src={photo3} />
      <Card index={3} backgroundColor="#fcb46d" color="white" src={photo4} />
    </Root>
  );
};

export default Overview;
