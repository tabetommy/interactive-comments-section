import './App.css';
import users from "./data.json"
import FirstComment from './components/FirstComment';
import SecondComment from './components/SecondComment';
import AddComment from './components/AddComment';

function App() {
  return (
    <div className='app'>
      <FirstComment usersData={users} />
      <SecondComment usersDataTwo={users} />
      <AddComment currentUser={users.currentUser} />
    </div>
  );
}

export default App;
