import PropTypes from 'prop-types';
import { useState } from 'react';

const EditTodoForm = ({ editTodo, todo }) => {
  const [taskVal, setTaskVal] = useState(todo.task);
  const handelSubmit = (e) => {
    e.preventDefault();
    editTodo(taskVal, todo.id);
    setTaskVal('');
  };

  return (
    <form className="TodoForm" onSubmit={handelSubmit}>
      <input
        value={taskVal}
        type="text"
        className="todo-input"
        placeholder="Edit task"
        onChange={(e) => {
          setTaskVal(e.target.value);
        }}
      />
      <button type="submit" className="todo-btn">
        Edit
      </button>
    </form>
  );
};

export default EditTodoForm;

EditTodoForm.propTypes = {
  editTodo: PropTypes.func.isRequired
};

EditTodoForm.propTypes = {
  todo: PropTypes.object.isRequired
};
