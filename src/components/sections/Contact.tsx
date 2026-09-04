import type { Content } from "../../content";
import { GhostWord } from "../Ghost";
import { PillLink } from "../Pill";

export function Contact({ t }: { t: Content }) {
  const c = t.contact;
  return (
    <section id="contact" className="section contact">
      <div className="wrap contact__grid">
        <div className="reveal">
          <h2 className="contact__title">
            <span>Let's </span>
            <GhostWord word="talk." index={1} />
          </h2>
          <p className="contact__jp">{c.jp}</p>
          <p className="contact__lede">{c.lede}</p>
          <div className="contact__socials">
            {t.socials.map((s) => (
              <PillLink
                key={s.tag}
                href={s.href}
                variant={s.tone}
                size="md"
                arrow="diagonal"
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {s.label}
              </PillLink>
            ))}
          </div>
        </div>
        <div className="reveal" style={{ transitionDelay: "120ms" }}>
          <div className="card card--bone contact__direct">
            <span className="tag tag--ghost">{c.directLabel}</span>
            <a className="contact__mail" href="mailto:naoto.shima@isle-and-roots.com">
              naoto.shima
              <br />
              @isle-and-roots.com
            </a>
            <p className="contact__note">{c.directNote}</p>
            <p className="contact__hint">{c.chatHint}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer({ t }: { t: Content }) {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        {t.footer.map((f) => (
          <span key={f}>{f}</span>
        ))}
      </div>
    </footer>
  );
}
