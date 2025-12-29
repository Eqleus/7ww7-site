export type Continent = {
  slug: string;
  name: string;
  tagline: string;
  focus: string[];
  signaturePrograms: { title: string; description: string }[];
  metrics: string[];
};

export const CONTINENTS: Continent[] = [
  {
    slug: "asia",
    name: "Asia",
    tagline: "Trade, technology, and civilizational dialogue",
    focus: ["Innovation corridors", "Education & skilling", "Cultural diplomacy", "Regional resilience"],
    signaturePrograms: [
      { title: "Equilibrium Labs", description: "Cross-border pilots that translate dialogue into measurable programs." },
      { title: "Civic Tech for Harmony", description: "Tools for trust, transparency, and local problem-solving." },
    ],
    metrics: ["Education access", "Youth employment", "Cross-border program outcomes", "Trust & cohesion index"],
  },
  {
    slug: "africa",
    name: "Africa",
    tagline: "Resilience, education, and leapfrog infrastructure",
    focus: ["Food systems", "Health access", "Education & youth", "Climate adaptation"],
    signaturePrograms: [
      { title: "Leapfrog Infrastructure", description: "High-impact, low-friction initiatives that scale quickly." },
      { title: "Community Resilience Hubs", description: "Local hubs integrating training, support, and services." },
    ],
    metrics: ["Health coverage", "Food security", "Learning outcomes", "Climate resilience indicators"],
  },
  {
    slug: "europe",
    name: "Europe",
    tagline: "Diplomacy, governance, and innovation corridors",
    focus: ["Neutral convening", "Policy innovation", "Research partnerships", "Public-private alignment"],
    signaturePrograms: [
      { title: "Neutral Roundtables", description: "High-trust forums to reduce friction and accelerate cooperation." },
      { title: "Research to Impact", description: "Translating research into deployable, measurable programs." },
    ],
    metrics: ["Policy adoption", "Research translation rate", "Partner alignment score", "Institutional trust"],
  },
  {
    slug: "north-america",
    name: "North America",
    tagline: "Research, capital, and scalable programs",
    focus: ["Program scaling", "Capital mobilization", "Evidence & evaluation", "Philanthropic innovation"],
    signaturePrograms: [
      { title: "Scale Studio", description: "Replicate what works across geographies with strong measurement." },
      { title: "Blended Finance Playbooks", description: "Repeatable templates to mobilize capital for impact." },
    ],
    metrics: ["Capital mobilized", "Programs scaled", "Cost per outcome", "Evaluation coverage"],
  },
  {
    slug: "south-america",
    name: "South America",
    tagline: "Biodiversity, equity, and sustainable growth",
    focus: ["Biodiversity protection", "Inclusive growth", "Indigenous partnership", "Sustainable livelihoods"],
    signaturePrograms: [
      { title: "Bio-Equilibrium Initiatives", description: "Projects that link ecology, economy, and community wellbeing." },
      { title: "Equity & Opportunity", description: "Education and livelihoods programs with measurable uplift." },
    ],
    metrics: ["Biodiversity indicators", "Income uplift", "Education access", "Community wellbeing"],
  },
  {
    slug: "oceania",
    name: "Oceania",
    tagline: "Ocean systems, climate adaptation, and culture",
    focus: ["Ocean resilience", "Climate adaptation", "Cultural continuity", "Disaster preparedness"],
    signaturePrograms: [
      { title: "Ocean Commons", description: "Programs that protect marine systems while sustaining livelihoods." },
      { title: "Adaptation Readiness", description: "Practical preparedness programs at community level." },
    ],
    metrics: ["Coastal resilience", "Disaster readiness", "Water security", "Ecosystem health"],
  },
  {
    slug: "antarctica",
    name: "Antarctica",
    tagline: "Planetary commons, science, and stewardship",
    focus: ["Planetary stewardship", "Science diplomacy", "Long-term monitoring", "Commons governance"],
    signaturePrograms: [
      { title: "Planetary Commons Lab", description: "A platform for neutral scientific cooperation and shared monitoring." },
      { title: "Stewardship Protocols", description: "Frameworks for long-horizon responsibility and coordination." },
    ],
    metrics: ["Monitoring coverage", "Scientific collaboration", "Stewardship compliance", "Commons governance score"],
  },
];
