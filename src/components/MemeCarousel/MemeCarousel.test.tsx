import React from "react";
import { getByTestId, render, screen } from "@testing-library/react";
import MemeCarousel from "./MemeCarousel";

test("should render a carousel", () => {
    render(<MemeCarousel />);
});
