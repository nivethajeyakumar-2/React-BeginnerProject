
// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import {
//   Box, Drawer, CssBaseline, Toolbar, Typography, Divider,
//   IconButton, List, ListItem, ListItemButton, ListItemIcon,
//   ListItemText, Collapse
// } from '@mui/material';
// import MuiAppBar from '@mui/material/AppBar';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import { useNavigate, Outlet, useLocation } from 'react-router-dom'; 
// import CommonSnackbar from '../Layout/SnackBar';
// const drawerWidth = 240;

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   })
// );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(['margin', 'width'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-end',
// }));

// export default function SidebarLayout() {
//   const [snackbarOpen, setSnackbarOpen] = React.useState(false);

//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);
//   const [productOpen, setProductOpen] = React.useState(false);
//   const [accountOpen, setAccountOpen] = React.useState(false);
//   const navigate = useNavigate();
//   const location = useLocation(); 
//   console.log("Current path:", location.pathname);
// //email condition 
//   const userEmail = localStorage.getItem("email"); 
//   const handleDrawerOpen = () => setOpen(true);
//   const handleDrawerClose = () => setOpen(false);
//   const handleProductClick = () => setProductOpen(prev => !prev);
//   const handleAccountClick = () => setAccountOpen(prev => !prev);
//   const handleLogout = () => {
//      setSnackbarOpen(true);
//     setTimeout(() => {
//        navigate('/login');
//     // alert("you Logged out");
    
//     },1000);
    
//   };
//   const handleSnackbarClose = () => setSnackbarOpen(false);

//   //pagename
//     const pageTitleMap = {
//     '/dashboard': 'Dashboard',
//     '/about': 'About',
//     '/redux': 'Redux Practice Example',
//     '/table': 'Table',
//     '/product1': 'Product One',
//     '/product2': 'Product Two',
//     '/profile': 'Profile',
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton color="inherit" onClick={handleDrawerOpen} edge="start" sx={{ mr: 2, ...(open && { display: 'none' }) }}>
//             <MenuIcon />
//           </IconButton>

         
//           {/* {!['/product1', '/product2', '/about'].includes(location.pathname) && (
//             <Typography variant="h6" noWrap>
//               Persistent Drawer
//             </Typography>
//           )} */}
//                     <Typography variant="h6" noWrap>
//             {pageTitleMap[location.pathname] || 'Persistent Drawer'}
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
//         }}
//         variant="persistent"
//         anchor="left"
//         open={open}
//       >
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           <ListItem disablePadding>
//             <ListItemButton
//               onClick={() => navigate('/dashboard')}
//               selected={location.pathname === '/dashboard'}
//             >
//               <ListItemIcon><InboxIcon /></ListItemIcon>
//               <ListItemText primary="Dashboard" />
//             </ListItemButton>
//           </ListItem>
// {userEmail==="nivethajeyakumar2@gmail.com"&&(<ListItem disablePadding>
//             <ListItemButton
//               onClick={() => navigate('/about')}
//               selected={location.pathname === '/about'}
//             >
//               <ListItemIcon><InboxIcon /></ListItemIcon>
//               <ListItemText primary="About" />
//             </ListItemButton>
//           </ListItem>)}
          
//          <ListItem disablePadding>
//             <ListItemButton
//               onClick={() => navigate('/redux')}
//               selected={location.pathname === '/redux'}
//             >
//               <ListItemIcon><InboxIcon /></ListItemIcon>
//               <ListItemText primary="Redux Practice Example" />
//             </ListItemButton>
//           </ListItem>
// {userEmail==="nivj@gmail.com"&&<ListItem disablePadding>
//             <ListItemButton
//               selected={location.pathname === '/table'}
//               onClick={() => navigate('/table')}
//             >
//               <ListItemIcon><InboxIcon /></ListItemIcon>
//               <ListItemText primary="Table" />
//             </ListItemButton>
//           </ListItem>}
          

//           <ListItem disablePadding>
//             <ListItemButton onClick={handleProductClick}>
//               <ListItemIcon><MailIcon /></ListItemIcon>
//               <ListItemText primary="Product" />
//               {productOpen ? <ExpandLess /> : <ExpandMore />}
//             </ListItemButton>
//           </ListItem>
//           <Collapse in={productOpen} timeout="auto" unmountOnExit>
//             <List component="div" disablePadding>
//               <ListItemButton
//                 sx={{ pl: 4 }}
//                 onClick={() => navigate('/product1')}
//                 selected={location.pathname === '/product1'}
//               >
//                 <ListItemText primary="Product One" />
//               </ListItemButton>
//               <ListItemButton
//                 sx={{ pl: 4 }}
//                 onClick={() => navigate('/product2')}
//                 selected={location.pathname === '/product2'}
//               >
//                 <ListItemText primary="Product Two" />
//               </ListItemButton>
//             </List>
//           </Collapse>

//           <ListItem disablePadding>
//             <ListItemButton onClick={handleAccountClick}>
//               <ListItemIcon><MailIcon /></ListItemIcon>
//               <ListItemText primary="Account" />
//               {accountOpen ? <ExpandLess /> : <ExpandMore />}
//             </ListItemButton>
//           </ListItem>
//           <Collapse in={accountOpen} timeout="auto" unmountOnExit>
//             <List component="div" disablePadding>
//               <ListItemButton
//                 sx={{ pl: 4 }}
//                 selected={location.pathname === '/profile'}
//                 onClick={() => navigate('/profile')}
//               >
//                 <ListItemText primary="Profile" />
//               </ListItemButton>
//             </List>
//           </Collapse>
//           <ListItem disablePadding>
//             <ListItemButton
//               onClick={handleLogout}
//             >
//               <ListItemIcon><InboxIcon /></ListItemIcon>
//               <ListItemText primary="Logout" />
//             </ListItemButton>
//           </ListItem>
//         </List>
//       </Drawer>

//       <Main open={open}>
//         <DrawerHeader />
//         <Outlet />
//       </Main>
//        {/* Snackbar used for logout */}
//       <CommonSnackbar
//         open={snackbarOpen}
//         onClose={handleSnackbarClose}
//         message="You Logged out"
//       />
//     </Box>
//   );
// }

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  Box, Drawer, CssBaseline, Toolbar, Typography, Divider,
  IconButton, List, ListItem, ListItemButton, ListItemIcon,
  ListItemText, Collapse,
  Stack,
  Button
} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useNavigate, Outlet, useLocation } from 'react-router-dom'; 
import CommonSnackbar from '../Layout/SnackBar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import TableChartIcon from '@mui/icons-material/TableChart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import ModalLayout from '../Layout/Modal';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function SidebarLayout() {
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [productOpen, setProductOpen] = React.useState(false);
  const [accountOpen, setAccountOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation(); 

  const userEmail = localStorage.getItem("email"); 
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const handleProductClick = () => setProductOpen(prev => !prev);
  const handleAccountClick = () => setAccountOpen(prev => !prev);
  const[openModal , setOpenModal]=React.useState(false)
  const handleLogout = () => {
    setSnackbarOpen(true);
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };
  const handleSnackbarClose = () => setSnackbarOpen(false);

  const pageTitleMap = {
    '/dashboard': 'Dashboard',
    '/about': 'About',
    '/redux': 'Redux Practice Example',
    '/table': 'Table',
    '/product1': 'Product One',
    '/product2': 'Product Two',
    '/profile': 'Profile',
  };
  console.log(location.pathname)
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton color="inherit" onClick={handleDrawerOpen} edge="start" sx={{ mr: 2, ...(open && { display: 'none' }) }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {pageTitleMap[location.pathname] || 'Persistent Drawer'}
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => navigate('/dashboard')}
              selected={location.pathname === '/dashboard'}
            >
              <ListItemIcon><DashboardIcon /></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>

          {userEmail === "nivethajeyakumar2@gmail.com" && (
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => navigate('/about')}
                selected={location.pathname === '/about'}
              >
                <ListItemIcon><InfoIcon /></ListItemIcon>
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem>
          )}
 {userEmail === "nivj@gmail.com" && (<ListItem disablePadding>
            <ListItemButton
              onClick={() => navigate('/redux')}
              selected={location.pathname === '/redux'}
            >
              <ListItemIcon><SyncAltIcon /></ListItemIcon>
              <ListItemText primary="Redux Practice Example" />
            </ListItemButton>
          </ListItem>)
          }

          {userEmail === "nivj@gmail.com" && (
            <ListItem disablePadding>
              <ListItemButton
                selected={location.pathname === '/table'}
                onClick={() => navigate('/table')}
              >
                <ListItemIcon><TableChartIcon /></ListItemIcon>
                <ListItemText primary="Table" />
              </ListItemButton>
            </ListItem>
          )}

          <ListItem disablePadding>
            <ListItemButton onClick={handleProductClick}>
              <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
              <ListItemText primary="Product" />
              {productOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={productOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => navigate('/product1')}
                selected={location.pathname === '/product1'}
              >
                <ListItemText primary="Product One" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => navigate('/product2')}
                selected={location.pathname === '/product2'}
              >
                <ListItemText primary="Product Two" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItem disablePadding>
            <ListItemButton onClick={handleAccountClick}>
              <ListItemIcon><AccountCircleIcon /></ListItemIcon>
              <ListItemText primary="Account" />
              {accountOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={accountOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                selected={location.pathname === '/profile'}
                onClick={() => navigate('/profile')}
              >
                <ListItemText primary="Profile" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItem disablePadding>
            <ListItemButton onClick={()=>setOpenModal(true)}>
              <ListItemIcon><LogoutIcon /></ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
            {openModal && (<ModalLayout open={openModal} handleClose={()=>setOpenModal(false)} title='do you want to logout ?'>
              <Stack direction="row" display={"inline-flex"} mt={3} mb={5} spacing={3}>
                <Button variant='contained' onClick={()=>setOpenModal(false)}>Cancel</Button>
                <Button variant='contained' onClick={()=>{handleLogout(), setOpenModal(false)}}>Logout</Button>
              </Stack>
            </ModalLayout>)}
          </ListItem>
        </List>
      </Drawer>

      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>

      <CommonSnackbar
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        message="You Logged out"
      />
    </Box>
  );
}
