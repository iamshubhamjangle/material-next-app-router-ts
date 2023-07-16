import * as React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

export default function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Box>
  );
}
