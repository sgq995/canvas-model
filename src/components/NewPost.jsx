import { Component } from "react";

import Post from "./Post";

class NewPost extends Component {
  state = {
    item: ''
  }

  handleChange = (event) => {
    const target = event.target;
    const { name, value } = target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const onSubmit = this.props.onSubmit ?? (() => { });
    onSubmit(this.state.item);
  }

  render() {
    return (
      <Post>
        <form onSubmit={this.handleSubmit}>
          <input
            name="item"
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>
            Añadir
          </button>
        </form>
      </Post>
    );
  }
}

export default NewPost;
