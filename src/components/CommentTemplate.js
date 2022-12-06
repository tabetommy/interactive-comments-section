import React,{useState} from "react";
import  "./style.css";
import iconReply from "../images/icon-reply.svg";
import iconPlus from "../images/icon-plus.svg";
import iconMinus from "../images/icon-minus.svg";


const CommentTemplate=({user,handleShowCon,commentStyle,img})=>{
    const [count, setCount]=useState(user.score);
    
    
    //handle upvoting and downvoting of comment
    const increment=()=>{
        setCount(prevcount=>prevcount+1);
    };
    const decrement=()=>setCount(prevcount=>prevcount-1);

    return(
        <div className={commentStyle} >
                <div className="con-1 hidden md:block w-auto px-3 py-3 mx-4 rounded-lg">
                    <div onClick={increment}><img className="hoverElements" src={iconPlus} alt="icon-plus"/></div>
                    <div className="py-2 text-blue-800 cursor-pointer">{count}</div>
                    <div onClick={decrement}><img src={iconMinus} alt="icon-minus"/></div>
                </div>
                <div className="w-4/5 md:w-11/12 my-7 mx-auto">
                    <div className="flex justify-between pt-4">
                        <div className="flex items-center">
                            <span className="w-10">
                                <img src={img} alt={user.user.username} />
                            </span>
                            <span className="px-5">{user.user.username}</span>
                            <span>{user.createdAt}</span>
                        </div>
                        <div className="replyIcon hidden md:flex items-center mr-4" onClick={handleShowCon}>
                            <span className="px-2"><img src={iconReply} alt="icon-reply"/></span>
                            <span>Reply</span>
                        </div>
                    </div>

                    <div className="mt-3">
                        {user.content}
                    </div>              
                </div>  
                <div className="flex justify-between md:hidden w-4/5 mx-auto pb-4">
                    <div className="con-1 flex items-center w-auto px-3 py-1 rounded-lg">
                        <div onClick={increment}><img src={iconPlus} alt="icon-plus"/></div>
                        <div className="mx-2">{count}</div>
                        <div onClick={decrement}><img src={iconMinus} alt="icon-minus"/></div>
                    </div>
                    <div className="replyIcon flex items-center" onClick={handleShowCon}>
                        <span className="px-2"><img src={iconReply} alt="icon-reply"/></span>
                        <span>Reply</span>
                    </div>
                </div>                   
            </div>
    )

}

export default CommentTemplate