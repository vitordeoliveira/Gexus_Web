import React from "react";
import styled from "styled-components";

function Icon({ source, text }) {
  return (
    <Wrapper>
      <Image src={source}></Image>
      <Title>{text}</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  max-height: 60px;
  margin-right: 15px;
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 18px;
`;

export default Icon;
