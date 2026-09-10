import heroInstallation from "@/assets/hero-installation.jpg";
import aboutWorkshop from "@/assets/about-workshop.jpg";
import svcSculpture from "@/assets/svc-sculpture.jpg";
import svcMural from "@/assets/svc-mural.jpg";
import svcGates from "@/assets/svc-gates.jpg";
import svcCnc from "@/assets/svc-cnc.jpg";
import svcFrp from "@/assets/svc-frp.jpg";
import svcPlanters from "@/assets/svc-planters.jpg";
import svcArchitectural from "@/assets/svc-architectural.jpg";
import ctaWorkshop from "@/assets/cta-workshop.jpg";
import texMetal from "@/assets/tex-metal.jpg";
import texStone from "@/assets/tex-stone.jpg";
import texWood from "@/assets/tex-wood.jpg";
import texCorian from "@/assets/tex-corian.jpg";
import mural from "@/assets/mural.jpg";
import cnc from "@/assets/cnc.jpg";
// project


export const images = {
  heroInstallation,
  aboutWorkshop,
  svcSculpture,
  svcMural,
  svcGates,
  svcCnc,
  svcFrp,
  svcPlanters,
  svcArchitectural,
  ctaWorkshop,
};

export const company = {
  name: "Siddhi On Creation",
  sister: "Mrudula Creation",
  phone: "+91 98200 00000",
  phoneHref: "tel:+919820000000",
  whatsapp: "919820000000",
  email: "info@siddhioncreation.com",
  address: "Gala NO. 15, Building No.3, Jay Vijay Industry, Western Express Highway, Bapane, Naigaon East, Thane, Maharashtra 401208.",
  hours: "Monday – Saturday, 10:00 – 19:00 IST",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  linkedin: "https://linkedin.com",
};

export const whatsappLink = (
  message = "Hello, I would like to discuss a project with Siddhi On Creation.",
) => `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;

export type Service = {
  slug: string;
  title: string;
  short: string;
  image: string;
  overview: string;
  types: string[];
  materials: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "sculptures",
    title: "Sculptures & Artistic Installations",
    short:
      "Custom sculptures designed for residential, commercial and architectural spaces.",
    image: "/service/siddhioncreationwork.png",
    overview:
      "We design and manufacture custom sculptures at every scale — from intimate table pieces to monumental lobby and landscape installations. Each commission begins with a concept study and ends with on-site installation by our own team.",
    types: [
      "Figurative and portrait sculpture",
      "Abstract and contemporary forms",
      "Monumental and landmark installations",
      "Suspended and kinetic art pieces",
      "Bas-relief and wall-mounted sculpture",
    ],
    materials: ["Metal", "Bronze", "FRP", "GRC", "Stone", "Wood"],
    faqs: [
      {
        q: "Can you work from a reference image or sketch?",
        a: "Yes. We routinely develop finished sculptures from a client sketch, mood board, architect drawing or 3D render, and share maquettes for approval before production.",
      },
      {
        q: "How long does a custom sculpture take?",
        a: "Most commissions run four to twelve weeks depending on scale, material and finish. We confirm a firm schedule once the concept is signed off.",
      },
      {
        q: "Do you handle installation?",
        a: "We do. Structural fixing, transport, rigging and site finishing are all executed by our in-house team.",
      },
    ],
  },
  {
    slug: "murals",
    title: "Murals & Wall Art",
    short:
      "Creative, customised murals that transform ordinary spaces into artistic experiences.",
    image:"/service/wallart.png",
    overview:
      "Our murals combine hand-craft with material experimentation — textured plaster, metal inlay, carved relief, tile and gold leaf — to create feature walls that anchor an interior.",
    types: [
      "Hand-painted and textured murals",
      "Metal and mixed-media wall art",
      "Carved relief panels",
      "Tile and mosaic compositions",
      "Lobby and facade feature walls",
    ],
    materials: ["Plaster", "Metal", "Tiles", "MDF", "Corian", "Stone"],
    faqs: [
      {
        q: "Can murals be produced off-site?",
        a: "Yes. Panelised murals are built and finished in our workshop and installed on site with minimal disruption.",
      },
      {
        q: "Are the finishes suitable for exteriors?",
        a: "We specify weather-resistant substrates and coatings for any exterior or semi-exposed location.",
      },
    ],
  },
  {
    slug: "decorative-gates-grills",
    title: "Decorative Gates & Grills",
    short:
      "Modern, customised decorative gates, grills and architectural metal designs.",
    image:svcGates ,
    overview:
      "Precision-cut and hand-finished metalwork for entrances, balconies, railings, screens and partitions — engineered for security and detailed like jewellery.",
    types: [
      "Main entrance and driveway gates",
      "Jali screens and partitions",
      "Balcony and staircase railings",
      "Window grills and safety screens",
      "Compound and boundary gates",
    ],
    materials: ["Mild steel", "Stainless steel", "Brass", "Aluminium", "WPC"],
    faqs: [
      {
        q: "Do you provide automation?",
        a: "Yes — motorised sliding and swing systems with remote and intercom integration can be supplied and fitted.",
      },
      {
        q: "What finishes are available?",
        a: "Powder coating, PU, antique patina, brass plating and Corten-style weathered finishes.",
      },
    ],
  },
  {
    slug: "cnc-mdf-designs",
    title: "CNC & MDF Designs",
    short: "Precision CNC cutting, carving and customised MDF decorative patterns.",
    image:"/service/cnc_router.png",
    overview:
      "Parametric and traditional patterns produced on CNC routers and laser tables, with in-house carving, lamination and finishing for interior and facade applications.",
    types: [
      "CNC jali and screen panels",
      "3D carved MDF wall panels",
      "Ceiling and column cladding",
      "Signage and logo lettering",
      "Furniture components",
    ],
    materials: ["MDF", "HDHMR", "WPC", "Acrylic", "Metal sheet", "Corian"],
    faqs: [
      {
        q: "Can you cut to our architect's DXF files?",
        a: "Yes. We accept DXF, DWG and vector artwork and optimise it for clean machining.",
      },
      {
        q: "What is the maximum panel size?",
        a: "Standard panels run up to 8 x 4 feet; larger surfaces are split into concealed-joint modules.",
      },
    ],
  },
  {
    slug: "frp-products",
    title: "FRP Products",
    short: "Durable FRP sculptures, decorative elements and custom products.",
    image:"/service/frp.png",
    overview:
      "Fibre-reinforced plastic lets us produce large, lightweight and weatherproof forms — ideal for facades, themed environments, planters and repeat decorative elements from a single mould.",
    types: [
      "FRP sculptures and figures",
      "Facade and dome elements",
      "Themed and landscape props",
      "Domes, jaalis and cornices",
      "Moulded repeat components",
    ],
    materials: ["FRP", "GRC", "Gel-coat finishes", "PU paint"],
    faqs: [
      {
        q: "How durable is FRP outdoors?",
        a: "With UV-stable gel coats and PU topcoats, our FRP work performs for years in Indian coastal and monsoon conditions.",
      },
      {
        q: "Can you produce multiples?",
        a: "Yes — once a master mould is made, identical units can be produced economically at volume.",
      },
    ],
  },
  {
    slug: "planters-outdoor-furniture",
    title: "Planters & Outdoor Furniture",
    short:
      "Customised planters, trays and exterior furniture for residential and commercial projects.",
    image: svcPlanters,
    overview:
      "Sculptural planters, benches, tables and trays designed to sit within a landscape scheme — built in weather-resistant materials and finished to interior standards.",
    types: [
      "Sculptural and modular planters",
      "Benches and seating clusters",
      "Outdoor tables and consoles",
      "Decorative trays and accessories",
      "Rooftop and podium landscape elements",
    ],
    materials: ["GRC", "FRP", "Metal", "WPC", "Stone"],
    faqs: [
      {
        q: "Are planters supplied with drainage?",
        a: "Yes — drainage, liners and levelling feet are detailed as part of the design.",
      },
      {
        q: "Can finishes match our landscape palette?",
        a: "We colour-match to any stone, tile or paint reference supplied.",
      },
    ],
  },
  {
    slug: "architectural-decorative-work",
    title: "Architectural Decorative Work",
    short:
      "Creative architectural elements in metal, FRP, GRC, wood, stone, tile and more.",
    image:"/work/work8.png" ,
    
    overview:
      "Bespoke decorative packages for developers and architects — facade features, entrance statements, cladding, ceilings and signage delivered as one coordinated scope.",
    types: [
      "Facade decorative features",
      "Entrance and lobby statements",
      "GRC cladding and cornices",
      "Feature ceilings and columns",
      "Landmark and signage elements",
    ],
    materials: ["Metal", "GRC", "FRP", "Stone", "Tiles", "Wood", "Corian", "WPC"],
    faqs: [
      {
        q: "Do you work directly with architects and PMCs?",
        a: "Yes. We coordinate shop drawings, samples and approvals within the project's consultant process.",
      },
      {
        q: "Can you handle large multi-tower projects?",
        a: "We have delivered decorative packages across full residential townships and commercial campuses.",
      },
    ],
  },
];

export const projectCategories = [
  "All Projects",
  "Sculptures",
  "Murals",
  "Decorative Gates & Grills",
  "CNC & MDF",
  "FRP Products",
  "Residential",
  "Commercial",
  "Outdoor Furniture",
] as const;

export type Project = {
  slug: string;
  name: string;
  category: string;
  tags: string[];
  location: string;
  client: string;
  materials: string[];
  image: string;
  gallery: string[];
  description: string;
  challenge: string;
  approach: string;
  process: string;
  result: string;
};

export const projects: Project[] = [
  {
    slug: "luxury-residential-entrance",
    name: "Luxury Residential Entrance",
    category: "Decorative Gates & Grills",
    tags: ["Decorative Gates & Grills", "Residential"],
    location: "Juhu, Mumbai",
    client: "Private Residence",
    materials: ["Mild steel", "Brass inlay", "PU finish"],
    image: "/work/gate_grill.png",
    gallery: [svcGates, svcCnc, svcArchitectural],
    description:
      "A laser-cut entrance gate with a layered geometric jali, developed as the signature arrival moment for a sea-facing private residence.",
    challenge:
      "The gate had to read as a single sculptural plane while carrying the weight and security requirements of a 14-foot motorised opening.",
    approach:
      "We modelled the pattern parametrically so the density increased toward the frame, allowing a slim visual profile without compromising the structure.",
    process:
      "Sections were laser-cut, hand-dressed, welded on a jig, brass-inlaid and PU-finished in our workshop before site assembly over two days.",
    result:
      "A gate that shifts appearance through the day as light passes through the pattern, now the most photographed element of the residence.",
  },
  {
    slug: "hotel-lobby-metal-sculpture",
    name: "Atrium Ribbon Sculpture",
    category: "Sculptures",
    tags: ["Sculptures", "Commercial"],
    location: "Lower Parel, Mumbai",
    client: "Five-star hospitality group",
    materials: ["Stainless steel", "Brushed bronze finish"],
    image: heroInstallation,
    gallery: [heroInstallation, svcSculpture, svcArchitectural],
    description:
      "A 6.5-metre ribbon sculpture suspended over a hotel atrium, engineered in brushed metal to catch the building's warm accent lighting.",
    challenge:
      "The form needed continuous curvature with no visible seams, installed inside a live hotel without scaffolding the full atrium.",
    approach:
      "The surface was split into eleven pre-finished segments with concealed internal splines, allowing assembly in place.",
    process:
      "Full-scale mock-up, CNC-formed segments, hand polishing, structural load testing, then a four-night installation window.",
    result:
      "A landmark centrepiece delivered without a single day of guest disruption.",
  },
  {
    slug: "corporate-lobby-mural",
    name: "Stone & Gold Lobby Mural",
    category: "Murals",
    tags: ["Murals", "Commercial"],
    location: "Bandra Kurla Complex, Mumbai",
    client: "Corporate headquarters",
    materials: ["Textured plaster", "Gold leaf", "Pigment"],
    image: "/work/zali_installation.png",
    gallery: [svcMural, svcSculpture, svcCnc],
    description:
      "A 9-metre textured mural in stone tones with restrained gold veining, produced as panels and installed across a double-height reception wall.",
    challenge:
      "The client wanted an artwork that felt hand-made but had to be installed in a single weekend shutdown.",
    approach:
      "We developed the composition across ten panels so the artwork could be finished in the workshop and dry-fixed on site.",
    process:
      "Sample boards, panel build-up, hand-applied plaster layers, gold leafing, sealing and site installation.",
    result:
      "A tactile focal wall that has become the company's primary brand backdrop.",
  },
  {
    slug: "cnc-jali-facade",
    name: "Parametric CNC Jali Facade",
    category: "CNC & MDF",
    tags: ["CNC & MDF", "Commercial"],
    location: "Thane, Mumbai",
    client: "Commercial developer",
    materials: ["MDF", "WPC", "Powder-coated aluminium"],
    image: svcCnc,
    gallery: [svcCnc, svcArchitectural, svcGates],
    description:
      "A flowing CNC-carved screen system used across a sales-gallery facade and interior partitions.",
    challenge:
      "A continuous pattern had to run across 42 panels with tolerances tight enough to hide every joint.",
    approach:
      "Panels were nested from one master file with alignment keys machined into each edge.",
    process:
      "Digital pattern development, CNC routing, sanding, lamination and modular installation.",
    result: "A seamless 30-metre run that reads as one carved surface.",
  },
  {
    slug: "frp-facade-feature",
    name: "Sculpted FRP Facade Feature",
    category: "FRP Products",
    tags: ["FRP Products", "Commercial"],
    location: "Navi Mumbai",
    client: "Mixed-use development",
    materials: ["FRP", "Gel coat", "PU topcoat"],
    image: "/work/work3.jpeg",
    gallery: [svcFrp, svcArchitectural, svcSculpture],
    description:
      "Lightweight moulded FRP elements forming a flowing sculptural band across a commercial entrance canopy.",
    challenge:
      "The structure could not take additional dead load, and the finish had to survive coastal weather.",
    approach:
      "A mould-based FRP system kept weight under a fifth of a cast alternative while allowing identical repeats.",
    process:
      "Clay master, mould making, lay-up, gel-coat finishing, UV-stable PU coating, crane installation.",
    result: "A bold entrance identity with a maintenance cycle of years, not months.",
  },
  {
    slug: "podium-landscape-planters",
    name: "Podium Landscape Planters",
    category: "Outdoor Furniture",
    tags: ["Outdoor Furniture", "Residential"],
    location: "Powai, Mumbai",
    client: "Residential township",
    materials: ["GRC", "Metal", "Stone finish"],
    image: "/service/platform.png",
    gallery: [svcPlanters, svcArchitectural, svcGates],
    description:
      "Sculptural GRC planters and custom benches designed for a residential podium garden across two towers.",
    challenge:
      "Every unit had to be liftable by two people yet read as solid cast stone.",
    approach:
      "Thin-shell GRC with internal ribs delivered the mass and texture of stone at a fraction of the weight.",
    process:
      "Prototype, mould production, GRC casting, drainage detailing, site placement and planting coordination.",
    result:
      "A cohesive landscape language now repeated across later phases of the township.",
  },
  {
    slug: "villa-bronze-sculpture",
    name: "Courtyard Bronze Figure",
    category: "Sculptures",
    tags: ["Sculptures", "Residential"],
    location: "Alibaug",
    client: "Private villa",
    materials: ["Bronze", "Travertine plinth"],
    image: svcSculpture,
    gallery: [svcSculpture, heroInstallation, svcMural],
    description:
      "A figurative bronze commissioned as the focal point of a villa courtyard, with a hand-patinated finish.",
    challenge:
      "The client approved the concept from a single sketch and needed the piece within ten weeks.",
    approach:
      "We produced a half-scale maquette for sign-off, then moved directly into full-scale modelling and casting.",
    process: "Sketch, maquette, clay modelling, casting, chasing, patination, installation.",
    result: "Delivered a week early, with the patina developing beautifully in sea air.",
  },
  {
    slug: "grc-cladding-programme",
    name: "GRC Cladding Programme",
    category: "Commercial",
    tags: ["Commercial", "FRP Products"],
    location: "Andheri, Mumbai",
    client: "Leading builder group",
    materials: ["GRC", "Stone", "Metal fins"],
    image: "/work/newchess.png",
    gallery: [svcArchitectural, svcCnc, svcFrp],
    description:
      "A full decorative cladding package covering entrance portals, cornices and feature fins across three towers.",
    challenge:
      "Three towers, one visual language and a construction programme that could not slip.",
    approach:
      "A standard component kit with tower-specific variations kept production efficient and detailing consistent.",
    process:
      "Shop drawings, mould library, casting, finishing, sequenced deliveries and phased installation.",
    result: "All three towers handed over on schedule with a unified architectural identity.",
  },
];

// new project
export type CreationProject = {
  id: number;
  title: string;
  category: string;
  image: string;
  video: string;
  description: string;
};

export const creationProjects: CreationProject[] = [
  {
    id: 1,
    title: "Crafting Decorative Gates",
    category: "Behind The Creation",
    image: "/service/siddhioncreationwork.png",
    video: "/work2.mp4",
    description:
      "From design and precision cutting to fabrication and the final installation.",
  },
  {
    id: 2,
    title: "Creating Artistic Sculptures",
    category: "Behind The Creation",
    image: "/work/newchess.png",
    video: "/work4.mp4",
    description:
      "Watch the transformation from raw materials into a finished sculptural installation.",
  },
  {
    id: 3,
    title: "CNC Design & Carving",
    category: "Behind The Creation",
    image: "/work/work4.jpg",
    video: "/work5.mp4",
    description:
      "From digital design to precision CNC cutting and detailed finishing.",
  },
  {
    id: 4,
    title: "Mural Creation",
    category: "Behind The Creation",
    image: "/work/work9.png",
    video: "work8.mp4",
    description:
      "Layers, textures and artistic details come together to create a unique mural.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Consultation",
    text: "Understanding the client's vision, requirements and project goals.",
  },
  {
    number: "02",
    title: "Design & Concept",
    text: "Creating customised concepts and design solutions.",
  },
  {
    number: "03",
    title: "Material Selection",
    text: "Selecting the right materials for the design, durability and site conditions.",
  },
  {
    number: "04",
    title: "Manufacturing",
    text: "Our skilled craftsmen and workshop team turn the concept into reality.",
  },
  {
    number: "05",
    title: "Installation",
    text: "Professional execution, delivery and installation of the finished work.",
  },
];

export const materials = [
  "Metal",
  "FRP",
  "GRC",
  "Wood",
  "MDF",
  "Stone",
  "Tiles",
  "Corian / Solid Surface",
  "WPC",
];

export const clients = [
  {
    name: "NL Builder",
    logo: "/client_logo/nl-logo.webp",
  },
  {
    name: "Rounk Builders",
    logo: "/client_logo/rounk_builders.png",
  },
  {
    name: "Dhamji Shamji Shah Group",
    logo: "/client_logo/dhamji_shamji_shah_group.png",
  },
  {
    name: "JP Infra",
    logo: "/client_logo/jp_infra.png",
  },
  {
    name: " Ajmera Group Bhakti Park Wadala",
    logo: "/client_logo/ajmera_group_bhakti_wadala.webp",
  },
  {
    name: "Water Kingdom",
    logo: "/client_logo/water_kingdom.jpg",
  },
  {
    name: "Anan Residency ",
    logo: "/client_logo/ana_residency.jpg",
  },
  {
    name: " Shrimad Rajchandra Hospital",
    logo: "/client_logo/shrimad_rajchandra_hospital_dharmpur.png",
  },
  {
    name: "Vishwraj Developers ",
    logo: "/client_logo/vishwraj_developers.png",
  },
  {
    name: "White Berry ",
    logo: "/client_logo/white-berry.jpg",
  },
  {
    name: " Bombay House ",
    logo: "/client_logo/bombay_house.png",
  },
  {
    name: "Manavta Hospital",
    logo: "/client_logo/manavta_hospital.png",
  },
];
export const MATERIALS = [
  { name: "Metal", note: "Forged · Cast · Fabricated", image: texMetal },
  { name: "FRP", note: "Moulded · Lightweight", image: texCorian },
  { name: "GRC", note: "Cast · Architectural", image: texStone },
  { name: "Wood", note: "Carved · Joined", image: texWood },
  { name: "MDF", note: "CNC · Laminated", image: cnc },
  { name: "Stone", note: "Cut · Hand-dressed", image: texStone },
  { name: "Tiles", note: "Mosaic · Inlay", image: mural },
  { name: "Corian", note: "Thermoformed · Seamless", image: texCorian },
  { name: "WPC", note: "Weatherproof · Machined", image: texWood },
];

// export const testimonials = [

//   {
//     quote:
//       "Siddhi On Creation delivered exceptional craftsmanship and creativity for our lobby installation. The final result exceeded our expectations.",
//     name: "Rohit Mehra",
//     company: "Meridian Developers",
//     project: "Lobby Sculpture",
//   },
//   {
//     quote:
//       "They understood the architectural intent immediately and translated it into metalwork that looks far more expensive than it cost us.",
//     name: "Ar. Neha Kulkarni",
//     company: "Studio Nine Architects",
//     project: "Decorative Gate & Jali",
//   },
//   {
//     quote:
//       "Thirty years of experience shows in the detailing. Site coordination was clean and the installation team was genuinely professional.",
//     name: "Sandeep Rane",
//     company: "Ascent Projects",
//     project: "GRC Cladding Package",
//   },
//   {
//     quote:
//       "The mural transformed our reception. Guests ask about it every single week.",
//     name: "Priya Nair",
//     company: "Aurum Hospitality",
//     project: "Textured Lobby Mural",
//   },
//   {
//     quote:
//       "We needed 60 identical FRP elements on a tight programme. They delivered ahead of schedule with consistent quality.",
//     name: "Vikram Shah",
//     company: "Northline Infra",
//     project: "FRP Facade Elements",
//   },
//   {
//     quote:
//       "From concept sketches to installation, one team handled everything. That made our job simple.",
//     name: "Meera Joshi",
//     company: "Verde Landscape Studio",
//     project: "Podium Planters",
//   },
// ];
export const testimonials = [
  {
    name: "1 John Smith",
    company: "ABC Company",
    project: "Brand Development",
    quote:
      "Working with the team was an exceptional experience. Their creativity and professionalism exceeded our expectations.",
    image: "/testimonal_images/testimonial-1.jpg",
    rating: 5,
  },
  {
    name: "2 Sarah Johnson",
    company: "XYZ Industries",
    project: "Interior Design",
    quote:
      "The entire process was smooth, professional, and delivered exactly what we envisioned for our project.",
    image: "/testimonal_images/testimonial-2.jpg",
    rating: 5,
  },
  {
    name: "3 Sarah Johnson",
    company: "XYZ Industries",
    project: "Interior Design",
    quote:
      "The entire process was smooth, professional, and delivered exactly what we envisioned for our project.",
    image: "/testimonal_images/testimonial-2.jpg",
    rating: 5,
  },
  {
    name: " 4 Sarah Johnson",
    company: "XYZ Industries",
    project: "Interior Design",
    quote:
      "The entire process was smooth, professional, and delivered exactly what we envisioned for our project.",
    image: "/testimonal_images/testimonial-2.jpg",
    rating: 5,
  },
];
export const whyChooseUs = [
  {
    title: "30+ Years of Experience",
    text: "Decades of expertise in artistic and architectural creations.",
  },
  {
    title: "Customised Solutions",
    text: "Every project is designed around the client's specific requirement.",
  },
  {
    title: "Skilled Craftsmanship",
    text: "A team focused on creativity, precision and finish quality.",
  },
  {
    title: "Multiple Materials",
    text: "Metal, FRP, GRC, wood, stone, MDF and solid surface under one roof.",
  },
  {
    title: "End-to-End Execution",
    text: "Concept and design through manufacturing and installation.",
  },
  {
    title: "Residential & Commercial",
    text: "Projects delivered across homes, hospitality, offices and townships.",
  },
];
