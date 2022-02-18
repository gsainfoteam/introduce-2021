import React from "react";
import styled from "styled-components";
import Text from "components/Text";
import { useTranslation } from "react-i18next";
import Menu from "./Menu";

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background-color: white;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.25);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 94%;
  max-width: 1440px;
`;

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Root>
      <Wrapper>
        <Text size="26px" weight="800">
          {t("header.title")}
        </Text>
        <Menu />
      </Wrapper>
    </Root>
  );
};

export default Header;
