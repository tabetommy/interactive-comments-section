import React,{useState} from 'react';
import  "./style.css";
import iconDelete from "../images/icon-delete.svg";
import iconEdit from "../images/icon-edit.svg";
import iconReply from "../images/icon-reply.svg";
import iconPlus from "../images/icon-plus.svg";
import iconMinus from "../images/icon-minus.svg";
import { v4 as uuidv4 } from 'uuid';



//map the entire julio replies
//in map change only the content to replies.
//enable div
//create update button
//update button should disable div
//change style onclick
//show button onclick

const Store=({usersData3,repliesmax})=>{
    const [count1, setCount1]=useState(usersData3.comments[1].replies[0].score);
    const [count2, setCount2]=useState(usersData3.comments[1].replies[1].score);
    const [text,setText]=useState({id:uuidv4(), tex:`@${usersData3.comments[1].replies[0].user.username},`});
    const[id,setId]=useState(0)
    const [show,setShow]= useState(false);
    const [repliesram,setRepliesram]=useState([{
        id:uuidv4(),
        tex:`@ramsesmiron,${usersData3.comments[1].replies[1].content}`
    }]);
    const [disable,setDisable]=useState(false);
    const [style,setStyle]=useState("editStyle")
    const [clickedId,setClickedId]=useState([])
    const [editIndex, setEditIndex]= useState(null)
    const [isEdititng, setIsEditing]=useState(false)
    
     const increment1=()=>setCount1(prevcount1=>prevcount1+1);
     const decrement1=()=>setCount1(prevcount1=>prevcount1-1);
     const increment2=()=>setCount2(prevcount2=>prevcount2+1);
     const decrement2=()=>setCount2(prevcount2=>prevcount2-1);
     
    
     const handleShow=()=>{
        return(setShow(!show))
    };
    const pasteReplies=(event)=>{
        event.preventDefault();
        setShow(false);
        setRepliesram([...repliesram,text]);
        setText({
            id:uuidv4(),
            tex:`@${usersData3.comments[1].replies[0].user.username},`
        });
       
    };
  
    const handleChange = e => {
        const { name, value } = e.target;
        setText(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEdit=(index)=>{

        //setStyle( repliesram.id===index?"editStyle2":style)
        console.log(index)
            
     
       //console.log(`ìd is${i.id} and boy ${i.tex}isand index is ${index}`)
       //map(reply=>console.log("ID:",reply.id,"Index:",index))

        //reply.id===index?setStyle("editStyle2"):style
     // repliesram.id===index?setStyle("editStyle2"):style;
        //setdisable to true for index 1

       /*setClickedId(clickedId.find(i => i===index) ?clickedId:[...clickedId, index])
      
        setClickedId(!clickedId.includes(index)?[...clickedId, index]:clickedId)
       console.log(clickedId)
       setDisable(clickedId.includes(i=>i===index)?true:disable)
       setDisable(clickedId.map(i=>i===index)?true:null)
       clickedId.map(i=>i===index?setStyle("editStyle2"):style)
       map instead 0f find */
      
     
    }
    const handleDelete=(index)=>{
        const remainingReplies=repliesram.filter(reply=>index!==reply.id)
        setRepliesram(remainingReplies)
        
    }
  
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
                                    <img src={usersData3.comments[1].replies[0].user.image.png} alt="ramsesmiron" />
                                </span>
                                <span className="px-5">{usersData3.comments[1].replies[0].user.username}</span>
                                <span>{usersData3.comments[1].replies[0].createdAt}</span>
                            </div>
                            <div className="replyIcon hidden md:flex items-center mr-4">
                                <span className="px-2" onClick={handleShow}><img src={iconReply} alt="icon-reply"/></span>
                                <span>Reply</span>
                            </div>
                            </div>

                        <div className="mt-3">
                            {usersData3.comments[1].replies[0].content}
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
                        <img className="hidden md:block ml-2 mt-5" src={usersData3.comments[1].replies[1].user.image.png} alt="juliosomo" />
                        <form className='md:flex justify-between items-start w-11/12 mx-auto rounded-lg'>
                            <textarea
                                className='mt-5 w-full md:w-11/12 mx-auto md:mx-2 px-3 rounded-lg'
                                value={text.tex}
                                rows="4"
                                onChange={handleChange}
                                name="tex"></textarea>
                            <div className='flex justify-between md:hidden w-full'>
                                <img className="w-12 ml-2 mt-5" src={usersData3.comments[1].replies[1].user.image.png} alt="juliosomo" />
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
        
                {repliesram.map((reply) => {
                    return <section 
                    key={reply.id}
                    className="flex-row md:flex justify-around items-center w-full mr-24 rounded-lg bg-white mt-9" 
                    >
                    <div className="con-1 hidden md:block w-auto px-3 py-3 mx-4 rounded-lg">
                        <div onClick={increment2}><img src={iconPlus} alt="icon-plus"/></div>
                        <div className="py-2">{count2}</div>
                        <div onClick={decrement2}><img src={iconMinus} alt="icon-minus"/></div>
                    </div>
                    <div className="w-4/5 md:w-11/12 my-7 mx-auto">
                        <div className="flex justify-between">
                            <div className="flex items-center pt-4">
                                <span className="w-10">
                                    <img src={usersData3.comments[1].replies[1].user.image.png} alt="juliosomo" />
                                </span>
                                <span className="px-5">{usersData3.comments[1].replies[1].user.username}</span>
                                <span>{usersData3.comments[1].replies[1].createdAt}</span>
                            </div>
                            <div className="hidden md:flex items-center mr-4">
                                <div className='deleteIcon flex items-center'>
                                    <span className="px-2"><img src={iconDelete} alt="icon-reply"/></span>
                                    <span onClick={()=>handleDelete(reply.id)}>Delete</span>
                                </div>
                                <div className='editIcon flex items-center'>
                                    <span className="px-2"><img src={iconEdit} alt="icon-reply"/></span>
                                    <span onClick={()=>handleEdit(reply.id)}>Edit</span>
                                </div>
                            </div>
                            </div>
                            <div 
                            id='reply'
                            className={style}
                            contentEditable={disable} 
                            suppressContentEditableWarning={true}
                            >
                                {reply.tex}
                            </div>  
                            <button className="sendBtn flex rounded-lg px-6 py-3 mr-2 mt-5">
                                UPDATE
                            </button>   
                    </div> 
                    <div className="flex justify-between items-center md:hidden w-4/5 mx-auto pb-4">
                        <div className="con-1 flex items-center w-auto px-3 py-1 rounded-lg">
                            <div onClick={increment2}><img src={iconPlus} alt="icon-plus"/></div>
                            <div className="mx-2">{count2}</div>
                            <div onClick={decrement2}><img src={iconMinus} alt="icon-minus"/></div>
                        </div>
                        <div className='flex'> 
                            <div className='deleteIcon flex items-center'>
                                <span className="px-2"><img src={iconDelete} alt="icon-reply" /></span>
                                <span onClick={()=>handleDelete(reply.id)}>Delete</span>
                            </div>
                            <div className='editIcon flex items-center'>
                                <span className="px-2"><img src={iconEdit} alt="icon-reply" /></span>
                                <span onClick={()=>handleEdit(reply.id)}>Edit</span>
                            </div>
                        </div>    
                    </div>          
                </section>
                })}
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

export default Store;


