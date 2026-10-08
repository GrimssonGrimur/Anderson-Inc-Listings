import type { ReactNode } from "react";
import "../../webflow/css/global.css";
import "./devlink-overrides.css";
import { DevLinkProvider } from "../../webflow/DevLinkProvider";
import { Navigation } from "../../webflow/Navigation";
import { Footer } from "../../webflow/Footer";

type DevLinkLayoutProps = {
  children: ReactNode;
};

export default function DevLinkLayout({ children }: DevLinkLayoutProps) {
  return (
    <DevLinkProvider>
      <Navigation />
      {children}
      <Footer />
    </DevLinkProvider>
  );
}
