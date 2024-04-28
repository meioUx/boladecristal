
import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [frase, setFrase] = useState("Clique aqui")
  const [language, setLanguage] = useState()

  async function getdata() {
    const response = await axios.get("https://boladecristal-1.onrender.com" + language)
    console.log(response.data)
    setFrase(response.data.phrase)
  }

  function handleSetLanguage(language) {
    if (language === "en") { setFrase("Click here and receive advice from the universe") }
    if (language === "fr") { setFrase("Cliquez ici et recevez les conseils de l'univers") }
    if (language === "pt") { setFrase("Clique aqui e receba um conselho do universo") }

    setLanguage(language)
  }

  return (
    <div className="App">



      <div className="bola-cristal" onClick={getdata}>
        {!language ?
          <div>
            <div className="botaoen" onClick={() => handleSetLanguage("en")}> English </div>
            <div className="botaofr" onClick={() => handleSetLanguage("fr")}> Français </div>
            <div className="botaopt" onClick={() => handleSetLanguage("pt")}> Português </div>

          </div>
          :
          <div>
            {frase}
          </div>
        }

      </div>







    </div>
  );
}

export default App;
