export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");
  return new Response(`Hello, ${name}!`);
}

export async function POST(request: Request) {
  const body = await request.json();
  return new Response(JSON.stringify(body), {
    headers: {
      "Content-Type": "application/json",
    }, status: 500,
  });
}

