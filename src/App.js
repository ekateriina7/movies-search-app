import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import store from "./store";
import Header from "./components/Header/Header";
import ThemeBtn from "./components/ThemeBtn";
import Errors from "./components/Errors";

function App() {
  return (
    <Provider store={store}>
      <Errors/>
      <Router>
        <ThemeBtn/>
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
