import Header from "@/components/global/Header";
import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <div className="md:pt-[120px] pt-[90px] h-screen backdrop-blur-xl">
          <div className="wrapper">
            <Main />
          </div>
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
