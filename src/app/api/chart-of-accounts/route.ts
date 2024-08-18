import { NextResponse } from "next/server";
import puc_data from './puc_data';

// const paginate = (array: any[], pageNumber: number, pageSize: number) => {
//   const startIndex = (pageNumber - 1) * pageSize;
//   const endIndex = startIndex + pageSize;
//   return array.slice(startIndex, endIndex);
// }

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  // console.log(request.headers,searchParams);
  if (searchParams.get('page')) {
    const page = parseInt(searchParams.get('page') as string);
    const pageSize = parseInt(searchParams.get('pageSize') as string);
    const paginatedData = puc_data.slice(page * pageSize, (page + 1) * pageSize);
    return NextResponse.json(paginatedData);
  }

  return NextResponse.json(puc_data);
}
