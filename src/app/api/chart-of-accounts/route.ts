import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const skip = (parseInt(searchParams.get('skip') as string)) || 0;
  const take = (parseInt(searchParams.get('take') as string)) || 10;
  const puc = await prisma.puc.findMany({ take, skip })
  const bigIntTransformation = JSON.stringify(puc, (key, value) => (typeof value === 'bigint' ? value.toString() : value))

  return NextResponse.json(await JSON.parse(bigIntTransformation));
}
