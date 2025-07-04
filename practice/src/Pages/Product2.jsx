import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomTextField from "../Layout/CustomTextField";
import Search from "../Layout/SearchBar";
import TableLayout from "../Layout/Table";
import Loader from "../Layout/Loader";
import { Dialog, DialogActions, DialogContent, DialogTitle, Stack  , Button, Typography, Snackbar} from "@mui/material";
import ModalLayout from "../Layout/Modal";
import CommonSnackbar from "../Layout/SnackBar";
import ExcelJS from "exceljs";
const Product2=()=>{
    const[searchText , setSearchText] = useState("")
    const[product , setProduct]=useState([])
    const[addOpen , setAddOpen]=useState(false)
    const[addData , setAddData]=useState({
        producttitle:"",
        price:"",
        status:"Active"
    })
    const[editData , setEditData]= useState(null)
    const[editOpen , setEditOpen]= useState(false)
    const[page, setPage]= useState(0)
    const[rowsPerPage , setRowPerPage]= useState(10)
    const[loader , setLoader]=useState(false)
const[deleteId , setDeleteId]= useState(null)
const[openModal , setOpenModal]=useState(false)
const[openSnackbar , setOpenSnackbar]= useState(false)
const[snackMessage , setSnackMessage]= useState("")
    const fetchGrocery=()=>{
        setLoader(true)
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((data)=>{
            const datawithStatus=data.map((item)=>({
                ...item, status:"Active"
            }))
            setProduct(datawithStatus);
            console.log(datawithStatus)
        })
         .finally(()=>{setLoader(false)})
    }
    useEffect(()=>{
        fetchGrocery();
    },[])
    const handleAddSave=()=>{
       if (!addData.producttitle.trim() || addData.price === "") {
    setSnackMessage("Please fill all required fields");
    setOpenSnackbar(true);
    setTimeout(() => {
        setOpenSnackbar(false)
    }, 1500);
    console.log("need to fill the field")
    return;
}
        axios
        .post("https://fakestoreapi.com/products", addData)
        .then((response)=>{
            if(response){
                const newProduct={...response.data , id:Date.now() , title: addData.producttitle, price:addData.price, status:addData.status}
            setProduct((prev)=>[newProduct , ...prev])
            const local=JSON.parse(localStorage.getItem("productdata")||"[]")
            localStorage.setItem("productdata" , JSON.stringify([newProduct, ...local]))
            setAddData({producttitle:"" , price:"" , status:"Active"});
            setAddOpen(false);
            setEditOpen(false);
            setOpenSnackbar(true)
            setSnackMessage("added  successfully")
            setTimeout(() => {
                setOpenSnackbar(false)
            }, 2000);
            }
            else{
                setOpenSnackbar(true)
                setSnackMessage("adding the product failed")
            }
        })
        .catch((error)=>{
            console.log("error in post")
        })
        
    }
     const handleEditClick=(product)=>{
        setAddData({producttitle:product.title, price:product.price , status:product.status||"active"})
        setAddOpen(true)
        setEditOpen(true)
        setEditData(product.id);
     }
      const handleUpdate=()=>{
        axios
                .post("https://fakestoreapi.com/products", addData)
        .then((response)=>{
            if(response.status==200){
                 const UpdatedProduct={...response.data , id:Date.now() , title: addData.producttitle , price:addData.price, status:addData.status}
            setProduct((prev)=>prev.map((products)=>products.id==editData?UpdatedProduct:products))
            const local=JSON.parse(localStorage.getItem("productdata")||"[]")
            const Updatedlocal=local.map((product)=>product.id==editData ? UpdatedProduct:product)
            localStorage.setItem("productdata" , JSON.stringify(Updatedlocal))
            setAddData({producttitle:"" , price:"" , status:"Active"});
            setAddOpen(false)
            setEditOpen(false)
            setEditData(null)
            setOpenSnackbar(true)
            setSnackMessage("updated successfully")
            setTimeout(() => {
                setOpenSnackbar(false)
            }, 2000);
            console.log("updated successfully")
            }
           else{
            setOpenSnackbar(true)
            setSnackMessage( "update failed")
             console.log("update failed ")
           }

        })
        .catch((error)=>{
            console.log("error in update")
        })

      }
      const handleDelete=(id)=>{
         axios
                .delete(`https://fakestoreapi.com/products/ ${id}`)
        .then((res)=>{
            if(res.status==200){
                setProduct((prev)=>prev.filter((products)=>products.id!==id))
            const local=JSON.parse(localStorage.getItem("productdata"||"[]"))
            const Updatedlocal=local.filter((product)=>product.id==id)
            localStorage.setItem("productdata" , JSON.stringify(Updatedlocal))
           setSnackMessage("deleted successfully")
           setOpenSnackbar(true)
           setTimeout(() => {
            setOpenSnackbar(false)
           }, 3000);
           console.log("delete is successfull")
            }
            else{
                setSnackMessage("delete failed")
                setOpenSnackbar(true)
            }
        }
    )
        .catch((error)=>{
            console.log("error in delete"),
             setSnackMessage("delete failed"),
                setOpenSnackbar(true)
        })
    }
const filterProduct2= product.filter((product)=>{
    const title=product.title?.toLowerCase().includes(searchText.toLowerCase())
     const price=product.price?.toString().includes(searchText.toString())
     const active=product.status?.toLowerCase().includes(searchText.toLowerCase())
     return title||price||active
})
//handle close for snackbar
const handleClose=()=>{
    setTimeout(() => {
        setOpenSnackbar(false)
    },1000);
}
    return(
        <>
        <div>
            <Stack direction="row" display={"inline-flex"} mt={3} mb={3} spacing={25}>
                 <Search  value={searchText} onChange={setSearchText}/>
            </Stack>
           
            <h1>product2</h1>
            <Dialog open={addOpen} onClose={()=>setAddOpen(false)}>
                <DialogTitle >{editOpen?"editproduct":"add product"}</DialogTitle>
                <DialogContent>
                    <Stack spacing={3} sx={{mt:2}}>
                        {["producttitle" , "price"].map((field)=>(
                            <CustomTextField
                            key={field}
                            label={field}
                            value={addData[field]}
                            onChange={(e)=>setAddData({...addData , [field]:e.target.value})}/>
                        ))}
                        <Stack direction="row" alignItems="center" spacing={3}>
                            <Typography>Status</Typography>
                            <Button variant="contained" 
                            color={addData.status === "Active" ? "success" : "error"}
                            onClick={()=>setAddData((prev)=>({...prev,status: prev.status === "Active" ? "Inactive" : "Active" ,}))}>
                                {addData.status}
                            </Button>
                        </Stack>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>setAddOpen(false)}>Cancel</Button>
                    <Button onClick={editOpen?handleUpdate:handleAddSave} variant="contained">{editOpen?"update" :"add"}</Button>
                </DialogActions>
            </Dialog>
            {loader ?(<Loader loader={loader}/>):(<TableLayout
                columns={[
                {id:"title" , label:"product title"},
                {id:"price" , label:"product price"},
                {id:"status" , label:"Status" , render:(row)=>(<span style={{ backgroundColor:row.status==="Active"?"green":"red"  , 
                color:"white" , 
                padding:"6px 12px" ,
                 borderRadius:'12px' , 
                 fontSize:"12px" ,
                  fontWeight:"bold"}}>
                    {row.status}
                    </span>
                )},
                 {id:"actions" , label:"actions"}  ,]}
                 rows={filterProduct2}
                 page={page}
                 rowsPerPage={rowsPerPage}
                 onPageChange={(event,newpage)=>setPage(newpage)}
                 onRowsPerPageChange={(event)=>{
                    setRowPerPage(+event.target.value);
                    setPage(0);
                 }}
                 onEdit={handleEditClick}
                 onDelete={(id)=>{setDeleteId(id) , setOpenModal(true) }}
                 onAdd={()=>{
                    setAddOpen(true)
                    setEditOpen(false)
                    setAddData({producttitle:"" , price:"" , status:"Active"})
                 }}
                 /> )}
          {openModal && (<ModalLayout open={openModal} handleClose={()=>setOpenModal(false) } title={"do you want to delete this ?"}>
            <Stack display={"inline-flex"} mt={2} spacing={5} direction="row">
                <Button variant="contained" onClick={()=>setOpenModal(false)}>Cancel</Button>
                <Button variant="contained" onClick={()=>{handleDelete(deleteId) ,setOpenModal(false) }}>Delete</Button>    
            </Stack>
          </ModalLayout>)}
      {openSnackbar && (<CommonSnackbar open={openSnackbar} Close={handleClose} message={snackMessage}/>)}
        </div>
        </>
    )
}
export default Product2
