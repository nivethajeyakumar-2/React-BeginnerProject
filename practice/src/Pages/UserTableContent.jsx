// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import CustomTextField from "../Layout/CustomTextField";
// import Search from "../Layout/SearchBar";
//  import TableLayout from "../Layout/Table";
//  import { Dialog , DialogActions, DialogContent, DialogTitle , Stack, Button, Typography } from "@mui/material";
//  function UserTableContent(){
//   const[searchText , setSearchText]= useState("")
//   const[users , setUsers] = useState([]);
//   const[addOpen , setAddOpen]= useState(false)
//   const[addData, setAddData]=useState({
//     name:"",
//     username:"",
//     email:"",

//   })
// const[editData , setEditData]= useState(null);
// const[editOpen , setEditOpen]= useState(false);
// const[pages , setPages]= useState(0);
// const[rowsPerPage , setRowsPerPage]=useState(10)
// const  fetchUsers=()=>{
//   fetch("")
//   .then((res)=>res.json())
//   .then((data)=>{
//     const datawithStatus=data.map((item)=>({...item, status:"Active"}))
//     setUsers(data),
//     console.log(data)
//   })
// }
// useEffect(()=>{
//   fetchUsers();
// },[])
// const handleAddSave=()=>{
//   axios
//   .post("" , addData)
//   .then((response)=>{const newUser={...response, id:Date.now() , name:addData.name, username:addData.username,email:addData.email}
// setUsers((prev)=>[newUser,...prev])
// const local=JSON.parse(localStorage.getItem(usersData)||"[]")
// localStorage.setItem("usersData" , JSON.stringify([newUser,...local]))

// })
// }
//  }