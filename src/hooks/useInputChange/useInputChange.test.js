import { renderHook, act } from '@testing-library/react-hooks';
import useInputChange from './useInputChange';

describe('useInputChange', () => {
  const initialState = {
    categoryName: '',
    points: '80',
    color: '#ff1212',
    errors: {},
  };
  it('should initial state be correct', () => {
    const { result } = renderHook(() => useInputChange(initialState));
    const [state] = result.current;
    expect(state).toEqual({
      categoryName: '',
      points: '80',
      color: '#ff1212',
      errors: {},
    });
  });

  describe('validateInput', () => {
    it('should set message error for empty category name after running validate input', async () => {
      const { result, waitFor } = renderHook(() =>
        useInputChange(initialState)
      );
      const [, { validateInput }] = result.current;
      act(() => {
        validateInput({ target: { value: '', name: 'categoryName' } });
      });
      await waitFor(() => {
        const [state] = result.current;
        expect(state.errors.categoryName).toBe('Name of category is required');
      });
    });
    it('should set error to empty string for correct category name after running validate input', async () => {
      const { result, waitFor } = renderHook(() =>
        useInputChange(initialState)
      );
      const [, { validateInput }] = result.current;
      act(() => {
        validateInput({
          target: { value: 'Programming', name: 'categoryName' },
        });
      });
      await waitFor(() => {
        const [state] = result.current;
        expect(state.errors.categoryName).toBe('');
      });
    });
  });

  describe('changeInput', () => {
    it('should set message error for empty category name after running validate input', async () => {
      const { result, waitFor } = renderHook(() =>
        useInputChange(initialState)
      );
      const [, { changeInput }] = result.current;
      act(() => {
        changeInput({ target: { value: '', name: 'categoryName' } });
      });
      await waitFor(() => {
        const [state] = result.current;
        expect(state.errors.categoryName).toBe('Name of category is required');
      });
      expect(result.current[0].categoryName).toBe('');
    });

    it('should set error to empty string for correct category name after running validate input', async () => {
      const { result, waitFor } = renderHook(() =>
        useInputChange(initialState)
      );
      const [, { changeInput }] = result.current;
      act(() => {
        changeInput({
          target: { value: 'Programming', name: 'categoryName' },
        });
      });
      await waitFor(() => {
        const [state] = result.current;
        expect(state.errors.categoryName).toBe('');
      });
      expect(result.current[0].categoryName).toBe('Programming');
    });
  });

  describe('setInitState', () => {
    it('should set init state correctly', async () => {
      const { result, waitFor } = renderHook(() =>
        useInputChange(initialState)
      );
      const [, { changeInput, setInitState }] = result.current;
      act(() =>
        changeInput({ target: { value: 'Programming', name: 'categoryName' } })
      );
      await waitFor(() =>
        expect(result.current[0].categoryName).toBe('Programming')
      );
      act(() => setInitState());
      expect(result.current[0].categoryName).toBe('');
      expect(result.current[0].errors).toEqual({});
    });
  });

  describe('setError', () => {
    it('should set error correctly', () => {
      const errorMessage = 'Incorrect message';
      const { result } = renderHook(() => useInputChange(initialState));
      const [, { setError }] = result.current;
      act(() => setError('categoryName', errorMessage));
      expect(result.current[0].errors.categoryName).toBe(errorMessage);
    });
  });

  describe('updateState', () => {
    it('should update state correctly', () => {
      const updatedState = {
        categoryName: 'Programming',
        points: '23',
        color: '#113453',
        errors: {},
      };
      const { result } = renderHook(() => useInputChange(initialState));
      const [, { updateState }] = result.current;
      act(() => updateState(updatedState));
      expect(result.current[0]).toEqual(updatedState);
    });
  });
});
