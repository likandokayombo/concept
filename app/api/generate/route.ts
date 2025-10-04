import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { industry, tone } = await req.json();

  const prompt = `Generate 5 unique brand names and 3 taglines for a ${industry} company. 
  The tone should be ${tone}.`;

  const response = await fetch("https://api.together.xyz/inference", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.TOGETHER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "togethercomputer/llama-2-70b-chat",
      prompt,
      max_tokens: 200,
    }),
  });

  const data = await response.json();

  return NextResponse.json({ suggestions: data.output_text || "No ideas generated." });
}
