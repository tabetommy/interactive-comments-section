import React,{useState} from "react";
import axios from "axios";

const ReplyCommentTemplate=({juliosomoImg,username,replyStyle})=>{

    const url=`https://tt-interactive-comments.herokuapp.com/users/${username}`;

    const [text,setText]=useState(`@${username},`);


    const handleChange = (event) => {
        setText(event.target.value)
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post(url,{comment:text})
        .then((response)=>{
           console.log( response.data); 
            window.location.reload();
        })
        .catch(error=>console.log(error));
        
    }
    return(
        <div className={replyStyle}>
                <img className="hidden md:block ml-2 mt-5" src={juliosomoImg} alt="juliosomo"/>
                    <form className='md:flex justify-between items-start w-11/12 mx-auto rounded-lg'>
                        <textarea 
                            className='mt-5 w-full md:w-11/12 mx-auto md:mx-2 px-3 rounded-lg'
                            value={text} 
                            rows="4"   
                            onChange={handleChange}
                        >
                        </textarea>
                        <div className='flex justify-between md:hidden w-full'>
                            <img className="w-12 ml-2 mt-5" src={juliosomoImg} alt="juliosomo"/>
                            <button className='sendBtn rounded-lg px-6 py-3 mr-2 mt-5' onClick={handleSubmit}>REPLY</button>
                        </div>
                        <button className='sendBtn hidden md:block md:w-24 rounded-lg px-6 py-3 mr-2 mt-5 '
                        onClick={handleSubmit}
                        >
                            REPLY
                        </button>
                    </form>
            </div>
   
    )
}

export default ReplyCommentTemplate