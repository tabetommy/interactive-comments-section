import React,{useState, useEffect} from "react";
import ReplyCommentTemplate from "./ReplyCommentTemplate";
import CommentTemplate from "./CommentTemplate";
import JulioReplyTemplate from "./JulioReplytemplate";
import axios from "axios";




const FirstComment=({usersData})=>{

    const [showReplyCon,setShowReplyCon]= useState(false);
    const [reply, setReply]=useState("");

    useEffect(()=>{
        axios.get(`https://tt-interactive-comments.herokuapp.com/users/${usersData.comments[0].user.username}`)
        .then(response=>setReply(response.data.comment))
        .catch(error=>console.log(error));
        // console.log(text)
    },[]);

     //show the reply container
     const handleShowCon=()=>{
        return(setShowReplyCon(!showReplyCon))
    };
     
    return(
        <div>
            <CommentTemplate 
            user={usersData.comments[0]}
            handleShowCon={handleShowCon}
            />
            {showReplyCon?
            <ReplyCommentTemplate 
            juliosomoImg={usersData.currentUser.image.png}
            username={usersData.comments[0].user.username}
            />
            :
            null}
            {reply && <JulioReplyTemplate 
            usersDataThree={usersData}
            reply={reply}
            handleSetReply={setReply}
            />}
        </div>       
    )
}

export default FirstComment;