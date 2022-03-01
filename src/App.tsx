import store from "./redux/store";
import { Provider } from "react-redux";
import Input from "./components/Input/Input";
import View from "./components/View/View";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <h1>hello world </h1>
        <Input />
        <View />
      </Provider>
    </div>
  );
}

export default App;
