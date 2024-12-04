export async function GET(request: Request) {
  console.log("calling hello?")
  return new Response('Hello, Next.js!')
}
