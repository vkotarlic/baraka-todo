import { useAtom } from 'jotai';
import { filtersAtom } from '../state/ApplicationState';
import { Field, Radio, RadioGroup } from '@headlessui/react';

const Filters = () => {
  const [activeFilter, setFilter] = useAtom(filtersAtom);
  const filters = ['all', 'completed', 'not-complete'];

  return (
    <RadioGroup
      value={activeFilter}
      onChange={setFilter}
      aria-label='Filters'
      className='w-full flex items-center justify-center gap-x-1'
    >
      {filters.map((filter) => (
        <Field
          key={filter}
          className={`text-xs ${activeFilter === filter ? 'bg-green-200' : 'bg-gray-100'} py-1 px-2 rounded-lg cursor-pointer`}
        >
          <Radio value={filter}>{filter.toUpperCase()}</Radio>
        </Field>
      ))}
    </RadioGroup>
  );
};

export default Filters;
