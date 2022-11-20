import React,{useState, useEffect} from 'react';
import './App.css';
import users from "./data.json"
import FirstComment from './components/FirstComment';
import SecondComment from './components/SecondComment';
import AddComment from './components/AddComment';
import SomoReply from './components/SomoReply';
import axios from "axios";

//in somoreply change only content ad days, add it to database and api, count???

function App() {

  const [response, setResponse]=useState("");

  useEffect(()=>{
    axios.get(`https://tt-interactive-comments.herokuapp.com/users/${users.currentUser.username}`)
    .then(response=>setResponse(response.data.comment))
    .catch(error=>console.log(error));
      },[]);

  const somoReplyStyle="main-con flex-row md:flex justify-around items-center w-4/5 mx-auto rounded-lg mt-7 mb-1.5";
             

  return (
    <div className='app pb-7'>
      <FirstComment usersData={users} />
      <SecondComment usersData={users} />
      {response && <SomoReply 
      julioResponse={response}
      handleResponse={setResponse}
      usersData={users.comments[1].replies}
      somoReplyStyle={somoReplyStyle}
      username={users.currentUser.username}
      />}
      <AddComment currentUser={users.currentUser} />
    </div>
  );
}

export default App;
