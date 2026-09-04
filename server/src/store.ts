import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.resolve(__dirname, "..", "data");
const DATA_FILE = path.join(DATA_DIR, "notes.json");

export interface Note {
  id: string;
  author: string;
  message: string;
  createdAt: string;
}

async function readAll(): Promise<Note[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? (parsed as Note[]) : [];
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }
    throw err;
  }
}

async function writeAll(notes: Note[]): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(notes, null, 2), "utf8");
}

export async function listNotes(): Promise<Note[]> {
  const notes = await readAll();
  return [...notes].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function addNote(author: string, message: string): Promise<Note> {
  const notes = await readAll();
  const note: Note = {
    id: globalThis.crypto.randomUUID(),
    author: author.trim(),
    message: message.trim(),
    createdAt: new Date().toISOString(),
  };
  notes.push(note);
  await writeAll(notes);
  return note;
}
