import React from "react";
import styled from "styled-components";

import Img from "../../assets/datadesign.png";

function DataDesign() {
  return <Image src={Img}></Image>;
}

const Image = styled.img`
  position: absolute;
  height: 130%;
  animation: heart 2s infinite alternate linear;

  @media (max-width: 650px) {
    display: none;
  }

  @keyframes heart {
    0% {
      height: 100%;
    }
    100% {
      height: 120%;
    }
  }
`;

export default DataDesign;
