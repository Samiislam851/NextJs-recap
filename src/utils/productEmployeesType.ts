export interface productEmployeesType {
  productEmployees: ProductEmployees
}

export interface ProductEmployees {
  assignedEmployees: AssignedEmployee[]
}

export interface AssignedEmployee {
  teamRateId: string
  employeeRoleId: string
  employeeId: string
  employmentStatus: string
  internalRate: number
  billRate: number
  startDate: string
  endDate?: string
}
