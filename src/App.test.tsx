import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { CONTENT } from "./content";
import { HomePage } from "./pages/HomePage";
import { CasePage } from "./pages/CasePage";

beforeEach(() => {
  window.localStorage.clear();
  document.documentElement.lang = "";
});

describe("HomePage", () => {
  it("renders every section of the original site in Japanese by default", () => {
    render(<HomePage />);
    const ja = CONTENT.ja;

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/Naoto/);
    expect(screen.getByText(ja.hero.lede)).toBeInTheDocument();
    for (const section of [ja.philosophy, ja.work, ja.service, ja.datadog, ja.sensui]) {
      expect(screen.getByText(section.title)).toBeInTheDocument();
      expect(screen.getByText(section.num)).toBeInTheDocument();
    }
    for (const agent of ja.service.agents) {
      expect(screen.getByText(agent.name)).toBeInTheDocument();
    }
    for (const bottle of ja.sensui.bottles) {
      expect(screen.getByText(bottle.desc)).toBeInTheDocument();
    }
    expect(screen.getByText(ja.stack.title)).toBeInTheDocument();
    expect(screen.getByText(ja.contact.jp)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /ケーススタディ/ })).toHaveAttribute("href", "/case-aiops");
    expect(document.documentElement.lang).toBe("ja");
  });

  it("switches to English and persists the choice", async () => {
    const user = userEvent.setup();
    render(<HomePage />);

    await user.click(screen.getByRole("button", { name: "EN" }));

    expect(screen.getByText(CONTENT.en.hero.lede)).toBeInTheDocument();
    expect(screen.getByText(CONTENT.en.philosophy.title)).toBeInTheDocument();
    expect(window.localStorage.getItem("hp-lang")).toBe("en");
    expect(document.documentElement.lang).toBe("en");
  });

  it("restores the stored language on load", () => {
    window.localStorage.setItem("hp-lang", "en");
    render(<HomePage />);
    expect(screen.getByText(CONTENT.en.service.headline1)).toBeInTheDocument();
  });

  it("uses the pill navigation with anchors for every nav link", () => {
    render(<HomePage />);
    const nav = screen.getByRole("navigation", { name: "Primary" });
    for (const link of CONTENT.ja.navLinks) {
      expect(within(nav).getByRole("link", { name: link.label })).toHaveAttribute("href", `#${link.id}`);
    }
  });

  it("replaces a vowel in the hero headline with the ghost mascot", () => {
    render(<HomePage />);
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1.querySelector("svg.ghost")).not.toBeNull();
    expect(h1).toHaveTextContent("Shima");
  });
});

describe("CasePage", () => {
  it("renders all four phases, results and the back link", () => {
    render(<CasePage />);
    const cs = CONTENT.ja.service.caseStudy;

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(cs.title);
    for (const phase of cs.phases) {
      expect(screen.getByText(phase.phase)).toBeInTheDocument();
      for (const action of phase.actions) {
        expect(screen.getByText(action)).toBeInTheDocument();
      }
    }
    for (const result of cs.results.items) {
      expect(screen.getByText(result.value)).toBeInTheDocument();
    }
    expect(screen.getByText(cs.quote.text)).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /トップへ戻る/ })[0]).toHaveAttribute("href", "/");
  });

  it("switches to English", async () => {
    const user = userEvent.setup();
    render(<CasePage />);
    await user.click(screen.getByRole("button", { name: "EN" }));
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(CONTENT.en.service.caseStudy.title);
  });
});
