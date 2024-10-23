import { NextResponse } from "next/server";
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const skip = parseInt(searchParams.get('skip') as string);
  const take = parseInt(searchParams.get('take') as string);
  const search = searchParams.get('search')

  let query: { take?: number, skip?: number, where?: any } = {}
console.log(skip, take, search);

  if (skip) {
    query.skip = skip
  }
  if (take) {
    query.take = take
  }
  if (search) {
    query.where = {
      OR: [
        {
          description: {
            contains: search,
            mode: 'insensitive',
          }
        }
      ]
    }
  }

  const puc = await prisma.puc.findMany(query)

  return NextResponse.json(puc);
}

export async function POST(request: Request) {
  const data = await request.json()
  try {
    const puc = await prisma.puc.create({
      data: {
        id: (new Date()).getTime(),
        ...data,
      }
    })
    return NextResponse.json(puc);
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {
        console.log(
          'There is a unique constraint violation, a new user cannot be created with this email'
        )
      }
    }
    throw e
  }
}

export async function PUT(request: Request) {
  const data = await request.json()
  const puc = await prisma.puc.create({ data })
  return NextResponse.json(puc);
}