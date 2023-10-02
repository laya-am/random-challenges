import ArtPieces from "."; 
import { screen, render } from "@testing-library/react";

test(" All art pieces are displayed as a list", ()=>{
    render(<ArtPieces pieces={[
        {
        artist: "Steve Johnson",
        genre: "Abstract Painting",
        imageSource: "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
        name: "Orange Red and Green Abstract Painting",
        slug: "orange-red-and-green",
        year: "2018"},
        {
        artist: "Jung-Hua Lui",
        genre: "Abstract Painting",
        imageSource: "https://example-apis.vercel.app/assets/art/blue-and-red.jpg",
        name: "Blue and Red",
        slug: "blue-and-red",
        year: "2019"}
    ]}
    />);

    const listitems= screen.getAllByRole("listitem");
    expect(listitems).toHaveLength(2);
});

test("The favorite-button is displayed", ()=>{
    // render(<ArtPieces pieces={[{name:"the kiss", artist: "Gustav Klimt"}, {name:"Water Lilies", artist: "Edward Monet"}]} />);
    
    // const listitems= screen.getAllByRole("listitem");
    // const favButton = screen.getByRole("button", {name: /click to fav it!/i});

    //how to check EACH item has a fav button? clearly this line is wrong:
    // expect(listitems).toContain(favButton);
    });