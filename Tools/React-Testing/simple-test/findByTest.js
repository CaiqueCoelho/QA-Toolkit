// The findBy always returns a promise. And the promise resolves when 
// it finds the element we are searching for.

// It's very useful when the element is not the DOM. But the element 
// appears after a specific event

// The findBy also throws an error when it doesn't find an element like the getBy.

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Queries from '../Queries';

describe('findBy', () => {
  it('paragraph is in the document', async () => {
    render(<Queries />);

    const button = screen.getByRole('button', { name: /show paragraph/i });
    fireEvent.click(button);

    const paragraph = await screen.findByText(/a paragraph/i);
    expect(paragraph).toBeInTheDocument();
  });

  it('verify no other item', async () => {
    render(<Queries />);
  
    const button = screen.getByRole('button', { name: /show paragraph/i });
    fireEvent.click(button);
  
    try {
      await screen.findByText(/another paragraph/i);
    } catch (e) {
      console.log('Did not find nonexistent element');
    }
  });
});