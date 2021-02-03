import { useState } from 'react';

import NewPost from './NewPost';
import Post from './Post';

import './Section.css';

function Section({ title, icon }) {
  const [items, setItems] = useState([]);

  return (
    <section className="Section">
      <header className="Section__header">
        <h2 className="Section__title">{title}</h2>
        <img className="Section__icon" alt={title} src={icon} />
      </header>

      <article className="Section__content">
        {items.map(item =>
          <Post>
            {item}
          </Post>
        )}

        <NewPost onSubmit={(item) => setItems(items => [...items, item])} />
      </article>
    </section>
  );
}

export default Section;
