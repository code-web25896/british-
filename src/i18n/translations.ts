import { Language } from '../types';

export interface Translations {
  common: {
    brandName: string;
    brandAbbr: string;
    tagline: string;
    supportingMessage: string;
    discoverABAC: string;
    explorePrograms: string;
    learnMore: string;
    viewAll: string;
    contactUs: string;
    inquireNow: string;
    visitAcademy: string;
    externalLinkNotice: string;
    backToHome: string;
    institutionalDisclaimer: string;
    pageNotFound: string;
    pageNotFoundDesc: string;
  };
  nav: {
    home: string;
    about: string;
    missionVision: string;
    standards: string;
    programs: string;
    academie: string;
    gallery: string;
    contact: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    scrollPrompt: string;
    stat1Label: string;
    stat1Value: string;
    stat2Label: string;
    stat2Value: string;
    stat3Label: string;
    stat3Value: string;
  };
  about: {
    kicker: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
  };
  missionVision: {
    kicker: string;
    title: string;
    subtitle: string;
    missionTitle: string;
    missionDesc: string;
    missionSub: string;
    visionTitle: string;
    visionDesc: string;
    visionSub: string;
    coreValuesTitle: string;
    val1Title: string;
    val1Desc: string;
    val2Title: string;
    val2Desc: string;
    val3Title: string;
    val3Desc: string;
    val4Title: string;
    val4Desc: string;
  };
  areas: {
    kicker: string;
    title: string;
    subtitle: string;
    items: {
      beautyEdTitle: string;
      beautyEdDesc: string;
      aestheticsTitle: string;
      aestheticsDesc: string;
      cosmetologyTitle: string;
      cosmetologyDesc: string;
      qualityTitle: string;
      qualityDesc: string;
      curriculumTitle: string;
      curriculumDesc: string;
      certProgramsTitle: string;
      certProgramsDesc: string;
    };
  };
  standards: {
    kicker: string;
    title: string;
    subtitle: string;
    intro: string;
    p1Title: string;
    p1Deck: string;
    p1Pt1: string;
    p1Pt2: string;
    p2Title: string;
    p2Deck: string;
    p2Pt1: string;
    p2Pt2: string;
    p3Title: string;
    p3Deck: string;
    p3Pt1: string;
    p3Pt2: string;
    p4Title: string;
    p4Deck: string;
    p4Pt1: string;
    p4Pt2: string;
    p5Title: string;
    p5Deck: string;
    p5Pt1: string;
    p5Pt2: string;
  };
  academie: {
    badge: string;
    title: string;
    tagline: string;
    p1: string;
    p2: string;
    highlight1Title: string;
    highlight1Desc: string;
    highlight2Title: string;
    highlight2Desc: string;
    highlight3Title: string;
    highlight3Desc: string;
    visitCta: string;
    noteTitle: string;
    noteText: string;
  };
  programs: {
    kicker: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterAesthetics: string;
    filterCosmetology: string;
    filterInstitutional: string;
    prog1Title: string;
    prog1Sub: string;
    prog1Desc: string;
    prog1Duration: string;
    prog1Level: string;
    prog2Title: string;
    prog2Sub: string;
    prog2Desc: string;
    prog2Duration: string;
    prog2Level: string;
    prog3Title: string;
    prog3Sub: string;
    prog3Desc: string;
    prog3Duration: string;
    prog3Level: string;
    prog4Title: string;
    prog4Sub: string;
    prog4Desc: string;
    prog4Duration: string;
    prog4Level: string;
    prog5Title: string;
    prog5Sub: string;
    prog5Desc: string;
    prog5Duration: string;
    prog5Level: string;
    topicsLabel: string;
  };
  whyChoose: {
    kicker: string;
    title: string;
    subtitle: string;
    point1Title: string;
    point1Desc: string;
    point2Title: string;
    point2Desc: string;
    point3Title: string;
    point3Desc: string;
    point4Title: string;
    point4Desc: string;
    point5Title: string;
    point5Desc: string;
  };
  gallery: {
    kicker: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterWorkshops: string;
    filterAesthetics: string;
    filterCosmetology: string;
    filterEvents: string;
    item1Title: string;
    item1Loc: string;
    item2Title: string;
    item2Loc: string;
    item3Title: string;
    item3Loc: string;
    item4Title: string;
    item4Loc: string;
    item5Title: string;
    item5Loc: string;
  };
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    infoTitle: string;
    infoSubtitle: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    addressLabel: string;
    addressPlaceholder: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailInputLabel: string;
    emailInputPlaceholder: string;
    phoneInputLabel: string;
    phoneInputPlaceholder: string;
    countryLabel: string;
    countryPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    successMessage: string;
    errorMessage: string;
    requiredNotice: string;
    privacyNotice: string;
  };
  footer: {
    aboutText: string;
    quickLinks: string;
    institutionalPages: string;
    communication: string;
    rights: string;
    disclaimerTitle: string;
    disclaimerBody: string;
    top: string;
  };
  pricing: {
    kicker: string;
    title: string;
    subtitle: string;
    currencyNotice: string;
    filterAll: string;
    filterFacial: string;
    filterAntiaging: string;
    filterPack: string;
    featuresIncluded: string;
    bookEnroll: string;
    officialAcademyNotice: string;
    guaranteeModels: string;
    guaranteeCert: string;
    guaranteeMentorship: string;
    seatsLimited: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    common: {
      brandName: "British Board of Aesthetics and Cosmetology",
      brandAbbr: "British Board",
      tagline: "Excellence in Beauty Education. Standards for the Future.",
      supportingMessage: "Empowering Beauty Professionals Through Education, Quality and International Standards.",
      discoverABAC: "Discover British Board",
      explorePrograms: "Explore Our Programs",
      learnMore: "Learn More",
      viewAll: "View All",
      contactUs: "Contact Us",
      inquireNow: "Inquire Now",
      visitAcademy: "Visit L’Académie Internationale de Beauté",
      externalLinkNotice: "Opens official portal of L’Académie Internationale de Beauté (Paris · Tunis)",
      backToHome: "Return to Home",
      institutionalDisclaimer: "The British Board of Aesthetics and Cosmetology provides international curriculum benchmarking, training audits, and educational standards in partnership with L’Académie Internationale de Beauté (Paris & Tunis).",
      pageNotFound: "Page Not Found",
      pageNotFoundDesc: "The requested institutional record or page is not available."
    },
    nav: {
      home: "Home",
      about: "About British Board",
      missionVision: "Mission & Vision",
      standards: "Educational Standards",
      programs: "Programs",
      academie: "L’Académie (Paris · Tunis)",
      gallery: "Gallery",
      contact: "Contact"
    },
    hero: {
      badge: "British Institutional Board · London · Paris · Tunis",
      headline: "Shaping the Future of Aesthetics & Cosmetology",
      subheadline: "Advancing international beauty education through rigorous British standards, professional development, and strategic partnership with L’Académie Internationale de Beauté.",
      scrollPrompt: "Explore Standards & Programs",
      stat1Label: "Curriculum Domains",
      stat1Value: "6+",
      stat2Label: "Partner Campuses",
      stat2Value: "Paris · Tunis",
      stat3Label: "British Standards",
      stat3Value: "100%"
    },
    about: {
      kicker: "Institutional Overview",
      title: "About the British Board of Aesthetics and Cosmetology",
      p1: "The British Board of Aesthetics and Cosmetology (British Board / BBAC) is an international educational authority dedicated to elevating instructional quality, curriculum benchmarking, and professional standards in beauty, aesthetics, and cosmetology.",
      p2: "Working in close strategic synergy with L’Académie Internationale de Beauté across its European and Mediterranean centers in Paris and Tunis, the British Board establishes rigorous competency criteria for aspiring professionals and vocational academies.",
      p3: "Through continuous pedagogical evaluation, the British Board ensures that aesthetic therapists, master cosmetologists, and beauty educators deliver client safety, dermal science mastery, and artistic distinction.",
      pillar1Title: "British Pedagogical Rigor",
      pillar1Desc: "Evidence-based curriculum structures and standardized learning outcomes aligned with premier international benchmarks.",
      pillar2Title: "Paris & Tunis Partner Hubs",
      pillar2Desc: "Hands-on atelier training and clinical masterclasses delivered through L'Académie Internationale de Beauté.",
      pillar3Title: "Global Certification Standards",
      pillar3Desc: "Facilitating multinational recognition and educational excellence across the UK, Europe, and North Africa."
    },
    missionVision: {
      kicker: "Guiding Principles",
      title: "Our Mission & Vision",
      subtitle: "Fostering an international ecosystem uniting London, Paris, and Tunis where beauty education is synonymous with science, artistry, and ethical standard-setting.",
      missionTitle: "Our Mission",
      missionDesc: "Promoting quality education, professional development, and excellence in aesthetics and cosmetology through robust curriculum guidelines, continuous training assessment, and international synergy with L'Académie Internationale de Beauté.",
      missionSub: "Empowering educators and practitioners with progressive educational resources and reliable quality benchmarks across the UK, Europe, and the Mediterranean.",
      visionTitle: "Our Vision",
      visionDesc: "Supporting a professional beauty education ecosystem built on knowledge, innovation, and internationally oriented standards that elevate the standing of aesthetics professionals globally.",
      visionSub: "A future where every beauty professional is anchored in safety, scientific precision, and artistic distinction.",
      coreValuesTitle: "Institutional Core Values",
      val1Title: "Educational Rigor",
      val1Desc: "Uncompromising devotion to structured learning, scientific foundations, and verified practical competency.",
      val2Title: "Continuous Evolution",
      val2Desc: "Adapting educational criteria as modern skincare technologies and cosmetology techniques advance.",
      val3Title: "Institutional Transparency",
      val3Desc: "Providing clear, verified educational criteria without overstated claims or ungrounded credentials.",
      val4Title: "Collaborative Synergy",
      val4Desc: "Working collaboratively with distinguished beauty schools, educators, and global training centers including L'Académie Internationale de Beauté (Paris & Tunis)."
    },
    areas: {
      kicker: "Core Competencies",
      title: "Areas of Excellence",
      subtitle: "Six fundamental areas through which the British Board champions educational rigor and institutional quality.",
      items: {
        beautyEdTitle: "Beauty Education",
        beautyEdDesc: "Comprehensive educational frameworks integrating fundamental dermal biology, aesthetic theory, and hands-on laboratory application in partnership with L’Académie Internationale de Beauté.",
        aestheticsTitle: "Aesthetics & Skincare",
        aestheticsDesc: "In-depth training guidelines for advanced non-invasive facial treatments, skin analysis protocols, and clinical hygiene.",
        cosmetologyTitle: "Professional Cosmetology",
        cosmetologyDesc: "Modern curricula spanning hair architecture, trichology, color science, and comprehensive styling methodologies.",
        qualityTitle: "Training Quality Assessment",
        qualityDesc: "Structured evaluation tools helping training academies benchmark instructor performance and student learning outcomes.",
        curriculumTitle: "Curriculum Development",
        curriculumDesc: "Collaborative design of modular instructional modules reflecting current industry innovations and safety requirements.",
        certProgramsTitle: "Professional Certification Programs",
        certProgramsDesc: "Structured educational completion pathways honoring rigorous coursework, theory assessment, and practical evaluation."
      }
    },
    standards: {
      kicker: "Institutional Quality Framework",
      title: "Educational Standards",
      subtitle: "The Five Pillars of the British Board's educational philosophy, designed to inspire institutional elevation.",
      intro: "The British Board articulates rigorous yet practical guidelines that allow beauty and cosmetology schools to evaluate, refine, and elevate their instructional offerings.",
      p1Title: "1. Educational Quality",
      p1Deck: "Ensuring instructional environments meet high pedagogical benchmarks.",
      p1Pt1: "Faculty qualification benchmarks emphasizing documented pedagogical competence and practical beauty industry experience.",
      p1Pt2: "Standardized learning outcome assessments ensuring students transition into professional practice with demonstrable technical skills.",
      p2Title: "2. Training Evaluation",
      p2Deck: "Continuous, objective appraisal of educational methodologies.",
      p2Pt1: "Periodic peer reviews and curriculum audit mechanisms to identify opportunities for instructional refinement.",
      p2Pt2: "Laboratory safety, sanitation compliance, and modern ergonomic standards within training facilities.",
      p3Title: "3. Curriculum Standards",
      p3Deck: "Harmonizing foundational theory with clinical practical training.",
      p3Pt1: "Rigorous inclusion of dermatological science, cosmetic chemistry, and contraindication identification.",
      p3Pt2: "Modular coursework structured to support foundational, intermediate, and advanced masterclass levels.",
      p4Title: "4. Professional Development",
      p4Deck: "Sustaining lifelong learning for beauty educators and practitioners.",
      p4Pt1: "Continuing education modules covering evolving aesthetics technology, formulation trends, and salon leadership.",
      p4Pt2: "Masterclasses and symposia in London, Paris, and Tunis bringing together international educators to share specialized techniques.",
      p5Title: "5. Institutional Improvement",
      p5Deck: "Systematic advancement of beauty academies and vocational centers.",
      p5Pt1: "Advisory frameworks assisting academies in optimizing physical lab spaces and digital learning tools.",
      p5Pt2: "Commitment to ethical marketing, transparent student disclosures, and verified institutional practices."
    },
    academie: {
      badge: "Premier Strategic Partner · Paris & Tunis",
      title: "L’Académie Internationale de Beauté",
      tagline: "High-End Beauty Education & Masterclass Training Hub in Paris and Tunis",
      p1: "L’Académie Internationale de Beauté is the premier international beauty education institution in strategic partnership with the British Board of Aesthetics and Cosmetology. Renowned for its Parisian elegance and regional excellence in Tunis, the Academy cultivates the next generation of aesthetic and cosmetology visionaries.",
      p2: "With prestigious training ateliers located in Paris (France) and Tunis (Tunisia), students immerse themselves in state-of-the-art facilities guided by master cosmetologists and dermal educators who bridge European luxury with cutting-edge skincare protocols.",
      highlight1Title: "Paris Atelier & Parisian Heritage",
      highlight1Desc: "Flagship European masterclasses in haute coiffure, advanced dermal therapies, and luxury editorial makeup artistry.",
      highlight2Title: "Tunis Campus & Mediterranean Hub",
      highlight2Desc: "Strategic regional training center for North Africa and the Mediterranean, delivering British Board curriculum standards.",
      highlight3Title: "International Community & Network",
      highlight3Desc: "A vibrant cross-border cohort of professionals benefiting from international study exchanges and joint certifications.",
      visitCta: "Visit L’Académie Internationale de Beauté",
      noteTitle: "Strategic Academic Partnership",
      noteText: "L'Académie Internationale de Beauté operates as the primary international training partner of the British Board, implementing our verified educational standards across its Paris and Tunis ateliers."
    },
    programs: {
      kicker: "Curricular Offerings",
      title: "Programs & Professional Development",
      subtitle: "Modular educational tracks structured for aesthetics educators, practicing professionals, and academy students.",
      filterAll: "All Programs",
      filterAesthetics: "Aesthetics & Skincare",
      filterCosmetology: "Cosmetology",
      filterInstitutional: "Institutional Training",
      prog1Title: "Advanced Aesthetics & Clinical Skincare",
      prog1Sub: "Foundations of Dermal Analysis & Non-Invasive Procedures (Paris · Tunis)",
      prog1Desc: "An intensive curriculum co-developed with L'Académie Internationale de Beauté, emphasizing skin histology, diagnostic dermal evaluation, chemical exfoliation protocols, and barrier repair.",
      prog1Duration: "12 Weeks (Full/Part-Time)",
      prog1Level: "Intermediate to Advanced",
      prog2Title: "Professional Cosmetology & Hair Artistry",
      prog2Sub: "Architecture, Colorimetry & Creative Styling",
      prog2Desc: "Mastery of hair structure, color formulating chemistry, precision cutting methodologies, and scalp health maintenance.",
      prog2Duration: "16 Weeks",
      prog2Level: "Foundational & Advanced",
      prog3Title: "Facial Therapeutics & Dermal Technology",
      prog3Sub: "Modern Non-Invasive Equipment & Device Protocols",
      prog3Desc: "Comprehensive study of microcurrent, ultrasound, hydradermabrasion, and LED phototherapy within British Board guidelines.",
      prog3Duration: "8 Weeks",
      prog3Level: "Advanced Practice",
      prog4Title: "Beauty Educator Professional Development",
      prog4Sub: "Instructional Design & Practicum Mentorship (London, Paris, Tunis)",
      prog4Desc: "Tailored for beauty school instructors seeking to refine classroom presentation, student assessment rubrics, and clinical demonstrations.",
      prog4Duration: "6 Weeks",
      prog4Level: "Educator Level",
      prog5Title: "Institutional Curriculum Alignment",
      prog5Sub: "Academy Benchmarking & Program Enhancement",
      prog5Desc: "A consultative training framework for vocational academies seeking to upgrade curriculum standards and lab safety procedures to British Board criteria.",
      prog5Duration: "Customizable Semesters",
      prog5Level: "Institutional Directors",
      topicsLabel: "Key Curriculum Topics"
    },
    whyChoose: {
      kicker: "Institutional Distinctions",
      title: "Why Choose the British Board?",
      subtitle: "A steadfast commitment to educational integrity, scientific grounding, and elevated international beauty benchmarks across London, Paris, and Tunis.",
      point1Title: "Commitment to Educational Quality",
      point1Desc: "Uncompromising standards ensuring training programs deliver verifiable technical knowledge and client safety mastery.",
      point2Title: "Strategic Paris & Tunis Partnership",
      point2Desc: "Direct integration with L'Académie Internationale de Beauté providing students world-class practical ateliers and masterclasses.",
      point3Title: "Modern Educational Approach",
      point3Desc: "A balanced synthesis of classical aesthetics traditions and forward-looking, evidence-supported cosmetic science.",
      point4Title: "International Outlook (UK, France, Tunisia)",
      point4Desc: "Global perspective bridging aesthetic philosophies from London, Paris, Tunis, and international beauty capitals.",
      point5Title: "Focus on Excellence",
      point5Desc: "A clear focus on institutional elevation, ethical practice, and genuine educational achievement."
    },
    gallery: {
      kicker: "Visual Documentation",
      title: "Institutional Gallery",
      subtitle: "Capturing moments of rigorous beauty education, practical workshops, and academic symposia across Paris, Tunis, and London.",
      filterAll: "All Photographs",
      filterWorkshops: "Workshops",
      filterAesthetics: "Aesthetics Practice",
      filterCosmetology: "Cosmetology",
      filterEvents: "Educational Events",
      item1Title: "Clinical Skincare Workshop & Dermal Analysis",
      item1Loc: "Aesthetic Education Lab",
      item2Title: "Cosmetology Hair Artistry & Trichology Training",
      item2Loc: "Styling Atelier",
      item3Title: "L’Académie Internationale Atelier Session (Paris · Tunis)",
      item3Loc: "Paris & Tunis Training Studios",
      item4Title: "International Aesthetics Symposium & Lecture",
      item4Loc: "Symposium Hall",
      item5Title: "Comprehensive Beauty Education Lab Demonstration",
      item5Loc: "Master Training Center"
    },
    contact: {
      kicker: "Inquiries & Institutional Dialogue",
      title: "Connect with the British Board",
      subtitle: "We welcome communications from beauty academies, educators, and professionals seeking information regarding our educational frameworks and partnership with L'Académie Internationale de Beauté.",
      infoTitle: "Official Institutional Contacts",
      infoSubtitle: "Official communication channels for curriculum evaluation, training audits, and enrollment.",
      emailLabel: "Official Inquiries Email",
      emailPlaceholder: "contact@lacademie-internationale.com",
      phoneLabel: "Official Direct Line & WhatsApp",
      phonePlaceholder: "+44 7497 275861",
      addressLabel: "Headquarters & Partner Campuses",
      addressPlaceholder: "London (UK) · Partner Hubs: Paris & Tunis",
      formTitle: "Submit an Institutional Inquiry",
      nameLabel: "Full Name",
      namePlaceholder: "e.g., Director Sarah Jenkins or Dr. Elena Vance",
      emailInputLabel: "Institutional or Professional Email",
      emailInputPlaceholder: "e.g., director@academy.org",
      phoneInputLabel: "Telephone Number",
      phoneInputPlaceholder: "+44 7497 275861",
      countryLabel: "Country / Jurisdiction (UK, France, Tunisia, etc.)",
      countryPlaceholder: "e.g., United Kingdom, France, Tunisia, UAE...",
      subjectLabel: "Inquiry Topic",
      subjectPlaceholder: "Select or type inquiry subject...",
      messageLabel: "Detailed Message",
      messagePlaceholder: "Please describe your institution, program inquiry, or educational question...",
      submitBtn: "Send Message to British Board",
      submittingBtn: "Transmitting...",
      successMessage: "Thank you for reaching out to the British Board of Aesthetics and Cosmetology. Your inquiry has been documented, and our administrative coordinator will respond promptly via official correspondence.",
      errorMessage: "Please check that all required fields are accurately completed.",
      requiredNotice: "Fields marked with an asterisk are required for proper routing.",
      privacyNotice: "Inquiries are handled in accordance with strict institutional confidentiality."
    },
    footer: {
      aboutText: "The British Board of Aesthetics and Cosmetology champions excellence in beauty education through rigorous curriculum standards, training assessment, and strategic partnership with L’Académie Internationale de Beauté across Paris and Tunis.",
      quickLinks: "Navigation",
      institutionalPages: "Institutional Documents",
      communication: "Contact & Information",
      rights: "All rights reserved. British Board of Aesthetics and Cosmetology.",
      disclaimerTitle: "Institutional Statement",
      disclaimerBody: "The British Board operates as an independent educational board focused on curriculum benchmarking, training audits, and instructional development. In strategic alliance with L'Académie Internationale de Beauté (Paris · Tunis).",
      top: "Back to Top"
    },
    pricing: {
      kicker: "Official Board Services & Certification Schedule",
      title: "American Board Certification Programs & Fee Schedule",
      subtitle: "Official credentialing, board examination fees, and institutional accreditations evaluated under the American Board of Aesthetics and Cosmetology (ABAC) international standards.",
      currencyNotice: "Official certification fees presented in US Dollars ($ USD) with converted Euro (€ EUR) equivalents.",
      filterAll: "All Board Services",
      filterFacial: "Clinical Aesthetics",
      filterAntiaging: "Cosmetology & Master",
      filterPack: "Comprehensive Packs",
      featuresIncluded: "Included in Your Board Credential Package:",
      bookEnroll: "Apply for Board Credential",
      officialAcademyNotice: "Candidate practical evaluation and preparation pathways are coordinated in collaboration with accredited hubs including L’Académie Internationale de Beauté in Paris & Tunis.",
      guaranteeModels: "Rigorous Practical Clinical & Portfolio Evaluation",
      guaranteeCert: "Official Embossed Board Diploma & International Registry ID",
      guaranteeMentorship: "Independent Verification & International Credibility",
      seatsLimited: "Candidate Examination Windows"
    }
  },
};
