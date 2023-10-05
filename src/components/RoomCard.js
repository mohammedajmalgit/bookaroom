import React, { useContext } from 'react'
import Context from '../context/Context'

const RoomCard = () => {
  const { data, setBookForm, setRoom } = useContext(Context)
  return (
    <>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[20px] mb-[50px]'>
        {data && data.rooms.map((e, id) => {
          return (
            <div className=' shadow-xl h-auto rounded-[10px] bg-[white] text-white font-semibold' key={id}>
              <img src={e.image} alt="" className='h-[250px] w-[100%] rounded-t-[10px] overflow-hidden object-cover' />
              <div className='flex flex-col text-left px-[5px] w-[100%] h-[150px] justify-between mt-[10px] px-[10px] pb-[10px]'>
                <div className='flex flex-col text-black px-[15px]'>
                  <span className='xs:text-[9px] md:text-[19px] font-semibold'>{e.name}</span>
                  <div className='flex justify-between'>
                    <span className='text-[14px] text-[gray]'>{e.room_type}</span>
                    <span className='text-[20px] text-right font-bold'>{e.price}$</span>
                  </div>
                  <p className='text-[13px]'>{e.details}</p>
                </div>
                <div className='flex flex-col justify-end items-end'>
                  <button
                    onClick={() => {
                      setBookForm(true)
                      setRoom(e)
                    }}
                    type="submit"
                    className={`${e.available ? "bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl w-[80px]" : "bg-[grey] w-[150px] pointer-events-none"} text-white  focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                  >
                    {e.available ? "Book" : "Not available"}
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RoomCard