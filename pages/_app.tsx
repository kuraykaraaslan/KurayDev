import "../styles/globals.css";

import { MyAppProps } from "../components/common/types";
import { Layouts } from "../components/common/layouts";
import { Suspense } from 'react'


function MyApp({ Component, pageProps }: MyAppProps) {
  const Layout = Layouts[Component.Layout] || Layouts.Main;

  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
      <Component {...pageProps} />
      </Suspense>
    </Layout>
  );
}

export default MyApp;