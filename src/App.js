import React from "react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

import styled from "styled-components";

import store, { persistor } from "./store/indexStore";
import GlobalStyles from "./styles/globalStyles";
import Header from "./components/Header/indexHeader";
import Routes from "./routes/indexRoutes";
import Footer from "./components/Footer/indexFooter";

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <GlobalStyles />
          <ToastContainer
            autoClose={3000}
            className="toast-container"
            closeOnClick={true}
          />
          <AppContainer>
            <Header />
            <MainContent>
              <Routes />
            </MainContent>
            <Footer />
          </AppContainer>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
