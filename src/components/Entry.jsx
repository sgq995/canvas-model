import { Component, createRef } from "react";

import "./Entry.css";

class Entry extends Component {
  state = {
    hasError: false,
  }

  inputRef = createRef(null);

  constructor(props) {
    super(props);

    this.state.value = props.initialValue ?? '';
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
    event.stopPropagation();

    const onCheck = this.props.onCheck ?? (() => true);
    if (onCheck(this.state.value)) {
      this.setState({ hasError: false });

      const onSubmit = this.props.onSubmit ?? (() => { });
      onSubmit(this.state.value);
    } else {
      this.setState({ hasError: true });
    }
  }

  render() {
    const { hasError, value } = this.state;

    return (
      <form className="Entry__form" onSubmit={this.handleSubmit}>
        <div className={`Entry__field ${hasError && 'Entry__field--error'}`} onClick={() => this.inputRef.current?.focus()}>
          <input
            ref={this.inputRef}
            className="Entry__input"
            name="value"
            value={value}
            onKeyPress={this.handleKeyPress}
            onChange={this.handleChange}
          // onBlur={this.handleSubmit}
          />
          <button className="Entry__submit material-icons">done</button>
        </div>
      </form>
    );
  }
}

export default Entry;
