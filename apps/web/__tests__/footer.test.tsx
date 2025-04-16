import { render, screen } from '@testing-library/react';
import Footer from '../components/shared/footer';

describe('Footer', () => {
  it('renders footer columns and links', () => {
    render(<Footer />);
    expect(screen.getByText(/Product/i)).toBeInTheDocument();
    expect(screen.getByText(/Legal/i)).toBeInTheDocument();
  });
});