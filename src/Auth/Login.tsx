import {
  Box,
  Button,
  Card,
  CardContent,

  IconButton,

  InputAdornment,

  Paper,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import useScreenSize from "../Hooks/useScreenSize";
import imgBg from '../source/bgauth.jpg'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { authContext } from "../Hooks/AuthContext";
import { useContext, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
 
const CustomTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    fontFamily: "cursive", // Cambia esto al tipo de letra que desees
  },
  "& .MuiFormLabel-root": {
    fontFamily: "cursive", // Cambia esto al tipo de letra que desees
  },
  "& input[type='password']::-ms-reveal, & input[type='password']::-ms-clear": {
    display: "none",
  },
});

const Login = () => {

  const {state, trigger ,setState,setTrigger} = useContext(authContext)
 const [showPassword,setShowPassword] = useState(false)
  const { width } = useScreenSize()
  
  const getResize = (size:number) => {
    // width:'90vw'
   if(500 > size){
    return '90%'
   }else{
    if(500 < size && 1000 > size){
      return '55%'
    }
    return '35%'
   }
  }

  const handerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(
      {
        ...state,
        [e.target.name]:e.target.value
      }
    )  
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100dvh",
          background: `url(${imgBg})`,
          backgroundSize: "cover",
        }}
      >
        <Paper
          sx={{
            width: getResize(width),
            borderRadius: "5%",
            // background:'transparent'
            opacity: "0.83",
          }}
          elevation={16}
        >
          <Card
            sx={{
              borderRadius: "5%",
              // background:'transparent'
              opacity: "0.83",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                textAlign: "center",
                margin: "1rem",
                fontFamily: "cursive",
              }}
              color="text.secondary"
            >
              Login{" "}
              <WhatshotIcon
                sx={{ color: "#cf6c23", top: "3px", position: "relative" }}
              />
            </Typography>
            <CardContent>
              <Stack
                component="form"
                sx={{
                  padding: "1rem",
                }}
                spacing={2}
                noValidate
                autoComplete="off"
              >
                <CustomTextField
                  id="outlined-basic"
                  label="Email"
                  name="email"
                  variant="outlined"
                  onChange={handerChange}
                />
                {/* convertir en un type Password */}
                <CustomTextField
                  type={showPassword ? "text" : "password"}
                  id="outlined-basic"
                  label="Password"
                  name="password"
                  variant="outlined"
                  onChange={handerChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          arias-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          onMouseDown={(e) => e.preventDefault()}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  color="success"
                  sx={{
                    fontFamily: "cursive",
                  }}
                  onClick={() =>
                    setTrigger({
                      ...trigger,
                      dispatch: true,
                      action: "login",
                    })
                  }
                >
                  Login
                </Button>
              </Box>

              <Typography
                sx={{
                  fontFamily: "cursive",
                  textAlign: "center",
                  marginTop: "2rem",
                }}
              >
                if you don't have an account yet, click on Register
              </Typography>
            </CardContent>
          </Card>
        </Paper>
      </Box>
    </>
  );
};

export default Login;
