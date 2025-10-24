// app/api/users/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";


export async function GET() {
  try {
    const db = await connectDB();
    const [rows] = await db.execute("SELECT * FROM users");
    return NextResponse.json(rows);
  } catch (error) {
    console.error("DB Error:", error);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}
