import { FC } from 'react';

interface InputProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: () => void;
}

const Input: FC<InputProps> = ({ onChange, onClick }) => {
  return (
    <div className='flex items-center justify-center p-4'>
      <input
        className='rounded-lg p-2 mx-2'
        type='text'
        placeholder='Go for groceries...'
        onChange={onChange}
      />
      <button className='py-2 px-4 bg-orange-500 rounded-lg' onClick={onClick}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-6 text-white'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5'
          />
        </svg>
      </button>
    </div>
  );
};

export default Input;
