import React,{useState, useEffect} from "react";
import ReplyCommentTemplate from "./ReplyCommentTemplate";
import CommentTemplate from "./CommentTemplate";
import axios from "axios";
//the reply button show have a function
//that make the div disapperar while 
//the reply appears under therefore shifting up
//put the response in an array that you map



const FirstComment=({usersData})=>{

    const [showReplyCon,setShowReplyCon]= useState(false);
    const [reply, setReply]=useState("");

    useEffect(()=>{
        axios.get(`https://tt-interactive-comments.herokuapp.com/users/${usersData.comments[0].user.username}`)
        .then(response=>setReply(response.data.comment))
        .catch(error=>console.log(error))
    })

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
            amyRobson={usersData.comments[0].user.username}
            />
            :
            null}
            <div>{reply}</div>
        </div>       
    )
}

export default FirstComment;