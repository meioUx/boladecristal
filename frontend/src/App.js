import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Lottie from 'react-lottie';
import animationData from './Animation - 1714314587311.json'; // substitua 'animation.json' pelo seu arquivo de animação
import { logEvent } from 'firebase/analytics';
import { analytics } from './config/firebase';
import nevoa1 from './1.gif'
import nevoa2 from './2.gif'

function App() {
  const [frase, setFrase] = useState("Clique aqui");
  const [language, setLanguage] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (language) {
      setTimeout(fetchData, 2000); // Tempo de espera de 3 segundos antes de carregar os dados
    }
    logEvent(analytics, 'pagina-inicial');
  }, [fetchData, language]);

  async function fetchData() {
    setIsLoading(true);
    const response = await axios.get("https://boladecristal-1.onrender.com/" + language);
    console.log(response.data);
    setFrase(response.data.phrase);
    setTimeout(() => {
      setIsLoading(false); // Defina isLoading como false após um tempo para iniciar a animação
    }, 2000); // Tempo de espera de 5 segundos antes de mostrar a animação
  }

  function handleSetLanguage(language) {
    setIsLoading(false); // Reseta o estado de isLoading para evitar que a animação apareça antes da seleção de idioma

    if (language === "en") { setFrase("Click here and receive advice from the universe"); }
    if (language === "fr") { setFrase("Cliquez ici et recevez les conseils de l'univers"); }
    if (language === "pt") { setFrase("Clique aqui e receba um conselho do universo"); }

    setLanguage(language);
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }


  };

  return (
    <div className="App">
      <div className="cloud1">
        <img src={nevoa1} /> </div>

      <div className="cloud2">
        <img src={nevoa2} /> </div>

      <div className="bola-cristal">

        <div>
          {!language ?
            <>
              <div className="botaoen" onClick={() => handleSetLanguage("en")}> English </div>
              <div className="botaofr" onClick={() => handleSetLanguage("fr")}> Français </div>
              <div className="botaopt" onClick={() => handleSetLanguage("pt")}> Português </div>
            </>
            :
            <div>
              {isLoading ? (
                <div style={{ width: '200px', height: '200px' }}>
                  <Lottie options={defaultOptions} />
                </div>
              ) : (
                <div>{frase}</div>
              )}
            </div>
          }

        </div>
      </div>
    </div>
  );
}

export default App;
