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

  handleItemEdit = (id, content) => {
    this.setState(({ items }) => {
      const item = items.find(item => item.id === id);
      item.content = content;

      return {
        items,
      };
    });
  }

  handleItemDelete = (id) => {
    this.setState(({ items }) => {
      let newItems = items;

      const idx = newItems.findIndex(item => item.id === id);
      if (idx > -1) {
        newItems.splice(idx, 1);
      }

      return {
        items: newItems
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
            <Post
              key={id}
              content={content}
              onEdit={content => this.handleItemEdit(id, content)}
              onDelete={() => this.handleItemDelete(id)}
            />
          )}

          <NewPost onSubmit={this.handleNewItem} />
        </article>
      </section>
    );
  }
}

export default Section;
