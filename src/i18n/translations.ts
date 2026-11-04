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
      brandName: "The British Board",
      brandAbbr: "The British Board",
      tagline: "Education & Training Accreditation Organization",
      supportingMessage: "Empowering education, training, and accredited institutions through international quality standards.",
      discoverABAC: "Discover The British Board",
      explorePrograms: "Explore Accreditation Standards",
      learnMore: "Learn More",
      viewAll: "View All",
      contactUs: "Contact Us",
      inquireNow: "Apply for Accreditation",
      visitAcademy: "Visit Partner Training Centers",
      externalLinkNotice: "Opens official partner portal (France & Africa)",
      backToHome: "Return to Home",
      institutionalDisclaimer: "The British Board provides international curriculum benchmarking, training audits, and educational standards in partnership with accredited centers across France and Africa.",
      pageNotFound: "Page Not Found",
      pageNotFoundDesc: "The requested institutional record or page is not available."
    },
    nav: {
      home: "Home",
      about: "About The Board",
      missionVision: "Mission & Vision",
      standards: "Accreditation Standards",
      programs: "Programs",
      academie: "The Academy (France & Africa)",
      gallery: "Gallery",
      contact: "Contact Us"
    },
    hero: {
      badge: "The British Board · Recognized UK Accreditation Body",
      headline: "The British Board - Education & Training Accreditation Organization",
      subheadline: "Advancing global education, aesthetics, and vocational training through rigorous British standards and strategic partnerships across the UK, France, and Africa.",
      scrollPrompt: "Explore Standards & Registry",
      stat1Label: "Curriculum Domains",
      stat1Value: "6+",
      stat2Label: "Accredited Centers",
      stat2Value: "France · Africa",
      stat3Label: "British Standards",
      stat3Value: "100%"
    },
    about: {
      kicker: "Institutional Overview",
      title: "About The British Board",
      p1: "The British Board for Education and Training is a leading UK-based accreditation organization. We establish global educational criteria, evaluate curriculums, and certify professional standards in aesthetics, cosmetology, and advanced disciplines.",
      p2: "Working in close strategic synergy with accredited academies across France and Africa, The British Board establishes rigorous competency criteria for aspiring professionals and vocational institutions.",
      p3: "Through continuous pedagogical evaluation, The British Board ensures that training centers deliver client safety, modern scientific mastery, and international distinction.",
      pillar1Title: "British Pedagogical Rigor",
      pillar1Desc: "Evidence-based curriculum structures and standardized learning outcomes aligned with premier UK benchmarks.",
      pillar2Title: "France & Africa Accredited Hubs",
      pillar2Desc: "Hands-on atelier training and clinical masterclasses delivered through certified partner centers.",
      pillar3Title: "Global Certification Registry",
      pillar3Desc: "Facilitating multinational recognition, verified credential attestations, and institutional excellence."
    },
    missionVision: {
      kicker: "Guiding Principles",
      title: "Our Mission & Vision",
      subtitle: "Fostering an international ecosystem uniting London, France, and Africa where education and training accreditation is synonymous with quality, rigor, and ethical standards.",
      missionTitle: "Our Mission",
      missionDesc: "Promoting high-quality education, professional development, and excellence through robust curriculum guidelines, continuous training audits, and strategic international synergy across France and Africa.",
      missionSub: "Empowering educators, academies, and practitioners with progressive educational benchmarks and reliable quality assurance.",
      visionTitle: "Our Vision",
      visionDesc: "Supporting a global educational ecosystem built on innovation, recognized qualifications, and internationally validated standards that elevate the standing of accredited professionals.",
      visionSub: "A future where every accredited program is anchored in safety, scientific precision, and recognized excellence.",
      coreValuesTitle: "Institutional Core Values",
      val1Title: "Educational Rigor",
      val1Desc: "Uncompromising devotion to structured learning, scientific foundations, and verified practical competency.",
      val2Title: "Continuous Evolution",
      val2Desc: "Adapting educational criteria as modern technologies, aesthetics protocols, and vocational techniques advance.",
      val3Title: "Institutional Transparency",
      val3Desc: "Providing clear, verified educational criteria without overstated claims or ungrounded credentials.",
      val4Title: "Collaborative Synergy",
      val4Desc: "Working collaboratively with distinguished vocational centers, educators, and global training academies across France and Africa."
    },
    areas: {
      kicker: "Core Competencies",
      title: "Areas of Excellence",
      subtitle: "Six fundamental areas through which The British Board champions educational rigor and institutional quality.",
      items: {
        beautyEdTitle: "Education & Training Accreditation",
        beautyEdDesc: "Comprehensive educational frameworks integrating fundamental science, theoretical mastery, and hands-on laboratory application in partnership with certified centers.",
        aestheticsTitle: "Aesthetics & Clinical Skincare",
        aestheticsDesc: "In-depth training guidelines for advanced non-invasive facial treatments, skin analysis protocols, and clinical hygiene.",
        cosmetologyTitle: "Professional Cosmetology & Styling",
        cosmetologyDesc: "Modern curricula spanning hair architecture, trichology, color science, and comprehensive styling methodologies.",
        qualityTitle: "Training Quality Assessment",
        qualityDesc: "Structured evaluation tools helping training academies benchmark instructor performance and student learning outcomes.",
        curriculumTitle: "Curriculum Development",
        curriculumDesc: "Collaborative design of modular instructional modules reflecting current industry innovations and safety requirements.",
        certProgramsTitle: "Professional Certification & Registry",
        certProgramsDesc: "Structured educational completion pathways honoring rigorous coursework, theory assessment, and practical evaluation."
      }
    },
    standards: {
      kicker: "Institutional Quality Framework",
      title: "Accreditation Standards",
      subtitle: "The Five Pillars of The British Board's educational philosophy, designed to inspire institutional elevation.",
      intro: "The British Board articulates rigorous yet practical guidelines that allow educational and vocational schools to evaluate, refine, and elevate their instructional offerings.",
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
      p4Pt1: "Continuing education modules covering evolving aesthetics technology, formulation trends, and leadership.",
      p4Pt2: "Masterclasses and symposia in London, France, and Africa bringing together international educators to share specialized techniques.",
      p5Title: "5. Institutional Improvement",
      p5Deck: "Systematic advancement of beauty academies and vocational centers.",
      p5Pt1: "Advisory frameworks assisting academies in optimizing physical lab spaces and digital learning tools.",
      p5Pt2: "Commitment to ethical marketing, transparent student disclosures, and verified institutional practices."
    },
    academie: {
      badge: "Premier Strategic Partner · France & Africa",
      title: "The International Academy of Beauty",
      tagline: "High-End Beauty Education & Training Network in France and Africa",
      p1: "The International Academy of Beauty operates as the premier training partner in strategic alliance with The British Board. Renowned for its French pedagogical elegance and regional prominence across Africa, the Academy cultivates the next generation of aesthetic and cosmetology visionaries.",
      p2: "With prestigious training ateliers located in France and Africa, students immerse themselves in state-of-the-art facilities guided by master cosmetologists and educators who bridge European luxury with cutting-edge skincare protocols.",
      highlight1Title: "France Training Center",
      highlight1Desc: "Flagship European masterclasses in haute coiffure, advanced dermal therapies, and luxury editorial makeup artistry.",
      highlight2Title: "Africa Regional Hub",
      highlight2Desc: "Strategic regional training center for Africa and the Mediterranean, delivering British Board curriculum standards.",
      highlight3Title: "International Community & Network",
      highlight3Desc: "A vibrant cross-border cohort of professionals benefiting from international study exchanges and joint certifications.",
      visitCta: "Visit The International Academy of Beauty",
      noteTitle: "Strategic Academic Partnership",
      noteText: "The International Academy of Beauty operates as the primary international training partner of The British Board, implementing our verified educational standards across its France and Africa ateliers."
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
      prog1Sub: "Foundations of Dermal Analysis & Non-Invasive Procedures (France · Africa)",
      prog1Desc: "An intensive curriculum co-developed with partner academies, emphasizing skin histology, diagnostic dermal evaluation, chemical exfoliation protocols, and barrier repair.",
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
      prog4Sub: "Instructional Design & Practicum Mentorship (London, France, Africa)",
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
      title: "Why Choose The British Board?",
      subtitle: "A steadfast commitment to educational integrity, scientific grounding, and elevated international beauty benchmarks across London, France, and Africa.",
      point1Title: "Commitment to Educational Quality",
      point1Desc: "Uncompromising standards ensuring training programs deliver verifiable technical knowledge and client safety mastery.",
      point2Title: "Strategic France & Africa Partnership",
      point2Desc: "Direct integration with accredited partner academies providing students world-class practical ateliers and masterclasses.",
      point3Title: "Modern Educational Approach",
      point3Desc: "A balanced synthesis of classical aesthetics traditions and forward-looking, evidence-supported cosmetic science.",
      point4Title: "International Outlook (UK, France, Africa)",
      point4Desc: "Global perspective bridging aesthetic philosophies from London, France, Africa, and international beauty capitals.",
      point5Title: "Focus on Excellence",
      point5Desc: "A clear focus on institutional elevation, ethical practice, and genuine educational achievement."
    },
    gallery: {
      kicker: "Visual Documentation",
      title: "Institutional Gallery",
      subtitle: "Capturing moments of rigorous beauty education, practical workshops, and academic symposia across France, Africa, and London.",
      filterAll: "All Photographs",
      filterWorkshops: "Workshops",
      filterAesthetics: "Aesthetics Practice",
      filterCosmetology: "Cosmetology",
      filterEvents: "Educational Events",
      item1Title: "Clinical Skincare Workshop & Dermal Analysis",
      item1Loc: "Aesthetic Education Lab",
      item2Title: "Cosmetology Hair Artistry & Trichology Training",
      item2Loc: "Styling Atelier",
      item3Title: "Atelier Training Session (France · Africa)",
      item3Loc: "France & Africa Training Studios",
      item4Title: "International Aesthetics Symposium & Lecture",
      item4Loc: "Symposium Hall",
      item5Title: "Comprehensive Beauty Education Lab Demonstration",
      item5Loc: "Master Training Center"
    },
    contact: {
      kicker: "Inquiries & Institutional Dialogue",
      title: "Connect with The British Board",
      subtitle: "We welcome communications from academies, educators, and professionals seeking information regarding our accreditation frameworks and institutional partnerships.",
      infoTitle: "Official Institutional Contacts",
      infoSubtitle: "Official communication channels for curriculum evaluation, training audits, and accreditation.",
      emailLabel: "Official Inquiries Email",
      emailPlaceholder: "contact@britishboardofbeauty.com",
      phoneLabel: "Official Direct Line & WhatsApp",
      phonePlaceholder: "+44 7497 275861",
      addressLabel: "Headquarters & Accredited Centers",
      addressPlaceholder: "London (UK) · Accredited Centers: France & Africa",
      formTitle: "Submit an Institutional Inquiry",
      nameLabel: "Full Name",
      namePlaceholder: "e.g., Director Sarah Jenkins or Dr. Elena Vance",
      emailInputLabel: "Institutional or Professional Email",
      emailInputPlaceholder: "e.g., director@academy.org",
      phoneInputLabel: "Telephone Number",
      phoneInputPlaceholder: "+44 7497 275861",
      countryLabel: "Country / Jurisdiction (UK, France, Africa, etc.)",
      countryPlaceholder: "e.g., United Kingdom, France, UAE, Nigeria, South Africa...",
      subjectLabel: "Inquiry Topic",
      subjectPlaceholder: "Select or type inquiry subject...",
      messageLabel: "Detailed Message",
      messagePlaceholder: "Please describe your institution, program inquiry, or educational question...",
      submitBtn: "Send Message to The British Board",
      submittingBtn: "Transmitting...",
      successMessage: "Thank you for reaching out to The British Board. Your inquiry has been documented, and our administrative coordinator will respond promptly via official correspondence.",
      errorMessage: "Please check that all required fields are accurately completed.",
      requiredNotice: "Fields marked with an asterisk are required for proper routing.",
      privacyNotice: "Inquiries are handled in accordance with strict institutional confidentiality."
    },
    footer: {
      aboutText: "The British Board champions excellence in education and vocational training through rigorous curriculum standards, accreditation assessment, and strategic partnerships across France and Africa.",
      quickLinks: "Navigation",
      institutionalPages: "Institutional Documents",
      communication: "Contact & Information",
      rights: "All rights reserved. The British Board.",
      disclaimerTitle: "Institutional Statement",
      disclaimerBody: "The British Board operates as an independent educational accreditation body focused on curriculum benchmarking, training audits, and instructional development. In strategic alliance with partner academies across France and Africa.",
      top: "Back to Top"
    },
    pricing: {
      kicker: "Official Board Services & Certification Schedule",
      title: "Board Certification Programs & Fee Schedule",
      subtitle: "Official credentialing, board examination fees, and institutional accreditations evaluated under The British Board international standards.",
      currencyNotice: "Official certification fees presented in US Dollars ($ USD) with converted Euro (€ EUR) equivalents.",
      filterAll: "All Board Services",
      filterFacial: "Clinical Aesthetics",
      filterAntiaging: "Cosmetology & Master",
      filterPack: "Comprehensive Packs",
      featuresIncluded: "Included in Your Board Credential Package:",
      bookEnroll: "Apply for Board Credential",
      officialAcademyNotice: "Candidate practical evaluation and preparation pathways are coordinated in collaboration with accredited centers across France & Africa.",
      guaranteeModels: "Rigorous Practical Clinical & Portfolio Evaluation",
      guaranteeCert: "Official Embossed Board Diploma & International Registry ID",
      guaranteeMentorship: "Independent Verification & International Credibility",
      seatsLimited: "Candidate Examination Windows"
    }
  },
};
