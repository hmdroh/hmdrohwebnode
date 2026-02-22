import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FileText } from "lucide-react";
import "./rootLayout.css";

type NavItemProps = Readonly<{
  to: string;
  children: React.ReactNode;
  end?: boolean;
}>;

function NavItem({ to, children, end = false }: NavItemProps) {
  return (
    <NavLink to={to} end={end} className={({ isActive }) => `navItem ${isActive ? "navItemActive" : ""}`}>
      {children}
    </NavLink>
  );
}

function GitHubMark(props: Readonly<React.SVGProps<SVGSVGElement>>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M12 2C6.477 2 2 6.58 2 12.235c0 4.52 2.865 8.353 6.839 9.707.5.096.682-.223.682-.494 0-.245-.009-.894-.014-1.755-2.782.621-3.369-1.376-3.369-1.376-.455-1.186-1.11-1.502-1.11-1.502-.907-.635.069-.622.069-.622 1.003.072 1.531 1.06 1.531 1.06.892 1.567 2.341 1.115 2.91.853.092-.666.349-1.115.635-1.371-2.221-.26-4.555-1.142-4.555-5.084 0-1.123.39-2.042 1.029-2.761-.103-.26-.446-1.308.098-2.727 0 0 .84-.276 2.75 1.055A9.1 9.1 0 0 1 12 7.52c.818.004 1.64.114 2.408.334 1.909-1.331 2.748-1.055 2.748-1.055.546 1.419.203 2.467.1 2.727.64.719 1.027 1.638 1.027 2.761 0 3.952-2.338 4.82-4.566 5.074.359.318.679.944.679 1.903 0 1.374-.012 2.482-.012 2.819 0 .274.18.595.688.494 3.97-1.357 6.832-5.187 6.832-9.704C22 6.58 17.523 2 12 2z" />
    </svg>
  );
}

export function RootLayout() {
  return (
    <div className="appShell">
      <header className="header">
        <div className="headerInner">
          <NavItem to="/" end>
            <FileText className="file-text" />
            Engineering Portfolio
          </NavItem>
          <nav className="nav">
            <NavItem to="/blog">Blog</NavItem>
            <a
              className="navIconBtn"
              href="https://github.com/hmdroh/hmdrohwebnode.git"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GitHub repository"
              title="GitHub"
            >
              <GitHubMark aria-hidden="true" focusable="false" />
            </a>
          </nav>
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footerInner">
          <span>© {new Date().getFullYear()} Hamed Rohani</span>
        </div>
      </footer>
    </div>
  );
}

