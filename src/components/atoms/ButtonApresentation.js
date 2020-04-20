import React from "react";
import styled from "styled-components";

function ButtonApresentaion({ text, ...props }) {
  return (
    <Wrapper {...props}>
      <Text>{text}</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: red;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? props.width : "90%")};
  cursor: pointer;
  min-width: 370px;
  margin-right: 15px;
  border-radius: 50px;

  :hover {
    ${(props) =>
      props.animation
        ? "animation: push 0.3s infinite alternate linear;"
        : null}
  }

  @keyframes push {
    0% {
      height: 55px;
    }
    100% {
      height: 60px;
      width: 92%;
    }
  }

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

export default ButtonApresentaion;
