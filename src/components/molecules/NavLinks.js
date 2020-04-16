import React from "react";
import styles from "styled-components";

// Atoms
import NavItem from "../atoms/NavItem";

function NavLinks() {
  return (
    <>
      <List>
        <NavItem>Quem somos</NavItem>
        <NavItem>Serviços</NavItem>
        <NavItem>Blog</NavItem>
        <NavItem>Contato</NavItem>
      </List>
      <ListMobile></ListMobile>
    </>
  );
}

const List = styles.ul`
  display:flex;
  align-self: center;
  margin: 0;

  @media(max-width:900px){
    display:none
  }
`;

const ListMobile = styles.ul`
  display:none;
  @media(max-width:900px){
    display:block
  }
`;

export default NavLinks;
