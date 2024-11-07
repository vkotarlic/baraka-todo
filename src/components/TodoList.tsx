import { useAtom, useSetAtom } from 'jotai';
import Todo from '../models/Todo';
import TodoComponent from './Todo';
import { filteredAtom, todosAtom } from '../state/ApplicationState';

const TodoList = () => {
  const [todos] = useAtom(filteredAtom);
  const setTodos = useSetAtom(todosAtom);

  const handleDelete = (todo: Todo) => setTodos((prev) => prev.filter((item) => item !== todo));

  return (
    <div className='flex flex-col items-center'>
      {todos.map((todo) => (
        <TodoComponent key={todo.id} todo={todo} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default TodoList;
