import axios from 'axios';

export const Gethandler=(username, setReply)=>{
    axios.get(`https://tt-interactive-comments.herokuapp.com/users/${username}`)
        .then(response=>setReply(response.data.comment))
        .catch(error=>console.log(error));
}

export const PostHandler=(username, text)=>{ 
    axios.post(`https://tt-interactive-comments.herokuapp.com/users/${username}`,{comment:text})
        .then((response)=>{
           console.log( response.data); 
            window.location.reload();
        })
        .catch(error=>console.log(error));

}

export const UpdateHandler=(username, reply)=>{
        axios.put(`https://tt-interactive-comments.herokuapp.com/users/${username}`,{comment:reply})
        .then(response=>{
            console.log(response.data);
        })
        .catch(error=>console.log(error))
}


export const DeleteHandler=(username, handleSetReply)=>{
  
    if(window.confirm("Are you sure you want to delete this comment")){
        axios.delete(`https://tt-interactive-comments.herokuapp.com/users/${username}`)
    .then(()=>{
        console.log("user was succesfully deleted");
        handleSetReply("");
    })
    .catch(error=>console.log('Error' + error)); 
    }   
}

