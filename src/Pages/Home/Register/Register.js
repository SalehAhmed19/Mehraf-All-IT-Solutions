// import React from "react";
// import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
// import auth from "../../../firebase.init";

// const Register = () => {
//   const navigate = useNavigate();

//   const [createUserWithEmailAndPassword, user, loading, error] =
//     useCreateUserWithEmailAndPassword(auth);
//   const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

//   const [updateProfile, updating, updatingError] = useUpdateProfile(auth);

//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//   } = useForm();
//   const onSubmit = async (data) => {
//     await createUserWithEmailAndPassword(data.email, data.password);

//     await updateProfile({ displayName: data.name });
//     alert("Updated profile");
//   };
// //   const [token] = useToken(user || gUser);
// //   if (token) {
// //     navigate("/home");
// //   }

// //   let errorMessage;
// //   if (error || gError) {
// //     errorMessage = (
// //       <div>
// //         <p>Error: {error.message}</p>
// //       </div>
// //     );
// //   }
// //   if (loading || gLoading || updating) {
// //     return <Loading></Loading>;
// //   }
//   return (
//     <div className="my-16" data-theme="fantasy">
//       <h2 className="text-4xl text-primary font-bold text-center p-6 mb-4">
//         Register
//       </h2>
//       <div className="flex justify-center items-center  ">
//         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-purple-100">
//           <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Name</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="input input-bordered"
//                 {...register("name", {
//                   required: true,
//                 })}
//               />
//               <p className="text-red-500">
//                 {errors.name?.type === "required" && "name is required"}
//               </p>
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input
//                 type="email"
//                 placeholder="email"
//                 className="input input-bordered"
//                 {...register("email", {
//                   required: true,
//                   pattern: {
//                     value: /[A-Za-z]{3}/,
//                     message: "error message",
//                   },
//                 })}
//               />
//               <p className="text-red-500">
//                 {errors.email?.type === "required" && "email is required"}
//                 {errors.email?.type === "pattern" && "email must be valid"}
//               </p>
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Password</span>
//               </label>
//               <input
//                 type="password"
//                 placeholder="password"
//                 className="input input-bordered"
//                 {...register("password", {
//                   required: true,
//                   minLength: {
//                     value: 8,
//                     message: "error message",
//                   },
//                 })}
//               />

//               <p className="text-red-500">
//                 {errors.password?.type === "required" && "password is required"}
//                 {errors.password?.type === "minLength" &&
//                   "password must be 8 characters"}
//               </p>

//               <label className="label">
//                 <a href="#" className="label-text-alt link link-hover">
//                   Forgot password?
//                 </a>
//               </label>
//             </div>
//             <div className="form-control mt-6">
//               <input
//                 type="submit"
//                 className="btn btn-primary"
//                 value="Register"
//               />
//               <button
//                 onClick={() => signInWithGoogle()}
//                 className="btn btn-primary mt-4"
//               >
//                 <div className="flex flex-row items-center">
//                   <img
//                     style={{ height: "35px" }}
//                     src="https://i.ibb.co/ZTdGcNf/google-logo.webp"
//                     alt=""
//                   />

//                   <div>
//                     <span className="">Continue With Google</span>
//                   </div>
//                 </div>
//               </button>
//               {/* <p className="text-red-500 text-xs">{errorMessage}</p> */}
//             </div>
//             <div>
//               <p>
//                 Already have an account? <Link to="/login">Login </Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

import * as React from "react";
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
import Modal from "@mui/material/Modal";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

//terms and conditions modal style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
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

export default function SignUp() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //create user through email and password
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const mobile = event.target.mobile.value;

    createUserWithEmailAndPassword(email,password)
    console.log(user);
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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="mobile"
                  label="Mobile number"
                  name="mobile"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="confirmPassword"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid> */}
              <Grid item xs={12}>
                {" "}
                <Grid container>
                  <Grid item xs={1}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                    />
                  </Grid>
                  <Grid item xs={11}>
                    you agree to
                    <Button onClick={handleOpen}>
                      terms and privacy policy
                    </Button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          Terms and Privacy policy
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 4 }}>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Maiores in autem nobis, iste tempora quos beatae
                          soluta ut repellendus, quisquam accusantium qui? Atque
                          nobis officia magnam in eos natus ratione, nam
                          reprehenderit obcaecati error harum doloremque
                          laboriosam quod debitis molestias.Lorem ipsum dolor
                          sit amet consectetur adipisicing elit. Maiores in
                          autem nobis, iste tempora quos beatae soluta ut
                          repellendus, quisquam accusantium qui? Atque nobis
                          officia magnam in eos natus ratione, nam reprehenderit
                          obcaecati error harum doloremque laboriosam quod
                          debitis molestias.
                        </Typography>
                      </Box>
                    </Modal>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
