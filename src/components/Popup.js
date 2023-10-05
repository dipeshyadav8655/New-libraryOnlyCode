import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Popup = (props) => {
  const [payload, setpayload] = useState({
    title:"",
    author:"",
  }) 

  const [title,setTitle] = useState("");
  const [author,setAuthor] = useState("");
  const [books, setbooks] = useState([]);

  
  useEffect(() => {
    axios
      .get("http://68.178.162.203:8080/application-test-v1.1/books")
      .then((res) => {
        setbooks(res.data.data);
      });
  });

    const handleAuthor=(event)=>{
      setAuthor(event.target.value);
    }

    const handleTitle=(event)=>{
      setTitle(event.target.value)
    }

    const handleAdd=()=>{
      const newBook = { title: title, author: author };
      setbooks([...books, newBook]);
      // setpayload({...payload,title:title,author:author})
      books.push(payload);
            axios.post('http://68.178.162.203:8080/application-test-v1.1/books',newBook).then(res=>{
        console.log('Data posted successfully:', res);
        props.togglePopup();
      })
    }


  return (
    <div>
        <div>
        {props.viewPopup ? (
          <div className="fixed top-0 left-0 w-full h-screen bg-black/60 z-10">
            <div className="fixed bg-white w-fit h-fit p-10 top-[150px] left-[550px] shadow-lg shadow-[#BEFFF7] z-10 flex flex-col justify-center">
          <label htmlFor="Title" className="font-sans">
            Title:-
          </label>
          <input type="text" id="Title" onChange={handleTitle}/>
          <label htmlFor="Author" className="font-sans">
            Author:-
          </label>
          <input type="text" id="Author" onChange={handleAuthor}/>
          <button type="submit" className="p-1 bg-[#6499E9] w-fit h-fit" onClick={handleAdd}>
            Save
          </button>
        </div>
          </div>
        ) : (
          ""
        )}
        
      </div>
    </div>
  )
}

export default Popup