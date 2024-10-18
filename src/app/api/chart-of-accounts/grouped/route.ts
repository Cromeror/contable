import { NextResponse } from "next/server";
import puc_data from "../puc_data";
import { PucAccount } from "../../puc/definitions";

const groupByParent = (dataArray: PucAccount[]): (PucAccount | { children: PucAccount[] })[] => {
  const map: any = {};

  dataArray.forEach((item: PucAccount) => {
    map[item.code] = { ...item, children: [] };
  });

  const root: any = [];

  dataArray.forEach(item => {
    if (item.parent === null || item.parent === '') {
      root.push(map[item.code]);
    } else {
      if (map[item.parent]) {
        map[item.parent].children.push(map[item.code]);
      }
    }
  });

  return root;
}

export async function GET(request: Request) {
  const filteredData = groupByParent(puc_data as PucAccount[])
  return NextResponse.json(filteredData);
}
