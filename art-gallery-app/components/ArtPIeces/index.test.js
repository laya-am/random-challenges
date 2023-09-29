import ArtPieces from ".";
import { screen, render } from "@testing-library/react";

test(" All art pieces are displayed as a list", ()=>{
    render(<ArtPieces pieces={[{name:"the kiss", artist: "Gustav Klimt"}, {name:"Water Lilies", artist: "Edward Monet"}]} />);

    const listitems= screen.getAllByRole("listitem");
    expect(listitems).toHaveLength(2);
});

test("The favorite-button is displayed", ()=>{
    render(<ArtPieces pieces={[{name:"the kiss", artist: "Gustav Klimt"}, {name:"Water Lilies", artist: "Edward Monet"}]} />);
    
    // const listitems= screen.getAllByRole("listitem");
    // const favButton = screen.getByRole("button", {name: /click to fav it!/i,});
    // expect(listitems).toContain(favButton);
    });