import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Page/Main/Main";
import About_me from "./Page/About_me/About_me";
import Layout from "./Companents/Layout/Layout";
import NotFound from "./Page/NotFound/NotFound";
import Contacts_for_me from "./Page/Contacts_for_me/Contacts_for_me";
import "./App.css";


function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/About_me" element={<About_me />} />
            <Route path="/Contacts_for_me" element={<Contacts_for_me />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
