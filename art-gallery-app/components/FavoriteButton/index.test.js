import { screen, render, } from "@testing-library/react";
import FavoriteButton from ".";
import userEvent from "@testing-library/user-event";

test("Clicking the favorite-button on a non-favorite piece saves it as a favorite", async ()=>{
    render(<FavoriteButton
        artPiecesInfo={[{slug: "piece1", isFavorite: true}]}
        clickedPieceSlug="piece2" />);
    
        // const favButton = screen.getByRole("button", {name: /click to fav it!/i,});
        // const handleClick= jest.fn(); 
        // favButton.setAttribute("onClick", handleClick); //wrong
        // const user = userEvent.setup();

        // await user.click(favButton);
        // expect(handleClick).toHaveBeenCalled();
});

test("Clicking the favorite-button on a favorite piece removes it from favorites", ()=>{
    render(<FavoriteButton />);

});