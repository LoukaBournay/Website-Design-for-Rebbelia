import { Outlet } from "react-router";
import { NavbarDark } from "./NavbarDark";
import { FooterDark } from "./FooterDark";

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9FC] text-[#172033]">
      <NavbarDark />
      <main className="flex-1">
        <Outlet />
      </main>
      <FooterDark />
    </div>
  );
}

