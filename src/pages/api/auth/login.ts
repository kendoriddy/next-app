import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Simulate login by checking hardcoded credentials (you can replace this with a DB call)
    if (email === "user@example.com" && password === "password123") {
      // Respond with a mock token and user details
      res.status(200).json({ token: "mock-jwt-token", user: { email, name: "John Doe" } });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
