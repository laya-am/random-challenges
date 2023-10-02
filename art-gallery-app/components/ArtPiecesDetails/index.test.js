import { screen, render } from "@testing-library/react";
import ArtPiecesDetails from "."; 

test("image, title, artist, year, and genre are displayed", ()=>{
    render(<ArtPiecesDetails
        artist= "Steve Johnson"
        genre= "Abstract Painting"
        image= "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg"
        title= "Orange Red and Green"
        slug= "orange-red-and-green"
        year= "2018"
    />);
    
    const image = screen.getByAltText(/Orange Red and Green/i);
    const title = screen.getByRole("heading", {name: /Orange Red and Green/i});
    const artist = screen.getByRole("heading", {name: /Steve Johnson/i});
    const year = screen.getByText(/2018/i);

    //this is getting both the genre and title because it doesn't look for the exact text. Therefore returns an array of two instead of one specific element:
    const genre = screen.getByText(/abstract Painting/i);

    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(artist).toBeInTheDocument();
    expect(year).toBeInTheDocument();
    expect(genre).toBeInTheDocument();
});

test("The favorite-button is displayed", ()=>{
    render(<ArtPiecesDetails />);

    const favButton = screen.getByRole("button", {name: /click to fav it!/i});
    expect(favButton).toBeInTheDocument();
    });