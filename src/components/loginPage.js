/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import {
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "../components/loginPage.css";

function LoginPage({ selectedChoice, onBackClick }) {
  const handleBackClick = () => {
    onBackClick();
  };

  return (
    <div className="LoginDiv">
      <img src="LOgo.svg" alt="logo" className="CompanyLogo" />
      <Button
        onClick={handleBackClick}
        sx={{ color: "white", textTransform: "none" }}
      >
        <KeyboardBackspaceIcon /> Back to Login
      </Button>
      <Typography sx={{ color: "white", fontSize: "24px" }}>
        {selectedChoice} Login
      </Typography>
      <form>
        <TextField
          placeholder="Name"
          fullWidth
          margin="normal"
          style={{ background: "white", borderRadius: "6px" }}
        />
        <TextField
          placeholder="Password"
          type="password"
          fullWidth
          margin="normal"
          style={{ background: "white", borderRadius: "6px" }}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
            sx={{ color: "white" }}
          />
          <Typography sx={{ mt: 1, color: "white" }}>
            Forgot Password?
          </Typography>
        </div>
        <Button
          sx={{
            color: "#155bd5",
            background: "white",
            width: "100% ",
            height: "50px",
            mt: 3,
            mb: 2,
            "&:hover": {
              background: "lightBlue",
            },
          }}
        >
          Login
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
