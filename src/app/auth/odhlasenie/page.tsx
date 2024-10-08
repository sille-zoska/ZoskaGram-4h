// src/app/auth/odhlasenie/page.tsx

"use client";

import { signOut } from "next-auth/react";
import { Button, Typography } from "@mui/material";

export default function LogoutPage() {
  return (
    <div>
      <Typography variant="h4">Odhlásenie</Typography>
      <Button
        variant="contained"
        onClick={() => signOut()} 
      >
        Odhlásiť sa
      </Button>
    </div>
  );
}
