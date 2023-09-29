import Spotlight from ".";
import { screen, render } from "@testing-library/react";

test("renders the image, title, and artist", ()=>{
    render(<Spotlight image="https://example.com" title="Water Lilies" artist="Edward Monet" />);

    const image= screen.getByAltText(/Water Lilies/i);
    expect(image).toBeInTheDocument();
    //  I don't know how to check the src
    // expect(image).toHaveAttribute("src", "https://example.com")

    const artist= screen.getByRole("heading", {name: /Edward Monet/i});
    expect(artist).toBeInTheDocument();
})
test("The favorite-button is displayed", ()=>{
    render(<Spotlight />);

    const favButton = screen.getByRole("button", {name: /click to fav it!/i,});
    expect(favButton).toBeInTheDocument();
    });