import { render, screen } from '@testing-library/react';
import HomePage from '../app/page';

describe('HomePage', () => {
  it('renders headline and rotating suggestion area', () => {
    render(<HomePage />);
    expect(screen.getByText(/Forms that talk/i)).toBeInTheDocument();
    expect(screen.getByText(/AI-powered conversational forms/i)).toBeInTheDocument();
  });
});