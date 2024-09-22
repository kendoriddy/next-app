import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Invalidate token on the client side
    res.status(200).json({ message: "Logged out" });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
