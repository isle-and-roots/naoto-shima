import type { Content, Lang } from "../content";
import { Ghost } from "./Ghost";
import { PillLink } from "./Pill";

export function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button
        type="button"
        className={lang === "ja" ? "on" : ""}
        aria-pressed={lang === "ja"}
        onClick={() => setLang("ja")}
      >
        JP
      </button>
      <button
        type="button"
        className={lang === "en" ? "on" : ""}
        aria-pressed={lang === "en"}
        onClick={() => setLang("en")}
      >
        EN
      </button>
    </div>
  );
}

export function Logo({ href = "/" }: { href?: string }) {
  return (
    <a className="logo" href={href} aria-label="Naoto Shima — home">
      <span className="logo__mark">
        <Ghost size="cap" tone="paper" />
      </span>
      <span className="logo__word">
        Naoto Shima<span className="logo__est"> · est. 2026</span>
      </span>
    </a>
  );
}

interface HeaderProps {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Content;
}

export function Header({ lang, setLang, t }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <Logo />
        <nav className="pill-nav" aria-label="Primary">
          {t.navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="site-header__right">
          <LangToggle lang={lang} setLang={setLang} />
          <PillLink href="#contact" variant="primary" size="md" className="site-header__cta">
            {t.navCta}
          </PillLink>
        </div>
      </div>
    </header>
  );
}

export function SectionHead({
  num,
  title,
  titleEn,
  dark,
}: {
  num: string;
  title: string;
  titleEn: string;
  dark?: boolean;
}) {
  return (
    <div className={`section-head reveal${dark ? " section-head--dark" : ""}`}>
      <span className="tag tag--ghost section-head__num">{num}</span>
      <h2 className="section-head__title">{title}</h2>
      <p className="section-head__en">{titleEn}</p>
    </div>
  );
}
