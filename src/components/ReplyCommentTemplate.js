import React,{useState} from "react";

const ReplyCommentTemplate=({juliosomoImg,amyRobson})=>{

    const [text,setText]=useState(`@${amyRobson},`);
    const [replies,setReplies]=useState([])
    const handleChange = (event) => {
        setText(event.target.value)
    };

    const handleSubmit=(event)=>{
        //send post api call here
        //reload page
        //send get request and fill replies state
        event.preventDefault();
        // setShowReplyCon(false);
        setReplies([...replies,text]);
        setText(`@${amyRobson},`);
        console.log(replies)
    }
    return(
        <div className="bg-white flex-row md:flex justify-around items-start  w-4/5 mx-auto rounded-lg pb-4">
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