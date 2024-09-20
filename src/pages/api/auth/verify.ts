// pages/api/auth/verify.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check for token in headers (simple check, not real token validation)
  const token = req.headers.authorization;

  if (token === "Bearer mock-jwt-token") {
    res.status(200).json({ authenticated: true });
  } else {
    res.status(401).json({ authenticated: false });
  }
}
