# Digital Supply Chain Lab

A portfolio and open lab notebook by **Shubham Gambhire**, documenting practical experiments in digital supply chain management. The site presents working prototypes, project case studies, professional experience, and reflections on applying analytics, operations research, simulation, and AI to real operational decisions.

## What is included

- **Project portfolio** organised around the SCOR functions: Plan, Source, Make, and Deliver
- **Detailed case studies** covering the problem, approach, key decisions, results, and future work
- **Interactive prototypes** for selected supply chain projects
- **Project screenshot viewer** with full-screen viewing and keyboard navigation
- **Search and filtering** across the project collection
- **Lab notebook** for supply chain observations and ideas
- **About and resume pages** with experience, education, skills, and certifications
- **Responsive light and dark themes** for phone, tablet, and desktop

## Featured work

- Facility Design Engine
- Supplier Reliability Matrix
- Shipment Visibility Prototype
- Inventory and procurement decision tools

## Technology

- React 19
- TanStack Start and TanStack Router
- Vite
- TypeScript and JavaScript
- Tailwind CSS and component-level CSS

## Run locally

You will need a current Node.js installation and [Bun](https://bun.sh/).

```bash
git clone https://github.com/Shubham-Gambhire/Digital-Supply-Chain-Lab.git
cd Digital-Supply-Chain-Lab
bun install
bun run dev
```

Then open the local address shown in your terminal.

## Available commands

```bash
bun run dev       # Start the development server
bun run build     # Create a production build
bun run preview   # Preview the production build
bun run lint      # Check the codebase
bun run format    # Format project files
```

## Project structure

```text
src/
├── components/   Reusable interface elements
├── context/      Theme state
├── data/         Project and blog content
├── pages/        Main page content
└── routes/       TanStack route definitions

public/
├── project-screenshots/
└── resume.pdf
```

## Author

**Shubham Gambhire**  
MBA candidate specialising in operations and supply chain management at IIM Mumbai.

## Development workflow

This repository is connected to [Lovable](https://lovable.dev/). Changes made in Lovable sync to the repository, and updates pushed to the connected branch sync back into the project.