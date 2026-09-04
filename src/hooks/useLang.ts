import { useCallback, useEffect, useState } from "react";
import type { Lang } from "../content";

const STORAGE_KEY = "hp-lang";

function readStoredLang(): Lang {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "en" ? "en" : "ja";
  } catch {
    return "ja";
  }
}

/** Persisted JP/EN toggle shared by every page. */
export function useLang(): [Lang, (lang: Lang) => void] {
  const [lang, setLangState] = useState<Lang>(readStoredLang);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Storage may be unavailable (private mode); the toggle still works in memory.
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  return [lang, setLang];
}
