import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "../App.css";
import "../components/signUpForm.css";

function SignupForm({ onBackClick }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleBackClick = () => {
    onBackClick();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="LoginDiv">
      <img src="LOgo.svg" alt="logo" className="CompanyLogo" />
      <Button
        sx={{ color: "white", textTransform: "none" }}
        onClick={handleBackClick}
      >
        <KeyboardBackspaceIcon /> Back to Login
      </Button>
      <Typography sx={{ color: "white", fontSize: "24px" }}>Sign up</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          placeholder="Name"
          fullWidth
          margin="normal"
          style={{ background: "white", borderRadius: "6px" }}
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          name="email"
          placeholder="Email"
          fullWidth
          margin="normal"
          style={{ background: "white", borderRadius: "6px" }}
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          fullWidth
          margin="normal"
          style={{ background: "white", borderRadius: "6px" }}
          value={formData.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
        />
        <TextField
          name="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          fullWidth
          margin="normal"
          style={{ background: "white", borderRadius: "6px" }}
          value={formData.confirmPassword}
          onChange={handleChange}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="I have read all the terms and conditions"
          sx={{ color: "white", alignItems: "center" }}
        />
        <Button
          type="submit"
          sx={{
            color: "#155bd5",
            background: "white",
            width: "100%",
            height: "50px",
            mt: 1,
            "&:hover": {
              background: "lightBlue",
            },
          }}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default SignupForm;
