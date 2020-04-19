import React from "react";
import styled from "styled-components";

// Assets
import Background from "../../assets/DiferencialBackground.png";

const Wrapper = styled.div`
  background: url(${Background}) no-repeat;
  background-size: 120% 100%;
  background-position: -21px -5px;
  height: 70vh;
  color: white;
  display: flex;
  flex-direction: column;
  padding-left: 100px;
  padding-top: 50px;

  @media (max-width: 560px) {
    height: 80vh;
    padding-top: 0px;
    text-align: center;
    padding-left: 0px;
  }
`;

const Title = styled.h1`
  text-transform: uppercase;
  margin-bottom: 30px;

  @media (max-width: 560px) {
    font-size: 25px;
  }
`;

function Differentials({ text, children }) {
  return (
    <Wrapper>
      <Title>{text}</Title>
      {children}
    </Wrapper>
  );
}

export default Differentials;
