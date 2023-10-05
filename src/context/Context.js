import { createContext, useEffect, useState } from "react";
import axios from 'axios'
const Context = createContext()

export const ContextProvider = ({ children }) => {

  const [data, setData] = useState('') //Data from api
  const [bookForm, setBookForm] = useState(false) //Show booking form
  const [room, setRoom] = useState() // Selected Room
  const [userBooking, setUserBooking] = useState([]) //Booked Rooms
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    checkInDate: '',
    checkOutDate: '',
  }); // Selected Room and Details

  useEffect(() => {
    getProductData()
  }, [])

  const getProductData = async () => {
    try {
      let data = await axios.get(`https://hyzsvlqncu.api.quickmocker.com/bookaroom`)
      // console.log(data.data.rooms);
      setData(data.data)
    } catch (err) {
      console.log(err);
      setData("")
    }
  }
  return (
    <Context.Provider
      value={{
        data,
        setData,
        bookForm,
        setBookForm,
        room,
        setRoom,
        bookingData,
        setBookingData,
        userBooking,
        setUserBooking
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context;