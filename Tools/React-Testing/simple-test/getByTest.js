import React from 'react';
import { render, screen } from '@testing-library/react';
import Queries from './Queries/Queries';

describe('getBy', () => {
  it('title is in the document', () => {
    render(<Queries />);

    const title = screen.getByText(/title/i);

    expect(title).toBeInTheDocument();
  });

  it('verify no element', () => {
    render(<Queries />);
  
    try {
      screen.getByText(/subtitle/i);
    } catch (e) {
      console.log('Did not find nonexistent element');
    }
  });
});