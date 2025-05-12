import React from "react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { ToastContainer } from "react-toastify";

import GlobalStyles from "./styles/globalStyles";
import Header from "./components/Header/indexHeader";
import Routes from "./routes/indexRoutes";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ToastContainer autoClose={3000} className="toast-container" />
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
