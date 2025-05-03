
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello") // Proxy vers le backend
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>App Full Stack Déployée sur Azure</h1>
      <p>Message du backend : {message}</p>
    </div>
  );
}

export default App;
