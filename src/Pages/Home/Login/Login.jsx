// import {
//   useSendPasswordResetEmail,
//   useSignInWithEmailAndPassword,
//   useSignInWithGoogle,
// } from "react-firebase-hooks/auth";
// import React from "react";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
// import auth from "../../../firebase.init";

// const Login = () => {
//   const navigate = useNavigate();
//   // const location = useLocation();

//   const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

//

//   const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

//   let errorManage;

//   if (error || emailerror) {
//     errorManage = (
//       <div>
//         <p>
//           Error: {error?.message}
//           {emailerror?.message}
//         </p>
//       </div>
//     );
//   }

//   // if (loading || emailloading) {
//   //   return <Loading></Loading>;
//   // }
//   // const from = location.state?.from?.pathname || "/";

//   // if (user || emailuser) {
//   //   navigate(from, { replace: true });
//   // }

//   if(user||emailuser){

//     navigate('/home')
//   }
//   const handleLogIn = (e) => {
//     e.preventDefault();

//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     //signin with email-password
//     signInWithEmailAndPassword(email, password);
//   };

//   const handleResetPassword = (event) => {
//     const email = event.target.email.value;
//     console.log(email);
//     if (email) {
//       sendPasswordResetEmail(email);
//       alert("Sent email");
//     } else {
//       alert("Please enter your email");
//     }
//   };

//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//   } = useForm();

//   const onSubmit = (data) => {
//     signInWithEmailAndPassword(data.email, data.password);
//     console.log(data);
//   };
//   return (
//     <div>
//       <div className="my-12" data-theme="fantasy">
//         <h2 className="text-4xl text-primary font-bold text-center p-6 mb-10">
//           LogIn
//         </h2>
//         <div className="flex justify-center items-center">
//           <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-purple-100">
//             <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="email"
//                   className="input input-bordered"
//                   {...register("email", {
//                     required: true,
//                     pattern: {
//                       value: /[A-Za-z]{3}/,
//                       message: "error message",
//                     },
//                   })}
//                 />
//                 <p className="text-red-500">
//                   {errors.email?.type === "required" && "email is required"}
//                   {errors.email?.type === "pattern" && "email must be valid"}
//                 </p>
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input
//                   type="password"
//                   placeholder="password"
//                   className="input input-bordered"
//                   {...register("password", {
//                     required: true,
//                     minLength: {
//                       value: 8,
//                       message: "error message",
//                     },
//                   })}
//                 />

//                 <p className="text-red-500">
//                   {errors.password?.type === "required" &&
//                     "password is required"}
//                   {errors.password?.type === "minLength" &&
//                     "password must be 8 characters"}
//                 </p>

//                 <label className="label">
//                   <a href="#" className="label-text-alt link link-hover">
//                     Forgot password?
//                   </a>
//                 </label>
//               </div>
//               <div className="form-control mt-6">
//                 <input
//                   type="submit"
//                   className="btn btn-primary"
//                   value="Login"
//                 />
//                 <button
//                   onClick={() => signInWithGoogle()}
//                   className="btn btn-primary mt-4"
//                 >
//                   <div className="flex flex-row items-center">
//                     <img
//                       style={{ height: "35px" }}
//                       src="https://i.ibb.co/ZTdGcNf/google-logo.webp"
//                       alt=""
//                     />

//                     <div>
//                       <span className="">Continue With Google</span>
//                     </div>
//                   </div>
//                 </button>

//                 {/* <p className="text-red-500 text-xs">{errorMessage}</p> */}
//               </div>
//               <div>
//                 <p>
//                   New to <span className="uppercase text-green-900 font-semibold">mais</span> ?{" "}
//                   <Link className="link link-secondary" to="/register">
//                     Register{" "}
//                   </Link>
//                 </p>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import * as React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Loading from "../../../Shared/Loading/Loading";
import GoogleIcon from "@mui/icons-material/Google";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    ></Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const [signInWithGoogle, gUser, loading, error] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, emailuser, emailloading, emailerror] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  if (gUser || emailuser) {
    console.log(emailuser,gUser);
    navigate("/");
  }
  if (loading || emailloading) {
    <Loading />;
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    //signin with email-password
    signInWithEmailAndPassword(email, password);

    
  };
  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#0071E8" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
              onClick={() => signInWithGoogle()}
            >
              <GoogleIcon /> <span className="px-2">Sign In with Google</span>
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
