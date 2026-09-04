import { useState } from "react";
import { HUE_TONE, type Content, type HueId } from "../../content";
import { GhostWord } from "../Ghost";
import { SectionHead } from "../Header";
import { Tag } from "../Pill";

export function Sensui({ t }: { t: Content }) {
  const s = t.sensui;
  const [active, setActive] = useState<HueId>("original");
  return (
    <section id="sensui" className="section section--dark">
      <div className="wrap">
        <SectionHead num={s.num} title={s.title} titleEn={s.titleEn} dark />
        <div className="sensui reveal">
          <div className="sensui__copy">
            <h3 className="sensui__headline">
              <GhostWord word={s.headline} index={s.headline.length - 2} size="cap" />
            </h3>
            <p className="sensui__jp">{s.jpHeadline}</p>
            <p>{s.p1}</p>
            <p>{s.p2}</p>
            <span className="tag tag--dark sensui__facts">{s.p3}</span>
          </div>
          <figure className="sensui__image">
            <img src="/assets/sensui.webp" alt="SENSUI botanical cordial" width={900} height={1125} />
          </figure>
        </div>
        <div className="grid-3 bottles">
          {s.bottles.map((b) => (
            <button
              type="button"
              key={b.id}
              className={`card card--dark bottle${active === b.id ? " bottle--active" : ""}`}
              onMouseEnter={() => setActive(b.id)}
              onFocus={() => setActive(b.id)}
              onClick={() => setActive(b.id)}
              aria-pressed={active === b.id}
            >
              <span className={`bottle__swatch bottle__swatch--${HUE_TONE[b.id]}`} aria-hidden="true" />
              <span className="bottle__name">{b.name}</span>
              <Tag tone={HUE_TONE[b.id]} className="bottle__sub">
                {b.jp}
              </Tag>
              <span className="bottle__desc">{b.desc}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
