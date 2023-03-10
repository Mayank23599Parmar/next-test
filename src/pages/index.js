import Head from "next/head";
import UserRegistration from "@/components/UserRegistration";

export default function Home() {
  return (
    <>
      <Head>
        <title>Registration</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="main ">
        <UserRegistration />
      </main>
    </>
  );
}
