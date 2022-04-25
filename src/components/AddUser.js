import React, { useState } from "react";

function AddUser(props) {
    const initialState = { id: null, name: "", username: "" }
    const [user, setUser] = useState(initialState)

    const handlInputChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()
                if (!user.name || !user.username) return

                props.addUser(user)
                setUser(initialState)
            }}>
            <label>Name</label>
            <input type="text" name='name' value={user.name} onChange={handlInputChange} required />
            <label>Username</label>
            <input type="text" name='username' value={user.username} onChange={handlInputChange}  required/>
            <button>Add New user</button>
        </form>
    )
}

export default AddUser;
