import React from "react";
import styled from "styled-components";

import logo from "../../assets/Logo.png";

function Logo(props) {
  return <ImageLogo {...props} src={logo}></ImageLogo>;
}

const ImageLogo = styled.img`
  width: ${(props) => (props.width ? props.width : null)};
  margin: ${(props) => (props.margin ? props.margin : null)};

  ${(props) =>
    props.mobile ? `@media (max-width: 500px){ ${props.mobile} }` : null}
`;

export default Logo;
