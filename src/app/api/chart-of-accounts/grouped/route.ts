import { NextResponse } from "next/server";
import puc_data from "../puc_data";
import { AccountItem } from "../definitions";

const groupByParent = (dataArray: AccountItem[]): (AccountItem | { children: AccountItem[] })[] => {
  const map: any = {};

  dataArray.forEach((item: AccountItem) => {
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
  const filteredData = groupByParent(puc_data as AccountItem[])
  return NextResponse.json(filteredData);
}
