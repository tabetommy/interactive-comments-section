import React,{useState} from 'react';
import './App.css';
import users from "./data.json"
import FirstComment from './components/FirstComment';
import SecondComment from './components/SecondComment';
import AddComment from './components/AddComment';
import SomoReply from './components/SomoReply';

//in somoreply change only content ad days, add it to database and api, count???

function App() {

  const [response, setResponse]=useState("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");

  const somoReplyStyle="flex-row md:flex justify-around items-center w-4/5 mr-24 rounded-lg bg-white mt-9 mx-auto";

  return (
    <div className='app'>
      <FirstComment usersData={users} />
      <SecondComment usersData={users} />
      <SomoReply 
      julioResponse={response}
      handleResponse={setResponse}
      usersData={users.comments[1].replies}
      somoReplyStyle={somoReplyStyle}
      />
      <AddComment currentUser={users.currentUser} />
    </div>
  );
}

export default App;
