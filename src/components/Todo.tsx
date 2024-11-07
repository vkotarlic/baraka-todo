import { FC } from 'react';
import Todo from '../models/Todo';

interface TodoComponentProps {
  todo: Todo;
}

const TodoComponent: FC<TodoComponentProps> = ({ todo }) => {
  const { date, status, text } = todo;

  return (
    <div className='flex flex-col bg-orange-50 p-4 my-3 rounded-2xl w-1/2'>
      <div className='my-3 flex items-center justify-between'>
        <span className='text-xl'>{text}</span>
        <div className='flex'>
          <button className='p-3 bg-green-400 rounded-xl mx-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='size-6 text-white'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 12.75 6 6 9-13.5' />
            </svg>
          </button>
          <button className='p-3 bg-red-500 rounded-xl mx-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='size-6 text-white'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
              />
            </svg>
          </button>
        </div>
      </div>
      <span className='text-sm text-gray-800'>{date.toLocaleString()}</span>
    </div>
  );
};

export default TodoComponent;
