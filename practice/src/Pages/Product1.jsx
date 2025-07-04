
import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomTextField from "../Layout/CustomTextField";
import Search from "../Layout/SearchBar";
import TableLayout from "../Layout/Table";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Modal from "../Layout/Modal";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import Loader from "../Layout/Loader";
import ModalLayout from "../Layout/Modal";
import CommonSnackbar from "../Layout/SnackBar";
const Product1= () => {
  const[searchText , setSearchText]= useState("");
const [products, setProducts]= useState([]);
const [addOpen , setAddOpen]= useState(false);
const [editOpen , setEditOpen]= useState(false);
const[editID ,  setEditId]=useState(null)
const [addData , setAddData]= useState({
  ProductTitle:"",
  price:"",
  status:"Active"
})
const[page, setPage]=useState(0);
const[rowPerPage , setRowPerPage]=useState(10);
const[loader , setLoader]=useState(false)
const fetchUsers =()=>{
  setLoader(true)
  fetch("https://fakestoreapi.com/products")
  .then((res)=>res.json())
  .then((data)=>{
    const datawithStatus=data.map((item)=>({
      ...item,status:"Active"
    }))
    setProducts( datawithStatus);
     console.log(datawithStatus.length)
  })
  .finally(()=>setLoader(false))
};
useEffect(()=>{
  fetchUsers();
 
},[]);
  const handleAddSave =()=>{
    if(!addData.ProductTitle.trim()||!addData.price===""){
      setSnackbarOpen(true)
      setSnackbarMessage("please fill all the requirements")
      setTimeout(() => {
        setSnackbarOpen(false)
      }, 1500)
      console.log("product1 add field needs to be filled ")
      return
    }
    axios
    .post("https://fakestoreapi.com/products" , addData)
    .then((response)=>{
      const newUser={...response.data , id: Date.now() ,  title: addData.ProductTitle, price:addData.price , status:addData.status};
      setProducts((prev)=>[newUser,...prev]);
      const local = JSON.parse(localStorage.getItem("userData") || "[]");
      localStorage.setItem("userData" , JSON.stringify([newUser ,...local]));
      setAddData({ProductTitle:"" , price:"" , status:"Active"});
      setAddOpen(false);
      setEditOpen(false);
         
    })
    .catch((error)=>{
      console.log("error in post ")
    })
  }

  //edit 
  const handleEditClick=(user)=>{
    setAddData({ProductTitle:user.title , 
      price:user.price, status:user.status
    });
    setEditId(user.id);
    setEditOpen(true);
    setAddOpen(true);
  }
  
   const handleUpdate=()=>{
    axios
    .post("https://fakestoreapi.com/products",addData)
    .then((response)=>{
      if(response.status==200){const updatedUser={...response.data, id: editID ,  title: addData.ProductTitle,price:addData.price , status:addData.status}
     setProducts((prev)=> prev.map((user)=>(user.id==editID?updatedUser:user)))
      const local=JSON.parse(localStorage.getItem("userData")||"[]");
      const updatedLocal=local.map((user)=>(user.id == editID?updatedUser:user));
      localStorage.setItem("userData" , JSON.stringify(updatedLocal));
       setAddData({ProductTitle:"" , price:"" , status:"Active"});
       setEditId(null)
       setEditOpen(false)
       setAddOpen(false)
      setSnackbarOpen(true)
      setSnackbarMessage("updated successfully")
      setTimeout(() => {
        setSnackbarOpen(false)
      }, 2000);
      }
      else{
        setSnackbarOpen(true)
        setSnackbarMessage("update failed")
      }
    })
    .catch(()=>console.log('update error'))
   }
   const[snackbarOpen , setSnackbarOpen]=useState(false)
   const[snackbarMessage , setSnackbarMessage]=useState("")
   const handleDelete=(id)=>{
    axios
    .delete(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>{
      if(res.status==200){
         setProducts((prev)=>prev.filter((user)=>user.id!==id))
      const local=JSON.parse(localStorage.getItem("userData")||"[]");
      const updatedLocal=local.filter((user)=>(user.id!==id));
      localStorage.setItem("userData" , JSON.stringify([updatedLocal]));
      setSnackbarOpen(true)
      setSnackbarMessage("deleted successfully")
      setTimeout(() => {
        setSnackbarOpen(false)
      }, 3000);
      console.log("deleted is successful")
      }
else{
  setSnackbarOpen(true)
  setSnackbarMessage("delete failed")
}  
    })
    .catch (()=>console.log('delete error '),
   setSnackbarOpen(true),
  setSnackbarMessage("delete failed"))
   }

   // search bar  filter condition 
   const filteredProduct1 = products.filter(
  (product) =>{
     const title=product.title?.toLowerCase().includes(searchText.toLowerCase())
     const price=product.price?.toString().includes(searchText.toString())
   
   return title||price
    }    
);
 const [deleteId, setDeleteId] = useState(null);
const [date , setDate]=useState(dayjs)
 console.log("the date",date)
 const[openModal , setOpenModal]=useState(false)
 const handleclose=()=>{
  setSnackbarOpen(false)
 }
  return (
    <div>
    <Stack direction="row" display={"inline-flex"} spacing={55} mt={3} >
      <Search value={searchText} onChange={setSearchText}/>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Date" 
         value={date} 
        onChange={(newValue)=>setDate(newValue)}/>  
    </LocalizationProvider>
    </Stack>
      <h1>Product</h1>
      <Dialog open={addOpen} onClose={() => setAddOpen(false)}>
        <DialogTitle>{editOpen?"edit Product":"Add Product"}</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            {["ProductTitle", "price"].map((field) => (
              <CustomTextField
                key={field}
                label={field}
                value={addData[field]}
                onChange={(e) =>
                  setAddData({ ...addData, [field]: e.target.value })
                }
              />
            ))}
            <Stack direction="row" alignItems="center" spacing={3}>
              <Typography>Status</Typography>
              <Button variant="contained"
              color={addData.status==="Active"?"success" :"error"}
              onClick={()=>setAddData((prev)=>({...prev , status:prev.status==="Active"?"Inactive":"Active"}))}>
                {addData.status}
              </Button>
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAddOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={editOpen?handleUpdate:handleAddSave}>
          {editOpen?"update":"add"}
          </Button>
        </DialogActions>
      </Dialog>
      {loader ?(<Loader loader={loader}/>):(<TableLayout
  columns={[
    { id: "title", label: "Product Title", minWidth: 170 },
    { id: "price", label: "Product Price", minWidth: 100 },
    {id:"status" ,label:"Status" , render:(row)=>(<span style={{ background:row.status==="Active"?"green":"red" ,
      color:"white",
      padding:"6px 12px",
      borderRadius:"12px",
      fontSize:"12px",
      fontWeight:"bold"
    }}>{row.status}</span>)},
    { id: "actions", label: "Actions", minWidth: 150 },
  ]}
  rows={filteredProduct1}
  page={page}
  rowsPerPage={rowPerPage}
  onPageChange={(event, newPage) => setPage(newPage)}
  onRowsPerPageChange={(event) => {
    setRowPerPage(+event.target.value);
    setPage(0);
  }}
  onEdit={handleEditClick}
  onDelete={(id)=>{setDeleteId(id);
     setOpenModal(true)}}
  onAdd={() => {
    setAddOpen(true);
    setEditOpen(false);
    setAddData({ ProductTitle: "", price: "" , status:"Active" });
  }}
/>)}
{openModal&&(<ModalLayout open={openModal} 
handleClose={()=>setOpenModal(false)} title={"do you want to delete this"}>
  <Stack mt={3} display={"inline-flex"} spacing={3} direction="row">
    <Button variant="contained" onClick={()=>setOpenModal(false)}> Cancel</Button>
    <Button variant="contained" onClick={()=>{handleDelete(deleteId) , setOpenModal(false)}}>Delete</Button>
  </Stack>
</ModalLayout>)}
{snackbarOpen && (<CommonSnackbar open={snackbarOpen} onClose={handleclose} message={snackbarMessage}/>)}
    </div>
  );
};
export default Product1


