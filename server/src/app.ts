import cors from "cors";
import express, { type Express } from "express";
import { addNote, listNotes } from "./store.js";

export function createApp(): Express {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", service: "naoto-shima" });
  });

  app.get("/api/notes", async (_req, res, next) => {
    try {
      res.json(await listNotes());
    } catch (err) {
      next(err);
    }
  });

  app.post("/api/notes", async (req, res, next) => {
    try {
      const { author, message } = req.body ?? {};
      if (typeof author !== "string" || author.trim().length === 0) {
        return res.status(400).json({ error: "author is required" });
      }
      if (typeof message !== "string" || message.trim().length === 0) {
        return res.status(400).json({ error: "message is required" });
      }
      const note = await addNote(author, message);
      res.status(201).json(note);
    } catch (err) {
      next(err);
    }
  });

  return app;
}
