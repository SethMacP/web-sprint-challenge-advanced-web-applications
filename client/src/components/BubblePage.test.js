import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import {getColors as mockGetColors } from '../utils/getColors'

jest.mock('../utils/getColors');
const mockColors = {
  data: [
    {
      code: {hex: "#B4975A"},
      color: 'Gold',
      id: 123
    },{
      code: {hex: "#333f42"},
      color: 'Steel Grey',
      id: 234
    },{
      code: {hex: "#c8102E"},
      color: 'Red',
      id: 345
    },{
      code: {hex: "#000000"},
      color: 'Black',
      id: 456
    },
  ]
}



test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  mockGetColors.mockResolvedValueOnce(mockColors)
  const {rerender} = render(<BubblePage />)

  await waitFor(()=>{
    rerender(<BubblePage />);
  });

  
  const colorName = screen.getByText(/steel grey/i)
  expect(colorName).toBeInTheDocument();
})
