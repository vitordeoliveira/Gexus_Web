import React, { useState } from "react";

// Atoms
import Input from "../atoms/InputLead";

function InputsLeads() {
  const [formdata, setFormdata] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
  });

  const [data, setData] = useState({
    name: false,
    phone: false,
    email: false,
    company: false,
  });

  const { name, phone, email, company } = formdata;

  const onchange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: [e.target.value] });
    setData({ ...data, [e.target.name]: true });
  };

  return (
    <>
      <Input
        placeholder="Seu nome"
        required
        name="name"
        value={name}
        check={data.name}
        onChange={onchange}
      ></Input>
      <Input
        placeholder="Seu email"
        required
        name="email"
        value={email}
        check={data.email}
        onChange={onchange}
      ></Input>
      <Input
        placeholder="Seu telefone"
        required
        type="tel"
        maxlength="15"
        name="phone"
        value={phone}
        check={data.email}
        onChange={onchange}
      ></Input>
      <Input
        placeholder="Sua empresa"
        required
        name="company"
        value={company}
        check={data.email}
        onChange={onchange}
      ></Input>
    </>
  );
}

export default InputsLeads;
