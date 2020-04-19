import React from "react";
import styled from "styled-components";

// Atoms
import Title from "../atoms/ServiceTitle";

function Service({ img, title, text }) {
  return (
    <Wrapper>
      <Title source={img} text={title}></Title>
      <Paragraph>{text}</Paragraph>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 300px;
  margin: 20px 1%;
  transition: all 0.5s;

  :hover {
    box-shadow: 1px 5px 10px gray;
    border-radius: 20px;
    padding: 30px;
  }
`;

const Paragraph = styled.p`
  font-size: 15px;
`;

export default Service;
