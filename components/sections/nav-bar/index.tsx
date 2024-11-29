import Link from "next/link";
import { navigation } from "@/constants/navigation";
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
        {navigation.map((item) => (
          <li key={item.id}>
            <Link
              className="text-sm font-medium cursor-pointer"
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
