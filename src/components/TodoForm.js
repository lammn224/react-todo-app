import { useRef, useState } from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({ addTodo }) => {
  const [taskVal, setTaskVal] = useState('');
  const inputRef = useRef();

  const handelSubmit = (e) => {
    e.preventDefault();
    addTodo(taskVal);
    setTaskVal('');
    inputRef.current.focus();
  };

  return (
    <form className="todo-form" onSubmit={handelSubmit}>
      <input
        ref={inputRef}
        value={taskVal}
        type="text"
        className="todo-input"
        placeholder="New task"
        onChange={(e) => {
          setTaskVal(e.target.value);
        }}
      />
      <button type="submit" className="todo-btn">
        Add
      </button>
    </form>
  );
};

export default TodoForm;

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};
