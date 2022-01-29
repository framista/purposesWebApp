import {
  render,
  screen,
  act,
  waitFor,
  fireEvent,
} from '../../../../test-utils';
import userEvent from '@testing-library/user-event';
import { promiseMock } from '../../../../mocks/promiseMock';

import CategoryModal from './CategoryModal.jsx';

const selectedCategory = {
  _id: '1',
  color: '#f7fb32',
  currentWeekPoints: 20,
  description: 'Brushing up english',
  name: 'English',
  points: 50,
  user_id: 'sdad23213',
};

describe('Layout', () => {
  const props = {
    isOpen: true,
    selectedCategory: {},
  };

  it('checks all inputs in category modal', () => {
    render(<CategoryModal {...props} />);
    expect(screen.getByLabelText('Name of category')).toBeInTheDocument();
    expect(screen.getByLabelText('Color')).toBeInTheDocument();
    expect(screen.getByLabelText(/Weekly points/)).toBeInTheDocument();
    expect(screen.getByLabelText('Description')).toBeInTheDocument();
  });

  it('verifies input for category is initialy focus', () => {
    render(<CategoryModal {...props} />);
    const inputCategory = screen.getByLabelText('Name of category');
    expect(inputCategory).toHaveFocus();
  });

  it('verifies input for category is empty initialy', () => {
    render(<CategoryModal {...props} />);
    const inputCategory = screen.getByLabelText('Name of category');
    expect(inputCategory.value).toBe('');
  });

  it('should be submit button', () => {
    render(<CategoryModal {...props} />);
    const button = screen.getByRole('button', { name: 'Submit' });
    expect(button).toBeInTheDocument();
  });

  it('should be cancel button', () => {
    render(<CategoryModal {...props} />);
    const button = screen.getByRole('button', { name: 'Cancel' });
    expect(button).toBeInTheDocument();
  });

  it('should be correct title for modal', () => {
    render(<CategoryModal {...props} />);
    const title = screen.getByRole('heading', { level: 6 });
    expect(title).toHaveTextContent('Add category');
  });

  it('should be rendered modal if isOpen is set to true', async () => {
    render(<CategoryModal {...props} isOpen={true} />);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });

  it('should be not rendered modal if isOpen is set to false', async () => {
    render(<CategoryModal {...props} isOpen={false} />);
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });
});

describe('Edit layout', () => {
  const props = {
    isOpen: true,
    selectedCategory,
  };

  it('should be correctly values in inputs', () => {
    render(<CategoryModal {...props} />);
    expect(screen.getByLabelText('Name of category').value).toBe('English');
    expect(screen.getByLabelText('Color').value).toBe('#f7fb32');
    expect(screen.getByLabelText('Weekly points (50)').value).toBe('50');
    expect(screen.getByLabelText('Description').value).toBe(
      'Brushing up english'
    );
  });

  it('should be correct title for modal', () => {
    render(<CategoryModal {...props} />);
    const title = screen.getByRole('heading', { level: 6 });
    expect(title).toHaveTextContent('Edit category');
  });
});

describe('Interactions', () => {
  const props = {
    isOpen: true,
    selectedCategory: {},
    hideModal: jest.fn(),
    createCategory: jest.fn(promiseMock),
    updateCategory: jest.fn(promiseMock),
  };

  const fillCorrectlyCategoryForm = async () => {
    const categoryInput = screen.getByLabelText('Name of category');
    categoryInput.setSelectionRange(0, categoryInput.value.length);
    userEvent.type(categoryInput, 'Programming');
    await waitFor(() => expect(categoryInput.value).toEqual('Programming'));
    const colorInput = screen.getByLabelText('Color');
    fireEvent.change(colorInput, { target: { value: '#f7fb32' } });
    await waitFor(() => expect(colorInput.value).toEqual('#f7fb32'));
    const pointsInput = screen.getByLabelText(/Weekly points/);
    fireEvent.change(pointsInput, { target: { value: '25' } });
    await waitFor(() => expect(pointsInput.value).toEqual('25'));
    const descriptionInput = screen.getByLabelText('Description');
    descriptionInput.setSelectionRange(0, descriptionInput.value.length);
    userEvent.type(descriptionInput, 'Learn programming by doing task');
    await waitFor(() =>
      expect(descriptionInput.value).toEqual('Learn programming by doing task')
    );
  };

  it('should appear error for category name after clicking submit button', async () => {
    render(<CategoryModal {...props} />);
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    userEvent.click(submitButton);
    const error = await screen.findByText('Name of category is required');
    expect(error).toBeInTheDocument();
  });

  it.each`
    field                 | value
    ${'Name of category'} | ${'Programming'}
    ${'Description'}      | ${'Learn programming by doing task'}
  `(
    'should change input for $field with correctly value',
    async ({ field, value }) => {
      render(<CategoryModal {...props} />);
      const input = screen.getByLabelText(field);
      userEvent.type(input, value);
      await waitFor(() => {
        expect(input.value).toEqual(value);
      });
    }
  );

  it.each`
    field              | value
    ${/Weekly points/} | ${'20'}
    ${'Color'}         | ${'#f7fb32'}
  `(
    'should change input for $field with correctly value',
    async ({ field, value }) => {
      render(<CategoryModal {...props} />);
      const input = screen.getByLabelText(field);
      fireEvent.change(input, { target: { value } });
      await waitFor(() => {
        expect(input.value).toEqual(value);
      });
    }
  );

  it('should be disabled loading after clicking submit button for filled correctly form', async () => {
    render(<CategoryModal {...props} />);
    const input = screen.getByLabelText('Name of category');
    userEvent.type(input, 'Programming');
    await waitFor(() => expect(input.value).toEqual('Programming'));
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    userEvent.click(submitButton);
    await waitFor(() =>
      expect(submitButton).toHaveAttribute('aria-busy', 'true')
    );
  });

  it('should be call createCategory function after clicking submit button for filled correctly form', async () => {
    render(<CategoryModal {...props} />);
    await fillCorrectlyCategoryForm();
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    userEvent.click(submitButton);
    await waitFor(() => {
      expect(props.createCategory.mock.calls.length).toBe(1);
    });
    expect(props.createCategory.mock.calls[0][0]).toEqual({
      categoryName: 'Programming',
      color: '#f7fb32',
      points: '25',
      description: 'Learn programming by doing task',
    });
  });

  it('should be call updateCategory function after clicking submit button for filled correctly form if selected category is correct object', async () => {
    render(<CategoryModal {...props} selectedCategory={selectedCategory} />);
    await fillCorrectlyCategoryForm();
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    userEvent.click(submitButton);
    await waitFor(() => {
      expect(props.updateCategory.mock.calls.length).toBe(1);
    });
    expect(props.updateCategory.mock.calls[0][0]).toEqual({
      categoryName: 'Programming',
      color: '#f7fb32',
      points: '25',
      description: 'Learn programming by doing task',
      _id: selectedCategory._id,
      user_id: selectedCategory.user_id,
      currentWeekPoints: selectedCategory.currentWeekPoints,
    });
  });

  it('should call hideModal after clicking cancel button', async () => {
    render(<CategoryModal {...props} />);
    await fillCorrectlyCategoryForm();
    const cancelButton = screen.getByRole('button', { name: 'Cancel' });
    act(() => userEvent.click(cancelButton));
    await waitFor(() => {
      expect(props.hideModal.mock.calls.length).toBe(1);
    });
  });

  it('should back to initial values for inputs after clicking cancel button', async () => {
    render(<CategoryModal {...props} />);
    await fillCorrectlyCategoryForm();
    const cancelButton = screen.getByRole('button', { name: 'Cancel' });
    act(() => userEvent.click(cancelButton));
    await waitFor(() => {
      expect(screen.getByLabelText('Name of category').value).toBe('');
    });
    expect(screen.getByLabelText('Description').value).toBe('');
    expect(screen.getByLabelText('Color').value).toBe('#d81b60');
    expect(screen.getByLabelText(/Weekly points/).value).toBe('80');
  });
});
