import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import SelectComponent from "../Shared/SelectComponent";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { RocketLaunch } from "@mui/icons-material";
import useScreenSize from "../Hooks/useScreenSize";

const optionTypeTicket = [
  { name: "Fix", value: "fix" },
  { name: "Feature", value: "feat" },
  { name: "Issue", value: "issue" },
];

const optionPMS = [{ name: "WorkFront", value: "WF" }];

const CardComponent = () => {

  const { width } = useScreenSize()

  return (
    <Paper elevation={16} sx={{}}>
      <Card sx={{ minWidth: "100%" }}>
        <CardContent>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "99%" },
              flexGrow: 1,
            }}
            noValidate
            autoComplete="off"
          >
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={12} sm={12} md={12} key={1}>
                <TextField
                  id="outlined-basic"
                  name="ticketName"
                  label="Ticket Name"
                  variant="outlined"
                  sx={{
                    width:'100%'
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4} md={6} key={1}>
                <TextField
                  id="outlined-basic"
                  name="WhereWork"
                  label="Where?"
                  variant="outlined"
                  sx={{
                    width:'100%'
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4} md={6} key={1}>
                <SelectComponent
                  selectLabel="What is it?"
                  mapOption={optionTypeTicket}
                />
              </Grid>
              <Grid item xs={12} sm={4} md={6} key={1}>
                <SelectComponent
                  selectLabel="Project Management Software"
                  mapOption={optionPMS}
                />
              </Grid>
              <Grid item xs={12} sm={4} md={6} key={1}>
                <TextField
                  id="outlined-basic"
                  label="Ticket Number"
                  variant="outlined"
                  type="number"
                  sx={{
                    width:'100%'
                  }}
                />
              </Grid>
            </Grid>
            
            <Stack direction="row" padding={3} spacing={2}>
              <Button
                key="btnDone"
                endIcon={<SendIcon />}
                variant="contained"
                color="success"
              >
               { width < 538 ? '':'Done'}
              </Button>
              <Button
                key="btnRun"
                endIcon={<RocketLaunch />}
                variant="contained"
                color="info"
              >
                { width < 538 ? '':'Run Example!'}
              </Button>
              <Button
                key="btnDelete"
                endIcon={<DeleteIcon />}
                variant="contained"
                color="error"
              >
                 { width < 538 ? '':'Delete'}
              </Button>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default CardComponent;
