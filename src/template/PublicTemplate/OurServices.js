import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
`;

const Title = styled.div`
  flex: 1;
  display: flex;
  margin-top: 30px;
`;

const Content = styled.div`
  flex: 5;
`;

function OurServices({ title, content }) {
  console.log(content);

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Wrapper>
  );
}

export default OurServices;
