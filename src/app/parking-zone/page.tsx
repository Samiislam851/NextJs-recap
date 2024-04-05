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
    <div>
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


        {locations.map(location => <div key={location.id} className='py-4'>
          <h3 className='font-semibold text-[#115955] pb-2 '>{location.locationName} </h3>

          <div className='grid grid-cols-2 gap-y-2 bg-white py-3 px-12'>
            {location && location?.chargers?.map((charger: any, idx: number) =>



              <div key={charger.id}>
                <div className='flex gap-1 items-start font-medium px-2'>

                  <ChargingStation className={clsx(
                    charger.plugs.some((plug: any) => plug.availability === 'available') && 'text-green-500',
                    !charger.plugs.some((plug: any) => plug.availability === 'available') && charger.plugs.some((plug: any) => plug.availability === 'inUse') && 'text-blue-500',
                    !charger.plugs.some((plug: any) => plug.availability === 'available' || plug.availability === 'inUse') && 'text-red-500'
                  )} size={16} weight="fill" />


                  <h3 className='text-sm'>{charger.chargerName}</h3>
                </div>

                <div className={clsx('mx-12 flex flex-col border-t-[2px] border-b-[2px] border-dashed  border-gray-400',

                  { 'border-r-[2px] ': idx % 2 == 0 },
                  { 'border-l-[2px]': idx % 2 !== 0 }
                )}>
                  {charger.plugs.map((plug: any, plugIdx: number) =>
                    <div className={clsx('h-[96px]',
                      { 'border-t-[2px] border-dashed border-gray-400': plugIdx > 0 }


                    )}>

                      <div className='flex items-center gap-[6px]'>

                        <div className={clsx(`w-1 h-1 rounded-full `,
                          { 'bg-[#FF2C2C]': plug.availability === 'down' },
                          { 'bg-[#6BBE00]': plug.availability === 'available' },
                          { 'bg-[#3BA0FF]': plug.availability === 'inUse' }
                        )}>
                          
                        </div>

                        <p className={clsx(' text-xs  font-semibold capitalize ',

                          { 'text-[#FF2C2C]': plug.availability === 'down' },
                          { 'text-[#6BBE00]': plug.availability === 'available' },
                          { 'text-[#3BA0FF]': plug.availability === 'inUse' }
                        )}>
                          {plug.availability}
                        </p>

                      </div>

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