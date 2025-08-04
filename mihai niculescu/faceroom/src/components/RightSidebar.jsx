import React from "react";
import "../styles/RightSidebar.scss";
import { Button } from "@mui/material";

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <h3>Secțiune Dreapta</h3>
      <Button variant="contained" color="secondary" onClick={() => alert("Ai apăsat butonul din dreapta!")}>
        Afișează alertă
      </Button>
    </div>
  );
};

export default RightSidebar;
