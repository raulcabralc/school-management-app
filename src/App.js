import React from "react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

import store, { persistor } from "./store/indexStore";
import GlobalStyles from "./styles/globalStyles";
import Header from "./components/Header/indexHeader";
import Routes from "./routes/indexRoutes";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <GlobalStyles />
          <ToastContainer autoClose={3000} className="toast-container" />
          <Header />
          <Routes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
