import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './componets/Layaout/Login';
import ProductosPage from './componets/Page/ProductosPage';
import { Home } from './componets/Page/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path="/productos" element={<ProductosPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App