
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Counter from "./components/counter.jsx";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import Home from "./pages/home.jsx";
import Shop from "./pages/shop.jsx";
import About from "./pages/about.jsx";
import Color from "./pages/color.jsx";

function App() {
return (
<>
<BrowserRouter>
<NavBar />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/shop" element={<Shop />} />
  <Route path="/about" element={<About />} />
  <Route path="/color" element={<Color />} />
</Routes>
<Footer />
</BrowserRouter>
</>
);

}

export default App;



