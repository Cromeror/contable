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
            <div className="min-w-[800px] full-width">
                <InvoiceForm />
            </div>
        </Modal>
    )
}