import * as React from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import GoogleIcon from "@mui/icons-material/Google";
import PhoneIcon from "@mui/icons-material/Phone";
import { useForm } from "react-hook-form";
import { hover } from "@testing-library/user-event/dist/hover";
import auth from "../../firebase.init";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast } from "react-toastify";
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

const theme = createTheme({
  palette: {
    primary: {
      main: "#7b1fa2",
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
    },
  },
});

export default function MobileAuth() {
  let [phone, setPhone] = React.useState("");
  const [error, setError] = React.useState("");
  const [otp, setOtp] = React.useState("");
  const [result, setResult] = React.useState("");
  console.log(otp);

  //sign in with Google
  const [signInWithGoogle, gUser, loading] = useSignInWithGoogle(auth);

  //password reset email
  const [sendPasswordResetEmail, sending, passwordError] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();

  //setUpRecaptha
  function setUpRecaptha(phone) {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, phone, recaptchaVerifier);
  }

  const verifyOtp = async (e) => {
    e.preventDefault();
    console.log(otp);
    setError("");
    if (otp === "" || otp === null) return;
    if (result) {
      toast.success("Verified your OTP");
    }
    try {
      await result.confirm(otp);
      await navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  if (gUser) {
    console.log(gUser);
    navigate("/");
  }
  if (loading) {
    <Loading />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    phone = "+880" + phone;

    console.log(phone);
    setError("");
    if (phone === "" || phone === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(phone);

      setResult(response);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#7b1fa2" }}>
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
              <div className="flex">
                {" "}
                <TextField
                  sx={{
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                    backgroundColor: "#D9DEE8",
                  }}
                  className="w-20 "
                  margin="normal"
                  required
                  disabled
                  id="phone"
                  name="phone"
                  value="+880"
                  autoFocus
                />
                <TextField
                  sx={{ marginLeft: "2px" }}
                  className="w-full"
                  margin="normal"
                  required
                  id="phone"
                  label="Phone"
                  name="phone"
                  type="text"
                  autoFocus
                  defaultCountry="IN"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div id="recaptcha-container"></div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>{" "}
              <div className="text-red-900 font-semibold">{error}</div>
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
              <Grid container>
                <Grid item>
                  <Link
                    className="text-xs  text-purple-900 font-bold lg:text-sm"
                    to="/register"
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ margin: "2rem" }}>
              {" "}
              {result && (
                <form onSubmit={verifyOtp}>
                  <TextField
                    sx={{ marginLeft: "2px" }}
                    className="w-full"
                    margin="normal"
                    required
                    id="otp"
                    label="Enter the OTP"
                    name="otp"
                    type="text"
                    autoFocus
                    onChange={(e) => setOtp(e.target.value)}
                  />
                  <Button
                    size="small"
                    fullWidth
                    variant="contained"
                    type="submit"
                  >
                    Verify OTP
                  </Button>
                </form>
              )}
            </Box>
          </Box>
        </>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
