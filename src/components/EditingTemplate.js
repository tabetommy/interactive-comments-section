import React,{useState} from 'react';
import  "./style.css";
import iconEdit from "../images/icon-edit.svg";
import iconPlus from "../images/icon-plus.svg";
import iconMinus from "../images/icon-minus.svg";
import iconDelete from "../images/icon-delete.svg";

const EditingTemplate=({reply,usersData3,updateisEditing})=>{
    const [count2, setCount2]=useState(usersData3.comments[1].replies[1].score);
    const [disable,setDisable]=useState(false);

    const increment2=()=>setCount2(prevcount2=>prevcount2+1);
    const decrement2=()=>setCount2(prevcount2=>prevcount2-1);

    const handleEdit=()=>{
        updateisEditing(true);
        setDisable(true)
    }
    const handleUpdate=()=>{
        updateisEditing(false);
        setDisable(false);
    }
    const handleDelete=()=>{
        console.log("Jesus")
        
    }
    return(
        <section 
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
                        <span onClick={handleDelete}>Delete</span>
                    </div>
                    <div className='editIcon flex items-center'>
                        <span className="px-2"><img src={iconEdit} alt="icon-reply"/></span>
                        <span onClick={handleEdit}>Edit</span>
                    </div>
                </div>
                </div>
                <div 
                id='reply'
                contentEditable={disable} 
                suppressContentEditableWarning={true}
                >
                    {reply.tex}
                </div>  
                <button 
                className="sendBtn flex rounded-lg px-6 py-3 mr-2 mt-5"
                onClick={handleUpdate}>
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
                    <span onClick={handleDelete}>Delete</span>
                </div>
                <div className='editIcon flex items-center'>
                    <span className="px-2"><img src={iconEdit} alt="icon-reply" /></span>
                    <span onClick={handleEdit}>Edit</span>
                </div>
            </div>    
        </div>          
    </section>
    )
}

export default EditingTemplate;