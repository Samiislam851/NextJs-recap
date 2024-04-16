'use client'
import { ChargingStation, X } from '@phosphor-icons/react'
import clsx from 'clsx'
import React from 'react'
import plugData from '../../../public/plugsData.json'
type Props = {}

const page = (props: Props) => {




  const plugsData = {
    availableChargers: {
      data: {
        total: {
          value: 4,
          relation: "eq",
        },
        max_score: 18.664976,
        hits: [



          {
            _index: "test_charger",
            _type: "_doc",
            _id: "317a0554-6baf-48e6-8ee6-e7980f983d1b",
            _score: 18.664976,
            _source: {
              chargerConnected: true,
              online: true,
              status: "available",
              chargingRate: 7.7,
              name: "ap charger 010",
              qrCode: "kr9iez",
              chargerPlugType: "CCS2",
              connectorIds: ["e2da5e3e-3b81-4124-9ed4-04e5fce850ae"],
              chPointModel: "OCA",
              chPointSerialNumber: "GLTEST",
              id: "317a0554-6baf-48e6-8ee6-e7980f983d1b",
              connectivity: false,
              chPointVendor: "OCA",
              currentPropertyId: "def068bc-a0fe-4eb7-a452-1ff18824c223",
              manufactureName: "Link Power",
              chargerModelId: "e9549455-9b67-4e3e-bf32-277ebdbb68cf",
              createdAt: "2024-04-03T08:49:10.773Z",
              chStatus: "Available",
              locOff: false,
              autoMeterValue: false,
              currentLocationId: "59a6e048-3732-478a-a36c-3d908d639fa4",
              meterValueSampleInterval: 0,
              idTag: "XAu_W310",
              updatedAt: "2024-04-03T10:41:33.799Z",
              activityStatus: "Active",
              chBoxSerialNumber: "GLTEST",
              isSupportSmartCharging: true,
              isDummy: true,
              modelCode: "LP-CS308-40",
              currentPropertyName: "Billing Property 02",
              currentPropertyAddress: "55, east avenue",
              currentLocationName: "Billing location",
              connectors: [
                {
                  chargerId: "317a0554-6baf-48e6-8ee6-e7980f983d1b",
                  propertyId: "def068bc-a0fe-4eb7-a452-1ff18824c223",
                  online: true,
                  plugId: "d65ddbe0-066e-43ae-9e1f-ca26ffaaa87b",
                  status: "Active",
                  createdAt: "2024-04-03T09:56:35.627Z",
                  chStatus: "Available",
                  connected: true,
                  updatedAt: "2024-04-05T10:16:55.091Z",
                  connectorNumber: 1,
                  connectorQrCode: "SnhdRJ",
                  id: "e2da5e3e-3b81-4124-9ed4-04e5fce850ae",
                  plug: {
                    powerUnit: "Wh",
                    updatedAt: "2024-03-29T09:45:47.336Z",
                    status: "Active",
                    chargingRate: 11.5,
                    createdAt: "2024-03-29T09:45:47.336Z",
                    id: "d65ddbe0-066e-43ae-9e1f-ca26ffaaa87b",
                    name: "CCS2",
                  },
                },
              ],
            },
          },
          {
            _index: "test_charger",
            _type: "_doc",
            _id: "191440a5-dd4a-4619-bc80-02ff65e6f5eb",
            _score: 14.2750225,
            _source: {
              chargerConnected: true,
              fault: "",
              commissioned: true,
              online: true,
              status: "available",
              chargingRate: 7.7,
              meterStart: 0,
              name: "ap charger 05",
              qrCode: "3KR9Np",
              enabled: true,
              meterValue: 0,
              chargerPlugType: "CHAdeMO",
              connectorIds: [
                "c9ec0acb-a7b4-4bcc-9a10-8722c109442a",
                "dcc54676-b74f-4087-a3a9-3726d04d93d7",
                "fc201cc5-8c35-4dc8-9675-e4e387853cfc",
              ],
              chPointModel: "OCA",
              chPointSerialNumber: "GLTEST",
              meterStop: 0,
              connectorId: 1,
              id: "191440a5-dd4a-4619-bc80-02ff65e6f5eb",
              connectivity: false,
              chPointVendor: "OCA",
              currentPropertyId: "def068bc-a0fe-4eb7-a452-1ff18824c223",
              faulted: false,
              manufactureName: "Eaton",
              chargerModelId: "228912d3-30af-4cea-94ff-52b61117fa5a",
              createdAt: "2024-03-30T11:02:01.418Z",
              chStatus: "Available",
              connected: false,
              locOff: false,
              autoMeterValue: false,
              currentLocationId: "59a6e048-3732-478a-a36c-3d908d639fa4",
              charging: false,
              transactionStopReason: "Local",
              currentTransactionId: 6303,
              meterValueSampleInterval: 0,
              idTag: "XAu_W5",
              updatedAt: "2024-04-10T07:35:58.911Z",
              activityStatus: "Active",
              chBoxSerialNumber: "GLTEST",
              isSupportSmartCharging: true,
              isDummy: true,
              modelCode: "GMEV80CME1B-WC",
              currentPropertyName: "Billing Property 02",
              currentPropertyAddress: "55, east avenue",
              currentLocationName: "Billing location",
              connectors: [
                {
                  chargerId: "191440a5-dd4a-4619-bc80-02ff65e6f5eb",
                  propertyId: "def068bc-a0fe-4eb7-a452-1ff18824c223",
                  online: true,
                  plugId: "7a83bf7b-238d-46c5-8263-9e3ee867bb70",
                  status: "Active",
                  createdAt: "2024-03-30T11:02:04.846Z",
                  chStatus: "Available",
                  connected: true,
                  updatedAt: "2024-04-10T07:35:58.706Z",
                  connectorNumber: 1,
                  connectorQrCode: "qMUMqp",
                  id: "c9ec0acb-a7b4-4bcc-9a10-8722c109442a",
                  plug: {
                    powerUnit: "Wh",
                    updatedAt: "2024-03-29T09:45:48.326Z",
                    status: "Active",
                    chargingRate: 19.2,
                    createdAt: "2024-03-29T09:45:48.326Z",
                    id: "7a83bf7b-238d-46c5-8263-9e3ee867bb70",
                    name: "CHAdeMO",
                  },
                },
                {
                  chargerId: "191440a5-dd4a-4619-bc80-02ff65e6f5eb",
                  propertyId: "def068bc-a0fe-4eb7-a452-1ff18824c223",
                  online: true,
                  plugId: "effb704f-6e8c-49fd-98c8-08d837e76063",
                  status: "Active",
                  createdAt: "2024-03-30T11:02:06.493Z",
                  chStatus: "Available",
                  connected: true,
                  updatedAt: "2024-04-04T05:42:56.843Z",
                  connectorNumber: 2,
                  connectorQrCode: "qMUMqp",
                  id: "dcc54676-b74f-4087-a3a9-3726d04d93d7",
                  plug: {
                    powerUnit: "Wh",
                    updatedAt: "2024-03-29T09:45:46.318Z",
                    status: "Active",
                    chargingRate: 9.6,
                    createdAt: "2024-03-29T09:45:46.318Z",
                    id: "effb704f-6e8c-49fd-98c8-08d837e76063",
                    name: "CCS1",
                  },
                },
                {
                  chargerId: "191440a5-dd4a-4619-bc80-02ff65e6f5eb",
                  propertyId: "def068bc-a0fe-4eb7-a452-1ff18824c223",
                  online: true,
                  plugId: "7a83bf7b-238d-46c5-8263-9e3ee867bb70",
                  status: "Active",
                  createdAt: "2024-03-30T11:02:08.170Z",
                  chStatus: "Available",
                  connected: true,
                  updatedAt: "2024-04-05T10:16:39.416Z",
                  connectorNumber: 3,
                  connectorQrCode: "qMUMqp",
                  id: "fc201cc5-8c35-4dc8-9675-e4e387853cfc",
                  plug: {
                    powerUnit: "Wh",
                    updatedAt: "2024-03-29T09:45:48.326Z",
                    status: "Active",
                    chargingRate: 19.2,
                    createdAt: "2024-03-29T09:45:48.326Z",
                    id: "7a83bf7b-238d-46c5-8263-9e3ee867bb70",
                    name: "CHAdeMO",
                  },
                },
              ],
            },
          },
          {
            _index: "test_charger",
            _type: "_doc",
            _id: "191440a5-dd4a-4619-bc80-02ff65e6f5eb",
            _score: 14.2750225,
            _source: {
              chargerConnected: true,
              fault: "",
              commissioned: true,
              online: true,
              status: "available",
              chargingRate: 7.7,
              meterStart: 0,
              name: "ap charger 05",
              qrCode: "3KR9Np",
              enabled: true,
              meterValue: 0,
              chargerPlugType: "CHAdeMO",
              connectorIds: [
                "c9ec0acb-a7b4-4bcc-9a10-8722c109442a",
                "dcc54676-b74f-4087-a3a9-3726d04d93d7",
                "fc201cc5-8c35-4dc8-9675-e4e387853cfc",
              ],
              chPointModel: "OCA",
              chPointSerialNumber: "GLTEST",
              meterStop: 0,
              connectorId: 1,
              id: "191440a5-dd4a-4619-bc80-02ff65e6f5eb",
              connectivity: false,
              chPointVendor: "OCA",
              currentPropertyId: "def068bc-a0fe-4eb7-a452-1ff18824c223",
              faulted: false,
              manufactureName: "Eaton",
              chargerModelId: "228912d3-30af-4cea-94ff-52b61117fa5a",
              createdAt: "2024-03-30T11:02:01.418Z",
              chStatus: "Available",
              connected: false,
              locOff: false,
              autoMeterValue: false,
              currentLocationId: "59a6e048-3732-478a-a36c-3d908d639fa4",
              charging: false,
              transactionStopReason: "Local",
              currentTransactionId: 6303,
              meterValueSampleInterval: 0,
              idTag: "XAu_W5",
              updatedAt: "2024-04-10T07:35:58.911Z",
              activityStatus: "Active",
              chBoxSerialNumber: "GLTEST",
              isSupportSmartCharging: true,
              isDummy: true,
              modelCode: "GMEV80CME1B-WC",
              currentPropertyName: "Billing Property 02",
              currentPropertyAddress: "55, east avenue",
              currentLocationName: "Billing location",
              connectors: [
                {
                  chargerId: "191440a5-dd4a-4619-bc80-02ff65e6f5eb",
                  propertyId: "def068bc-a0fe-4eb7-a452-1ff18824c223",
                  online: true,
                  plugId: "7a83bf7b-238d-46c5-8263-9e3ee867bb70",
                  status: "Active",
                  createdAt: "2024-03-30T11:02:04.846Z",
                  chStatus: "Available",
                  connected: true,
                  updatedAt: "2024-04-10T07:35:58.706Z",
                  connectorNumber: 1,
                  connectorQrCode: "qMUMqp",
                  id: "c9ec0acb-a7b4-4bcc-9a10-8722c109442a",
                  plug: {
                    powerUnit: "Wh",
                    updatedAt: "2024-03-29T09:45:48.326Z",
                    status: "Active",
                    chargingRate: 19.2,
                    createdAt: "2024-03-29T09:45:48.326Z",
                    id: "7a83bf7b-238d-46c5-8263-9e3ee867bb70",
                    name: "CHAdeMO",
                  },
                },
                {
                  chargerId: "191440a5-dd4a-4619-bc80-02ff65e6f5eb",
                  propertyId: "def068bc-a0fe-4eb7-a452-1ff18824c223",
                  online: true,
                  plugId: "effb704f-6e8c-49fd-98c8-08d837e76063",
                  status: "Active",
                  createdAt: "2024-03-30T11:02:06.493Z",
                  chStatus: "Available",
                  connected: true,
                  updatedAt: "2024-04-04T05:42:56.843Z",
                  connectorNumber: 2,
                  connectorQrCode: "qMUMqp",
                  id: "dcc54676-b74f-4087-a3a9-3726d04d93d7",
                  plug: {
                    powerUnit: "Wh",
                    updatedAt: "2024-03-29T09:45:46.318Z",
                    status: "Active",
                    chargingRate: 9.6,
                    createdAt: "2024-03-29T09:45:46.318Z",
                    id: "effb704f-6e8c-49fd-98c8-08d837e76063",
                    name: "CCS1",
                  },
                },
                {
                  chargerId: "191440a5-dd4a-4619-bc80-02ff65e6f5eb",
                  propertyId: "def068bc-a0fe-4eb7-a452-1ff18824c223",
                  online: true,
                  plugId: "7a83bf7b-238d-46c5-8263-9e3ee867bb70",
                  status: "Active",
                  createdAt: "2024-03-30T11:02:08.170Z",
                  chStatus: "Available",
                  connected: true,
                  updatedAt: "2024-04-05T10:16:39.416Z",
                  connectorNumber: 3,
                  connectorQrCode: "qMUMqp",
                  id: "fc201cc5-8c35-4dc8-9675-e4e387853cfc",
                  plug: {
                    powerUnit: "Wh",
                    updatedAt: "2024-03-29T09:45:48.326Z",
                    status: "Active",
                    chargingRate: 19.2,
                    createdAt: "2024-03-29T09:45:48.326Z",
                    id: "7a83bf7b-238d-46c5-8263-9e3ee867bb70",
                    name: "CHAdeMO",
                  },
                },
              ],
            },
          },

        ],
      },
    },
    chargingChargers: {
      data: {
        total: {
          value: 1,
          relation: "eq",
        },
        max_score: null,
        hits: [
          {
            _index: "test_charger",
            _type: "_doc",
            _id: "317a0554-6baf-48e6-8ee6-e7980f983d1b",
            _score: 18.664976,
            _source: {
              chargerConnected: true,
              online: true,
              status: "available",
              chargingRate: 7.7,
              name: "ap charger 010",
              qrCode: "kr9iez",
              chargerPlugType: "CCS2",
              connectorIds: ["e2da5e3e-3b81-4124-9ed4-04e5fce850ae"],
              chPointModel: "OCA",
              chPointSerialNumber: "GLTEST",
              id: "317a0554-6baf-48e6-8ee6-e7980f983d1b",
              connectivity: false,
              chPointVendor: "OCA",
              currentPropertyId: "def068bc-a0fe-4eb7-a452-1ff18824c223",
              manufactureName: "Link Power",
              chargerModelId: "e9549455-9b67-4e3e-bf32-277ebdbb68cf",
              createdAt: "2024-04-03T08:49:10.773Z",
              chStatus: "Available",
              locOff: false,
              autoMeterValue: false,
              currentLocationId: "59a6e048-3732-478a-a36c-3d908d639fa4",
              meterValueSampleInterval: 0,
              idTag: "XAu_W310",
              updatedAt: "2024-04-03T10:41:33.799Z",
              activityStatus: "Active",
              chBoxSerialNumber: "GLTEST",
              isSupportSmartCharging: true,
              isDummy: true,
              modelCode: "LP-CS308-40",
              currentPropertyName: "Billing Property 02",
              currentPropertyAddress: "55, east avenue",
              currentLocationName: "Billing location",
              connectors: [
                {
                  chargerId: "317a0554-6baf-48e6-8ee6-e7980f983d1b",
                  propertyId: "def068bc-a0fe-4eb7-a452-1ff18824c223",
                  online: true,
                  plugId: "d65ddbe0-066e-43ae-9e1f-ca26ffaaa87b",
                  status: "Active",
                  createdAt: "2024-04-03T09:56:35.627Z",
                  chStatus: "Available",
                  connected: true,
                  updatedAt: "2024-04-05T10:16:55.091Z",
                  connectorNumber: 1,
                  connectorQrCode: "SnhdRJ123",
                  id: "e2da5e3e-3b81-4124-9ed4-04e5fce850ae",
                  plug: {
                    powerUnit: "Wh",
                    updatedAt: "2024-03-29T09:45:47.336Z",
                    status: "Active",
                    chargingRate: 14.5,
                    createdAt: "2024-03-29T09:45:47.336Z",
                    id: "d65ddbe0-066e-43ae-9e1f-ca26ffaaa87b",
                    name: "CCS2345",
                  },
                },
                {
                  chargerId: "317a0554-6baf-48e6-8ee6-e7980f983d1b",
                  propertyId: "def068bc-a0fe-4eb7-a452-1ff18824c223",
                  online: true,
                  plugId: "d65ddbe0-066e-43ae-9e1f-ca26ffaaa87b",
                  status: "Active",
                  createdAt: "2024-04-03T09:56:35.627Z",
                  chStatus: "Available",
                  connected: true,
                  updatedAt: "2024-04-05T10:16:55.091Z",
                  connectorNumber: 1,
                  connectorQrCode: "SnhdRJ123",
                  id: "e2da5e3e-3b81-4124-9ed4-04e5fce850ae",
                  plug: {
                    powerUnit: "Wh",
                    updatedAt: "2024-03-29T09:45:47.336Z",
                    status: "Active",
                    chargingRate: 14.5,
                    createdAt: "2024-03-29T09:45:47.336Z",
                    id: "d65ddbe0-066e-43ae-9e1f-ca26ffaaa87b",
                    name: "CCS2345",
                  },
                },
              ],
            },
          },
          {
            _index: "test_charger",
            _type: "_doc",
            _id: "317a0554-6baf-48e6-8ee6-e7980f983d1b",
            _score: 18.664976,
            _source: {
              chargerConnected: true,
              online: true,
              status: "available",
              chargingRate: 7.7,
              name: "ap charger 010",
              qrCode: "kr9iez",
              chargerPlugType: "CCS2",
              connectorIds: ["e2da5e3e-3b81-4124-9ed4-04e5fce850ae"],
              chPointModel: "OCA",
              chPointSerialNumber: "GLTEST",
              id: "317a0554-6baf-48e6-8ee6-e7980f983d1b",
              connectivity: false,
              chPointVendor: "OCA",
              currentPropertyId: "def068bc-a0fe-4eb7-a452-1ff18824c223",
              manufactureName: "Link Power",
              chargerModelId: "e9549455-9b67-4e3e-bf32-277ebdbb68cf",
              createdAt: "2024-04-03T08:49:10.773Z",
              chStatus: "Available",
              locOff: false,
              autoMeterValue: false,
              currentLocationId: "59a6e048-3732-478a-a36c-3d908d639fa4",
              meterValueSampleInterval: 0,
              idTag: "XAu_W310",
              updatedAt: "2024-04-03T10:41:33.799Z",
              activityStatus: "Active",
              chBoxSerialNumber: "GLTEST",
              isSupportSmartCharging: true,
              isDummy: true,
              modelCode: "LP-CS308-40",
              currentPropertyName: "Billing Property 02",
              currentPropertyAddress: "55, east avenue",
              currentLocationName: "Billing location",
              connectors: [

                {
                  chargerId: "317a0554-6baf-48e6-8ee6-e7980f983d1b",
                  propertyId: "def068bc-a0fe-4eb7-a452-1ff18824c223",
                  online: true,
                  plugId: "d65ddbe0-066e-43ae-9e1f-ca26ffaaa87b",
                  status: "Active",
                  createdAt: "2024-04-03T09:56:35.627Z",
                  chStatus: "Available",
                  connected: true,
                  updatedAt: "2024-04-05T10:16:55.091Z",
                  connectorNumber: 1,
                  connectorQrCode: "SnhdRJ123",
                  id: "e2da5e3e-3b81-4124-9ed4-04e5fce850ae",
                  plug: {
                    powerUnit: "Wh",
                    updatedAt: "2024-03-29T09:45:47.336Z",
                    status: "Active",
                    chargingRate: 14.5,
                    createdAt: "2024-03-29T09:45:47.336Z",
                    id: "d65ddbe0-066e-43ae-9e1f-ca26ffaaa87b",
                    name: "CCS2345",
                  },
                },
              ],
            },
          },
        ],
      },
    },
  }



  const locations = [
    {
      id: '1a',
      locationName: 'Location A',
      chargers: [
        {
          id: '1a1',
          chargerName: 'Test plug type and rate charger 001',
          plugs: [
            { id: '1a1a', availability: 'Available' },
            { id: '1a1b', availability: 'inUse' },
            { id: '1a1c', availability: 'Available' }
          ]
        },
        {
          id: '1a2',
          chargerName: 'Test plug type and rate charger 002',
          plugs: [
            { id: '1a2a', availability: 'Available' },
            { id: '1a2b', availability: 'Available' }
          ]
        },
        {
          id: '1a3',
          chargerName: 'Test plug type and rate charger 003',
          plugs: [
            { id: '1a3a', availability: 'inUse' }
          ]
        },
        {
          id: '1a4',
          chargerName: 'Test plug type and rate charger 004',
          plugs: [
            { id: '1a4a', availability: 'Available' },
            { id: '1a4b', availability: 'Available' }
          ]
        }
      ]
    }
  ];




  return (
    <div className='max-w-[600px] mx-auto'>
      <div className='px-6  py-5 flex items-center justify-between '>
        <div >
          <h3 className='font-helvetica text-2xl font-bold text-gray-800'>North Park Zone</h3>
        </div>
        <div>
          <button >
            <X className='text-gray-500' size={12} />
          </button>
        </div>

      </div>

      <div className='bg-[#F9F9F9] min-h-screen px-5'>


        {locations.map(location =>
          <div key={location.id} className='py-4'>

            <h3 className='font-semibold text-[#115955] pb-2 '>{location.locationName} </h3>

            <div className='grid grid-cols-2 gap-y-8 bg-white py-3 px-5'>
              {plugsData.availableChargers.data.hits.map((charger: any, idx: number) =>



                <div key={charger._id}>

                  <div className='flex gap-1 items-start font-medium px-2 py-2'>




                    <ChargingStation className={clsx('text-base mt-1 ',
                      charger._source.connectors && charger._source.connectors.some((plug: any) => plug.chStatus === 'Available') && 'text-green-500',




                      charger._source.connectors && !charger._source.connectors.some((plug: any) => plug.chStatus === 'Available')
                      &&
                      charger._source.connectors && charger._source.connectors.some((plug: any) => plug.chStatus === 'inUse') && 'text-blue-500',



                      charger._source.connectors && !charger._source.connectors.some((plug: any) => plug.chStatus === 'Available' || plug.availability === 'inUse') && 'text-red-500'

                    )} size={16} weight="fill" />


                    <h3 className='text-black font-medium'>{charger._source.name}</h3>
                  </div>

                  <div className={clsx('mx-6 flex flex-col border-t-[2px] border-b-[2px] border-dashed  border-gray-400',

                    { 'border-r-[2px] ': idx % 2 == 0 },
                    { 'border-l-[2px]': idx % 2 !== 0 }
                  )}>










                    {/* ------------------------------------------------ */}
                    {charger._source.connectors && charger._source.connectors.map((plug: any, plugIdx: number) => (
                      <div key={plug.id} className={clsx(
                        'min-h-[110px] p-2 flex flex-col justify-end to-white',
                        { 'border-t-[2px] border-dashed border-gray-400': plugIdx > 0 },
                        { 'bg-gradient-to-r': idx % 2 !== 0 },
                        { 'bg-gradient-to-l': idx % 2 === 0 },
                        { 'from-red-50': plug.chStatus === 'down' },
                        { 'from-green-50': plug.chStatus === 'Available' },
                        { 'from-blue-50': plug.chStatus === 'inUse' }
                      )}>

                        <div className='px-2'>
                          <img src="/car.png" className={clsx('w-full p-2 ps-0', { 'rotate-180': idx % 2 !== 0 })} alt="" />
                        </div>


                        <div className='flex items-center gap-[6px] ps-3 pb-2'>
                          <div className={clsx(`w-1 h-1 rounded-full`,
                            { 'bg-[#FF2C2C]': plug.chStatus === 'down' },
                            { 'bg-[#6BBE00]': plug.chStatus === 'Available' },
                            { 'bg-[#3BA0FF]': plug.chStatus === 'inUse' }
                          )}></div>
                          <p className={clsx('text-xs font-semibold capitalize font-medium',
                            { 'text-[#FF2C2C]': plug.chStatus === 'down' },
                            { 'text-[#6BBE00]': plug.chStatus === 'Available' },
                            { 'text-[#3BA0FF]': plug.chStatus === 'inUse' }
                          )}>
                            {plug.chStatus}
                          </p>
                        </div>

                        {plug.chStatus !== 'inUse' && (
                          <div className='flex gap-1 ps-2'>
                            <div>
                              <img src="plugLogo.png" alt="" />
                            </div>
                            <p className='text-gray-500 text-xs ps-1 font-medium'> J1772 - 9.9kW max</p>
                          </div>
                        )}
                      </div>
                    ))}


                  </div>
                </div>


              )}



              {plugsData.chargingChargers.data.hits.map((charger: any, idx: number) =>



                <div key={charger._id}>

                  <div className='flex gap-1 items-start font-medium px-2 py-2'>




                    <ChargingStation className={clsx('text-base mt-1 ',
                      charger._source.connectors && charger._source.connectors.some((plug: any) => plug.chStatus === 'Available') && 'text-green-500',




                      charger._source.connectors && !charger._source.connectors.some((plug: any) => plug.chStatus === 'Available')
                      &&
                      charger._source.connectors && charger._source.connectors.some((plug: any) => plug.chStatus === 'inUse') && 'text-blue-500',



                      charger._source.connectors && !charger._source.connectors.some((plug: any) => plug.chStatus === 'Available' || plug.availability === 'inUse') && 'text-red-500'

                    )} size={16} weight="fill" />


                    <h3 className='text-black font-medium'>{charger._source.name}</h3>
                  </div>

                  <div className={clsx('mx-6 flex flex-col border-t-[2px] border-b-[2px] border-dashed  border-gray-400',

                    { 'border-r-[2px] ': (plugsData.availableChargers.data.hits.length % 2 === 0 && idx % 2 == 0) || (plugsData.availableChargers.data.hits.length % 2 !== 0 && idx % 2 !== 0) },


                    { 'border-l-[2px]': (plugsData.availableChargers.data.hits.length % 2 === 0 && idx % 2 !== 0) || (plugsData.availableChargers.data.hits.length % 2 !== 0 && idx % 2 === 0) }
                  )}>










                    {/* ------------------------------------------------ */}
                    {charger._source.connectors && charger._source.connectors.map((plug: any, plugIdx: number) => (
                      <div key={plug.id} className={clsx(
                        'min-h-[110px] p-2 flex flex-col justify-end to-white',
                        { 'border-t-[2px] border-dashed border-gray-400': plugIdx > 0 },
                        { 'bg-gradient-to-r': idx % 2 !== 0 },
                        { 'bg-gradient-to-l': idx % 2 === 0 },
                        { 'from-red-50': plug.chStatus === 'down' },
                        { 'from-yellow-50': plug.chStatus === 'Available' },
                        { 'from-blue-50': plug.chStatus === 'inUse' }
                      )}>






                        {/* ///////////////////////////////////////////////////////////////// */}
                        <div className='px-2'>
                          <img src="/car.png" className={clsx('w-full p-2 ps-0',

                            { 'rotate-180': (plugsData.availableChargers.data.hits.length % 2 === 0 && idx % 2 !== 0) || (plugsData.availableChargers.data.hits.length % 2 !== 0 && idx % 2 === 0) })} alt="" />
                        </div>


                        <div className='flex items-center gap-[6px] ps-3 pb-2'>
                          <div className={clsx(`w-1 h-1 rounded-full`,
                            { 'bg-[#FF2C2C]': plug.chStatus === 'down' },
                            { 'bg-[#be8800]': plug.chStatus === 'Available' },
                            { 'bg-[#3BA0FF]': plug.chStatus === 'inUse' }
                          )}></div>
                          <p className={clsx('text-xs font-semibold capitalize font-medium',
                            { 'text-[#FF2C2C]': plug.chStatus === 'down' },
                            { 'text-[#be8800]': plug.chStatus === 'Available' },
                            { 'text-[#3BA0FF]': plug.chStatus === 'inUse' }
                          )}>
                            {/* {plug.chStatus} */}

                            Others
                          </p>
                        </div>

                        {plug.chStatus !== 'inUse' && (
                          <div className='flex gap-1 ps-2'>
                            <div>
                              <img src="plugLogo.png" alt="" />
                            </div>
                            <p className='text-gray-500 text-xs ps-1 font-medium'> J1772 - 9.9kW max</p>
                          </div>
                        )}
                      </div>
                    ))}


                  </div>
                </div>

              )}
            </div>
          </div>)}






        {locations.map(location =>
          <div key={location.id} className='py-4'>

            <h3 className='font-semibold text-[#115955] pb-2 '>{location.locationName} </h3>

            <div className='grid grid-cols-2 gap-y-8 bg-white py-3 px-5'>


            </div>



          </div>)}





      </div>






    </div >
  )
}

export default page