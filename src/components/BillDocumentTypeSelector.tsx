

enum BILL_DOCUMENT_TYPES {
    JOURNAL_ENTRY_SALES,
    JOURNAL_ENTRY_PURCHACES,
    CASH_RECEIPT,
    PAYMENT_VOUCHER,
    ADJUSTMENT_ENTRY
}

const BILL_DOCUMENT_TYPES_OPTIONS = Object.freeze(
    [
        {
            value: BILL_DOCUMENT_TYPES.JOURNAL_ENTRY_SALES,
            label: "Notas contables - Venta",
        },
        {
            value: BILL_DOCUMENT_TYPES.JOURNAL_ENTRY_PURCHACES,
            label: "Notas contables - Compra/servicio",
        },
        {
            value: BILL_DOCUMENT_TYPES.CASH_RECEIPT,
            label: "Recibo de caja",
        },
        {
            value: BILL_DOCUMENT_TYPES.PAYMENT_VOUCHER,
            label: "Comprobante de Egreso",
        },
        {
            value: BILL_DOCUMENT_TYPES.ADJUSTMENT_ENTRY,
            label: "Comprobante de ajuste",
        }
    ]
)

type Props = {
    onChange?: (type: string) => void,
}

export const BillDocumentTypeSelector = (props: Props) => {
    return (
        <div>
            {
                BILL_DOCUMENT_TYPES_OPTIONS.map(option => (
                    <div key={option.value}>
                        {option.label}
                    </div>
                ))
            }
        </div>
    )
}