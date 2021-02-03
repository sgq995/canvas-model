import { Component } from 'react';

import NewPost from './NewPost';
import Post from './Post';

import './Section.css';

class Section extends Component {
  state = {
    lastId: 0,
    items: [],
  }

  handleNewItem = (content) => {
    this.setState(({ lastId, items }) => {
      return {
        lastId: lastId + 1,
        items: [...items, {
          id: lastId,
          content
        }],
      };
    });
  }

  handleEditItem = (id, content) => {
    this.setState(({ lastId, items }) => {
      const item = items.find(item => item.id === id);
      item.content = content;

      return {
        lastId,
        items,
      };
    });
  }

  render() {
    const { title, icon } = this.props;
    const { items } = this.state;

    return (
      <section className="Section">
        <header className="Section__header">
          <h2 className="Section__title">{title}</h2>
          <img className="Section__icon" alt={title} src={icon} />
        </header>

        <article className="Section__content">
          {items.map(({ id, content }) =>
            <Post key={id} content={content} onEdit={content => this.handleEditItem(id, content)} />
          )}

          <NewPost onSubmit={this.handleNewItem} />
        </article>
      </section>
    );
  }
}

export default Section;
