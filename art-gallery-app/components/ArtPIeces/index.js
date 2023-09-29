import React from 'react'
import ArtPiecesPreview from '../ArtPiecesPreview'
import Link from 'next/link'

export default function ArtPieces({pieces}) {
  return (
    <ul>
        {pieces.map(piece =>{
            return (<Link href={`/art-pieces/${piece.slug}`} key={piece.slug}>
              <li>
                <ArtPiecesPreview image={piece.imageSource} artist={piece.artist} title={piece.name} />
              </li>
            </Link>)
        })}
    </ul>
  )
}
