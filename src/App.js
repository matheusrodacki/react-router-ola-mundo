import SobreMim from './pages/SobreMim';
import Inicio from './pages/Inicio';

const pagina = window.location.pathname === '/' ? <Inicio /> : <SobreMim />;

function App() {
  return pagina;
}

export default App;
