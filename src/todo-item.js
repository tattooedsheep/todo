import React from "react";
class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          onClick={() => this.state({ done: !this.state.done })}
        />
        <p className={this.state.done ? "done" : null}>{this.props.title}</p>
      </div>
    );
  }
}
export default TodoItem;
