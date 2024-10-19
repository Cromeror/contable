import { useMutation } from "@tanstack/react-query"

export const useCreateVoucher = () => {
    return useMutation({
        mutationFn: async (data: any) => {
            const response = await fetch('/api/voucher', {
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
