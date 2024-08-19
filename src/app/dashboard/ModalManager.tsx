import { InvoiceFormModal } from "@/components/InvoiceFormModal"
import { closeModal, MODAL_REGISTERED, modalManagerStore } from "@/redux/modalManagerSlice"
import { useState } from "react"

export const ModalManager = () => {
    const [modalKey, setModalKey] = useState<string | null>(null)

    modalManagerStore.subscribe(() => {
        const state = modalManagerStore.getState()
        setModalKey(state.current)
    })

    const handleClose = () => {
        modalManagerStore.dispatch(closeModal())
    }

    return (
        <>
            <InvoiceFormModal
                open={modalKey === MODAL_REGISTERED.INVOICE_FORM}
                onClose={handleClose}
            />
        </>
    )
}
