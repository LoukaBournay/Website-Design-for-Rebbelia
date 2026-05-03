import { Outlet } from "react-router";
import { NavbarDark } from "./NavbarDark";
import { FooterDark } from "./FooterDark";

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050d1f] text-white">
      <NavbarDark />
      <main className="flex-1">
        <Outlet />
      </main>
      <FooterDark />
    </div>
  );
}
