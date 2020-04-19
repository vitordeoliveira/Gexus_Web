import React from "react";

// Template
import Apresentation from "../template/PublicTemplate/Apresentation";
import OurServices from "../template/PublicTemplate/OurServices";
import Differentials from "../template/PublicTemplate/Differentials";
import LeadsHome from "../template/PublicTemplate/LeadsHome";

// Atoms
import Logo from "../components/atoms/Logo";
import DataDesign from "../components/atoms/DataDesign";
import SessionsTitle from "../components/atoms/SessionsTitle";
import DifferentialText from "../components/atoms/DifferentialText";
// Molecules
import Information from "../components/molecules/Information";
import NavLinks from "../components/molecules/NavLinks";
// Organisms
import Services from "../components/organisms/Services";

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

      <OurServices
        title={<SessionsTitle text={"Nossos servi\u00e7os"}></SessionsTitle>}
        content={<Services></Services>}
      ></OurServices>

      <Differentials text={"DIFERENCIAIS"}>
        <DifferentialText>
          Todo contrato fechado possui
          <span> 6 meses de garantia gratuita !</span>
        </DifferentialText>

        <DifferentialText>
          Custo{" "}
          <span>
            flex{"\u00ed"}vel e acess{"\u00ed"}vel
          </span>{" "}
          a pequenas StartUps
        </DifferentialText>

        <DifferentialText>
          <span> Diferentes</span> formas de pagamento
        </DifferentialText>

        <DifferentialText>
          Custos de infraestrutura s{"\u00e3"}o{" "}
          <span> por nossa conta at{"\u00e9"} o </span>final do contrato
        </DifferentialText>
      </Differentials>

      <LeadsHome></LeadsHome>
    </>
  );
}

export default Homepage;
