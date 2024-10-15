"use client"
import { useQuery } from "@tanstack/react-query"

export const pucQuery = () => {

    return useQuery({
        queryKey: ['GET_PUC'],
        queryFn: async () => {
            const response = await fetch('/api/chart-of-accounts')
            const data = await response.json()
            return data
        },
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    })
}
