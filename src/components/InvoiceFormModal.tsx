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
            <div className="xs:min-w-[75vw] sm:min-w-[75vw] md:min-w-[75vw] lg:min-w-[77vw] xl:min-w-[77vw]">
                <InvoiceForm />
            </div>
        </Modal>
    )
}