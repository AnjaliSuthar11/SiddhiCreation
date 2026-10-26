import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-DyhvXyU-.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var hero_installation_default = "/assets/hero-installation-qMpSMAar.jpg";
var about_workshop_default = "/assets/about-workshop-CLeXx0Ty.jpg";
var svc_sculpture_default = "/assets/svc-sculpture-c9vFgl16.jpg";
var svc_mural_default = "/assets/svc-mural-D3KdXmiA.jpg";
var svc_gates_default = "/assets/svc-gates-DrnoRJCD.jpg";
var svc_cnc_default = "/assets/svc-cnc-CMxRwqfB.jpg";
var svc_frp_default = "/assets/svc-frp-BZhrVF1c.jpg";
var svc_planters_default = "/assets/svc-planters-BlrBr_OE.jpg";
var svc_architectural_default = "/assets/svc-architectural-BpvI3edy.jpg";
var cta_workshop_default = "/assets/cta-workshop-DkFrdJ5t.jpg";
var tex_metal_default = "/assets/tex-metal-Dgw-6z-R.jpg";
var tex_stone_default = "/assets/tex-stone-BOo4NYzQ.jpg";
var tex_wood_default = "/assets/tex-wood-DaGdPm5Y.jpg";
var tex_corian_default = "/assets/tex-corian-Dd1UVqzc.jpg";
var mural_default = "/assets/mural-4hKNCesa.jpg";
var cnc_default = "/assets/cnc-CGxGgYF0.jpg";
var painting_default = "/assets/painting-CfFS1M2F.jpg";
var play_school_default = "/assets/play-school-DfBStoyJ.png";
var play_school2_default = "/assets/play-school2-XNouhhGU.png";
var wall_painting8_default = "/assets/wall-painting8-DKam-U2v.png";
var wall_painting9_default = "/assets/wall-painting9-DcJF9gDN.png";
var toy_train_model_default = "/assets/toy-train-model-34VJwdEo.png";
var wall_painting1_default = "/assets/wall-painting1-DngFXsIb.jpg";
var wall_painting6_default = "/assets/wall-painting6-DALIjSO2.jpg";
var wall_painting7_default = "/assets/wall-painting7-D47T4TCV.jpg";
var deer_mural_default = "/assets/deer-mural-B2RDcIZP.jpg";
var outdoorArt_default = "/assets/outdoorArt-DBx05UbT.jpg";
var outdoorStoneArt_default = "/assets/outdoorStoneArt-DbrGe-mo.png";
var outdoorShowPiece_default = "/assets/outdoorShowPiece-B24a7iG3.jpg";
var images = {
	heroInstallation: hero_installation_default,
	aboutWorkshop: about_workshop_default,
	svcSculpture: svc_sculpture_default,
	svcMural: svc_mural_default,
	svcGates: svc_gates_default,
	svcCnc: svc_cnc_default,
	svcFrp: svc_frp_default,
	svcPlanters: svc_planters_default,
	svcArchitectural: svc_architectural_default,
	ctaWorkshop: cta_workshop_default,
	painting: painting_default,
	playSchoolwallpainting: wall_painting8_default,
	playSchool2: play_school2_default,
	playschoolwallpainting2: wall_painting9_default,
	toytrain: toy_train_model_default,
	wallpainting2: wall_painting6_default,
	wallpainting1: wall_painting1_default,
	deermural: deer_mural_default,
	outdoorArt: outdoorArt_default,
	outdoorStoneArt: outdoorStoneArt_default
};
var company = {
	name: "Siddhi On Creation",
	sister: "Mr. Shekhar Suresh Satardekar",
	phone: "9967066685",
	phoneHref: "tel:+9967066685",
	whatsapp: " 9967066685",
	email: "Siddhi.on.creation@gmail.com",
	address: "Gala NO. 15, Building No.3, Jay Vijay Industry, Western Express Highway, Bapane, Naigaon East, Thane, Maharashtra 401208.",
	hours: "Monday – Saturday, 10:00 – 19:00 IST",
	instagram: "https://instagram.com",
	facebook: "https://facebook.com",
	linkedin: "https://linkedin.com"
};
var whatsappLink = (message = "Hello, I would like to discuss a project with Siddhi On Creation.") => `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
var services = [
	{
		slug: "sculptures",
		title: "Sculpture & Artworks",
		short: "Custom sculptures designed for residential, commercial and architectural spaces.",
		image: "/service/siddhioncreationwork.png",
		overview: "We design and manufacture custom sculptures at every scale — from intimate table pieces to monumental lobby and landscape installations. Each commission begins with a concept study and ends with on-site installation by our own team.",
		types: [
			"Figurative and portrait sculpture",
			"Abstract and contemporary forms",
			"Monumental and landmark installations",
			"Suspended and kinetic art pieces",
			"Bas-relief and wall-mounted sculpture"
		],
		materials: [
			"Metal",
			"Bronze",
			"FRP",
			"GRC",
			"Stone",
			"Wood"
		],
		faqs: [
			{
				q: "Can you work from a reference image or sketch?",
				a: "Yes. We routinely develop finished sculptures from a client sketch, mood board, architect drawing or 3D render, and share maquettes for approval before production."
			},
			{
				q: "How long does a custom sculpture take?",
				a: "Most commissions run four to twelve weeks depending on scale, material and finish. We confirm a firm schedule once the concept is signed off."
			},
			{
				q: "Do you handle installation?",
				a: "We do. Structural fixing, transport, rigging and site finishing are all executed by our in-house team."
			}
		]
	},
	{
		slug: "murals",
		title: "Murals & Wall Art",
		short: "Creative, customised murals that transform ordinary spaces into artistic experiences.",
		image: "/service/wallart.png",
		overview: "Our murals combine hand-craft with material experimentation — textured plaster, metal inlay, carved relief, tile and gold leaf — to create feature walls that anchor an interior.",
		types: [
			"Hand-painted and textured murals",
			"Metal and mixed-media wall art",
			"Carved relief panels",
			"Tile and mosaic compositions",
			"Lobby and facade feature walls"
		],
		materials: [
			"Plaster",
			"Metal",
			"Tiles",
			"MDF",
			"Corian",
			"Stone"
		],
		faqs: [{
			q: "Can murals be produced off-site?",
			a: "Yes. Panelised murals are built and finished in our workshop and installed on site with minimal disruption."
		}, {
			q: "Are the finishes suitable for exteriors?",
			a: "We specify weather-resistant substrates and coatings for any exterior or semi-exposed location."
		}]
	},
	{
		slug: "decorative-gates-grills",
		title: "Metal & Decorative Work",
		short: "Modern, customised decorative gates, grills and architectural metal designs.",
		image: svc_gates_default,
		overview: "Precision-cut and hand-finished metalwork for entrances, balconies, railings, screens and partitions — engineered for security and detailed like jewellery.",
		types: [
			"Main entrance and driveway gates",
			"Jali screens and partitions",
			"Balcony and staircase railings",
			"Window grills and safety screens",
			"Compound and boundary gates"
		],
		materials: [
			"Mild steel",
			"Stainless steel",
			"Brass",
			"Aluminium",
			"WPC"
		],
		faqs: [{
			q: "Do you provide automation?",
			a: "Yes — motorised sliding and swing systems with remote and intercom integration can be supplied and fitted."
		}, {
			q: "What finishes are available?",
			a: "Powder coating, PU, antique patina, brass plating and Corten-style weathered finishes."
		}]
	},
	{
		slug: "cnc-mdf-designs",
		title: "CNC & MDF Designs",
		short: "Precision CNC cutting, carving and customised MDF decorative patterns.",
		image: "/service/cnc_router.png",
		overview: "Parametric and traditional patterns produced on CNC routers and laser tables, with in-house carving, lamination and finishing for interior and facade applications.",
		types: [
			"CNC jali and screen panels",
			"3D carved MDF wall panels",
			"Ceiling and column cladding",
			"Signage and logo lettering",
			"Furniture components"
		],
		materials: [
			"MDF",
			"HDHMR",
			"WPC",
			"Acrylic",
			"Metal sheet",
			"Corian"
		],
		faqs: [{
			q: "Can you cut to our architect's DXF files?",
			a: "Yes. We accept DXF, DWG and vector artwork and optimise it for clean machining."
		}, {
			q: "What is the maximum panel size?",
			a: "Standard panels run up to 8 x 4 feet; larger surfaces are split into concealed-joint modules."
		}]
	},
	{
		slug: "frp-products",
		title: "FRP Work",
		short: "Durable FRP sculptures, decorative elements and custom products.",
		image: "/service/frp.png",
		overview: "Fibre-reinforced plastic lets us produce large, lightweight and weatherproof forms — ideal for facades, themed environments, planters and repeat decorative elements from a single mould.",
		types: [
			"FRP sculptures and figures",
			"Facade and dome elements",
			"Themed and landscape props",
			"Domes, jaalis and cornices",
			"Moulded repeat components"
		],
		materials: [
			"FRP",
			"GRC",
			"Gel-coat finishes",
			"PU paint"
		],
		faqs: [{
			q: "How durable is FRP outdoors?",
			a: "With UV-stable gel coats and PU topcoats, our FRP work performs for years in Indian coastal and monsoon conditions."
		}, {
			q: "Can you produce multiples?",
			a: "Yes — once a master mould is made, identical units can be produced economically at volume."
		}]
	},
	{
		slug: "planters-outdoor-furniture",
		title: "Planters & Outdoor Furniture",
		short: "Customised planters, trays and exterior furniture for residential and commercial projects.",
		image: svc_planters_default,
		overview: "Sculptural planters, benches, tables and trays designed to sit within a landscape scheme — built in weather-resistant materials and finished to interior standards.",
		types: [
			"Sculptural and modular planters",
			"Benches and seating clusters",
			"Outdoor tables and consoles",
			"Decorative trays and accessories",
			"Rooftop and podium landscape elements"
		],
		materials: [
			"GRC",
			"FRP",
			"Metal",
			"WPC",
			"Stone"
		],
		faqs: [{
			q: "Are planters supplied with drainage?",
			a: "Yes — drainage, liners and levelling feet are detailed as part of the design."
		}, {
			q: "Can finishes match our landscape palette?",
			a: "We colour-match to any stone, tile or paint reference supplied."
		}]
	},
	{
		slug: "architectural-decorative-work",
		title: "Architectural & Decorative Work",
		short: "Creative architectural elements in metal, FRP, GRC, wood, stone, tile and more.",
		image: "/work/work8.png",
		overview: "Bespoke decorative packages for developers and architects — facade features, entrance statements, cladding, ceilings and signage delivered as one coordinated scope.",
		types: [
			"Facade decorative features",
			"Entrance and lobby statements",
			"GRC cladding and cornices",
			"Feature ceilings and columns",
			"Landmark and signage elements"
		],
		materials: [
			"Metal",
			"GRC",
			"FRP",
			"Stone",
			"Tiles",
			"Wood",
			"Corian",
			"WPC"
		],
		faqs: [{
			q: "Do you work directly with architects and PMCs?",
			a: "Yes. We coordinate shop drawings, samples and approvals within the project's consultant process."
		}, {
			q: "Can you handle large multi-tower projects?",
			a: "We have delivered decorative packages across full residential townships and commercial campuses."
		}]
	}
];
var projectCategories = [
	"All Projects",
	"Sculptures",
	"Murals",
	"Decorative Gates & Grills",
	"CNC & MDF",
	"FRP Products",
	"Residential",
	"Commercial",
	"Outdoor Furniture",
	"Wall painting"
];
var projects = [
	{
		slug: "luxury-residential-entrance",
		name: "Luxury Residential Entrance",
		category: "Decorative Gates & Grills",
		tags: ["Decorative Gates & Grills", "Residential"],
		location: "Juhu, Mumbai",
		client: "Private Residence",
		materials: [
			"Mild steel",
			"Brass inlay",
			"PU finish"
		],
		image: "/work/gate_grill.png",
		gallery: [
			svc_gates_default,
			svc_cnc_default,
			svc_architectural_default
		],
		description: "A laser-cut entrance gate with a layered geometric jali, developed as the signature arrival moment for a sea-facing private residence.",
		challenge: "The gate had to read as a single sculptural plane while carrying the weight and security requirements of a 14-foot motorised opening.",
		approach: "We modelled the pattern parametrically so the density increased toward the frame, allowing a slim visual profile without compromising the structure.",
		process: "Sections were laser-cut, hand-dressed, welded on a jig, brass-inlaid and PU-finished in our workshop before site assembly over two days.",
		result: "A gate that shifts appearance through the day as light passes through the pattern, now the most photographed element of the residence."
	},
	{
		slug: "hotel-lobby-metal-sculpture",
		name: "Atrium Ribbon Sculpture",
		category: "Sculptures",
		tags: ["Sculptures", "Commercial"],
		location: "Lower Parel, Mumbai",
		client: "Five-star hospitality group",
		materials: ["Stainless steel", "Brushed bronze finish"],
		image: hero_installation_default,
		gallery: [
			hero_installation_default,
			svc_sculpture_default,
			svc_architectural_default
		],
		description: "A 6.5-metre ribbon sculpture suspended over a hotel atrium, engineered in brushed metal to catch the building's warm accent lighting.",
		challenge: "The form needed continuous curvature with no visible seams, installed inside a live hotel without scaffolding the full atrium.",
		approach: "The surface was split into eleven pre-finished segments with concealed internal splines, allowing assembly in place.",
		process: "Full-scale mock-up, CNC-formed segments, hand polishing, structural load testing, then a four-night installation window.",
		result: "A landmark centrepiece delivered without a single day of guest disruption."
	},
	{
		slug: "corporate-lobby-mural",
		name: "Stone & Gold Lobby Mural",
		category: "Murals",
		tags: ["Murals", "Commercial"],
		location: "Bandra Kurla Complex, Mumbai",
		client: "Corporate headquarters",
		materials: [
			"Textured plaster",
			"Gold leaf",
			"Pigment"
		],
		image: "/work/zali_installation.png",
		gallery: [
			svc_mural_default,
			svc_sculpture_default,
			svc_cnc_default
		],
		description: "A 9-metre textured mural in stone tones with restrained gold veining, produced as panels and installed across a double-height reception wall.",
		challenge: "The client wanted an artwork that felt hand-made but had to be installed in a single weekend shutdown.",
		approach: "We developed the composition across ten panels so the artwork could be finished in the workshop and dry-fixed on site.",
		process: "Sample boards, panel build-up, hand-applied plaster layers, gold leafing, sealing and site installation.",
		result: "A tactile focal wall that has become the company's primary brand backdrop."
	},
	{
		slug: "cnc-jali-facade",
		name: "Parametric CNC Jali Facade",
		category: "CNC & MDF",
		tags: ["CNC & MDF", "Commercial"],
		location: "Thane, Mumbai",
		client: "Commercial developer",
		materials: [
			"MDF",
			"WPC",
			"Powder-coated aluminium"
		],
		image: svc_cnc_default,
		gallery: [
			svc_cnc_default,
			svc_architectural_default,
			svc_gates_default
		],
		description: "A flowing CNC-carved screen system used across a sales-gallery facade and interior partitions.",
		challenge: "A continuous pattern had to run across 42 panels with tolerances tight enough to hide every joint.",
		approach: "Panels were nested from one master file with alignment keys machined into each edge.",
		process: "Digital pattern development, CNC routing, sanding, lamination and modular installation.",
		result: "A seamless 30-metre run that reads as one carved surface."
	},
	{
		slug: "frp-facade-feature",
		name: "Sculpted FRP Facade Feature",
		category: "FRP Products",
		tags: ["FRP Products", "Commercial"],
		location: "Navi Mumbai",
		client: "Mixed-use development",
		materials: [
			"FRP",
			"Gel coat",
			"PU topcoat"
		],
		image: "/work/work3.jpeg",
		gallery: [
			svc_frp_default,
			svc_architectural_default,
			svc_sculpture_default
		],
		description: "Lightweight moulded FRP elements forming a flowing sculptural band across a commercial entrance canopy.",
		challenge: "The structure could not take additional dead load, and the finish had to survive coastal weather.",
		approach: "A mould-based FRP system kept weight under a fifth of a cast alternative while allowing identical repeats.",
		process: "Clay master, mould making, lay-up, gel-coat finishing, UV-stable PU coating, crane installation.",
		result: "A bold entrance identity with a maintenance cycle of years, not months."
	},
	{
		slug: "play-school",
		name: "Play School ",
		category: "Wall Painting",
		tags: ["Wall painting"],
		location: "Bandra Kurla Complex, Mumbai",
		client: "Corporate headquarters",
		materials: [
			"Textured plaster",
			"Gold leaf",
			"Pigment"
		],
		image: play_school_default,
		gallery: [
			toy_train_model_default,
			play_school2_default,
			wall_painting8_default,
			wall_painting9_default
		],
		description: "A 9-metre textured mural in stone tones with restrained gold veining, produced as panels and installed across a double-height reception wall.",
		challenge: "The client wanted an artwork that felt hand-made but had to be installed in a single weekend shutdown.",
		approach: "We developed the composition across ten panels so the artwork could be finished in the workshop and dry-fixed on site.",
		process: "Sample boards, panel build-up, hand-applied plaster layers, gold leafing, sealing and site installation.",
		result: "A tactile focal wall that has become the company's primary brand backdrop."
	},
	{
		slug: "deer-murals",
		name: "Deer Decoration",
		category: "Murals",
		tags: ["CNC & MDF", "Commercial"],
		location: "Thane, Mumbai",
		client: "Commercial developer",
		materials: [
			"MDF",
			"WPC",
			"Powder-coated aluminium"
		],
		image: deer_mural_default,
		gallery: [
			svc_cnc_default,
			svc_architectural_default,
			svc_gates_default
		],
		description: "A flowing CNC-carved screen system used across a sales-gallery facade and interior partitions.",
		challenge: "A continuous pattern had to run across 42 panels with tolerances tight enough to hide every joint.",
		approach: "Panels were nested from one master file with alignment keys machined into each edge.",
		process: "Digital pattern development, CNC routing, sanding, lamination and modular installation.",
		result: "A seamless 30-metre run that reads as one carved surface."
	},
	{
		slug: "podium-landscape-planters",
		name: "Podium Landscape Planters",
		category: "Outdoor Furniture",
		tags: ["Outdoor Furniture", "Residential"],
		location: "Powai, Mumbai",
		client: "Residential township",
		materials: [
			"GRC",
			"Metal",
			"Stone finish"
		],
		image: "/service/platform.png",
		gallery: [
			svc_planters_default,
			svc_architectural_default,
			svc_gates_default
		],
		description: "Sculptural GRC planters and custom benches designed for a residential podium garden across two towers.",
		challenge: "Every unit had to be liftable by two people yet read as solid cast stone.",
		approach: "Thin-shell GRC with internal ribs delivered the mass and texture of stone at a fraction of the weight.",
		process: "Prototype, mould production, GRC casting, drainage detailing, site placement and planting coordination.",
		result: "A cohesive landscape language now repeated across later phases of the township."
	},
	{
		slug: "villa-bronze-sculpture",
		name: "Courtyard Bronze Figure",
		category: "Sculptures",
		tags: ["Sculptures", "Residential"],
		location: "Alibaug",
		client: "Private villa",
		materials: ["Bronze", "Travertine plinth"],
		image: svc_sculpture_default,
		gallery: [
			svc_sculpture_default,
			hero_installation_default,
			svc_mural_default
		],
		description: "A figurative bronze commissioned as the focal point of a villa courtyard, with a hand-patinated finish.",
		challenge: "The client approved the concept from a single sketch and needed the piece within ten weeks.",
		approach: "We produced a half-scale maquette for sign-off, then moved directly into full-scale modelling and casting.",
		process: "Sketch, maquette, clay modelling, casting, chasing, patination, installation.",
		result: "Delivered a week early, with the patina developing beautifully in sea air."
	},
	{
		slug: "grc-cladding-programme",
		name: "GRC Cladding Programme",
		category: "Commercial",
		tags: ["Commercial", "FRP Products"],
		location: "Andheri, Mumbai",
		client: "Leading builder group",
		materials: ["paint colour"],
		image: "/work/newchess.png",
		gallery: [
			svc_architectural_default,
			svc_cnc_default,
			svc_frp_default
		],
		description: "A full decorative cladding package covering entrance portals, cornices and feature fins across three towers.",
		challenge: "Three towers, one visual language and a construction programme that could not slip.",
		approach: "A standard component kit with tower-specific variations kept production efficient and detailing consistent.",
		process: "Shop drawings, mould library, casting, finishing, sequenced deliveries and phased installation.",
		result: "All three towers handed over on schedule with a unified architectural identity."
	},
	{
		slug: "stone-art",
		name: "Stone Art",
		category: "Outdoor Furniture",
		tags: ["CNC & MDF", "Commercial"],
		location: "Thane, Mumbai",
		client: "Commercial developer",
		materials: [
			"MDF",
			"WPC",
			"Powder-coated aluminium"
		],
		image: outdoorArt_default,
		gallery: [
			outdoorArt_default,
			outdoorStoneArt_default,
			deer_mural_default
		],
		description: "A flowing CNC-carved screen system used across a sales-gallery facade and interior partitions.",
		challenge: "A continuous pattern had to run across 42 panels with tolerances tight enough to hide every joint.",
		approach: "Panels were nested from one master file with alignment keys machined into each edge.",
		process: "Digital pattern development, CNC routing, sanding, lamination and modular installation.",
		result: "A seamless 30-metre run that reads as one carved surface."
	},
	{
		slug: "showpiece",
		name: "unique show piece",
		category: "Outdoor Furniture",
		tags: ["CNC & MDF", "Commercial"],
		location: "Thane, Mumbai",
		client: "Commercial developer",
		materials: [
			"MDF",
			"WPC",
			"Powder-coated aluminium"
		],
		image: outdoorShowPiece_default,
		gallery: [
			outdoorShowPiece_default,
			outdoorArt_default,
			outdoorStoneArt_default,
			deer_mural_default
		],
		description: "A flowing CNC-carved screen system used across a sales-gallery facade and interior partitions.",
		challenge: "A continuous pattern had to run across 42 panels with tolerances tight enough to hide every joint.",
		approach: "Panels were nested from one master file with alignment keys machined into each edge.",
		process: "Digital pattern development, CNC routing, sanding, lamination and modular installation.",
		result: "A seamless 30-metre run that reads as one carved surface."
	},
	{
		slug: "wall-painting",
		name: "wall painting",
		category: "Wall painting",
		tags: ["Wall painting"],
		location: "Lower Parel, Mumbai",
		client: "xyz school in mumbai",
		materials: ["Stainless steel", "Brushed bronze finish"],
		image: painting_default,
		gallery: [
			wall_painting1_default,
			wall_painting6_default,
			wall_painting7_default
		],
		description: "A 6.5-metre ribbon sculpture suspended over a hotel atrium, engineered in brushed metal to catch the building's warm accent lighting.",
		challenge: "The form needed continuous curvature with no visible seams, installed inside a live hotel without scaffolding the full atrium.",
		approach: "The surface was split into eleven pre-finished segments with concealed internal splines, allowing assembly in place.",
		process: "Full-scale mock-up, CNC-formed segments, hand polishing, structural load testing, then a four-night installation window.",
		result: "A landmark centrepiece delivered without a single day of guest disruption."
	}
];
var creationProjects = [
	{
		id: 1,
		title: "Crafting Decorative Gates",
		category: "Behind The Creation",
		image: "/service/siddhioncreationwork.png",
		video: "/work2.mp4",
		description: "From design and precision cutting to fabrication and the final installation."
	},
	{
		id: 2,
		title: "Creating Artistic Sculptures",
		category: "Behind The Creation",
		image: "/work/newchess.png",
		video: "/work4.mp4",
		description: "Watch the transformation from raw materials into a finished sculptural installation."
	},
	{
		id: 3,
		title: "CNC Design & Carving",
		category: "Behind The Creation",
		image: "/work/work4.jpg",
		video: "/work5.mp4",
		description: "From digital design to precision CNC cutting and detailed finishing."
	},
	{
		id: 4,
		title: "Mural Creation",
		category: "Behind The Creation",
		image: "/work/work9.png",
		video: "work8.mp4",
		description: "Layers, textures and artistic details come together to create a unique mural."
	}
];
var processSteps = [
	{
		number: "01",
		title: "Concept",
		text: "Understanding the client's vision, requirements and project goals."
	},
	{
		number: "02",
		title: "Design",
		text: "Creating customised concepts and design solutions."
	},
	{
		number: "03",
		title: "3D Development",
		text: "Selecting the right materials for the design, durability and site conditions."
	},
	{
		number: "04",
		title: "Fabrication ",
		text: "Our skilled craftsmen and workshop team turn the concept into reality."
	},
	{
		number: "05",
		title: "Finishing ",
		text: "Professional execution."
	},
	{
		number: "06",
		title: "Installation ",
		text: "Professional execution, delivery and installation of the finished work."
	}
];
var materials = [
	"Metal",
	"FRP",
	"GRC",
	"Wood",
	"MDF",
	"Stone",
	"Tiles",
	"Corian / Solid Surface",
	"WPC"
];
var clients = [
	{
		name: "NL Builder",
		logo: "/client_logo/nl-logo.webp"
	},
	{
		name: "Rounk Builders",
		logo: "/client_logo/rounk_builders.png"
	},
	{
		name: "Dhamji Shamji Shah Group",
		logo: "/client_logo/dhamji_shamji_shah_group.png"
	},
	{
		name: "JP Infra",
		logo: "/client_logo/jp_infra.png"
	},
	{
		name: " Ajmera Group Bhakti Park Wadala",
		logo: "/client_logo/ajmera_group_bhakti_wadala.webp"
	},
	{
		name: "Water Kingdom",
		logo: "/client_logo/water_kingdom.jpg"
	},
	{
		name: "Anan Residency, Borivali West",
		logo: "/client_logo/ana_residency.jpg"
	},
	{
		name: "Shrimad Rajchandra Hospital, Dharampur, Gujarat ",
		logo: "/client_logo/shrimad_rajchandra_hospital_dharmpur.png"
	},
	{
		name: "Vishwraj Developers, Belgaum",
		logo: "/client_logo/vishwraj_developers.png"
	},
	{
		name: "White Berry, Kandivali East",
		logo: "/client_logo/white-berry.jpg"
	},
	{
		name: "Bombay House",
		logo: "/client_logo/bombay_house.png"
	},
	{
		name: "Manavta Hospital",
		logo: "/client_logo/manavta_hospital.png"
	},
	{
		name: "Rustomjee Builders",
		logo: "/client_logo/rustomjee.jpeg"
	},
	{
		name: "Ashwin Sheth Group",
		logo: "/client_logo/ashwinsheth.jpeg"
	},
	{
		name: "Times Square, Andheri",
		logo: "/client_logo/times_square.jpeg"
	},
	{
		name: "Ascent Meditech, Valsad",
		logo: "/client_logo/ascent.jpeg"
	},
	{
		name: "7/11 Club & School",
		logo: "/client_logo/seven_eleven_club_hotels.jpeg"
	},
	{
		name: "Piramal Vaikunth, Thane",
		logo: "/client_logo/piramal_vaikunth.jpeg"
	},
	{
		name: "Godrej R K Studio",
		logo: "/client_logo/godrej_rks.jpeg"
	},
	{
		name: "AIIMS Hospital, Jodhpur",
		logo: "/client_logo/aiims_jodhpur.jpeg"
	},
	{
		name: "Hiranandani",
		logo: "/client_logo/house_of_hiranandani.jpeg"
	}
];
var MATERIALS = [
	{
		name: "Metal",
		note: "Forged · Cast · Fabricated",
		image: tex_metal_default
	},
	{
		name: "FRP",
		note: "Moulded · Lightweight",
		image: tex_corian_default
	},
	{
		name: "GRC",
		note: "Cast · Architectural",
		image: tex_stone_default
	},
	{
		name: "Wood",
		note: "Carved · Joined",
		image: tex_wood_default
	},
	{
		name: "MDF",
		note: "CNC · Laminated",
		image: cnc_default
	},
	{
		name: "Stone",
		note: "Cut · Hand-dressed",
		image: tex_stone_default
	},
	{
		name: "Tiles",
		note: "Mosaic · Inlay",
		image: mural_default
	},
	{
		name: "Corian",
		note: "Thermoformed · Seamless",
		image: tex_corian_default
	},
	{
		name: "WPC",
		note: "Weatherproof · Machined",
		image: tex_wood_default
	}
];
var testimonials = [
	{
		name: "1 John Smith",
		company: "ABC Company",
		project: "Brand Development",
		quote: "Working with the team was an exceptional experience. Their creativity and professionalism exceeded our expectations.",
		image: "/testimonal_images/testimonial-1.jpg",
		rating: 5
	},
	{
		name: "2 Sarah Johnson",
		company: "XYZ Industries",
		project: "Interior Design",
		quote: "The entire process was smooth, professional, and delivered exactly what we envisioned for our project.",
		image: "/testimonal_images/testimonial-2.jpg",
		rating: 5
	},
	{
		name: "3 Sarah Johnson",
		company: "XYZ Industries",
		project: "Interior Design",
		quote: "The entire process was smooth, professional, and delivered exactly what we envisioned for our project.",
		image: "/testimonal_images/testimonial-2.jpg",
		rating: 5
	},
	{
		name: " 4 Sarah Johnson",
		company: "XYZ Industries",
		project: "Interior Design",
		quote: "The entire process was smooth, professional, and delivered exactly what we envisioned for our project.",
		image: "/testimonal_images/testimonial-2.jpg",
		rating: 5
	}
];
var whyChooseUs = [
	{
		title: "30+ Years of Experience",
		text: "Decades of experience in art, sculpture, fabrication and customized design"
	},
	{
		title: "Creative & Technical Expertise",
		text: "A strong combination of artistic creativity and technical execution."
	},
	{
		title: "Multi-Material Capability",
		text: "Expertise across FRP, GRC, Metal, Wood, MDF, Corian, WPC, Tiles and Stone."
	},
	{
		title: "Customized Solutions",
		text: "Every project is developed according to the client's design, dimensions and requirements."
	},
	{
		title: "End-to-End Execution",
		text: "From concept development and design to fabrication, finishing and installation."
	},
	{
		title: "Quality & Commitment",
		text: "We are committed to delivering quality workmanship and completing projects within the agreed timeframe."
	}
];
//#endregion
export { creationProjects as a, processSteps as c, services as d, testimonials as f, company as i, projectCategories as l, whyChooseUs as m, clients as n, images as o, whatsappLink as p, cn as r, materials as s, MATERIALS as t, projects as u };
