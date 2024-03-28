export type newUserInstanceType =  {
    data: Data
    status: number
    statusText: string
    headers: Headers
    config: Config
    request: Request
  }
  
  export interface Data {
    auth: Auth
    user: User
  }
  
  export interface Auth {
    accessToken: string
    refreshToken: string
  }
  
  export interface User {
    _id: string
    firstName: string
    lastName: string
    email: string
    userRoleId: string
    verificationCode: string
    registrationType: string
    userType: string
    status: string
    clientId: string
    isRegistered: boolean
    isVerified: boolean
    isDeleted: boolean
    lastLogin: string
    phone: string
    stripeCustomerId: string
    created_at: string
    updated_at: string
    __v: number
    resetCode: string
    scopes: string[]
  }
  
  export interface Headers {
    "content-type": string
  }
  
  export interface Config {
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
    baseURL: string
    method: string
    url: string
    data: string
  }
  
  export interface Transitional {
    silentJSONParsing: boolean
    forcedJSONParsing: boolean
    clarifyTimeoutError: boolean
  }
  
  export interface Env {}
  
  export interface Headers2 {
    Accept: string
    "Content-Type": string
    Authorization: string
  }
  
  export interface Request {}
  