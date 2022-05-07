import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import View from "./components/View/View";

import "./app.style.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <View />
          <Footer />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
