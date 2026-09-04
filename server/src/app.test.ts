import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import request from "supertest";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { createApp } from "./app.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.resolve(__dirname, "..", "data", "notes.json");

async function resetData() {
  await fs.rm(DATA_FILE, { force: true });
}

describe("notes API", () => {
  beforeEach(resetData);
  afterEach(resetData);

  it("reports health", async () => {
    const res = await request(createApp()).get("/api/health");
    expect(res.status).toBe(200);
    expect(res.body.status).toBe("ok");
  });

  it("starts empty", async () => {
    const res = await request(createApp()).get("/api/notes");
    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
  });

  it("creates and lists a note", async () => {
    const app = createApp();
    const created = await request(app)
      .post("/api/notes")
      .send({ author: "Naoto", message: "Hello from the island" });
    expect(created.status).toBe(201);
    expect(created.body.id).toBeTruthy();
    expect(created.body.author).toBe("Naoto");

    const list = await request(app).get("/api/notes");
    expect(list.status).toBe(200);
    expect(list.body).toHaveLength(1);
    expect(list.body[0].message).toBe("Hello from the island");
  });

  it("validates required fields", async () => {
    const res = await request(createApp())
      .post("/api/notes")
      .send({ author: "  ", message: "" });
    expect(res.status).toBe(400);
    expect(res.body.error).toBeTruthy();
  });
});
