import md5 from "md5";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Personagens from "./components/Personagens";

export type TData = {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

function App() {
  const [data, setData] = useState<TData[]>([]);
  const urlPersonagens = "http://gateway.marvel.com/v1/public/characters?";
  const urlSeries = "";

  const publicKey = "1100705ccad6cfb5720fc66961cdb8be";
  const privateKey = "ceddde4d35fcce75f5dc3394596a4e49dc7c8f3f";
  const time = Number(new Date());

  const hash = md5(time + privateKey + publicKey);
  console.log(`ts=${time}&apikey=${publicKey}&hash=${hash}`);
  useEffect(() => {
    async function fetchdata() {
      const res = await fetch(
        `${urlPersonagens}ts=${time}&apikey=${publicKey}&hash=${hash}`
      );

      const data = await res.json();
      setData(data.data.results);
    }
    fetchdata().catch((err) => console.log("erro" + err));
  }, []);

  console.log(data);

  return (
    <div className="App">
      <NavBar />

      <div className="header "></div>
      <Personagens data={data} />
    </div>
  );
}

export default App;
