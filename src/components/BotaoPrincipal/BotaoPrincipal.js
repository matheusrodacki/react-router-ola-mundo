import styles from './BotaoPrincipal.module.css';

export function BotaoPrincipal({ children, tamanho }) {
  return <button className={`${styles.botaoPrincipal} ${styles[tamanho]}`}>{children}</button>;
}
