import React,{useState, useEffect} from "react";
import axios from 'axios';
import  "./style.css";
import CommentTemplate from "./CommentTemplate";
import ReplyCommentTemplate from "./ReplyCommentTemplate";
import SecondReplyTemplate from "./SecondReplyTemplate";


const SecondComment=({usersData})=>{

    const [showReplyCon,setShowReplyCon]= useState(false);
    const [reply, setReply]=useState("");

    useEffect(()=>{
        axios.get(`https://tt-interactive-comments.herokuapp.com/users/${usersData.comments[1].user.username}`)
        .then(response=>setReply(response.data.comment))
        .catch(error=>console.log(error));
        
    },[]);

    //show the reply container
    const handleShowCon=()=>{
        return(setShowReplyCon(!showReplyCon))
    };

    return(
        <div>
            <CommentTemplate 
            user={usersData.comments[1]}
            handleShowCon={handleShowCon}
            />
            {showReplyCon?
            <ReplyCommentTemplate 
            juliosomoImg={usersData.currentUser.image.png}
            username={usersData.comments[1].user.username}
            />
            :
            null}
            <SecondReplyTemplate
             usersData={usersData.comments[1].replies}
             reply={reply}
             handleReply={setReply}
             />
        </div>       
    )
}

export default SecondComment;