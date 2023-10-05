import React, { useContext } from 'react'
import RoomCard from '../components/RoomCard';
import BookForm from '../components/BookForm';
import Context from '../context/Context';

const Home = () => {
  const { bookForm } = useContext(Context)
  return (
    <div className='px-[5%] mt-[50px] mb-[100px] flex justify-center max-w-[1440px] mx-auto' >
      <RoomCard />
      {bookForm && <BookForm />}
    </div>
  )
}

export default Home