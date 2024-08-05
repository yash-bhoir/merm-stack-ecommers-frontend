import React, { useState } from "react";
import "./Sidebar.css"; // Import the CSS file

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  Collapse,
  Tooltip, // Import Tooltip
} from "@mui/material";
import {
  Menu,
  Dashboard,
  ShoppingCart,
  BarChart,
  People,
  ExitToApp,
  ExpandLess,
  ExpandMore,
  Add,
  ListAlt,
  Edit,
  Notifications,
  AccountCircle,
} from "@mui/icons-material";

interface SidebarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleSidebar = () => setOpen(!open);

  const handleMenuClick = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <Drawer
      variant="permanent"
      className="sidebar"
      sx={{

        width: open ? 240 : 60,
        "& .MuiDrawer-paper": {
          width: open ? 240 : 60,
          transition: "width 0.3s",
          overflowX: "hidden",
          overflowY: "auto",
          borderRight: "2px solid #ddd",
          borderLeft: "2px solid #ddd",
          borderTop: "2px solid #ddd",
          borderBottom: "2px solid #ddd",
          borderRadius: "20px 20px 20px 20px",
          marginLeft: "10px",
          height: "100%",
        },
      }}
    >
      <List>
        <ListItem>
          <IconButton
            className="sidebar-menu-icon"
            onClick={toggleSidebar}
            sx={{
              marginLeft: "-8px",
              transition: "margin-left 0.3s ease",
            }}
          >
            <Tooltip title={open ? "" : "Menu"}>
              <Menu />
            </Tooltip>
          </IconButton>
        </ListItem>

        <Tooltip title={open ? "" : "Dashboard"}>
          <ListItem button onClick={() => handleMenuClick("Dashboard")}>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            {open && <ListItemText primary="Dashboard" />}
          </ListItem>
        </Tooltip>

        <Collapse in={activeMenu === "Dashboard"} timeout="auto" unmountOnExit>
          <List component="div" disablePadding></List>
        </Collapse>

        <Tooltip title={open ? "" : "Ecommerce"}>
          <ListItem button onClick={() => handleMenuClick("Ecommerce")}>
            <ListItemIcon>
              <ShoppingCart />
            </ListItemIcon>
            {open && <ListItemText primary="Ecommerce" />}
            {open &&
              (activeMenu === "Ecommerce" ? <ExpandLess /> : <ExpandMore />)}
          </ListItem>
        </Tooltip>

        <Collapse in={activeMenu === "Ecommerce"} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Tooltip title={open ? "" : "Add Product"}>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemIcon>
                  <Add />
                </ListItemIcon>
                <ListItemText primary="Add Product" />
              </ListItem>
            </Tooltip>
            <Tooltip title={open ? "" : "Product List"}>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Product List" />
              </ListItem>
            </Tooltip>
          </List>
        </Collapse>

        <Tooltip title={open ? "" : "Category"}>
          <ListItem button onClick={() => handleMenuClick("Category")}>
            <ListItemIcon>
              <BarChart />
            </ListItemIcon>
            {open && <ListItemText primary="Category" />}
            {open &&
              (activeMenu === "Category" ? <ExpandLess /> : <ExpandMore />)}
          </ListItem>
        </Tooltip>

        <Collapse in={activeMenu === "Category"} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Tooltip title={open ? "" : "Category List"}>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Category List" />
              </ListItem>
            </Tooltip>
            <Tooltip title={open ? "" : "New Category"}>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemIcon>
                  <Add />
                </ListItemIcon>
                <ListItemText primary="New Category" />
              </ListItem>
            </Tooltip>
          </List>
        </Collapse>

        <Tooltip title={open ? "" : "Orders"}>
          <ListItem button onClick={() => handleMenuClick("Orders")}>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            {open && <ListItemText primary="Orders" />}
            {open && (activeMenu === "Orders" ? <ExpandLess /> : <ExpandMore />)}
          </ListItem>
        </Tooltip>

        <Collapse in={activeMenu === "Orders"} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Tooltip title={open ? "" : "Order List"}>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Order List" />
              </ListItem>
            </Tooltip>
            <Tooltip title={open ? "" : "Order Details"}>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemIcon>
                  <Edit />
                </ListItemIcon>
                <ListItemText primary="Order Details" />
              </ListItem>
            </Tooltip>
            <Tooltip title={open ? "" : "Order Tracking"}>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemIcon>
                  <People />
                </ListItemIcon>
                <ListItemText primary="Order Tracking" />
              </ListItem>
            </Tooltip>
          </List>
        </Collapse>

        <Tooltip title={open ? "" : "Bills"}>
          <ListItem button onClick={() => handleMenuClick("Bills")}>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            {open && <ListItemText primary="Bills" />}
          </ListItem>
        </Tooltip>

        <Tooltip title={open ? "" : "Users"}>
          <ListItem button onClick={() => handleMenuClick("Users")}>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            {open && <ListItemText primary="Users" />}
          </ListItem>
        </Tooltip>
      </List>

      <List
        className="bottom-icons"
        sx={{
          paddingTop: "50px",
        }}
      >
        <Tooltip title={open ? "" : "Notifications"}>
          <ListItem button onClick={() => handleMenuClick("Notifications")}>
            <ListItemIcon>
              <Notifications />
            </ListItemIcon>
            {open && <ListItemText primary="Notifications" />}
          </ListItem>
        </Tooltip>
        <Tooltip title={open ? "" : "Account"}>
          <ListItem button onClick={() => handleMenuClick("Account")}>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            {open && <ListItemText primary="Account" />}
          </ListItem>
        </Tooltip>
        <Tooltip title={open ? "" : "Exit"}>
          <ListItem button onClick={() => handleMenuClick("Exit")}>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            {open && <ListItemText primary="Exit" />}
          </ListItem>
        </Tooltip>
      </List>
    </Drawer>
  );
};

export default Sidebar;