import React, { useContext, useState } from 'react'
import Context from '../context/Context'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const { userBooking, setUserBooking } = useContext(Context)
  const [confirm, setConfirm] = useState(false)
  const [tempId, setTempId] = useState(0)

  const cancelHandle = (id) => {
    setUserBooking(removeItemAtIndex(userBooking, id))
    toast.warning('Booking Cancelled', {
      position: 'top-right',
      autoClose: 1500,
    });
  }

  // Remove From Booked Array
  function removeItemAtIndex(array, index) {
    return [...array.slice(0, index), ...array.slice(index + 1)];
  }
  return (
    <div className='w-[100vw] py-[30px] '>
      <span className='font-bold text-[34px] py-[20px]'>Your Bookings</span>
      {userBooking.length === 0 ?
        <div className='w-[100%] h-[300px] flex flex-col items-center justify-center'>
          <span className='font-bold'>
            No Booking Available
          </span>
        </div> : ""}
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-[20px] px-[5%] '>
        {userBooking && userBooking.map((e, id) => {
          return (
            <div className='h-[250px] py-[10px] px-[10px] shadow-xl rounded-[10px] border-[2px] flex text-left gap-[10px] font-semibold mt-[20px]' key={id}>
              <div className='flex flex-col w-[50%]'>
                <img src={e.image} alt="" className='h-[150px] w-[100%] my-auto rounded-[10px] overflow-hidden mb-[10px] object-cover' />
                <span className='text-[12px]'>{e.selectedRoom}</span>
                <span className='text-[gray] text-[11px]'>{e.roomType}</span>
                <span>Price : {e.price}</span>
              </div>
              <div className='flex flex-col justify-between w-[50%]'>
                <div className='flex flex-col gap-[5px] mt-[20px] text-[14px]'>
                  <span className=''>{e.name}</span>
                  <span className='text-[12px]'>{e.email}</span>
                  <span className=''>{e.checkInDate} to {e.checkOutDate}</span>
                </div>
                <div>
                  <span>Booking Status: Success</span>
                  <button className='bg-[red] text-white px-[10px] sm:px-[15px] py-[5px] rounded-[5px] hover:cursor-pointer hover:scale-[1.05] transition-transform select-none mt-[3px]'
                    onClick={() => {
                      setConfirm(true)
                      setTempId(id)
                    }}
                  >Cancel Booking</button>
                </div>
              </div>
            </div>
          )
        })
        }
      </div>
      {confirm &&
        <div className='fixed top-0 h-[100vh] w-[100vw] bg-black bg-opacity-70 flex justify-center items-center'>
          <div className='h-[200px] sm:w-[500px] bg-white opacity-100 flex flex-col justify-evenly items-center p-[20px] rounded-[10px]'>
            <span className='font-bold'>Confirm to cancel this booking</span>
            <div className='flex gap-[30px]'>
              <button
                className='bg-[red] text-white px-[15px] py-[3px] rounded-[3px] hover:cursor-pointer hover:scale-[1.1] transition-transform select-none'
                onClick={() => {
                  cancelHandle(tempId)
                  setConfirm(false)
                }}
              >Cancel</button>
              <button
                className='border-[red] border-[2px] text-black px-[15px] py-[3px] rounded-[3px] hover:cursor-pointer hover:scale-[1.1] transition-transform select-none'
                onClick={() => setConfirm(false)}
              >Close</button>
            </div>
          </div>
        </div>
      }
    </div >
  )
}

export default Dashboard