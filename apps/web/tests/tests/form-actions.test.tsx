import { render, screen } from '@testing-library/react';
import ExportMenu from '@/components/form-actions/ExportMenu';

test('export buttons render', () => {
  render(<ExportMenu form={{ questions: [{ label: 'Name' }] }} />);
  expect(screen.getByText(/Export JSON/i)).toBeInTheDocument();
  expect(screen.getByText(/Export CSV/i)).toBeInTheDocument();
});