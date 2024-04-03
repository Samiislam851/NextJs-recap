'use client'
import React, { useState } from 'react'
import './createProduct.css'
type Props = {}

const page = (props: Props) => {


    const [selectedFile, setSelectedFile] = useState<any>({})


    const uploadHandler = (e: any) => {
        if (e.target.files.length < 2) {
            setSelectedFile(e.target.files[0]);
        } else {
            alert('select only one file please')
        }


    }



    return (
        <div className='py-5 text-gray-800'>
            <h3 className='text-2xl text-center font-bold'>Create products </h3>
            <div className='max-w-[40rem] mx-auto'>
                <h3 className='font-semibold text-2xl'>Legal Documents</h3>


                {/* upload file */}
                <div className='flex gap-5 items-start pt-10 '>

                    <div >
                        <h4 className='pt-1'>Upload Doc</h4>
                    </div>

                    <div className='border'>

                        <label htmlFor="fileUpload" className="custom-file-upload">
                            Choose File


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
                                className="hidden "
                                type="file"
                                onChange={uploadHandler}
                                name="fileUpload"
                                id="fileUpload"
                            />

                        </label>



                        <p className='text-xs'>Any document file within 10mb can be uploaded here</p>
                    </div>
                </div>








            </div>


        </div>
    )
}

export default page