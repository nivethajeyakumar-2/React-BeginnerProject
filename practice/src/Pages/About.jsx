
// import { useSelector, useDispatch } from "react-redux";
// import UserList from "./UserList";
// import CartApp from "./UserList";
// import Counter from "./Redux/Counter";
// import React, { useState, useEffect } from "react";
// import { data } from "react-router-dom";
// const About = () => {
// const [products , setProducts]=useState([]);
// useEffect(()=>{
//      fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res=>res.json())
//     .then(data=>setProducts(data) ,   console.log(data))
 

// }, 
 
// [])
//     return (
//         <div>
//           <h1> product</h1>   
//           {products.map(product=><div key={product.id}>
//           name:  {product.name}   <div>email:{product.email}</div>
//           <div>phone.no:{product.phone}</div>
//             </div>)}
//    </div>)
// };
// export default About

 
import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomTextField from "../Layout/CustomTextField";
import Search from "../Layout/SearchBar";
import TableLayout from "../Layout/Table";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Stack,
} from "@mui/material";
   import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from "dayjs";
import Loader from "../Layout/Loader";
import ModalLayout from "../Layout/Modal";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const About = () => {
const [products, setProducts]= useState([]);
const [addOpen , setAddOpen]= useState(false);
const [editOpen , setEditOpen]= useState(false);
const[editID ,  setEditId]=useState(null)
 const [searchText, setSearchText] = useState("");
 const[page , setPage]=useState(0);
 const [rowPerPage , setRowPerPage]= useState(10)
 const[loader , setLoader]= useState(true)
 const[openModal , setOpenModal]=useState(false)
 const[deleteId , setDeleteId] = useState(null)
const [addData , setAddData]= useState({
  name:"",
  email:"",
  username:"",
  phone:"",
})
 

const fetchUsers =()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((res)=>res.json())
  .then((data)=>{
    setProducts(data);
  })
  .finally(()=>{setLoader(false)})
};
useEffect(()=>{
  fetchUsers();
},[]);
  const handleAddSave =()=>{
    if(!addData.username.trim()||!addData.name.trim()||!addData.email.trim()||!addData.phone===""){
      console.log("about page need the fields to be filled")
      return
    }
    axios
    .post("https://jsonplaceholder.typicode.com/users" , addData)
    .then((response)=>{
      const newUser={...response.data , id: Date.now()};
      setProducts((prev)=>[newUser,...prev]);
      const local = JSON.parse(localStorage.getItem("userData") || "[]");
      localStorage.setItem("userData" , JSON.stringify([newUser ,...local]));
      setAddData({name:"" , username:"", email:"" , phone:""});
      setAddOpen(false);
      setEditOpen(false);
    })
    .catch((error)=>{
      console.log("error ")
    })
  }
  //edit 
  const handleEditClick=(user)=>{
    setAddData(user);
    setEditId(user.id);
    setEditOpen(true);
    setAddOpen(true);
  }
   const handleUpdate=()=>{
    axios
    .post("https://jsonplaceholder.typicode.com/users",addData)
    .then((response)=>{
      const updatedUser={...response.data, id: editID}
     setProducts((prev)=> prev.map((user)=>(user.id==editID?updatedUser:user)))
      const local=JSON.parse(localStorage.getItem("userData")||"[]");
      const updatedLocal=local.map((user)=>(user.id == editID?updatedUser:user));
      localStorage.setItem("userData" , JSON.stringify(updatedLocal));
       setAddData({name:"" , username:"", email:"" , phone:""});
       setEditId(null)
       setEditOpen(false)
       setAddOpen(false)
    })
    .catch(()=>console.log('update error'))
   }
   const handleDelete=(id)=>{
    axios
    .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(()=>{
      setProducts((prev)=>prev.filter((user)=>user.id!==id))
      const local=JSON.parse(localStorage.getItem("userData")||"[]");
      const updatedLocal=local.filter((user)=>(user.id!==id));
      localStorage.setItem("userData" , JSON.stringify([updatedLocal]));
    })
    .catch (()=>console.log('delete error '))
   }

     const filteredUser= products.filter((user) =>{{
       const name= user.username?.toLowerCase().includes(searchText.toLowerCase())
     const email= user.email?.toLowerCase().includes(searchText.toLowerCase())
    return name||email
     }

    }
   
  );
  // column for table 
  const columns = [
  { id: "name", label: "Name" },
  { id: "username", label: "UserName" },
  { id: "email", label: "Email" },
  { id: "phone", label: "Phone No" },
];
const[date , setDate]= useState(dayjs)
// console.log(date)śs
  return (
    <div>
      <Stack direction="row" display={"inline-flex"} spacing={25} mt={2}>
              {/*date and time  */}
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div style={{ width: "250px"}}> 
        <DateTimePicker label=" date time " 
        value={date  }
        onChange={(newvalue)=>setDate(newvalue)}
         sx={{ width: "100%" }} 
        />
        </div>
    </LocalizationProvider>
       <div>
      <Search value={searchText} onChange={setSearchText} /></div>
      </Stack>
      <h1>User List</h1>
      <Dialog open={addOpen} onClose={() => setAddOpen(false)}>
        <DialogTitle>{editOpen?"edit User":"Add user"}</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            {["name", "username", "email", "phone"].map((field) => (
              <CustomTextField
                key={field}
                label={field}
                value={addData[field]}
                onChange={(e) =>
                  setAddData({ ...addData, [field]: e.target.value })
                }
              />
            ))}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAddOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={editOpen?handleUpdate:handleAddSave}>
          {editOpen?"update":"add"}
          </Button>
        </DialogActions>
      </Dialog>
      {loader ? (<Loader loader={loader}/>):( <TableLayout
       columns={columns}
      rows={filteredUser}
      page={page}
      rowsPerPage={rowPerPage}
      onPageChange={(event , newPage)=>setPage(newPage)}
      onRowsPerPageChange={(event)=>{
        setRowPerPage(+event.target.value);
        setPage(0);
      }}
      onEdit={ handleEditClick }
      onDelete={(id)=>{setDeleteId(id) ,setOpenModal(true)}}
      onAdd={()=>{
        setAddOpen(true);
        setEditOpen(false);
        setAddData({username:"" , name:"", email:"" , phone:""})
      }}
      />  )}
     {openModal && (<ModalLayout open={openModal} handleClose={()=>setOpenModal(false)} title={"do you want to delete this ?"} >
      <Stack  spacing={5} display={"inline-flex"} direction="row" mt={3} mb={5}>
        <Button variant="contained " onClick={()=>setOpenModal(false)}>Cancel</Button>
        <Button variant="contained" onClick={()=>{handleDelete(deleteId) , setOpenModal(false)}}>Delete</Button>
      </Stack>
     </ModalLayout>)}
    </div>
  );
};

export default About;
