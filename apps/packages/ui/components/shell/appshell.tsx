import * as React from "react";

import { Header } from "./header";
import { Footer } from "./footer";

interface AppShellProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AppShell = ({ children }: AppShellProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
