import { atom } from 'jotai';
import Todo from '../models/Todo';
import { atomWithStorage } from 'jotai/utils';

export const filtersAtom = atom('all');
export const todosAtom = atomWithStorage<Todo[]>('todos', []);

export const filteredAtom = atom<Todo[]>((get) => {
  const filter = get(filtersAtom);
  const todos = get(todosAtom);

  if (filter === 'all') {
    return todos;
  } else if (filter === 'completed') {
    return todos.filter((atom) => atom.status);
  } else {
    return todos.filter((atom) => !atom.status);
  }
});
