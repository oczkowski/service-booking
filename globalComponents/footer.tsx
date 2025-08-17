import { env } from "@/env";
import { getYear } from "date-fns";
import Link from "next/link";

type FooterLink = {
  title: string;
  path: string;
};

const footerLinks: FooterLink[] = [
  { title: "For small businesses", path: "/business" },
  { title: "For enterprise", path: "/enterprise" },
  { title: "For Developers", path: "/developers" },
  { title: "Socials", path: "/socials" },
  { title: "Jobs", path: "/jobs" },
  { title: "Business login", path: "/business" },
];

const legalLinks: FooterLink[] = [
  { title: "Terms and conditions", path: "/terms-and-conditions" },
  { title: "Cookies policy", path: "/cookies" },
  { title: "Data retention", path: "/data-retention" },
  { title: "Privacy protection", path: "/privacy-protection" },
  { title: "Cancelation policy", path: "/cancelation-protection" },
];

const Footer = () => {
  return (
    <div className="border-t-white border-2  p-3 grid grid-cols-2">
      {/* Links */}
      <div className="grid grid-cols-1  md:grid-cols-2 gap-0.5">
        {footerLinks.map((link) => {
          return (
            <Link key={link.title} href={link.path}>
              {link.title}
            </Link>
          );
        })}
      </div>
      {/* Legal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 text-right">
        {legalLinks.map((link) => {
          return (
            <Link key={link.title} href={link.path}>
              {link.title}
            </Link>
          );
        })}
      </div>
      {/* Copyright claim */}
      <div className="mt-5 col-span-2">
        &copy; {getYear(new Date())} {env.NEXT_PUBLIC_COMPANY_NAME}. All rights
        reserved.
      </div>
    </div>
  );
};

export default Footer;
