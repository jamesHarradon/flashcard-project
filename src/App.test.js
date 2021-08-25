import { render, screen } from "@testing-library/react";
import App from "../src/app/App";

//render enables you to use methods like getByText and getByLabelText

describe('App home page', () => {

  test("renders Topic link", () => {
    render(<App />);
    const linkElement = screen.getByText(/Topics/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test("renders Quizzes link", () => {
    render(<App />);
    const linkElement = screen.getByText(/Quizzes/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test("renders New Quiz link", () => {
    render(<App />);
    const linkElement = screen.getByText(/New Quiz/i);
    expect(linkElement).toBeInTheDocument();
  });

})

