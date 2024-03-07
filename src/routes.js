import Rodape from 'components/Rodape';
import Menu from './components/Menu';
import Inicio from './pages/Inicio';
import SobreMim from './pages/SobreMim';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Apresentacao from 'components/Apresentacao';
import Post from 'pages/Post';
import NaoEncontrado from 'pages/NaoEncontrado';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path='/' element={<Apresentacao />}>
          <Route index element={<Inicio />} />
          <Route path='/sobremim' element={<SobreMim />} />
        </Route>
        <Route path='/posts/:id' element={<Post />} />
        <Route path='*' element={<NaoEncontrado />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
