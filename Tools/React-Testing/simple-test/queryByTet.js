// The main difference is that the queryBy doesn't throw an error 
// if it doesn't find a given element in the DOM

import React from 'react';
import { render, screen } from '@testing-library/react';
import Queries from '../Queries';

describe('queryBy', () => {
  it('title is in the document', () => {
    render(<Queries />);

    const title = screen.queryByText(/title/i);

    expect(title).toBeInTheDocument();
  });

  it('verify no element', () => {
    render(<Queries />);
  
    const subtitle = screen.queryByText(/subtitle/i);
  
    expect(subtitle).not.toBeInTheDocument();
  });
});