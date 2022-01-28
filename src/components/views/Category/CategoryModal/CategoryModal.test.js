import { render, screen } from '../../../../test-utils';
import userEvent from '@testing-library/user-event';

import CategoryModal from './CategoryModal.jsx';

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

  it('should be not disabled submit button', () => {
    render(<CategoryModal {...props} />);
    const button = screen.getByRole('button', { name: 'Submit' });
    expect(button).not.toBeDisabled();
  });

  it('should be not disabled cancel button', () => {
    render(<CategoryModal {...props} />);
    const button = screen.getByRole('button', { name: 'Cancel' });
    expect(button).not.toBeDisabled();
  });

  it('should be correct title for modal', () => {
    render(<CategoryModal {...props} />);
    const title = screen.getByRole('heading', { level: 6 });
    expect(title).toHaveTextContent('Add category');
  });
});

describe('Edit layout', () => {
  const props = {
    isOpen: true,
    selectedCategory: {
      _id: '1',
      color: '#f7fb32',
      currentWeekPoints: 20,
      description: 'Brushing up english',
      name: 'English',
      points: 50,
      user_id: 'sdad23213',
    },
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
  const apiServiceMock = jest.fn().mockImplementation(() => Promise.resolve());

  const props = {
    isOpen: true,
    selectedCategory: {},
    hideModal: jest.fn(),
    createCategory: apiServiceMock,
  };

  jest.useFakeTimers();

  it('should appear error for category name after clicking submit button', async () => {
    render(<CategoryModal {...props} />);
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    userEvent.click(submitButton);
    const error = await screen.findByText('Name of category is required');
    expect(error).toBeInTheDocument();
  });
});
