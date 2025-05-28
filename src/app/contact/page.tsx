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
import { useState } from "react";

const cairoArabic = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600"],
  variable: "--font-cairo-arabic",
});

export default function Contact() {
  const pathname = usePathname();

  // State for form fields (optional if you want to handle inputs)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Simple handler for form change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit handler (currently just prevents default submit and logs data)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add form submission logic here (API call, email, etc)
    alert("Form submitted! Data: " + JSON.stringify(formData, null, 2));
  };

  return (
    <body className={`bg-[#01003D] text-white ${cairoArabic.variable} font-sans`}>
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

      <main className="max-w-3xl mx-auto p-8 mt-8 bg-white/5 border border-white/20 rounded-xl backdrop-blur-sm">
       {/* <div className="absolute top-72  left-245 w-100 h-100 bg-white opacity-15 blur-3xl rounded-full -z-20" /> */}
        <h1 className="text-3xl font-bold mb-6 text-white">تواصل معنا</h1>
        <p className="mb-8 text-white/80">
          يمكنك مراسلتنا لأي استفسارات أو دعم. نحن هنا لمساعدتك!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-white font-semibold"
            >
              الاسم
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-[#01003D] border border-white/40 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/70"
              placeholder="ادخل اسمك"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-white font-semibold"
            >
              البريد الإلكتروني
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-[#01003D] border border-white/40 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/70"
              placeholder="ادخل بريدك الإلكتروني"
            />
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-white font-semibold"
            >
              الموضوع
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-[#01003D] border border-white/40 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/70"
              placeholder="ادخل موضوع الرسالة"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-white font-semibold"
            >
              الرسالة
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-[#01003D] border border-white/40 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/70 resize-none"
              placeholder="اكتب رسالتك هنا"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-white/20 hover:bg-white/40 text-white font-semibold rounded-md transition cursor-pointer"
          >
            إرسال
          </button>
          
        </form>
      </main>
    </body>
  );
}
