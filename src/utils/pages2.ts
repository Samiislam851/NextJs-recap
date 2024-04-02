export type pages2Type = Root2[]

type status = 'active' | 'inactive'


export interface Root2 {
  data: Daum[]
  count: number
}

export interface Daum {
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

export interface Addresses {
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
