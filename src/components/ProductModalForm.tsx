import { Button } from "@mui/material"
import { Modal } from "./Modal"
import { ProductForm } from "./ProductForm"

type Props = {
    open: boolean,
    onClose: () => void,
    defaultValue?: any,
}

export const ProductModalForm = ({ open, onClose, defaultValue }: Props) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            title={defaultValue ? "Editar Cuenta" : "Registrar Cuenta"}
        >
            <ProductForm controls={
                <Button variant="outlined" onClick={onClose}>
                    Cancelar
                </Button>}
                onSuccess={() => onClose()}
            />
        </Modal>
    )
}
