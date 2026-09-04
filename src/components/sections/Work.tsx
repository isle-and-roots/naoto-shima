import type { Content } from "../../content";
import { SectionHead } from "../Header";
import { Tag } from "../Pill";

export function Work({ t }: { t: Content }) {
  const w = t.work;
  return (
    <section id="work" className="section section--dark">
      <div className="wrap">
        <SectionHead num={w.num} title={w.title} titleEn={w.titleEn} dark />
        <div className="work reveal">
          <div className="work__main">
            <span className="tag tag--dark">{w.labelJP}</span>
            <h3 className="work__headline">
              {w.headline1}
              <br />
              <span className="accent-periwinkle">{w.headline2}</span>
            </h3>
            <p className="work__desc">{w.desc}</p>
            <div className="tag-row">
              {w.stack.map((s) => (
                <Tag key={s} tone="paper">
                  {s}
                </Tag>
              ))}
            </div>
          </div>
          <div className="work__focus">
            <p className="work__focus-head">{w.focusHead}</p>
            {w.focus.map((f, i) => (
              <article key={f.title} className="card card--dark">
                <span className="card__idx">0{i + 1}</span>
                <h4 className="card__title">{f.title}</h4>
                <p className="card__body">{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
