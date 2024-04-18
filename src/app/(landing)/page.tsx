import {
  authenticateSignOut,
  authenticateSignIn,
} from "@/action/authentificate";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat flex justify-center items-center h-screen"
      id="background-image"
    >
      <div className="flex flex-col items-center">
        <p className="text-center text-5xl font-bold text-white">Fridgefy</p>
        <p className="my-6 text-lg text-center text-white">
          sign in to your account to access all the delicious recipes
        </p>
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
    </div>
  );
}
