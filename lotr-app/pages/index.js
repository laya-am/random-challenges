import Link from "next/link";
import { introduction } from "lib/data";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Lord Of The Rings Website</h1>
      <p>{introduction}</p>
      <Link href="/volumes">Volumes</Link>
    </div>
  );
}
