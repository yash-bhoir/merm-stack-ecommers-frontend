// import { useState } from "react";
// import { CiChat1 } from "react-icons/ci";
// import { CiUser } from "react-icons/ci";
// import { IoIosNotificationsOutline } from "react-icons/io";
// import { IoSettingsOutline } from "react-icons/io5";
// import "./Admin.css";

import Dashboard from "./Dashboard"

// const Admin = () => {
//   const [activeMenu, setActiveMenu] = useState(null);

//   const toggleMenu = (menu ) => {
//     setActiveMenu(activeMenu === menu ? null : menu);
//   };

//   return (
//     <div className="admin-container flex flex-col min-h-screen">
//       <header className="admin-header flex justify-between items-center p-4 text-white border-b border-gray-400">
//         <div className="logo text-xl font-bold text-black">ShopEasy</div>
//         <div className="input-container">
//           {/* <InputWithButton /> */}
//         </div>
//         <div className="header-icons flex space-x-10">
//           <div>
//             <IoIosNotificationsOutline
//               style={{ color: "black", fontSize: "25px" }}
//             />
//           </div>
//           <div>
//             <CiChat1 style={{ color: "black", fontSize: "25px" }} />
//           </div>
//           <div>
//             <CiUser style={{ color: "black", fontSize: "25px" }} />
//           </div>
//           <div>
//             <IoSettingsOutline style={{ color: "black", fontSize: "25px" }} />
//           </div>
//           <div style={{ color: "black", fontSize: "25px" }}>
//             {/* <ModeToggle /> */}
//           </div>
//         </div>
//       </header>

//       <div className="admin-content flex flex-grow">
//         <nav className="sidebar text-black w-64 p-4 border-r border-gray-400">
//           <ul className="space-y-2">
//             <li
//               className="cursor-pointer"
//               onClick={() => toggleMenu("dashboard")}
//             >
//               Dashboard
//             </li>
//             <li
//               className="cursor-pointer"
//               onClick={() => toggleMenu("ecommerce")}
//             >
//               Ecommerce
//             </li>
//             {activeMenu === "ecommerce" && (
//               <ul className="dropdown pl-4 space-y-1">
//                 <li>Add Product</li>
//                 <li>Product List</li>
//               </ul>
//             )}
//             <li
//               className="cursor-pointer"
//               onClick={() => toggleMenu("category")}
//             >
//               Category
//             </li>
//             {activeMenu === "category" && (
//               <ul className="dropdown pl-4 space-y-1">
//                 <li>Category List</li>
//                 <li>New Category</li>
//               </ul>
//             )}
//             <li className="cursor-pointer" onClick={() => toggleMenu("orders")}>
//               Orders
//             </li>
//             {activeMenu === "orders" && (
//               <ul className="dropdown pl-4 space-y-1">
//                 <li>Order List</li>
//                 <li>Order Details</li>
//                 <li>Order Tracking</li>
//               </ul>
//             )}
//             <li className="cursor-pointer" onClick={() => toggleMenu("bills")}>
//               Bills
//             </li>
//             <li className="cursor-pointer" onClick={() => toggleMenu("users")}>
//               Users
//             </li>
//           </ul>
//         </nav>
//         <main className="main-content flex-grow p-4">
//           {/* <h1 className="text-2xl font-bold">Hello Admin</h1> */}
//           <div>
//  hi
//           </div>
//           {/* Add your main content here */}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Admin;



const Admin = () => {
  return (
    <div>
      <Dashboard/>
      
    </div>
  )
}

export default Admin
