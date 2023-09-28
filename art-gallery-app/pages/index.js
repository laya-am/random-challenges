import ArtPieces from "@/components/ArtPIeces";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function HomePage() {
  const { data, isLoading, error } = useSWR("https://example-apis.vercel.app/api/art", fetcher);
  console.log(data);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div>
      <ArtPieces pieces={data} />
    </div>
  );
}
