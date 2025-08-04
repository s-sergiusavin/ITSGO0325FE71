import React, { useState } from "react";
import "../styles/LeftSidebar.scss";
import { Button } from "@mui/material";

const LeftSidebar = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="left-sidebar">
      <h3>Secțiune Stânga</h3>
      <p>Ai apăsat de <strong>{count}</strong> ori.</p>
      <Button variant="outlined" onClick={() => setCount(count + 1)}>Click!</Button>
    </div>
  );
};

export default LeftSidebar;
