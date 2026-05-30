export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  image: string;
  icon: string;
  benefits: string[];
  process: { step: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const services: ServiceData[] = [
  {
    title: "Braces – Orthodontics",
    shortTitle: "Braces",
    slug: "braces-orthodontics",
    icon: "/icons/braces.svg",
    description: "Brace yourself for a whole new world of straight teeth and dazzling smiles.",
    longDescription: "Our orthodontic services cover the full spectrum of teeth straightening solutions — from traditional metal braces to ceramic and clear aligner options.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
    benefits: [
      "Metal, ceramic, and clear aligner options",
      "Digital treatment planning",
      "Shorter treatment times"
    ],
    process: [
      { step: "Consultation", description: "Comprehensive exam." },
      { step: "Bracket Placement", description: "Braces are bonded." }
    ],
    faqs: [
      { question: "How long do braces take?", answer: "Typically 12-24 months." }
    ]
  },
  {
    title: "Dentures",
    shortTitle: "Dentures",
    slug: "dentures",
    icon: "/icons/dentures.svg",
    description: "Let us help you say goodbye to ill-fitting dentures and hello to a confident smile.",
    longDescription: "Custom-made removable appliances that can replace missing teeth and help restore your smile.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80",
    benefits: ["Custom fit", "Natural appearance", "Restores chewing ability"],
    process: [
      { step: "Impressions", description: "Accurate molds taken." },
      { step: "Fitting", description: "Adjustments for perfect fit." }
    ],
    faqs: [
      { question: "How long do dentures last?", answer: "Usually 5 to 10 years with proper care." }
    ]
  },
  {
    title: "Clear Aligner",
    shortTitle: "Clear Aligner",
    slug: "clear-aligner",
    icon: "/icons/aligner.svg",
    description: "Say goodbye to metal mouth and hello to a discreet new you.",
    longDescription: "Virtually invisible aligners designed to gently move your teeth into position.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80",
    benefits: ["Discreet", "Removable", "Comfortable"],
    process: [
      { step: "3D Scan", description: "Digital impression of teeth." },
      { step: "Aligner Delivery", description: "Start wearing your trays." }
    ],
    faqs: [
      { question: "Are they painful?", answer: "Slight pressure, but generally comfortable." }
    ]
  },
  {
    title: "Kids Dentistry",
    shortTitle: "Kids Dentistry",
    slug: "kids-dentistry",
    icon: "/icons/kids.svg",
    description: "From glittery toothbrushes to colorful braces.",
    longDescription: "Comprehensive pediatric dental care focused on prevention and education in a fun environment.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
    benefits: ["Child-friendly environment", "Preventive care", "Education"],
    process: [
      { step: "First Visit", description: "Gentle introduction." },
      { step: "Cleaning", description: "Fluoride and sealants." }
    ],
    faqs: [
      { question: "When should the first visit be?", answer: "By age 1 or first tooth." }
    ]
  },
  {
    title: "Dental Jewellery",
    shortTitle: "Jewellery",
    slug: "dental-jewellery",
    icon: "/icons/jewellery.svg",
    description: "We'll add a touch of bling to your smile.",
    longDescription: "Safe, temporary jewels bonded to teeth for an extra sparkle.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    benefits: ["Non-invasive", "Reversible", "Unique look"],
    process: [
      { step: "Selection", description: "Choose your jewel." },
      { step: "Bonding", description: "Quick, painless application." }
    ],
    faqs: [
      { question: "Does it damage teeth?", answer: "No, it's completely safe and reversible." }
    ]
  },
  {
    title: "Root Canal Therapy",
    shortTitle: "Root Canal",
    slug: "root-canal-therapy",
    icon: "/icons/root-canal.svg",
    description: "Expert pain-free root canal procedures.",
    longDescription: "Root Canal Therapy is performed using advanced rotary endodontic systems for precise, pain-free treatment.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80",
    benefits: ["Pain-free", "Saves natural tooth", "Quick recovery"],
    process: [
      { step: "Diagnosis", description: "Digital X-ray assessment." },
      { step: "Cleaning", description: "Infected tissue removed." }
    ],
    faqs: [
      { question: "Is it painful?", answer: "Virtually painless with modern techniques." }
    ]
  },
  {
    title: "Dental Implants",
    shortTitle: "Implants",
    slug: "dental-implants",
    icon: "/icons/implant.svg",
    description: "Replace missing teeth with confidence.",
    longDescription: "Permanent, natural-looking replacements for missing teeth that restore full function.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
    benefits: ["Permanent solution", "Natural look", "Bone preservation"],
    process: [
      { step: "Placement", description: "Implant placed in jawbone." },
      { step: "Restoration", description: "Crown attached after healing." }
    ],
    faqs: [
      { question: "How long do they last?", answer: "With good care, a lifetime." }
    ]
  },
  {
    title: "Infection Control",
    shortTitle: "Infection Control",
    slug: "infection-control",
    icon: "/icons/infection.svg",
    description: "Advanced sterilization and safety standards.",
    longDescription: "We strictly adhere to international sterilization protocols to ensure maximum patient safety.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    benefits: ["Maximum safety", "Sterile instruments", "Clean environment"],
    process: [
      { step: "Autoclaving", description: "High-pressure steam sterilization." },
      { step: "Packaging", description: "Sealed instrument pouches." }
    ],
    faqs: [
      { question: "Are instruments reused?", answer: "Only if fully sterilized in an autoclave." }
    ]
  },
  {
    title: "Gum Therapy",
    shortTitle: "Gum Therapy",
    slug: "gum-therapy",
    icon: "/icons/gum.svg",
    description: "Healthy gums for a healthy smile.",
    longDescription: "Periodontal treatments to address gum disease and maintain optimal oral health.",
    image: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=800&q=80",
    benefits: ["Prevents tooth loss", "Improves breath", "Reduces inflammation"],
    process: [
      { step: "Deep Cleaning", description: "Scaling and root planing." },
      { step: "Maintenance", description: "Regular periodontal checkups." }
    ],
    faqs: [
      { question: "What are signs of gum disease?", answer: "Bleeding, swollen gums, or bad breath." }
    ]
  },
  {
    title: "Teeth Whitening",
    shortTitle: "Whitening",
    slug: "teeth-whitening",
    icon: "/icons/whitening.svg",
    description: "Brighter smiles than ever before.",
    longDescription: "Professional whitening treatments for a dramatically brighter and whiter smile.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80",
    benefits: ["Fast results", "Safe for enamel", "Boosts confidence"],
    process: [
      { step: "Application", description: "Whitening gel applied." },
      { step: "Activation", description: "Light activation for faster results." }
    ],
    faqs: [
      { question: "Does it cause sensitivity?", answer: "Mild, temporary sensitivity may occur." }
    ]
  },
  {
    title: "Extractions & Wisdom Teeth Removal",
    shortTitle: "Extractions",
    slug: "wisdom-removal",
    icon: "/icons/extraction.svg",
    description: "Safe and painless tooth removal procedures.",
    longDescription: "Expert surgical procedures including wisdom tooth extraction under local anesthesia.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
    benefits: ["Painless", "Quick recovery", "Prevents crowding"],
    process: [
      { step: "Anaesthesia", description: "Complete numbing." },
      { step: "Extraction", description: "Gentle removal of tooth." }
    ],
    faqs: [
      { question: "Will I need time off?", answer: "Usually 1-3 days of rest is recommended." }
    ]
  },
  {
    title: "Laser Dentistry",
    shortTitle: "Laser",
    slug: "laser-dentistry",
    icon: "/icons/laser.svg",
    description: "Modern laser-assisted dental treatments.",
    longDescription: "Minimally invasive laser treatments for gum disease, cavity removal, and soft tissue procedures.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    benefits: ["Minimal bleeding", "Faster healing", "Often no sutures needed"],
    process: [
      { step: "Preparation", description: "Protective eyewear provided." },
      { step: "Treatment", description: "Focused laser energy applied." }
    ],
    faqs: [
      { question: "Is laser dentistry safe?", answer: "Yes, FDA-approved and very safe." }
    ]
  }
];
