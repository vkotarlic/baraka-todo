import Todo from '../models/Todo';
import TodoComponent from './Todo';

const todos: Todo[] = [{ text: 'Test todo', date: new Date(), status: false }];

const TodoList = () => {
  return (
    <div className='flex flex-col items-center'>
      {todos.map((todo) => (
        <TodoComponent todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
