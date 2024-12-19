const buildQuery = (params: any = {}): string => {
  const query =
    "?" +
    Object.keys(params)
      .map((key) =>
        params[key] || params[key] >= -1 ? `${key}=${params[key]}` : ""
      )
      .join("&")
      .replace(/&$/, "");
  return query === "?" ? "" : query;
};

export type QueryPucParams = {
  skip?: number;
  take?: number;
  search?: string;
  filterByLength?: boolean;
};

export const getPucData = async (params?: QueryPucParams) => {
  const response = await fetch(`/api/puc${buildQuery(params)}`);
  const data = await response.json();

  if (params?.filterByLength) {
    return data.filter((item: any) => item.code.length >= 4);
  }

  return data;
};
