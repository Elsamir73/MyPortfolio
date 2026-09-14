import { useState } from "react";
import { site } from "../../data/site";
import styles from "./Header.module.css";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a
          href="#home"
          className={styles.brand}
          onClick={() => setOpen(false)}
        >
          {site.name}
        </a>
        <nav className={styles.nav} aria-label="Primary">
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.toggleBar} />
            <span className={styles.toggleBar} />
            <span className={styles.toggleBar} />
            <span className="visually-hidden">Toggle menu</span>
          </button>
          <ul
            id="site-menu"
            className={`${styles.menu} ${open ? styles.menuOpen : ""}`}
          >
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
