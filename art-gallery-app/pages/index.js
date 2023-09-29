import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({pieces, artPiecesInfo, setArtPiecesInfo}) {
  const randomIndex = Math.floor(Math.random() * pieces.length);
  const randomPiece = pieces[randomIndex];
  return (
    <div>
      <Spotlight
      image={randomPiece.imageSource}
      artist={randomPiece.artist}
      title={randomPiece.name}
      slug={randomPiece.slug}
      artPiecesInfo={artPiecesInfo}
      setArtPiecesInfo={setArtPiecesInfo} />
    </div>
  );
}
