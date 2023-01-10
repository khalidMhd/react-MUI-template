import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button, MenuItem, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { emailValidator } from "../../common/validation/EmailValidator";
import { passwordValidator } from "../../common/validation/PasswordValidator";
import CommonButtons from "../../components/button/CommonButton";
import { CommonTextField } from "../../components/textField/CommonTextField";
import { signinAction } from "../../api/auth/action";
import CommonLoader from "../../components/loader/CommonLoader";
import { onPast } from "../../common/validation/OnPastValidation";
import { OnKeyCapture } from "../../common/validation/CaptureDown";
import CommonSnackbar from "../../components/snackbar/commonSnackbar";

export default function LoginScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState({ value: "", error: "" });
  const [password, setPassword] = React.useState({ value: "", error: "" });
  const [showPassword, setShowPassword] = React.useState(false);

  const { message, isSuccess, loading } = useSelector(
    (state) => state.userInfo
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    } else {
      dispatch(signinAction({ email: email.value, password: password.value }));
      return;
    }
  };

  //   React.useEffect(() => {
  //     if (success) {
  //       window.location.href = "/";
  //     }
  //   }, [success]);

  return (
    <Container
      maxWidth="xs"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* <CommonSnackbar isOpen={true} severity="error" message={"message"} /> */}
      <CommonLoader open={loading} />
      <Box
        component={Paper}
        style={{
          padding: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box onSubmit={handleSubmit}>
          <CommonTextField
            id="email"
            name="email"
            value={email.value}
            onChange={(e) => setEmail({ value: e.target.value, error: "" })}
            error={email.error ? true : false}
            label="Email Address"
            helperText={email.error}
            type="email"
          />

          <CommonTextField
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            id="password"
            value={password.value}
            onChange={(e) => setPassword({ value: e.target.value, error: "" })}
            error={password.error ? true : false}
            helperText={password.error}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box style={{ textAlign: "center", marginTop: 9 }}>
            <CommonButtons type="submit" variant="contained" color="primary">
              Sign In
            </CommonButtons>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
