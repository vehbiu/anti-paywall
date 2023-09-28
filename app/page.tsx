"use client";
import Link from "next/link";
import { useState } from "react"

export default function Home() {
  const [url, setUrl] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full font-mono text-sm gap-10 flex flex-col">
        <div className="lg:flex items-center justify-between">
          <h1>Anti Paywall</h1>
          <p>Easily mitigate headaches by bypassing paywalls</p>
        </div>

        {/* <div className=" max-w-xl"> */}
        <form className="flex flex-row">
          <input className="p-2 border-2 border-slate-700 rounded-lg bg-slate-900" type="text" placeholder="https://www.nytimes.com/2023/09/27/world/asia/north-korea-travis-king-expel.html" onChange={(e) => {
            setUrl(e.target.value)
          }} />
          <Link 
            className="mt-5 lg:mt-0 lg:ml-5 p-2 border-2 border-slate-700 rounded-lg bg-slate-900 text-white" 
            href={`/article?url=${url}`}>
            View Article
          </Link>
          {/* <button className="mt-5 lg:mt-0 lg:ml-5 p-2 border-2 border-slate-700 rounded-lg bg-slate-900 text-white">Get Article</button> */}
        </form>
        {/* </div> */}

        <div className="mt-32">
          <h2 className="underline text-blue-300 text-lg">How it works</h2>
          <p>
            Sites want good SEO to further reach their articles to a large audience. To make article content be scraped by google, news and article websites show the content of the article to googlebot, deterimined by the user agent. What we do is simply spoof the header, and get the content. All it is a simple header change.
          </p>
        </div>

        <div>
          <h2 className="underline text-blue-300 text-lg">How to use</h2>
          <p>
            Simply paste the url of the article you want to read, and we'll do the rest.
          </p>
        </div>

      </div>
    </main>
  )
}
