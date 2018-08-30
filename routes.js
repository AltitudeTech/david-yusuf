export default [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/expertise", label: "Expertise" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
})
