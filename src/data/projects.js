export const projects = [
  {
    id: "facility-design-engine",
    title: "Facility Design Engine",
    tagline: "Designing warehouse and manufacturing layouts with operational, spatial, and economic logic.",
    status: "Published",
    scor: "MAKE",
    technologies: ["React", "TypeScript", "SLP / CRAFT"],
    industries: ["Warehouse", "Manufacturing"],
    featured: true,
    businessProblem: "Facility layout decisions affect travel, throughput, storage density, safety, and capital cost, but are often tested through disconnected sketches and spreadsheets.",
    decisionExplored: "What facility layout best balances flow, storage capacity, compliance, labour efficiency, and economics for the operation being designed?",
    approach: {
      businessLogic: "The tool brings warehouse and manufacturing design into one workflow. It uses relationship-driven placement for zones or departments, then evaluates the result through travel, utilization, compliance, CAPEX/OPEX, and payback measures.",
      technicalImplementation: "A browser-based React and TypeScript application runs SLP and CRAFT-style layout logic, warehouse rack fill with ABC slotting, manufacturing presets, standards checks, 2D/3D views, scenario comparison, and client-side exports."
    },
    prototype: {
      screenshots: [
        {
          src: "/project-screenshots/facility-layout-map.png",
          alt: "Facility Design Engine relationship-driven layout map",
          caption: "Relationship-driven placement map for a facility layout scenario."
        },
        {
          src: "/project-screenshots/facility-3d-layout.png",
          alt: "Facility Design Engine three-dimensional layout view",
          caption: "Three-dimensional view for reviewing the proposed facility arrangement."
        }
      ],
      videos: []
    },
    tradeoffs: "The solver is deliberately a planning aid rather than a replacement for detailed engineering drawings, site surveys, or a live WMS/ERP integration. Layouts and analytics run in the browser and use the assumptions entered by the user.",
    futureWork: [
      "Add richer integrations with facility data and WMS exports",
      "Expand standards libraries for more regions",
      "Add collaborative review and version comparison"
    ],
    githubUrl: null,
    downloadUrl: null,
    demoUrl: "https://facilitydesignengine.lovable.app/"
  },
  {
    id: "supplier-reliability-matrix",
    title: "Supplier Reliability Matrix",
    tagline: "A transparent supplier-risk monitor built from the data procurement teams actually maintain.",
    status: "Published",
    scor: "SOURCE",
    technologies: ["React", "JavaScript", "CSV Analytics"],
    industries: ["Procurement", "Sourcing"],
    featured: false,
    businessProblem: "Supplier reviews often depend on incomplete scorecards or periodic spreadsheets. Teams need a repeatable way to identify delivery and dependency risk without pretending they have perfect data.",
    decisionExplored: "Which suppliers deserve attention first when delivery reliability, sole-source exposure, priority, and available purchase-order history are considered together?",
    approach: {
      businessLogic: "The matrix combines delivery performance with dependency risk, applies an editable compounding penalty when both are weak, and keeps an insufficient-data guard so thin histories do not create false certainty. Peer comparison adds context without replacing the absolute risk tier.",
      technicalImplementation: "A self-contained browser tool provides an editable supplier ledger, live risk matrix, configurable scoring settings, calculation breakdowns, category-laggard detection, snapshots, CSV import/export, local persistence, and undoable row deletion."
    },
    prototype: {
      screenshots: [
        {
          src: "/project-screenshots/supplier-risk-matrix.png",
          alt: "Supplier Reliability Matrix risk matrix",
          caption: "Supplier risk matrix showing delivery reliability and dependency exposure."
        },
        {
          src: "/project-screenshots/supplier-risk-quadrant.png",
          alt: "Supplier Reliability Matrix risk quadrant",
          caption: "Risk quadrant for prioritising supplier review attention."
        },
        {
          src: "/project-screenshots/supplier-ledger.png",
          alt: "Supplier Reliability Matrix supplier ledger",
          caption: "Editable supplier ledger with the fields used by the scoring model."
        }
      ],
      videos: []
    },
    tradeoffs: "The model intentionally uses a small, defensible field set rather than a full MCDM framework. It is a monitoring prototype, not a sanctions screen, financial-health assessment, or substitute for procurement judgement.",
    futureWork: [
      "Add optional lead-time, Incoterms, owner, and last-order fields",
      "Add fleet-level trend summaries across snapshots",
      "Add printable supplier review reports"
    ],
    githubUrl: null,
    downloadUrl: null,
    demoUrl: "https://supplierreliabilitymatrix.lovable.app/"
  },
  {
    id: "where-is-my-shipment",
    title: "Where Is My Shipment",
    tagline: "A probabilistic SKU-location framework for ocean freight visibility.",
    status: "Published",
    scor: "DELIVER",
    technologies: ["React", "TypeScript", "Risk Modeling"],
    industries: ["Ocean Freight", "Logistics"],
    featured: true,
    businessProblem: "Container tracking shows where a box is, but not how confidently a planner can locate an individual SKU inside it. Tracking every unit directly is expensive, while container-only visibility hides custody and disruption risk.",
    decisionExplored: "How can existing shipment events provide a useful confidence estimate for a SKU's location without putting an RFID tag on every unit?",
    approach: {
      businessLogic: "Each SKU starts with high confidence after packing and sealing, then confidence changes through named events such as missing scans, customs inspection, seal breaks, weather, and route exposure. A priority score brings value, urgency, SLA, perishability, and lateness into the exceptions worklist.",
      technicalImplementation: "The browser prototype generates synthetic shipments, containers, pallets, SKUs, and event histories, then replays them through a transparent rule-based confidence engine. It includes dashboard, SKU search, exceptions, simulator, settings, integrations, and logic views; AIS and ERP feeds are explicitly illustrative."
    },
    prototype: {
      screenshots: [
        {
          src: "/project-screenshots/shipment-overview.png",
          alt: "Where Is My Shipment route overview",
          caption: "Synthetic ocean freight routes coloured by the weakest SKU confidence."
        },
        {
          src: "/project-screenshots/shipment-simulator.png",
          alt: "Where Is My Shipment SKU simulator",
          caption: "Simulator for testing how a hypothetical shipment event changes confidence."
        },
        {
          src: "/project-screenshots/shipment-feeds.png",
          alt: "Where Is My Shipment simulated ERP feeds",
          caption: "Illustrative ERP reconciliation feed with matched and conflicting records."
        },
        {
          src: "/project-screenshots/shipment-exceptions.png",
          alt: "Where Is My Shipment exceptions worklist",
          caption: "Exceptions worklist with confidence, risk, and operator guidance."
        }
      ],
      videos: []
    },
    tradeoffs: "The tool is ocean-only and uses synthetic data. Route-zone exposure, AIS, weather, and ERP reconciliation are simulated stand-ins; a production version would need live maritime feeds, real integrations, and historical outcomes for calibration.",
    futureWork: [
      "Connect to real AIS, carrier, ERP, and weather sources",
      "Calibrate event weights against observed shipment outcomes",
      "Extend visibility to other transport modes"
    ],
    githubUrl: null,
    downloadUrl: null,
    demoUrl: "https://whereismyshipment.lovable.app/"
  },
  {
    id: "problem-to-initiative",
    title: "P2I - Problem to Initiative",
    tagline: "A problem-first prioritiser for choosing which digital supply chain initiatives deserve attention.",
    status: "Published",
    scor: "PLAN",
    technologies: ["React", "Rules-based Scoring", "Impact–Effort Analysis"],
    industries: ["Manufacturing", "Digital Transformation"],
    featured: false,
    businessProblem: "Formal digital maturity assessments can be too heavy for a quick prioritisation decision, while technology-first conversations can recommend tools before anyone has clearly stated the operational problem.",
    decisionExplored: "Given the supply chain problems a manufacturing operation faces today, which digital initiatives should be prioritised first?",
    approach: {
      businessLogic: "P2I starts with up to three operational problems, maps them to a focused shortlist of initiatives, and ranks those initiatives using transparent Impact plus Effort ratings. The result is rules-based and explainable rather than an opaque AI recommendation.",
      technicalImplementation: "The guided browser flow covers problem selection, free-text classification into a curated problem list, initiative mapping, rating, priority bands, an Impact–Effort matrix, rationale, copy-summary, and explicit out-of-scope handling."
    },
    prototype: {
      screenshots: [
        {
          src: "/project-screenshots/p2i-impact-effort.png",
          alt: "P2I Impact-Effort Matrix",
          caption: "Impact-Effort Matrix for comparing the shortlisted initiatives."
        },
        {
          src: "/project-screenshots/p2i-results.png",
          alt: "P2I prioritised initiatives results",
          caption: "Prioritised initiatives with the problems and rationale behind the ranking."
        }
      ],
      videos: []
    },
    tradeoffs: "This is a prioritisation aid, not a SIRI maturity assessment, a benchmark, or an AI-generated transformation roadmap. The current scope focuses on manufacturing supply chains and does not support accounts, saved sessions, or backend persistence.",
    futureWork: [
      "Improve free-text classification with stronger rules or an optional LLM",
      "Add export and shareable prioritisation results",
      "Expand industry-specific initiative variations"
    ],
    githubUrl: null,
    downloadUrl: null,
    demoUrl: "https://problem2initiative.lovable.app/"
  },
  {
    id: "decision-intelligence-suite",
    title: "Decision Intelligence Suite",
    tagline: "Testing whether the financially optimal decision remains the most robust decision under uncertainty.",
    status: "Published",
    scor: "PLAN",
    technologies: ["React", "Scenario Analysis", "Decision Modeling"],
    industries: ["Planning", "Supply Chain Strategy"],
    featured: false,
    businessProblem: "An optimizer can identify the best financial option while leaving out hard constraints, retailer trust, pre-orders, reversibility, and other factors that a real decision maker cannot ignore.",
    decisionExplored: "When uncertainty and qualitative constraints are made visible, does the financially optimal option still deserve the recommendation?",
    approach: {
      businessLogic: "The suite keeps the Financial Optimum separate from the Robustness-Adjusted Position. It evaluates expected value, scenario win rate with tie-splitting, worst-case value, regret, capacity allocation, hard constraints, soft preferences, and contextual factors without pretending qualitative judgement is currency.",
      technicalImplementation: "A self-contained browser prototype provides Overview, Scenario Log, Qualitative Factors, Tripwires, Settings, and Methodology views. Full state persists locally and can be exported/imported as JSON; metrics are calculated by pure functions with edge-case guards."
    },
    prototype: {
      screenshots: [
        {
          src: "/project-screenshots/decision-position-line.png",
          alt: "Decision Intelligence Suite position line and option comparison",
          caption: "Position line separating the financial optimum from the robustness-adjusted recommendation."
        },
        {
          src: "/project-screenshots/decision-methodology.png",
          alt: "Decision Intelligence Suite methodology view",
          caption: "Methodology view explaining which metrics are computed and which inputs are illustrative."
        }
      ],
      videos: []
    },
    tradeoffs: "The tool compares exactly two options and consumes scenario values from an existing model rather than running its own optimizer. The qualitative influence is bounded and the source case data is fictionalized for portfolio use.",
    futureWork: [
      "Add a separate multi-option comparison mode",
      "Add unit tests around the extracted metrics engine",
      "Support richer scenario and decision-package exports"
    ],
    githubUrl: null,
    downloadUrl: null,
    demoUrl: "https://disuite.lovable.app/"
  },
  {
    id: "sku-analysis-tool",
    title: "SKU Analysis Tool",
    tagline: "Offline warehouse analytics that turns almost any ERP export into actionable inventory intelligence.",
    status: "Published",
    scor: "MAKE",
    technologies: ["Python", "PyQt5", "Matplotlib"],
    industries: ["Warehouse", "Inventory Operations"],
    featured: false,
    businessProblem: "Warehouse analysis is often locked inside ERP exports and analyst-built spreadsheets, leaving managers waiting hours or days for movement, ageing, supplier, fulfilment, and loss insights.",
    decisionExplored: "Can a warehouse manager upload an ERP export and get useful inventory intelligence without an analyst, cloud service, or internet connection?",
    approach: {
      businessLogic: "The tool prioritises self-service operations analysis: classify movement, surface ageing and dead stock, rank customers and suppliers, expose fulfilment gaps, and quantify inbound losses so teams can act on the current export rather than last month's report.",
      technicalImplementation: "A standalone Python desktop application uses PyQt5, pandas, Matplotlib, and an intelligent synonym/parser layer covering 200+ ERP column variants. Six independent modules provide dashboards, charts, searchable tables, and Excel export, entirely offline."
    },
    prototype: {
      screenshots: [
        {
          src: "/project-screenshots/sku-overview.png",
          alt: "SKU Analysis Tool warehouse analytics overview",
          caption: "Offline warehouse overview with movement distribution and risk indicators."
        },
        {
          src: "/project-screenshots/sku-charts.png",
          alt: "SKU Analysis Tool charts dashboard",
          caption: "Charts for sell-through, category sales, net movement, and coverage."
        },
        {
          src: "/project-screenshots/sku-loading.png",
          alt: "SKU Analysis Tool analysis loading screen",
          caption: "Loading state while the desktop tool parses and analyses an ERP export."
        },
        {
          src: "/project-screenshots/sku-fulfilment.png",
          alt: "SKU Analysis Tool order fulfilment analysis",
          caption: "Order fulfilment analysis with full-rate and customer-level results."
        },
        {
          src: "/project-screenshots/sku-help-getting-started.png",
          alt: "SKU Analysis Tool getting started guide",
          caption: "Built-in getting started guide for running an analysis."
        },
        {
          src: "/project-screenshots/sku-help-file-formats.png",
          alt: "SKU Analysis Tool supported file formats guide",
          caption: "Built-in file format guide covering common ERP exports and column synonyms."
        }
      ],
      videos: []
    },
    tradeoffs: "This is intentionally a Windows desktop executable rather than a web app, because warehouse, inventory, and pricing files should stay on the user's machine. The downloadable .exe runs offline and keeps those files local instead of sending them to a cloud service.",
    futureWork: [
      "Add purchase-order versus GRN variance analysis",
      "Add reorder-point and moving-average demand modules",
      "Add multi-file merging and PDF dashboard export"
    ],
    githubUrl: null,
    downloadUrl: "/SKU_Analysis_Tool.exe",
    demoUrl: null
  }
];
