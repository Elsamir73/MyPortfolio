// Central site data — single source of truth for personal details.
// BASE_URL resolves to "/MyPortfolio" (or "/MyPortfolio/" depending on the
// Vite version) on GitHub Pages and "/" in dev, so we normalize it to always
// end with a slash before joining the CV filename.
const base = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export const site = {
  name: "Samir Pathak",
  role: "Frontend Developer",
  email: "shuzhal777@gmail.com",
  location: "Kathmandu, Nepal",
  github: "https://github.com/Elsamir73",
  linkedin: "https://www.linkedin.com/in/samir-pathak7",
  cv: `${base}SAMIR_PATHAK_CV.pdf`,
};
