export type RateSheetDataType = {
    _id: string
    name: string
    startDate: string
    endDate: any
    status: string
    clientId: string
    created_at: string
    updated_at: string
    __v: number
    teamStructures: TeamStructure[]
}

export type TeamStructure = {
    _id: string
    rateSheetId: string
    startDate: string
    endDate: any
    status: string
    employeeRoleId: string
    internalRate: number
    billRate: number
    created_at: string
    updated_at: string
    __v: number
    role: Role
}

export type Role = {
    _id: string
    name: string
    description: string
    startDate: string
    endDate: any
    status: string
    isDeleted: boolean
    clientId: string
    created_at: string
    updated_at: string
    __v: number
}
