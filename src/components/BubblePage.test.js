import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import ColorList from "./ColorList";
import Bubbles from './Bubbles';


const colorsTest=[
  {
    color: 'aqua',
    code:{
      hex: '00ffff'
    },
    id: '1'
  },
  {
    color: 'lilac',
    code:{
      hex: '9a99dd'
    },
    id: '2'
  }
]

test("Renders BubblePage without errors", () => {
  // Finish this test
  
  render(<BubblePage colorList={colorsTest}/>);
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test

  render(<ColorList colors={colorsTest} />);
  render(<Bubbles colors={colorsTest} />);

  const color1 = await screen.findByText(/aqua/i);
  const color2 = await screen.findByText(/lilac/i);
  const bubble = await screen.findByTestId('circle');

  expect(color1).toBeInTheDocument();
  expect(color2).toBeInTheDocument();
  expect(bubble).toBeInTheDocument();

});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading