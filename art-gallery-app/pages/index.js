import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({pieces}) {
  const randomIndex = Math.floor(Math.random() * pieces.length);
  const randomPiece = pieces[randomIndex];
  return (
    <div>
      <Spotlight image={randomPiece.imageSource} artist={randomPiece.artist} title={randomPiece.name} />
    </div>
  );
}
