import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import { Provider, useSelector } from "react-redux";
import { store } from "./redux/Store";
import { setAuthInfo } from "./redux/Slices";
import { useEffect } from "react";
import { updateIncome } from "./utils/dbCalls";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  // let userInfo = useSelector((store) => store.userInfo.authInfo);

  useEffect(() => {
    store.dispatch(setAuthInfo(user));
  }, [user]);

  useEffect(() => {
    updateIncome(user.email);
  }, []);

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
