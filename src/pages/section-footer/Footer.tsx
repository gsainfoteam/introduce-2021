import React from "react";
import styled from "styled-components";
import Text from "components/Text";

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 50px;
  background-color: #cfcfcf;
`;

const Footer: React.FC = () => {
  return (
    <Root>
      <Text size="12px" marginRight="10px">
        Copyright © GSA Infoteam 2022.
      </Text>
    </Root>
  );
};

export default Footer;
