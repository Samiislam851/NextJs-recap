export interface plugsDataType {
    availableChargers: AvailableChargers
    chargingChargers: ChargingChargers
    downChargers: DownChargers
    offlineChargers: OfflineChargers
    othersWithoutChargerConnected: OthersWithoutChargerConnected
    othersWithChargerNotConnected: OthersWithChargerNotConnected
  }
  
  export interface AvailableChargers {
    data: Data
  }
  
  export interface Data {
    total: Total
    max_score: number
    hits: Hit[]
  }
  
  export interface Total {
    value: number
    relation: string
  }
  
  export interface Hit {
    _index: string
    _type: string
    _id: string
    _score: number
    _source: Source
  }
  
  export interface Source {
    chargerConnected: boolean
    online: boolean
    status: string
    chargingRate: number
    name: string
    qrCode: string
    chargerPlugType: string
    connectorIds?: string[]
    chPointModel: string
    chPointSerialNumber: string
    id: string
    connectivity: boolean
    chPointVendor: string
    currentPropertyId: string
    manufactureName?: string
    chargerModelId?: string
    createdAt: string
    chStatus: string
    locOff: boolean
    autoMeterValue?: boolean
    currentLocationId: string
    meterValueSampleInterval?: number
    idTag: string
    updatedAt: string
    activityStatus: string
    chBoxSerialNumber: string
    isSupportSmartCharging: boolean
    isDummy: boolean
    modelCode?: string
    currentPropertyName: string
    currentPropertyAddress: string
    currentLocationName: string
    connectors?: Connector[]
    fault?: string
    commissioned?: boolean
    meterStart?: number
    enabled?: boolean
    meterValue?: number
    meterStop?: number
    connectorId?: number
    faulted?: boolean
    connected?: boolean
    charging?: boolean
    transactionStopReason?: string
    currentTransactionId?: number
    pwMeasurand?: string
    currentOfferedValue?: number
    measurand?: string
    currentOfferedUnit?: string
    pwValue?: number
    pwValueUnit?: string
    voltUnit?: string
    currentOfferedMeasurand?: string
    meterValueUnit?: string
    voltMeasurand?: string
    voltValue?: number
  }
  
  export interface Connector {
    chargerId: string
    propertyId: string
    online: boolean
    plugId: string
    status: string
    createdAt: string
    chStatus: string
    connected: boolean
    updatedAt: string
    connectorNumber: number
    connectorQrCode: string
    id: string
    plug: Plug
  }
  
  export interface Plug {
    powerUnit: string
    updatedAt: string
    status: string
    chargingRate: number
    createdAt: string
    id: string
    name: string
  }
  
  export interface ChargingChargers {
    data: Data2
  }
  
  export interface Data2 {
    total: Total2
    max_score: any
    hits: any[]
  }
  
  export interface Total2 {
    value: number
    relation: string
  }
  
  export interface DownChargers {
    data: Data3
  }
  
  export interface Data3 {
    total: Total3
    max_score: any
    hits: any[]
  }
  
  export interface Total3 {
    value: number
    relation: string
  }
  
  export interface OfflineChargers {
    data: Data4
  }
  
  export interface Data4 {
    total: Total4
    max_score: any
    hits: any[]
  }
  
  export interface Total4 {
    value: number
    relation: string
  }
  
  export interface OthersWithoutChargerConnected {
    data: Data5
  }
  
  export interface Data5 {
    total: Total5
    max_score: number
    hits: Hit2[]
  }
  
  export interface Total5 {
    value: number
    relation: string
  }
  
  export interface Hit2 {
    _index: string
    _type: string
    _id: string
    _score: number
    _source: Source2
  }
  
  export interface Source2 {
    online: boolean
    currentPropertyId: string
    manufactureName: string
    status: string
    chargerModelId: string
    chargingRate: number
    createdAt: string
    chStatus: string
    autoMeterValue: boolean
    name: string
    currentLocationId: string
    qrCode: string
    chargerPlugType: string
    connectorIds: string[]
    meterValueSampleInterval: number
    idTag: string
    updatedAt: string
    activityStatus: string
    isSupportSmartCharging: boolean
    id: string
    modelCode: string
    connectivity: boolean
    currentPropertyName?: string
    currentPropertyAddress?: string
    currentLocationName?: string
    locOff?: boolean
  }
  
  export interface OthersWithChargerNotConnected {
    data: Data6
  }
  
  export interface Data6 {
    total: Total6
    max_score: number
    hits: Hit3[]
  }
  
  export interface Total6 {
    value: number
    relation: string
  }
  
  export interface Hit3 {
    _index: string
    _type: string
    _id: string
    _score: number
    _source: Source3
  }
  
  export interface Source3 {
    chargerConnected: boolean
    online: boolean
    currentPropertyId: string
    manufactureName: string
    status: string
    chargerModelId: string
    chargingRate: number
    createdAt: string
    chStatus: string
    autoMeterValue: boolean
    name: string
    currentLocationId: string
    qrCode: string
    chargerPlugType: string
    connectorIds: string[]
    meterValueSampleInterval: number
    idTag: string
    updatedAt: string
    activityStatus: string
    isSupportSmartCharging: boolean
    id: string
    modelCode: string
    connectivity: boolean
    locOff: boolean
  }
  