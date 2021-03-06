export default [
  { href: "/", label: "Home" },
  { href: "/about", label: "About", darknav: true },
  { href: "/expertise", label: "Expertise" },
  { href: "/insight", label: "Insight", darknav: true },
  { href: "/contact", label: "Contact" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});
