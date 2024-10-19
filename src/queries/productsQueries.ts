import { Product } from "@/app/api/products/definitions"
import { useMutation, useQuery } from "@tanstack/react-query"

export const useProductsQuery = (
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
        queryKey: ['GET_products' + uniqueKey],
        queryFn: async () => {
            const { skip = 0, take = 10 } = params || {}
            const response = await fetch(`/api/products?skip=${skip}&take=${take}`)
            const data = await response.json()
            return data
        },
        enabled: config?.enabled || true,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    })
}


export const useCreateProduct = () => {
    return useMutation({
        mutationFn: async (data: Product) => {
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
            return await response.json()
        },
        onSuccess: (data) => {
            console.log(data)
        },
        onError: (error) => {
            console.log(error)
        }
    })
}
