import React,{useState} from "react";
import iconPlus from "../images/icon-plus.svg";
import iconMinus from "../images/icon-minus.svg";
import iconReply from "../images/icon-reply.svg";
import SomoReply from "./SomoReply";

const SecondReplyTemplate=({usersData,reply, handleReply})=>{

    const [count, setCount]=useState(usersData[0].score);
    const [show,setShow]= useState(false);
    const[comment,setComment]=useState(`@${usersData[0].user.username},`);
    const [response, setResponse]=useState(`@${usersData[0].user.username}, ${usersData[1].content}`)

    // increase/decrease comment's vote
    const increment=()=>setCount(prevcount=>prevcount+1);
    const decrement=()=>setCount(prevcount=>prevcount-1);

    const handleShow=()=>{
        return(setShow(!show))
    };

    const handleChange=(event)=>{
        setComment(event.target.value);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(comment);
    }

    
       return(
        <div className='relative flex justify-end w-4/5 mx-auto mt-9'>
            <div className="absolute inset-y-0 left-0 md:left-16 border-r-2 border-solid border-color1">
            </div>
            <div className='w-4/5'>
            <section className="flex-row md:flex justify-around items-center w-full mr-24 rounded-lg bg-white" >
                    <div className="con-1 hidden md:block w-auto px-3 py-3 mx-4 rounded-lg">
                        <div onClick={increment}><img src={iconPlus} alt="icon-plus"/></div>
                        <div className="py-2">{count}</div>
                        <div onClick={decrement}><img src={iconMinus} alt="icon-minus"/></div>
                    </div>
                    <div className="w-4/5 md:w-11/12 my-7 mx-auto">
                        <div className="flex justify-between">
                            <div className="flex items-center pt-4">
                                <span className="w-10">
                                    <img src={usersData[0].user.image.png} alt="ramsesmiron" />
                                </span>
                                <span className="px-5">{usersData[0].user.username}</span>
                                <span>{usersData[0].createdAt}</span>
                            </div>
                            <div className="replyIcon hidden md:flex items-center mr-4">
                                <span className="px-2" onClick={handleShow}><img src={iconReply} alt="icon-reply"/></span>
                                <span>Reply</span>
                            </div>
                            </div>

                        <div className="mt-3">
                            {'@maxblagun, ' + usersData[0].content}
                        </div>              
                    </div> 
                    <div className="flex justify-between md:hidden w-4/5 mx-auto pb-4">
                        <div className="con-1 flex items-center w-auto px-3 py-1 rounded-lg">
                            <div onClick={increment}><img src={iconPlus} alt="icon-plus"/></div>
                            <div className="mx-2">{count}</div>
                            <div onClick={decrement}><img src={iconMinus} alt="icon-minus"/></div>
                        </div>
                        <div className="replyIcon flex items-center">
                            <span className="px-2" onClick={handleShow}><img src={iconReply} alt="icon-reply"/></span>
                            <span>Reply</span>
                        </div>
                    </div>          
                </section>
                {show?<div className="bg-white flex-row md:flex justify-around items-start  w-full mx-auto rounded-lg mt-1.5 pb-4">
                        <img className="hidden md:block ml-2 mt-5" src={usersData[1].user.image.png} alt="juliosomo" />
                        <form className='md:flex justify-between items-start w-11/12 mx-auto rounded-lg'>
                            <textarea
                                className='mt-5 w-full md:w-11/12 mx-auto md:mx-2 px-3 rounded-lg'
                                value={comment}
                                rows="4"
                                onChange={handleChange}
                                name="tex"></textarea>
                            <div className='flex justify-between md:hidden w-full'>
                                <img className="w-12 ml-2 mt-5" src={usersData[1].user.image.png} alt="juliosomo" />
                                <button className='sendBtn rounded-lg px-6 py-3 mr-2 mt-5' onClick={handleSubmit}>REPLY</button>
                            </div>
                            <button 
                            className='sendBtn hidden md:block md:w-24 rounded-lg px-6 py-3 mr-2 mt-5 '
                            onClick={handleSubmit}
                            >
                                REPLY
                            </button>
                        </form>
                </div>:
                null}
                <SomoReply 
                usersData={usersData}
                julioResponse={response}
                username={'ramsesmiron'}
                handleResponse={setResponse}
                />
                {reply && <SomoReply
                    usersData={usersData}
                    julioResponse={reply}
                    username={'maxblagun'}
                    handleResponse={handleReply}
                />}
            </div>
        </div>
       )
}

export default SecondReplyTemplate