import { HUE_TONE, type Content } from "../../content";
import { SectionHead } from "../Header";
import { PillLink, Tag } from "../Pill";

export function Service({ t }: { t: Content }) {
  const s = t.service;
  return (
    <section id="service" className="section">
      <div className="wrap">
        <SectionHead num={s.num} title={s.title} titleEn={s.titleEn} />

        <div className="service-hero reveal">
          <div className="service-hero__copy">
            <span className="tag tag--dark">{s.labelJP}</span>
            <p className="service-hero__lede">{s.lede}</p>
            <h3 className="service-hero__headline">
              {s.headline1}
              <br />
              <span className="accent-periwinkle">{s.headline2}</span>
            </h3>
            <p className="service-hero__sub">{s.sub}</p>
            <PillLink href="#contact" variant="primary" size="lg" arrow="right">
              {s.ctaButton}
            </PillLink>
          </div>
          <div className="service-hero__side">
            <p className="service-hero__note">{s.rightNote}</p>
            <ul className="agent-list">
              {s.rightTags.map((r) => (
                <li key={r.id} className="agent-list__item">
                  <span className={`dot dot--${HUE_TONE[r.id]}`} aria-hidden="true" />
                  <span className="agent-list__label">{r.label}</span>
                  <span className="agent-list__role">{r.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="sub-block reveal">
          <h3 className="sub-block__title">{s.metricsHead}</h3>
          <div className="grid-3">
            {s.metrics.map((m) => (
              <div key={m.caption} className="card card--bone metric">
                <div className="metric__line">
                  <span className="metric__before">{m.before}</span>
                  <span className="metric__arrow" aria-hidden="true">
                    →
                  </span>
                  <span className="metric__after">{m.after}</span>
                </div>
                <p className="metric__caption">{m.caption}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="sub-block reveal">
          <h3 className="sub-block__title">{s.agentsHead}</h3>
          <p className="sub-block__note">{s.agentsNote}</p>
          <div className="grid-3">
            {s.agents.map((a, i) => (
              <article key={a.id} className="card agent-card">
                <div className="agent-card__head">
                  <Tag tone={HUE_TONE[a.id]}>{a.nameJP}</Tag>
                  <span className="card__idx">0{i + 1}</span>
                </div>
                <h4 className="agent-card__name">{a.name}</h4>
                <p className="agent-card__role">{a.role}</p>
                <ul className="agent-card__tasks">
                  {a.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="sub-block reveal">
          <h3 className="sub-block__title">{s.processHead}</h3>
          <p className="sub-block__note">{s.processNote}</p>
          <ol className="grid-4 process">
            {s.process.map((p, i) => (
              <li key={p.phaseEn} className="card card--bone process__step">
                <span className="card__idx">0{i + 1}</span>
                <div className="process__phase">
                  <span className="process__jp">{p.phaseJP}</span>
                  <span className="process__en">{p.phaseEn}</span>
                </div>
                <Tag tone="paper" className="process__duration">
                  {p.duration}
                </Tag>
                <p className="card__body">{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>

        <a className="case-teaser card reveal" href="/case-aiops">
          <div className="case-teaser__head">
            <span className="tag tag--ghost">{s.caseStudy.eyebrow}</span>
            <h3 className="case-teaser__title">{s.caseStudy.title}</h3>
            <p className="case-teaser__intro">{s.caseStudy.intro}</p>
            <span className="pill pill--secondary pill--sm">
              <span>{s.caseTeaserLink}</span>
              <svg className="pill__arrow" viewBox="0 0 17 17" aria-hidden="true">
                <path
                  d="M5 12 12 5M6 5h6v6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
          <dl className="case-teaser__results">
            {s.caseStudy.results.items.map((r) => (
              <div key={r.label} className="case-teaser__result">
                <dt>{r.value}</dt>
                <dd>{r.label}</dd>
              </div>
            ))}
          </dl>
        </a>

        <div className="cta-band reveal">
          <div>
            <p className="cta-band__lede">{s.ctaBand.lede}</p>
            <p className="cta-band__hint">{s.ctaBand.hint}</p>
          </div>
          <PillLink href="#contact" variant="aubergine" size="lg" arrow="right">
            {s.ctaBand.button}
          </PillLink>
        </div>
      </div>
    </section>
  );
}
