import React, { useState } from 'react'

export default function CommentForm({artPiecesInfo, setArtPiecesInfo, commentedPieceSlug}) {
    function handleSubmitComment(e){
        e.preventDefault();
        const newComment= e.target.elements.comment.value;
        console.log("newComment: ",newComment);

        const commentedPieceIndex = artPiecesInfo.findIndex(piece => piece.slug === commentedPieceSlug);
        commentedPieceIndex !== -1 ?
        //better to add id for each comment and save as an object
        setArtPiecesInfo(draft => {draft[commentedPieceIndex].comments= [...draft[commentedPieceIndex].comments, newComment]})
        : setArtPiecesInfo(draft => [...draft, {slug: commentedPieceSlug, comments: [newComment]}]);

        e.target.reset();
    }
  return (
    <form  onSubmit={handleSubmitComment}>
        <label htmlFor='comment'>Leave a comment:</label>
        <textarea type="text" name='comment' id='comment' required/>
        <button type="submit">submit</button>
    </form>
  )
}
