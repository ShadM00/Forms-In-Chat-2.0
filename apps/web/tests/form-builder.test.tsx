import { render, screen, fireEvent } from '@testing-library/react';
import { FormBuilder } from '@/components/form-builder/FormBuilder';

test('renders prompt input and preview pane', () => {
  render(<FormBuilder />);
  expect(screen.getByPlaceholderText(/describe the form/i)).toBeInTheDocument();
  expect(screen.getByText(/form preview/i)).toBeInTheDocument();
});