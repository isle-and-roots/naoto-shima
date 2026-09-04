import type { Content } from "../../content";
import { SectionHead } from "../Header";

export function Philosophy({ t }: { t: Content }) {
  const p = t.philosophy;
  return (
    <section id="philosophy" className="section section--bone">
      <div className="wrap">
        <SectionHead num={p.num} title={p.title} titleEn={p.titleEn} />
        <div className="philosophy">
          <aside className="philosophy__quote reveal">
            <blockquote className="quote-card">
              <p>{p.quote}</p>
              <cite>{p.quoteBy}</cite>
            </blockquote>
          </aside>
          <div className="philosophy__body reveal" style={{ transitionDelay: "80ms" }}>
            {p.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
