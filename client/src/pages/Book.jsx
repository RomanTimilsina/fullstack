import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Book = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try{
        const res = await axios.get("http://localhost:8801/books");
        setBooks(res.data);
        console.log(res.data)
      }catch(err){
        console.log(err);
      }
    }

    fetchAllBooks()
  },[]);

  const handleDelete = async (id) => {
    try{
      await axios.delete("http://localhost:8801/books/"+id)
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }
  
  return (
    <>
    <h1>Lama Book Shop</h1>
    <div className='books'>
      {
        books.map(book => (
           <div className='book' key={book.id}>
            {book.cover && <img src={book.cover} alt=''/>}
            <h2 style={{height:'20px'}}>{book.title}</h2>
            <p style={{height:'50px'}}>{book.desc}</p>
            <span style={{height:'20px'}}>{book.price}</span>
            <button className='update' ><Link class='update' style={{border:'none'}} to={`/update/${book.id}`}>Update</Link></button>
            <button className='delete' onClick={() => handleDelete(book.id)}>Delete</button>
            </div>
            
        ))
      }
      
    </div>
    <div 
    style={{height:'20px',margin:'20px'}}>
    <button className='addNewBook'>
      <Link to='/add' class='link' >Add new book</Link>
    </button>
    </div>
    
    </>
  )
}

export default Book

