import React, { Component } from "react";

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: "" };
  }

  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = (event) => {
    alert("A comment was submitted: " + this.state.comment);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add a Comment</h2>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button type="submit">Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
