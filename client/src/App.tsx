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
import { MyListProvider } from "./context/MyListContext";
import MyList from "./pages/MyList/MyList";
import NewAndPopular from "./pages/NewAndPopular/NewAndPopular";
import Movies from "./pages/Movies/Movies";
import SearchBar from "./components/Header/SearchBar";
import { SerachProvider } from "./context/SearchContext";

function App() {
  return (
    <div>
      <DatabaseProvdier>
        <AuthProvider>
          <MyListProvider>
            <SerachProvider>
              <BrowserRouter>
                <PopupProvider>
                  <Layout>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/my-list" element={<MyList />} />
                      <Route
                        path="/new-and-popular"
                        element={<NewAndPopular />}
                      />
                      <Route path="/movies" element={<Movies />} />
                      <Route path="/tv-shows" element={<Movies />} />
                      <Route path="/add" element={<Add />} />
                      <Route path="/signin" element={<Signin />} />
                      <Route path="*" element={<Error />} />
                    </Routes>
                  </Layout>
                  <ShowPopup />
                </PopupProvider>
              </BrowserRouter>
            </SerachProvider>
          </MyListProvider>
        </AuthProvider>
      </DatabaseProvdier>
    </div>
  );
}

export default App;
