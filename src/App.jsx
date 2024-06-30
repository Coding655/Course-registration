import './App.css'
import Header from './components/header/Header'
import Courses from './components/Courses/Courses'
import Bookmark from './components/Bookmark/Bookmark'
import { useState } from 'react'

function App() {
  const [name, setName] = useState([])
  const [totalPrice, setTotalPrice] = useState(0);
  const [credit, setCredit] = useState(0);

  
  const handleSelectName = user =>{
    // console.log('clicked')
    const newSelectName = [...name, user];
    setName(newSelectName)
  }

  const handleTotalPrice = price =>{
    console.log('hello', price)
    const newTotal =totalPrice + price;
    setTotalPrice(newTotal)
  }

  const handleCreditTime = time =>{
    const newCredit = credit + time;
    setCredit(newCredit)
    console.log('hello again',time)
  }
  

  return (
    <>
      <Header></Header>
      <div className='flex  justify-between max-w-[1100px] ml-[200px]'>
        <Courses handleCreditTime={handleCreditTime} handleTotalPrice={handleTotalPrice} handleSelectName={handleSelectName}></Courses>
        <Bookmark credit={credit} totalPrice={totalPrice} name={name}></Bookmark>
      </div> 
    </>
  )
}

export default App
