'use client'
import { ChargingStation, X } from '@phosphor-icons/react'
import clsx from 'clsx'
import React from 'react'

type Props = {}

const page = (props: Props) => {








  const locations = [
    {
      id: '1a',
      locationName: 'Location A',
      chargers: [
        {
          id: '1a1',
          chargerName: 'Test plug type and rate charger 001',
          plugs: [
            { id: '1a1a', availability: 'available' },
            { id: '1a1b', availability: 'inUse' },
            { id: '1a1c', availability: 'available' }
          ]
        },
        {
          id: '1a2',
          chargerName: 'Test plug type and rate charger 002',
          plugs: [
            { id: '1a2a', availability: 'available' },
            { id: '1a2b', availability: 'available' }
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
            { id: '1a4a', availability: 'available' },
            { id: '1a4b', availability: 'available' }
          ]
        }
      ]
    },
    {
      id: '2b',
      locationName: 'Location B',
      chargers: [
        {
          id: '2b1',
          chargerName: 'Test plug type and rate charger 001',
          plugs: [
            { id: '2b1a', availability: 'available' },
            { id: '2b1b', availability: 'available' }
          ]
        },
        {
          id: '2b2',
          chargerName: 'Test plug type and rate charger 002',
          plugs: [
            { id: '2b2a', availability: 'inUse' },
            { id: '2b2b', availability: 'available' },
            { id: '2b2c', availability: 'available' }
          ]
        },
        {
          id: '2b3',
          chargerName: 'Test plug type and rate charger 003',
          plugs: [
            { id: '2b3a', availability: 'available' }
          ]
        },
        {
          id: '2b4',
          chargerName: 'Test plug type and rate charger 004',
          plugs: [
            { id: '2b4a', availability: 'inUse' },
            { id: '2b4b', availability: 'available' }
          ]
        }
      ]
    },
    {
      id: '3c',
      locationName: 'Location C',
      chargers: [
        {
          id: '3c1',
          chargerName: 'Test plug type and rate charger 001',
          plugs: [
            { id: '3c1a', availability: 'available' }
          ]
        },
        {
          id: '3c2',
          chargerName: 'Test plug type and rate charger 002',
          plugs: [
            { id: '3c2a', availability: 'available' },
            { id: '3c2b', availability: 'available' },
            { id: '3c2c', availability: 'available' }
          ]
        },
        {
          id: '3c3',
          chargerName: 'Test plug type and rate charger 003',
          plugs: [
            { id: '3c3b', availability: 'down' }
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
              {location && location?.chargers?.map((charger: any, idx: number) =>



                <div className={clsx({ [`row-span-${charger.plugs.length}`]: charger.plugs.length > 1 })} key={charger.id}>

                  <div className='flex gap-1 items-start font-medium px-2 py-2'>

                    <ChargingStation className={clsx('text-base',
                      charger.plugs.some((plug: any) => plug.availability === 'available') && 'text-green-500',
                      !charger.plugs.some((plug: any) => plug.availability === 'available') && charger.plugs.some((plug: any) => plug.availability === 'inUse') && 'text-blue-500',
                      !charger.plugs.some((plug: any) => plug.availability === 'available' || plug.availability === 'inUse') && 'text-red-500'
                    )} size={16} weight="fill" />


                    <h3 className='text-black font-medium'>{charger.chargerName}</h3>
                  </div>

                  <div className={clsx('mx-6 flex flex-col border-t-[2px] border-b-[2px] border-dashed  border-gray-400',

                    { 'border-r-[2px] ': idx % 2 == 0 },
                    { 'border-l-[2px]': idx % 2 !== 0 }
                  )}>
                    {/* ------------------------------------------------ */}
                    {charger.plugs.map((plug: any, plugIdx: number) =>

                      <div key={plug.id} className={clsx(
                        'min-h-[110px] p-2 flex flex-col justify-end to-white',
                        { 'border-t-[2px] border-dashed border-gray-400': plugIdx > 0 },
                        { 'bg-gradient-to-r  ': idx % 2 !== 0 },
                        { 'bg-gradient-to-l ': idx % 2 == 0 },
                        { 'from-red-50': plug.availability === 'down' },
                        { 'from-green-50': plug.availability === 'available' },
                        { 'from-blue-50': plug.availability === 'inUse' }
                      )}>



                        {plug?.availability === 'inUse' && <div className='px-2'>
                          <img src="/car.png" className={clsx('w-full p-2 ps-0',
                            { 'rotate-180': idx % 2 !== 0 }
                          )} alt="" />
                        </div>}


                        <div className='flex items-center gap-[6px] ps-3 pb-2'>

                          <div className={clsx(`w-1 h-1 rounded-full  `,
                            { 'bg-[#FF2C2C]': plug.availability === 'down' },
                            { 'bg-[#6BBE00]': plug.availability === 'available' },
                            { 'bg-[#3BA0FF]': plug.availability === 'inUse' }
                          )}>

                          </div>

                          <p className={clsx(' text-xs  font-semibold capitalize font-medium ',

                            { 'text-[#FF2C2C]': plug.availability === 'down' },
                            { 'text-[#6BBE00]': plug.availability === 'available' },
                            { 'text-[#3BA0FF]': plug.availability === 'inUse' }
                          )}>
                            {plug.availability}
                          </p>

                        </div>

                        {plug.availability !== 'inUse' &&
                          <div className='flex gap-1 ps-2'>
                            <div>
                              <img src="plugLogo.png" alt="" />
                            </div>

                            <p className='text-gray-500 text-xs ps-1 font-medium'> J1772 - 9.9kW max</p>
                          </div>
                        }

                      </div>)}
                  </div>
                </div>


              )}

            </div>



          </div>)}
      </div>

    </div >
  )
}

export default page