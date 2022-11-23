import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import classes from "./LoginCard.module.css";
import { SignUpCard } from "./";
import { useDispatch, useSelector } from "react-redux";
import { GetAllUser, setUser } from "../redux/user-slice";
import { isPresent } from "../redux/user-slice";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginCard = ({open}) => {
  const dispatch = useDispatch();
  const users = useSelector(state=>state.Users.AllUser);
  const isLogin = useSelector(state=>state.Users.login);
  const [dialogOpen, setDialogOpen] = useState(open);
  const [accessType, setAccessType] = useState("login");
  const [showPassword,setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const handlePassword = ()=>{
    setShowPassword(!showPassword)
  }
  const onSubmit = (data,e) => {
    console.log(data);
    const present = users.find(user=>(user.userId===data.username||user.email===data.username) && user.password===data.password)
    if(present){
      dispatch(isPresent(true));
      dispatch(setUser(present));
      handleClose();
    }else{
      dispatch(isPresent(false));
    }
    reset();
    setAccessType("login");
  };
  const handleClose = () => {
    setDialogOpen(false);
  };
  const onSignUp = (accessType) => {  
    setAccessType(accessType);
  };
  useEffect(()=>{
    dispatch(GetAllUser())
  },[dispatch])
  return (
    <Dialog open={dialogOpen} onClose={handleClose} fullWidth>
      <DialogTitle>
        <div className={classes.titlebox}>
          <h3>Sign-in / Sing-up </h3>
          {true ? (
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          ) : null}
        </div>
      </DialogTitle>
      <DialogContent>
        {/* Login Page */}
        {(accessType === "login" ) && (
          <form onSubmit={handleSubmit(onSubmit)} className={classes.container}>
            <div className={classes.username}>
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <TextField
                    placeholder="Username"
                    variant="standard"
                    margin="dense"
                    fullWidth
                    {...field}
                  />
                )}
                rules={{
                  required: {
                    value: true,
                    message: "Username is required",
                  },
                  pattern: {
                    value: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Invalid Username",
                  },
                }}
              />
              {errors.username && (
                <span className={classes.required}>
                  {errors.username.message}
                </span>
              )}
            </div>
            <div className={classes.password}>
              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <TextField
                    variant="standard"
                    placeholder="Password"
                    margin="dense"
                    fullWidth
                    {...field}
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment:(
                        <InputAdornment position="end">
                          <IconButton onClick={handlePassword}>
                            {showPassword?<Visibility/>:<VisibilityOff/>}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}

                  />
                )}
                rules={{
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  pattern: {
                    value:
                      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/,
                    message: "Invalid Password",
                  },
                }}
              />
              {errors.password && (
                <span className={classes.required}>
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className={classes.actions}>
              <input  type="submit" value="Login" className={classes.action} />
              <Button onClick={onSignUp} className={classes.action} >
                Sign-up
              </Button>
            </div>
          </form>
        )}
        {(accessType !== "login" ) && <SignUpCard onSignUp={onSignUp}/>}
      </DialogContent>
    </Dialog>
  );
};

export default LoginCard;
