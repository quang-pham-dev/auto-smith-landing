import Link from "next/link";
import { navbarLinks } from "@/constants/navbar-links";
import { scrollToSection } from "@/lib/utils";

export default function NavBar() {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const sectionId = href.replace("/", "");
    scrollToSection(sectionId);
  };

  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-4">
        {navbarLinks.map((item) => (
          <li key={item.id}>
            <Link
              className="text-sm font-medium cursor-pointer"
              href="#"
              onClick={(e) => handleClick(e, item.id)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
