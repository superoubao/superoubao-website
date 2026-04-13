export type Locale = "en" | "zh";

export type Messages = {
  nav: {
    home: string;
    services: string;
    about: string;
    requestCta: string;
    servicesMenuAria: string;
  };
  aboutPage: {
    metaTitle: string;
    hero: { kicker: string; headline: string; lead: string };
    expertise: { title: string; p1: string; p2: string };
    whyChoose: {
      title: string;
      reasons: [
        { title: string; tagline: string; body: string },
        { title: string; tagline: string; body: string },
        { title: string; tagline: string; body: string },
      ];
    };
  };
  footer: { tagline: string; contactEmail: string; intakePdfLabel: string; privacyLabel: string };
  a11y: { skipToMain: string };
  hero: {
    title: string;
    sub: string;
    imageAlt: string;
    ctaSecondary: string;
    trustPoints: [string, string, string];
  };
  clinicalTrust: {
    title: string;
    bullets: [string, string, string];
    tags: [string, string, string];
    imageAlt: string;
  };
  homePatientTrust: {
    title: string;
    verifiedLine: string;
    cards: [
      { quote: string; label: string },
      { quote: string; label: string },
      { quote: string; label: string },
      { quote: string; label: string },
      { quote: string; label: string },
    ];
  };
  homePatientProof: {
    title: string;
    subtitle: string;
    viewLargerAria: string;
    closeLightboxAria: string;
    expandMore: string;
    expandLess: string;
    slides: [
      { alt: string },
      { alt: string },
      { alt: string },
      { alt: string },
      { alt: string },
    ];
  };
  support: {
    kicker: string;
    title: string;
    subtitle: string;
    steps: { title: string; lead: string; detail: string }[];
  };
  whoWeHelp: {
    title: string;
    subtitle: string;
    items: { title: string; text: string }[];
  };
  socialProof: {
    title: string;
    sideImageAlt: string;
    main: { quote: string; nameLine: string; contextLine: string };
    secondary: [{ quote: string; nameLine: string; contextLine: string }, { quote: string; nameLine: string; contextLine: string }];
  };
  trust: {
    kicker: string;
    title: string;
    subline: string;
    bullets: [string, string, string];
    imageAlt: string;
    imageCaption: string;
  };
  process: {
    kicker: string;
    title: string;
    steps: { title: string; line: string }[];
  };
  consult: {
    headlineLine1: string;
    headlineLine2: string;
    pillars: string;
    lead: string;
    trustMicro: string;
    contactEmail: string;
  };
  consultModal: {
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    phoneOptionalBadge: string;
    situationLabel: string;
    situationPlaceholder: string;
    submit: string;
    submitSending: string;
    submitError: string;
    footerNote: string;
    intakePdfNote: string;
    intakePdfLink: string;
    successMessage: string;
    closeAria: string;
  };
  servicesPage: {
    kicker: string;
    title: string;
    lead: string;
    consultationBadge: string;
    items: [
      {
        id: string;
        title: string;
        tag: string;
        desc: string;
        bullets: string[];
        cta: string;
        ctaVariant: "primary" | "secondary" | "tertiary";
      },
      {
        id: string;
        title: string;
        tag: string;
        desc: string;
        bullets: string[];
        cta: string;
        ctaVariant: "primary" | "secondary" | "tertiary";
      },
      {
        id: string;
        title: string;
        tag: string;
        desc: string;
        bullets: string[];
        cta: string;
        ctaVariant: "primary" | "secondary" | "tertiary";
      },
      {
        id: string;
        title: string;
        tag: string;
        desc: string;
        bullets: string[];
        cta: string;
        ctaVariant: "primary" | "secondary" | "tertiary";
      },
    ];
    serviceTestimonials: [
      { quote: string; label: string },
      { quote: string; label: string },
      { quote: string; label: string },
      { quote: string; label: string },
    ];
    whoFor: {
      title: string;
      columns: [
        { headline: string; line: string },
        { headline: string; line: string },
        { headline: string; line: string },
      ];
    };
    closing: {
      title: string;
      lead: string;
      cta: string;
      footnote: string;
    };
    trust: {
      title: string;
      bullets: [string, string, string];
      imageAlt: string;
    };
  };
  consultationPage: {
    metaTitle: string;
    hero: { kicker: string; title: string; lead: string };
    included: {
      title: string;
      items: [
        { title: string; subtitle: string; body: string },
        { title: string; subtitle: string; body: string },
        { title: string; subtitle: string; body: string },
      ];
    };
    expertise: { title: string; body: string; graphicAlt: string };
    cta: { title: string };
  };
  providerMatchingPage: {
    metaTitle: string;
    hero: { kicker: string; title: string; lead: string };
    included: {
      title: string;
      items: [
        { title: string; subtitle: string; body: string },
        { title: string; subtitle: string; body: string },
        { title: string; subtitle: string; body: string },
      ];
    };
    expertise: { title: string; body: string; graphicAlt: string };
    cta: { title: string };
  };
  careCoordinationPage: {
    metaTitle: string;
    hero: { kicker: string; title: string; lead: string };
    included: {
      title: string;
      items: [
        { title: string; subtitle: string; body: string },
        { title: string; subtitle: string; body: string },
        { title: string; subtitle: string; body: string },
      ];
    };
    expertise: { title: string; body: string; graphicAlt: string };
    cta: { title: string };
  };
  prpOvarianPage: {
    metaTitle: string;
    hero: { kicker: string; title: string; paragraphs: string[] };
    qa: {
      title: string;
      items: [
        { question: string; answer: string },
        { question: string; answer: string },
        { question: string; answer: string },
        { question: string; answer: string },
      ];
    };
    travelBanner: string;
    disclaimer: string;
    cta: { title: string };
  };
  notFoundPage: { title: string; lead: string; homeCta: string };
  privacyPage: {
    metaTitle: string;
    title: string;
    intro: string;
    sections: [{ heading: string; body: string }, { heading: string; body: string }, { heading: string; body: string }];
    footnote: string;
  };
  seo: {
    brand: string;
    defaultDescription: string;
    routes: {
      home: { title: string; description: string };
      services: { title: string; description: string };
      consultation: { title: string; description: string };
      providerMatching: { title: string; description: string };
      careCoordination: { title: string; description: string };
      prp: { title: string; description: string };
      about: { title: string; description: string };
      privacy: { title: string; description: string };
      notFound: { title: string; description: string };
    };
  };
};

export const messages: Record<Locale, Messages> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      requestCta: "Request a Consultation",
      servicesMenuAria: "Services submenu",
    },
    a11y: {
      skipToMain: "Skip to main content",
    },
    aboutPage: {
      metaTitle: "About SuperouBao",
      hero: {
        kicker: "Who we are",
        headline: "Empowering your path to parenthood with global expertise.",
        lead:
          "Founded by a registered nurse with years of experience in Beverly Hills fertility clinics, SuperouBao is a premium consulting practice dedicated to guiding families through international assisted reproduction. We connect intended parents with world-class medical resources—so your journey stays clear, safe, and compassionate.",
      },
      expertise: {
        title: "Expertise you can trust",
        p1:
          "Our founder is a Registered Nurse (RN) rooted in California’s fertility ecosystem, with firsthand experience at the Southern California Reproductive Center (SCRC) and other leading Los Angeles–area centers.",
        p2:
          "That clinical grounding shows up in how we work: interpreting complex reports, preparing you for procedures, and supporting recovery—with the kind of insight that earns trust in the patient community.",
      },
      whyChoose: {
        title: "Why choose SuperouBao?",
        reasons: [
          {
            title: "Professional integrity",
            tagline: "Rooted in Beverly Hills’ elite clinical standards.",
            body:
              "We advocate with real clinic experience. We understand how top programs are audited and how benchmarks are measured—so you can evaluate options with confidence.",
          },
          {
            title: "Tailored guidance",
            tagline: "Not one-size-fits-all—built around your case.",
            body:
              "RN-led insight helps us read your history and labs in context and design a focused, efficient journey that fits your goals and timeline.",
          },
          {
            title: "Transparent compassion",
            tagline: "Your trusted global medical concierge.",
            body:
              "We bridge language gaps, translate jargon, and keep expectations aligned with clinical reality—with clear communication on logistics and costs.",
          },
        ],
      },
    },
    footer: {
      tagline: "Thoughtful guidance for your fertility journey.",
      contactEmail: "superoubao@gmail.com",
      intakePdfLabel: "Intake questionnaire (Download)",
      privacyLabel: "Privacy",
    },
    hero: {
      title: "Guiding Your Fertility Journey\nwith Care",
      sub: "Human-led guidance for families seeking clarity, privacy, and real clinical experience.",
      imageAlt: "A pregnant belly with caring hands resting gently",
      ctaSecondary: "View Services",
      trustPoints: ["RN-led", "Beverly Hills network", "Private support"],
    },
    clinicalTrust: {
      title: "Real Clinical Experience You Can Trust",
      bullets: [
        "Registered nurse with hands-on fertility clinic experience",
        "Deep familiarity with Beverly Hills fertility networks",
        "Real patient case navigation, not generic advice",
      ],
      tags: ["RN-led", "Beverly Hills network", "Private consultations"],
      imageAlt: "Abstract illustration of a clinical care pathway and journey",
    },
    homePatientTrust: {
      title: "Trusted by Patients Like You",
      verifiedLine: "Verified Google Review",
      cards: [
        {
          quote:
            "Dr. Danzer and Ariel were incredibly supportive through our first IVF treatment. We received quick lab results, clear explanations, and consistent communication throughout the process.",
          label: "IVF PATIENT · LOS ANGELES",
        },
        {
          quote:
            "I felt genuinely cared for at every step. Dr. Danzer was professional and trustworthy, and Ariel made the entire journey feel calm, clear, and well supported.",
          label: "IVF PATIENT · SOUTHERN CALIFORNIA",
        },
        {
          quote:
            "Everything at SCRC went smoothly. Special thanks to Ariel for her patience and care throughout the egg freezing process.",
          label: "EGG FREEZING PATIENT · SOUTHERN CALIFORNIA",
        },
        {
          quote:
            "From early testing to embryo transfer and pregnancy confirmation, every step felt smooth and coordinated. Ariel helped us communicate efficiently across the clinic and made the process feel much easier.",
          label: "IVF PATIENT · CHINESE-SPEAKING FAMILY",
        },
        {
          quote:
            "When timing became stressful, Ariel stepped in, followed up personally, and helped make the egg freezing process possible before my departure. Her support made a critical difference.",
          label: "EGG FREEZING PATIENT · INTERNATIONAL PATIENT",
        },
      ],
    },
    homePatientProof: {
      title: "Real Patient Reviews",
      subtitle: "From verified Google patient feedback",
      viewLargerAria: "View full-size screenshot",
      closeLightboxAria: "Close",
      expandMore: "Show 2 more reviews",
      expandLess: "Show less",
      slides: [
        { alt: "Google review screenshot: IVF care at SCRC" },
        { alt: "Google review screenshot: IVF journey with clinical team" },
        { alt: "Google review screenshot: egg freezing experience" },
        { alt: "Google review screenshot: IVF in Chinese" },
        { alt: "Google review screenshot: international egg freezing support" },
      ],
    },
    support: {
      kicker: "What we do",
      title: "How We Support Your Journey",
      subtitle: "Clear, thoughtful guidance grounded in real clinical experience.",
      steps: [
        {
          title: "Understand your situation",
          lead: "Your history, priorities, and clinical context — framed clearly.",
          detail: "We start where you actually are.",
        },
        {
          title: "Clarify your options",
          lead: "You see what matters most — not generic checklists.",
          detail: "Built for your case, not a template.",
        },
        {
          title: "Guide your next steps",
          lead: "Decisions, conversations, and coordination — together.",
          detail: "Calm, structured, ongoing.",
        },
      ],
    },
    whoWeHelp: {
      title: "Who We Help",
      subtitle: "Support for individuals and families navigating important fertility decisions.",
      items: [
        {
          title: "Couples beginning their fertility journey",
          text: "Guidance when you need clarity before making major decisions.",
        },
        {
          title: "Individuals seeking direction before treatment",
          text: "Support in understanding options, timing, and what questions to ask.",
        },
        {
          title: "Patients facing complex or overwhelming choices",
          text: "Calm, structured help when the path feels unclear.",
        },
      ],
    },
    socialProof: {
      title: "Trusted by Families Navigating Complex Decisions",
      sideImageAlt: "Bright, calm corridor in a modern medical facility",
      main: {
        quote:
          "SuperouBao helped us understand what actually mattered. We stopped feeling lost.",
        nameLine: "Client, Los Angeles",
        contextLine: "(early fertility planning)",
      },
      secondary: [
        {
          quote: "Clear, calm, and never overwhelming.",
          nameLine: "Client, San Francisco",
          contextLine: "(first consultation)",
        },
        {
          quote: "We finally felt like someone was guiding us instead of just giving us information.",
          nameLine: "Client, Bay Area",
          contextLine: "(treatment planning)",
        },
      ],
    },
    trust: {
      kicker: "Why trust us",
      title: "Guided by Real Clinical Experience",
      subline: "Not theoretical advice — grounded in real clinical environments.",
      bullets: [
        "Registered Nurse with hands-on fertility clinic experience.",
        "Deep familiarity with Beverly Hills fertility centers.",
        "Real-world guidance through complex patient journeys.",
      ],
      imageAlt: "Abstract illustration of supportive care and new growth",
      imageCaption: "Environments we know from experience — so you never walk in alone.",
    },
    process: {
      kicker: "How it works",
      title: "Your Path, Made Clear",
      steps: [
        {
          title: "Consultation",
          line: "We begin by understanding your situation and goals.",
        },
        {
          title: "Clinical Review",
          line: "We interpret your reports and context with care.",
        },
        {
          title: "Personalized Plan",
          line: "We outline the most relevant next steps for your situation.",
        },
        {
          title: "Ongoing Support",
          line: "We help you move forward with clarity and confidence.",
        },
      ],
    },
    consult: {
      headlineLine1: "Start with clarity.",
      headlineLine2: "Move forward with confidence.",
      pillars: "PRIVATE. PERSONAL. GUIDED.",
      lead: "Speak with a clinical advisor who understands your situation.",
      trustMicro: "No obligation. Fully confidential.",
      contactEmail: "superoubao@gmail.com",
    },
    consultModal: {
      title: "Start Your Consultation",
      subtitle: "Tell us a bit about your situation — we’ll guide your next steps.",
      nameLabel: "Name",
      emailLabel: "Email",
      phoneLabel: "Phone",
      phoneOptionalBadge: "Optional",
      situationLabel: "Briefly describe your situation",
      situationPlaceholder: "A few sentences is enough.",
      submit: "Submit Request",
      submitSending: "Sending…",
      submitError: "We couldn’t send just now. Please email us directly and we’ll help you there.",
      footerNote: "We’ll respond within 24 hours.",
      intakePdfNote: "Prefer to prepare on paper? Download our intake questionnaire and attach it when you email us.",
      intakePdfLink: "Download questionnaire",
      successMessage: "Thank you. We’ll be in touch shortly.",
      closeAria: "Close",
    },
    servicesPage: {
      kicker: "SERVICES",
      title: "Choose the level of support you need",
      lead:
        "From focused consultation to full care coordination, we provide structured, clinically grounded support tailored to your situation.",
      consultationBadge: "Recommended",
      items: [
        {
          id: "consultation",
          title: "Consultation",
          tag: "ENTRY",
          desc: "A focused session to understand your situation and clarify your next steps.",
          bullets: [
            "Review your history and reports",
            "Identify key priorities",
            "Clear clinical perspective",
          ],
          cta: "Request Consultation",
          ctaVariant: "primary",
        },
        {
          id: "provider-matching",
          title: "Provider Matching",
          tag: "MOST COMMON",
          desc:
            "Align your profile with specialist programs and fertility centers that fit your goals and timeline.",
          bullets: [
            "Clinical fit assessment",
            "Shortlist credible programs",
            "Transparent decision support",
          ],
          cta: "Learn More",
          ctaVariant: "secondary",
        },
        {
          id: "care-coordination",
          title: "Care Coordination",
          tag: "FULL SUPPORT",
          desc: "Ongoing coordination from plan through treatment—clear communication at every step.",
          bullets: [
            "Single point of contact",
            "Timeline and logistics",
            "Aligned with your care team",
          ],
          cta: "Learn More",
          ctaVariant: "secondary",
        },
        {
          id: "prp-ovarian-rejuvenation",
          title: "PRP Ovarian Rejuvenation",
          tag: "THERAPY",
          desc:
            "Platelet-rich plasma prepared from your own blood and delivered to the ovaries under ultrasound guidance—focused support for ovarian responsiveness.",
          bullets: [
            "Autologous PRP—no donor material",
            "Ultrasound-guided procedure",
            "Review candidacy and timing with our team",
          ],
          cta: "View Treatment",
          ctaVariant: "tertiary",
        },
      ],
      serviceTestimonials: [
        {
          quote: "Whenever I had questions, someone got back to me quickly and helped me understand the results.",
          label: "Consultation patient · Los Angeles",
        },
        {
          quote: "We’re glad we chose SCRC—the team helped us stay steady on a path that felt overwhelming at first.",
          label: "IVF patient · SCRC",
        },
        {
          quote: "Ariel helped keep every step on track before I left the U.S.—clear reminders right when I needed them.",
          label: "Egg freezing patient · Beverly Hills",
        },
        {
          quote: "From workup to transfer, the process felt organized and calm. I’m grateful to the whole team.",
          label: "IVF patient · Los Angeles",
        },
      ],
      whoFor: {
        title: "Who this is for",
        columns: [
          {
            headline: "Couples beginning their fertility journey",
            line: "Guidance before making important decisions",
          },
          {
            headline: "Individuals seeking clarity before treatment",
            line: "Support in understanding options and timing",
          },
          {
            headline: "Patients facing complex or overwhelming choices",
            line: "Structured guidance through difficult decisions",
          },
        ],
      },
      closing: {
        title: "Start with clarity. Move forward with confidence.",
        lead: "Speak with a clinical advisor who understands your situation.",
        cta: "Request a Consultation",
        footnote: "Private. Confidential. No obligation.",
      },
      trust: {
        title: "Grounded in real clinical experience",
        bullets: [
          "Registered nurse with fertility clinic experience",
          "Deep familiarity with Beverly Hills providers",
          "Real patient case navigation",
        ],
        imageAlt: "Abstract illustration of a clinical care pathway and journey",
      },
    },
    consultationPage: {
      metaTitle: "Fertility Consultation",
      hero: {
        kicker: "Consultation",
        title: "Expert-led fertility consultation",
        lead:
          "A structured session grounded in real clinic experience—from a Registered Nurse’s perspective. We translate complex information into a clear path forward, so you can make decisions with confidence.",
      },
      included: {
        title: "What’s included",
        items: [
          {
            title: "Clinical report review",
            subtitle: "In-depth analysis of your reproductive health data.",
            body:
              "We decode complex results—AMH, hormonal panels, ultrasound findings—and turn medical jargon into clear, actionable insight about where you stand today.",
          },
          {
            title: "Personalized protocol planning",
            subtitle: "Strategies shaped to your history and goals.",
            body:
              "From comparing leading programs (including centers like SCRC) to mapping an efficient international timeline, we help you align medical steps with your life and resources.",
          },
          {
            title: "Risk & success rate assessment",
            subtitle: "Honest framing rooted in clinical reality.",
            body:
              "We don’t deal in one-size-fits-all promises. You get a transparent discussion of success metrics, trade-offs, and risks for the options on your table—so you move forward with clarity.",
          },
        ],
      },
      expertise: {
        title: "Built on clinical excellence",
        body:
          "Our work is grounded in years of hands-on experience across some of Los Angeles’ most respected fertility centers. That clinical DNA means we understand labs, specialists, and workflows—and we match you with the right resources for your situation, not a generic template.",
        graphicAlt: "Abstract illustration of a clinical care pathway",
      },
      cta: {
        title: "Ready to talk through your situation?",
      },
    },
    providerMatchingPage: {
      metaTitle: "Provider matching",
      hero: {
        kicker: "Provider matching",
        title: "The right fit. The clearest path.",
        lead:
          "In a landscape of endless options, the difference is in the details. We cut through noise to give you clinical clarity—so you can choose care teams and programs aligned with your profile, not a brochure.",
      },
      included: {
        title: "How we match you",
        items: [
          {
            title: "Elite network",
            subtitle: "Rooted in LA’s premier clinical landscape.",
            body:
              "We bring direct familiarity with top-tier laboratories and specialists—so recommendations are grounded in real access patterns, not generic lists.",
          },
          {
            title: "Data-driven vetting",
            subtitle: "Success metrics that fit your medical profile.",
            body:
              "We analyze outcomes and clinical integrity to shortlist providers that match your history, goals, and timeline—not one-size-fits-all rankings.",
          },
          {
            title: "Inside insight",
            subtitle: "Beyond marketing claims.",
            body:
              "You get a candid view of how programs operate day to day—communication, workflows, and what excellence looks like in practice behind the scenes.",
          },
        ],
      },
      expertise: {
        title: "Matching is a medical decision",
        body:
          "Choosing a fertility program is not a lifestyle pick—it’s clinical. Our RN-led perspective helps you weigh substance over slogan, and align with teams whose standards and culture fit your needs.",
        graphicAlt: "Abstract illustration of supportive care and new growth",
      },
      cta: {
        title: "Want help narrowing your options?",
      },
    },
    careCoordinationPage: {
      metaTitle: "Care coordination",
      hero: {
        kicker: "Care coordination",
        title: "Expert care. Seamless journey.",
        lead:
          "From clinical milestones to logistical details, we manage the complexities so you can focus on what matters most—your family’s next chapter.",
      },
      included: {
        title: "What we coordinate",
        items: [
          {
            title: "Clinical milestones",
            subtitle: "Protocols, labs, and handoffs—kept clear.",
            body:
              "We help you track appointments, results, and next steps across providers and time zones—so nothing important slips through the cracks.",
          },
          {
            title: "Logistics & communication",
            subtitle: "Scheduling, documents, and cross-border clarity.",
            body:
              "Travel timing, paperwork, and follow-ups are organized with the same rigor as the medicine—fewer surprises, fewer loose ends.",
          },
          {
            title: "Continuity & advocacy",
            subtitle: "RN-led oversight with integrity.",
            body:
              "You get a steady clinical thread: someone who knows your case, speaks the language of the clinic, and advocates with professionalism—not noise.",
          },
        ],
      },
      expertise: {
        title: "Your dedicated clinical advocate",
        body:
          "International fertility pathways require more than scheduling—they demand clinical precision. Led by a Registered Nurse with deep roots in Los Angeles’ premier programs, we provide the oversight to ensure each step is handled with care, clarity, and accountability.",
        graphicAlt: "Abstract illustration of a clinical care pathway",
      },
      cta: {
        title: "Ready for coordinated support?",
      },
    },
    prpOvarianPage: {
      metaTitle: "PRP ovarian rejuvenation",
      hero: {
        kicker: "Clinical therapy",
        title: "Platelet Rich Plasma (PRP) for ovarian rejuvenation",
        paragraphs: [
          "Platelet Rich Plasma (PRP) for ovarian rejuvenation. It is used to treat one of the most difficult infertility conditions: the diminished egg number and quality that occurs as a woman becomes older. By infusing a patient’s own PRP into her ovaries, approximately half of these women respond with improved ovarian function including a reduction in FSH and an increase in AMH. At present, no other treatments successfully address this condition.",
          "The procedure takes approximately 1–2 hours and begins with the isolation of the platelet rich portion of blood. The platelets are then activated after which they release hundreds of proteins and other factors that serve to enhance the growth and differentiation of stem cells. They are then infused into the ovaries under ultrasound guidance without the need for anesthesia.",
          "The ovarian response is normally seen within 2–3 months and has successfully led to the retrieval of eggs even from women who had become menopause in the year prior to the procedure.",
        ],
      },
      qa: {
        title: "Practical questions",
        items: [
          {
            question: "How many treatments are needed, how long is each visit, and when might changes be seen?",
            answer:
              "Often one treatment is enough; a second is only occasionally discussed. Expect on the order of two hours at the clinic. Many teams reassess around two to three months.",
          },
          {
            question: "Is a blood draw required? Is anesthesia needed? What about risks?",
            answer:
              "Yes—a small venous draw is required (often around two tubes, roughly 8–10 mL total). General anesthesia is usually not required. The injection is performed under ultrasound guidance. Risks and contraindications should be reviewed directly with your clinician.",
          },
          {
            question: "Who is this approach commonly discussed for?",
            answer:
              "It is frequently considered in contexts such as diminished ovarian response, premature ovarian insufficiency patterns, or the perimenopausal transition. Evidence in postmenopausal patients is still evolving. Large European and U.S. case series have been reported; success rates depend on how “success” is defined—your doctor can help interpret what that means for you.",
          },
          {
            question: "How is effectiveness evaluated?",
            answer:
              "Typically around two to three months after treatment, assessment is timed to early cycle days (often cycle days 2–5): blood tests (including hormones such as AMH) plus ultrasound monitoring of basal antral follicles. The goal is to interpret ovarian reserve and egg-quality–related signals together—not a single number in isolation.",
          },
        ],
      },
      travelBanner:
        "Many families make one focused trip to the United States—often about one to two days on site when scheduling allows.",
      disclaimer:
        "Educational overview only; not medical advice. Protocols and eligibility belong to your treating physician.",
      cta: {
        title: "Questions about PRP timing or travel?",
      },
    },
    notFoundPage: {
      title: "Page not found",
      lead: "The page you’re looking for doesn’t exist, or the link may be out of date.",
      homeCta: "Back to home",
    },
    privacyPage: {
      metaTitle: "Privacy",
      title: "Privacy & data",
      intro:
        "SuperouBao respects your privacy. This page summarizes how information may be handled when you use this website or contact us. It is general information—not legal advice; ask a qualified professional if you need guidance for your situation.",
      sections: [
        {
          heading: "What you may share with us",
          body:
            "When you email us or submit a consultation request, we typically receive the details you choose to provide (such as name, contact information, and a short description of your situation). Technical data such as browser type or approximate region may also be collected by standard web infrastructure.",
        },
        {
          heading: "How we use it",
          body:
            "We use this information to respond to you, improve our services, and keep our communications relevant. We do not sell your personal information. Third-party tools (for example email or form delivery) may process data under their own terms—use those channels only if you are comfortable with their policies.",
        },
        {
          heading: "Your choices & updates",
          body:
            "You may contact us to ask questions about this notice or to request correction of basic contact details we hold. We may update this page from time to time; substantive changes will be reflected here.",
        },
      ],
      footnote: "Last updated: April 2026. For questions: see the contact email in the site footer.",
    },
    seo: {
      brand: "SuperouBao",
      defaultDescription:
        "Clinical clarity for fertility decisions — data analysis, specialist matching, guided care.",
      routes: {
        home: {
          title: "Clinical intelligence for your fertility journey",
          description:
            "RN-grounded fertility guidance for international care—planning, specialist alignment, and steady coordination.",
        },
        services: {
          title: "Services",
          description:
            "Explore consultation, provider matching, care coordination, and treatment pathways tailored to your fertility goals.",
        },
        consultation: {
          title: "Fertility consultation",
          description:
            "Book a structured consultation to clarify options, timing, and next steps with clinically informed support.",
        },
        providerMatching: {
          title: "Provider matching",
          description:
            "Align with fertility programs and clinicians that fit your medical needs, values, and logistics.",
        },
        careCoordination: {
          title: "Care coordination",
          description:
            "Ongoing coordination across visits, documents, and communication so your pathway stays organized.",
        },
        prp: {
          title: "PRP ovarian rejuvenation",
          description:
            "Educational overview of platelet rich plasma for ovarian rejuvenation—process, timing, and what to ask your doctor.",
        },
        about: {
          title: "About SuperouBao",
          description:
            "Who we are: a premium fertility consulting practice founded by an RN with experience in leading U.S. fertility centers.",
        },
        privacy: {
          title: "Privacy",
          description: "How SuperouBao approaches privacy and data when you use this site or contact our team.",
        },
        notFound: {
          title: "Page not found",
          description: "This page does not exist on SuperouBao.",
        },
      },
    },
  },
  zh: {
    nav: {
      home: "首页",
      services: "服务",
      about: "关于",
      requestCta: "预约咨询",
      servicesMenuAria: "服务子菜单",
    },
    a11y: {
      skipToMain: "跳到主要内容",
    },
    aboutPage: {
      metaTitle: "关于 SuperouBao",
      hero: {
        kicker: "我们是谁",
        headline: "以全球视野与临床经验，陪伴您走向为人父母之路。",
        lead:
          "SuperouBao 由深耕比佛利山庄生育诊所多年的注册护士创立，专注协助家庭应对跨境辅助生殖的复杂环节。我们在意向父母与顶尖医疗资源之间搭建桥梁，让旅程清晰、安全、也有温度。",
      },
      expertise: {
        title: "值得信赖的专业底色",
        p1:
          "创始人持有加州注册护士（RN）资质，长期扎根南加州生育医疗体系，曾在南加州生育中心（SCRC）及洛杉矶地区多家领先机构积累一线经验。",
        p2:
          "这份临床底子体现在日常服务中：协助解读复杂报告、陪伴您做好诊疗与术后照护——以扎实、可验证的专业赢得患者社群的信任。",
      },
      whyChoose: {
        title: "为什么选择 SuperouBao？",
        reasons: [
          {
            title: "专业与诚信",
            tagline: "对齐比佛利山庄一线临床标准。",
            body:
              "我们以真实诊间经验为您发声，理解顶尖项目如何接受审计、成功率如何衡量——助您理性比较、安心决策。",
          },
          {
            title: "精准定制方案",
            tagline: "拒绝模板化，回到医学本质。",
            body:
              "以注册护士的专业视角解读病史与化验，在您的目标与时间线下，设计更可执行的生育路径。",
          },
          {
            title: "透明与关怀",
            tagline: "您可信赖的全球医疗顾问式陪伴。",
            body:
              "跨越语言与术语障碍，把临床现实讲清楚；在沟通与成本结构上保持透明，让您始终心中有数。",
          },
        ],
      },
    },
    footer: {
      tagline: "生育路上，专业相随，安心相伴。",
      contactEmail: "superoubao@gmail.com",
      intakePdfLabel: "初诊问卷（下载）",
      privacyLabel: "隐私说明",
    },
    hero: {
      title: "以关怀陪伴您的\n生育之路",
      sub: "真人同行，为追求清晰、私密与真实临床经验的您而设 — 少说套话，多走心。",
      imageAlt: "孕肚与轻柔抚触的双手，温馨画面",
      ctaSecondary: "了解服务",
      trustPoints: ["RN 把关", "比佛利山庄网络", "私密支持"],
    },
    clinicalTrust: {
      title: "真实临床经验，值得信赖",
      bullets: [
        "注册护士出身，长期在生育诊所一线。",
        "比佛利山庄生育医疗网络，环境与流程都熟。",
        "陪您走真实病例，不靠套话与模板。",
      ],
      tags: ["RN 把关", "比佛利山庄网络", "私密咨询"],
      imageAlt: "抽象图形：临床路径与陪伴旅程",
    },
    homePatientTrust: {
      title: "与您相似的患者，也愿意托付",
      verifiedLine: "已验证 · Google 评价",
      cards: [
        {
          quote:
            "第一次试管婴儿，Danzer 医生与 Ariel 全程非常给力。化验出得快，每一步也都有人讲清楚、跟得紧。",
          label: "试管婴儿 · 洛杉矶",
        },
        {
          quote:
            "每一步都很安心。Danzer 医生专业可靠，Ariel 让整段旅程从容、清楚，也一直有人照应。",
          label: "试管婴儿 · 南加州",
        },
        {
          quote: "在 SCRC 一路很顺，特别感谢 Ariel 在冻卵全程的耐心与陪伴。",
          label: "冻卵 · 南加州",
        },
        {
          quote:
            "从检查到移植、确认怀孕，环节衔接顺。Ariel 帮我们跨部门沟通，省了很多心，也轻松许多。",
          label: "试管婴儿 · 华语家庭",
        },
        {
          quote:
            "时间很紧时，Ariel 主动跟进、当面协调，让我在离境前完成了冻卵——她的帮忙非常关键。",
          label: "冻卵 · 国际患者",
        },
      ],
    },
    homePatientProof: {
      title: "真实患者评价",
      subtitle: "摘自 Google 已验证的患者反馈",
      viewLargerAria: "查看大图",
      closeLightboxAria: "关闭",
      expandMore: "展开，再看 2 条",
      expandLess: "收起",
      slides: [
        { alt: "Google 评价截图：试管婴儿照护" },
        { alt: "Google 评价截图：试管婴儿全程" },
        { alt: "Google 评价截图：冻卵体验" },
        { alt: "Google 评价截图：中文试管婴儿" },
        { alt: "Google 评价截图：国际患者冻卵" },
      ],
    },
    support: {
      kicker: "我们怎么做",
      title: "陪您走这段生育路",
      subtitle: "清晰、体贴，来自一线临床。",
      steps: [
        {
          title: "看懂您的情况",
          lead: "病史、心愿与临床脉络，先帮您理顺。",
          detail: "从您真实所在的地方出发。",
        },
        {
          title: "厘清您的选项",
          lead: "抓住对您真正重要的，不靠模板清单。",
          detail: "为您的个案量体裁衣。",
        },
        {
          title: "陪您走下一步",
          lead: "沟通、拍板、衔接资源，一起走。",
          detail: "沉静、有条理，一路在。",
        },
      ],
    },
    whoWeHelp: {
      title: "适合这样的您",
      subtitle: "站在重要抉择前，需要有人陪、心里有底。",
      items: [
        {
          title: "刚启程的伴侣",
          text: "大决定之前，先把方向看清楚。",
        },
        {
          title: "治疗前心里没底的人",
          text: "带您看懂节奏与选项，知道该问什么。",
        },
        {
          title: "路口太多、选不动的您",
          text: "路糊的时候，给您沉静、有条理地陪一程。",
        },
      ],
    },
    socialProof: {
      title: "在复杂抉择中，赢得家庭的信任",
      sideImageAlt: "现代医院走廊，光线柔和安静",
      main: {
        quote: "SuperouBao 帮助我们看清什么才真正重要，也不再感到迷失。",
        nameLine: "客户，洛杉矶",
        contextLine: "（生育规划早期）",
      },
      secondary: [
        {
          quote: "清晰、从容，让人始终安心。",
          nameLine: "客户，旧金山",
          contextLine: "（初次咨询）",
        },
        {
          quote: "终于有人在真正引导我们，而不是只给我们一堆信息。",
          nameLine: "客户，湾区",
          contextLine: "（治疗规划阶段）",
        },
      ],
    },
    trust: {
      kicker: "为何相信我们",
      title: "来自真实临床经验",
      subline: "不是纸上谈兵，是一线诊间里磨出来的判断。",
      bullets: [
        "注册护士出身，长期在生育诊所一线。",
        "比佛利山庄各大生育中心，环境与流程都熟。",
        "路再绕，也有人陪您一步一步走。",
      ],
      imageAlt: "抽象图形：陪伴与新芽（成长）",
      imageCaption: "我们熟的地方，也是陪您一起走的地方。",
    },
    process: {
      kicker: "怎么走",
      title: "四步，心里就有底",
      steps: [
        {
          title: "咨询",
          line: "先听懂您的情况和心愿。",
        },
        {
          title: "细看资料",
          line: "把报告与背景读透，带着温度说给您听。",
        },
        {
          title: "专属方案",
          line: "理顺您当下最该迈的那一步。",
        },
        {
          title: "一路相伴",
          line: "带着清晰和底气，陪您往前走。",
        },
      ],
    },
    consult: {
      headlineLine1: "从清晰出发。",
      headlineLine2: "带着信心前行。",
      pillars: "私密 · 个人化 · 有人引导",
      lead: "和懂您情况的临床顾问聊一聊。",
      trustMicro: "无义务。完全保密。",
      contactEmail: "superoubao@gmail.com",
    },
    consultModal: {
      title: "开始咨询",
      subtitle: "说说您的情况，我们一起看下一步怎么走。",
      nameLabel: "姓名",
      emailLabel: "邮箱",
      phoneLabel: "电话",
      phoneOptionalBadge: "选填",
      situationLabel: "说说您眼下的情况",
      situationPlaceholder: "几句就好。",
      submit: "提交预约",
      submitSending: "发送中…",
      submitError: "暂时发不出去，请邮件联系我们。",
      footerNote: "24 小时内回复。",
      intakePdfNote: "想先理清病史？可下载初诊问卷，填好后随邮件一并发来。",
      intakePdfLink: "下载初诊问卷",
      successMessage: "收到了，我们会尽快联系您。",
      closeAria: "关闭",
    },
    servicesPage: {
      kicker: "服务",
      title: "按您所需，选择支持深度",
      lead:
        "从单次深度咨询到全程医疗协调，我们以结构化、临床视角为支撑，按您的实际情况量身定制。",
      consultationBadge: "建议从这里开始",
      items: [
        {
          id: "consultation",
          title: "生育咨询",
          tag: "入门",
          desc: "聚焦一次深度沟通，厘清您的情况与下一步方向。",
          bullets: ["梳理病史与报告要点", "明确优先事项", "给出清晰的临床视角"],
          cta: "预约咨询",
          ctaVariant: "primary",
        },
        {
          id: "provider-matching",
          title: "医疗资源匹配",
          tag: "常见选择",
          desc: "按您的目标与时间线，对接更契合的专科项目与生育中心。",
          bullets: ["评估临床匹配度", "筛选可信机构短名单", "决策过程透明可验证"],
          cta: "了解更多",
          ctaVariant: "secondary",
        },
        {
          id: "care-coordination",
          title: "全程协调服务",
          tag: "全程支持",
          desc: "从方案到执行持续协调，每一步沟通清晰、节奏可控。",
          bullets: ["单一联络窗口", "时间线与行程统筹", "与您的医疗团队对齐"],
          cta: "了解更多",
          ctaVariant: "secondary",
        },
        {
          id: "prp-ovarian-rejuvenation",
          title: "PRP 卵巢再生疗法",
          tag: "疗程",
          desc: "自体富血小板血浆在超声引导下送达卵巢，温柔陪伴卵巢对刺激的反应。",
          bullets: ["自体血液制备，无外来供体", "超声引导下操作，路径清楚", "是否适合、何时出发，与顾问细聊"],
          cta: "查看疗程",
          ctaVariant: "tertiary",
        },
      ],
      serviceTestimonials: [
        {
          quote: "有疑问时，回复很快，也会帮我读懂化验结果。",
          label: "咨询客户 · 洛杉矶",
        },
        {
          quote: "庆幸选了 SCRC，一开始很慌的路，被他们带着稳住了。",
          label: "试管婴儿 · SCRC",
        },
        {
          quote: "离美前每一步都有人提醒，节奏清楚，少了很多慌乱。",
          label: "冻卵 · 比佛利山庄",
        },
        {
          quote: "从检查到移植，流程清楚、心里也有底，感谢团队一路相伴。",
          label: "试管婴儿 · 洛杉矶",
        },
      ],
      whoFor: {
        title: "适合这样的您",
        columns: [
          {
            headline: "正在开启生育旅程的伴侣",
            line: "在关键决定前，先厘清方向与优先级",
          },
          {
            headline: "治疗前希望理清思路的个人",
            line: "在选项、节奏与时机上获得可信赖的支持",
          },
          {
            headline: "面对复杂或令人无所适从的选择",
            line: "以结构化方式陪伴您走过艰难决策",
          },
        ],
      },
      closing: {
        title: "从清晰出发。带着信心前行。",
        lead: "与懂您情况的临床顾问聊一聊。",
        cta: "预约咨询",
        footnote: "私密 · 保密 · 无义务。",
      },
      trust: {
        title: "扎根真实临床经验",
        bullets: [
          "注册护士出身，深耕生育诊所一线",
          "对比佛利山庄顶尖机构与医疗网络深度熟悉",
          "真实个案陪伴与路径导航",
        ],
        imageAlt: "抽象图形：临床路径与陪伴旅程",
      },
    },
    consultationPage: {
      metaTitle: "生育咨询",
      hero: {
        kicker: "咨询",
        title: "专家级生育咨询：让每一步都有据可依",
        lead:
          "以注册护士的一线视角，把复杂信息整理成可执行的路径。一次有结构的深聊，帮您看清现状、选项与下一步——决策更踏实。",
      },
      included: {
        title: "咨询包含的内容",
        items: [
          {
            title: "医学报告深度解读",
            subtitle: "把生殖健康数据读透、讲明白。",
            body:
              "从 AMH、激素谱到超声所见，我们把专业术语还原成您能把握的结论，让您知道「现在在哪里」。",
          },
          {
            title: "定制化流程规划",
            subtitle: "结合病史与家庭目标，量体裁衣。",
            body:
              "在顶尖机构（如 SCRC 等）之间做战略比较，并协助设计更高效的跨境医疗时间线，让精力与资源花在刀刃上。",
          },
          {
            title: "风险与成功率客观评估",
            subtitle: "拒绝空话，回到临床现实。",
            body:
              "不做「一刀切」承诺；以医学专业态度，坦诚讨论不同方案的成功率区间与潜在风险，让您带着清晰与底气前行。",
          },
        ],
      },
      expertise: {
        title: "专业底色，来自一线临床",
        body:
          "团队扎根洛杉矶多家备受认可的生育中心，长期身处真实诊间与流程之中。我们懂实验室、懂专家、懂协作方式——为您对接的是贴合个案的资源，而不是模板化清单。",
        graphicAlt: "抽象图形：临床路径与陪伴旅程",
      },
      cta: {
        title: "想先聊聊您的情况？",
      },
    },
    providerMatchingPage: {
      metaTitle: "医疗资源匹配",
      hero: {
        kicker: "医疗资源匹配",
        title: "精准匹配，走向最适合您的方案",
        lead:
          "选择众多，成败往往在于细节。我们为您拨开层层信息，聚焦临床本质——让您在真实、可验证的标准下，对接到更贴合您个案与目标的团队与项目。",
      },
      included: {
        title: "我们如何为您匹配",
        items: [
          {
            title: "精英医疗网络",
            subtitle: "扎根洛杉矶一线临床生态。",
            body:
              "熟悉顶尖实验室与专科团队的协作方式，让推荐建立在真实可及的资源与路径上，而非泛泛清单。",
          },
          {
            title: "数据驱动的筛选",
            subtitle: "与您的医学画像对齐。",
            body:
              "综合成功率、流程与合规性等维度，在您病史、目标与时间线下筛选更合适的机构——拒绝模板化排名。",
          },
          {
            title: "一线视角的洞察",
            subtitle: "不止于宣传话术。",
            body:
              "带您看见诊间内真实的运作方式：沟通节奏、协作与执行细节，以及「优质」在实践中的含义。",
          },
        ],
      },
      expertise: {
        title: "匹配首先是医学决策",
        body:
          "选择生育项目不是生活方式消费，而是医疗路径选择。以注册护士视角协助您权衡实质与口号，对接在标准与文化上与您更契合的团队。",
        graphicAlt: "抽象图形：陪伴与新芽（成长）",
      },
      cta: {
        title: "需要一起把选项缩小到可决策的范围？",
      },
    },
    careCoordinationPage: {
      metaTitle: "全程协调服务",
      hero: {
        kicker: "全程协调",
        title: "专业守护，一路顺畅",
        lead:
          "从医学里程碑到行程与文书细节，我们替您打理繁杂，让您把心力留给家庭与新生命带来的喜悦。",
      },
      included: {
        title: "我们协调什么",
        items: [
          {
            title: "临床节点",
            subtitle: "流程、化验与衔接，一目了然。",
            body:
              "协助您跟进预约、结果与下一步，跨越机构与时区——减少遗漏与反复沟通的成本。",
          },
          {
            title: "后勤与沟通",
            subtitle: "行程、资料与跨境衔接。",
            body:
              "在时间与文书上与您对齐节奏，让安排与医学同样严谨——少意外、少断档。",
          },
          {
            title: "连续性与倡导",
            subtitle: "RN 把关，专业代言。",
            body:
              "始终有人懂您的个案、懂诊间语言，并以专业态度为您发声——不是喧闹，而是可托付的协调。",
          },
        ],
      },
      expertise: {
        title: "您的专属临床倡导者",
        body:
          "跨境生育路径不只是「排行程」，更需要临床上的分寸感。由深耕洛杉矶顶尖项目的注册护士牵头，我们以可验证的专业监督，陪伴您把每一步走稳、走清楚。",
        graphicAlt: "抽象图形：临床路径与陪伴旅程",
      },
      cta: {
        title: "希望有人替您把全程串起来？",
      },
    },
    prpOvarianPage: {
      metaTitle: "PRP 卵巢再生疗法",
      hero: {
        kicker: "疗程说明",
        title: "PRP（高浓度血小板血浆）卵巢再生疗法",
        paragraphs: [
          "「PRP（高浓度血小板血浆）」是近年来备受关注的新技术，可刺激卵巢功能回升，应对女性年龄增长带来的卵子数量与质量下降。取自您自身的高浓度血小板血浆，会注射到卵巢内。术后超过半数个案可见卵巢功能改善，例如促卵泡生成素下降、抗缪勒管激素升高等。当前并无其他已知技术能带来相近效果。",
          "全程约 1–2 小时。先从血样中分离富含高浓度血小板的部分，再激活血小板；其间可释放上百种蛋白质与其他因子，有助于干细胞生长与分化。无需麻醉，医生在超声引导下将血小板注射至双侧卵巢。",
          "卵巢反应多在术后 2–3 个月内逐步显现。有记载案例中，即便在术前一年内已绝经的女性，仍有机会再次取卵、进入自卵周期。",
        ],
      },
      qa: {
        title: "您可能还想了解",
        items: [
          {
            question: "需要做几次？每次多久？多久能看到变化？",
            answer:
              "多数一次即可，少数再议第二次；在院流程大约两小时。多数人会在两三个月左右安排复查、评估变化。",
          },
          {
            question: "要抽血吗？要麻醉吗？对身体有风险吗？",
            answer:
              "需要采集静脉血，约两管（8–10 mL）；一般无需麻醉。注射在超声引导下完成。具体风险与禁忌，须当面与医生确认。",
          },
          {
            question: "适合哪些人？",
            answer:
              "常与卵巢反应不佳、卵巢早衰倾向、围绝经期等情况一起讨论；绝经后人群证据仍在积累。欧美已有大量案例报道，所谓「有效率」因定义不同而有差异，宜理性看待。",
          },
          {
            question: "怎样判断有没有帮助？",
            answer:
              "治疗后约两三个月，常在月经第 2–5 天抽血，并结合超声观察基础窦卵泡等；综合 AMH 等激素与影像，从储备与卵子质量相关指标来解读。由主治医判断。",
          },
        ],
      },
      travelBanner: "赴美通常只需一次短程停留，约一至两天可完成相关安排（视诊所排期而定）。",
      disclaimer: "以上仅供了解，不能替代面诊与医嘱；方案与禁忌由主治医决定。",
      cta: {
        title: "想聊聊 PRP 的时间与行程？",
      },
    },
    notFoundPage: {
      title: "页面不存在",
      lead: "您打开的链接可能有误，或页面已更新。",
      homeCta: "回首页",
    },
    privacyPage: {
      metaTitle: "隐私说明",
      title: "隐私与数据",
      intro:
        "SuperouBao 重视您的隐私。以下说明在您浏览本站或与我们联系时，信息大致如何处理。仅供一般了解，不构成法律意见；若您有个人合规需求，请咨询专业人士。",
      sections: [
        {
          heading: "您可能提供给我们的信息",
          body:
            "当您发邮件或提交咨询请求时，通常会收到您主动填写的内容（如姓名、联系方式与情况简述）。网站基础设施也可能记录浏览器类型、大致地区等技术信息。",
        },
        {
          heading: "我们如何使用",
          body:
            "用于回复您、改进服务并保持沟通相关。我们不会出售您的个人信息。邮件或表单等第三方服务会按其条款处理数据——若您使用这些渠道，即表示理解并接受其政策。",
        },
        {
          heading: "您的选择与更新",
          body:
            "若对本说明有疑问，或希望更正我们留存的基本联系信息，欢迎来信询问。本页可能不时更新；如有实质变更，会在此反映。",
        },
      ],
      footnote: "更新日期：2026 年 4 月。疑问请见页脚联系邮箱。",
    },
    seo: {
      brand: "SuperouBao",
      defaultDescription: "生育决策更清晰——数据分析、医生匹配、全程陪伴式协调。",
      routes: {
        home: {
          title: "陪您把生育这条路看清楚",
          description: "以注册护士一线经验为底，协助跨境辅助生殖的规划、匹配与协调，让流程更稳、更安心。",
        },
        services: {
          title: "服务",
          description: "了解咨询、医生匹配、全程协调及适合您的治疗路径。",
        },
        consultation: {
          title: "生育咨询",
          description: "结构化咨询，厘清选项、时机与下一步，临床视角更清楚。",
        },
        providerMatching: {
          title: "医疗资源匹配",
          description: "结合病情、价值观与行程，对齐合适的生育中心与医生。",
        },
        careCoordination: {
          title: "全程协调服务",
          description: "就诊、文件与沟通上的持续协调，让路径少断点、少遗漏。",
        },
        prp: {
          title: "PRP 卵巢再生疗法",
          description: "关于 PRP 用于卵巢再生的教育性介绍：流程、时间与面诊时要问清的问题。",
        },
        about: {
          title: "关于 SuperouBao",
          description: "由深耕美国一线生育中心的 RN 创立的高端咨询团队，连接全球顶尖医疗资源。",
        },
        privacy: {
          title: "隐私说明",
          description: "SuperouBao 如何处理您在使用本站或联系团队时的隐私与数据。",
        },
        notFound: {
          title: "页面不存在",
          description: "SuperouBao 网站上没有此页面。",
        },
      },
    },
  },
};
