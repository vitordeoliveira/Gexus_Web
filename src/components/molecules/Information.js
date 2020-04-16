import React from "react";
import styled from "styled-components";

// Atoms
import Button from "../atoms/Button";

function Information() {
  return (
    <Wrapper>
      <Title>Nós fazemos o seu projeto sair do papel</Title>
      <Paragraph>
        Somos uma empresa de marketing e desenvolvedores especializados.
      </Paragraph>
      <Button text="Quero falar com um especialista"></Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-left: 30px;
  height: 100%;
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 2.5em;
  max-width: 320px;

  @media (max-width: 1070px) {
    font-size: 2em;
  }

  @media (max-width: 400px) {
    font-size: 1em;
  }
`;

const Paragraph = styled.p`
  color: gray;
  max-width: 280px;
  margin-bottom: 50px;
`;

export default Information;
