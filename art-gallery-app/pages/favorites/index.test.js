import { screen,render } from "@testing-library/react";
import FavoritesPage from ".";

test(" All favorite art pieces are displayed as a list", ()=>{
    render(<FavoritesPage pieces={[
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
     artPiecesInfo={[
        {isFavorite: true,
        slug: "orange-red-and-green"},
        {isFavorite: false,
        slug: "blue-and-red"},
        ]} />)
    const favPieces = screen.getAllByRole("listitem");
    expect(favPieces).toHaveLength(1)
})