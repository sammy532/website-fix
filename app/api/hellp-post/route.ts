export const dynamic = 'force-static'

import { NextResponse } from 'next/server'


const getCorsHeaders = (origin: string) => {
  // Default options
  const headers = {
    "Access-Control-Allow-Methods": `${process.env.ALLOWED_METHODS}`,
    "Access-Control-Allow-Headers": `${process.env.ALLOWED_HEADERS}`,
    "Access-Control-Allow-Origin": `${process.env.DOMAIN_URL}`,
  };

  // If no allowed origin is set to default server origin
  if (!process.env.ALLOWED_ORIGIN || !origin) return headers;

  // If allowed origin is set, check if origin is in allowed origins
  const allowedOrigins = process.env.ALLOWED_ORIGIN.split(",");

  // Validate server origin
  if (allowedOrigins.includes("*")) {
    headers["Access-Control-Allow-Origin"] = "*";
  } else if (allowedOrigins.includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }

  // Return result
  return headers;
};

// export const OPTIONS = async (request: NextRequest) => {
//   // Return Response
//   return NextResponse.json(
//     {},
//     {
//       status: 200,
//       headers: getCorsHeaders(request.headers.get("origin") || ""),
//     }
//   );
// };


export async function GET(request: Request) {
    // const { email, name, message, android, ios } = await request.json();
  // return Response.json({ message: 'Hello - GET' });
  // return new Response('PLS JUST WORK')
  return new Response('Hello, Next.js!')
  // return NextResponse.json({ message: 'Email sent' }, {
  //   status: 200,
  //   headers: getCorsHeaders(request.headers.get("origin") || ""),
  // });
}
