import { ReactNode } from "react";
import { NavLink } from "react-router";

export function Heading({ text }: { text: string }) {
  return <h2 className="page-title">{text}</h2>;
}

export function Link({ href, text }: { href: string; text: string }) {
  return (
    <a href={href} className="link-primary">
      {text}
    </a>
  );
}

export function InternalLink({ to, text }: { to: string; text: string }) {
  return (
    <NavLink to={to} className="link-primary">
      {text}
    </NavLink>
  );
}

export function List({ children }: { children: ReactNode }) {
  return (
    <ul className="list-default">
      {children}
    </ul>
  );
}
