"use client";

import { useState , useEffect} from "react";
import IllustrationsPage from "./components/IllustrationsPage"
import UXUIPage from "./components/UXUIPage";
import LogosPage from "./components/LogosPage";
import PrintPage from "./components/PrintPage";

type Page = "illustrations" | "ux-ui" | "logos" | "print";

export default function HomePage() {
  const [activePage, setActivePage] = useState<Page>("illustrations");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const pages = [
    { id: "illustrations", label: "Illustrations" },
    { id: "ux-ui", label: "UX/UI" },
    { id: "logos", label: "Logos" },
    { id: "print", label: "Print" },
  ] as const;

  const renderPage = () => {
    switch (activePage) {
      case "illustrations":
        return <IllustrationsPage />;
      case "ux-ui":
        return <UXUIPage />;
      case "logos":
        return <LogosPage />;
      case "print":
        return <PrintPage />;
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-40 shadow-sm transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}>
        <div className="max-w-6xl mx-auto px-8 py-6">
          <h1 className="text-3xl font-bold text-center mb-6">
            Ahinoam&apos;s Portfolio
          </h1>

          {/* Navigation Bar */}
          <nav className="flex justify-center gap-2 flex-wrap">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => setActivePage(page.id as Page)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${activePage === page.id
                    ? "bg-gray-900 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {page.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <div className="max-w-4xl mx-auto px-8 py-12 mt-[180px]">
        {renderPage()}
      </div>
    </main>
  );
}