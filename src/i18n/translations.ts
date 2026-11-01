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

  fr: {
    common: {
      brandName: "British Board of Aesthetics and Cosmetology",
      brandAbbr: "British Board",
      tagline: "L'Excellence dans l'Enseignement de la Beauté. Les Normes de l'Avenir.",
      supportingMessage: "Valoriser les Professionnels de la Beauté par l'Éducation, la Qualité et les Normes Internationales.",
      discoverABAC: "Découvrir le British Board",
      explorePrograms: "Explorer Nos Formations",
      learnMore: "En Savoir Plus",
      viewAll: "Tout Afficher",
      contactUs: "Nous Contacter",
      inquireNow: "Faire une Demande",
      visitAcademy: "Visiter L’Académie Internationale de Beauté",
      externalLinkNotice: "Ouvre le portail officiel de L’Académie Internationale de Beauté (Paris · Tunis)",
      backToHome: "Retour à l'Accueil",
      institutionalDisclaimer: "Le British Board of Aesthetics and Cosmetology propose des cadres d'évaluation pédagogique et des normes de certification en partenariat stratégique avec L’Académie Internationale de Beauté (Paris & Tunis).",
      pageNotFound: "Page Non Trouvée",
      pageNotFoundDesc: "La page ou le document institutionnel demandé n'est pas disponible."
    },
    nav: {
      home: "Accueil",
      about: "À Propos du British Board",
      missionVision: "Mission & Vision",
      standards: "Normes Pédagogiques",
      programs: "Formations",
      academie: "L’Académie (Paris · Tunis)",
      gallery: "Galerie",
      contact: "Contact"
    },
    hero: {
      badge: "Conseil Institutionnel Britannique · Londres · Paris · Tunis",
      headline: "Façonner l'Avenir de l'Esthétique & de la Cosmétologie",
      subheadline: "Faire progresser l'enseignement de la beauté grâce aux normes d'excellence britanniques et au partenariat stratégique avec L'Académie Internationale de Beauté (Paris & Tunis).",
      scrollPrompt: "Découvrir les Normes & Formations",
      stat1Label: "Domaines Pédagogiques",
      stat1Value: "6+",
      stat2Label: "Centres Partenaires",
      stat2Value: "Paris · Tunis",
      stat3Label: "Normes Britanniques",
      stat3Value: "100%"
    },
    about: {
      kicker: "Présentation Institutionnelle",
      title: "À Propos du British Board of Aesthetics and Cosmetology",
      p1: "Le British Board of Aesthetics and Cosmetology (British Board / BBAC) est une autorité éducative internationale dédiée à l'élévation des critères d'enseignement, à l'étalonnage des maquettes pédagogiques et au perfectionnement professionnel en esthétique, dermo-cosmétique et art capillaire.",
      p2: "En étroite collaboration avec L’Académie Internationale de Beauté à travers ses centres de référence à Paris (France) et Tunis (Tunisie), le British Board établit des standards d'exigence et de compétences pratiques reconnus par les plus grandes maisons de beauté.",
      p3: "Par une évaluation continue des méthodes dispensées, le British Board veille à ce que les praticiens et formateurs certifiés garantissent une sécurité irréprochable des soins, une haute maîtrise scientifique et un sens artistique d'élite.",
      pillar1Title: "Excellence & Rigueur Britannique",
      pillar1Desc: "Programmes structurés, curricula normalisés et compétences pratiques validées selon les meilleures normes internationales.",
      pillar2Title: "Pôles Partenaires : Paris & Tunis",
      pillar2Desc: "Formation d'atelier immersive et masterclasses d'exception assurées au sein de L’Académie Internationale de Beauté.",
      pillar3Title: "Certification & Reconnaissance",
      pillar3Desc: "Faciliter l'accès aux carrières internationales d'élite entre le Royaume-Uni, l'Europe et la Méditerranée."
    },
    missionVision: {
      kicker: "Principes Directeurs",
      title: "Notre Mission & Vision",
      subtitle: "Bâtir un écosystème international unissant Londres, Paris et Tunis où l'enseignement de la beauté rime avec rigueur scientifique, sens artistique et déontologie.",
      missionTitle: "Notre Mission",
      missionDesc: "Promouvoir une éducation de qualité, le développement professionnel et l'excellence en esthétique et cosmétologie par des lignes directrices rigoureuses, l'évaluation des formations et la synergie continue avec L'Académie Internationale de Beauté.",
      missionSub: "Donner aux formateurs et praticiens les outils pédagogiques indispensables pour rayonner à Paris, Tunis, Londres et à l'international.",
      visionTitle: "Notre Vision",
      visionDesc: "Soutenir un écosystème d'enseignement professionnel fondé sur le savoir, l'innovation et des normes internationales qui rehaussent le statut des professionnels de la beauté.",
      visionSub: "Un avenir où chaque praticien incarne la sécurité, la précision scientifique et la distinction artistique.",
      coreValuesTitle: "Valeurs Fondamentales",
      val1Title: "Rigueur Éducative",
      val1Desc: "Un engagement sans compromis pour l'apprentissage structuré et la compétence pratique vérifiée.",
      val2Title: "Évolution Continue",
      val2Desc: "Une adaptation permanente des critères aux innovations technologiques et scientifiques de la cosmétologie.",
      val3Title: "Transparence Institutionnelle",
      val3Desc: "Des critères éducatifs clairs et vérifiés, sans allégations infondées ni titres démesurés.",
      val4Title: "Synergie Collaboratif (Paris · Tunis)",
      val4Desc: "Une coopération étroite avec les grandes écoles, les maîtres formateurs et L'Académie Internationale de Beauté."
    },
    areas: {
      kicker: "Champs de Compétence",
      title: "Domaines d'Excellence",
      subtitle: "Six piliers majeurs à travers lesquels le British Board soutient la qualité pédagogique et l'élévation institutionnelle.",
      items: {
        beautyEdTitle: "Enseignement de la Beauté",
        beautyEdDesc: "Cadres complets reliant la biologie cutanée fondamentale, la théorie esthétique et l'exercice en atelier pratique avec L’Académie Internationale de Beauté.",
        aestheticsTitle: "Esthétique & Soins de la Peau",
        aestheticsDesc: "Recommandations approfondies pour les protocoles de soins du visage non invasifs, l'analyse cutanée et l'hygiène clinique.",
        cosmetologyTitle: "Cosmétologie Professionnelle",
        cosmetologyDesc: "Programmes contemporains couvrant l'architecture capillaire, la trichologie, la colorimétrie et le stylisme.",
        qualityTitle: "Évaluation de la Qualité des Formations",
        qualityDesc: "Outils d'évaluation structurés permettant aux académies de mesurer les performances pédagogiques et les acquis des étudiants.",
        curriculumTitle: "Développement de Programmes d'Études",
        curriculumDesc: "Conception de modules d'enseignement répondant aux innovations de l'industrie et aux impératifs de sécurité.",
        certProgramsTitle: "Programmes de Certification Professionnelle",
        certProgramsDesc: "Parcours d'évaluation pédagogique structurés valorisant l'assimilation théorique et la démonstration technique."
      }
    },
    standards: {
      kicker: "Cadre Qualité Institutionnel",
      title: "Normes Pédagogiques",
      subtitle: "Les Cinq Piliers de la philosophie pédagogique du British Board pour l'élévation des académies.",
      intro: "Le British Board définit des critères clairs et exigeants permettant aux écoles de beauté de perfectionner et valoriser leurs offres d'enseignement.",
      p1Title: "1. Qualité de l'Enseignement",
      p1Deck: "Assurer un encadrement répondant à de hauts critères pédagogiques.",
      p1Pt1: "Critères de qualification du corps professoral axés sur l'expérience professionnelle et les compétences pédagogiques.",
      p1Pt2: "Évaluation normalisée des acquis garantissant l'accès à la pratique avec des compétences techniques avérées.",
      p2Title: "2. Évaluation des Formations",
      p2Deck: "Appréciation continue et objective des méthodologies dispensées.",
      p2Pt1: "Audits réguliers des programmes et examens par les pairs pour affiner les processus de formation.",
      p2Pt2: "Sécurité des ateliers pratiques, conformité d'hygiène et ergonomie des espaces de travail.",
      p3Title: "3. Normes des Programmes",
      p3Deck: "Harmoniser la théorie scientifique et la pratique d'atelier.",
      p3Pt1: "Intégration rigoureuse de la biologie cutanée, de la chimie cosmétique et de la détection des contre-indications.",
      p3Pt2: "Enseignement modulaire structuré pour les niveaux fondamental, intermédiaire et supérieur.",
      p4Title: "4. Perfectionnement Professionnel",
      p4Deck: "Soutenir la formation continue des enseignants et spécialistes.",
      p4Pt1: "Modules de mise à niveau sur les nouvelles technologies esthétiques et la gestion d'institut.",
      p4Pt2: "Masterclasses internationales à Paris, Tunis et Londres réunissant des formateurs d'élite pour le partage de techniques avancées.",
      p5Title: "5. Amélioration Institutionnelle",
      p5Deck: "Progrès méthodique des académies et centres de formation.",
      p5Pt1: "Conseil pédagogique pour l'optimisation des ateliers pratiques et des outils numériques.",
      p5Pt2: "Respect de la déontologie, clarté des informations fournies aux étudiants et pratiques institutionnelles rigoureuses."
    },
    academie: {
      badge: "Partenaire Stratégique d'Élite · Paris & Tunis",
      title: "L’Académie Internationale de Beauté",
      tagline: "Haut Lieu de la Formation en Beauté et des Masterclasses à Paris et Tunis",
      p1: "L’Académie Internationale de Beauté est l'institution de formation d'excellence partenaire stratégique du British Board of Aesthetics and Cosmetology. Reconnue pour son raffinement parisien et son pôle méditerranéen de référence à Tunis, elle forme l'avant-garde des talents de la beauté.",
      p2: "Implantée au cœur de Paris (France) et de Tunis (Tunisie), l’Académie offre des ateliers modernes où les étudiants sont guidés par des maîtres cosmétologues et des dermatologues esthéticiens associant tradition de luxe européenne et protocoles scientifiques de pointe.",
      highlight1Title: "Atelier Paris · Haute Beauté Française",
      highlight1Desc: "Masterclasses de prestige en haute coiffure, thérapies dermo-esthétiques et maquillage artistique haute couture.",
      highlight2Title: "Campus Tunis · Pôle Méditerranéen & Maghreb",
      highlight2Desc: "Centre de référence pour l'Afrique du Nord et la Méditerranée, dispensant les normes de formation du British Board.",
      highlight3Title: "Réseau International & Doubles Cursus",
      highlight3Desc: "Une communauté internationale active bénéficiant d'échanges pédagogiques et de reconnaissances croisées.",
      visitCta: "Visiter le Site Officiel de l’Académie",
      noteTitle: "Partenariat Stratégique de Référence",
      noteText: "L’Académie Internationale de Beauté est le partenaire de formation privilégié du British Board, appliquant rigoureusement nos standards pédagogiques au sein de ses campus de Paris et de Tunis."
    },
    programs: {
      kicker: "Offre Pédagogique",
      title: "Formations & Développement Professionnel",
      subtitle: "Des parcours d'apprentissage modulaires dispensés en synergie avec L'Académie Internationale de Beauté (Paris · Tunis).",
      filterAll: "Tous les Programmes",
      filterAesthetics: "Esthétique & Soins",
      filterCosmetology: "Cosmétologie",
      filterInstitutional: "Formation Institutionnelle",
      prog1Title: "Esthétique Avancée & Soins Cutanés",
      prog1Sub: "Fondements de l'Analyse Cutanée & Procédures Non Invasives (Paris · Tunis)",
      prog1Desc: "Un cursus approfondi co-développé avec L'Académie Internationale de Beauté, axé sur l'histologie cutanée, le diagnostic épidermique et la régénération barrière.",
      prog1Duration: "12 Semaines",
      prog1Level: "Intermédiaire à Avancé",
      prog2Title: "Cosmétologie Professionnelle & Art Capillaire",
      prog2Sub: "Architecture, Colorimétrie & Stylisme Créatif",
      prog2Desc: "Maîtrise de la structure du cheveu, de la chimie colorimétrique, des techniques de coupe de précision et du soin du cuir chevelu.",
      prog2Duration: "16 Semaines",
      prog2Level: "Fondamental & Supérieur",
      prog3Title: "Thérapeutique Faciale & Technologies Cutanées",
      prog3Sub: "Protocoles d'Appareillages Non Invasifs Contemporains",
      prog3Desc: "Étude et manipulation des technologies par micro-courants, ultrasons, hydra-dermabrasion et photobiomodulation LED selon les normes du British Board.",
      prog3Duration: "8 Semaines",
      prog3Level: "Pratique Avancée",
      prog4Title: "Développement Professionnel des Formateurs",
      prog4Sub: "Ingénierie Pédagogique & Mentorat d'Atelier (Paris, Tunis, Londres)",
      prog4Desc: "Conçu pour les enseignants des écoles de beauté souhaitant affiner leur animation de cours, leurs grilles d'évaluation et leurs démonstrations cliniques.",
      prog4Duration: "6 Semaines",
      prog4Level: "Niveau Enseignant",
      prog5Title: "Harmonisation des Programmes d'Académie",
      prog5Sub: "Audit Pédagogique & Alignement aux Normes British Board",
      prog5Desc: "Cadre d'accompagnement pour les établissements désireux de hisser leurs maquettes de cours et normes d'ateliers aux meilleurs standards britanniques.",
      prog5Duration: "Modules Semestriels",
      prog5Level: "Direction Pédagogique",
      topicsLabel: "Thématiques Clés du Programme"
    },
    whyChoose: {
      kicker: "Spécificités Institutionnelles",
      title: "Pourquoi Choisir le British Board ?",
      subtitle: "Un engagement inébranlable pour l'intégrité éducative, la rigueur scientifique et l'élévation des normes internationales entre Londres, Paris et Tunis.",
      point1Title: "Engagement Qualité Éducative",
      point1Desc: "Des exigences fermes garantissant la transmission de connaissances techniques vérifiables et le respect absolu de la sécurité du client.",
      point2Title: "Partenariat Stratégique Paris & Tunis",
      point2Desc: "Accès direct aux infrastructures d'exception de L'Académie Internationale de Beauté et à ses ateliers pratiques.",
      point3Title: "Approche Pédagogique Contemporaine",
      point3Desc: "La synthèse équilibrée entre le respect des savoir-faire artisanaux et les acquis récents de la science cosmétique.",
      point4Title: "Ouverture Internationale (UK, France, Tunisie)",
      point4Desc: "Une perspective globale reliant les philosophies esthétiques de Londres, Paris, Tunis et des grandes capitales mondiales.",
      point5Title: "Recherche de l'Excellence",
      point5Desc: "Une attention constante portée à l'élévation des structures, à l'éthique professionnelle et à la réussite concrète des apprenants."
    },
    gallery: {
      kicker: "Documentation Visuelle",
      title: "Galerie Institutionnelle",
      subtitle: "Moments forts de nos ateliers de formation, démonstrations pratiques et symposiums académiques à Paris, Tunis et Londres.",
      filterAll: "Toutes les Photos",
      filterWorkshops: "Ateliers",
      filterAesthetics: "Pratique Esthétique",
      filterCosmetology: "Cosmétologie",
      filterEvents: "Événements Pédagogiques",
      item1Title: "Atelier de Soins Cutanés & Analyse Dermo-Esthétique",
      item1Loc: "Laboratoire Pédagogique d'Esthétique",
      item2Title: "Formation à l'Art Capillaire & Trichologie",
      item2Loc: "Atelier de Coiffure & Soins",
      item3Title: "Session Pratique à L’Académie Internationale (Paris · Tunis)",
      item3Loc: "Ateliers de l'Académie à Paris & Tunis",
      item4Title: "Symposium International d'Esthétique & Conférence",
      item4Loc: "Amphithéâtre Institutionnel",
      item5Title: "Démonstration Complète en Laboratoire de Beauté",
      item5Loc: "Centre Principal de Formation"
    },
    contact: {
      kicker: "Échanges & Renseignements Institutionnels",
      title: "Entrer en Contact avec le British Board",
      subtitle: "Nous accueillons les demandes des académies, enseignants et professionnels souhaitant des informations sur nos cadres pédagogiques et nos formations avec L'Académie Internationale de Beauté.",
      infoTitle: "Coordonnées Officielles & Partenariats",
      infoSubtitle: "Canaux officiels pour les questions pédagogiques, les inscriptions et les évaluations de programmes.",
      emailLabel: "Courriel Officiel d'Information",
      emailPlaceholder: "contact@lacademie-internationale.com",
      phoneLabel: "Ligne Téléphonique Directe & WhatsApp",
      phonePlaceholder: "+44 7497 275861",
      addressLabel: "Siège Administratif & Pôles Partenaires",
      addressPlaceholder: "Londres (UK) · Pôles Académiques : Paris & Tunis",
      formTitle: "Formulaire de Contact Institutionnel",
      nameLabel: "Nom Complet",
      namePlaceholder: "ex. Dr. Hélène Mercier ou M. Alexandre Dupont",
      emailInputLabel: "Courriel Professionnel ou Institutionnel",
      emailInputPlaceholder: "ex. direction@academie.fr",
      phoneInputLabel: "Numéro de Téléphone (avec indicatif)",
      phoneInputPlaceholder: "+44 7497 275861",
      countryLabel: "Pays / Territoire (Royaume-Uni, France, Tunisie, etc.)",
      countryPlaceholder: "ex. France, Tunisie, Royaume-Uni, Belgique...",
      subjectLabel: "Objet de la Demande",
      subjectPlaceholder: "Sélectionnez ou précisez votre sujet...",
      messageLabel: "Message Détaillé",
      messagePlaceholder: "Veuillez préciser la nature de votre démarche, votre établissement ou vos questions...",
      submitBtn: "Transmettre au British Board",
      submittingBtn: "Transmission en cours...",
      successMessage: "Nous vous remercions de votre prise de contact avec le British Board of Aesthetics and Cosmetology. Votre message a été enregistré et notre secrétariat y répondra dans les meilleurs délais.",
      errorMessage: "Veuillez vérifier que tous les champs obligatoires ont été correctement remplis.",
      requiredNotice: "Les champs marqués d'un astérisque sont requis pour le traitement de votre message.",
      privacyNotice: "Vos correspondances sont traitées avec la plus stricte confidentialité institutionnelle."
    },
    footer: {
      aboutText: "Le British Board of Aesthetics and Cosmetology promeut l'excellence de la formation en beauté par des normes rigoureuses, l'évaluation des apprentissages et un partenariat stratégique avec L’Académie Internationale de Beauté (Paris & Tunis).",
      quickLinks: "Navigation",
      institutionalPages: "Documents Officiels",
      communication: "Contact & Coordonnées",
      rights: "Tous droits réservés. British Board of Aesthetics and Cosmetology.",
      disclaimerTitle: "Mention Institutionnelle",
      disclaimerBody: "Le British Board agit en tant qu'organisme éducatif indépendant axé sur l'étalonnage des programmes et le développement pédagogique, en partenariat avec L'Académie Internationale de Beauté (Paris · Tunis).",
      top: "Haut de Page"
    },
    pricing: {
      kicker: "Grille Tarifaire Officielle & Services du Board",
      title: "Services & Certifications de l'American Board (ABAC)",
      subtitle: "Titres officiels de praticien certifié, examens de maîtrise et accréditations institutionnelles régis par l'American Board of Aesthetics and Cosmetology (ABAC).",
      currencyNotice: "Tarifs officiels du Board présentés en Dollars Américains ($ USD) avec équivalence directe en Euros (€ EUR).",
      filterAll: "Tous les Services du Board",
      filterFacial: "Esthétique Clinique",
      filterAntiaging: "Cosmétologie & Maîtrise",
      filterPack: "Cursus Globaux",
      featuresIncluded: "Prestations Incluses dans le Titre du Board :",
      bookEnroll: "Candidater à l'Accréditation",
      officialAcademyNotice: "La préparation pratique et l'accès aux plateaux d'examen sont coordonnés avec nos partenaires d'excellence, notamment L'Académie Internationale de Beauté à Paris & Tunis.",
      guaranteeModels: "Évaluation Clinique Référée & Contrôle Pratique",
      guaranteeCert: "Diplôme Officiel Sceau Gaufré & ID Registre Mondial",
      guaranteeMentorship: "Reconnaissance Internationale des Compétences",
      seatsLimited: "Sessions de Jury Limitées"
    }
  }
};
