"use client"
import { PucAccount } from "@/app/api/puc/definitions"
import { useMutation, useQuery } from "@tanstack/react-query"

export const useGetPuc = (
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

    return useQuery({
        queryKey: ['GET_PUC' + uniqueKey],
        queryFn: async () => {
            const { skip = 0, take = 10 } = params || {}
            const response = await fetch(`/api/puc?skip=${skip}&take=${take}`)
            const data = await response.json()
            return data
        },
        enabled: config?.enabled || true,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: 3
    })
}

export const useCreatePucMutation = (config?: any) => useMutation<PucAccount>({
    mutationFn: async (data: PucAccount) => {
        const response = await fetch('/api/puc', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        return await response.json()
    },
    ...config
})
