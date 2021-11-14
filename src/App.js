import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import store from "./store";
import Header from "./components/Header/Header";
import Theme from "./components/Theme";

function App() {
  return (
    <Theme>
    <Provider store={store}>
      <Router>
        <Header />
        <Routes />
      </Router>
    </Provider>
    </Theme>
  );
}

export default App;
