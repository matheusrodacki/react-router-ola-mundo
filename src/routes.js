import Menu from './components/Menu';
import Inicio from './pages/Inicio';
import SobreMim from './pages/SobreMim';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu></Menu>

      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/sobremim' element={<SobreMim />} />
        <Route path='*' element={<h2>404: Página não encontrada :( </h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
