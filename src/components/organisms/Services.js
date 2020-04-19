import React from "react";
import styled from "styled-components";

import ServiceItem from "../molecules/ServiceItem";

// Assets
import img1 from "../../assets/IconComputer.png";
import img2 from "../../assets/IconPhone.png";
import img3 from "../../assets/IconLamp.png";
import img4 from "../../assets/IconCart.png";
import img5 from "../../assets/IconRocket.png";
import img6 from "../../assets/IconGlass.png";
import img7 from "../../assets/IconValue.png";
import img8 from "../../assets/IconInflu.png";
import img9 from "../../assets/IconReward.png";

function Services() {
  return (
    <Wrapper>
      <ServiceItem
        img={img1}
        title={"Criação de sites"}
        text="Criamos sites personalizados com
  comunicação direta e objetiva e
  com técnicas de SEO, para melhor
  raqueamento no Google."
      ></ServiceItem>

      <ServiceItem
        img={img2}
        title={"Criação de aplicativos"}
        text="Criamos sites personalizados com
  comunicação direta e objetiva e
  com técnicas de SEO, para melhor
  raqueamento no Google."
      ></ServiceItem>

      <ServiceItem
        img={img3}
        title={"marketing de conteúdo"}
        text="Criamos sites personalizados com
  comunicação direta e objetiva e
  com técnicas de SEO, para melhor
  raqueamento no Google."
      ></ServiceItem>

      <ServiceItem
        img={img4}
        title={"Loja virtual"}
        text="Criamos sites personalizados com
  comunicação direta e objetiva e
  com técnicas de SEO, para melhor
  raqueamento no Google."
      ></ServiceItem>

      <ServiceItem
        img={img5}
        title={"Landing pages"}
        text="Criamos sites personalizados com
  comunicação direta e objetiva e
  com técnicas de SEO, para melhor
  raqueamento no Google."
      ></ServiceItem>

      <ServiceItem
        img={img6}
        title={"hootsites"}
        text="Criamos sites personalizados com
  comunicação direta e objetiva e
  com técnicas de SEO, para melhor
  raqueamento no Google."
      ></ServiceItem>

      <ServiceItem
        img={img7}
        title={"anúncios"}
        text="Criamos sites personalizados com
  comunicação direta e objetiva e
  com técnicas de SEO, para melhor
  raqueamento no Google."
      ></ServiceItem>

      <ServiceItem
        img={img8}
        title={"influenciadores"}
        text="Criamos sites personalizados com
  comunicação direta e objetiva e
  com técnicas de SEO, para melhor
  raqueamento no Google."
      ></ServiceItem>

      <ServiceItem
        img={img9}
        title={"seguros de tecnologia"}
        text="Criamos sites personalizados com
  comunicação direta e objetiva e
  com técnicas de SEO, para melhor
  raqueamento no Google."
      ></ServiceItem>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Services;
