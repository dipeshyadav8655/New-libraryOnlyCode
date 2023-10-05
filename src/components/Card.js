import React,{ useState } from 'react';
import Book from '../assets/Recipe book-pana.svg'
import ViewDetils from './ViewDetils';

const Card = (props) => {
  const [viewPopup, setviewPopup] = useState(false)
  const viewDetails = () =>{
    setviewPopup(!viewPopup);
  }
  return (
    <div className='w-80 h-fit mr-5 mt-5 p-5 border border-[#6499E9] rounded-md shadow-xl hover:shadow-[#6499E9]'>
        <div>
            <img src={Book} className='' />
        </div>
        <div className='flex justify-between text-xs text-[#6499E9] w-full h-fit p-4'>
            <p>Pages:<span className='text-black'>{props.book.pages} </span></p>
            <p>language: <span className='text-black'>{props.book.language}</span></p>
        </div>
        <div className='text-center'>
            <p className='font-medium text-[#6499E9]'>{props.book.title}</p>
            <p className='font-serif text-[#0E21A0]'>{props.book.author}</p>
        </div>
        <div className='text-center flex justify-end'>
           <p className='border border-[#0E21A0] p-1 w-14 rounded-md hover:bg-[#6499E9] hover:text-white' onClick={viewDetails}>View</p> 
        </div>
        {
          viewPopup ? <ViewDetils viewPopup={viewPopup} book={props.book} viewDetails={viewDetails}/> : ""
        }
    </div>
  )
}

export default Card