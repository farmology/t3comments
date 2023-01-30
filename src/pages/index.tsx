import { type NextPage } from "next";
import Head from "next/head";

import CommentSection from "../components/CommentSection";



const Home: NextPage = () => {
  

  return (
    <>
      <Head>
        <title>Nested Comments</title>
        <meta name="description" content="Nested comments made with React & Prisma" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-xl text-white">Post Title</h1>
          <h1 className="text-xl text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, est, accusamus fugiat alias odio earum optio quaerat nisi debitis adipisci ipsum ab exercitationem fuga ratione vero voluptates laborum itaque totam!
          </h1>
          <div>
            <CommentSection />
          </div>
          
        </div>
      </main>
    </>
  );
};

export default Home;
