import Head from "next/head";
import Image from "next/image";
import Avatar from "../components/Avatar";
import { ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          {/* Icon*/}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url="/profile.png" />
        </div>
      </header>

      <form className="flex flex-col  items-center mt-44 flex-grow w-4/5">
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          alt="google-logo"
          height={100}
          width={300}
        />
        <div className="flex sm:max-w-xl lg:max-w-2xl px-5 py-3 rounded-full border border-gray-200 w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input type="text" className="flex-grow  focus:outline-none " />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn">Google Search</button>
          <button className="btn">I Feels Excited</button>
        </div>
      </form>

      {/* Footer*/}
      <Footer />
    </div>
  );
}
