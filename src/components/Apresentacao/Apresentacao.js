import Banner from 'components/Banner';
import { Outlet } from 'react-router-dom';

export function Apresentacao() {
  return (
    <main>
      <Banner />
      <Outlet />
    </main>
  );
}
