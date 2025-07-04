// import React, { useState } from "react";
// import { Box, Paper, Typography, Button } from "@mui/material";
// import CustomTextField from "../../Layout/CustomTextField";
// import { emailValidator, passwordValidator } from "./Validator";
// import { useNavigate } from "react-router-dom";
// import CommonSnackbar from "../../Layout/SnackBar";

// function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState({ email: "", password: "" });

//   const [snackbarOpen, setSnackbarOpen] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const emailError = emailValidator(email);
//     const passwordError = passwordValidator(password);
//     setError({ email: emailError, password: passwordError });

//     if (!emailError && !passwordError) {
//       setSnackbarOpen(true);
//       setTimeout(() => {
//         navigate("/dashboard");
//       }, 1500);
//     }
//   };

//   const handleSnackbarClose = () => {
//     setSnackbarOpen(false);
//   };

//   return (
//     <Box
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       minHeight="100vh"
//       sx={{ backgroundColor: "#f0f2f5" }}
//     >
//       <Paper
//         elevation={6}
//         sx={{
//           padding: 4,
//           borderRadius: 3,
//           width: 400,
//           backgroundColor: "#ffffff",
//         }}
//       >
//         <form className="form" onSubmit={handleSubmit}>
//           <Typography variant="h5" align="center" gutterBottom>
//             LOGIN
//           </Typography>
//           <CustomTextField
//             label="Email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder="Enter your email"
//             error={!!error.email}
//             helperText={error.email}
//           />
//           <CustomTextField
//             label="Password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             type="password"
//             placeholder="Enter your password"
//             error={!!error.password}
//             helperText={error.password}
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             type="submit"
//             fullWidth
//             sx={{ mt: 2 }}
//           >
//             Submit
//           </Button>
//         </form>
//       </Paper>
//       <CommonSnackbar
//         open={snackbarOpen}
//         onClose={handleSnackbarClose}
//         message=" Hey You Have Logged in Successfully🐱"
//       />
//     </Box>
//   );
// }
// export default Login;


import React, { useState } from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import CustomTextField from "../../Layout/CustomTextField";
import { useNavigate } from "react-router-dom";
import CommonSnackbar from "../../Layout/SnackBar";
import { useFormik } from "formik"; 
import * as Yup from "yup";   
import { FormControl,     
  InputLabel,       
  Select,            
  MenuItem           
} from "@mui/material";     
function Login() {
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const[snackbarMessage , setSnackbarMessage]= useState("")
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      role:"",
    },
    validationSchema: Yup.object({
      email: Yup.string() .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/,"Invalid Email Address . provide a valid Email Address").required("Required"),
      password: Yup.string()
        .min(6, "Must be at least 6 characters")
        .required("Required"),
        role: Yup.string().required("Role is required"),
    }),
     
    onSubmit: (values) => {
    if (values.email === "nivethajeyakumar2@gmail.com" && values.password==="1234567"||values.email==="nivj@gmail.com" && values.password==="987654321") {
    setSnackbarMessage("Hey you have logged in successfully");
    setSnackbarOpen(true);
    localStorage.setItem("email", values.email);
     localStorage.setItem("role", values.role);
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500)}
            else{
              setSnackbarOpen(true)  ,
        setSnackbarMessage("invaild login entry")
            } 
    },
  });
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ backgroundColor: "#f0f2f5" }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          borderRadius: 3,
          width: 400,
          backgroundColor: "#ffffff",
        }}
      >
        <form className="form" onSubmit={formik.handleSubmit}>
          <Typography variant="h5" align="center" gutterBottom>
            LOGIN
          </Typography>
          <CustomTextField
            label="Email"
            name="email"
            value={formik.values.email} 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur} 
            type="email"
            placeholder="Enter your email"
            error={formik.touched.email && Boolean(formik.errors.email)} 
            helperText={formik.touched.email && formik.errors.email} 
          />

          <CustomTextField
            label="Password"
            name="password"
            value={formik.values.password} 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur} 
            type="password"
            placeholder="Enter your password"
            error={formik.touched.password && Boolean(formik.errors.password)} 
            helperText={formik.touched.password && formik.errors.password} 
          />

            <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="role-label">Role</InputLabel>
            <Select
              labelId="role-label"
              id="role"
              name="role"
              value={formik.values.role}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="Role"
              error={formik.touched.role && Boolean(formik.errors.role)}
            >
              <MenuItem value="">Select Role</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="user">User</MenuItem>
            </Select>
            {formik.touched.role && formik.errors.role && (
              <Typography variant="caption" color="error">
                {formik.errors.role}
              </Typography>
            )}
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{ mt: 2 }} 
          >
            Submit
          </Button>
        </form>
      </Paper>
      <CommonSnackbar
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </Box>
  );
}
export default Login;




 