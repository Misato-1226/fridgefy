import {
  authenticateSignOut,
  authenticateSignIn,
} from "@/action/authentificate";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link
        href="#"
        className="border-b-4 border-b-blue-700 pb-2 text-2xl font-bold text-gray-900"
      >
        Fridgefy
      </Link>

      <div className="my-auto flex flex-col justify-center px-6 pt-8 sm:px-24 md:justify-start md:px-8 md:pt-0 lg:px-12">
        <p className="text-center text-3xl font-bold">Welcome</p>
        <p className="mt-2 text-center">Login to access your account.</p>
        <form
          action={authenticateSignIn}
          className="flex flex-col pt-3 md:pt-8"
        >
          <button
            type="submit"
            className="rounded-lg bg-blue-700 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition ease-in hover:bg-blue-600 focus:outline-none focus:ring-2"
          >
            <span className="w-full"> Login with Github </span>
          </button>
        </form>
      </div>
    </>
  );
}
