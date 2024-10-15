"use client"
import { useQuery } from "@tanstack/react-query"

export const usePucQuery = (
    params?: {
        skip?: number,
        take?: number,
    },
    config?: { enabled?: boolean }
) => {
    const uniqueKey = Object.keys(params || {})
        // @ts-ignore
        .map((key: string) => `${key}_${params[key]}`)
        .join('_')
    console.log(uniqueKey);

    return useQuery({
        queryKey: ['GET_PUC' + uniqueKey],
        queryFn: async () => {
            const { skip = 0, take = 10 } = params || {}
            const response = await fetch(`/api/chart-of-accounts?skip=${skip}&take=${take}`)
            const data = await response.json()
            return data
        },
        enabled: config?.enabled || true,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    })
}
