import Banner from 'components/Banner';
import styles from './Apresentacao.module.css';
import { Outlet } from 'react-router-dom';

export function Apresentacao() {
  return (
    <main>
      <Banner />
      <Outlet />
    </main>
  );
}
