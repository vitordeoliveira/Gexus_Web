import React from "react";
import styled from "styled-components";

function Contact({ phone, email, text }) {
  return (
    <Wrapper>
      <Paragraph>{phone}</Paragraph>
      <Paragraph>{email}</Paragraph>
      <Paragraph>{text}</Paragraph>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-left: 50px;
  padding-top: 10px;
`;

const Paragraph = styled.p`
  margin-bottom: 40px;
  font-size: 18px;
`;

export default Contact;
