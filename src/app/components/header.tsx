import Link from "next/link";

const Header = () => {
  return (
    <>
      <Link href="/">fridgefy</Link>
      <div>
        <Link href="/">Home</Link>
        <Link href="/recipes">Recipes</Link>
        <Link href="/shopping_list">Shopping List</Link>
      </div>
      <p>Login</p>
    </>
  );
};

export default Header;
