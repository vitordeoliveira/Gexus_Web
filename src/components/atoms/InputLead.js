import React from "react";
import styled from "styled-components";

function InputLead({ type, placeholder, ...props }) {
  return <Input type={type} placeholder={placeholder} {...props}></Input>;
}

const Input = styled.input`
  height: 50px;
  min-width: ${(props) => (props.width ? props.width : "250px")};
  border-radius: 50px;
  border: 1px solid #252a61;
  padding-left: 20px;
  color: #252a61;
  font-size: 1rem;
  transition: all 1s;
  margin: 5px;

  :focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    color: white;
    background: #315a7d;

    ::placeholder {
      color: white;
    }
  }

  ${(props) =>
    props.value[0] === "" && props.required && props.check
      ? ":not(:focus) {color: #cc4b37; border:1px solid #cc4b37; background:#f9ecea; ::placeholder{color:#cc4b37} }"
      : null}
`;

export default InputLead;
