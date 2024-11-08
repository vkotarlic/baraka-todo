import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import Filters from './Filters';
import { useAtom } from 'jotai';

vi.mock('jotai', () => ({
  useAtom: vi.fn(),
  atom: vi.fn()
}));

describe('Filters component test', () => {
  const mockSetFilter = vi.fn();
  const filters = ['all', 'completed', 'not-complete'];

  beforeEach(() => {
    (useAtom as Mock).mockReturnValue(['all', mockSetFilter]);
  });

  it('renders all filter options', async () => {
    render(<Filters />);
    for (const filter of filters) {
      expect(await screen.findByText(filter.toUpperCase())).toBeInTheDocument();
    }
  });

  it('sets the correct filter as active based on activeFilter state', () => {
    (useAtom as Mock).mockReturnValue(['completed', mockSetFilter]);
    render(<Filters />);

    const completedOption = screen.getByText('COMPLETED');
    const attribute = completedOption.getAttribute('aria-checked');

    expect(attribute).toBe('true');
  });

  it('changes the filter when a different option is selected', () => {
    render(<Filters />);

    const notCompleteOption = screen.getByText('NOT-COMPLETE');
    fireEvent.click(notCompleteOption);

    expect(mockSetFilter).toHaveBeenCalledWith('not-complete');
  });
});
