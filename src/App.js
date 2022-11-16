import './App.css';
import users from "./data.json"
import FirstComment from './components/FirstComment';
import SecondComment from './components/SecondComment';
import AddComment from './components/AddComment';

//post, put delete for amy robson
//post, put delete for maxblagun
//put, delete request for rasmsemon
//post, put and delete and get for juliosimo

function App() {
  return (
    <div className='app'>
      <FirstComment usersData={users} />
      {/* <SecondComment usersDataTwo={users} /> */}
      <AddComment currentUser={users.currentUser} />
    </div>
  );
}

export default App;
