import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import PrivateRoute from "./helpers/PrivateRoute";
import PublicRoute from "./helpers/PublicRoute";

import LandingPage from "./pages/LandingPage/LandingPage";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            <PublicRoute
              Route
              restricted={true}
              path="/"
              exact
              component={LandingPage}
            />
            <PublicRoute
              Route
              restricted={true}
              path="/register"
              exact
              component={Register}
            />
            <PublicRoute
              Route
              restricted={true}
              path="/login"
              exact
              component={Login}
            />
            <PrivateRoute
              Route
              path="/home"
              exact
              component={Home}
            />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;