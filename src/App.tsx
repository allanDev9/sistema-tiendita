import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./presentation/components/Layaout/Login";
import ProductosPage from "./presentation/components/Page/ProductosPage";
import { Home } from "./presentation/components/Page/Home";
import PrivateRoute from "./presentation/routes/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Protección de rutas*/}
        <Route element={<PrivateRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/productos" element={<ProductosPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
