import { useEffect } from "react";
import { useAtom } from "jotai";
import { BrowserRouter } from "react-router-dom";
import { DataAtom } from "./state/Atoms";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import View from "./components/View/View";
import Loading from "./components/uiLibrary/Loading/Loading";

import "./app.style.scss";

function App() {
  const [data, setData] = useAtom(DataAtom);

  const fetchFunction = async () => {
    const page = Math.floor(Math.random() * 20) + 1;
    const URL: string = `https://rickandmortyapi.com/api/character/?page=${page}`;
    try {
      const res = await fetch(URL);
      if (res.ok) {
        const resJson = await res.json();
        setData(resJson.results);
        return res;
      }
    } catch (error) {
      console.log("Network response was not ok.");
    }
  };

  useEffect(() => {
    fetchFunction();
  }, []);

  console.log("delete at the end", { data });

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {data.length !== 0 ? <View /> : <Loading />}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
