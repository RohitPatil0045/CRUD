import React, {useState, Fragment} from "react";
import AddUser from "./AddUser";
import UserTable from "./UserTable";
import EditUser from "./EditUser";

function CrudView() {
    const userData = [
        {id:1, name:'Rohit', username: 'ro' },
        {id:2, name:'Akshay', username: 'akki' },
        {id:3, name:'Shubham', username: 'shubh' },
    ]

    const initialState = { id: null, name: "", username: "" }

    const [users, setUsers] = useState(userData);
    const [editing, setEditing] = useState(false);
    const [currentUser, setCurrentUser] = useState(initialState);
    

    const addUser = (user)=> {
        user.id = users.length + 1
        setUsers([...users, user])
    }

    const deleteUser = (id) => {
        setEditing(false)
        setUsers(users.filter((user) => user.id !== id))
    }

    const editRow = (user) => {
        setEditing(true)
        setCurrentUser({id: user.id , name: user.name, username:user.username})
    }

    const updateUser = (id, updatedUser) => {
        setEditing(false)
        setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
    }
    
    
  return (
    <div className="container">
    <h1>CRUD app with Hooks</h1>
    <div className="flex-row">
      <div className="flex-large">
      {editing ? (
            <Fragment>
                <h2>Edit User</h2>
                <EditUser
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
                />
            </Fragment>
        ) : (
            <Fragment>
                <h2>Add User</h2>
        <AddUser addUser={addUser}/>
            </Fragment>
        ) }
        
      </div>
      <div className="flex-large">
        <h2>View Users</h2>
        <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
      </div>
    </div>
  </div>
  )
}

export default CrudView;
