import React,{useState} from "react";
import SomoReply from "./SomoReply";
import ReplyCommentTemplate from "./ReplyCommentTemplate";
import CommentTemplate from "./CommentTemplate";
import juliuImage from "../images/avatars/image-juliusomo.png";
import ramImage from "../images/avatars/image-ramsesmiron.png";

const SecondReplyTemplate=({usersData,reply, handleReply,juliosomoImg,username})=>{

    
    const [show,setShow]= useState(false);
    const [response, setResponse]=useState(`@${usersData[0].user.username}, ${usersData[1].content}`);

    const handleShow=()=>{
        return(setShow(!show))
    };

    const replyStyle="bg-white flex-row md:flex justify-around items-start  w-full mx-auto rounded-lg mt-1.5 pb-4";
    const commentStyle="flex-row md:flex justify-around items-center w-full mr-24 rounded-lg bg-white";
    const somoReplyStyle="flex-row md:flex justify-around items-center w-full mr-24 rounded-lg bg-white mt-9";

       return(
        <div className='relative flex justify-end w-4/5 mx-auto mt-9'>
            <div className="absolute inset-y-0 left-0 md:left-16 border-r-2 border-solid border-color1">
            </div>
            <div className='w-4/5'>
                <CommentTemplate 
                handleShowCon={handleShow}
                commentStyle={commentStyle}
                user={usersData[0]}
                img={ramImage}
                />
                {show?<ReplyCommentTemplate 
                juliosomoImg={juliosomoImg}
                username={username}
                replyStyle={replyStyle}
                img={juliuImage}
                />:null}
                <SomoReply 
                usersData={usersData}
                julioResponse={response}
                username={'ramsesmiron'}
                handleResponse={setResponse}
                somoReplyStyle={somoReplyStyle}
                img={juliuImage}
                />
                {reply && <SomoReply
                    usersData={usersData}
                    julioResponse={reply}
                    username={'maxblagun'}
                    handleResponse={handleReply}
                    somoReplyStyle={somoReplyStyle}
                    img={juliuImage}
                />}
            </div>
        </div>
       )
}

export default SecondReplyTemplate