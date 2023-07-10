


import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const SectionWrapper = (Component) =>
  function Page() {
    return (
      <>
        <Header />
        {/* <div> */}
          <Component />
        {/* </div> */}
        <Footer />
      </>
    );
  };

export default SectionWrapper;