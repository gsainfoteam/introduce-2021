import React from "react";
import styled from "styled-components";

interface AppContainerProps {
  children: React.ReactNode;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  return <Root>{children}</Root>;
};

export default AppContainer;
