import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/foods"
          sx={{ marginTop: 5, background: "orangered" }}
          variant="contained"
        >
          <Typography variant="h3">Food Management</Typography>
        </Button>
        <Button
          LinkComponent={Link}
          to="/customers"
          sx={{ marginTop: 5, background: "orangered" }}
          variant="contained"
        >
          <Typography variant="h3">Reservation</Typography>
        </Button>

        <Button
          LinkComponent={Link}
          to="/salarys"
          sx={{ marginTop: 5, background: "orangered" }}
          variant="contained"
        >
          <Typography variant="h3">Salary Management</Typography>
        </Button>

        <Button
          LinkComponent={Link}
          to="/rooms"
          sx={{ marginTop: 5, background: "orangered" }}
          variant="contained"
        >
          <Typography variant="h3">Room Management</Typography>
        </Button>

        <Button
          LinkComponent={Link}
          to="/dilivarys"
          sx={{ marginTop: 5, background: "orangered" }}
          variant="contained"
        >
          <Typography variant="h3">Delivary Management</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Admin;
