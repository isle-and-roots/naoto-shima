export type Lang = "ja" | "en";

/** Pastel accent tones from the Phantom style reference. */
export type Tone = "lavender" | "periwinkle" | "buttercream" | "blush" | "cornflower" | "mint";

/** Product / assistant identifiers shared between SENSUI bottles and AI agents. */
export type HueId = "nagi" | "original" | "hana";

export const HUE_TONE: Record<HueId, Tone> = {
  nagi: "periwinkle",
  original: "buttercream",
  hana: "blush",
};

export interface Metric {
  before: string;
  after: string;
  caption: string;
}

export interface CasePhase {
  idx: string;
  phase: string;
  phaseEn: string;
  duration: string;
  actions: string[];
  insight?: string;
  metric?: Metric;
}

export interface CaseStudy {
  eyebrow: string;
  title: string;
  intro: string;
  backLink: string;
  endCtaLede: string;
  endCtaButton: string;
  setup: { label: string; text: string };
  phases: CasePhase[];
  results: {
    label: string;
    items: { value: string; label: string }[];
    note: string;
  };
  quote: { text: string; who: string };
  closing: string;
}

export interface Content {
  navLinks: { id: string; label: string }[];
  navCta: string;
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    jpName: string;
    lede: string;
    roles: { label: string; tone: Tone }[];
    portraitLabel: string;
  };
  ribbonItems: string[];
  philosophy: {
    num: string;
    title: string;
    titleEn: string;
    body: string[];
    quote: string;
    quoteBy: string;
  };
  work: {
    num: string;
    title: string;
    titleEn: string;
    headline1: string;
    headline2: string;
    labelJP: string;
    desc: string;
    stack: string[];
    focusHead: string;
    focus: { title: string; desc: string }[];
  };
  service: {
    num: string;
    title: string;
    titleEn: string;
    lede: string;
    headline1: string;
    headline2: string;
    labelJP: string;
    sub: string;
    ctaButton: string;
    rightNote: string;
    rightTags: { id: HueId; label: string; role: string }[];
    metricsHead: string;
    metrics: Metric[];
    agentsHead: string;
    agentsNote: string;
    agents: { id: HueId; name: string; nameJP: string; role: string; tasks: string[] }[];
    processHead: string;
    processNote: string;
    process: { phaseJP: string; phaseEn: string; duration: string; desc: string }[];
    ctaBand: { lede: string; hint: string; button: string };
    caseStudy: CaseStudy;
    caseTeaserLink: string;
  };
  datadog: {
    num: string;
    title: string;
    titleEn: string;
    meta: string;
    headline1: string;
    headline2: string;
    desc1: string;
    desc2: string;
    clients: { name: string; sub: string }[];
  };
  stack: {
    eyebrow: string;
    title: string;
    note: string;
    items: { id: string; name: string }[];
  };
  sensui: {
    num: string;
    title: string;
    titleEn: string;
    headline: string;
    jpHeadline: string;
    p1: string;
    p2: string;
    p3: string;
    bottles: { id: HueId; name: string; jp: string; desc: string }[];
  };
  contact: {
    title: string;
    jp: string;
    lede: string;
    directLabel: string;
    directNote: string;
    chatHint: string;
  };
  socials: { label: string; tag: string; href: string; tone: Tone }[];
  footer: string[];
}

const socials: Content["socials"] = [
  {
    label: "naoto.shima@isle-and-roots.com",
    tag: "email",
    href: "mailto:naoto.shima@isle-and-roots.com",
    tone: "lavender",
  },
  {
    label: "@isle.and.roots",
    tag: "instagram",
    href: "https://www.instagram.com/isle.and.roots/",
    tone: "blush",
  },
  { label: "Facebook", tag: "facebook", href: "https://www.facebook.com/", tone: "cornflower" },
];

const stackItems = [
  { id: "anthropic", name: "Anthropic" },
  { id: "openai", name: "OpenAI" },
  { id: "google", name: "Google" },
  { id: "datadog", name: "Datadog" },
  { id: "vercel", name: "Vercel" },
  { id: "supabase", name: "Supabase" },
];

const footer = ["© 2026 NAOTO SHIMA", "ISLE & ROOTS · SENSUI", "Built with Claude Code"];

export const CONTENT: Record<Lang, Content> = {
  ja: {
    navLinks: [
      { id: "about", label: "自己紹介" },
      { id: "philosophy", label: "哲学" },
      { id: "work", label: "事業" },
      { id: "sensui", label: "SENSUI" },
      { id: "contact", label: "連絡" },
    ],
    navCta: "無料診断を相談する",
    hero: {
      eyebrow: "Builder · AI Strategist · Brand Owner",
      titleLine1: "Naoto",
      titleLine2: "Shima",
      jpName: "島 直人",
      lede: "会社員とひとりの事業主、ふたつの軸で動きながら、AIを手足のように扱い、プロダクトとブランドを育てています。忘れっぽい私は、記憶し、構造化し、並走してくれるAIに救われた一人。だから本気で、AIで企業の働き方を変えたい。",
      roles: [
        { label: "AI活用・Claude Code開発", tone: "buttercream" },
        { label: "SENSUI / ボタニカルコーディアル", tone: "blush" },
        { label: "Datadog / 営業", tone: "cornflower" },
        { label: "10+ years in IT sales", tone: "periwinkle" },
      ],
      portraitLabel: "Portrait · 2026",
    },
    ribbonItems: [
      "Claude Code で作る",
      "自然由来のコーディアル",
      "不動産DX × 自治体連携",
      "税理士のための管理会計",
      "Datadog 営業",
      "ISLE & ROOTS",
    ],
    philosophy: {
      num: "01 — Why AI",
      title: "AIが、私の仕事を「楽しい」に変えた。",
      titleEn: "Why I fell in love with AI",
      body: [
        "正直に告白すると、サラリーマンとして働きはじめた頃の私は、あまり仕事ができる人間ではありませんでした。忘れっぽい、散らかる、優先順位がつけられない——毎日「今日こそは」と自分を奮い立たせては、また同じところでつまずく、そんな日々でした。",
        "転機は ChatGPT との出会いでした。メモを残せば自動で要約され、散らかった思考が構造化され、検索しなくても横に並走してくれる。初めて「自分の脳の足りない部分を、ちゃんと補ってくれるもの」に出会った感覚でした。",
        "そこからは一気に、仕事が楽しくなった。今は Claude Code 等のAIに毎日触れ、個人のプロダクトから企業の業務改善まで、AIと一緒につくるのが生業になっています。",
      ],
      quote: "AIは私にとって「道具」ではなく、共に考える相棒です。",
      quoteBy: "— on working with AI",
    },
    work: {
      num: "02 — 注力事業",
      title: "AIで、企業の日常を書き換える。",
      titleEn: "Primary focus · AI & system development",
      headline1: "Claude Code と共につくる、",
      headline2: "実務が軽くなるシステム。",
      labelJP: "AI DEVELOPMENT — 主軸事業",
      desc: "あらゆるAIを日常的に使い倒しながら、企業のDXとAI活用を推進。ゼロから設計・実装し、現場で使われるプロダクトまで伴走します。単なるPoCで終わらせない、本番運用まで見据えた開発が強みです。",
      stack: ["Claude Code", "Anthropic API", "TypeScript", "Next.js", "Python"],
      focusHead: "特に注力している領域",
      focus: [
        {
          title: "不動産DX × 自治体連携",
          desc: "自治体とコラボレーションしながら、補助金を活用した不動産DXに取り組んでいます。地域の資産を次世代につなぐための仕組みを、小さく素早く実装する。",
        },
        {
          title: "会計士・税理士のための業務効率化",
          desc: "税理士の管理会計業務を効率化するシステムに加え、経営者が楽しみながら資産形成を進められるプラットフォームを開発中。経営者の資産を蓄えるための仕組みを、実直につくっています。",
        },
      ],
    },
    service: {
      num: "03 — 現場の仕事",
      title: "部門の隣に、もう一人。",
      titleEn: "Practice in the field",
      lede: "私が、いま最も時間を注いでいる仕事。",
      headline1: "判断はあなたへ。",
      headline2: "手間は AI へ。",
      labelJP: "AI ASSISTANT PROGRAM — 導入支援",
      sub: "部門ごとに育てる、専属の AI アシスタント。ブラックボックスにはしません。",
      ctaButton: "2週間の無料診断から始める",
      rightNote: "判断は、常に人間です。",
      rightTags: [
        { id: "nagi", label: "総務AI", role: "社内 Q&A と予約" },
        { id: "original", label: "経理AI", role: "仕訳下書きと月次の素案" },
        { id: "hana", label: "営業AI", role: "商談準備とフォロー" },
      ],
      metricsHead: "時間が、戻ってくる。",
      metrics: [
        { before: "25 min", after: "5 min", caption: "介護記録の下書き（1件あたり）" },
        { before: "1h 40m", after: "20 min", caption: "会計事務所の1件処理" },
        { before: "2 days", after: "0.5 day", caption: "経理の月次決算" },
      ],
      agentsHead: "3人の、専属アシスタント。",
      agentsNote: "役割ごとに育て、現場の言葉で話します。",
      agents: [
        {
          id: "nagi",
          name: "Soumu AI",
          nameJP: "総務AI",
          role: "社内の「ちょっと聞きたい」を全部引き受けます。",
          tasks: ["社内規定 Q&A", "経費ルールの確認", "会議室・備品の予約"],
        },
        {
          id: "original",
          name: "Keiri AI",
          nameJP: "経理AI",
          role: "繰り返しの数字仕事を、下書きまで進めておきます。",
          tasks: ["仕訳の下書き", "経費の異常検知", "月次レポートの素案"],
        },
        {
          id: "hana",
          name: "Eigyo AI",
          nameJP: "営業AI",
          role: "商談前の準備と、商談後のフォローを担います。",
          tasks: ["顧客リサーチ", "提案書ドラフト", "フォロー漏れの検知"],
        },
      ],
      processHead: "小さく始めて、大きく育てます。",
      processNote: "赤ちゃんが育つように、4段階で。どの段階でも、いつでも止められます。",
      process: [
        { phaseJP: "診断", phaseEn: "Observe", duration: "2週間", desc: "一緒に業務を見て、向き不向きを見極めます。" },
        { phaseJP: "はいはい", phaseEn: "Crawl", duration: "4–8週", desc: "最も困っている 1 部門で、小さく試します。" },
        { phaseJP: "あんよ", phaseEn: "Walk", duration: "8–16週", desc: "効いた領域を、隣の部門にも広げます。" },
        { phaseJP: "走る", phaseEn: "Run", duration: "16週〜", desc: "全社に根付かせ、運用を内製へ引き渡します。" },
      ],
      ctaBand: {
        lede: "まずは 1 部門から、契約縛りなしで試せます。",
        hint: "診断 ¥30万〜 / 月額 ¥50万〜 / 解約自由",
        button: "無料診断を相談する",
      },
      caseTeaserLink: "ケーススタディを読む",
      caseStudy: {
        eyebrow: "CASE STUDY — 導入の 16 週間",
        title: "ある会計事務所での記録。",
        intro: "実在の案件を複数合成し、数字は実績の中央値レンジで書いています。私が伴走すると、おおよそこういう 16 週間になります。",
        backLink: "トップへ戻る",
        endCtaLede: "まずは 2 週間の無料診断から、気軽に。",
        endCtaButton: "診断を相談する",
        setup: {
          label: "背景",
          text: "従業員 12 名の中堅会計事務所。決算期の残業と、スタッフ離職率の高さが悩み。繰り返し作業が属人化し、ベテランが抜けると品質が落ちる——士業事務所なら、どこでも起きている話。",
        },
        phases: [
          {
            idx: "01",
            phase: "診断",
            phaseEn: "Observe",
            duration: "2 週間",
            actions: [
              "全員に 30 分ずつインタビュー",
              "1 週間、業務を 15 分刻みでログ",
              "価値を生む仕事と、繰り返し作業を分離",
            ],
            insight: "月間 240 時間が「下書き → チェック → 提出」型の作業でした。",
          },
          {
            idx: "02",
            phase: "はいはい",
            phaseEn: "Crawl",
            duration: "5 週間",
            actions: [
              "最も痛い「仕訳入力の下書き」から着手",
              "Claude と freee API で下書き補助を構築",
              "判断は全て人間に残す設計",
            ],
            metric: { before: "1h 40m", after: "20 min", caption: "1 件あたりの処理時間" },
          },
          {
            idx: "03",
            phase: "あんよ",
            phaseEn: "Walk",
            duration: "8 週間",
            actions: [
              "月次試算表の素案作成へ横展開",
              "社内 FAQ bot を Slack に常駐",
              "「今週やるべきこと」ダッシュボードを追加",
            ],
            metric: { before: "2 days", after: "0.5 day", caption: "月次決算の所要" },
          },
          {
            idx: "04",
            phase: "走る",
            phaseEn: "Run",
            duration: "1 週間 + 運用引渡",
            actions: [
              "全員に「プロンプトの直し方」研修",
              "運用責任をベテラン 1 名へ引き継ぎ",
              "失敗事例の型（AI が間違えたときどう直すか）を残す",
            ],
            insight: "自分（島）が使われなくなるのが、正しい終わり方です。",
          },
        ],
        results: {
          label: "16 週間後",
          items: [
            { value: "約 180h", label: "月間、取り戻した時間" },
            { value: "+18%", label: "顧客単価の伸び" },
            { value: "0 名", label: "同期間の離職" },
          ],
          note: "月額 ¥50 万 / 社内試算で ROI 約 3.7 倍。",
        },
        quote: {
          text: "昔、自分がやっていた面倒な下書きを、若手に押し付けないで済むようになった。",
          who: "ベテラン税理士（60代）",
        },
        closing: "単なる効率化ではなく、人間関係の質が変わる。それが、現場に AI が入ったときの、本当の成果だと思っています。",
      },
    },
    datadog: {
      num: "04 — 会社員として",
      title: "本業は、世界の裏側を支えるSaaSの営業。",
      titleEn: "Day job at Datadog",
      meta: "DATADOG · SALES",
      headline1: "A decade in sales,",
      headline2: "at the quiet center.",
      desc1: "大学を卒業してから10年以上、IT テックの世界でずっと営業をやってきました。途中で外資テックを数社挟みながら、プロダクトもお客様もステージも変えてきて、今いるのが Datadog。オブザーバビリティとセキュリティを一本化した SaaS として、日本では知名度はまだ控えめですが——",
      desc2: "実は、OpenAI や Anthropic をはじめとする生成AIのど真ん中の企業の基盤でも使われている、インフラの“裏方”です。最先端の現場の話を間近で聞ける立場にいられることも、AI事業に本気になれる理由のひとつ。",
      clients: [
        { name: "OpenAI", sub: "foundation model" },
        { name: "Anthropic", sub: "foundation model" },
        { name: "Global enterprises", sub: "& many more" },
      ],
    },
    stack: {
      eyebrow: "Working with",
      title: "日々触れているもの。",
      note: "AI プロバイダーから本業のオブザーバビリティまで——道具は選ばない。",
      items: stackItems,
    },
    sensui: {
      num: "05 — ブランド",
      title: "SENSUI — 静けさを、ひと瓶に。",
      titleEn: "The botanical cordial I build",
      headline: "SENSUI",
      jpHeadline: "選酔 — 選び、ゆるやかに酔う。",
      p1: "ISLE & ROOTS から生まれた、天然由来のハーブを漬け込んだボタニカルコーディアル。エルダーフラワー、ジュニパーベリー、ザクロ、ローズ——自然そのものの甘みと香りを、ノンアルコールで閉じ込めました。",
      p2: "「集中したいとき」「夜のチルタイム」「入浴後」「就寝前」。自分の切り替え時間を、ひと瓶が丁寧に底上げしてくれる。私がOEMで開発・販売している、愛着あるプロダクトです。",
      p3: "ソーダ割、豆乳割、デザート、ドレッシング——楽しみ方は自由。Alc 0.0% / 低カロリー / 無添加。",
      bottles: [
        {
          id: "nagi",
          name: "Nagi",
          jp: "凪 — ジュニパーベリー & カルダモン",
          desc: "ジンを思わせるボタニカルの香り。張りつめた一日を、静かに鎮める一本。",
        },
        {
          id: "original",
          name: "Original",
          jp: "エルダーフラワー & レモン",
          desc: "花の甘さと柑橘の軽やかさ。SENSUIの原点、一番スタンダードな味わい。",
        },
        {
          id: "hana",
          name: "Hana",
          jp: "華 — クランベリー・ザクロ & ローズ",
          desc: "深い紅と、ローズの余韻。夜のチルタイムに、特別な一杯として。",
        },
      ],
    },
    contact: {
      title: "Let's talk.",
      jp: "一緒に、何かつくりませんか。",
      lede: "AIの導入、プロダクト開発、あらゆる業務の効率化や AI 活用の推進、SENSUI の取り扱い、その他どんな相談でも。お気軽にご連絡ください。",
      directLabel: "Direct",
      directNote: "メールまたは SNS から直接ご連絡ください。",
      chatHint: "「まだ決まっていないけど、15 分だけ話を聞きたい」でも歓迎です。",
    },
    socials,
    footer,
  },
  en: {
    navLinks: [
      { id: "about", label: "About" },
      { id: "philosophy", label: "Why AI" },
      { id: "work", label: "Work" },
      { id: "sensui", label: "SENSUI" },
      { id: "contact", label: "Contact" },
    ],
    navCta: "Book a free diagnostic",
    hero: {
      eyebrow: "Builder · AI Strategist · Brand Owner",
      titleLine1: "Naoto",
      titleLine2: "Shima",
      jpName: "島 直人 — なおと しま",
      lede: "I build at the seam of two lives — employee by day, founder by night. AI is the tool I reach for first, the collaborator that makes my forgetful mind whole. I'm here to help companies feel that same shift.",
      roles: [
        { label: "AI & Claude Code development", tone: "buttercream" },
        { label: "SENSUI — botanical cordial", tone: "blush" },
        { label: "Datadog — sales", tone: "cornflower" },
        { label: "10+ years in IT sales", tone: "periwinkle" },
      ],
      portraitLabel: "Portrait · 2026",
    },
    ribbonItems: [
      "Built with Claude Code",
      "Natural botanical cordial",
      "Real-estate DX × public sector",
      "Management accounting, reimagined",
      "Datadog · enterprise sales",
      "ISLE & ROOTS",
    ],
    philosophy: {
      num: "01 — Why AI",
      title: "AI made work feel fun again.",
      titleEn: "Why I fell for AI",
      body: [
        "Honestly, in my early years as a salaryman, I wasn't much of a performer. I forget things. I scatter. I struggle to prioritize. Every morning I'd tell myself today would be different, and every night I'd stumble in the same places.",
        "Meeting ChatGPT was the turning point. Notes got summarized without me asking. Scattered thoughts got structured. A quiet partner ran beside me instead of a search bar. For the first time, something met my brain where it was, and filled in what was missing.",
        "From there, work became fun. Today I live inside Claude Code and other AI tools every day, building products of my own and helping companies redesign their work around AI.",
      ],
      quote: "AI isn't a tool to me. It's a partner that thinks alongside me.",
      quoteBy: "— on working with AI",
    },
    work: {
      num: "02 — Focus",
      title: "Rewriting the everyday of companies with AI.",
      titleEn: "Primary focus · AI & system development",
      headline1: "Systems built with Claude Code",
      headline2: "that make real work lighter.",
      labelJP: "AI DEVELOPMENT — LEAD PRACTICE",
      desc: "I push every AI tool I can get my hands on, daily, to help companies ship DX and AI adoption. I design, build, and sit next to the team until what we made is actually being used — my strength is going all the way from prototype to production.",
      stack: ["Claude Code", "Anthropic API", "TypeScript", "Next.js", "Python"],
      focusHead: "Two areas I care most about right now",
      focus: [
        {
          title: "Real-estate DX × public sector",
          desc: "Partnering with local governments on subsidy-backed real-estate DX. Building small, fast systems that pass regional assets on to the next generation.",
        },
        {
          title: "Accounting · tax pro productivity",
          desc: "Streamlining management-accounting work for tax advisors, plus a platform that helps business owners build wealth — honestly, earnestly, and with a bit of fun.",
        },
      ],
    },
    service: {
      num: "03 — Practice",
      title: "One more presence, beside every team.",
      titleEn: "Practice in the field",
      lede: "The work I'm giving most of my time to right now.",
      headline1: "The judgement stays with you.",
      headline2: "The rest, to AI.",
      labelJP: "AI ASSISTANT PROGRAM — Deployment support",
      sub: "A dedicated AI assistant, raised for each department. Never a black box.",
      ctaButton: "Start with a free 2-week diagnostic",
      rightNote: "Humans decide. Always.",
      rightTags: [
        { id: "nagi", label: "HR & Admin AI", role: "Policy Q&A and bookings" },
        { id: "original", label: "Finance AI", role: "Journal drafts and monthly close" },
        { id: "hana", label: "Sales AI", role: "Deal prep and follow-ups" },
      ],
      metricsHead: "Time comes back.",
      metrics: [
        { before: "25 min", after: "5 min", caption: "Care-record drafting, per entry" },
        { before: "1h 40m", after: "20 min", caption: "Accounting firm, per client" },
        { before: "2 days", after: "0.5 day", caption: "Finance team, monthly close" },
      ],
      agentsHead: "Three dedicated assistants.",
      agentsNote: "Raised per role, speaking the language of the floor.",
      agents: [
        {
          id: "nagi",
          name: "Soumu AI",
          nameJP: "総務AI · HR & Admin",
          role: "Answers the small questions that flood every team leader's day.",
          tasks: ["Internal policy Q&A", "Expense rule lookup", "Room & equipment booking"],
        },
        {
          id: "original",
          name: "Keiri AI",
          nameJP: "経理AI · Finance",
          role: "Drafts the repetitive number work before anyone asks.",
          tasks: ["Journal-entry drafts", "Expense anomaly flags", "Monthly report outlines"],
        },
        {
          id: "hana",
          name: "Eigyo AI",
          nameJP: "営業AI · Sales",
          role: "Handles the prep before the meeting and the follow-up after.",
          tasks: ["Account research", "Proposal drafts", "Follow-up reminders"],
        },
      ],
      processHead: "Start small, grow patiently.",
      processNote: "Like a child learning to walk — four stages, and any of them can be the last one.",
      process: [
        { phaseJP: "診断", phaseEn: "Observe", duration: "2 weeks", desc: "We sit with your work and see what fits, what doesn't." },
        { phaseJP: "はいはい", phaseEn: "Crawl", duration: "4–8 weeks", desc: "We try it in one department — the one hurting most." },
        { phaseJP: "あんよ", phaseEn: "Walk", duration: "8–16 weeks", desc: "What worked spreads sideways, to neighbouring teams." },
        { phaseJP: "走る", phaseEn: "Run", duration: "16+ weeks", desc: "It takes root company-wide and hands off to your team." },
      ],
      ctaBand: {
        lede: "Start with one department. No long-term lock-in.",
        hint: "From ¥300K diagnostic · ¥500K/mo pilot · cancel anytime",
        button: "Book a free diagnostic",
      },
      caseTeaserLink: "Read the case study",
      caseStudy: {
        eyebrow: "CASE STUDY — 16 weeks of deployment",
        title: "A record from a tax firm.",
        intro: "Composed from several real engagements; numbers sit at the median of outcomes. When I accompany, this is roughly what 16 weeks looks like.",
        backLink: "Back to home",
        endCtaLede: "Let's start with a 2-week diagnostic — no commitment.",
        endCtaButton: "Book the diagnostic",
        setup: {
          label: "Setting",
          text: "A mid-sized tax firm, 12 people. Overtime during close, high turnover. Repetitive work was tribal knowledge — when veterans left, quality dropped. A story every professional-service firm knows.",
        },
        phases: [
          {
            idx: "01",
            phase: "Observe",
            phaseEn: "診断",
            duration: "2 weeks",
            actions: [
              "30-minute interview with every person",
              "One week of 15-minute increments logging",
              "Separate value work from repetitive work",
            ],
            insight: "240 hours per month were 'draft → check → submit' work.",
          },
          {
            idx: "02",
            phase: "Crawl",
            phaseEn: "はいはい",
            duration: "5 weeks",
            actions: [
              "Start with the most painful — journal-entry drafts",
              "Build a drafting assistant with Claude + freee API",
              "Every decision stays with the human",
            ],
            metric: { before: "1h 40m", after: "20 min", caption: "per entry" },
          },
          {
            idx: "03",
            phase: "Walk",
            phaseEn: "あんよ",
            duration: "8 weeks",
            actions: [
              "Extend to monthly trial-balance drafts",
              "Add a FAQ bot inside Slack",
              "Add a 'what to do this week' dashboard",
            ],
            metric: { before: "2 days", after: "0.5 day", caption: "monthly close" },
          },
          {
            idx: "04",
            phase: "Run",
            phaseEn: "走る",
            duration: "1 week + handoff",
            actions: [
              "Team training on 'how to fix a prompt'",
              "Hand ownership to one senior person",
              "Leave behind a format for 'what to do when AI is wrong'",
            ],
            insight: "When I stop being needed — that's the right ending.",
          },
        ],
        results: {
          label: "16 weeks later",
          items: [
            { value: "~180h", label: "monthly hours reclaimed" },
            { value: "+18%", label: "increase in per-client revenue" },
            { value: "0", label: "people left during the period" },
          ],
          note: "¥500K/month engagement — internal ROI estimate ~3.7×.",
        },
        quote: {
          text: "I don't have to pass the tedious drafts down to the juniors anymore.",
          who: "Senior tax accountant, 60s",
        },
        closing: "It's not just efficiency. The quality of relationships changes. That, I think, is the real outcome when AI walks onto the floor.",
      },
    },
    datadog: {
      num: "04 — Day job",
      title: "By day, selling the SaaS that quietly powers the internet.",
      titleEn: "Day job at Datadog",
      meta: "DATADOG · SALES",
      headline1: "A decade in sales,",
      headline2: "at the quiet center.",
      desc1: "I've spent the 10+ years since graduation in IT tech sales, with several foreign-capital tech companies along the way — different stages, different customers, same craft. Today I'm a sales rep at Datadog, the unified observability and security SaaS. In Japan the name still flies a little under the radar, but —",
      desc2: "Datadog sits inside the stacks of the companies actually moving AI forward, including OpenAI and Anthropic. Being that close to the frontier is part of why I'm so serious about my own AI practice.",
      clients: [
        { name: "OpenAI", sub: "foundation model" },
        { name: "Anthropic", sub: "foundation model" },
        { name: "Global enterprises", sub: "& many more" },
      ],
    },
    stack: {
      eyebrow: "Working with",
      title: "What I work with daily.",
      note: "From AI providers to the observability stack — I pick the right tool for the job.",
      items: stackItems,
    },
    sensui: {
      num: "05 — Brand",
      title: "SENSUI — stillness, in a bottle.",
      titleEn: "The botanical cordial I build",
      headline: "SENSUI",
      jpHeadline: "Dive deep. Get quiet. Reset.",
      p1: "SENSUI is a non-alcoholic botanical cordial from my own label, ISLE & ROOTS. Elderflower, juniper berry, pomegranate, rose — natural herbs, steeped slowly, letting their own sweetness speak.",
      p2: "It's built for in-between moments — before you focus, after the bath, the slow Sunday afternoon, the last hour before sleep. A small bottle that lifts the quality of a pause.",
      p3: "Soda, soy milk, drizzled over dessert, or into a dressing. Alc 0.0% / low cal / no additives.",
      bottles: [
        {
          id: "nagi",
          name: "Nagi",
          jp: "Juniper berry & cardamom",
          desc: "Gin-like botanicals, gently. For quietly putting a tight day down.",
        },
        {
          id: "original",
          name: "Original",
          jp: "Elderflower & lemon",
          desc: "Floral sweetness lifted by citrus. The origin — our most classic pour.",
        },
        {
          id: "hana",
          name: "Hana",
          jp: "Cranberry, pomegranate & rose",
          desc: "Deep crimson, rose on the finish. A bottle for the evening chill-time.",
        },
      ],
    },
    contact: {
      title: "Let's talk.",
      jp: "Let's make something together.",
      lede: "AI adoption, product builds, streamlining any kind of operational work, driving AI across your org, SENSUI wholesale, or anything else — I'd love to hear from you.",
      directLabel: "Direct",
      directNote: "Reach me directly by email or via social. Half-formed ideas are welcome.",
      chatHint: "\"Haven't decided anything yet, just want 15 minutes to talk\" is welcome too.",
    },
    socials,
    footer,
  },
};
