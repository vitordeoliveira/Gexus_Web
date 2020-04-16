import React from "react";

// Template
import Apresentation from "../template/PublicTemplate/Apresentation";
import YourServices from "../template/PublicTemplate/YourServices";

// Atoms
import Logo from "../components/atoms/Logo";
import DataDesign from "../components/atoms/DataDesign";
// Molecules
import Information from "../components/molecules/Information";
import NavLinks from "../components/molecules/NavLinks";

function Homepage() {
  return (
    <>
      <Apresentation
        logo={
          <Logo
            width="150px"
            margin="30px 0px"
            mobile="margin: 25px auto; display: flex;"
          ></Logo>
        }
        information={<Information></Information>}
        navbar={<NavLinks></NavLinks>}
        datadesign={<DataDesign></DataDesign>}
      ></Apresentation>
      <YourServices></YourServices>
    </>
  );
}

export default Homepage;
