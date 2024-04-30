import React from 'react'

export default function Comments({artPiecesInfo, commentedPieceSlug}) {
    const commentedPiece = artPiecesInfo.find(piece => piece.slug === commentedPieceSlug);
    console.log({commentedPiece});
    return (
        <ul>
            {commentedPiece && commentedPiece.comments.map(comment =>{
                //use id for the key
                return <li key={comment}>{comment}</li>
            })}
    </ul>
  )
}
