"use client";
import useAnimatedRouter from "@/hooks/useAnimatedRouter";
import Link from "next/link";
import React from "react";

interface Props {
  children: string;
  href: string;
  className?: string;
}

export default function AnimatedLink({ children, href, className }: Props) {
  const { animatedRoute } = useAnimatedRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        animatedRoute(href);
      }}
      passHref
      className={className}
    >
      {children}
    </Link>
  );
}
