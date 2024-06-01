import {
  Box,
  Button,
  Card,
  CardContent,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import SelectComponent from "../Shared/SelectComponent";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { RocketLaunch } from "@mui/icons-material";

const optionTypeTicket = [
  { name: "Fix", value: "fix" },
  { name: "Feature", value: "feat" },
  { name: "Issue", value: "issue" },
];

const optionPMS = [{ name: "WorkFront", value: "WF" }];

const CardComponent = () => {
  return (
    <Paper elevation={3}>
      <Card sx={{ minWidth: "100%" }}>
        <CardContent>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "99%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              name="ticketName"
              label="Ticket Name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              name="WhereWork"
              label="Where?"
              variant="outlined"
            />
            <SelectComponent
              selectLabel="What is it?"
              mapOption={optionTypeTicket}
            />
            <SelectComponent
              selectLabel="Project Management Software"
              mapOption={optionPMS}
            />
            <TextField
              id="outlined-basic"
              label="Ticket Number"
              variant="outlined"
              type="number"
            />
            <Stack direction="row" spacing={2}>
              <Button
                key="btnDone"
                endIcon={<SendIcon />}
                variant="contained"
                color="success"
              >
                Done
              </Button>
              <Button
                key="btnRun"
                endIcon={<RocketLaunch />}
                variant="contained"
                color="info"
              >
                Run Example!
              </Button>
              <Button
                key="btnDelete"
                endIcon={<DeleteIcon />}
                variant="contained"
                color="error"
              >
                Delete
              </Button>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default CardComponent;
