export const designTokens = {
  heroStyle: "parallax",
  typography: {
    heading: "Sora",
    body: "DM Sans",
    display: "Outfit",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: false,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "smooth",
  serviceCardStyle: "overlay",
  projectGridStyle: "bento",
  testimonialStyle: "cards",
  statsStyle: "minimal",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "marquee", "about", "services", "gallery", "stats", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Addix Classic Designs",
    legalName: "Addix Classic Designs (Pvt) Ltd",
    tagline: "Spaces That Inspire",
    description:
      "Harare's premier interior design studio. From concept to completion, we create residential and commercial spaces that balance timeless elegance with contemporary comfort.",
    phone: "+263 77 589 4241",
    phoneRaw: "+263775894241",
    whatsappNumber: "263775894241",
    email: "info@addixdesigns.co.zw",
    address: "Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.8,
    ratingRounded: 5,
    reviewCount: 38,
    established: "2016",
    yearsExperience: "9+",
    projectsCompleted: "200+",
    employees: "15+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "9:00 AM - 2:00 PM" },
      { day: "Sunday", time: "By Appointment" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzQ1LjEiUyAzMcKwMDMnMDcuOSJF!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "addix-classic-cookie-consent",
    socialLinks: {
      facebook: "https://www.facebook.com/addixclassicdesigns",
      instagram: "https://www.instagram.com/addixclassicdesigns",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "ADDIX",
    logoLine2: "CLASSIC",
  },

  hero: {
    badge: "Interior Design Studio | Harare",
    titleParts: [
      { text: "Spaces That " },
      { text: "Inspire.", highlight: true },
    ],
    subtitle:
      "200+ residential and commercial interiors designed with precision, personality, and an obsessive attention to detail. This is where your vision becomes a living space.",
    ctaPrimary: "Start Your Project",
    ctaSecondary: "View Portfolio",
    trustBadge: "Free Initial Consultation",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80", alt: "Elegant interior design by Addix Classic" },
      { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80", alt: "Modern living room with classic touches" },
    ],
  },

  stats: [
    { number: "200", suffix: "+", label: "Projects Completed" },
    { number: "9", suffix: "+", label: "Years of Design" },
    { number: "38", suffix: "", label: "Five-Star Reviews" },
    { number: "15", suffix: "+", label: "Design Specialists" },
  ],

  servicesPreview: [
    {
      iconName: "Lightbulb",
      title: "Residential Design",
      desc: "Full home interiors from initial concept to final styling. Living rooms, bedrooms, kitchens, bathrooms. Every room, every detail.",
    },
    {
      iconName: "Briefcase",
      title: "Commercial Interiors",
      desc: "Offices, restaurants, hotels, retail spaces. Environments that reflect your brand and enhance your client experience.",
    },
    {
      iconName: "Ruler",
      title: "Space Planning",
      desc: "Architectural layouts, furniture placement, traffic flow optimisation. Making every square metre work harder.",
    },
    {
      iconName: "Star",
      title: "Furniture Sourcing",
      desc: "Access to premium furniture brands, custom upholstery, and bespoke millwork. We source what the space demands.",
    },
    {
      iconName: "Eye",
      title: "3D Visualisation",
      desc: "Photorealistic 3D renders before a single piece is moved. See your space come alive before committing.",
    },
    {
      iconName: "Heart",
      title: "Styling & Staging",
      desc: "Art curation, textile selection, accessory placement. The finishing touches that turn a designed space into a felt experience.",
    },
  ],

  featuredProjects: [
    {
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
      title: "Borrowdale Executive Residence",
      category: "Residential",
    },
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      title: "Sam Levy Village Boutique Hotel",
      category: "Hospitality",
    },
    {
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
      title: "Avondale Law Firm Offices",
      category: "Commercial",
    },
  ],

  whyChooseUs: {
    titleParts: [
      { text: "Design With " },
      { text: "Intention.", highlight: true },
    ],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    imageAlt: "Addix Classic Designs project showcase",
    experienceYears: "200+",
    experienceLabel: "Spaces Transformed",
    points: [
      {
        title: "Concept-to-Completion",
        desc: "We do not hand off halfway. From initial mood board to final cushion placement, Addix manages every phase of your interior project.",
      },
      {
        title: "Material Obsession",
        desc: "We source fabrics, stones, timbers, and metals from the best suppliers in Southern Africa. Every texture earns its place.",
      },
      {
        title: "3D Before Build",
        desc: "Photorealistic 3D visualisation lets you walk through your space before any work begins. No surprises, only excitement.",
      },
      {
        title: "Budget Transparency",
        desc: "Detailed costing at every stage. We respect your investment and never surprise you with hidden fees or scope creep.",
      },
    ],
  },

  homeCta: {
    backgroundImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80",
    backgroundAlt: "Beautifully designed interior space",
    titleParts: [
      { text: "Your Space " },
      { text: "Deserves", highlight: true },
      { text: " This." },
    ],
    subtitle:
      "Every great space starts with a conversation. Book your complimentary consultation and let us show you what is possible within your budget, your timeline, and your taste.",
    ctaPrimary: "Book Consultation",
    whatsappText: "Hi Addix Classic! I would like to book a design consultation.",
  },

  homeTestimonials: [
    {
      name: "Rumbidzai Moyo",
      role: "Homeowner, Borrowdale",
      text: "Addix transformed our entire home. The 3D renders were so accurate that the final result matched our expectations perfectly. The attention to detail in the living room alone was worth the entire investment.",
      rating: 5,
    },
    {
      name: "David Chikumba",
      role: "Managing Director, TechHub Harare",
      text: "Our office redesign attracted more talent than any recruitment campaign. The collaborative spaces, the colour psychology, the acoustic treatment. Addix thinks about things most designers never consider.",
      rating: 5,
    },
    {
      name: "Grace Mutasa",
      role: "Boutique Hotel Owner, Avondale",
      text: "Every room in our 12-room boutique hotel has a distinct personality but they all feel cohesive. Guests comment on the design more than anything else. Addix delivered beyond our brief.",
      rating: 5,
    },
  ],

  about: {
    heroTitle: [
      { text: "Designed to Be " },
      { text: "Lived In.", highlight: true },
    ],
    heroSubtitle:
      "Addix Classic Designs exists because beautiful spaces should not be reserved for magazine covers. We design interiors that people actually use, enjoy, and feel proud of.",
    storyImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    storyImageAlt: "Addix Classic Designs studio portfolio",
    storyProjectCount: "200+",
    storyProjectLabel: "Spaces Designed",
    storyTitle: "From a Sketchbook to Harare's Most Trusted Design Studio.",
    storyParagraphs: [
      "Addix Classic Designs was founded in 2016 by a team of designers who believed that Harare's interior design landscape was missing something: studios that combined international design sensibility with deep understanding of Zimbabwean lifestyle and materials.",
      "We started with residential projects, hand-picking every fabric, every fixture, every finish. Word spread. By 2019, we were designing commercial spaces, hotel interiors, and executive residences across Harare. Each project added to our material library and our understanding of how Zimbabweans actually live in their spaces.",
      "Today, with 200+ completed projects and a team of 15 specialists, we remain boutique by choice. Every project gets the principal designer's direct involvement. That is the Addix Classic promise.",
    ],
    mission:
      "To design interiors that are as functional as they are beautiful. Spaces that reflect their owners, respect their budgets, and stand the test of time.",
    vision:
      "To be Zimbabwe's most respected interior design studio. Known for timeless taste, material integrity, and the kind of client relationships that lead to designing every home they ever own.",
    values: [
      { iconName: "Eye", title: "Taste", desc: "Classic never goes out of style. We design with a timeless sensibility that ages with grace." },
      { iconName: "Ruler", title: "Precision", desc: "Every measurement, every specification, every timeline is exact. We do not approximate." },
      { iconName: "Heart", title: "Empathy", desc: "We design for how you live, not how we think you should. Your lifestyle informs every decision." },
      { iconName: "Handshake", title: "Partnership", desc: "Design is collaborative. We listen first, propose second, and iterate until it feels right." },
    ],
    team: [
      { name: "Design Studio", role: "Interior Design Specialists", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80" },
      { name: "Project Management", role: "Installation & Coordination", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80" },
    ],
    milestones: [
      { year: "2016", title: "Studio Founded", desc: "Opened our Harare design studio with a focus on residential interiors." },
      { year: "2018", title: "50 Projects", desc: "Completed our 50th project. Expanded into commercial and hospitality design." },
      { year: "2020", title: "3D Visualisation", desc: "Invested in photorealistic 3D rendering. Changed how clients experience the design process." },
      { year: "2022", title: "Hotel Portfolio", desc: "Completed interiors for three boutique hotels in Harare and Victoria Falls." },
      { year: "2024", title: "200+ Projects", desc: "Surpassed 200 completed projects across residential, commercial, and hospitality sectors." },
    ],
    ctaTitle: "Let Us Design Your Space",
    ctaSubtitle: "Every project starts with a conversation. Tell us about your space, your vision, and your budget. The consultation is complimentary.",
    ctaCta: "Book a Consultation",
  },

  services: {
    heroTitle: [
      { text: "Full-Spectrum " },
      { text: "Design.", highlight: true },
    ],
    heroSubtitle:
      "From the first concept sketch to the final cushion placement. Six integrated services that cover every aspect of interior design.",
    items: [
      {
        iconName: "Lightbulb",
        title: "Residential Design",
        slug: "residential-design",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
        desc: "Full home interior design from concept to installation. We design every room to reflect your personality, support your lifestyle, and create the atmosphere you deserve to come home to.",
        features: [
          "Full concept development and mood boarding",
          "Furniture selection and custom upholstery",
          "Material and finish specification",
          "Lighting design and fixture selection",
          "Art curation and accessory styling",
          "Installation supervision and final staging",
        ],
      },
      {
        iconName: "Briefcase",
        title: "Commercial Interiors",
        slug: "commercial-interiors",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
        desc: "Office design, retail environments, restaurant interiors, and hotel spaces. We create commercial environments that strengthen your brand, improve productivity, and enhance the client experience.",
        features: [
          "Brand-aligned interior concepts",
          "Open plan and collaborative space design",
          "Acoustic treatment and privacy solutions",
          "Reception and waiting area design",
          "Wayfinding and signage integration",
          "Compliance with commercial building standards",
        ],
      },
      {
        iconName: "Ruler",
        title: "Space Planning",
        slug: "space-planning",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
        desc: "Architectural layout optimisation, furniture placement planning, and traffic flow analysis. We ensure every square metre of your space works as hard as it can.",
        features: [
          "Detailed floor plan analysis",
          "Furniture layout optimisation",
          "Traffic flow and circulation planning",
          "Storage solutions and built-in design",
          "Multi-functional space configuration",
          "ADA accessibility considerations",
        ],
      },
      {
        iconName: "Star",
        title: "Furniture Sourcing",
        slug: "furniture-sourcing",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
        desc: "Access to premium furniture brands, custom millwork workshops, and speciality suppliers across Southern Africa and internationally. We source pieces that meet the exact specifications of each project.",
        features: [
          "Access to premium South African and international brands",
          "Custom furniture commissioning",
          "Antique and vintage sourcing",
          "Textile and upholstery selection",
          "Stone, timber, and metal material sourcing",
          "Delivery coordination and quality inspection",
        ],
      },
      {
        iconName: "Eye",
        title: "3D Visualisation",
        slug: "3d-visualisation",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
        desc: "Photorealistic 3D rendering that lets you experience your space before construction begins. Walk through your future home or office with accurate lighting, materials, and proportions.",
        features: [
          "Photorealistic interior renders",
          "Virtual walkthroughs and 360 views",
          "Material and colour variation studies",
          "Lighting simulation: day and night",
          "Revision rounds until approval",
          "High-resolution output for contractor reference",
        ],
      },
      {
        iconName: "Heart",
        title: "Styling & Staging",
        slug: "styling-staging",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
        desc: "The final layer that transforms a designed space into a lived experience. Art curation, textile selection, accessory placement, and the sensory details that make a room feel complete.",
        features: [
          "Art curation and gallery wall design",
          "Cushion, throw, and rug selection",
          "Table setting and display styling",
          "Plant and greenery specification",
          "Fragrance and sensory layering",
          "Photography preparation for portfolio",
        ],
      },
    ],
    ctaTitle: "Start Your Design Journey",
    ctaSubtitle: "Book a complimentary consultation. We will assess your space, understand your vision, and propose a design approach within 48 hours.",
  },

  projects: {
    heroTitle: [
      { text: "Spaces We " },
      { text: "Created", highlight: true },
    ],
    heroSubtitle:
      "200+ residential, commercial, and hospitality interiors designed and delivered across Zimbabwe. Each one unique. Each one us.",
    categories: ["All", "Residential", "Commercial", "Hospitality", "Bespoke"],
    items: [
      {
        id: 1,
        title: "Borrowdale Executive Residence",
        category: "Residential",
        location: "Borrowdale, Harare",
        year: "2024",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
        desc: "Complete interior design for a 5-bedroom executive residence. Custom Italian marble bathrooms, bespoke walnut kitchen cabinetry, and a living room anchored by a commissioned art piece.",
        services: ["Residential Design", "Furniture Sourcing", "Styling & Staging"],
      },
      {
        id: 2,
        title: "Sam Levy Village Boutique Hotel",
        category: "Hospitality",
        location: "Borrowdale, Harare",
        year: "2023",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
        desc: "12-room boutique hotel interior design. Each room has a distinct personality drawn from Zimbabwean cultural motifs while maintaining a cohesive luxury aesthetic throughout common areas.",
        services: ["Commercial Interiors", "Furniture Sourcing", "3D Visualisation"],
      },
      {
        id: 3,
        title: "Avondale Law Firm Headquarters",
        category: "Commercial",
        location: "Avondale, Harare",
        year: "2024",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
        desc: "Executive office redesign for a leading Harare law firm. Partner offices with bespoke desks, a 16-seat boardroom, collaborative zones, and a client reception designed to convey authority and trust.",
        services: ["Commercial Interiors", "Space Planning", "Furniture Sourcing"],
      },
    ],
  },

  contact: {
    heroTitle: [
      { text: "Start " },
      { text: "Here.", highlight: true },
    ],
    heroSubtitle: "Book a complimentary consultation, share your project brief, or visit our design studio. We respond within 24 hours.",
    formTitle: "Get in Touch",
    subjects: [
      "Design Consultation",
      "Residential Project",
      "Commercial Project",
      "Furniture Sourcing",
      "3D Visualisation",
      "General Enquiry",
    ],
  },

  reviews: {
    heroTitle: "What Our Clients Say",
    heroSubtitle: "Real feedback from businesses and individuals we've served.",
    overallRating: 4.8,
    totalReviews: 12,
    ratingBreakdown: { 5: 8, 4: 3, 3: 1, 2: 0, 1: 0 },
    items: [
      { name: "Tendai Moyo", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", role: "Business Owner", text: "Exceptional service from start to finish. Professional, reliable, and delivered exactly what was promised. Highly recommend.", rating: 5, date: "2025-11-15", projectType: "Commercial" },
      { name: "Sarah Ncube", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face", role: "Operations Manager", text: "Outstanding quality and attention to detail. The team went above and beyond our expectations.", rating: 5, date: "2025-10-22", projectType: "Residential" },
      { name: "James Mutasa", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face", role: "Director", text: "Professional approach and excellent communication throughout the project. Would definitely work with them again.", rating: 5, date: "2025-09-18", projectType: "Commercial" },
      { name: "Grace Chikwanha", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face", role: "Homeowner", text: "Great value for money. The quality exceeded what we expected at this price point.", rating: 4, date: "2025-08-30", projectType: "Residential" },
      { name: "Peter Dube", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face", role: "Project Manager", text: "Reliable and efficient. They completed the work on time and within budget.", rating: 5, date: "2025-07-14", projectType: "Commercial" },
      { name: "Rudo Mapfumo", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face", role: "CEO", text: "Impressed by their professionalism and the quality of their work. A trusted partner.", rating: 5, date: "2025-06-20", projectType: "Industrial" },
      { name: "David Chirume", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face", role: "Facility Manager", text: "Solid work, good communication, fair pricing. Everything you want in a service provider.", rating: 4, date: "2025-05-11", projectType: "Commercial" },
      { name: "Linda Sithole", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face", role: "Property Developer", text: "They understood our vision and delivered beautifully. The attention to detail was remarkable.", rating: 5, date: "2025-04-28", projectType: "Residential" },
      { name: "Michael Banda", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face", role: "Engineer", text: "Technical expertise is top-notch. They solved problems we didnt even know we had.", rating: 5, date: "2025-03-15", projectType: "Industrial" },
      { name: "Nyasha Gumbo", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face", role: "Procurement Officer", text: "Responsive, professional, and competitively priced. Our go-to provider.", rating: 4, date: "2025-02-08", projectType: "Commercial" },
      { name: "Robert Zvobgo", image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face", role: "Contractor", text: "Reliable partner. They deliver what they promise, every time.", rating: 5, date: "2025-01-22", projectType: "Construction" },
      { name: "Chiedza Mapondera", image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=100&h=100&fit=crop&crop=face", role: "School Administrator", text: "Wonderful experience. The team was courteous, professional, and efficient.", rating: 5, date: "2024-12-10", projectType: "Institutional" },
    ],
  },
  careers: {
    heroTitle: [
      { text: "Design Your " },
      { text: "Career.", highlight: true },
    ],
    heroSubtitle:
      "Addix Classic Designs is growing. We are looking for talented designers, project managers, and creatives who share our obsession with beautiful, functional spaces.",
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80",
    cultureTitle: "Why Work With Us?",
    cultureItems: [
      {
        iconName: "Eye",
        title: "Work on Inspiring Projects",
        desc: "From luxury residences to boutique hotels, every project is an opportunity to create something extraordinary.",
      },
      {
        iconName: "Rocket",
        title: "Creative Freedom",
        desc: "We trust our designers. You will have genuine creative input on every project, not just execution of someone else's vision.",
      },
      {
        iconName: "Heart",
        title: "Learn From the Best",
        desc: "Work alongside experienced interior designers with 200+ completed projects. Mentorship is built into our culture.",
      },
    ],
    cultureImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    cultureImageAlt: "Addix Classic Designs studio workspace",
    cultureTagline: "Where Talent Meets Taste.",
    cultureTaglineDesc:
      "Our studio is a place where creative minds thrive. We design spaces that people love, and we do it with a team that genuinely enjoys the process.",
    benefits: [
      { iconName: "CurrencyDollar", title: "Competitive Salary", desc: "Attractive base salary with project completion bonuses." },
      { iconName: "GraduationCap", title: "Professional Development", desc: "Budget for design courses, software training, and industry events." },
      { iconName: "Heart", title: "Studio Perks", desc: "Beautiful studio workspace, complimentary refreshments, and flexible hours." },
      { iconName: "Users", title: "Collaborative Culture", desc: "Small, close-knit team with regular design critiques and knowledge sharing." },
      { iconName: "Star", title: "Portfolio Building", desc: "Work on high-profile projects that build your professional portfolio." },
      { iconName: "ShieldCheck", title: "Medical Aid", desc: "Comprehensive medical aid contribution for all full-time team members." },
    ],
    positions: [
      {
        id: 1,
        title: "Interior Designer",
        department: "Design Studio",
        type: "Full-Time",
        location: "Harare",
        description:
          "Lead residential and commercial interior design projects from concept to completion. Create mood boards, 3D renders, material specifications, and oversee installations.",
        requirements: [
          "Degree in Interior Design or Architecture",
          "3+ years professional interior design experience",
          "Proficiency in AutoCAD, SketchUp, and 3D rendering software",
          "Strong material and colour knowledge",
          "Excellent client communication and presentation skills",
        ],
      },
      {
        id: 2,
        title: "Junior Designer",
        department: "Design Studio",
        type: "Full-Time",
        location: "Harare",
        description:
          "Support senior designers on projects. Assist with mood boards, material sourcing, 3D modelling, and site visits. Full mentorship and training provided.",
        requirements: [
          "Diploma or degree in Interior Design",
          "Basic proficiency in SketchUp or AutoCAD",
          "Strong visual sense and attention to detail",
          "Eagerness to learn and grow in the industry",
          "Portfolio of academic or personal design work",
        ],
      },
      {
        id: 3,
        title: "Project Coordinator",
        department: "Operations",
        type: "Full-Time",
        location: "Harare",
        description:
          "Manage project timelines, supplier coordination, budget tracking, and client communication. Ensure every project is delivered on time and within budget.",
        requirements: [
          "2+ years in project management or coordination",
          "Strong organisational and multitasking skills",
          "Experience in construction, design, or events preferred",
          "Proficiency in project management tools",
          "Excellent communication and problem-solving abilities",
        ],
      },
    ],
    generalApplicationTitle: "Creative and Driven?",
    generalApplicationSubtitle:
      "We are always open to meeting talented people. If you are passionate about design and think you would be a great fit, send us your portfolio.",
    generalApplicationCta: "Send Your Portfolio",
  },

  footer: {
    description:
      "Harare's premier interior design studio. From concept to completion, we create spaces that balance timeless elegance with contemporary comfort.",
    copyright: "Addix Classic Designs (Pvt) Ltd",
  },
};

export default siteData;
