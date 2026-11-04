import { AreaOfExcellence, EducationalStandardPillar, ProgramItem, GalleryItem, AcademyPricedService } from '../types';

import heroImg from '../assets/images/abac_hero_aesthetic_education_1793449971731.jpg';
import aboutImg from '../assets/images/abac_about_institutional_1793449971959.jpg';
import academieImg from '../assets/images/academie_internationale_beauty_1793449971527.jpg';
import cosmetologyImg from '../assets/images/abac_program_cosmetology_1793449986494.jpg';
import masterclassImg from '../assets/images/abac_masterclass_workshop_1793449986400.jpg';

export const ASSET_IMAGES = {
  hero: heroImg,
  about: aboutImg,
  academie: academieImg,
  cosmetology: cosmetologyImg,
  masterclass: masterclassImg
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

export const ACADEMY_PRICED_SERVICES: AcademyPricedService[] = [];
