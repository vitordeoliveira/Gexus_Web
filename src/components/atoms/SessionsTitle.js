import React from "react";
import styled from "styled-components";

function SessionsTitle({ text }) {
  return <Text>{text}</Text>;
}

const Text = styled.h1`
  text-transform: uppercase;
  align-self: center;
  font-size: 25px;
  margin: 0 auto;
`;

export default SessionsTitle;
