import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { HomeNew } from "./pages/HomeNew";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import { Testimonials } from "./pages/Testimonials";
import { Contact } from "./pages/Contact";
import { FAQ } from "./pages/FAQ";
import { Legal } from "./pages/Legal";
import GoogleOAuth from "./pages/googlePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomeNew },
      { path: "services", Component: Services },
      { path: "about", Component: About },
      { path: "testimonials", Component: Testimonials },
      { path: "contact", Component: Contact },
      { path: "faq", Component: FAQ },
      { path: "legal", Component: Legal },
      { path: "googleConnection", Component: GoogleOAuth },
    ],
  },
]);
