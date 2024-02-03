import React from 'react'
import Ku from '../../assets/logos/ku.png'
import Avatar from '../../assets/logos/avatar.jpg';
import BarCode from '../../assets/barcode/barcode.png';

function IdCard() {
    return (
        <div className=' text-[black] p-2 flex flex-col justify-start items-stat rounded-xl bg-white w-[18rem]'>
            <div className='flex w-full justify-start items-center'>
                <img className='h-16 w-16' src={Ku} />
                <div className='flex flex-col justify-center items-center'>
                    <h3 className='text-[1.5rem] font-bold'>
                        KATHMANDU
                    </h3>
                    <h3 className='text-[1.5rem] font-bold'>
                        UNIVERSITY
                    </h3>
                </div>
            </div>
            <div className='w-full text-[0.8rem] flex flex-col justify-center items-center'>
                <h5>
                    Dhulikhel, Kavre, Nepal
                </h5>
                <h3 className='font-bold text-[1.5rem] text-[red]'>
                    STUDENT
                </h3>
            </div>
            <div className='w-[100%] text-[0.8rem]'>
                <img draggable='false' className='mx-auto object-cover  h-[8rem] w-[7rem]' src={Avatar} />
                <div className='mx-auto my-2 flex flex-col justify-center items-center'>
                    <h3 className='text-[1.5rem] font-bold'>Anish Joshi</h3>
                    <h3>Bsc. Computer Science</h3>
                    <h3>School of Science</h3>
                    <h3>Validity 31/06/2024 </h3>
                </div>
                <img className='w-[80%] mx-auto' src={BarCode}/>
            </div>

        </div>
    )
}

export default IdCard