import React,{useState, useEffect} from "react";
import  "./style.css";
import CommentTemplate from "./CommentTemplate";
import ReplyCommentTemplate from "./ReplyCommentTemplate";
import SecondReplyTemplate from "./SecondReplyTemplate";
import maxImage from "../images/avatars/image-maxblagun.png";
import juliuImage from "../images/avatars/image-juliusomo.png";
import { Gethandler } from "./AjaxHandler";



const SecondComment=({usersData})=>{

    const [showReplyCon,setShowReplyCon]= useState(false);
    const [reply, setReply]=useState("");

    useEffect(()=>{
        //handle get request
        Gethandler(usersData.comments[1].user.username, setReply)
        
    },[]);

    //show the reply container
    const handleShowCon=()=>{
        return(setShowReplyCon(!showReplyCon))
    };

    const replyStyle="bg-white flex-row md:flex justify-around items-start  w-4/5 mx-auto rounded-lg pb-4";
    const commentStyle="main-con flex-row md:flex justify-around items-center w-4/5 mx-auto rounded-lg mt-7 mb-1.5";
   
    

    return(
        <div>
            <CommentTemplate 
            user={usersData.comments[1]}
            handleShowCon={handleShowCon}
            commentStyle={commentStyle}
            img={maxImage}
            />
            {showReplyCon?
            <ReplyCommentTemplate 
            juliosomoImg={usersData.currentUser.image.png}
            username={usersData.comments[1].user.username}
            replyStyle={replyStyle}
            img={juliuImage}
            />
            :
            null}
            <SecondReplyTemplate
             juliosomoImg={usersData.currentUser.image.png}
             username={usersData.comments[1].replies[0].user.username}
             usersData={usersData.comments[1].replies}
             reply={reply}
             handleReply={setReply}
             />
        </div>       
    )
}

export default SecondComment;