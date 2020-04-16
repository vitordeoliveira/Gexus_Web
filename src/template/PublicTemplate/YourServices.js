import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  overflow-x: hidden;
  border: 1px solid blue;
`;

function YourServices() {
  return (
    <Wrapper>
      <h1>Hello</h1>
    </Wrapper>
  );
}

export default YourServices;
