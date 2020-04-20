import React from "react";
import styled from "styled-components";

// Assets
import Prancheta from "../../assets/Prancheta.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 70vh;
  overflow-x: hidden;
`;

const Title = styled.div`
  flex: 1;
  display: flex;
`;

const Content = styled.div`
  flex: 5;
  display: flex;
  padding: 50px;
`;

const Contact = styled.div`
  flex: 5;
  background: url(${Prancheta}) no-repeat;
  background-size: 60px 120%;
  background-position-y: center;
  background-position-x: -20px;
`;

const Lead = styled.div`
  flex: 5;
`;

const LeadsHome = ({ title, contact, lead }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>
        <Contact>{contact}</Contact>
        <Lead>{lead}</Lead>
      </Content>
    </Wrapper>
  );
};

export default LeadsHome;
