import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);
 
  return (
    <div className="main">
      <div className="nav">
        <p>IFSULDEMINAS Assistente</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Olá estudante.</span>
          </p>
          <p>Como posso lhe ajudar hoje?</p>
        </div>

        <div className="cards">
          <div className="card">
            <p>Sugestões de cursos e atividades</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Informações sobre vestibular e inscrições</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        {/* Fim dos Cards */}

        <div className="main-bottom">
          <div className="search-box">
          <input onChange={(e) => setInput(e.target.value)} value={input} type="text"  placeholder="Entre com sua pergunta aqui" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
               <img onClick={() => onSent()} src={assets.send_icon} alt="" /> 
            </div>
          </div>
          <p className="bottom-info">
            IFSULDEMINAS Assistente utiliza uma base de dados própria 
            com pesquisa gerada através de embeddings do Gemini. Algumas informações podem ser
            incorretas, sempre verifique as fonte recomendadas.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Main;
