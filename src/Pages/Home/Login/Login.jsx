import * as React from "react";
import {
  useSendPasswordResetEmail,
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
import PhoneIcon from "@mui/icons-material/Phone";
import { useForm } from "react-hook-form";
import { hover } from "@testing-library/user-event/dist/hover";
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
  const [email, setEmail] = React.useState("");

  //sign in with Google
  const [signInWithGoogle, gUser, loading, error] = useSignInWithGoogle(auth);

  //sign in with Email and Password
  const [signInWithEmailAndPassword, emailuser, emailloading, emailerror] =
    useSignInWithEmailAndPassword(auth);

  //password reset email
  const [sendPasswordResetEmail, sending, passwordError] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();

  if (gUser || emailuser) {
    console.log(emailuser, gUser);
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

  //send password reset email

  const handleResetPassword = () => {
    // const email= e.target.email.value
    // console.log(email)

    sendPasswordResetEmail(email);
    console.log(email);
    alert("email");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <>
          <Box
            onSubmit={handleSubmit}
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
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
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
                helperText="Do not share your password"
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
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  {" "}
                  <Button
                    size="small"
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 1, mb: 2 }}
                    onClick={() => signInWithGoogle()}
                  >
                    <GoogleIcon />{" "}
                    <span className="px-2 ">Continue with Google</span>
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    size="small"
                    type="submit"
                    fullWidth
                    sx={{
                      mt: 1,
                      mb: 2,
                      color: "#333333",
                      backgroundColor: "#D9DEE8",
                    }}
                    onClick={() => signInWithGoogle()}
                  >
                    <PhoneIcon sx={{ color: "#333333" }} />{" "}
                    <span className="px-2">Continue with Phone</span>
                  </Button>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs>
                  <Link
                    onClick={(e) => handleResetPassword()}
                    href="#"
                    variant="body1"
                  >
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
        </>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
