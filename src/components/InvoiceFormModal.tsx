import { Box } from "@mui/material"
import { Modal } from "./Modal"
import { InvoiceForm } from "./InvoiceForm"

type Props = {
    open: boolean,
    onClose: () => void,
}

export const InvoiceFormModal = ({ open, onClose }: Props) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            title="Factura"
        >
            <div className="w-[800px]">
                <InvoiceForm />
            </div>
        </Modal>
    )
}