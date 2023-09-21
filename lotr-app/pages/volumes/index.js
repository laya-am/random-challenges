import Link from "next/link"

export default function Volumes() {
  return (
    <div>
        <h2>Volumes</h2>
        <ul>
            <li>
                <Link href="/volumes/the-fellowship-of-the-ring">theFellowshipOfTheRing</Link>
            </li>
            <li>
                <Link href="/volumes/the-two-towers">theTwoTowers</Link>
            </li>
            <li>
                <Link href="/volumes/the-return-of-the-king">theReturnOfTheKing</Link>
            </li>
        </ul>
    </div>
  )
}
