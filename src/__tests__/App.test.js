import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    // Arrange
    render(<App />);
    // Act
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
      });
    // Assert
    expect(topLevelHeading).toBeInTheDocument();
  });
  test("displays an image of yourself with alt text", () => {
    //Arrange
    render(<App />)
    //Act
    const image = screen.getByAltText(/stephen bowen/i);
    // Assert
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src","https://media.licdn.com/dms/image/C4D03AQHGTb9U3mwpCQ/profile-displayphoto-shrink_800_800/0/1604401557250?e=1720656000&v=beta&t=jjEyuLMN1dRzwgXDhkZjakgowXaz-PyijQa0HW9JpuM")
  })
  test("displays a second-level heading with the text 'About Me'", () => {
    // Arrange
    render(<App />);
  
    // Act
    const middleLevelHeading = screen.getByRole("heading", {
      name: /about me/i,
      exact: false,
      level: 2,
    });
  
    // Assert
    expect(middleLevelHeading).toBeInTheDocument();
  });
  test("displays a paragraph for your biography", () => {
    // Arrange
    render(<App />);
  
    // Act
    const bioParagraph = screen.getByText(/biography/i);
  
    // Assert
    expect(bioParagraph).toBeInTheDocument();
  });
  test("displays a link to your GitHub page", () => {
    // Arrange
    render(<App />);
  
    // Act
    const githubLink = screen.getByRole("link", {
      name: /github/i,
      exact: false,
    });
  
    // Assert
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/bowenSteve");
  });
  test("displays a link to your Linkedin page", () => {
    // Arrange
    render(<App />);
  
    // Act
    const githubLink = screen.getByRole("link", {
      name: /linkedin/i,
      exact: false,
    });
  
    // Assert
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://www.linkedin.com/in/steven-bowen-65a69a133/");
  });