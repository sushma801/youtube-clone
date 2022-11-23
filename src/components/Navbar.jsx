import React, { useState } from "react";
import { Stack } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
import { Avatar, Button, Menu, MenuItem, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { isPresent, setUser } from "../redux/user-slice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const isLogin = useSelector(state=>state.Users.login);
  const open = Boolean(anchorEl);
  const { firstName, lastName, email, userId,image } = useSelector(
    (state) => state.Users.user
  );
  const default_image = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png";
  const flag = firstName==="" && lastName==="";
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {<Avatar src={image?image:default_image}/>}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Paper sx={{width:"200px",marginBottom:"1px"}}>
        <MenuItem onClick={()=>{navigate('/welcome/profile')}}>Profile</MenuItem>
        <MenuItem>My Account</MenuItem>
        </Paper>

        <Paper>
        {isLogin && <MenuItem onClick={()=>{
          dispatch(isPresent(false))
          dispatch(setUser([]))
        }}>Logout</MenuItem>}
        {!isLogin && <MenuItem> 
          Sign-up
        </MenuItem>}
        </Paper>
      </Menu>

    </Stack>
  );
};
export default Navbar;
