import React from "react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";

import store from "./store/indexStore";
import GlobalStyles from "./styles/globalStyles";
import Header from "./components/Header/indexHeader";
import Routes from "./routes/indexRoutes";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <ToastContainer autoClose={3000} className="toast-container" />
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
