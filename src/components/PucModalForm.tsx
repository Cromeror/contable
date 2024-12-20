import { Button,  IconButton, Tooltip } from "@mui/material"
import { AccountingForm } from "./AccountingForm"
import { Modal } from "./Modal"
import { useState } from "react"
import { HelpOutline } from "@mui/icons-material"

type Props = {
    open: boolean,
    onClose: () => void,
    defaultValue?: any,
}

export const PucModalForm = ({ open, onClose, defaultValue }: Props) => {
    const [openTooltip, setOpenTooltip] = useState(false);

    return (
        <Modal
            open={open}
            onClose={onClose}
            title={defaultValue ? "Editar Cuenta" : "Registrar Cuenta"}
        >
            <Tooltip title="Explicacion....." arrow>
                <IconButton>
                    <HelpOutline />
                </IconButton>
            </Tooltip>
            <AccountingForm controls={
                <Button variant="outlined" onClick={onClose}>
                    Cancelar
                </Button>} />
        </Modal>
    )
}
