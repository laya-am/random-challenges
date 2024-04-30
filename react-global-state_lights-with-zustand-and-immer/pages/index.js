import { useLightsStore } from "@/stores/useLightsStore";
import Link from "../components/Link";

export default function HomePage() {
  const numOfSwitchedOnLights = useLightsStore(state => state.numOfSwitchedOnLights)

  return (
    <div>
      <h1>Home</h1>
      <p>{numOfSwitchedOnLights()} light(s) are on.</p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
