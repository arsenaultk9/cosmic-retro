import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('Create React App v4-beta example with TypeScript');
  expect(linkElement).toBeInTheDocument();
});
