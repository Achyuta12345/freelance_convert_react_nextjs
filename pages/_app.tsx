// pages/_app.tsx

import '../styles/globals.css';  // Import the global CSS here

function MyApp({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}

export default MyApp;
