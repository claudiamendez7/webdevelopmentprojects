import React from "react";
import { Routes, Route, BrowserRouter ,Link} from "react-router-dom";
import CountryDetails from "@pages/CountryDetails";
import Home from "@src/pages/Home";
import "@assets/scss/global.scss";
import Main from "@layouts/Main";

import NotFound from "./pages/NotFound/NotFound";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:countryName" element={<CountryDetails />}></Route>
          <Route path="/notFound" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
