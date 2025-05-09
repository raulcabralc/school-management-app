import React from "react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

import GlobalStyles from "./styles/globalStyles";
import Header from "./components/Header/indexHeader";
import Routes from "./routes/indexRoutes";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
