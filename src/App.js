import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, age) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: userName, age: age, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
};

export default App;
