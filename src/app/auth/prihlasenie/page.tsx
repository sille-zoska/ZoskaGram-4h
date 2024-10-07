// src/app/auth/prihlasenie/page.tsx

"use client";

import { signIn } from "next-auth/react";
import { Button, Typography } from "@mui/material";

export default function LoginPage() {
  return (
    <div>
      <Typography variant="h4">Prihlásenie</Typography>
      <Button variant="contained" onClick={() => signIn("google")}>
        Prihlásiť sa pomocou Google
      </Button>
    </div>
  );
}
