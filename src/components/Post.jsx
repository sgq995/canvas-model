import { useState } from 'react';

import './Post.css';

function Post({ children }) {
  const [editable, setEditable] = useState(false);

  return (
    <article className={`Post ${editable && 'Post--editable'}`} onClick={() => setEditable(true)}>
      {/* <button className="Post__button">M</button>
      <button className="Post__button">X</button> */}

      <div className="Post__content">
        {children}
      </div>
    </article>
  )
}

export default Post;
