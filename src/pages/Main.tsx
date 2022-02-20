import React from "react";
import AppContainer from "components/AppContainer";
import Header from "./section-header/Header";
import About from "./section-about/About";
import Overview from "./section-overview/Overview";
import Where from "./section-where/Where";
import What from "./section-what/What";
import How from "./section-how/How";
import Join from "./section-join/Join";
import Footer from "./section-footer/Footer";
import PaymentForm from "./PaymentForm";

const Main: React.FC = () => {
  return (
    <AppContainer>
      <Header />
      <About />
      <Overview />
      <Where />
      <What />
      <How />
      <Join />
      <PaymentForm />
      <Footer />
    </AppContainer>
  );
};

export default Main;
