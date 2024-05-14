
import './App.css';
// import React,{useState} from 'react';
// import Item from './Components/Item/Item';
// import List from './Components/List/List';
// import Modal from './Components/Modal/Modal';
// import Input from './Components/input/Input';
// import { getUsers,getUserDetails } from './services/Service';
// import { Sidebar } from 'rsuite';
import Sidebar from './Components/Sidebar';
import Conterrr from './PracticeState/Conterrr';
import Counterr from './PracticeState/Counterr';
import Counter from './PracticeState/Counting';

function App() {

  // const [users, setUsers] = useState([]);
  // const [selectedUser, setSelectedUser] = useState(null);

  // const searchUsers = async (searchText) => {
  //   const fetchedUsers = await getUsers(searchText);
  //   setUsers(fetchedUsers);
  // };

  // const openModal = async (username) => {
  //   const userDetails = await getUserDetails(username);
  //   setSelectedUser(userDetails);
  // };  

  // const closeModal = () => {
  //   setSelectedUser(null);
  // };
  return (

    // <div className="App">
    //   <Input onSearch={searchUsers} />
    //   <List users={users} openModal={openModal} />
    //   {selectedUser && (
    //     <Modal isOpen={selectedUser !== null} closeModal={closeModal} user={selectedUser} />
    //   )}
    // </div>
    <>

    <div>
    {/* <Sidebar/> */}
    <h2>using useState</h2>
    <Counter/>

    </div>

    <div>
<h2>using useContext hook</h2>
<Counterr/>
    </div>


    <div>
<h2>using useReducer hook</h2>
<Conterrr/>
    </div>
    
    </>

   
  );
}

export default App;
