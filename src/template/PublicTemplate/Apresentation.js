import React from "react";
import styled from "styled-components";
import apresentation from "../../assets/Apresentation.png";

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  overflow: hidden;
`;

// const Header = styled.header``;

const Design = styled.div`
  flex: 5;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 50px;
`;

const BackgroundDesign = styled.img`
  width: 115%;
  height: 127.5vh;
  position: absolute;
  top: -16%;
  right: -10%;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  margin-left: 40px;

  @media (max-width: 500px) {
    flex: 20;
    margin-left: 10px;
  }
`;

const Logo = styled.div`
  flex: 1;
`;

const Information = styled.div`
  flex: 4;
`;

const Navbar = styled.nav`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const DataDesign = styled.div`
  position: relative;
  flex: 4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Apresentation = ({ logo, information, navbar, datadesign, ...props }) => {
  return (
    <Wrapper {...props}>
      <Content>
        <Logo>{logo}</Logo>
        <Information>{information}</Information>
      </Content>
      <Design>
        <BackgroundDesign src={apresentation}></BackgroundDesign>
        <Navbar>{navbar}</Navbar>
        <DataDesign>{datadesign}</DataDesign>
      </Design>
    </Wrapper>
  );
};

export default Apresentation;
