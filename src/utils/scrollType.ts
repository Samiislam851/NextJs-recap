export type MainDataType = {
    pages: Page[]
    pageParams: number[]
}

export type Page = {
    data: DataInsidePage[]
    count: number
}

export type DataInsidePage = {
    _id: string
    created_by: string
    name: string
    email: string
    masterEmail: string
    phone: string
    userId: string
    ein: string
    addressId: string
    clientId: string
    billingInfoId: string
    status: string
    created_at: string
    updated_at: string
    __v: number
    addresses: Addresses
}

export type Addresses = {
    _id: string
    created_by: string
    addressLine: string
    city: string
    state: string
    zipCode: string
    country: string
    status: string
    created_at: string
    updated_at: string
    __v: number
}
