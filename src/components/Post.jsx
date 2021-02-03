import { Component } from 'react';
import Entry from './Entry';

import './Post.css';

class Post extends Component {
  state = {
    editable: false,
  }

  handleCheck = (value) => {
    if (value.trim().length === 0) {
      return false;
    }

    return true;
  }

  handleSubmit = (value) => {
    this.setState({
      editable: false,
    });

    const onEdit = this.props.onEdit ?? (() => { });
    onEdit(value);
  }

  handleEdit = (event) => {
    if (this.state.editable) {
      return;
    }

    this.setState({
      editable: true
    });
  }

  handleDelete = (event) => {
    event.stopPropagation();

    const onDelete = this.props.onDelete ?? (() => { });
    onDelete();
  }

  render() {
    const { content } = this.props;
    const { editable } = this.state;

    return (
      <article className={`Post ${editable && 'Post--editable'}`} onClick={this.handleEdit}>
        {editable
          ? <Entry initialValue={content} onCheck={this.handleCheck} onSubmit={this.handleSubmit} />
          : <>
            <div className="Post__content">
              {content}
            </div>

            <div className="Post__buttons">
              <button className="Post__button Post__button--info material-icons" onClick={this.handleEdit}>mode</button>
              <button className="Post__button Post__button--danger material-icons" onClick={this.handleDelete}>delete</button>
            </div>
          </>
        }
      </article>
    );
  }
}

export default Post;
