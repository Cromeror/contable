export enum ContactType {
    CUSTOMER = 'customer',
    SUPPLIER = 'supplier',
}

export type Contact = {
    name: string,
    nit: string,
    address: string,
    phone: string,
    type: ContactType
}
