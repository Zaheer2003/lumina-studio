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
import Image from "next/image";

const cairoArabic = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600"],
  variable: "--font-cairo-arabic",
});

export default function Home() {
  const pathname = usePathname();

  return (
    <body className={`bg-[#01003D] text-white ${cairoArabic.variable} font-sans`}
    >
      <header className="w-full py-4 px-6 shadow-sm bg-[#01003D] text-white border-b border-white/10">
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
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
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
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink
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
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink
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

  <main className="relative max-w-7xl mx-auto p-6 text-white">
  {/* White Glow - Bottom Right */}




  {/* Content Wrapper */}
  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
    {/* Right side - Arabic text and buttons */}
    <div className="w-full md:w-1/2 text-right md:text-left">
      <h2 className="text-4xl font-bold mb-2">مرحبًا بكم في لوميرا ستوديو</h2>
      <p className="text-2xl mb-4 text-muted-foreground">نحن نصنع تجارب رقمية مذهلة لمستقبل مشرق.</p>

      <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-start">
        <Link href={"/about"}>
        <button className="bg-purple-600 text-[#01003D] font-semibold px-6 py-2 rounded hover:bg-gray-200 transition cursor-pointer">
          اكتشف المزيد
        </button>
        </Link>
        <Link href={"/contact"}>
        <button className="bg-transparent border cursor-pointer border-purple-600 text-white font-semibold px-6 py-2 rounded hover:bg-white hover:text-[#01003D] transition">
          تواصل معنا
        </button>
        </Link>
      </div>
    </div>

    {/* Left side - 3D Image */}
    <div className="w-full md:w-1/2 flex justify-center">
      <div className="absolute top-62 -right-35 w-100 h-100 bg-white opacity-15 blur-3xl rounded-full -z-20" />

      <Image
        src="/contact.webp"
        alt="3D Graphic"
        width={500}
        height={500}
        className="object-contain"
      />
    </div>
  </div>
</main>


    </body>
  );
}
