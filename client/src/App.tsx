import React from "react";
import Layout from "./Layout";
import { Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Add from "./pages/Add/Add";

import Error from "./pages/Error/Error";
import { DatabaseProvdier } from "./context/DatabaseContext";
import { PopupProvider } from "./context/PopupContext";
import ShowPopup from "./components/popups/ShowPopup";
import { AuthProvider } from "./context/AuthContext";
import Signin from "./pages/Signin/Signin";

function App() {
  return (
    <div>
      <DatabaseProvdier>
        <AuthProvider>
          <BrowserRouter>
            <PopupProvider>
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/add" element={<Add />} />
                  <Route path="/signin" element={<Signin/>} />
                  <Route path="*" element={<Error />} />
                </Routes>
              </Layout>
              <ShowPopup />
            </PopupProvider>
          </BrowserRouter>
        </AuthProvider>
      </DatabaseProvdier>
    </div>
  );
}

export default App;
