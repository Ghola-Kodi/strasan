export const COMPANY = {
  name: "Strasan Group Limited",
  tagline: "Engineering Excellence Across Africa",
  description:
    "A premier civil engineering consultancy delivering world-class infrastructure solutions across Kenya and the wider East African region.",
  email: "info@strasangroup.com",
  phone: "+254 700 000 000",
  address: "Mugumo, along Kirigiti-Kamiti Road\nNext to Rubis Petrol Station\nKiambu County\nP.O. Box 9618-0200\nNairobi, Kenya",
  founded: 2010,
};

export const NAV_LINKS = [
  { label: "Home",      href: "/" },
  { label: "Services",  href: "/services" },
  { label: "Projects",  href: "/projects" },
  { label: "Knowledge", href: "/knowledge" },
  { label: "Shop",      href: "/shop" },
  { label: "Team",      href: "/team" },
  { label: "Blog",      href: "/blog" },
  { label: " Price Tracker",    href: "/prices" },
];

// ── Team ─────────────────────────────────────────────────────────────────────
export const TEAM = [
  {
    id: "paul-macharia",
    name: "Eng. Dr. Paul Gacheru Macharia",
    role: "Founder & Managing Director",
    bio: "Eng. Dr. Paul Gacheru Macharia holds a Ph.D. (Civil Engineering) and MSc. in Civil Engineering (Transportation Engineering), as well as a Bachelor's Degree in Civil and Structural Engineering. He is a consulting engineer with Engineer's Board of Kenya (EBK) and a Corporate Member with the Institution of Engineers of Kenya (IEK). Over the course of his career, Dr. Macharia has served as the lead engineer on several high-profile infrastructure projects across East Africa. These include the Pagak–Maiwut–Mathiang–Paloich Road Project in South Sudan, road inventory survey work under the Ministry of Public Works and Reconstruction in Somalia, and numerous assignments for county governments, private developers, and development agencies like the World Bank and the World Food Programme. Dr. Macharia is a part-time lecturer at the University of Nairobi, where he offers guidance to undergraduate and postgraduate students. He is also in charge of core courses, including highway materials, geotechnical engineering, transportation, and pavement design.",
    expertise: ["Transportation Engineering", "Highway Materials", "Pavement Design", "Geotechnical Engineering"],
    linkedin: "#",
    isFounder: true,
  },
  {
    id: "paul-methu",
    name: "Eng. Paul Methu",
    role: "Founder & Technical Director",
    bio: "Eng. Paul Methu holds a BSc. in Civil Engineering and is a practicing Consulting Engineer registered with the Engineers Board of Kenya (EBK). He is also a Lead Expert in Environmental Impact Assessment (EIA) and Environmental Audit (EA), a Certified Public Accountant (CPA 2), and a Practicing Lead Expert member of the Environmental Institute of Kenya (EIK). Eng. Methu has over 32 years of post-qualification professional experience in Civil and Structural Engineering. He has taken part in many infrastructure and development projects in various capacities, including lead engineer, materials engineer, project manager, highway engineer, environmentalist, and fire and safety inspector across East Africa. These projects include the Pagak–Maiwut–Mathiang–Paloich Road Project (360 km) in South Sudan, the design and supervision of Roads 2000 projects in Nyeri, Laikipia, Kirinyaga, Murang'a, and Kiambu Counties, the Northern Corridor Rehabilitation Programme (Eldoret–Malaba sections), urban infrastructure projects in informal settlements, and multiple residential and commercial developments in Nairobi, Tatu City, Kiambu, and Ngong.",
    expertise: ["Environmental Impact Assessment", "Highway Engineering", "Project Management", "Structural Engineering"],
    linkedin: "#",
    isFounder: true,
  },
  {
    id: "gerald-kamau",
    name: "Eng. Gerald Kamau",
    role: "Professional Engineer",
    bio: "Eng. Gerald Kamau is a professional engineer registered with the Engineers Board of Kenya (EBK), with extensive experience in infrastructure engineering, project supervision, and quality assurance for road and bridge projects across East Africa.",
    expertise: ["Project Supervision", "Quality Assurance", "Road Engineering"],
    linkedin: "#",
    isFounder: false,
  },
  {
    id: "huldah-omao",
    name: "Eng. Huldah Omao",
    role: "Graduate Engineer",
    bio: "Eng. Huldah Omao is a graduate engineer focusing on structural analysis and design optimization, supporting project teams in developing detailed designs and engineering reports for civil infrastructure works.",
    expertise: ["Structural Analysis", "Design Optimization", "Engineering Reporting"],
    linkedin: "#",
    isFounder: false,
  },
  {
    id: "peter-mwangi",
    name: "Peter Mwangi",
    role: "Water & Geotechnical Engineer",
    bio: "BSc Civil Engineering (Egerton), MSc Geotechnics (Cardiff). Delivered foundation investigations and water supply schemes across the Rift Valley and coastal regions.",
    expertise: ["Geotechnical Investigation", "Water Supply Design", "Foundation Engineering"],
    linkedin: "#",
    isFounder: false,
  },
  {
    id: "grace-njeri",
    name: "Grace Njeri",
    role: "Quantity Surveyor & Cost Manager",
    bio: "BSc Quantity Surveying (KCA University), MRICS. Expert in construction cost planning, bill of quantities and contract administration under NEC and FIDIC forms.",
    expertise: ["Cost Planning", "Bills of Quantities", "FIDIC/NEC Contracts"],
    linkedin: "#",
    isFounder: false,
  },
];

// ── Services ──────────────────────────────────────────────────────────────────
export const SERVICES = [
  { id: "structural-engineering", icon: "Building2",     title: "Structural Engineering",           summary: "Design and analysis of residential, commercial and industrial structures to Kenyan and international standards.", details: ["Structural analysis and design for RC, steel and composite frames","High-rise and multi-storey building design","Industrial buildings, warehouses and factories","Bridge design and assessment","Seismic and wind load analysis","BIM-based 3-D structural modelling (Revit / ETABS / STAAD)"] },
  { id: "roads-highways",          icon: "Route",         title: "Roads & Highways",                 summary: "Full lifecycle road engineering from feasibility through detailed design to construction supervision.",           details: ["Feasibility studies and route selection","Geometric design and alignment optimisation","Pavement design (flexible and rigid)","Traffic impact assessments","Road safety audits","Construction supervision and contract management"] },
  { id: "water-sanitation",        icon: "Droplets",      title: "Water & Sanitation",               summary: "Sustainable water supply, drainage and sanitation engineering for urban and peri-urban settings.",              details: ["Rural and urban water supply design","Wastewater treatment plant design","Stormwater and urban drainage systems","Borehole and groundwater investigation","Irrigation scheme design","Water quality monitoring programmes"] },
  { id: "geotechnical",            icon: "Layers",        title: "Geotechnical Engineering",         summary: "Site investigation, foundation design and ground improvement for challenging Kenyan soil conditions.",           details: ["Site investigation and soil testing","Foundation design (shallow and deep)","Slope stability analysis and remediation","Ground improvement techniques","Retaining wall design","Liquefaction and expansive soil assessment"] },
  { id: "project-management",      icon: "ClipboardList", title: "Project Management",               summary: "End-to-end project delivery using PMI and FIDIC frameworks to keep projects on time and budget.",              details: ["Project planning and scheduling (MS Project / Primavera)","Cost control and earned value management","Contract administration (FIDIC, NEC, JBC)","Risk identification and mitigation","Contractor procurement and tender evaluation","Resident Engineer and site supervision services"] },
  { id: "eia-environment",         icon: "Leaf",          title: "Environmental & EIA",              summary: "NEMA-accredited Environmental Impact Assessments and ongoing environmental management planning.",               details: ["Environmental Impact Assessments (NEMA-certified lead experts)","Environmental Management Plans (EMP)","Environmental and Social Impact Assessments (ESIA)","Waste management plans","Noise and air quality monitoring","Post-construction environmental audits"] },
  { id: "urban-planning",          icon: "Map",           title: "Urban & Infrastructure Planning",  summary: "Master planning and infrastructure servicing studies that guide sustainable urban growth.",                      details: ["Urban master plans and structure plans","Infrastructure capacity assessments","Land use and zoning studies","GIS-based spatial analysis","County Integrated Development Plan (CIDP) inputs","Smart city and digital infrastructure advisory"] },
  { id: "quantity-surveying",      icon: "Calculator",    title: "Quantity Surveying",               summary: "Precise cost management from inception to final account, protecting client value at every stage.",              details: ["Preliminary cost estimates and feasibility budgets","Bills of Quantities preparation","Tender analysis and contract award recommendations","Interim payment valuations","Variation and claim assessment","Final account preparation and settlement"] },
];

// ── Blog posts ────────────────────────────────────────────────────────────────
export const BLOG_POSTS = [
  {
    slug: "county-road-upgrades",
    title: "County Road Upgrades: Cost-Effective Asphalt Rehab",
    date: "2025-04-10",
    author: "Eng. Huldah Omao",
    category: "Roads & Highways",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1431540016311-9e5d1f5ff5b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    icon: "Route",
    excerpt: "Cost-effective asphalt rehabilitation techniques explored through Kilifi and Machakos case studies, with practical guidance for county engineers.",
    content: `County road networks across Kenya carry the bulk of agricultural and community traffic yet receive a fraction of national road funding. This article examines two successful rehabilitation projects in Kilifi and Machakos counties that delivered durable surfaces at significantly below-benchmark costs.\n\n## Kilifi County Case Study\n\nThe 14 km Mariakani–Kayafungo road was rehabilitated using in-place cold recycling, reusing 85% of the existing asphalt material. This approach reduced haulage costs by 60% compared to full reconstruction and cut the carbon footprint of the project substantially.\n\n## Machakos County Case Study\n\nA micro-surfacing treatment was applied to 22 km of the Kathiani network, extending pavement life by an estimated 8–10 years at a cost of KSh 3.2M/km versus KSh 18M/km for full reconstruction.\n\n## Key Takeaways\n\n**Condition assessment is critical**: A thorough deflection survey (Benkelman beam or FWD) before selecting treatment avoids over-designing and wasting limited budgets.\n\n**Local materials**: Using locally sourced aggregates and bitumen emulsion reduces costs and supports county supply chains.\n\n**Maintenance window**: Treatments applied at the right point in the pavement deterioration curve deliver 3–5× better value than emergency reconstruction.`,
    tags: ["Roads", "County Engineering", "Rehabilitation", "Cost Management"],
  },
  {
    slug: "mombasa-water-supply",
    title: "Mombasa Water Supply: Stormwater & Drainage Retrofits",
    date: "2025-03-28",
    author: "Rachel Wanjiru",
    category: "Water & Sanitation",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    icon: "Droplets",
    excerpt: "Stormwater management and drainage retrofit strategies for Mombasa's coastal urban environment, addressing flooding and water quality challenges.",
    content: `Mombasa's low-lying coastal topography and rapid urbanisation combine to create persistent flooding challenges, particularly in Kisauni, Likoni and Changamwe sub-counties. This project update covers the drainage retrofit scheme delivered by Strasan Group Limited for Mombasa County Government.\n\n## The Challenge\n\nExisting drainage channels were undersized, partially blocked and discharged untreated stormwater directly into the ocean, contributing to degradation of reef ecosystems. Peak flows during the long rains season exceeded channel capacity by 300%.\n\n## Our Approach\n\nThe retrofit combined upsizing of primary trunk drains with a network of bioretention swales in residential areas to attenuate peak flows before they reached the main system. Trash screens and gross pollutant traps were installed at 14 outfall points.\n\n## Results\n\n**Flood frequency reduced** from 4–5 events per rainy season to 0–1 for the 10-year return period storm.\n\n**Water quality improvement**: Total suspended solids at outfalls reduced by 72% based on post-construction monitoring.\n\nThe project was delivered in 11 months at KSh 340M, within budget and 3 weeks ahead of programme.`,
    tags: ["Water", "Drainage", "Mombasa", "SUDS", "Coastal Engineering"],
  },
  {
    slug: "site-safety-culture",
    title: "Building a Site Safety Culture: NCA Regulations & Practical Training",
    date: "2025-03-05",
    author: "Eng. Gerald Kamau",
    category: "Health & Safety",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1590845947676-f0b7e619ddec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    icon: "HardHat",
    excerpt: "Practical guidance on building genuine safety culture on Kenyan construction sites, aligned with NCA regulations and OSHA requirements.",
    content: `Kenya's construction sector records an estimated 200+ fatalities annually, with the majority occurring on medium and small sites where formal safety management is weakest. This article outlines a practical, low-cost approach to building genuine safety culture aligned with NCA regulations.\n\n## NCA Regulatory Framework\n\nThe National Construction Authority Act 2011 and its 2014 regulations require all NCA-registered contractors to maintain a Health and Safety Plan and appoint a competent site safety officer for projects above KSh 5M. Despite this, compliance rates remain low.\n\n## The Culture Problem\n\nMost site accidents stem not from ignorance of rules but from normalised risk-taking – workers and supervisors who have "always done it this way." Changing this requires leadership commitment, not just signage and toolbox talks.\n\n## Practical Steps That Work\n\n**Daily pre-task analysis**: 5-minute morning briefings where the crew identifies hazards for the day's specific tasks are more effective than monthly safety meetings.\n\n**Visible leadership**: Site managers who routinely stop work for unsafe conditions send a clear signal. Those who ignore hazards to meet programme undermine every safety poster on site.\n\n**Near-miss reporting**: Creating a blame-free near-miss reporting culture provides early warning of systemic hazards before they cause injuries.`,
    tags: ["Safety", "NCA", "Site Management", "Training"],
  },
  {
    slug: "kenya-cipi-q3-2025",
    title: "Kenya Construction Input Prices Q3 2025: What Contractors Need to Know",
    date: "2025-11-04",
    author: "Rachel Wanjiru",
    category: "Cost & Pricing",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    icon: "Calculator",
    excerpt: "The KNBS Q3 2025 CIPI shows steel surging 5.2% and cement softening 1.4%. We unpack what this means for tender pricing and project budgets.",
    content: `The Kenya National Bureau of Statistics (KNBS) released the Q3 2025 Construction Input Price Index (CIPI) in October 2025, revealing a 1.27% overall quarterly increase to an index of 121.27 (base Q4 2019 = 100).\n\n## Key Movements\n\n**Steel & Reinforcement Bars** recorded the biggest jump at +5.20% quarter-on-quarter, reaching an index of 175.08. This surge is largely driven by global steel market tightening and higher import costs.\n\n**Cement** bucked the trend, falling 1.39% to 118.79 after a period of elevated prices.\n\n**Sand** rose 3.63% while **ballast** gained 1.41%, reflecting continued pressure from transport costs.\n\n**Timber** fell 2.71%, offering some relief for carpentry and formwork budgets.\n\n## Implications for Contractors\n\nContractors pricing tenders for projects extending beyond six months should apply a price fluctuation clause tied to the CIPI to manage exposure to steel and bitumen price movements.`,
    tags: ["CIPI", "Material Prices", "KNBS", "Tender Pricing"],
  },
];

// ── White Papers / Knowledge ──────────────────────────────────────────────────
export const WHITE_PAPERS = [
  { id: "multi-storey",      title: "Multi-storey structures",       desc: "Eurocode & KS 2025 · 52 pages. Detailed analysis and design examples for Kenyan conditions.", badge: "updated Apr 2025", price: "KSh 2,900", format: "PDF",      image: "https://images.unsplash.com/photo-1650726865101-d571b9199260?ixlib=rb-4.1.0&auto=format&fit=crop&w=600&q=80" },
  { id: "shallow-found",     title: "Shallow foundations",           desc: "Kikuyu clay soils, excavation methods, bearing capacity tables.",                               badge: "incl. calc sheets", price: "KSh 3,500", format: "PDF+calc", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: "rift-floods",       title: "Rift Valley floods",            desc: "Mitigation guidelines for infrastructure, drainage design and case studies.",                   badge: "with maps",         price: "KSh 1,800", format: "PPT+PDF",  image: "https://images.unsplash.com/photo-1657069345471-c54f2432b79c?ixlib=rb-4.1.0&auto=format&fit=crop&w=600&q=80" },
  { id: "road-pavement",     title: "Road pavement design",          desc: "Kenya design manual updates, CBR methods, and traffic load analysis.",                         badge: "new",               price: "KSh 4,200", format: "PDF",      image: "https://images.unsplash.com/photo-1621976360623-004223992e33?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: "geotech-invest",    title: "Geotechnical investigation",    desc: "Site investigation, soil testing, and report writing for Kenyan sites.",                        badge: "best seller",       price: "KSh 2,750", format: "PDF",      image: "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: "concrete-mix",      title: "Concrete mix design",           desc: "Optimising mixes with local aggregates, durability requirements.",                             badge: "free chapter",      price: "KSh 1,990", format: "PDF",      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
];

// ── Shop products ─────────────────────────────────────────────────────────────
export const SHOP_PRODUCTS = {
  handbook: {
    title: "Construction Cost Guide 2025",
    desc: "County rates, labour rates, material prices. Updated quarterly. Essential for estimators.",
    badge: "annual subscription",
    price: "KSh 8,500",
    period: "/year",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  worksheets: [
    { id: "rc-beam",       title: "RC beam design",             desc: "To KS 1992, with auto graphs and rebar schedules.",   price: "KSh 1,490", image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: "method-stmt",   title: "Method statement template",  desc: "Comprehensive Word doc for construction activities.", price: "KSh 990",   image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: "column-design", title: "Column design spreadsheet",  desc: "Biaxial bending, interaction diagrams.",              price: "KSh 1,890", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: "boq-template",  title: "BoQ template (Excel)",       desc: "Automated bill of quantities with summaries.",        price: "KSh 2,200", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  ],
  downloads: [
    { id: "dwg-pack",    icon: "FileArchive", title: "DWG details pack (100+)",  price: "KSh 2,400" },
    { id: "env-check",   icon: "FileText",    title: "Environmental checklist",  price: "KSh 600"   },
    { id: "revit-fam",   icon: "Box",         title: "Revit families (15)",      price: "KSh 4,200" },
    { id: "safety-form", icon: "ClipboardCheck", title: "Safety inspection forms", price: "KSh 850" },
  ],
};

// ── Seminars ──────────────────────────────────────────────────────────────────
export const SEMINARS = [
  { id: "steel-design",  title: "Steel design",              desc: "Online · 16–18 June 2025 (3 half-days)",       badge: "early bird KSh 12,500", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: "geotech-ws",    title: "Geotechnical workshop",     desc: "Westlands, Nairobi (in-person)",               badge: "KSh 18,500",            image: "https://images.unsplash.com/photo-1581082583537-20d51b4b4f1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: "bim-kenya",     title: "BIM for Kenyan projects",   desc: "On-demand seminar (recorded)",                 badge: "KSh 5,900",             image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: "site-mgmt",     title: "Site management",           desc: "Evening course · 5 weeks · Sept start",       badge: "KSh 27,000",            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
];

// ── Project showcases ─────────────────────────────────────────────────────────
// ── Project showcases ─────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: "pagak-maiwut-paloich",
    slug: "pagak-maiwut-mathiang-paloich-road",
    title: "Pagak–Maiwut–Mathiang–Paloich Road Project",
    category: "Roads & Highways",
    location: "Upper Nile State, South Sudan",
    value: "USD 180M",
    year: "2024",
    client: "Ministry of Roads and Bridges, Republic of South Sudan",
    description: "A 360km strategic road corridor connecting Pagak to Paloich through Maiwut and Mathiang. This major infrastructure project involved comprehensive highway engineering including geometric design, pavement structural design, materials investigation and testing, and full construction supervision. The road provides critical connectivity for oil fields and communities in Upper Nile State.",
    services: ["Highway Engineering", "Pavement Design", "Geotechnical Investigation", "Materials Engineering", "Construction Supervision", "Contract Management"],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "mangu-gardens",
    slug: "mangu-gardens",
    title: "Mangu Gardens",
    category: "Mixed-Use Development",
    location: "Kiambu County, Kenya",
    value: "Confidential",
    year: "2025",
    client: "Private Developer",
    description: "A 100-acre mixed-use residential and commercial estate featuring modern housing units, retail spaces, and community amenities. The project includes comprehensive infrastructure development with integrated water supply networks, road networks, and sustainable drainage systems.",
    services: ["Detailed Engineering", "Construction Supervision", "Contract Management", "Infrastructure Design", "Quality Assurance"],
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "barista-gardens",
    slug: "barista-gardens",
    title: "Barista Gardens",
    category: "Mixed-Use Development",
    location: "Kiambu County, Kenya",
    value: "Confidential",
    year: "2024",
    client: "Private Developer",
    description: "An upscale mixed-development estate featuring contemporary residential units and commercial spaces. The project emphasizes sustainable design with integrated green spaces, efficient utility networks, and quality infrastructure.",
    services: ["Detailed Engineering", "Construction Supervision", "Contract Management", "Infrastructure Planning"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "wasili-homes",
    slug: "wasili-homes",
    title: "Wasili Homes",
    category: "Residential Development",
    location: "Kiambu County, Kenya",
    value: "Confidential",
    year: "2024",
    client: "Private Developer",
    description: "A premium residential development offering modern townhouses and detached homes with comprehensive infrastructure including paved roads, water supply systems, and community facilities.",
    services: ["Detailed Engineering", "Construction Supervision", "Contract Management", "Structural Design"],
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "limuru-business-park",
    slug: "limuru-business-development-park",
    title: "Limuru Business Development Park",
    category: "Commercial Development",
    location: "Limuru, Kiambu County, Kenya",
    value: "Confidential",
    year: "2025",
    client: "Private Developer",
    description: "A modern business park development featuring office spaces, light industrial units, and commercial facilities. The project includes comprehensive geotechnical investigations and engineering designs tailored to the challenging terrain of Limuru's highland region.",
    services: ["Geotechnical Investigations", "Engineering Designs", "Project Management", "Infrastructure Planning", "Environmental Assessment"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "thika-overpass",
    slug: "thika-road-overpass",
    title: "Thika Road Overpass",
    category: "Roads & Highways",
    location: "Thika, Kenya",
    value: "KSh 2.1B",
    year: "2024",
    client: "Kenya National Highways Authority",
    description: "Design and construction supervision of a major grade-separated interchange at the Thika Road junction, improving traffic flow and reducing congestion.",
    services: ["Geometric Design", "Traffic Impact Assessment", "Construction Supervision", "Project Management"],
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "nyando-bridge",
    slug: "nyando-river-bridge",
    title: "Nyando River Bridge",
    category: "Structural Engineering",
    location: "Kisumu, Kenya",
    value: "KSh 850M",
    year: "2023",
    client: "Kisumu County Government",
    description: "Design and supervision of a 120m cable-stayed bridge over the Nyando River, providing vital connectivity for agricultural communities.",
    services: ["Structural Design", "Geotechnical Investigation", "EIA Coordination", "Construction Supervision"],
    image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "kcb-tower",
    slug: "kcb-tower-annex",
    title: "KCB Tower Annex",
    category: "High-Rise Structures",
    location: "Nairobi CBD, Kenya",
    value: "KSh 3.2B",
    year: "2024",
    client: "Kenya Commercial Bank",
    description: "Structural design and construction supervision of a 28-storey office annex, incorporating seismic-resistant design and BIM modeling.",
    services: ["Structural Analysis", "Seismic Design", "BIM Coordination", "Quality Assurance"],
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "mombasa-drainage",
    slug: "mombasa-stormwater-retrofit",
    title: "Mombasa Stormwater Retrofit",
    category: "Water & Sanitation",
    location: "Mombasa, Kenya",
    value: "KSh 340M",
    year: "2023",
    client: "Mombasa County Government",
    description: "Comprehensive stormwater management system upgrade including bioretention swales, trunk drain improvements, and water quality monitoring.",
    services: ["Hydraulic Design", "SUDS Implementation", "Environmental Monitoring", "Community Engagement"],
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "kilifi-road",
    slug: "kilifi-county-road-network",
    title: "Kilifi County Road Network",
    category: "Roads & Highways",
    location: "Kilifi County, Kenya",
    value: "KSh 1.8B",
    year: "2024",
    client: "Kilifi County Government",
    description: "Rehabilitation of 45km of county roads using innovative cold recycling techniques, extending pavement life while reducing costs.",
    services: ["Pavement Design", "Material Testing", "Contract Management", "Community Liaison"],
    image: "https://images.unsplash.com/photo-1431540016311-9e5d1f5ff5b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "nairobi-water",
    slug: "nairobi-water-treatment-plant",
    title: "Nairobi Water Treatment Plant",
    category: "Water & Sanitation",
    location: "Nairobi, Kenya",
    value: "KSh 1.5B",
    year: "2023",
    client: "Athena Springs Ltd",
    description: "Design and construction supervision of a 50,000m³/day water treatment facility serving peri-urban Nairobi communities.",
    services: ["Process Design", "Environmental Impact Assessment", "Construction Supervision", "Commissioning"],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  }
];

// ── Price data ────────────────────────────────────────────────────────────────
export const PRICE_MATERIALS = [
  { name: "Steel & Reinforcement Bars", icon: "Layers",   q1: 163.94, q2: 166.43, q3: 175.08, trend: "up"   },
  { name: "Cement",                     icon: "Package",  q1: 117.38, q2: 120.47, q3: 118.79, trend: "down" },
  { name: "Sand",                        icon: "Waves",    q1: 104.89, q2: 105.53, q3: 109.36, trend: "up"   },
  { name: "Ballast / Quarry Products",  icon: "Mountain", q1: 107.44, q2: 108.22, q3: 109.74, trend: "up"   },
  { name: "Dense Bitumen Macadam",      icon: "Route",    q1: 152.60, q2: 149.38, q3: 156.45, trend: "up"   },
  { name: "Paving Grade Bitumen",       icon: "Droplet",  q1: 152.60, q2: 146.44, q3: 150.85, trend: "up"   },
  { name: "Timber",                      icon: "TreePine", q1: 125.63, q2: 126.44, q3: 123.00, trend: "down" },
  { name: "Fuel & Lubricants",          icon: "Fuel",     q1: 129.63, q2: 127.53, q3: 132.03, trend: "up"   },
];

export const OVERALL_CIPI = [
  { quarter: "Q4 2019", value: 100.00 },
  { quarter: "Q1 2024", value: 118.45 },
  { quarter: "Q2 2024", value: 119.02 },
  { quarter: "Q3 2024", value: 120.38 },
  { quarter: "Q4 2024", value: 119.85 },
  { quarter: "Q1 2025", value: 119.05 },
  { quarter: "Q2 2025", value: 119.75 },
  { quarter: "Q3 2025", value: 121.27 },
];
