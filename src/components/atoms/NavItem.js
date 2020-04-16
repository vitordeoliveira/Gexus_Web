import React from "react";
import styled from "styled-components";

function NavItem({ children }) {
  return <Item>{children}</Item>;
}

const Item = styled.li`
  color: #fff;
  list-style: none;
  margin: 0 30px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.5s;
  position: relative;
  ${this}:hover {
    animation: jump 0.2s infinite alternate;
  }

  @media (max-width: 1070px) {
    margin: 0 10px;
  }

  @keyframes jump {
    from {
      top: 0px;
    }
    to {
      top: -4px;
    }
  }
`;

export default NavItem;
