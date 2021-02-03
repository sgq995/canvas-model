import { useState } from 'react';

import './Post.css';

function Post({ children }) {
  const [editable, setEditable] = useState(false);

  return (
    <article className={`Post ${editable && 'Post--editable'}`} onClick={() => setEditable(true)}>
      <div className="Post__content">
        {children}
      </div>

      <div className="Post__buttons">
        <button className="Post__button Post__button--info material-icons">mode</button>
        <button className="Post__button Post__button--danger material-icons">delete</button>
      </div>
    </article>
  )
}

export default Post;
