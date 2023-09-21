import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Todo = ({ todo, markCompleted, deleteTodo, markEditing }) => {
  return (
    <div className="todo-item">
      <p
        onClick={() => {
          markCompleted(todo.id);
        }}
        className={`${todo.isCompleted ? 'completed' : ''}`}>
        {todo.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => {
            markEditing(todo.id);
          }}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => {
            deleteTodo(todo.id);
          }}
        />
      </div>
    </div>
  );
};

export default Todo;

Todo.propTypes = {
  todo: PropTypes.object.isRequired
};

Todo.propTypes = {
  markCompleted: PropTypes.func.isRequired
};

Todo.propTypes = {
  deleteTodo: PropTypes.func.isRequired
};

Todo.propTypes = {
  markEditing: PropTypes.func.isRequired
};
