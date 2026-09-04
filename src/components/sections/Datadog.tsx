import type { Content } from "../../content";
import { SectionHead } from "../Header";
import { Tag } from "../Pill";

export function Datadog({ t }: { t: Content }) {
  const d = t.datadog;
  return (
    <section id="datadog" className="section section--bone">
      <div className="wrap">
        <SectionHead num={d.num} title={d.title} titleEn={d.titleEn} />
        <div className="card role-card reveal">
          <div className="role-card__copy">
            <Tag tone="cornflower">{d.meta}</Tag>
            <h3 className="role-card__headline">
              {d.headline1}
              <br />
              {d.headline2}
            </h3>
            <p>{d.desc1}</p>
            <p>{d.desc2}</p>
          </div>
          <ul className="role-card__clients">
            {d.clients.map((c) => (
              <li key={c.name}>
                <span className="role-card__client">{c.name}</span>
                <span className="role-card__client-sub">{c.sub}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Stack({ t }: { t: Content }) {
  const s = t.stack;
  const tones = ["lavender", "buttercream", "blush", "periwinkle", "ash", "mint"] as const;
  return (
    <section className="section section--tight">
      <div className="wrap stack">
        <div className="stack__head reveal">
          <span className="tag tag--ghost">{s.eyebrow}</span>
          <h3 className="stack__title">{s.title}</h3>
        </div>
        <div className="stack__row reveal">
          {s.items.map((it, i) => (
            <span key={it.id} className="pill pill--paper pill--md stack__item">
              <span className={`dot dot--${tones[i % tones.length]}`} aria-hidden="true" />
              <span>{it.name}</span>
            </span>
          ))}
        </div>
        <p className="stack__note reveal">{s.note}</p>
      </div>
    </section>
  );
}
