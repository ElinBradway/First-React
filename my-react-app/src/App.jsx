
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import "./components/Item-card.css"
//import "./components/navbar.css"
//import React from "react";
import Counter from "./components/counter.jsx";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import Home from "./pages/home.jsx";
import Shop from "./pages/shop.jsx";
import About from "./pages/about.jsx";

function App() {
return (
<>
<BrowserRouter>
<NavBar />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/shop" element={<Shop />} />
  <Route path="/about" element={<About />} />
</Routes>
<Footer />
</BrowserRouter>
</>
);

}

export default App;



