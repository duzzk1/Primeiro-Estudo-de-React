import TextArea from "../TextArea";
import MsgArea from "../MsgArea";
import "./Form.css";
import Submit from "../Submit";
import React, { useEffect, useState } from "react";

const Form = (props) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("onSubmit", nome, email, mensagem);
    props.aoMensagemEnviada({
      nome: nome,
      email: email,
      mensagem: mensagem,
    });
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <h2>Entre em contato:</h2>
        <TextArea
          obrigatory={true}
          label="Nome"
          placeholder="Como devo lhe chamar?"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <TextArea
          obrigatory={true}
          label="Email"
          placeholder="Digite seu melhor email"
          type="email"
          valor={email}
          aoAlterado={(valor) => setEmail(valor)}
        />
        <MsgArea
          obrigatory={true}
          label="Mensagem"
          placeholder="Deixe sua mensagem:"
          type=""
          valor={mensagem}
          aoAlterado={(valor) => setMensagem(valor)}
        />
        <Submit>Enviar</Submit>
      </form>
    </section>
  );
};

export default Form;
