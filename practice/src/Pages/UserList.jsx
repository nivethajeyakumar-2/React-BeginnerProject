import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "./Redux/User";

function UserList() {
  const [name, setName] = useState("");
  const users = useSelector(state => state.user.users);
  const dispatch = useDispatch();

  const handleAdd = () => {
    const newUser = {
      id: Date.now(),
      name: name,
    };
    dispatch(addUser(newUser));
    setName("");
  };

  return (
    <div style={{ textAlign: "center" }}>
     
      <h2>User List</h2>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter user name"
      />
     <button onClick={handleAdd}>Add User</button>
       
      

      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map(user => (
          <li key={user.id}>
            {user.name}{" "}
            <button onClick={() => dispatch(removeUser(user.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default UserList;