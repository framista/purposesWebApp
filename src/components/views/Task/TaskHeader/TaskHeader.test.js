import userEvent from '@testing-library/user-event';
import { render, screen, act, waitFor } from '../../../../test-utils';
import { allCategories } from './TaskHeader.mocks';
import TaskHeader from './TaskHeader';
import { TASK_MODAL } from '../../../../constants/modalTypes';

describe('Layout', () => {
  it('should be title Tasks', () => {
    render(<TaskHeader />);
    const title = screen.getByRole('heading', { level: 4 });
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Tasks');
  });
  it('should be search input with value from props', () => {
    render(<TaskHeader searchValue="Pro" />);
    const input = screen.getByTestId('searchInput');
    expect(input.value).toBe('Pro');
  });
  it('should be category filter', () => {
    render(<TaskHeader />);
    const categoryFilter = screen.getByText('Category');
    expect(categoryFilter).toBeInTheDocument();
    expect(screen.queryByTestId('multiSelect-content')).not.toBeInTheDocument();
  });
  it('should be new task button', () => {
    render(<TaskHeader />);
    expect(
      screen.getByRole('button', { name: 'New Task' })
    ).toBeInTheDocument();
  });
});

describe('Interactions with search input', () => {
  it('should run changeSearchValueForTask after changing search input value', async () => {
    const searchWord = 'Programming';
    const props = { changeSearchValueForTask: jest.fn(), searchValue: '' };
    render(<TaskHeader {...props} />);
    const input = screen.getByTestId('searchInput');
    userEvent.type(input, searchWord);
    await waitFor(() =>
      expect(props.changeSearchValueForTask.mock.calls.length).toBe(
        searchWord.length
      )
    );
  });
});

describe('Interactions with category filter', () => {
  const idsAllCategories = Object.keys(allCategories);
  const selectedCategories = [idsAllCategories[0], idsAllCategories[1]];
  const initialState = {
    categories: {
      allCategories,
      selectedCategories,
      searchCategory: '',
    },
  };
  it('should be content of category filter available after clicking on category filter', async () => {
    render(<TaskHeader />, { initialState });
    const categoryFilter = screen.getByText('Category');
    act(() => userEvent.click(categoryFilter));
    await screen.findByTestId('multiSelect-content');
    expect(screen.getByText('all')).toBeInTheDocument();
    expect(screen.getByText('none')).toBeInTheDocument();
    const inputs = screen.getAllByTestId('searchInput');
    expect(inputs.length).toBe(2);
    Object.values(allCategories).forEach((category) =>
      expect(screen.getByLabelText(category.name)).toBeInTheDocument()
    );
    expect(
      screen.getByLabelText(allCategories[selectedCategories[0]].name)
    ).toBeChecked();
    expect(
      screen.getByLabelText(allCategories[idsAllCategories[2]].name)
    ).not.toBeChecked();
  });
});

describe('Interactions with new task button', () => {
  it('should call show modal function after clicking on button', () => {
    const showModal = jest.fn();
    render(<TaskHeader showModal={showModal} />);
    const button = screen.getByRole('button', { name: 'New Task' });
    userEvent.click(button);
    expect(showModal.mock.calls.length).toBe(1);
    expect(showModal.mock.calls[0][0]).toBe(TASK_MODAL);
  });
});
