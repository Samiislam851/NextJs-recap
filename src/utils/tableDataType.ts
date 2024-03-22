export type  TableDataType = {
    data: Data
    status: number
    statusText: string
    headers: Headers
    config: Config
    request: Request
  }
  
 type Data  = {
    data: Daum[]
    count: number
  }
  
 type Daum =  {
    _id: string
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
  
 type Addresses =  {
    _id: string
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
  
 type Headers =  {
    "content-type": string
  }
  
 type Config =  {
    transitional: Transitional
    adapter: string[]
    transformRequest: any[]
    transformResponse: any[]
    timeout: number
    xsrfCookieName: string
    xsrfHeaderName: string
    maxContentLength: number
    maxBodyLength: number
    env: Env
    headers: Headers2
    method: string
    url: string
  }
  
   type Transitional  = {
    silentJSONParsing: boolean
    forcedJSONParsing: boolean
    clarifyTimeoutError: boolean
  }
  
   type Env =  {}
  
   type Headers2  = {
    Accept: string
    Authorization: string
  }
  
   type Request  = {}
  