import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignSelf: "center",
        margin: "40%",
      }}
    >
      <CircularProgress size="150px" />
    </div>
  );
}

export default Loading;
