import { useState } from 'react';
import Filters from './Filters';
import Input from './Input';
import { useSetAtom } from 'jotai';
import { todosAtom } from '../state/ApplicationState';
import useAxios from '../hooks/useAxios';
import Spinner from './Spinner';

const Header = () => {
  const [newTitle, setNewTitle] = useState('');
  const setTodos = useSetAtom(todosAtom);

  const { response, loading, error } = useAxios({
    method: 'get',
    url: '/quotes/random'
  });

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
      {loading && <Spinner />}
      {response && !loading && (
        <>
          <h1 className='text-3xl font-bold text-gray-800 w-1/2 flex justify-center items-center'>
            {response.quote}
          </h1>
          <p className='text-gray-600'>Author: {response.author}</p>
        </>
      )}
      <Input onChange={handleChange} onClick={handleAddTodo} value={newTitle} />
      <Filters />
    </div>
  );
};

export default Header;
