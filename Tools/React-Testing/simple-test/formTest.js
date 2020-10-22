import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { userEvent }from '@testing-library/user-event'
import Form from './Form';

const nameInput = screen.getByLabelText(/name/i);
const ageInput = screen.getByLabelText(/age/i);
const birthdayInput = screen.getByLabelText(/birthday/i);

const codingCheckbox = screen.getByLabelText(/coding/i);
const readingCheckbox = screen.getByLabelText(/reading/i);
const writingCheckbox = screen.getByLabelText(/writing/i);

const osRadio = screen.getByLabelText(/mac/i);

const favCitySelect = screen.getByTestId(/favcity/i);
const tokyoOption = screen.getByText(/tokyo/i);

const countriesMultiSelect = screen.getByTestId(/countries/i);
const japanOption = screen.getByText(/japan/i);
const germanyOption = screen.getByText(/germany/i);
const netherlandsOption = screen.getByText(/netherlands/i);

const button = screen.getByRole('button', { name: /submit/i });

describe('test form', () => {
  it('select, input text and check the boxes', async () => {
    render(<Form />);

    // Text, number, and date inputs
    userEvent.type(nameInput, 'Caíque');
    userEvent.type(ageInput, '24');
    userEvent.type(birthdayInput, '15/02/1996')

    // Checkboxes
    userEvent.click(codingCheckbox);
    userEvent.click(readingCheckbox);
    userEvent.click(writingCheckbox);

    // Radio buttons
    userEvent.click(osRadio);

    // Selects
    userEvent.selectOptions(favCitySelect, [tokyoOption]);

    // Multi-selects
    userEvent.selectOptions(countriesMultiSelect, [japanOption, germanyOption, netherlandsOption]);

    // Submit button
    userEvent.click(button);

  });
});