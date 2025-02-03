export const bgImageUrl: string =
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
// export const bgImageUrl: string ="https://plus.unsplash.com/premium_photo-1670963025018-27dd11a9b0ce?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// interface NavItem {
//   id: number;
//   title: string;
//   path: string;
// }

// export const navBar: NavItem[] = [
//   { id: 1, title: "Home", path: "/" },
//   { id: 2, title: "About", path: "about" },
//   { id: 3, title: "Projects", path: "projects" },
//   { id: 4, title: "Skills", path: "/about/skills" },
//   { id: 5, title: "Resume", path: "resume" },
//   { id: 6, title: "Contact", path: "contact" },
//   { id: 7, title: "GitHub", path: "github" },
//   { id: 8, title: "Linkedin", path: "linkedin" },
// ];

interface NavItem {
  label: string;
  href?: string; // Optional for dropdowns
  subItems?: NavItem[]; // Sub-items for dropdowns
}
