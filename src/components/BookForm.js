import React, { useState, useEffect, useContext } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import close from '../assets/cancel.png'
import Context from '../context/Context';

const BookForm = () => {
  const { bookingData, setBookingData, room, setBookForm, userBooking, setUserBooking } = useContext(Context)

  const [isValidName, setIsValidName] = useState(true)
  const [isValidMail, setIsValidMail] = useState(true)
  const [isValidDate, setIsValidDate] = useState(true)

  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    setBookingData({
      ...bookingData,
      selectedRoom: room.name,
      roomType: room.room_type,
      image: room.image,
      price: room.price
    });
    return () => {
      document.body.style.overflow = 'visible';
    }
  }, [])


  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData({
      ...bookingData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Validate Name
    if (bookingData.name.length < 2) {
      toast.error('Enter Name', {
        position: 'top-right',
        autoClose: 1500,
      });
      setIsValidName(false)
    }
    // Validate Date
    if (bookingData.checkInDate === '' && bookingData.checkOutDate === '') {
      toast.error('Enter Date', {
        position: 'top-right',
        autoClose: 1500,
      });
      setIsValidDate(false)
    }

    // Validate Email
    if (bookingData.email === "") {
      toast.error('Enter Mail Address', {
        position: 'top-right',
        autoClose: 1500,
      });
      setIsValidMail(false)
    } else if (validateEmail(bookingData.email)) {
      setIsValidMail(true)
    } else {
      toast.error('Invalid Mail Address', {
        position: 'top-right',
        autoClose: 1500,
      });
    }
    if (isValidDate && isValidMail && isValidName) {
      setUserBooking([...userBooking, bookingData])
      setBookingData("")
      setBookForm(false)
      toast.success('Booking Successfull', {
        position: 'top-right',
        autoClose: 1500,
      });
    }
  };

  // Mail validation
  function validateEmail(email) {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  }

  return (
    <div className='fixed top-0 h-[100vh] w-[100vw] bg-black shadow-md bg-opacity-70 flex justify-center items-center'>
      <div className='min-h-[500px] w-[80%] max-w-[800px] bg-white opacity-100 flex flex-col p-[10px] md:p-[20px] rounded-[10px]'>
        <div className='flex justify-end'>
          <img
            src={close}
            className='rounded-[50px] h-[30px] w-[30px] border-solid border-black border-2 md:right-10 hover:cursor-pointer select-none'
            onClick={() => setBookForm(false)}
            alt=''
          ></img>
        </div>
        <div className='w-[90%] mx-auto h-[100%] flex flex-col md:justify-center items-center'>
          <h2 className='text-[26px] sm:text-[32px] md:text-[40px] font-semibold'>Booking Form</h2>
          <div className='h-[1px] w-[75%] bg-[gray] md:my-[20px]'></div>
          <form onSubmit={handleFormSubmit} className='mt-[20px] h-[80%] flex flex-col gap-[10px] items-center'>
            <div className='grid md:grid-cols-2 grid-cols-1 w-[100%] md:gap-[10px]'>
              <div className='flex flex-col text-left'>
                <label htmlFor="">Selected Room:</label>
                <input
                  readOnly
                  type="text"
                  value={room.name}
                  className='border-[1px] p-[4px] border-black rounded-[5px] xs:w-[100%] md:w-[250px]  lg:w-[300px]'
                />
              </div>
              <div className='flex flex-col text-left'>
                <label htmlFor="">Room Type:</label>
                <input
                  readOnly
                  type="text"
                  value={room.room_type}
                  className='border-[1px] p-[4px] border-black rounded-[5px] xs:w-[100%] md:w-[250px]  lg:w-[300px]'
                />
              </div>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 w-[100%] md:gap-[10px]'>
              <div className='flex flex-col text-left'>
                <label htmlFor="name">Name:</label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  value={bookingData.name}
                  onChange={handleInputChange}
                  className='border-[1px] p-[4px] border-black rounded-[5px] xs:w-[100%] md:w-[250px]  lg:w-[300px]'
                />
              </div>
              <div className='flex flex-col text-left'>
                <label htmlFor="email">Email:</label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  value={bookingData.email}
                  onChange={handleInputChange}
                  className='border-[1px] p-[4px] border-black rounded-[5px] xs:w-[100%] md:w-[250px]  lg:w-[300px]'
                />
              </div>
            </div>
            <div className='flex flex-wrap sm:flex-nowrap gap-[10px] mt-[5px] w-[100%]'>
              <div className='flex flex-col text-left'>
                <label htmlFor="checkInDate">Check-In Date:</label>
                <input
                  required
                  type="date"
                  id="checkInDate"
                  name="checkInDate"
                  value={bookingData.checkInDate}
                  onChange={handleInputChange}
                  className='border-[1px] p-[4px] border-black rounded-[5px] xs:w-[150px] md:w-[250px]  lg:w-[300px]'
                  min={today}
                />
              </div>
              <div className='flex flex-col text-left'>
                <label htmlFor="checkOutDate">Check-Out Date:</label>
                <input
                  type="date"
                  id="checkOutDate"
                  name="checkOutDate"
                  value={bookingData.checkOutDate}
                  onChange={handleInputChange}
                  className='border-[1px] p-[4px] border-black rounded-[5px] xs:w-[150px] md:w-[250px]  lg:w-[300px]'
                  min={bookingData.checkInDate}
                />
              </div>
            </div>
            <div className='flex justify-center mt-[30px]'>
              <button type="submit" className='my-auto bg-[red] w-[120px] text-white py-[10px] px-[15px] flex justify-center rounded-[5px] hover:cursor-pointer hover:scale-[1.1] transition-transform select-none '>Reserve</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BookForm