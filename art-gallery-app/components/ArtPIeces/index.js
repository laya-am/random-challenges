import React from 'react'
import ArtPiecesPreview from '../ArtPiecesPreview'
import Link from 'next/link'
import FavoriteButton from '../FavoriteButton'

export default function ArtPieces({pieces, artPiecesInfo, setArtPiecesInfo}) {
  return (
    <ul>
        {pieces.map(piece =>{
            return (
            <li key={piece.slug}>
              <Link href={`/art-pieces/${piece.slug}`}>
                <ArtPiecesPreview image={piece.imageSource} artist={piece.artist} title={piece.name} />
              </Link>
              <FavoriteButton clickedPieceSlug={piece.slug} artPiecesInfo={artPiecesInfo} setArtPiecesInfo={setArtPiecesInfo} />
            </li>)
        })}
    </ul>
  )
}
