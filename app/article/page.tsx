"use client";
import { getArticle } from "@/utils/api";
import { useEffect, useState } from "react";

export default function Article() {
  const [data, setData] = useState<any>(null);
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    setUrl(new URLSearchParams(window.location.search).get("url"));
    // console.log(url)
    if (!url) return setData("No URL provided");
    getArticle(url).then((data) => {
      // console.log(data);
      setData(data);
    });
  }, [url]);
  return (
    <main>
      <div className="flex flex-row justify-between flex-wrap m-3 font-mono">
        {data ? (
          data.ok ? (
            <p className="text-green-400">Loaded!</p>
          ) : (
            <p className="text-red-400">Error!</p>
          )
        ) : (
          <p className="text-yellow-400">Loading...</p>
        )}
        <p className="text-gray-400">{url}</p>
      </div>
      <iframe
        srcDoc={data?.body}
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        className="w-full h-screen bg-white"
      />
    </main>
  );
  
};