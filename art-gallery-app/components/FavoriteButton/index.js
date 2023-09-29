import React from 'react'

export default function FavoriteButton({artPiecesInfo, setArtPiecesInfo, clickedPieceSlug}) {

    function handleClick(){
        const favoritedPieceIndex = artPiecesInfo.findIndex(piece => piece.slug ===clickedPieceSlug);
        favoritedPieceIndex !== -1 ? setArtPiecesInfo(draft => {draft[favoritedPieceIndex].isFavorite= !draft[favoritedPieceIndex].isFavorite})
        : setArtPiecesInfo(draft => [...draft, {slug: clickedPieceSlug, isFavorite: true}]);
    }

  return (
    <button onClick={handleClick}>click to fav it!</button>
  )
}
