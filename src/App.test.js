import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

//Testaus toimii, -Niina
test('renderöi HighScore linkin', () => {
  const { getByText } = render(<App />);
  const linkki = getByText(/HighScore/i);
  expect(linkki).toBeInTheDocument();
});

test('renderoi aloituslomakkeen', () => {
  const { getByPlaceholderText } = render(<App />);
  const button = getByPlaceholderText(/nimimerkki/i);
  expect(button).toBeInTheDocument();
});
