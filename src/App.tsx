// import React from 'react';
import "./App.css";
import Header from "./components/header/header";
import Body from "./components/body/Body";
import AppFooter from "./components/Footer/AppFooter";
import { Route, Routes } from "react-router-dom";
import CoinInfo from "./components/CoinInfo/CoinInfo";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Body />
              <AppFooter />
            </>
          }
        />
        <Route path="/coin/:coinName" element={<CoinInfo />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
