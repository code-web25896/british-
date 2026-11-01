import { AreaOfExcellence, EducationalStandardPillar, ProgramItem, GalleryItem, AcademyPricedService } from '../types';

export const ASSET_IMAGES = {
  hero: "/src/assets/images/abac_hero_aesthetic_education_1793449971731.jpg",
  about: "/src/assets/images/abac_about_institutional_1793449971959.jpg",
  academie: "/src/assets/images/academie_internationale_beauty_1793449971527.jpg",
  cosmetology: "/src/assets/images/abac_program_cosmetology_1793449986494.jpg",
  masterclass: "/src/assets/images/abac_masterclass_workshop_1793449986400.jpg"
};

export const AREAS_OF_EXCELLENCE: AreaOfExcellence[] = [
  {
    id: 'beauty-education',
    iconName: 'GraduationCap',
    titleKey: 'beautyEdTitle',
    descKey: 'beautyEdDesc'
  },
  {
    id: 'aesthetics-skincare',
    iconName: 'Sparkles',
    titleKey: 'aestheticsTitle',
    descKey: 'aestheticsDesc'
  },
  {
    id: 'professional-cosmetology',
    iconName: 'Scissors',
    titleKey: 'cosmetologyTitle',
    descKey: 'cosmetologyDesc'
  },
  {
    id: 'quality-assessment',
    iconName: 'Award',
    titleKey: 'qualityTitle',
    descKey: 'qualityDesc'
  },
  {
    id: 'curriculum-dev',
    iconName: 'BookOpen',
    titleKey: 'curriculumTitle',
    descKey: 'curriculumDesc'
  },
  {
    id: 'certification-programs',
    iconName: 'ShieldCheck',
    titleKey: 'certProgramsTitle',
    descKey: 'certProgramsDesc'
  }
];

export const EDUCATIONAL_STANDARDS: EducationalStandardPillar[] = [
  {
    id: 'educational-quality',
    number: '01',
    titleKey: 'p1Title',
    deckKey: 'p1Deck',
    pointsKeys: ['p1Pt1', 'p1Pt2']
  },
  {
    id: 'training-evaluation',
    number: '02',
    titleKey: 'p2Title',
    deckKey: 'p2Deck',
    pointsKeys: ['p2Pt1', 'p2Pt2']
  },
  {
    id: 'curriculum-standards',
    number: '03',
    titleKey: 'p3Title',
    deckKey: 'p3Deck',
    pointsKeys: ['p3Pt1', 'p3Pt2']
  },
  {
    id: 'professional-development',
    number: '04',
    titleKey: 'p4Title',
    deckKey: 'p4Deck',
    pointsKeys: ['p4Pt1', 'p4Pt2']
  },
  {
    id: 'institutional-improvement',
    number: '05',
    titleKey: 'p5Title',
    deckKey: 'p5Deck',
    pointsKeys: ['p5Pt1', 'p5Pt2']
  }
];

export const PROGRAMS_CATALOG: ProgramItem[] = [
  {
    id: 'prog-aesthetics-advanced',
    category: 'aesthetics',
    titleKey: 'prog1Title',
    subtitleKey: 'prog1Sub',
    descKey: 'prog1Desc',
    durationKey: 'prog1Duration',
    levelKey: 'prog1Level',
    image: ASSET_IMAGES.about,
    topicsKeys: [
      'Epidermal Histology & Physiology',
      'Clinical Chemical Exfoliation Protocols',
      'Hygiene, Sanitation & Aseptic Controls',
      'Diagnostic Skin Typing & Formulation Compatibility'
    ]
  },
  {
    id: 'prog-cosmetology-pro',
    category: 'cosmetology',
    titleKey: 'prog2Title',
    subtitleKey: 'prog2Sub',
    descKey: 'prog2Desc',
    durationKey: 'prog2Duration',
    levelKey: 'prog2Level',
    image: ASSET_IMAGES.cosmetology,
    topicsKeys: [
      'Hair Shaft Architecture & Scalp Biology',
      'Advanced Colorimetry & Pigment Theory',
      'Structural Precision Geometry & Shears Techniques',
      'Chemical Texture Modification & Safety Boundaries'
    ]
  },
  {
    id: 'prog-facial-therapeutics',
    category: 'aesthetics',
    titleKey: 'prog3Title',
    subtitleKey: 'prog3Sub',
    descKey: 'prog3Desc',
    durationKey: 'prog3Duration',
    levelKey: 'prog3Level',
    image: ASSET_IMAGES.hero,
    topicsKeys: [
      'Microcurrent Cellular Stimulation',
      'Hydro-Dermabrasion & Infusion Systems',
      'Non-Thermal LED Phototherapy Parameters',
      'Contraindication Screening & Treatment Documentation'
    ]
  },
  {
    id: 'prog-educator-dev',
    category: 'institutional',
    titleKey: 'prog4Title',
    subtitleKey: 'prog4Sub',
    descKey: 'prog4Desc',
    durationKey: 'prog4Duration',
    levelKey: 'prog4Level',
    image: ASSET_IMAGES.masterclass,
    topicsKeys: [
      'Laboratory Teaching Methodologies & Demo Staging',
      'Constructive Student Skill Evaluation Rubrics',
      'Contemporary Curriculum Design & Lesson Structuring',
      'Mentorship for Emerging Beauty Professionals'
    ]
  },
  {
    id: 'prog-institutional-alignment',
    category: 'institutional',
    titleKey: 'prog5Title',
    subtitleKey: 'prog5Sub',
    descKey: 'prog5Desc',
    durationKey: 'prog5Duration',
    levelKey: 'prog5Level',
    image: ASSET_IMAGES.academie,
    topicsKeys: [
      'Syllabus Benchmarking with International Guidelines',
      'Physical Studio Safety & Hygiene Audits',
      'Academic Record Keeping & Outcome Tracking',
      'Ethical Student Advisory & Program Marketing Integrity'
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    category: 'aesthetics',
    image: ASSET_IMAGES.about,
    titleKey: 'item1Title',
    locationKey: 'item1Loc'
  },
  {
    id: 'gal-2',
    category: 'cosmetology',
    image: ASSET_IMAGES.cosmetology,
    titleKey: 'item2Title',
    locationKey: 'item2Loc'
  },
  {
    id: 'gal-3',
    category: 'workshops',
    image: ASSET_IMAGES.academie,
    titleKey: 'item3Title',
    locationKey: 'item3Loc'
  },
  {
    id: 'gal-4',
    category: 'events',
    image: ASSET_IMAGES.masterclass,
    titleKey: 'item4Title',
    locationKey: 'item4Loc'
  },
  {
    id: 'gal-5',
    category: 'workshops',
    image: ASSET_IMAGES.hero,
    titleKey: 'item5Title',
    locationKey: 'item5Loc'
  }
];

export const ACADEMY_PRICED_SERVICES: AcademyPricedService[] = [
  {
    id: 'board-cert-clinical-aesthetics',
    category: 'clinical',
    badge: { en: 'Board Certified Credential', fr: 'Titre Certifié par le Board' },
    title: {
      en: 'Board Certification in Clinical Aesthetics (ABAC-CA)',
      fr: 'Certification du Board en Esthétique Clinique (ABAC-CA)'
    },
    duration: { en: 'Examination & Portfolio Audit', fr: 'Examen & Audit de Compétences' },
    priceUsd: 950,
    priceEur: 880,
    description: {
      en: 'Official credentialing for aesthetic practitioners. Encompasses skin histology evaluation, clinical dermo-cleansing protocols, sterilization controls, and candidate practical portfolio assessment.',
      fr: 'Titre officiel pour praticiens de l’esthétique. Comprend l’évaluation de l’histologie cutanée, protocoles d’asepsie avancés, dermo-soins cliniques et audit complet de compétences.'
    },
    features: {
      en: [
        'Official American Board Certificate with Embossed Seal',
        'Unique Verified International Practitioner Registry ID',
        'Direct examination pathways via Paris & Tunis partner academies',
        'Digital credentials badge for clinical and salon practice'
      ],
      fr: [
        'Diplôme officiel de l’American Board avec sceau gaufré d’authenticité',
        'Identifiant unique au Registre International des Praticiens Agréés',
        'Centres d’examen partenaires accessibles à Paris et Tunis',
        'Badge numérique d’accréditation pour cabinet, clinique et institut'
      ]
    },
    isPopular: true
  },
  {
    id: 'board-cert-advanced-cosmetology',
    category: 'cosmetology',
    badge: { en: 'Cosmetology Standard', fr: 'Norme Cosmétologique' },
    title: {
      en: 'Board Certification in Advanced Cosmetology (ABAC-AC)',
      fr: 'Certification du Board en Cosmétologie Avancée (ABAC-AC)'
    },
    duration: { en: 'Curriculum & Clinical Evaluation', fr: 'Évaluation Clinique & Théorique' },
    priceUsd: 1250,
    priceEur: 1150,
    description: {
      en: 'Comprehensive validation of professional cosmetology competencies, cosmetic ingredient formulation toxicology, advanced trichology, chemical peel safety, and clinical hygiene.',
      fr: 'Validation globale des compétences en cosmétologie professionnelle, innocuité toxicologique des formulations, trichologie avancée, peelings et hygiène clinique.'
    },
    features: {
      en: [
        'Validation of cosmetic chemistry & ingredient safety knowledge',
        'Advanced trichology, scalp pathology, and hair science audit',
        'Official international credential transcripts and transcript registry',
        'Priority access to American Board scientific research symposiums'
      ],
      fr: [
        'Validation des compétences en formulation et innocuité cosmétique',
        'Audit en trichologie avancée, cuir chevelu et dermo-cosmétique',
        'Relevé d’évaluation officiel et certificat international reconnu',
        'Accès prioritaire aux symposiums et publications du Board'
      ]
    }
  },
  {
    id: 'master-aesthetician-diplomate',
    category: 'clinical',
    badge: { en: 'Highest Practitioner Honor', fr: 'Plus Haut Titre de Praticien' },
    title: {
      en: 'Master Aesthetician Board Diplomate (ABAC-MAB)',
      fr: 'Diplomate du Board : Master Praticien en Haute Esthétique (ABAC-MAB)'
    },
    duration: { en: 'Senior Practitioner Examination', fr: 'Examen Supérieur de Maîtrise' },
    priceUsd: 1650,
    priceEur: 1520,
    description: {
      en: 'The pinnacle credential for senior aesthetic professionals mastering advanced energy-based modalities, non-surgical ultrasound (HIFU), radiofrequency, microneedling, and cellular dermo-resurfacing.',
      fr: 'La distinction d’élite pour praticiens chevronnés maîtrisant les technologies d’énergie avancée, ultrasons focalisés (HIFU), radiofréquence, microneedling et dermo-régénération.'
    },
    features: {
      en: [
        'Master Diplomate gold seal accreditation certificate',
        'Authorization to display post-nominal ABAC-MAB credential letters',
        'Peer-reviewed validation of advanced energy-device procedures',
        'Lifetime honored listing in the American Board international directory'
      ],
      fr: [
        'Diplôme officiel frappé du sceau d’or Master Diplomate',
        'Droit d’usage légitime des armoiries et lettres professionnelles ABAC-MAB',
        'Validation par les pairs des procédures sur dispositifs médico-esthétiques',
        'Inscription permanente dans l’annuaire international d’honneur du Board'
      ]
    },
    isPopular: true
  },
  {
    id: 'certified-aesthetic-educator',
    category: 'educator',
    badge: { en: 'Faculty & Educator Credential', fr: 'Agrément Pédagogique & Formateur' },
    title: {
      en: 'Certified Aesthetic Educator & Faculty Instructor (ABAC-CEI)',
      fr: 'Agrément du Board pour Formateurs & Enseignants (ABAC-CEI)'
    },
    duration: { en: 'Pedagogical & Syllabus Audit', fr: 'Audit Pédagogique & Didactique' },
    priceUsd: 1450,
    priceEur: 1340,
    description: {
      en: 'Accreditation designed for instructors, lecturers, and beauty school professors ensuring classroom pedagogical rigor, standardized practical demonstrations, and objective student assessment.',
      fr: 'Accréditation officielle destinée aux formateurs, directeurs techniques et enseignants en esthétique, validant la rigueur didactique et la conformité des transmissions.'
    },
    features: {
      en: [
        'Certified Instructor Credentials recognized across international partner schools',
        'Standardized pedagogical rubric, curriculum design, and grading guides',
        'Official authorization to proctor and supervise Board candidate examinations',
        'Annual pedagogical masterclasses and syllabus refinement symposiums'
      ],
      fr: [
        'Titre d’instructeur agréé reconnu par les académies partenaires internationales',
        'Guides de conception pédagogique et grilles d’évaluation standardisées',
        'Habilitation à superviser les épreuves des candidats de l’American Board',
        'Ateliers annuels de perfectionnement didactique pour le corps enseignant'
      ]
    }
  },
  {
    id: 'institutional-academy-accreditation',
    category: 'institutional',
    badge: { en: 'Institutional Accreditation', fr: 'Accréditation Établissement' },
    title: {
      en: 'Institutional Academy Accreditation & Curriculum Audit',
      fr: 'Accréditation Institutionnelle d’Académie & Audit Qualité'
    },
    duration: { en: 'Comprehensive Institutional Audit', fr: 'Audit Établissement Complet' },
    priceUsd: 2800,
    priceEur: 2580,
    description: {
      en: 'Comprehensive institutional audit for private academies and vocational training institutes (such as strategic partners L’Académie Internationale de Beauté in Paris & Tunis) seeking official Board accreditation.',
      fr: 'Processus d’accréditation officiel pour instituts et écoles de formation (à l’instar de L’Académie Internationale de Beauté à Paris & Tunis) attestant de l’excellence des normes.'
    },
    features: {
      en: [
        'Exhaustive syllabus evaluation and practical technical plateau inspection',
        'Official American Board Accredited Institution Wall Plaque & Digital Seal',
        'Right to issue American Board endorsed examination credentials to graduates',
        'Featured institutional listing on the global American Board registry'
      ],
      fr: [
        'Audit exhaustif des programmes et conformité des plateaux techniques',
        'Plaque officielle murale et sceau d’Académie Agréée par le Board',
        'Habilitation à délivrer des attestations endossées par l’American Board',
        'Référencement institutionnel privilégié sur le portail mondial du Board'
      ]
    }
  },
  {
    id: 'executive-global-fellowship-pack',
    category: 'pack',
    badge: { en: 'Premier Comprehensive Fellowship', fr: 'Programme Global d’Excellence' },
    title: {
      en: 'Executive Global Board Fellowship (Comprehensive Licensure Pack)',
      fr: 'Pack Global Fellowship du Board (Accréditation Intégrale)'
    },
    duration: { en: 'Full Multi-Disciplinary Cursus', fr: 'Cursus Complet Multi-Disciplines' },
    priceUsd: 2950,
    priceEur: 2720,
    originalPriceUsd: 4500,
    originalPriceEur: 4150,
    description: {
      en: 'The definitive multi-disciplinary board credential combining Clinical Aesthetics, Advanced Cosmetology, Master Diplomate seal, candidate review, and 3-year international board directory registry.',
      fr: 'Le cursus d’accréditation ultime regroupant Esthétique Clinique, Cosmétologie Avancée, Sceau Master Diplomate et inscription triennale au registre international.'
    },
    features: {
      en: [
        'Includes Clinical Aesthetics + Advanced Cosmetology + Master Diplomate',
        'Expedited priority examination review and accelerated credential issuance',
        '3-Year full international registry membership and digital verification badge',
        'Preparatory pathway coordination via L’Académie Internationale de Beauté'
      ],
      fr: [
        'Regroupe Esthétique Clinique + Cosmétologie Avancée + Master Diplomate',
        'Traitement prioritaire du dossier et délivrance express des diplômes',
        'Adhésion triennale complète au Registre International de l’American Board',
        'Parcours préparatoire recommandé via L’Académie Internationale de Beauté'
      ]
    },
    isPopular: true
  }
];
