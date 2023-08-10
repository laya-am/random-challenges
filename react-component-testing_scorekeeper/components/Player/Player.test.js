import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
    render(<Player name="Ali" score={12} />)
    
    const buttons = screen.getAllByRole("button")
    expect(buttons).toHaveLength(2);
    
    const player = screen.getByText("Ali");
    expect(player).toBeInTheDocument()
    
    const score = screen.getByText(/12/i)
    expect(score).toBeInTheDocument()
});


test("calls callbacks when increasing or decreasing score", async () => {});
const mockDecFunc = jest.fn();
const mockIncFunc = jest.fn();

render(<Player onDecreasePlayerScore={mockDecFunc} onIncreasePlayerScore={mockIncFunc} />)
const decButton = screen.getByRole("button", {name: "-"})
const incButton = screen.getByRole("button", {name: "+"})

const user = userEvent.setup();

await user.click(incButton);
await user.click(decButton);
await user.click(decButton);

expect(mockIncFunc).toHaveBeenCalledTimes(1)
expect(mockDecFunc).toHaveBeenCalledTimes(2)