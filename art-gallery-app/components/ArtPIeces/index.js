import React from 'react'
import ArtPiecesPreview from '../ArtPiecesPreview'

export default function ArtPieces({pieces}) {
  return (
    <ul>
        {pieces.map(piece =>{
            return <li key={piece.slug}><ArtPiecesPreview image={piece.imageSource} artist={piece.artist} title={piece.name} /></li>
        })}
    </ul>
  )
}
