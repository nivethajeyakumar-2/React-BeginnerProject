
// import React, { useState, useCallback } from "react";
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import dayjs from "dayjs";
//    import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// function Dashboard({ name }) {
//   const [count, setCount] = useState(0);
//   const normalFunction = () => {
//     console.log(`Normal Hello, ${name}`);
//   };
//   const memoizedFunction = useCallback(() => {
//     console.log(`Memoized Hello, ${name}`);
//   }, [name]);
//   const Button = React.memo(({ onClick, label }) => {
//     console.log(`Rendering ${label} Button`);
//     return <button onClick={onClick}>{label}</button>;
//   });

//   // date and time practice
//   const[dateTime , setDateTime]=useState(dayjs)
//   return (
//     <div>
//        <LocalizationProvider dateAdapter={AdapterDayjs}>
//               <DateTimePicker label=" date time " 
//               value={dateTime  }
//               onChange={(newvalue)=>setDateTime(newvalue)} 
//               />
//           </LocalizationProvider>
//       <hr/>
//       <h1>Dashboard</h1>
//  {/* example for react memo and react callback  */}
//       {/* <p>Welcome {name} !!</p>
//       <button onClick={() => setCount(prev => prev + 1)}>Increase Count: {count}</button>
//       <Button onClick={normalFunction} label="Normal" />
//       <Button onClick={memoizedFunction} label="Memoized" /> */}
      
//     </div>
//   );
// }

// export default Dashboard;



/// chart
import React from "react";
import Chart from "./Dash-Chart";
import Linebar from "./Linebar";
function Dashboard(){
  return(
    <>
    <div>
       <Linebar/>
    </div>
    <hr/>
   <div> 
    <Chart/>
   </div>
 </>
    
  )
}
export default Dashboard