import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png';
export function Banner() {
  return (
    <div className={styles.banner}>
      <div>
        <h1 className={styles.titulo}>Olá, Terráqueos!</h1>
        <p className={styles.paragrafo}>
          Boas vindas pessoal! Eu sou Matheus e gostaria de compartilhar com vocês alguma maluquices...
        </p>
      </div>
      <div className={styles.imagens}>
        <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true} alt='' />
        <img className={styles.minhaFoto} src={minhaFoto} alt='Minha foto' />
      </div>
    </div>
  );
}
