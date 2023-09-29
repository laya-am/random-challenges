import { screen, render } from "@testing-library/react";
import ArtPiecesDetails from ".";

test("image, title, artist, year, and genre are displayed", ()=>{
    render(<ArtPiecesDetails  title="painting" artist="artist" year="1980" genre="abstract" />);
    const image = screen.getByAltText(/painting/i);
    const title = screen.getByRole("heading", {name: /painting/i});
    const artist = screen.getByRole("heading", {name: /artist/i});
    const year = screen.getByText(/1980/i);
    const genre = screen.getByText(/abstract/i);

    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(artist).toBeInTheDocument();
    expect(year).toBeInTheDocument();
    expect(genre).toBeInTheDocument();
})