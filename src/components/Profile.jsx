import React from "react";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import classes from "./Profile.module.css";

const Profile = () => {
  const { firstName, lastName, email } = useSelector(
    (state) => state.Users.user
  );
  const uploadImage = (e)=>{
    const fileName = e.target.value;
    console.log(e);
  }
  return (
    <Box sx={{ paddingLeft: "2rem",backgroundColor:'#fff' }}>
      <h3>User Deatils</h3>
      <Box>
        <p>
          Full Name : {firstName} {lastName}
        </p>
        <p>Email Id : {email}</p>
      </Box>
      <Box >
        <h3>Update Details</h3>
          <TextField
            label="Upload"
            variant="standard"
            className={classes.Image}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    variant="contained"
                    component="label"
                    className={classes.button}
                  >
                    Upload
                    <input hidden accept="image/*" multiple type="file" onChange={uploadImage}/>
                  </Button>
                </InputAdornment>
              ),
            }}
          />
      </Box>
    </Box>
  );
};

export default Profile;
