import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ color: "white" }}>
            <Typography>
              <LibraryBooksOutlinedIcon />
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >

            
            <Tab LinkComponent={NavLink} to="/Cusrooms" label="Rooms" />

            
            
            
            
           
            
            
            
            <Tab LinkComponent={NavLink} to="/cusfoods" label="Foods" />
<<<<<<< HEAD
             <Tab LinkComponent={NavLink} to="/about" label="About Us" />
             <Tab LinkComponent={NavLink} to="/dilivarys" label="Delivarys" />
             <Tab LinkComponent={NavLink} to="/adddilivary" label=" ADD Delivary" />
             <Tab LinkComponent={NavLink} to="/about" label="About Us" />
             
=======
            <Tab LinkComponent={NavLink} to="/about" label="About Us" />
>>>>>>> 23f9b6ce5b89e786ea1380baf4bf9f0a31dc54fa

          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  
  );
  
};

export default Header;
