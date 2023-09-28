import { NextResponse } from "next/server"

// https://explore.whatismybrowser.com/useragents/explore/software_name/googlebot/
const HEADERS: HeadersInit = {
  // Host: "www.example.com",
  Connection: "keep-alive",
  Accept: "text/plain,text/html,*/*",
  "User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
  "Accept-Encoding": "gzip,deflate,br"
  // "user-agent": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
};

async function handleBypass(url: string) {
  try {
    const response = await fetch(url, { headers: HEADERS })
    const body = await response.text();
    return body;
  } catch(e) {
    return new String(e)
  }
}

export async function GET(request: Request) {
  return NextResponse.json({
    ok: true, headers: HEADERS })
}

export async function POST(request: Request) {
  const { url } = await request.json()
  if (!url) return NextResponse.json({ ok: false, msg: "Missing URL" })
  const body = await handleBypass(url);
  console.log(body)
  return NextResponse.json({
    ok: true, body})
}
