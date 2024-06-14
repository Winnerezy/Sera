import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const anime = searchParams.get('anime');
  const char = searchParams.get('char');
 
  try {
    if (!anime || !char) throw new Error
    await sql`INSERT INTO Anime (Anime, Character) VALUES (${anime}, ${char});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const result = await sql`SELECT * FROM Anime;`;
  return NextResponse.json({ result }, { status: 200 });
}