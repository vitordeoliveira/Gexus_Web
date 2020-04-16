import React from "react";
import styled from "styled-components";

function Button({ text, ...props }) {
  return (
    <Wrapper>
      <Text>{text}</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid red;
  background: red;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  cursor: pointer;
  min-width: 370px;
  margin-right: 15px;

  @media (max-width: 500px) {
    width: 90%;
    min-width: 200px;
  }
`;

const Text = styled.h2`
  text-transform: uppercase;
  font-size: 19px;
  color: #fff;

  @media (max-width: 500px) {
    font-size: 15px;
  }

  @media (max-width: 470px) {
    font-size: 10px;
  }
`;

export default Button;
