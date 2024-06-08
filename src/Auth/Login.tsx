import {
  Box,
  Button,
  Card,
  CardContent,
  Paper,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import useScreenSize from "../Hooks/useScreenSize";
import imgBg from '../source/bgauth.jpg'
import WhatshotIcon from '@mui/icons-material/Whatshot';
 
const CustomTextField = styled(TextField)({
    '& .MuiInputBase-input': {
      fontFamily: 'cursive',  // Cambia esto al tipo de letra que desees
    },
    '& .MuiFormLabel-root':{
      fontFamily: 'cursive',  // Cambia esto al tipo de letra que desees
    }
  });

const Login = () => {

 
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

  return (
    <>
    
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: '100dvh',
        background: `url(${imgBg})`,
        backgroundSize:'cover',
      }}
    >
      <Paper sx={{
        width:getResize(width),
        borderRadius:'5%',
        // background:'transparent'
        opacity: '0.83'
        }} elevation={16}>
        <Card
        sx={{
          borderRadius:'5%',
          // background:'transparent'
          opacity: '0.83'
        }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ 
              textAlign: "center", 
              margin: "1rem",
              fontFamily:'cursive'
            }}
            color="text.secondary"
          >
            Login <WhatshotIcon
            sx={{color:'#cf6c23',
              top:'3px',
              position:'relative'
            }}
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

              />

              <CustomTextField
              
                id="outlined-basic"
                label="Password"
                name="password"
                variant="outlined"
              />
            </Stack>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button variant="contained" color="success"
              sx={{
                fontFamily:'cursive'
              }}>
                Login
              </Button>
            </Box>

          <Typography
          sx={{
            fontFamily:'cursive',
            textAlign: 'center',
            marginTop:'2rem'
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
