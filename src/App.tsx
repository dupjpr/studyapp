import store from "./redux/store";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import View from "./components/View/View";

import "./app.style.scss";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <View />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
