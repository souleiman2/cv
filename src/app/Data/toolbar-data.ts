export const sections_en: Array<SectionItem> = [
  { label: "About", url: "#about" },
  { label: "Experience", url: "#xp" },
  { label: "Projects", url: "#projects" },
  { label: "Skills", url: "#skills" },
  { label: "Contact", url: "#contact" },
];

export const sections_fr: Array<SectionItem> = [
  { label: "Sommaire", url: "#about" },
  { label: "Expérience", url: "#xp" },
  { label: "Projets", url: "#projects" },
  { label: "Connaissances", url: "#skills" },
  { label: "Me contacter", url: "#contact" },
];

export interface SectionItem {
  label: string;
  url: string;
}
