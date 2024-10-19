import { Contact } from "@prisma/client";
import { PucAccount } from "../puc/definitions";

export enum VoucherType {
    INVOICE = 'Invoice',
    PAYMENT = 'Payment',
}

export enum VoucherStatus {
    PENDING = 'Pending',
    PAID = 'Paid',
    CANCELLED = 'Cancelled',
}

export type VoucherItem = {
    puc: PucAccount & { id: number },
    quantity: number,
    unitPrice: number,
    discount: number,
}

export type Voucher = {
    type: VoucherType,
    date: string,
    amount: number,
    description: string,
    status: VoucherStatus,
    contact: Contact,
    items: VoucherItem
}
