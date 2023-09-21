import { useState } from 'react';
import TodoForm from './TodoForm';
import { v4 as uuid4 } from 'uuid';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';

uuid4();
const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: uuid4(),
        task: todo,
        isEditing: false,
        completed: false
      }
    ]);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((t) => t.id !== id);

    setTodos(newTodos);
  };

  const markCompleted = (id) => {
    const newTodos = todos.map((t) => {
      if (t.id === id) t.isCompleted = !t.isCompleted;
      return t;
    });
    setTodos(newTodos);
  };

  const markEditing = (id) => {
    const newTodos = todos.map((t) => {
      if (t.id === id) t.isEditing = !t.isEditing;
      return t;
    });
    setTodos(newTodos);
  };

  const editTodo = (taskVal, id) => {
    const newTodos = todos.map((t) => {
      if (t.id === id) {
        t.task = taskVal;
        t.isEditing = !t.isEditing;
      }
      return t;
    });
    setTodos(newTodos);
  };

  return (
    <div className="todo-wrapper">
      <TodoForm addTodo={addTodo} />
      {todos.map((t, idx) => {
        return t.isEditing ? (
          <EditTodoForm key={idx} editTodo={editTodo} todo={t} />
        ) : (
          <Todo
            key={idx}
            todo={t}
            markCompleted={markCompleted}
            deleteTodo={deleteTodo}
            markEditing={markEditing}
          />
        );
      })}
    </div>
  );
};
export default TodoWrapper;
