// components/Link.tsx
import React, { AnchorHTMLAttributes, ReactNode } from "react";
import NextLink from "next/link";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

export const Link: React.FC<LinkProps> = ({ href, children, ...props }) => (
  <NextLink href={href} passHref>
    <a {...props}>{children}</a>
  </NextLink>
);
