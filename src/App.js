import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  );
}

export default App;
