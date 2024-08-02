// /components/NextBreadcrumb.tsx
"use client";

import React, { ReactNode } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs, Box, useTheme } from "@mui/material";

type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};

export const Breadcrumb = ({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
}: TBreadCrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  const theme = useTheme();
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <li className={listClasses}>
          <Link
            href={"/"}
            style={{
              textDecoration: "none",
              color: theme.palette.textSecondary,
            }}
          >
            {homeElement}
          </Link>
        </li>
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;
          let itemClasses =
            paths === href ? `${listClasses} ${activeClasses}` : listClasses;
          let itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link;
          return (
            <Link
              key={index}
              href={href}
              style={{
                textDecoration: "none",
                color: theme.palette.textSecondary,
              }}
            >
              {itemLink}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};
