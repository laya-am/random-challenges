import React from 'react'
import ArtPiecesDetails from '@/components/ArtPiecesDetails'
import { useRouter } from 'next/router'

export default function artPiecesDetailsPage({pieces}) {
    const router = useRouter();
    const {slug} = router.query;

    const clickedPiece = pieces.find(piece => piece.slug === slug);

  return (
    <div>
      <ArtPiecesDetails
      image={clickedPiece.imageSource}
      title={clickedPiece.name}
      artist={clickedPiece.artist}
      year={clickedPiece.year}
      genre={clickedPiece.genre}
      slug={clickedPiece.slug} />
      <button onClick={() => router.push("/art-pieces")}>Back</button>
    </div>
  )
}
