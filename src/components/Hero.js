import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import heroGif from "../assets/Reading book (1).gif";
import Card from "../components/Card";

const Hero = (props) => {
  const [title, settitle] = useState();
  const [books, setbooks] = useState([]);
  const [filteredBook, setfilteredBook] = useState([]);

  useEffect(() => {
    axios
      .get("http://68.178.162.203:8080/application-test-v1.1/books")
      .then((res) => {
        setbooks(res.data.data);
      });
  });

  const fiterSearchedBook = () => {
    let filtered = books.filter((book)=>book.title === title);
    setfilteredBook(filtered);
  };

  return (
    <>
      <div className="mt-5 flex h-fit w-full">
        <img src={heroGif} className="w-[50%] h-[400px]" />
        <div className="relative w-full text-center">
          <div className="absolute left-[35%] top-1/2">
            <p className="font-semibold text-[#6499E9]">
              "If you don’t like to read, you haven’t found the right book." –
              J.K. Rowling
            </p>
            <h1 className="font-extrabold text-2xl">Find Your Book Here!</h1>
            <div className="flex items-center w-full my-4">
              <input
                type="text"
                placeholder="Title Here"
                value={title}
                onChange={(event) => {
                  settitle(event.target.value);
                }}
                className="border border-r-0 border-[#6499E9] w-[100%] h-10 p-4 rounded-r-none rounded-lg outline-none"
              />
              <span className="w-10 h-10">
                <BsSearch
                  className="border border-[#6499E9] border-l-0 w-10 h-10 rounded-l-none rounded-lg"
                  onClick={fiterSearchedBook}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 h-fit p-10">
        <h1 className="font-bold text-lg text-[#6499E9]">
          Books Available For You
        </h1>
        <div className="container">
          {filteredBook.length
            ? filteredBook.map((book, index) => {
                return <Card key={index} book={book} />;
              })
            : books.map((book, index) => {
                return <Card key={index} book={book} />;
              })}
        </div>
      </div>
    </>
  );
};

export default Hero;
