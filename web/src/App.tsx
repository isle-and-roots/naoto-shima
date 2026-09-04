import { useEffect, useState } from "react";
import { createNote, fetchNotes, type Note } from "./api";

export default function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchNotes()
      .then(setNotes)
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const note = await createNote(author, message);
      setNotes((prev) => [note, ...prev]);
      setMessage("");
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="app">
      <header className="hero">
        <h1>Island Notes</h1>
        <p>Leave a message on the shores of naoto-shima.</p>
      </header>

      <form className="card note-form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="author">Your name</label>
          <input
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Naoto"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Say hello…"
            rows={3}
            required
          />
        </div>
        <button type="submit" disabled={submitting}>
          {submitting ? "Posting…" : "Post note"}
        </button>
        {error && <p className="error" role="alert">{error}</p>}
      </form>

      <section className="notes" aria-live="polite">
        {loading ? (
          <p className="muted">Loading notes…</p>
        ) : notes.length === 0 ? (
          <p className="muted">No notes yet — be the first to post!</p>
        ) : (
          <ul>
            {notes.map((note) => (
              <li key={note.id} className="card note">
                <p className="note-message">{note.message}</p>
                <p className="note-meta">
                  <span className="note-author">{note.author}</span>
                  <time dateTime={note.createdAt}>
                    {new Date(note.createdAt).toLocaleString()}
                  </time>
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
