import React,{useState, useEffect} from "react";

function EditUser(props) {
    const initialState = { id: null, name: "", username: "" }
    const [user, setUser] = useState(initialState)

    const handlInputChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()
            
                props.updateUser(user.id, user)
            
            }}>
            <label>Name</label>
            <input type="text" name='name' value={user.name} onChange={handlInputChange} required />
            <label>Username</label>
            <input type="text" name='username' value={user.username} onChange={handlInputChange}  required/>
            <button>Update User</button>
            <button onClick={() => props.setEditing(false)} className="button muted-button">Cancel</button>
        </form>
    )
}

export default EditUser;
