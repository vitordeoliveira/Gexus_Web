import React from "react";
import styled from "styled-components";

function DifferentialText({ children, text }) {
  console.log(children);
  return (
    <Paragraph>
      {children.map((item) => {
        if (typeof item == "object") {
          return <Span>{item}</Span>;
        } else {
          return item;
        }
      })}
    </Paragraph>
  );
}

const Paragraph = styled.p`
  font-size: 20px;
  margin: 5px;
`;

const Span = styled.span`
  font-weight: bold;
  font-size: 22px;
`;

export default DifferentialText;
