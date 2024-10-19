import { Prisma } from "@prisma/client";
import { PrismaClient } from "@prisma/client/extension";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const prisma = new PrismaClient();

  const data = await request.json()
  try {
    const voucher = await prisma.voucher.create({
      data: {
        id: (new Date()).getTime(),
        ...data,
      }
    })
    
prisma.$disconnect()
    return NextResponse.json(voucher);
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.log(e.code)
      if (e.code === 'P2002') {
        console.log(
          'There is a unique constraint violation, a new user cannot be created with this email'
        )
      }
    }
    throw e
  }
}
