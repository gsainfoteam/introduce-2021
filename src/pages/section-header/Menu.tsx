import React, { useState } from "react";
import useIsMobile from "../../hooks/useIsMobile";
import DropDown from "../../components/DropDown";
import LanguageBtn from "../../components/LanguageBtn";
import Image from "../../components/Image";
import image from "../../assets/language.svg";
import styled from "styled-components";
import transition from "../../config/transition";
import { MEDIA_QUERY_WIDTH_MOBILE_WIDTH } from "../../config/mediaQuery";
import Text from "../../components/Text";
import { useTranslation } from "react-i18next";

const Root = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 35%;
  ${transition}

  @media (${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    flex-direction: row-reverse;
  }
`;
const LanguageWrapper = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MenuItem: React.FC = ({ children }) => {
  return (
    <Text size="16px" weight="800">
      {children}
    </Text>
  );
};

const Menu: React.FC = () => {
  const [t, i18n] = useTranslation("lang", { useSuspense: false });
  const [openLanguage, setOpenLanguage] = useState(false);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang).then();
    localStorage.setItem("language", lang);
  };

  return (
    <Root>
      {!useIsMobile() && (
        <React.Fragment>
          <MenuItem>{t("header.where")}</MenuItem>
          <MenuItem>{t("header.what")}</MenuItem>
          <MenuItem>{t("header.how")}</MenuItem>
          <MenuItem>{t("header.join")}</MenuItem>
        </React.Fragment>
      )}
      <DropDown
        value={openLanguage}
        anchor={
          <LanguageBtn
            icon
            disabled={openLanguage}
            onClick={() => setOpenLanguage(true)}
          >
            <Image width="20px" marginTop="3px" src={image} />
          </LanguageBtn>
        }
        onContentClick={() => setOpenLanguage(false)}
        onClickOutside={() => setOpenLanguage(false)}
      >
        <LanguageWrapper>
          <LanguageBtn onClick={() => changeLanguage("en")}>EN</LanguageBtn>
          <LanguageBtn onClick={() => changeLanguage("ko")}>KR</LanguageBtn>
        </LanguageWrapper>
      </DropDown>
    </Root>
  );
};

export default Menu;
