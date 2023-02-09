import "ui/styles/global.css";

import { AppShell } from "ui";
import "ui/styles/global.css"

import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </div>
  );
}

export default App;
