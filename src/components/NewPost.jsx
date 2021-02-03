import { Component, createRef } from "react";

import "./NewPost.css";

class NewPost extends Component {
  state = {
    editable: false,
    hasError: false,

    item: ''
  }

  inputRef = createRef(null);

  handleEdit = () => {
    this.setState({
      editable: true
    });

    this.inputRef.current?.focus();
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.target.blur();
      this.handleSubmit(event);
    }
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

    if (this.state.item.trim().length === 0) {
      this.setState({
        hasError: true,
      });
      return;
    }

    this.setState({
      editable: false,
      hasError: false,
    });

    const onSubmit = this.props.onSubmit ?? (() => { });
    onSubmit(this.state.item);
  }

  render() {
    const { editable, hasError } = this.state;

    return (
      <article className="NewPost">
        {editable
          ? <form className="NewPost__form" onSubmit={this.handleSubmit}>
            <div className={`NewPost__field ${hasError && 'NewPost__field--error'}`} onClick={() => this.inputRef.current?.focus()}>
              <input
                ref={this.inputRef}
                className="NewPost__input"
                name="item"
                onKeyPress={this.handleKeyPress}
                onChange={this.handleChange}
              // onBlur={this.handleSubmit}
              />
              <button className="NewPost__submit material-icons">done</button>
            </div>
          </form>
          : <button className="NewPost__button material-icons" onClick={this.handleEdit}>add</button>
        }

      </article>
    );
  }
}

export default NewPost;
