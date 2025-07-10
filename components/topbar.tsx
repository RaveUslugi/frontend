import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";
import { Button } from "./ui/button";

const links = [
  { path: "/services", label: "Услуги" },
  { path: "/documents", label: "Документы" },
  { path: "/orders", label: "Заявления" },
  { path: "/payments", label: "Платежи" },
  { path: "/support", label: "Помощь" },
];

export function Topbar(): ReactElement {
  return (
    <header
      className={cn(
        "bg-background sticky top-0 right-0 left-0 z-10 flex h-16 items-center gap-8 border-b px-4 sm:px-8 md:px-20 lg:px-40 xl:px-80",
      )}
    >
      <Link href="/">
        <Image
          src="images/raveuslugi.svg"
          alt="Логотип портала Рейвуслуги"
          width="124"
          height="22"
        ></Image>
      </Link>
      <nav className="ml-auto flex gap-6">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.path}
            className="text-accent-foreground font-medium"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <Link href="/login">
        <Button variant="secondary">Войти</Button>
      </Link>
    </header>
  );
}
