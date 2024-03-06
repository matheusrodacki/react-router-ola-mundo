import styles from './Rodape.module.css';
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg';

export function Rodape() {
  return (
    <footer className={styles.rodape}>
      2023 <MarcaRegistrada /> Desenvolvido por MTSR
    </footer>
  );
}
