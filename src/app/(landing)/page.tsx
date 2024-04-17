import {
  authenticateSignOut,
  authenticateSignIn,
} from "@/action/authentificate";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-wrap">
      <div className="flex w-full flex-col bg-white md:w-1/2 lg:w-1/3">
        <div className="flex justify-center pt-12 md:-mb-24 md:justify-start md:pl-12">
          <Link
            href="#"
            className="border-b-4 border-b-blue-700 pb-2 text-2xl font-bold text-gray-900"
          >
            Fridgefy
          </Link>
        </div>
        <div className="my-auto flex flex-col justify-center px-6 pt-8 sm:px-24 md:justify-start md:px-8 md:pt-0 lg:px-12">
          <p className="text-center text-3xl font-bold">Welcome</p>
          <p className="mt-2 text-center">Login to access your account.</p>
          <form
            action={authenticateSignIn}
            className="flex flex-col pt-3 md:pt-8"
          >
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-700 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition ease-in hover:bg-blue-600 focus:outline-none focus:ring-2"
            >
              <span className="w-full"> Login with Github </span>
            </button>
          </form>
        </div>
      </div>
      <div className="pointer-events-none hidden select-none bg-black shadow-2xl md:block md:w-1/2 lg:w-2/3"></div>
    </div>
  );
}
