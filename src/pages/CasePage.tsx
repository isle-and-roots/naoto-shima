import { CONTENT } from "../content";
import { LangToggle, Logo } from "../components/Header";
import { PillLink, Tag } from "../components/Pill";
import { useLang } from "../hooks/useLang";
import { useReveal } from "../hooks/useReveal";

export function CasePage() {
  const [lang, setLang] = useLang();
  const t = CONTENT[lang];
  const cs = t.service.caseStudy;
  useReveal([lang]);

  return (
    <>
      <header className="site-header">
        <div className="wrap site-header__inner site-header__inner--case">
          <Logo />
          <PillLink href="/" variant="paper" size="sm" arrow="left" className="case-back">
            {cs.backLink}
          </PillLink>
          <LangToggle lang={lang} setLang={setLang} />
        </div>
      </header>

      <main className="case">
        <div className="wrap">
          <header className="case__head reveal">
            <span className="tag tag--ghost">{cs.eyebrow}</span>
            <h1 className="case__title">{cs.title}</h1>
            <p className="case__intro">{cs.intro}</p>
          </header>

          <div className="card card--bone case__setup reveal">
            <Tag tone="paper">{cs.setup.label}</Tag>
            <p>{cs.setup.text}</p>
          </div>

          <ol className="case__phases">
            {cs.phases.map((p) => (
              <li key={p.idx} className="card case-phase reveal">
                <div className="case-phase__head">
                  <span className="card__idx">{p.idx}</span>
                  <div className="case-phase__titles">
                    <span className="case-phase__jp">{p.phase}</span>
                    <span className="case-phase__en">{p.phaseEn}</span>
                  </div>
                  <Tag tone="bone">{p.duration}</Tag>
                </div>
                <ul className="case-phase__actions">
                  {p.actions.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
                {p.metric && (
                  <div className="metric metric--inline">
                    <div className="metric__line">
                      <span className="metric__before">{p.metric.before}</span>
                      <span className="metric__arrow" aria-hidden="true">
                        →
                      </span>
                      <span className="metric__after">{p.metric.after}</span>
                    </div>
                    <p className="metric__caption">{p.metric.caption}</p>
                  </div>
                )}
                {p.insight && <p className="case-phase__insight">{p.insight}</p>}
              </li>
            ))}
          </ol>

          <div className="card card--aubergine case__results reveal">
            <span className="tag tag--dark">{cs.results.label}</span>
            <dl className="case__result-grid">
              {cs.results.items.map((r) => (
                <div key={r.label} className="case__result">
                  <dt>{r.value}</dt>
                  <dd>{r.label}</dd>
                </div>
              ))}
            </dl>
            <p className="case__result-note">{cs.results.note}</p>
          </div>

          <blockquote className="quote-card quote-card--wide reveal">
            <p>{cs.quote.text}</p>
            <cite>— {cs.quote.who}</cite>
          </blockquote>

          <p className="case__closing reveal">{cs.closing}</p>

          <div className="cta-band reveal">
            <p className="cta-band__lede">{cs.endCtaLede}</p>
            <PillLink href="/#contact" variant="aubergine" size="lg" arrow="right">
              {cs.endCtaButton}
            </PillLink>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="wrap footer__inner">
          <a href="/">← {cs.backLink}</a>
          <span>{t.footer[0]}</span>
        </div>
      </footer>
    </>
  );
}
