export default [
  { href: "/", label: "Home" },
  { href: "/about", label: "About", darknav: true },
  { href: "/expertise", label: "Expertise" },
  { href: "/faith", label: "Faith", darknav: true },
  { href: "/contact", label: "Contact" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
})
