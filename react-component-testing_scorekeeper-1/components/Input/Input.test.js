import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
    render(<Input labelText="sampleLabel" name="sampleName" value="sampleValue" placeholder="samplePlaceholder" />);
    const label = screen.getByText(/sampleLabel/i);
    const input = screen.getByRole("textbox", {name: /sampleLabel/i});
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();

    // expect(label).toHaveAttribute("htmlFor", "sampleName");
    expect(input).toHaveAttribute("id", "sampleName");
    expect(input).toHaveAttribute("name", "sampleName");
    expect(input).toHaveAttribute("placeholder", "samplePlaceholder");
    expect(input).toHaveAttribute("value", "sampleValue");
    expect(input).toHaveAttribute("type", "text");
});

test("calls callback on every user input", async () => {
    const handleChange = jest.fn();
    render(<Input labelText="sampleLabel" onChange={handleChange} name="name" />);
    const input = screen.getByLabelText("sampleLabel");

    const user = userEvent.setup();
    await user.type(input, "hi");

    expect(handleChange).toHaveBeenCalledTimes(2);
});
