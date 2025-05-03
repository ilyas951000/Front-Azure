// src/App.jsx

import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  // Détection automatique de l'environnement
  const apiUrl = import.meta.env.PROD
    ? "https://back-projet-dpccajgja8c2f3df.francecentral-01.azurewebsites.net/api/hello"
    : "/api/hello"; // proxy local

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Erreur lors de la récupération du message :", err));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>App Full Stack Déployée sur Azure</h1>
      <p><strong>Message du backend :</strong> {message}</p>
    </div>
  );
}

export default App;
