import db from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  if (!query) return NextResponse.json([], { status: 200 });

  try {
    const result = await db.query(
      `SELECT DISTINCT position FROM job_search WHERE position LIKE ? LIMIT 5`,
      [`%${query}%`]
    );

    const suggestions = (result[0] as any[]).map((row: any) => row.position);
    return NextResponse.json(suggestions, { status: 200 });
  } catch (error: any) {
    console.error("Error in /api/suggestions:", error);
    return NextResponse.json(
      { message: "Database Error", error: error.message },
      { status: 500 }
    );
  }
}
