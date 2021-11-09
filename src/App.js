import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import store from "./store";
import Header from "./components/Header/Header";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log('log in')
    // ...
  } else {
    // User is signed out
    // ...
    console.log('log out')
  }
});

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
