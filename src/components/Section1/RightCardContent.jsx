import React from 'react'

const RightCardContent = (props) => {
  return (
   
         <div className='absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center text-xl font-bold'>{props.id+1}</h2>
            <div>
                <p className='text-white mb-14 leading-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum nihil, tempora voluptas iure laudantium vel corrupti, praesentium fugit adipisci dolores obcaecati ullam perspiciatis dolor, dignissimos ad dolorem ex. Velit?</p>
                <div className='flex justify-between text-gray-600'>
                    <button className='bg-blue-600 text-white font-medium px-7 py-3 rounded-full'>{props.tag}</button>
                </div>
            </div>
        </div>
    
  )
}

export default RightCardContent