import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import store from "./store";
import Header from "./components/Header/Header";
import ThemeBtn from "./components/ThemeBtn";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ThemeBtn/>
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
