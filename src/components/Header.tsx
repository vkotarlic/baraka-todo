import Filters from './Filters';
import Input from './Input';

const Header = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleSubmit = () => {
    console.log('click');
  };

  return (
    <div className='p-4 bg-orange-100 rounded-2xl flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold text-gray-800 w-1/2'>
        "Happiness is not a state to arrive at, but a manner of traveling."
      </h1>
      <p className='text-gray-600'>Author: Margaret Lee Runbeck</p>
      <Input onChange={handleChange} onClick={handleSubmit} />
      <Filters />
    </div>
  );
};

export default Header;
