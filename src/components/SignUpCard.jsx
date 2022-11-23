import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import classes from "./SignUpCard.module.css";

const SignUpCard = (props) => {
    const password = useRef("");
    const cpassword = useRef("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleConfirmPassword = () => {
    setConfirmPassword(!showConfirmPassword);
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstname: "",
      lastname: "",
      emailId: "",
      userId: "",
      password: "",
      cpassword: "",
      image:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
    },
  });
//   console.log(errors);
//   console.log("Password:",password.current.value)
//   console.log("cPassword:",cpassword.current.value)
//   const handlePassword = ()=>{
//     console.log(password.current.value !==cpassword.current.value)
//   }
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      component="span"
      sx={{ width: 500, height: 500, backgroundColor: "red" }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.container}>
          <div className={classes.controller}>
            <Controller
              name="firstname"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="First Name"
                  variant="standard"
                  label="First Name"
                  sx={{ width: "160%" }}
                />
              )}
              rules={{
                required: {
                  value: true,
                  message: "First Name is Required",
                },
                pattern: {
                  value: /^[a-zA-Z]{3,}$/,
                  message: "Invalid First Name",
                },
              }}
            />
            {errors.firstname && (
              <span className={classes.required}>
                {errors.firstname.message}
              </span>
            )}
          </div>
          <div className={classes.controller}>
            <Controller
              name="lastname"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="Last Name"
                  variant="standard"
                  label="Last Name"
                  sx={{ width: "160%" }}
                />
              )}
              rules={{
                required: {
                  value: true,
                  message: "Last Name is Required",
                },
                pattern: {
                  value: /^[a-zA-Z]{3,}$/,
                  message: "Invalid Last Name",
                },
              }}
            />
            {errors.lastname && (
              <span className={classes.required}>
                {errors.lastname.message}
              </span>
            )}
          </div>
        </div>

        <div className={classes.container}>
          <div className={classes.controller}>
            <Controller
              name="emailId"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="Enter E-mail"
                  variant="standard"
                  label="Enter Email Address"
                  sx={{ width: "160%" }}
                />
              )}
              rules={{
                required: {
                  value: true,
                  message: "E-mail address is Required",
                },
                pattern: {
                  value: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Invalid E-mail address",
                },
              }}
            />
            {errors.emailId && (
              <span className={classes.required}>{errors.emailId.message}</span>
            )}
          </div>
          <div className={classes.controller}>
            <Controller
              name="userId"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="User Id"
                  variant="standard"
                  label="Enter UserId"
                  sx={{ width: "160%" }}
                />
              )}
              rules={{
                required: {
                  value: true,
                  message: "User Id is Required",
                },
                pattern: {
                  value: /^[A-Za-z][A-Za-z0-9_]{2,29}$/,
                  message: "Invalid User Id",
                },
              }}
            />
            {errors.userId && (
              <span className={classes.required}>{errors.userId.message}</span>
            )}
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.controller}>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="Enter Password"
                  variant="standard"
                  label="Enter Password"
                  inputRef={password}
                  type={showPassword ? "text" : "password"}
                  sx={{ width: "160%" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword}>
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
              rules={{
                required: {
                  value: true,
                  message: "Password is Required",
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
          <div className={classes.controller}>
            <Controller
              name="cpassword"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="Confirm Password"
                  variant="standard"
                  label="Confirm Password"
                  inputRef={cpassword}
                  type={showConfirmPassword ? "text" : "password"}
                  sx={{ width: "160%" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleConfirmPassword}>
                          {showConfirmPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
              rules={{
                required: {
                  value: true,
                  message: "Please Confirm your Password",
                },
                pattern: {
                  value:
                    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/,
                  message: "Invalid Password",
                }
              }}
            />
            {errors.cpassword && (
              <span className={classes.required}>
                {errors.cpassword.message}
              </span>
            )}
          </div>
        </div>
        <div className={classes.actions}>
          <input
            type="submit"
            value="Sign-Up"
            className={classes.action}
            onClick={() => {
              props.onSignUp("signup");
            }}
          />
          <input
            type="submit"
            value="Log-In"
            className={classes.action}
            onClick={() => {
              props.onSignUp("login");
            }}
          />
          {/* <Button className={classes.action}>Log-In</Button> */}
        </div>
      </form>
    </Box>
  );
};

export default SignUpCard;
