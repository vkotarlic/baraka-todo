import { useState } from 'react';
import Filters from './Filters';
import Input from './Input';
import { useSetAtom } from 'jotai';
import { todosAtom } from '../state/ApplicationState';

const Header = () => {
  const [newTitle, setNewTitle] = useState('');
  const setTodos = useSetAtom(todosAtom);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const handleAddTodo = () => {
    setNewTitle('');
    if (newTitle)
      setTodos((prev) => [
        ...prev,
        { id: crypto.randomUUID(), text: newTitle, status: false, date: new Date() }
      ]);
  };

  return (
    <div className='p-4 bg-orange-100 rounded-2xl flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold text-gray-800 w-1/2'>
        "Happiness is not a state to arrive at, but a manner of traveling."
      </h1>
      <p className='text-gray-600'>Author: Margaret Lee Runbeck</p>
      <Input onChange={handleChange} onClick={handleAddTodo} value={newTitle} />
      <Filters />
    </div>
  );
};

export default Header;
