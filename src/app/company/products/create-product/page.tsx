'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import './createProduct.css'
import clsx from 'clsx'
import CvaButton from '@/components/UI/CvaButton'
type Props = {}

const page = (props: Props) => {


    const [selectedFile, setSelectedFile] = useState<any>({})
    const [isChecked, setIsChecked] = useState<boolean>(false)






    const [addLinkComponentArr, setAddLinkComponentArr] = useState<any[]>([{
        id: 1,
        link: ''
    }])



    console.log(addLinkComponentArr);


    const uploadHandler = (e: any) => {
        if (e.target.files.length < 2) {
            setSelectedFile(e.target.files[0]);
        } else {
            alert('select only one file please')
        }


    }

    const addLinkFunction = () => {
        setAddLinkComponentArr(prev => {
            const newComponentId = prev.length + 1
            return [...prev, { id: newComponentId }]
        })
    }

    const setInputValue = (id: number, e: any) => {
        setAddLinkComponentArr((prev) =>
            prev.map((comp) =>
                comp.id === id ? { ...comp, link: e.target.value } : comp
            )
        );
    };



    useEffect(() => {
        if (!isChecked) {
            setAddLinkComponentArr([{ id: 1, link: '' }])
        }
    }, [isChecked])

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const finalArray = addLinkComponentArr
            .map(comp => comp.link ? comp.link.trim() : '')
            .filter(link => link !== '');

        console.log('final array ', finalArray);
    }



    return (
        <div className='py-5 text-gray-800'>
            <h3 className='text-2xl text-center font-bold'>Create products </h3>
            <div className='max-w-[40rem] mx-auto'>
                <h3 className='font-semibold text-2xl'>Legal Documents</h3>


                {/* upload file */}
                <div className='flex gap-10 items-start pt-10 '>

                    <div >
                        <h4 className='pt-1'>Upload Doc</h4>
                    </div>

                    <div className=''>
                        <label htmlFor="fileUpload"
                            className={clsx(" flex border rounded px-3 py-1 ",

                                { " cursor-not-allowed bg-gray-300 text-gray-400 ": isChecked },
                                { " cursor-pointer ": !isChecked },

                            )}>
                            <span className='text-gray-500'> Choose File</span>


                            <div className='w-[300px] overflow-hidden '>
                                <span className='text-gray-500 ml-3  overflow-scroll'>
                                    {selectedFile?.name ?
                                        <> {selectedFile?.name.length > 15 ?
                                            <>  {selectedFile.name.slice(0, 7)}...{selectedFile.name.slice(selectedFile.name.length - 6, selectedFile.name.length)}  </>
                                            :
                                            <>{selectedFile?.name}  </>}
                                        </>
                                        : <> No file chosen</>}
                                </span>
                            </div>

                            <input
                                disabled={isChecked}
                                className="hidden "
                                type="file"
                                onChange={uploadHandler}
                                name="fileUpload"
                                id="fileUpload"
                            />

                        </label>



                        <p className='text-xs pt-2'>Any document file within 10mb can be uploaded here</p>
                    </div>
                </div>



                {/* checkbox */}
                <div className='flex gap-2'>

                    <input checked={isChecked} type="checkbox" onChange={() => setIsChecked(!isChecked)} name="" id="" />

                    <p>Use link to share a document</p>
                </div>




                {isChecked && <>
                    <form onSubmit={handleSubmit}>
                        {addLinkComponentArr.map(component => <div key={component.id} className='flex items-center gap-5 py-5'>
                            <div>Share doc link : </div>

                            <div>
                                <div className='flex gap-0'>
                                    <div className='text-gray-400 px-2 py-1 border rounded-s-md'>https://</div>
                                    <input
                                        className=' px-2 py-1 border rounded-e-md focus:outline-blue-500'
                                        type="text"
                                        value={component.link}

                                        onChange={(e) => setInputValue(component.id, e)}
                                    />
                                </div>
                            </div>
                        </div>)}




                        <div><CvaButton intent='plain' onClick={addLinkFunction} type='button' size='medium' plusIcon className='border-none bg-transparent hover:border hover:bg-gray-100 hover:text-black ' animate >Add More Link</CvaButton></div>


                        <button className='px-5 py-3 text-white bg-blue-400 my-10 mx-auto' type='submit'>Submit</button>

                    </form>


                </>}




            </div>


        </div>
    )
}

export default page