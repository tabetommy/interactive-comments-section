import React,{useState} from "react";
import ReplyCommentTemplate from "./ReplyCommentTemplate";
import CommentTemplate from "./CommentTemplate";
//the reply button show have a function
//that make the div disapperar while 
//the reply appears under therefore shifting up
//put the response in an array that you map



const FirstComment=({usersData})=>{

    const [showReplyCon,setShowReplyCon]= useState(false);
     //show the reply container
     const handleShowCon=()=>{
        return(setShowReplyCon(!showReplyCon))
    };

    return(
        <div>
            <CommentTemplate 
            amyRobsonData={usersData.comments[0]}
            handleShowCon={handleShowCon}
            />
            {showReplyCon?
            <ReplyCommentTemplate 
            juliosomoImg={usersData.currentUser.image.png}
            amyRobson={usersData.comments[0].user.username}/>
            :
            null}
            {/* {replies.map((reply,i)=>{
                return <h1 key={i}>{reply}</h1>
            })} */}
        </div>       
    )
}

export default FirstComment;