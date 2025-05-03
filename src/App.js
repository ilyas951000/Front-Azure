import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const apiUrl = process.env.NODE_ENV === "production"
    ? "https://back-projet-dpccajgja8c2f3df.francecentral-01.azurewebsites.net/api/hello"
    : "/api/hello";

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Erreur lors de la récupération du message :", err));
  }, [apiUrl]);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>App Full Stack Déployée sur Azure</h1>
      <p><strong>Message du backend :</strong> {message}</p>
    </div>
  );
}

export default App;
