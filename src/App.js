import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import { setAuthInfo } from "./redux/Slices";
import { useEffect } from "react";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    store.dispatch(setAuthInfo(user));
  }, [user]);

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <AppRoutes />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
