import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import store from "./store";
import Header from "./components/Header/Header";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
