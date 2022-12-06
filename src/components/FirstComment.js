import React,{useState, useEffect} from "react";
import ReplyCommentTemplate from "./ReplyCommentTemplate";
import CommentTemplate from "./CommentTemplate";
import JulioReplyTemplate from "./JulioReplytemplate";
import amyImage from "../images/avatars/image-amyrobson.png";
import juliuImage from "../images/avatars/image-juliusomo.png";
import { Gethandler } from "./AjaxHandler";




const FirstComment=({usersData})=>{

    const [showReplyCon,setShowReplyCon]= useState(false);
    const [reply, setReply]=useState("");

    useEffect(()=>{
        // handle get request
        Gethandler(usersData.comments[0].user.username, setReply)
    },[]);

     //show the reply container
     const handleShowCon=()=>{
        return(setShowReplyCon(!showReplyCon))
    };

    //define styles for child components
    const replyStyle="bg-white flex-row md:flex justify-around items-start  w-4/5 mx-auto rounded-lg pb-4";
    const commentStyle="main-con flex-row md:flex justify-around items-center w-4/5 mx-auto rounded-lg mt-7 mb-1.5";
    
    return(
        <div>
            <CommentTemplate 
            user={usersData.comments[0]}
            handleShowCon={handleShowCon}
            commentStyle={commentStyle}
            img={amyImage}
            />
            {showReplyCon?
            <ReplyCommentTemplate 
            juliosomoImg={usersData.currentUser.image.png}
            username={usersData.comments[0].user.username}
            replyStyle={replyStyle}
            img={juliuImage}
            />
            :
            null}
            {reply && <JulioReplyTemplate 
            usersDataThree={usersData}
            reply={reply}
            handleSetReply={setReply}
            img={juliuImage}
            />}
        </div>       
    )
}

export default FirstComment;