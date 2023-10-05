import React,{ useState } from "react";
import Mybook from "../assets/Recipe book-pana.svg";
import axios from "axios";

const ViewDetils = (props) => {
    const [isEdit, setisEdit] = useState(false)
    const [data,setData] = useState({
        title:"",
        author:"",
    })

    const toggleEdit =()=>{
        setisEdit(!isEdit);
    }
    const handelInputChange = (event) => {
        setData({...props.book,[event.target.name]:event.target.value})
        console.log(props.book)
    }

    const handelEdit = (event) => {
        event.preventDefault();
        console.log(data)
        axios.put(`http://68.178.162.203:8080/application-test-v1.1/books/${props.book.id}`,data).then(res=>console.log('Data updated successfully:', res));
        props.viewDetails();
    }
  return (
    <div>
      <div>
        {props.viewPopup ? (
          <div className="fixed top-0 left-0 w-full h-screen bg-black/60 z-10"></div>
        ) : (
          ""
        )}
        <div className="fixed bg-white break-words w-80 h-fit p-10 top-[150px] left-[550px] shadow-lg shadow-[#BEFFF7] z-10 flex flex-col justify-center items-center">
          <div>
            <img src={Mybook} className="w-40" />
          </div>
          { isEdit ? 
            (<>
            <form>
                author:-<input type="text" name="author" onChange={handelInputChange} />
            <div className='text-center flex justify-end mt-4'>
           <p className='border border-[#0E21A0] p-1 w-16 rounded-md hover:bg-[#6499E9] hover:text-white mr-2'onClick={props.viewDetails}>Cancel</p> 
           <p className='border border-[#0E21A0] p-1 w-16 rounded-md bg-[#6499E9] hover:text-white' onClick={handelEdit}>Submit</p> 
        </div>
            </form>
        </>) : (<>
            <div className="text-center">
            <p className="font-medium text-[#6499E9]">{props.book.title}</p>
            <p className="font-serif text-[#0E21A0]">{props.book.author}</p>
          </div>
          <div className="text-center">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
              lorem ante,
            </p>
          </div>
          <div className='text-center flex justify-end mt-4'>
           <p className='border border-[#0E21A0] p-1 w-14 rounded-md hover:bg-[#6499E9] hover:text-white mr-2'onClick={toggleEdit}>Edit</p> 
           <p className='border border-[#0E21A0] p-1 w-16 rounded-md bg-[#6499E9] hover:text-white' onClick={props.viewDetails}>Cancel</p> 
        </div>
        </>)
        }
        </div>
      </div>
    </div>
  );
};

export default ViewDetils;
