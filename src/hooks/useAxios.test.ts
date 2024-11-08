import { renderHook } from '@testing-library/react-hooks';
import { Mock, vi } from 'vitest';
import axios from 'axios';
import useAxios from './useAxios';

vi.mock('axios');

describe('useAxios hook', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should set loading during request', async () => {
    const mockData = { message: 'success' };
    (axios.get as Mock).mockResolvedValue({ data: mockData });

    const { result, waitForNextUpdate } = renderHook(() =>
      useAxios<{ message: string }>({
        url: '/test',
        method: 'get'
      })
    );

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
  });

  it('should return data on successful request', async () => {
    const mockData = { message: 'success' };
    (axios.get as Mock).mockResolvedValue({ data: mockData });

    const { result, waitForNextUpdate } = renderHook(() =>
      useAxios<{ message: string }>({
        url: '/test',
        method: 'get'
      })
    );

    expect(result.current.loading).toBe(true);
    expect(result.current.response).toBeNull();
    expect(result.current.error).toBe('');

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.response).toEqual(mockData);
    expect(result.current.error).toBe('');
  });

  it('should handle post request correctly', async () => {
    const mockPostData = { id: 1, text: 'Hello World' };
    (axios.post as Mock).mockResolvedValue({ data: mockPostData });

    const { result, waitForNextUpdate } = renderHook(() =>
      useAxios<{ id: number; text: string }>({
        url: '/test',
        method: 'post',
        body: JSON.stringify({ text: 'Hello World' })
      })
    );

    expect(result.current.loading).toBe(true);
    expect(result.current.response).toBeNull();
    expect(result.current.error).toBe('');

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.response).toEqual(mockPostData);
    expect(result.current.error).toBe('');
  });
});
