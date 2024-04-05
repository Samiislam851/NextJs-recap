'use client'
import { Warning } from '@phosphor-icons/react'
import clsx from 'clsx'
import React, { useState } from 'react'

type Props = {}

const page = (props: Props) => {




  const cards = [
    { id: 1, name: 'Plug 1', isSelected: false, inUse: false },
    { id: 2, name: 'Plug 2', isSelected: false, inUse: false },
    { id: 3, name: 'Plug 3', isSelected: false, inUse: true },
    { id: 4, name: 'Plug 4', isSelected: false, inUse: false }
  ];

  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardClick = (cardId: number, inUse: boolean) => {
    if (!inUse) {
      setSelectedCard(cardId);
    }
  };

  return (
    <div className='px-8 pt-6 pb-10'>

      <h2 className='text-2xl pb-4 font-bold text-gray-800'>Select Plug
      </h2>


      {cards.map(card =>
        <div key={card.id} className='pb-4'>

          <div

            onClick={() => handleCardClick(card.id, card.inUse)}
            className={clsx('border border-[#D9D9D9] rounded-lg py-3 px-3',
              { 'bg-[#F1F1F1]': card.inUse }
            )}>

            <div className='flex items-center justify-between text-lg font-roboto  pb-2'>
              <div className='flex  gap-2  items-center'>
                
                <h3 className='font-bold'>
                  {card.name}
                </h3>


                <div className='flex items-center gap-[6px]'>
                  <div className='w-[1px] h-[9px] bg-[#D9D9D9]'></div>
                  
                  <p className={clsx(' text-xs  font-semibold ',

                    { 'text-[#FF2C2C]': card.inUse },
                    { 'text-[#6BBE00]': !card.inUse }
                  )}>
                    {card.inUse ? 'IN USE' : 'AVAILABLE'}
                  </p>
                  <div className={`w-1 h-1 rounded-full ${card.inUse ? 'bg-[#FF2C2C]' : ' bg-[#6BBE00]'}`}></div>
                </div>

              </div>

              <div>
                <input
                  // disabled={card.inUse || selectedCard !== null && selectedCard !== card.id}
                  type="radio"
                  className="accent-[#115955]"
                  checked={selectedCard === card.id && true}
                  onChange={() => !card.inUse ?? setSelectedCard(card.id)}
                // disabled={card.inUse || (selectedCard !== null && selectedCard !== card.id)}
                />
              </div>

            </div>




            <div className='flex gap-2 flex-wrap text-xs'>
              <div>
                <div className={`border  text-white rounded-full px-2 py-1 ${card.inUse ? 'bg-[#939393]' : 'bg-[#115955]'}`}>
                  J1172
                </div>
              </div>
              <div>
                <div className="border rounded-full px-2 py-1">$1.25 to initiate session</div>
              </div>
              <div>
                <div className="border rounded-full px-2 py-1">
                  $.030/ kW
                </div>
              </div>
              <div>
                <div className="border rounded-full px-2 py-1">

                  Idle Fee: $0.15/min after 10 min
                </div>
              </div>



            </div>
          </div>
        </div>)}









      {/* Plugin message */}
      <div className='pb-4'>

        <div className='border border-[#91D5FF] bg-[#E6F7FF] rounded-md py-3 px-3'>
          <div className='flex items-center justify-between text-base font-roboto  pb-2'>
            <div className='flex  gap-2  items-center'>
              <div>
                <Warning className='text-[#1890FF]' size={20} weight="fill" />
              </div>

              <h3 className='font-bold text-gray-800'>Select A Plug</h3>


            </div>



          </div>




          <div>
            <p className='text-gray-700 text-sm font-medium'>Tell Us which plug you are connecting to your vehicle</p>
          </div>
        </div>
      </div>


      <div>
        <button onClick={() => selectedCard ? console.log(selectedCard) : alert('please select a card')
        } className='w-full rounded bg-[#115955] text-white uppercase p-2'>Confirm</button>
      </div>


    </div>
  )
}

export default page