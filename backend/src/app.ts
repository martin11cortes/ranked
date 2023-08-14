import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { connectDatabase } from "./db/db";
import { User } from "./models/user";
import dotenv from "dotenv";
import { errorHandler } from "./middlewares/error";

dotenv.config();
const app = express();
app.use(express.json());
const port = 3000;
const axios = require("axios").default;

connectDatabase();

const API_KEY = process.env.TMDB_KEY;

app.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(401).json({ message: "Authentication failed" });
  }
  const passwordMatch = await bcrypt.compare(
    password,
    user?.password as string
  );
  if (passwordMatch) {
    const token = jwt.sign({ username }, "secret-key", { expiresIn: "1h" });
    return res.json({ token });
  } else {
    return res.status(401).json({ message: "Authentication failed" });
  }
});

app.get("/catalog", (req: Request, res: Response) => {
  const { searchTerm } = req.query;
  let url = "https://api.themoviedb.org/3/trending/all/day";
  if (searchTerm) {
    url = `https://api.themoviedb.org/3/search/multi?query=${searchTerm}`;
  }
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${API_KEY}`,
    },
  };

  axios
    .get(url, options)
    .then((response: { data: any }) => {
      const json = response.data;
      res.json(json);
    })
    .catch((err: any) =>
      res.status(500).json({ message: "Error fetching data", error: err })
    );
});

app.get("/catalog/:id/details", (req: Request, res: Response) => {
  const { id } = req.params;
  const urlMovies = `https://api.themoviedb.org/3/movie/${id}`;
  const urlSeries = `https://api.themoviedb.org/3/tv/${id}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${API_KEY}`,
    },
  };

  axios
    .get(urlMovies, options)
    .then((response: { data: any }) => {
      const json = response.data;
      res.json(json);
    })
    .catch((err: any) =>
      res.status(500).json({ message: "Error fetching data", error: err })
    );
});

app.post("/catalog/:id/review", (req: Request, res: Response) => {});

app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
