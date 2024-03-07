import './Post.css';
import { Route, Routes, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import posts from 'json/posts.json';
import PostModelo from 'components/PostModelo';
import NaoEncontrado from 'pages/NaoEncontrado';
import Apresentacao from 'components/Apresentacao';

export function Post() {
  const params = useParams();

  const post = posts.find((post) => {
    return post.id === Number(params.id);
  });

  if (!post) {
    return <NaoEncontrado />;
  }

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
            </PostModelo>
          }
        />
      </Route>
    </Routes>
  );
}
