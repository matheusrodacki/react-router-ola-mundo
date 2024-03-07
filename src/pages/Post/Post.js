import { useParams } from 'react-router-dom';
import styles from './Post.module.css';

export function Post() {
  const params = useParams();
  return <h1>{params.id}</h1>;
}
