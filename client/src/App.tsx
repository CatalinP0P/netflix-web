import React from "react";
import Layout from "./Layout";
import { Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
