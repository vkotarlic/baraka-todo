import { render, screen } from '@testing-library/react';
import { Mock, vi } from 'vitest';
import TodoList from './TodoList';
import { useAtom, useSetAtom } from 'jotai';

// Mock the necessary atoms and components
vi.mock('jotai', () => ({
  useAtom: vi.fn(),
  useSetAtom: vi.fn(),
  atom: vi.fn()
}));

describe('TodoList', () => {
  it('renders the list of todos', () => {
    const mockTodos = [
      { id: '1', text: 'First Todo', status: false, date: new Date() },
      { id: '2', text: 'Second Todo', status: false, date: new Date() }
    ];

    const setTodos = vi.fn();
    (useAtom as Mock).mockReturnValue([mockTodos]);
    (useSetAtom as Mock).mockReturnValue(setTodos);

    render(<TodoList />);

    mockTodos.forEach((todo) => {
      expect(screen.getByText(todo.text)).toBeInTheDocument();
    });
  });
});
