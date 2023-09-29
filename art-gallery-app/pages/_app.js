import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import useSWR from "swr";
import { useState } from "react";
import { useImmer } from 'use-immer';

export default function App({ Component, pageProps }) {
  
  const [artPiecesInfo, setArtPiecesInfo]= useImmer([]);
  console.log(artPiecesInfo);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, isLoading, error } = useSWR("https://example-apis.vercel.app/api/art", fetcher);
  // console.log(data);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;



  return (
      <Layout>
      <GlobalStyle />
      <Component {...pageProps} pieces={data} artPiecesInfo={artPiecesInfo} setArtPiecesInfo={setArtPiecesInfo} />
      </Layout>
  );
}
