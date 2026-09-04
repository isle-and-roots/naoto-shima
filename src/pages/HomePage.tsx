import { CONTENT } from "../content";
import { Header } from "../components/Header";
import { Hero, Ribbon } from "../components/sections/Hero";
import { Philosophy } from "../components/sections/Philosophy";
import { Work } from "../components/sections/Work";
import { Service } from "../components/sections/Service";
import { Datadog, Stack } from "../components/sections/Datadog";
import { Sensui } from "../components/sections/Sensui";
import { Contact, Footer } from "../components/sections/Contact";
import { useLang } from "../hooks/useLang";
import { useReveal } from "../hooks/useReveal";

export function HomePage() {
  const [lang, setLang] = useLang();
  const t = CONTENT[lang];
  useReveal([lang]);

  return (
    <>
      <Header lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        <Ribbon t={t} />
        <Philosophy t={t} />
        <Work t={t} />
        <Service t={t} />
        <Datadog t={t} />
        <Stack t={t} />
        <Sensui t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
