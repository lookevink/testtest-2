export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");
  return new Response(`Hello, ${name}!`);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    throw new Error("test", { cause: body });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return new Response(JSON.stringify({ cause: error.cause, message: error.message }), {
        headers: {
          "Content-Type": "application/json",
        }, status: 500,
      });
    }
    return new Response(JSON.stringify(error), {
      headers: {
        "Content-Type": "application/json",
      }, status: 500,
    });
  }
}

