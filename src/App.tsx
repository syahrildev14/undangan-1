import { Route, Routes, BrowserRouter } from "react-router-dom";

// pages
import BukaUndangan from "./pages/BukaUndangan";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Halaman Buka Undangan */}
          <Route path="/" element={<BukaUndangan />} />

          {/* Halaman Utama */}
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
