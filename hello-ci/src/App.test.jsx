/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import App from './App';

test('App component renders the title "Hello CI/CD!"', () => {
  render(<App />);

  const titleShown = screen.getByText('Hello CI/CD!');

  expect(titleShown).toBeDefined();
});

test('App component renders the text "Let`s test some GitHub Actions"', () => {
  render(<App />);

  const textShown = screen.getByText("Let's test some GitHub Actions");

  expect(textShown).toBeDefined();
});
