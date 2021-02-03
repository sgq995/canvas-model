import { Component } from "react";
import Entry from "./Entry";

import "./NewPost.css";

class NewPost extends Component {
  state = {
    editable: false,
  }

  handleEdit = () => {
    this.setState({
      editable: true
    });
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

    const onSubmit = this.props.onSubmit ?? (() => { });
    onSubmit(value);
  }

  render() {
    const { editable } = this.state;

    return (
      <article className="NewPost">
        {editable
          ? <Entry onCheck={this.handleCheck} onSubmit={this.handleSubmit} />
          : <button className="NewPost__button material-icons" onClick={this.handleEdit}>add</button>
        }
      </article>
    );
  }
}

export default NewPost;
