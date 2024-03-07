import Rodape from 'components/Rodape';
import Menu from './components/Menu';
import Inicio from './pages/Inicio';
import SobreMim from './pages/SobreMim';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Apresentacao from 'components/Apresentacao';
import Post from 'pages/Post';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path='/' element={<Apresentacao />}>
          <Route index element={<Inicio />} />
          <Route path='/sobremim' element={<SobreMim />} />
          <Route path='/posts/:id' element={<Post />} />
        </Route>
        <Route path='*' element={<h2>404: Página não encontrada :( </h2>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
