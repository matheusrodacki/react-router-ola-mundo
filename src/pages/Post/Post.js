import './Post.css';
import styles from './Post.module.css';
import { Route, Routes, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import posts from 'json/posts.json';
import PostModelo from 'components/PostModelo';
import NaoEncontrado from 'pages/NaoEncontrado';
import Apresentacao from 'components/Apresentacao';
import PostCard from 'components/PostCard';

export function Post() {
  const params = useParams();

  const post = posts.find((post) => {
    return post.id === Number(params.id);
  });

  if (!post) {
    return <NaoEncontrado />;
  }

  const postsRecomendados = posts
    .filter((post) => post.id !== Number(params.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  return (
    <Routes>
      <Route path='*' element={<Apresentacao />}>
        <Route
          index
          element={
            <PostModelo fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
              <div className='post-markdown-container'>
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>
              <h2 className={styles.tituloOutrosPosts}>Outros posts que você pode gostar:</h2>
              <ul className={styles.postsRecomendados}>
                {postsRecomendados.map((post) => (
                  <li key={post.id}>
                    <PostCard post={post} />
                  </li>
                ))}
              </ul>
            </PostModelo>
          }
        />
      </Route>
    </Routes>
  );
}
