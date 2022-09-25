import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Meme when Memes are shown", () => {
    render(<App />);
    const linkElement = screen.getByText(/Memes/i);
    expect(linkElement).toBeInTheDocument();
});
