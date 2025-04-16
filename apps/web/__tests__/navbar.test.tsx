import { render, screen } from '@testing-library/react';
import Navbar from '../components/shared/navbar';

describe('Navbar', () => {
  it('renders brand name and nav links', () => {
    render(<Navbar />);
    expect(screen.getByText(/FormsInChat/i)).toBeInTheDocument();
    expect(screen.getByText(/Features/i)).toBeInTheDocument();
  });
});