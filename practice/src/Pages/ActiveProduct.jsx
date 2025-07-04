// import React, { useEffect, useState } from "react";

// const ActiveProducts = () => {
//   const [activeProducts, setActiveProducts] = useState([]);

//   useEffect(() => {
//     // ✅ Get all products from localStorage (saved by Product2)
//     const storedProducts = JSON.parse(localStorage.getItem("productdata") || "[]");

//     // ✅ Filter only products with status === "Active"
//     const onlyActive = storedProducts.filter(
//       (product) => product.status === "Active"
//     );

//     setActiveProducts(onlyActive);
//   }, []);

//   return (
//     <div>
//       <h2>Active Products</h2>

//       {activeProducts.length === 0 ? (
//         <p>No active products found.</p>
//       ) : (
//         <ul>
//           {activeProducts.map((product) => (
//             <li key={product.id}>
//               <strong>{product.title || product.producttitle}</strong> — ₹{product.price}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ActiveProducts;

import React, { useState } from 'react';

function ActiveProducts() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
      <p>{isLoggedIn ? 'You are logged in.' : 'You are logged out.'}</p>
    </div>
  );
}
export default  ActiveProducts