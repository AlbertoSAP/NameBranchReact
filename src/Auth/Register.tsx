import styled from "@emotion/styled";
import {
  Box,
  Button,
  Card,
  CardContent,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import useScreenSize from "../Hooks/useScreenSize";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import imgBg from "../source/bgauth.jpg";
import { authContext } from "../Hooks/AuthContext";

const CustomTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    fontFamily: "cursive", // Cambia esto al tipo de letra que desees
  },
  "& .MuiFormLabel-root": {
    fontFamily: "cursive", // Cambia esto al tipo de letra que desees
  },
});

const Register = () => {
  const { width } = useScreenSize();
  const {state, trigger ,setState,setTrigger} = useContext(authContext)

  const handerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(
      {
        ...state,
        [e.target.name]:e.target.value
      }
    )  
  }

  const getResize = (size: number) => {
    // width:'90vw'
    if (500 > size) {
      return "90%";
    } else {
      if (500 < size && 1000 > size) {
        return "55%";
      }
      return "35%";
    }
  };

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
              Register
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
                  label="Name"
                  name="name"
                  variant="outlined"
                  onChange={handerChange}
                />

                <CustomTextField
                  id="outlined-basic"
                  label="lastName"
                  name="lastName"
                  variant="outlined"
                  onChange={handerChange}
                />

                <CustomTextField
                  id="outlined-basic"
                  label="Email"
                  name="email"
                  variant="outlined"
                  onChange={handerChange}
                />

                <CustomTextField
                  id="outlined-basic"
                  label="Password"
                  name="password"
                  variant="outlined"
                  onChange={handerChange}
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
                  onClick={()=> setTrigger({
                    ...trigger,
                    dispatch:true,
                    action:'registrant'
                  })}
                >
                  Register
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

export default Register;
