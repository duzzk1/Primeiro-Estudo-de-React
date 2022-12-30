import Header from "./components/Header";
import About from "./components/About";
import TesteJS from "./components/TesteJS";
import Form from "./components/Form";
import { useState } from "react";
import Recados from "./components/Recados";
import Card from "./components/Card";

function App() {
  const [mensagens, setMensagens] = useState([]);
  const aoNovaMensagemEnviada = (mensagem) => {
    console.log(mensagem);
    setMensagens([...mensagens, mensagem]);
  };

  return (
    <div className="App">
      <Header />
      <About />
      <TesteJS />
      <Form aoMensagemEnviada={(mensagem) => aoNovaMensagemEnviada(mensagem)} />
      <Recados nome="Recados" />
      <Card />
    </div>
  );
}

export default App;
