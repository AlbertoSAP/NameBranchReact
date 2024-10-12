import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";


const branchNameDescription = " Manage a standard structure applied by companies with best practices for team development \n"
const helpMeDescription = "Share your thoughts, suggestions, and help us provide you with an easier and better way to work \n"
const HomePublic = () => {
  const theme = useTheme();

  

  return (
    <Box m={theme.spacing(2)}>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={6}>
            
              <Card sx={{
                borderRadius:theme.spacing(1.8)
              }} variant="elevation" elevation={7}>
                <CardHeader title="Create a Branch Name"
                sx={{textAlign:'center'}} />
                <Divider/>
                <CardContent>
                  <Typography variant="body1" component="p">
                 {branchNameDescription}
                  <Link to={"/app/create-branch"}>Click here</Link>
                  </Typography>
                </CardContent>
              </Card>
            
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{
              borderRadius:theme.spacing(1.8)
            }} variant="elevation" elevation={7}>
                <CardHeader title="Do you want to improve something?" 
                sx={{textAlign:'center'}}
                />
                <Divider/>
                <CardContent>
                  <Typography variant="body1" component="p">
                 {helpMeDescription}
                  <Link to={"/app/create-branch"}>Click here</Link>
                  </Typography>
                </CardContent>
              </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePublic;
