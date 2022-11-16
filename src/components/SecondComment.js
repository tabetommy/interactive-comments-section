import React,{useState} from "react";
import Replies from "./Replies";
import  "./style.css";
import iconReply from "../images/icon-reply.svg"
import iconPlus from "../images/icon-plus.svg"
import iconMinus from "../images/icon-minus.svg" 




const SecondComment=({usersDataTwo})=>{
    const [count, setCount]=useState(usersDataTwo.comments[1].score);
    const [showReplyCon,setShowReplyCon]= useState(false);
    const [text,setText]=useState(`@${usersDataTwo.comments[1].user.username},`);
    const [replies,setReplies]=useState([]);

    const increment=()=>setCount(prevcount=>prevcount+1);
    const decrement=()=>setCount(prevcount=>prevcount-1);
    const handleShowReplyCon=()=>{
        return(setShowReplyCon(!showReplyCon))
    };
    const handleChange = (event) => {
        setText(event.target.value)
    };
    const pasteReplies=(event)=>{
        event.preventDefault();
        setShowReplyCon(false);
        setReplies([...replies,text]);
        setText(`@${usersDataTwo.comments[1].user.username},`);
        
    };
   
    return(
        <div>
            <section className="main-con flex-row md:flex justify-around items-center w-4/5 mx-auto rounded-lg mt-7 mb-1.5" >
                <div className="con-1 hidden md:block w-auto px-3 py-3 mx-4 rounded-lg">
                    <div onClick={increment}><img className="hoverElements" src={iconPlus} alt="icon-plus"/></div>
                    <div className="py-2 text-blue-800 cursor-pointer">{count}</div>
                    <div onClick={decrement}><img src={iconMinus} alt="icon-minus"/></div>
                </div>
                <div className="w-4/5 md:w-11/12 my-7 mx-auto">
                    <div className="flex justify-between pt-4">
                        <div className="flex items-center">
                            <span className="w-10">
                                <img src={usersDataTwo.comments[1].user.image.png} alt="amyrobson" />
                            </span>
                            <span className="px-5">{usersDataTwo.comments[1].user.username}</span>
                            <span>{usersDataTwo.comments[1].createdAt}</span>
                        </div>
                        <div className="replyIcon hidden md:flex items-center mr-4">
                            <span className="px-2" onClick={handleShowReplyCon}><img src={iconReply} alt="icon-reply"/></span>
                            <span>Reply</span>
                        </div>
                    </div>

                    <div className="mt-3">
                        {usersDataTwo.comments[1].content}
                    </div>              
                </div>  
                <div className="flex justify-between md:hidden w-4/5 mx-auto pb-4">
                    <div className="con-1 flex items-center w-auto px-3 py-1 rounded-lg">
                        <div onClick={increment}><img src={iconPlus} alt="icon-plus"/></div>
                        <div className="mx-2">{count}</div>
                        <div onClick={decrement}><img src={iconMinus} alt="icon-minus"/></div>
                    </div>
                    <div className="replyIcon flex items-center">
                        <span className="px-2" onClick={handleShowReplyCon}><img src={iconReply} alt="icon-reply"/></span>
                        <span>Reply</span>
                    </div>
                </div>                   
            </section>
            {showReplyCon?
            <div className="bg-white flex-row md:flex justify-around items-start  w-4/5 mx-auto rounded-lg pb-4">
                <img className="hidden md:block ml-2 mt-5" src={usersDataTwo.currentUser.image.png} alt="juliosomo"/>
                    <form className='md:flex justify-between items-start w-11/12 mx-auto rounded-lg'>
                        <textarea 
                            className='mt-5 w-full md:w-11/12 mx-auto md:mx-2 px-3 rounded-lg'
                            value={text} 
                            rows="4"   
                            onChange={handleChange}
                        >
                        </textarea>
                        <div className='flex justify-between md:hidden w-full'>
                            <img className="w-12 ml-2 mt-5" src={usersDataTwo.currentUser.image.png} alt="juliosomo"/>
                            <button className='sendBtn rounded-lg px-6 py-3 mr-2 mt-5' onClick={pasteReplies}>REPLY</button>
                        </div>
                        <button className='sendBtn hidden md:block md:w-24 rounded-lg px-6 py-3 mr-2 mt-5 '
                        onClick={pasteReplies}
                        >
                            REPLY
                        </button>
                    </form>
            </div>
            :
            null}
            <Replies usersDataThree={usersDataTwo} repliesmax={replies}/>
        </div>       
    )
}

export default SecondComment;