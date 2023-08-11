import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },

}));


test("renders two input fields and a button", () => {
  render(<GameForm/>)
  const inputFields = screen.getAllByRole("textbox");
  expect(inputFields).toHaveLength(2);

  const button= screen.getByRole("button", {name: /Create game/i})
  expect(button).toBeInTheDocument()
});


test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm/>)

  const form = screen.getByRole("form", {name: /create a new game/i});
  expect(form).toBeInTheDocument();
});


test("submits the correct form data when every field is filled out", async () => {
  const mockFunc = jest.fn();
  render(<GameForm onCreateGame={mockFunc}/>)
  const user = userEvent.setup();

  const nameOfGame = screen.getByRole("textbox", { name: "Name of game" });
  const playerNames = screen.getByRole("textbox", { name: /player names/i });
  const button = screen.getByRole("button");

  await user.type(nameOfGame, "chess");
  await user.type(playerNames, "Ali, Reza");
  await user.click(button);

  expect(mockFunc).toHaveBeenCalledWith({nameOfGame: "chess", playerNames: ["Ali", "Reza"]})
});


test("does not submit form if one input field is left empty", async () => {
  const mockFunc = jest.fn();
  render(<GameForm onCreateGame={mockFunc}/>)
  const user = userEvent.setup();

  const nameOfGame = screen.getByRole("textbox", { name: "Name of game" });
  const button = screen.getByRole("button");

  await user.type(nameOfGame, "chess");
  await user.click(button);

  expect(mockFunc).not.toHaveBeenCalled();
});
