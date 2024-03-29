import React,{useState, useRef} from "react";
import  "./style.css";
import iconPlus from "../images/icon-plus.svg"
import iconMinus from "../images/icon-minus.svg"
import iconDelete from "../images/icon-delete.svg";
import iconEdit from "../images/icon-edit.svg";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { DeleteHandler, UpdateHandler } from "./AjaxHandler";



const JulioReplyTemplate=({usersDataThree,reply,handleSetReply, img})=>{
    const [count1, setCount]=useState(0);
    const [showUpdateBtn, setShowUpdateBtn]=useState(false);
    const ref=useRef(null);
  
    //handle upvoting and downvoting of comment
    const increment1=()=>setCount(prevcount=>prevcount+1);
    const decrement1=()=>setCount(prevcount=>prevcount-1);

    const handleChange=(event)=>{
        handleSetReply(event.target.value);
    }
    
    const handleUpdate=()=>{
        //handle update request
        UpdateHandler(usersDataThree.comments[0].user.username, reply)
        setShowUpdateBtn(false);
        
    }

    const handleDelete=()=>{
        //handle delete request  
        DeleteHandler(usersDataThree.comments[0].user.username,handleSetReply)
    }

    const handleEditView=()=>{
        ref.current.focus();
        setShowUpdateBtn(true);
    }

    dayjs.extend(relativeTime);

    return(
        <div className='relative flex justify-end w-4/5 mx-auto mt-9'>
            <div className="absolute inset-y-0 left-0 md:left-16 border-r-2 border-solid border-color1">
            </div>
            <div className='w-4/5'>
                <div className="flex-row md:flex justify-around items-center w-full mr-24 rounded-lg bg-white mt-9">
                    <div className="con-1 hidden md:block w-auto px-3 py-3 mx-4 rounded-lg">
                        <div onClick={increment1}><img src={iconPlus} alt="icon-plus"/></div>
                        <div className="py-2">{count1}</div>
                        <div onClick={decrement1}><img src={iconMinus} alt="icon-minus"/></div>
                    </div>
                    <div className="w-4/5 md:w-11/12 my-7 mx-auto">
                        <div className="flex justify-between">
                            <div className="flex items-center pt-4">
                                <span className="w-10">
                                    <img src={img} alt="juliosomo" />
                                </span>
                                <span className="px-5">{usersDataThree.comments[1].replies[1].user.username}</span>
                                <span className='you-con'>You</span>
                                <span>{dayjs().fromNow()}</span>
                            </div>
                            <div className="hidden md:flex items-center mr-4">
                                <div className='deleteIcon flex items-center' onClick={handleDelete}>
                                    <span className="px-2"><img src={iconDelete} alt="icon-reply"/></span>
                                    <span>Delete</span>
                                </div>
                                <div className='editIcon flex items-center' onClick={handleEditView}>
                                    <span className="px-2"><img src={iconEdit} alt="icon-reply"/></span>
                                    <span>Edit</span>
                                </div>
                            </div>
                            </div>
                            <textarea
                                className='mt-5 w-full md:w-11/12 mx-auto md:mx-2 px-3 border-none'
                                value={reply}
                                rows="2"
                                ref={ref}
                                onChange={handleChange}
                            ></textarea>
                            {showUpdateBtn && <button 
                            className="sendBtn flex rounded-lg px-6 py-3 mr-2 mt-5"
                            onClick={handleUpdate}>
                                UPDATE
                            </button> }
                    </div> 
                    <div className="flex justify-between items-center md:hidden w-4/5 mx-auto pb-4">
                        <div className="con-1 flex items-center w-auto px-3 py-1 rounded-lg">
                            <div onClick={increment1}><img src={iconPlus} alt="icon-plus"/></div>
                            <div className="mx-2">{count1}</div>
                            <div onClick={decrement1}><img src={iconMinus} alt="icon-minus"/></div>
                        </div>
                        <div className='flex'> 
                            <div className='deleteIcon flex items-center' onClick={handleDelete}>
                                <span className="px-2"><img src={iconDelete} alt="icon-reply" /></span>
                                <span >Delete</span>
                            </div>
                            <div className='editIcon flex items-center' onClick={handleEditView}>
                                <span className="px-2"><img src={iconEdit} alt="icon-reply" /></span>
                                <span >Edit</span>
                            </div>
                        </div>    
                    </div>          
                </div>
            </div>
        </div>
    )
}

export default JulioReplyTemplate