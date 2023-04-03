import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* favicon */}
        <link rel="shortcut icon" href="/images/icon.svg" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/icon.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
