import type { Content } from "../../content";
import { GhostWord } from "../Ghost";
import { Tag } from "../Pill";

export function Hero({ t }: { t: Content }) {
  const h = t.hero;
  const vowelIndex = Math.max(h.titleLine2.search(/[aeiou]/i), 0);
  return (
    <section id="about" className="hero">
      <div className="wrap hero__grid">
        <div className="hero__copy reveal">
          <Tag tone="bone" className="hero__eyebrow">
            {h.eyebrow}
          </Tag>
          <h1 className="hero__title">
            <span className="hero__line">{h.titleLine1}</span>
            <span className="hero__line">
              <GhostWord word={h.titleLine2} index={vowelIndex} />.
            </span>
          </h1>
          <p className="hero__jp">{h.jpName}</p>
          <p className="hero__lede">{h.lede}</p>
          <div className="hero__roles">
            {h.roles.map((r) => (
              <Tag key={r.label} tone={r.tone}>
                {r.label}
              </Tag>
            ))}
          </div>
        </div>
        <div className="hero__portrait reveal" style={{ transitionDelay: "120ms" }}>
          <figure className="portrait">
            <img src="/assets/naoto.webp" alt="Naoto Shima" width={720} height={900} />
            <figcaption>
              <Tag tone="paper">{h.portraitLabel}</Tag>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export function Ribbon({ t }: { t: Content }) {
  const items = [...t.ribbonItems, ...t.ribbonItems];
  return (
    <div className="ribbon" aria-hidden="true">
      <div className="ribbon__track">
        {items.map((it, i) => (
          <span key={i} className="tag tag--paper">
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}
