import React from "react";
import styled from "styled-components";

// Atoms
import Button from "../atoms/ButtonApresentation";
// Molecules
import InputsLeads from "../molecules/InputsLeads";

function LeadsForm() {
  return (
    <Form>
      <InputsLeads></InputsLeads>
      <TextArea placeholder="Informe sua necessidade"></TextArea>
      <StyledButton width="165px" text="Enviar sua mensagem"></StyledButton>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const TextArea = styled.textarea`
  width: 100%;
  max-width: 510px;
  margin-top: 15px;
  min-height: 165px;
  max-height: 350px;  
  border-radius: 20px;
  padding:15px;
  color: #315a7d;
  margin-bottom: 15px;

  :focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    color: white;
    background: #315a7d;

    ::placeholder {
      color: white;
    }
`;

const StyledButton = styled(Button)`
  background: linear-gradient(90deg, #4366ae, #36a5b8);
  color: #fff;
`;

export default LeadsForm;
