"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cairo } from "next/font/google";

const cairoArabic = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600"],
  variable: "--font-cairo-arabic",
});

export default function About() {
  const pathname = usePathname();

  return (
    <div className={`bg-[#01003D] text-white min-h-screen ${cairoArabic.variable} font-sans`}>
      <header className="w-full p-4 shadow-sm bg-[#01003D] text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            
          {/* Company Name with Arabic above */}
          <div className="flex flex-col leading-tight">
            <div className="absolute bottom-160 left-30 w-200 h-100 bg-white opacity-20 blur-3xl rounded-full z-20" />
            
            <span className="text-2xl text-gray-300 font-[var(--font-cairo-arabic)]">
              لوميرا ستوديو
            </span>
            <span className="text-2xl font-bold">Lumira Studio</span>
          </div>

          {/* Navigation */}
          <NavigationMenu>
            <NavigationMenuList className="flex items-center space-x-0">
              {/* Home */}
              <NavigationMenuItem>
                <Link href="/" passHref>
                  <NavigationMenuLink
                    aria-current={pathname === "/" ? "page" : undefined}
                    className={`px-4 py-2 text-lg rounded-md transition-all duration-300 ${
                      pathname === "/"
                        ? "bg-purple-600 text-white font-semibold shadow"
                        : "text-white hover:text-purple-300 hover:bg-white/10"
                    }`}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <div className="h-6 w-[3px] bg-white/40 mx-3 rounded" />

              {/* About */}
              <NavigationMenuItem>
                <Link href="/about" passHref>
                  <NavigationMenuLink
                    aria-current={pathname === "/about" ? "page" : undefined}
                    className={`px-4 py-2 text-lg rounded-md transition-all duration-300 ${
                      pathname === "/about"
                        ? "bg-purple-600 text-white font-semibold shadow"
                        : "text-white hover:text-purple-300 hover:bg-white/10"
                    }`}
                  >
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <div className="h-6 w-[3px] bg-white/40 mx-3 rounded" />

              {/* Contact */}
              <NavigationMenuItem>
                <Link href="/contact" passHref>
                  <NavigationMenuLink
                    aria-current={pathname === "/contact" ? "page" : undefined}
                    className={`px-4 py-2 text-lg rounded-md transition-all duration-300 ${
                      pathname === "/contact"
                        ? "bg-purple-600 text-white font-semibold shadow"
                        : "text-white hover:text-purple-300 hover:bg-white/10"
                    }`}
                  >
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-8 mt-8 bg-white/5 border border-white/20 rounded-xl backdrop-blur-sm text-white">
       {/* <div className="absolute top-72  left-245 w-100 h-100 bg-white opacity-15 blur-3xl rounded-full -z-20" /> */}
        <h1 className="text-4xl font-bold mb-8">عن لوميرا ستوديو</h1>

        <p className="mb-8 text-white/80 leading-relaxed font-[var(--font-cairo-arabic)] text-lg text-justify">
          لوميرا ستوديو هي شركة متخصصة في تطوير حلول رقمية مبتكرة تدمج بين التصميم العصري والتقنيات الحديثة. نحن نسعى لتقديم أفضل الخدمات الرقمية لعملائنا من خلال فريق محترف وخبرة واسعة في المجال.
        </p>



        <div className="grid md:grid-cols-3 gap-8">
          {/* Vision Card */}
          <div className="bg-white/10 rounded-lg p-6 shadow-lg backdrop-blur-md border border-white/20">
            <h2 className="flex items-center text-2xl font-semibold mb-4">
              {/* Eye icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-white/80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              رؤيتنا
            </h2>
            <p className="mb-4 font-[var(--font-cairo-arabic)] leading-relaxed text-white/80 text-lg text-justify">
              أن نكون روادًا في تقديم الحلول الرقمية المبتكرة التي تُحدث فرقًا حقيقيًا في حياة عملائنا.
            </p>

          </div>

          {/* Aim Card */}
          <div className="bg-white/10 rounded-lg p-6 shadow-lg backdrop-blur-md border border-white/20">
            <h2 className="flex items-center text-2xl font-semibold mb-4">
              {/* Target icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-white/80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
              </svg>
              هدفنا
            </h2>
            <p className="mb-4 font-[var(--font-cairo-arabic)] leading-relaxed text-white/80 text-lg text-justify">
              تقديم حلول رقمية مبتكرة تساعد عملائنا على النمو وتحقيق أهداف أعمالهم بفعالية.
            </p>
            
          </div>

          {/* Objective Card */}
          <div className="bg-white/10 rounded-lg p-6 shadow-lg backdrop-blur-md border border-white/20">
            <h2 className="flex items-center text-2xl font-semibold mb-4">
              {/* Check icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-white/80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              أهدافنا
            </h2>
            <p className="mb-4 font-[var(--font-cairo-arabic)] leading-relaxed text-white/80 text-lg text-justify">
              بناء علاقات مستدامة مع عملائنا من خلال تقديم خدمات عالية الجودة ودعم مستمر.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
