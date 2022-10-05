import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import View from "./components/View/View";
import Loading from "./components/uiLibrary/Loading/Loading";

import "./app.style.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Suspense fallback={<Loading />}>
          <View />
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
