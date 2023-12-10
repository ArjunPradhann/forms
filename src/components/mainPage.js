import React, { useState } from "react";
import "../components/mainPage.css";
import "../App.css";
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import LoginPage from "./loginPage";
import SignupForm from "../components/signUpForm";

function MainPage() {
  const [selectedChoice, setSelectedChoice] = useState();
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showSignUpComponent, setShowSignUpComponent] = useState(false);

  const handleRadioChange = (event) => {
    setSelectedChoice(event.target.value);
  };

  const handleSubmitClick = () => {
    setShowLoginPage(true);
  };

  const handleBackToMainPage = () => {
    setShowLoginPage(false);
  };

  const handleSignUpClick = () => {
    setShowSignUpComponent(true);
  };

  const handleSignUpClose = () => {
    setShowSignUpComponent(false);
  };

  return (
    <div className="mainDiv">
      <div className="leftSideDiv">
        <img src="/LoginImg.svg" alt="Main Page" />
      </div>
      <div className="rightSideDiv">
        {showLoginPage ? (
          <LoginPage
            selectedChoice={selectedChoice}
            onBackClick={handleBackToMainPage}
          />
        ) : showSignUpComponent ? (
          <SignupForm onBackClick={handleSignUpClose} />
        ) : (
          <div className="LoginDiv">
            <img src="/LOgo.svg" alt="Logo" className="CompanyLogo" />

            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              className="RadioButtonClass"
              value={selectedChoice}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                value="Client"
                control={<Radio />}
                label="Client"
              />
              <FormControlLabel value="User" control={<Radio />} label="User" />
              <FormControlLabel
                value="Admin"
                control={<Radio />}
                label="Admin"
              />
            </RadioGroup>
            <Button
             className="buttonStyle"
              onClick={handleSubmitClick}
              disabled={!selectedChoice}
            >
              Login
            </Button>
            <Typography
              sx={{ color: "white", textAlign: "center", mt: 1 }}
              onClick={handleSignUpClick}
            >
              Don’t have an account?{" "}
              <span style={{ color: "red", cursor: "pointer" }}>Sign Up</span>
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainPage;
