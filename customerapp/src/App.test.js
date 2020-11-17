import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders customer application', () => {
  render(<App />); // a JEST-DOM element for testing on testbed
  const linkElement = screen.getByText(/customer application/i);
  expect(linkElement).toBeInTheDocument();
});

it("renders customers", () => {
  // render(<App />);
  // let btns = screen.getAllByRole("button");
  // screen.debug();
  // expect(btns.length).toBe(6);
  let {container} = render(<App />); // div tag created by rendeing <App />
 
  let btns = container.querySelectorAll(".row");
  expect(btns.length).toBe(6);
});

it("should delete a customer", () => {
    render(<App />);
    let btns = screen.getAllByRole("button");
    fireEvent.click(btns[3]);
  
    btns = screen.getAllByRole("button");
    expect(btns.length).toBe(5);
});

it("should filter customers", () => {
  render(<App />);
  let txtbox = screen.getByPlaceholderText("search by name");
  fireEvent.change(txtbox, {"target": {"value":"Geller"}});
  let btns = screen.getAllByRole("button");
  expect(btns.length).toBe(2);
 
});