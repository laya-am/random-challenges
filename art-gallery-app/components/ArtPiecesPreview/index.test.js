import ArtPiecesPreview from ".";
import { screen, render } from "@testing-library/react";

test("renders the image, title, and artist", ()=>{
    render(<ArtPiecesPreview image="https://example.com" title="Water Lilies" artist="Edward Monet" />);

    const heading= screen.getByRole("heading", {name: /Water Lilies/i});
    expect(heading).toBeInTheDocument();

    const image= screen.getByAltText(/Water Lilies/i);
    expect(image).toBeInTheDocument();
    //  I don't know how to check the src
    // expect(image).toHaveAttribute("src", "https://example.com")

    const artist= screen.getByRole("heading", {name: /Edward Monet/i});
    expect(artist).toBeInTheDocument();

})