import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";

const Content = () => {

    const[quote, setQuote] = useState("");
    const[author, setAuthor] = useState("");
  

    const fetchApi = ()=>{
    fetch('https://dummyjson.com/quotes')
    .then(res => res.json())
    .then(data=>{
        if(data && data.quotes ){
            const randomIndex = Math.floor(Math.random() * data.quotes.length);
            setQuote(data.quotes[randomIndex].quote)
            setAuthor(data.quotes[randomIndex].author)
           
        }

    })
    .catch(error =>{
        console.log("Error fetching the Api", error);
    })
    
    }

    console.log(quote)
    console.log(author)

    useEffect(()=>{
        fetchApi()
    }, [])



 const handleClick = ()=>{
    fetchApi()
 }
    
  return (
  <>
    <h2>Quotes for you everyday </h2>
    <div className='arrow' onClick={handleClick}>
      <button>NewOne</button>
    </div>

    <div className='content'>

     <h3 className='quote'>{quote}</h3>
     <h4 className='author'><b>~ </b>{author}</h4>

    </div>
  </>
  )
}

export default Content
