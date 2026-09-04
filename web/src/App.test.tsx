import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";
import type { Note } from "./api";

function mockFetch(notes: Note[]) {
  const store = [...notes];
  return vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = String(input);
    if (url.endsWith("/api/notes") && (!init || init.method === undefined)) {
      return new Response(JSON.stringify(store), { status: 200 });
    }
    if (url.endsWith("/api/notes") && init?.method === "POST") {
      const body = JSON.parse(String(init.body)) as { author: string; message: string };
      const note: Note = {
        id: `id-${store.length + 1}`,
        author: body.author,
        message: body.message,
        createdAt: new Date().toISOString(),
      };
      store.unshift(note);
      return new Response(JSON.stringify(note), { status: 201 });
    }
    return new Response("not found", { status: 404 });
  });
}

describe("App", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", mockFetch([]));
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("shows empty state then adds a note", async () => {
    render(<App />);

    expect(await screen.findByText(/no notes yet/i)).toBeInTheDocument();

    await userEvent.type(screen.getByLabelText(/your name/i), "Naoto");
    await userEvent.type(screen.getByLabelText(/message/i), "Hello island");
    await userEvent.click(screen.getByRole("button", { name: /post note/i }));

    await waitFor(() => {
      expect(screen.getByText("Hello island")).toBeInTheDocument();
    });
    expect(screen.getByText("Naoto")).toBeInTheDocument();
  });
});
