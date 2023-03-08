import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Update = () => {
  const [book,setBook] = useState({
    title:"",
    desc:"",
    price:null,
    cover:""
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]:e.target.value}))
    
  }
  console.log(book)
  const handleClick = async e => {
    e.preventDefault()
    try{
      await axios.post("http://localhost:8801/books",book)
      navigate('/books')
    }catch(err){
      console.log('error')
    }
  }

  return (
    <div className='form'>
      <h1>Update the Book</h1>
      <input class='input' type="text" placeholder='title' onChange={handleChange} name='title' />
      <input className='input'  type="text" placeholder='desc' onChange={handleChange} name='desc' />
      <input className='input'  type="number" placeholder='price' onChange={handleChange} name='price' />
      <input className='input' type="text" placeholder='cover' onChange={handleChange} name='cover' />
      <button style={{background:'rgb(236, 96, 61)'}} onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update







