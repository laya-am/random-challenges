import Link from "next/link"
import { volumes } from "@/lib/data"

export default function Volumes() {

  return (
    <div>
        <h2>Volumes</h2>
        <ul>
            {volumes.map(volume => {
            return <li key={volume.slug}>
                <Link href={`volumes/${volume.slug}`}>{volume.title}</Link>
                </li>
            }
            )}
        </ul>
    </div>
  )
}
