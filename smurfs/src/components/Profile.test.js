import React from "react";

import { render, screen } from "@testing-library/react";
import Profile from "./Profile"

test("renders Profile without crashing", () => {
  render(<Profile />);
});

test(" have a text that say's welcome to the Smurf Profile page", ()=>{
  render(<Profile />)
  expect(screen.queryByText(/welcome to the Smurf Profile page/i)).toBeInTheDocument()
})

test(" have a text that say's Smurfy Facts", ()=>{
    render(<Profile />)
    expect(screen.getByText(/Smurfy Facts/i)).toBeInTheDocument()
  })

  test(" have an h1 alement", ()=>{
    render(<Profile />)
    expect(screen.getByRole('heading', { name: /welcome to the/i })).toBeInTheDocument()
  })


