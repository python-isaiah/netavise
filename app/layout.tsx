import "./globals.css";
import type { Metadata } from "next";
import { ModalProvider } from "./context/ModalContext";
import AuditModal from "./components/AuditModal";
import SidePanel from "./components/SidePanel";
import RouteResetGuard from "./components/RouteResetGuard";

export const metadata: Metadata = {
  title: "Netavise | Digital Services for Local Business",
  description: "We give great local businesses a digital presence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-28">
      <body className="bg-[#050505] text-white antialiased">
        <RouteResetGuard />
        <ModalProvider>
          {children}
          <AuditModal />
          <SidePanel />
        </ModalProvider>
      </body>
    </html>
  );
}