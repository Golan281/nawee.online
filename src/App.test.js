// import { render, screen ,mount } from '@testing-library/react';
import jest from "@testing-library/jest-dom";
import { Helmet } from 'react-helmet-async';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

jest.it('should render metadata', () => {
  const wrapper = jest.mount(<Metadata/>);
  // this will return all the markup assigned to helmet
  // which will get rendered inside head.
  const helmet = Helmet.peek();
  expect(helmet.title).to.equal("title");
});