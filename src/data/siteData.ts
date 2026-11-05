import { AreaOfExcellence, EducationalStandardPillar, ProgramItem, GalleryItem, AcademyPricedService, NewsItem, CertificateRecord } from '../types';

import news1Img from '../assets/images/news1.png';
import news2Img from '../assets/images/news2.jpg';
import news3Img from '../assets/images/news3.jpg';
import new4Img from '../assets/images/new4.png';
import news5Img from '../assets/images/news5.jpg';

export const ASSET_IMAGES = {
  hero: news1Img,
  about: news2Img,
  academie: news3Img,
  cosmetology: new4Img,
  masterclass: news5Img,
  news1: news1Img,
  news2: news2Img,
  news3: news3Img,
  news4: new4Img,
  news5: news5Img,
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
    iconName: 'Palette',
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

export const ACADEMY_PRICED_SERVICES: AcademyPricedService[] = [];

export const LATEST_NEWS_ITEMS: NewsItem[] = [
  {
    id: 'cpd-training-provider',
    title: 'CPD Training Provider Accreditation',
    category: 'Accreditation',
    badge: 'CPD Certified',
    date: 'Nov 03, 2025',
    image: ASSET_IMAGES.news1,
    summary: 'The British Board officially awards Continuing Professional Development (CPD) accreditation standards, validating verified educational syllabi and professional training providers internationally.',
    fullContent: 'Continuing Professional Development (CPD) accreditation ensures that training institutions, cosmetic academies, and healthcare aesthetic providers maintain the highest pedagogical and clinical standards. The British Board validates curricula, student assessments, and faculty credentials under rigorous UK frameworks.'
  },
  {
    id: 'accredited-centers-france-africa',
    title: 'Accredited Training Centers Across France & Africa',
    category: 'Global Network',
    badge: 'International Hubs',
    date: 'Oct 15, 2025',
    image: ASSET_IMAGES.news2,
    summary: 'In partnership with leading European vocational centers, The British Board certifies flagship training hubs in France and Africa to deliver recognized aesthetics certifications.',
    fullContent: 'Through ongoing international collaboration with premier European aesthetics institutes, including L’Académie Internationale de Beauté, accredited centers deliver clinical workshops, masterclasses, and vocational diplomas strictly aligned with British Board standards.'
  },
  {
    id: 'international-iso-quality',
    title: 'International Quality & Institutional Benchmarks',
    category: 'Institutional Standards',
    badge: 'Quality Assurance',
    date: 'Sep 20, 2025',
    image: ASSET_IMAGES.news3,
    summary: 'Comprehensive quality benchmarks and procedural audits for educational institutes seeking official British Board organizational endorsement and registry compliance.',
    fullContent: 'Quality assurance is at the cornerstone of the British Board. Our comprehensive inspection protocols examine training methodologies, hygienic safety controls, trainer qualifications, and transparent student evaluation criteria.'
  },
  {
    id: 'ukprn-registration',
    title: 'UKPRN Listed: 10062939 Learning Provider Registry',
    category: 'UK Government Registry',
    badge: 'Verified UKPRN',
    date: 'Aug 12, 2025',
    image: ASSET_IMAGES.news4,
    summary: 'The British Board is officially registered on the United Kingdom Register of Learning Providers (UKPRN: 10062939), cementing our transparent public record.',
    fullContent: 'The UK Register of Learning Providers (UKPRN) is used across government agencies, education authorities, and learners to verify learning organizations. The British Board’s verified UKPRN is 10062939.'
  },
  {
    id: 'good-standing-certificate',
    title: 'Official Certificate of Good Standing Protocols',
    category: 'Credentials',
    badge: 'Board Verified',
    date: 'Jul 05, 2025',
    image: ASSET_IMAGES.news5,
    summary: 'Announcement of the standardized international Certificate of Good Standing for registered aesthetic practitioners, salon directors, and clinical cosmetologists.',
    fullContent: 'The Certificate of Good Standing serves as verifiable proof that an individual or institution upholds ethical business practices, active board registration, and continuous educational compliance with British Board standards.'
  }
];

export const OFFICIAL_CERTIFICATES: CertificateRecord[] = [
  {
    code: 'BBC-2026-000125',
    studentName: 'BALBOULI RAHMA',
    specialty: 'Skin Care Trainer',
    year: '2026',
    passportNumber: '0236302',
    accreditedCenter: 'The International Academy of Beauty (France & Africa)',
    status: 'OFFICIALLY VERIFIED & ACTIVE IN REGISTRY',
  },
  {
    code: 'BBC-2026-000126',
    studentName: 'MOUMMI ZAINEB',
    specialty: 'Skin Care Trainer',
    year: '2026',
    passportNumber: 'U221350',
    accreditedCenter: 'The International Academy of Beauty (France & Africa)',
    status: 'OFFICIALLY VERIFIED & ACTIVE IN REGISTRY',
  },
  {
    code: 'BBC-2026-000127',
    studentName: 'BEL HAJ SALAH HANA',
    specialty: 'Skin Care Trainer',
    year: '2026',
    passportNumber: 'N/A',
    accreditedCenter: 'The International Academy of Beauty (France & Africa)',
    status: 'OFFICIALLY VERIFIED & ACTIVE IN REGISTRY',
  },
  {
    code: 'BBC-2026-000128',
    studentName: 'ABIDI AMEL',
    specialty: 'Skin Care Trainer',
    year: '2026',
    passportNumber: '06173878',
    accreditedCenter: 'The International Academy of Beauty (France & Africa)',
    status: 'OFFICIALLY VERIFIED & ACTIVE IN REGISTRY',
  },
  {
    code: 'BBC-2026-000129',
    studentName: 'BAHLOUL IKBEL',
    specialty: 'Skin Care Trainer',
    year: '2026',
    passportNumber: '14357016',
    accreditedCenter: 'The International Academy of Beauty (France & Africa)',
    status: 'OFFICIALLY VERIFIED & ACTIVE IN REGISTRY',
  },
  {
    code: 'BBC-2026-000130',
    studentName: 'KARRAY EYA',
    specialty: 'Skin Care Trainer',
    year: '2026',
    passportNumber: 'J319021',
    accreditedCenter: 'The International Academy of Beauty (France & Africa)',
    status: 'OFFICIALLY VERIFIED & ACTIVE IN REGISTRY',
  },
  {
    code: 'BBC-2026-000131',
    studentName: 'YAHYAOUI MARIEM',
    specialty: 'Skin Care Trainer',
    year: '2026',
    passportNumber: 'N433054',
    accreditedCenter: 'The International Academy of Beauty (France & Africa)',
    status: 'OFFICIALLY VERIFIED & ACTIVE IN REGISTRY',
  },
  {
    code: 'BBC-2026-000132',
    studentName: 'BEN NOSRA JIHEN',
    specialty: 'Skin Care Trainer',
    year: '2026',
    passportNumber: 'Q236399',
    accreditedCenter: 'The International Academy of Beauty (France & Africa)',
    status: 'OFFICIALLY VERIFIED & ACTIVE IN REGISTRY',
  },
  {
    code: 'BBC-2026-000133',
    studentName: 'MRAD KHOULOUD',
    specialty: 'Skin Care Trainer',
    year: '2026',
    passportNumber: 'N248513',
    accreditedCenter: 'The International Academy of Beauty (France & Africa)',
    status: 'OFFICIALLY VERIFIED & ACTIVE IN REGISTRY',
  },
  {
    code: 'BBC-2026-000134',
    studentName: 'AJILI WAHIDA',
    specialty: 'Skin Care Trainer',
    year: '2026',
    passportNumber: 'U356832',
    accreditedCenter: 'The International Academy of Beauty (France & Africa)',
    status: 'OFFICIALLY VERIFIED & ACTIVE IN REGISTRY',
  },
  {
    code: 'BBC-2026-000135',
    studentName: 'BELKHIR ALYA',
    specialty: 'Skin Care Trainer',
    year: '2026',
    passportNumber: 'Q112992',
    accreditedCenter: 'The International Academy of Beauty (France & Africa)',
    status: 'OFFICIALLY VERIFIED & ACTIVE IN REGISTRY',
  },
  {
    code: 'BBC-2026-000136',
    studentName: 'HFAIEDH MARIEM',
    specialty: 'Skin Care Trainer',
    year: '2026',
    passportNumber: 'U834425',
    accreditedCenter: 'The International Academy of Beauty (France & Africa)',
    status: 'OFFICIALLY VERIFIED & ACTIVE IN REGISTRY',
  },
];

