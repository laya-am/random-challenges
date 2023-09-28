import React from 'react'
import ArtPiecesPreview from '../ArtPiecesPreview'
import Spotlight from '../Spotlight'

export default function ArtPieces({pieces}) {
    const randomIndex = Math.floor(Math.random() * pieces.length);
    const randomPiece = pieces[randomIndex];

  return (
    <div>
    <Spotlight image={randomPiece.imageSource} artist={randomPiece.artist} title={randomPiece.title}/>
    <ul>
        {pieces.map(piece =>{
            return <li key={piece.slug}><ArtPiecesPreview image={piece.imageSource} artist={piece.artist} title={piece.name} /></li>
        })}
    </ul>
    </div>
  )
}
