import { AboutMe } from "./components/AboutMe/AboutMe";
import { Descricao } from "./components/Descriçao/Descricao";
import { Inicio } from "./components/Header/Inicio";
import { Orcamento } from "./components/Orçamento/Orcamento";
import { Projetos } from "./components/Projetos/Projetos";
import { Avaliacoes } from "./components/Avaliacoes/Avalicoes";
import { Contatos } from "./components/Contatos/Contatos";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div>
      
      <Inicio/>
      <AboutMe/>
      <Descricao/>
      <Orcamento/>
      <Projetos/>
      <Avaliacoes/>
      <Contatos/>
      <Footer/>
      
    </div>
  );
}

export default App;
