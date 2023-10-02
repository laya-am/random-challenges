import React from 'react'
import ArtPieces from '@/components/ArtPieces'

export default function FavoritesPage({artPiecesInfo, setArtPiecesInfo, pieces}) {
    const favPieces = pieces.filter(piece => {
        return artPiecesInfo.find(infoPiece => piece.slug === infoPiece.slug && infoPiece.isFavorite)
    })
  return ( 
    <ArtPieces pieces={favPieces} artPiecesInfo={artPiecesInfo} setArtPiecesInfo={setArtPiecesInfo} />
  )
}
