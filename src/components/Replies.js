import React,{useState} from 'react';
import  "./style.css";

import iconReply from "../images/icon-reply.svg";
import iconPlus from "../images/icon-plus.svg";
import iconMinus from "../images/icon-minus.svg";
import { v4 as uuidv4 } from 'uuid';
import RepliesHandler from './RepliesHandler';



//map the entire julio replies
//in map change only the content to replies.
//enable div
//create update button
//update button should disable div
//change style onclick
//show button onclick

const Replies=({usersDataThree,repliesmax})=>{
    const [count1, setCount1]=useState(usersDataThree.comments[1].replies[0].score);
    
    const [text,setText]=useState({id:uuidv4(), tex:`@${usersDataThree.comments[1].replies[0].user.username},`});
    // const[id,setId]=useState(0)
    const [show,setShow]= useState(false);
    const [repliesram,setRepliesram]=useState([{
        id:uuidv4(),
        tex:`@ramsesmiron,${usersDataThree.comments[1].replies[1].content}`
    }]);
    // const [clickedId,setClickedId]=useState([])
    // const [editIndex, setEditIndex]= useState(null)
   
    
     const increment1=()=>setCount1(prevcount1=>prevcount1+1);
     const decrement1=()=>setCount1(prevcount1=>prevcount1-1);
    
     
    
     const handleShow=()=>{
        return(setShow(!show))
    };
    const pasteReplies= e =>{
        e.preventDefault();
        setShow(false);
        setRepliesram([...repliesram,text]);
        setText({
            id:uuidv4(),
            tex:`@${usersDataThree.comments[1].replies[0].user.username},`
        });
       
    };
  
    const handleChange = e => {
        const { name, value } = e.target;
        setText(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    
  
    return(
        <div className='relative flex justify-end w-4/5 mx-auto mt-9'>
            <div className="absolute inset-y-0 left-0 md:left-16 border-r-2 border-solid border-color1">
            </div>
            <div className='w-4/5'>
                <section className="flex-row md:flex justify-around items-center w-full mr-24 rounded-lg bg-white" >
                    <div className="con-1 hidden md:block w-auto px-3 py-3 mx-4 rounded-lg">
                        <div onClick={increment1}><img src={iconPlus} alt="icon-plus"/></div>
                        <div className="py-2">{count1}</div>
                        <div onClick={decrement1}><img src={iconMinus} alt="icon-minus"/></div>
                    </div>
                    <div className="w-4/5 md:w-11/12 my-7 mx-auto">
                        <div className="flex justify-between">
                            <div className="flex items-center pt-4">
                                <span className="w-10">
                                    <img src={usersDataThree.comments[1].replies[0].user.image.png} alt="ramsesmiron" />
                                </span>
                                <span className="px-5">{usersDataThree.comments[1].replies[0].user.username}</span>
                                <span>{usersDataThree.comments[1].replies[0].createdAt}</span>
                            </div>
                            <div className="replyIcon hidden md:flex items-center mr-4">
                                <span className="px-2" onClick={handleShow}><img src={iconReply} alt="icon-reply"/></span>
                                <span>Reply</span>
                            </div>
                            </div>

                        <div className="mt-3">
                            {usersDataThree.comments[1].replies[0].content}
                        </div>              
                    </div> 
                    <div className="flex justify-between md:hidden w-4/5 mx-auto pb-4">
                        <div className="con-1 flex items-center w-auto px-3 py-1 rounded-lg">
                            <div onClick={increment1}><img src={iconPlus} alt="icon-plus"/></div>
                            <div className="mx-2">{count1}</div>
                            <div onClick={decrement1}><img src={iconMinus} alt="icon-minus"/></div>
                        </div>
                        <div className="replyIcon flex items-center">
                            <span className="px-2" onClick={handleShow}><img src={iconReply} alt="icon-reply"/></span>
                            <span>Reply</span>
                        </div>
                    </div>          
                </section>
                {show?
                    <div className="bg-white flex-row md:flex justify-around items-start  w-full mx-auto rounded-lg mt-1.5 pb-4">
                        <img className="hidden md:block ml-2 mt-5" src={usersDataThree.comments[1].replies[1].user.image.png} alt="juliosomo" />
                        <form className='md:flex justify-between items-start w-11/12 mx-auto rounded-lg'>
                            <textarea
                                className='mt-5 w-full md:w-11/12 mx-auto md:mx-2 px-3 rounded-lg'
                                value={text.tex}
                                rows="4"
                                onChange={handleChange}
                                name="tex"></textarea>
                            <div className='flex justify-between md:hidden w-full'>
                                <img className="w-12 ml-2 mt-5" src={usersDataThree.comments[1].replies[1].user.image.png} alt="juliosomo" />
                                <button className='sendBtn rounded-lg px-6 py-3 mr-2 mt-5'onClick={pasteReplies}>REPLY</button>
                            </div>
                            <button 
                            className='sendBtn hidden md:block md:w-24 rounded-lg px-6 py-3 mr-2 mt-5 '
                            onClick={pasteReplies}
                            >
                                REPLY
                            </button>
                        </form>
                    </div>:
                    null}
        
                <RepliesHandler 
                repliesram={repliesram}
                usersDataThree={usersDataThree}
                updateRepliesram={setRepliesram}/>
                {/*repliesram.map((reply, j) => {
                    return <h1 key={j}>{reply}</h1>
                })*/}
                {repliesmax.map((reply,i)=>{
                return <h1 key={i}>{reply}</h1>
            })}

            </div>
        </div>
    )
}

export default Replies;