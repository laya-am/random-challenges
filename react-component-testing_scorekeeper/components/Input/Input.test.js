import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
    render(<Input labelText="enter email" name="email" placeholder="enter email" value="value" required="required" />)
    const label= screen.getByText(/enter email/i)
    const input= screen.getByRole("textbox", {name: /enter email/i})

    expect(input).toHaveAttribute("id", "email")
    expect(input).toHaveAttribute("name", "email")
    expect(input).toHaveAttribute("placeholder", "enter email")
    expect(input).toHaveAttribute("type", "text")
    expect(input).toHaveAttribute("value", "value")
    // expect(label).toHaveAttribute("htmlFor", "email")
});

test("calls callback on every user input", async () => {
    const handleChange = jest.fn();
    render(<Input labelText="enter email" onChange={handleChange} name="email" placeholder="enter email" value="value" />)
    const input= screen.getByRole("textbox", {name: /enter email/i})
    const user = userEvent.setup();
    
    await user.type(input, "abc");
    expect(handleChange).toHaveBeenCalledTimes(3);

});
 