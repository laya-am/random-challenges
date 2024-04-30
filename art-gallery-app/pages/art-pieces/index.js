import React from 'react'
import ArtPieces from '@/components/ArtPieces'

export default function artpiecesPage({pieces, artPiecesInfo, setArtPiecesInfo}) {
  return (
    <ArtPieces pieces={pieces} artPiecesInfo={artPiecesInfo} setArtPiecesInfo={setArtPiecesInfo} />
  )
}
