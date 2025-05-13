import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./componets/Layaout/Login";
import ProductosPage from "./componets/Page/ProductosPage";
import { Home } from "./componets/Page/Home";
import PrivateRoute from "./componets/PrivateRoute";

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
