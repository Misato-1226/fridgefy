import Link from "next/link";
import { authenticateSignOut } from "@/action/authenticate";

const Header = () => {
  return (
    <div className="flex justify-between p-7">
      <Link href="/recipes" className="text-4xl">
        Fridgefy
      </Link>
      <div>
        <Link href="/recipes" className="p-2 underline">
          Recipes
        </Link>
        <Link href="/shopping_list" className="p-2 underline">
          Shopping List
        </Link>
      </div>
      <form action={authenticateSignOut}>
        <button
          type="submit"
          className="py-2.5 px-6 rounded-lg text-sm font-medium bg-lime-300 text-teal-800"
        >
          Logout
        </button>
      </form>
    </div>
  );
};

export default Header;
